# DeltaX Website Design V2 — thesx.co

```
██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝
██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝
██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗
██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗
╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝

WEBSITE DESIGN V2 — THE DEFINITIVE DOCUMENT
────────────────────────────────────────────
```

**Document ID:** WEB-V2-20260323
**Domain:** thesx.co
**Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion
**Pages:** Home, About, Contact, Privacy, Terms, 404
**Design Lead:** Leonardo (Creative Council Head)
**Research Base:** 70+ sites across 3 MATRIX research sets

**Run 1 Result:** 348 issues, 23 critical, rejected as "generic" and "AI-looking."
**Run 2 Mandate:** Every design decision sourced from research. Zero generic patterns. Zero card grids.

---

## SECTION 1: DESIGN SYSTEM

### 1.1 Color Tokens

```
BACKGROUNDS
────────────────────────────────────────────
Token                Hex        Usage
--bg-primary         #0A0A0B    Page base
--bg-secondary       #111116    Elevated surfaces, alternating bands
--bg-tertiary        #1A1A22    Inputs, nested surfaces
--bg-elevated        #222230    Hover states, active elements
--bg-deep            #080809    Footer

PILLAR COLORS (base / bright)
────────────────────────────────────────────
--core-base          #006381    CoreXs muted
--core-bright        #1A9BBF    CoreXs vibrant
--code-base          #5A5A5A    CodeXs muted
--code-bright        #8A8A8A    CodeXs vibrant
--scale-base         #9A1515    ScaleXs muted
--scale-bright       #D94040    ScaleXs vibrant
--style-base         #121CDB    StyleXs muted
--style-bright       #6E75FF    StyleXs vibrant
--deltax-base        #15339A    DeltaX brand muted
--deltax-bright      #4466CC    DeltaX brand vibrant

TEXT
────────────────────────────────────────────
--text-hero          #FFFFFF    Headlines only
--text-body          #E8E8E8    Body text (NEVER pure white for body)
--text-secondary     #999999    Labels, descriptions
--text-muted         #666666    Placeholders, disabled

ACCENT
────────────────────────────────────────────
--accent-gold        #f0b429    CTAs ONLY (single-accent discipline)
--accent-gold-hover  #ffca4a    CTA hover

STATUS
────────────────────────────────────────────
--status-green       #22C55E    Success
--status-red         #EF4444    Error
--status-yellow      #FACC15    Warning
--status-blue        #60A5FA    Info
```

**WHAT CHANGED FROM RUN 1:**

