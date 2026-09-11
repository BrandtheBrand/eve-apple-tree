import { test } from "node:test";
import assert from "node:assert/strict";
import { zoomStops, nearestStop, lodAt, ZOOM_LEVELS, type ZoomLevel } from "../src/layout.ts";

// representative framing distances measured the way the view measures them (fit-all / 3 trees / 1 tree)
const FORESTS = {
  ten:    { fitAll: 262, three: 88.6, one: 33.1 },
  three:  { fitAll: 88.6, three: 88.6, one: 33.1 },
  single: { fitAll: 33.1, three: 33.1, one: 33.1 },
};

test("clicking a stop lands you on that stop", () => {
  for (const [name, f] of Object.entries(FORESTS)) {
    const stops = zoomStops(f.fitAll, f.three, f.one);
    for (const s of stops.filter((s) => s.reachable))
      assert.equal(nearestStop(s.d, stops), s.level, `${name}: flying to "${s.level}" landed elsewhere`);
  }
});

test("stops a forest cannot express are marked unreachable", () => {
  const single = zoomStops(FORESTS.single.fitAll, FORESTS.single.three, FORESTS.single.one);
  const off = single.filter((s) => !s.reachable).map((s) => s.level);
  assert.deepEqual(off.sort(), ["forest", "three"], "a one-tree vault should offer only leaf and tree");

  const ten = zoomStops(FORESTS.ten.fitAll, FORESTS.ten.three, FORESTS.ten.one);
  assert.equal(ten.filter((s) => s.reachable).length, 4, "a ten-tree forest should offer all four stops");
});

test("the scale never offers an unreachable stop as the current one", () => {
  const stops = zoomStops(FORESTS.single.fitAll, FORESTS.single.three, FORESTS.single.one);
  for (const d of [1, 5, 33, 100, 5000])
    assert.ok(stops.find((s) => s.level === nearestStop(d, stops))!.reachable, `d=${d} resolved to a dead stop`);
});

test("stops run far to near, in the order the scale draws them", () => {
  const stops = zoomStops(FORESTS.ten.fitAll, FORESTS.ten.three, FORESTS.ten.one);
  assert.deepEqual(stops.map((s) => s.level), ZOOM_LEVELS satisfies ZoomLevel[]);
  for (let i = 1; i < stops.length; i++) assert.ok(stops[i].d < stops[i - 1].d, `stop ${stops[i].level} is not nearer than ${stops[i - 1].level}`);
});

test("the scale always has somewhere to be, however degenerate the scene", () => {
  // nearestStop runs once per frame inside the rAF loop: if it ever throws, the loop dies and the
  // view freezes for good. Degenerate framing distances (a scene measured before anything is placed)
  // left every stop unreachable and it read past the end of an empty array.
  for (const args of [[0, 0, 0], [-1, -1, -1], [0, 1, 2], [NaN, NaN, NaN]] as [number, number, number][]) {
    const stops = zoomStops(...args);
    assert.equal(stops.length, 4, `zoomStops(${args}) lost a stop`);
    assert.ok(stops.some((s) => s.reachable), `zoomStops(${args}) left the scale with nowhere to be`);
    assert.doesNotThrow(() => nearestStop(args[0], stops), `nearestStop threw on ${args}`);
    const lod = lodAt(args[0], stops);
    for (const [k, v] of Object.entries(lod))
      assert.ok(Number.isFinite(v), `lodAt(${args}) produced a non-finite ${k}`);
  }
});
