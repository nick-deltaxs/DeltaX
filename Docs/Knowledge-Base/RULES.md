# DeltaX — Team Integration & Prompt Generation Rules

> **Audience:** The team lead / prompt engineer who will break the spec into prompts.
> **Purpose:** Rules for generating prompts, assigning work, setting up AI workflow protocols, and keeping 6-7 parallel devs from breaking each other's code.
> **Companion files:** `knowledge-base/SPEC.md` (full product & design spec) | `knowledge-base/WIREFRAMES.md` (visual wireframes)

---

## 0. YOUR FIRST JOB — CREATE THE PROJECT STRUCTURE

Before generating any prompts, you must create the following folder structure. **Nothing exists yet except `knowledge-base/`.** You build everything.

### Root Structure (you create this)

```
DeltaX-Landing/
│
├── knowledge-base/                    → Already exists (DO NOT MODIFY)
│   ├── SPEC.md                        → Full product & design spec (V3)
│   ├── WIREFRAMES.md                  → Visual wireframes
│   └── RULES.md                       → This file
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
│   ├── phase-0-foundation/
│   │   └── 01-foundation.md
│   ├── phase-1-shared/
│   │   ├── 01-navbar.md
│   │   ├── 02-footer.md
│   │   ├── 03-button.md
│   │   ├── 04-input.md
│   │   ├── 05-waitlist-form.md
│   │   ├── 06-card.md
│   │   ├── 07-section-wrapper.md
│   │   ├── 08-scroll-reveal.md
│   │   └── 09-deltax-logo.md
│   ├── phase-2-home/
│   │   ├── 01-hero.md
│   │   ├── 02-the-problem.md
│   │   ├── 03-the-system.md
│   │   ├── 04-the-engine.md
│   │   ├── 05-the-proof.md
│   │   ├── 06-the-architects.md
│   │   ├── 07-your-path.md
│   │   └── 08-final-cta.md
│   ├── phase-3-backend/
│   │   └── 01-backend-full.md
│   ├── phase-4-pages/
│   │   ├── 01-about.md
│   │   ├── 02-contact.md
│   │   ├── 03-legal.md
│   │   └── 04-not-found.md
│   ├── phase-5-integration/
│   │   ├── 01-assemble.md
│   │   ├── 02-connect.md
│   │   └── 03-qa.md
│   └── phase-6-production/
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
2. **Knowledge base is read-only during build.** Nobody modifies `SPEC.md` or `RULES.md` once development starts. If something needs to change, the lead creates an amendment note in `roadmap/`.
3. **Prompts are write-once.** Once a prompt is generated and assigned, it does not change. If a correction is needed, add a separate file (e.g., `02-hero-amendment.md`).
4. **`PROGRESS.md` is the only live file.** Updated by the lead as tasks complete.
5. **Prompt file names match the roadmap exactly** — `phase-X-category/NN-name.md`.
6. **AI workflow protocol files live inside `codebase/`** — so every AI tool picks them up automatically when a dev opens the project.

---

## 1. YOUR ROLE

You are the **prompt engineer / coordinator**. Your job:

1. Read `knowledge-base/SPEC.md` completely
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
7. **Include exact file paths** — not "create a component" but "create file: `codebase/components/home/Hero.tsx`"
8. **Include exact import statements** — write them out: `import { Button } from "@/components/ui/Button"`
9. **Include the exact export format** — `export function Hero() {}`
10. **Specify what happens on every state** — default, hover, focus, active, loading, success, error, disabled, mobile, tablet, desktop
11. **Specify what NOT to build** — explicitly list things the AI should skip
12. **End with the exact output expectation** — "This prompt produces exactly 1 file: `codebase/components/home/Hero.tsx`"

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
Project: DeltaX Landing Website
Domain: thesx.co
Type: Multi-page marketing website (5 pages) with waitlist signup and contact form
Pages: Home (8 sections), About (4 sections), Contact (2 sections), Privacy, Terms, 404
```

#### B. Tech Stack

```
- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS (custom color tokens configured in tailwind.config.ts)
- Framer Motion (domMax import for useScroll/useTransform)
- Days One + Inter fonts via next/font/google
- Radix UI or Headless UI (Services dropdown in Navbar)
- Supabase (Postgres database for waitlist + contact form)
- Resend (transactional email)
- CSS @keyframes for infinite animations (breathing glows, pulses — NOT Framer Motion)
```

