# agents/ — the AI thinking companion (1 skill + 2 subagents)

The AI half of the Eve Apple Tree Thinking System. The plugin/renderer lets you SEE your tree; this kit gives you the **Gardener** that grows it with you.

> **New here? Skip the manual install.** The [`starter-vault/`](../starter-vault/) already has the Gardener skill, both subagents, and the user-model files placed correctly — just open that folder with Claude Code and say "gardener, let's think." The steps below are for adding the Gardener to a vault of your own.

**Design rule: minimum system.** One skill (the Gardener — the only voice you talk to) + two subagents that each must be a separate mind for a structural reason: the **challenger** (its value is blindness to your taste) and the **observer** (studies HOW you think from your feedback, after the session — meta-level attention that can't share the in-flow context). Nothing else.

## What's here
| File | What |
|---|---|
| `gardener/SKILL.md` | The Gardener operating contract: six-move loop, dot standard, G-rules, calibration, hard rules |
| `challenger.md` | Blind stakeholder-chair walk subagent (invoked by the Gardener, on demand) |
| `observer.md` | Background thinker-model builder: distills your corrections/decisions into standing rules + DOT-VOICE/SELECTION-DNA/root updates (proposals; your ok applies) |
| `user-model/DOT-VOICE.template.md` | Per-thinker voice calibration (your golden samples) |
| `user-model/SELECTION-DNA.template.md` | Per-thinker taste model (derived from your real decisions) |

## Install (Claude Code)

All paths below are **relative to your vault's root folder** — the same folder you open Claude Code in. If a `.claude/` folder isn't there yet, create it; its `skills/` and `agents/` subfolders are where Claude Code looks.

1. Copy this `gardener/` folder (the one holding `SKILL.md`) to `<vault>/.claude/skills/gardener/`.
2. Copy `challenger.md` and `observer.md` to `<vault>/.claude/agents/`.
3. Copy the two `user-model/*.template.md` files to your **vault root** and drop `.template` from each name (so you get `DOT-VOICE.md` and `SELECTION-DNA.md`).
4. Open Claude Code in the vault folder and say "gardener, let's think" — the first session runs the DOT-VOICE calibration exercise.

## Any other AI (manual path)

Paste the body of `gardener/SKILL.md` as the system prompt. Run the **challenger** as a separate, fresh conversation given only the topic + case text (never your user-model files). Run the **observer** as another separate conversation given the session transcript.

**What you give up without Claude Code, and how to keep it honest.** You manage the files yourself — creating dot notes, writing frontmatter, and adding `[[links]]` by hand; there's no skill to do it for you. The challenger only works if its conversation is *genuinely* fresh: any assistant memory, saved custom instructions, or "reference past chats" feature defeats its blindness to your taste, so turn those off (or use a clean profile) before you run it. And the observer can't watch your session — you have to paste the full transcript into its conversation for it to study how you decided.

## How the pieces fit
```
you ⇄ 🌱 gardener (skill, every exchange)
          │ reads/writes: your vault dots + DOT-VOICE + SELECTION-DNA
          ├ invokes on demand: 🔥 challenger (subagent, taste-BLIND — the outside mind)
          └ invokes at session end: 👁 observer (subagent — studies your feedback,
             proposes model-of-you updates; your one-line ok applies them)
you view: Obsidian plugin / tree-of-light HTML (the mirror)
```
The thinker leads. You bloom the flowers 🌸 and apples 🍎 yourself; the Gardener proposes only leaves and trunks; nothing analysed is written to the tree before you approve the dot table.
