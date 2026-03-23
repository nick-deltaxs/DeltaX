# TheProblem — Static Layout

## Metadata
- **Phase:** 2
- **Branch:** `home/problem`
- **Output File(s):** `src/components/home/TheProblem.tsx`
- **Depends On:** Phase 0 (Foundation), Phase 1 (ScrollReveal, SectionLabel)
- **Estimated Complexity:** Medium
- **Note:** This prompt creates the STATIC layout only. Prompt 02b adds scroll-linked dissolve animation on top of this file.

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

TheProblem is the second major section on thesx.co homepage. It contrasts the chaotic "before" state (fragmented agencies, no alignment) against the unified "after" state (DeltaX system). The visual language uses a two-column split: left side is messy/broken (red atmosphere, slight rotations, strikethroughs), right side is clean/aligned (teal atmosphere, gold bullets). A sharp diagonal SVG divider separates the two worlds.

This section emotionally anchors the visitor's pain and immediately presents the DeltaX alternative — without naming features yet. That comes in later sections.

## Color Tokens

```
bg-primary #0A0C0B | bg-secondary #161C19 | bg-tertiary #1C2320
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
// <SectionLabel color="core">THE PROBLEM</SectionLabel>
```

## Requirements

1. Add `"use client"` directive at top (component uses Framer Motion via ScrollReveal)
2. Section `id="problem"` with `bg-secondary` background and `relative overflow-hidden`
3. Background atmosphere: two absolute-positioned divs acting as radial-gradient pseudo-elements:
   - Left side: `radial-gradient(ellipse at 20% 50%, rgba(217, 64, 64, 0.10) 0%, transparent 60%)` — subtle red
   - Right side: `radial-gradient(ellipse at 80% 50%, rgba(26, 155, 191, 0.10) 0%, transparent 60%)` — subtle teal
4. Apply `atmosphere-grid` class for grid texture overlay
5. Apply `atmosphere-vignette` class for edge vignette
6. Section label: `<SectionLabel color="core">THE PROBLEM</SectionLabel>` centered above content
7. Two-column layout: `grid grid-cols-1 lg:grid-cols-2 gap-0` inside `max-w-6xl mx-auto px-6 lg:px-8`
8. Diagonal SVG divider between columns (desktop only): absolute-positioned SVG with an 8-degree angled line, left side bleeds subtle red-to-transparent, right side has clean teal edge. Hidden on mobile (`hidden lg:block`).
9. Left column (BEFORE): red-themed, messy feel with muted red left border
10. Right column (AFTER): teal-themed, clean and aligned with teal left border
11. ScrollReveal on each column — left column `delay={0}`, right column `delay={0.2}`
12. Mobile: vertical stack with BEFORE on top, AFTER below, separated by a horizontal 1px border instead of diagonal
13. Section vertical padding: `py-24 lg:py-32`

## Copy (Exact Text)

**Section Label:** `THE PROBLEM`

**Left Column (BEFORE):**

Title: `BEFORE`

Items (4 lines):
```
Your CRM data never reaches your ad platform
Your brand guide exists but nobody follows it
Your dev team ships features marketing didn't ask for
Four invoices. Four Slack channels. Zero alignment.
```

Stats (3 items, separated by ` | `):
```
Burn rate: untracked | Results: inconsistent | Timeline: undefined
```

**Right Column (AFTER):**

Title: `AFTER`

Items (4 lines, each prefixed with a gold circle bullet):
```
Strategy drives tech decisions
Tech drives growth metrics
Growth drives brand positioning
Brand drives strategy refinement
```

Stats (3 items, separated by ` | `):
```
ROI: 10x scoping standard | Results: compounding | Timeline: 90-day sprints
```

## Styles

**Section container:**
- `id="problem"` on the `<section>` element
- `relative overflow-hidden bg-secondary py-24 lg:py-32`
- Inner container: `max-w-6xl mx-auto px-6 lg:px-8`

**Red atmosphere glow (left):**
- `absolute inset-0 pointer-events-none`
- `style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(217, 64, 64, 0.10) 0%, transparent 60%)" }}`

