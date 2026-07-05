import { ItemView, WorkspaceLeaf, TFile, Notice } from "obsidian";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { buildForest } from "./data";
import {
  EveNode, EveTree, EveBridge, EveForest, EveSettings, ZoomIcon, ROLE, PALETTE, TreeType,
  BG, FOG, H, R, R_INNER, SEC_PAD, WEDGE_INSET, R_BAND_MIN, rMaxAt,
  LOD_START, LOD_END, SIL_OPACITY, SIL_GREEN, BRIDGE_COL,
  angleOf, place, hexA, lighten, lightHex, THEMES,
} from "./layout";

export const VIEW_TYPE_EVE = "eve-apple-tree-view";

const IMPORTANCE: Record<TreeType, number> = { root: 1.0, trunk: 0.8, apple: 0.7, flower: 0.65, leaf: 0.0 };

interface LabelSlot {
  el: HTMLElement; t: HTMLElement; d: HTMLElement;
  node: EveNode | null; op: number; target: number; tier: number; curId: string | null;
  sx: number; sy: number; sel: boolean;
}
interface BridgeObj { def: EveBridge; sprite: THREE.Sprite; }

export class EveTreeView extends ItemView {
  private root!: HTMLElement;
  private labelLayer!: HTMLElement;
  private renderer?: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;
  private raf = 0;
  private ro?: ResizeObserver;
  private w = 1; private h = 1;
  private reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  private forest: EveForest = { trees: [], bridges: [] };
  private allNodes: EveNode[] = [];
  private byId = new Map<string, EveNode>();
  private bridges: BridgeObj[] = [];

  private G!: Record<string, THREE.Group>;
  private texCache: Record<string, THREE.Texture> = {};
  private fadeMats: { m: THREE.Material & { opacity: number }; b: number; link?: boolean }[] = [];
  // FIX3 light-shine — ONE shared soft halo texture + a SMALL set of cached per-colour glow materials
  // (never a canvas or material per dot). Their opacity is driven once per frame by the render loop.
  private glowMats = new Map<string, THREE.SpriteMaterial>();
  private glowAnim: { m: THREE.SpriteMaterial; accent: boolean }[] = [];
  private glowDimMat?: THREE.SpriteMaterial;   // shared faint halo for chair-lens-dimmed dots
  private themeDark = false; private linkMul = 1.0; private themeBtn?: HTMLElement;
  private themeManual = false;   // once the user clicks 🌙/☀️, their choice wins over Obsidian's theme

  // F2 appearance (read from settings on each build; some apply live)
  private textScale = 1;   // label text size (CSS var, live)
  private shine = 1;       // dot-glow intensity multiplier (live, applied in the loop)
  private silIcon: ZoomIcon = "round";   // far-zoom silhouette shape

  // F2 panel refs (minimize)
  private uiCard?: HTMLElement;
  private pill?: HTMLElement;
  // F3 note/bridge card (in-view HTML overlay)
  private noteCard?: HTMLElement;

  // state
  private sectorsOn = true; private fieldLabelsOn = true; private accentLabelsOn = true;
  private bridgesOn = true;
  private fieldMode: "flat" | "column" = "flat";
  private lodT = 0;

  // chair lens — stakeholder POV overlay (reads `views`; changes nothing structural)
  private lensChair: string | null = null;
  private lensCast: string[] = [];
  private viewDots: EveNode[] = [];
  private mirrorEl?: HTMLElement;
  private lensSelect?: HTMLSelectElement;

  // labels
  private pool: LabelSlot[] = [];
  private active = new Map<string, LabelSlot>();
  private sEls: HTMLElement[] = [];
  private aEls: { el: HTMLElement; node: EveNode }[] = [];
  private sectorAnchor: THREE.Vector3[] = [];

  // interaction
  private preset!: { pos: THREE.Vector3; target: THREE.Vector3 };
  private tween: { fromPos: THREE.Vector3; fromTgt: THREE.Vector3; toPos: THREE.Vector3; toTarget: THREE.Vector3; t0: number; dur: number } | null = null;
  private selected: EveNode | null = null;
  private selRing!: THREE.Sprite;
  private D0 = 29;

  // F1 drag: per-note edge-vertex index (for live edge follow) + press/drag state
  private edgeIndex = new Map<string, { attr: THREE.BufferAttribute; vi: number }[]>();
  private press: { x: number; y: number; t: number; node: EveNode | null; bridge: EveBridge | null } | null = null;
  private drag: { node: EveNode; plane: THREE.Plane; offset: THREE.Vector3; prevSpin: boolean; moved: boolean } | null = null;
  private resetArmed = 0;   // timestamp — "Reset layout" needs a 2nd click within 3s to fire

  constructor(leaf: WorkspaceLeaf, private settings: EveSettings, private persist: () => Promise<void>) { super(leaf); }

  getViewType() { return VIEW_TYPE_EVE; }
  getDisplayText() { return "Eve's Apple Tree"; }
  getIcon() { return "sprout"; }

