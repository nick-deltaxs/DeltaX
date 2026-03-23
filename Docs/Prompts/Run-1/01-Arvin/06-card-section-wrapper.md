# Card & SectionWrapper

## Metadata
- **Phase:** 1
- **Branch:** `feat/card-section-wrapper`
- **Output File(s):** `src/components/ui/Card.tsx`, `src/components/ui/SectionWrapper.tsx`
- **Depends On:** Phase 0 (Foundation — types/index.ts with CardProps and SectionWrapperProps, globals.css with atmosphere classes)
- **Estimated Complexity:** Low (~40-50 lines each)

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack:
- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS (with custom tokens defined in tailwind.config.ts)
- Framer Motion (domMax import — for useScroll, useTransform, whileInView animations)
- Days One (display font) + Inter (body font) via next/font/google
- System monospace (SF Mono / Menlo / Consolas) for labels
- CSS @keyframes for infinite/repeating animations (breathing glows, pulses, shimmers — NOT Framer Motion)

Global rules:
- Use "use client" directive when the component uses hooks, state, or Framer Motion
- Export as named export: export function ComponentName()
- Use @/ path aliases for all imports (e.g., @/components/ui/Button)
- Use custom Tailwind color tokens (e.g., bg-primary, text-core-bright) — never raw hex values in className
- Mobile-first responsive design (base styles = mobile, then sm:, md:, lg:, xl:)
- All data is hardcoded inside the component (no external data files, no API calls unless specified)
- No console.log, no TODO comments, no placeholder comments
- No default exports (except page.tsx/layout.tsx which Next.js requires)
- No any types in TypeScript
- Write clean, production-ready code

Output exactly the file(s) specified. Nothing more, nothing less.

## Color Tokens

```
Backgrounds: bg-primary #0A0C0B | bg-secondary #161C19 | bg-tertiary #1C2320 | bg-break #0D3535
Sub-brands: core-bright #1A9BBF | code-bright #8A8A8A | scale-bright #D94040 | style-bright #6E75FF | deltax-bright #4466CC
Special: gold #f0b429 | success #22C55E | error #EF4444
Text: text-hero #FFFFFF | text-body #E8E8E8 | text-dim rgba(255,255,255,0.60) | text-muted rgba(255,255,255,0.50)
Fonts: font-display (Days One) | font-body (Inter) | font-mono (system monospace)
```

## Context

Two structural UI primitives for the DeltaX website. Card wraps content blocks with consistent styling and optional accent borders. SectionWrapper provides consistent spacing, background colors, and atmospheric effects for every page section.

## Interfaces

These interfaces are already defined in `src/types/index.ts`. Import them — do NOT redefine them.

```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  accentColor?: "core" | "code" | "scale" | "style" | "deltax";
  variant?: "default" | "left-accent";
}

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "primary" | "secondary" | "break";
}
```

## Requirements

### File 1: `src/components/ui/Card.tsx`

This component does NOT need `"use client"` (no hooks, no state, no Framer Motion — hover effects are pure CSS via Tailwind).

#### Props
- Destructure all props from CardProps with defaults: `variant = "default"`, `hoverEffect = false`, `className = ""`

#### Accent Color Map
Define a constant object inside the component file (above the component function):

```tsx
const accentBorderMap: Record<string, string> = {
  core: "border-l-core-bright",
  code: "border-l-code-bright",
  scale: "border-l-scale-bright",
  style: "border-l-style-bright",
  deltax: "border-l-deltax-bright",
};
```

#### Default Variant
- Styles: `bg-tertiary border border-white/[0.06] rounded-xl p-6 lg:p-8`

#### Left-Accent Variant
- Remove all borders first, then add left border
- Styles: `border-l-[3px] ${accentBorderMap[accentColor || "core"]} rounded-xl p-4 pl-6`
- Background: inline style `background: "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)"`
- Use the `style` prop on the div for the gradient background (Tailwind cannot express this gradient with tokens)

#### Hover Effect
- When `hoverEffect` is true, add: `transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-white/[0.12]`
- When `hoverEffect` is false, do not add any hover classes

