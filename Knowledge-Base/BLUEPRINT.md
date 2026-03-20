# DeltaX Landing Page — Full Visual Blueprint

**Created:** 2026-03-21
**Purpose:** Complete design + build specification for thesx.co
**Source:** MATRIX design intelligence (32 references) + DeltaX Brand DNA + Knowledge-Base specs
**Use:** Give this to AI agents to generate build prompts

---

## 1. WHAT THIS SITE IS

DeltaX (thesx.co) is a marketing website for a system that connects strategy, technology, growth, and brand into one operating system for mid-market companies ($500K–$10M revenue).

This is NOT a SaaS dashboard. This is NOT an app. This is a **premium editorial landing page** with a waitlist.

---

## 2. DESIGN PHILOSOPHY (From MATRIX + Brand DNA)

### Core Principles
1. **Dark is the canvas** — #0A0C0B primary, teal glow is the warmth signal (like Wealthsimple uses warm beige, we use teal on dark)
2. **One idea per section** — each of the 8 home sections = one concept, 96-128px spacing between
3. **Typography carries authority** — Days One (display) + Inter (body) = geometric confidence + clean readability
4. **Restraint = luxury** — no card grids, no dashboard feel, no glassmorphism. DeltaX breathes.
5. **Animation as quality signal** — Framer Motion scroll reveals, not decorative sparkles
6. **Every section has a unique layout** — no two sections look the same
7. **Atmosphere per section** — radial glows, grid textures, vignettes create depth on dark backgrounds

