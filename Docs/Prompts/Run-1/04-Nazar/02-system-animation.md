# TheSystem — Scroll-Driven SVG Path Animation

## Metadata
- **Phase:** 2
- **Branch:** `home/system`
- **Output File(s):** `src/components/home/TheSystem.tsx` (MODIFIES existing file from 03a)
- **Depends On:** Prompt 03a (TheSystem static SVG must exist first)
- **Estimated Complexity:** High
- **Note:** This prompt MODIFIES the file created by 03a. You must output the COMPLETE updated file, not a diff.

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

The file `src/components/home/TheSystem.tsx` already exists from prompt 03a with a static SVG diagram showing DeltaX's system architecture. This prompt adds scroll-driven SVG path-drawing animation where:

1. As the user scrolls, the 6 bezier paths progressively draw themselves using `stroke-dasharray` / `stroke-dashoffset`
2. Paths are staggered — top paths (CORE to sub-brands) draw first, bottom paths (sub-brands to ΔX) draw second
3. Nodes fade in when their incoming path completes
4. The effect uses Framer Motion's `useScroll` + `useTransform` for scroll-linked values

This transforms the static diagram into a reveal animation that feels like the system is being assembled as you scroll.

## Existing Content to Preserve

All static content from 03a must remain intact:
- Section `id="system"`, `bg-primary` background
- Multi-color radial-gradient atmosphere div
- `atmosphere-grid` and `atmosphere-vignette` classes
- SectionLabel "THE SYSTEM"
- SVG with `viewBox="0 0 800 600"`: all 5 nodes (CORE, CODE, SCALE, STYLE, ΔX) and 6 paths
- All exact node positions, path `d` values, colors, stroke widths
- Text below diagram
- Mobile fallback vertical list
- All exact copy text

## Requirements

1. Keep `"use client"` directive
2. Add `useRef` from React and `useScroll`, `useTransform`, `motion` from Framer Motion to imports
3. Add reduced motion detection:
```tsx
const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
useEffect(() => {
  setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
}, []);
```
4. Create a `sectionRef` with `useRef<HTMLDivElement>(null)` — attach to the section element
5. Use `useScroll({ target: sectionRef, offset: ["start end", "end start"] })` to get `scrollYProgress`
6. Define path lengths as constants (approximate — these will be used for strokeDasharray):
```tsx
const PATH_LENGTHS = {
  path1: 320,  // CORE → CODE
  path2: 180,  // CORE → SCALE
  path3: 320,  // CORE → STYLE
  path4: 320,  // CODE → ΔX
  path5: 170,  // SCALE → ΔX
  path6: 320,  // STYLE → ΔX
};
```
7. Create strokeDashoffset motion values for each path using `useTransform`:
```tsx
const path1Offset = useTransform(scrollYProgress, [0.1, 0.4], [PATH_LENGTHS.path1, 0]);
const path2Offset = useTransform(scrollYProgress, [0.15, 0.45], [PATH_LENGTHS.path2, 0]);
const path3Offset = useTransform(scrollYProgress, [0.2, 0.5], [PATH_LENGTHS.path3, 0]);
const path4Offset = useTransform(scrollYProgress, [0.4, 0.7], [PATH_LENGTHS.path4, 0]);
const path5Offset = useTransform(scrollYProgress, [0.45, 0.75], [PATH_LENGTHS.path5, 0]);
const path6Offset = useTransform(scrollYProgress, [0.5, 0.8], [PATH_LENGTHS.path6, 0]);
```
8. Create node opacity motion values — each node fades in when its incoming path completes:
```tsx
const coreOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);   // CORE appears first
const codeOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);   // After path1 completes
const scaleOpacity = useTransform(scrollYProgress, [0.40, 0.50], [0, 1]);  // After path2 completes
const styleOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);  // After path3 completes
const dxOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);     // After paths 4-6 complete
```
9. Replace each `<path>` with `<motion.path>` — keeping all existing attributes (`d`, `stroke`, `fill`, `strokeWidth`, `strokeLinecap`) and adding:
```tsx
strokeDasharray={PATH_LENGTHS.pathN}
style={{ strokeDashoffset: pathNOffset }}
```
10. Wrap each node group (rect + text) in `<motion.g style={{ opacity: nodeOpacity }}>` using the corresponding opacity value
11. **Reduced motion fallback:** If `prefersReducedMotion` is true, render all paths with NO strokeDasharray/strokeDashoffset (fully drawn) and all nodes at opacity 1. Use regular `<path>` and `<g>` instead of `<motion.path>` and `<motion.g>`.
12. Keep the ScrollReveal wrapper on the overall section
13. Mobile fallback list is unchanged (no animation on mobile)

