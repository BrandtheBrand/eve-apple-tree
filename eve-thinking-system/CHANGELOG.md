# Update Log — Eve's Apple Tree Thinking System

Reverse-chronological. Each entry: what changed, why, and (for incidents) the rule added so it can't recur.

---

## 2026-06-27 (later) — Click → note card (closes D5)

The standalone trees had a **dead click**: clicking a dot only drew a selection ring, never the note's content (the "open the note" affordance was half-ported from the plugin). Fixed in the template (`viz/tree-of-light.template.html`) for all trees: clicking a dot now opens a content card — field·type, title, description, and clickable **Links to →** + **← Linked from** chips (the card doubles as rhizome navigation). Works at any zoom. Verified by actually clicking a dot in a browser and viewing the result (`_screenshots/atm-12-clickcard.jpeg`) — applying the report's own CA4 ("exercise every affordance, assert a perceptible outcome"). Source: `INVESTIGATION-2026-06-27-tree-html.md` (D5).

## 2026-06-27 — Visualization hardening (after a real test failure)

**Incident.** During a test, the Gardener was asked to visualize a test topic (11 fields). It **hand-wrote its own three.js renderer** instead of reusing a correct one. Result was unusable: the tree was shoved into a corner, field-name labels floated disconnected on the opposite side, and the whole thing was the wrong size.

**Root cause (two layers).**
1. *Code bug:* `renderer.setSize(w, h, false)` — the `false` (updateStyle off) stopped three.js from setting the canvas CSS size, so the canvas rendered at the drawing-buffer size (× devicePixelRatio, ~1.8×) and overflowed the window. WebGL content shifted to the bottom-right while the HTML label layer (positioned by `innerWidth`) stayed window-relative → **labels desynced from dots.** Compounded by an ad-hoc `setViewOffset` "centering" hack and `AdditiveBlending` glows (which wash out on the cream background).
2. *System gap:* there was **no canonical tree generator**, so the AI improvised three.js from scratch — and broke it. This is the deeper cause and the thing being fixed.

**Fixes.**
- Added the canonical, data-driven, **auto-fitting** renderer: `viz/tree-of-light.template.html` (+ `viz/README.md`). It centers and sizes *any* data / *any* number of fields. You only ever swap the DATA block.
- Hard rule added — **never hand-roll the renderer; always use the template** — in `CLAUDE.md` §0 + §9b and `RULES.md` (Visualization rules), including the exact anti-patterns (`setSize(…,false)`, `setViewOffset`, `AdditiveBlending` on cream).
- Added a **5-point self-verify checklist** for any visualization (see `viz/README.md` → "Before you call it done").
- Verified the fix in a browser at HiDPI: tree centered, labels at their sectors, zoom reveals titles on their dots, no console errors.

**Prevention going forward:** to show a tree, copy the template, replace only the data, then run the 5 checks. If you cannot verify, say so rather than claim it works.

---

## 2026-06-26 — Initial system

- Authored the AI thinking-guide folder (the Gardener model): `CLAUDE.md`, `README.md`, `HOW-TO.md`, `GUIDE.md`, `RULES.md`, `NOTE-FORMAT.md`, `templates/`, `prompts/`, `example-tree/`.
- Built the standalone demo (`../demo/index.html`) and the Obsidian plugin (`../plugin/`).
- Name locked: **Eve's Apple Tree Thinking System** (full name, no short form).
