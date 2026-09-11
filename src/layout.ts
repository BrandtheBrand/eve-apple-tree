import * as THREE from "three";

/* Visual constants — the locked "tree of light" scale (larger fields). */
export const BG = 0xf7f4ec;
export const FOG = 0xe7dfd2;
export const H = 9.0;          // scene height (TIME axis)
export const R = 5.5;          // field radius (per-tree envelope)
export const R_INNER = 1.6;    // leaves never sit on the trunk
export const SEC_PAD = 0.06;   // angular gap between field wedges
export const WEDGE_INSET = 0.10;               // angular inset from the drawn wedge edge (placement + clustering + drag-clamp)
export const ROOM = 1.42;                       // radial head-room beyond R for clustered / dragged dots
export const R_BAND_MIN = R_INNER + 0.15;       // dots never sit on the trunk axis
export const canopyAt = (y: number): number => 0.30 + 0.70 * Math.min(1, y / H);          // wedge widens toward the crown
export const rMaxAt = (y: number): number => R_INNER + canopyAt(y) * (R * ROOM - R_INNER); // outer radius allowed at height y

/* Forest constants (D4) */
export const TREE_SPAN = 2 * R + 5;          // centre-to-centre spacing for auto-arranged trees
export const LOD_START = 1.15, LOD_END = 1.60; // ×fit-distance: dots→silhouette crossfade band (reachable)
export const SIL_OPACITY = 0.50;              // peak silhouette opacity (50% transparent)
export const SIL_GREEN = "#5d8a3e";           // translucent green 🌳
export const BRIDGE_COL = "#b07a3c";          // cross-tree bridge accent
/* THEME — light (the locked warm 'tree of light') + dark ('diamonds on black'). */
export const THEMES = {
  light: { bg: BG,       fog: FOG,      linkMul: 1.0 },
  dark:  { bg: 0x0a0c12, fog: 0x11141e, linkMul: 2.0 },
};

/* Low-chroma field palette; cycles if a vault has more fields than entries. */
export const PALETTE: { tint: string; ring: string }[] = [
  { tint: "#5d7c8c", ring: "#3c5663" }, // slate-blue
  { tint: "#b09161", ring: "#7d6334" }, // ochre
  { tint: "#bb8079", ring: "#8a534b" }, // clay
  { tint: "#7d9b78", ring: "#516e4d" }, // sage
  { tint: "#8f87a0", ring: "#5f566f" }, // muted violet
  { tint: "#7e9aa6", ring: "#4d6b77" }, // dusty teal
  { tint: "#c0936f", ring: "#8a5f3c" }, // terracotta
  { tint: "#9a9466", ring: "#65603a" }, // olive
];

export type TreeType = "root" | "trunk" | "leaf" | "flower" | "apple" | "seed";

export const ROLE: Record<TreeType, { tint: string; ring: string; r: number; glow?: string }> = {
  leaf:   { tint: "#aeb9b6", ring: "#7c8a86", r: 0.21 },
  trunk:  { tint: "#8f87a0", ring: "#5f566f", r: 0.30 },
  root:   { tint: "#a98f5e", ring: "#6f5a32", r: 0.54 },
  flower: { tint: "#cf8aa3", ring: "#9c5572", r: 0.40, glow: "#ff9ec2" },
  apple:  { tint: "#d77f72", ring: "#a14b3f", r: 0.42, glow: "#ff8a76" },
  // Green body on a brown pool is a weak pairing on its own (1.3:1 in light theme), so the RING carries the
  // legibility: dark enough to outline the dot against both pool tints, which keeps the colours as specified
  // instead of compromising the green or lightening the brown. See test/legibility.test.ts.
  seed:   { tint: "#6fbf5a", ring: "#162f11", r: 0.46, glow: "#9dff84" },
};

/* SEED POOL (v0.5.0) — seeds are pending topics: they sit in a pool on the ground, not on the tree.
   A seed WITH a `field` pools at its tree's foot; a seed WITHOUT one pools in the forest pool. */
export const SEED_GAP = 0.92;            // min centre-to-centre between seeds (= seed dot diameter)
export const SEED_SPREAD = 2.4;          // comfortable centre-to-centre: seeds read as ONE cluster, not scatter
export const POOL_FILL = 0.60;           // the most of the pool's radius the seeds may occupy (rest is shore)
export const POOL_Y = 0.06;              // seeds float just above the ground plane (no z-fight with the pool disc)

export const POOL_TREE_R_IN = 1.5;       // clears the root dot (r 0.54) at the foot of the trunk
export const POOL_TREE_R_OUT = 3.2;      // stays under the canopy's ground-level reach
export const POOL_FOREST_R_MIN = 12, POOL_FOREST_R_MAX = 30;   // v0.5.0: 3x — the seed bank is a landmark, not a footnote
export const POOL_PAD = 2.5;             // clear air between the forest pool and the nearest canopy
/** How far a tree reaches at leaf-bottom height — the tree's true ground footprint. */
export const GROUND_FOOTPRINT_R = rMaxAt(0.7);

/* The pool must read at EVERY zoom, and hardest at the forest stop — that is the view where the trees
   have collapsed to icons and the seed bank is the only thing left saying "here is what you haven't
   opened". Tying it to the dot-fade (which goes to zero exactly there) made it vanish where it mattered. */
// Light brown, matte: the pool is GROUND, not light. Keeping it earthy is also what lets the green seeds
// read as the lit thing in it — two glowing greens would have competed and neither would have won.
export const POOL_TINT = { light: "#b39169", dark: "#8a6f4e" };
const POOL_A = { light: { near: 0.34, far: 0.66 }, dark: { near: 0.40, far: 0.80 } };

