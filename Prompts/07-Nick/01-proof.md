# TheProof Section

## Metadata
- **Phase:** 2
- **Branch:** `home/the-proof`
- **Output File(s):** `src/components/home/TheProof.tsx`
- **Depends On:** Phase 0 (Foundation), Phase 1 (ScrollReveal, SectionLabel, SectionWrapper)
- **Estimated Complexity:** Medium

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

TheProof is Section 5 on the home page. It presents DeltaX's 10x ROI scoping standard with a large animated counter, followed by three case study rows in a table layout. It builds credibility by showing specific (projected) results across different business types. The gold color is used intentionally here — this is one of only 2 gold moments on the entire home page.

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

// SectionLabel — monospace uppercase label
import { SectionLabel } from "@/components/ui/SectionLabel";
// <SectionLabel color="core">THE PROOF</SectionLabel>

// SectionWrapper — consistent section spacing + atmosphere
import { SectionWrapper } from "@/components/ui/SectionWrapper";
// <SectionWrapper id="proof" background="secondary">...</SectionWrapper>
```

## Requirements

1. Add `"use client"` directive at top (component uses hooks, Framer Motion useMotionValue, animate, useInView)
2. Use `SectionWrapper` with `id="proof"` and `background="secondary"`
3. Add gold radial glow (center, `#f0b429` at 0.06 opacity) via a positioned div with `radial-gradient(ellipse at center, rgba(240, 180, 41, 0.10) 0%, transparent 70%)`
4. Apply `atmosphere-grid` and `atmosphere-vignette` classes
5. Display section label "THE PROOF" via `SectionLabel` with `color="core"`
6. Display intro text centered below the label
7. Display "10x" stat using an animated counter that counts from 0 to 10
8. Counter animation: triggered by `useInView` (viewport `once: true`, `amount: 0.5`), duration 1.5s, easeOut. Use `useMotionValue` + `animate()` from framer-motion. Display as `Math.round(motionValue.get()) + "x"`. The counter display element must have `aria-live="polite"` and when animation completes, add `aria-label="10x return on investment"`.
9. Display "Per engagement" line below the stat
10. Display "Here's what that looks like:" transition text
11. Display 3 case study rows in a grid table layout
12. Each row has: label (monospace), stat with direction arrow, description
13. Row hover: `bg rgba(255,255,255,0.03)`, `translateX(4px)`, transition 200ms
14. Rows stagger in after counter section (100ms each) using ScrollReveal
15. Display disclaimer at bottom
16. All content centered with `max-w-4xl mx-auto`

## Copy (Exact Text)

**Section Label:**
```
THE PROOF
```

**Intro Text:**
```
Every solution we scope must return at least 10 times its cost. This is how we scope every engagement.
```

**Stat:**
```
10x
```

**Below Stat:**
```
Per engagement. That's the scoping standard.
```

**Transition:**
```
Here's what that looks like:
```

**Case Study Row 1:**
- Label: `PREMIUM FASHION BRAND`
- Stat: `3.2x` with `↑` arrow
- Description: `Revenue growth in 6 months. Rebuilt their sales engine with SCALE + CODE.`

**Case Study Row 2:**
- Label: `SAAS STARTUP`
- Stat: `60%` with `↓` arrow (positive — cost reduction)
- Description: `Cost reduction through automation. Streamlined ops with CORE + CODE.`

**Case Study Row 3:**
- Label: `SERVICE BUSINESS`
- Stat: `5x` with `↑` arrow
- Description: `Lead generation in 90 days. Repositioned with STYLE + SCALE.`

**Disclaimer:**
```
Based on our methodology and projected outcomes. Named case studies available upon request.
```

## Styles

**Gold radial glow:**
- A div with `absolute inset-0 pointer-events-none z-0`
- `style={{ background: "radial-gradient(ellipse at center, rgba(240, 180, 41, 0.10) 0%, transparent 70%)" }}`

**Intro text:**
- `font-body text-base lg:text-lg text-text-body max-w-2xl mx-auto text-center`

**10x stat:**
- `font-display text-gold text-6xl md:text-7xl lg:text-[clamp(5rem,15vw,8.75rem)] text-center mt-12`

**Below stat:**
- `font-body font-semibold text-base text-text-hero text-center mt-4`

**Transition text:**
- `text-sm text-text-muted text-center mt-8`

**Case study table container:**
- `mt-12 max-w-4xl mx-auto`

**Case study row:**
- `grid grid-cols-1 lg:grid-cols-[1fr_auto_2fr] gap-2 lg:gap-8 items-baseline`
- `py-6 border-b border-[rgba(255,255,255,0.06)]`
- `transition-all duration-200 rounded-sm px-4 -mx-4`
- Hover: `hover:bg-[rgba(255,255,255,0.03)] hover:translate-x-1`

**Row label (e.g., "PREMIUM FASHION BRAND"):**
- `font-mono text-xs text-text-muted uppercase tracking-wider`

**Row stat (e.g., "3.2x"):**
- `font-display text-2xl text-gold`
- Arrow: `text-success ml-1` for `↑`, `text-success ml-1` for `↓` (both green — down is positive here)

**Row description:**
- `text-base text-text-body`

**Disclaimer:**
- `text-xs text-text-muted text-center mt-8`

## Animations

**10x counter animation:**
```tsx
import { useMotionValue, useInView, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Inside component:
const counterRef = useRef<HTMLDivElement>(null);
const isInView = useInView(counterRef, { once: true, amount: 0.5 });
const motionValue = useMotionValue(0);
const [displayValue, setDisplayValue] = useState(0);

useEffect(() => {
  if (isInView) {
    const controls = animate(motionValue, 10, {
      duration: 1.5,
      ease: "easeOut",
    });
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }
}, [isInView, motionValue]);
```

**ScrollReveal stagger on rows:**
- Row 1: `<ScrollReveal delay={0.1}>`
- Row 2: `<ScrollReveal delay={0.2}>`
- Row 3: `<ScrollReveal delay={0.3}>`

**Section label and intro:**
- `<ScrollReveal delay={0}>`

## Responsive Behavior

- **Base (mobile, <1024px):** Case study rows stack vertically (`grid-cols-1`). Stat appears large on its own line, label above it, description below. 10x stat uses `text-6xl`.
- **md (768px+):** 10x stat grows to `text-7xl`.
- **lg (1024px+):** Rows use 3-column grid (`grid-cols-[1fr_auto_2fr]`). 10x stat scales to `clamp(5rem, 15vw, 8.75rem)`. Intro text grows to `text-lg`.

## Imports

```tsx
import { useState, useEffect, useRef } from "react";
import { useMotionValue, useInView, animate } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
```

## Expected Output

This prompt produces exactly **1 file:**

| # | File | Location |
|---|------|----------|
| 1 | TheProof.tsx | `src/components/home/TheProof.tsx` |

- Single named export: `export function TheProof()`
- `"use client"` directive: yes
- Total lines: ~150-200
- No additional files created
- No files modified

**ONLY rules:**
- ONLY use Tailwind token classes (never raw hex in className, except the rgba values in border-[] and hover:bg-[] utilities where Tailwind tokens do not exist)
- ONLY use the 3 imported UI components listed above plus React hooks and Framer Motion utilities
- ONLY create the one file specified
- ONLY use named export
- ONLY use gold color for the 10x stat and case study stat numbers

**Test:** Render `<TheProof />` in isolation. The 10x counter should animate from 0 to 10 when scrolled into view. The three case study rows should appear with staggered timing. On hover, rows should shift slightly right and gain a subtle background. On mobile, rows stack vertically with the stat prominent. The gold radial glow should be barely perceptible in the background.
