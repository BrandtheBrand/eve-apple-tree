# Update Log — Eve's Apple Tree Thinking System

Reverse-chronological. Each entry: what changed, why, and (for incidents) the rule added so it can't recur.

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
