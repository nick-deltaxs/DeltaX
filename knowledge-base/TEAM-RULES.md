# DeltaX — Team Integration & Prompt Generation Rules

> **Audience:** The team lead / prompt engineer who will break the spec into prompts.
> **Purpose:** Rules for generating prompts, assigning work, setting up AI workflow protocols, and keeping 6-7 parallel devs from breaking each other's code.
> **Companion file:** `knowledge-base/DELTAX-SPEC.md` — the full product & design spec.

---

## 0. YOUR FIRST JOB — CREATE THE PROJECT STRUCTURE

Before generating any prompts, you must create the following folder structure. **Nothing exists yet except `knowledge-base/`.** You build everything.

### Root Structure (you create this)

```
DeltaX-Landing/
│
├── knowledge-base/                    → Already exists (DO NOT MODIFY)
│   ├── DELTAX-SPEC.md                 → Full product & design spec
│   └── TEAM-RULES.md                  → This file
│
├── codebase/                          → YOU CREATE: The Next.js project lives here
│   ├── CLAUDE.md                      → YOU CREATE: Claude Code workflow protocol
│   ├── AGENTS.md                      → YOU CREATE: OpenAI Codex workflow protocol
│   ├── .cursorrules                   → YOU CREATE: Cursor AI workflow protocol
│   ├── .windsurfrules                 → YOU CREATE: Windsurf AI workflow protocol
│   ├── .github/
│   │   └── copilot-instructions.md    → YOU CREATE: GitHub Copilot workflow protocol
│   └── ... (Next.js project files)
│
├── prompts/                           → YOU CREATE: AI-ready prompt files
│   ├── phase-0-setup/
│   │   └── 01-project-init.md
│   ├── phase-1-ui/
│   │   ├── 01-button.md
│   │   ├── 02-input.md
│   │   ├── 03-card.md
│   │   ├── 04-gradient-text.md
│   │   ├── 05-section-wrapper.md
│   │   └── 06-waitlist-form.md
│   ├── phase-2-sections/
│   │   ├── 01-navbar.md
│   │   ├── 02-hero.md
│   │   ├── 03-problem.md
│   │   ├── 04-solution.md
│   │   ├── 05-pillars.md
│   │   ├── 06-promise.md
│   │   ├── 07-results.md
│   │   ├── 08-team.md
│   │   ├── 09-how-it-works.md
│   │   ├── 10-final-cta.md
│   │   └── 11-footer.md
│   ├── phase-3-backend/
│   │   └── 01-backend-full.md
│   ├── phase-4-integration/
│   │   ├── 01-assemble-page.md
│   │   ├── 02-connect-form-scroll.md
│   │   └── 03-qa-polish.md
│   └── phase-5-production/
│       ├── 01-seo.md
│       ├── 02-analytics.md
│       └── 03-deploy.md
│
├── roadmap/                           → YOU CREATE: Progress tracking
│   ├── ROADMAP.md                     → Full build roadmap with phases
│   └── PROGRESS.md                    → Live checkbox tracker
│
└── README.md                          → YOU CREATE: Explains the whole project
```

### Rules for This Structure

1. **All code goes inside `codebase/`.** The Next.js project is initialized there. Devs never touch files outside `codebase/`.
2. **Knowledge base is read-only during build.** Nobody modifies `DELTAX-SPEC.md` or `TEAM-RULES.md` once development starts. If something needs to change, the lead creates an amendment note in `roadmap/`.
3. **Prompts are write-once.** Once a prompt is generated and assigned, it does not change. If a correction is needed, add a separate file (e.g., `02-hero-amendment.md`).
4. **`PROGRESS.md` is the only live file.** Updated by the lead as tasks complete.
5. **Prompt file names match the roadmap exactly** — `phase-X-category/NN-name.md`.
6. **AI workflow protocol files live inside `codebase/`** — so every AI tool picks them up automatically when a dev opens the project.

---

## 1. YOUR ROLE

You are the **prompt engineer / coordinator**. Your job:

