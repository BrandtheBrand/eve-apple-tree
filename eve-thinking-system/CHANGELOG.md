# Update Log — Eve's Apple Tree Thinking System

Reverse-chronological. Each entry: what changed, why, and (for incidents) the rule added so it can't recur.

---

## 2026-09-12 — Everything Obsidian's own reviewer found (v0.5.7)

0.5.6 failed Obsidian's automated plugin review. Every finding is fixed here, and two of them are things
this project's own lint had been reporting all along and I had waved through as cosmetic. They were not.

**Error — the manifest description was 291 characters against a 250 limit.** A sentence about seeds was
appended in 0.5.0 without checking a limit that is written down nowhere in the repo. It is 243 now, and a
test asserts the limit so it cannot be crossed again unnoticed.

**The release attached a file Obsidian will not download.** `eve-tree-team-<version>.zip` was built,
attested and attached by the workflow; Obsidian fetches only `main.js`, `manifest.json` and `styles.css`
and flags everything else. The zip is no longer built in CI — `scripts/build-team-zip.sh` makes it locally
when it is wanted, and the package it holds is in the repo regardless. A test asserts the workflow attaches
only the three.

**Settings were invisible to Obsidian's settings search** on 1.13.0+, because the tab never implemented
`getSettingDefinitions()`. It does now, with `getControlValue`/`setControlValue` writing through the same
settings object `display()` uses, so the two paths cannot drift. `display()` stays for 1.7.2–1.12.

**Eight `document.createElement` calls** became the global `createEl`. Not `Node.createEl` — that APPENDS
to the node, and these are offscreen canvases used as texture sources that must never enter the DOM.

**`text-indent`** is only partially supported on Obsidian 1.6.5; the two-pixel nudge it was doing is now
`padding-right`.

Passed unchanged: artifact attestations on both assets, no suspicious network patterns, no vulnerable
dependencies, no obfuscation, and — the one worth keeping — **the build reproduced the release `main.js`
byte-for-byte**, which is the same property verified locally in the third audit.

Lint is down from 24 warnings to 11.

---

## 2026-09-11 — Third audit: the crashes and blanks nobody had looked for (v0.5.6)

The first two audits read documents. This one executed the code against deliberately hostile input, timed
the hot paths, and checked the published bytes. It found four defects that no amount of reading would have
surfaced, three of them capable of silently emptying the view.

**A crash in the render loop.** `nearestStop` runs once per frame. Given a scene whose framing distances
measured out degenerate, `zoomStops` marked every stop unreachable and `nearestStop` read past the end of
an empty array. An exception inside requestAnimationFrame does not recover: the loop dies and the view
freezes for good. The nearest stop is now always reachable by construction — there is always somewhere the
camera is — with a guard behind it.

**NaN, which three.js renders as nothing at all, with no error.** Three sources, all fixed: a degenerate
level-of-detail band divided by zero; `typeof x === "number"` accepted NaN and Infinity from a saved
position (they are both "number"), so a damaged setting could erase a tree; and — the worst — a single note
with `time: .nan` or an impossible date like `2026-13-45` poisoned the tree's height normalisation, sending
EVERY dot in that tree to a non-finite position. One bad note, one invisible tree, no message. Guarded at
both the parse and the layout layer.

**Seeds were not legible in their own pool.** Measured rather than eyeballed: green on light brown reaches
1.3:1, and every layer of the dot sat under 3:1. The colours are as specified and stay that way — the RING
now carries the legibility (4.95:1 light, 3.08:1 dark), which is what makes a small dot readable on a
mid-tone ground. `test/legibility.test.ts` asserts it, and that the seed stays green and the pool brown.

**Performance, measured for the first time.** A real 690-dot vault lays out in 28.9 ms — imperceptible. The
per-frame paths are all under 0.06 ms. The documented guards hold exactly where they claim (clustering
skips above 500 leaves and at 20+ fields). `autoOrigins` is the one path that scales poorly — 89 ms at 100
trees, 543 ms at 200 — which is a rebuild-only cost at a forest size nobody has, and is recorded here
rather than optimised on speculation.

Also: the pool's shared geometry is allocated lazily, so a vault with no seeds no longer leaks one
unattached geometry per reload.

---

## 2026-09-11 — The rename that wasn't finished (v0.5.5)

A second verification pass, run against the code rather than against the previous pass's notes, found the
0.5.1 button rename had stopped six edits short. `Rebuild from vault` survived in three setting
descriptions and — the one that matters — in the **empty-state screen**, the first thing a new user with an
untagged vault ever sees, which was telling them to click a button no longer called that. Its example
frontmatter also carried a date from the first release, and it cited the settings tab under a name the tab
does not use.