| Token | Run 1 | Run 2 | Why |
|-------|-------|-------|-----|
| --bg-secondary | #161C19 (green-tinted) | #111116 (neutral) | Linear (#0A0A0B base): pure neutral darks, no color tint in backgrounds. Green tint made it look like a dashboard. |
| --bg-tertiary | #1C2320 (green-tinted) | #1A1A22 (neutral) | Same. All backgrounds are now neutral — color comes from pillar glows, not surface tints. |
| --bg-deep | (didn't exist) | #080809 | Railway: footer darker than page creates visual grounding. Vercel: same pattern. |
| Accent usage | Gold scattered (stats, labels, borders) | Gold on CTAs ONLY | Mercury: purple appears ONLY on conversion touchpoints. Single-accent discipline makes every gold element a focal point. |

**COLOR RULES:**
- Pillar colors appear ONLY in their own section (glows, borders, labels)
- Gold appears ONLY on CTA buttons and critical links
- Background depth via lightness steps (not shadows) — Linear pattern
- No gradients on backgrounds (Dave's rejection: "flat single background")
- No glassmorphism on cards (Dave's anti-pattern list)
- Glassmorphism ONLY on navbar-on-scroll

---

### 1.2 Typography

```
FONT FAMILIES
────────────────────────────────────────────
--font-display       'Days One', sans-serif       Headlines, hero
--font-body          'Inter', sans-serif           Body, UI
--font-mono          'JetBrains Mono', monospace   Stats, data, overlines

TYPE SCALE (Major Third — 1.25 ratio)
────────────────────────────────────────────
Level          Size                        Weight   Font      Usage
display        clamp(48px, 6vw, 72px)      400      Days One  Hero headline
h1             48px                         400      Days One  Page headlines
h2             36px                         400      Days One  Section headlines
h3             28px                         400      Days One  Subsection heads
h4             24px                         400      Days One  Block titles
body-lg        20px                         400      Inter     Hero subtext
body           16px                         400      Inter     All body text
body-sm        14px                         500      Inter     Secondary info
label          12px                         500      Mono      Overlines, tags
stat           clamp(48px, 8vw, 72px)       400      Mono      Large numbers

LETTER SPACING
────────────────────────────────────────────
Display/H1:    -0.03em    (tightened — Linear, ElevenLabs)
H2/H3/H4:     -0.02em    (tightened — Plaid, Vercel)
Body:           0          (default)
Uppercase:      0.08em    (widened — tracking for readability)
Mono stats:    -0.02em    (tightened for impact)

LINE HEIGHT
────────────────────────────────────────────
Display:       1.1
Headings:      1.2
Body:          1.6        (universal readability — Plaid, all top refs)
Body-sm:       1.5

RULES
────────────────────────────────────────────
- text-wrap: balance on ALL headlines (Linear: prevents orphan words)
- font-variant-numeric: tabular-nums on ALL numbers (Plaid, Linear)
- -webkit-font-smoothing: antialiased globally
- Period-terminated headlines ALWAYS (premium marker — Busicons research: 8 markers of premium cohort)
- Max font weight: 600 (semibold) — no bold/700 (Linear: light weights on dark prevent heaviness)
- Body text NEVER below 16px (Groq's 14px flagged as WCAG violation across all research sets)
- Max body width: 640px / ~65ch (reading geometry)
```

**WHAT CHANGED FROM RUN 1:**

| Aspect | Run 1 | Run 2 | Why |
|--------|-------|-------|-----|
| Mono font | None | JetBrains Mono | 18/61 Busicons refs use mono for data — creates "serious tech" credibility. Missing in Run 1 was a gap. |
| Letter spacing | Default (0) | -0.03em display, -0.02em headings | Linear + ElevenLabs: tight tracking on display type is universal in top-tier tech sites. |
| text-wrap | Not used | balance on all headlines | Linear: prevents orphan words at all breakpoints. |
| Max weight | 700 (bold used) | 600 (semibold max) | Linear: no bold on dark backgrounds — prevents "heavy, oppressive" feeling. |
| Period endings | Not consistent | Mandatory | Busicons research: period-terminated headlines are one of 8 markers separating premium from generic. |
| tabular-nums | Not used | All numbers | Plaid + Linear: ensures number alignment in tables and stats. |

---

### 1.3 Spacing

```
BASE UNIT: 8px
────────────────────────────────────────────
--space-1        4px
--space-2        8px
--space-3        12px
--space-4        16px
--space-5        20px
--space-6        24px
--space-8        32px
--space-10       40px
--space-12       48px
--space-16       64px
--space-20       80px
--space-24       96px
--space-32       128px

SECTION PADDING
────────────────────────────────────────────
Mobile:          96px top/bottom
Desktop:         128px top/bottom
(Plaid uses 120-160px — premium confidence signal)

CONTAINER
────────────────────────────────────────────
Max width:       1200px (Linear, Vercel standard)
Padding:         24px (mobile: 16px)

GAPS
────────────────────────────────────────────
--gap-tight      8px     Within components
--gap-normal     16px    Between related items
--gap-loose      24px    Between groups
--gap-section    48px    Between major blocks
```

**WHAT CHANGED FROM RUN 1:**
- Section padding: ~80px → 128px (Plaid: extreme whitespace = confidence signal)
- Added systematic gap tokens (was ad-hoc inline values in Run 1)
- Container max unchanged at 1200px (validated by Linear, Vercel)

---

### 1.4 Animation System

```
DURATIONS
────────────────────────────────────────────
--duration-micro       150ms     Hover, focus, button press
--duration-standard    300ms     Tabs, accordions, state changes
--duration-reveal      600ms     Scroll-triggered section reveals
--duration-story       1200ms    Counters, line draws, ambient

EASINGS
────────────────────────────────────────────
--ease-reveal    cubic-bezier(0.16, 1, 0.3, 1)      Scroll reveals
--ease-micro     cubic-bezier(0.25, 0.1, 0.25, 1)   Hover/focus
--ease-counter   cubic-bezier(0.33, 1, 0.68, 1)     Counter ramp-up

SCROLL REVEAL DEFAULTS
────────────────────────────────────────────
Transform:       translateY(24px) → 0
Opacity:         0 → 1
Duration:        600ms
Easing:          --ease-reveal
Stagger:         80ms between siblings
Trigger:         IntersectionObserver, threshold 0.2

RULES
────────────────────────────────────────────
- Hardware-gate complex animations:
  if (navigator.hardwareConcurrency <= 4) → disable ambient effects
  (Linear: stores result in localStorage)
- GPU-only properties: transform, opacity
  NEVER animate: width, height, margin, padding, top, left
- prefers-reduced-motion: reduce → ALL motion disabled, content visible immediately
- Max 3 concurrent animations per viewport
- Framer Motion ONLY (already in stack) — no GSAP, no anime.js
- No scroll-jacking, no horizontal scroll
- No 300vh sticky containers (was "fragile" in Run 1 codebase audit)
```

**WHAT CHANGED FROM RUN 1:**

| Aspect | Run 1 | Run 2 | Why |
|--------|-------|-------|-----|
| Animation approach | 300vh sticky scroll + manual IntersectionObserver + 3x code duplication for reduced-motion | Framer Motion ScrollReveal + CSS only for micro | Linear: CSS-only for micro-interactions. Run 1's TheProblem.tsx was 503 lines with 3x duplication. |
| Hardware gating | None | navigator.hardwareConcurrency check | Linear: gates complex animations. Prevents jank on low-end devices. |
| Reduced motion | 3x duplicated code (static/animated/mobile) | Single code path, motion disabled via Framer Motion reducedMotion="user" | Already in codebase's layout.tsx but components didn't use it. |
| Sticky scroll | 300vh container with hardcoded scroll ranges [0.25, 0.30, 0.47, 0.53] | Removed entirely | Codebase audit: "fragile scroll-position coupling, split desktop/mobile code." |

---

### 1.5 Atmosphere Rules

```
GRID TEXTURE (always present)
────────────────────────────────────────────
Size:            48px
Color:           rgba(255, 255, 255, 0.03)
Implementation:  background-image:
                   linear-gradient(var(--grid-color) 1px, transparent 1px),
                   linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
                 background-size: 48px 48px;
Mask:            radial-gradient(ellipse at center, black 50%, transparent 80%)
                 (Dub: soft edge fade — grid doesn't reach edges)

VIGNETTE (always present)
────────────────────────────────────────────
Implementation:  radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)
Position:        Fixed, covers viewport

SECTION GLOWS (one per section, uses pillar color)
────────────────────────────────────────────
--glow-core      radial-gradient(ellipse at 50% 50%, rgba(0,99,129,0.08) 0%, transparent 60%)
--glow-code      radial-gradient(ellipse at 50% 50%, rgba(90,90,90,0.06) 0%, transparent 60%)
--glow-scale     radial-gradient(ellipse at 50% 50%, rgba(154,21,21,0.06) 0%, transparent 60%)
--glow-style     radial-gradient(ellipse at 50% 50%, rgba(18,28,219,0.06) 0%, transparent 60%)
--glow-deltax    radial-gradient(ellipse at 50% 40%, rgba(21,51,154,0.12) 0%, transparent 60%)
--glow-gold      radial-gradient(ellipse at 50% 50%, rgba(240,180,41,0.06) 0%, transparent 60%)

GLOW OPACITY RULES
────────────────────────────────────────────
Minimum:         0.06 (below this is invisible — Dave's v6 rejection)
Maximum:         0.12 (above this overwhelms content)

WARM/COOL ALTERNATION
────────────────────────────────────────────
Section 1 (Hero):       Navy glow (cool)
Section 2 (Problem):    Red + Teal split (warm/cool)
Section 3 (System):     Active pillar glow (changes)
Section 4 (Proof):      Gold glow (warm)
Section 5 (Architects): Multi-pillar (neutral)
Section 6 (Path):       Gold glow (warm)
Section 7 (CTA):        Navy glow (cool — bookend with hero)

ABSOLUTE PROHIBITIONS
────────────────────────────────────────────
- NO SVG noise/grain overlays (caused v11 z-index text overlap crisis)
- NO glassmorphism on cards (Dave's anti-pattern #8)
- NO dot grids as primary texture (Dave's anti-pattern #8)
- NO gradient borders (Dave's anti-pattern #8)
- Backgrounds must NEVER be flat single color (Dave's anti-pattern #4)
```

**WHAT CHANGED FROM RUN 1:**

| Aspect | Run 1 | Run 2 | Why |
|--------|-------|-------|-----|
| Grid texture | Present but optional | Mandatory on every section | Dave's feedback: "subtle grid adds life — not flat voids." |
| Glow minimum | No minimum (rgba 0.03-0.05 used) | 0.06 minimum | Dave's v6 rejection: "the background on other pages is black" — invisible glows. |
| SVG noise | Used in v10-v11 | BANNED | v11 score card: noise overlay at z-index:1 rendered ON TOP of text in PDF. Nuclear fix required. |
| Warm/cool alternation | Not systematic | Explicit per-section map | Dave's feedback: "warm/cool temperature alternation across pages." |
| Grid mask | Hard edges | Soft radial fade (Dub pattern) | Dub: `mask-image: radial-gradient(ellipse at center, black 40%, transparent 70%)` — grid softly disappears at edges. |

---

### 1.6 Component Design Rules

```
BUTTONS
────────────────────────────────────────────
Primary:    bg: --accent-gold        text: --bg-primary     rounded-full (pill)
            font: Inter 500          hover: --accent-gold-hover
Secondary:  bg: transparent          border: 1px --text-muted  rounded-full (pill)
            text: --text-body        hover: border --text-body
Ghost:      bg: transparent          text: --text-secondary
            hover: text --text-body  no border

Sizes:
  Large  (hero/CTA):     h-[52px]  px-8  text-[16px]
  Medium (sections):     h-[44px]  px-6  text-[15px]
  Small  (nav/inline):   h-[36px]  px-5  text-[14px]
  (Brokerage research: pill CTAs dominant in top references)
  (Robinhood: border-radius 9999px, impossible to miss)

INPUTS
────────────────────────────────────────────
Background:  --bg-tertiary
Border:      1px --bg-elevated
Radius:      8px (rounded-lg)
Focus:       border --accent-gold
Text:        --text-body
Placeholder: --text-muted
Height:      44px
Padding:     0 16px

TAGS / LABELS
────────────────────────────────────────────
NO backgrounds. NO borders. NO boxes.
Just text: font-mono, text-label size, uppercase, tracking 0.08em, --text-muted
Pillar bright color for section-specific labels only.
(Dave's rule: "can be not in a box and just in gray")

HIGHLIGHT BOXES
────────────────────────────────────────────
3px left-border ONLY (pillar color at 60% opacity)
padding-left: 16px
background: transparent
NEVER full border. NEVER background color.
(Dave's rule: non-negotiable)

DATA TABLES
────────────────────────────────────────────
Header:      font-mono, text-label, uppercase, --text-muted
Row:         Inter 400, text-body, border-bottom 1px --bg-elevated
Hover:       bg --bg-tertiary
Numbers:     font-mono, tabular-nums, --text-hero
NEVER card grids. ALWAYS table rows.
(Dave's rule: rejected 4 times. "Cards create isolation. Rows create context.")

SECTION OVERLINES
────────────────────────────────────────────
Format:      "[NN] SECTION NAME"
Font:        JetBrains Mono, 12px, uppercase
Color:       --text-muted (#666666)
Tracking:    0.12em
Margin:      0 0 16px 0
(Attio: numbered sections [01]-[04] create document-like progression)

DIVIDERS
────────────────────────────────────────────
Color:       --bg-elevated (#222230)
Width:       1px
NEVER --bg-secondary (too subtle on --bg-primary)
```

---

## SECTION 2: LOGO MAP

### 2.1 Available Logos

| # | File | Size | Color | On Dark BG? | Processing? |
|---|------|------|-------|-------------|-------------|
| 1 | DeltaX/deltax-white.png | 2429x1705 | White X icon, transparent bg | YES — primary | None needed |
| 2 | DeltaX/deltax-black.png | 2429x1705 | Black X icon, transparent bg | NO — invisible | For OG/print only |
| 3 | CodeXs/codexs-light.png | 202x202 | Light circle, dark CX mono | YES — works | Needs hi-res (512px+) |
| 4 | CodeXs/codexs-dark.png | 202x202 | Dark circle, white CX mono | NO — blends | Not used on site |
| 5 | CoreXS/corexs-teal.png | 354x328 | Teal triangle, white center | YES — strong | Adequate |
| 6 | ScaleXS/scalexs-red.png | 310x287 | Dark red triangle, excess pad | BORDERLINE | Needs cropping |
| 7 | ScaleXS/scalexs-teal.png | 310x287 | Teal triangle, excess padding | CONFLICT | Not used (conflicts CoreXs) |
| 8 | ScaleXS/scalexs-black.png | 310x287 | Black triangle | NO — invisible | Not used |
| 9 | ScaleXS/scalexs-icon-black | 95x76 | Black triangle, tiny | NO — unusable | Not used |
| — | BrandXS/ | EMPTY | — | — | No logos exist |
| — | StyleXs/ | NO FOLDER | — | — | No logos exist |

### 2.2 Logo Placement Map

**deltax-white.png — THE PRIMARY LOGO**

```
NAVBAR (every page)                    HERO (Home)
┌────────────────────────┐             ┌──────────────────────┐
│ [X] DELTAX   nav...    │             │                      │
│  ↑                     │             │       [  X  ]        │
│  32px height           │             │      160px wide      │
│  left-aligned          │             │      centered        │
└────────────────────────┘             └──────────────────────┘

FINAL CTA (Home)                       FOOTER (every page)
┌──────────────────────┐               ┌──────────────────────┐
│       [X]            │               │ [X]  thesx.co        │
│    80px wide         │               │  ↑                   │
│    centered          │               │  24px height         │
│    opacity pulse     │               │  left in brand col   │
└──────────────────────┘               └──────────────────────┘

404 PAGE
┌──────────────────────┐
│       [X]            │
│    120px wide        │
│    centered          │
│    subtle pulse      │
└──────────────────────┘
```

**Pillar Logos — THE SYSTEM SECTION**

```
THE SYSTEM TAB ROW
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  [▲] CoreXs        [◉] CodeXs       [▼] ScaleXs    SX    │
│   ↑ corexs-teal     ↑ codexs-light   ↑ scalexs-red  ↑    │
│   28px               28px              28px       text     │
│                                                  Days One  │
│                                                  #6E75FF  │
└────────────────────────────────────────────────────────────┘

StyleXs has NO logo file — use "SX" text monogram in Days One,
rendered in --style-bright (#6E75FF), 28px, as inline element.
```

### 2.3 Processing Required Before Build

1. **codexs-light.png** — Re-export at 512x512 minimum (currently 202px, blurry on retina)
2. **scalexs-red.png** — Crop excess padding (triangle fills only ~50% of canvas)
3. **StyleXs** — No file exists. Use CSS text monogram "SX" in Days One + #6E75FF
4. **BrandXS** — Not a website section. No action needed.

---

## SECTION 3: PAGE-BY-PAGE DESIGN

---

### PAGE: HOME

---

#### HOME > NAVBAR

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  [X] DELTAX          Services ▾    About    Contact    [Start a Project]
│                                                         ↑ gold pill
│  height: 64px                                                    │
│  position: fixed                                                 │
│  z-index: 50                                                     │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘

SERVICES MEGA-MENU (on hover/click):
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  [▲] CoreXs                    [◉] CodeXs                        │
│  Strategy & Audit               Engineering & Build               │
│  We map before we build.        Two teams compete. Best code wins.│
│                                                                  │
│  [▼] ScaleXs                   SX  StyleXs                       │
│  Growth & Marketing             Design & Brand                    │
│  Pipelines that compound.       Impossible to ignore.             │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**COPY:** Logo + "DELTAX" wordmark (Days One, 16px, --text-hero, tracking 0.08em)
**CTA:** "Start a Project" — gold pill, size small (h-36px)
**LAYOUT:** Logo left, nav center, CTA right. 64px height.
**ATMOSPHERE:** Transparent on hero (bg: transparent). Glass on scroll (bg: rgba(10,10,11,0.85), backdrop-filter: blur(12px)). Transition: 300ms ease at scroll > 80px.
**ANIMATION:** Nav items fade-in 300ms stagger 50ms on page load. Glass transition 300ms.
**MOBILE:** Logo left (24px), hamburger right (no CTA visible — CTA moves inside mobile menu as first item). Mobile menu: full-screen overlay, bg --bg-primary, nav items 48px height each, CTA at top as gold pill full-width.

**CHANGED FROM RUN 1:** Added glassmorphic scroll behavior (Mercury pattern — was missing in Run 1). Services now has mega-menu showing all 4 pillars with descriptions (Vercel mega-menu pattern — Run 1 had simple dropdown).

**WHY:** Mercury: glassmorphic nav creates premium floating feel. Vercel: mega-menu with preview descriptions converts navigation into education.

---

#### HOME > SECTION 1: HERO

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│                    ·  ·  ·  ·  ·  ·  ·  ·                       │
│                  ·  ·  ·  ·  ·  ·  ·  ·  ·                      │
│                ·  ·  ·  ·  ·  ·  ·  ·  ·  ·   ← grid texture   │
│                                                                  │
│              ░░░░░░░░░░░░░░░░░░░░░░░░░░                          │
│             ░░░  navy glow behind logo  ░░░                       │
│              ░░░░░░░░░░░░░░░░░░░░░░░░░░                          │
│                                                                  │
│                        ██╗  ██╗                                  │
│                        ╚██╗██╔╝                                  │
│                         ╚███╔╝    ← deltax-white.png             │
│                         ██╔██╗      160px wide, centered         │
│                        ██╔╝ ██╗                                  │
│                        ╚═╝  ╚═╝                                  │
│                                                                  │
│                                                                  │
│            Four engines. One system.                             │
│            ↑ Days One, clamp(48px, 6vw, 64px)                    │
│              #FFFFFF, letter-spacing: -0.03em                    │
│              text-wrap: balance                                  │
│                                                                  │
│     Strategy, engineering, design, and growth —                  │
│     working as one machine to build businesses                   │
│     that don't depend on their founders.                         │
│     ↑ Inter 400, 20px, #E8E8E8                                   │
│       max-width: 600px, line-height: 1.6, centered               │
│                                                                  │
│                                                                  │
│       [  Start a Project  ]    [  See the System  ]              │
│        ↑ gold pill, large       ↑ ghost pill, large              │
│          h-52px, #f0b429          h-52px, border 1px #666        │
│          text: #0A0A0B            text: #E8E8E8                  │
│                                                                  │
│                                                                  │
│                         ˅                                        │
│                    scroll indicator                               │
│                    bounce animation                               │
│                                                                  │
│ ░░░░░░░░░░░░░░░░░░░ vignette darkens edges ░░░░░░░░░░░░░░░░░░░ │
└──────────────────────────────────────────────────────────────────┘
```

**COPY:**
- Headline: "Four engines. One system."
- Subtext: "Strategy, engineering, design, and growth — working as one machine to build businesses that don't depend on their founders."
- CTA 1: "Start a Project"
- CTA 2: "See the System" (scrolls to The System section)

**LAYOUT:** Centered vertical stack. 100vh. Everything vertically centered with flexbox.
**ATMOSPHERE:** --glow-deltax (navy at 12%) behind logo, radial position at 50% 40%. Grid texture with soft radial mask. Edge vignette.
**ANIMATION:** Logo fades in 800ms ease-reveal. Headline slides up from 24px + fades in, 600ms, delay 200ms. Subtext same, delay 400ms. CTAs same, delay 600ms. Grid fades in 1200ms. Scroll indicator appears at delay 1200ms with infinite bounce (translateY 0 → 8px → 0, 2s).
**LOGO:** deltax-white.png, 160px width, centered.
**MOBILE:** Logo 120px. Headline clamp to 40px. Subtext 18px. CTAs stack vertically, full-width, 12px gap. Scroll indicator hidden.

**CHANGED FROM RUN 1:** Run 1 had cursor-tracking teal glow + 60/40 asymmetric grid + rotating logo animation (60s continuous). V2 is centered, minimal, no gimmicks. Logo is static. Glow is fixed position, not cursor-tracked.

**WHY:** Linear: confidence through isolation, not through complexity. Resend: 3 words on black carries more power than an animated 60/40 layout. Run 1's cursor glow added no conversion value and was a performance cost. Vercel: dual CTA captures two intents (self-serve + learn more) in one hero.

---

#### HOME > SECTION 2: THE PROBLEM

```
┌──────────────────────────────────────────────────────────────────┐
│  bg: #0A0A0B (seamless from hero)                                │
│  padding: 128px top/bottom                                       │
│                                                                  │
│         Most agencies are a black box.                           │
│         ↑ Days One, 48px, #FFFFFF, -0.02em                       │
│                                                                  │
│                                                                  │
│  ┌──── 55% ─────────────────┐  ┌──── 45% ─────────────────┐     │
│  │                          │  │                          │     │
│  │  WHAT YOU GET TODAY       │  │  WHAT YOU ACTUALLY NEED   │     │
│  │  ↑ Inter 500, 14px,      │  │  ↑ Inter 500, 14px,      │     │
│  │    uppercase, #D94040     │  │    uppercase, #1A9BBF     │     │
│  │    (scale-bright, no bg)  │  │    (core-bright, no bg)   │     │
│  │                          │  │                          │     │
│  │  ┃ Endless meetings with  │  │  ┃ A system that audits   │     │
│  │  ┃ no outcomes.           │  │  ┃ before it builds.      │     │
│  │  ↑ 3px left border       │  │  ↑ 3px left border       │     │
│  │    rgba(217,64,64,0.3)   │  │    rgba(26,155,191,0.3)  │     │
│  │    pl-16px               │  │    pl-16px               │     │
│  │                          │  │                          │     │
│  │  ┃ Developers who        │  │  ┃ Engineers who compete   │     │
│  │  ┃ disappear mid-project. │  │  ┃ to write better code.  │     │
│  │                          │  │                          │     │
│  │  ┃ Designs that look     │  │  ┃ Design that makes      │     │
│  │  ┃ like templates.       │  │  ┃ competitors nervous.   │     │
│  │                          │  │                          │     │
│  │  ┃ Marketing that burns  │  │  ┃ Growth that compounds, │     │
│  │  ┃ budget, not pipeline. │  │  ┃ not spikes.            │     │
│  │                          │  │                          │     │
│  │  ┃ A founder doing       │  │  ┃ A partner who builds   │     │
│  │  ┃ everything.           │  │  ┃ the machine.           │     │
│  │                          │  │                          │     │
│  │  ↑ Inter 400, 18px       │  │  ↑ Inter 400, 18px       │     │
│  │    #999999 (left)        │  │    #E8E8E8 (right)       │     │
│  │    line-height: 1.8      │  │    line-height: 1.8      │     │
│  │    24px gap between items │  │    24px gap between items │     │
│  │                          │  │                          │     │
│  └──────────────────────────┘  └──────────────────────────┘     │
│                                                                  │
│  ░ subtle red glow left ░░░░░░░░ subtle teal glow right ░       │
│  rgba(154,21,21,0.06)           rgba(0,99,129,0.06)             │
│  radial at 25% 50%             radial at 75% 50%                │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**COPY:**
- Headline: "Most agencies are a black box."
- Left label: "WHAT YOU GET TODAY" (scale-bright red, borderless)
- Left items (in #999999 — dimmed, these are the bad things):
  - "Endless meetings with no outcomes."
  - "Developers who disappear mid-project."
  - "Designs that look like templates."
  - "Marketing that burns budget, not pipeline."
  - "A founder doing everything."
- Right label: "WHAT YOU ACTUALLY NEED" (core-bright teal, borderless)
- Right items (in #E8E8E8 — bright, these are the solutions):
  - "A system that audits before it builds."
  - "Engineers who compete to write better code."
  - "Design that makes competitors nervous."
  - "Growth that compounds, not spikes."
  - "A partner who builds the machine."

**LAYOUT:** 55/45 asymmetric split. Gap: 48px between columns. Max-width 1200px container.
**ATMOSPHERE:** Dual-glow — red left, teal right. Warm/cool split.
**ANIMATION:** Headline fade-up 600ms. Left items stagger in 80ms each (from top). Right items stagger in 80ms each (200ms delay after left starts). The right side "answers" the left side.
**MOBILE:** Stack vertically. Left column first, right column below with 48px gap. Full-width.

**CHANGED FROM RUN 1:** Run 1 had 503-line TheProblem.tsx with entire section content written THREE times (static, animated, mobile). Gold bullet `<span>` copy-pasted 8 times. V2: single code path, motion via Framer Motion's reducedMotion prop, no duplication.

**WHY:** ClickUp: double-problem section (rational left + solution right). Dub: CSS-only staggered reveals. Run 1's 3x duplication was the worst code quality issue in the codebase.

---

#### HOME > SECTION 3: THE SYSTEM

```
┌──────────────────────────────────────────────────────────────────┐
│  bg: #111116 (elevated — creates depth band)                     │
│  padding: 128px top/bottom                                       │
│                                                                  │
│  [01] THE SYSTEM                                                 │
│  ↑ JetBrains Mono, 12px, uppercase, #666666, tracking 0.12em    │
│                                                                  │
│  One company. Four engines.                                      │
│  ↑ Days One, 48px, #FFFFFF, -0.02em                              │
│                                                                  │
│  Each engine operates independently. Together, they              │
│  form a system no single agency can replicate.                   │
│  ↑ Inter 400, 18px, #999999, max-width 640px                    │
│                                                                  │
│                                                                  │
│  ┌───── TAB ROW (not cards, just text tabs) ─────────────────┐  │
│  │                                                            │  │
│  │  [▲] CoreXs ·      [◉] CodeXs      [▼] ScaleXs     SX StyleXs│
│  │   ↑ ACTIVE           ↑ inactive      ↑ inactive    ↑ inactive │
│  │   #1A9BBF             #666666         #666666       #666666   │
│  │   underline 2px       no underline    no underline  no underline│
│  │                                                            │  │
│  │  Logo icons at 28px. Tab text: Inter 500, 16px.            │  │
│  │  Active tab: pillar bright color + 2px bottom border.       │  │
│  │  Inactive: #666666, no border.                              │  │
│  │  Transition: color 300ms, border 300ms.                     │  │
│  │                                                            │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌───── CONTENT PANEL (changes on tab click) ────────────────┐  │
│  │                                                            │  │
│  │  ┌──── 55% ──────────────────┐  ┌──── 45% ───────────┐   │  │
│  │  │                           │  │                     │   │  │
│  │  │  CoreXs — The Audit.      │  │    ╔═══════════╗    │   │  │
│  │  │  ↑ Days One, 28px,        │  │    ║           ║    │   │  │
│  │  │    #1A9BBF                │  │    ║   CSS art  ║    │   │  │
│  │  │                           │  │    ║  abstract  ║    │   │  │
│  │  │  Every project starts     │  │    ║   teal     ║    │   │  │
│  │  │  with a systematic        │  │    ║  shapes    ║    │   │  │
│  │  │  diagnosis. We map your   │  │    ║           ║    │   │  │
│  │  │  revenue, team, ops, and  │  │    ╚═══════════╝    │   │  │
│  │  │  bottlenecks before       │  │    ↑ Abstract CSS   │   │  │
│  │  │  writing a single line    │  │      geometric      │   │  │
│  │  │  of code.                 │  │      composition    │   │  │
│  │  │  ↑ Inter 400, 16px,       │  │      in pillar      │   │  │
│  │  │    #E8E8E8, lh 1.6        │  │      color          │   │  │
│  │  │                           │  │                     │   │  │
│  │  │  ┌─────────────────────┐  │  │                     │   │  │
│  │  │  │ CAPABILITY TABLE    │  │  │                     │   │  │
│  │  │  ├────────┬────────────┤  │  │                     │   │  │
│  │  │  │Business│Map revenue,│  │  │                     │   │  │
│  │  │  │Audit   │team, ops   │  │  │                     │   │  │
│  │  │  ├────────┼────────────┤  │  │                     │   │  │
│  │  │  │Market  │Competitive │  │  │                     │   │  │
│  │  │  │Analysis│positioning │  │  │                     │   │  │
│  │  │  ├────────┼────────────┤  │  │                     │   │  │
│  │  │  │System  │Architecture│  │  │                     │   │  │
│  │  │  │Design  │before code │  │  │                     │   │  │
│  │  │  └────────┴────────────┘  │  │                     │   │  │
│  │  │  ↑ Table rows, not cards  │  │                     │   │  │
│  │  │    Header: mono, 12px     │  │                     │   │  │
│  │  │    Rows: Inter 400, 14px  │  │                     │   │  │
│  │  │    Border: 1px #222230    │  │                     │   │  │
│  │  │                           │  │                     │   │  │
│  │  └───────────────────────────┘  └─────────────────────┘   │  │
│  │                                                            │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ░░░ active pillar glow behind content panel ░░░                 │
│  (changes color when tab switches)                               │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**COPY per tab:**

**CoreXs — The Audit.**
"Every project starts with a systematic diagnosis. We map your revenue streams, team structure, operations, and bottlenecks before writing a single line of code."
| Business Audit | Revenue, team, operations, bottleneck mapping |
| Market Analysis | Competitive positioning and opportunity gaps |
| System Design | Architecture before code, strategy before campaigns |

**CodeXs — The Machine.**
"Two development teams. One codebase. The best code wins. Nick controls quality while Team Razm and Team Bazm compete on every build."
| Team Razm | Frontend, backend, mobile — led by Arvin |
| Team Bazm | Same capabilities, parallel track — led by Ali |
| Quality Gate | Every commit reviewed. Every deploy verified. |

**ScaleXs — The Fuel.**
"Growth without a system is just spending. We build pipelines that compound — paid acquisition, content, analytics, all feeding the same machine."
| Paid Acquisition | Performance marketing with transparent ROAS |
| Content & Social | Brand presence that builds audience over time |
| Analytics | Decisions from data, not from gut feelings |

**StyleXs — The Signal.**
"Design is the first thing they see and the last thing they remember. We don't make it pretty — we make it impossible to ignore."
| Brand Identity | Logo, colors, typography, voice — the complete system |
| UI/UX Design | Interfaces built on research, not on trends |
| Design Systems | Scalable, documented, consistent everywhere |

**LAYOUT:** 55/45 split within content panel. Tab row above at full width. max-width 1200px.
**ATMOSPHERE:** Active pillar's color as radial glow (centered behind content panel at 8% opacity). Glow crossfades 300ms on tab switch.
**ANIMATION:** Tab switch: old content fades out 200ms, new content fades in 300ms. Visual slides in from right 400ms ease-reveal. Table rows stagger 60ms.
**LOGO:** Pillar logos at 28px in tab row (corexs-teal.png, codexs-light.png, scalexs-red.png, "SX" text for StyleXs).
**MOBILE:** Tabs become vertical accordion. Tap pillar name to expand. Visual hidden (text-only). Full-width content.

**CHANGED FROM RUN 1:** Run 1 had two separate sections: TheSystem (SVG flow diagram, 498 lines, all coordinates as magic numbers, 5 nodes written twice) + TheEngine (300vh sticky scroll with 4 crossfading panels, hardcoded scroll ranges). V2 merges into one tab-based section with accordion-paired-visual pattern. No SVG, no sticky scroll, no magic numbers.

**WHY:** Mercury: accordion-paired-visual is the most sophisticated homepage component — progressive disclosure + contextual demonstration. Attio: numbered sections [01]-[04] create editorial progression. Run 1's SVG diagram was the second-worst code quality issue (all coordinates hardcoded, 2x duplication). The 300vh sticky scroll was "fragile" per codebase audit.

---

#### HOME > SECTION 4: THE PROOF

```
┌──────────────────────────────────────────────────────────────────┐
│  bg: #0A0A0B (back to deepest — depth rhythm)                   │
│  padding: 128px top/bottom                                       │
│                                                                  │
│  [02] THE PROOF                                                  │
│  ↑ JetBrains Mono, 12px, uppercase, #666666                     │
│                                                                  │
│  Numbers don't need decoration.                                  │
│  ↑ Days One, 48px, #FFFFFF                                       │
│                                                                  │
│                                                                  │
│  ┌── STATS ROW (staggered sizes, NOT equal) ─────────────────┐  │
│  │                                                            │  │
│  │     4                    2                   16            │  │
│  │     ↑ JetBrains Mono     ↑ JetBrains Mono    ↑ JetBrains  │  │
│  │       72px, #FFFFFF        56px, #FFFFFF        48px       │  │
│  │       tabular-nums         tabular-nums         #FFFFFF    │  │
│  │       -0.02em              -0.02em              -0.02em   │  │
│  │                                                            │  │
│  │     ENGINES              DEV TEAMS             SPECIALISTS │  │
│  │     ↑ Inter 600           ↑ Inter 600           ↑ Inter 600│  │
│  │       14px, uppercase       14px, uppercase       14px     │  │
│  │       #f0b429               #f0b429               #f0b429 │  │
│  │       tracking 0.08em       tracking 0.08em       track.   │  │
│  │                                                            │  │
│  │     working as            competing on          across     │  │
│  │     one system            every build           design,    │  │
│  │     ↑ Inter 400            ↑ Inter 400          code,      │  │
│  │       16px, #999999          16px, #999999      growth,    │  │
│  │                                                 strategy   │  │
│  │                                                            │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│                          64px gap                                │
│                                                                  │
│  ┌── CASE STUDY ROWS (table format, NOT cards) ──────────────┐  │
│  │                                                            │  │
│  │  CLIENT          SECTOR           DELIVERED                │  │
│  │  ↑ mono, 12px, uppercase, #666666                          │  │
│  │  ─────────────────────────────────────────────             │  │
│  │  ↑ 1px border #222230                                      │  │
│  │                                                            │  │
│  │  DEVYN           Streetwear        Complete brand system,  │  │
│  │  ↑ Inter 500     ↑ Inter 400       identity, packaging     │  │
│  │    16px, #FFF      14px, #999      ↑ Inter 400, 14px, #E8  │  │
│  │                                                            │  │
│  │  ─────────────────────────────────────────────             │  │
│  │                                                            │  │
│  │  [Additional rows as clients are added]                    │  │
│  │                                                            │  │
│  │  Hover on row: bg --bg-tertiary (#1A1A22)                  │  │
│  │                                                            │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ░░░ subtle gold glow behind stats ░░░                           │
│  rgba(240,180,41,0.06) at 50% 30%                               │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**COPY:**
- Overline: "[02] THE PROOF"
- Headline: "Numbers don't need decoration."
- Stats: "4" / "ENGINES" / "working as one system" — "2" / "DEV TEAMS" / "competing on every build" — "16" / "SPECIALISTS" / "across design, code, growth, strategy"
- Case study table: CLIENT | SECTOR | DELIVERED (actual data to be filled by Dave)

**LAYOUT:** Stats in a flex row with justify-between. Case studies as table rows. Max-width 1200px.
**ATMOSPHERE:** --glow-gold behind stats row.
**ANIMATION:** Stats counter animation: numbers count up from 0 on scroll entry, 1200ms ease-counter. Labels + descriptions fade up after counter finishes (200ms delay). Case study rows stagger in 80ms. Counter uses requestAnimationFrame, not setInterval.
**MOBILE:** Stats stack vertically with 48px gap. Staggered sizes become: 64px, 56px, 48px. Case study table becomes stacked cards with label:value pairs.

**CHANGED FROM RUN 1:** Run 1 had 10x counter (single stat) + 3 hardcoded case study JSX blocks with no data mapping. V2: 3 staggered stats (Wealthsimple pattern) + table rows for case studies (mappable from data array).

**WHY:** Wealthsimple: staggered stat sizes (72/56/48) create hierarchy without explanation. Ramp: mixed stat formatting prevents visual monotony. Run 1's hardcoded JSX means adding a case study requires editing component code. Mercury: "1 in 3" format — varying formats across stats prevents the "AI-generated" uniform look.

---

#### HOME > SECTION 5: THE ARCHITECTS

```
┌──────────────────────────────────────────────────────────────────┐
│  bg: #111116 (elevated band)                                     │
│  padding: 128px top/bottom                                       │
│                                                                  │
│  [03] THE ARCHITECTS                                             │
│  ↑ JetBrains Mono, 12px, uppercase, #666666                     │
│                                                                  │
│  Built by founders who build.                                    │
│  ↑ Days One, 48px, #FFFFFF                                       │
│                                                                  │
│                                                                  │
│  ┌── CO-FOUNDERS (50/50 — equal prominence) ─────────────────┐  │
│  │                                                            │  │
│  │  ┌──── 50% ──────────────┐│┌──── 50% ──────────────┐     │  │
│  │  │                       ││|                       │     │  │
│  │  │  Dave Benrouz          ││|  Ramtin               │     │  │
│  │  │  ↑ Days One, 32px      ││|  ↑ Days One, 32px     │     │  │
│  │  │    #FFFFFF             ││|    #FFFFFF             │     │  │
│  │  │                       ││|                       │     │  │
│  │  │  Chief System Architect││|  Co-Founder            │     │  │
│  │  │  ↑ Inter 500, 16px     ││|  ↑ Inter 500, 16px    │     │  │
│  │  │    #f0b429 (gold)      ││|    #f0b429 (gold)     │     │  │
│  │  │                       ││|                       │     │  │
│  │  │  [Bio — 2 sentences    ││|  [Bio — 2 sentences   │     │  │
│  │  │   about Dave's vision  ││|   about Ramtin's role  │     │  │
│  │  │   and approach]        ││|   and contributions]   │     │  │
│  │  │  ↑ Inter 400, 16px     ││|  ↑ Inter 400, 16px    │     │  │
│  │  │    #999999             ││|    #999999             │     │  │
│  │  │                       ││|                       │     │  │
│  │  └───────────────────────┘│└───────────────────────┘     │  │
│  │                           │                               │  │
│  │                           ↑ 1px divider, #222230, vertical│  │
│  │                             full height of co-founder block│  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│                          64px gap                                │
│                                                                  │
│  SECTION LEADERS                                                 │
│  ↑ Inter 500, 14px, uppercase, #666666                           │
│                                                                  │
│  ┌── LEADERS ROW ────────────────────────────────────────────┐  │
│  │                                                            │  │
│  │  ● Nick                ● Steven             ● Masha        │  │
│  │    CodeXs Controller     StyleXs Lead         ScaleXs      │  │
│  │    ↑ dot: #8A8A8A        ↑ dot: #6E75FF       ↑ dot: #D94040│
│  │                                                            │  │
│  │  ● Vitaly              ● Arvin              ● Ali          │  │
│  │    Controller            Team Razm Lead       Team Bazm Lead│  │
│  │    ↑ dot: #4466CC       ↑ dot: #8A8A8A       ↑ dot: #8A8A8A│
│  │                                                            │  │
│  │  Format per person:                                        │  │
│  │  [8px dot in pillar-bright color]  Name — Inter 500, 16px  │  │
│  │  Role — Inter 400, 14px, #999999, below name               │  │
│  │                                                            │  │
│  │  Layout: 3-column grid, gap 32px                           │  │
│  │                                                            │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│                          48px gap                                │
│                                                                  │
│  THE TEAM                                                        │
│  ↑ Inter 500, 14px, uppercase, #666666                           │
│                                                                  │
│  ┌── TEAM FLOW ──────────────────────────────────────────────┐  │
│  │                                                            │  │
│  │  ● Name · Role    ● Name · Role    ● Name · Role          │  │
│  │  ● Name · Role    ● Name · Role    ● Name · Role          │  │
│  │                                                            │  │
│  │  Flowing inline layout (flex-wrap). Each item:             │  │
│  │  [8px dot, pillar color]  "Name · Role"                    │  │
│  │  Inter 400, 14px, #E8E8E8                                  │  │
│  │  margin-right: 32px, margin-bottom: 12px                   │  │
│  │                                                            │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ░░░ multi-pillar glow: all 4 colors at 0.04 each, blended ░░░  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**COPY:**
- Overline: "[03] THE ARCHITECTS"
- Headline: "Built by founders who build."
- Dave: "Dave Benrouz" / "Chief System Architect" (NEVER "CEO")
- Ramtin: "Ramtin" / "Co-Founder" — equal treatment, same sizes, same gold title color
- Leader + team names: actual DeltaX roster with pillar-colored dots

**LAYOUT:** 50/50 co-founders with vertical divider. 3-column leaders grid below. Flowing team list at bottom.
**ATMOSPHERE:** Multi-pillar glow — 4 radial gradients overlapping at very low opacity (0.04 each), creating a neutral warm glow.
**ANIMATION:** Co-founders slide in from sides 600ms (Dave from left, Ramtin from right). Leaders fade up stagger 100ms. Team names fade in stagger 40ms.
**MOBILE:** Co-founders stack vertically, Dave first. Horizontal divider replaces vertical. Leaders 2-column grid. Team list wraps naturally.

**CHANGED FROM RUN 1:** Run 1 had TheArchitects.tsx + TeamGrid.tsx containing IDENTICAL team data arrays and rendering logic duplicated across 2 files. Used gradient circles for avatars. V2: single data source, editorial text layout (no circles), 50/50 co-founder split (Run 1 may not have enforced Dave's rule about Ramtin's equal prominence).

**WHY:** Capital.com: editorial team display. Attio: text + dots beats headshot circles for a company without professional team photos. Run 1 duplication: pillarGradients and pillarTextColors maps copy-pasted across both files — maintenance nightmare.

---

#### HOME > SECTION 6: YOUR PATH

```
┌──────────────────────────────────────────────────────────────────┐
│  bg: #0A0A0B                                                     │
│  padding: 128px top/bottom                                       │
│                                                                  │
│  [04] YOUR PATH                                                  │
│  ↑ JetBrains Mono, 12px, uppercase, #666666                     │
│                                                                  │
│  Three steps. One conversation.                                  │
│  ↑ Days One, 48px, #FFFFFF                                       │
│                                                                  │
│                                                                  │
│  ┌── TIMELINE ───────────────────────────────────────────────┐  │
│  │                                                            │  │
│  │      ◉ ─── STEP 01 ──────────────────────────             │  │
│  │      │     ↑ mono, 12px, #1A9BBF (teal)                    │  │
│  │      │                                                     │  │
│  │      │     Talk to us.                                     │  │
│  │      │     ↑ Days One, 24px, #FFFFFF                       │  │
│  │      │                                                     │  │
│  │      │     A 30-minute call. No pitch deck. Just your      │  │
│  │      │     challenges and our honest assessment.           │  │
│  │      │     ↑ Inter 400, 16px, #999999, max-width 480px    │  │
│  │      │                                                     │  │
│  │      │                                                     │  │
│  │      ◉ ─── STEP 02 ──────────────────────────             │  │
│  │      │     ↑ mono, 12px, #8A8A8A (gray)                    │  │
│  │      │                                                     │  │
│  │      │     We audit your system.                           │  │
│  │      │     ↑ Days One, 24px, #FFFFFF                       │  │
│  │      │                                                     │  │
│  │      │     CoreXs maps your business. Where you're         │  │
│  │      │     leaking time, money, and opportunity.           │  │
│  │      │     ↑ Inter 400, 16px, #999999, max-width 480px    │  │
│  │      │                                                     │  │
│  │      │                                                     │  │
│  │      ◉ ─── STEP 03 ──────────────────────────             │  │
│  │            ↑ mono, 12px, #f0b429 (gold)                    │  │
│  │                                                            │  │
│  │            We build the machine.                           │  │
│  │            ↑ Days One, 24px, #FFFFFF                       │  │
│  │                                                            │  │
│  │            All four engines activate. You watch the        │  │
│  │            system work while you focus on what matters.    │  │
│  │            ↑ Inter 400, 16px, #999999, max-width 480px    │  │
│  │                                                            │  │
│  │                                                            │  │
│  │  Timeline line: 1px, #222230, vertical                     │  │
│  │  Step circles: 12px filled circle                          │  │
│  │    Step 1: #1A9BBF (teal — audit)                          │  │
│  │    Step 2: #8A8A8A (gray — build)                          │  │
│  │    Step 3: #f0b429 (gold — results)                        │  │
│  │  Gap between steps: 64px                                   │  │
│  │                                                            │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ░░░ gold glow at bottom, fading toward CTA section ░░░         │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**COPY:**
- Overline: "[04] YOUR PATH"
- Headline: "Three steps. One conversation."
- Step 01: "Talk to us." / "A 30-minute call. No pitch deck. Just your challenges and our honest assessment."
- Step 02: "We audit your system." / "CoreXs maps your business. Where you're leaking time, money, and opportunity."
- Step 03: "We build the machine." / "All four engines activate. You watch the system work while you focus on what matters."

**LAYOUT:** Single column, left-aligned within container. Timeline line runs vertically. Content offset to the right of the line.
**ATMOSPHERE:** Gold glow building at bottom (transitioning toward CTA section).
**ANIMATION:** Timeline line draws down on scroll: 1200ms ease-reveal. Each step fades in as the line reaches its position (stagger ~300ms). Step circles pulse once on reveal (scale 0 → 1.2 → 1, 400ms).
**MOBILE:** Same layout (already vertical). Slightly tighter gap (48px between steps).

**CHANGED FROM RUN 1:** Similar structure (Run 1 also had 3-step timeline). V2 improvements: pillar-colored step circles (was single color), line-draw animation (was simple fade-up), step labels in mono with pillar color (was plain text). Color progression (teal → gray → gold) tells a story.

**WHY:** Railway: step-by-step connected flow visualization. Stripe Atlas: numbered steps with connecting lines. The color progression (cool → neutral → warm) creates emotional arc toward conversion.

---

#### HOME > SECTION 7: FINAL CTA

```
┌──────────────────────────────────────────────────────────────────┐
│  bg: #0A0A0B                                                     │
│  padding: 128px top/bottom                                       │
│                                                                  │
│              ░░░░░░░░░░░░░░░░░░░░░░░░░░                          │
│             ░░░  navy glow (bookend) ░░░                          │
│              ░░░░░░░░░░░░░░░░░░░░░░░░░░                          │
│                                                                  │
│                        ██╗  ██╗                                  │
│                        ╚██╗██╔╝                                  │
│                         ╚███╔╝    ← deltax-white.png             │
│                         ██╔██╗      80px wide, centered          │
│                        ██╔╝ ██╗     opacity: 0.6                 │
│                        ╚═╝  ╚═╝    subtle pulse animation        │
│                                                                  │
│                                                                  │
│                   Ready to build?                                │
│                   ↑ Days One, 48px, #FFFFFF                       │
│                                                                  │
│           One conversation. No commitments.                      │
│           Just clarity.                                          │
│           ↑ Inter 400, 18px, #999999                              │
│                                                                  │
│                                                                  │
│                 [  Start a Project  ]                             │
│                  ↑ gold pill, large                               │
│                    h-52px, #f0b429                                │
│                    text: #0A0A0B                                  │
│                    centered                                      │
│                                                                  │
│              or email hello@thesx.co                              │
│              ↑ Inter 400, 14px, #666666                           │
│                "hello@thesx.co" in #f0b429                       │
│                 linked (mailto:)                                  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**COPY:**
- Headline: "Ready to build?"
- Subtext: "One conversation. No commitments. Just clarity."
- CTA: "Start a Project" (same text as hero — Dub: repetition anchoring)
- Below: "or email hello@thesx.co"

**LAYOUT:** Centered vertical stack. Logo → headline → subtext → CTA → email link.
**ATMOSPHERE:** --glow-deltax (navy, 12%) behind logo. Bookend symmetry with hero (Forge walkthrough: hero = forte, final = piano).
**ANIMATION:** Logo fades in 600ms with subtle opacity pulse (0.5 → 0.7 → 0.5, 4s infinite). Headline + subtext + CTA fade up stagger 200ms.
**LOGO:** deltax-white.png, 80px wide, centered, opacity 0.6 (dimmer than hero — piano dynamic).
**MOBILE:** Same layout. CTA full-width. Logo 60px.

**CHANGED FROM RUN 1:** Run 1 had a waitlist email capture form in this section. V2: single CTA button (no form — form is on the Contact page). Simpler, fewer fields = less friction. Run 1's form duplicated the WaitlistForm component from Hero.

**WHY:** Dub: same CTA text in hero and final section — repetition anchoring. Superhuman: single-CTA confidence. The waitlist form added complexity without conversion value at the bottom of a long page — visitors who scroll this far are ready to click, not fill out forms.

---

#### HOME > FOOTER

```
┌──────────────────────────────────────────────────────────────────┐
│  bg: #080809 (deepest — visual grounding)                        │
│  padding: 64px top, 32px bottom                                  │
│                                                                  │
│  ┌── 4-COLUMN LAYOUT ───────────────────────────────────────┐   │
│  │                                                           │   │
│  │  DELTAX              SERVICES        COMPANY     LEGAL    │   │
│  │                                                           │   │
│  │  [X] 24px            CoreXs          About       Privacy  │   │
│  │  thesx.co            CodeXs          Contact     Terms    │   │
│  │                      ScaleXs                              │   │
│  │  [X] [in] [ig]       StyleXs                              │   │
│  │  ↑ social icons                                           │   │
│  │    16px, #666666                                          │   │
│  │    hover: #E8E8E8                                         │   │
│  │                                                           │   │
│  │  Column headers: Inter 600, 14px, uppercase, #999999      │   │
│  │  Links: Inter 400, 14px, #666666, hover: #E8E8E8         │   │
│  │  Line-height: 2.0 (generous spacing between links)        │   │
│  │                                                           │   │
│  └───────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ─────────────────────────────────────────────                   │
│  ↑ 1px divider, #1A1A22                                          │
│                                                                  │
│  © 2026 DeltaX. All rights reserved.                             │
│  ↑ Inter 400, 12px, #666666, centered                            │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**LAYOUT:** 4-column grid. Brand column wider (~35%), others equal (~21.6% each).
**MOBILE:** 2x2 grid (Brand + Services top, Company + Legal bottom). Social icons horizontal row.

**CHANGED FROM RUN 1:** Run 1 had social SVG icons inlined 3 times (Footer + ContactHero = 6 total inline SVGs). V2: shared icon components imported once. Run 1 had placeholder URLs (href="#" in ContactHero, generic URLs in Footer). V2: real URLs required.

---

### PAGE: ABOUT

---

#### ABOUT > HERO

```
┌──────────────────────────────────────────────────────────────────┐
│  bg: #0A0A0B                                                     │
│  height: 70vh, centered                                          │
│                                                                  │
│                                                                  │
│         The System Behind the System.                            │
│         ↑ Days One, clamp(40px, 6vw, 56px), #FFFFFF              │
│           centered, -0.03em                                      │
│                                                                  │
│     DeltaX was built on one belief: businesses                   │
│     should run on systems, not on founders.                      │
│     ↑ Inter 400, 20px, #E8E8E8, max-width: 640px                │
│       centered, line-height: 1.6                                 │
│                                                                  │
│                                                                  │
│  ░ 4 pillar glows in corners at 0.04 each ░                      │
│  teal top-left, gray top-right, red bot-left, blue bot-right     │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**COPY:**
- Headline: "The System Behind the System."
- Subtext: "DeltaX was built on one belief: businesses should run on systems, not on founders."

**ANIMATION:** Headline fade-up 600ms. Subtext 600ms delay 200ms. Corner glows fade in 1200ms.
**MOBILE:** Headline 36px. Subtext 18px.

---

#### ABOUT > STORY

```
┌──────────────────────────────────────────────────────────────────┐
│  bg: #111116                                                     │
│  padding: 128px top/bottom                                       │
│                                                                  │
│            ┌── max-width: 720px, centered ──────────┐            │
│            │                                        │            │
│            │  [Paragraph 1 — origin story.          │            │
│            │   How Dave and Ramtin started DeltaX.   │            │
│            │   What problem they saw in the market.] │            │
│            │  ↑ Inter 400, 16px, #E8E8E8, lh 1.6    │            │
│            │                                        │            │
│            │                    32px gap              │            │
│            │                                        │            │
│            │  [Paragraph 2 — the insight.            │            │
│            │   Why four engines instead of one.      │            │
│            │   The competing dev teams concept.]     │            │
│            │                                        │            │
│            │                    48px gap              │            │
│            │                                        │            │
│            │  ┃ "We don't hire people to fill        │            │
│            │  ┃  roles. We build engines that        │            │
│            │  ┃  make roles unnecessary."            │            │
│            │  ┃  ↑ Pull quote                        │            │
│            │  ┃    3px left border, #f0b429 (gold)   │            │
│            │  ┃    Inter 400 italic, 24px, #E8E8E8   │            │
│            │  ┃    padding-left: 24px                │            │
│            │                                        │            │
│            │                    48px gap              │            │
│            │                                        │            │
│            │  [Paragraph 3 — where DeltaX is now.    │            │
│            │   The team, the clients, the vision.]   │            │
│            │                                        │            │
│            └────────────────────────────────────────┘            │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**COPY:** Paragraphs to be written by Dave. Pull quote: "We don't hire people to fill roles. We build engines that make roles unnecessary."
**LAYOUT:** Single column, max-width 720px, centered. Editorial magazine feel.
**ANIMATION:** Paragraphs fade up 600ms stagger 200ms. Pull quote slides in from left 600ms.

**WHY:** Wealthsimple: magazine editorial feel. Single-column reading at 720px (~65ch) is optimal reading width per all research sets.

---

#### ABOUT > FULL TEAM

```
┌──────────────────────────────────────────────────────────────────┐
│  bg: #0A0A0B                                                     │
│  padding: 128px top/bottom                                       │
│                                                                  │
│  The People.                                                     │
│  ↑ Days One, 48px, #FFFFFF                                       │
│                                                                  │
│  ┌── TEAM TABLE (not cards, not circles) ────────────────────┐  │
│  │                                                            │  │
│  │  NAME              ROLE                    SECTION         │  │
│  │  ↑ mono, 12px, uppercase, #666666                          │  │
│  │  ─────────────────────────────────────────────             │  │
│  │                                                            │  │
│  │  ● Dave Benrouz    Chief System Architect   Delta          │  │
│  │  ● Ramtin          Co-Founder               CoreXs        │  │
│  │  ─────────────────────────────────────────────             │  │
│  │  ● Nick            Controller               CodeXs        │  │
│  │  ● Steven          Lead Designer             StyleXs       │  │
│  │  ● Masha           Growth Lead               ScaleXs       │  │
│  │  ● Vitaly          Controller               Delta          │  │
│  │  ─────────────────────────────────────────────             │  │
│  │  ● Arvin           Team Razm Lead            CodeXs        │  │
│  │  ● Ali             Team Bazm Lead            CodeXs        │  │
│  │  ● [Name]          Developer                 CodeXs        │  │
│  │  ● [Name]          Developer                 CodeXs        │  │
│  │  ● [Name]          Developer                 CodeXs        │  │
│  │  ● [Name]          Developer                 CodeXs        │  │
│  │  ● [Name]          Designer                  StyleXs       │  │
│  │  ─────────────────────────────────────────────             │  │
│  │                                                            │  │
│  │  Dots: 8px, pillar-bright color per section                │  │
│  │  Name: Inter 500, 16px, #FFFFFF                            │  │
│  │  Role: Inter 400, 14px, #E8E8E8                            │  │
│  │  Section: Inter 400, 14px, pillar-bright color             │  │
│  │  Row border: 1px #222230 (grouped by tier)                 │  │
│  │  Row hover: bg #1A1A22                                     │  │
│  │                                                            │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**LAYOUT:** Table rows. Three tiers separated by horizontal dividers: founders, leaders, team.
**ANIMATION:** Rows stagger in 60ms each on scroll.
**MOBILE:** Table simplifies to: Name + Role stacked, Section as colored dot only.

---

#### ABOUT > CTA

Same as Home Final CTA section (identical component).

---

### PAGE: CONTACT

---

#### CONTACT > HERO

```
┌──────────────────────────────────────────────────────────────────┐
│  bg: #0A0A0B                                                     │
│  height: 50vh, centered                                          │
│                                                                  │
│                   Let's talk.                                    │
│                   ↑ Days One, 56px, #FFFFFF                       │
│                                                                  │
│                                                                  │
│    ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│    │ ✉            │  │ 📍           │  │ 🔗           │            │
│    │ hello@       │  │ Dubai, UAE   │  │ 𝕏 LinkedIn   │            │
│    │ thesx.co     │  │              │  │ Instagram    │            │
│    └─────────────┘  └─────────────┘  └─────────────┘            │
│    ↑ 3-item row, centered                                        │
│      Icon: 20px, #666666                                         │
│      Text: Inter 400, 16px, #E8E8E8                              │
│      Links: #f0b429 on hover                                     │
│      NOT in cards — just icon + text, inline                     │
│      gap: 64px between items                                     │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**COPY:**
- Headline: "Let's talk."
- Email: hello@thesx.co
- Location: (to be confirmed by Dave)
- Social: X, LinkedIn, Instagram (real URLs, not placeholders)

**ANIMATION:** Headline fade-up 600ms. Info items fade up stagger 100ms.
**MOBILE:** Info items stack vertically, left-aligned.

**CHANGED FROM RUN 1:** Run 1 had placeholder URLs (href="#") for social links. V2: real URLs required. Run 1's social SVGs inlined 3 times — V2 uses shared icon components.

---

#### CONTACT > FORM

```
┌──────────────────────────────────────────────────────────────────┐
│  bg: #111116                                                     │
│  padding: 96px top/bottom                                        │
│                                                                  │
│  ┌──── 60% ─────────────────────────┐  ┌──── 40% ───────────┐  │
│  │                                   │  │                     │  │
│  │  ┌───────────────────────────┐    │  │  What happens next. │  │
│  │  │ Name                      │    │  │  ↑ Days One, 24px   │  │
│  │  │ ↑ input, full-width       │    │  │    #FFFFFF          │  │
│  │  │   bg: #1A1A22             │    │  │                     │  │
│  │  │   border: 1px #222230     │    │  │                     │  │
│  │  │   focus: border #f0b429   │    │  │  ◉ We read every    │  │
│  │  │   h-44px, px-16px         │    │  │  │ message within   │  │
│  │  │   text: #E8E8E8           │    │  │  │ 24 hours.        │  │
│  │  │   placeholder: #666666    │    │  │  │                  │  │
│  │  │   label above: Inter 500  │    │  │  ◉ If there's a    │  │
│  │  │     14px, #999999         │    │  │  │ fit, we schedule │  │
│  │  └───────────────────────────┘    │  │  │ a call.          │  │
│  │                    16px gap        │  │  │                  │  │
│  │  ┌───────────────────────────┐    │  │  ◉ CoreXs begins   │  │
│  │  │ Email                     │    │  │    your audit.      │  │
│  │  └───────────────────────────┘    │  │                     │  │
│  │                    16px gap        │  │  ↑ mini timeline    │  │
│  │  ┌───────────────────────────┐    │  │    circles: 8px     │  │
│  │  │ Company                   │    │  │    #1A9BBF → #8A8A8A│  │
│  │  └───────────────────────────┘    │  │    → #f0b429        │  │
│  │                    16px gap        │  │    text: Inter 400  │  │
│  │  ┌───────────────────────────┐    │  │    14px, #999999    │  │
│  │  │ What's your challenge?    │    │  │    line: 1px #222230│  │
│  │  │                           │    │  │                     │  │
│  │  │ ← textarea, 4 rows       │    │  │                     │  │
│  │  │   same styling as input   │    │  │                     │  │
│  │  │   resize: vertical only   │    │  │                     │  │
│  │  └───────────────────────────┘    │  │                     │  │
│  │                                   │  │                     │  │
│  │  [hidden honeypot field]          │  │                     │  │
│  │                                   │  │                     │  │
│  │  [  Send Message  ]              │  │                     │  │
│  │   ↑ gold pill, medium             │  │                     │  │
│  │     h-44px, full-width            │  │                     │  │
│  │                                   │  │                     │  │
│  └───────────────────────────────────┘  └─────────────────────┘  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**COPY:**
- Labels: "Name", "Email", "Company", "What's your challenge?"
- CTA: "Send Message"
- Right column title: "What happens next."
- Steps: "We read every message within 24 hours." / "If there's a fit, we schedule a call." / "CoreXs begins your audit."

**LAYOUT:** 60/40 split. Form left, timeline right. Gap: 64px.
**ANIMATION:** Form fields fade up stagger 80ms. Timeline steps fade up stagger 100ms (delay 200ms). Submit button fade up last.
**MOBILE:** Stack vertically. Form full-width first. Timeline below. CTA full-width.

**CHANGED FROM RUN 1:** Run 1 had broken `label` prop (Input component didn't accept it — labels weren't rendering). Textarea used `bg-bg-tertiary` (double "bg-" Tailwind class). V2: proper label elements above each input, correct Tailwind classes, added "What happens next" timeline to reduce anxiety.

**WHY:** Plaid: generous form spacing. The "What happens next" timeline addresses the #1 conversion blocker for service companies: "what happens after I submit?" (Capital.com: trust-first funnel pattern applied to contact forms).

---

### PAGE: PRIVACY

```
┌──────────────────────────────────────────────────────────────────┐
│  bg: #0A0A0B                                                     │
│  padding: 128px top, 64px bottom                                 │
│                                                                  │
│            ┌── max-width: 720px, centered ──────────┐            │
│            │                                        │            │
│            │  Privacy Policy.                       │            │
│            │  ↑ Days One, 48px, #FFFFFF              │            │
│            │                                        │            │
│            │  Last updated: March 2026              │            │
│            │  ↑ Inter 400, 14px, #666666             │            │
│            │                                        │            │
│            │  [Section heading]                     │            │
│            │  ↑ Inter 600, 24px, #FFFFFF             │            │
│            │  margin-top: 48px, margin-bottom: 16px  │            │
│            │                                        │            │
│            │  [Paragraph text]                      │            │
│            │  ↑ Inter 400, 16px, #E8E8E8, lh 1.8    │            │
│            │                                        │            │
│            │  [Lists with 3px left-border]          │            │
│            │  ↑ Same as highlight box rules          │            │
│            │                                        │            │
│            └────────────────────────────────────────┘            │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**LAYOUT:** Single column, max-width 720px, centered. No atmosphere effects (legal pages are clean).
**ANIMATION:** Minimal — headline fade-up only.
**MOBILE:** Same layout, natural reflow.

---

### PAGE: TERMS

Identical layout to Privacy page. Headline: "Terms of Service."

---

### PAGE: 404

```
┌──────────────────────────────────────────────────────────────────┐
│  bg: #0A0A0B                                                     │
│  height: 100vh, centered                                         │
│                                                                  │
│              ░░░░░░░░░░░░░░░░░░░░░                               │
│             ░░░ subtle red glow ░░░                               │
│              rgba(154,21,21,0.08)                                 │
│              ░░░░░░░░░░░░░░░░░░░░░                               │
│                                                                  │
│                        ██╗  ██╗                                  │
│                        ╚██╗██╔╝                                  │
│                         ╚███╔╝    ← deltax-white.png             │
│                         ██╔██╗      120px wide                   │
│                        ██╔╝ ██╗     opacity: 0.4                 │
│                        ╚═╝  ╚═╝    subtle pulse                  │
│                                                                  │
│                                                                  │
│               Lost in the system.                                │
│               ↑ Days One, 48px, #FFFFFF                          │
│                                                                  │
│        This page doesn't exist. But we do.                       │
│        ↑ Inter 400, 18px, #999999                                │
│                                                                  │
│                                                                  │
│                  [  Back to Home  ]                               │
│                   ↑ gold pill, medium                             │
│                                                                  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**COPY:**
- Headline: "Lost in the system."
- Subtext: "This page doesn't exist. But we do."
- CTA: "Back to Home" (links to /)

**ATMOSPHERE:** Red glow (error context — scale-base color at 0.08). Logo at low opacity (0.4) with subtle pulse.
**ANIMATION:** Logo fades in 800ms. Text fade-up 600ms stagger 200ms.
**MOBILE:** Same layout. Logo 80px.

**CHANGED FROM RUN 1:** Run 1 had a basic not-found.tsx with minimal styling. V2: branded 404 with atmosphere, witty copy, and clear CTA.

**WHY:** Ghostty: personality in error states differentiates a product. A branded 404 page is a trust signal — it shows attention to detail.

---

## SECTION 4: CHANGES SUMMARY TABLE

| Section | Run 1 (Old) | Run 2 (New) | Why (Reference) |
|---------|-------------|-------------|-----------------|
| **Design System: Backgrounds** | Green-tinted (#161C19, #1C2320) | Neutral (#111116, #1A1A22) | Linear: pure neutral darks. Green tint looked like a dashboard. |
| **Design System: Accent** | Gold scattered across labels, borders, stats | Gold on CTAs ONLY | Mercury: accent appears ONLY on conversion touchpoints. Single-accent discipline. |
| **Design System: Typography** | No mono font, no letter-spacing, no text-wrap | JetBrains Mono, -0.03em, text-wrap:balance | Linear + ElevenLabs: tight tracking. 18/61 Busicons refs: mono for data. |
| **Design System: Max Weight** | 700 (bold used) | 600 (semibold max) | Linear: no bold on dark backgrounds prevents heavy, oppressive feel. |
| **Design System: Spacing** | ~80px section padding | 128px section padding | Plaid: 120-160px whitespace = premium confidence signal. |
| **Atmosphere: Grid** | Optional | Mandatory on every section | Dave's feedback: "subtle grid adds life — not flat voids." |
| **Atmosphere: Glow Min** | No minimum (0.03-0.05 used) | 0.06 minimum | Dave's v6 rejection: rgba below 0.10 invisible on dark. |
| **Atmosphere: Noise** | SVG noise in v10-v11 | BANNED | v11 crisis: noise at z-index:1 rendered ON TOP of text in PDF. |
| **Navbar** | Fixed, simple dropdown | Glassmorphic on scroll + mega-menu | Mercury: glassmorphic nav. Vercel: mega-menu as education. |
| **Hero** | Cursor-tracking glow, 60/40 grid, rotating logo | Centered, static logo, dual pill CTA | Linear: confidence through isolation. Resend: minimal hero power. Vercel: dual CTA. |
| **TheProblem** | 503 lines, 3x duplicated content, 8x copy-pasted gold bullets | Single code path, 55/45 split, 3px left-borders | ClickUp: double-problem section. Eliminated worst code duplication. |
| **TheSystem + TheEngine** | TWO sections: SVG flow (498 lines, magic numbers, 2x duplication) + 300vh sticky scroll (fragile ranges) | ONE section: tab-based accordion-paired-visual | Mercury: accordion-paired-visual. Merged 2 fragile sections into 1 robust one. |
| **TheProof** | 10x counter + 3 hardcoded JSX case study blocks | 3 staggered stats (JetBrains Mono) + table rows | Wealthsimple: staggered sizes. Table rows not hardcoded JSX. |
| **TheArchitects** | Identical team data duplicated across 2 files, gradient circles | Single data source, 50/50 co-founders, editorial text layout | Eliminated duplication. 50/50 prominence per Dave's rule. |
| **YourPath** | Basic 3-step timeline | Timeline with line-draw animation, pillar-colored circles | Railway: connected flow. Color progression (teal→gray→gold). |
| **FinalCTA** | Logo + waitlist form (duplicated WaitlistForm) | Logo + headline + single gold CTA | Dub: same CTA text everywhere. Superhuman: single-CTA confidence. |
| **Footer: Social Icons** | SVGs inlined 3x (Footer) + 3x (ContactHero) = 6 copies | Shared icon components, imported once | Basic code hygiene. 6 inline SVGs was unmaintainable. |
| **ContactForm** | Broken label prop, bg-bg-tertiary typo | Proper labels, correct classes, "What happens next" | Fixed bugs. Capital.com: trust-first funnel applied to contact. |
| **404** | Basic text | Branded with atmosphere, witty copy, CTA | Ghostty: personality in error states. |
| **Animation System** | Manual IntersectionObserver, 3x code for reduced-motion | Framer Motion only, hardware gating, single code path | Linear: hardware gating. Eliminated 3x duplication pattern. |
| **Component Architecture** | TheProblem 503 lines, TheSystem 498 lines, team data 2x | Max ~200 lines per component, zero duplication | Codebase audit identified these as the 3 worst offenders. |

---

## APPENDIX: IMPLEMENTATION NOTES

### File Structure (New)

```
src/
  app/
    layout.tsx              ← Root layout (unchanged)
    page.tsx                ← Home (updated section order)
    not-found.tsx           ← 404 (redesigned)
    globals.css             ← Design system tokens
    about/page.tsx
    contact/page.tsx
    privacy/page.tsx
    terms/page.tsx

  components/
    shared/
      Navbar.tsx            ← Glassmorphic + mega-menu
      Footer.tsx            ← Shared icon imports
      SocialIcons.tsx       ← NEW: single source for X, LinkedIn, Instagram SVGs

    ui/
      Button.tsx            ← Pill buttons (primary/secondary/ghost)
      Input.tsx             ← With proper label support
      ScrollReveal.tsx      ← Framer Motion wrapper
      SectionWrapper.tsx    ← Grid texture + vignette + glow
      SectionOverline.tsx   ← NEW: "[NN] SECTION NAME" pattern

    home/
      Hero.tsx              ← Centered, minimal
      TheProblem.tsx        ← 55/45 split, single code path
      TheSystem.tsx         ← Tab-based accordion-paired-visual (REPLACES old TheSystem + TheEngine)
      TheProof.tsx          ← Staggered stats + table rows
      TheArchitects.tsx     ← 50/50 cofounders + leaders + team
      YourPath.tsx          ← Timeline with line-draw
      FinalCTA.tsx          ← Single CTA, no form

    about/
      AboutHero.tsx
      Story.tsx             ← Editorial single-column
      TeamTable.tsx         ← NEW: table rows (REPLACES TeamGrid)
      AboutCTA.tsx

    contact/
      ContactHero.tsx       ← Real URLs
      ContactForm.tsx       ← Fixed labels + "What happens next"

  data/
    team.ts                 ← NEW: single source for all team data
    caseStudies.ts          ← NEW: mappable case study data

  lib/
    supabase.ts             ← unchanged
    resend.ts               ← unchanged
```

### Components Removed
- `EngineCore.tsx`, `EngineCode.tsx`, `EngineScale.tsx`, `EngineStyle.tsx` — merged into TheSystem.tsx
- `TeamGrid.tsx` — replaced by TeamTable.tsx (no duplication)
- `Card.tsx` — no longer needed (no cards in V2)
- `WaitlistForm.tsx` — removed from FinalCTA (kept only if hero needs it)
- `Providers.tsx` — was unused (layout.tsx already wraps MotionConfig)

### Data Files
- `data/team.ts` — single array of TeamMember objects with pillar association
- `data/caseStudies.ts` — array of case study objects for TheProof table

### Critical Bug Fixes from Run 1
1. **ContactForm label prop** — Input component must accept and render `label` prop
2. **bg-bg-tertiary** — double "bg-" Tailwind class in textarea
3. **Card.tsx style collision** — left-accent variant overwrote parent style prop
4. **Hero.tsx mobile** — logo hidden on mobile (`hidden md:flex`) — V2 shows logo at all sizes
5. **ContactHero social URLs** — replace all `href="#"` with real URLs
6. **Footer social URLs** — verify `x.com/deltax`, `instagram.com/deltax` are real
7. **Metadata overlap** — `page.tsx` and `layout.tsx` both export metadata with overlapping fields

---

```
────────────────────────────────────────────
END OF DOCUMENT

Every pixel. Every color. Every word. Decided.
Nothing left for developers to guess.

★ Leonardo — Creative Council Head
  Date: 2026-03-23
────────────────────────────────────────────
```