/** Pool-disc opacity for a given silhouette crossfade (0 = up close, 1 = trees are icons). */
export function poolOpacity(sil: number, dark: boolean): number {
  const a = dark ? POOL_A.dark : POOL_A.light;
  return a.near + (a.far - a.near) * Math.min(1, Math.max(0, sil));
}

/** Seed-dot glow. The Light-shine slider tunes every other dot to taste, but a seed that does not shine
 *  is just a dark speck in a matte pool — shine is what the seed IS here, so it keeps a floor the slider
 *  cannot take away. (Found with the slider at 0 in a real vault: the whole pool went dead.) */
export function seedGlow(shine: number, dark: boolean): number {
  const full = dark ? 0.55 : 0.26, floor = dark ? 0.22 : 0.11;
  return Math.max(floor, full * shine);
}

/** Seed dots keep almost all of their presence at icon zoom — unlike leaves, they are the point there. */
export function seedDotOpacity(sil: number): number {
  return 1 - 0.18 * Math.min(1, Math.max(0, sil));
}

export interface PoolSlot { x: number; y: number; z: number }
export interface PoolLayout { slots: PoolSlot[]; rIn: number; rOut: number }

/** Equal-area golden-angle spread across an annulus (rIn..rOut), in LOCAL coords around the pool centre.
 *  Same phyllotaxis idiom placeNodes() uses for the canopy, so pools read as part of the same system. */
export function layoutPool(n: number, rIn: number, rOutWanted: number, y: number, rMax = Infinity): PoolLayout {
  let rOut = Math.min(rOutWanted, rMax), slots = spreadPool(n, rIn, rOut, y);
  // the pool is a container, not a cage: if the wanted radius can't hold the seeds at a legible gap,
  // grow it until it can (a pool that silently overlaps its own seeds is worse than a wider pool) —
  // but never past rMax, where a caller has a geometric invariant that outranks the gap.
  for (let g = 0; g < 60 && rOut < rMax && poolMinGap(slots) < SEED_GAP; g++) {
    rOut = Math.min(rMax, rOut * 1.06); slots = spreadPool(n, rIn, rOut, y);
  }
  return { slots, rIn, rOut };
}

function spreadPool(n: number, rIn: number, rOut: number, y: number): PoolSlot[] {
  const GA = 2.39996323, slots: PoolSlot[] = [];
  for (let i = 0; i < n; i++) {
    const t = n === 1 ? 0.5 : (i + 0.5) / n;
    const r = Math.sqrt(rIn * rIn + t * (rOut * rOut - rIn * rIn));   // equal-area across the annulus
    const phi = i * GA;
    slots.push({ x: r * Math.cos(phi), y, z: -r * Math.sin(phi) });
  }
  return slots;
}

/** Nearest-neighbour distance in a phyllotaxis spread. In such a spread the neighbours of point i sit at
 *  FIBONACCI index offsets, so checking those is O(n) instead of O(n²) — the test asserts this against a
 *  full all-pairs scan, which is the oracle. */
const FIB_OFF = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
function poolMinGap(slots: PoolSlot[]): number {
  let m = Infinity;
  for (let i = 0; i < slots.length; i++) for (const d of FIB_OFF) {
    const j = i + d; if (j >= slots.length) break;
    const dist = Math.hypot(slots[i].x - slots[j].x, slots[i].z - slots[j].z);
    if (dist < m) m = dist;
  }
  return m;
}

/* IGNORE LIST (v0.5.4) — folders that stay in the vault but off the tree. Obsidian's own "Excluded
   files" setting would be the natural home, but it isn't in the public API, and reaching for the private
   one risks a plugin-review rejection — so this is the plugin's own, explicit setting. */

/** Split a user-typed list (one per line, or comma separated) into usable patterns. Blanks are DROPPED:
 *  an empty pattern prefix-matches every path in the vault, which would silently blank the whole forest. */
export function parseIgnore(raw: string | undefined): string[] {
  return (raw ?? "").split(/[\n,]/).map((x) => x.trim().replace(/\/+$/, "").toLowerCase()).filter(Boolean);
}

/** Is this vault path inside one of the ignored folders (or the ignored file itself)? */
export function isIgnored(path: string, patterns: string[]): boolean {
  const p = path.toLowerCase();
  return patterns.some((pat) => p === pat || p.startsWith(pat + "/"));
}

export interface EveSettings {
  onlyTreeNotes: boolean;     // when true, only render notes that carry tree frontmatter
  ignoreFolders?: string;     // v0.5.4 — folders to keep in the vault but off the tree (one per line)
  forestByFolder: boolean;    // when true (default), each top-level folder is its own tree (D4)
  clusterLinkedDots: boolean; // when true (default), same-field linked dots cluster; others sit apart
  // F1 — user-dragged dot positions, stored in LOCAL coords (relative to the owning tree's origin),
  // keyed by vault path. Stale keys (renamed/deleted notes, or field changes) are dropped at load.
  dotPositions?: Record<string, { x: number; y: number; z: number }>;
  // F5 — hand-placed tree origins in WORLD coords (x,z; trees sit at y=0), keyed by tree id. A tree with
  // an entry stands exactly there, untouched by the layout; the rest are auto-placed (see autoOrigins).
  treeOrigins?: Record<string, { x: number; z: number }>;
  // F2 — persisted panel/appearance state (all optional; defaults applied at read time)
  panelCollapsed?: boolean;   // control panel shrunk to a pill
  textSize?: number;          // label text scale multiplier (default 1)
  glowScale?: number;         // dot-glow (light shine) intensity multiplier (default 1)
  zoomOutIcon?: ZoomIcon;     // far-zoom silhouette shape (default "round")
}