**Teal atmosphere glow (right):**
- `absolute inset-0 pointer-events-none`
- `style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(26, 155, 191, 0.10) 0%, transparent 60%)" }}`

**Section label wrapper:**
- `text-center mb-12 lg:mb-16`

**Grid:**
- `grid grid-cols-1 lg:grid-cols-2 gap-0 relative`

**Diagonal SVG divider (desktop only):**
- `absolute inset-y-0 left-1/2 -translate-x-1/2 w-24 hidden lg:block z-10`
- SVG: `viewBox="0 0 100 100" preserveAspectRatio="none"` with `w-full h-full`
- Polygon or path creating an 8-degree angle
- Left fill: `rgba(217, 64, 64, 0.08)` — faint red bleed
- Right edge: clean line stroke `rgba(26, 155, 191, 0.3)` — teal

**Left column (BEFORE):**
- `p-8 lg:p-12 border-l-[3px]`
- Border color: `style={{ borderLeftColor: "rgba(217, 64, 64, 0.40)" }}` — muted red, NOT full ScaleX red
- Title: `font-mono text-xs uppercase tracking-widest` with `style={{ color: "rgba(217, 64, 64, 0.60)" }}` — muted red
- Each item: `font-body text-base text-text-muted mb-3`
- Items get slight CSS rotation for "messy" feel: alternate between `style={{ transform: "rotate(0.8deg)" }}` and `style={{ transform: "rotate(-0.5deg)" }}` and `style={{ transform: "rotate(1.2deg)" }}`
- Some items (2nd and 4th) get `line-through` decoration
- Stats wrapper: `mt-8 font-mono text-sm text-text-muted`

**Mobile separator (between columns, mobile only):**
- `border-t border-white/[0.06] lg:hidden my-2`

**Right column (AFTER):**
- `p-8 lg:p-12 border-l-[3px] border-core-bright`
- Title: `font-mono text-xs uppercase tracking-widest text-core-bright`
- Each item: `font-body text-base text-text-body mb-3 flex items-center gap-3`
- Gold circle bullet: `<span>` with `w-2 h-2 rounded-full flex-shrink-0` and `style={{ border: "1.5px solid rgba(240, 180, 41, 0.45)", backgroundColor: "rgba(240, 180, 41, 0.15)" }}`
- Stats wrapper: `mt-8 font-mono text-sm text-text-body`

## Animations

**ScrollReveal entrance:**
- Left column: `<ScrollReveal delay={0} direction="up">`
- Right column: `<ScrollReveal delay={0.2} direction="up">`

**No scroll-linked dissolve animation in this prompt.** That is added by prompt 02b.

## Responsive Behavior

- **Base (mobile, <1024px):** Single column. BEFORE stacks on top, AFTER below. Horizontal 1px separator between them. Diagonal SVG hidden. Both columns get `p-8`. No rotation on items (set rotation to 0 on mobile via media query or conditional class).
- **lg (1024px+):** Side-by-side grid. Diagonal SVG visible. Padding increases to `p-12`. Item rotations visible.

## Imports

```tsx
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
```

## Expected Output

This prompt produces exactly **1 file:**

| # | File | Location |
|---|------|----------|
| 1 | TheProblem.tsx | `src/components/home/TheProblem.tsx` |

- Single named export: `export function TheProblem()`
- `"use client"` directive: yes
- Total lines: ~130-170
- No additional files created
- No files modified

**ONLY rules:**
- ONLY use Tailwind token classes (never raw hex in className)
- ONLY use the 2 imported components listed above
- ONLY create the one file specified
- ONLY use named export
- ONLY use inline styles for hex/rgba values not available as Tailwind tokens

**Test:** Render `<TheProblem />` in isolation. It should show a dark section with red-tinted left column (messy BEFORE items with rotations and strikethroughs) and teal-tinted right column (clean AFTER items with gold bullets). On desktop, a diagonal SVG divider separates them. On mobile, they stack vertically with a thin horizontal border. Grid texture and vignette visible. No scroll animation yet — that comes in 02b.