The audit that found this was the same kind of scan as the one before it, with one difference: it derived
the list of controls from the source and checked the docs against THAT, instead of grepping for strings
remembered from the earlier pass. Grepping for what you remember only finds what you remember.

`test/retired-ui.test.ts` now asserts that retired control names stay retired anywhere in the plugin
source, comments included, and that the empty state only ever names a button the panel actually has.

Published assets for 0.5.4 were verified byte-identical to a fresh build of its tag before this release.

---

## 2026-09-11 — Package-wide audit: everything the code changed, said out loud (v0.5.4)

A full sweep of all 107 files against the 0.5.0–0.5.4 changes, because four versions of code had shipped
while parts of the package still described the plugin as it was in 0.4.1.

**The AI team was two documents behind.** `agents/gardener/SKILL.md` and the starter vault's copy had no
seed and no PARK move — only the live vault's copy had been updated. The gardener was therefore still being
told to capture pending topics as leaves, which is the exact thing the seed type exists to stop. All three
copies now agree, and `test/package-parity.test.ts` asserts the packaged pair stay identical and that the
gardener's model table names every dot type the renderer can draw.

**The standalone renderer learned seeds.** `viz/tree-of-light.template.html` and the demo know `seed` as a
sixth type (green, lit). Its `README` now states the two things that stay plugin-only (the pool, the zoom
scale, the forest layout) and the one control that deliberately diverges: the renderer KEEPS the chair lens,
because a standalone tree is one topic with one cast — the case the lens was always good at — while the
plugin moved the layer onto each dot's card.

**Also brought level:** the README's feature list (the repo's landing page) — the lens entry rewritten,
seeds, the zoom scale, the self-arranging forest and the ignore setting added; the manual's panel table
(a row still advertised the removed Reset button); `START-HERE.md`, which never mentioned seeds to the one
reader guaranteed to be new; `HOW-TO.md`, which listed six moves and now lists PARK too; a new
`prompts/park-seed.md`; a seed in `example-tree/`, so the shipped example finally shows all six types; and
the team zip, which shipped no prompts at all and now ships them.

**Known and unchanged:** the five screenshots in `img/` date from 2026-07-05 and predate every visual change
in 0.5.x. They can only be retaken from a running Obsidian, so they are listed as outstanding rather than
quietly left to rot.

---

## 2026-09-11 — Keep a folder in the vault, off the tree (v0.5.4)

*Same pass, three things this was shipping wrong to everyone else.* The starter vault opened with TWO
trees — "My First Tree", which it exists to show, and a phantom "templates" tree, because its own six
template files carry live frontmatter. It now ships a `data.json` with `templates/` already ignored. Its
bundled plugin build was **0.4.1, two versions behind**, which would have ignored the new setting
outright — the bundle is now built from source, and a test asserts the two versions match so a stale
bundle can never ship again. And `seed.md` had been added to the kit's templates in 0.5.0 but never to the
starter vault's, so a new user got no seed template at all; a test now asserts the two folders agree.

The team zip (Path C) copies `templates/` into the user's own vault, so `INSTALL-TEAM.txt` now names the
one setting to change, and the manual and package README say the same for anyone copying the package into
an existing vault.

New setting: **Folders to keep off the tree** (one per line, or comma separated). Those notes stay in the
vault, stay searchable, stay editable — they just never become dots, seeds, bridges, or a tree of their
own. The case that prompted it: a template pack you want to keep copying from, whose files carry real
frontmatter and were therefore rendering as a tree of their own.

Obsidian's own "Excluded files" setting would have been the natural home, but it is not in the public API
(checked against typings 1.13.1), and reaching for the private one risks a plugin-review rejection — so
this is the plugin's own, explicit setting.

The matching rule stops at the folder boundary: `Eve Apple Tree` hides `Eve Apple Tree/x.md` and never
`Eve Apple Trees/x.md` or `Eve Apple Tree.md`. Blank patterns are dropped, because an empty pattern
prefix-matches every path in the vault and would silently blank the entire forest. Both are tests, and the
blank-pattern test asserts the parse result, not just the match — a first version passed for the wrong
reason (the boundary rule happened to cover it) and would not have caught the bug it was written for.

---

## 2026-09-11 — A tree goes where you drop it (v0.5.3)

**Snapping is gone.** 0.5.1 pulled every dropped tree to the nearest grid cell, which turned the grid from
a sensible default into a cage: you could not put a tree where you wanted it. A tree now stays exactly
where it is dropped, and the two swap only when one is dropped ON another. The grid is what happens to
trees nobody has moved.

