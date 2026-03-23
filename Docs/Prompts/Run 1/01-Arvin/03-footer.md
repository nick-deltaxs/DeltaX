# Footer

## Metadata
- **Phase:** 1
- **Branch:** `feat/footer`
- **Output File(s):** `src/components/shared/Footer.tsx`
- **Depends On:** Phase 0 (Foundation — DeltaXLogo, tailwind.config.ts)
- **Estimated Complexity:** Medium (~100-130 lines)

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

Site-wide Footer for the DeltaX website (thesx.co). Static server component — no hooks, no state, no Framer Motion. Pure layout with links, social icons, and copyright. Appears on every page.

## Requirements

Create file: `src/components/shared/Footer.tsx`

This component does NOT need `"use client"` (no hooks, no state, no Framer Motion).

### Outer Wrapper
- `<footer>` element
- Background: `bg-secondary` (#161C19)
- Top border: `border-t border-white/[0.06]`

### Inner Container
- `max-w-7xl mx-auto px-6 lg:px-8 py-12`

### 4-Column Grid (Desktop)
- Grid: `grid grid-cols-2 md:grid-cols-4 gap-8`

**Column 1 — Brand:**
- DeltaXLogo component with `size={35}`
- Below logo (mt-4): email text `contact@thesx.co` — `<a href="mailto:contact@thesx.co">`, text-text-muted, text-sm, hover:text-text-body, transition-colors

**Column 2 — Services:**
- Heading: "Services" — font-body, text-sm, font-semibold, text-text-body, mb-4
- Links (flex flex-col gap-2):
  1. "CoreX" — `<Link href="/#core">`
  2. "CodeX" — `<Link href="/#code">`
  3. "ScaleX" — `<Link href="/#scale">`
  4. "StyleX" — `<Link href="/#style">`
- Each link: text-text-dim, text-sm, group relative inline-block
- Hover: text-text-body
- Teal underline slide-in: child `<span>` with `absolute -bottom-0.5 left-0 h-[1px] bg-core-bright w-0 group-hover:w-full transition-all duration-200`

**Column 3 — Company:**
- Heading: "Company" — same style as Column 2 heading
- Links (flex flex-col gap-2):
  1. "About" — `<Link href="/about">`
  2. "Contact" — `<Link href="/contact">`
- Each link: same style as Column 2 links (text-text-dim, text-sm, group, teal underline)

**Column 4 — Legal:**
- Heading: "Legal" — same style as Column 2 heading
- Links (flex flex-col gap-2):
  1. "Privacy Policy" — `<Link href="/privacy">`
  2. "Terms of Service" — `<Link href="/terms">`
- Each link: same style as Column 2 links

### Social Icons Row
- Container: `flex items-center gap-6 mt-8` on mobile, centered on mobile (`justify-center md:justify-start`)
- 3 icons, each is an `<a>` with `target="_blank"` and `rel="noopener noreferrer"`:

**X (Twitter) icon** — href="https://x.com/deltax":
```html
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
</svg>
```

**LinkedIn icon** — href="https://linkedin.com/company/deltax":
```html
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
</svg>
```

**Instagram icon** — href="https://instagram.com/deltax":
```html
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
</svg>
```

- Each icon `<a>`: `text-text-muted hover:text-text-body transition-colors duration-200`

### Copyright Row
- Container: `border-t border-white/[0.06] pt-8 mt-8 text-center`
- Text: `© 2026 DeltaX. All rights reserved.`
- Style: `text-xs text-text-muted`

### Mobile Responsive
- Grid changes: `grid-cols-2 md:grid-cols-4` — on mobile, columns 1-2 on first row, columns 3-4 on second row
- Social icons: centered on all screen sizes (`justify-center`)
- Copyright: already centered via text-center

## Copy

| Element | Exact Text |
|---------|------------|
| Email | contact@thesx.co |
| Col 2 heading | Services |
| Col 2 link 1 | CoreX |
| Col 2 link 2 | CodeX |
| Col 2 link 3 | ScaleX |
| Col 2 link 4 | StyleX |
| Col 3 heading | Company |
| Col 3 link 1 | About |
| Col 3 link 2 | Contact |
| Col 4 heading | Legal |
| Col 4 link 1 | Privacy Policy |
| Col 4 link 2 | Terms of Service |
| Copyright | © 2026 DeltaX. All rights reserved. |

## Imports

```tsx
import Link from "next/link";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
```

No `"use client"` directive — this is a server component.

## Expected Output

This prompt produces exactly 1 file:

| # | File | Location |
|---|------|----------|
| 1 | Footer.tsx | `src/components/shared/Footer.tsx` |

After generating, verify:
- The footer renders with bg-secondary background and top border
- 4-column grid on desktop, 2-column on mobile
- All links use next/link with correct hrefs
- Social icons render as inline SVGs (no icon library imports)
- Teal underline slide-in animation on hover for all text links
- Copyright row has top border separator
- No TypeScript errors, no unused imports

## ONLY Rules

- ONLY use named export: `export function Footer()`
- ONLY use Tailwind token classes for colors (NOT raw hex in className)
- ONLY use `@/` path aliases for imports
- ONLY create 1 file: `src/components/shared/Footer.tsx`
- ONLY use inline SVG paths for social icons (NOT an icon library like react-icons or lucide)
- ONLY use next/link for internal navigation links
- ONLY use the exact copy text listed in the Copy table above
- ONLY link to live pages (no "Coming Soon" links, no dead links)
