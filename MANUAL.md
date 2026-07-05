# 📖 User manual — Eve Apple Tree Thinking System

This is the full walkthrough, written so anyone can follow it. Three paths, depending on where you start. Pick yours and read only that one.

---

## The one thing to understand first: tree frontmatter

The tree does not draw every note in your vault. It draws notes that carry **tree frontmatter**: three small lines at the very top of a note, between two `---` fences.

```yaml
---
tree_type: leaf        # what kind of dot: root | trunk | leaf | flower | apple
field: Researcher      # the lens you were thinking through (its sector on the ground)
time: 2026-07-05       # when it grew (a date, or a plain number for height)
---
```

That is the whole key. A note with these lines becomes a glowing dot. A note without them stays invisible to the tree (by default, so a big vault stays clean and fast).

Two more facts that explain almost everything else:

- **One folder = one tree.** Every top-level folder in your vault becomes its own tree. Folders inside folders do not make new trees; they stay part of the top-level folder's tree.
- **Links are the rhizome.** Normal `[[wikilinks]]` between notes become the lateral threads of the tree.

If a note you expected is missing: it lacks frontmatter, or it sits outside a tree folder. (There is also a setting, "Only show notes with tree frontmatter." Turn it off and every note in the vault appears, frontmatter or not.)

The five dot types, in one breath: **root** is the seed question the tree grows from, **trunk** is a pivotal idea the topic turns on, **leaf** is one ordinary idea (most of your tree), **flower 🌸** is a breakthrough you mark yourself, **apple 🍎** is a finished output. The `templates/` folder has a ready-made note for each, plus `field` (define a new lens) and `bridge` (connect two trees, with a reason).

---

## Path A — you are completely new to Obsidian

You need two free things: Obsidian (the notes app) and this system.

1. **Install Obsidian.** Go to [obsidian.md](https://obsidian.md), download it, open it. It is a note-taking app where notes are plain files in a folder on your computer. That folder is called a **vault**.
2. **Download the system.** On [github.com/BrandtheBrand/eve-apple-tree](https://github.com/BrandtheBrand/eve-apple-tree), press the green **Code** button, choose **Download ZIP**, and unzip it somewhere you like (Documents is fine).
3. **Open the starter vault.** In Obsidian, choose **Open folder as vault** and pick the unzipped `eve-thinking-system/starter-vault/` folder. Obsidian may ask if you trust this vault and want to enable its plugins: say yes. That switch is what turns the tree renderer on.
4. **Look at your first tree.** The starter vault already contains a small example, **My First Tree**: six notes with their frontmatter already written. Press `Cmd/Ctrl + P`, type **tree**, and run *"Open the tree of light."* The example stands up in 3D. Drag to orbit it, scroll to zoom.
5. **Understand what you are seeing.** Zoom all the way in: one dot, one idea. Pull back: the dots make a tree. Further: the field names fan out from the root. All the way out: the tree becomes a small green icon. That zoom IS the interface.
6. **Wake the team** (the AI half). Install [Claude Code](https://claude.com/claude-code), open it in the same starter-vault folder, and say: **"gardener, let's think."** The gardener introduces itself and runs a short exercise to learn how you word things. From then on you think out loud; it proposes tidy leaf notes and links, and you say yes or no. It never writes anything without your yes, and it never creates your 🌸 breakthroughs or 🍎 outputs; those are yours to mark.
   - *No Claude Code?* Open `.claude/skills/gardener/SKILL.md`, copy its text into any capable AI as its system prompt, and work the same way by copy-paste.
   - *No AI at all?* Skip this step entirely; Path C below shows the by-hand loop, and it works the same here.
7. **Plant your first real thought.** Tell the gardener something you are actually chewing on. It proposes a leaf (title, field, time). Say yes. Run the tree's **Rebuild** button. Your first dot is on the tree.

You are done: that is the whole loop. Think, plant, rebuild, look.

## Path B — you already use Obsidian and want a fresh vault for this

Do Path A from step 2. That is all: download the ZIP, open `eve-thinking-system/starter-vault/` as a second vault (Obsidian happily runs many vaults), enable plugins when asked, open the tree, wake the team. Your existing vault is untouched.

## Path C — you want the tree inside your existing vault

Nothing about your vault changes until you add frontmatter to a note. Three parts.

1. **Install the plugin.**
   - Once it is listed: **Settings → Community plugins → Browse**, search "Eve Apple Tree Thinking System," install, enable.
   - Until then, by hand: download `main.js`, `manifest.json`, `styles.css` from the [latest release](https://github.com/BrandtheBrand/eve-apple-tree/releases/latest) into `<your vault>/.obsidian/plugins/eve-apple-tree/`, then enable it in **Settings → Community plugins**.
2. **Add Eve's tree team** (the AI half; skip if you want the tree only). Download `eve-tree-team-0.4.0.zip` from the same release and copy everything inside `eve-tree-team/` into your **vault root**, including the hidden `.claude/` folder. It brings the gardener skill, the challenger and observer, the two user-model files, the operating contract (`CLAUDE.md`; if you already have one, merge by hand instead of overwriting), and the `templates/` folder.
3. **Grow your first tree.**
   - Make a folder named after a topic you think about. That folder is your first tree.
   - Move (or create) a few notes inside it and give each one tree frontmatter; copy from `templates/`. Give the tree a `root` note (the seed question), maybe a `trunk`, and a handful of `leaf` notes. Link related notes with `[[wikilinks]]`.
   - Open the tree (`Cmd/Ctrl + P` → *"Open the tree of light"*) and press **Rebuild** after you add notes.
   - With the team: open your vault folder in Claude Code, say **"gardener, let's think,"** and from then on it drafts the frontmatter and files for you, always asking first.

**The by-hand loop, no AI anywhere:** copy a template → write your idea in it → set `field` and `time` → link it → Rebuild. The tree renders from plain files; the AI is a gardener, not a gatekeeper.

---

## When something looks wrong

| What you see | Why | Fix |
|---|---|---|
| A note is not on the tree | No tree frontmatter, or the setting filters it | Add the three frontmatter lines, or turn off "Only show notes with tree frontmatter" |
| A whole folder shows no tree | None of its notes carry frontmatter | Give at least one note `tree_type` frontmatter |
| Everything is in ONE tree | The notes sit at the vault root or in one folder | One top-level folder per topic |
| Two trees will not connect | By design there are no automatic cross-tree links | Write a bridge note (`templates/bridge.md`) explaining the connection |
| Tree looks stale after edits | The tree renders on demand | Press **Rebuild** in the panel |

## Everyday controls

Drag to orbit · scroll to zoom · two-finger-click (right-button) drag to pan · click a dot for its card, **Open note ↗** opens the file · drag a dot to place it inside its field · drag a tree by its trunk, root, or far-zoom silhouette to arrange your forest · 🌙/☀️ overrides the theme · zoom-out icon style, text size, and light shine live in the panel.

---

*The team proposes, you decide. Your thinking stays yours.*