**One hand-placed tree no longer breaks grouping for the whole forest.** The bridge groups were computed
over only the auto-placed trees, so any bridge with one end already positioned by hand was silently
dropped — dragging a single tree once left its partner ungrouped on the far side of the forest. Groups are
computed over ALL trees now, and a group containing a hand-placed tree gathers AROUND it (on a lattice
anchored at that tree) instead of going to the middle of the grid. Verified on a real vault: a bridged
pair that had been 82 units apart now stands one span apart.

**Tree names had no de-collision at all.** Node titles have been thinned against each other since 0.1;
tree names never were, so a forest seen edge-on wrote every name over every other one. They are now
thinned the same way — projected, sorted by distance, and any that would land on a nearer one is dropped.

**The text-size floor overshot.** 0.5.1 gave tree names a 14px floor after finding 6px titles in a real
vault; at the slider's 0.6x end that meant the slider had stopped doing anything. The floor is 10px now:
legible, and low enough that the control still controls. Overlap is de-collision's job, not the font's.

---

## 2026-09-11 — The stakeholder layer moves onto the dot (v0.5.2)

The chair lens was a forest-wide filter in the panel: one dropdown listing every chair in the vault,
offered on every tree. Measured in a real vault, 8 chairs existed, all of them from ONE dot in one tree,
while the other eight trees had none — so sitting in "Shopper" while looking at a Muji tree dimmed
everything and meant nothing, and the mirror's percentages were computed across all trees at once.

It is gone. The stakeholder layer now lives on the note card, where the dot is, with the cast taken from
the OWNING TREE. The card already listed the chairs that had spoken; what it now adds is the half that
carries the method's actual value — **the chairs that have not**. NOTE-FORMAT is explicit that every dot
is seen by every stakeholder, so a chair that never speaks is a blindspot, and a blindspot you can read
off the card beats a filter you have to drive. Where some chairs have spoken, the missing ones are named
(an actionable missing-lens prompt); where none have, the card says so in one short line rather than
repeating the same roster down a hundred untouched dots.

Removed with it: the chair dropdown, the chair-mirror bars, the whole-forest dimming pass, the shared
dim-halo material, and the per-node `_lens` field. The dot-opacity path in the render loop is simpler for
it. The panel is shorter by a group.

---

## 2026-09-11 — Every tree has a place (v0.5.1)

**Trees snap to cells, and dropping one on an occupied cell swaps the two.** Free-dragging let a tree be
parked anywhere, and a tree parked far enough out ballooned the forest's fit distance until no zoom stop
framed anything usefully. On the grid every tree has a place, the arrangement is always a permutation, and
it is therefore saved as an ORDER of tree ids rather than as coordinates — so it survives the grid
resizing when a folder is added or removed. A pre-0.5.1 hand arrangement is read once and carried over as
an approximate order rather than discarded.

Picking the cells turned out to be the subtle part. Taking the n cells nearest the middle hands back a
sparse RING around the reserved pool — with a 16-unit span its cells can sit 48 apart, which makes "put
linked trees in the same area" impossible however the trees are then assigned. Cells are now grown as one
connected patch: seed at the middle, then repeatedly take the cell touching what is already placed. Every
forest size now has neighbouring cells 1 span apart.

**Trees joined by a bridge share a patch of ground.** Connected components of the bridge graph are laid
out together, each seeding centrally and then hugging its own running centre.

**Two bugs found by reading the real vault's settings, not by guessing.** `camera.far` was fixed at 2000
while `controls.maxDistance` scales with the forest (3188 in that vault) — pull back past 2000 and every
tree is clipped to nothing; the far plane now follows. And the Light-shine slider multiplied the seed glow,
so at the slider's 0 end the seeds went dark — the one thing that must shine in a matte pool. Seed glow now
keeps a floor the slider cannot take away. Label sizes likewise: the text-size slider's 0.6x end put node
titles at 6px, which is not small but invisible; every label class now has a pixel floor.

**Panel.** ↺ Reset and ⊹ Fit both flew to the opening view — exactly what the zoom scale's 🌲 stop does —
so both are gone. Buttons renamed to what they do: Reload my notes · Undo my dot moves · Undo my tree moves.
The pitch and the how-to lines lost their decorative tails.

---

## 2026-09-11 (later still) — A checker forest around a pool you cannot miss

Three changes that turned out to be one change. The seed pool is now **3x wider** (radius 16.3 for 17
seeds, was 5.44) and **light brown and matte** instead of green and glowing — the pool is *ground*, and
making it earthy is what lets the seeds be the only lit thing in it. Seeds are correspondingly bigger
(dot radius 0.46, was 0.17 — larger than a leaf) and keep their green glow.

