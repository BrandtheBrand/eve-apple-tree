import { test } from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import { placeNodes, type EveNode, type TreeType } from "../src/layout.ts";

const node = (id: string, treeType: TreeType, field: number, time: number): EveNode => ({
  id, title: id, description: "", treeType, field,
  fieldName: field >= 0 ? "F" + field : null, time, tNorm: 0, pos: new THREE.Vector3(999, 999, 999),
});

test("placeNodes never puts a seed on the tree", () => {
  const seed = node("seed", "seed", -1, 0);
  const nodes = [node("t", "trunk", -1, 10), node("l", "leaf", 0, 20), seed];
  placeNodes(nodes, 1);
  // the pool functions own seed positions — placeNodes must leave the placeholder untouched
  assert.deepEqual([seed.pos.x, seed.pos.y, seed.pos.z], [999, 999, 999],
    "a seed was given a position on the tree (it would land on the trunk spine)");
});

test("a seed's date cannot stretch the tree's time axis", () => {
  const leaves = () => [node("a", "leaf", 0, 100), node("b", "leaf", 0, 110)];
  const without = leaves();
  placeNodes(without, 1);

  const withSeed = leaves();
  // a seed parked with a wildly old date — if it counted, every leaf would bunch at the top
  placeNodes([...withSeed, node("s", "seed", -1, -5000)], 1);

  for (let i = 0; i < without.length; i++)
    assert.equal(withSeed[i].tNorm, without[i].tNorm, `leaf ${without[i].id} moved because a seed had a date`);
});