#### Full Component Structure
```tsx
<div
  className={`${variantStyles} ${hoverEffect ? hoverStyles : ""} ${className}`}
  style={variant === "left-accent" ? { background: "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)" } : undefined}
>
  {children}
</div>
```

---

### File 2: `src/components/ui/SectionWrapper.tsx`

This component does NOT need `"use client"` (no hooks, no state, no Framer Motion).

#### Props
- Destructure all props from SectionWrapperProps with defaults: `background = "primary"`, `className = ""`

#### Background Map
Define a constant object inside the component file (above the component function):

```tsx
const backgroundMap: Record<string, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  break: "bg-bg-break",
};
```

Note: the Tailwind token for the break background is `bg-bg-break` because the color is defined as `"bg-break": "#0D3535"` in tailwind.config.ts, so `bg-bg-break` applies it.

#### Structure: Two Nested Divs
1. **Outer div** — full-width with background color + atmosphere effects
2. **Inner div** — max-width constrained with padding

```tsx
<section
  id={id}
  className={`${backgroundMap[background]} atmosphere-grid atmosphere-vignette relative`}
>
  <div className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 ${className}`}>
    {children}
  </div>
</section>
```

Key details:
- The outer `<section>` gets the full-width background via `backgroundMap`
- The outer `<section>` gets `atmosphere-grid` and `atmosphere-vignette` CSS classes (defined in globals.css — they add the 48px grid texture and edge vignette)
- The outer `<section>` gets `relative` (needed for the vignette ::after pseudo-element)
- The inner `<div>` gets `relative z-10` to sit above the vignette pseudo-element
- The inner `<div>` gets consistent spacing: `py-16 lg:py-24` (64px mobile, 96px desktop) and `px-6 lg:px-8` (24px mobile, 32px desktop)
- The inner `<div>` gets `max-w-7xl mx-auto` to center content at max 1280px
- The `id` prop is on the outer `<section>` for anchor linking (e.g., `id="hero"`, `id="core"`)
- The `className` prop is appended to the inner `<div>` for per-section custom styles

## Imports

**Card.tsx:**
```tsx
import type { CardProps } from "@/types";
```

**SectionWrapper.tsx:**
```tsx
import type { SectionWrapperProps } from "@/types";
```

No `"use client"` directive in either file — both are server components.

## Expected Output

This prompt produces exactly 2 files:

| # | File | Location |
|---|------|----------|
| 1 | Card.tsx | `src/components/ui/Card.tsx` |
| 2 | SectionWrapper.tsx | `src/components/ui/SectionWrapper.tsx` |

After generating, verify:
- Card default variant renders with bg-tertiary, subtle border, rounded corners, and padding
- Card left-accent variant renders with 3px left border in the accent color + gradient background (no other borders)
- Card hoverEffect adds translateY(-2px) and brighter border on hover
- Card without hoverEffect has no hover transition
- SectionWrapper renders a full-width section with the correct background color
- SectionWrapper applies atmosphere-grid and atmosphere-vignette classes
- SectionWrapper inner content is centered at max-w-7xl with consistent padding
- SectionWrapper accepts an id prop for anchor linking
- No TypeScript errors, no unused imports

## ONLY Rules

- ONLY use named exports: `export function Card()` and `export function SectionWrapper()`
- ONLY import types from `@/types` (do NOT redefine CardProps or SectionWrapperProps)
- ONLY use Tailwind token classes for colors (NOT raw hex in className)
- ONLY use inline `style` prop for the left-accent gradient background (Tailwind cannot express it)
- ONLY use `@/` path aliases for imports
- ONLY create 2 files: `src/components/ui/Card.tsx` and `src/components/ui/SectionWrapper.tsx`
- ONLY use `atmosphere-grid` and `atmosphere-vignette` CSS classes from globals.css (do NOT redefine them)
- ONLY use `<section>` as the outer element in SectionWrapper (semantic HTML)
- ONLY use `bg-bg-break` for the break background (matching the tailwind.config.ts token name)