1. Read `knowledge-base/DELTAX-SPEC.md` completely
2. Create the folder structure above
3. Set up **all AI workflow protocol files** inside `codebase/` (see Section 3)
4. Generate **one prompt per component/task** inside `prompts/`
5. Create `roadmap/ROADMAP.md` and `roadmap/PROGRESS.md`
6. Create `README.md` at the root explaining the project
7. Assign prompts to devs (6-7 working in parallel)
8. Manage the build order and dependencies
9. Review PRs for spec compliance
10. Handle integration when components merge
11. Update `roadmap/PROGRESS.md` as tasks complete

You decide how to split additional tasks beyond what's outlined here. Use your judgment.

---

## 2. THE ZERO-QUESTION RULE

**This is the most important rule in this document.**

Every prompt you generate must be so complete that the AI tool (Cursor, Claude Code, Windsurf, Copilot, Codex) can execute it **from start to finish without asking a single question**. Zero clarifications. Zero "should I...?" Zero ambiguity.

If an AI tool reads your prompt and asks a question, **the prompt has failed.**

### How to Achieve Zero Questions

1. **Never say "see spec" or "refer to..."** — paste the actual content directly into the prompt
2. **Never say "similar to X" or "like the other component"** — describe it fully, every time
3. **Never leave a choice** — don't say "pick a font" or "choose an easing" — state the exact value
4. **Never use vague words** — not "subtle animation" but "opacity 0 to 1, 600ms, ease [0.16, 1, 0.3, 1]"
5. **Include every hex value, every Tailwind class, every pixel size** — even if it feels redundant
6. **Include the full copy text** — every headline, every body paragraph, every button label, every error message
7. **Include exact file paths** — not "create a component" but "create file: `codebase/components/Hero.tsx`"
8. **Include exact import statements** — write them out: `import { Button } from "@/components/ui/Button"`
9. **Include the exact export format** — `export function Hero() {}`
10. **Specify what happens on every state** — default, hover, focus, active, loading, success, error, disabled, mobile, tablet, desktop
11. **Specify what NOT to build** — explicitly list things the AI should skip
12. **End with the exact output expectation** — "This prompt produces exactly 1 file: `codebase/components/Hero.tsx`"

### Prompt Self-Test

Before assigning any prompt, ask yourself:

> "If I gave this prompt to an AI with zero knowledge of this project, would it produce the exact file I need without asking me anything?"

If the answer is no, the prompt is not ready.

---

## 3. AI WORKFLOW PROTOCOL FILES

**This is your most critical setup task.** Before any dev writes a line of code, every AI tool must be configured with project context.

Each dev may use a different AI tool. You must create a protocol file for **every major AI coding tool** inside `codebase/` so that whichever tool a dev opens, it automatically picks up the project rules.

### The 5 Protocol Files You Must Create

| File | Location Inside `codebase/` | AI Tool |
|------|-----------------------------|---------|
| `CLAUDE.md` | `codebase/CLAUDE.md` | Claude Code |
| `AGENTS.md` | `codebase/AGENTS.md` | OpenAI Codex |
| `.cursorrules` | `codebase/.cursorrules` | Cursor AI |
| `.windsurfrules` | `codebase/.windsurfrules` | Windsurf (Codeium) |
| `copilot-instructions.md` | `codebase/.github/copilot-instructions.md` | GitHub Copilot |

### What Goes in Each File

All 5 files contain the **same core information**, adapted to each tool's format. The content must include:

#### A. Project Identity

```
Project: DeltaX Landing Page
Domain: thesx.co
Type: Single-page marketing landing page with waitlist signup
```

#### B. Tech Stack

```
- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS (custom color tokens configured in tailwind.config.ts)
- Framer Motion (all animations)
- Supabase (Postgres database for waitlist)
- Resend (transactional email)
```

#### C. Architecture Rules

```
- Single page app: all sections are separate components imported into app/page.tsx
- No section component may import another section component
- Only shared UI components from components/ui/ can be imported by sections
- All data is hardcoded inside components (no external data files, no CMS)
- No global state management — each component is self-contained
- WaitlistForm is the only component that makes API calls
```

