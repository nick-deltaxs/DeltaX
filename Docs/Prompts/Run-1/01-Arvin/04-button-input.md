# Button & Input

## Metadata
- **Phase:** 1
- **Branch:** `feat/button-input`
- **Output File(s):** `src/components/ui/Button.tsx`, `src/components/ui/Input.tsx`
- **Depends On:** Phase 0 (Foundation — types/index.ts with ButtonProps and InputProps, globals.css with .spinner class)
- **Estimated Complexity:** Low (~40-60 lines each)

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

Two foundational UI primitives used throughout the DeltaX website: a teal pill-shaped CTA button and a dark input field. These are imported by WaitlistForm, ContactForm, and other components.

## Interfaces

These interfaces are already defined in `src/types/index.ts`. Import them — do NOT redefine them.

```typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "ghost";
  size?: "default" | "small";
  className?: string;
  type?: "button" | "submit";
}

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  className?: string;
  type?: string;
  name?: string;
  required?: boolean;
  maxLength?: number;
}
```

## Requirements

### File 1: `src/components/ui/Button.tsx`

This component requires `"use client"` at the top (has conditional rendering based on loading prop).

#### Props
- Destructure all props from ButtonProps with defaults: `variant = "primary"`, `size = "default"`, `type = "button"`, `disabled = false`, `loading = false`, `className = ""`

#### Base Styles (all variants)
- `inline-flex items-center justify-center font-semibold font-body transition-all duration-200 ease-in-out`
- Focus: `focus-visible:ring-2 focus-visible:ring-core-bright focus-visible:ring-offset-2 focus-visible:ring-offset-primary`
- Disabled OR loading: `opacity-50 cursor-not-allowed`
- Active (not disabled, not loading): `active:scale-[0.98]`

#### Primary Variant
- Background: `bg-core-bright`
- Text: `text-primary` (dark text #0A0C0B on teal background)
- Shape: `rounded-full` (pill shape)
- Hover (when not disabled and not loading): `hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(26,155,191,0.35)]`

#### Ghost Variant
- Background: `bg-transparent`
- Text: `text-text-body`
- Border: `border border-white/[0.10]`
- Shape: `rounded-full`
- Hover: `hover:border-core-bright`

#### Sizes
- Default: `py-3 px-8 text-base`
- Small: `py-2 px-6 text-sm`

#### Loading State
- When `loading` is true:
  - The button is disabled (`disabled` prop on `<button>`)
  - Hide children text: wrap children in `<span className={loading ? "opacity-0" : ""}>`
  - Show spinner: render a `<span>` with class `spinner` (defined in globals.css) + `absolute w-4 h-4 border-2 border-white border-t-transparent rounded-full` — only visible when `loading` is true
  - The button must have `relative` class for absolute spinner positioning

#### Full Component Structure
```tsx
<button
  type={type}
  onClick={onClick}
  disabled={disabled || loading}
  className={`${baseStyles} ${variantStyles} ${sizeStyles} ${disabledStyles} ${className}`}
>
  {loading && <span className="absolute spinner w-4 h-4 border-2 border-white border-t-transparent rounded-full" />}
  <span className={loading ? "opacity-0" : ""}>{children}</span>
</button>
```

---

### File 2: `src/components/ui/Input.tsx`

This component does NOT need `"use client"` (it is a controlled component — the parent manages state and passes value/onChange).

#### Props
- Destructure all props from InputProps with defaults: `type = "text"`, `error = false`, `className = ""`

#### Styles
- Background: `bg-tertiary`
- Border (default): `border border-white/[0.10]`
- Border (error): `border-error` (replaces the default border)
- Border (focus): `focus:border-core-bright focus:ring-2 focus:ring-core-bright/20`
- Text: `text-text-body font-body text-base`
- Placeholder: `placeholder:text-text-muted`
- Padding: `py-3 px-4`
- Border radius: `rounded-lg`
- Transition: `transition-colors duration-200`
- Width: `w-full`
- Outline: `outline-none` (focus styles handled by ring)

#### Full Component Structure
```tsx
<input
  type={type}
  placeholder={placeholder}
  value={value}
  onChange={(e) => onChange(e.target.value)}
  name={name}
  required={required}
  maxLength={maxLength}
  className={`w-full bg-tertiary border ${error ? "border-error" : "border-white/[0.10]"} text-text-body font-body text-base placeholder:text-text-muted py-3 px-4 rounded-lg outline-none focus:border-core-bright focus:ring-2 focus:ring-core-bright/20 transition-colors duration-200 ${className}`}
/>
```

## Imports

**Button.tsx:**
```tsx
"use client";

import type { ButtonProps } from "@/types";
```

**Input.tsx:**
```tsx
import type { InputProps } from "@/types";
```

## Expected Output

This prompt produces exactly 2 files:

| # | File | Location |
|---|------|----------|
| 1 | Button.tsx | `src/components/ui/Button.tsx` |
| 2 | Input.tsx | `src/components/ui/Input.tsx` |

After generating, verify:
- Button renders as teal pill (primary) or transparent bordered pill (ghost)
- Button hover shows scale(1.02) + teal glow shadow (primary variant)
- Button loading state shows spinner and hides text
- Button disabled state shows opacity-50 and cursor-not-allowed
- Button focus shows teal ring with offset
- Input renders with dark background and subtle border
- Input focus shows teal border and ring
- Input error state shows red border
- No TypeScript errors, no unused imports

## ONLY Rules

- ONLY use named exports: `export function Button()` and `export function Input()`
- ONLY import types from `@/types` (do NOT redefine ButtonProps or InputProps)
- ONLY use Tailwind token classes for colors (NOT raw hex in className)
- ONLY use `@/` path aliases for imports
- ONLY create 2 files: `src/components/ui/Button.tsx` and `src/components/ui/Input.tsx`
- ONLY use `"use client"` in Button.tsx (Input.tsx is a server component)
- ONLY use the `.spinner` class from globals.css for the loading animation (do NOT define new @keyframes)
- ONLY use `rounded-full` for button shape (pill, NOT rounded-lg)
