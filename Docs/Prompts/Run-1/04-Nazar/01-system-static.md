# TheSystem — Static SVG Diagram

## Metadata
- **Phase:** 2
- **Branch:** `home/system`
- **Output File(s):** `src/components/home/TheSystem.tsx`
- **Depends On:** Phase 0 (Foundation), Phase 1 (ScrollReveal, SectionLabel)
- **Estimated Complexity:** Medium
- **Note:** This prompt creates the STATIC SVG diagram only. Prompt 03b adds scroll-driven path-drawing animation on top of this file.

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

TheSystem is the third major section on thesx.co homepage. It visualizes DeltaX's architecture as "three rivers converging into one delta" — an SVG diagram showing how CORE (strategy) branches into three execution sub-brands (CODE, SCALE, STYLE), which then converge back into the unified DeltaX output.

This diagram is the visual centerpiece that explains *how* DeltaX works. Each node is a transparent pill with a colored border matching its sub-brand. Curved bezier paths connect the nodes in a branching-then-converging flow.

On mobile, the SVG is replaced with a simplified vertical text list since the diagram would be too small to read.

## Color Tokens

```
bg-primary #0A0C0B | bg-secondary #161C19
core-bright #1A9BBF | code-bright #8A8A8A | scale-bright #D94040 | style-bright #6E75FF | deltax-bright #4466CC
gold #f0b429 | text-hero #FFFFFF | text-body #E8E8E8 | text-dim rgba(255,255,255,0.60) | text-muted rgba(255,255,255,0.50)
```

## Component Signatures (Available Imports)

```tsx
// ScrollReveal — wraps content with whileInView fade-in
import { ScrollReveal } from "@/components/ui/ScrollReveal";
// <ScrollReveal delay={0} direction="up">...</ScrollReveal>

// SectionLabel — pill-shaped label with sub-brand color
import { SectionLabel } from "@/components/ui/SectionLabel";
// <SectionLabel color="core">THE SYSTEM</SectionLabel>
```

## Requirements

1. Add `"use client"` directive at top
2. Section `id="system"` with `bg-primary` background and `relative overflow-hidden`
3. Background atmosphere: multiple radial-gradients for faint multi-color node glows:
   - Teal glow at top-center: `radial-gradient(ellipse at 50% 15%, rgba(26, 155, 191, 0.10) 0%, transparent 50%)`
   - Grey glow at bottom-left: `radial-gradient(ellipse at 15% 70%, rgba(138, 138, 138, 0.08) 0%, transparent 40%)`
   - Red glow at bottom-center: `radial-gradient(ellipse at 50% 70%, rgba(217, 64, 64, 0.08) 0%, transparent 40%)`
   - Blue glow at bottom-right: `radial-gradient(ellipse at 85% 70%, rgba(110, 117, 255, 0.08) 0%, transparent 40%)`
4. Apply `atmosphere-grid` and `atmosphere-vignette` classes
5. Section label: `<SectionLabel color="core">THE SYSTEM</SectionLabel>` centered
6. Centered layout: `max-w-4xl mx-auto px-6 lg:px-8`
7. SVG diagram with `viewBox="0 0 800 600"`, responsive sizing, desktop only (`hidden lg:block`). Add `role="img" aria-label="DeltaX system diagram: CORE diagnoses then feeds into CODE, SCALE, and STYLE, which converge into unified results"` to the SVG element.
8. 5 pill-shaped nodes as SVG `<rect>` with `rx="24"` (transparent fill, 1px colored stroke)
9. 6 curved bezier paths connecting nodes (1.5px stroke, sub-brand colors)
10. All paths: `fill="none"`, `strokeLinecap="round"`
11. All paths fully drawn (static) — no animation in this prompt
12. Descriptive text below diagram
13. Mobile fallback: vertical text list with colored left-border pills
14. ScrollReveal on the entire section content
15. Section vertical padding: `py-24 lg:py-32`

## SVG Diagram Specification

**Nodes (pill-shaped rectangles):**

```
CORE:  x=280, y=40,  width=240, height=60,  stroke="#1A9BBF", rx=24
       Text: "X CORE — diagnose"  fill="#1A9BBF", font-size="16", text-anchor="middle"
       Text position: x=400, y=76

CODE:  x=60,  y=280, width=200, height=50,  stroke="#8A8A8A", rx=24
       Text: "X CODE — build"    fill="#8A8A8A", font-size="14", text-anchor="middle"
       Text position: x=160, y=310

SCALE: x=300, y=280, width=200, height=50,  stroke="#D94040", rx=24
       Text: "X SCALE — grow"    fill="#D94040", font-size="14", text-anchor="middle"
       Text position: x=400, y=310

STYLE: x=540, y=280, width=200, height=50,  stroke="#6E75FF", rx=24
       Text: "X STYLE — brand"   fill="#6E75FF", font-size="14", text-anchor="middle"
       Text position: x=640, y=310

DX:    x=350, y=500, width=100, height=50,   stroke="#f0b429", rx=24
       Text: "ΔX"                fill="#f0b429", font-size="18", text-anchor="middle", font-weight="bold"
       Text position: x=400, y=531
```

