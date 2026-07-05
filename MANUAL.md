# User manual: Eve Apple Tree Thinking System

Eve's Apple Tree turns the notes in your Obsidian vault into a **tree of light**: a calm, glowing 3D shape you fly around with your mouse. Each note becomes one dot. Each folder of notes becomes one tree. The shape grows taller and wider as you keep thinking.

This manual is long on purpose. Read only the section you need right now; the rest will still be here.

**In this manual:**
1. [What is this?](#1-what-is-this)
2. [What you need](#2-what-you-need)
3. [Choose your start](#3-choose-your-start)
4. [Reading your tree](#4-reading-your-tree)
5. [Writing notes the tree can see](#5-writing-notes-the-tree-can-see)
6. [The panel, control by control](#6-the-panel-control-by-control)
7. [Working with the AI team](#7-working-with-the-ai-team)
8. [FAQ](#8-faq)
9. [When something looks wrong](#9-when-something-looks-wrong)

---

## 1. What is this?

It's an Obsidian plugin that renders your notes as a lit-up 3D tree instead of a flat list of files. It ships no artificial intelligence of its own; there's an optional companion kit (section 7) that adds an AI thinking partner, but the tree itself is only a renderer that reads plain text.

![The plugin's forest view: dozens of trees made of glowing dots on a dark plain, with the control panel open on the left](img/hero.jpg)

*A forest of trees. Each tree is one topic (one folder); each point of light is one idea (one note).*

Zoom does most of the work of the interface. Here's the same kind of tree at three different distances:

![Two trees collapsed to green silhouettes with their names beneath, seen from far away](img/silhouette.png)

*Pulled all the way back: each tree becomes a small, labeled silhouette. This is what a forest of many topics looks like at a glance.*

![A forest of two named trees, dots and their connecting lines visible, field names labeled around each one](img/forest-light.png)

*Zoomed to a normal working distance: the dots and the lines between them (the tree's structure) become visible, along with the name of each field they sit in.*

![Individual note titles floating beside their dots, close up](img/titles-dark.png)

*Zoomed in close: each dot's title appears next to it. Closer still, a short description appears too.*

That's the whole idea: fly toward what you're curious about, and the tree tells you more the closer you get.

---

## 2. What you need

- **Obsidian**, version 1.7.2 or later, on a desktop computer (Windows, Mac, or Linux). It's free. This plugin does not run on Obsidian's mobile or tablet apps: the 3D view needs rendering power those apps don't expose.
- Optional: **Claude Code**, or any other AI assistant you can hand a system prompt to, if you want the AI thinking partner described in section 7. The tree works completely without it.

Nothing else. No account, no sign-up, no subscription.

---

## 3. Choose your start

Three paths, depending on where you're starting from. Pick the one that matches you and read only that one.

### Path A: completely new to Obsidian

About 20 minutes. Ends with a working 3D view of a six-note example tree, and, if you choose to go that far, your own first thought planted with the AI team's help.

**Get Obsidian and the system.**

1. Go to [obsidian.md](https://obsidian.md).
2. Download Obsidian for your operating system.
3. Install it and open it.

You should now see Obsidian's welcome screen, offering to create or open a vault (a vault is nothing more than a folder on your computer that holds your notes).

4. Go to [github.com/BrandtheBrand/eve-apple-tree](https://github.com/BrandtheBrand/eve-apple-tree).
5. Click the green **Code** button.
6. Click **Download ZIP**.
7. Unzip the file somewhere you'll find again (your Documents folder is fine).

**Open the starter vault.**

8. In Obsidian, choose **Open folder as vault**.
9. Select the `eve-thinking-system/starter-vault/` folder from inside what you just unzipped.
10. If Obsidian asks whether to trust this vault's plugins, agree. (Is that safe? Yes: this vault ships with exactly one plugin, the tree renderer itself, and nothing else.)

You should now see a folder called **My First Tree** and a note called **START-HERE** in Obsidian's file list.

**Open the tree.**

11. Open the command palette: `Cmd+P` on Mac, `Ctrl+P` on Windows or Linux.
12. Type **tree**.
13. Select **Open the tree of light**.

You should now see My First Tree standing in 3D: six glowing dots joined by faint lines, on a dark plain.

14. Drag with your mouse to orbit around it.
15. Scroll to zoom in and out.

You should see individual dot titles appear as you get close, and the whole tree shrink to a small green icon as you pull all the way back out. That's the whole reading interface; section 4 explains what you're looking at in more depth.

**Optional: wake the AI team.**

The tree works on its own from here. The next steps add the AI half, which turns your own thoughts into new dots for you.

16. Install [Claude Code](https://claude.com/claude-code), if you don't already have it.
17. Open the same `eve-thinking-system/starter-vault/` folder with Claude Code.
18. Type: *"Gardener, let's think."*

You should see the gardener introduce itself and offer a short exercise where you hand-write a few example dots, so it learns to title ideas the way you would rather than in a generic AI voice.

19. Tell the gardener one thing you're actually chewing on right now.
20. Approve the dot it proposes.
21. Click **Rebuild from vault** in the panel.

You should now see your own first dot added to the tree, next to the six examples.

That's the entire practice from here forward: think out loud, approve what's proposed, rebuild, look. No Claude Code, or don't want the AI half at all? My First Tree and the by-hand loop in section 5 work with zero AI involved.

### Path B: you already use Obsidian, and want a separate vault for this

About 10 minutes. Ends with a second vault, running independently of your existing one, holding the same six-note example tree as Path A.

1. Follow Path A starting from step 4: download the ZIP, open `starter-vault/` as a vault, trust its one plugin, open the tree, and, if you'd like, wake the AI team.
2. When Obsidian opens the new vault, choose to open it in an additional window if you want both vaults visible at once. Obsidian runs any number of vaults side by side without conflict.

You should now have two separate vaults open (or openable), each independent. Nothing in your existing vault is touched by any of this.

### Path C: add it to the vault you already use

About 15 minutes. Ends with your own first tree living inside your existing notes. Nothing else in your vault changes until you choose to add tree frontmatter (section 5) to a note.

**Part 1: install the plugin.**

1. Open **Settings** in Obsidian (the gear icon, bottom-left).
2. Go to **Community plugins**.
3. Click **Browse**.
4. Search for **Eve Apple Tree Thinking System**.
5. Click **Install**.
6. Click **Enable**.

You should now see a small sprout icon in Obsidian's left-hand ribbon.

*Not listed yet?* The plugin may not have cleared Obsidian's community review at the time you're reading this. Install it by hand instead:

1. Go to the [latest release](https://github.com/BrandtheBrand/eve-apple-tree/releases/latest).
2. Download `main.js`, `manifest.json`, and `styles.css`.
3. Create the folder `<your vault>/.obsidian/plugins/eve-apple-tree/` if it doesn't already exist.
4. Copy the three downloaded files into it.
5. In Obsidian, go to **Settings → Community plugins**.
6. Enable **Eve Apple Tree Thinking System**.

(Is running a community plugin safe? A community plugin runs local code on your computer, the same as installing any small app. Only install from Obsidian's own Community Plugins browser, or directly from this project's official GitHub releases page; never from an unfamiliar link.)

**Part 2: add the AI team.** Optional. Skip this part entirely if you want the tree only.

1. Go to the [latest release](https://github.com/BrandtheBrand/eve-apple-tree/releases/latest).
2. Download the `eve-tree-team` zip.
3. Unzip it.
4. Copy everything inside its `eve-tree-team/` folder, including the hidden `.claude/` folder, into your vault's root folder (the same folder your existing notes live in).

(Already have a `CLAUDE.md` in your vault root? Don't let it be overwritten: open both files and merge the new one in by hand.)

You should now have a `.claude/` folder, a `CLAUDE.md` file, and a `templates/` folder sitting alongside your existing notes.

**Part 3: grow your first tree.**

1. Create a new folder, named after one topic you actually think about.
2. Copy `templates/root.md` into that folder.
3. Fill in its blanks: this is the seed question your tree grows from.
4. Copy `templates/leaf.md` into the same folder, two or three times, for a few real ideas.
5. Fill in `field`, `time`, and your idea in each one.
6. Link related notes to each other with `[[wikilinks]]`.
7. Open the command palette, type **tree**, and run **Open the tree of light**.
8. Click **Rebuild from vault** in the panel.

You should now see your new folder standing as its own tree, root and leaves in place.

9. Optional: open your vault's root folder in Claude Code and say *"Gardener, let's think"* to have the AI team draft the rest with you from here on.

---

## 4. Reading your tree

Every note that appears on the tree is called a **dot**: one glowing point of light. There are five kinds.

- 🌱 **Root**: the seed question the whole tree grows from. One per tree, usually about how and why you think about this topic at all.
- 🪵 **Trunk**: a pivotal idea the topic turns on. A few of these, never many.
- 🍃 **Leaf**: one ordinary idea. Most of your dots will be leaves.
- 🌸 **Flower**: a breakthrough, an "oh, now I get it" moment. You mark these yourself; neither the plugin nor the AI team ever marks one for you.
- 🍎 **Apple**: something you finished and could show someone: a decision, a draft, a post, a shipped thing.

Two facts explain almost everything else about how a tree is arranged.

**One folder = one tree.** Every top-level folder in your vault (a folder that isn't nested inside another folder) becomes its own tree. Folders nested inside a top-level folder don't get a tree of their own; their notes stay part of the parent folder's tree. More than one top-level folder with tagged notes in it gives you a **forest**: several independent trees standing side by side.

**Links are the rhizome.** A rhizome, in a real plant, is the underground stem that connects things that look separate above ground. Here it means the ordinary `[[wikilinks]]` you already write in Obsidian: link two notes and a thread appears between their dots. A link between two notes in the same field draws as a normal structural line. A link between notes in two different fields draws fainter, and is usually the more interesting one: it's a connection your own mind made that a folder structure would have hidden.

Each dot also sits somewhere in space, and the position carries meaning:

- **Field** is the lens you were thinking through when you wrote the note (Researcher, Maker, Critic, Storyteller, or any name you invent). Every field gets its own angular slice of ground around the tree, called a **sector**. By default a sector is drawn flat, like a pie slice (a **wedge**); switch the panel to Column mode and it draws as a translucent vertical tube instead, same information in a different shape.
- **Time** sets how far up the tree a dot sits. Older notes sit low, newer ones sit high, so the tree visibly grows taller the longer you keep thinking about a topic.

You don't have to read a tree in isolation. Click any dot to open a card with its title, its description, and every note it links to and from; section 6 covers the card and the rest of the panel in full.

---

## 5. Writing notes the tree can see

Nothing appears on the tree by magic. A note shows up only if it carries **tree frontmatter**: a few lines of plain text at the very top of the note, fenced by two `---` lines. Copy this into any note and adjust it:

```yaml
---
tree_type: leaf
field: Researcher
time: 2026-07-05
title: What counts as evidence
---
```

- `tree_type`: one of `root`, `trunk`, `leaf`, `flower`, `apple`.
- `field`: the lens name. Skip this for `root` and `trunk` notes; they sit on the central axis, not inside any one field.
- `time`: an ISO date (`2026-07-05`) or a plain number. Pick one style and use it consistently within a single tree; mixing dates and numbers in the same tree throws off the height, since a number reads as a day count.
- `title`: optional. Leave it out and the note's file name is used instead.

Mark a breakthrough either way: set `tree_type: flower`, or add a `flower: true` line to a note and the plugin treats it as a flower even without a `tree_type`.

You don't need to write this from scratch each time. A `templates/` folder (bundled with the starter vault, and with the standalone AI-team download from Path C) has one ready-made file for every note type: `root.md`, `trunk.md`, `leaf.md`, `flower.md`, `apple.md`, plus two extras: `field.md`, to define a brand-new lens with its own home note, and `bridge.md`, described below. Copy the one you need, fill in the blanks, and save it inside the folder that is, or will become, your tree.

A note doesn't have to be all-or-nothing. Frontmatter with some tree keys but not others still renders, with reasonable defaults: an untyped note becomes a leaf, an unfielded one lands in "Unfiled," an untimed one uses its creation date. A note with none of the tree keys at all stays off the tree, invisible, until you tag it, or until you turn off "Only show notes with tree frontmatter" in Obsidian's Settings (section 6), which makes the plugin render every note in the vault, tagged or not.

Two more things a note can optionally carry:

**Stakeholder views.** Add a `## Stakeholder views` heading to a note's body, with lines like `- **Investor:** thinks this is undervalued`, one per perspective. Once any note in a tree has these, a **Stakeholder lens** control appears in the panel (section 6) that lets you dim the tree down to one perspective at a time.

**Bridges.** Two trees never connect automatically, on purpose: if you can't explain why two topics relate in one honest sentence, they stay separate. To connect them anyway, write a note from `templates/bridge.md`: set `bridge_from` and `bridge_to` to the two folder names, and write a one-sentence `explain`. Clicking the bridge line on the tree opens that note.

After adding or editing notes, the tree does not update on its own. Open it and click **Rebuild from vault** in the panel to re-scan your vault and redraw.

---

## 6. The panel, control by control

Two separate sets of controls change how the tree looks, and they live in two different places: Obsidian's own Settings screen, and a floating panel inside the 3D view itself.

### Flying through it (mouse and trackpad)

Before the panel: these are the physical moves for exploring the tree.

- **Drag** to orbit around it.
- **Scroll** to zoom in and out, toward wherever your cursor is pointing.
- **Two-finger-click (right mouse button) and drag** to pan sideways.
- **Click a dot** to open its card (see below).
- **Drag a leaf, flower, or apple dot** to place it by hand inside its own field's sector; the new position saves automatically and survives a rebuild or an app restart. Root and trunk dots are fixed anchors and can't be dragged this way.
- **Drag a whole tree** by its trunk, root, or far-zoom silhouette to rearrange your forest.

### Plugin settings (Obsidian's Settings tab)

Go to **Settings → Eve Apple Tree Thinking System**. Three toggles live here; change them rarely, and click **Rebuild from vault** afterward to see the effect.

| Setting | What it does | Default |
|---|---|---|
| Only show notes with tree frontmatter | Renders only notes carrying `tree_type` / `field` / `time` / `flower` keys. Turn off to render every note in the vault, tagged or not. | On |
| Forest mode: one folder = one tree | Each top-level folder becomes its own independent tree. Turn off to treat the whole vault as a single tree. | On |
| Cluster linked dots | Pulls dots in the same field that link to each other closer together, instead of spreading everything evenly. Skipped automatically on any single tree over 500 notes, to keep Obsidian responsive. | On |

### The in-view panel

Open the tree and a floating panel appears on the left. Every control in it, in the order it appears:

| Control | What it does | When you'd use it |
|---|---|---|
| **–** (top right of the panel header) | Minimizes the panel to a small 🍎 pill so the tree fills the view. Click the pill to bring the panel back. | An unobstructed look at the tree, or a screenshot. |
| Show / hide: **Field sectors** | Toggles the ground wedges or columns on or off. | A cleaner, dot-only view. |
| Show / hide: **Trunk & branch links** | Toggles the structural lines (root to trunk to leaf) on or off. | Comparing structure against rhizome separately. |
| Show / hide: **Cross-field links** | Toggles the rhizome (cross-field) lines on or off. | Isolating the lateral connections from the structural ones. |
| Show / hide: **Field names** | Toggles the field name labels floating over each sector. | A less busy view when zoomed out. |
| Show / hide: **Ah-ha 🌸 / Output 🍎** | Toggles the flower and apple markers. | Scanning the tree for breakthroughs and finished outputs only. |
| Show / hide: **Cross-tree bridges** *(shown only if the vault has a bridge note)* | Toggles the lines connecting separate trees. | Focusing on one tree's own structure, ignoring its bridges. |
| Show / hide: **Auto-spin (rotate)** | Slowly rotates the whole scene. Off by default; because turning it on is your explicit choice, it keeps spinning even if your system is set to reduce motion. | Leaving the tree running as an ambient view. |
| Field render mode: **Flat wedge / Column** | Switches each field's sector between a flat pie-slice on the ground and a translucent vertical column. | Column mode reads better with many overlapping fields; flat wedge stays calmer for a small tree. |
| Appearance: **Text size** (slider, 0.6x to 2x) | Scales every label live. | Presenting on a projector, or when text feels crowded. |
| Appearance: **Light shine** (slider, 0x to 2x) | Sweeps every dot's glow from subtle to strong. Shows best in dark mode. | Tuning the look to taste, especially before a screenshot. |
| Appearance: **Zoom-out icon** (dropdown: Round, Conifer, Apple) | Sets the shape each tree collapses into at far zoom. Apple bakes the fruit into the crown. | Personal taste, or matching a screenshot style. |
| View: **↺ Reset** | Returns the camera to the opening view. | You've orbited somewhere disorienting. |
| View: **⊹ Fit** | Re-frames the camera to the whole tree or forest. | After zooming in tight, to see everything again. |
| View: **🌙 Dark / ☀️ Light** | Manually overrides light or dark mode. Otherwise the tree follows Obsidian's own theme automatically. | Keeping the tree's theme independent of your note-editing theme. |
| **⟳ Rebuild from vault** | Re-scans your notes and redraws the tree. | Any time after adding, editing, or moving a note. |
| **⌾ Reset dot layout** | Clears every dot you've dragged by hand and reruns the automatic layout. Click once to arm it, click again within 3 seconds to confirm. | Your hand-placed dots have gotten messy and you want to start clean. |
| **⌾ Reset tree layout** | The same, for whole trees you've dragged around in a forest. Same two-click confirmation. | Your forest layout has gotten tangled. |
| **Focus tree** (dropdown, *forest mode only*) | Flies the camera to one named tree, or back to "Whole forest." | Jumping straight to one topic inside a large forest. |
| **Stakeholder lens** (dropdown, *shown only if a note declares stakeholder views*) | Dims every dot that has no recorded view from the chosen chair, so you can sweep the tree through one perspective at a time. A bar beneath shows what share of dots carry a view from each chair. | Checking whether you've actually thought from more than one seat at the table. |
| **📖 Manual & help** | Opens this manual. | Any time you forget what a control does. |

![The panel showing the Stakeholder lens control, with its off-state dropdown, below the View buttons](img/hero-dark.png)

*A lower part of the same panel, in dark mode: the Stakeholder lens group, which appears only once a tree has notes carrying stakeholder views.*

Clicking any dot, or a bridge line, opens a card on top of the tree: its field and type, title, description, any stakeholder views, and a chip for every note it links to and from, each clickable to jump straight to that dot. An **Open note ↗** button opens the real file in a new Obsidian tab. Close the card with **✕**, `Esc`, or a click on the empty background.

---

## 7. Working with the AI team

The plugin draws the tree. It never adds anything to it by itself. If you want a thinking partner that helps fill the tree, that's the second, optional half of the system: **Eve's tree team**, three AI roles that run inside your own AI assistant (Claude Code, or any other capable AI you hand a system prompt to). None of it is a hosted service; it runs on your own machine, under your own account.

- 🌱 **The gardener** is the one voice you actually talk to. You think out loud; it turns what you say into a clean dot (title, field, time), and after most dots it proposes one or two links, especially the cross-field kind. It offers one prompt back to you, then gets out of the way rather than interrogating you.
- 🔥 **The challenger** is a separate mind the gardener calls in on request. It's told nothing about your past decisions or your writing voice, on purpose, so it can push back on a case from a stakeholder's chair you hadn't sat in.
- 👁 **The observer** works at the end of a session, in the background. It studies how you decided things, never what you decided, and proposes small updates to its model of how you think, which you approve with one line.

**What the team never does.** It never writes anything to your vault without your say-so: whatever it proposes lands first as a plain, reviewable table, and only your approval turns that into real files. It never creates your flowers 🌸 or your apples 🍎 either. Breakthroughs and finished outputs are always yours to mark; the gardener can only ever propose leaves and trunks.

**How to start.** Open your vault's root folder with Claude Code and type: *"Gardener, let's think."* Early on, it will offer a short calibration exercise: you hand-write a few dots in your own words, and it learns your voice from those instead of writing in a generic AI tone. Using a different AI? Paste the vault's `CLAUDE.md` (or `.claude/skills/gardener/SKILL.md`) in as its system prompt and work the same way.

**Working without it.** Nothing about the team is required. Copy a template from `templates/`, write your idea in your own words, set its `field` and `time`, add a `[[link]]` or two, and click **Rebuild from vault**. The tree renders straight from plain text either way. The AI team proposes; it is never a gatekeeper.

---

## 8. FAQ

#### Is it free?
Yes. The plugin is MIT-licensed: free to use, modify, and redistribute.

#### Does it work on my phone or tablet?
No. The plugin is marked desktop-only in its manifest, because the 3D view needs rendering power the mobile and tablet apps don't expose. Use a Windows, Mac, or Linux computer.

#### Does the AI read my notes, or send them anywhere?
The plugin itself makes no network requests: it runs fully offline, and the 3D library it depends on (three.js) ships bundled inside it. The optional AI team isn't a hosted service either; it runs inside your own Claude Code (or whichever AI you hand its prompt to), using your own account. Nothing in this system sends your notes anywhere.

#### Will it change my existing vault?
No, not until you personally add tree frontmatter to a note. An untagged vault renders as an empty tree view; nothing is reorganized, moved, or rewritten on your behalf.

#### Can I use it with zero AI?
Yes, entirely. Copy a template, write your idea, set its field and time, link it to something else, and click Rebuild from vault. The tree only ever reads plain-text frontmatter; the AI team is an addition, not a requirement.

#### How many notes can it handle?
There's no hard limit, but "Cluster linked dots" (the setting that pulls related dots together) turns itself off automatically on any single tree with more than 500 notes, to keep Obsidian responsive. Splitting a very large topic across a few top-level folders keeps each resulting tree smaller and faster.

#### How do I uninstall it?
Go to **Settings → Community plugins**, disable **Eve Apple Tree Thinking System**, then remove it from the list (or delete the `.obsidian/plugins/eve-apple-tree/` folder from your vault directly). Your notes and their frontmatter are plain text; removing the plugin only removes the renderer, not anything you wrote.

#### What's the minimum Obsidian version?
1.7.2, per the plugin's manifest.

---

## 9. When something looks wrong

| What you see | Why | Fix |
|---|---|---|
| A note is not on the tree | No tree frontmatter, or the "Only show notes with tree frontmatter" setting is filtering it out | Add the three frontmatter lines, or turn that setting off |
| A whole folder shows no tree | None of its notes carry frontmatter | Give at least one note `tree_type` frontmatter |
| Everything is in ONE tree | The notes sit at the vault root, or all inside one folder | Give each topic its own top-level folder |
| Two trees will not connect | By design, there are no automatic cross-tree links | Write a bridge note from `templates/bridge.md` explaining the connection |
| Tree looks stale after edits | The tree renders on demand, not live | Click **Rebuild from vault** in the panel |
| Plugin isn't in the Community Plugins list yet | It may not have cleared Obsidian's community review yet | Use the manual-install path in Path C: download `main.js`, `manifest.json`, `styles.css` from the latest release into `.obsidian/plugins/eve-apple-tree/` |
| The panel is missing a control described in this manual | You're running an older version of the plugin | Update to the latest release from the GitHub releases page |
| The tree feels slow on a large vault | A big tree is doing a lot of rendering work | Turn off "Cluster linked dots" for very large trees, lower the Light shine slider, or split a huge topic across more top-level folders so each tree stays smaller |
| Tree looks different after you dragged something | Dots or whole trees keep any position you drag them to | Click **⌾ Reset dot layout** (for dots) or **⌾ Reset tree layout** (for whole trees) in the panel; each needs a second click within 3 seconds to confirm |

---

*The team proposes, you decide. Your thinking stays yours.*

Questions, bugs, or ideas: [github.com/BrandtheBrand/eve-apple-tree/issues](https://github.com/BrandtheBrand/eve-apple-tree/issues)