#### D. Code Conventions

```
- Named exports only (never default exports)
- "use client" directive required for components with hooks, state, or Framer Motion
- Path aliases: @/components/..., @/lib/...
- Component file structure: imports → types → constants → component
- PascalCase for component files, camelCase for utility files
```

#### E. Tailwind Rules

```
- Use custom color tokens defined in tailwind.config.ts
- Never use raw hex values in className
- Mobile-first: base styles = mobile, then sm:, md:, lg:, xl:
- No !important
- No inline styles except Framer Motion style prop
```

#### F. Color Tokens

```
bg-primary: #0A0A0A       bg-surface: #111111        bg-surface-hover: #1A1A1A
text-primary: #F5F5F5     text-secondary: #CCCCCC    text-muted: #888888
accent-cyan: #00E5FF      accent-cyan-hover: #00CCE5 accent-purple: #7B61FF
border-default: #1E1E1E   border-hover: #333333
success: #22C55E          error: #EF4444
```

#### G. Animation Rules

```
- Framer Motion for all animations
- Define variants as constants outside the component
- Scroll: whileInView with viewport={{ once: true, amount: 0.2 }}
- Stagger: 0.1s between children
- Durations in seconds (0.6 not 600)
- Default easing: [0.16, 1, 0.3, 1]
```

#### H. What NOT to Do (Critical)

```
- Do NOT create files outside the assigned task
- Do NOT add features not specified in the prompt
- Do NOT use default exports
- Do NOT use any type in TypeScript
- Do NOT add console.log or debug code
- Do NOT modify globals.css
- Do NOT create new shared/UI components (use existing ones)
- Do NOT add comments like "// TODO" or "// AI generated"
- Do NOT import section components into other section components
```

### Tool-Specific Notes

#### CLAUDE.md (Claude Code)
- Claude Code loads this file automatically at the start of every session
- Keep under 200 lines (Claude Code truncates beyond that)
- Use concise bullet points, not prose
- Reference: https://code.claude.com/docs/en/settings

#### AGENTS.md (OpenAI Codex)
- Codex reads AGENTS.md files before doing any work
- Standard Markdown format, any headings
- 32KB max by default
- Can include build/test commands Codex should run
- Reference: https://developers.openai.com/codex/guides/agents-md

#### .cursorrules (Cursor)
- Placed in project root, auto-loaded by Cursor
- Note: `.cursorrules` is legacy — Cursor is migrating to `.cursor/rules/` directory
- For maximum compatibility, create BOTH:
  - `codebase/.cursorrules` (legacy, still works)
  - `codebase/.cursor/rules/deltax.md` (new format)
- Telling AI what NOT to do is especially effective in Cursor
- Reference: https://docs.cursor.com/context/rules

#### .windsurfrules (Windsurf)
- Placed in project root, loaded by Cascade for every interaction
- Highest-impact single file for Windsurf output quality
- Include stack details, conventions, anti-patterns, architecture
- A stale rules file is worse than no rules file — keep it accurate
- Reference: https://docs.windsurf.com

#### .github/copilot-instructions.md (GitHub Copilot)
- Placed in `.github/` directory
- Loaded automatically for Copilot Chat, code review, and coding agent
- Standard Markdown format
- Can also create path-specific files in `.github/instructions/` for different file types
- Reference: https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot

### When to Create These Files

These files are created as part of **Phase 0 (Project Setup)**. The Phase 0 prompt must include explicit instructions to create all 5 protocol files with the exact content specified above.

After Phase 0, these files are **read-only** — devs never modify them. If a rule needs to change, the lead updates them through a dedicated PR.

---

## 4. PROMPT FORMAT

Every prompt file must follow this exact structure. No deviation.

