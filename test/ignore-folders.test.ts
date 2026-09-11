import { test } from "node:test";
import assert from "node:assert/strict";
import { parseIgnore, isIgnored } from "../src/layout.ts";

test("a folder pattern hides that folder and everything under it", () => {
  const p = parseIgnore("Eve Apple Tree/");
  assert.ok(isIgnored("Eve Apple Tree/FEEDBACK.md", p));
  assert.ok(isIgnored("Eve Apple Tree/eve-apple-tree/templates/leaf.md", p));
  assert.ok(!isIgnored("Muji/trunk.md", p));
});

test("a pattern stops at the folder boundary", () => {
  const p = parseIgnore("Eve Apple Tree");   // no trailing slash
  assert.ok(isIgnored("Eve Apple Tree/x.md", p));
  assert.ok(!isIgnored("Eve Apple Trees/x.md", p), "a longer folder name was swallowed");
  assert.ok(!isIgnored("Eve Apple Tree.md", p), "a same-named note was swallowed");
});

test("an empty or blank pattern hides NOTHING", () => {
  // the trap: "" prefix-matches every path, which would blank the whole forest
  for (const raw of ["", "   ", "\n\n", " , , "]) {
    const p = parseIgnore(raw);
    assert.deepEqual(p, [], `"${raw}" produced phantom patterns: ${JSON.stringify(p)}`);
    assert.ok(!isIgnored("Muji/anything.md", p), `"${raw}" swallowed the vault`);
  }
});

test("patterns can be given one per line or comma separated", () => {
  const p = parseIgnore(" Eve Apple Tree/ \n Archive , _scratch/ ");
  assert.equal(p.length, 3);
  for (const path of ["Eve Apple Tree/a.md", "Archive/b.md", "_scratch/c.md"])
    assert.ok(isIgnored(path, p), `${path} was not ignored`);
  assert.ok(!isIgnored("Muji/d.md", p));
});

test("matching ignores case, the way a person typing a folder name expects", () => {
  assert.ok(isIgnored("Eve Apple Tree/x.md", parseIgnore("eve apple tree/")));
});

test("an exact file can be ignored too", () => {
  const p = parseIgnore("Muji/draft.md");
  assert.ok(isIgnored("Muji/draft.md", p));
  assert.ok(!isIgnored("Muji/draft2.md", p));
});
