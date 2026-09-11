import { test } from "node:test";
import assert from "node:assert/strict";
import { ROLE, POOL_TINT } from "../src/layout.ts";

/** WCAG relative luminance + contrast ratio. */
const lum = (hex: string) => {
  const h = hex.replace("#", "");
  const c = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a: string, b: string) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

test("a seed is outlined clearly enough to be seen in its pool, in both themes", () => {
  // The pool is light brown and matte and the seeds are green, by design — but green on brown is a weak
  // pairing (the body reaches only 1.3:1 on the light pool). What makes a small dot readable on a mid-tone
  // ground is a contrasting OUTLINE, so the ring carries the legibility and the colours stay as specified.
  for (const [theme, pool] of Object.entries(POOL_TINT)) {
    const r = ratio(ROLE.seed.ring, pool);
    assert.ok(r >= 3, `${theme}: the seed's outline is only ${r.toFixed(2)}:1 against its pool`);
  }
  assert.ok(ratio(ROLE.seed.ring, ROLE.seed.tint) >= 3,
    "the seed's outline does not separate from its own body");
});

test("a seed still reads as green, and the pool as brown", () => {
  const rgb = (hex: string) => [0, 2, 4].map((i) => parseInt(hex.replace("#", "").slice(i, i + 2), 16));
  const [tr, tg, tb] = rgb(ROLE.seed.tint);
  assert.ok(tg > tr && tg > tb, `the seed tint ${ROLE.seed.tint} is not green-dominant`);
  for (const [theme, pool] of Object.entries(POOL_TINT)) {
    const [pr, pg, pb] = rgb(pool);
    assert.ok(pr > pg && pg > pb, `the ${theme} pool ${pool} is not a brown (needs r > g > b)`);
  }
});

test("every dot type keeps its ring distinct from its body", () => {
  for (const [type, role] of Object.entries(ROLE))
    assert.ok(ratio(role.ring, role.tint) >= 1.6, `${type}'s ring is invisible against its own body`);
});