#### C. Architecture Rules

```
- Multi-page app: Home, About, Contact, Privacy, Terms, 404
- Home sections are separate components in components/home/, imported into app/page.tsx
- About sections in components/about/
- Contact sections in components/contact/
- Shared components (Navbar, Footer) in components/shared/
- UI primitives (Button, Input, Card, etc.) in components/ui/
- No section component may import another section component
- Only shared UI components from components/ui/ can be imported by sections
- All data is hardcoded inside components (no external data files, no CMS)
- No global state management — each component is self-contained
- WaitlistForm is the only component that makes API calls (besides ContactForm)
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

#### F. Color Tokens (V3 Brand DNA)

```
Backgrounds:
  bg-primary:    #0A0C0B     (page background)
  bg-secondary:  #161C19     (darker bands)
  bg-tertiary:   #1C2320     (surface elements)
  bg-break:      #0D3535     (deep teal band — YOUR PATH section only)

Sub-brand accents:
  core-base:     #006381     (CoreXs teal — backgrounds/fills)
  core-bright:   #1A9BBF     (CoreXs teal — text/borders on dark)
  code-base:     #5A5A5A     (CodeXs grey — backgrounds/fills)
  code-bright:   #8A8A8A     (CodeXs grey — text/borders on dark)
  scale-base:    #9A1515     (ScaleXs red — backgrounds/fills)
  scale-bright:  #D94040     (ScaleXs red — text/borders on dark)
  style-base:    #121CDB     (StyleXs blue — backgrounds/fills)
  style-bright:  #6E75FF     (StyleXs blue — text/borders on dark)
  deltax-base:   #15339A     (DeltaX navy — backgrounds/fills)
  deltax-bright: #4466CC     (DeltaX navy — text/borders on dark)

Text:
  text-hero:     #FFFFFF                   (hero headlines only)
  text-body:     #E8E8E8                   (body text)
  text-dim:      rgba(255,255,255,0.60)    (secondary text)
  text-muted:    rgba(255,255,255,0.50)    (footnotes, meta)

Special:
  gold:          #f0b429     (impact numbers, key callouts — MAX 2 gold moments on home page)

Utility:
  success:       #22C55E     (success states)
  error:         #EF4444     (error states)

Usage examples:
  bg-primary       → className="bg-primary"
  core-bright      → className="text-core-bright"
  border-core      → className="border-core-bright"
```

#### G. Animation Rules

```
- Framer Motion for scroll-triggered and interaction animations
- CSS @keyframes for infinite/repeating animations (breathing glows, pulses, shimmers)
- Define variants as constants outside the component
- Scroll: whileInView with viewport={{ once: true, amount: 0.2 }}
- Stagger: 0.1s between children
- Durations in seconds (0.6 not 600)
- Default easing: [0.16, 1, 0.3, 1]
- Spring config: { stiffness: 100, damping: 20 }
- Reduced motion: <MotionConfig reducedMotion="user"> wrapping all children in layout.tsx
```

#### H. What NOT to Do (Critical)

```
- Do NOT create files outside the assigned task
- Do NOT add features not specified in the prompt
- Do NOT use default exports
- Do NOT use any type in TypeScript
- Do NOT add console.log or debug code
- Do NOT modify globals.css (unless your prompt explicitly says to)
- Do NOT create new shared/UI components (use existing ones)
- Do NOT add comments like "// TODO" or "// AI generated"
- Do NOT import section components into other section components
- Do NOT use Framer Motion for infinite/repeating animations (use CSS @keyframes)
- Do NOT use position: fixed for sticky scroll sections (use position: sticky scoped to container)
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

These files are created as part of **Phase 0 (Foundation)**. The Phase 0 prompt must include explicit instructions to create all 5 protocol files with the exact content specified above.

After Phase 0, these files are **read-only** — devs never modify them. If a rule needs to change, the lead updates them through a dedicated PR.

---

## 4. PROMPT FORMAT

Every prompt file must follow this exact structure. No deviation.

