# Note format — how a note becomes a dot

Every note carries a little **YAML frontmatter** so the 3D tree can place it and the Gardener can reason about it. Keep it small; the Gardener fills it in for you.

---

## The frontmatter

```yaml
---
tree_type: leaf          # root | trunk | leaf | flower | apple | seed   (required)
field: Researcher        # the lens/sector this lives in          (leaves/flowers/apples; omit for root & trunk)
time: 2026-06-26         # ISO date or ordinal → vertical (TIME) position (required)
flower: false            # true marks an Ah-ha (also set tree_type: flower)
apple: "[[The 200-word version]]"   # link to the output this became, if any
title: One note, one idea           # optional; defaults to the file name
---
```

### Field-by-field

| Key | Values | Drives | Notes |
|---|---|---|---|
| `tree_type` | `root` `trunk` `leaf` `flower` `apple` `seed` | the dot's role/style | the only required *kind* |
| `field` | a lens name (`Researcher`, `Maker`, `Critic`, `Storyteller`, or your own) | the angular **sector** (X/Z) | omit for `root`/`trunk` (they sit on the central axis) |
| `time` | ISO date `2026-06-26` or an integer ordinal | the **height** (Y): old=low, new=high | usually the note's creation/insight date |
| `flower` | `true` / `false` | marks durable Ah-ha memory | a flower note: `tree_type: flower` + `flower: true` |
| `apple` | `[[wikilink]]` to the output | links thinking → product | set on the leaf/flower that produced an apple |
| `title` | text | label shown in the 3D view | optional; file name is the fallback |

### Seeds — the one dot that isn't on the tree

A **seed** is a topic you have *not opened yet*: a door, not an idea. It needs only a title.

```yaml
---
tree_type: seed
field: Researcher    # OPTIONAL — see below
---
```

- **No `time`.** A seed has no place on the time axis because it hasn't happened yet. Write one and it's ignored.
- **`field` decides which pool it falls into** — nothing else. *With* a field, the seed pools at that tree's foot: it's an unopened branch of a topic you're already growing. *Without* one, it drifts to the shared **forest pool**: an unopened topic that belongs to no tree yet.
- **A seed never opens a field wedge.** An unopened topic must not draw an empty sector, so its `field` is a label, not a coordinate.
- **Seeds are quiet.** They carry no automatic label on the 3D view — point at one and it names itself, move away and it's gone. A pool you can ignore is a pool you'll actually keep filling.
- **Links to a seed always read faint.** A thread to a door you haven't opened is a loose one, never structural.

A seed leaves the pool in one of two ways: it **germinates** (you open it — it becomes a trunk or a leaf with a real `time`) or it **composts** (you decide it doesn't matter). Both are the thinker's call.

### The body = the rhizome

Write the idea in plain Markdown. **Connections are ordinary `[[wikilinks]]`** in the body — those links *are* the branches and rhizome. Links between notes with **different `field`s** are rhizome links (the valuable, cross-field kind).

```markdown
---
tree_type: leaf
field: Maker
time: 2026-06-26
---

The smallest version that works beats the best plan — shipping teaches faster than thinking.

Rhymes with [[Prototype over plan]] and, across fields, with [[Cut the first paragraph]] (Storyteller).
```

---

## The body, in layers  *(filled over time — title/desc first, the rest on deepen)*

A dot's body grows in layers:

1. **Idea** — the **title** (a short handle, the thinker's voice). See `DOT-VOICE.md`.
2. **Questions** — the opening lines / `desc`: the *who / what / why* to investigate. A fresh dot is allowed to be all questions and no answers.
3. **Answers** — filled when you **deepen** the dot: the findings, with sources. *Many answers are other dots* — link them (the **answer-network**); reach for external research only when the tree can't answer.
4. **Stakeholder views** — a `## Stakeholder views` section: how each relevant **chair** sees this dot. **POV is a content layer here — never a `field`.** Every dot is seen by every stakeholder, so stakeholder is *cross-cutting*, not a sector; putting it on `field` would flatten a content layer onto the structural one. The 3D card renders this block on click. Filled on **deepen, one dot at a time** (the system proposes only the chairs that touch this dot).

```markdown
## Stakeholder views
- **Worker:** kill the cheap price and you kill my job, not the poverty — and the markup never reaches my needle.
- **Brand:** demand is exogenous — people say they'll pay true cost and don't.
- **River & soil:** a price tag is a permission slip; some harm already landed on a body.
```

> For the standalone 3D viz, the same layer can ride on the dot as a `views: [{c, t}]` array (chair `c`, take `t`); the card renders it identically. A cross-chair **tension** big enough to *travel* graduates out of `views` into its **own dot** (structural: it gets a `field`, `time`, links).

---

## How it maps to the tree (the demo's logic)

- **`time` → Y (height).** Oldest notes at the base, newest at the top. The tree grows upward.
- **`field` → X/Z (sector).** Each field is an angular wedge; the canopy widens with height.
- **`[[links]]` → edges.** Structural links (to trunk) read thick; cross-field rhizome links read faint. The links are the real structure.
- **`tree_type` → dot style.** Root/trunk on the axis; leaves in the canopy; flowers & apples glow (the payoff nodes).

---

## Conventions

- **One idea per leaf.** Two ideas = two notes.
- **Don't hand-edit positions.** `field` + `time` are enough; the view computes the rest deterministically. (The future plugin may let you *pin* a note, writing `pos_x/pos_y/pos_z` — flat keys only.)
- **YAML only.** Don't use Dataview inline fields (`key:: value`) as the store — the system and Obsidian's metadata cache read YAML.
- **Let the Gardener do it.** You speak the idea; the Gardener writes the note with correct frontmatter and proposes the links. See `templates/` for the shapes.