### What Dave LIKES (Validated across 12 review rounds)
- Full-bleed color bands (dark/darker rhythm)
- Centered, large logos on covers
- Asymmetric layouts (60/40 splits)
- Table rows for data (not card grids)
- Editorial magazine feel
- Atmospheric teal glow effects
- Staggered stat sizes (hierarchy)
- Off-white body text (#E8E8E8)
- Section-specific color identity
- Background textures/patterns (subtle grid adds life)
- Visible atmospheric gradients (solid colors like #2A2A2A fading to bg, NOT rgba at 0.10)
- Pill-shaped flow nodes (editorial, not boxy)
- CSS gold circles for checklists
- Borderless text tags

### What Dave HATES (Will reject immediately)
- Uniform card grids (2x2, 3x3 identical boxes)
- AI-generated aesthetic (everything same weight)
- Dead bottom halves (content crammed at top)
- Flat single background (no visual rhythm)
- Small logo in top-left corner
- Generic icon + title + paragraph boxes
- Dashboard feel
- Dot grids, glassmorphism, gradient borders
- Invisible backgrounds (rgba below 0.10 is invisible on dark)
- Boxy bordered tags/badges
- Wrong section color identity
- Solid color table header slabs (too heavy)
- Inset box-shadows
- Gold overuse (max 1-2 gold moments per page)

---

## 3. COLOR PALETTE

### Backgrounds (60%)
```
#0A0C0B    — primary dark (main canvas)
#161C19    — secondary dark (alternating bands)
#1C2320    — tertiary dark (surface elements, cards)
#0D3535    — deep teal (palette break — used ONCE on home page in "Your Path" section)
```

CRITICAL: Gradients use SOLID colors (#28-#34 range) fading to bg-primary. NOT rgba at low opacity.

### Sub-Brand Accents (10%)
```
CoreXs:   #006381 (base) / #1A9BBF (bright)  — teal
CodeXs:   #5A5A5A (base) / #8A8A8A (bright)  — grey
StyleXs:  #121CDB (base) / #6E75FF (bright)  — blue
ScaleXs:  #9A1515 (base) / #D94040 (bright)  — red
DeltaX:   #15339A (base) / #4466CC (bright)  — navy
```
Base values for backgrounds/fills. Bright values for text/borders on dark bg.

### Text Hierarchy (30%)
```
#FFFFFF                  — hero headlines only (maximum attention)
#E8E8E8                  — body text (comfortable reading)
rgba(255,255,255,0.60)   — secondary text (--text-dim)
rgba(255,255,255,0.50)   — footnotes, page footers (--text-muted)
```

### Special
```
#f0b429    — gold (impact numbers, key callouts — MAX 2 instances on home page)
#22C55E    — success state
#EF4444    — error state
```

### Dynamic Theming (Engine Section)
Each sub-brand swaps CSS custom properties:
- `--dynamic-accent` (borders, labels, tags, stats, headers)
- `--dynamic-glow` (hover shadows, highlight box backgrounds)
- `--dynamic-border` (card borders, dividers)
- Background: dual radial-gradient at positions 20%/30% and 80%/70%
- Transition: `0.9s cubic-bezier(0.645, 0.045, 0.355, 1)`

---

## 4. TYPOGRAPHY

### Fonts
```
Display:  Days One (Google Fonts) — geometric, uppercase-feeling, bold
Body:     Inter (Google Fonts) — weights 300, 400, 600, 700
```

### Scale
```
Hero H1:      clamp(50px, 9vw, 120px)          Days One, #FFFFFF
Big Stat:     clamp(2.5rem, 7vw, 6rem)         Days One, accent color
H2 Section:   clamp(1.6rem, 3.5vw, 2.6rem)    Days One, #FFFFFF
H3 Label:     0.85rem, uppercase, letter-spacing: 4px, accent color
Body:         1rem (16px) Inter 400, #E8E8E8
Body strong:  Inter 600, #FFFFFF
Caption:      0.8rem Inter 300
Footnote:     0.7rem, rgba(255,255,255,0.35)
```

### Label Style (distinctive brand pattern)
```css
text-transform: uppercase;
letter-spacing: 4px;
font-size: 0.85rem;
color: var(--dynamic-accent);
```

---

## 5. COMPONENT PATTERNS

### Highlight Box — LEFT ACCENT ONLY (no full border)
```css
border: none;
border-left: 3px solid var(--accent-bright);
background: linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%);
padding: 16px 24px;
```

### Flow Nodes — PILL SHAPES (not rectangles)
```css
border: 1px solid rgba(accent, 0.25);
border-radius: 24px;
background: transparent;
font-size: 11px;
letter-spacing: 0.5px;
```

### Data Table — GRADIENT HEADERS (not solid slabs)
```css
th {
  background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.10) 100%);
  border-bottom: 2px solid rgba(240,180,41,0.30); /* gold underline */
}
```

### Tags — BORDERLESS TEXT (not bordered boxes)
```css
border: none;
background: none;
font-size: 11px;
text-transform: uppercase;
letter-spacing: 2.5px;
color: var(--accent-bright);
font-weight: 600;
```

### Checklists — CSS CIRCLES (not Unicode)
```css
li::before {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1.5px solid rgba(240,180,41,0.45);
}
```

### Atmosphere System (per section)
- Each section gets UNIQUE radial gradients
- Edge vignettes: `radial-gradient(transparent 25-35%, rgba(0,0,0,0.2-0.35) 100%)`
- Spotlight `::before` at 0.07-0.09, VARY y-position per section
- Grid texture: H+V lines at 0.035/0.02 opacity, 48px cells
- NO inset box-shadows anywhere

---

## 6. ANIMATION SYSTEM

### Scroll Reveals (Framer Motion)
```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
/>
```

### Stagger Pattern
```jsx
<motion.div variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
  {items.map((item) => (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
    />
  ))}
</motion.div>
```

### Timing
- Section transitions: 0.9s cubic-bezier(0.645, 0.045, 0.355, 1)
- Card hovers: 0.4s ease
- Theme background crossfade: 0.9s same cubic-bezier
- Staggered entrance: 100-200ms between elements
- Counter animation: 1.5s easeOut, triggered by IntersectionObserver

### Rules
- MotionConfig reducedMotion="user" — MANDATORY
- Infinite animations use CSS @keyframes (not Framer Motion)
- Loading choreography: 200ms cascades
- No decorative motion — every animation serves a purpose

---

## 7. TECHNICAL STACK

```
Framework:    Next.js 14 (App Router)
Language:     TypeScript (strict)
Styling:      Tailwind CSS (custom tokens from Section 3)
Animation:    Framer Motion (domMax for scroll-linked)
Database:     Supabase (Postgres)
Email:        Resend
Hosting:      Vercel
```

### Architecture Rules
- Named exports only (never default)
- Path aliases: @/components/..., @/lib/..., @/types/...
- PascalCase components, camelCase utilities
- No `any` types, no `console.log`, no `// TODO`
- No section imports another section (only ui/ and shared/)
- All data hardcoded inside components
- No global state
- Each component works in isolation

### Component Directory
```
src/components/
├── home/       Hero, TheProblem, TheSystem, TheEngine, TheProof, TheArchitects, YourPath, FinalCTA
├── about/      AboutHero, Story, TeamGrid, AboutCTA
├── contact/    ContactHero, ContactForm
├── shared/     Navbar, Footer
└── ui/         Button, Input, Card, SectionWrapper, ScrollReveal, DeltaXLogo, WaitlistForm
```

---

## 8. PAGES & SECTIONS — FULL VISUAL SPEC

---

### NAVBAR (All Pages — Fixed, 64px height)

```
┌────────────────────────────────────────────────────────────────────┐
│  ΔX logo (35x29)    About   Services ▾   Contact       [JOIN ▸]  │
└────────────────────────────────────────────────────────────────────┘
```

- **Background:** transparent → solid #0A0C0B on scroll (300ms fade)
- **Logo:** ΔX mark, 35x29px, white, links to home
- **Links:** Inter 400, 14px, #E8E8E8 → #FFFFFF on hover
- **Services dropdown:** 4 items (CoreX, CodeX, ScaleX, StyleX), each with icon + name + one-line description. Subtle teal left-border on hover. Opens on hover (desktop) / click (mobile)
- **CTA:** "JOIN WAITLIST" teal (#1A9BBF) pill button, white text, 12px radius
- **Mobile:** Hamburger → full-screen overlay, staggered item reveal (60ms each)
- **Accessibility:** Skip-to-content link, keyboard nav (Enter/Space, Escape, arrows), aria-expanded on dropdown, focus-visible rings

---

### HOME PAGE — 8 Sections

---

#### Section 1: HERO — "The Arrival"

```
┌─────────────────────────────────────────────────────────────────────┐
│  ░░░░░░░ atmospheric teal radial glow (top-right) ░░░░░░░░░░░░░░  │
│                                                                     │
│   ┌─── 60% ──────────────────┐  ┌──── 40% ────────────┐           │
│   │                          │  │                      │           │
│   │  ONE SYSTEM.             │  │        ╱╲            │           │
│   │  FOUR ENGINES.           │  │       ╱  ╲           │           │
│   │  TOTAL                   │  │      ╱ ΔX ╲          │           │
│   │  TRANSFORMATION.         │  │     ╱______╲         │           │
│   │                          │  │                      │           │
│   │  Strategy, technology,   │  │  (breathing teal     │           │
│   │  growth, and brand —     │  │   glow animation,    │           │
│   │  one operating system.   │  │   cursor-proximity   │           │
│   │                          │  │   reactive)          │           │
│   │  [email@______] [JOIN ▸] │  │                      │           │
│   │                          │  │                      │           │
│   │  For companies doing     │  │                      │           │
│   │  $500K–$10M              │  │                      │           │
│   └──────────────────────────┘  └──────────────────────┘           │
│                                                                     │
│  ░░░ grid texture (48px cells, 0.035 opacity) ░░░░░░░░░░░░░░░░░░  │
└─────────────────────────────────────────────────────────────────────┘
```

**Background:** #0A0C0B with teal radial glow (top-right, #1A9BBF at 0.07 opacity) + grid texture overlay (48px cells, 0.035 opacity)
**Layout:** 60/40 asymmetric split. Left = content. Right = ΔX logo.
**Headline:** "ONE SYSTEM. FOUR ENGINES. TOTAL TRANSFORMATION." — Days One, clamp(2.5rem, 5vw, 5rem), #FFFFFF, tight tracking
**Subtext:** "Strategy, technology, growth, and brand — one operating system." — Inter 400, 18px, #E8E8E8
**Qualifier:** "For companies doing $500K–$10M" — Inter 300, 14px, rgba(255,255,255,0.60)
**CTA:** Email input (Inter, 16px, #1C2320 bg, subtle border) + "JOIN WAITLIST" teal pill button
**Logo:** 120x100px ΔX mark, breathing teal glow (box-shadow pulsing 4s interval), reacts to cursor proximity
**Animation:** Staggered entrance — headline (0ms) → subtext (100ms) → form (200ms) → qualifier (250ms) → logo fades in (400ms) with breathing glow starting
**Mobile:** Stacks vertically. Logo on top (centered, 80px), content below. Full-width form.

---

#### Section 2: THE PROBLEM — "The Split"

```
┌─────────────────────────────────────────────────────────────────────┐
│   ┌─── BEFORE (muted) ──────╱╱──── AFTER (alive) ───────┐         │
│   │                        ╱╱                            │         │
│   │  scattered agencies   ╱╱   one integrated system     │         │
│   │  misaligned teams    ╱╱   aligned execution          │         │
│   │  wasted budget      ╱╱   compounding returns         │         │
│   │  no visibility     ╱╱   full transparency            │         │
│   │                   ╱╱                                  │         │
│   │  muted red tint  ╱╱  teal tint                       │         │
│   └──────────────────╱╱──────────────────────────────────┘         │
│                                                                     │
│   diagonal divider scrolls left→right as you scroll down           │
└─────────────────────────────────────────────────────────────────────┘
```

**Background:** Left: #161C19 with muted red (#D94040 at 0.08) atmosphere. Right: #0A0C0B with teal (#1A9BBF at 0.10) glow.
**Layout:** Two-column split with diagonal SVG divider
**Interaction:** Scroll-linked dissolve — as user scrolls, diagonal divider moves left-to-right, revealing AFTER side
**Content:** Table-row style comparison (NOT card grids). Before items = Inter 400, rgba(255,255,255,0.50) muted. After items = Inter 400, #E8E8E8 with teal accent.
**BEFORE side:** messy, broken-feeling (scattered text, muted colors)
**AFTER side:** clean, organized (aligned text, bright teal accents)
**Mobile:** Stacks vertically — BEFORE on top, AFTER below, fade transition replaces diagonal
**This is one of the 3 hardest components** — scroll-linked dissolve needs careful Framer Motion scroll progress tracking

---

#### Section 3: THE SYSTEM — "The Rivers"

```
┌─────────────────────────────────────────────────────────────────────┐
│  THE SYSTEM                                                         │
│                                                                     │
│                    ╭──────────╮                                      │
│                    │  X CORE  │  ← teal pill node                   │
│                    │ diagnose │                                      │
│                    ╰────┬─────╯                                      │
│                         │                                            │
│              ┌──────────┼──────────┐                                │
│              ▼          ▼          ▼                                  │
│        ╭─────────╮ ╭─────────╮ ╭─────────╮                          │
│        │ X CODE  │ │ X SCALE │ │ X STYLE │                          │
│        │  build  │ │  grow   │ │  brand  │                          │
│        ╰────┬────╯ ╰────┬────╯ ╰────┬────╯                          │
│             └───────────┼───────────┘                                │
│                         ▼                                            │
│                    ╭─────────╮                                       │
│                    │   ΔX    │  ← convergence, gold accent           │
│                    │ deliver │                                       │
│                    ╰─────────╯                                       │
│                                                                     │
│  "Three rivers converging into one delta"                           │
└─────────────────────────────────────────────────────────────────────┘
```

**Background:** #0A0C0B with subtle multi-color glow (each node radiates its sub-brand color faintly)
**Section label:** "THE SYSTEM" — Days One, 0.85rem, uppercase, letter-spacing: 4px, teal
**Layout:** Centered organic SVG flow diagram
**Concept:** "Three rivers converging into one delta" — CORE diagnoses, then feeds into CODE/SCALE/STYLE, which all converge at the ΔX mark
**Nodes:** Pill-shaped (border-radius: 24px), transparent bg, 1px accent border in their sub-brand color:
- X CORE = teal (#1A9BBF)
- X CODE = grey (#8A8A8A)
- X SCALE = red (#D94040)
- X STYLE = blue (#6E75FF)
- ΔX convergence = gold (#f0b429) — this is one of the max 2 gold moments
**Lines:** Organic SVG paths (curved, not straight), animated with scroll — paths draw themselves using stroke-dasharray + stroke-dashoffset driven by scroll position
**Animation:** Paths grow like rivers flowing as user scrolls. Nodes fade in when their path reaches them.
**Mobile:** Vertical stack, paths become simple connecting vertical lines
**This is one of the 3 hardest components** — SVG path animation needs precise scroll tracking

---

#### Section 4: THE ENGINE — "The Four Worlds"

```
┌─────────────────────────────────────────────────────────────────────┐
│  STICKY SECTION — atmosphere crossfades as you scroll               │
│                                                                     │
│  X CORE — atmosphere: TEAL radial glow                              │
│    "Audit. Diagnose. Map."                                          │
│    60/40 split: left = description, right = key metrics             │
│    Table rows showing audit deliverables                            │
│                         ↓ scroll crossfade (0.9s)                   │
│  X CODE — atmosphere: GREY glow                                     │
│    "Automate. Build. Ship."                                         │
│    Before/after comparison layout                                   │
│    Table: manual process → automated process                        │
│                         ↓ scroll crossfade                          │
│  X SCALE — atmosphere: RED glow                                     │
│    "Target. Acquire. Grow."                                         │
│    Big stat focal point: "3.2x" in Days One                         │
│    Staggered stat sizes — primary bigger, secondary smaller         │
│                         ↓ scroll crossfade                          │
│  X STYLE — atmosphere: BLUE glow                                    │
│    "Design. Brand. Position."                                       │
│    Asymmetric: brand showcase left, specs right                     │
│    Premium editorial layout                                         │
└─────────────────────────────────────────────────────────────────────┘
```

**Background:** Each pillar swaps `--dynamic-accent` and background radial gradients:
- CORE: teal (#1A9BBF at 0.08) glow, radial gradient top-left
- CODE: grey (#8A8A8A at 0.06) glow, radial gradient center
- SCALE: red (#D94040 at 0.08) glow, radial gradient top-right
- STYLE: blue (#6E75FF at 0.08) glow, radial gradient bottom-left

**Transition:** 0.9s cubic-bezier(0.645, 0.045, 0.355, 1) — entire atmosphere morphs between pillars
**Section label per pillar:** Days One, 0.85rem, uppercase, letter-spacing: 4px, in pillar's accent color
**Tagline per pillar:** Days One, clamp(1.6rem, 3.5vw, 2.6rem), #FFFFFF

**CRITICAL: Each pillar has a UNIQUE layout (no two look the same):**
- CORE = 60/40 text + metrics table rows
- CODE = before/after comparison (two columns)
- SCALE = big stat focal point (Days One, accent color, huge) + smaller supporting stats
- STYLE = editorial asymmetric with brand showcase

**Anchor IDs:** #core, #code, #scale, #style (for navbar Services dropdown linking)
**Mobile:** Static atmospheres (no sticky scroll), each pillar = full-width section with its accent color top-border
**This is one of the 3 hardest components** — sticky scroll with atmosphere crossfade

---

#### Section 5: THE PROOF — "The Evidence"

```
┌─────────────────────────────────────────────────────────────────────┐
│  ░░ darker band (#161C19) ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                                     │
│                        10x                                          │
│                   (gold, Days One, counts up on scroll)             │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────┐       │
│  │  Company A    │  "Revenue grew"     │  3.2x  ▲          │       │
│  ├──────────────────────────────────────────────────────────┤       │
│  │  Company B    │  "Costs reduced"    │  60%   ▼          │       │
│  ├──────────────────────────────────────────────────────────┤       │
│  │  Company C    │  "Leads increased"  │  5x    ▲          │       │
│  └──────────────────────────────────────────────────────────┘       │
│                                                                     │
│  gradient headers, gold underline, delta arrows                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Background:** #161C19 (darker band — creates visual rhythm break from previous sections)
**Hero number:** "10x" — Days One, clamp(2.5rem, 7vw, 6rem), gold (#f0b429) — this is the 2nd of max 2 gold moments. Counter animates 0→10 on viewport entry, 1.5s easeOut, using requestAnimationFrame.
**Data:** Table rows (NOT card grids) with gradient header, gold underline on th
**Table content:** 3 case study rows:
- Company A | "Revenue grew" | 3.2x ▲ (teal arrow)
- Company B | "Costs reduced" | 60% ▼ (teal arrow — positive reduction)
- Company C | "Leads increased" | 5x ▲ (teal arrow)
**Delta arrows:** Teal for all positive outcomes — NOT color-only, always paired with directional arrow
**Animation:** Table rows stagger in (100ms each) after counter completes

---

#### Section 6: THE ARCHITECTS — "The Faces"

```
┌─────────────────────────────────────────────────────────────────────┐
│  THE ARCHITECTS                                                     │
│                                                                     │
│   ┌─────── 50% ─────────────┐  ┌─────── 50% ─────────────┐       │
│   │   ┌──────────┐           │  │   ┌──────────┐          │       │
│   │   │  120px   │           │  │   │  120px   │          │       │
│   │   │  avatar  │           │  │   │  avatar  │          │       │
│   │   └──────────┘           │  │   └──────────┘          │       │
│   │                          │  │                          │       │
│   │  DAVE BENROUZ            │  │  RAMTIN                  │       │
│   │  Co-Founder              │  │  Co-Founder              │       │
│   │                          │  │                          │       │
│   └──────────────────────────┘  └──────────────────────────┘       │
│                                                                     │
│   Team leads (72px avatars):                                        │
│   ┌────┐  ┌────┐  ┌────┐  ┌────┐                                  │
│   │ TL │  │ TL │  │ TL │  │ TL │                                  │
│   └────┘  └────┘  └────┘  └────┘                                  │
│   Name     Name     Name     Name                                   │
│   Role     Role     Role     Role                                   │
│                                                                     │
│   Supporting staff (48px avatars):                                   │
│   ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐  │
│   └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘    │
└─────────────────────────────────────────────────────────────────────┘
```

**Background:** #0A0C0B with subtle warm glow
**Co-Founders:** Dave Benrouz + Ramtin — EQUAL prominence, both 120px avatars, side by side in 50/50 layout. Both titled "Co-Founder". This is the ONE place a 50/50 split is allowed — two co-founders deserve equal weight.
**Hierarchy through SIZE:**
- Co-Founders = 120px avatar (Dave + Ramtin)
- Team leads = 72px avatar
- Supporting staff = 48px avatar
**Names:** Days One, 1rem, #FFFFFF
**Roles:** Inter 400, 0.85rem, rgba(255,255,255,0.60)
**No card grids.** Just faces + names + roles. Clean. Human.
**Hover:** Subtle scale(1.05) on avatars, name becomes #FFFFFF from #E8E8E8
**Total team:** 16 people (from DeltaX team records)
**Mobile:** Co-founders stack vertically (still large). Team leads 2-column. Supporting 3-column.

---

#### Section 7: YOUR PATH — "The Timeline"

```
┌─────────────────────────────────────────────────────────────────────┐
│  ▓▓▓▓▓▓ deep teal band (#0D3535) — palette break ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│                                                                     │
│  YOUR PATH                                                          │
│                                                                     │
│        01                                                           │
│        │   JOIN THE WAITLIST                                        │
│        │   Enter your email. Get priority access.                   │
│        │                                                            │
│        02                                                           │
│        │   GET YOUR DIAGNOSTIC                                      │
│        │   We map your gaps, opportunities, quick wins.             │
│        │                                                            │
│        03                                                           │
│            DEPLOY THE SYSTEM                                        │
│            CoreX → CodeX + ScaleX + StyleX → Results.               │
│                                                                     │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
└─────────────────────────────────────────────────────────────────────┘
```

**Background:** #0D3535 — the ONLY section that breaks the dark palette. Deep teal full-bleed band. Instant visual relief after 6 dark sections.
**Section label:** "YOUR PATH" — Days One, #FFFFFF
**Numbers:** Days One, clamp(2rem, 4vw, 3.5rem), #1A9BBF teal
**Step titles:** Days One, 1.2rem, #FFFFFF
**Step descriptions:** Inter 400, 1rem, #E8E8E8
**Vertical line:** 1px solid rgba(255,255,255,0.15), connecting steps
**Animation:** Steps reveal one by one as you scroll (staggered 150ms)
**Mobile:** Same vertical timeline, works naturally

---

#### Section 8: FINAL CTA — "The Close"

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                    ╱╲                                                │
│                   ╱  ╲                                               │
│                  ╱ ΔX ╲     (80x67px, no glow — quiet)              │
│                 ╱______╲                                             │
│                                                                     │
│           YOU'VE SEEN THE SYSTEM.                                    │
│           JOIN THE WAITLIST.                                         │
│                                                                     │
│           [email@__________] [JOIN ▸]                                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Background:** #0A0C0B. No atmospheric glow. Quiet. Restraint.
**Logo:** 80x67px ΔX mark, static, no animation. Confident stillness.
**Headline:** "YOU'VE SEEN THE SYSTEM. JOIN THE WAITLIST." — Days One, clamp(1.6rem, 3.5vw, 2.6rem), #FFFFFF, centered
**Form:** Same WaitlistForm component as hero. Email input + teal pill button.
**Feel:** The closing argument. No noise. Just the ask.

---

#### FOOTER

```
┌─────────────────────────────────────────────────────────────────────┐
│  ΔX (35px)    Services       Company       Legal        Social     │
│               CoreX          About         Privacy      icons      │
│               CodeX          Contact       Terms                   │
│               ScaleX                                               │
│               StyleX                                               │
│  ─────────────────────────────────────────────────────────────────  │
│  © 2026 DeltaX. All rights reserved.                                │
└─────────────────────────────────────────────────────────────────────┘
```

**Background:** #161C19 (darker band)
**Layout:** 4-column grid desktop, 2-column tablet, accordion mobile
**Logo:** 35x29px ΔX mark, white
**Links:** Inter 400, 14px, rgba(255,255,255,0.60) → #FFFFFF on hover
**Copyright:** Inter 300, 12px, rgba(255,255,255,0.35)
**Only links to live pages.** No gold. No glow. Pure utility.

---

### HOME PAGE — Visual Rhythm Summary

```
Section      Background       Accent          Mood
──────────────────────────────────────────────────────────
Hero         #0A0C0B + glow   Teal            Grand entrance
Problem      #161C19 split    Red→Teal        Tension → resolution
System       #0A0C0B          Multi-accent    Flow, connection
Engine       #0A0C0B sticky   Teal→Grey→Red→Blue  Four worlds morphing
Proof        #161C19 band     Gold            Evidence, authority
Architects   #0A0C0B          Neutral         Human, grounded
Path         #0D3535 break    Teal            Hope, clarity
CTA          #0A0C0B          Teal            Quiet confidence
Footer       #161C19          Dim             Utility
```

The rhythm: dark → darker → dark → dark(sticky) → darker → dark → TEAL BREAK → dark → darker

No two consecutive sections feel the same.

---

### ABOUT PAGE — 4 Sections

#### AboutHero
- **Headline:** "THE SYSTEM BEHIND THE SYSTEM" — Days One, centered
- **Subtext:** What DeltaX is and why it exists — Inter 400, #E8E8E8
- **Background:** #0A0C0B with atmospheric teal glow (same vibe as home hero)

#### Story
- **Background:** #161C19 band
- **Layout:** Full-width editorial text block, asymmetric
- **Content:** How Dave and Ramtin founded DeltaX. The problem they kept seeing. Why they built the system.
- **Key quote:** Highlight box with left-accent (3px teal border)
- **Copy mentions:** "Founded by Dave Benrouz and Ramtin — based in Bali. Dave's MSc in Computer Mathematics from Igor Sikorsky KPI. They kept seeing the same pattern: companies spending six figures on agencies that never shared a single Slack channel..."

#### TeamGrid
- **Background:** #0A0C0B
- **Layout:** Same hierarchy as Section 6 but full version — all 16 people
- **Co-Founders (120px):** Dave Benrouz + Ramtin — top, side by side
- **Team leads (72px):** 4-column grid below founders
- **Supporting (48px):** responsive grid below leads
- **Anchor:** #team (linked from navbar)
- **Staggered reveal:** avatars fade in with 60ms stagger

#### AboutCTA
- **Same as Final CTA on home** — ΔX logo + waitlist form, centered, quiet

---

### CONTACT PAGE — 2 Sections

#### ContactHero
- **Headline:** "LET'S TALK" — Days One, centered, #FFFFFF
- **Subtext:** Inter 400, #E8E8E8
- **Background:** #0A0C0B, minimal

#### ContactForm
- **Background:** #161C19 band
- **Fields:**
  - Name (required) — Inter, 16px, #1C2320 bg input, teal focus ring
  - Email (required) — same styling
  - Company (optional) — same styling, "(optional)" label in dim text
  - Challenge (textarea, required) — 500 char limit with live counter, same styling
- **Hidden:** Honeypot spam field (display: none)
- **Submit:** Teal pill button "SEND MESSAGE"
- **States:** Default → Loading (spinner) → Success ("Message sent. We'll reply within 24 hours.") → Error ("Something went wrong. Try again.") → Rate limited ("Too many requests. Try again in an hour.")
- **Rate limit:** 3 submissions per hour per IP
- **Backend:** POST /api/contact → Supabase contacts table → Resend notification email

---

### LEGAL PAGES — Privacy + Terms

- **Background:** #0A0C0B
- **Layout:** max-width 720px centered
- **Heading:** Days One, H1 at top
- **Subheadings:** Days One, H2 per section, H3 for sub-sections
- **Body:** Inter 400, 16px, #E8E8E8, line-height 1.6
- **Content:** Real legal text (not placeholder)

---

### 404 PAGE

- **Background:** #0A0C0B, centered vertically
- **Logo:** ΔX mark, 80px, centered
- **Message:** "This page doesn't exist yet." — Inter 400, #E8E8E8
- **Links:** 3 text links (Home, About, Contact) — Inter 400, teal underline on hover
- **Clean. Quiet. No drama.**

---

## 9. WAITLIST & CONTACT SYSTEM

### WaitlistForm Component (reused in Hero, Final CTA, About CTA, Navbar)
- **Input:** Email field, Inter 16px, #1C2320 bg, 1px border rgba(255,255,255,0.10), teal focus ring
- **Button:** "JOIN WAITLIST" teal pill (#1A9BBF bg, #FFFFFF text, 12px radius)
- **States:**
  - Default: input + button
  - Loading: button shows spinner, disabled
  - Success: "You're on the list. Check your email." (green #22C55E)
  - Error: "Something went wrong. Try again." (red #EF4444)
  - Duplicate: "You're already on the list." (teal, friendly)

### Backend Flow
1. User enters email → client-side validation
2. POST /api/waitlist → server validates
3. Check Supabase for duplicate → if exists, return duplicate state
4. Insert into Supabase `waitlist` table
5. Send welcome email via Resend
6. Return success

### Database Tables (Supabase)
```sql
-- Waitlist
CREATE TABLE waitlist (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Contacts
CREATE TABLE contacts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  company text,
  challenge text NOT NULL,
  created_at timestamptz DEFAULT now()
);
```

### Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL=https://nbkbcntkqkmlpuwulmub.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[shared securely]
SUPABASE_SERVICE_ROLE_KEY=[shared securely]
RESEND_API_KEY=[shared securely]
NEXT_PUBLIC_SITE_URL=https://thesx.co
```

---

## 10. SEO & METADATA

### Per-Page Titles
- Home: "DeltaX — One System. Four Engines. Total Transformation."
- About: "About DeltaX — The System Behind The System"
- Contact: "Contact DeltaX — Let's Talk"
- Privacy: "Privacy Policy — DeltaX"
- Terms: "Terms of Service — DeltaX"

### OG Image
- Auto-generated via Vercel OG (/api/og)
- Dark background, ΔX logo, page title
- 1200x630px

### Structured Data (JSON-LD)
- Organization (all pages)
- WebSite (home)
- BreadcrumbList (inner pages)
- FAQPage (if FAQ added)

### Accessibility Baseline
- Skip-to-content link
- Semantic HTML (header, nav, main, section, footer)
- Alt text on all meaningful images
- Empty alt on decorative elements
- Heading hierarchy (single H1, H2 per section, H3 sub)
- Focus-visible rings (teal, 2px offset)
- 44x44px minimum touch targets
- Color contrast AAA
- aria-expanded, aria-current, aria-live where needed
- Keyboard navigation throughout
- prefers-reduced-motion respected everywhere

---

## 11. RESPONSIVE STRATEGY

### Breakpoints
```
base:  0px      (mobile-first)
sm:    640px
md:    768px    (tablet)
lg:    1024px   (laptop)
xl:    1440px   (desktop)
2xl:   1920px   (large desktop)
```

### Key Responsive Changes
| Component | Desktop | Mobile |
|---|---|---|
| Hero | 60/40 split | Stacked, logo on top |
| Problem | Diagonal split | Stacked, fade transition |
| System | SVG flow diagram | Vertical stack, simple lines |
| Engine | Sticky scroll crossfade | Static sections, no sticky |
| Proof | Horizontal table | Stat on top, table below |
| Architects | 50/50 founders + grid | Stacked founders, 2-col leads |
| Path | Vertical timeline | Same (works naturally) |
| Footer | 4-column | Accordion sections |
| Navbar | Full links + CTA | Hamburger → overlay |

---

## 12. BUILD ORDER & DEPENDENCIES

### Phase 0: Foundation (1 dev, ~1 day)
- Next.js 14 init with App Router, TypeScript
- tailwind.config.ts with all color tokens from Section 3
- src/globals.css (CSS variables, @keyframes, grid texture, atmosphere classes)
- src/app/layout.tsx (root layout, MotionConfig, fonts, metadata)
- DeltaXLogo component
- ScrollReveal component
- Folder structure creation

### Phase 1: Shared Components (2-3 devs parallel, ~2 days)
- Navbar (with Services dropdown, scroll behavior, mobile hamburger)
- Footer (4-column, accordion mobile)
- Button (teal pill primary, ghost secondary, sizes)
- Input (email field, focus ring, error state)
- WaitlistForm (input + button + states)
- Card (generic wrapper)
- SectionWrapper (background + atmosphere + spacing)

### Phase 2: Home Sections (6-7 devs parallel, ~5 days)
- Section 1: Hero
- Section 2: TheProblem (static first, then animation) — HARD
- Section 3: TheSystem (static first, then SVG animation) — HARD
- Section 4: TheEngine (4 pillars + assembly + atmosphere crossfade) — HARDEST
- Section 5: TheProof
- Section 6: TheArchitects
- Section 7: YourPath
- Section 8: FinalCTA

### Phase 3: Backend (1 dev, parallel with Phase 1-2, ~2 days)
- Supabase client setup
- Resend client setup
- /api/waitlist route
- /api/contact route
- /api/og route (OG image generation)
- Email templates (welcome + contact notification)

### Phase 4: Secondary Pages (2 devs, after Phase 1, ~2 days)
- About (4 sections)
- Contact (2 sections)
- Privacy
- Terms
- 404

### Phase 5: Integration (1-2 devs, ~2 days)
- Assemble home page.tsx (import all 8 sections)
- Assemble all other page files
- Connect forms to APIs
- Smooth scroll + anchor linking
- QA pass

### Phase 6: Production (1-2 devs, ~2 days)
- SEO (metadata, structured data, sitemap, robots.txt)
- Analytics events
- Lighthouse audit (target 90+)
- Deploy to Vercel

### Dependency Graph
```
Phase 0 (Foundation)
    ├→ Phase 1 (Shared) ──→ Phase 2 (Home) ──┐
    │                                         ├→ Phase 5 (Integration) → Phase 6 (Production)
    ├→ Phase 3 (Backend) ──────────────────────┘
    └→ Phase 4 (Secondary Pages)
```

### Timeline
- 1 developer: 14-16 days
- 2 developers: 8-10 days
- Full parallel team: 5-7 days

### 3 Hardest Components (Assign to strongest devs)
1. **TheSystem** — SVG path animation with scroll-driven stroke drawing
2. **TheEngine** — Sticky scroll with atmosphere crossfade between 4 pillars
3. **TheProblem** — Scroll-linked dissolve with diagonal divider

---

## 13. SECTION IDs (For Smooth Scroll & Anchors)

### Home
```
#hero, #problem, #system, #engine, #proof, #architects, #path, #cta
```

### Engine Sub-Anchors (linked from Services dropdown)
```
#core, #code, #scale, #style
```

### About
```
#about-hero, #story, #team, #about-cta
```

### Contact
```
#contact-hero, #contact-form
```

---

## 14. QA CHECKLIST (Before Ship)

### Visual
- [ ] All copy matches spec exactly
- [ ] Colors match hex values from Section 3
- [ ] Typography matches scale from Section 4
- [ ] Spacing feels generous (96-128px between sections)
- [ ] Responsive at 375px, 390px, 768px, 1024px, 1440px, 1920px
- [ ] No uniform card grids anywhere
- [ ] No dashboard aesthetic
- [ ] Atmosphere gradients visible (not invisible rgba)

### Code
- [ ] TypeScript strict, no `any`
- [ ] Named exports only
- [ ] Path aliases used (@/)
- [ ] No console.log in production
- [ ] "use client" only where needed
- [ ] Components in correct directories

### Animation
- [ ] Scroll reveals work on all sections
- [ ] Counter counts up on viewport entry
- [ ] Engine atmosphere crossfades smoothly
- [ ] Problem diagonal scroll-dissolve works
- [ ] System SVG paths animate on scroll
- [ ] Logo breathing glow works
- [ ] reducedMotion fallback on everything
- [ ] No janky scroll or layout shift

### Accessibility
- [ ] Skip-to-content link works
- [ ] Tab order follows visual flow
- [ ] Focus rings visible on all interactive elements
- [ ] All images have appropriate alt text
- [ ] Heading hierarchy correct (one H1 per page)
- [ ] Touch targets 44x44px minimum
- [ ] Color contrast passes AAA
- [ ] Screen reader can navigate all content

### Performance
- [ ] Lighthouse Performance 90+
- [ ] Lighthouse Accessibility 95+
- [ ] Lighthouse SEO 95+
- [ ] No layout shift on font load
- [ ] Sections 5-8 lazy loaded
- [ ] Images optimized (WebP/AVIF via Next.js Image)

### Functionality
- [ ] Waitlist form submits and saves to Supabase
- [ ] Welcome email sends via Resend
- [ ] Contact form submits and saves
- [ ] Contact notification email sends
- [ ] Duplicate email handled gracefully
- [ ] Rate limiting works (3/hour)
- [ ] Smooth scroll to section anchors works
- [ ] Services dropdown links to engine sub-sections
- [ ] All page navigation works
- [ ] 404 page renders for unknown routes

---

## 15. KEY FILES REFERENCE

### Knowledge Base (Read-Only — Don't Modify)
```
/Users/space/Desktop/DAVE/Projects/DeltaX-Landing/Knowledge-Base/
├── SPEC.md        — 1,521 lines, full product spec
├── WIREFRAMES.md  — ASCII wireframes for all pages
├── RULES.md       — 1,085 lines, team coordination + prompt rules
└── ENV-SETUP.md   — Environment variables + Supabase setup
```

### MATRIX Intelligence (Read-Only — Design Reference)
```
/Users/space/Desktop/DAVE/Projects/MATRIX/Project-X/
├── Vision/v2/vision.md   — Full design bible from 32 references
├── tokens/tokens.css     — Design tokens (for Project-X, NOT DeltaX — use as reference only)
├── comparison.md         — Cross-reference scoring matrix
├── OUTPUT.md             — Final deliverable summary
└── moodboard.html        — Interactive visual moodboard
```

### Brand DNA
```
/Users/space/Desktop/DAVE/Projects/Leo-Ultimate/02_Brain/Brands/delta-x/delta-x.md
```

### Codebase (Build Here)
```
/Users/space/Desktop/DAVE/Projects/DeltaX-Landing/Codebase/
```

---

*This blueprint contains everything needed to generate zero-question prompts for every component. Each section has exact colors, typography, layout, animation, responsive behavior, and content. No guessing required.*