```markdown
# [TASK NAME]

## Metadata
- **Phase:** [0/1/2/3/4/5/6]
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
- Framer Motion variant code example OR CSS @keyframes if infinite]

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
- File: `codebase/components/home/Example.tsx`
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
- Framer Motion (domMax import — for useScroll, useTransform, whileInView animations)
- Days One (display font) + Inter (body font) via next/font/google
- System monospace (SF Mono / Menlo / Consolas) for labels
- Radix UI or Headless UI for dropdown menus
- CSS @keyframes for infinite/repeating animations (breathing glows, pulses, shimmers — NOT Framer Motion)

Global rules:
- Use "use client" directive when the component uses hooks, state, or Framer Motion
- Export as named export: export function ComponentName()
- Use @/ path aliases for all imports (e.g., @/components/ui/Button)
- Use custom Tailwind color tokens (e.g., bg-primary, text-core-bright) — never raw hex values in className
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

  Backgrounds:
    bg-primary         → #0A0C0B     (page background)
    bg-secondary       → #161C19     (darker bands)
    bg-tertiary        → #1C2320     (surface elements)
    bg-break           → #0D3535     (deep teal band — YOUR PATH only)

  Sub-brand accents:
    core-base          → #006381     (CoreXs teal — backgrounds/fills)
    core-bright        → #1A9BBF     (CoreXs teal — text/borders on dark)
    code-base          → #5A5A5A     (CodeXs grey — backgrounds/fills)
    code-bright        → #8A8A8A     (CodeXs grey — text/borders on dark)
    scale-base         → #9A1515     (ScaleXs red — backgrounds/fills)
    scale-bright       → #D94040     (ScaleXs red — text/borders on dark)
    style-base         → #121CDB     (StyleXs blue — backgrounds/fills)
    style-bright       → #6E75FF     (StyleXs blue — text/borders on dark)
    deltax-base        → #15339A     (DeltaX navy — backgrounds/fills)
    deltax-bright      → #4466CC     (DeltaX navy — text/borders on dark)

  Text:
    text-hero          → #FFFFFF                   (hero headlines only)
    text-body          → #E8E8E8                   (body text)
    text-dim           → rgba(255,255,255,0.60)    (secondary text)
    text-muted         → rgba(255,255,255,0.50)    (footnotes, meta)

  Special:
    gold               → #f0b429     (impact numbers — MAX 2 gold moments on home page)

  Utility:
    success            → #22C55E     (success states)
    error              → #EF4444     (error states)

Fonts:
  Display:  Days One (--font-display) — hero headlines, section titles, pillar titles
  Body:     Inter (--font-body) — body text, subtext, UI elements
  Labels:   System monospace (--font-mono) — tags, labels, captions (uppercase, letter-spacing: 4px)

Usage examples:
  bg-primary         → className="bg-primary"
  text-core-bright   → className="text-core-bright"
  border-core        → className="border-core-bright"
  font-display       → className="font-display"  (Days One)
  font-body          → className="font-body"  (Inter)
  font-mono          → className="font-mono"  (system monospace)
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

**Include only the signatures relevant to the specific prompt.** Don't paste all signatures if the component only uses 2.

```tsx
// Button — teal bg (#1A9BBF), dark text, rounded-lg
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
// Primary variant: bg-core-bright (#1A9BBF), text-[#0A0C0B]
// Hover: scale(1.02), box-shadow 0 0 24px rgba(26,155,191,0.35)
// Active: scale(0.98). Focus: ring-2 ring-core-bright ring-offset-2 ring-offset-[#0A0C0B]

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

// Card — supports V3 highlight box / left-accent patterns
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  accentColor?: "core" | "code" | "scale" | "style" | "deltax";
  variant?: "default" | "left-accent";
  // default: bg-tertiary with subtle border
  // left-accent: 3px left border in accent color, gradient bg
}
export function Card(props: CardProps): JSX.Element;

// SectionWrapper — consistent section spacing and max-width
interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "primary" | "secondary" | "break";
}
export function SectionWrapper(props: SectionWrapperProps): JSX.Element;

