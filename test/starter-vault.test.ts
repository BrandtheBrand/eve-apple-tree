import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { parseIgnore, isIgnored } from "../src/layout.ts";

const SV = "eve-thinking-system/starter-vault";
const read = (p: string) => JSON.parse(readFileSync(p, "utf8"));

test("the plugin bundled with the starter vault is the version we ship", () => {
  const src = read("manifest.json").version;
  const bundled = read(`${SV}/.obsidian/plugins/eve-apple-tree/manifest.json`).version;
  assert.equal(bundled, src, `starter vault ships ${bundled} while source is ${src} — a stale bundle ignores new settings entirely`);
});

test("a first-time vault opens with one tree, not a phantom templates tree", () => {
  const data = read(`${SV}/.obsidian/plugins/eve-apple-tree/data.json`);
  const patterns = parseIgnore(data.ignoreFolders);
  assert.ok(isIgnored("templates/leaf.md", patterns),
    "the starter vault's own templates carry live frontmatter and would render as a second tree");
  assert.ok(!isIgnored("My First Tree/Why I put things off.md", patterns),
    "the tree the starter vault exists to show was ignored too");
});

test("every note type a user can plant has a template to copy", () => {
  const kit = readdirSync("eve-thinking-system/templates").filter((f) => f.endsWith(".md")).sort();
  const starter = readdirSync(`${SV}/templates`).filter((f) => f.endsWith(".md")).sort();
  for (const t of kit) assert.ok(starter.includes(t), `${t} is in the kit but missing from the starter vault`);
});

test("the starter vault's bundled build files are all present", () => {
  for (const f of ["main.js", "manifest.json", "styles.css", "versions.json"])
    assert.ok(existsSync(`${SV}/.obsidian/plugins/eve-apple-tree/${f}`), `${f} missing from the bundle`);
});