## SVG Changes Summary

Replace in the SVG (desktop only):

| Original Element | Becomes | Added Attributes |
|-----------------|---------|------------------|
| `<path d="M400,100 C380,180...">` (path1) | `<motion.path>` | `strokeDasharray={320}`, `style={{ strokeDashoffset: path1Offset }}` |
| `<path d="M400,100 C400,180...">` (path2) | `<motion.path>` | `strokeDasharray={180}`, `style={{ strokeDashoffset: path2Offset }}` |
| `<path d="M400,100 C420,180...">` (path3) | `<motion.path>` | `strokeDasharray={320}`, `style={{ strokeDashoffset: path3Offset }}` |
| `<path d="M160,330 C180,400...">` (path4) | `<motion.path>` | `strokeDasharray={320}`, `style={{ strokeDashoffset: path4Offset }}` |
| `<path d="M400,330 C400,400...">` (path5) | `<motion.path>` | `strokeDasharray={170}`, `style={{ strokeDashoffset: path5Offset }}` |
| `<path d="M640,330 C620,400...">` (path6) | `<motion.path>` | `strokeDasharray={320}`, `style={{ strokeDashoffset: path6Offset }}` |
| CORE node `<rect>` + `<text>` | Wrapped in `<motion.g style={{ opacity: coreOpacity }}>` | |
| CODE node | Wrapped in `<motion.g style={{ opacity: codeOpacity }}>` | |
| SCALE node | Wrapped in `<motion.g style={{ opacity: scaleOpacity }}>` | |
| STYLE node | Wrapped in `<motion.g style={{ opacity: styleOpacity }}>` | |
| ΔX node | Wrapped in `<motion.g style={{ opacity: dxOpacity }}>` | |

## Animations

**Scroll-linked path drawing timeline (mapped to scrollYProgress 0 to 1):**

| Scroll Range | What Happens |
|-------------|--------------|
| 0.05 - 0.15 | CORE node fades in |
| 0.10 - 0.40 | Path 1 (CORE → CODE) draws |
| 0.15 - 0.45 | Path 2 (CORE → SCALE) draws |
| 0.20 - 0.50 | Path 3 (CORE → STYLE) draws |
| 0.35 - 0.45 | CODE node fades in |
| 0.40 - 0.50 | SCALE node fades in |
| 0.40 - 0.70 | Path 4 (CODE → ΔX) draws |
| 0.45 - 0.55 | STYLE node fades in |
| 0.45 - 0.75 | Path 5 (SCALE → ΔX) draws |
| 0.50 - 0.80 | Path 6 (STYLE → ΔX) draws |
| 0.75 - 0.85 | ΔX node fades in |

**Reduced motion:** All paths fully drawn (no dasharray), all nodes fully visible (opacity 1).

## Responsive Behavior

- **Base (mobile, <1024px):** SVG diagram hidden (`hidden lg:block`). Mobile vertical text list shown. No path animation on mobile — only the fallback list is visible.
- **lg (1024px+):** SVG diagram with scroll-driven path-drawing animation. Paths draw and nodes fade in as user scrolls. If reduced motion preference detected, paths are static and all nodes visible.

## Imports

```tsx
import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
```

## Expected Output

This prompt produces exactly **1 file** (overwrites existing):

| # | File | Location |
|---|------|----------|
| 1 | TheSystem.tsx | `src/components/home/TheSystem.tsx` |

- Single named export: `export function TheSystem()`
- `"use client"` directive: yes
- Total lines: ~200-250
- COMPLETE file — includes ALL static content from 03a plus animation layer
- No additional files created
- No other files modified

**ONLY rules:**
- ONLY use Tailwind token classes (never raw hex in className)
- ONLY use the imported components listed above
- ONLY create/overwrite the one file specified
- ONLY use named export
- ONLY use Framer Motion for scroll-linked animation (no GSAP, no CSS @keyframes for path animation)
- ONLY use `motion.path` and `motion.g` inside the SVG — do NOT use `motion.svg` (the SVG root stays as a regular `<svg>`)
- ONLY apply path animation on desktop (lg+), show static mobile fallback

**Test:** Render `<TheSystem />` in a page with enough surrounding content. On desktop: as you scroll into view, the CORE node fades in first, then the three top paths draw from CORE toward CODE/SCALE/STYLE (staggered), those nodes fade in as their paths complete, then the three bottom paths draw from the sub-brands toward ΔX (staggered), and finally the ΔX node fades in. On mobile: static vertical list with colored borders, no animation. With reduced motion: all paths fully drawn and all nodes visible immediately.
