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
  seed:   { tint: "#6fbf5a", ring: "#3f7a33", r: 0.46, glow: "#9dff84" },   // green + lit: the seeds are the only light in a matte brown pool
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

export interface EveSettings {
  onlyTreeNotes: boolean;     // when true, only render notes that carry tree frontmatter
  forestByFolder: boolean;    // when true (default), each top-level folder is its own tree (D4)
  clusterLinkedDots: boolean; // when true (default), same-field linked dots cluster; others sit apart
  // F1 — user-dragged dot positions, stored in LOCAL coords (relative to the owning tree's origin),
  // keyed by vault path. Stale keys (renamed/deleted notes, or field changes) are dropped at load.
  dotPositions?: Record<string, { x: number; y: number; z: number }>;
  // F5 (LEGACY, pre-0.5.1) — free-dragged tree origins in WORLD coords. Trees now live in grid cells, so
  // this is read once to derive an initial `treeOrder` and then dropped. Kept in the type for that read.
  treeOrigins?: Record<string, { x: number; z: number }>;
  // v0.5.1 — which tree stands in which cell, as tree ids in cell order. An ORDER, not coordinates: the
  // arrangement is always a permutation of the grid, so it survives the grid resizing when a folder is
  // added or removed. Dropping a tree on an occupied cell swaps the two entries.
  treeOrder?: string[];
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
  const times = nodes.map((n) => n.time);
  const tMin = Math.min(...times), tMax = Math.max(...times), span = (tMax - tMin) || 1;
  for (const n of nodes) n.tNorm = (n.time - tMin) / span;

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
  const axis = (groups.get("_axis") || []).sort((a, b) => a.time - b.time || (a.id < b.id ? -1 : 1));
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
    leaves.sort((a, b) => a.time - b.time || (a.id < b.id ? -1 : 1));
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

/* TREE CELLS (v0.5.1) — every tree stands in a grid cell, always. Free-dragging let a tree be parked
   anywhere, including so far out that the forest's fit distance ballooned and no zoom stop framed it
   usefully any more. Cells are a fixed, bounded set: dropping a tree picks the nearest one, and if that
   cell is taken the two trees SWAP. The arrangement is therefore always a permutation of the grid, which
   is why it can be stored as an order of tree ids rather than as coordinates — and why it survives a tree
   being added or removed. */

/** Index of the cell a drop at (x,z) belongs to. Always returns one: the grid is the only place to be. */
export function nearestCellIndex(x: number, z: number, cells: { x: number; z: number }[]): number {
  let best = 0, bestD = Infinity;
  cells.forEach((c, i) => { const d = Math.hypot(c.x - x, c.z - z); if (d < bestD) { bestD = d; best = i; } });
  return best;
}

/**
 * Default arrangement: trees joined by bridges are kept contiguous, so a linked pair lands in
 * neighbouring cells instead of opposite corners. Cells are handed out nearest-the-middle first, so
 * contiguous in this order means close together on the ground.
 */
export function linkGroupedOrder(ids: string[], bridges: { from: string; to: string }[]): string[] {
  const have = new Set(ids);
  const adj = new Map<string, string[]>(ids.map((id) => [id, []]));
  for (const b of bridges) {
    if (!have.has(b.from) || !have.has(b.to) || b.from === b.to) continue;
    adj.get(b.from)!.push(b.to); adj.get(b.to)!.push(b.from);
  }
  // largest cluster first so the most-connected topics take the cells closest to the middle
  const seen = new Set<string>(), groups: string[][] = [];
  for (const id of ids) {
    if (seen.has(id)) continue;
    const group: string[] = [], queue = [id]; seen.add(id);
    while (queue.length) {
      const cur = queue.shift()!; group.push(cur);
      for (const nb of adj.get(cur)!) if (!seen.has(nb)) { seen.add(nb); queue.push(nb); }
    }
    groups.push(group);
  }
  groups.sort((a, b) => b.length - a.length);
  return groups.flat();
}

/** Connected components of the bridge graph, largest first — the clusters that want to share ground. */
export function treeGroups(ids: string[], bridges: { from: string; to: string }[]): string[][] {
  const order = linkGroupedOrder(ids, bridges), have = new Set(ids);
  const adj = new Map<string, Set<string>>(ids.map((id) => [id, new Set()]));
  for (const b of bridges) {
    if (!have.has(b.from) || !have.has(b.to) || b.from === b.to) continue;
    adj.get(b.from)!.add(b.to); adj.get(b.to)!.add(b.from);
  }
  const seen = new Set<string>(), out: string[][] = [];
  for (const id of order) {
    if (seen.has(id)) continue;
    const g: string[] = [], q = [id]; seen.add(id);
    while (q.length) { const c = q.shift()!; g.push(c); for (const nb of adj.get(c)!) if (!seen.has(nb)) { seen.add(nb); q.push(nb); } }
    out.push(g);
  }
  return out;
}

/**
 * Lay groups onto cells so each group occupies ONE compact patch of ground — "the same area", which is
 * what a bridge between two topics means spatially. Consecutive cell indices are NOT enough: the inner
 * ring around the reserved middle has four cells 90 degrees apart, so neighbours in the index are on
 * opposite sides of the pool. Each group instead seeds at the most central free cell and then takes the
 * free cell nearest its own running centre, which keeps it together whatever shape the grid is.
 * Returns tree ids in CELL order (result[i] stands in cells[i]).
 */
export function arrangeOnCells(groups: string[][], cells: { x: number; z: number }[]): (string | null)[] {
  const out: (string | null)[] = cells.map(() => null);
  const free = new Set(cells.map((_, i) => i));
  const takeNearest = (px: number, pz: number): number => {
    let best = -1, bestD = Infinity;
    for (const i of free) { const d = Math.hypot(cells[i].x - px, cells[i].z - pz); if (d < bestD) { bestD = d; best = i; } }
    free.delete(best); return best;
  };
  for (const group of groups) {
    if (!free.size) break;
    let sx = 0, sz = 0, n = 0;
    for (const id of group) {
      if (!free.size) break;
      const i = n === 0 ? takeNearest(0, 0) : takeNearest(sx / n, sz / n);   // seed centrally, then hug the group
      out[i] = id; sx += cells[i].x; sz += cells[i].z; n++;
    }
  }
  return out;
}

/**
 * The order cells are handed out in: the thinker's saved arrangement where there is one, with trees it
 * doesn't mention appended in link-grouped order. Entries for trees that no longer exist are dropped
 * WITHOUT re-packing the rest, so deleting one folder doesn't shuffle the whole forest.
 */
export function resolveTreeOrder(ids: string[], saved: string[] | undefined, bridges: { from: string; to: string }[],
  cells?: { x: number; z: number }[]): string[] {
  const have = new Set(ids);
  const kept = (saved ?? []).filter((id) => have.has(id));
  const seen = new Set(kept);
  const rest = ids.filter((id) => !seen.has(id));
  if (!kept.length && cells) {
    // nothing saved: lay the whole forest out by link groups, each on its own patch of ground
    return arrangeOnCells(treeGroups(ids, bridges), cells).filter((x): x is string => x !== null);
  }
  return [...kept, ...linkGroupedOrder(rest, bridges)];
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
  let nearest = 0;   // walk near -> far; each stop must be meaningfully further out than the last live one
  for (let i = out.length - 1; i >= 0; i--) {
    if (out[i].d > nearest * STOP_APART) { out[i].reachable = true; nearest = out[i].d; }
  }
  return out;
}

/** Which stop the camera is currently sitting on — nearest in RATIO, not in absolute distance, because
 *  the stops are spread geometrically. Never returns an unreachable stop. */
export function nearestStop(d: number, stops: ZoomStop[]): ZoomLevel {
  const live = stops.filter((s) => s.reachable);
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
