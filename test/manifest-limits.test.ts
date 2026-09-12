import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

/**
 * Obsidian's plugin review rejects a manifest whose description exceeds 250 characters. 0.5.6 failed
 * review at 291 because a sentence about seeds was appended without checking the limit — the limit is
 * not visible anywhere in the repo, so it has to live in a test.
 */
test("the manifest description fits Obsidian's 250-character limit", () => {
  const m = JSON.parse(readFileSync("manifest.json", "utf8"));
  assert.ok(m.description.length <= 250,
    `description is ${m.description.length} characters; Obsidian's limit is 250`);
});

test("the manifest still names every dot type the plugin draws", () => {
  const d = JSON.parse(readFileSync("manifest.json", "utf8")).description.toLowerCase();
  for (const t of ["tree", "leaves", "flower", "apple", "seed"])
    assert.ok(d.includes(t), `the description no longer mentions ${t}`);
});

test("the release workflow attaches only the three files Obsidian downloads", () => {
  const wf = readFileSync(".github/workflows/release.yml", "utf8");
  assert.ok(!wf.includes("eve-tree-team-"),
    "the team zip is attached to the release again — Obsidian flags any asset beyond main.js/manifest.json/styles.css");
});
