# TheProblem — Scroll-Linked Dissolve Animation

## Metadata
- **Phase:** 2
- **Branch:** `home/problem`
- **Output File(s):** `src/components/home/TheProblem.tsx` (MODIFIES existing file from 02a)
- **Depends On:** Prompt 02a (TheProblem static layout must exist first)
- **Estimated Complexity:** Medium-High
- **Note:** This prompt MODIFIES the file created by 02a. You must output the COMPLETE updated file, not a diff.

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

The file `src/components/home/TheProblem.tsx` already exists from prompt 02a with a static two-column BEFORE/AFTER layout. This prompt adds a scroll-linked dissolve animation where:

1. As the user scrolls, the BEFORE (left) column fades out and the AFTER (right) column fades in
2. A diagonal SVG divider peaks in opacity mid-scroll then fades out
3. The effect uses Framer Motion's `useScroll` + `useTransform` for smooth scroll-linked values
4. The section is wrapped in a tall container (~180vh) with sticky inner content to create the scroll range

This transforms a static comparison into a cinematic transition where chaos dissolves into order.

## Existing Content to Preserve

All static content from 02a must remain intact:
- Section `id="problem"`, `bg-secondary` background
- Red and teal radial-gradient atmosphere divs
- `atmosphere-grid` and `atmosphere-vignette` classes
- SectionLabel "THE PROBLEM"
- Left column: BEFORE title, 4 messy items (rotations, strikethroughs), stats
- Right column: AFTER title, 4 clean items (gold bullets), stats
- Diagonal SVG divider between columns (desktop)
- Mobile separator
- All exact copy text, styles, borders, colors

## Requirements

1. Keep `"use client"` directive
2. Add `useRef` from React and `useScroll`, `useTransform`, `motion` from Framer Motion to imports
3. Add a `useReducedMotion` check: `const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches` — compute once in a `useMemo` or state
4. **Reduced motion path:** If `prefersReducedMotion` is true, render the EXACT same static layout from 02a (no scroll container, no sticky, no motion values). Both columns visible side-by-side.
5. **Full motion path:** Wrap the entire section in a tall outer div:
   - `ref={containerRef}`
   - `style={{ height: "180vh" }}` — this creates the scroll range
   - `className="relative"`
6. Inside the tall container, the section becomes `position: sticky; top: 0; height: 100vh; overflow: hidden;`
7. Use `useScroll({ target: containerRef, offset: ["start start", "end end"] })` to get `scrollYProgress`
8. Create motion values with `useTransform`:

```tsx
// BEFORE column
const beforeOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 1, 0]);
const beforeRotation = useTransform(scrollYProgress, [0, 0.7], [2, 0]);

// AFTER column
const afterOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
const afterTranslateX = useTransform(scrollYProgress, [0.3, 0.7], [20, 0]);

// Diagonal divider
const dividerOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
```

9. Replace the left column wrapper with `<motion.div style={{ opacity: beforeOpacity, rotate: beforeRotation }}>` — keep all inner content and classes identical
10. Replace the right column wrapper with `<motion.div style={{ opacity: afterOpacity, x: afterTranslateX }}>` — keep all inner content and classes identical
11. Replace the diagonal SVG wrapper with `<motion.div style={{ opacity: dividerOpacity }}>` — keep SVG content identical
12. Remove the ScrollReveal wrappers from the columns (the scroll-linked animation replaces the entrance animation)
13. Keep ScrollReveal on the SectionLabel only

## Copy (Exact Text)

Same as 02a — all copy text is preserved exactly. No changes to any text content.

## Styles

All styles from 02a are preserved. Additional styles:

**Outer scroll container (full motion only):**
- `relative` with `style={{ height: "180vh" }}`

**Sticky inner section:**
- Add `sticky top-0 h-screen` to the section element classes (in addition to existing classes)
- Keep `overflow-hidden` (already present)

**motion.div wrappers:**
- Left column: `<motion.div>` with all existing classes from the left column div, plus `style={{ opacity: beforeOpacity, rotate: beforeRotation }}`
- Right column: `<motion.div>` with all existing classes from the right column div, plus `style={{ opacity: afterOpacity, x: afterTranslateX }}`
- Diagonal divider: `<motion.div>` with all existing classes, plus `style={{ opacity: dividerOpacity }}`

## Animations

**Scroll-linked dissolve timeline (mapped to scrollYProgress 0 to 1):**

| Scroll Progress | BEFORE column | Diagonal divider | AFTER column |
|----------------|---------------|-------------------|--------------|
| 0.0 - 0.3 | Fully visible (opacity 1, rotation 2deg) | Hidden (opacity 0) | Hidden (opacity 0, shifted 20px right) |
| 0.3 - 0.4 | Still visible (opacity 1) | Fading in | Starting to appear |
| 0.4 - 0.5 | Starting to fade | Peak visibility (opacity 1) | Fading in |
| 0.5 - 0.7 | Fading out | Fading out | Fading in, sliding to position |
| 0.7 - 1.0 | Hidden (opacity 0, rotation 0) | Hidden (opacity 0) | Fully visible (opacity 1, position 0) |

**Reduced motion:** No scroll-linked animation. Both columns visible side-by-side. Static layout from 02a.

## Responsive Behavior

- **Base (mobile, <1024px):** NO scroll dissolve animation on mobile. Show static stacked layout (both columns visible) regardless of reduced motion setting. The tall container and sticky behavior only apply at `lg` breakpoint and above. Use a `useMediaQuery` check or simply always show both columns on mobile (opacity 1, no transforms).
- **lg (1024px+):** Full scroll-linked dissolve animation (unless prefers-reduced-motion).

## Imports

```tsx
import { useRef, useMemo } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
```

## Expected Output

This prompt produces exactly **1 file** (overwrites existing):

| # | File | Location |
|---|------|----------|
| 1 | TheProblem.tsx | `src/components/home/TheProblem.tsx` |

- Single named export: `export function TheProblem()`
- `"use client"` directive: yes
- Total lines: ~180-220
- COMPLETE file — includes ALL static content from 02a plus animation layer
- No additional files created
- No other files modified

**ONLY rules:**
- ONLY use Tailwind token classes (never raw hex in className)
- ONLY use the imported components listed above
- ONLY create/overwrite the one file specified
- ONLY use named export
- ONLY use Framer Motion for scroll-linked animation (no GSAP, no Intersection Observer)
- ONLY apply scroll animation on desktop (lg+), show static on mobile

**Test:** Render `<TheProblem />` in a page with enough surrounding content. On desktop: as you scroll through the section, the BEFORE column should fade out while rotating from 2deg to 0deg, the diagonal divider should peak in visibility mid-scroll, and the AFTER column should fade in while sliding from 20px right to its final position. On mobile: both columns stack vertically and are fully visible (no scroll animation). With `prefers-reduced-motion: reduce` enabled: static side-by-side layout on desktop too.
