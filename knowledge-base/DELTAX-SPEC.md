# DeltaX (ΔX) — Landing Page Specification v2

> **This document is the single source of truth.**
> Every decision has been made. Every word has been written. Every spec has been defined.
> Build exactly what's in here. If it's not in here, it doesn't exist in v1.

---

## TABLE OF CONTENTS

1. [Product Overview](#1-product-overview)
2. [Tech Stack](#2-tech-stack)
3. [Domain](#3-domain)
4. [Visual Identity](#4-visual-identity)
5. [Typography Scale](#5-typography-scale)
6. [Spacing System](#6-spacing-system)
7. [Component Specs](#7-component-specs)
8. [Page Structure & Copy](#8-page-structure--copy)
9. [Animation Specs](#9-animation-specs)
10. [CTA & Waitlist System](#10-cta--waitlist-system)
11. [Environment Variables](#11-environment-variables)
12. [SEO, Analytics & Technical Requirements](#12-seo-analytics--technical-requirements)
13. [Responsive Design](#13-responsive-design)
14. [Folder Structure](#14-folder-structure)
15. [Out of Scope](#15-out-of-scope)
16. [Summary](#16-summary)

---

## 1. PRODUCT OVERVIEW

### What is DeltaX?

DeltaX is a business transformation ecosystem that combines strategy, technology, automation, and brand positioning into one integrated system. Instead of hiring separate agencies for each discipline, businesses get one unified system where every piece feeds into the others.

### The 10x Value Rule

Every solution DeltaX delivers must generate at least 10x its cost. This is not a tagline — it's an operational rule.

### The Formula

```
DeltaX = Strategy (Core) + Build (Code) + Growth (Scale) + Brand (Style)
```

### The 4 Sub-Brands / Pillars

| Pillar | Name | Role | What It Does |
|--------|------|------|-------------|
| Strategy & Diagnostics | X CORE | The audit | Business diagnostics, custom roadmap, systems architecture, gap analysis |
| Technology & Automation | X CODE | The machine | AI automation, CRM & integrations, backend systems |
| Growth & Revenue | X SCALE | The fuel | Lead generation, sales systems, performance scaling |
| Brand & Perception | X STYLE | The signal | Branding & identity, design & visuals, market positioning |

**How CORE connects to the rest:**
Every engagement starts with X CORE. It audits the business and recommends the right combination of Code, Scale, and Style based on what the business actually needs. The client then chooses what to implement.

```
CORE audits → recommends from Code, Scale, Style → client picks → we build
```

### Target Audience

- Businesses doing $500K–$10M+ revenue
- Companies with fragmented systems (tech doesn't talk to sales, brand doesn't match product)
- Founders tired of hiring multiple freelancers/agencies with zero cohesive results
- Businesses ready to systematize and scale

---

## 2. TECH STACK

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 14 (App Router) | Frontend + API routes |
| Styling | Tailwind CSS | Utility-first CSS |
| Animations | Framer Motion | Scroll animations, transitions |
| Database | Supabase (Postgres) | Waitlist email storage |
| Email | Resend | Welcome email on signup |
| Deployment | Dev team decides | Vercel recommended but not required |

---

## 3. DOMAIN

```
thesx.co
```

---

## 4. VISUAL IDENTITY

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `bg-primary` | `#0A0A0A` | Page background |
| `bg-surface` | `#111111` | Cards, section backgrounds |
| `bg-surface-hover` | `#1A1A1A` | Card hover states |
| `accent-cyan` | `#00E5FF` | Primary accent, CTAs, highlights |
| `accent-cyan-hover` | `#00CCE5` | Button hover state |
| `accent-purple` | `#7B61FF` | Secondary accent, gradients, depth |
| `text-primary` | `#F5F5F5` | Headings, primary text |
| `text-secondary` | `#CCCCCC` | Body text, descriptions |
| `text-muted` | `#888888` | Labels, meta text, placeholders |
| `border-default` | `#1E1E1E` | Card borders, dividers |
| `border-hover` | `#333333` | Hover state borders |
| `gradient` | `#00E5FF → #7B61FF` | Transformation gradient (cyan to purple) |
| `success` | `#22C55E` | Success states |
| `error` | `#EF4444` | Error states |

### Theme

- **Dark mode only.** No light mode. No toggle.

### Design Vibe

- Dark, bold, premium
- Sharp and systematic — should feel like a well-oiled machine
- Minimal but powerful — every element earns its space
- NOT playful, NOT corporate-boring
- Think: Linear, Vercel, Stripe dark mode

---

## 5. TYPOGRAPHY SCALE

**Font Family:** Inter (primary choice) — fallback: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

If Inter is unavailable or dev team prefers, Geist is acceptable. Pick one. Do not mix.

### Scale

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `display` | 72px | 700 (Bold) | 1.0 | -0.02em | Hero headline only |
| `h1` | 56px | 700 (Bold) | 1.1 | -0.02em | Section headlines |
| `h2` | 40px | 600 (Semibold) | 1.2 | -0.01em | Sub-headlines |
| `h3` | 24px | 600 (Semibold) | 1.3 | 0 | Card titles, pillar names |
| `body-lg` | 20px | 400 (Regular) | 1.6 | 0 | Section subtexts |
| `body` | 16px | 400 (Regular) | 1.6 | 0 | General body text |
| `body-sm` | 14px | 400 (Regular) | 1.5 | 0 | Meta text, tags, labels |
| `caption` | 12px | 500 (Medium) | 1.4 | 0.05em | Micro text, badges, uppercase labels |

### Responsive Scaling

| Token | Desktop | Tablet (md) | Mobile (sm) |
|-------|---------|-------------|-------------|
| `display` | 72px | 56px | 40px |
| `h1` | 56px | 40px | 32px |
| `h2` | 40px | 32px | 24px |
| `h3` | 24px | 20px | 18px |
| `body-lg` | 20px | 18px | 16px |
| `body` | 16px | 16px | 16px |

---

## 6. SPACING SYSTEM

Use Tailwind's default spacing scale (4px base unit). These are the key values:

### Section Spacing

| Property | Value |
|----------|-------|
| Section vertical padding | `py-24` (96px) desktop / `py-16` (64px) mobile |
| Section max-width | `max-w-7xl` (1280px) |
| Section horizontal padding | `px-6` (24px) mobile / `px-8` (32px) desktop |
| Between section headline and content | `mb-16` (64px) desktop / `mb-12` (48px) mobile |
| Between headline and subtext | `mb-6` (24px) |

### Card Spacing

| Property | Value |
|----------|-------|
| Card padding | `p-8` (32px) desktop / `p-6` (24px) mobile |
| Card gap (grid) | `gap-6` (24px) |
| Card border radius | `rounded-xl` (12px) |
| Card border | 1px solid `border-default` (#1E1E1E) |

### Component Spacing

| Property | Value |
|----------|-------|
| Between elements inside card | `gap-4` (16px) |
| Between tag and title | `mb-2` (8px) |
| Between title and description | `mb-4` (16px) |
| Navbar height | `h-16` (64px) |
| Navbar horizontal padding | `px-6` (24px) |

---

## 7. COMPONENT SPECS

### Primary Button (CTA)

```
Background:     #00E5FF (accent-cyan)
Text color:     #0A0A0A (bg-primary — dark text on cyan)
Font:           16px, 600 weight (Semibold)
Padding:        12px 32px (py-3 px-8)
Border radius:  8px (rounded-lg)
Hover:          background #00CCE5, box-shadow: 0 0 20px rgba(0, 229, 255, 0.3)
Active:         scale(0.98)
Transition:     all 200ms ease
Disabled:       opacity 0.5, cursor not-allowed
Loading:        text replaced with spinner (16px, white)
```

### Email Input

```
Background:     #111111 (bg-surface)
Border:         1px solid #1E1E1E (border-default)
Text color:     #F5F5F5 (text-primary)
Placeholder:    #888888 (text-muted)
Font:           16px, 400 weight
Padding:        12px 16px (py-3 px-4)
Border radius:  8px (rounded-lg)
Width:          100% on mobile, 360px on desktop
Focus:          border-color #00E5FF, box-shadow: 0 0 0 2px rgba(0, 229, 255, 0.2)
Error:          border-color #EF4444
Transition:     border-color 200ms ease
```

### Input + Button Layout

```
Desktop:    Inline — input and button side by side in a row
            Input: flex-1 (fills space), Button: auto width
            Gap: 12px (gap-3)
Mobile:     Stacked — input on top, button below, both full width
            Gap: 12px (gap-3)
```

### Pillar Card

```
Background:     #111111 (bg-surface)
Border:         1px solid #1E1E1E (border-default)
Border radius:  16px (rounded-2xl)
Padding:        32px (p-8)
Hover:          border-color transitions to pillar accent color
                background shifts to #1A1A1A
                subtle lift: translateY(-4px)
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3)
Transition:     all 300ms ease

Pillar accent colors (used for borders and tags on hover):
  X CORE:   #00E5FF (cyan)
  X CODE:   #7B61FF (purple)
  X SCALE:  #22C55E (green)
  X STYLE:  #F59E0B (amber)
```

### Problem Card

```
Same as pillar card but simpler:
Background:     #111111
Border:         1px solid #1E1E1E
Border radius:  12px (rounded-xl)
Padding:        24px (p-6)
Hover:          border-color #333333, background #1A1A1A
Transition:     all 200ms ease
Icon/number:    Top of card, text-muted color, 14px caption style
```

### Result Card (Placeholder)

```
Background:     #111111
Border:         1px solid #1E1E1E
Border radius:  16px (rounded-2xl)
Padding:        32px (p-8)
Metric number:  display size (72px), gradient text (cyan → purple), bold
Company type:   body-sm, text-muted, uppercase
Description:    body, text-secondary
```

### Team Card

```
Background:     #111111
Border:         1px solid #1E1E1E
Border radius:  16px (rounded-2xl)
Padding:        24px (p-6)
Text align:     center
Photo:          96px x 96px circle, centered
                Placeholder: gradient circle (#00E5FF → #7B61FF) with initials in center
                When real: object-fit cover, rounded-full
Name:           h3 (24px semibold), text-primary, mt-4 below photo
Position:       body (16px regular), text-secondary, mt-1
Pillar badge:   caption (12px medium), uppercase, mt-3
                Pill shape: px-3 py-1, rounded-full
                Background: pillar accent color at 10% opacity
                Text color: pillar accent color
                ΔX badge uses gradient background at 10% opacity, cyan text
Hover:          border-color #333333, translateY(-2px)
Transition:     all 200ms ease

Grid: 3 columns desktop, 2 columns tablet, 1 column mobile
Gap: 24px (gap-6)
```

### Metric Block (10x Section)

```
Number:         display size (72px), bold, gradient text (cyan → purple)
Label:          body (16px), text-muted
Layout:         3 blocks in a row, centered, gap-16 (64px)
Mobile:         Stack vertically, gap-12 (48px)
```

### Step Card (How It Works)

```
Layout:         Horizontal timeline on desktop, vertical on mobile
Step number:    48px circle, border 2px solid accent-cyan, centered number
                Number: h3 size, accent-cyan color, bold
Connector line: 2px solid #1E1E1E, stretches between circles
Title:          h3 (24px semibold), text-primary
Description:    body (16px regular), text-secondary
```

---

## 8. PAGE STRUCTURE & COPY

The page has **11 sections** and tells a story: **Hook → Problem → Solution → System → Promise → Proof → People → Process → Action**

---

### Section 1: Navbar

**Structure:**
- Left: Logo "ΔX" (h3 size, bold, text-primary)
- Center: Nav links — "Core", "Code", "Scale", "Style" (body-sm, text-muted, hover: text-primary)
- Right: Button — "Join the Waitlist" (primary button, smaller: py-2 px-6)

**Behavior:**
- Position: fixed, top: 0, full width, z-50
- Default state: background transparent
- On scroll (past 50px): background #0A0A0A with 80% opacity, backdrop-blur-lg, border-bottom 1px solid #1E1E1E
- Mobile: center links hidden, replaced with hamburger icon (right side), button hidden
- Mobile menu: full-screen overlay, bg-primary, links stacked vertically center-aligned, "Join the Waitlist" button at bottom

**Copy:**
```
Logo:       ΔX
Links:      Core    Code    Scale    Style
Button:     Join the Waitlist
```

---

### Section 2: Hero

**Layout:**
- Full viewport height (min-h-screen)
- Content centered vertically and horizontally
- Text centered
- Max-width for text: 800px
- Background: subtle animated grid pattern (see Animation Specs section)

**Copy:**
```
Headline:       The delta between where you are
                and where you should be. We close it.

Subtext:        DeltaX is the operating system for business transformation.
                Strategy, technology, growth, and brand — engineered into
                one system.

Input:          [Enter your email]  [Join the Waitlist]

Micro-text:     Join 0+ founders waiting for early access.
```

**Notes:**
- "delta" in the headline should have gradient text (cyan → purple)
- The "0+" in micro-text is a counter. Hardcode "0+" for now. Dev team can optionally make this dynamic from Supabase count later (not required for v1).
- Micro-text: body-sm, text-muted

---

### Section 3: Problem

**Layout:**
- Headline + subtext centered
- 4 cards in a 2x2 grid (desktop), 1 column (mobile)

**Copy:**
```
Headline:       Most businesses are broken in four places.
Subtext:        And they try to fix them separately. That's the problem.

Card 1:
  Number:       01
  Title:        No Strategy
  Text:         Decisions are reactive. There's no system —
                just guessing and hoping.

Card 2:
  Number:       02
  Title:        Manual Everything
  Text:         Operations run on duct tape. No automation,
                no integrations, no leverage.

Card 3:
  Number:       03
  Title:        No Growth Engine
  Text:         Revenue depends on luck, not a system.
                No pipeline, no predictability.

Card 4:
  Number:       04
  Title:        Invisible Brand
  Text:         Looks like everyone else. No positioning,
                no perception, no pull.
```

---

### Section 4: Solution — The Delta

**Layout:**
- Centered text block
- Max-width: 700px
- Minimal section — just words, no cards or visuals

**Copy:**
```
Headline:       One system. Four engines. Total transformation.

Body:           Delta means change. X is your business.
                DeltaX is the system that closes the gap — connecting
                strategy, technology, growth, and brand into one machine
                that compounds.

Tagline:        Stop patching. Start building.
```

**Notes:**
- "Delta" in body text: accent-cyan color
- "X" in body text: accent-purple color
- Tagline: h3 size, gradient text (cyan → purple), mt-8

---

### Section 5: The 4 Pillars

**Layout:**
- Headline + subtext centered
- 4 pillar cards in a 2x2 grid (desktop), 1 column (mobile)
- Each card has: tag, title, description, deliverables list

**Copy:**
```
Section headline:   The ΔX Engine
Section subtext:    Four systems. One outcome. 10x growth.

--- Card 1 ---
Tag:            THE AUDIT
Title:          X CORE — Strategy & Diagnostics
Description:    Every engagement starts here. We diagnose your business —
                systems, operations, revenue, and brand — and build a
                custom roadmap of exactly what needs to change. No guessing.
                No generic packages. We tell you what's broken, what's
                missing, and what to build — then you choose.
Deliverables:   Business Diagnostics · Custom Roadmap · Systems Architecture · Gap Analysis
Footer note:    CORE is your entry point. After the audit, we recommend
                the right combination of Code, Scale, and Style based on
                what your business actually needs.

--- Card 2 ---
Tag:            THE MACHINE
Title:          X CODE — Technology & Automation
Description:    We build the infrastructure that runs your business while
                you sleep. AI automation, integrations, and backend systems
                that eliminate manual work.
Deliverables:   AI Automation · CRM & Integrations · Backend Systems

--- Card 3 ---
Tag:            THE FUEL
Title:          X SCALE — Growth & Revenue
Description:    We engineer predictable revenue. Lead generation, sales
                systems, and performance frameworks that turn strangers
                into customers on repeat.
Deliverables:   Lead Generation · Sales Systems · Performance Scaling

--- Card 4 ---
Tag:            THE SIGNAL
Title:          X STYLE — Brand & Perception
Description:    We control how the market sees you. Brand identity, visual
                systems, and positioning that make you impossible to ignore
                and impossible to confuse.
Deliverables:   Brand Identity · Visual Design · Market Positioning
```

**Notes:**
- Tag: caption style (12px, uppercase, medium weight), pillar accent color
- Title: h3, text-primary
- Description: body, text-secondary
- Deliverables: body-sm, text-muted, separated by " · " (middle dot)
- Footer note (CORE only): body-sm, text-muted, italic, top border 1px #1E1E1E, pt-4 mt-4
- CORE card can be slightly larger or span full width to emphasize it as the entry point (dev team decides layout, but it should feel like "this one comes first")

---

### Section 6: The 10x Promise

**Layout:**
- Centered text block + 3 metric blocks in a row below

**Copy:**
```
Headline:       The 10x Rule.

Body:           Every solution we build must return at least 10 times
                its cost. This isn't marketing. It's how we operate.
                If the math doesn't work, we don't do it.

Metric 1:
  Number:       10x
  Label:        Minimum ROI on every engagement

Metric 2:
  Number:       4
  Label:        Integrated systems working as one

Metric 3:
  Number:       0
  Label:        Wasted effort in the system
```

**Notes:**
- "10x" in the headline: gradient text (cyan → purple)
- Metric numbers: display size, gradient text, bold
- Labels: body, text-muted, centered under number

---

### Section 7: Results / Proof (PLACEHOLDER)

**Layout:**
- Headline + subtext centered
- 3 result cards in a row (desktop), 1 column (mobile)

**Copy:**
```
Headline:       The Delta in Action
Subtext:        Real transformations. Real numbers.

--- Card 1 ---
Company type:   E-COMMERCE BRAND
Metric:         3.2x
Description:    Revenue growth in 6 months. Rebuilt their sales engine
                with X SCALE and X CODE.

--- Card 2 ---
Company type:   SAAS STARTUP
Metric:         60%
Description:    Cost reduction through automation. Streamlined operations
                with X CORE and X CODE.

--- Card 3 ---
Company type:   SERVICE BUSINESS
Metric:         5x
Description:    Lead generation in 90 days. Repositioned with X STYLE
                and scaled with X SCALE.
```

**Notes:**
- Mark in code: `{/* TODO: Replace with real case studies */}`
- Company type: caption style, uppercase, text-muted
- Metric: display size, gradient text, bold
- Description: body, text-secondary

---

### Section 8: Team (NEW)

**Layout:**
- Headline + subtext centered
- 6 team cards in a 3x2 grid (desktop), 2x3 (tablet), 1 column (mobile)

**Copy:**
```
Headline:       The people behind the delta.
Subtext:        Operators, not theorists. Every member of DeltaX has built,
                scaled, or transformed businesses firsthand.

--- Member 1 ---
Photo:          Placeholder (gradient circle with initials)
Name:           Alex Morgan
Position:       Founder & CEO
Badge:          ΔX

--- Member 2 ---
Photo:          Placeholder
Name:           Jordan Lee
Position:       Head of Strategy
Badge:          CORE

--- Member 3 ---
Photo:          Placeholder
Name:           Sam Chen
Position:       Head of Technology
Badge:          CODE

--- Member 4 ---
Photo:          Placeholder
Name:           Taylor Brooks
Position:       Head of Growth
Badge:          SCALE

--- Member 5 ---
Photo:          Placeholder
Name:           Riley Patel
Position:       Head of Brand
Badge:          STYLE

--- Member 6 ---
Photo:          Placeholder
Name:           Casey Nguyen
Position:       Operations Lead
Badge:          ΔX
```

**Notes:**
- Mark in code: `{/* TODO: Replace with real team data and photos */}`
- Names are placeholder. Will be replaced with real names and photos.
- Badge colors match pillar accent colors (CORE=cyan, CODE=purple, SCALE=green, STYLE=amber, ΔX=cyan)
- Photo placeholder: 96px circle, gradient background (cyan → purple), white initials centered (h3 size, bold)

---

### Section 9: How It Works

**Layout:**
- Headline centered
- 3 steps in a horizontal timeline (desktop), vertical (mobile)
- Steps connected by a line

**Copy:**
```
Headline:       Three steps to your delta.

Step 1:
  Number:       01
  Title:        Join the Waitlist
  Text:         Secure your spot. We're onboarding in waves — early
                access means priority.

Step 2:
  Number:       02
  Title:        Get Your ΔX Audit
  Text:         We analyze your business and find exactly where the
                gaps are. Strategy, tech, growth, brand — all assessed.

Step 3:
  Number:       03
  Title:        We Build Your System
  Text:         Custom-engineered for your business. Strategy, tech,
                growth, brand — connected and deployed.
```

---

### Section 10: Final CTA

**Layout:**
- Centered text block
- Dark background with subtle gradient overlay (cyan → purple at very low opacity, ~5%)
- Input + button centered below text

**Copy:**
```
Headline:       Your business has a delta. Let's close it.
Subtext:        Join the waitlist. Be first in line when we launch.

Input:          [Enter your email]  [Join the Waitlist]
```

**Notes:**
- "delta" in headline: gradient text (cyan → purple)
- This section should feel conclusive — the final push

---

### Section 11: Footer

**Layout:**
- Max-width same as content (max-w-7xl)
- Top border: 1px solid #1E1E1E
- Padding: py-12
- Three-column layout: logo (left), links (center), socials (right)
- Copyright below, full width, centered, mt-8, border-top 1px #1E1E1E, pt-8

**Copy:**
```
Logo:           ΔX

Links:          Core    Code    Scale    Style

Contact:        contact@thesx.co

Socials:        [X icon]  [LinkedIn icon]  [Instagram icon]
                (placeholder URLs — # for now)

Copyright:      © 2026 DeltaX. All rights reserved.
```

**Notes:**
- Logo: h3 size, bold, text-primary
- Links: body-sm, text-muted, hover: text-primary
- Contact: body-sm, text-muted
- Social icons: 20px, text-muted, hover: text-primary
- Copyright: body-sm, text-muted

---

## 9. ANIMATION SPECS

All animations use **Framer Motion**. Every spec below is exact — implement as written.

### Global Defaults

```
Default easing:     [0.25, 0.1, 0.25, 1.0]  (CSS ease equivalent)
Smooth easing:      [0.16, 1, 0.3, 1]        (smooth deceleration)
Spring config:      { stiffness: 100, damping: 20 }
```

### Scroll Reveal (applies to ALL sections)

Every section fades in when it enters the viewport:

```
Trigger:            When element is 20% visible in viewport
Initial state:      { opacity: 0, y: 40 }
Animate to:         { opacity: 1, y: 0 }
Duration:           600ms
Easing:             smooth easing [0.16, 1, 0.3, 1]
Once:               true (only animates once, does not reverse)
```

### Stagger (cards, grid items, team members)

When a group of cards enters the viewport, they animate in one after another:

```
Stagger delay:      100ms between each child
Each child:         same scroll reveal animation as above
Container trigger:  when container is 20% visible
```

### Navbar

```
Scroll threshold:   50px
Transparent → solid transition:
  Property:         background-color, border-bottom, backdrop-filter
  Duration:         300ms
  Easing:           ease
```

### Hero — Background Grid

```
Type:               CSS grid pattern (lines) OR subtle dot grid
Color:              #1E1E1E at 50% opacity
Animation:          Slow pulse/breathe effect
                    Opacity oscillates between 0.3 and 0.6
                    Duration: 4000ms
                    Loop: infinite
                    Easing: ease-in-out
Alternative:        If grid looks bad, use a radial gradient:
                    Centered, cyan at 5% opacity, fading to transparent
                    Slow scale pulse (1.0 → 1.1 → 1.0), 8000ms loop
```

### Hero — Text Entrance

```
Headline:
  Initial:          { opacity: 0, y: 30 }
  Animate:          { opacity: 1, y: 0 }
  Duration:         800ms
  Delay:            200ms (after page load)
  Easing:           smooth easing

Subtext:
  Same animation
  Delay:            500ms

Input + Button:
  Same animation
  Delay:            800ms

Micro-text:
  Same animation
  Delay:            1000ms
```

### Gradient Text

```
Implementation:     background: linear-gradient(135deg, #00E5FF, #7B61FF)
                    -webkit-background-clip: text
                    -webkit-text-fill-color: transparent
No animation:       Static gradient, no shimmer
```

### Pillar Cards — Hover

```
On hover:
  Transform:        translateY(-4px)
  Border color:     transitions to pillar accent color
  Background:       transitions to #1A1A1A
  Box shadow:       0 8px 32px rgba(0, 0, 0, 0.3)
  Duration:         300ms
  Easing:           ease

On leave:
  All properties transition back
  Duration:         300ms
```

### Primary Button — Hover

```
On hover:
  Background:       #00CCE5
  Box shadow:       0 0 20px rgba(0, 229, 255, 0.3)
  Duration:         200ms
  Easing:           ease

On click/active:
  Transform:        scale(0.98)
  Duration:         100ms
```

### Email Input — Focus

```
On focus:
  Border color:     #00E5FF
  Box shadow:       0 0 0 2px rgba(0, 229, 255, 0.2)
  Duration:         200ms
  Easing:           ease
```

### Form Submission States

```
Loading:
  Button text fades out (opacity 0, 150ms)
  Spinner fades in (opacity 1, 150ms)
  Spinner: 16px, white, CSS spin animation, 600ms loop

Success:
  Entire form (input + button) fades out ({ opacity: 0, y: -10 }, 300ms)
  Success message fades in ({ opacity: 0, y: 10 } → { opacity: 1, y: 0 }, 300ms, 200ms delay)
  Success text: "You're in. Watch your inbox." (body-lg, success color #22C55E)

Error:
  Input border flashes red (#EF4444)
  Error text appears below: slide down ({ opacity: 0, y: -5 } → { opacity: 1, y: 0 }, 200ms)
  Error text: body-sm, error color #EF4444

Duplicate:
  Same as error but message is different (see CTA section for exact messages)
```

### Smooth Scroll (Navbar Links)

```
Behavior:           scroll-behavior: smooth (CSS) OR Framer Motion scrollIntoView
Duration:           ~800ms (browser-controlled if CSS, or manual 800ms if JS)
Offset:             -80px (account for fixed navbar height + 16px breathing room)
```

### Team Cards — Photo Placeholder

```
Gradient circle:    static gradient (cyan → purple)
No animation on the gradient itself
Hover on card:      same subtle lift as pillar cards (translateY(-2px), 200ms)
```

### How It Works — Timeline

```
Desktop:
  Line draws in from left to right as section enters viewport
  Initial:          { scaleX: 0, transformOrigin: "left" }
  Animate:          { scaleX: 1 }
  Duration:         800ms
  Easing:           smooth easing

  Step circles appear sequentially after line:
  Delay:            200ms, 500ms, 800ms (for steps 1, 2, 3)
  Animation:        { opacity: 0, scale: 0.5 } → { opacity: 1, scale: 1 }
  Duration:         400ms each
  Easing:           spring { stiffness: 100, damping: 20 }

Mobile:
  Line draws top to bottom (scaleY instead of scaleX)
  Same timing
```

---

## 10. CTA & WAITLIST SYSTEM

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
| Duplicate | "You're already on the list." | body-sm, #888888 (text-muted, not an error) |
| Error | "Something went wrong. Try again." | body-sm, #EF4444 |

### Supabase Table Schema

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### API Route Spec

```
Path:           /api/waitlist
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
    Dark background (#0A0A0A)
    White text (#F5F5F5)
    ΔX logo at top (text-based, not image — for email compatibility)
    Minimal layout, no heavy HTML
    Accent line or small gradient element (cyan → purple) as a divider
    Font: system font stack (emails can't load custom fonts reliably)
```

---

## 11. ENVIRONMENT VARIABLES

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Resend
RESEND_API_KEY=your_resend_api_key

# Site
NEXT_PUBLIC_SITE_URL=https://thesx.co
```

- **Do NOT commit .env files to git.**
- Use `.env.local` for development.
- Set environment variables in deployment platform for production.
- Add `.env.local` and `.env` to `.gitignore`.

---

## 12. SEO, ANALYTICS & TECHNICAL REQUIREMENTS

> **Dev team: you must research, decide, and implement ALL of the following.**
> These are NOT optional. They are required for a production-quality launch.
> Research current 2026 best practices for each item.

### SEO — Required

- [ ] Meta title: "DeltaX — The Business Transformation Engine"
- [ ] Meta description: "Strategy, technology, growth, and brand — engineered into one system. Join the waitlist."
- [ ] Open Graph tags (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags (summary_large_image)
- [ ] OG image: create a branded 1200x630 image (dark bg, ΔX logo, tagline)
- [ ] Canonical URL: https://thesx.co
- [ ] Proper heading hierarchy (single H1 = hero headline, structured H2s for sections)
- [ ] Alt text on all images (including team photos)
- [ ] Semantic HTML (nav, main, section, footer)
- [ ] Sitemap (`/sitemap.xml`)
- [ ] Robots file (`/robots.txt`) — allow all crawlers, point to sitemap
- [ ] Favicon: ΔX symbol, dark bg, cyan accent (provide .ico + .svg + apple-touch-icon)

### AI SEO — Required

- [ ] `llms.txt` — research current standards and implement
- [ ] Structured data / JSON-LD: Organization schema + WebSite schema
- [ ] Research and implement any current AI-discovery best practices

### Analytics — Required

- [ ] Choose and implement an analytics tool (Google Analytics 4, Plausible, Vercel Analytics, or similar)
- [ ] Track: page views, waitlist signups, scroll depth, CTA clicks
- [ ] Implement event tracking for waitlist form:
  - `waitlist_submit` — form submitted
  - `waitlist_success` — email saved
  - `waitlist_duplicate` — duplicate email
  - `waitlist_error` — submission failed
- [ ] Set up conversion tracking (waitlist signup = conversion)

### Performance — Required

- [ ] Lighthouse score: 90+ across ALL categories (Performance, Accessibility, Best Practices, SEO)
- [ ] Optimize images: WebP format, lazy loading, responsive srcset
- [ ] Minimize JavaScript bundle size
- [ ] Font loading: preload Inter/Geist, font-display: swap
- [ ] Implement Next.js Image component for any images
- [ ] Code splitting: each section lazy loaded if beneficial

### Deployment — Required

- [ ] Choose deployment platform (Vercel recommended)
- [ ] Set up CI/CD pipeline
- [ ] Configure custom domain: thesx.co
- [ ] SSL certificate (automatic on Vercel)
- [ ] Set up preview deployments for PRs
- [ ] Configure proper caching headers

---

## 13. RESPONSIVE DESIGN

### Breakpoints (Tailwind defaults)

| Name | Min Width | Targets |
|------|-----------|---------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

### Section-by-Section Responsive Behavior

| Section | Desktop (lg+) | Tablet (md) | Mobile (sm/base) |
|---------|--------------|-------------|------------------|
| Navbar | Logo + links + button | Logo + links + button (smaller) | Logo + hamburger |
| Hero | Full display size headline | Scaled down headline | 40px headline, stacked form |
| Problem | 2x2 grid | 2x2 grid | 1 column |
| Solution | Centered text | Centered text | Centered text, smaller type |
| Pillars | 2x2 grid | 2x1 grid | 1 column |
| 10x Promise | 3 metrics in row | 3 metrics in row | 1 column stacked |
| Results | 3 cards in row | 2+1 layout | 1 column |
| Team | 3x2 grid | 2x3 grid | 1 column |
| How It Works | Horizontal timeline | Horizontal timeline | Vertical timeline |
| Final CTA | Inline input + button | Inline input + button | Stacked |
| Footer | 3 columns | 3 columns | 1 column stacked |

### Testing Targets

- iPhone SE (375px)
- iPhone 14 (390px)
- iPad (768px)
- iPad Pro (1024px)
- Laptop (1440px)
- Desktop (1920px)

---

## 14. FOLDER STRUCTURE

```
deltax-landing/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Main page, imports all sections
│   ├── globals.css             # Tailwind imports, global styles
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts        # POST endpoint for waitlist
│   └── fonts/                  # Local font files (Inter/Geist)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Solution.tsx
│   ├── Pillars.tsx
│   ├── Promise.tsx
│   ├── Results.tsx
│   ├── Team.tsx                # NEW
│   ├── HowItWorks.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── Button.tsx          # Primary button component
│       ├── Input.tsx           # Email input component
│       ├── Card.tsx            # Reusable card wrapper
│       ├── GradientText.tsx    # Gradient text wrapper
│       ├── SectionWrapper.tsx  # Consistent section padding/max-width
│       └── WaitlistForm.tsx    # Shared form (used in Hero + Final CTA)
├── lib/
│   ├── supabase.ts             # Supabase client init
│   └── resend.ts               # Resend client init
├── public/
│   ├── og-image.png            # Open Graph image (1200x630)
│   ├── favicon.ico
│   ├── favicon.svg
│   └── apple-touch-icon.png
├── .env.local                  # Local env vars (DO NOT COMMIT)
├── .gitignore
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 15. OUT OF SCOPE (Not for v1)

Do NOT implement any of the following:

- Admin dashboard for waitlist
- User authentication / login
- Blog or content pages
- Privacy policy / Terms of service pages
- Multi-language support
- Payment / pricing pages
- Dark/light mode toggle
- Contact form (beyond waitlist)
- Chatbot or live support
- Dynamic waitlist counter (hardcode "0+")
- Real case studies (use placeholders)
- Real team photos (use gradient placeholders)

---

## 16. SUMMARY

| Item | Decision |
|------|----------|
| Product | DeltaX — business transformation ecosystem |
| Domain | thesx.co |
| Page type | Single-page landing (11 sections) |
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion (full specs in Section 9) |
| Theme | Dark only (#0A0A0A background) |
| Primary accent | #00E5FF (cyan) |
| Secondary accent | #7B61FF (purple) |
| Font | Inter (fallback: Geist) |
| CTA | "Join the Waitlist" |
| Database | Supabase (Postgres) |
| Email service | Resend |
| Contact email | contact@thesx.co |
| Socials | Placeholder icons (URLs TBD) |
| SEO/Analytics | Dev team must research and implement fully |
| Legal pages | Not in v1 |
| Case studies | Placeholder data |
| Team | 6 placeholder members |
| Deployment | Dev team decides (Vercel recommended) |

---

## PAGE FLOW (Final Order)

```
1.  Navbar
2.  Hero                    → Hook
3.  Problem                 → Pain
4.  Solution                → Answer
5.  Pillars                 → System
6.  10x Promise             → Credibility
7.  Results (placeholder)   → Proof
8.  Team (placeholder)      → People
9.  How It Works            → Process
10. Final CTA               → Action
11. Footer                  → Close
```

---

*This document is the single source of truth. Every decision is made. Every word is written. Every spec is defined. Build from this.*