export type ZoomIcon = "round" | "conifer" | "apple";

export type View = { c: string; t: string };

/**
 * The stakeholder layer, per dot. NOTE-FORMAT is explicit that "every dot is seen by every stakeholder",
 * so the useful thing to show on a dot is not only who spoke but who HASN'T — a chair that never speaks
 * is the blindspot the method is built to surface. The cast is the OWNING TREE's, never the forest's:
 * telling a Muji dot that the Brand-the-Brand chairs are silent is noise, not a blindspot.
 */
export function chairsOnDot(views: View[] | undefined, treeCast: string[]): { spoke: View[]; silent: string[] } {
  const spoke = views ?? [];
  const heard = new Set(spoke.map((v) => v.c).filter(Boolean));
  return { spoke, silent: treeCast.filter((c) => c && !heard.has(c)) };
}

export interface EveNode {
  id: string;            // vault path (unique across the vault)
  title: string;
  description: string;
  treeType: TreeType;
  field: number;         // sector index WITHIN ITS TREE, -1 for root/trunk
  fieldName: string | null;
  time: number;          // ordinal for the Y axis
  views?: View[];        // stakeholder POV content-layer (chair c, take t); NOT a field
  // computed:
  tNorm: number;
  pos: THREE.Vector3;
  tree?: EveTree;               // back-ref to the owning tree (set during buildForest)
  sprite?: THREE.Sprite;        // dot sprite (set during buildDots)
  glowSprite?: THREE.Sprite;    // flower/apple glow sprite, if any
  _pinned?: boolean;            // F1: user-dragged → a fixed anchor (relaxation must not move it)
  _pool?: "tree" | "forest";    // v0.5.0: a seed sits in a pool, not the canopy — which pool it belongs to
}

export interface EveEdge {
  from: string;
  to: string;
  kind: "spine" | "branch" | "intra" | "rhizome";
}

/** One tree = one folder (D4): its own fields, trunk, layout, and movable origin. */
export interface EveTree {
  id: string;                       // stable key (folder path) — used by bridges + future publish
  topic: string;                    // display name (folder name)
  origin: { x: number; z: number }; // movable world position in the shared scene
  nodes: EveNode[];
  edges: EveEdge[];                 // within-tree links only
  fields: string[];                 // ordered unique field names -> sector index
  byId: Map<string, EveNode>;
  incoming: Map<string, string[]>;  // backlinks within the tree
  cast: string[];                   // stakeholder cast (chairs), incl. never-sat ones
  pool?: { rIn: number; rOut: number };  // v0.5.0: foot-pool radii, present only when this tree has field-seeds
  poolMesh?: THREE.Mesh;            // v0.5.0: the drawn foot pool (follows the tree when it is dragged)
  // runtime refs (set by the view):
  sil?: THREE.Sprite;               // zoom-out silhouette
  silMarks?: THREE.Sprite[];        // 🌸/🍎 markers on the zoom-out icon (if the tree has flower/apple)
  nameLabelEl?: HTMLElement;        // tree-name label
  fieldFlatG?: THREE.Group;         // F5: per-tree wedge (flat) group — repositioned live when the tree is dragged
  fieldColumnG?: THREE.Group;       // F5: per-tree wedge (column) group — repositioned live when the tree is dragged
}

/** A manual cross-tree link through a "middle/bridge file" that EXPLAINS the linkage (D4). */
export interface EveBridge {
  id: string;
  from: string;          // tree id (folder)
  to: string;            // tree id (folder)
  fromNote?: string;     // optional note path in `from`
  toNote?: string;       // optional note path in `to`
  title: string;
  explain: string;
  filePath?: string;     // the bridge note (clicking the bridge opens it)
}

export interface EveForest {
  trees: EveTree[];
  bridges: EveBridge[];
  seedPool?: { x: number; z: number; r: number };   // v0.5.0: the forest-wide pool for seeds with no field
}

export function angleOf(i: number, K: number): number {
  return i * (Math.PI * 2 / Math.max(1, K));
}

export function place(phi: number, rho: number, h: number): THREE.Vector3 {
  return new THREE.Vector3(rho * Math.cos(phi), h, -rho * Math.sin(phi));
}

/**
 * R8 placement (ported from the canonical renderer): time -> Y (semantic), field -> wedge,
 * dots never overlap regardless of `time`. Within each field the heights are RELAXED apart to a
 * minimum gap (keeping time order), then golden-ratio spread in angle + depth. Positions are LOCAL
 * to the tree (around 0,0); the view offsets them by the tree's origin. Replaces the old hash-jitter.
 */
