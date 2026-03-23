# Navbar

## Metadata
- **Phase:** 1
- **Branch:** `feat/navbar`
- **Output File(s):** `src/components/shared/Navbar.tsx`
- **Depends On:** Phase 0 (Foundation — DeltaXLogo, types, globals.css, tailwind.config.ts)
- **Estimated Complexity:** High (~150-200 lines)

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

Fixed-position Navbar for the DeltaX website (thesx.co). Appears on all pages. Contains logo, navigation links, a Services dropdown with the 4 sub-brand pillars, and a teal "JOIN WAITLIST" pill button. Scroll-aware background transition. Full-screen mobile overlay with staggered reveal.

## Requirements

Create file: `src/components/shared/Navbar.tsx`

This component requires `"use client"` at the top (uses useState, useEffect, usePathname).

### Layout
- Fixed position, z-50, full width, height 64px (h-16)
- Inner container: max-w-7xl mx-auto, px-6, flex items-center justify-between, h-full
- Left: DeltaXLogo (size={35}, wrapped in a Link to "/")
- Center: nav links (hidden on mobile, shown md:flex, gap-8, items-center)
- Right: "JOIN WAITLIST" button (hidden on mobile, shown md:block) + hamburger button (shown on mobile, hidden md:hidden)

### Scroll Behavior
- Use vanilla `useEffect` + `window.addEventListener("scroll", ...)` + `useState<boolean>` for scroll detection
- Do NOT use Framer Motion for scroll detection
- When `window.scrollY > 50`: set scrolled state to true
- Default (not scrolled): `bg-transparent`
- Scrolled: `bg-primary/80 backdrop-blur-lg border-b border-white/[0.06]`
- Transition on the outer `<header>`: `transition-all duration-300 ease-in-out`

### Navigation Links
- Three items: "About" (href="/about"), "Services" (dropdown trigger), "Contact" (href="/contact")
- Font: font-body, text-sm, text-text-dim
- Each link is wrapped in a `<span className="group relative">` for the underline effect
- Hover: text-text-body
- Underline element: a child `<span>` with `absolute -bottom-1 left-0 h-[2px] bg-core-bright w-0 group-hover:w-full transition-all duration-200`
- Active link detection: use `usePathname()` from `next/navigation`. When `pathname === "/about"` mark About active, when `pathname === "/contact"` mark Contact active
- Active link style: text-core-bright (instead of text-text-dim), the underline `<span>` has `w-full` permanently

### Services Dropdown
- Trigger: a `<button>` element containing the text "Services" + a chevron-down SVG icon (inline SVG, 12x12px, `viewBox="0 0 12 12"`, path: `M2 4l4 4 4-4`, stroke currentColor, strokeWidth 2, fill none, strokeLinecap round, strokeLinejoin round)
- The chevron rotates 180deg when dropdown is open: `transition-transform duration-200` + `rotate-180` when open
- State: `useState<boolean>` for `isDropdownOpen`
- Ref: `useRef<HTMLDivElement>(null)` on the dropdown container for outside click detection + mouseleave
- Opens on: `onMouseEnter` on the container div (desktop)
- Closes on: `onMouseLeave` on the container div with 150ms delay (use `setTimeout` stored in a ref, clear on mouseenter)
- Opens on: `onClick` / `onKeyDown` Enter or Space on the button
- Closes on: `onKeyDown` Escape (on the container, and on each menuitem)
- Arrow key navigation: ArrowDown moves focus to next menuitem, ArrowUp moves focus to previous. Use `useRef<(HTMLAnchorElement | null)[]>` to store refs to menu items, call `.focus()` on arrow press.
- Accessibility: button has `aria-expanded={isDropdownOpen}`, `aria-haspopup="menu"`. Dropdown `<div>` has `role="menu"`. Each item `<a>` has `role="menuitem"`, `tabIndex={isDropdownOpen ? 0 : -1}`
- Dropdown panel styles: `absolute top-full left-0 mt-2 min-w-[200px] bg-secondary border border-white/[0.06] rounded-lg py-2 shadow-xl`
- Render panel only when `isDropdownOpen` is true
- 4 items, each is a `<Link>`:

| # | Label | href | Hover border color |
|---|-------|------|--------------------|
| 1 | CoreX | /#core | border-l-2 border-core-bright |
| 2 | CodeX | /#code | border-l-2 border-code-bright |
| 3 | ScaleX | /#scale | border-l-2 border-scale-bright |
| 4 | StyleX | /#style | border-l-2 border-style-bright |

