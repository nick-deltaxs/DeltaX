# Run 2 — Build Guide

## Before You Start (EVERYONE)

### 0. Requirements
- **Node.js 18+** (check: `node -v`)
- **Git** installed
- **Windsurf IDE** installed + logged into Teams account

### 1. Clone or pull the repo
```bash
# First time:
git clone https://github.com/Arvin-DeltaX/DeltaX-Landing.git
cd DeltaX-Landing

# If you already have it from Run 1:
cd DeltaX-Landing
git stash              # save any old local changes
git checkout main      # switch to main branch
git pull origin main   # get Run 2 code
```

### 2. Install dependencies
```bash
npm run setup
# this runs: cd Codebase && npm install
```

### 3. Open Windsurf
**Open the `Codebase/` folder in Windsurf** — NOT the root folder.
```
Windsurf → File → Open Folder → DeltaX-Landing/Codebase/
```
This is where `.windsurfrules` lives. This is where `src/` lives. This is where you work.

Your prompt files are at `DeltaX-Landing/Docs/Prompts/Run-2/` — open them in a text editor, Finder, or GitHub web. They're outside the Windsurf project on purpose (you read them, not the AI).

### 3b. Windsurf shortcuts
| Action | Mac | Windows |
|---|---|---|
| Open Cascade | Cmd+L | Ctrl+L |
| Toggle Plan mode | Cmd+. | Ctrl+. |

### 4. Git commands run from WEBSITE ROOT
```bash
# All git commands from the repo root (Website/):
cd ..           # go back to Website/ if you're in Codebase/
# BEFORE each wave (switch to main, get latest):
git checkout main
git pull origin main

# Create your branch (name is in your prompt):
git checkout -b wave1/your-name-component

# AFTER building (commit and push your branch):
git add -A
git commit -m "Wave 1: your component"
git push origin wave1/your-name-component

# Then create a Pull Request on GitHub.
# DO NOT merge. Arvin merges all PRs.
```

### 5. NPM commands run from EITHER level
```bash
# From Website/ root (uses wrapper):
npm run dev

# From Codebase/ (directly):
cd Codebase
npm run dev
```
Both work. The root package.json wraps with `cd Codebase &&`.

---

## IMPORTANT: First Time Setup

After cloning/pulling for the first time, you MUST install dependencies:
```bash
cd Codebase
npm install
```
If you get a Node.js version error, you need Node 18 or higher.

---

## The 5-Step Loop (every prompt)

1. **PULL:** `git pull origin main` (from Website/ root)
2. **OPEN:** your prompt from `Docs/Prompts/Run-2/[wave]/`
3. **PASTE:** Find the line `═══ PASTE INTO CASCADE FROM HERE ═══` — copy everything BELOW that line into Windsurf Cascade. The branded header above it (logo, serial, metadata) is for tracking only — don't paste it.
4. **CHECK:** `npm run dev` → open browser → verify
5. **PUSH:** create branch, commit, push, create PR

---

## Wave Order

| Wave | Who | Prompts |
|------|-----|---------|
| Wave 0 | Arvin (alone) | F0 → F1 → F2 → F3 → F4 |
| Wave 1 | All 8 parallel | W1-* (one per person) |
| Wave 2 | All 8 parallel | W2-* (one per person) |
| Wave 3 | 6 people | W3-* |
| Integration | Arvin | I1, I2 |
| QA | Nick | Q1, Q2, Q3 |

**Between every wave:** Arvin merges all PRs → runs build → checks browser → Nick spot-checks → "Pull and start next wave"

---

## Models to Use

| In prompt it says | Select in Windsurf |
|---|---|
| Kimi K2.5 | Kimi K2.5 (free) |
| GPT-5.3-Codex High | GPT-5.3-Codex → Reasoning: High |
| Claude Sonnet 4.6 Thinking | Claude Sonnet 4.6 Thinking |
| Sonnet 4.6 | Claude Sonnet 4.6 |

Always use **Plan mode** (Cmd+. to toggle).

---

## If Something Goes Wrong

- **Build fails:** tell Arvin. Don't try to fix other people's files.
- **Component looks wrong:** paste the prompt again (Kimi is free, unlimited retries).
- **Import not found:** tell Arvin — a dependency wasn't built yet.
- **Stuck 30+ minutes:** escalate to Arvin or switch model (try GPT-5.3-Codex).
