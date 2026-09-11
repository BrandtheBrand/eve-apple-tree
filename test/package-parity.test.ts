import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";

const KIT = "eve-thinking-system";
const SV = `${KIT}/starter-vault`;
const read = (p: string) => readFileSync(p, "utf8");
/** The one legitimate difference between a kit copy and its installed copy is the relative path it cites. */
const body = (p: string) => read(p).split("\n").filter((l) => !l.includes("operating layer of the package contract")).join("\n");

test("the starter vault ships the same AI team as the kit", () => {
  assert.equal(body(`${SV}/.claude/skills/gardener/SKILL.md`), body(`${KIT}/agents/gardener/SKILL.md`),
    "the gardener skill drifted — the packaged copies were two versions behind the live one once already");
  for (const a of ["challenger", "observer"])
    assert.equal(read(`${SV}/.claude/agents/${a}.md`), read(`${KIT}/agents/${a}.md`), `${a} drifted`);
});

test("the gardener knows every dot type the renderer can draw", () => {
  const skill = read(`${KIT}/agents/gardener/SKILL.md`);
  for (const t of ["Root", "Trunk", "Leaf", "Flower", "Apple", "Seed"])
    assert.match(skill, new RegExp(`\\\\| .*${t} \\\\|`), `the gardener's model table has no ${t} row`);
});

test("the contract the starter vault ships matches the kit's", () => {
  const pick = (s: string) => s.split("\n").filter((l) => l.startsWith("|") || /^\d\. \*\*/.test(l)).join("\n");
  assert.equal(pick(read(`${SV}/CLAUDE.md`)), pick(read(`${KIT}/CLAUDE.md`)),
    "the starter vault's contract lost a dot type or a move");
});

test("both template folders carry a template for every dot type", () => {
  for (const dir of [`${KIT}/templates`, `${SV}/templates`]) {
    const have = readdirSync(dir);
    for (const t of ["root", "trunk", "leaf", "flower", "apple", "seed"])
      assert.ok(have.includes(`${t}.md`), `${dir} has no ${t}.md`);
  }
});