```markdown
# [TASK NAME]

## Metadata
- **Phase:** [0/1/2/3/4/5]
- **Branch:** [git branch name]
- **Output File(s):** [exact file path(s) inside codebase/]
- **Depends On:** [list of tasks that must be merged first, or "None"]
- **Estimated Complexity:** [Low / Medium / High]

## System Instruction

[This block is pasted at the top of the AI session. It sets the role,
tech stack, and global rules. Every prompt uses the same system instruction.
See Section 5 for the exact block.]

## Context

[2-3 sentences explaining what this component is, where it appears
on the page, and how it connects to other components. Enough for the
AI to understand the big picture.]

## Requirements

[Exact, numbered list of everything the component must do.
Each requirement is one specific, verifiable thing.]

## Copy (Exact Text)

[Every single word that appears in this component.
Formatted exactly as it should appear on screen.
The AI copies this text verbatim — no rewriting.]

## Styles

[Every visual property:
- Colors (Tailwind token + hex fallback)
- Typography (size, weight, line-height, letter-spacing)
- Spacing (padding, margin, gap — Tailwind classes + px)
- Borders (width, color, radius)
- Backgrounds
- Shadows
- Hover states
- Focus states
- Active states
- Disabled states]

## Animations

[Every animation this component uses:
- Trigger (viewport entry, hover, click, load)
- Initial state (exact values)
- Animate-to state (exact values)
- Duration (seconds)
- Easing (exact array or named curve)
- Delay (if any)
- Repeat (once / infinite)
- Framer Motion variant code example]

## Responsive Behavior

[Exact behavior at each breakpoint:
- Base (mobile, <640px)
- sm (640px+)
- md (768px+)
- lg (1024px+)
- xl (1280px+)
Include layout changes, size changes, visibility changes.]

## Technical Constraints

### MUST
- [List of things the AI must do]

### MUST NOT
- [List of things the AI must not do]

## Imports

[Exact import statements to use:]
```tsx
import { ... } from "...";
```

## Expected Output

[Exact description of what the AI produces:]
- File: `codebase/components/Example.tsx`
- Single named export: `export function Example()`
- "use client" directive: yes/no
- Total lines: ~[estimate]
- No additional files created

## Visual Reference

[Describe what the finished component looks like.
Desktop view and mobile view. Be specific enough
that someone who can't see the screen could verify it.]
```

---

## 5. SYSTEM INSTRUCTION BLOCK

**Paste this exact block at the start of every prompt.** It never changes.

```
You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack:
- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS (with custom tokens defined in tailwind.config.ts)
- Framer Motion (for all animations)

Global rules:
- Use "use client" directive when the component uses hooks, state, or Framer Motion
- Export as named export: export function ComponentName()
- Use @/ path aliases for all imports (e.g., @/components/ui/Button)
- Use custom Tailwind color tokens (e.g., bg-primary, text-accent-cyan) — never raw hex values in className
- Mobile-first responsive design (base styles = mobile, then sm:, md:, lg:, xl:)
- All data is hardcoded inside the component (no external data files, no API calls unless specified)
- No console.log, no TODO comments, no placeholder comments
- No default exports
- No any types in TypeScript
- Write clean, production-ready code

Output exactly the file(s) specified. Nothing more, nothing less.
```

---

## 6. TAILWIND CONFIG REFERENCE

**Include this in Phase 0 prompt and reference it in all other prompts.**

```
Colors (use in className):
  bg-primary         → #0A0A0A     (page background)
  bg-surface         → #111111     (cards, sections)
  bg-surface-hover   → #1A1A1A     (hover states)
  text-primary       → #F5F5F5     (headings)
  text-secondary     → #CCCCCC     (body text)
  text-muted         → #888888     (labels, meta)
  accent-cyan        → #00E5FF     (primary accent)
  accent-cyan-hover  → #00CCE5     (button hover)
  accent-purple      → #7B61FF     (secondary accent)
  border-default     → #1E1E1E     (borders)
  border-hover       → #333333     (hover borders)
  success            → #22C55E     (success states)
  error              → #EF4444     (error states)

Usage examples:
  bg-primary         → className="bg-primary"
  text-accent-cyan   → className="text-accent-cyan"
  border-default     → className="border-border-default"
```

**In every Phase 1+ prompt, include this note:**
```
Tailwind custom tokens are pre-configured. Use them as className values.
For reference, here are the tokens and their hex values: [paste the list above]
Do not use raw hex values in Tailwind classes.
```