export function placeNodes(allNodes: EveNode[], K: number): void {
  // seeds are pending topics: they sit in a pool on the ground and have no place on the time axis,
  // so they are excluded here (including from the time normalisation) and pooled separately.
  const nodes = allNodes.filter((n) => n.treeType !== "seed");
  if (!nodes.length) return;
  // A single non-finite `time` (YAML `.nan`, or an impossible date like 2026-13-45) poisons tMin/tMax and
  // sends EVERY dot in the tree to a non-finite position — which three.js draws as nothing at all, with no
  // error. One bad note must not be able to blank a tree, so broken times are excluded from the range and
  // then read as the oldest.
  const times = nodes.map((n) => n.time).filter(Number.isFinite);
  const tMin = times.length ? Math.min(...times) : 0;
  const tMax = times.length ? Math.max(...times) : 0;
  const span = (tMax - tMin) || 1;
  for (const n of nodes) n.tNorm = Number.isFinite(n.time) ? (n.time - tMin) / span : 0;

  const GA = 2.39996323, MINGAP = 0.52;     // golden angle; min vertical gap (> dot diameter 0.42)
  const relax = (hs: number[], lo: number, hi: number): number[] => {
    const o = hs.slice();
    for (let i = 1; i < o.length; i++) if (o[i] < o[i - 1] + MINGAP) o[i] = o[i - 1] + MINGAP;
    const sp = o[o.length - 1] - lo;
    if (o[o.length - 1] > hi && sp > 1e-6) { const s = (hi - lo) / sp; for (let i = 0; i < o.length; i++) o[i] = lo + (o[i] - lo) * s; }
    return o;
  };

  const roots = nodes.filter((n) => n.treeType === "root");
  const groups = new Map<string | number, EveNode[]>();
  for (const n of nodes) {
    if (n.treeType === "root") {
      // single root keeps the exact current position; multiple roots spread with a small golden-angle offset (like the trunk spine) so they don't overlap
      if (roots.length > 1) { const ri = roots.indexOf(n); n.pos = new THREE.Vector3(Math.cos(ri * GA) * 0.15, -1.2, Math.sin(ri * GA) * 0.15); }
      else n.pos = new THREE.Vector3(0, -1.2, 0);
      continue;
    }
    const key: string | number = (n.treeType === "trunk" || n.field < 0) ? "_axis" : n.field;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(n);
  }
  // central spine — trunks fanned around the axis (golden angle) + heights relaxed apart
  const cmp = (a: EveNode, b: EveNode) => (Number.isFinite(a.time) ? a.time : -Infinity) - (Number.isFinite(b.time) ? b.time : -Infinity) || (a.id < b.id ? -1 : 1);
  const axis = (groups.get("_axis") || []).sort(cmp);
  {
    const hs = relax(axis.map((n) => 0.6 + n.tNorm * (H - 0.8)), 0.6, H - 0.4);
    axis.forEach((n, i) => { n.pos = new THREE.Vector3(Math.cos(i * GA) * 0.22, hs[i], Math.sin(i * GA) * 0.22); });
  }
  // leaves — per field: relax heights apart, then golden-ratio spread in angle + depth
  for (const [key, leaves] of groups) {
    if (key === "_axis") continue;
    const fi = key as number;
    const a0 = angleOf(fi, K) + SEC_PAD + WEDGE_INSET, a1 = angleOf(fi + 1, K) - SEC_PAD - WEDGE_INSET;
    const aw = a1 > a0 ? a1 - a0 : (Math.PI * 2 / K) * 0.8;   // K>=20: pads eat the wedge; fall back to an equal share of the circle instead of a collapsed/negative wedge
    leaves.sort(cmp);
    const hs = relax(leaves.map((n) => 0.7 + n.tNorm * (H - 1.2)), 0.7, H - 0.5);
    leaves.forEach((n, i) => {
      const h = hs[i], canopy = 0.30 + 0.70 * (h / H);
      const phi = a0 + aw * (0.08 + 0.84 * ((i * 0.6180339887) % 1));
      const rho = R_INNER + canopy * (R - R_INNER) * (0.40 + 0.50 * ((i * 0.7548776662 + 0.33) % 1));
      n.pos = place(phi, rho, h);
    });
  }
}

/**
 * OPT-IN link-aware clustering (ported from the canonical renderer's `clusterRelax`, gated by
 * the `clusterLinkedDots` setting). Keeps the field wedge + a loosened height band, but pulls
 * SAME-FIELD linked dots together and repels all neighbours to a normal gap — so related dots
 * cluster while unrelated ones stay apart. Runs AFTER placeNodes, in LOCAL coords. Cross-field
 * links are NOT pulled (wedges stay readable and don't collapse to the axis). Verified no-overlap
 * (minNN > dot Ø 0.42) on the 183-dot Case-2 tree.
 */
