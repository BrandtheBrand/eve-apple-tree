import { test } from "node:test";
import assert from "node:assert/strict";
import { poolOpacity, seedDotOpacity, POOL_TINT } from "../src/layout.ts";

const THEMES = [{ name: "light", dark: false }, { name: "dark", dark: true }];

test("the seed pool is at its most visible at the 🌲 forest stop", () => {
  for (const t of THEMES) {
    const far = poolOpacity(1, t.dark), near = poolOpacity(0, t.dark);
    assert.ok(far >= 0.55, `${t.name}: pool is only ${far.toFixed(2)} opaque where the trees are icons`);
    assert.ok(far > near, `${t.name}: the pool gets fainter as you pull back, not stronger`);
  }
});

test("the seed pool never disappears at any zoom, in either theme", () => {
  for (const t of THEMES)
    for (let sil = 0; sil <= 1.0001; sil += 0.05)
      assert.ok(poolOpacity(sil, t.dark) >= 0.28,
        `${t.name}: pool drops to ${poolOpacity(sil, t.dark).toFixed(2)} at sil=${sil.toFixed(2)}`);
});

test("seeds stay readable when the trees have become icons", () => {
  assert.ok(seedDotOpacity(1) >= 0.7, "seeds fade out exactly where the pool is meant to be seen");
  assert.ok(seedDotOpacity(0) >= 0.9, "seeds are dim up close");
});

test("the pool has a distinct colour for each theme", () => {
  assert.notEqual(POOL_TINT.light, POOL_TINT.dark, "one green cannot carry both a cream and a black ground");
  for (const hex of [POOL_TINT.light, POOL_TINT.dark]) assert.match(hex, /^#[0-9a-f]{6}$/);
});

import { forestPoolPlacement, gridOrigins, ROLE, SEED_GAP } from "../src/layout.ts";

test("seeds cluster in the middle of the pool, not scattered across it", () => {
  for (const n of [1, 5, 17, 60]) {
    const p = forestPoolPlacement(n, gridOrigins(9, n), { x: 0, z: 0 });
    const reach = Math.max(...p.slots.map((s) => Math.hypot(s.x, s.z)));
    assert.ok(reach <= p.r * 0.62,
      `${n} seeds reach ${reach.toFixed(1)} of a ${p.r.toFixed(1)} pool — no brown margin left`);
    if (n > 1) {
      const gaps = p.slots.flatMap((a, i) => p.slots.slice(i + 1).map((b) => Math.hypot(a.x - b.x, a.z - b.z)));
      const nearest = Math.min(...gaps);
      assert.ok(nearest >= SEED_GAP, `${n} seeds overlap (${nearest.toFixed(2)})`);
      assert.ok(nearest <= 3.2, `${n} seeds sit ${nearest.toFixed(1)} apart — they read as scattered, not as a cluster`);
    }
  }
});

test("a seed dot is big enough to be seen in a pool three times the old size", () => {
  assert.ok(ROLE.seed.r >= ROLE.leaf.r, `a seed dot (${ROLE.seed.r}) is smaller than a leaf (${ROLE.leaf.r})`);
  assert.ok(!!ROLE.seed.glow, "seeds do not shine");
});

import { seedGlow } from "../src/layout.ts";

test("seeds still shine with the light-shine slider at zero", () => {
  assert.ok(seedGlow(0, false) > 0.06, `seeds go dark (${seedGlow(0, false)}) when the slider is at 0`);
  assert.ok(seedGlow(0, true) > 0.10, "seeds go dark on black when the slider is at 0");
  assert.ok(seedGlow(2, false) > seedGlow(0, false), "the slider stopped doing anything");
});
