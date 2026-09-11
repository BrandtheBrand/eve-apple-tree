import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";

/**
 * Renaming a control is never one edit. "Rebuild from vault" survived in five places after its rename —
 * three setting descriptions and, worst, the empty-state screen, which is the FIRST thing a new user sees
 * and was telling them to click a button that no longer existed. This asserts retired strings stay retired.
 */
const RETIRED = [
  "Rebuild from vault",      // → Reload my notes
  "Reset dot layout",        // → Undo my dot moves
  "Reset tree layout",       // → Undo my tree moves
  "Stakeholder lens",        // removed in 0.5.2; the layer lives on the note card
  "chair-mirror",            // removed with it
];

const src = readdirSync("src").filter((f) => f.endsWith(".ts"));

test("no retired control name survives anywhere in the plugin source", () => {
  for (const f of src) {
    const text = readFileSync(`src/${f}`, "utf8");
    for (const dead of RETIRED)
      assert.ok(!text.includes(dead), `src/${f} still says "${dead}"`);
  }
});

test("the empty-state screen names a button that actually exists", () => {
  const view = readFileSync("src/tree-view.ts", "utf8");
  const empty = view.slice(view.indexOf("private showEmpty"), view.indexOf("three.js setup"));
  const named = [...empty.matchAll(/text: "⟳ ([^"]+)"/g)].map((m) => m[1]);
  assert.ok(named.length > 0, "the empty state offers no rebuild button at all");
  for (const label of named)
    assert.ok(view.includes(`text: "⟳ ${label}"`) && view.split(`⟳ ${label}`).length > 2,
      `the empty state's "${label}" button has no matching control in the panel`);
});
