import { test } from "node:test";
import assert from "node:assert/strict";
import { zoomStops, lodAt, type ZoomLevel } from "../src/layout.ts";

// framing distances from the real 10-tree vault
const STOPS = zoomStops(262, 88.6, 33.1);
const at = (l: ZoomLevel) => lodAt(STOPS.find((s) => s.level === l)!.d, STOPS);
const on = (v: number) => v > 0.5, off = (v: number) => v < 0.05;

test("🌲 whole forest = one icon per tree with its name beneath, and nothing else", () => {
  const l = at("forest");
  assert.ok(on(l.sil), "trees are not drawn as icons");
  assert.ok(on(l.treeName), "tree names are not shown under the icons");
  assert.ok(off(l.title), "node titles are still on — this is the pile-up of text");
  assert.ok(off(l.desc), "node descriptions are still on");
  assert.ok(off(l.fieldName), "field names are still on");
  assert.ok(off(l.accent), "ah-ha / output markers are still on");
});

test("🌳🌳🌳 a few trees = dots and tree names, no per-note text", () => {
  const l = at("three");
  assert.ok(off(l.sil), "trees collapsed to icons too early");
  assert.ok(on(l.treeName), "tree names are not shown");
  assert.ok(off(l.title), "node titles are on — they pile up at this distance");
  assert.ok(off(l.desc), "node descriptions are on");
  assert.ok(off(l.fieldName), "field names are on");
});

test("🌳 one tree = titles and field names, still no descriptions", () => {
  const l = at("tree");
  assert.ok(off(l.sil));
  assert.ok(on(l.title), "node titles are off — you can't read the tree");
  assert.ok(off(l.desc), "descriptions are on, which is what crowded the one-tree view");
  assert.ok(on(l.fieldName), "field names are off");
  assert.ok(off(l.treeName), "tree names still showing once you're down at one tree");
});

test("🍃 close on a leaf = titles and descriptions", () => {
  const l = at("leaf");
  assert.ok(on(l.title)); assert.ok(on(l.desc)); assert.ok(off(l.sil));
});

test("detail only ever increases as you come closer", () => {
  const far = STOPS[0].d;
  let prevT = -1, prevD = -1;
  for (let d = far; d > 1; d *= 0.97) {
    const l = lodAt(d, STOPS);
    assert.ok(l.title >= prevT - 1e-9, `titles faded OUT while moving closer, at d=${d.toFixed(1)}`);
    assert.ok(l.desc >= prevD - 1e-9, `descriptions faded OUT while moving closer, at d=${d.toFixed(1)}`);
    prevT = l.title; prevD = l.desc;
  }
});

test("trees dragged far apart still become icons before the view turns to smear", () => {
  // a forest whose fit distance is huge because the thinker spread the trees across the ground
  const spread = zoomStops(1400, 96, 33.1);
  assert.ok(on(lodAt(1400, spread).sil), "the forest view is not icons");
  assert.ok(off(lodAt(96, spread).sil), "three trees collapsed to icons too early");
  assert.ok(on(lodAt(600, spread).sil), "a tree far too small to read is still drawn as dots");
});

test("a one-tree vault still reaches an icon view when you pull back", () => {
  const single = zoomStops(33.1, 33.1, 33.1);
  assert.ok(on(lodAt(33.1 * 2.5, single).sil), "a lone tree never becomes an icon");
  assert.ok(off(lodAt(33.1, single).sil), "a lone tree turns into an icon at its own framing distance");
  assert.ok(on(lodAt(33.1, single).title), "a lone tree has no titles at its own framing distance");
});
