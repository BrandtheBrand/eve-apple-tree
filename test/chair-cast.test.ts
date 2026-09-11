import { test } from "node:test";
import assert from "node:assert/strict";
import { chairsOnDot, type View } from "../src/layout.ts";

const v = (c: string): View => ({ c, t: "…" });
const CAST = ["Shopper", "Worker", "Factory", "Brand"];

test("a dot names the chairs that spoke and the ones that have not", () => {
  const r = chairsOnDot([v("Worker"), v("Brand")], CAST);
  assert.deepEqual(r.spoke.map((x) => x.c), ["Worker", "Brand"]);
  assert.deepEqual(r.silent, ["Shopper", "Factory"]);
});

test("the silent list comes from THIS tree's cast, never the whole forest", () => {
  // the confusion being fixed: a Muji dot must not be told the Brand-the-Brand chairs are missing
  const r = chairsOnDot([], []);
  assert.deepEqual(r.silent, [], "a tree with no stakeholder layer was handed chairs anyway");
  assert.deepEqual(r.spoke, []);
});

test("a chair that spoke only on this dot still counts as part of the cast", () => {
  const r = chairsOnDot([v("Regulator")], ["Worker"]);
  assert.deepEqual(r.spoke.map((x) => x.c), ["Regulator"]);
  assert.deepEqual(r.silent, ["Worker"], "a chair the dot introduced pushed the tree's own cast out");
});

test("duplicate and blank chairs do not produce phantom entries", () => {
  const r = chairsOnDot([v("Worker"), v("Worker"), { c: "", t: "x" }], ["Worker", "Brand"]);
  assert.deepEqual(r.silent, ["Brand"]);
  assert.equal(r.spoke.length, 3, "the dot's own lines are shown as written, duplicates included");
});

test("a dot nobody sat with still knows how many chairs are waiting", () => {
  const r = chairsOnDot(undefined, CAST);
  assert.equal(r.spoke.length, 0);
  assert.equal(r.silent.length, CAST.length, "an untouched dot should still count the whole cast");
});
