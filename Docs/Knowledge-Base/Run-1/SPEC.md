# DeltaX Website Specification — Final Build Spec

> **This is the single source of truth.** Every decision is made. Every layout is defined.
> Every animation is specified. Every color is from the brand DNA.
> Reviewed by 6 specialist teams across 2 rounds (47 + 36 issues resolved).
> **CTA: "Join the Waitlist" — email capture on every CTA.**
> **Companion files:** `knowledge-base/RULES.md` | `knowledge-base/WIREFRAMES.md`

---

## TABLE OF CONTENTS

1. [Design System](#1-design-system)
2. [Micro-Interaction System](#2-micro-interaction-system)
3. [Animation System](#3-animation-system)
4. [Page Map](#4-page-map)
5. [Home Page Sections](#5-home-page-sections)
6. [About Page](#6-about-page)
7. [Contact Page](#7-contact-page)
8. [Legal Pages](#8-legal-pages)
9. [404 Page](#9-404-page)
10. [Navbar](#10-navbar)
11. [Footer](#11-footer)
12. [CTA & Waitlist System](#12-cta--waitlist-system)
13. [Technical Architecture](#13-technical-architecture)
14. [Accessibility](#14-accessibility)
15. [SEO & OG](#15-seo--og)
16. [Responsive Strategy](#16-responsive-strategy)
17. [Environment Variables](#17-environment-variables)
18. [Build Order & Timeline](#18-build-order--timeline)

---

## 1. DESIGN SYSTEM

### Colors (DeltaX Brand DNA)

**Backgrounds (60%)**
```
--bg-primary:    #0A0C0B     page background
--bg-secondary:  #161C19     darker bands
--bg-tertiary:   #1C2320     surface elements
--bg-break:      #0D3535     deep teal band (YOUR PATH section only)
```

**Sub-Brand Accents (10%)**
```
--core-base:     #006381     CoreXs teal (backgrounds/fills)
--core-bright:   #1A9BBF     CoreXs teal (text/borders on dark)
--code-base:     #5A5A5A     CodeXs grey (backgrounds/fills)
--code-bright:   #8A8A8A     CodeXs grey (text/borders on dark)
--scale-base:    #9A1515     ScaleXs red (backgrounds/fills)
--scale-bright:  #D94040     ScaleXs red (text/borders on dark)
--style-base:    #121CDB     StyleXs blue (backgrounds/fills)
--style-bright:  #6E75FF     StyleXs blue (text/borders on dark)
--deltax-base:   #15339A     DeltaX navy (backgrounds/fills)
--deltax-bright: #4466CC     DeltaX navy (text/borders on dark)
```

**Text Hierarchy (30%)**
```
--text-hero:     #FFFFFF                   hero headlines only
--text-body:     #E8E8E8                   body text
--text-dim:      rgba(255,255,255,0.60)    secondary text
--text-muted:    rgba(255,255,255,0.50)    footnotes, meta
```

**Special**
```
--gold:          #f0b429     impact numbers, key callouts ONLY
                              MAX 2 gold moments on home page:
                              1. 10x stat in THE PROOF
                              2. Case study stats in THE PROOF
                              (nowhere else)
```

**Utility**
```
--success:       #22C55E     success states
--error:         #EF4444     error states
```

### Typography

**Fonts**
```
Display:  Days One (Google Fonts, weight 400 only)
Body:     Inter (Google Fonts, weights 400, 500, 600)
Labels:   System monospace (SF Mono / Menlo / Consolas fallback)
```

Load via `next/font/google` in `layout.tsx`. Self-hosted at build time.

**Modular Scale (ratio 1.333 — Perfect Fourth)**
```
Step -2:  0.75rem  (12px)   — micro text, footnotes
Step -1:  0.85rem  (13.6px) — labels, tags, captions
Step  0:  1rem     (16px)   — body text (base)
Step  1:  1.25rem  (20px)   — body-lg, subtext
Step  2:  1.5rem   (24px)   — h4, card titles
Step  3:  2rem     (32px)   — h3, section subtitles
Step  4:  2.5rem   (40px)   — h2, mobile headlines
Step  5:  3.5rem   (56px)   — h1, tablet headlines
Step  6:  clamp(2.5rem, 9vw, 5rem) — display, hero headline (Days One)
```

**Exceptions (outside scale — intentional emphasis)**
```
10x stat:        clamp(5rem, 15vw, 8.75rem)  — Days One, gold
Path numbers:    clamp(4rem, 10vw, 7.5rem)   — Days One, teal
```

**Label Style (brand pattern — monospace)**
```css
font-family: var(--font-mono);
text-transform: uppercase;
letter-spacing: 4px;
font-size: 0.85rem;
color: var(--dynamic-accent);
/* NO border. NO background. Text only. */
```

### Spacing

```
Section vertical:     py-24 (96px) desktop / py-16 (64px) mobile
Section max-width:    max-w-7xl (1280px)
Section horizontal:   px-6 (24px) mobile / px-8 (32px) desktop
Headline to content:  mb-16 (64px) desktop / mb-12 (48px) mobile
Headline to subtext:  mb-6 (24px)
Card padding:         p-8 (32px) desktop / p-6 (24px) mobile
Card gap:             gap-6 (24px)
```

### Component Patterns

**Highlight Box — LEFT ACCENT ONLY**
```css
border: none;
border-left: 3px solid var(--accent-bright);
background: linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%);
padding: 16px 24px;
```

**Tags — BORDERLESS TEXT**
```css
border: none;
background: none;
font-family: var(--font-mono);
font-size: 0.85rem;
text-transform: uppercase;
letter-spacing: 4px;
color: var(--accent-bright);
font-weight: 600;
```

**Data Display — TABLE ROWS (never card grids)**
```css
border-bottom: 1px solid rgba(255,255,255,0.06);
padding: 24px 0;
display: grid;
grid-template-columns: 1fr auto 2fr;
```

### Atmosphere System

Every section gets:
1. **Radial gradient** — unique per section, using SOLID colors (#28-#34 range) fading to bg. NOT rgba below 0.10.
2. **Grid texture** — H+V lines at 0.035/0.02 opacity, 48px cells. Applied via CSS `background-image` repeating linear gradients.
3. **Edge vignette** — `radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.25) 100%)`
4. **Warm/cool alternation** — mapped below:

```
Section 1 (Hero):          WARM — teal glow center, gold edge
Section 2 (Problem):       COOL — neutral, subtle navy
Section 3 (System):        WARM — gold glow at 70% y-pos
Section 4 (Engine):        COOL→WARM — crossfades through teal/grey/red/blue
Section 5 (Proof):         WARM — gold glow
Section 6 (Architects):    COOL — navy glow
Section 7 (Path):          BREAK — deep teal #0D3535 bg
Section 8 (Final CTA):     WARM — teal convergence
```

---

## 2. MICRO-INTERACTION SYSTEM

Every interactive element needs a defined hover/focus state:

**CTA Button**
```
Default:    bg teal (#1A9BBF), text #0A0C0B, rounded-lg
Hover:      scale(1.02), box-shadow 0 0 24px rgba(26,155,191,0.35)
Active:     scale(0.98)
Focus:      ring-2 ring-teal ring-offset-2 ring-offset-[#0A0C0B]
Disabled:   opacity 0.5, cursor not-allowed
Transition: all 200ms ease
```

**Text Links**
```
Default:    color var(--text-dim), no underline
Hover:      color var(--text-body), teal underline slides in from left (width 0→100%, 200ms)
```

**Nav Items**
```
Default:    color var(--text-dim)
Hover:      color var(--text-body)
Active:     color var(--core-bright), 2px bottom border teal
```

**Table Rows (Results)**
```
Hover:      bg shifts to rgba(255,255,255,0.03), row slides right 4px
Transition: all 200ms ease
```

**Card Hover (Engine sections)**
```
Hover:      translateY(-2px), border-color brightens to accent
Transition: all 300ms ease
```

**Cursor Proximity (Hero only)**
```
Teal glow follows cursor position with 200ms lag (CSS custom properties
updated via mousemove listener, applied to radial-gradient position)
```

---

## 3. ANIMATION SYSTEM

All animations use Framer Motion unless noted as CSS.

**Global Defaults**
```
Smooth easing:    [0.16, 1, 0.3, 1]
Default duration: 0.6s
Spring config:    { stiffness: 100, damping: 20 }
```

**Scroll Reveal (all sections)**
```
Trigger:    whileInView, viewport={{ once: true, margin: "-100px" }}
Initial:    { opacity: 0, y: 30 }
Animate:    { opacity: 1, y: 0 }
Duration:   0.6s, easing smooth
```

**Stagger (groups of items)**
```
staggerChildren: 0.08
Each child: same scroll reveal
```

**Reduced Motion (MANDATORY)**
```tsx
// layout.tsx — wrap ALL children
<MotionConfig reducedMotion="user">
  {children}
</MotionConfig>
```
When `prefers-reduced-motion: reduce`: all animations become instant (no motion, elements appear in final state).

**Loading Choreography (Hero only)**
```
Headline:       0ms (immediate)
Subtext:        100ms delay
CTA/Form:       200ms delay
Qualifier:      250ms delay
Logo:           400ms delay (breathing glow starts)
```

---

## 4. PAGE MAP

**Wave 1 (build now) — 5 pages:**

| Route | Page | Sections |
|-------|------|----------|
| `/` | Home | 8 sections + navbar + footer |
| `/about` | About | 4 sections + navbar + footer |
| `/contact` | Contact | 2 sections + navbar + footer |
| `/privacy` | Privacy | 1 section + navbar + footer |
| `/terms` | Terms | 1 section + navbar + footer |

**Shared:** Navbar, Footer, 404 page

**Total components: 24**

---

## 5. HOME PAGE SECTIONS

### Section 1: HERO

**Layout:** Asymmetric 60/40. Left: text content. Right: abstract ΔX visual.
**Background:** `--bg-primary` with teal radial glow (breathing), grid texture, edge vignette.

**Left side (60%):**
```
Label:      (none — hero has no label)

Headline:   ONE SYSTEM.
            FOUR ENGINES.
            TOTAL TRANSFORMATION.

            Days One, clamp(2.5rem, 9vw, 5rem), #FFFFFF
            Line height: 1.0
            Letter spacing: -0.02em

Subtext:    DeltaX replaces the 4 agencies that never
            talk to each other — with one system where
            strategy, tech, growth, and brand feed into
            each other.

            Inter 400, 1.25rem, #E8E8E8

CTA:        [ Enter your email ] [ Join the Waitlist → ]
            Email input + teal button, visible glow shadow
            Uses WaitlistForm component (see Section 12)

Qualifier:  Join 0+ founders waiting for early access.

            Inter 300, 0.75rem, rgba(255,255,255,0.50)

Below:      Built for companies doing $500K–$10M
            who've outgrown the agency model.

            Inter 300, 0.75rem, rgba(255,255,255,0.50)
```

**Right side (40%):**
```
NOT a system schematic (that belongs in Section 3).
Instead: Large ΔX logo mark, breathing teal glow behind it.
Logo: 120x100px, white, slight slow rotation (360° per 60s).
Cursor proximity: teal glow follows cursor with 200ms lag.
Abstract, atmospheric, branded — NOT a diagram.
```

**Breathing glow:** CSS `@keyframes`, NOT Framer Motion (infinite, no JS needed).
```css
@keyframes breathe {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}
/* Duration: 4s, ease-in-out, infinite */
```

**Mobile:** Stacks vertically. Logo on top (centered, 80px), content below. Headline clamps down. CTA full-width.

---

### Section 2: THE PROBLEM

**Layout:** Two-column Before/After with visual transformation.
**Background:** `--bg-secondary` (#161C19), cool-tone atmosphere, grid texture, edge vignette.

**Label:** `THE PROBLEM` — monospace, teal, borderless

**Architecture (scroll-linked dissolve):**
```
Container: ~180vh tall (scroll-trigger range)
Inner:     position: sticky, top: 0, height: 100vh
Mechanism: useScroll({ target: containerRef, offset: ["start start", "end end"] })
           scrollYProgress maps to:
           - BEFORE elements: opacity 1→0, slight rotation→0
           - AFTER elements: opacity 0→1, translateX shift
           - Diagonal divider: opacity peaks at midpoint

Reduced motion fallback: static side-by-side split, no dissolve.
```

**BEFORE side (left):**
```
Title:      BEFORE
            ── monospace, muted red (#D94040 at 0.60), uppercase ──

Items (specific, not caricature):
  · Your CRM data never reaches your ad platform
  · Your brand guide exists but nobody follows it
  · Your dev team ships features marketing didn't ask for
  · Four invoices. Four Slack channels. Zero alignment.

  Burn rate: untracked
  Results: inconsistent
  Timeline: undefined

Visual treatment:
  - 3px left-border, muted red (#D94040 at 0.40 — NOT ScaleX brand red)
  - Text at slight CSS rotation (1-2deg) for messy feel
  - Slight opacity layering
  - Strikethrough on some items
```

**AFTER side (right):**
```
Title:      AFTER
            ── monospace, teal (#1A9BBF), uppercase ──

Items:
  · Strategy drives tech decisions
  · Tech drives growth metrics
  · Growth drives brand positioning
  · Brand drives strategy refinement

  ROI: 10x scoping standard
  Results: compounding
  Timeline: 90-day sprints

Visual treatment:
  - 3px left-border, teal (#1A9BBF)
  - Clean, aligned, no rotation
  - CSS gold circles (●) as list markers on the AFTER side
```

**Diagonal divider:** Sharp 8-degree diagonal line between columns. Left side has a subtle red-to-dark gradient bleed. Right side has a clean teal edge. NOT a paper-tear texture.

**Mobile:** Stacks vertically. BEFORE on top, AFTER below. Divider becomes horizontal. Dissolve becomes simple scroll-reveal (BEFORE reveals first, AFTER reveals 200ms later).

---

### Section 3: THE SYSTEM

**Layout:** Centered, full-width. Organic flow diagram.
**Background:** `--bg-primary`, warm-tone atmosphere, gold radial glow at 0.08 y-position 70%, grid texture, edge vignette.

**Label:** `THE SYSTEM` — monospace, teal, borderless

**Diagram definition — "Three rivers converging into one delta":**
```
Visual metaphor: Three curved SVG paths flowing from separate origins
                 and merging into a single point.

Geometry:
  - CORE node: centered top, pill-shaped (not circle, not rectangle)
    240x60px, 1px border teal, "CORE diagnoses" inside
  - Three curved bezier paths flow DOWN from CORE, spreading outward
  - CODE node: left-center, pill, 1px grey border, "CODE builds"
  - SCALE node: center, pill, 1px red border, "SCALE grows"
  - STYLE node: right-center, pill, 1px blue border, "STYLE brands"
  - Three paths curve INWARD from the three nodes, converging
  - Convergence point: bottom-center, ΔX logo mark (small, 40px)
  - Below convergence: "= results that compound" in Inter 400

SVG implementation:
  - Fixed viewBox: 0 0 800 600
  - 6 paths total (3 from CORE down, 3 converging up to delta)
  - stroke-dasharray: total path length
  - stroke-dashoffset: animated from total→0 via useTransform
  - Scroll-driven: useScroll({ target: sectionRef })
  - Staggered: paths animate at different scroll ranges
    Path 1: 0-30%, Path 2: 10-40%, Path 3: 20-50%, etc.

Static fallback (resting state):
  All paths fully drawn, all nodes visible. Readable without animation.
  This is also the prefers-reduced-motion state.
```

**Text:** `Every business gets a different combination — but it always runs as one system.`

**Mobile:** Simplified vertical SVG. CORE at top, three nodes stacked vertically below (each with colored left-border pill), convergence at bottom. Fewer curved paths — use straight vertical lines with accent-colored dots.

**Budget: 2-3 days for this section alone.**

---

### Section 4: THE ENGINE

**Section headline:** `THE ΔX ENGINE` — Days One, h1 scale, #FFFFFF

**Architecture (scroll-linked atmosphere crossfade):**
```
Container: ~500vh tall (scroll-trigger range for 4 pillars)
Sticky wrapper: position: sticky, top: 0, height: 100vh
  ├── Atmosphere Layer 1 (position: absolute, teal radial, opacity: motionValue)
  ├── Atmosphere Layer 2 (position: absolute, grey radial, opacity: motionValue)
  ├── Atmosphere Layer 3 (position: absolute, red radial, opacity: motionValue)
  ├── Atmosphere Layer 4 (position: absolute, blue radial, opacity: motionValue)
  └── Content Layer (position: relative, z-index above atmospheres)

Grid texture + edge vignette on the sticky wrapper (always visible).

useScroll({ target: containerRef, offset: ["start start", "end end"] })
useTransform maps scrollYProgress to each layer's opacity:
  Teal:   [0, 0.15] → [1, 1], [0.15, 0.25] → [1, 0]
  Grey:   [0.20, 0.30] → [0, 1], [0.40, 0.50] → [1, 0]
  Red:    [0.45, 0.55] → [0, 1], [0.65, 0.75] → [1, 0]
  Blue:   [0.70, 0.80] → [0, 1], [0.80, 1.0] → [1, 1]
  (overlapping ranges for smooth crossfade)

DO NOT use position: fixed. Use position: sticky scoped to the container.
```

**Pillar 1 — X CORE (teal) — Layout: 60/40 asymmetric**
```
Tag:        THE AUDIT
            monospace, 0.85rem, teal (#1A9BBF), borderless

Left 60%:
  ΔX logo:  80x67px, white, subtle teal glow behind
  Title:    X CORE — Strategy & Diagnostics
            Days One, h2 scale, #FFFFFF
  Body:     Every engagement starts here. We diagnose your
            business — systems, operations, revenue, brand —
            and build a custom roadmap of exactly what needs
            to change. Every roadmap is built from your numbers.
            Nothing templated.
            Inter 400, 1rem, #E8E8E8

Right 40%:
  Deliverables:  Business Diagnostics · Custom Roadmap ·
                 Systems Architecture · Gap Analysis
                 Inter 400, 0.85rem, rgba(255,255,255,0.50)

  Footer note:   This is where every engagement begins.
                 After the audit, we recommend the right mix
                 of Code, Scale, and Style.
                 Inter 400, 0.85rem, rgba(255,255,255,0.50), italic
                 Top border 1px rgba(255,255,255,0.06), pt-4 mt-4
```

**Pillar 2 — X CODE (grey) — Layout: Full-width with workflow visualization**
```
Tag:        THE MACHINE
            monospace, 0.85rem, grey (#8A8A8A), borderless

NOT a fake terminal. Instead: a real before/after workflow diagram.

  ┌─────────────────────────────────────────────────┐
  │                                                 │
  │  BEFORE                     AFTER               │
  │                                                 │
  │  Manual invoicing    →     Auto-generated       │
  │  Spreadsheet CRM     →     Integrated pipeline  │
  │  Email onboarding    →     Automated sequences  │
  │  Monthly reporting   →     Real-time dashboard  │
  │                                                 │
  │  ── monospace, grey accents, left-accent box ── │
  └─────────────────────────────────────────────────┘

Title:    X CODE — Technology & Automation
          Days One, h2 scale, #FFFFFF
Body:     We build the infrastructure that eliminates manual
          operations. Automation, integrations, backend systems
          — engineered to run without you.
          Inter 400, 1rem, #E8E8E8

Deliverables: AI Automation · CRM & Integrations · Backend Systems
```

**Pillar 3 — X SCALE (red) — Layout: 70/30, massive stat left**
```
Tag:        THE FUEL
            monospace, 0.85rem, red (#D94040), borderless

Left 70%:
  Visual:   Large upward arrow/trend graphic in red accent
            NOT a specific number (removed "3.2x average" —
            conflicts with disclaimer)
            Instead: abstract growth visualization
            (CSS gradient bar growing from left to right,
            or a simple SVG ascending line)

Right 30%:
  Title:    X SCALE — Growth & Revenue
            Days One, h2 scale, #FFFFFF
  Body:     Predictable revenue. Lead systems, sales architecture,
            and performance frameworks — built to multiply.
            Inter 400, 1rem, #E8E8E8

  Deliverables: Lead Generation · Sales Systems · Performance Scaling
```

**Pillar 4 — X STYLE (blue) — Layout: 50/50 editorial with mood contrast**
```
Tag:        THE SIGNAL
            monospace, 0.85rem, blue (#6E75FF), borderless

Left 50%:
  Mood contrast block (defined layout):
    ┌──────────────────────────────────┐
    │                                  │
    │  Two words side by side:         │
    │                                  │
    │  generic      →   unmistakable   │
    │  forgettable  →   undeniable     │
    │  commodity    →   category-of-one│
    │                                  │
    │  Left words:  Inter 400, grey,   │
    │               strikethrough      │
    │  Right words: Days One, blue     │
    │               (#6E75FF)          │
    │                                  │
    │  3px left-border blue            │
    │  bg: rgba(110,117,255,0.05)      │
    └──────────────────────────────────┘

Right 50%:
  Title:    X STYLE — Brand & Perception
            Days One, h2 scale, #FFFFFF
  Body:     We shape how the market perceives you. Brand identity,
            visual systems, and positioning that make you
            unmistakable.
            Inter 400, 1rem, #E8E8E8

  Deliverables: Brand Identity · Visual Design · Market Positioning
```

**Post-Engine CTA (inline, after all 4 pillars):**
```
Text:   Not sure which engines you need?
        Join the waitlist — we'll tell you.
        Inter 400, 1.25rem, #E8E8E8

CTA:    [ Enter your email ] [ Join the Waitlist → ]
        Uses WaitlistForm component
```

**Mobile (all pillars):** Stack to 100% width. Each pillar is a full-width block. Atmosphere crossfade becomes simple scroll-reveal (each pillar fades in on viewport entry, atmosphere is static per pillar — no crossfade on mobile for performance).

---

### Section 5: THE PROOF

**Layout:** Centered stat + table rows below.
**Background:** `--bg-secondary` (#161C19), warm-tone atmosphere, gold radial glow at 0.08, grid texture, edge vignette.

**Label:** `THE PROOF` — monospace, teal, borderless

**Copy:**
```
Body:     Every solution we scope must return at least
          10 times its cost. This is how we scope
          every engagement.
          Inter 400, 1rem, #E8E8E8

Stat:     10x
          Days One, clamp(5rem, 15vw, 8.75rem), gold (#f0b429)
          Counter animation: 0→10, triggered by whileInView
          Duration: 1.5s easeOut
          Start counting only when section is 50% visible

Below:    Per engagement. That's the scoping standard.
          Inter 600, 1rem, #FFFFFF
```

**Transition:** `Here's what that looks like:` — Inter 400, 0.85rem, rgba(255,255,255,0.50)

**Case study rows (table format, NOT cards):**
```
Row layout: grid-template-columns: 1fr auto 2fr

Row 1:
  Label:    PREMIUM FASHION BRAND
            monospace, 0.75rem, rgba(255,255,255,0.50), uppercase
  Stat:     3.2x
            Days One, 2rem, gold (#f0b429)
            Delta arrow: ↑ (upward, green-tinted)
  Text:     Revenue growth in 6 months. Rebuilt their sales
            engine with SCALE + CODE.
            Inter 400, 1rem, #E8E8E8

Row 2:
  Label:    SAAS STARTUP
  Stat:     60%  ↓ (downward = cost reduction, positive)
  Text:     Cost reduction through automation. Streamlined
            ops with CORE + CODE.

Row 3:
  Label:    SERVICE BUSINESS
  Stat:     5x  ↑
  Text:     Lead generation in 90 days. Repositioned
            with STYLE + SCALE.

Separator:  1px solid rgba(255,255,255,0.06) between rows
Row hover:  bg shifts to rgba(255,255,255,0.03), row slides right 4px
Stats:      count up on scroll-enter, staggered 0.2s each
```

**Disclaimer:**
```
Based on our methodology and projected outcomes.
Named case studies available upon request.
── Inter 300, 0.75rem, rgba(255,255,255,0.50) ──
```

**Mobile:** Rows stack. Stat massive on top, label and text below.

---

### Section 6: THE ARCHITECTS

**Layout:** Co-Founders (50/50) + staggered team below.
**Background:** `--bg-secondary`, cool-tone atmosphere, navy radial glow (#4466CC at 0.08), grid texture, edge vignette.

**Label:** `THE ARCHITECTS` — monospace, teal, borderless

**Subtext:** `16 people. Four disciplines. One system.` — Inter 400, 1.25rem, #E8E8E8

**Co-Founders (50/50):**
```
Left 50% — Dave:
  Avatar:   120px circle, gradient teal→navy, white "DB" initials
            (or real photo when available)
  Name:     Dave Benrouz
            Days One, h3 scale, #FFFFFF
  Title:    Co-Founder & System Architect
            Inter 400, 1rem, rgba(255,255,255,0.60)

Right 50% — Ramtin:
  Avatar:   120px circle, gradient teal→navy, white "RG" initials
            (or real photo when available)
  Name:     Ramtin Ghaffary
            Days One, h3 scale, #FFFFFF
  Title:    Co-Founder
            Inter 400, 1rem, rgba(255,255,255,0.60)

Below (full-width):
  Bio:      MSc in Computer Mathematics from Igor Sikorsky
            KPI. Designed DeltaX because he kept seeing the
            same pattern — companies spending six figures on
            agencies that never shared a single data point.
            Led the system architecture that cut a SaaS
            client's operations cost by 60%. Based in Bali.
            Runs DeltaX with a team of 16.
            Inter 400, 1rem, #E8E8E8
```

**Team — Leads row (72px avatars):**
```
  ╭──────╮   ╭──────╮   ╭──────╮
  │ (AR) │   │ (NK) │   │ (  ) │
  │ 72px │   │ 72px │   │ 72px │
  ╰──────╯   ╰──────╯   ╰──────╯
  Arvin       Nick        Name
  CTO         Tech Lead   Head of Strategy
  CODE        CODE        CORE
```

**Team — Supporting row (48px avatars):**
```
  ╭────╮  ╭────╮  ╭────╮
  │ 48 │  │ 48 │  │ 48 │
  ╰────╯  ╰────╯  ╰────╯
  Name     Name     Name
  Growth   Brand    Operations
  SCALE    STYLE    ΔX
```

Badge colors match sub-brand: CORE=teal pill, CODE=grey pill, SCALE=red pill, STYLE=blue pill, ΔX=navy pill. Borderless text style, not bordered boxes.

**Link:** `→ Meet the full 16-person team` — links to `/about#team`

**Mobile:** Co-founders stack vertically (still large). Team members: 2-column grid, leads 60px, supporting 40px.

---

### Section 7: YOUR PATH

**Layout:** Vertical timeline with large staggered numbers.
**Background:** `--bg-break` (#0D3535) — deep teal. This is the ONE section that breaks the dark palette. 1px top border in rgba(26,155,191,0.15) at the transition for a definitive edge. Grid texture, edge vignette.

**Label:** `YOUR PATH` — monospace, teal, borderless

**Step 1:**
```
Number:   01
          Days One, clamp(4rem, 10vw, 7.5rem), teal (#1A9BBF)

Title:    JOIN THE WAITLIST
          Days One, h3 scale, #FFFFFF

Body:     Secure your spot. We're onboarding in waves —
          early access means priority.
          Inter 400, 1rem, #E8E8E8
```

**Step 2:**
```
Number:   02

Title:    GET YOUR DIAGNOSTIC

Body:     We analyze your business across all 4 engines.
          You get a diagnostic report + custom roadmap.
          The audit is standalone — no commitment beyond it.
          Inter 400, 1rem, #E8E8E8

          ↑ Risk reversal. Important.
```

**Step 3:**
```
Number:   03

Title:    DEPLOY THE SYSTEM

Body:     Strategy, tech, growth, and brand — designed together,
          deployed in 90-day sprints. You see results in weeks,
          not quarters.
          Inter 400, 1rem, #E8E8E8
```

**Timeline connector:** 2px vertical line in rgba(26,155,191,0.25) connecting the numbers. Numbers appear sequentially on scroll with spring physics (opacity 0, scale 0.8 → opacity 1, scale 1).

**Mobile:** Same vertical layout — works natively. Numbers shrink to clamp(3rem, 8vw, 5rem).

---

### Section 8: FINAL CTA

**Layout:** Centered. Simple. Clean.
**Background:** `--bg-primary`. No atmospheric glow. Quiet. Restraint. Only grid texture (atmosphere-grid), NO vignette.

```
Logo:       ΔX mark, 80x67px, white, centered

Headline:   YOU'VE SEEN THE SYSTEM.
            JOIN THE WAITLIST.
            Days One, clamp(2rem, 7vw, 3.5rem), #FFFFFF

Subtext:    Be first in line when we launch.
            Inter 400, 0.85rem, rgba(255,255,255,0.60)

CTA:        [ Enter your email ] [ Join the Waitlist → ]
            Uses WaitlistForm component
            Teal bg button, scale 1.02 on hover, visible glow
```

**Mobile:** Same centered layout, works natively.

---

## 6. ABOUT PAGE

### Route: `/about`

**Section 1 — AboutHero**
```
Background: --bg-primary, teal atmosphere
Headline:   THE SYSTEM BEHIND THE SYSTEM
            Days One, h1 scale, #FFFFFF
Subtext:    DeltaX was born from a simple conviction: businesses
            shouldn't need 4 agencies that never talk to each other.
            Inter 400, 1.25rem, #E8E8E8
```

**Section 2 — Story**
```
Background: --bg-secondary
Layout:     Centered text block, max-w-3xl
Content:    Dave's origin story (2-3 paragraphs).
            Founded in Bali. MSc Computer Mathematics.
            The pattern he kept seeing. Why one system.
```

**Section 3 — TeamGrid (anchor: #team)**
```
Background: --bg-primary, navy atmosphere
Headline:   The Full Team
Layout:     All 16 team members
            3-column desktop, 2-column tablet, 1-column mobile
            Each member: avatar (72px gradient circle) + name + role + pillar badge
            Table-row style on mobile (not card grid)
```

**Section 4 — AboutCTA**
```
Background: --bg-secondary, teal glow
Text:       Ready to work with us?
CTA:        [ Enter your email ] [ Join the Waitlist → ]
            Uses WaitlistForm component
```

---

## 7. CONTACT PAGE

### Route: `/contact`

**Section 1 — ContactHero**
```
Background: --bg-primary, teal atmosphere
Headline:   LET'S TALK
            Days One, h1 scale, #FFFFFF
Subtext:    Have a question or want to reach out
            directly? We'd love to hear from you.
            Inter 400, 1.25rem, #E8E8E8
Info:       contact@thesx.co | Bali, Indonesia
            Social icons (monochrome, minimal)
```

**Section 2 — ContactForm**
```
Background: --bg-secondary

Fields:
  Name:              <input type="text"> required, maxLength 100
  Email:             <input type="email"> required, maxLength 254
  Company:           <input type="text"> optional, maxLength 100
  Biggest challenge: <textarea rows={4}> required, maxLength 500
                     Placeholder: "e.g., We're doing $2M but our ops
                     can't scale past 5 team members."
                     Show character counter: {length}/500
                     resize: vertical only
  Message:           (merged into biggest challenge — one textarea, not two)

Submit:     [ SEND MESSAGE ]

Spam protection:
  - Hidden honeypot field: <input name="website" tabIndex={-1} />
  - Rate limiting: 3 per IP per hour (Vercel KV / upstash)
  - Server-side validation: zod schema
  - All via Server Action (app/api/contact/route.ts)

Post-submission:
  - Form fades out (opacity 0, y: -10, 300ms)
  - Confirmation fades in:
    "We've received your message."
    "Expect a response within 24 hours."
    [Back to Home] [Learn About Our Process]
```

---

## 8. LEGAL PAGES

### Routes: `/privacy`, `/terms`

```
Background: --bg-primary with subtle radial gradient (navy at 0.05) + grid texture
Layout:     max-w-3xl centered, Inter 400, 1rem, #E8E8E8
            Headings: Days One, h3 scale
            Proper semantic HTML: h1, h2, h3, p, ul
Content:    Real legal text (not placeholder)
```

---

## 9. 404 PAGE

```
Background: --bg-primary, subtle teal glow
Content:    ΔX logo (80px)
            "This page doesn't exist yet."
            Days One, h2, #FFFFFF

            3 suggested links:
            → Home    → About    → Contact

            Inter 400, 1rem, teal links
```

---

## 10. NAVBAR

```
Structure:  ΔX | About | Services ▾ | Contact | [Join the Waitlist]

Logo:       ΔX mark (35x29px) + "ΔX" text (Days One, h3, #FFFFFF)
Links:      Inter 400, 0.85rem, #E8E8E8
            Hover: #FFFFFF, teal underline slide-in
CTA:        Teal bg, py-2 px-6, smaller than hero CTA
            Text: "Join the Waitlist"
            Links to /#cta (scrolls to Final CTA section with WaitlistForm)

Services dropdown (desktop):
  - Opens on hover AND on click/Enter/Space
  - Close on mouseleave with 150ms delay
  - Close on Escape
  - Arrow Down opens and focuses first item
  - Items: Core, Code, Scale, Style
  - On Home: smooth-scroll to /#core, /#code, etc.
  - On other pages: navigate to /#core, /#code, etc.
  - Use Radix UI NavigationMenu or Headless UI Menu
  - aria-expanded, aria-haspopup="menu", role="menu"/"menuitem"

Fixed position, z-50:
  Default: bg transparent
  Scroll (>50px): bg #0A0C0B at 80% opacity, backdrop-blur-lg,
                  border-bottom 1px rgba(255,255,255,0.06)
  Transition: 300ms ease (NOT glassmorphism — simple opacity bg)

Height: 64px. Horizontal padding: 24px.

Mobile (< md):
  ΔX logo + hamburger icon (right, 44px tap zone)
  Full-screen overlay on open:
    bg: --bg-primary
    Flat list (NOT nested accordion):
      About
      Core
      Code
      Scale
      Style
      Contact
      [Join the Waitlist] as button at bottom
    Close on X or Escape
```

---

## 11. FOOTER

```
Background: --bg-secondary (#161C19)
Top border: 1px solid rgba(255,255,255,0.06)
Padding: py-12
Max-width: max-w-7xl

4-column grid (desktop):

  Column 1:         Column 2:         Column 3:         Column 4:
  ΔX logo           Services          Company           Legal
  (35x29px)         Core              About             Privacy Policy
                    Code              Contact           Terms of Service
  contact@          Scale
  thesx.co          Style

Social row:
  [X] [LinkedIn] [Instagram]
  Monochrome icons, 20px, rgba(255,255,255,0.50)
  Hover: #E8E8E8

Copyright row:
  © 2026 DeltaX. All rights reserved.
  0.75rem, rgba(255,255,255,0.50)

ONLY link to live pages. No "Coming Soon" links.
Careers, Press, Insights, Case Studies, ΔX Method —
add these ONLY when the pages are live.

Mobile: 2-column, then 1-column for legal. Social icons centered.
```

---

## 12. CTA & WAITLIST SYSTEM

### CTA Placement

The "Join the Waitlist" CTA appears in these locations:
1. **Navbar** — button only (scrolls to nearest WaitlistForm)
2. **Hero** — email input + button (WaitlistForm component)
3. **Post-Engine** — email input + button (WaitlistForm component)
4. **Final CTA** — email input + button (WaitlistForm component)
5. **About page AboutCTA** — email input + button (WaitlistForm component)

All WaitlistForm instances hit the same `/api/waitlist` endpoint.

### User Flow

```
1. User enters email in input field
2. Clicks "Join the Waitlist" (or presses Enter)
3. Frontend validates email format (basic regex)
4. If invalid format → show error inline, do NOT submit
5. POST request to /api/waitlist { email }
6. Button enters loading state (spinner)
7. API validates email server-side
8. API checks if email already exists in Supabase
9. If new:
   a. Insert into Supabase "waitlist" table
   b. Trigger Resend welcome email
   c. Return 201
   d. Frontend shows success: "You're in. Watch your inbox."
10. If duplicate:
    a. Return 409
    b. Frontend shows: "You're already on the list."
11. If server error:
    a. Return 500
    b. Frontend shows: "Something went wrong. Try again."
12. If invalid email (server-side):
    a. Return 400
    b. Frontend shows: "Please enter a valid email."
```

### Exact UI Messages

| State | Message | Style |
|-------|---------|-------|
| Idle | (no message) | — |
| Invalid (client) | "Please enter a valid email." | body-sm, #EF4444 |
| Loading | (spinner replaces button text) | — |
| Success | "You're in. Watch your inbox." | body-lg, #22C55E |
| Duplicate | "You're already on the list." | body-sm, text-muted (not an error) |
| Error | "Something went wrong. Try again." | body-sm, #EF4444 |

### Form Submission Animations

```
Loading:
  Button text fades out (opacity 0, 150ms)
  Spinner fades in (opacity 1, 150ms)
  Spinner: 16px, white, CSS spin animation, 600ms loop

Success:
  Entire form (input + button) fades out ({ opacity: 0, y: -10 }, 300ms)
  Success message fades in ({ opacity: 0, y: 10 } → { opacity: 1, y: 0 }, 300ms, 200ms delay)

Error:
  Input border flashes red (#EF4444)
  Error text appears below: slide down ({ opacity: 0, y: -5 } → { opacity: 1, y: 0 }, 200ms)
```

### Supabase Table Schemas

**Waitlist table:**
```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Policy: only server (service_role) can insert
CREATE POLICY "Service role can insert" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Policy: only server can read
CREATE POLICY "Service role can read" ON waitlist
  FOR SELECT USING (true);
```

**Contacts table (for Contact page form):**
```sql
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  challenge TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert" ON contacts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can read" ON contacts
  FOR SELECT USING (true);
```

### API Route Specs

**Waitlist API — `/api/waitlist`**
```
Method:         POST
Content-Type:   application/json
Body:           { "email": "user@example.com" }

Responses:
  201 Created:          { "message": "Success" }
  400 Bad Request:      { "error": "Invalid email" }
  409 Conflict:         { "error": "Email already exists" }
  500 Server Error:     { "error": "Internal server error" }

Validation:
  - Email format: standard email regex
  - Trim whitespace
  - Convert to lowercase before storing
  - Max length: 254 characters
```

**Contact API — `/api/contact`**
```
Method:         POST
Content-Type:   application/json
Body:           { "name": "...", "email": "...", "company": "...", "challenge": "..." }

Responses:
  201 Created:          { "message": "Success" }
  400 Bad Request:      { "error": "Validation failed", "details": [...] }
  429 Too Many:         { "error": "Rate limit exceeded" }
  500 Server Error:     { "error": "Internal server error" }

Validation (zod schema):
  - name: string, required, max 100
  - email: string, required, valid email, max 254
  - company: string, optional, max 100
  - challenge: string, required, max 500
  - honeypot field "website" must be empty

Rate limiting: 3 per IP per hour
```

### Welcome Email (via Resend)

```
From:       DeltaX <hello@thesx.co>
            (requires domain verification on Resend)

Subject:    You're on the list. ΔX is coming.

Body (plain text version):
    You've secured your spot.

    DeltaX is building something different — a system that connects
    strategy, tech, growth, and brand into one engine for your business.

    We're onboarding in waves. When it's your turn, you'll be the
    first to know.

    — The ΔX Team
    thesx.co

Email style:
    Dark background (#0A0C0B)
    White text (#E8E8E8)
    ΔX logo at top (text-based, not image — for email compatibility)
    Minimal layout, no heavy HTML
    Accent line or small teal element as a divider
    Font: system font stack (emails can't load custom fonts reliably)
```

### Contact Notification Email (via Resend)

```
From:       DeltaX <notifications@thesx.co>
Subject:    New contact form submission from {name}
To:         contact@thesx.co (internal notification)

Body:
    New contact form submission:
    Name: {name}
    Email: {email}
    Company: {company || "Not provided"}
    Challenge: {challenge || "Not provided"}
    Submitted: {timestamp}
```

---

## 13. TECHNICAL ARCHITECTURE

**Stack:**
- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS (custom tokens in tailwind.config.ts)
- Framer Motion (domMax for useScroll/useTransform)
- Supabase (Postgres — waitlist storage + contact form storage)
- Resend (welcome email on waitlist signup + contact form notification)

**Key decisions:**
```
Navbar bg transition:     Vanilla scroll listener + useState, NOT Framer Motion
Hero breathing glow:      CSS @keyframes, NOT JS
Infinite gold pulse:      CSS @keyframes, NOT JS
Counter (10x):            whileInView trigger + animate() on MotionValue
SVG diagram paths:        motion.path with style={{ strokeDashoffset: motionValue }}
Engine atmospheres:       position: sticky (NOT fixed), stacked absolute layers
Before/After dissolve:    ~180vh container, sticky inner, useScroll + useTransform
Terminal → Workflow viz:  Static rendered content (no typewriter animation)
Button shimmer:           CSS conic-gradient + @property --shimmer-angle
Sparklines → Delta arrows: Simplified to ↑/↓ indicators (not SVG sparklines)
```

**Lazy loading:**
- Sections 5-8: `next/dynamic` with `{ ssr: false }`
- Section 3 SVG: SSR the markup, load animation hooks client-side
- All images below Section 2: `loading="lazy"`
- Consider `content-visibility: auto` on Sections 5-8

**Font bundle:**
```tsx
// layout.tsx
import { Days_One, Inter } from 'next/font/google'

const daysOne = Days_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})
```

---

## 14. ACCESSIBILITY

```
MotionConfig:           <MotionConfig reducedMotion="user"> wrapping all children
Focus rings:            focus-visible:ring-2 focus-visible:ring-[#1A9BBF]
                        focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0C0B]
Skip-to-content:        First element in body, visually hidden until focused
Diagrams:               role="img" + aria-label="Flow diagram showing..."
Semantic HTML:          nav, main, section, article, footer
Alt text:               On all images (including decorative avatars)
Heading hierarchy:      Single H1 per page, structured H2-H4
Keyboard nav:           All interactive elements reachable via Tab
                        Services dropdown: arrow keys + Escape
Touch targets:          Minimum 44x44px on all buttons and links
Color contrast:         #E8E8E8 on #0A0C0B = 17.4:1 (AAA pass)
                        #1A9BBF on #0A0C0B = ~8:1 (AA pass)
                        #f0b429 on #0A0C0B = ~7.3:1 (AA pass)
```

---

## 15. SEO & OG

**Per-page metadata (Next.js Metadata API):**
```
Home:     "DeltaX — One System. Four Engines. Total Transformation."
About:    "About DeltaX — The System Behind The System"
Contact:  "Contact DeltaX — Let's Talk"
Privacy:  "Privacy Policy — DeltaX"
Terms:    "Terms of Service — DeltaX"
```

**Meta description:** "Strategy, technology, growth, and brand — engineered into one system. Built for companies doing $500K–$10M. Join the waitlist."

**OG image:** 1200x630, dark bg, ΔX logo, headline text.
- Generate via `@vercel/og` (app/api/og/route.tsx)
- Bundle Days One .ttf in `public/fonts/DaysOne-Regular.ttf`
- Read from filesystem, NOT fetched per request

**Structured data:** JSON-LD Organization schema on home page.
**Sitemap:** `app/sitemap.ts` (auto-generated)
**Robots:** `app/robots.ts` — allow all, point to sitemap
**Favicon:** ΔX mark, dark bg, teal accent. .ico + .svg + apple-touch-icon

**AI SEO:**
- `llms.txt` — research current standards and implement
- Structured data / JSON-LD: Organization schema + WebSite schema
- Research and implement any current AI-discovery best practices

**Analytics:**
- Choose and implement an analytics tool (Google Analytics 4, Plausible, Vercel Analytics, or similar)
- Track: page views, waitlist signups, contact form submissions, scroll depth, CTA clicks
- Event tracking for waitlist form:
  - `waitlist_submit` — form submitted
  - `waitlist_success` — email saved
  - `waitlist_duplicate` — duplicate email
  - `waitlist_error` — submission failed
- Event tracking for contact form:
  - `contact_submit` — form submitted
  - `contact_success` — message saved
  - `contact_error` — submission failed

---

## 16. RESPONSIVE STRATEGY

**Breakpoints (Tailwind defaults):**
```
base:  < 640px   (mobile)
sm:    640px+     (large phones)
md:    768px+     (tablets)
lg:    1024px+    (laptops)
xl:    1280px+    (desktops)
```

**Section-by-section mobile behavior:**

| Section | Desktop | Mobile |
|---------|---------|--------|
| Hero | 60/40 asymmetric | Stack. Logo on top (centered, 80px), content below. CTA full-width. |
| Problem | Two columns + dissolve | Stack vertically. Static split. |
| System | Horizontal SVG diagram | Simplified vertical SVG |
| Engine | Sticky + scroll-linked crossfade | Full-width stack, static atmospheres |
| Proof | Table rows (3-col grid) | Stack: stat on top, text below |
| Architects | Co-founders 50/50 + staggered team | Co-founders stacked, team 2-col grid |
| Path | Vertical timeline | Same, numbers smaller |
| CTA | Centered | Same |
| Navbar | Logo + links + dropdown + CTA | Logo + hamburger |
| Footer | 4-column | 2-column then 1-column |

**Test targets:** iPhone SE (375px), iPhone 14 (390px), iPad (768px), iPad Pro (1024px), Laptop (1440px), Desktop (1920px)

---

## 17. ENVIRONMENT VARIABLES

### Required `.env.local` File

Create inside `codebase/.env.local` — it is gitignored.

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://nbkbcntkqkmlpuwulmub.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<ask project owner>
SUPABASE_SERVICE_ROLE_KEY=<ask project owner>

# Resend (backend dev sets this up)
RESEND_API_KEY=<created by backend dev on resend.com>

# Site
NEXT_PUBLIC_SITE_URL=https://thesx.co
```

### Supabase Details

| Property | Value |
|----------|-------|
| Organization | DeltaX Org |
| Project name | DeltaX Landing Project |
| Project ID | `nbkbcntkqkmlpuwulmub` |
| URL | `https://nbkbcntkqkmlpuwulmub.supabase.co` |
| Dashboard | `https://supabase.com/dashboard/project/nbkbcntkqkmlpuwulmub` |

### Key Types

| Key | Prefix | Visible to Browser? | Use |
|-----|--------|---------------------|-----|
| `NEXT_PUBLIC_SUPABASE_URL` | `NEXT_PUBLIC_` | Yes | Client-side Supabase connection |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `NEXT_PUBLIC_` | Yes | Client-side queries (limited by RLS) |
| `SUPABASE_SERVICE_ROLE_KEY` | None | No (server only) | Server-side admin operations (API routes) |
| `RESEND_API_KEY` | None | No (server only) | Sending emails from API routes |

### Who Needs What

| Role | Needs These Vars | How They Get Them |
|------|-----------------|-------------------|
| **All frontend devs** | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` | From project owner (shared securely) |
| **Backend dev** | All Supabase vars + `RESEND_API_KEY` | From project owner + creates Resend account |
| **Deploy dev** | All vars | Sets them in Vercel dashboard → Settings → Environment Variables |

### Security Rules

- `.env.local` is in `.gitignore` (Next.js does this by default)
- No keys committed to git history
- `SUPABASE_SERVICE_ROLE_KEY` is NEVER used in client-side code
- `RESEND_API_KEY` is NEVER used in client-side code
- RLS is enabled on all tables
- Keys are set in deployment platform (Vercel) for production
- Keys shared via encrypted DM or password manager — NOT git, Slack, email, or plain text

---

## 18. BUILD ORDER & TIMELINE

**Realistic estimate: 14-16 working days (1 senior dev)**
**Or: 8-10 days with 2 devs in parallel**

### Phase 1 — Foundation (Days 1-2)
```
layout.tsx (fonts, metadata, MotionConfig)
globals.css (tokens, atmosphere classes, grid texture)
tailwind.config.ts (custom colors, extend)
DeltaXLogo.tsx (SVG component with currentColor)
ScrollReveal.tsx (reusable whileInView wrapper)
Navbar.tsx (fixed, glass, dropdown via Radix/Headless)
Footer.tsx (4-column grid)
```

### Phase 2 — Home Page (Days 3-9)
```
Day 3:   Hero.tsx (breathing glow, asymmetric layout, cursor proximity, WaitlistForm)
Day 4-5: TheProblem.tsx (scroll-linked dissolve, sticky architecture)
Day 5-7: TheSystem.tsx (SVG flow diagram, scroll-driven paths) ← HARDEST
Day 7-9: TheEngine.tsx (4 unique layouts, sticky atmosphere crossfade) ← HARDEST
Day 9:   TheProof.tsx (counter, table rows, delta arrows)
Day 9:   TheArchitects.tsx (featured + staggered team)
Day 10:  YourPath.tsx (vertical timeline, deep teal band)
Day 10:  FinalCTA.tsx (simple centered CTA with WaitlistForm)
Day 10:  page.tsx (assemble all sections)
```

### Phase 3 — Secondary Pages (Days 11-12)
```
About page (4 sections, AboutCTA with WaitlistForm)
Contact page (form + validation + Server Action)
API routes:
  /api/waitlist (email validation, Supabase insert, Resend welcome email)
  /api/contact (form validation, honeypot, rate limiting, Supabase insert, Resend notification)
  /api/og (OG image generation with bundled Days One .ttf)
Email templates (waitlist welcome + contact notification)
Legal pages (Privacy, Terms — real content)
404 page
```

### Phase 4 — Production (Days 13-14)
```
SEO (metadata, sitemap, robots, JSON-LD, OG images, llms.txt)
Accessibility pass (focus rings, skip link, aria, reduced motion test)
Responsive QA (6 device sizes × 5 pages)
Performance audit (Lighthouse 90+ target)
Analytics setup + event tracking
```

### Critical path:
```
Foundation → Navbar → Hero → Problem (scroll) → System (SVG) → Engine (sticky) → remaining → secondary pages → production
```

**The 3 hardest components (budget 60% of time):**
1. TheSystem.tsx — responsive SVG diagram with scroll-driven path animation
2. TheEngine.tsx — sticky atmosphere crossfade with 4 unique layouts
3. TheProblem.tsx — scroll-linked dissolve with sticky positioning

---

## CHANGES FROM V3 SPEC

| # | V3 Original | This Spec |
|---|-------------|-----------|
| 1 | CTA: "Book Your ΔX Audit" everywhere | CTA: "Join the Waitlist" everywhere |
| 2 | No waitlist system defined | Full waitlist system (user flow, API, Supabase schema, Resend email) |
| 3 | Contact hero: "Book Your ΔX Audit" | Contact hero: "LET'S TALK" |
| 4 | Final CTA: "LET'S SCOPE YOURS" | Final CTA: "JOIN THE WAITLIST" |
| 5 | No env vars documentation | Full env vars section with Supabase details |
| 6 | No contact API defined | Contact API with validation, honeypot, rate limiting |
| 7 | Your Path Step 1: "Book Your ΔX Audit" | Your Path Step 1: "JOIN THE WAITLIST" |
| 8 | Post-Engine CTA: "Book Your ΔX Audit" | Post-Engine CTA: email input + "Join the Waitlist" |
| 9 | No notification email spec | Contact notification email to contact@thesx.co |
| 10 | No analytics events defined | Waitlist + contact form event tracking |

## CHANGES FROM BLUEPRINT ALIGNMENT

| # | Previous Spec | Updated To Match BLUEPRINT |
|---|---------------|---------------------------|
| 1 | Dave title: "Chief System Architect" | "Co-Founder & System Architect" |
| 2 | Architects layout: Featured founder (60/40) | Co-Founders 50/50 (Dave + Ramtin co-equal) + staggered team |
| 3 | About hero: "We don't consult. We build." | "THE SYSTEM BEHIND THE SYSTEM" |
| 4 | Contact hero: "Get In Touch." | "LET'S TALK" |
| 5 | About SEO: "The Team Behind the System" | "The System Behind The System" |
| 6 | Contact SEO: "Get In Touch" | "Let's Talk" |
| 7 | Hero choreography: 200ms cascades (up to 1000ms) | Faster: 0/100/200/250/400ms |
| 8 | Hero logo: 200x167px | 120x100px |
| 9 | Hero mobile: ΔX visual hidden | Stacks vertically, logo on top (centered, 80px) |
| 10 | Proof bg: --bg-primary | --bg-secondary (#161C19) |
| 11 | Final CTA bg: teal glow, more intense than hero | No glow. Quiet. Only grid texture, NO vignette. |
| 12 | Counter animation: 800ms max | 1.5s easeOut |
| 13 | Scroll reveal y-offset: y: 40 | y: 30 |
| 14 | Scroll reveal viewport: amount: 0.2 | margin: "-100px" |
| 15 | Stagger timing: 0.1s | 0.08 |
| 16 | Footer bg: --bg-primary | --bg-secondary (#161C19) |
| 17 | Contact challenge field: optional | required (TEXT NOT NULL) |
| 18 | Contact submit: "Send →" | "SEND MESSAGE" |
| 19 | Navbar link color: rgba(255,255,255,0.50) | #E8E8E8 |
| 20 | Your Path titles: sentence case | UPPERCASE (JOIN THE WAITLIST, GET YOUR DIAGNOSTIC, DEPLOY THE SYSTEM) |

---

*This document is the single source of truth. Every color is from brand DNA. Every layout is unique. Every animation is specified. Every mobile behavior is defined. CTA is "Join the Waitlist" — email capture driven. Build from this.*
