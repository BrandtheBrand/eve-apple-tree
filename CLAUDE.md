# CLAUDE.md — Eve Apple Tree plugin (development)

Rules for WORKING ON this plugin. Not to be confused with `eve-thinking-system/CLAUDE.md`, which is the
gardener contract shipped to users. Global rules live in `~/.claude/CLAUDE.md` and are not repeated here.

**This is a published product.** It is on GitHub as `BrandtheBrand/eve-apple-tree` and listed in Obsidian's
community plugin registry. Every push is public. Every tag matching `N.N.N` triggers a workflow that builds
and publishes a public Release — so tagging is publishing, and needs Nike's word.

## Where every copy lives (there is never only one)

Three audits in a row, the miss was editing one copy and calling it done. Before any change is finished,
walk this table:

| Thing | Copies |
|---|---|
| Gardener skill | `../../.claude/skills/gardener/SKILL.md` (live) · `eve-thinking-system/agents/gardener/SKILL.md` (kit) · `eve-thinking-system/starter-vault/.claude/skills/gardener/SKILL.md` |
| challenger / observer | same three locations |
| Contract | `eve-thinking-system/CLAUDE.md` · `starter-vault/CLAUDE.md` |
| Templates | `eve-thinking-system/templates/` · `starter-vault/templates/` |
| Prompts | `eve-thinking-system/prompts/` · `starter-vault/prompts/` |
| Built plugin | repo root · `starter-vault/.obsidian/plugins/` (refreshed by the production build) · Nike's vault |
| Dot-type table (`ROLE`) | `src/layout.ts` · `viz/tree-of-light.template.html` · `viz/renaissance-demo.html` |
| Version | `manifest.json` · `package.json` · `versions.json` · starter bundle · GitHub release · Obsidian registry |

`npm test` asserts most of this parity. Add an assertion whenever a new copy appears.

## Hard rules

- **Verify, then install.** Run `npm test && npm run lint && npx tsc -noEmit` BEFORE copying a build into
  any vault. A build with a lint error was once installed because the order was reversed.
- **Never `gh`** — the authed account is `ling9670`; the repo is `BrandtheBrand` (added as collaborator).
  Plain git only.
- **Tag = publish.** Never tag without Nike saying so, and never tag work she has not seen running.
- **Nothing that runs per frame may throw.** An exception inside `requestAnimationFrame` freezes the view
  permanently, with no error surfaced.
- **`Number.isFinite`, never `typeof x === "number"`** for anything that becomes a position or an opacity.
  `NaN` and `Infinity` are both "number", and three.js renders `NaN` as nothing at all, silently.
- **A setting's extreme value must not break what it tunes.** Every slider needs a floor that keeps its
  subject legible (`textSize` at 0.6× once produced 6px labels; `glowScale` at 0 switched seeds dark).
- **New visual work needs a computable guard**, not an eyeball: contrast ratios, overlap distances,
  boundary invariants — asserted in `test/`, run before rendering.
- **Mutation-check every new test.** Break the line it protects and confirm it fails. A test that passes
  for the wrong reason is worse than no test; one here did.

## Verifying a change

1. `npm test` (74+) · `npm run lint` (0 errors) · `npx tsc -noEmit -skipLibCheck`
2. Copy `main.js manifest.json styles.css versions.json` into `../../.obsidian/plugins/eve-apple-tree/`
3. Hash them against the source copies
4. **Nike reloads Obsidian and confirms** — 3D rendering cannot be verified from a terminal, and must never
   be reported as verified

Full audit procedure: `../AUDIT-PROTOCOL.md`. Feedback register: `../FEEDBACK.md`.

## Testing

`node:test` with type stripping, no new dependency: `npm test`. Tests cover the pure maths in `layout.ts`
(pools, grid, zoom, LOD, cast, ignore-list, legibility) plus package parity. `src/tree-view.ts` needs a
running Obsidian and is covered by Nike's visual QA, not by tests — so keep logic in `layout.ts` where it
can be tested, and keep `tree-view.ts` to wiring.