export function clusterRelax(nodes: EveNode[], K: number, edges: EveEdge[]): void {
  const leaves = nodes.filter((n) => n.treeType === "leaf" && n.field >= 0);
  // clustering is O(n²·130) and skipped above 500 leaves; wedges collapse at K≥20 fields so containment math would be invalid
  if (leaves.length < 3 || leaves.length > 500 || K >= 20) return;
  const idx = new Map<string, number>(leaves.map((n, i) => [n.id, i]));
  const adj: number[][] = leaves.map(() => []);
  for (const e of edges) {
    const a = idx.get(e.from), b = idx.get(e.to);
    if (a == null || b == null || a === b) continue;
    if (leaves[a].field !== leaves[b].field) continue;   // same-field attraction only
    adj[a].push(b); adj[b].push(a);
  }
  const MIND = 0.82, ATT = 0.013, REP = 1.0, STEP = 0.40, ITER = 130, TAU = 6.2831853;
  const bnd = leaves.map((n) => ({
    a0: angleOf(n.field, K) + SEC_PAD + WEDGE_INSET, a1: angleOf(n.field + 1, K) - SEC_PAD - WEDGE_INSET,
    hlo: Math.max(0.7, n.pos.y - 2.2), hhi: Math.min(H * 1.16, n.pos.y + 2.2),
  }));
  for (let it = 0; it < ITER; it++) {
    const D = leaves.map(() => [0, 0, 0]);
    for (let i = 0; i < leaves.length; i++) {                    // same-field attraction (via adjacency)
      const n = leaves[i];
      for (const j of adj[i]) { const m = leaves[j];
        D[i][0] += (m.pos.x - n.pos.x) * ATT; D[i][1] += (m.pos.y - n.pos.y) * ATT * 0.4; D[i][2] += (m.pos.z - n.pos.z) * ATT; }
    }
    for (let i = 0; i < leaves.length; i++) {                    // all-pairs repulsion to a normal gap
      const a = leaves[i];
      for (let j = i + 1; j < leaves.length; j++) { const b = leaves[j];
        const ex = a.pos.x - b.pos.x, ey = a.pos.y - b.pos.y, ez = a.pos.z - b.pos.z;
        const L = Math.sqrt(ex * ex + ey * ey + ez * ez) || 1e-3;
        if (L < MIND) { const f = REP * (MIND - L) / L; D[i][0] += ex * f; D[i][1] += ey * f * 0.4; D[i][2] += ez * f; D[j][0] -= ex * f; D[j][1] -= ey * f * 0.4; D[j][2] -= ez * f; } }
    }
    for (let i = 0; i < leaves.length; i++) {                    // integrate + clamp to wedge/height/radius
      const n = leaves[i]; if (n._pinned) continue;              // F1: user-pinned dots are fixed anchors — others still repelled off them above
      let mx = D[i][0], my = D[i][1], mz = D[i][2];
      const ml = Math.sqrt(mx * mx + my * my + mz * mz); if (ml > STEP) { const s = STEP / ml; mx *= s; my *= s; mz *= s; }
      let x = n.pos.x + mx, y = n.pos.y + my, z = n.pos.z + mz;
      y = Math.min(bnd[i].hhi, Math.max(bnd[i].hlo, y));
      let ang = Math.atan2(-z, x); if (ang < 0) ang += TAU; let r = Math.hypot(x, z);
      let a0 = bnd[i].a0, a1 = bnd[i].a1; if (a0 < 0) a0 += TAU; if (a1 < 0) a1 += TAU;
      if (a1 >= a0) { if (ang < a0) ang = a0; else if (ang > a1) ang = a1; }
      const rmax = rMaxAt(y), rmin = R_BAND_MIN;
      if (r < rmin) r = rmin; else if (r > rmax) r = rmax;
      n.pos.set(r * Math.cos(ang), y, -r * Math.sin(ang));
    }
  }
}

/**
 * F4 — is a LOCAL position (x,y,z, relative to the tree origin) inside a field's usable wedge?
 * Uses the SAME wedge geometry the placement / clustering / drag-clamp use (angular inset, radial band,
 * dot-height band). A small tolerance keeps a legitimately drag-clamped dot valid. Used at LOAD to drop
 * saved positions whose owning note has since changed field (its dot then re-lays-out fresh).
 */
export function insideWedge(field: number, K: number, x: number, y: number, z: number): boolean {
  if (field < 0) return false;
  const TAU = Math.PI * 2, EPS = 1e-3;
  if (y < 0.7 - EPS || y > H * 1.16 + EPS) return false;
  const r = Math.hypot(x, z);
  if (r < R_BAND_MIN - EPS || r > rMaxAt(y) + EPS) return false;
  let a0 = angleOf(field, K) + SEC_PAD + WEDGE_INSET, a1 = angleOf(field + 1, K) - SEC_PAD - WEDGE_INSET;
  if (a0 < 0) a0 += TAU; if (a1 < 0) a1 += TAU;
  if (a1 < a0) return true;                            // degenerate wedge (many fields) — don't invalidate
  let ang = Math.atan2(-z, x); if (ang < 0) ang += TAU;
  return ang >= a0 - EPS && ang <= a1 + EPS;
}


/** A tree's foot pool. Its radius is HARD-CAPPED below the half-span between trees: two trees whose
 *  pools overlap is a structural lie about which topic a seed belongs to, so the cap wins over the seed
 *  gap if they ever conflict (it takes ~1700 pending topics on one tree before they do). */
export function treePoolPlacement(n: number): PoolLayout {
  return layoutPool(n, POOL_TREE_R_IN, POOL_TREE_R_OUT, POOL_Y, TREE_SPAN / 2 - 0.5);
}

/* TREE PLACEMENT (v0.5.3) — a tree goes where it is DROPPED. Drop it on empty ground and it stays there;
   drop it on another tree and the two swap. Only trees the thinker has never moved are auto-placed, on a
   checker grid around the reserved middle. (0.5.1 snapped every drop to a cell, which made the grid a cage
   rather than a default — the arrangement is the thinker's, the grid is only what to do before they care.) */

/** The tree a drop at (x,z) lands ON, if any — the swap partner. Null means empty ground: place it there. */
export function swapTargetAt(x: number, z: number, dragged: string,
  trees: { id: string; origin: { x: number; z: number } }[]): { id: string } | null {
  let best: { id: string } | null = null, bestD = GROUND_FOOTPRINT_R * 1.6;   // "on" = inside its footprint
  for (const t of trees) {
    if (t.id === dragged) continue;
    const d = Math.hypot(t.origin.x - x, t.origin.z - z);
    if (d < bestD) { bestD = d; best = { id: t.id }; }
  }
  return best;
}

/** Connected components of the bridge graph, largest first — the clusters that want to share ground. */
export function treeGroups(ids: string[], bridges: { from: string; to: string }[]): string[][] {
  const have = new Set(ids);
  const adj = new Map<string, Set<string>>(ids.map((id) => [id, new Set()]));
  for (const b of bridges) {
    if (!have.has(b.from) || !have.has(b.to) || b.from === b.to) continue;
    adj.get(b.from)!.add(b.to); adj.get(b.to)!.add(b.from);
  }
  const seen = new Set<string>(), out: string[][] = [];
  for (const id of ids) {
    if (seen.has(id)) continue;
    const g: string[] = [], q = [id]; seen.add(id);
    while (q.length) { const c = q.shift()!; g.push(c); for (const nb of adj.get(c)!) if (!seen.has(nb)) { seen.add(nb); q.push(nb); } }
    out.push(g);
  }
  return out.sort((a, b) => b.length - a.length);
}