// ScrollReveal — reusable whileInView wrapper
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}
export function ScrollReveal(props: ScrollRevealProps): JSX.Element;
// Default: opacity 0→1, y 40→0, duration 0.6s, easing [0.16, 1, 0.3, 1]
// viewport={{ once: true, amount: 0.2 }}

// DeltaXLogo — SVG component with currentColor
interface DeltaXLogoProps {
  className?: string;
  size?: number;  // defaults to 80 (width), height auto-scales to aspect ratio
}
export function DeltaXLogo(props: DeltaXLogoProps): JSX.Element;
// Uses currentColor for fill — inherits text color from parent

// WaitlistForm — fully self-contained
// No props. Handles own state, validation, API call to /api/waitlist.
// Email input + "Join the Waitlist" button.
export function WaitlistForm(): JSX.Element;
```

**IMPORTANT:** These signatures are what you design. Phase 1 prompts must build components matching these exact interfaces. Phase 2 prompts must use these exact interfaces. This is the contract between phases.

If you decide to change a signature (e.g., add a prop), you must update ALL prompts that use that component.

---

## 8. BUILD ORDER & DEPENDENCIES

Components must be built in phases. Phases can run in parallel internally, but each phase must complete before the next starts (unless noted otherwise).

### Phase 0: Foundation (1 dev, must be first)

| Task | Branch | Prompt File |
|------|--------|-------------|
| Foundation setup | `setup/foundation` | `phase-0-foundation/01-foundation.md` |

This single prompt covers:
- Next.js 14 init inside `codebase/`
- Tailwind config with all V3 custom tokens (backgrounds, sub-brand accents, text hierarchy, gold, utility)
- Folder structure: `components/home/`, `components/about/`, `components/contact/`, `components/shared/`, `components/ui/`, `lib/`, `public/`
- Install dependencies (framer-motion, @supabase/supabase-js, resend, @radix-ui/react-navigation-menu)
- Font setup (Days One + Inter via next/font/google, system monospace)
- Root layout with metadata, MotionConfig reducedMotion="user"
- globals.css (CSS variables, atmosphere classes, grid texture)
- DeltaXLogo.tsx (SVG component with currentColor)
- ScrollReveal.tsx (reusable whileInView wrapper)
- **All 5 AI workflow protocol files** (CLAUDE.md, AGENTS.md, .cursorrules, .windsurfrules, .github/copilot-instructions.md)
- tsconfig path aliases
- .gitignore
- .env.local template

One dev, one prompt. **Everyone else waits until Phase 0 is merged.**

### Phase 1: Shared Components (2-3 devs, parallel)

| Task | Branch | Prompt File | Dependencies |
|------|--------|-------------|--------------|
| Navbar | `shared/navbar` | `phase-1-shared/01-navbar.md` | Phase 0 |
| Footer | `shared/footer` | `phase-1-shared/02-footer.md` | Phase 0 |
| Button | `ui/button` | `phase-1-shared/03-button.md` | Phase 0 |
| Input | `ui/input` | `phase-1-shared/04-input.md` | Phase 0 |
| WaitlistForm | `ui/waitlist-form` | `phase-1-shared/05-waitlist-form.md` | Button + Input |
| Card | `ui/card` | `phase-1-shared/06-card.md` | Phase 0 |
| SectionWrapper | `ui/section-wrapper` | `phase-1-shared/07-section-wrapper.md` | Phase 0 |
| ScrollReveal | `ui/scroll-reveal` | `phase-1-shared/08-scroll-reveal.md` | Phase 0 |
| DeltaXLogo | `ui/deltax-logo` | `phase-1-shared/09-deltax-logo.md` | Phase 0 |

**WaitlistForm depends on Button + Input. Assign to same dev or sequence them.**
**ScrollReveal and DeltaXLogo may already exist from Phase 0 — Phase 1 prompts refine them if needed.**

### Phase 2: Home Page Sections (6-7 devs, parallel) — THIS IS THE BIG PHASE

| Task | Branch | Prompt File | Uses Components |
|------|--------|-------------|-----------------|
| Hero | `home/hero` | `phase-2-home/01-hero.md` | WaitlistForm, DeltaXLogo, ScrollReveal, SectionWrapper |
| The Problem | `home/the-problem` | `phase-2-home/02-the-problem.md` | Card, SectionWrapper, ScrollReveal |
| The System | `home/the-system` | `phase-2-home/03-the-system.md` | DeltaXLogo, SectionWrapper, ScrollReveal |
| The Engine | `home/the-engine` | `phase-2-home/04-the-engine.md` | Card, Button, DeltaXLogo, SectionWrapper, ScrollReveal |
| The Proof | `home/the-proof` | `phase-2-home/05-the-proof.md` | SectionWrapper, ScrollReveal |
| The Architects | `home/the-architects` | `phase-2-home/06-the-architects.md` | Card, SectionWrapper, ScrollReveal |
| Your Path | `home/your-path` | `phase-2-home/07-your-path.md` | SectionWrapper, ScrollReveal |
| Final CTA | `home/final-cta` | `phase-2-home/08-final-cta.md` | WaitlistForm, DeltaXLogo, SectionWrapper |

**The 3 hardest components (budget 60% of Phase 2 time):**
1. TheSystem.tsx — responsive SVG diagram with scroll-driven path animation
2. TheEngine.tsx — sticky atmosphere crossfade with 4 unique layouts + sub-anchors
3. TheProblem.tsx — scroll-linked dissolve with sticky positioning

### Phase 3: Backend (1 dev, parallel with Phase 2)

| Task | Branch | Prompt File |
|------|--------|-------------|
| Full backend | `backend/api` | `phase-3-backend/01-backend-full.md` |

Covers:
- Supabase client (`lib/supabase.ts`)
- Resend client (`lib/resend.ts`)
- `/api/waitlist` route (email validation, Supabase insert, Resend welcome email)
- `/api/contact` route (form validation, honeypot check, rate limiting, Supabase insert, Resend notification)
- `/api/og` route (OG image generation with bundled Days One .ttf)
- Email templates

One prompt, one dev. **Can start as soon as Phase 0 is done — does not wait for Phase 1 or 2.**

### Phase 4: Secondary Pages (2 devs, after Phase 1)

| Task | Branch | Prompt File | Dependencies |
|------|--------|-------------|--------------|
| About page | `pages/about` | `phase-4-pages/01-about.md` | Navbar + Footer + shared UI |
| Contact page | `pages/contact` | `phase-4-pages/02-contact.md` | Navbar + Footer + shared UI |
| Legal pages | `pages/legal` | `phase-4-pages/03-legal.md` | Navbar + Footer |
| 404 page | `pages/not-found` | `phase-4-pages/04-not-found.md` | DeltaXLogo |

About page has 4 sections: AboutHero, Story, TeamGrid (#team anchor), AboutCTA.
Contact page has 2 sections: ContactHero, ContactForm (with validation, honeypot, rate limiting).

### Phase 5: Integration (1-2 devs, after Phase 2 + 3 + 4)

| Task | Branch | Prompt File |
|------|--------|-------------|
| Assemble home page.tsx | `integration/assemble` | `phase-5-integration/01-assemble.md` |
| Connect waitlist/contact forms to API | `integration/connect` | `phase-5-integration/02-connect.md` |
| Full QA + smooth scroll + polish | `integration/qa` | `phase-5-integration/03-qa.md` |

### Phase 6: Production (1-2 devs, after Phase 5)

| Task | Branch | Prompt File |
|------|--------|-------------|
| SEO + meta + structured data + OG | `prod/seo` | `phase-6-production/01-seo.md` |
| Analytics + events | `prod/analytics` | `phase-6-production/02-analytics.md` |
| Performance + accessibility + deploy | `prod/deploy` | `phase-6-production/03-deploy.md` |

### Dependency Graph

```
Phase 0 (Foundation + AI Protocol Files)
    │
    ├──→ Phase 1 (Shared Components)
    │        │
    │        ├──→ Phase 2 (Home Sections) ──┐
    │        │                               ├──→ Phase 5 (Integration) ──→ Phase 6 (Production)
    │        └──→ Phase 4 (Secondary Pages) ─┘           ↑
    │                                                    │
    └──→ Phase 3 (Backend) ──────────────────────────────┘
