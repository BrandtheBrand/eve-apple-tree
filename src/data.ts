import { App, TFile, Notice } from "obsidian";
import {
  EveNode, EveEdge, EveTree, EveBridge, EveForest, EveSettings, View, TreeType,
  placeNodes, clusterRelax, insideWedge, TREE_SPAN,
} from "./layout";

const TREE_TYPES: TreeType[] = ["root", "trunk", "leaf", "flower", "apple"];

function asTreeType(v: unknown): TreeType {
  const s = String(v ?? "").toLowerCase().trim();
  return (TREE_TYPES as string[]).includes(s) ? (s as TreeType) : "leaf";
}

function parseTime(v: unknown, fallbackDays: number): number {
  if (v instanceof Date) return v.getTime() / 86400000;   // Obsidian's YAML can hand back Date objects for unquoted dates
  if (typeof v === "number") return v;
  if (typeof v === "string" && v.trim()) {
    const t = Date.parse(v);
    if (!isNaN(t)) return t / 86400000; // days since epoch
    const n = parseFloat(v);
    if (!isNaN(n)) return n;
  }
  return fallbackDays;
}

/** First meaningful line of a note (skips frontmatter + headings), trimmed for use as a description. */
function firstParagraph(content: string): string {
  let body = content;
  if (body.startsWith("---")) {
    const end = body.indexOf("\n---", 3);
    if (end !== -1) body = body.slice(body.indexOf("\n", end + 1) + 1);
  }
  for (const raw of body.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith("#") || line.startsWith("---") || line.startsWith("<!--")) continue;
    const clean = line.replace(/[*_`>#\[\]]/g, "").trim();
    if (clean) return clean.length > 160 ? clean.slice(0, 157) + "…" : clean;
  }
  return "";
}

/** Stakeholder views from frontmatter: `views: [{c, t}]` (or `{chair, take}`). */
function parseFmViews(v: unknown): View[] | undefined {
  if (!Array.isArray(v)) return undefined;
  const out: View[] = [];
  for (const it of v) {
    if (it && typeof it === "object") {
      const o = it as Record<string, unknown>;
      const c = String(o.c ?? o.chair ?? "").trim();
      const t = String(o.t ?? o.take ?? "").trim();
      if (c) out.push({ c, t });
    }
  }
  return out.length ? out : undefined;
}

/** Stakeholder views from a `## Stakeholder views` body section (`- **Chair:** take` lines). */
function parseBodyViews(content: string): View[] | undefined {
  const lines = content.split("\n");
  let i = lines.findIndex((l) => /^#{1,6}\s+stakeholder views\b/i.test(l.trim()));
  if (i < 0) return undefined;
  const out: View[] = [];
  for (i = i + 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    if (/^#{1,6}\s/.test(line)) break;                       // next heading ends the section
    const m = line.match(/^[-*]\s*\*\*(.+?)\*\*\s*[:：]?\s*(.*)$/);
    if (m) { const c = m[1].replace(/[:：]\s*$/, "").trim(); if (c) out.push({ c, t: m[2].trim() }); }
  }
  return out.length ? out : undefined;
}

/**
 * Build the FOREST from the vault (D4). One top-level folder = one tree; each tree is independent
 * (its own fields, trunk, R8 layout, and movable origin). Cross-tree connections exist ONLY through
 * bridge files. A single-folder / flat vault yields one tree (back-compatible).
 */
export async function buildForest(app: App, settings: EveSettings): Promise<EveForest> {
  const files = app.vault.getMarkdownFiles();
  const forestByFolder = settings.forestByFolder !== false;
  const treeKeyOf = (path: string): string => {
    if (!forestByFolder) return "(all)";
    const i = path.indexOf("/");
    return i < 0 ? "(root)" : path.slice(0, i);
  };

  // pass 1: split files into bridge-defs vs per-tree file lists
  const bridges: EveBridge[] = [];
  const treeFiles = new Map<string, TFile[]>();
  for (const file of files) {
    const cache = app.metadataCache.getFileCache(file);
    const fm = cache?.frontmatter ?? {};
    if (fm["bridge_from"] != null && fm["bridge_to"] != null) {     // a bridge / "middle file"
      const explain = typeof fm["explain"] === "string" ? fm["explain"]
        : (typeof fm["description"] === "string" ? fm["description"] : "");
      bridges.push({
        id: file.path, from: String(fm["bridge_from"]).trim(), to: String(fm["bridge_to"]).trim(),
        fromNote: fm["bridge_from_note"] != null ? String(fm["bridge_from_note"]).trim() : undefined,
        toNote: fm["bridge_to_note"] != null ? String(fm["bridge_to_note"]).trim() : undefined,
        title: (typeof fm["title"] === "string" && fm["title"]) || file.basename,
        explain, filePath: file.path,
      });
      continue;
    }
    const hasTreeFm = fm["tree_type"] != null || fm["field"] != null || fm["time"] != null || fm["flower"] != null;
    if (settings.onlyTreeNotes && !hasTreeFm) continue;
    const key = treeKeyOf(file.path);
    if (!treeFiles.has(key)) treeFiles.set(key, []);
    treeFiles.get(key)!.push(file);
  }

  const ingestedCount = [...treeFiles.values()].reduce((s, l) => s + l.length, 0);
  if (ingestedCount > 1500) new Notice("Eve Apple Tree: large vault (" + ingestedCount + " notes). Tip: turn on 'Only show notes with tree frontmatter' in settings for a cleaner, faster tree.", 8000);

  const resolved = app.metadataCache.resolvedLinks || {};

  // pass 2: build each tree independently
  const trees: EveTree[] = [];
  const skippedClustering: string[] = [];
  for (const [key, tfiles] of treeFiles) {
    const fieldOrder: string[] = [];
    const fieldIndex = new Map<string, number>();
    const ensureField = (name: string): number => {
      if (!fieldIndex.has(name)) { fieldIndex.set(name, fieldOrder.length); fieldOrder.push(name); }
      return fieldIndex.get(name)!;
    };

    const nodes: EveNode[] = [];
    const byId = new Map<string, EveNode>();
    for (const file of tfiles) {
      const cache = app.metadataCache.getFileCache(file);
      const fm = cache?.frontmatter ?? {};
      const treeType = asTreeType(fm["tree_type"] ?? (fm["flower"] ? "flower" : undefined));
      const onAxis = treeType === "root" || treeType === "trunk";
      const fieldNameRaw = fm["field"] != null ? String(fm["field"]).trim() : "";
      const fieldName = onAxis ? null : (fieldNameRaw || "Unfiled");
      const field = fieldName ? ensureField(fieldName) : -1;

      let description = typeof fm["description"] === "string" ? fm["description"] : "";
      let views = parseFmViews(fm["views"]);
      const wantBodyViews = !views && (cache?.headings ?? []).some((hd) => /^stakeholder views\b/i.test(hd.heading));
      // big-vault guard: over 2000 ingested notes, skip the body read done purely for description extraction (leave description "") — but STILL read when stakeholder views are needed (rare).
      const bigVault = ingestedCount > 2000;
      if ((!description && !bigVault) || wantBodyViews) {
        let content = "";
        try { content = await app.vault.cachedRead(file); } catch { content = ""; }
        if (!description && !bigVault) description = firstParagraph(content);
        if (wantBodyViews) views = parseBodyViews(content);
      }

      const node: EveNode = {
        id: file.path,
        title: (typeof fm["title"] === "string" && fm["title"]) || file.basename,
        description, treeType, field, fieldName,
        time: parseTime(fm["time"], file.stat.ctime / 86400000),
        views, tNorm: 0, pos: null as any,
      };
      nodes.push(node); byId.set(file.path, node);
    }

    // edges + backlinks WITHIN this tree only (cross-tree resolved links are dropped — D4: bridges only)
    const edges: EveEdge[] = [];
    const incoming = new Map<string, string[]>();
    for (const file of tfiles) {
      const src = file.path; const a = byId.get(src); if (!a) continue;
      for (const dest of Object.keys(resolved[src] || {})) {
        const b = byId.get(dest); if (!b || a === b) continue;          // same-tree only
        const aAxis = a.field < 0, bAxis = b.field < 0;
        let kind: EveEdge["kind"];
        if (aAxis && bAxis) kind = "spine";
        else if (aAxis || bAxis) kind = "branch";
        else if (a.field === b.field) kind = "intra";
        else kind = "rhizome";
        edges.push({ from: src, to: dest, kind });
        if (!incoming.has(dest)) incoming.set(dest, []);
        incoming.get(dest)!.push(src);
      }
    }

    const K = Math.max(1, fieldOrder.length);
    placeNodes(nodes, K);   // local positions around (0,0)
    // F1: apply user-dragged positions BEFORE relaxation so pinned dots sit exactly where dropped
    // and neighbours repel off them; stored in base local coords (relative to the tree's origin).
    const saved = settings.dotPositions || {};
    for (const n of nodes) {
      const s = saved[n.id];
      if (!s || typeof s.x !== "number" || typeof s.y !== "number" || typeof s.z !== "number") continue;
      // F4: only field dots are draggable. Root/trunk aren't, and a note whose `field` property changed
      // must lay out fresh — so drop any saved entry that no longer falls in the node's CURRENT field
      // wedge (changing the note's field is the only sanctioned way to move a dot between fields).
      if (n.field < 0 || n.treeType === "root" || n.treeType === "trunk" || !insideWedge(n.field, K, s.x, s.y, s.z)) {
        delete saved[n.id]; continue;
      }
      n.pos.set(s.x, s.y, s.z); n._pinned = true;
    }
    const leafCount = nodes.filter((n) => n.treeType === "leaf" && n.field >= 0).length;
    if (settings.clusterLinkedDots !== false) clusterRelax(nodes, K, edges);   // opt-in link-aware clustering (self-skips over 500 leaves)
    const cast = [...new Set(nodes.flatMap((n) => (n.views ?? []).map((v) => v.c).filter(Boolean)))];
    const vaultName = app.vault.getName();
    const topic = key === "(root)" ? vaultName : (key === "(all)" ? vaultName : key);
    if (settings.clusterLinkedDots !== false && leafCount > 500) skippedClustering.push(topic);

    const tree: EveTree = { id: key, topic, origin: { x: 0, z: 0 }, nodes, edges, fields: fieldOrder, byId, incoming, cast };
    for (const n of nodes) n.tree = tree;
    trees.push(tree);
  }
  if (skippedClustering.length) new Notice(`Eve Apple Tree: clustering skipped for ${skippedClustering.join(", ")} (over 500 notes) to keep Obsidian fast.`);

  // stable order, then auto-arrange origins in a centred row + offset the BASE local positions to world.
  // Fixed centre-to-centre spacing keeps trees clear of each other; dot/label sizes stay constant.
  trees.sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
  trees.forEach((t, i) => {
    t.origin = { x: (i - (trees.length - 1) / 2) * TREE_SPAN, z: 0 };
    for (const node of t.nodes) { node.pos.x += t.origin.x; node.pos.z += t.origin.z; }
  });

  const have = new Set(trees.map((t) => t.id));
  const liveBridges = bridges.filter((b) => have.has(b.from) && have.has(b.to) && b.from !== b.to);

  return { trees, bridges: liveBridges };
}
