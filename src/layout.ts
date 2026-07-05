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

export type TreeType = "root" | "trunk" | "leaf" | "flower" | "apple";

export const ROLE: Record<TreeType, { tint: string; ring: string; r: number; glow?: string }> = {
  leaf:   { tint: "#aeb9b6", ring: "#7c8a86", r: 0.21 },
  trunk:  { tint: "#8f87a0", ring: "#5f566f", r: 0.30 },
  root:   { tint: "#a98f5e", ring: "#6f5a32", r: 0.54 },
  flower: { tint: "#cf8aa3", ring: "#9c5572", r: 0.40, glow: "#ff9ec2" },
  apple:  { tint: "#d77f72", ring: "#a14b3f", r: 0.42, glow: "#ff8a76" },
};

export interface EveSettings {
  onlyTreeNotes: boolean;     // when true, only render notes that carry tree frontmatter
  forestByFolder: boolean;    // when true (default), each top-level folder is its own tree (D4)
  clusterLinkedDots: boolean; // when true (default), same-field linked dots cluster; others sit apart
  // F1 — user-dragged dot positions, stored in LOCAL coords (relative to the owning tree's origin),
  // keyed by vault path. Stale keys (renamed/deleted notes, or field changes) are dropped at load.
  dotPositions?: Record<string, { x: number; y: number; z: number }>;
  // F2 — persisted panel/appearance state (all optional; defaults applied at read time)
  panelCollapsed?: boolean;   // control panel shrunk to a pill
  textSize?: number;          // label text scale multiplier (default 1)
  glowScale?: number;         // dot-glow (light shine) intensity multiplier (default 1)
  zoomOutIcon?: ZoomIcon;     // far-zoom silhouette shape (default "round")
}

export type ZoomIcon = "round" | "conifer" | "apple";

export type View = { c: string; t: string };

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
  _lens?: number;               // chair-lens opacity factor (1 lit / 0.10 dimmed)
  _pinned?: boolean;            // F1: user-dragged → a fixed anchor (relaxation must not move it)
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
  // runtime refs (set by the view):
  sil?: THREE.Sprite;               // zoom-out silhouette
  silMarks?: THREE.Sprite[];        // 🌸/🍎 markers on the zoom-out icon (if the tree has flower/apple)
  nameLabelEl?: HTMLElement;        // tree-name label
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
export function placeNodes(nodes: EveNode[], K: number): void {
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