---

## 7. SHARED UI COMPONENT SIGNATURES

Once Phase 1 is complete, every Phase 2+ prompt must include the **exact signatures** of the shared components it needs to import. This way the AI knows exactly what props are available.

**Include only the signatures relevant to the specific prompt.** Don't paste all 6 if the component only uses 2.

```tsx
// Button
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "ghost";
  size?: "default" | "small";
  className?: string;
}
export function Button(props: ButtonProps): JSX.Element;

// Input
interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  className?: string;
  type?: string;
}
export function Input(props: InputProps): JSX.Element;

// Card
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  hoverBorderColor?: string;
}
export function Card(props: CardProps): JSX.Element;

// GradientText
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}
export function GradientText(props: GradientTextProps): JSX.Element;

// SectionWrapper
interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}
export function SectionWrapper(props: SectionWrapperProps): JSX.Element;

// WaitlistForm
// No props — fully self-contained. Handles its own state, validation, API call.
export function WaitlistForm(): JSX.Element;
```

**IMPORTANT:** These signatures are what you design. Phase 1 prompts must build components matching these exact interfaces. Phase 2 prompts must use these exact interfaces. This is the contract between phases.

If you decide to change a signature (e.g., add a prop), you must update ALL prompts that use that component.

---

## 8. BUILD ORDER & DEPENDENCIES

Components must be built in phases. Phases can run in parallel internally, but each phase must complete before the next starts.

### Phase 0: Project Setup (1 dev, must be first)

| Task | Branch | Prompt File |
|------|--------|-------------|
| Initialize full project + AI protocol files | `setup/init` | `phase-0-setup/01-project-init.md` |

This single prompt covers:
- Next.js 14 init inside `codebase/`
- Tailwind config with all custom tokens
- Folder structure (components/, components/ui/, lib/, public/)
- Install dependencies (framer-motion, @supabase/supabase-js, resend)
- Font setup (Inter)
- Root layout with metadata
- globals.css
- **All 5 AI workflow protocol files** (CLAUDE.md, AGENTS.md, .cursorrules, .windsurfrules, .github/copilot-instructions.md)
- tsconfig path aliases
- .gitignore
- .env.local template

One dev, one prompt. **Everyone else waits until Phase 0 is merged.**

### Phase 1: Shared UI Components (2-3 devs, parallel)

| Task | Branch | Prompt File | Dependencies |
|------|--------|-------------|--------------|
| Button | `ui/button` | `phase-1-ui/01-button.md` | Phase 0 |
| Input | `ui/input` | `phase-1-ui/02-input.md` | Phase 0 |
| Card | `ui/card` | `phase-1-ui/03-card.md` | Phase 0 |
| GradientText | `ui/gradient-text` | `phase-1-ui/04-gradient-text.md` | Phase 0 |
| SectionWrapper | `ui/section-wrapper` | `phase-1-ui/05-section-wrapper.md` | Phase 0 |
| WaitlistForm | `ui/waitlist-form` | `phase-1-ui/06-waitlist-form.md` | Button + Input |

**WaitlistForm depends on Button + Input. Assign to same dev or sequence them.**

### Phase 2: Section Components (6-7 devs, parallel)

| Task | Branch | Prompt File | Uses UI Components |
|------|--------|-------------|-------------------|
| Navbar | `section/navbar` | `phase-2-sections/01-navbar.md` | Button |
| Hero | `section/hero` | `phase-2-sections/02-hero.md` | WaitlistForm, GradientText, SectionWrapper |
| Problem | `section/problem` | `phase-2-sections/03-problem.md` | Card, SectionWrapper |
| Solution | `section/solution` | `phase-2-sections/04-solution.md` | GradientText, SectionWrapper |
| Pillars | `section/pillars` | `phase-2-sections/05-pillars.md` | Card, SectionWrapper |
| Promise (10x) | `section/promise` | `phase-2-sections/06-promise.md` | GradientText, SectionWrapper |
| Results | `section/results` | `phase-2-sections/07-results.md` | Card, SectionWrapper |
| Team | `section/team` | `phase-2-sections/08-team.md` | Card, SectionWrapper |
| How It Works | `section/how-it-works` | `phase-2-sections/09-how-it-works.md` | SectionWrapper |
| Final CTA | `section/final-cta` | `phase-2-sections/10-final-cta.md` | WaitlistForm, GradientText, SectionWrapper |
| Footer | `section/footer` | `phase-2-sections/11-footer.md` | None |

