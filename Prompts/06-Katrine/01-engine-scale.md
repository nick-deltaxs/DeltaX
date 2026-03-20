# EngineScale — Growth & Revenue Pillar

## Metadata
- **Phase:** 2
- **Branch:** `home/engine`
- **Output File(s):** `src/components/home/EngineScale.tsx`
- **Depends On:** Phase 0 (Foundation), Phase 1 (ScrollReveal, SectionLabel)
- **Estimated Complexity:** Medium
- **Note:** This is ONE of 4 pillar components. It will be imported by `TheEngine.tsx` (prompt 04e). Do NOT create TheEngine.tsx — only create EngineScale.tsx.

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

EngineScale represents the X SCALE sub-brand — DeltaX's growth and revenue arm. It is the "fuel" that drives predictable, compounding growth. This component has a UNIQUE layout: 70/30 split with a massive visual element on the left (abstract growth bars) and tight text on the right. This is NOT the same layout as CORE (60/40) or CODE (full-width).

The left side features abstract CSS gradient bars that grow progressively wider, creating a visual metaphor for accelerating growth. A large watermark "GROWTH" text sits behind the bars for additional visual weight.

## Color Tokens

```
bg-primary #0A0C0B | bg-secondary #161C19
core-bright #1A9BBF | code-bright #8A8A8A | scale-bright #D94040 | style-bright #6E75FF
gold #f0b429 | text-hero #FFFFFF | text-body #E8E8E8 | text-dim rgba(255,255,255,0.60) | text-muted rgba(255,255,255,0.50)
```

## Component Signatures (Available Imports)

```tsx
// ScrollReveal — wraps content with whileInView fade-in
import { ScrollReveal } from "@/components/ui/ScrollReveal";
// <ScrollReveal delay={0} direction="up">...</ScrollReveal>

// SectionLabel — pill-shaped label with sub-brand color
import { SectionLabel } from "@/components/ui/SectionLabel";
// <SectionLabel color="scale">THE FUEL</SectionLabel>
```

## Requirements

1. Add `"use client"` directive at top
2. Wrapping `<div>` with `id="scale"` for anchor linking
3. No section-level background — this component lives inside TheEngine.tsx which provides the background
4. Layout: `grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8 lg:gap-12` (70/30 asymmetric)
5. Tag: `<SectionLabel color="scale">THE FUEL</SectionLabel>`
6. Tagline: "Target. Acquire. Grow."
7. Left column (70%): Abstract growth bars visualization with "GROWTH" watermark
8. Right column (30%): Title, body, deliverables
9. ScrollReveal on content. Bars animate width on scroll-into-view.
10. Mobile: stacks — bars on top, text below. Full-width.
11. Container: `max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24`

## Copy (Exact Text)

**Tag:** `THE FUEL`

**Tagline:** `Target. Acquire. Grow.`

**Title:** `X SCALE — Growth & Revenue`

**Body:**
```
Predictable revenue. Lead systems, sales architecture, and performance frameworks — built to multiply.
```

**Deliverables:** `Lead Generation · Sales Systems · Performance Scaling`

**Watermark text:** `GROWTH`

## Styles

**Container:**
- `id="scale"` on the wrapping `<div>`
- `max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24`

**Tag + Tagline wrapper:**
- `mb-8 lg:mb-12`
- Tag: `<SectionLabel color="scale">THE FUEL</SectionLabel>`
- Tagline: `font-display text-sm text-text-dim uppercase tracking-wider mt-2`

**Grid:**
- `grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8 lg:gap-12 items-center`

**Left column — Growth bars visualization:**
- Outer container: `relative p-8 lg:p-12`
- 4 bars, each a `<motion.div>`:
  - Bar 1: `h-3 rounded-full bg-scale-bright/20` — animates to `w-[25%]`
  - Bar 2: `h-3 rounded-full bg-scale-bright/30 mt-3` — animates to `w-[45%]`
  - Bar 3: `h-3 rounded-full bg-scale-bright/50 mt-3` — animates to `w-[70%]`
  - Bar 4: `h-3 rounded-full bg-scale-bright/80 mt-3` — animates to `w-[95%]`
- Each bar starts at `w-0` and animates to final width via Framer Motion `whileInView`
- Watermark "GROWTH" text:
  - `absolute bottom-0 right-0 lg:bottom-4 lg:right-4`
  - `font-display text-6xl lg:text-7xl text-scale-bright/[0.15] select-none pointer-events-none`
  - `leading-none`

**Right column:**
- Title: Use `<h3>` for the pillar title. The section headline 'THE ΔX ENGINE' is `<h2>`, pillar titles are `<h3>`. `font-display text-xl lg:text-2xl text-text-hero`
- Body: `font-body text-base text-text-body mt-4 leading-relaxed`
- Deliverables: `font-body text-sm text-text-muted mt-4`

## Animations

**ScrollReveal entrance:**
- Tag + Tagline: `<ScrollReveal delay={0} direction="up">`
- Grid (both columns): `<ScrollReveal delay={0.1} direction="up">`

**Growth bar width animation:**
- Each bar uses `<motion.div>` with:
```tsx
initial={{ width: 0 }}
whileInView={{ width: "FINAL_PERCENTAGE" }}
viewport={{ once: true }}
transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
```
- Bar 1: whileInView `width: "25%"`, delay 0
- Bar 2: whileInView `width: "45%"`, delay 0.15
- Bar 3: whileInView `width: "70%"`, delay 0.30
- Bar 4: whileInView `width: "95%"`, delay 0.45

Import `motion` from `"framer-motion"` for the bar animations.

## Responsive Behavior

- **Base (mobile, <1024px):** Single column stack. Bars section on top at full width, text below. Watermark "GROWTH" text scales down to `text-5xl`. Bars use same percentage widths but relative to full container width. `py-16` vertical padding.
- **lg (1024px+):** 70/30 grid layout. Bars in left 70%. Text in right 30%. Watermark text `text-7xl`. `py-24` vertical padding.

## Imports

```tsx
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
```

## Expected Output

This prompt produces exactly **1 file:**

| # | File | Location |
|---|------|----------|
| 1 | EngineScale.tsx | `src/components/home/EngineScale.tsx` |

- Single named export: `export function EngineScale()`
- `"use client"` directive: yes
- Total lines: ~100-130
- No additional files created
- No files modified

**ONLY rules:**
- ONLY use Tailwind token classes (never raw hex in className)
- ONLY use the 3 imported items listed above (motion, ScrollReveal, SectionLabel)
- ONLY create the one file specified
- ONLY use named export
- ONLY use Framer Motion `whileInView` for bar animation (no CSS @keyframes for bars)
- ONLY use inline styles for hex/rgba values not available as Tailwind tokens
- ONLY use the exact 4 bar specifications (25%, 45%, 70%, 95%)

**Test:** Render `<EngineScale />` in isolation against a dark background. Left side shows 4 gradient bars growing from 0 to their final width in staggered order when scrolled into view. The bars go from subtle (20% opacity red) to bold (80% opacity red). A faint "GROWTH" watermark text sits behind the bars. Right side shows "X SCALE — Growth & Revenue" title, body text, and deliverables. On mobile: bars on top (full width), text below. Bar animation triggers on scroll-into-view.