  async onOpen() {
    this.root = this.contentEl.createDiv({ cls: "eve-tree-root" });
    this.labelLayer = this.root.createDiv({ cls: "eve-labels" });
    // follow Obsidian's theme live (auto-cleaned when the view closes) — unless the user chose manually
    this.registerEvent(this.app.workspace.on("css-change", () => { if (!this.themeManual) this.applyTheme(this.detectObsidianDark()); }));
    // Escape closes the note/bridge card (auto-cleaned on view close)
    this.registerDomEvent(document, "keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape" && this.noteCard?.classList.contains("show")) { e.preventDefault(); this.deselect(); }
    });
    // build only once the metadata cache is resolved (fires immediately if the layout is already ready)
    this.app.workspace.onLayoutReady(() => { void this.reload(); });
  }

  async onClose() { this.dispose(); }

  private get isForest(): boolean { return this.forest.trees.length > 1; }

  /** Full (re)load: read the vault, (re)build the scene. */
  async reload() {
    this.dispose(false);
    // F2 appearance — read persisted state so a rebuild keeps text / shine / icon choices
    this.textScale = this.settings.textSize && this.settings.textSize > 0 ? this.settings.textSize : 1;
    this.shine = this.settings.glowScale != null && this.settings.glowScale >= 0 ? this.settings.glowScale : 1;
    this.silIcon = this.settings.zoomOutIcon ?? "round";
    this.forest = await buildForest(this.app, this.settings);
    this.allNodes = this.forest.trees.flatMap((t) => t.nodes);
    this.byId = new Map(this.allNodes.map((n) => [n.id, n]));

    if (!this.allNodes.length) { this.showEmpty(); return; }
    this.initThree();
    this.buildScene();
    this.buildControlsPanel();
    this.applyTheme(this.themeManual ? this.themeDark : this.detectObsidianDark());   // rebuild keeps a manual 🌙/☀️ choice
    this.applyTextScale();
    this.fit();
    this.startLoop();
  }

  private applyTextScale() { this.root.style.setProperty("--eve-txt", String(this.textScale)); }

  private showEmpty() {
    const e = this.root.createDiv({ cls: "eve-empty" });
    e.createEl("b", { text: "Your tree has no notes yet." });
    e.createEl("br"); e.createEl("br");
    e.appendText("Tag your first note by adding a frontmatter block at the very top of the file:");
    const pre = e.createEl("pre", { cls: "eve-empty-code" });
    pre.createEl("code", {
      text: "---\ntree_type: leaf\nfield: Researcher\ntime: 2026-06-26\n---",
    });
    e.appendText("Then click ");
    e.createEl("b", { text: "Rebuild from vault" });
    e.appendText(". Links between notes become branches; cross-field links become rhizome. Put each topic in its own folder and the vault becomes a ");
    e.createEl("b", { text: "forest" }); e.appendText(".");
    e.createEl("br"); e.createEl("br");
    e.appendText("Already have notes but see nothing? By default the tree shows only notes that carry this frontmatter. To render every note in the vault, turn off ");
    e.createEl("b", { text: "Settings → Eve's Apple Tree → “Only show notes with tree frontmatter.”" });
    e.createEl("br"); e.createEl("br");
    const rb = e.createEl("button", { cls: "eve-btn", text: "⟳ Rebuild from vault" });
    rb.addEventListener("click", () => { void this.reload(); });
  }

  /* ---------------- three.js setup ---------------- */
  private initThree() {
    const r = this.root.getBoundingClientRect();
    this.w = Math.max(1, r.width); this.h = Math.max(1, r.height);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(BG);
    this.scene.fog = new THREE.Fog(FOG, 20, 54);

    this.camera = new THREE.PerspectiveCamera(50, this.w / this.h, 0.1, 2000);
    this.camera.position.set(20, 12, 20);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(this.w, this.h);
    const canvas = this.renderer.domElement;
    canvas.classList.add("eve-canvas");
    this.root.insertBefore(canvas, this.labelLayer);

    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.minDistance = 4; this.controls.maxDistance = 400;
    this.controls.autoRotateSpeed = 0.7;
    this.controls.target.set(0, H * 0.46, 0);
    // MOTION: drag = orbit · scroll = zoom (toward the cursor) · two-finger-click drag = pan.
    // Reset lives on the panel button (no right-click reset, so two-finger-click can pan).
    this.controls.enablePan = true; this.controls.screenSpacePanning = true; this.controls.zoomToCursor = true;
    this.controls.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };

    this.preset = { pos: this.camera.position.clone(), target: this.controls.target.clone() };
    this.D0 = this.camera.position.distanceTo(this.controls.target);

    this.G = {
      fieldFlat: new THREE.Group(), fieldColumn: new THREE.Group(), struct: new THREE.Group(),
      rhizome: new THREE.Group(), dots: new THREE.Group(), glow: new THREE.Group(),
      sil: new THREE.Group(), bridge: new THREE.Group(), select: new THREE.Group(),
    };
    Object.values(this.G).forEach((g) => this.scene.add(g));

    this.ro = new ResizeObserver(() => this.resizeRenderer());
    this.ro.observe(this.root);

    // CAPTURE phase on the root (an ancestor of the canvas): our pointerdown runs BEFORE OrbitControls'
    // own canvas listener, so a press that lands on a dot can stopPropagation to suppress orbit and drag
    // the dot instead. Background / empty-space presses are NOT stopped → orbit + pan work as before.
    this.root.addEventListener("pointerdown", this.onPointerDown, true);
    this.root.addEventListener("pointermove", this.onPointerMove, true);
    this.root.addEventListener("pointerup", this.onPointerUp, true);
    canvas.addEventListener("contextmenu", this.onContextMenu);
  }

  private resizeRenderer = () => {
    if (!this.renderer) return;
    const r = this.root.getBoundingClientRect();
    this.w = Math.max(1, r.width); this.h = Math.max(1, r.height);
    this.camera.aspect = this.w / this.h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.w, this.h);
  };

  /* ---------------- textures ---------------- */
  private dotTexture(tint: string, ring: string): THREE.Texture {
    const key = tint + ring; if (this.texCache[key]) return this.texCache[key];
    const S = 160, c = document.createElement("canvas"); c.width = c.height = S;
    const x = c.getContext("2d")!; const cx = S / 2, cy = S / 2;
    const hg = x.createRadialGradient(cx, cy, 8, cx, cy, 78);
    hg.addColorStop(0, hexA(tint, 0.22)); hg.addColorStop(1, hexA(tint, 0));
    x.fillStyle = hg; x.beginPath(); x.arc(cx, cy, 78, 0, 7); x.fill();
    x.fillStyle = hexA(tint, 0.96); x.beginPath(); x.arc(cx, cy, 30, 0, 7); x.fill();
    x.lineWidth = 5; x.strokeStyle = hexA(ring, 0.95); x.beginPath(); x.arc(cx, cy, 30, 0, 7); x.stroke();
    x.fillStyle = "#ffffff"; x.beginPath(); x.arc(cx, cy, 12, 0, 7); x.fill();
    const t = new THREE.CanvasTexture(c); t.anisotropy = 4; this.texCache[key] = t; return t;
  }
  /* DARK-MODE dot: a glowing gem — colored halo + white core + a 4/8-point sparkle. AdditiveBlending
     on the dark background makes it read like a little diamond twinkling. */
  private diamondTexture(tint: string): THREE.Texture {
    const key = "dia" + tint; if (this.texCache[key]) return this.texCache[key];
    const S = 160, c = document.createElement("canvas"); c.width = c.height = S;
    const x = c.getContext("2d")!; const M = S / 2;
    let g = x.createRadialGradient(M, M, 1, M, M, 74);
    g.addColorStop(0, hexA(tint, 0.9)); g.addColorStop(0.30, hexA(tint, 0.42)); g.addColorStop(1, hexA(tint, 0));
    x.fillStyle = g; x.beginPath(); x.arc(M, M, 74, 0, 7); x.fill();
    x.globalCompositeOperation = "lighter";
    const ray = (len: number, wid: number) => { const gg = x.createLinearGradient(M - len, M, M + len, M); gg.addColorStop(0, "rgba(255,255,255,0)"); gg.addColorStop(0.5, "rgba(255,255,255,.92)"); gg.addColorStop(1, "rgba(255,255,255,0)"); x.fillStyle = gg; x.fillRect(M - len, M - wid / 2, len * 2, wid); };
    const spin = (ang: number, len: number, wid: number) => { x.save(); x.translate(M, M); x.rotate(ang); x.translate(-M, -M); ray(len, wid); x.restore(); };
    spin(0, 72, 5); spin(Math.PI / 2, 72, 5); spin(Math.PI / 4, 40, 3); spin(-Math.PI / 4, 40, 3);
    g = x.createRadialGradient(M, M, 0, M, M, 16); g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(0.5, hexA(lightHex(tint, 0.6), 0.95)); g.addColorStop(1, hexA(tint, 0));
    x.fillStyle = g; x.beginPath(); x.arc(M, M, 16, 0, 7); x.fill();
    x.globalCompositeOperation = "source-over";
    const t = new THREE.CanvasTexture(c); t.anisotropy = 4; this.texCache[key] = t; return t;
  }
  /* FIX3 — ONE shared soft radial halo (white; tinted per material.color). Drawn large with a smooth
     multi-stop falloff that reaches full transparency at the canvas edge, so scaling never shows a hard
     edge, banding, or a square. Additive on dark (glowing gems), normal on light (soft tint, no wash). */
  private haloTexture(): THREE.Texture {
    if (this.texCache["halo"]) return this.texCache["halo"];
    const S = 128, c = document.createElement("canvas"); c.width = c.height = S;
    const x = c.getContext("2d")!, M = S / 2;
    const g = x.createRadialGradient(M, M, 0, M, M, M);
    g.addColorStop(0, "rgba(255,255,255,1)"); g.addColorStop(0.22, "rgba(255,255,255,0.62)");
    g.addColorStop(0.45, "rgba(255,255,255,0.28)"); g.addColorStop(0.70, "rgba(255,255,255,0.08)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    x.fillStyle = g; x.fillRect(0, 0, S, S);
    const t = new THREE.CanvasTexture(c); t.anisotropy = 4; this.texCache["halo"] = t; return t;
  }
  /** Cached glow material for a dot colour (+ accent flag → flower/apple glow brighter). A small set:
      one per distinct dot colour, shared across every dot of that colour. Opacity/blending set live. */
  private glowMat(tint: string, accent: boolean): THREE.SpriteMaterial {
    const key = tint + (accent ? "|a" : "|b");
    let m = this.glowMats.get(key);
    if (!m) {
      m = new THREE.SpriteMaterial({ map: this.haloTexture(), color: new THREE.Color(tint), transparent: true,
        depthWrite: false, blending: this.themeDark ? THREE.AdditiveBlending : THREE.NormalBlending, fog: true, opacity: 0 });
      this.glowMats.set(key, m); this.glowAnim.push({ m, accent });
    }
    return m;
  }
  /** Shared faint halo a chair-lens-dimmed dot's glow switches to (its tint no longer matters at ~0.1). */
  private glowDim(): THREE.SpriteMaterial {
    if (!this.glowDimMat) this.glowDimMat = new THREE.SpriteMaterial({ map: this.haloTexture(), color: new THREE.Color("#c8d0da"),
      transparent: true, depthWrite: false, blending: this.themeDark ? THREE.AdditiveBlending : THREE.NormalBlending, fog: true, opacity: 0 });
    return this.glowDimMat;
  }
  private ringTexture(): THREE.Texture {
    if (this.texCache["ring"]) return this.texCache["ring"];
    const S = 128, c = document.createElement("canvas"); c.width = c.height = S;
    const x = c.getContext("2d")!;
    x.lineWidth = 7; x.strokeStyle = "rgba(34,48,58,.9)"; x.beginPath(); x.arc(S / 2, S / 2, S / 2 - 8, 0, 7); x.stroke();
    x.lineWidth = 3; x.strokeStyle = "rgba(255,255,255,.9)"; x.beginPath(); x.arc(S / 2, S / 2, S / 2 - 8, 0, 7); x.stroke();
    const t = new THREE.CanvasTexture(c); this.texCache["ring"] = t; return t;
  }
  /** translucent green tree-SHAPED silhouette for the zoom-out LOD — three DISTINCT crown shapes:
      round (tall compact ball), conifer (tall narrow pine), apple (broad flattened crown + baked fruit).
      All three share the same translucent-green treatment, canvas size, and bounding box so the sprite
      scale stays correct; the 🌸/🍎 markers get per-shape anchors (SIL_MARK_ANCHOR). */
  private treeSilTexture(kind: ZoomIcon = "round"): THREE.Texture {
    const key = "sil-" + kind; if (this.texCache[key]) return this.texCache[key];
    const S = 256, c = document.createElement("canvas"); c.width = c.height = S;
    const x = c.getContext("2d")!;
    const trunk = (topF: number, wF: number) => { x.fillStyle = hexA("#5b4632", 0.92); x.fillRect(S * (0.5 - wF / 2), S * topF, S * wF, S * (0.97 - topF)); };
    const lobe = (bxF: number, byF: number, brF: number) => {
      const bx = S * bxF, by = S * byF, br = S * brF;
      const g = x.createRadialGradient(bx, by, br * 0.78, bx, by, br);
      g.addColorStop(0, hexA(SIL_GREEN, 0.96)); g.addColorStop(0.86, hexA(SIL_GREEN, 0.93)); g.addColorStop(1, hexA(SIL_GREEN, 0));
      x.fillStyle = g; x.beginPath(); x.arc(bx, by, br, 0, 7); x.fill();
    };
    if (kind === "conifer") {
      // tall narrow PINE — three stacked triangular tiers over a short trunk (unmistakably not a ball)
      trunk(0.82, 0.07);
      const tier = (cyF: number, halfF: number, hF: number) => {
        x.fillStyle = hexA(SIL_GREEN, 0.94); x.beginPath();
        x.moveTo(S * 0.50, S * (cyF - hF)); x.lineTo(S * (0.50 + halfF), S * cyF); x.lineTo(S * (0.50 - halfF), S * cyF); x.closePath(); x.fill();
      };
      tier(0.82, 0.30, 0.26); tier(0.62, 0.25, 0.24); tier(0.44, 0.19, 0.22);
    } else if (kind === "apple") {
      // classic APPLE TREE — a broad, slightly lobed, FLATTENED crown over a visible trunk, with a few
      // darker-red fruit baked into the canopy so it reads "apple tree" even before the 🍎 marker.
      trunk(0.56, 0.085);
      lobe(0.50, 0.42, 0.25);                                  // wide flat centre
      lobe(0.27, 0.46, 0.20); lobe(0.73, 0.46, 0.20);          // far shoulders (broad)
      lobe(0.38, 0.36, 0.17); lobe(0.62, 0.36, 0.17);          // upper lobes (lobed edge)
      lobe(0.50, 0.34, 0.17);                                  // low dome top → flattened, not round
      const fruit = (fxF: number, fyF: number, frF: number) => {
        const fx = S * fxF, fy = S * fyF, fr = S * frF;
        const g = x.createRadialGradient(fx, fy, 1, fx, fy, fr);
        g.addColorStop(0, hexA("#d23b2c", 0.98)); g.addColorStop(1, hexA("#7a2018", 0.6));
        x.fillStyle = g; x.beginPath(); x.arc(fx, fy, fr, 0, 7); x.fill();
      };
      fruit(0.40, 0.50, 0.030); fruit(0.58, 0.47, 0.030); fruit(0.50, 0.55, 0.028);
      fruit(0.66, 0.52, 0.026); fruit(0.33, 0.45, 0.026);
    } else {
      // round (default) — one tall, compact, near-circular green mass on a slim trunk (reads as a ball)
      trunk(0.60, 0.075);
      lobe(0.50, 0.37, 0.30);                                  // dominant round mass
      lobe(0.31, 0.44, 0.20); lobe(0.69, 0.44, 0.20);          // side fill
      lobe(0.38, 0.27, 0.17); lobe(0.62, 0.27, 0.17);          // upper shoulders
      lobe(0.50, 0.22, 0.17);                                  // tall crown top
    }
    const t = new THREE.CanvasTexture(c); this.texCache[key] = t; return t;
  }
  /* F2 — per-shape 🌸/🍎 marker anchors in canvas fraction (cxf across, cyf down; 0,0 = top-left of the
     silhouette texture). Chosen to land ON each crown: apple/round on the upper lobes; conifer lower +
     nearer the axis so the markers sit on the triangular body, not floating off it. */
  private static readonly SIL_MARK_ANCHOR: Record<ZoomIcon, { apple: [number, number]; flower: [number, number] }> = {
    round:   { apple: [0.63, 0.30], flower: [0.37, 0.30] },
    apple:   { apple: [0.62, 0.35], flower: [0.38, 0.35] },
    conifer: { apple: [0.60, 0.56], flower: [0.40, 0.60] },
  };
  private bridgeTexture(): THREE.Texture {
    if (this.texCache["bridge"]) return this.texCache["bridge"];
    const S = 128, c = document.createElement("canvas"); c.width = c.height = S;
    const x = c.getContext("2d")!;
    const g = x.createRadialGradient(64, 64, 4, 64, 64, 60);
    g.addColorStop(0, hexA(BRIDGE_COL, 0.95)); g.addColorStop(0.55, hexA(BRIDGE_COL, 0.5)); g.addColorStop(1, hexA(BRIDGE_COL, 0));
    x.fillStyle = g; x.beginPath(); x.arc(64, 64, 60, 0, 7); x.fill();
    x.fillStyle = "#fff"; x.font = "bold 60px ui-monospace,Menlo,monospace"; x.textAlign = "center"; x.textBaseline = "middle"; x.fillText("⇄", 64, 66);
    const t = new THREE.CanvasTexture(c); this.texCache["bridge"] = t; return t;
  }

  private secOf(i: number) { return PALETTE[((i % PALETTE.length) + PALETTE.length) % PALETTE.length]; }

  /* ---------------- build scene (per tree) ---------------- */
  private buildScene() {
    for (const tree of this.forest.trees) {
      this.buildDots(tree);
      this.buildLinks(tree);
      this.buildFields(tree);
      this.buildSilhouette(tree);
    }
    this.buildBridges();
    this.applyFieldMode();
    this.buildLabels();

    this.selRing = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.ringTexture(), transparent: true, depthWrite: false, fog: true, opacity: 0 }));
    this.selRing.visible = false; this.G.select.add(this.selRing);
  }

  private buildDots(tree: EveTree) {
    for (const n of tree.nodes) {
      const role = ROLE[n.treeType];
      let tint = role.tint, ring = role.ring;
      if (n.treeType === "leaf" && n.field >= 0) { const s = this.secOf(n.field); tint = s.tint; ring = s.ring; }
      const taper = n.treeType === "trunk" ? 1 - 0.4 * n.tNorm : 1;
      const sz = role.r * 2 * taper;
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.dotTexture(tint, ring), transparent: true, depthWrite: false, fog: true }));
      sp.position.copy(n.pos); sp.scale.set(sz, sz, 1);
      sp.userData = { node: n, baseScale: sz, tint, ring };
      this.G.dots.add(sp); n.sprite = sp; n._lens = 1;
      // FIX3: EVERY dot gets a soft glow halo — shared texture, cached per-colour material. Flower/apple
      // (role.glow) glow brighter and use their warm glow hue; all others glow in the dot's own colour.
      const accent = !!role.glow;
      const litMat = this.glowMat(accent ? role.glow! : tint, accent);
      const gs = new THREE.Sprite(litMat);
      gs.position.copy(n.pos); const gz = sz * (accent ? 3.2 : 2.6); gs.scale.set(gz, gz, 1);
      gs.userData = { litMat };
      this.G.glow.add(gs); n.glowSprite = gs;
    }
  }

  private buildLinks(tree: EveTree) {
    // merged edge buffers — ONE LineSegments per link-class per tree (instead of one draw call per link)
    const KIND_COL: Record<string, string> = { spine: "#6f6780", branch: "#8a8276", intra: "#7d7a86" };
    const sPos: number[] = [], sCol: number[] = [], rPos: number[] = [], rCol: number[] = [];
    const sPairs: [EveNode, EveNode][] = [], rPairs: [EveNode, EveNode][] = [];
    const c = new THREE.Color();
    for (const e of tree.edges) {
      const a = tree.byId.get(e.from), b = tree.byId.get(e.to);
      if (!a || !b) continue;
      const rhizome = !(e.kind in KIND_COL);
      c.set(rhizome ? "#5f7382" : KIND_COL[e.kind]);
      const pos = rhizome ? rPos : sPos, col = rhizome ? rCol : sCol, pairs = rhizome ? rPairs : sPairs;
      pos.push(a.pos.x, a.pos.y, a.pos.z, b.pos.x, b.pos.y, b.pos.z);
      col.push(c.r, c.g, c.b, c.r, c.g, c.b);
      pairs.push([a, b]);
    }
    const mk = (pos: number[], col: number[], pairs: [EveNode, EveNode][], opacity: number, group: THREE.Group) => {
      if (!pos.length) return;
      const g = new THREE.BufferGeometry();
      const posAttr = new THREE.BufferAttribute(new Float32Array(pos), 3);
      g.setAttribute("position", posAttr);
      g.setAttribute("color", new THREE.BufferAttribute(new Float32Array(col), 3));
      const m = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity, fog: true });
      group.add(new THREE.LineSegments(g, m)); this.fadeMats.push({ m, b: opacity, link: true });
      // F1: index each endpoint vertex by note id so dragging a dot can rewrite just its own edge ends
      pairs.forEach(([a, b], i) => { this.indexEdgeVertex(a.id, posAttr, i * 2); this.indexEdgeVertex(b.id, posAttr, i * 2 + 1); });
    };
    mk(sPos, sCol, sPairs, 0.5, this.G.struct);
    mk(rPos, rCol, rPairs, 0.14, this.G.rhizome);
  }

  private indexEdgeVertex(id: string, attr: THREE.BufferAttribute, vi: number) {
    let arr = this.edgeIndex.get(id); if (!arr) { arr = []; this.edgeIndex.set(id, arr); }
    arr.push({ attr, vi });
  }

  private wedgeShape(a0: number, a1: number, rad: number): THREE.Shape {
    const s = new THREE.Shape(); s.moveTo(0, 0);
    s.lineTo(rad * Math.cos(a0), rad * Math.sin(a0)); s.absarc(0, 0, rad, a0, a1, false); s.lineTo(0, 0); return s;
  }
  private edgeFade(a: THREE.Vector3, b: THREE.Vector3, ring: string, group: THREE.Group) {
    const g = new THREE.BufferGeometry().setFromPoints([a, b]); const c = new THREE.Color(ring);
    g.setAttribute("color", new THREE.BufferAttribute(new Float32Array([c.r, c.g, c.b, 0.24, c.r, c.g, c.b, 0.0]), 4));
    const m = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, fog: true });
    const l = new THREE.Line(g, m); l.renderOrder = -1; group.add(l); this.fadeMats.push({ m, b: 1 });
  }

  private buildFields(tree: EveTree) {
    const K = Math.max(1, tree.fields.length);
    const RS = R, HS = H;   // per-tree envelope (matches the local dot positions)
    const ox = tree.origin.x, oz = tree.origin.z;
    const flatG = new THREE.Group(); flatG.position.set(ox, 0, oz); this.G.fieldFlat.add(flatG);
    const colG = new THREE.Group(); colG.position.set(ox, 0, oz); this.G.fieldColumn.add(colG);
    const COL_STEPS = 6, COL_CURVE = 28;
    for (let i = 0; i < K; i++) {
      const sec = this.secOf(i);
      const a0 = angleOf(i, K) + SEC_PAD, a1 = angleOf(i + 1, K) - SEC_PAD, mid = (a0 + a1) / 2;
      const tintHex = new THREE.Color(sec.tint), ringHex = new THREE.Color(sec.ring).getHex();
      // flat wedge
      const gg = new THREE.ShapeGeometry(this.wedgeShape(a0, a1, RS), 28); gg.rotateX(-Math.PI / 2); gg.translate(0, 0.01, 0);
      const fm = new THREE.MeshBasicMaterial({ color: tintHex, transparent: true, opacity: 0.13, depthWrite: false, side: THREE.DoubleSide, fog: true });
      flatG.add(new THREE.Mesh(gg, fm)); this.fadeMats.push({ m: fm, b: 0.13 });
      const em = new THREE.LineBasicMaterial({ color: ringHex, transparent: true, opacity: 0.12, fog: true });
      flatG.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([place(a0, RS, 0.01), place(a0, RS, HS * 0.92)]), em));
      this.fadeMats.push({ m: em, b: 0.12 });
      // translucent column
      const geo = new THREE.ExtrudeGeometry(this.wedgeShape(a0, a1, RS), { depth: HS, bevelEnabled: false, steps: COL_STEPS, curveSegments: COL_CURVE });
      geo.rotateX(-Math.PI / 2); geo.translate(0, 0.012, 0);
      const pos = geo.attributes.position, col = new Float32Array(pos.count * 4);
      const ss = (e0: number, e1: number, xx: number) => { const t = Math.min(1, Math.max(0, (xx - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };
      for (let v = 0; v < pos.count; v++) {
        const x = pos.getX(v), y = pos.getY(v), z = pos.getZ(v), t = Math.min(1, Math.max(0, y / HS));
        const topFade = 1 - ss(0.62, 1, t), bottomLift = 0.45 + 0.55 * ss(0, 0.22, t);
        const radial = 0.78 + 0.22 * (1 - Math.min(1, Math.hypot(x, z) / RS));
        col[v * 4] = 1; col[v * 4 + 1] = 1; col[v * 4 + 2] = 1; col[v * 4 + 3] = topFade * bottomLift * radial;
      }
      geo.setAttribute("color", new THREE.BufferAttribute(col, 4));
      const cm = new THREE.MeshBasicMaterial({ color: new THREE.Color(lighten(sec.tint, 0.34)), vertexColors: true, transparent: true, opacity: 0.12, side: THREE.BackSide, depthWrite: false, blending: THREE.NormalBlending, fog: true });
      const mesh = new THREE.Mesh(geo, cm); mesh.renderOrder = -2; colG.add(mesh); this.fadeMats.push({ m: cm, b: 0.12 });
      this.edgeFade(place(a0, RS, 0.012), place(a0, RS, HS), sec.ring, colG);
      this.edgeFade(place(a1, RS, 0.012), place(a1, RS, HS), sec.ring, colG);
      const top: THREE.Vector3[] = []; for (let s = 0; s <= COL_CURVE; s++) top.push(place(a0 + (a1 - a0) * s / COL_CURVE, RS, 0.014));
      const tm = new THREE.LineBasicMaterial({ color: new THREE.Color(sec.ring), transparent: true, opacity: 0.26, fog: true });
      const al = new THREE.Line(new THREE.BufferGeometry().setFromPoints(top), tm); al.renderOrder = -1; colG.add(al);
      this.fadeMats.push({ m: tm, b: 0.26 });
      this.sectorAnchor.push(place(mid, RS + 0.7, HS * 0.50).add(new THREE.Vector3(ox, 0, oz)));
      this.sEls.push(this.mkSectorLabel(tree.fields[i], sec.ring));
    }
    const mkCircle = (g: THREE.Group) => {
      const pts: THREE.Vector3[] = []; for (let s = 0; s <= 120; s++) { const an = s / 120 * Math.PI * 2; pts.push(new THREE.Vector3(Math.cos(an) * RS, 0.006, Math.sin(an) * RS)); }
      const m = new THREE.LineBasicMaterial({ color: 0xcabfa8, transparent: true, opacity: 0.55, fog: true });
      g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), m)); this.fadeMats.push({ m, b: 0.55 });
    };
    mkCircle(flatG); mkCircle(colG);
  }

  private mkSectorLabel(name: string, ring: string): HTMLElement {
    const el = this.labelLayer.createDiv({ cls: "eve-slabel" }); el.setText(name); el.style.color = ring; return el;
  }

  private buildSilhouette(tree: EveTree) {
    const sil = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.treeSilTexture(this.silIcon), transparent: true, depthWrite: false, fog: false, opacity: 0 }));
    sil.position.set(tree.origin.x, H * 0.50, tree.origin.z); sil.scale.set(2 * R * 0.80, H * 1.26, 1);
    tree.sil = sil; this.G.sil.add(sil);
    // 🌸/🍎 markers on the zoom-out icon — only when this tree has flower/apple nodes, so a bloomed/
    // fruited tree reads differently from a bare one. They fade in with the silhouette (see loop) and
    // are re-anchored per shape (see placeSilMark) so they always sit ON the chosen crown.
    tree.silMarks = [];
    const silMark = (mark: "apple" | "flower", tint: string, ring: string, sz: number) => {
      const m = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.dotTexture(tint, ring), transparent: true, depthWrite: false, fog: false, opacity: 0 }));
      m.userData = { tree, mark }; m.scale.set(sz, sz, 1);
      this.G.sil.add(m); tree.silMarks!.push(m); this.placeSilMark(m);
    };
    if (tree.nodes.some((n) => n.treeType === "apple"))  silMark("apple", "#e0564b", "#7a2018", 1.5);   // 🍎 fruit
    if (tree.nodes.some((n) => n.treeType === "flower")) silMark("flower", "#e0489a", "#8a2560", 1.5);  // 🌸 flower
    if (this.isForest) {
      const el = this.labelLayer.createDiv({ cls: "eve-tlabel" }); el.setText(tree.topic);
      tree.nameLabelEl = el;
    }
  }

  /** Position a 🌸/🍎 marker sprite on the CURRENT silhouette shape's crown. The sil sprite is centred
      at (origin.x, H*0.50) with scale (2·R·0.80, H·1.26), so canvas fraction (cxf,cyf) → world:
      x = origin.x + (cxf−0.5)·R·1.60 · z stays on origin.z · y = H·(1.13 − 1.26·cyf). */
  private placeSilMark(m: THREE.Sprite) {
    const tree = m.userData.tree as EveTree, mark = m.userData.mark as "apple" | "flower";
    const [cxf, cyf] = EveTreeView.SIL_MARK_ANCHOR[this.silIcon][mark];
    m.position.set(tree.origin.x + (cxf - 0.5) * R * 1.60, H * (1.13 - 1.26 * cyf), tree.origin.z);
  }

  /* ---------------- bridges (the only cross-tree link) ---------------- */
  private resolveNote(tree: EveTree, ref?: string): EveNode | null {
    if (!ref) return null;
    if (tree.byId.has(ref)) return tree.byId.get(ref)!;
    const base = ref.replace(/\.md$/, "").toLowerCase();
    return tree.nodes.find((n) => n.id.replace(/\.md$/, "").toLowerCase().endsWith("/" + base) || n.title.toLowerCase() === base) ?? null;
  }
  private repOf(tree: EveTree): EveNode | null {
    return tree.nodes.find((n) => n.treeType === "trunk") || tree.nodes.find((n) => n.treeType === "root") || tree.nodes[0] || null;
  }
  private buildBridges() {
    for (const def of this.forest.bridges) {
      const A = this.forest.trees.find((t) => t.id === def.from), B = this.forest.trees.find((t) => t.id === def.to);
      if (!A || !B || A === B) continue;
      const an = this.resolveNote(A, def.fromNote), bn = this.resolveNote(B, def.toNote);
      const pA = an ? an.pos.clone() : new THREE.Vector3(A.origin.x, H * 0.5, A.origin.z);
      const pB = bn ? bn.pos.clone() : new THREE.Vector3(B.origin.x, H * 0.5, B.origin.z);
      const arc: THREE.Vector3[] = [];
      for (let i = 0; i <= 24; i++) { const u = i / 24; const p = new THREE.Vector3().lerpVectors(pA, pB, u); p.y += Math.sin(u * Math.PI) * 1.6; arc.push(p); }
      const m = new THREE.LineBasicMaterial({ color: new THREE.Color(BRIDGE_COL), transparent: true, opacity: 0.6, fog: true });
      this.G.bridge.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(arc), m));
      const mid = pA.clone().add(pB).multiplyScalar(0.5); mid.y = Math.max(pA.y, pB.y) + 1.6;
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.bridgeTexture(), transparent: true, depthWrite: false, fog: true }));
      sp.position.copy(mid); sp.scale.set(0.95, 0.95, 1); sp.userData = { bridge: def };
      this.G.bridge.add(sp); this.bridges.push({ def, sprite: sp });
    }
  }

  private applyFieldMode() {
    this.G.fieldFlat.visible = this.sectorsOn && this.fieldMode === "flat";
    this.G.fieldColumn.visible = this.sectorsOn && this.fieldMode === "column";
  }

  /* ---------------- labels ---------------- */
  private buildLabels() {
    const POOL_N = 28;
    for (let i = 0; i < POOL_N; i++) {
      const el = this.labelLayer.createDiv({ cls: "eve-lblnode" });
      const t = el.createSpan({ cls: "nt" }), d = el.createSpan({ cls: "nd" });
      this.pool.push({ el, t, d, node: null, op: 0, target: 0, tier: 1, curId: null, sx: 0, sy: 0, sel: false });
    }
    this.aEls = this.allNodes.filter((n) => n.treeType === "flower" || n.treeType === "apple").map((n) => {
      const el = this.labelLayer.createDiv({ cls: "eve-alabel" }); el.style.color = ROLE[n.treeType].ring;
      const ad = el.createSpan({ cls: "ad" }); ad.style.background = ROLE[n.treeType].glow || ROLE[n.treeType].tint;
      el.appendChild(document.createTextNode(n.treeType === "flower" ? "AHA" : "OUTPUT"));
      return { el, node: n };
    });
  }

  private _v = new THREE.Vector3();
  private _fr = new THREE.Frustum();
  private _m = new THREE.Matrix4();
  private clamp01(x: number) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  private ss(a: number, b: number, x: number) { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); }
  private titleOn = false; private descOn = false;

  private updateLabels() {
    const W = this.w, Hh = this.h, cam = this.camera, ctr = this.controls;
    cam.updateMatrixWorld();
    const detail = 1 - this.lodT;
    const d = cam.position.distanceTo(ctr.target);
    const tOn = 0.70 * this.D0, dOn = 0.42 * this.D0, bnd = 0.04 * this.D0;
    this.titleOn = d < (this.titleOn ? tOn + bnd : tOn - bnd);
    this.descOn = d < (this.descOn ? dOn + bnd : dOn - bnd);
    const nodeMax = 1.10 * this.D0, fFar = 0.95 * this.D0, fNear = 0.50 * this.D0;

    this._m.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse);
    this._fr.setFromProjectionMatrix(this._m);

    // tree-name labels (forest): ICON-MODE ONLY — fade in with the silhouette, anchored BENEATH the tree.
    // STANDARD ZOOM BANDS (% of fit distance D0): >=115% icon (name beneath) · 70-115% constellation · <70% titles · <42% titles+descriptions
    for (const tree of this.forest.trees) {
      if (!tree.nameLabelEl) continue;
      this._v.set(tree.origin.x, -2.8, tree.origin.z).project(cam);
      const on = this._v.x >= -1.05 && this._v.x <= 1.05 && this._v.y >= -1.05 && this._v.y <= 1.05 && this._v.z < 1;
      tree.nameLabelEl.style.opacity = on ? this.lodT.toFixed(3) : "0";   // 0 at working zooms
      tree.nameLabelEl.style.transform = `translate3d(${Math.round((this._v.x * .5 + .5) * W)}px,${Math.round((-this._v.y * .5 + .5) * Hh)}px,0) translate(-50%,0)`;
    }

    // field names — fade as titles take over AND as silhouettes appear
    const titleProgress = this.clamp01((tOn - d) / (tOn - dOn));
    this.sEls.forEach((e, i) => {
      const a = this.sectorAnchor[i];
      if (!a || !this.fieldLabelsOn || detail < 0.05) { e.style.opacity = "0"; return; }
      this._v.copy(a).project(cam);
      const on = this._v.x >= -1.05 && this._v.x <= 1.05 && this._v.y >= -1.05 && this._v.y <= 1.05 && this._v.z < 1;
      if (!on) { e.style.opacity = "0"; return; }
      e.style.opacity = ((1 - 0.9 * titleProgress) * detail).toFixed(3);
      e.style.transform = `translate3d(${Math.round((this._v.x * .5 + .5) * W)}px,${Math.round((-this._v.y * .5 + .5) * Hh)}px,0) translate(-50%,-50%)`;
    });

    // flower / apple markers
    this.aEls.forEach((a) => {
      if (!this.accentLabelsOn || detail < 0.05) { a.el.style.opacity = "0"; return; }
      this._v.copy(a.node.pos).project(cam);
      const on = this._v.x >= -1 && this._v.x <= 1 && this._v.y >= -1 && this._v.y <= 1 && this._v.z < 1;
      if (!on) { a.el.style.opacity = "0"; return; }
      a.el.style.opacity = (0.92 * detail).toFixed(3);
      a.el.style.transform = `translate3d(${Math.round((this._v.x * .5 + .5) * W)}px,${Math.round((-this._v.y * .5 + .5) * Hh)}px,0) translate(-50%,-160%)`;
    });

    // node titles/descriptions — zoom-driven (suppressed in silhouette mode)
    const cands: { n: EveNode; sx: number; sy: number; op: number; tier: number; score: number; sel: boolean }[] = [];
    if (detail >= 0.05) for (const n of this.allNodes) {
      const sel = n === this.selected;
      if (!sel && !this.titleOn) continue;
      if (n.treeType === "root" && !sel) continue;
      if (!this._fr.containsPoint(n.pos)) continue;
      const dist = cam.position.distanceTo(n.pos);
      if (!sel && dist > nodeMax) continue;
      const op = (sel ? 1 : this.ss(fFar, fNear, dist)) * detail;
      if (!sel && op < 0.02) continue;
      this._v.copy(n.pos).project(cam);
      const sx = (this._v.x * .5 + .5) * W, sy = (-this._v.y * .5 + .5) * Hh;
      const tier = sel ? 2 : (this.descOn ? 2 : 1);
      const score = dist - (IMPORTANCE[n.treeType] || 0) * this.D0 * 0.18 - (sel ? 1e6 : 0);
      cands.push({ n, sx, sy, op, tier, score, sel });
    }
    cands.sort((a, b) => a.score - b.score);

    const chosen: typeof cands = []; let titles = 0, descs = 0;
    for (const c of cands) {
      if (!c.sel) {
        if (titles >= 18) break;
        let clash = false;
        for (const o of chosen) { const dx = o.sx - c.sx, dy = o.sy - c.sy; if (dx * dx + dy * dy < 900) { clash = true; break; } }
        if (clash) continue;
      }
      if (c.tier === 2 && !c.sel) { if (descs >= 8) c.tier = 1; else descs++; }
      chosen.push(c); if (!c.sel) titles++;
    }

    const live = new Set<string>();
    const free = () => this.pool.find((p) => p.node === null);
    for (const c of chosen) {
      let p = this.active.get(c.n.id);
      if (!p) { const f = free(); if (!f) continue; p = f; p.node = c.n; p.op = 0; p.curId = null; this.active.set(c.n.id, p); }
      live.add(c.n.id);
      if (p.curId !== c.n.id) {
        p.t.empty();
        const fd = p.t.createSpan({ cls: "fd" });
        fd.style.background = c.n.field >= 0 ? this.secOf(c.n.field).tint : ROLE[c.n.treeType].ring;
        p.t.appendChild(document.createTextNode(c.n.title));
        p.d.setText(c.n.description); p.curId = c.n.id;
      }
      p.target = c.op; p.tier = c.tier; p.sel = c.sel;
      p.sx = Math.round(c.sx + 10); p.sy = Math.round(c.sy - 7);
    }
    for (const p of this.pool) if (p.node && !live.has(p.node.id)) p.target = 0;

    const lerpf = this.reduced ? 1 : 0.18;
    for (const p of this.pool) {
      if (!p.node && p.op <= 0.001) continue;
      p.op += (p.target - p.op) * lerpf;
      if (p.target === 0 && p.op < 0.02) {
        p.op = 0; p.el.style.opacity = "0";
        if (p.node) { this.active.delete(p.node.id); p.node = null; }
        continue;
      }
      p.el.style.opacity = p.op.toFixed(3);
      p.el.style.transform = `translate3d(${p.sx}px,${p.sy}px,0)`;
      p.el.toggleClass("sel", !!p.sel);
      p.d.toggleClass("show", p.tier === 2);
    }
  }

  /* ---------------- interaction ---------------- */
  private easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  private flyTo(toPos: THREE.Vector3, toTarget: THREE.Vector3, dur = 640) {
    if (this.reduced) { this.camera.position.copy(toPos); this.controls.target.copy(toTarget); this.controls.update(); return; }
    this.controls.enabled = false;
    this.tween = { fromPos: this.camera.position.clone(), fromTgt: this.controls.target.clone(), toPos: toPos.clone(), toTarget: toTarget.clone(), t0: performance.now(), dur };
  }
  private resetView = () => this.flyTo(this.preset.pos, this.preset.target);

  /** Frame the whole forest (bounding-sphere + FOV; preserves the proven single-tree look). */
  private fit() {
    const RS = R, HS = H;
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (const t of this.forest.trees) {
      minX = Math.min(minX, t.origin.x - RS); maxX = Math.max(maxX, t.origin.x + RS);
      minZ = Math.min(minZ, t.origin.z - RS); maxZ = Math.max(maxZ, t.origin.z + RS);
    }
    const cx = (minX + maxX) / 2, cz = (minZ + maxZ) / 2;
    const C = new THREE.Vector3(cx, HS * 0.46, cz);
    let Rf = RS; for (const t of this.forest.trees) Rf = Math.max(Rf, Math.hypot(t.origin.x - cx, t.origin.z - cz) + RS);
    const Rbound = Math.hypot(Rf, HS * 0.52);
    const vfov = THREE.MathUtils.degToRad(this.camera.fov), aspect = this.camera.aspect || 1;
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * aspect);
    const dist = 1.70 * Math.max(Rbound / Math.sin(vfov / 2), Rbound / Math.sin(hfov / 2));
    const dir = new THREE.Vector3(20, 12 - H * 0.46, 20).normalize();
    const pos = C.clone().addScaledVector(dir, dist);
    this.D0 = dist; this.preset = { pos: pos.clone(), target: C.clone() };
    this.controls.maxDistance = Math.max(400, dist * 2.8);
    const fog = this.scene.fog as THREE.Fog; fog.near = Math.max(1, dist * 0.42); fog.far = dist * 1.9 + Rf;
    this.camera.position.copy(pos); this.controls.target.copy(C); this.controls.update();
  }
  private focusTree(tree: EveTree) {
    const C = new THREE.Vector3(tree.origin.x, H * 0.46, tree.origin.z);
    const Rbound = Math.hypot(R, H * 0.52), vfov = THREE.MathUtils.degToRad(this.camera.fov), aspect = this.camera.aspect || 1;
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * aspect);
    const dist = 1.70 * Math.max(Rbound / Math.sin(vfov / 2), Rbound / Math.sin(hfov / 2));
    const dir = new THREE.Vector3(20, 12 - H * 0.46, 20).normalize();
    this.flyTo(C.clone().addScaledVector(dir, dist), C);
  }

  /* raycast the dots (+ visible bridges) under the pointer */
  private pick(e: PointerEvent): { node?: EveNode; bridge?: EveBridge } | null {
    if (!this.renderer) return null;
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
    const ray = new THREE.Raycaster(); ray.setFromCamera(ndc, this.camera);
    const targets: THREE.Object3D[] = [...this.G.dots.children];
    if (this.G.bridge.visible) for (const b of this.bridges) targets.push(b.sprite);
    const hit = ray.intersectObjects(targets, false)[0];
    if (!hit) return null;
    const ud = hit.object.userData;
    if (ud.bridge) return { bridge: ud.bridge as EveBridge };
    if (ud.node) return { node: ud.node as EveNode };
    return null;
  }
  /** world point where the pointer ray meets a plane (the camera-facing drag plane) */
  private rayOnPlane(e: PointerEvent, plane: THREE.Plane): THREE.Vector3 | null {
    if (!this.renderer) return null;
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
    const ray = new THREE.Raycaster(); ray.setFromCamera(ndc, this.camera);
    const out = new THREE.Vector3();
    return ray.ray.intersectPlane(plane, out) ? out : null;
  }

  private onPointerDown = (e: PointerEvent) => {
    if (e.button !== 0 || !this.renderer || e.target !== this.renderer.domElement) return;   // ignore panel/card presses
    const hit = this.pick(e);
    this.press = { x: e.clientX, y: e.clientY, t: performance.now(), node: hit?.node ?? null, bridge: hit?.bridge ?? null };
    if (hit?.node && hit.node.sprite && this.isDraggable(hit.node)) {
      // press landed on a DRAGGABLE dot → prepare a drag and SUPPRESS orbit for this gesture (see initThree).
      // Root/trunk (structural anchors) and bridges fall through: press.node still gives click→card, and
      // NOT stopping propagation lets a drag on them orbit as usual.
      e.stopPropagation();
      const sp = hit.node.sprite;
      const nrm = new THREE.Vector3(); this.camera.getWorldDirection(nrm);
      const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(nrm, sp.position.clone());
      const grab = this.rayOnPlane(e, plane);
      const offset = grab ? sp.position.clone().sub(grab) : new THREE.Vector3();
      this.drag = { node: hit.node, plane, offset, prevSpin: this.controls.autoRotate, moved: false };
      this.controls.autoRotate = false;
      this.renderer.domElement.setPointerCapture?.(e.pointerId);
    }
  };
  private onPointerMove = (e: PointerEvent) => {
    if (!this.drag || !this.press) return;
    if (!this.drag.moved && Math.hypot(e.clientX - this.press.x, e.clientY - this.press.y) < 5) return;
    this.drag.moved = true;
    const p = this.rayOnPlane(e, this.drag.plane); if (!p) return;
    // F4: clamp inside the dot's OWN field wedge so a drag can never move it into another field's sector.
    this.moveNode(this.drag.node, this.clampToWedge(this.drag.node, p.add(this.drag.offset)));
  };
  private onPointerUp = (e: PointerEvent) => {
    if (e.button !== 0 || !this.press) return;
    const moved = Math.hypot(e.clientX - this.press.x, e.clientY - this.press.y);
    const press = this.press, drag = this.drag;
    this.press = null; this.drag = null;
    if (drag) {
      this.renderer?.domElement.releasePointerCapture?.(e.pointerId);
      this.controls.autoRotate = drag.prevSpin;
      if (drag.moved) { this.persistDot(drag.node); return; }   // a real drag → save, no card
    }
    if (moved > 5) return;                                        // it was an orbit / pan, not a click
    if (press.node) this.selectNode(press.node);                 // click a dot → card (F3)
    else if (press.bridge) this.showBridge(press.bridge);        // click a bridge → bridge card
    else this.deselect();                                        // background click closes the card
  };
  private onContextMenu = (e: MouseEvent) => { e.preventDefault(); };   // suppress menu so two-finger-click drag pans (no reset)

  /** F4: only field dots move. Root/trunk are structural axis anchors; bridges are computed arc nodes. */
  private isDraggable(n: EveNode): boolean {
    return n.field >= 0 && n.treeType !== "root" && n.treeType !== "trunk";
  }
  /** F4: clamp a proposed WORLD position into the dot's OWN field wedge, in the tree's LOCAL cylindrical
      coords (matching place(): x=r·cosθ, z=−r·sinθ). Reuses the layout's wedge geometry (angular inset,
      radial band, dot-height band) so a dot slides along the wedge edge but never leaves its field. */
  private clampToWedge(n: EveNode, world: THREE.Vector3): THREE.Vector3 {
    const o = n.tree?.origin ?? { x: 0, z: 0 };
    const K = Math.max(1, n.tree?.fields.length ?? 1), TAU = Math.PI * 2, MARGIN = 0.05;   // off-the-boundary-line inset
    const lx = world.x - o.x, lz = world.z - o.z;
    // height band — above ground, below crown top (same caps clusterRelax uses)
    let y = world.y; if (y < 0.7) y = 0.7; else if (y > H * 1.16) y = H * 1.16;
    // radial band — off the trunk axis, out to the wedge's head-room at this height
    let r = Math.hypot(lx, lz); const rmin = R_BAND_MIN, rmax = rMaxAt(y);
    if (r < rmin) r = rmin; else if (r > rmax) r = rmax;
    // angular wedge — SAME bounds layout/clustering use, plus a small inner margin
    let a0 = angleOf(n.field, K) + SEC_PAD + WEDGE_INSET + MARGIN;
    let a1 = angleOf(n.field + 1, K) - SEC_PAD - WEDGE_INSET - MARGIN;
    if (a1 < a0) a0 = a1 = (a0 + a1) / 2;                     // ultra-narrow wedge (many fields) → the centre line
    if (a0 < 0) a0 += TAU; if (a1 < 0) a1 += TAU;
    let ang = Math.atan2(-lz, lx); if (ang < 0) ang += TAU;
    if (ang < a0) ang = a0; else if (ang > a1) ang = a1;
    return new THREE.Vector3(o.x + r * Math.cos(ang), y, o.z - r * Math.sin(ang));
  }

  /** F1 live-move: the dot's sprite, glow, selection ring, and every connected in-tree edge follow. */
  private moveNode(n: EveNode, pos: THREE.Vector3) {
    n.pos.copy(pos);
    n.sprite?.position.copy(pos);
    n.glowSprite?.position.copy(pos);
    if (n === this.selected) this.selRing.position.copy(pos);
    const verts = this.edgeIndex.get(n.id);
    if (verts) {
      const touched = new Set<THREE.BufferAttribute>();
      for (const v of verts) { v.attr.setXYZ(v.vi, pos.x, pos.y, pos.z); touched.add(v.attr); }
      touched.forEach((a) => (a.needsUpdate = true));
    }
  }
  /** Persist a dragged dot in LOCAL coords (relative to its tree origin). */
  private persistDot(n: EveNode) {
    const o = n.tree?.origin ?? { x: 0, z: 0 };
    (this.settings.dotPositions ??= {})[n.id] = { x: n.pos.x - o.x, y: n.pos.y, z: n.pos.z - o.z };
    n._pinned = true;
    void this.persist();
  }

  private selectNode(n: EveNode) {
    this.selected = n;
    if (this.lensChair) this.applyLens();   // keep the selected dot lit even if the active chair dims it
    const sp = n.sprite;
    if (sp) {
      const sz = sp.userData.baseScale as number;
      this.selRing.position.copy(n.pos); this.selRing.scale.set(sz * 2.4, sz * 2.4, 1); this.selRing.material.opacity = 0.95; this.selRing.visible = true;
      this.G.dots.children.forEach((s) => (s as THREE.Sprite).scale.setScalar((s as THREE.Sprite).userData.baseScale));
      sp.scale.setScalar(sz * 1.35);
    }
    this.showCard(n);
  }
  private deselect() {
    const had = this.selected; this.selected = null; this.selRing.visible = false;
    if (had && this.lensChair) this.applyLens();   // re-dim a dot the lens had hidden
    this.G.dots.children.forEach((s) => (s as THREE.Sprite).scale.setScalar((s as THREE.Sprite).userData.baseScale));
    this.hideCard();
  }

  /* ---------------- note / bridge card (F3) ---------------- */
  private hideCard() { this.noteCard?.removeClass("show"); }
  private async openFileInTab(path: string) {
    const file = this.app.vault.getAbstractFileByPath(path);
    if (file instanceof TFile) await this.app.workspace.getLeaf("tab").openFile(file);
    else new Notice("Note not found: " + path);
  }
  private showCard(n: EveNode) {
    const card = this.noteCard; if (!card) return;
    card.empty(); card.removeClass("bridge");
    const close = card.createSpan({ cls: "eve-nclose", text: "✕" });
    close.setAttr("role", "button"); close.setAttr("aria-label", "Close");
    close.addEventListener("click", () => this.deselect());
    const tree = n.tree;
    const fieldLabel = n.fieldName ?? (n.treeType === "root" ? "Root" : n.treeType === "trunk" ? "Trunk" : "Unfiled");
    const tag = card.createDiv({ cls: "eve-ntag", text: fieldLabel + " · " + n.treeType + (this.isForest && tree ? " · " + tree.topic : "") });
    const ringCol = n.field >= 0 ? this.secOf(n.field).ring : ROLE[n.treeType].ring;
    tag.style.color = this.themeDark ? lightHex(ringCol, 0.45) : ringCol;   // dark ring hues are too dim on the card
    card.createEl("h3", { cls: "eve-ntitle", text: n.title });
    if (n.description) card.createDiv({ cls: "eve-ndesc", text: n.description });
    if (n.views && n.views.length) {
      card.createDiv({ cls: "eve-nsec", text: "👁 Stakeholder views (" + n.views.length + ")" });
      for (const v of n.views) {
        if (!v.c && !v.t) continue;
        const row = card.createDiv({ cls: "eve-nview" });
        if (this.lensChair) row.toggleClass("on", v.c === this.lensChair);
        row.createSpan({ cls: "eve-vchair", text: v.c + ": " });
        row.appendText(v.t);
      }
    }
    if (tree) {
      const sec = (label: string, ids: string[]) => {
        card.createDiv({ cls: "eve-nsec", text: label });
        if (!ids.length) { card.createSpan({ cls: "eve-nnone", text: "— none —" }); return; }
        for (const id of ids) {
          const b = tree.byId.get(id) ?? null;
          const chip = card.createSpan({ cls: "eve-chip", text: b ? b.title : id });
          if (b) chip.addEventListener("click", () => this.selectNode(b));
        }
      };
      const outLinks = [...new Set(tree.edges.filter((e) => e.from === n.id).map((e) => e.to))];
      sec("Links to →", outLinks);
      sec("← Linked from", [...new Set(tree.incoming.get(n.id) || [])]);
    }
    const open = card.createEl("button", { cls: "eve-btn eve-nopen", text: "Open note ↗" });
    open.addEventListener("click", () => void this.openFileInTab(n.id));
    card.addClass("show");
  }
  private showBridge(b: EveBridge) {
    this.deselect();   // a bridge is not a dot — clear any dot selection first
    const card = this.noteCard; if (!card) return;
    card.empty(); card.addClass("bridge");
    const close = card.createSpan({ cls: "eve-nclose", text: "✕" });
    close.setAttr("role", "button"); close.setAttr("aria-label", "Close");
    close.addEventListener("click", () => this.hideCard());
    const tag = card.createDiv({ cls: "eve-ntag", text: "⇄ Bridge" });
    tag.style.color = this.themeDark ? lightHex(BRIDGE_COL, 0.45) : BRIDGE_COL;
    card.createEl("h3", { cls: "eve-ntitle", text: b.title });
    card.createDiv({ cls: "eve-ndesc", text: b.explain || "A manual link between two trees." });
    card.createDiv({ cls: "eve-nsec", text: "Connects" });
    const A = this.forest.trees.find((t) => t.id === b.from), B = this.forest.trees.find((t) => t.id === b.to);
    for (const t of [A, B]) {
      if (!t) continue;
      const chip = card.createSpan({ cls: "eve-chip", text: "🌳 " + t.topic });
      const rep = this.repOf(t);
      if (rep) chip.addEventListener("click", () => this.selectNode(rep));
    }
    if (b.filePath) { const open = card.createEl("button", { cls: "eve-btn eve-nopen", text: "Open note ↗" }); open.addEventListener("click", () => void this.openFileInTab(b.filePath!)); }
    card.addClass("show");
  }

  /* ---------------- control panel ---------------- */
  private detectObsidianDark(): boolean { return document.body.classList.contains("theme-dark"); }
  private applyTheme(dark: boolean) {
    if (!this.renderer) return;
    this.themeDark = dark; const T = dark ? THEMES.dark : THEMES.light; this.linkMul = T.linkMul;
    (this.scene.background as THREE.Color).set(T.bg); (this.scene.fog as THREE.Fog).color.set(T.fog);
    this.root.classList.toggle("dark", dark);
    for (const n of this.allNodes) {
      if (n.sprite) { const u = n.sprite.userData; const m = n.sprite.material as THREE.SpriteMaterial;
        m.map = dark ? this.diamondTexture(u.tint) : this.dotTexture(u.tint, u.ring);
        m.blending = dark ? THREE.AdditiveBlending : THREE.NormalBlending; m.needsUpdate = true; }
    }
    // FIX3: glow — additive on dark (glowing gems), normal on light (soft tint, no wash-out). One toggle
    // per cached material (the small set), not per dot.
    const gb = dark ? THREE.AdditiveBlending : THREE.NormalBlending;
    for (const ga of this.glowAnim) { ga.m.blending = gb; ga.m.needsUpdate = true; }
    if (this.glowDimMat) { this.glowDimMat.blending = gb; this.glowDimMat.needsUpdate = true; }
    for (const tree of this.forest.trees) if (tree.silMarks)
      for (const s of tree.silMarks) { const m = s.material as THREE.SpriteMaterial; m.blending = dark ? THREE.AdditiveBlending : THREE.NormalBlending; m.needsUpdate = true; }
    if (this.themeBtn) this.themeBtn.setText(dark ? "☀️ Light" : "🌙 Dark");
  }

  private buildControlsPanel() {
    const ui = this.root.createDiv({ cls: "eve-card eve-ui" });
    this.uiCard = ui;
    // collapsed-state pill (restores the panel); shown only while collapsed
    this.pill = this.root.createDiv({ cls: "eve-card eve-pill", text: "🍎" });
    this.pill.setAttr("role", "button"); this.pill.setAttr("aria-label", "Show panel"); this.pill.setAttr("title", "Show panel");
    this.pill.addEventListener("click", () => this.setPanelCollapsed(false));

    const hd = ui.createDiv({ cls: "eve-hd" });
    const hdTitle = hd.createDiv({ cls: "eve-hdtitle" });
    hdTitle.createDiv({ cls: "eve-brand", text: "🍎 Eve's Apple Tree" });
    hdTitle.createDiv({ cls: "eve-slogan", text: "think how to think" });
    const mini = hd.createSpan({ cls: "eve-min", text: "–" });
    mini.setAttr("role", "button"); mini.setAttr("aria-label", "Minimize panel"); mini.setAttr("title", "Minimize");
    mini.addEventListener("click", () => this.setPanelCollapsed(true));
    const pitch = ui.createDiv({ cls: "eve-pitch" });
    pitch.appendText("Your notes become a living "); pitch.createEl("b", { text: "tree of light" });
    pitch.appendText(" — so you can "); pitch.createEl("b", { text: "see the shape of your own thinking" });
    pitch.appendText(": forgotten links resurface, related ideas cluster, and your breakthroughs glow.");
    if (this.isForest) ui.createDiv({ cls: "eve-topic", text: `🌲 Forest · ${this.forest.trees.length} trees` });

    // How to use it
    const guide = ui.createDiv({ cls: "eve-grp eve-guide" });
    guide.createDiv({ cls: "eve-lbl", text: "How to use it" });
    const steps = guide.createEl("ul", { cls: "eve-steps" });
    const step = (lead: string, rest: string) => { const li = steps.createEl("li"); li.createEl("span", { cls: "k", text: lead }); li.appendText(rest); };
    step("Drag · scroll · two-finger-drag", " to fly through it, zoom, and pan.");
    step("Click a dot", " → see its card; drag a dot to reposition it (saved).");
    step("Zoom sets the detail", " → far out: green tree icons (names beneath) · mid: constellation · closer: titles · closest: + descriptions.");
    step("Related ideas cluster", "; your 🌸 ah-has & 🍎 outputs glow.");

    // Show / hide
    const showGrp = ui.createDiv({ cls: "eve-grp" });
    showGrp.createDiv({ cls: "eve-lbl", text: "Show / hide" });
    const check = (label: string, val: boolean, on: (v: boolean) => void) => {
      const row = showGrp.createDiv({ cls: "eve-row" });
      const cb = row.createEl("input", { type: "checkbox" }); cb.checked = val;
      row.createEl("label", { text: label });
      cb.addEventListener("change", () => on(cb.checked));
      row.addEventListener("click", (ev) => { if (ev.target !== cb) { cb.checked = !cb.checked; on(cb.checked); } });
      return cb;
    };
    check("Field sectors", this.sectorsOn, (v) => { this.sectorsOn = v; this.applyFieldMode(); });
    check("Trunk & branch links", true, (v) => { this.G.struct.visible = v; });
    check("Cross-field links", true, (v) => { this.G.rhizome.visible = v; });
    check("Field names", this.fieldLabelsOn, (v) => { this.fieldLabelsOn = v; });
    check("Ah-ha 🌸 / Output 🍎", this.accentLabelsOn, (v) => { this.accentLabelsOn = v; });
    if (this.bridges.length) check("Cross-tree bridges", true, (v) => { this.bridgesOn = v; this.G.bridge.visible = v; });
    check("Auto-spin (rotate)", false, (v) => { this.controls.autoRotate = v; });   // explicit opt-in → honoured even under prefers-reduced-motion

    const grp = ui.createDiv({ cls: "eve-grp" });
    grp.createDiv({ cls: "eve-lbl", text: "Field render mode" });
    const seg = grp.createDiv({ cls: "eve-seg" });
    const mk = (val: "flat" | "column", text: string, checked: boolean) => {
      const lab = seg.createEl("label");
      const r = lab.createEl("input", { type: "radio" }); r.name = "eve-fmode"; r.value = val; r.checked = checked;
      lab.appendChild(document.createTextNode(text));
      r.addEventListener("change", () => { if (r.checked) { this.fieldMode = val; this.applyFieldMode(); } });
    };
    mk("flat", "Flat wedge", this.fieldMode === "flat"); mk("column", "Column", this.fieldMode === "column");

    // Appearance — text size · light shine · tree size (sliders) + zoom-out icon (F2)
    const appG = ui.createDiv({ cls: "eve-grp" });
    appG.createDiv({ cls: "eve-lbl", text: "Appearance" });
    const slider = (label: string, min: number, max: number, step: number, value: number,
      fmt: (v: number) => string, onInput: (v: number) => void, onChange: (v: number) => void) => {
      const row = appG.createDiv({ cls: "eve-slider" });
      const head = row.createDiv({ cls: "eve-slrow" });
      head.createSpan({ cls: "eve-slname", text: label });
      const val = head.createSpan({ cls: "eve-slval", text: fmt(value) });
      const input = row.createEl("input", { type: "range" });
      input.min = String(min); input.max = String(max); input.step = String(step); input.value = String(value);
      input.addEventListener("input", () => { const v = +input.value; val.setText(fmt(v)); onInput(v); });
      input.addEventListener("change", () => onChange(+input.value));
    };
    const asX = (v: number) => v.toFixed(2) + "×";
    slider("Text size", 0.6, 2, 0.05, this.textScale, asX,
      (v) => { this.textScale = v; this.applyTextScale(); },
      (v) => { this.settings.textSize = v; void this.persist(); });
    slider("Light shine", 0, 2, 0.05, this.shine, asX,
      (v) => { this.shine = v; },                              // applied live by the render loop
      (v) => { this.settings.glowScale = v; void this.persist(); });
    appG.createDiv({ cls: "eve-lbl eve-lbl2", text: "Zoom-out icon" });
    const iconSel = appG.createEl("select", { cls: "eve-lenssel" });
    ([["round", "● Round"], ["conifer", "▲ Conifer"], ["apple", "🍎 Apple"]] as [ZoomIcon, string][]).forEach(([val, text]) => {
      const o = iconSel.createEl("option", { text }); o.value = val;
    });
    iconSel.value = this.silIcon;
    iconSel.addEventListener("change", () => {
      this.silIcon = iconSel.value as ZoomIcon; this.settings.zoomOutIcon = this.silIcon;
      for (const tree of this.forest.trees) {
        if (tree.sil) { const m = tree.sil.material as THREE.SpriteMaterial; m.map = this.treeSilTexture(this.silIcon); m.needsUpdate = true; }
        if (tree.silMarks) for (const mk of tree.silMarks) this.placeSilMark(mk);   // re-anchor 🌸/🍎 onto the new crown
      }
      void this.persist();
    });

    // View: Reset · Fit · Dark
    const viewGrp = ui.createDiv({ cls: "eve-grp" });
    viewGrp.createDiv({ cls: "eve-lbl", text: "View" });
    const btns = viewGrp.createDiv({ cls: "eve-btns" });
    const reset = btns.createEl("button", { cls: "eve-btn", text: "↺ Reset", attr: { title: "Return to the opening view" } });
    reset.addEventListener("click", this.resetView);
    const fitb = btns.createEl("button", { cls: "eve-btn", text: "⊹ Fit", attr: { title: "Re-frame the whole tree / forest" } });
    fitb.addEventListener("click", () => { this.fit(); this.resetView(); });
    this.themeBtn = btns.createEl("button", { cls: "eve-btn", text: this.themeDark ? "☀️ Light" : "🌙 Dark", attr: { title: "Switch between light and diamond-dark" } });
    this.themeBtn.addEventListener("click", () => { this.themeManual = true; this.applyTheme(!this.themeDark); });
    const refresh = ui.createEl("button", { cls: "eve-btn", text: "⟳ Rebuild from vault" });
    refresh.addEventListener("click", () => this.reload());
    // F1 — clear all user-dragged positions (2-click confirm within 3s), then rebuild
    const resetLayout = ui.createEl("button", { cls: "eve-btn", text: "⌾ Reset dot layout", attr: { title: "Clear every dot you've dragged and re-run the auto-layout" } });
    resetLayout.addEventListener("click", () => {
      const now = performance.now();
      if (now - this.resetArmed > 3000) { this.resetArmed = now; new Notice("Reset dot layout? Click again within 3s to clear every moved dot."); return; }
      this.resetArmed = 0; this.settings.dotPositions = {};
      new Notice("Dot layout reset."); void this.persist().then(() => this.reload());
    });

    if (this.isForest) {
      const fg = ui.createDiv({ cls: "eve-grp" });
      fg.createDiv({ cls: "eve-lbl", text: "Focus tree" });
      const sel = fg.createEl("select", { cls: "eve-lenssel" });
      const o0 = sel.createEl("option", { text: "🌲 Whole forest" }); o0.value = "-1";
      this.forest.trees.forEach((t, i) => { const o = sel.createEl("option", { text: "🌳 " + t.topic }); o.value = String(i); });
      sel.addEventListener("change", () => { const i = +sel.value; if (i < 0) this.resetView(); else this.focusTree(this.forest.trees[i]); });
    }

    this.buildChairLens(ui);
    // (in-view footer branding removed — a support link lives in the plugin's settings tab instead)

    // note / bridge card overlay (F3) — hidden until a dot/bridge is clicked
    this.noteCard = this.root.createDiv({ cls: "eve-card eve-note" });
    // restore persisted minimize state (no re-save on initial apply)
    this.setPanelCollapsed(this.settings.panelCollapsed ?? false, false);
  }

  private setPanelCollapsed(collapsed: boolean, save = true) {
    this.uiCard?.toggleClass("hidden", collapsed);
    this.pill?.toggleClass("show", collapsed);
    if (save) { this.settings.panelCollapsed = collapsed; void this.persist(); }
  }

  /* ---------------- chair lens (stakeholder overlay, forest-wide) ---------------- */
  private viewChairs(n: EveNode): string[] { return (n.views ?? []).map((v) => v.c).filter(Boolean); }

  private buildChairLens(ui: HTMLElement) {
    const declared = [...new Set(this.forest.trees.flatMap((t) => t.cast || []))];
    this.lensCast = [...new Set([...declared, ...this.allNodes.flatMap((n) => this.viewChairs(n))])];
    if (!this.lensCast.length) return;                 // no stakeholder layer → no control
    this.viewDots = this.allNodes.filter((n) => (n.views ?? []).length > 0);
    const grp = ui.createDiv({ cls: "eve-grp" });
    grp.createDiv({ cls: "eve-lbl", text: "Stakeholder lens" });
    grp.createDiv({ cls: "eve-lenshint", text: "Sit in one chair: ideas that chair has no view on dim away, so you sweep the tree through one perspective." });
    const sel = grp.createEl("select", { cls: "eve-lenssel" });
    this.lensSelect = sel;
    const off = sel.createEl("option", { text: "— off (all chairs) —" }); off.value = "";
    this.lensCast.forEach((c) => { const o = sel.createEl("option", { text: c }); o.value = c; });
    sel.addEventListener("change", () => { this.lensChair = sel.value || null; this.applyLens(); });
    this.mirrorEl = grp.createDiv({ cls: "eve-mirror" });
    this.renderMirror();
  }

  private renderMirror() {
    const mirror = this.mirrorEl; if (!mirror) return;
    mirror.empty();
    const M = this.viewDots.length;
    const rows = this.lensCast.map((c) => {
      const k = this.viewDots.filter((n) => this.viewChairs(n).includes(c)).length;
      return { c, k, pct: M ? Math.round(100 * k / M) : 0 };
    }).sort((a, b) => b.k - a.k || (a.c < b.c ? -1 : 1));
    const cap = mirror.createDiv({ cls: "eve-mcap" });
    if (this.lensChair) { const r = rows.find((x) => x.c === this.lensChair)!; cap.setText(`${this.lensChair} · ${r.k}/${M} dots (${r.pct}%)`); }
    else cap.setText(`chair-mirror · ${M} dot${M === 1 ? "" : "s"} with views`);
    for (const r of rows) {
      const row = mirror.createDiv({ cls: "eve-mrow" + (r.c === this.lensChair ? " on" : "") });
      row.setAttr("role", "button"); row.tabIndex = 0; row.setAttr("aria-label", `Stakeholder lens: ${r.c} (${r.pct}%)`);
      row.createSpan({ cls: "eve-mname", text: r.c });
      const bar = row.createSpan({ cls: "eve-mbar" }); bar.createEl("i").style.width = r.pct + "%";
      row.createSpan({ cls: "eve-mpct", text: r.pct + "%" });
      const toggle = () => {
        this.lensChair = this.lensChair === r.c ? null : r.c;
        if (this.lensSelect) this.lensSelect.value = this.lensChair ?? "";
        this.applyLens();
      };
      row.addEventListener("click", toggle);
      row.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
    }
  }

  private applyLens() {
    for (const n of this.allNodes) {
      const match = !this.lensChair || n === this.selected || this.viewChairs(n).includes(this.lensChair);
      n._lens = match ? 1 : 0.10;
      // FIX3: glow follows the lens by swapping to a shared faint material (per-dot opacity isn't possible
      // with shared materials); its opacity is still animated live so the dim floor breathes with detail.
      if (n.glowSprite) n.glowSprite.material = match ? (n.glowSprite.userData.litMat as THREE.SpriteMaterial) : this.glowDim();
    }
    this.renderMirror();
  }

  /* ---------------- loop + teardown ---------------- */
  private startLoop() {
    const loop = (t: number) => {
      this.raf = requestAnimationFrame(loop);
      if (this.tween) {
        const k = Math.min(1, (t - this.tween.t0) / this.tween.dur), e = this.easeInOutCubic(k);
        this.camera.position.lerpVectors(this.tween.fromPos, this.tween.toPos, e);
        this.controls.target.lerpVectors(this.tween.fromTgt, this.tween.toTarget, e);
        if (k >= 1) { this.tween = null; this.controls.enabled = true; }
      }
      this.controls.update();
      // LOD crossfade: dots/wedges/links fade out, green silhouettes fade in (and back)
      const d = this.camera.position.distanceTo(this.controls.target);
      this.lodT = this.ss(LOD_START * this.D0, LOD_END * this.D0, d); const detail = 1 - this.lodT;
      for (const n of this.allNodes) {
        // chair-lens dim floor is theme-aware: additive-blended diamonds vanish at 0.10 on black, so dark raises the floor
        const lens = (n._lens ?? 1) < 1 ? (this.themeDark ? 0.22 : 0.10) : (n._lens ?? 1);
        if (n.sprite) (n.sprite.material as THREE.SpriteMaterial).opacity = lens * detail;
      }
      // FIX3 light-shine: drive the SMALL cached glow-material set once per frame (subtle default, theme-
      // adaptive, capped so light never washes out and dark stays the showpiece). Slider scales the whole.
      const gLeaf = this.themeDark ? 0.30 : 0.13, gAcc = this.themeDark ? 0.55 : 0.26, gCap = this.themeDark ? 0.95 : 0.52;
      for (const ga of this.glowAnim) ga.m.opacity = Math.min(gCap, (ga.accent ? gAcc : gLeaf) * detail * this.shine);
      if (this.glowDimMat) this.glowDimMat.opacity = Math.min(gCap, (this.themeDark ? 0.12 : 0.05) * detail * this.shine);
      for (const tree of this.forest.trees) {
        if (tree.sil) (tree.sil.material as THREE.SpriteMaterial).opacity = this.lodT * SIL_OPACITY;
        if (tree.silMarks) for (const m of tree.silMarks) (m.material as THREE.SpriteMaterial).opacity = this.lodT;
      }
      for (const fm of this.fadeMats) fm.m.opacity = fm.b * detail * (fm.link ? this.linkMul : 1);
      if (this.selected && this.selected.sprite) { this.selRing.position.copy(this.selected.pos); this.selRing.material.opacity = 0.95 * detail; }
      this.updateLabels();
      this.renderer!.render(this.scene, this.camera);
    };
    this.raf = requestAnimationFrame(loop);
  }

  /** Tear down GL + DOM. keepRoot=false leaves the root container for a reload. */
  private dispose(clearRoot = true) {
    if (this.raf) cancelAnimationFrame(this.raf), (this.raf = 0);
    this.ro?.disconnect(); this.ro = undefined;
    // interaction listeners live on the root (capture phase) + the canvas — remove both so reloads don't stack them
    this.root?.removeEventListener("pointerdown", this.onPointerDown, true);
    this.root?.removeEventListener("pointermove", this.onPointerMove, true);
    this.root?.removeEventListener("pointerup", this.onPointerUp, true);
    if (this.renderer) {
      const c = this.renderer.domElement;
      c.removeEventListener("contextmenu", this.onContextMenu);
      this.controls?.dispose();
      this.scene?.traverse((o: any) => { o.geometry?.dispose?.(); if (o.material) { const m = o.material; (Array.isArray(m) ? m : [m]).forEach((x: any) => x.dispose?.()); } });
      Object.values(this.texCache).forEach((t) => t.dispose()); this.texCache = {};
      this.renderer.dispose();
      this.renderer.forceContextLoss();   // release the GL context NOW — otherwise every rebuild/reopen leaks one until Electron kills the oldest (scene goes black)
      c.remove(); this.renderer = undefined;
    }
    this.fadeMats = []; this.bridges = [];
    // FIX3: cached glow materials are shared, so lens-dimmed dots detach their lit material from the scene
    // — dispose the whole cached set explicitly (scene.traverse only reaches materials still attached).
    this.glowMats.forEach((m) => m.dispose()); this.glowMats.clear();
    this.glowDimMat?.dispose(); this.glowDimMat = undefined; this.glowAnim = [];
    this.pool = []; this.active.clear(); this.sEls = []; this.aEls = []; this.sectorAnchor = [];
    this.selected = null; this.tween = null; this.lodT = 0;
    this.press = null; this.drag = null; this.edgeIndex.clear();
    this.uiCard = undefined; this.pill = undefined; this.noteCard = undefined;
    this.lensChair = null; this.lensCast = []; this.viewDots = []; this.mirrorEl = undefined; this.lensSelect = undefined;
    if (clearRoot && this.root) {
      this.root.empty();
      this.labelLayer = this.root.createDiv({ cls: "eve-labels" });
    } else if (this.root) {
      Array.from(this.root.children).forEach((ch) => ch.remove());
      this.labelLayer = this.root.createDiv({ cls: "eve-labels" });
    }
  }
}