**All rects:** `fill="none"`, `strokeWidth="1"`

**Paths (curved bezier connections):**

```
Path 1 (CORE → CODE):   d="M400,100 C380,180 250,220 160,280"   stroke="#1A9BBF"
Path 2 (CORE → SCALE):  d="M400,100 C400,180 400,220 400,280"   stroke="#1A9BBF"
Path 3 (CORE → STYLE):  d="M400,100 C420,180 550,220 640,280"   stroke="#1A9BBF"
Path 4 (CODE → ΔX):     d="M160,330 C180,400 300,460 400,500"   stroke="#8A8A8A"
Path 5 (SCALE → ΔX):    d="M400,330 C400,400 400,460 400,500"   stroke="#D94040"
Path 6 (STYLE → ΔX):    d="M640,330 C620,400 500,460 400,500"   stroke="#6E75FF"
```

**All paths:** `fill="none"`, `strokeWidth="1.5"`, `strokeLinecap="round"`

## Copy (Exact Text)

**Section Label:** `THE SYSTEM`

**SVG node labels:** (specified above in SVG Diagram Specification)

**Text below diagram:**
```
Every business gets a different combination — but it always runs as one system.
```

**Mobile fallback items (vertical list):**
```
CORE diagnoses
CODE builds
SCALE grows
STYLE brands
ΔX delivers
```

## Styles

**Section container:**
- `id="system"` on the `<section>` element
- `relative overflow-hidden bg-primary py-24 lg:py-32`
- Inner container: `max-w-4xl mx-auto px-6 lg:px-8`

**Multi-color atmosphere (single div with multiple backgrounds):**
- `absolute inset-0 pointer-events-none`
- `style={{ background: "radial-gradient(ellipse at 50% 15%, rgba(26,155,191,0.10) 0%, transparent 50%), radial-gradient(ellipse at 15% 70%, rgba(138,138,138,0.08) 0%, transparent 40%), radial-gradient(ellipse at 50% 70%, rgba(217,64,64,0.08) 0%, transparent 40%), radial-gradient(ellipse at 85% 70%, rgba(110,117,255,0.08) 0%, transparent 40%)" }}`

**Section label wrapper:**
- `text-center mb-12 lg:mb-16`

**SVG container:**
- `w-full max-w-[800px] mx-auto hidden lg:block`
- SVG element: `viewBox="0 0 800 600"`, `width="100%"`, `height="auto"`

**Text below diagram:**
- `font-body text-base lg:text-lg text-text-body text-center mt-8 max-w-xl mx-auto`

**Mobile fallback (visible only on mobile):**
- Wrapper: `lg:hidden space-y-4 max-w-sm mx-auto`
- Each item: a flex row with colored left border pill and text
- Item container: `flex items-center gap-4 p-4 rounded-lg` with `style={{ borderLeft: "3px solid [sub-brand-color]" }}`
- Item text: `font-mono text-sm uppercase tracking-wider` with color matching sub-brand
- Between items: connecting dot `w-1 h-1 rounded-full bg-white/20 mx-auto` (small centered circle)
- Colors per item: CORE=#1A9BBF, CODE=#8A8A8A, SCALE=#D94040, STYLE=#6E75FF, ΔX=#f0b429

## Animations

**ScrollReveal entrance:**
- Wrap entire content (label + diagram + text) in `<ScrollReveal delay={0} direction="up">`

**No path-drawing animation in this prompt.** All paths are fully drawn/static. Scroll-driven path animation comes in 03b.

## Responsive Behavior

- **Base (mobile, <1024px):** SVG diagram hidden. Vertical text list with colored left borders shown. Stacked items with connecting dots between them. `max-w-sm mx-auto` for compact layout. `py-24` vertical padding.
- **lg (1024px+):** SVG diagram visible. Mobile fallback list hidden. Diagram is responsive width (`w-full max-w-[800px]`). `py-32` vertical padding.

## Imports

```tsx
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
```

## Expected Output

This prompt produces exactly **1 file:**

| # | File | Location |
|---|------|----------|
| 1 | TheSystem.tsx | `src/components/home/TheSystem.tsx` |

- Single named export: `export function TheSystem()`
- `"use client"` directive: yes
- Total lines: ~150-200
- No additional files created
- No files modified

**ONLY rules:**
- ONLY use Tailwind token classes (never raw hex in className)
- ONLY use the 2 imported components listed above
- ONLY create the one file specified
- ONLY use named export
- ONLY use inline SVG (no external SVG files)
- ONLY use the exact path `d` values and node positions specified above
- ONLY use inline styles for hex/rgba values not available as Tailwind tokens

**Test:** Render `<TheSystem />` in isolation. On desktop: a dark section with a centered SVG showing 5 pill-shaped nodes connected by 6 colored bezier paths. CORE at top branches to CODE/SCALE/STYLE in the middle, which converge to ΔX at the bottom. All paths are fully drawn (static). Text below reads "Every business gets a different combination..." On mobile: SVG hidden, replaced by a vertical list of items (CORE diagnoses, CODE builds, etc.) with colored left borders and connecting dots. Grid texture and vignette visible.
