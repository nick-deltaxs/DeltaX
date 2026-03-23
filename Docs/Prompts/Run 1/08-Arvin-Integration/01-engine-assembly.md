# TheEngine Assembly

## Metadata
- **Phase:** 2
- **Branch:** `home/the-engine`
- **Output File(s):** `src/components/home/TheEngine.tsx`
- **Depends On:** Phase 0 (Foundation), Phase 1 (SectionLabel, WaitlistForm), Phase 2 (EngineCore, EngineCode, EngineScale, EngineStyle)
- **Estimated Complexity:** High

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

TheEngine is Section 4 on the home page. It is the assembly wrapper that imports and orchestrates the four engine pillar components (EngineCore, EngineCode, EngineScale, EngineStyle). On desktop, it uses a sticky scroll container with scroll-linked atmosphere crossfade — as the user scrolls through a tall container, the background atmosphere transitions from teal to grey to red to blue, matching whichever pillar is currently in view. On mobile, the sticky scroll behavior is removed entirely and the pillars stack as static sections with accent-colored top borders. A post-engine CTA with WaitlistForm appears at the end.

## Color Tokens

```
bg-primary #0A0C0B | bg-secondary #161C19 | bg-tertiary #1C2320 | bg-break #0D3535
core-bright #1A9BBF | code-bright #8A8A8A | scale-bright #D94040 | style-bright #6E75FF | deltax-bright #4466CC
gold #f0b429 | success #22C55E | error #EF4444
text-hero #FFFFFF | text-body #E8E8E8 | text-dim rgba(255,255,255,0.60) | text-muted rgba(255,255,255,0.50)
```

## Component Signatures (Available Imports)

```tsx
// EngineCore — CORE pillar (teal, 60/40 layout, strategy & diagnostics)
import { EngineCore } from "@/components/home/EngineCore";
// <EngineCore />

// EngineCode — CODE pillar (grey, full-width, technology & automation)
import { EngineCode } from "@/components/home/EngineCode";
// <EngineCode />

// EngineScale — SCALE pillar (red, 70/30 layout, growth & revenue)
import { EngineScale } from "@/components/home/EngineScale";
// <EngineScale />

// EngineStyle — STYLE pillar (blue, 50/50 layout, brand & perception)
import { EngineStyle } from "@/components/home/EngineStyle";
// <EngineStyle />

// SectionLabel — monospace uppercase label
import { SectionLabel } from "@/components/ui/SectionLabel";
// <SectionLabel color="core">THE ΔX ENGINE</SectionLabel>

// WaitlistForm — email + JOIN WAITLIST button, self-contained
import { WaitlistForm } from "@/components/ui/WaitlistForm";
// <WaitlistForm />
```

## Requirements

