# Hero Section

## Metadata
- **Phase:** 2
- **Branch:** `home/hero`
- **Output File(s):** `src/components/home/Hero.tsx`
- **Depends On:** Phase 0 (Foundation), Phase 1 (ScrollReveal, DeltaXLogo, WaitlistForm)
- **Estimated Complexity:** Medium

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

The Hero is the first section visitors see on thesx.co. It occupies the full viewport (min-h-screen), uses a 60/40 asymmetric layout (left = content, right = logo), and establishes the DeltaX brand atmosphere with a teal radial glow, grid texture, and edge vignette. It contains the primary WaitlistForm CTA. On mobile, the right side (logo) is hidden and the layout stacks vertically.

## Color Tokens

```
bg-primary #0A0C0B | bg-secondary #161C19 | bg-tertiary #1C2320 | bg-break #0D3535
core-bright #1A9BBF | code-bright #8A8A8A | scale-bright #D94040 | style-bright #6E75FF | deltax-bright #4466CC
gold #f0b429 | success #22C55E | error #EF4444
text-hero #FFFFFF | text-body #E8E8E8 | text-dim rgba(255,255,255,0.60) | text-muted rgba(255,255,255,0.50)
```

## Component Signatures (Available Imports)

```tsx
// ScrollReveal — wraps content with whileInView fade-in
import { ScrollReveal } from "@/components/ui/ScrollReveal";
// <ScrollReveal delay={0} direction="up">...</ScrollReveal>

// DeltaXLogo — SVG with currentColor
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
// <DeltaXLogo size={80} className="text-text-hero" />

// WaitlistForm — email + JOIN WAITLIST button, self-contained
import { WaitlistForm } from "@/components/ui/WaitlistForm";
// <WaitlistForm />
```

## Requirements

1. Add `"use client"` directive at top (component uses Framer Motion)
2. Create a full-viewport hero section with `min-h-screen`, `flex items-center`, `bg-primary`
3. Add a `::before` pseudo-element via a positioned div for teal radial glow (top-right, `#1A9BBF` at 0.07 opacity, CSS radial-gradient)
4. Apply `atmosphere-grid` class for grid texture overlay
5. Apply `atmosphere-vignette` class for edge vignette
6. Use 60/40 asymmetric layout: left side (60%) = content, right side (40%) = logo
7. Left side: headline, subtext, WaitlistForm, qualifier text, built-for text
8. Right side: DeltaXLogo at `size={120}` centered, with breathing teal glow behind it (a div with `glow-breathe` class, bg radial-gradient teal at 0.15 opacity, rounded-full, blur-3xl, absolute positioned behind the logo)
9. Right side is hidden on mobile (`hidden md:flex`)
10. Stagger entrance animations using ScrollReveal with delays: headline 0s, subtext 0.1s, form 0.2s, qualifier 0.25s, logo 0.4s
11. Section `id="hero"`
12. Container uses `max-w-7xl mx-auto px-6 lg:px-8`

## Copy (Exact Text)

**Headline:**
```
ONE SYSTEM.
FOUR ENGINES.
TOTAL TRANSFORMATION.
```

**Subtext:**
```
DeltaX replaces the 4 agencies that never talk to each other — with one system where strategy, tech, growth, and brand feed into each other.
```

**Qualifier (below form):**
```
Be the first to get access.
```

**Built-for (below qualifier):**
```
Built for companies doing $500K–$10M who've outgrown the agency model.
```

## Styles

**Section container:**
- `min-h-screen flex items-center relative overflow-hidden bg-primary`
- Inner: `max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-0 w-full`
- Grid layout: `grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-center`
- Left column: `md:col-span-3` (60%)
- Right column: `md:col-span-2` (40%)

**Teal radial glow (::before equivalent):**
- A div with `absolute inset-0 pointer-events-none`
- `background: radial-gradient(ellipse at 80% 20%, rgba(26, 155, 191, 0.12) 0%, transparent 70%)`
- `z-0`

**Headline:**
- `font-display text-4xl md:text-5xl lg:text-[clamp(2.5rem,5vw,5rem)] text-text-hero leading-[1.0] tracking-tight`
- Render as `<h1>` with `whitespace-pre-line`

**Subtext:**
- `font-body text-lg text-text-body max-w-xl mt-6`

**WaitlistForm:**
- `mt-8`

**Qualifier:**
- `font-body text-xs text-text-muted mt-3`

**Built-for:**
- `font-body text-xs text-text-muted`

**Right side logo container:**
- `hidden md:flex items-center justify-center relative`
- Logo: `<DeltaXLogo size={120} className="text-text-hero relative z-10" />`
- Logo has a slow rotation: CSS animation `animation: spin 60s linear infinite` (use a separate @keyframes from the spinner — call it `logo-rotate`). The logo continuously rotates 360° every 60 seconds.

**Breathing glow behind logo:**
- A `div` with `absolute w-64 h-64 rounded-full glow-breathe`
- `style={{ background: "radial-gradient(circle, rgba(26, 155, 191, 0.15) 0%, transparent 70%)" }}`
- `filter: blur-3xl` via className `blur-3xl`

## Animations

**Staggered entrance (ScrollReveal):**
- Headline: `<ScrollReveal delay={0}>` — default direction "up"
- Subtext: `<ScrollReveal delay={0.1}>`
- WaitlistForm wrapper: `<ScrollReveal delay={0.2}>`
- Qualifier + built-for wrapper: `<ScrollReveal delay={0.25}>`
- Logo (right side): `<ScrollReveal delay={0.4}>`

**Breathing glow (CSS — already defined in globals.css):**
- Uses `.glow-breathe` class which runs `@keyframes breathe` at 4s ease-in-out infinite

**Cursor proximity glow effect:**
- Add cursor proximity glow effect: use a mousemove event listener on the hero section. Track cursor position via CSS custom properties --cursor-x and --cursor-y (as percentages). Apply to the teal glow div's radial-gradient: `radial-gradient(circle at var(--cursor-x, 80%) var(--cursor-y, 30%), rgba(26,155,191,0.12), transparent 60%)`. Add transition: 200ms for smooth lag. On mobile, skip the mousemove — use static center position.

## Responsive Behavior

- **Base (mobile, <768px):** Single column. Logo hidden. Headline `text-4xl`. Full-width form. `min-h-screen` still applies. `py-16` vertical padding.
- **md (768px+):** 60/40 grid (`grid-cols-5`, left `col-span-3`, right `col-span-2`). Logo visible. Headline `text-5xl`.
- **lg (1024px+):** Headline scales to `clamp(2.5rem, 5vw, 5rem)`. Gap increases to `gap-12`. Horizontal padding `px-8`. No vertical padding (`py-0`) since `items-center` in `min-h-screen` handles centering.

## Imports

```tsx
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
```

## Expected Output

This prompt produces exactly **1 file:**

| # | File | Location |
|---|------|----------|
| 1 | Hero.tsx | `src/components/home/Hero.tsx` |

- Single named export: `export function Hero()`
- `"use client"` directive: yes
- Total lines: ~120-160
- No additional files created
- No files modified

**ONLY rules:**
- ONLY use Tailwind token classes (never raw hex in className)
- ONLY use the 3 imported components listed above
- ONLY create the one file specified
- ONLY use named export

**Test:** Render `<Hero />` in isolation. It should show a full-viewport dark section with the headline on the left, breathing logo glow on the right (desktop), and the waitlist form. On mobile (< 768px), logo is hidden and content stacks vertically. Grid texture and vignette should be visible. The breathing glow behind the logo should pulse smoothly.
