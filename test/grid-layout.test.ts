import { test } from "node:test";
import assert from "node:assert/strict";
import { gridOrigins, forestPoolPlacement, GROUND_FOOTPRINT_R, TREE_SPAN, POOL_FOREST_R_MIN } from "../src/layout.ts";

const centroid = (o: { x: number; z: number }[]) =>
  ({ x: o.reduce((a, p) => a + p.x, 0) / o.length, z: o.reduce((a, p) => a + p.z, 0) / o.length });

test("trees lay out as a grid, never as a row", () => {
  for (const n of [4, 9, 16, 25, 36]) {
    const o = gridOrigins(n, 20);
    assert.equal(o.length, n);
    const rows = new Set(o.map((p) => p.z.toFixed(3))), cols = new Set(o.map((p) => p.x.toFixed(3)));
    assert.ok(rows.size > 1, `${n} trees came out on a single row`);
    assert.ok(cols.size > 1, `${n} trees came out on a single column`);
    // roughly square: neither side more than twice the other
    assert.ok(Math.max(rows.size, cols.size) <= 2 * Math.min(rows.size, cols.size),
      `${n} trees: ${cols.size}x${rows.size} is not a checker layout`);
  }
});

test("the grid grows a ring at a time instead of stretching", () => {
  let prev = 0;
  for (const n of [1, 4, 9, 16, 25, 36, 49]) {
    const o = gridOrigins(n, 20);
    const extent = Math.max(...o.map((p) => Math.max(Math.abs(p.x), Math.abs(p.z))));
    assert.ok(extent >= prev, `${n} trees shrank the forest`);
    prev = extent;
  }
});

test("the seed pool always sits at the exact middle of an auto-arranged forest", () => {
  // the middle of a grid is its origin — with one or two trees that is NOT their centroid, and the
  // middle is what Nike asked for: the pool is the thing the forest is arranged around.
  for (const n of [1, 2, 4, 9, 17, 25, 40]) {
    const p = forestPoolPlacement(20, gridOrigins(n, 20), { x: 0, z: 0 });
    assert.ok(Math.hypot(p.x, p.z) < 1e-6, `${n} trees: the pool sits ${Math.hypot(p.x, p.z).toFixed(1)} off the middle`);
  }
});

test("a hand-dragged forest still gets its pool near the trees' centre of mass", () => {
  const spread = [{ x: -64, z: 0 }, { x: 277, z: -338 }, { x: 28, z: -146 }, { x: -55, z: 100 }];
  const c = centroid(spread);
  const p = forestPoolPlacement(17, spread);
  assert.ok(Math.hypot(p.x - c.x, p.z - c.z) < 40, "the pool drifted away from a dragged forest");
});

test("no tree is ever placed inside the pool's clearing", () => {
  for (const n of [1, 4, 9, 17, 25, 40]) {
    for (const seeds of [1, 17, 60, 200]) {
      const origins = gridOrigins(n, seeds);
      const p = forestPoolPlacement(seeds, origins, { x: 0, z: 0 });
      for (const o of origins)
        assert.ok(Math.hypot(o.x - p.x, o.z - p.z) >= p.r + GROUND_FOOTPRINT_R,
          `${n} trees / ${seeds} seeds: a tree stands in the pool`);
    }
  }
});

test("the pool is at least three times the radius it used to be", () => {
  assert.ok(POOL_FOREST_R_MIN >= 12, `pool floor is ${POOL_FOREST_R_MIN}, was 4 — three times is 12`);
  const r = forestPoolPlacement(17, gridOrigins(9, 17)).r;
  assert.ok(r >= 3 * 5.44, `17 seeds give r ${r.toFixed(2)}; three times the old 5.44 is 16.3`);
});

test("a grid stays tighter than the row it replaces", () => {
  const grid = gridOrigins(9, 17);
  const row = Array.from({ length: 9 }, (_, i) => ({ x: (i - 4) * TREE_SPAN, z: 0 }));
  const reach = (o: { x: number; z: number }[]) => Math.max(...o.map((p) => Math.hypot(p.x, p.z)));
  assert.ok(reach(grid) < reach(row), `grid reaches ${reach(grid).toFixed(0)}, the old row reached ${reach(row).toFixed(0)}`);
});
