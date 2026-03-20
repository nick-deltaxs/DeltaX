# EngineStyle — Brand & Perception Pillar

## Metadata
- **Phase:** 2
- **Branch:** `home/engine`
- **Output File(s):** `src/components/home/EngineStyle.tsx`
- **Depends On:** Phase 0 (Foundation), Phase 1 (ScrollReveal, SectionLabel, Card)
- **Estimated Complexity:** Medium
- **Note:** This is ONE of 4 pillar components. It will be imported by `TheEngine.tsx` (prompt 04e). Do NOT create TheEngine.tsx — only create EngineStyle.tsx.

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

EngineStyle represents the X STYLE sub-brand — DeltaX's brand and perception arm. It is the "signal" that makes a business unmistakable. This component has a UNIQUE layout: 50/50 editorial split with a mood contrast block on the left — NOT the same as CORE (60/40), CODE (full-width), or SCALE (70/30).

The left side features a Card with word pairs showing the transformation from generic to unmistakable. The visual language is editorial and refined — each word pair shows the old (struck through, muted) versus the new (bold, colored in style-bright blue-purple).

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
// <SectionLabel color="style">THE SIGNAL</SectionLabel>

// Card — card with optional left accent border
import { Card } from "@/components/ui/Card";
// <Card variant="left-accent" accentColor="style">...</Card>
```

## Requirements

1. Add `"use client"` directive at top
2. Wrapping `<div>` with `id="style"` for anchor linking
3. No section-level background — this component lives inside TheEngine.tsx which provides the background
4. Layout: `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12` (50/50 editorial split)
5. Tag: `<SectionLabel color="style">THE SIGNAL</SectionLabel>`
6. Tagline: "Design. Brand. Position."
7. Left column (50%): Mood contrast block inside a Card
8. Right column (50%): Title, body, deliverables
9. ScrollReveal on content. Word pairs stagger in (100ms each).
10. Mobile: stacks — mood block on top, text below. Full-width.
11. Container: `max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24`

## Copy (Exact Text)

**Tag:** `THE SIGNAL`

**Tagline:** `Design. Brand. Position.`

**Word pairs (3 pairs — old to new):**
```
generic       →  unmistakable
forgettable   →  undeniable
commodity     →  category-of-one
```

**Title:** `X STYLE — Brand & Perception`

**Body:**
```
We shape how the market perceives you. Brand identity, visual systems, and positioning that make you unmistakable.
```

**Deliverables:** `Brand Identity · Visual Design · Market Positioning`

## Styles

**Container:**
- `id="style"` on the wrapping `<div>`
- `max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24`

**Tag + Tagline wrapper:**
- `mb-8 lg:mb-12`
- Tag: `<SectionLabel color="style">THE SIGNAL</SectionLabel>`
- Tagline: `font-display text-sm text-text-dim uppercase tracking-wider mt-2`

**Grid:**
- `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start`

**Left column — Mood contrast block:**
- Wrapped in `<Card variant="left-accent" accentColor="style">`
- Card background override: `style={{ backgroundColor: "rgba(110, 117, 255, 0.05)" }}`
- Inside the card: `p-6 lg:p-8 space-y-6`
- Each word pair is a `<motion.div>` row: `flex items-center gap-4 lg:gap-6`
- Old word (left): `font-body text-base text-text-muted line-through flex-1`
- Arrow: `text-style-bright/50 flex-shrink-0 font-mono text-sm` — displays `→`
- New word (right): `font-display text-base text-style-bright flex-1`

**Word pairs data (for mapping):**
```tsx
const wordPairs = [
  { old: "generic", new: "unmistakable" },
  { old: "forgettable", new: "undeniable" },
  { old: "commodity", new: "category-of-one" },
];
```

**Right column:**
- Title: Use `<h3>` for the pillar title. The section headline 'THE ΔX ENGINE' is `<h2>`, pillar titles are `<h3>`. `font-display text-xl lg:text-2xl text-text-hero`
- Body: `font-body text-base text-text-body mt-4 leading-relaxed`
- Deliverables: `font-body text-sm text-text-muted mt-4`

## Animations

**ScrollReveal entrance:**
- Tag + Tagline: `<ScrollReveal delay={0} direction="up">`
- Grid (both columns): `<ScrollReveal delay={0.1} direction="up">`

**Word pair stagger:**
- Each word pair row uses `<motion.div>` with:
```tsx
initial={{ opacity: 0, y: 8 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
```
- Pair 0: delay 0
- Pair 1: delay 0.1
- Pair 2: delay 0.2

Import `motion` from `"framer-motion"` for the word pair stagger.

## Responsive Behavior

- **Base (mobile, <1024px):** Single column stack. Mood contrast block on top at full width, text below. Card padding `p-6`. Word pair text stays `text-base` — readable at all widths. `py-16` vertical padding. Gap `gap-8`.
- **lg (1024px+):** 50/50 grid layout. Mood block in left column. Text in right column. Card padding increases to `p-8`. `py-24` vertical padding. Gap `gap-12`.

## Imports

```tsx
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
```

## Expected Output

This prompt produces exactly **1 file:**

| # | File | Location |
|---|------|----------|
| 1 | EngineStyle.tsx | `src/components/home/EngineStyle.tsx` |

- Single named export: `export function EngineStyle()`
- `"use client"` directive: yes
- Total lines: ~100-130
- No additional files created
- No files modified

**ONLY rules:**
- ONLY use Tailwind token classes (never raw hex in className)
- ONLY use the 4 imported items listed above (motion, ScrollReveal, SectionLabel, Card)
- ONLY create the one file specified
- ONLY use named export
- ONLY use the exact 3 word pairs specified (generic/unmistakable, forgettable/undeniable, commodity/category-of-one)
- ONLY use inline styles for hex/rgba values not available as Tailwind tokens
- ONLY use Framer Motion `whileInView` for word pair stagger animation

**Test:** Render `<EngineStyle />` in isolation against a dark background. Left side shows a card with a blue-purple left accent border and faint blue-purple background. Inside: three word pairs stagger in — each row shows the old word (struck through, muted) with an arrow, and the new word (blue-purple, display font). Right side shows "X STYLE — Brand & Perception" title, body text, and deliverables. On mobile: mood block on top, text below. Word pairs trigger stagger animation when scrolled into view.