### Phase 3: Backend (1 dev, parallel with Phase 2)

| Task | Branch | Prompt File |
|------|--------|-------------|
| Full backend | `backend/waitlist` | `phase-3-backend/01-backend-full.md` |

Covers: Supabase client, Resend client, API route, email template. One prompt, one dev.

### Phase 4: Integration (1-2 devs, after Phase 2 + 3)

| Task | Branch | Prompt File |
|------|--------|-------------|
| Assemble page | `integration/page` | `phase-4-integration/01-assemble-page.md` |
| Connect form + scroll | `integration/form-scroll` | `phase-4-integration/02-connect-form-scroll.md` |
| QA + polish | `integration/qa` | `phase-4-integration/03-qa-polish.md` |

### Phase 5: Production (1-2 devs, after Phase 4)

| Task | Branch | Prompt File |
|------|--------|-------------|
| SEO + meta + structured data | `prod/seo` | `phase-5-production/01-seo.md` |
| Analytics + events | `prod/analytics` | `phase-5-production/02-analytics.md` |
| Performance + deploy | `prod/deploy` | `phase-5-production/03-deploy.md` |

### Dependency Graph

```
Phase 0 (Setup + AI Protocol Files)
    │
    ├──→ Phase 1 (UI Components)
    │        │
    │        └──→ Phase 2 (Sections) ──→ Phase 4 (Integration) ──→ Phase 5 (Production)
    │                                          ↑
    └──→ Phase 3 (Backend) ───────────────────┘
```

Phase 3 (Backend) can run in parallel with Phase 1 and 2.

---

## 9. GIT WORKFLOW

### Branch Naming

```
Pattern:    [category]/[feature-name]
Categories: setup, ui, section, backend, integration, prod, fix
Examples:   setup/init, ui/button, section/hero, backend/waitlist
```

### Commit Messages

```
Pattern:    [type]: [short description]
Types:      feat, fix, style, refactor, chore, docs
Examples:   feat: add Hero section component
            chore: configure Tailwind custom colors
```

### PR Rules

1. **One PR per prompt.** Each prompt = one branch = one PR.
2. **PR title:** `feat: [Component Name]` (e.g., "feat: Hero section")
3. **PR description must include:**
   - Which prompt file it was built from
   - Screenshot (desktop + mobile)
   - Any deviations from prompt (with justification)
4. **Do NOT merge your own PR.**
5. **Rebase from `main` before pushing.**
6. **All PRs merge into `main`.**

### Branch Protection

- `main` is protected
- Requires 1 approval before merge
- Must pass CI checks (if configured)

---

## 10. CODE STANDARDS

### File Naming

```
Components:     PascalCase.tsx      (Hero.tsx, WaitlistForm.tsx)
Utilities:      camelCase.ts        (supabase.ts, resend.ts)
API routes:     route.ts            (Next.js convention)
```

### Component Structure (in every file)

```tsx
// 1. Imports
// 2. Types/Interfaces
// 3. Constants (animation variants, data arrays)
// 4. Component (export function Name() { ... })
```

### Import Rules

```
Always:     @/components/...    @/lib/...
Never:      ../../../components/...
```

### Shared UI is Mandatory

| Need | Use | Never Create |
|------|-----|-------------|
| Button | `@/components/ui/Button` | Custom button |
| Input | `@/components/ui/Input` | Custom input |
| Card | `@/components/ui/Card` | Custom card |
| Gradient text | `@/components/ui/GradientText` | Inline gradient |
| Section wrapper | `@/components/ui/SectionWrapper` | Custom wrapper |
| Waitlist form | `@/components/ui/WaitlistForm` | Custom form |

