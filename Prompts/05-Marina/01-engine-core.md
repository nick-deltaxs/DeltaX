# EngineCore — Strategy & Diagnostics Pillar

## Metadata
- **Phase:** 2
- **Branch:** `home/engine`
- **Output File(s):** `src/components/home/EngineCore.tsx`
- **Depends On:** Phase 0 (Foundation), Phase 1 (ScrollReveal, SectionLabel, DeltaXLogo)
- **Estimated Complexity:** Low-Medium
- **Note:** This is ONE of 4 pillar components. It will be imported by `TheEngine.tsx` (prompt 04e). Do NOT create TheEngine.tsx — only create EngineCore.tsx.

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

EngineCore represents the X CORE sub-brand — DeltaX's strategy and diagnostics arm. It's the first pillar in the "engine" section and represents where every client engagement begins: an audit that diagnoses the business and produces a custom roadmap.

This component uses a 60/40 asymmetric layout (wider content left, tighter details right). The DeltaX logo with a breathing teal glow anchors the left side visually. The overall feel is authoritative and clinical — this is the diagnostic layer.

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
// <SectionLabel color="core">THE AUDIT</SectionLabel>

// DeltaXLogo — SVG with currentColor
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
// <DeltaXLogo size={80} className="text-core-bright" />
```

## Requirements

1. Add `"use client"` directive at top
2. Section `id="core"` for anchor linking
3. No section-level background — this component lives inside TheEngine.tsx which provides the background
4. Layout: `grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12` (60/40 asymmetric)
5. Tag: `<SectionLabel color="core">THE AUDIT</SectionLabel>`
6. Tagline below tag: "Audit. Diagnose. Map." styled text
7. Left column (60%): DeltaXLogo with breathing glow, title, body paragraph
8. Right column (40%): Deliverables list, footer note with top border
9. ScrollReveal on each column with stagger
10. Mobile: stacks vertically, logo centered
11. Container: `max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24`

## Copy (Exact Text)

**Tag:** `THE AUDIT`

**Tagline:** `Audit. Diagnose. Map.`

**Title:** `X CORE — Strategy & Diagnostics`

**Body:**
```
Every engagement starts here. We diagnose your business — systems, operations, revenue, brand — and build a custom roadmap of exactly what needs to change. Every roadmap is built from your numbers. Nothing templated.
```

**Deliverables:**
```
Business Diagnostics
Custom Roadmap
Systems Architecture
Gap Analysis
```

**Footer note:**
```
This is where every engagement begins. After the audit, we recommend the right mix of Code, Scale, and Style.
```

## Styles

**Container:**
- `id="core"` on the wrapping `<div>` element (not section — this lives inside TheEngine's section)
- `max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24`

**Tag + Tagline wrapper:**
- `mb-8 lg:mb-12`
- Tag: `<SectionLabel color="core">THE AUDIT</SectionLabel>`
- Tagline: `font-display text-sm lg:text-base text-text-dim uppercase tracking-wider mt-2`

**Grid:**
- `grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-start`

**Left column — Logo with glow:**
- `relative` container for logo and glow
- DeltaXLogo: `<DeltaXLogo size={80} className="text-core-bright relative z-10" />`
- Breathing glow: `absolute -inset-4 rounded-full glow-breathe` with `style={{ background: "radial-gradient(circle, rgba(26, 155, 191, 0.10) 0%, transparent 70%)" }}` and `className="blur-2xl"`
- On mobile: `flex justify-center` wrapper, on desktop: `flex justify-start`

**Left column — Title:**
- Use `<h3>` for the pillar title. The section headline 'THE ΔX ENGINE' is `<h2>`, pillar titles are `<h3>`.
- `font-display text-xl lg:text-2xl text-text-hero mt-6`

**Left column — Body:**
- `font-body text-base text-text-body mt-4 leading-relaxed max-w-lg`

**Right column — Deliverables:**
- Each item: `font-body text-sm text-text-muted`
- Items separated by `·` (middle dot) or listed vertically with `mb-1` spacing
- Display as a comma-separated inline list: `"Business Diagnostics · Custom Roadmap · Systems Architecture · Gap Analysis"`
- `font-body text-sm text-text-muted leading-relaxed`

**Right column — Footer note:**
- `border-t pt-4 mt-4` with `style={{ borderColor: "rgba(255, 255, 255, 0.06)" }}`
- `font-body text-sm text-text-muted italic`

## Animations

**ScrollReveal entrance:**
- Left column: `<ScrollReveal delay={0} direction="up">`
- Right column: `<ScrollReveal delay={0.15} direction="up">`

**Breathing glow (CSS — already defined in globals.css):**
- Uses `.glow-breathe` class which runs `@keyframes breathe` at 4s ease-in-out infinite

## Responsive Behavior

- **Base (mobile, <1024px):** Single column stack. Logo centered (`justify-center`). Title and body centered or left-aligned. Right column content flows below. `py-16` vertical padding. Gap `gap-8`.
- **lg (1024px+):** 60/40 grid layout. Logo left-aligned. `py-24` vertical padding. Gap `gap-12`.

## Imports

```tsx
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
```

## Expected Output

This prompt produces exactly **1 file:**

| # | File | Location |
|---|------|----------|
| 1 | EngineCore.tsx | `src/components/home/EngineCore.tsx` |

- Single named export: `export function EngineCore()`
- `"use client"` directive: yes
- Total lines: ~80-120
- No additional files created
- No files modified

**ONLY rules:**
- ONLY use Tailwind token classes (never raw hex in className)
- ONLY use the 3 imported components listed above
- ONLY create the one file specified
- ONLY use named export
- ONLY use inline styles for hex/rgba values not available as Tailwind tokens

**Test:** Render `<EngineCore />` in isolation against a dark background. Left side shows the DeltaX logo in teal with a breathing glow, followed by the "X CORE" title and body text. Right side shows deliverables as a dot-separated list, with an italic footer note separated by a thin top border. On mobile, it stacks vertically with the logo centered. The breathing glow should pulse smoothly.