/**
 * Where every tree stands. Hand-placed trees keep their exact position, untouched. The rest are laid onto
 * grid cells, group by group, so trees joined by a bridge share a patch of ground — and a group that
 * contains a hand-placed tree starts NEXT TO IT rather than in the middle of the forest.
 *
 * Groups are computed over ALL trees, hand-placed included. Computing them over only the auto set (the
 * 0.5.1 bug) silently dropped every bridge with one end already placed: dragging one tree once was enough
 * to leave its partner ungrouped on the far side of the forest.
 */
export function autoOrigins(ids: string[], hand: Record<string, { x: number; z: number }>,
  bridges: { from: string; to: string }[], seedCount: number): Record<string, { x: number; z: number }> {
  const out: Record<string, { x: number; z: number }> = {};
  // Number.isFinite, not typeof === "number": NaN and Infinity are both "number", and a non-finite
  // position renders as nothing at all in three.js — a damaged setting would silently erase a tree.
  const isHand = (id: string) => !!hand[id] && Number.isFinite(hand[id].x) && Number.isFinite(hand[id].z);
  const taken: { x: number; z: number }[] = [];
  for (const id of ids) if (isHand(id)) { out[id] = { x: hand[id].x, z: hand[id].z }; taken.push(out[id]); }

  const auto = ids.filter((id) => !isHand(id));
  if (!auto.length) return out;

  const SEP = GROUND_FOOTPRINT_R * 2, inner = poolClearing(seedCount) + GROUND_FOOTPRINT_R;
  const free = (x: number, z: number) =>
    Math.hypot(x, z) >= inner && taken.every((t) => Math.hypot(t.x - x, t.z - z) >= SEP);
  const claim = (c: { x: number; z: number }) => { taken.push(c); return c; };

  /** Nearest free spot to (px,pz) on a TREE_SPAN lattice anchored THERE — used to gather a group beside
   *  a tree the thinker placed by hand, which is nowhere near the grid. */
  const spiralFrom = (px: number, pz: number): { x: number; z: number } | null => {
    if (free(px, pz)) return { x: px, z: pz };
    for (let r = 1; r <= 40; r++) {
      const ring: { x: number; z: number }[] = [];
      for (let dx = -r; dx <= r; dx++) for (let dz = -r; dz <= r; dz++) {
        if (Math.max(Math.abs(dx), Math.abs(dz)) !== r) continue;
        ring.push({ x: px + dx * TREE_SPAN, z: pz + dz * TREE_SPAN });
      }
      ring.sort((a, b) => Math.hypot(a.x - px, a.z - pz) - Math.hypot(b.x - px, b.z - pz));
      for (const c of ring) if (free(c.x, c.z)) return c;
    }
    return null;
  };

  // cells for groups with no hand-placed member: the checker grid around the reserved middle
  const cells = gridOrigins(auto.length + taken.length + 4, seedCount);
  const cellFree = new Set(cells.map((_, i) => i));
  const takeCell = (px: number, pz: number): { x: number; z: number } | null => {
    let best = -1, bestD = Infinity;
    for (const i of cellFree) {
      const c = cells[i]; if (!free(c.x, c.z)) { cellFree.delete(i); continue; }
      const d = Math.hypot(c.x - px, c.z - pz); if (d < bestD) { bestD = d; best = i; }
    }
    if (best < 0) return null;
    cellFree.delete(best); return cells[best];
  };

  for (const group of treeGroups(ids, bridges)) {
    const members = group.filter((id) => !isHand(id));
    if (!members.length) continue;
    // a group holding a hand-placed tree gathers AROUND it; otherwise it takes grid cells near the middle
    const anchors = group.filter(isHand).map((id) => out[id]);
    let sx = anchors.reduce((a, p) => a + p.x, 0), sz = anchors.reduce((a, p) => a + p.z, 0), n = anchors.length;
    for (const id of members) {
      const cx = n === 0 ? 0 : sx / n, cz = n === 0 ? 0 : sz / n;
      const c = (anchors.length ? spiralFrom(cx, cz) : takeCell(cx, cz)) ?? spiralFrom(cx, cz);
      if (!c) break;
      out[id] = claim(c); sx += c.x; sz += c.z; n++;
    }
  }
  for (const id of auto) if (!out[id]) out[id] = claim(spiralFrom(0, 0) ?? { x: 0, z: 0 });
  return out;
}

/** Thin a set of screen labels so none overlaps another; the nearest to the camera wins a contest. */
export function pickNonOverlapping<T extends { sx: number; sy: number; dist: number }>(items: T[], minDist: number): T[] {
  const kept: T[] = [];
  for (const it of [...items].sort((a, b) => a.dist - b.dist)) {
    if (kept.some((k) => Math.hypot(k.sx - it.sx, k.sy - it.sy) < minDist)) continue;
    kept.push(it);
  }
  return kept;
}

/** Radius of ground the forest pool needs kept clear of any trunk, for a given seed count. */
export function poolClearing(seedCount: number): number {
  const wanted = Math.min(POOL_FOREST_R_MAX, POOL_FOREST_R_MIN + 1.05 * Math.sqrt(seedCount));
  const { rOut } = layoutPool(seedCount, 0, wanted, POOL_Y);
  return rOut + GROUND_FOOTPRINT_R + POOL_PAD;
}

