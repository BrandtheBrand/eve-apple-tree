import { test } from "node:test";
import assert from "node:assert/strict";
import { layoutPool, SEED_GAP, forestPoolPlacement, GROUND_FOOTPRINT_R, TREE_SPAN, treePoolPlacement, POOL_TREE_R_IN, ROLE } from "../src/layout.ts";

test("every seed lands inside the pool's annulus", () => {
  const { slots, rIn, rOut } = layoutPool(12, 1.5, 3.2, 0.06);
  assert.equal(slots.length, 12);
  for (const s of slots) {
    const r = Math.hypot(s.x, s.z);
    assert.ok(r >= rIn - 1e-9, `seed at r=${r.toFixed(3)} is inside the inner radius ${rIn}`);
    assert.ok(r <= rOut + 1e-9, `seed at r=${r.toFixed(3)} is outside the outer radius ${rOut}`);
    assert.equal(s.y, 0.06);
  }
  assert.ok(SEED_GAP > 0);
});

/** Smallest centre-to-centre distance between any two slots. */
function minGap(slots: { x: number; z: number }[]): number {
  let m = Infinity;
  for (let i = 0; i < slots.length; i++)
    for (let j = i + 1; j < slots.length; j++)
      m = Math.min(m, Math.hypot(slots[i].x - slots[j].x, slots[i].z - slots[j].z));
  return m;
}

test("grows the outer radius until crowded seeds clear SEED_GAP", () => {
  const wanted = 3.2;
  const { slots, rOut } = layoutPool(400, 1.5, wanted, 0.06);
  assert.ok(rOut > wanted, `pool should have grown past ${wanted}, got ${rOut}`);
  assert.ok(minGap(slots) >= SEED_GAP, `min gap ${minGap(slots).toFixed(3)} < SEED_GAP ${SEED_GAP}`);
});

test("an empty pool lays out to nothing and keeps its wanted radius", () => {
  const { slots, rOut } = layoutPool(0, 1.5, 3.2, 0.06);
  assert.deepEqual(slots, []);
  assert.equal(rOut, 3.2);
});

test("the min-gap oracle rejects a layout that really does overlap", () => {
  // negative control: if this passes, every gap assertion above is worthless
  const overlapping = [{ x: 0, z: 0 }, { x: 0.1, z: 0 }, { x: 5, z: 5 }];
  assert.ok(minGap(overlapping) < SEED_GAP, "oracle failed to catch a 0.1 overlap");
  const clear = [{ x: 0, z: 0 }, { x: 1, z: 0 }, { x: 5, z: 5 }];
  assert.ok(minGap(clear) >= SEED_GAP, "oracle wrongly flagged a clear layout");
});

/** Does a disc overlap any tree's ground-level canopy footprint? */
function discHitsATree(c: { x: number; z: number }, r: number, origins: { x: number; z: number }[]): boolean {
  return origins.some((o) => Math.hypot(o.x - c.x, o.z - c.z) < r + GROUND_FOOTPRINT_R);
}

const rowOf = (n: number) =>
  Array.from({ length: n }, (_, i) => ({ x: (i - (n - 1) / 2) * TREE_SPAN, z: 0 }));

test("the forest pool never lands on a tree, at any forest size or seed count", () => {
  for (const trees of [1, 2, 5, 10, 30]) {
    for (const seeds of [1, 12, 200, 900]) {
      const origins = rowOf(trees);
      const p = forestPoolPlacement(seeds, origins);
      assert.ok(!discHitsATree(p, p.r, origins),
        `pool r=${p.r.toFixed(2)} at (${p.x.toFixed(1)},${p.z.toFixed(1)}) hits a tree — ${trees} trees, ${seeds} seeds`);
    }
  }
});

test("the clearance oracle rejects a disc that really is on top of a tree", () => {
  // negative control
  const origins = rowOf(3);
  assert.ok(discHitsATree({ x: 0, z: 0 }, 1, origins), "oracle missed a disc sitting on the centre tree");
  assert.ok(!discHitsATree({ x: 0, z: 200 }, 1, origins), "oracle wrongly flagged a far-away disc");
});

test("a tree-foot pool can never grow wide enough to touch the next tree", () => {
  const limit = TREE_SPAN / 2;
  for (const seeds of [1, 8, 60, 400, 5000]) {
    const { rOut } = treePoolPlacement(seeds);
    assert.ok(rOut < limit, `${seeds} seeds grew the foot pool to ${rOut.toFixed(2)}, past the ${limit} half-span`);
  }
});

test("a tree-foot pool never covers the root dot", () => {
  assert.ok(POOL_TREE_R_IN > ROLE.root.r, `pool inner radius ${POOL_TREE_R_IN} sits on the root dot (r ${ROLE.root.r})`);
  const { slots } = treePoolPlacement(40);
  for (const s of slots) assert.ok(Math.hypot(s.x, s.z) > ROLE.root.r, "a seed landed on the root dot");
});

test("foot-pool seeds clear SEED_GAP up to the pool's stated capacity", () => {
  for (const seeds of [3, 40, 150]) {
    const { slots } = treePoolPlacement(seeds);
    assert.ok(minGap(slots) >= SEED_GAP, `${seeds} seeds: min gap ${minGap(slots).toFixed(3)}`);
  }
});

test("past capacity the foot pool crowds rather than growing into the next tree", () => {
  // ~150 pending sub-topics on ONE tree is the documented ceiling; beyond it the half-span cap
  // deliberately wins over the seed gap, because two trees sharing a pool is the worse lie.
  const { slots, rOut } = treePoolPlacement(400);
  assert.ok(rOut < TREE_SPAN / 2, `the pool grew to ${rOut.toFixed(2)}, past the ${TREE_SPAN / 2} half-span`);
  assert.ok(minGap(slots) < SEED_GAP, "capacity was not actually exceeded — pick a bigger count for this test");
});

const centroid = (o: { x: number; z: number }[]) => ({
  x: o.reduce((a, p) => a + p.x, 0) / o.length, z: o.reduce((a, p) => a + p.z, 0) / o.length,
});

test("the forest pool sits in the middle of the forest, not off its far edge", () => {
  // the real vault: trees dragged far apart, with open ground in the middle
  const spread = [
    { x: -64, z: 0 }, { x: -27, z: -135 }, { x: -32, z: 0 }, { x: 28, z: -146 }, { x: -55, z: 100 },
    { x: 62, z: -100 }, { x: 0, z: 66 }, { x: 277, z: -338 }, { x: 180, z: -105 },
  ];
  const c = centroid(spread);
  const p = forestPoolPlacement(17, spread);
  assert.ok(!discHitsATree(p, p.r, spread), "the pool landed on a tree");
  const drift = Math.hypot(p.x - c.x, p.z - c.z);
  assert.ok(drift < 40, `the pool sits ${drift.toFixed(0)} units from the middle of the forest — it has to be hunted for`);
});

test("with no room in the middle the pool steps aside only as far as it must", () => {
  const row = rowOf(10);
  const c = centroid(row);
  const p = forestPoolPlacement(20, row);
  assert.ok(!discHitsATree(p, p.r, row), "the pool landed on a tree");
  // it cannot sit ON the centre tree, but it must not wander to the end of the row either
  const drift = Math.hypot(p.x - c.x, p.z - c.z);
  assert.ok(drift < p.r + GROUND_FOOTPRINT_R + 12, `the pool drifted ${drift.toFixed(0)} units to find space`);
});
