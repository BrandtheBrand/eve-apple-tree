# Visualizing a tree — use the template, never hand-roll

When the user wants to *see* their thinking as a tree of light, **do NOT write your own three.js / camera / renderer.** Use the canonical template:

## `tree-of-light.template.html`

A complete, self-contained, browser-ready renderer. It **auto-frames any data** — any number of fields, any number of notes — always centered and correctly sized, with zoom-driven labels (titles → descriptions), flat/column field modes, flower/apple markers, and click-to-select.

### How to make a tree (the only steps)
1. **Copy** `tree-of-light.template.html` to a new file (e.g. `my-topic-tree.html`).
2. **Replace ONLY the DATA block** — everything between `/* ===== DATA-START ... */` and `/* ===== DATA-END ===== */`. Set `TOPIC` and the `NOTES` array.
3. Open the file in a browser. Done. Touch nothing else.

### Note shape
```js
{ id, type, field, time, title, desc, links:[ids] }
```
- `type`: `'root' | 'trunk' | 'leaf' | 'flower' | 'apple'`
- `field`: a lens/sector **name** (string), or `null` for root/trunk (they sit on the central axis)
- `time`: number or date-ordinal → height (older = lower, newer = higher)
- `links`: array of other note `id`s — the rhizome. **Cross-field links matter most.**
- `id` can just be the title; `links` reference ids.
- `views` *(optional)*: a stakeholder POV layer — `[{c:'Worker', t:'…their take…'}]` (chair `c`, take `t`).
  Shown in the click-card under **👁 Stakeholder views**. POV is a **content layer inside the dot, never a field** —
  every dot is seen by every chair, so it's cross-cutting, not a sector.

### Stakeholder lens (auto-appears only when the data has `views`)
When any dot carries `views`, a **Stakeholder lens** control appears in the panel: pick a chair and every dot
*without* a view from that chair dims, so you can "sit in one chair" and sweep the whole tree from it. The
**chair-mirror** under it counts, across the dots that *have* views, how many include each chair — so as you
deepen more dots the skew becomes visible ("you keep sitting in the buyer's chair"). Declare an optional
topic-level `const CAST = ['Worker','Regulator',…]` in the DATA block to name every chair worth considering;
chairs no dot speaks from then show as **0%** rows — the blindspot made visible. It's a pure overlay: it reads
`views`/`CAST` and changes nothing structural. Trees with no `views`/`CAST` never show the control. The Obsidian
plugin parses a `## Stakeholder views` body section into the same layer.

### Forest — many trees in one scene (D4)
A vault can hold **many trees** (one topic = one tree). Instead of `TOPIC` + `NOTES`, define a `TREES` array:
```js
const TREES = [
  { id:'renaissance', topic:'The Renaissance', origin:{x:0,z:0}, notes:[ … ], cast:[ … ] },
  { id:'science',     topic:'Scientific Revolution', origin:{x:18,z:0}, notes:[ … ] },
];
```
- **One folder = one tree.** Each tree is **fully independent** — its own fields, its own trunk/spine, its own
  R8 layout around its own **movable `origin` `{x,z}`**. No shared fields or trunks across trees. Omit `origin`
  and the trees auto-arrange in a centred row (so a tree is "repositionable" by editing one `{x,z}`).
- The single-tree `TOPIC`/`NOTES` block still works unchanged — it's wrapped as a one-tree forest at the origin.
- **`fit()` frames the whole forest** (bounding-sphere + FOV based; auto-fits any number of trees and any aspect),
  keeping the proven single-tree look (`D0≈29` for one tree).
- A **Focus tree** selector appears (forest only): jump the camera to one tree or back to the whole forest.

### Zoom-out LOD — a tree becomes a translucent green 🌳; many = a forest (T2)
Pull the camera back and each tree's dot-cloud **crossfades into a translucent, green, tree-shaped silhouette**;
several together read as a forest. Zoom back in and the dots return — smooth smoothstep crossfade, no popping.
The band is **`LOD_START`=125% → `LOD_END`=180%** of the fit distance (tune those two constants). Tree-name
labels strengthen as the silhouettes appear. Pure visual layer.

### Cross-tree bridges — the ONLY way to connect two trees (T3, D4)
Trees are independent. The single allowed cross-tree connection is a **manual bridge** through a "middle file"
that **explains** the linkage — never automatic, never a bare dot-to-dot line across trees. Define:
```js
const BRIDGES = [
  { id:'b1', from:'renaissance', to:'science', fromNote:'<id>', toNote:'<id>',
    title:'why these relate', explain:'one sentence on the linkage' },
];
```
An arched bridge node is drawn between the two trees (or two named dots); **clicking it shows the explanation**
and chips to each connected tree. `fromNote`/`toNote` are optional (without them the bridge joins tree centres).
A **Cross-tree bridges** toggle appears when any bridge exists. *(The bridge RULE is part of the thinking method: trees connect only through a bridge note that explains the linkage; the tool merely draws it.)*

`renaissance-demo.html` is a ready 2-tree + 1-bridge demo — open it to see all of the above.

### Rules (do not break these — they are why the test failed once)
- **Never edit the renderer.** No new camera math, no `setViewOffset`, no per-data panning. The template already centers/sizes correctly.
- **`renderer.setSize(w, h)` must keep `updateStyle` on** (never pass `false`) — otherwise the WebGL canvas overflows by the device-pixel-ratio and the labels desync from the dots (tree ends up in a corner, labels float away). This is baked into the template; don't reintroduce it.
- Keep the all-white aesthetic and the NormalBlending (never Additive on the cream background — it washes out).
- The scene lives in a **fixed envelope** (radius `R`, height `H`) regardless of data, so the fixed framing always works. If a tree looks "flat / disk-like," that's because the data's `time` values are bunched — spread `time` (or use real dates) and it grows taller.

### Before you call it done — verify these 5
Open the file (or have the user open it) and confirm. If you can't verify, say so — don't claim it works.
1. **Centered & fully visible** — the tree sits in the middle of the canvas, not in a corner, not clipped.
2. **Field names on their sectors** — each label sits over its wedge, not floating off on the opposite side. (If they desync, the `setSize` bug is back.)
3. **Zoom reveals titles** — scroll in and node titles appear attached to their dots; zoom further for descriptions.
4. **No console errors** — open dev tools; the console is clean (a `favicon.ico` 404 is fine).
5. **HiDPI-safe** — looks correct on a Retina/scaled display and after resizing the window.

### The anti-patterns that caused the original failure (never reintroduce)
- ❌ Hand-writing the renderer/camera instead of copying this template.
- ❌ `renderer.setSize(w, h, false)` — canvas overflows by devicePixelRatio; labels desync from dots.
- ❌ `camera.setViewOffset(...)` to "nudge" centering — the template already centers correctly.
- ❌ `AdditiveBlending` on the cream background — washes glows out to white.

That's it. Feed data in, never rewrite the engine.