/**
 * Auto-arrangement for trees the thinker hasn't placed by hand: a CHECKER grid around a reserved middle,
 * not a row. A row is fine at five trees and unusable at thirty — it stretches the forest along one axis,
 * so the fit distance grows linearly and every tree icon shrinks with it. A grid grows as the square root
 * instead, and it leaves the one place the seed pool must always be: the exact centre.
 *
 * Cells are taken nearest-the-middle first (a small forest stays compact), skipping any that would stand
 * in the pool's clearing, and the grid widens a ring at a time until it has room.
 */
export function gridOrigins(n: number, seedCount: number): { x: number; z: number }[] {
  if (n <= 0) return [];
  const clear = seedCount > 0 ? poolClearing(seedCount) : 0;
  const inner = clear + GROUND_FOOTPRINT_R;
  // a lattice generous enough to hold n cells outside the reserved middle, whatever its size
  const k = Math.ceil((inner + Math.ceil(Math.sqrt(n)) * TREE_SPAN) / TREE_SPAN) * 2 + 2;
  const usable: { x: number; z: number; d: number }[] = [];
  for (let r = 0; r < k; r++) for (let c = 0; c < k; c++) {
    const x = (c - (k - 1) / 2) * TREE_SPAN, z = (r - (k - 1) / 2) * TREE_SPAN;
    const d = Math.hypot(x, z);
    if (d >= inner) usable.push({ x, z, d });
  }
  usable.sort((a, b) => a.d - b.d || Math.atan2(a.z, a.x) - Math.atan2(b.z, b.x) || a.x - b.x);

  // Grow ONE connected patch: start at the cell nearest the middle, then repeatedly take the cell that
  // touches what is already placed. Taking the n cells nearest the middle instead (the obvious rule)
  // hands back a sparse ring around the pool — its cells can sit 48 apart with a 16 span, so "put linked
  // trees in the same area" becomes impossible however the trees are then assigned.
  const out: { x: number; z: number }[] = [];
  const free = new Set(usable.map((_, i) => i));
  for (let placed = 0; placed < n && free.size; placed++) {
    let best = -1, bestKey = Infinity;
    for (const i of free) {
      const u = usable[i];
      // distance to the nearest cell already placed (0th: distance to the middle), then centre-distance
      let near = u.d;
      if (out.length) { near = Infinity; for (const o of out) near = Math.min(near, Math.hypot(o.x - u.x, o.z - u.z)); }
      const key = near * 1e4 + u.d;
      if (key < bestKey) { bestKey = key; best = i; }
    }
    free.delete(best); out.push({ x: usable[best].x, z: usable[best].z });
  }
  return out;
}


/** Where the forest pool sits: centred on the row of trees, pushed clear of every canopy footprint.
 *  The radius is the one layoutPool actually ends up using (it may have grown), never the wanted one —
 *  placing against the wanted radius is how a big seed bank would end up sitting on a tree. */
export function forestPoolPlacement(n: number, origins: { x: number; z: number }[], preferred?: { x: number; z: number }): { x: number; z: number; r: number; slots: PoolSlot[] } {
  const wanted = Math.min(POOL_FOREST_R_MAX, POOL_FOREST_R_MIN + 1.05 * Math.sqrt(n));
  const rOut = wanted;
  // The basin's size is a landmark decision; the seeds' spread is a legibility one. Packing the seeds at a
  // fixed comfortable spacing (rather than spreading them to the rim) keeps them reading as one cluster in
  // a shore of brown, however big the basin gets.
  const cluster = Math.min(rOut * POOL_FILL, Math.max(SEED_SPREAD, SEED_SPREAD * Math.sqrt(n) * 0.55));
  const { slots } = layoutPool(n, 0, cluster, POOL_Y, rOut * POOL_FILL);
  if (!origins.length) return { x: 0, z: 0, r: rOut, slots };

  // The seed bank has to be somewhere the thinker will actually walk past, so the pool wants the MIDDLE of
  // the forest — and settles for the nearest clear ground when the middle is occupied. (Pushing it beyond
  // the outermost tree, the obvious rule, puts it hundreds of units off the edge as soon as trees are
  // dragged apart: technically clear, practically lost.)
  // An auto-arranged forest passes its grid origin: the middle is a place the layout RESERVED, not an
  // average of where the trees happen to be (with one tree those differ, and the reserved middle is right).
  const cx = preferred ? preferred.x : origins.reduce((a, o) => a + o.x, 0) / origins.length;
  const cz = preferred ? preferred.z : origins.reduce((a, o) => a + o.z, 0) / origins.length;
  const need = rOut + GROUND_FOOTPRINT_R + POOL_PAD;
  const clears = (x: number, z: number) => origins.every((o) => Math.hypot(o.x - x, o.z - z) >= need);
  if (clears(cx, cz)) return { x: cx, z: cz, r: rOut, slots };

  const step = need * 0.4;
  for (let ring = 1; ring <= 400; ring++) {
    const rad = ring * step, k = Math.max(8, Math.round((Math.PI * 2 * rad) / step));
    for (let i = 0; i < k; i++) {
      const a = (i / k) * Math.PI * 2, x = cx + rad * Math.cos(a), z = cz + rad * Math.sin(a);
      if (clears(x, z)) return { x, z, r: rOut, slots };
    }
  }
  // unreachable for any real forest; keep the old push-past-the-edge rule as the honest last resort
  return { x: cx, z: Math.max(...origins.map((o) => o.z)) + need, r: rOut, slots };
}

/* ZOOM SCALE (v0.5.0) — four named stops. Each stop is a real framing distance measured from the
   scene itself (fit-the-whole-forest / fit-three-trees / fit-one-tree), NOT a hard-coded percentage:
   that way "click this stop" and "which stop am I on" are the same number, so the indicator can never
   disagree with the button you just pressed. Ordered far -> near, top -> bottom in the UI. */
