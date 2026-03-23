# EngineCode — Technology & Automation Pillar

## Metadata
- **Phase:** 2
- **Branch:** `home/engine`
- **Output File(s):** `src/components/home/EngineCode.tsx`
- **Depends On:** Phase 0 (Foundation), Phase 1 (ScrollReveal, SectionLabel, Card)
- **Estimated Complexity:** Medium
- **Note:** This is ONE of 4 pillar components. It will be imported by `TheEngine.tsx` (prompt 04e). Do NOT create TheEngine.tsx — only create EngineCode.tsx.

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

EngineCode represents the X CODE sub-brand — DeltaX's technology and automation arm. It is the "machine" that eliminates manual operations. This component has a UNIQUE layout compared to EngineCore: it uses a full-width design centered around a before/after workflow visualization block, NOT the 60/40 split used by CORE.

The centerpiece is a Card component showing a before/after comparison of manual vs. automated workflows. This visually demonstrates the transformation CODE delivers — crossing out the old way and showing the new.

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
// <SectionLabel color="code">THE MACHINE</SectionLabel>

// Card — card with optional left accent border
import { Card } from "@/components/ui/Card";
// <Card variant="left-accent" accentColor="code">...</Card>
```

## Requirements

1. Add `"use client"` directive at top
2. Wrapping `<div>` with `id="code"` for anchor linking
3. No section-level background — this component lives inside TheEngine.tsx which provides the background
4. Layout: full-width with workflow visualization as centerpiece
5. Tag: `<SectionLabel color="code">THE MACHINE</SectionLabel>`
6. Tagline below tag: "Automate. Build. Ship."
7. Workflow visualization block inside a Card component (the visual centerpiece)
8. Title and body text below the workflow card
9. Deliverables line below body
10. ScrollReveal on content blocks, workflow rows stagger in (80ms each)
11. Mobile: full-width, workflow comparison still readable at small widths
12. Container: `max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24`

## Copy (Exact Text)

**Tag:** `THE MACHINE`

**Tagline:** `Automate. Build. Ship.`

**Workflow rows (4 pairs):**
```
BEFORE                    AFTER
Manual invoicing     →    Auto-generated
Spreadsheet CRM      →    Integrated pipeline
Email onboarding     →    Automated sequences
Monthly reporting    →    Real-time dashboard
```

**Title:** `X CODE — Technology & Automation`

**Body:**
```
We build the infrastructure that eliminates manual operations. Automation, integrations, backend systems — engineered to run without you.
```

**Deliverables:** `AI Automation · CRM & Integrations · Backend Systems`

## Styles

**Container:**
- `id="code"` on the wrapping `<div>`
- `max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24`

**Tag + Tagline wrapper:**
- `mb-8 lg:mb-12`
- Tag: `<SectionLabel color="code">THE MACHINE</SectionLabel>`
- Tagline: `font-display text-sm text-text-dim uppercase tracking-wider mt-2`

**Workflow visualization block:**
- Wrapped in `<Card variant="left-accent" accentColor="code">`
- Inside the card: `p-6 lg:p-8`
- Each row is a flex container: `flex items-center gap-4 lg:gap-6 py-3`
- Between rows: `border-b` with `style={{ borderColor: "rgba(255, 255, 255, 0.04)" }}` (last row no border)
- BEFORE text (left): `font-mono text-sm text-text-muted line-through flex-1 min-w-[140px] lg:min-w-[200px]`
- Arrow: `font-mono text-sm text-code-bright flex-shrink-0` — displays `→`
- AFTER text (right): `font-mono text-sm text-text-body flex-1 min-w-[140px] lg:min-w-[200px]`

**Title:**
- Use `<h3>` for the pillar title. The section headline 'THE ΔX ENGINE' is `<h2>`, pillar titles are `<h3>`.
- `font-display text-xl lg:text-2xl text-text-hero mt-8`

**Body:**
- `font-body text-base text-text-body mt-4 leading-relaxed max-w-2xl`

**Deliverables:**
- `font-body text-sm text-text-muted mt-4`

## Animations

**ScrollReveal entrance:**
- Tag + Tagline: `<ScrollReveal delay={0} direction="up">`
- Workflow Card: `<ScrollReveal delay={0.1} direction="up">`
- Title + Body + Deliverables: `<ScrollReveal delay={0.2} direction="up">`

**Workflow row stagger:**
- Each workflow row uses Framer Motion `motion.div` with `initial={{ opacity: 0, x: -10 }}`, `whileInView={{ opacity: 1, x: 0 }}`, `viewport={{ once: true }}`, `transition={{ delay: index * 0.08, duration: 0.4 }}`
- Import `motion` from `"framer-motion"` for this

## Responsive Behavior

- **Base (mobile, <1024px):** Full-width. Workflow card at full width. Before/after text at smaller sizes (`text-xs` or `text-sm`). Min-width on columns set to `min-w-[140px]` to keep layout readable. `py-16` vertical padding.
- **lg (1024px+):** Full-width layout. Workflow card padding increases (`p-8`). Before/after text at `text-sm` with `min-w-[200px]`. `py-24` vertical padding.

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
| 1 | EngineCode.tsx | `src/components/home/EngineCode.tsx` |

- Single named export: `export function EngineCode()`
- `"use client"` directive: yes
- Total lines: ~100-140
- No additional files created
- No files modified

**ONLY rules:**
- ONLY use Tailwind token classes (never raw hex in className)
- ONLY use the 4 imported items listed above (motion, ScrollReveal, SectionLabel, Card)
- ONLY create the one file specified
- ONLY use named export
- ONLY use the exact workflow row data specified (4 rows, exact text)
- ONLY use inline styles for hex/rgba values not available as Tailwind tokens

**Test:** Render `<EngineCode />` in isolation against a dark background. You should see "THE MACHINE" tag, then a card with a grey left accent border containing 4 before/after workflow rows. Each BEFORE item has a strikethrough, an arrow in grey, and the AFTER equivalent. The rows stagger in on scroll. Below the card: title "X CODE — Technology & Automation", body text, and deliverables. On mobile, the workflow comparison still reads left-to-right with smaller text. No layout breaks at any viewport width.
