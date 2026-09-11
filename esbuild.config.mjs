import { copyFileSync, existsSync } from "node:fs";
import esbuild from "esbuild";
import process from "process";
import { builtinModules } from "node:module";

const prod = process.argv[2] === "production";

const context = await esbuild.context({
  entryPoints: ["src/main.ts"],
  bundle: true,
  // three.js is bundled INTO main.js (Obsidian plugins ship a single file; no CDN/importmap).
  external: [
    "obsidian",
    "electron",
    "@codemirror/autocomplete",
    "@codemirror/collab",
    "@codemirror/commands",
    "@codemirror/language",
    "@codemirror/lint",
    "@codemirror/search",
    "@codemirror/state",
    "@codemirror/view",
    "@lezer/common",
    "@lezer/highlight",
    "@lezer/lr",
    ...builtinModules,
  ],
  format: "cjs",
  target: "es2020",
  logLevel: "info",
  sourcemap: prod ? false : "inline",
  treeShaking: true,
  outfile: "main.js",
  minify: prod,
});

if (prod) {
  await context.rebuild();
  syncStarterVault();
  process.exit(0);
} else {
  await context.watch();
}

/**
 * The starter vault bundles its own copy of the plugin so a beginner can open it and see a tree with no
 * install step. That copy went two versions stale unnoticed, and a stale bundle silently ignores whatever
 * settings the newer version reads — so the release build refreshes it every time rather than trusting
 * anyone to remember. (test/starter-vault.test.ts asserts the two versions match.)
 */
function syncStarterVault() {
  const dest = "eve-thinking-system/starter-vault/.obsidian/plugins/eve-apple-tree";
  if (!existsSync(dest)) return;
  for (const f of ["main.js", "manifest.json", "styles.css", "versions.json"]) copyFileSync(f, `${dest}/${f}`);
  console.log(`[build] refreshed the starter vault's bundled plugin -> ${dest}`);
}