export type ZoomLevel = "forest" | "three" | "tree" | "leaf";
export const ZOOM_LEVELS: ZoomLevel[] = ["forest", "three", "tree", "leaf"];
export interface ZoomStop { level: ZoomLevel; d: number; reachable: boolean }

export const LEAF_OF_TREE = 0.30;   // "close on a leaf" = this fraction of the one-tree framing distance
const STOP_APART = 1.05;            // two stops closer than this ratio are the same view — the outer one dies

/** Build the scale. A stop the current forest cannot actually express (three trees in a two-tree vault,
 *  "whole forest" in a one-tree vault) comes back unreachable, so the UI can dim it instead of offering
 *  a button that goes nowhere. */
export function zoomStops(fitAll: number, three: number, one: number): ZoomStop[] {
  const d: Record<ZoomLevel, number> = { forest: fitAll, three, tree: one, leaf: one * LEAF_OF_TREE };
  const out: ZoomStop[] = ZOOM_LEVELS.map((level) => ({ level, d: d[level], reachable: false }));
  // Walk near -> far; each stop must be meaningfully further out than the last live one. The NEAREST stop
  // is always reachable, whatever the numbers say: there is always somewhere the camera is. Deriving that
  // from the distances instead left every stop dead when a scene measured out degenerate (all zeros), and
  // nearestStop — which runs once per frame inside the rAF loop — then read past an empty array and killed
  // the loop, freezing the view for good.
  let nearest = 0;
  for (let i = out.length - 1; i >= 0; i--) {
    if (i === out.length - 1 || out[i].d > nearest * STOP_APART) { out[i].reachable = true; nearest = out[i].d; }
  }
  return out;
}

/** Which stop the camera is currently sitting on — nearest in RATIO, not in absolute distance, because
 *  the stops are spread geometrically. Never returns an unreachable stop. */
export function nearestStop(d: number, stops: ZoomStop[]): ZoomLevel {
  const live = stops.filter((s) => s.reachable);
  if (!live.length) return "leaf";                  // belt as well as braces: this runs every frame
  let best = live[live.length - 1], bestErr = Infinity;
  for (const s of live) {
    const err = Math.abs(Math.log(Math.max(d, 1e-6) / s.d));
    if (err < bestErr) { bestErr = err; best = s; }
  }
  return best.level;
}

/* LEVEL OF DETAIL — derived from the scale's own stops, never from a percentage of the fit distance.
   The old bands were fractions of D0 (the WHOLE-forest framing distance), which inverted at every stop
   that frames fewer trees: flying to "three trees" put the camera at a SMALLER fraction of D0, so the
   view turned MORE detail on and every note's title and description piled up on top of each other.
   Tying detail to the stops instead means the icon you click is a promise about what you will see. */
export interface Lod {
  sil: number;        // silhouette crossfade: 1 = each tree is a single icon
  title: number;      // node-title opacity
  desc: number;       // node-description opacity (descriptions are the closest band)
  fieldName: number;  // field-name labels — only useful once you are down to one tree
  treeName: number;   // tree-name labels beneath each tree — they take over once titles go
  accent: number;     // 🌸 / 🍎 markers
}

const smooth = (a: number, b: number, x: number): number => {
  // A degenerate band (a === b, or non-finite inputs from a scene measured before anything is placed)
  // divides by zero and hands NaN to every opacity downstream — and three.js renders NaN as nothing at
  // all, silently. Collapse it to a hard step instead.
  if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(x)) return 0;
  if (b === a) return x >= b ? 1 : 0;
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

export function lodAt(d: number, stops: ZoomStop[]): Lod {
  const pick = (l: ZoomLevel) => stops.find((s) => s.level === l);
  const dTree = pick("tree")?.d ?? 1, dLeaf = pick("leaf")?.d ?? dTree * LEAF_OF_TREE;
  const forest = pick("forest");
  // a vault too small to have a real "forest" still needs somewhere to become icons: fall back to
  // multiples of its one-tree framing distance rather than leaving the band degenerate.
  const far = forest?.reachable ? forest.d : dTree * 1.9;
  // Icons must be guaranteed at the forest stop (silTo = far) AND must arrive on their own once a tree is
  // too small on screen to show any structure — trees the thinker has dragged far apart make a forest whose
  // fit distance is enormous, and without the angular rule the middle of that range is an unreadable smear.
  const silFrom = Math.min(dTree * 4, far * 0.55);
  const silTo = Math.min(far, silFrom * 2);

  const sil = smooth(silFrom, silTo, d), detail = 1 - sil;
  const treeName = smooth(dTree * 1.15, dTree * 1.8, d);
  return {
    sil,
    title: detail * (1 - smooth(dTree * 1.05, dTree * 1.45, d)),
    desc: detail * (1 - smooth(dLeaf * 1.15, dLeaf * 2.2, d)),
    fieldName: detail * (1 - treeName),
    treeName,
    accent: detail * (1 - smooth(dTree * 1.2, dTree * 1.9, d)),
  };
}

/* small colour helpers */
export function hexA(hex: string, a: number): string {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}
export function lighten(hex: string, amt: number): number {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  r = Math.round(r + (255 - r) * amt);
  g = Math.round(g + (255 - g) * amt);
  b = Math.round(b + (255 - b) * amt);
  return (r << 16) | (g << 8) | b;
}
export function lightHex(hex: string, amt: number): string {
  return "#" + lighten(hex, amt).toString(16).padStart(6, "0");
}