1. Add `"use client"` directive at top (component uses hooks, Framer Motion scroll utilities)
2. Section `id="engine"` wrapping the entire component
3. **Desktop (lg+): Sticky scroll with atmosphere crossfade**
   - Outer container: `min-h-[300vh] relative` — creates the tall scroll range for 4 pillars
   - Inner sticky wrapper: `position: sticky`, `top-0`, `h-screen`, `overflow-hidden`
   - 4 atmosphere layers inside sticky wrapper, all `absolute inset-0 pointer-events-none`:
     - Layer 1 (teal): `radial-gradient(ellipse at center, rgba(26, 155, 191, 0.12) 0%, transparent 70%)`
     - Layer 2 (grey): `radial-gradient(ellipse at center, rgba(138, 138, 138, 0.12) 0%, transparent 70%)`
     - Layer 3 (red): `radial-gradient(ellipse at center, rgba(217, 64, 64, 0.12) 0%, transparent 70%)`
     - Layer 4 (blue): `radial-gradient(ellipse at center, rgba(110, 117, 255, 0.12) 0%, transparent 70%)`
   - Each layer's opacity is driven by `useTransform` mapping `scrollYProgress`:
     - Teal opacity: input `[0, 0.05, 0.22, 0.28]`, output `[1, 1, 1, 0]`
     - Grey opacity: input `[0.25, 0.30, 0.47, 0.53]`, output `[0, 1, 1, 0]`
     - Red opacity: input `[0.50, 0.55, 0.72, 0.78]`, output `[0, 1, 1, 0]`
     - Blue opacity: input `[0.75, 0.80, 0.95, 1.0]`, output `[0, 1, 1, 1]`
   - Content layer: `relative z-10` positioned above atmospheres, `h-full flex flex-col justify-center`
   - Use `useScroll({ target: containerRef, offset: ["start start", "end end"] })` to track scroll
   - Map `scrollYProgress` to determine which pillar is visible:
     - Use `useTransform` to create 4 pillar opacity values:
       - Core: input `[0, 0.05, 0.22, 0.28]`, output `[0, 1, 1, 0]`
       - Code: input `[0.25, 0.30, 0.47, 0.53]`, output `[0, 1, 1, 0]`
       - Scale: input `[0.50, 0.55, 0.72, 0.78]`, output `[0, 1, 1, 0]`
       - Style: input `[0.75, 0.80, 0.95, 1.0]`, output `[0, 1, 1, 1]`
     - Each pillar wrapped in `<motion.div style={{ opacity: pillarOpacity }}>` with `absolute inset-0` inside the content layer, so they crossfade
   - Grid texture: apply `atmosphere-grid` class on the sticky wrapper
   - Vignette: apply `atmosphere-vignette` class on the sticky wrapper
4. **Mobile (<lg): Static stacked sections**
   - No sticky scroll, no atmosphere crossfade
   - Each pillar rendered as a full-width block stacked vertically
   - Each pillar gets a top border in its accent color: `border-t-[3px]` with the respective color (teal, grey, red, blue)
   - Simple vertical stack with `py-16` spacing per pillar
5. **Section headline** above the engine container:
   - Text: "THE ΔX ENGINE" — `font-display text-3xl lg:text-4xl text-text-hero text-center`
   - Subtext: "Four systems. One outcome. 10x growth." — `font-body text-lg text-text-body text-center mt-4`
   - Headline block gets `py-16 lg:py-24` and `max-w-7xl mx-auto px-6 lg:px-8`
   - Wrapped in ScrollReveal (or simple motion fade-in)
6. **Post-engine CTA** after the scroll container:
   - `py-16 lg:py-24 max-w-3xl mx-auto px-6 lg:px-8 text-center`
   - Text: "Not sure which engines you need? Join the waitlist — we'll tell you." — `font-body text-lg text-text-body text-center`
   - `<WaitlistForm />` below the text with `mt-8`
7. Use responsive detection: render either the sticky scroll version (desktop) or the stacked version (mobile). Use a custom hook with `window.matchMedia("(min-width: 1024px)")` or a CSS-based approach with `hidden lg:block` and `lg:hidden` wrappers.

## Copy (Exact Text)

**Section Headline:**
```
THE ΔX ENGINE
```

**Section Subtext:**
```
Four systems. One outcome. 10x growth.
```

**Post-Engine CTA Text:**
```
Not sure which engines you need? Join the waitlist — we'll tell you.
```

## Styles

**Outer section:**
- `bg-primary` background on the entire section

**Section headline wrapper:**
- `text-center py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-8`

**Headline:**
- `font-display text-3xl lg:text-4xl text-text-hero text-center`

**Subtext:**
- `font-body text-lg text-text-body text-center mt-4`

**Desktop scroll container:**
- `min-h-[300vh] relative hidden lg:block`

**Sticky wrapper:**
- `sticky top-0 h-screen overflow-hidden`

**Atmosphere layers:**
- Each: `absolute inset-0 pointer-events-none`
- Use `motion.div` with `style={{ opacity: atmosphereOpacity, background: "..." }}`