At 3x, the pool is as wide as the whole spacing between two trees, which forced the layout question:
**auto-arranged trees now form a checker grid around a reserved middle, not a row.** A row was fine at
five trees and unusable at thirty — it stretches the forest along one axis, so the fit distance grows
linearly and every tree icon shrinks with it. A grid grows as the square root, and it leaves the one
place the pool must always be. Measured, with 17 seeds: a row of 9 trees framed at 280 with 47px icons;
the grid frames 9 at 167 with 79px icons, 36 at 255 with 51px, 64 at 344 with 38px. Cells are taken
nearest-the-middle first, skipping any that would stand in the pool's clearing, and the grid widens a
ring at a time. Hand-dragged trees keep their saved origin; the grid only arranges the rest.

Seeds pack at a fixed comfortable spacing rather than spreading to the basin's rim, so they read as one
cluster in a brown shore (33% of the radius at 17 seeds) however big the basin gets. A flat disc also
foreshortens to a line at icon distance, so the pool carries a camera-facing icon — a brown basin with
green seeds in it, sized to read alongside a tree silhouette rather than instead of one.

Capacity is now stated rather than assumed: a tree's foot pool holds ~150 seeds at a legible gap, and
past that the half-span cap deliberately wins over the gap, because two trees sharing a pool is the
worse lie. Both halves are tests.

---

## 2026-09-11 (later) — Detail follows the scale, not the fit distance

First run on a real 700-dot vault showed the scale's stops piling every label on top of each other:
the forest view rendered every note's title, description and field name at once instead of one icon
per tree. Cause: every level-of-detail threshold was a fraction of D0, the WHOLE-forest framing
distance, so flying to a stop that frames FEWER trees put the camera at a smaller fraction of D0 and
turned MORE detail on — inverted at exactly the stops the new scale made easy to reach. The forest
stop also parked at exactly D0 while silhouettes only began at 1.15 x D0, so the one view that had
to be icons never became icons.

Detail now comes from `lodAt()`, derived from the scale's own stops: the icon you click is a promise
about what you will see. A second, angular rule guarantees icons independently (a tree too small on
screen to show structure is drawn as one), because a thinker who drags trees far apart makes a forest
whose fit distance is enormous and whose middle range was an unreadable smear. Field names hand over
to tree names as you pull back rather than both being drawn; per-dot label falloff is measured
against ONE tree's framing distance, so a neighbouring tree's dots stop competing with the tree you
are looking at. The four stops are now stated as a test spec.

Same pass: the forest seed pool takes the MIDDLE of the forest and steps aside only as far as it
must. Pushing it past the outermost tree — the obvious rule — was clear of every tree and 185 units
from the centre of mass on a real vault: technically correct, practically lost.

---

## 2026-09-11 — Seeds get a body, and the zoom gets a scale (v0.5.0)

**Seed becomes a sixth `tree_type`.** The word was already load-bearing in the method — the "seed bank" of
left-behind candidates (`RULES` capture-all/promote-some), "seed resurrection" at INSPIRE, "old notes are
seeds" at TEND — but it had nowhere to live, so the old instruction was to capture pending topics *as
leaves*. That made the canopy claim ideas nobody had had yet. A seed now renders as a green dot floating in
a pool on the ground: at the foot of its tree when it carries a `field`, in a shared forest pool when it
doesn't. No `time` (it hasn't happened), no field wedge (an unopened topic must not draw an empty sector),
faint links only, and no automatic label — point at a seed and it names itself, move off and it's gone.

**Why a pool and not a branch.** Putting pending topics on the tree was the tempting version and the wrong
one: the tree is a record of thinking that happened, and a seed is precisely thinking that hasn't. Keeping
them on the ground means a glance at the canopy still tells the truth about how much thinking is in it,
while nothing is lost.

**Zoom scale (right edge).** Four stops — 🌲 whole forest · 🌳🌳🌳 a few trees · 🌳 one tree · 🍃 close on a
leaf — showing where you are and flying you there when clicked. The stops are measured from the scene's own
framing distances, NOT from fixed percentages of the fit distance: an early draft used hard-coded bands and
clicking "three trees" landed the indicator on "whole forest", because the bounding-sphere fit for three
trees is much further out than a share-of-frame estimate predicts. Measuring both the button and the
indicator with the same ruler makes that class of bug impossible rather than tuned-away. A stop the current
forest can't express (three trees in a two-tree vault) is dimmed instead of silently going nowhere.

**Verification.** Pool geometry is covered by unit tests with negative controls (the overlap oracle is
itself tested against a known-overlapping layout), plus a top-down render checked against the design radii
before anything was installed. Known gap: `viz/tree-of-light.template.html`, the standalone renderer, still
knows only five dot types — a seed in a hand-rendered tree will draw as a leaf until that template is
updated.

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