---

## 11. COMPONENT ISOLATION RULES

1. **No section may import another section.** Only `ui/` components.
2. **No global state.** Each component is self-contained.
3. **No component may modify `globals.css`.**
4. **Each component works in isolation** — render it alone, it looks correct.
5. **All data is hardcoded inside** — no external data files.
6. **Section IDs are fixed:**

```
hero, problem, solution, pillars, promise, results, team, how-it-works, cta, footer
```

---

## 12. PROMPT-TO-AI OPTIMIZATION

1. **Start every prompt with the System Instruction Block** (Section 5).
2. **Include Tailwind token reference** (Section 6).
3. **Include UI component signatures** for any shared components used (Section 7).
4. **Paste all copy, colors, sizes, spacing, animations inline** — never reference external docs.
5. **Include example Framer Motion variant code** for complex animations.
6. **One AI session per prompt.** Fresh context = better output.
7. **After AI generates code:**
   - Dev reads every line
   - Verifies against prompt
   - Tests responsive + animations
   - Removes any AI-added extras

---

## 13. INTEGRATION RULES

When assembling in `page.tsx`:

```tsx
// Import order matches page order
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Pillars } from "@/components/Pillars";
import { Promise } from "@/components/Promise";
import { Results } from "@/components/Results";
import { Team } from "@/components/Team";
import { HowItWorks } from "@/components/HowItWorks";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Pillars />
      <Promise />
      <Results />
      <Team />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
}
```

- No props passed between sections
- Smooth scroll offset: 80px (navbar 64px + 16px padding)
- Both WaitlistForms (Hero + FinalCTA) hit the same `/api/waitlist` endpoint

---

## 14. REVIEW & QA CHECKLIST

### Visual
- [ ] Copy matches prompt exactly
- [ ] Colors use Tailwind tokens
- [ ] Typography matches scale
- [ ] Spacing matches spec
- [ ] Responsive at 375px, 768px, 1024px, 1440px

### Code
- [ ] TypeScript, no `any`
- [ ] Uses shared UI components
- [ ] Named export
- [ ] No console.log
- [ ] Path aliases (@/)
- [ ] "use client" if needed

### Animation
- [ ] Scroll reveal on viewport entry
- [ ] Stagger on card groups
- [ ] Hover states per spec
- [ ] `viewport={{ once: true }}`

### Accessibility
- [ ] Semantic HTML
- [ ] Alt text on images
- [ ] Keyboard navigable

---

## 15. HANDLING BLOCKERS

1. **Merge conflicts:** Rebase from main. Shared file conflict = lead coordinates.
2. **Spec unclear:** Don't guess. Ask lead. Lead documents the decision.
3. **Deviations:** Implement closest version, document in PR, tag lead.
4. **Blocked by dependency:** Create local mock, build against it, replace when real component merges.
5. **Two devs same file:** Should never happen. Lead coordinates merge order.

---

## 16. COMMUNICATION

1. Task assignments come from the lead only
2. Starting a task → announce your branch
3. PR ready → request review from lead + one peer
4. Blocked → notify lead immediately
5. Daily sync: done / in progress / blocked

---

## 17. DEFINITION OF DONE

**Component done:**
- [ ] Code matches prompt exactly
- [ ] Copy correct
- [ ] Responsive all breakpoints
- [ ] Animations work
- [ ] PR reviewed and approved
- [ ] Merged into main
- [ ] No regressions

**Project done:**
- [ ] All 11 sections render in page.tsx
- [ ] Smooth scroll works
- [ ] Waitlist form saves to Supabase
- [ ] Welcome email sends via Resend
- [ ] Lighthouse 90+ all categories
- [ ] SEO tags in place
- [ ] Analytics tracking
- [ ] All 5 AI protocol files are in codebase
- [ ] Deployed to production
- [ ] thesx.co live with SSL
- [ ] Tested on all target devices

---

*This file governs how the team works. The Zero-Question Rule (Section 2) is the highest priority. Every prompt must be executable without clarification. Every AI tool must be configured before any dev writes code.*