- Each item base styles: `block px-4 py-2 text-sm font-body text-text-dim hover:text-text-body hover:bg-white/[0.03] transition-colors duration-150 border-l-2 border-transparent`
- On hover, the border-l-2 changes to the pillar's accent color. Use hardcoded hover classes per item: `hover:border-core-bright`, `hover:border-code-bright`, `hover:border-scale-bright`, `hover:border-style-bright`

### "JOIN WAITLIST" Button (Desktop)
- `<Link>` element with `href="/#cta"`
- Styling: `bg-core-bright text-primary font-semibold text-sm rounded-full py-2 px-6 hover:opacity-90 transition-opacity duration-200`

### Mobile Menu (below md breakpoint)
- Hamburger button: `md:hidden w-11 h-11 flex items-center justify-center text-text-body`
- State: `useState<boolean>` for `isMobileOpen`
- Hamburger icon (closed): inline SVG, 24x24, viewBox="0 0 24 24", stroke="currentColor", strokeWidth={2}, strokeLinecap="round":
  ```
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="4" y1="18" x2="20" y2="18" />
  ```
- X icon (open): same SVG dimensions:
  ```
  <line x1="6" y1="6" x2="18" y2="18" />
  <line x1="6" y1="18" x2="18" y2="6" />
  ```
- Full-screen overlay: `fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center gap-8`
- Render overlay only when `isMobileOpen` is true
- Body scroll lock: in a `useEffect` keyed on `isMobileOpen`, when true set `document.body.style.overflow = "hidden"`, in cleanup/when false set `document.body.style.overflow = ""`
- Close on: clicking X button, pressing Escape, clicking any link (set `isMobileOpen` to false in onClick handler on each link)
- Mobile menu items (flat list — NOT nested accordion):

| # | Label | href | Type |
|---|-------|------|------|
| 1 | About | /about | Link |
| 2 | Core | /#core | Link |
| 3 | Code | /#code | Link |
| 4 | Scale | /#scale | Link |
| 5 | Style | /#style | Link |
| 6 | Contact | /contact | Link |
| 7 | JOIN WAITLIST | /#cta | Link (styled as teal pill) |

- Text links (items 1-6): `font-body text-lg text-text-dim hover:text-text-body transition-colors`
- CTA link (item 7): same styling as desktop "JOIN WAITLIST" button (`bg-core-bright text-primary font-semibold text-sm rounded-full py-3 px-8 mt-4`)
- Staggered reveal animation: use Framer Motion. Each item is a `<motion.div>` with:
  ```tsx
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
  ```
  Import `{ motion }` from `"framer-motion"` for this.

## Copy

| Element | Exact Text |
|---------|------------|
| Nav link 1 | About |
| Nav link 2 | Services |
| Nav link 3 | Contact |
| Desktop CTA | JOIN WAITLIST |
| Dropdown item 1 | CoreX |
| Dropdown item 2 | CodeX |
| Dropdown item 3 | ScaleX |
| Dropdown item 4 | StyleX |
| Mobile link 1 | About |
| Mobile link 2 | Core |
| Mobile link 3 | Code |
| Mobile link 4 | Scale |
| Mobile link 5 | Style |
| Mobile link 6 | Contact |
| Mobile CTA | JOIN WAITLIST |

## Imports

```tsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
```

## Expected Output

This prompt produces exactly 1 file:

| # | File | Location |
|---|------|----------|
| 1 | Navbar.tsx | `src/components/shared/Navbar.tsx` |

After generating, verify:
- The component renders at the top of the page, fixed, 64px tall
- Background transitions from transparent to bg-primary/80 + blur on scroll past 50px
- Desktop: About, Services dropdown, Contact links visible; "JOIN WAITLIST" teal pill on right
- Services dropdown opens on hover/click with 4 pillar items, each with accent left-border on hover
- Dropdown closes on mouseleave (150ms delay), Escape key
- Arrow key navigation works in dropdown
- Mobile: hamburger icon visible, opens full-screen overlay with staggered item animation
- Mobile menu closes on X, Escape, or link click
- Active link is highlighted with text-core-bright
- All links use next/link and correct hrefs
- No TypeScript errors, no unused imports

## ONLY Rules

- ONLY use named export: `export function Navbar()`
- ONLY use vanilla scroll listener for scroll detection (NOT Framer Motion useScroll)
- ONLY use Tailwind token classes for colors (NOT raw hex in className)
- ONLY use `@/` path aliases for imports
- ONLY create 1 file: `src/components/shared/Navbar.tsx`
- ONLY use `"use client"` directive (this component uses hooks and state)
- ONLY use the exact copy text listed in the Copy table above
- ONLY use inline SVG paths for hamburger/X/chevron icons (NOT an icon library)
- ONLY use Framer Motion for mobile menu stagger animation, NOT for scroll detection
