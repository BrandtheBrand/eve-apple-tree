import { test } from "node:test";
import assert from "node:assert/strict";
import { gridOrigins, nearestCellIndex, linkGroupedOrder, resolveTreeOrder, treeGroups, arrangeOnCells, TREE_SPAN } from "../src/layout.ts";

const ids = (n: number) => Array.from({ length: n }, (_, i) => "t" + i);

test("a dropped tree always lands on a cell, never between them", () => {
  const cells = gridOrigins(9, 17);
  for (const [x, z] of [[0, 0], [5, -3], [999, 999], [-40, 12], [-1e6, 4]] as [number, number][]) {
    const i = nearestCellIndex(x, z, cells);
    assert.ok(i >= 0 && i < cells.length, `drop at (${x},${z}) found no cell`);
  }
});

test("a drop picks the cell it is actually nearest to", () => {
  const cells = gridOrigins(9, 17);
  cells.forEach((c, i) => {
    assert.equal(nearestCellIndex(c.x + 1, c.z - 1, cells), i, `a drop beside cell ${i} chose another cell`);
  });
});

test("dragging a tree far away cannot take it off the grid", () => {
  const cells = gridOrigins(9, 17);
  const reach = Math.max(...cells.map((c) => Math.hypot(c.x, c.z)));
  const c = cells[nearestCellIndex(50_000, -50_000, cells)];
  assert.ok(Math.hypot(c.x, c.z) <= reach + 1e-9, "a tree escaped the grid");
});

test("bridged trees are ordered together, so they get neighbouring cells", () => {
  const bridges = [{ from: "t7", to: "t0" }, { from: "t5", to: "t7" }];
  const order = linkGroupedOrder(ids(9), bridges);
  assert.equal(order.length, 9);
  assert.deepEqual([...order].sort(), ids(9).sort(), "the order lost or invented a tree");
  const pos = (id: string) => order.indexOf(id);
  for (const [a, b] of [["t0", "t7"], ["t5", "t7"]])
    assert.ok(Math.abs(pos(a) - pos(b)) <= 2, `${a} and ${b} are linked but sit ${Math.abs(pos(a) - pos(b))} apart in the order`);
});

test("linked trees actually end up near each other on the ground", () => {
  for (const n of [4, 9, 16, 25]) {
    const cells = gridOrigins(n, 17);
    const bridges = [{ from: "t" + (n - 1), to: "t3" }, { from: "t3", to: "t2" }];
    const placed = arrangeOnCells(treeGroups(ids(n), bridges), cells);
    const at = (id: string) => cells[placed.indexOf(id)];
    for (const [a, b] of [["t" + (n - 1), "t3"], ["t3", "t2"]]) {
      const d = Math.hypot(at(a).x - at(b).x, at(a).z - at(b).z);
      assert.ok(d <= TREE_SPAN * 1.6,
        `${n} trees: bridged ${a}/${b} stand ${d.toFixed(0)} apart (span ${TREE_SPAN})`);
    }
  }
});

test("every tree gets exactly one cell and no cell gets two trees", () => {
  for (const n of [1, 4, 9, 25]) {
    const cells = gridOrigins(n, 17);
    const placed = arrangeOnCells(treeGroups(ids(n), [{ from: "t0", to: "t1" }]), cells);
    assert.equal(placed.length, cells.length);
    const filled = placed.filter((x): x is string => x !== null);
    assert.equal(new Set(filled).size, n, `${n} trees: a tree was placed twice or lost`);
  }
});

test("a saved order survives a tree being added or removed", () => {
  const saved = ["t2", "t0", "t1"];
  const grown = resolveTreeOrder(["t0", "t1", "t2", "t3"], saved, []);
  assert.deepEqual(grown.slice(0, 3), saved, "the saved arrangement was thrown away when a tree appeared");
  assert.ok(grown.includes("t3"), "the new tree got no cell");
  const shrunk = resolveTreeOrder(["t0", "t2"], saved, []);
  assert.deepEqual(shrunk, ["t2", "t0"], "removing a tree scrambled the rest");
});

test("with nothing saved, the order is the link-grouped one", () => {
  const bridges = [{ from: "t4", to: "t1" }];
  assert.deepEqual(resolveTreeOrder(ids(5), undefined, bridges), linkGroupedOrder(ids(5), bridges));
});

test("a saved arrangement is never quietly re-grouped", () => {
  const saved = ["t2", "t0", "t1", "t3"];
  const cells = gridOrigins(4, 17);
  assert.deepEqual(resolveTreeOrder(ids(4), saved, [{ from: "t0", to: "t3" }], cells), saved);
});