```

Phase 3 (Backend) can run in parallel with Phase 1, 2, and 4.
Phase 4 (Secondary Pages) can run in parallel with Phase 2 once Phase 1 shared components are done.

---

## 9. GIT WORKFLOW

### Branch Naming

```
Pattern:    [category]/[feature-name]
Categories: setup, ui, shared, home, pages, backend, integration, prod, fix
Examples:   setup/foundation, ui/button, shared/navbar, home/hero, backend/api, pages/about
```

### Commit Messages

```
Pattern:    [type]: [short description]
Types:      feat, fix, style, refactor, chore, docs
Examples:   feat: add Hero section component
            chore: configure Tailwind V3 brand DNA colors
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
| Section wrapper | `@/components/ui/SectionWrapper` | Custom wrapper |
| Scroll reveal | `@/components/ui/ScrollReveal` | Custom whileInView wrapper |
| DeltaX logo | `@/components/ui/DeltaXLogo` | Inline SVG logo |
| Waitlist form | `@/components/ui/WaitlistForm` | Custom form |

---

## 11. COMPONENT ISOLATION RULES

1. **No section may import another section.** Only `ui/` and `shared/` components.
2. **No global state.** Each component is self-contained.
3. **No component may modify `globals.css`** (unless the prompt explicitly says to).
4. **Each component works in isolation** — render it alone, it looks correct.
5. **All data is hardcoded inside** — no external data files.

