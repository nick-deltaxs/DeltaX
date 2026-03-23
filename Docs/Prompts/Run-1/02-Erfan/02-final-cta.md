# FinalCTA Section

## Metadata
- **Phase:** 2
- **Branch:** `home/final-cta`
- **Output File(s):** `src/components/home/FinalCTA.tsx`
- **Depends On:** Phase 0 (Foundation), Phase 1 (ScrollReveal, DeltaXLogo, WaitlistForm)
- **Estimated Complexity:** Low

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

FinalCTA is Section 8 — the last section on the home page before the footer. It is the closing argument. The design is intentionally quiet: no atmospheric glow, no vignette, just the grid texture and the ask. A static DeltaX logo, the headline, a single line of subtext, and the WaitlistForm. Centered, restrained, confident. This is the quietest section on the page.

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

// SectionWrapper — consistent section spacing + atmosphere
import { SectionWrapper } from "@/components/ui/SectionWrapper";
// <SectionWrapper id="cta" background="primary">...</SectionWrapper>
```

## Requirements

1. Add `"use client"` directive at top (component uses WaitlistForm which is client-side)
2. Use `SectionWrapper` with `id="cta"` and `background="primary"`
3. Apply `atmosphere-grid` class for grid texture — NO vignette (do NOT add `atmosphere-vignette`)
4. NO atmospheric glow — no radial gradient background div
5. Layout: centered, `py-24 lg:py-32`, `max-w-2xl mx-auto`, `text-center`
6. DeltaXLogo: `size={80}`, `className="text-text-hero"`, centered, static (no animation on the logo itself)
7. Headline below logo
8. Subtext below headline
9. WaitlistForm below subtext
10. Simple ScrollReveal on the whole section content (default, no stagger)

## Copy (Exact Text)

**Headline:**
```
YOU'VE SEEN THE SYSTEM.
JOIN THE WAITLIST.
```

**Subtext:**
```
Be first in line when we launch.
```

## Styles

**Section container:**
- No glow div. No vignette class. Only `atmosphere-grid`.
- `py-24 lg:py-32`

**Content wrapper:**
- `max-w-2xl mx-auto text-center flex flex-col items-center`

**Logo:**
- `<DeltaXLogo size={80} className="text-text-hero" />`
- Static. No animation. No glow behind it.

**Headline:**
- `font-display text-xl md:text-2xl lg:text-[clamp(1.6rem,3.5vw,2.6rem)] text-text-hero mt-8 leading-tight`
- Render as `<h2>` with `whitespace-pre-line`

**Subtext:**
- `font-body text-sm text-text-dim mt-4`

**WaitlistForm:**
- `mt-8`
- Wrap in a `<div className="mt-8 w-full max-w-md">` to constrain form width

## Animations

**Single ScrollReveal on content block:**
```tsx
<ScrollReveal>
  {/* logo, headline, subtext, form */}
</ScrollReveal>
```
- Default settings: delay 0, direction "up"
- No stagger needed — the whole block reveals together

## Responsive Behavior

- **Base (mobile, <768px):** Same centered layout. Works naturally. Headline `text-xl`. Padding `py-24`.
- **md (768px+):** Headline grows to `text-2xl`.
- **lg (1024px+):** Headline scales to `clamp(1.6rem, 3.5vw, 2.6rem)`. Padding increases to `py-32`.

## Imports

```tsx
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
```

## Expected Output

This prompt produces exactly **1 file:**

| # | File | Location |
|---|------|----------|
| 1 | FinalCTA.tsx | `src/components/home/FinalCTA.tsx` |

- Single named export: `export function FinalCTA()`
- `"use client"` directive: yes
- Total lines: ~50-70
- No additional files created
- No files modified

**ONLY rules:**
- ONLY use Tailwind token classes (never raw hex in className)
- ONLY use the 4 imported components listed above
- ONLY create the one file specified
- ONLY use named export
- ONLY use `atmosphere-grid` — do NOT add `atmosphere-vignette` or any radial glow
- ONLY include the logo, headline, subtext, and form — no additional decorative elements

**Test:** Render `<FinalCTA />` in isolation. You should see a quiet, centered section with the DeltaX logo, the two-line headline, one line of subtext, and the waitlist email form. The grid texture should be subtly visible in the background. There should be no glow, no vignette, no extra decoration. The feel should be still and confident — the quietest section on the page. On mobile, the layout stays centered and scales down naturally.
