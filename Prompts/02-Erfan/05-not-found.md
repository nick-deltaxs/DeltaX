# 404 Not Found Page

## Metadata
- **Phase:** 4
- **Branch:** `pages/not-found`
- **Output File(s):** `src/app/not-found.tsx`
- **Depends On:** Phase 0 (Foundation), Phase 1 (DeltaXLogo)
- **Estimated Complexity:** Low

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

The 404 page renders when a user navigates to a route that does not exist. It is intentionally simple and quiet — no drama, no animations, no jokes. Just the DeltaX logo, a single line of text, and three navigation links. It centers vertically in the viewport and uses a subtle teal atmosphere glow consistent with the rest of the site.

## Color Tokens

```
bg-primary #0A0C0B | bg-secondary #161C19 | bg-tertiary #1C2320 | bg-break #0D3535
core-bright #1A9BBF | code-bright #8A8A8A | scale-bright #D94040 | style-bright #6E75FF | deltax-bright #4466CC
gold #f0b429 | success #22C55E | error #EF4444
text-hero #FFFFFF | text-body #E8E8E8 | text-dim rgba(255,255,255,0.60) | text-muted rgba(255,255,255,0.50)
```

## Component Signatures (Available Imports)

```tsx
// DeltaXLogo — SVG with currentColor
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
// <DeltaXLogo size={80} className="text-text-hero" />
```

## Requirements

1. Default export function (Next.js not-found convention)
2. No "use client" — this is a static Server Component
3. Full viewport: `min-h-screen bg-primary flex items-center justify-center relative overflow-hidden`
4. Subtle teal atmosphere glow: absolute div with `radial-gradient(ellipse at center, rgba(26, 155, 191, 0.05) 0%, transparent 70%)`
5. Content container: `relative z-10 flex flex-col items-center text-center px-6`
6. DeltaX logo: `<DeltaXLogo size={80} className="text-text-hero" />`
7. Text: "This page doesn't exist yet." — `font-body text-lg text-text-body mt-6`
8. Three navigation links: `flex gap-6 mt-8`
   - Each link: `<a>` element with `font-body text-sm text-core-bright hover:underline`
   - Link 1: `href="/"` — text "→ Home"
   - Link 2: `href="/about"` — text "→ About"
   - Link 3: `href="/contact"` — text "→ Contact"
9. No Navbar, no Footer — this is a standalone minimal page
10. No animations — simple, static render

## Copy (Exact Text)

**Message:**
```
This page doesn't exist yet.
```

**Links:**
```
→ Home
→ About
→ Contact
```

## Styles

**Page container:**
- `min-h-screen bg-primary flex items-center justify-center relative overflow-hidden`

**Teal glow:**
- `absolute inset-0 pointer-events-none`
- `style={{ background: "radial-gradient(ellipse at center, rgba(26, 155, 191, 0.05) 0%, transparent 70%)" }}`

**Content:**
- `relative z-10 flex flex-col items-center text-center px-6`

**Logo:**
- `<DeltaXLogo size={80} className="text-text-hero" />`

**Message:**
- `font-body text-lg text-text-body mt-6`

**Links container:**
- `flex gap-6 mt-8`

**Each link:**
- `font-body text-sm text-core-bright hover:underline`

## Responsive Behavior

- Fully responsive by nature — centered flexbox works on all screen sizes
- No breakpoint-specific adjustments needed

## Imports

```tsx
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
```

## Expected Output

This prompt produces exactly **1 file:**

| # | File | Location |
|---|------|----------|
| 1 | not-found.tsx | `src/app/not-found.tsx` |

- Default export (Next.js not-found convention)
- No `"use client"` directive
- Total lines: ~30-40
- No additional files created
- No files modified

**ONLY rules:**
- ONLY use Tailwind token classes (never raw hex in className)
- ONLY use the 1 imported component (DeltaXLogo)
- ONLY create the 1 file specified
- ONLY use default export (Next.js convention for not-found)

**Test:** Navigate to any non-existent route (e.g., `/asdfg`). You should see a centered dark page with the DeltaX logo (80px), the message "This page doesn't exist yet." below it, and three teal navigation links. No Navbar or Footer. The page should feel quiet and intentional — not broken.