### Component Directory Structure

```
components/
├── home/                → Home page sections only
│   ├── Hero.tsx
│   ├── TheProblem.tsx
│   ├── TheSystem.tsx
│   ├── TheEngine.tsx
│   ├── TheProof.tsx
│   ├── TheArchitects.tsx
│   ├── YourPath.tsx
│   └── FinalCTA.tsx
├── about/               → About page sections only
│   ├── AboutHero.tsx
│   ├── Story.tsx
│   ├── TeamGrid.tsx
│   └── AboutCTA.tsx
├── contact/             → Contact page sections only
│   ├── ContactHero.tsx
│   └── ContactForm.tsx
├── shared/              → Shared across pages
│   ├── Navbar.tsx
│   └── Footer.tsx
└── ui/                  → UI primitives
    ├── Button.tsx
    ├── Input.tsx
    ├── Card.tsx
    ├── SectionWrapper.tsx
    ├── ScrollReveal.tsx
    ├── DeltaXLogo.tsx
    └── WaitlistForm.tsx
```

### Section IDs (V3)

```
Home page:
  hero, problem, system, engine, proof, architects, path, cta

Engine sub-anchors (for navbar Services dropdown):
  core, code, scale, style

About page:
  about-hero, story, team, about-cta

Contact page:
  contact-hero, contact-form
```

---

## 12. PROMPT-TO-AI OPTIMIZATION

1. **Start every prompt with the System Instruction Block** (Section 5).
2. **Include Tailwind token reference** (Section 6).
3. **Include UI component signatures** for any shared components used (Section 7).
4. **Paste all copy, colors, sizes, spacing, animations inline** — never reference external docs.
5. **Include example Framer Motion variant code** for complex animations.
6. **Include CSS @keyframes code** for infinite animations (breathing glows, pulses).
7. **One AI session per prompt.** Fresh context = better output.
8. **After AI generates code:**
   - Dev reads every line
   - Verifies against prompt
   - Tests responsive + animations
   - Removes any AI-added extras

---

## 13. INTEGRATION RULES

### Home Page — `app/page.tsx`

```tsx
// Import order matches page order
import { Navbar } from "@/components/shared/Navbar";
import { Hero } from "@/components/home/Hero";
import { TheProblem } from "@/components/home/TheProblem";
import { TheSystem } from "@/components/home/TheSystem";
import { TheEngine } from "@/components/home/TheEngine";
import { TheProof } from "@/components/home/TheProof";
import { TheArchitects } from "@/components/home/TheArchitects";
import { YourPath } from "@/components/home/YourPath";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TheProblem />
      <TheSystem />
      <TheEngine />
      <TheProof />
      <TheArchitects />
      <YourPath />
      <FinalCTA />
      <Footer />
    </main>
  );
}
```

### About Page — `app/about/page.tsx`

