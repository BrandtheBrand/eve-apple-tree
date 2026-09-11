import { test } from "node:test";
import assert from "node:assert/strict";
import { autoOrigins, swapTargetAt, pickNonOverlapping, GROUND_FOOTPRINT_R, TREE_SPAN } from "../src/layout.ts";

const B = (from: string, to: string) => ({ from, to });

test("a tree is placed wherever it was dropped, not snapped somewhere else", () => {
  const placed = autoOrigins(["a", "b"], { a: { x: 137.5, z: -62.25 } }, [], 17);
  assert.deepEqual(placed.a, { x: 137.5, z: -62.25 }, "a hand-placed tree was moved by the layout");
});

test("one hand-placed tree does not disable grouping for the rest", () => {
  // the real bug: dragging 資治通鑑 once made 美學 lose its bridge partner
  const ids = ["資治通鑑", "美學", "Muji", "ETH"];
  const placed = autoOrigins(ids, { "資治通鑑": { x: 40, z: 40 } }, [B("資治通鑑", "美學")], 17);
  const d = Math.hypot(placed["美學"].x - placed["資治通鑑"].x, placed["美學"].z - placed["資治通鑑"].z);
  assert.ok(d <= TREE_SPAN * 1.6, `bridged trees ended up ${d.toFixed(0)} apart (span ${TREE_SPAN})`);
});

test("an auto tree bridged to a hand-placed one is placed beside it", () => {
  const placed = autoOrigins(["far", "near", "x", "y", "z"], { far: { x: -120, z: 95 } }, [B("far", "near")], 17);
  const d = Math.hypot(placed.near.x - placed.far.x, placed.near.z - placed.far.z);
  assert.ok(d <= TREE_SPAN * 1.6, `the bridged tree sat ${d.toFixed(0)} from its hand-placed partner`);
});

test("auto trees never stand on top of a hand-placed one", () => {
  const hand = { H: { x: 0, z: -32 } };
  const placed = autoOrigins(["H", "a", "b", "c", "d", "e", "f"], hand, [], 17);
  for (const [id, p] of Object.entries(placed)) {
    if (id === "H") continue;
    assert.ok(Math.hypot(p.x - hand.H.x, p.z - hand.H.z) >= GROUND_FOOTPRINT_R * 2,
      `${id} was placed inside the hand-placed tree`);
  }
});

test("dropping on empty ground swaps with nothing", () => {
  const trees = [{ id: "a", origin: { x: 0, z: 0 } }, { id: "b", origin: { x: 64, z: 0 } }];
  assert.equal(swapTargetAt(200, 200, "a", trees), null);
});

test("dropping onto another tree picks it as the swap partner", () => {
  const trees = [{ id: "a", origin: { x: 0, z: 0 } }, { id: "b", origin: { x: 64, z: 0 } }];
  assert.equal(swapTargetAt(66, 2, "a", trees)?.id, "b");
  assert.equal(swapTargetAt(66, 2, "b", trees), null, "a tree was offered a swap with itself");
});

test("labels that would sit on top of each other are thinned, nearest kept", () => {
  const items = [
    { id: "near", sx: 100, sy: 100, dist: 10 },
    { id: "far", sx: 104, sy: 102, dist: 90 },   // overlaps "near"
    { id: "clear", sx: 400, sy: 100, dist: 50 },
  ];
  const kept = pickNonOverlapping(items, 60).map((i) => i.id);
  assert.deepEqual(kept.sort(), ["clear", "near"], "the overlapping far label was not dropped");
});