**Content layer:**
- `relative z-10 h-full`

**Pillar wrappers (desktop):**
- Each: `absolute inset-0 flex items-center justify-center`
- Wrapped in `motion.div` with `style={{ opacity: pillarOpacity }}`

**Mobile pillar wrapper:**
- `lg:hidden`
- Each pillar: `py-16` with `border-t-[3px]` and inline borderTopColor matching pillar accent

**Post-engine CTA:**
- `py-16 lg:py-24 max-w-3xl mx-auto px-6 lg:px-8 text-center`

## Animations

**Atmosphere crossfade (desktop only):**
```tsx
const containerRef = useRef<HTMLDivElement>(null);
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start start", "end end"],
});

// Atmosphere layer opacities
const tealAtmosphere = useTransform(scrollYProgress, [0, 0.05, 0.22, 0.28], [1, 1, 1, 0]);
const greyAtmosphere = useTransform(scrollYProgress, [0.25, 0.30, 0.47, 0.53], [0, 1, 1, 0]);
const redAtmosphere = useTransform(scrollYProgress, [0.50, 0.55, 0.72, 0.78], [0, 1, 1, 0]);
const blueAtmosphere = useTransform(scrollYProgress, [0.75, 0.80, 0.95, 1.0], [0, 1, 1, 1]);

// Pillar content opacities
const coreOpacity = useTransform(scrollYProgress, [0, 0.05, 0.22, 0.28], [0, 1, 1, 0]);
const codeOpacity = useTransform(scrollYProgress, [0.25, 0.30, 0.47, 0.53], [0, 1, 1, 0]);
const scaleOpacity = useTransform(scrollYProgress, [0.50, 0.55, 0.72, 0.78], [0, 1, 1, 0]);
const styleOpacity = useTransform(scrollYProgress, [0.75, 0.80, 0.95, 1.0], [0, 1, 1, 1]);
```

**No animation on mobile** — pillars are static, stacked, and simply scroll into view naturally.

## Responsive Behavior

- **Base (mobile, <1024px):** No sticky scroll. All 4 pillars stacked vertically with `py-16` spacing. Each pillar has a 3px top border in its accent color. No atmosphere crossfade. Grid texture and vignette applied per-pillar or not at all (keep it simple).
- **lg (1024px+):** Sticky scroll container with atmosphere crossfade. Pillars absolute-positioned and crossfade as user scrolls. Grid texture and vignette on sticky wrapper.

## Imports

```tsx
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { EngineCore } from "@/components/home/EngineCore";
import { EngineCode } from "@/components/home/EngineCode";
import { EngineScale } from "@/components/home/EngineScale";
import { EngineStyle } from "@/components/home/EngineStyle";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { SectionLabel } from "@/components/ui/SectionLabel";
```

## Expected Output

This prompt produces exactly **1 file:**

| # | File | Location |
|---|------|----------|
| 1 | TheEngine.tsx | `src/components/home/TheEngine.tsx` |

- Single named export: `export function TheEngine()`
- `"use client"` directive: yes
- Total lines: ~200-280
- No additional files created
- No files modified

**ONLY rules:**
- ONLY use Tailwind token classes (never raw hex in className)
- ONLY use the imported components listed above plus `motion` and scroll utilities from framer-motion
- ONLY create the one file specified
- ONLY use named export
- ONLY use inline styles for rgba/hex values not available as Tailwind tokens

**Test:** Render `<TheEngine />` in isolation. On desktop (1024px+), you should see the section headline, then as you scroll through the tall container the background atmosphere should smoothly crossfade from teal to grey to red to blue. Each pillar component should fade in and out at the appropriate scroll position. After all pillars, the post-engine CTA with WaitlistForm should appear. On mobile (<1024px), the pillars should stack vertically with colored top borders and no sticky behavior. The headline and CTA should be visible on both breakpoints.