```tsx
import { Navbar } from "@/components/shared/Navbar";
import { AboutHero } from "@/components/about/AboutHero";
import { Story } from "@/components/about/Story";
import { TeamGrid } from "@/components/about/TeamGrid";
import { AboutCTA } from "@/components/about/AboutCTA";
import { Footer } from "@/components/shared/Footer";

export default function About() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <Story />
      <TeamGrid />
      <AboutCTA />
      <Footer />
    </main>
  );
}
```

### Contact Page — `app/contact/page.tsx`

```tsx
import { Navbar } from "@/components/shared/Navbar";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { Footer } from "@/components/shared/Footer";

export default function Contact() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
}
```

### Integration Notes

- No props passed between sections
- Smooth scroll offset: 80px (navbar 64px + 16px padding)
- Both WaitlistForms (Hero + FinalCTA) hit the same `/api/waitlist` endpoint
- ContactForm hits `/api/contact` endpoint
- Navbar Services dropdown links to `/#core`, `/#code`, `/#scale`, `/#style` (smooth scroll on home, navigate on other pages)
- Lazy load Sections 5-8 on home page via `next/dynamic` with `{ ssr: false }`

---

## 14. REVIEW & QA CHECKLIST

### Visual
- [ ] Copy matches prompt exactly
- [ ] Colors use Tailwind tokens (V3 brand DNA)
- [ ] Typography matches scale (Days One display, Inter body, system mono labels)
- [ ] Spacing matches spec
- [ ] Responsive at 375px, 390px, 768px, 1024px, 1440px, 1920px

### Code
- [ ] TypeScript, no `any`
- [ ] Uses shared UI components from correct directories
- [ ] Named export
- [ ] No console.log
- [ ] Path aliases (@/)
- [ ] "use client" if needed
- [ ] Components in correct directory (home/, about/, contact/, shared/, ui/)

### Animation
- [ ] Scroll reveal on viewport entry (Framer Motion)
- [ ] Infinite animations use CSS @keyframes (not Framer Motion)
- [ ] Stagger on card groups
- [ ] Hover states per spec
- [ ] `viewport={{ once: true }}`
- [ ] `<MotionConfig reducedMotion="user">` in layout.tsx

### Accessibility
- [ ] Semantic HTML (nav, main, section, article, footer)
- [ ] Alt text on images
- [ ] Keyboard navigable (Tab, arrow keys for dropdown, Escape)
- [ ] Focus rings: focus-visible:ring-2 ring-core-bright
- [ ] Touch targets minimum 44x44px
- [ ] Skip-to-content link
- [ ] aria attributes on dropdown, diagrams

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
- [ ] Animations work (Framer Motion + CSS @keyframes where applicable)
- [ ] Reduced motion fallback works
- [ ] PR reviewed and approved
- [ ] Merged into main
- [ ] No regressions

**Project done:**
- [ ] Home page: all 8 sections render in page.tsx
- [ ] About page: all 4 sections render
- [ ] Contact page: 2 sections render, form submits correctly
- [ ] Legal pages: Privacy + Terms render with real content
- [ ] 404 page works with suggested links
- [ ] Navbar works across all 5 pages (fixed, scroll-aware, dropdown, mobile hamburger)
- [ ] Footer works across all 5 pages
- [ ] Smooth scroll works (including engine sub-anchors: core, code, scale, style)
- [ ] Waitlist form saves to Supabase via /api/waitlist
- [ ] Contact form saves to Supabase via /api/contact with validation + rate limiting
- [ ] Notification emails send via Resend
- [ ] Lighthouse 90+ all categories
- [ ] SEO tags in place (per-page metadata, OG images, sitemap, robots, JSON-LD)
- [ ] Analytics tracking
- [ ] All 5 AI protocol files are in codebase
- [ ] Accessibility pass complete (focus rings, skip link, aria, reduced motion, keyboard nav)
- [ ] Deployed to production
- [ ] thesx.co live with SSL
- [ ] Tested on all target devices (iPhone SE, iPhone 14, iPad, iPad Pro, Laptop, Desktop)

---

*This file governs how the team works. The Zero-Question Rule (Section 2) is the highest priority. Every prompt must be executable without clarification. Every AI tool must be configured before any dev writes code. All colors, fonts, and patterns must match the V3 Brand DNA spec.*
