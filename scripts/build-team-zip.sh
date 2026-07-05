#!/usr/bin/env bash
# Assemble eve-tree-team-<version>.zip (the AI companion kit release asset)
# from its single-source files in eve-thinking-system/. Run from the repo root:
#   bash scripts/build-team-zip.sh
# Writes eve-tree-team-<version>.zip to the repo root; <version> comes from manifest.json.
set -euo pipefail

VERSION=$(node -p "JSON.parse(require('fs').readFileSync('manifest.json','utf8')).version")
KIT="eve-thinking-system"
STAGE=$(mktemp -d)
OUT="eve-tree-team-${VERSION}.zip"

mkdir -p "$STAGE/eve-tree-team/.claude/agents" "$STAGE/eve-tree-team/.claude/skills/gardener"

cp "$KIT/starter-vault/CLAUDE.md"        "$STAGE/eve-tree-team/CLAUDE.md"
cp "$KIT/starter-vault/DOT-VOICE.md"     "$STAGE/eve-tree-team/DOT-VOICE.md"
cp "$KIT/starter-vault/SELECTION-DNA.md" "$STAGE/eve-tree-team/SELECTION-DNA.md"
cp "$KIT/INSTALL-TEAM.txt"               "$STAGE/eve-tree-team/INSTALL-TEAM.txt"
cp "$KIT/agents/challenger.md"           "$STAGE/eve-tree-team/.claude/agents/challenger.md"
cp "$KIT/agents/observer.md"             "$STAGE/eve-tree-team/.claude/agents/observer.md"
cp "$KIT/agents/gardener/SKILL.md"       "$STAGE/eve-tree-team/.claude/skills/gardener/SKILL.md"
cp -R "$KIT/starter-vault/templates"     "$STAGE/eve-tree-team/templates"

rm -f "$OUT"
(cd "$STAGE" && zip -rq - eve-tree-team) > "$OUT"
rm -rf "$STAGE"

unzip -l "$OUT"
echo "built $OUT"
