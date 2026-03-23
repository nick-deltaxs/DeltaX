# WaitlistForm

## Metadata
- **Phase:** 1
- **Branch:** `feat/waitlist-form`
- **Output File(s):** `src/components/ui/WaitlistForm.tsx`
- **Depends On:** Phase 0 (Foundation — types), Phase 1 (Button, Input)
- **Estimated Complexity:** Medium (~80-120 lines)

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

Reusable waitlist email capture form for the DeltaX website. Used in Hero section, Final CTA section, and About CTA section. Self-contained component that manages its own state, validates email, posts to the API, and shows success/error messages with animated transitions.

## Interface

This interface is already defined in `src/types/index.ts`. Reference only — do NOT import it (the component manages its own internal state using useState, not this interface directly).

```typescript
interface WaitlistFormState {
  status: "idle" | "loading" | "success" | "error" | "duplicate";
  email: string;
}
```

## Requirements

Create file: `src/components/ui/WaitlistForm.tsx`

This component requires `"use client"` at the top (uses useState, Framer Motion AnimatePresence).

### State
- `email: string` — initialized to `""`
- `status: "idle" | "loading" | "success" | "error" | "duplicate"` — initialized to `"idle"`
- `errorMessage: string` — initialized to `""`

### Layout
- Outer container: `<div className="w-full">`
- Form row: `<form>` with `flex flex-col sm:flex-row gap-3` and `onSubmit` handler
- Input: takes up remaining space (`flex-1`)
- Button: fixed width on desktop, full width on mobile

### Email Input
- Use the `Input` component from `@/components/ui/Input`
- Props: `placeholder="Enter your email"`, `type="email"`, `required={true}`, `maxLength={254}`, `value={email}`, `onChange={setEmail}`, `error={status === "error"}`

### Submit Button
- Use the `Button` component from `@/components/ui/Button`
- Props: `type="submit"`, `variant="primary"`, `size="default"`, `loading={status === "loading"}`, `disabled={status === "loading" || status === "success"}`
- Text content: `JOIN WAITLIST`

### Client-Side Validation
- On form submit, before API call:
- Email regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- If email does not match regex: set `status` to `"error"`, set `errorMessage` to `"Please enter a valid email."`, do NOT call API, return early

### API Call (on valid submit)
- Set `status` to `"loading"`
- Call: `fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) })`
- Response handling:
  - `response.status === 201`: set `status` to `"success"`
  - `response.status === 409`: set `status` to `"duplicate"`
  - `response.status === 400`: set `status` to `"error"`, set `errorMessage` to `"Please enter a valid email."`
  - All other status codes: set `status` to `"error"`, set `errorMessage` to `"Something went wrong. Try again."`
- Wrap fetch in try/catch. In catch: set `status` to `"error"`, set `errorMessage` to `"Something went wrong. Try again."`

### Status Messages & Animations
- Use Framer Motion `AnimatePresence` and `motion.div` for all status transitions
- Wrap the entire form + messages area in `<AnimatePresence mode="wait">`

**When status is "idle", "loading", or "error":**
- Show the form (input + button row)
- The form is a `<motion.form>` with `key="form"`:
  - `initial={{ opacity: 1, y: 0 }}`
  - `exit={{ opacity: 0, y: -10 }}`
  - `transition={{ duration: 0.3 }}`

**When status is "error":**
- Below the form, show error message in a `<motion.p>`:
  - `initial={{ opacity: 0, y: -5 }}`
  - `animate={{ opacity: 1, y: 0 }}`
  - `transition={{ duration: 0.2 }}`
  - Class: `text-sm text-error mt-2`
  - Text: the `errorMessage` state value

**When status is "success":**
- Hide the form entirely (AnimatePresence exit handles fade-out)
- Show success message as a `<motion.p>` with `key="success"`:
  - `initial={{ opacity: 0, y: 10 }}`
  - `animate={{ opacity: 1, y: 0 }}`
  - `transition={{ duration: 0.3, delay: 0.2 }}`
  - Class: `text-lg font-body text-success`
  - Text: `You're on the list. Check your email.`

**When status is "duplicate":**
- Show form (not hidden — this is NOT an error)
- Below the form, show duplicate message in a `<motion.p>`:
  - `initial={{ opacity: 0, y: -5 }}`
  - `animate={{ opacity: 1, y: 0 }}`
  - `transition={{ duration: 0.2 }}`
  - Class: `text-sm text-text-muted mt-2`
  - Text: `You're already on the list.`

## Copy

| State | Exact Message Text |
|-------|--------------------|
| Input placeholder | Enter your email |
| Button text | JOIN WAITLIST |
| Validation error | Please enter a valid email. |
| Success (201) | You're on the list. Check your email. |
| Duplicate (409) | You're already on the list. |
| Client error (400) | Please enter a valid email. |
| Server error (500/other) | Something went wrong. Try again. |
| Network error (catch) | Something went wrong. Try again. |

## Imports

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
```

## Expected Output

This prompt produces exactly 1 file:

| # | File | Location |
|---|------|----------|
| 1 | WaitlistForm.tsx | `src/components/ui/WaitlistForm.tsx` |

After generating, verify:
- Form renders with email input and teal "JOIN WAITLIST" button side by side on desktop, stacked on mobile
- Empty submit shows "Please enter a valid email." in red below the form
- Invalid email (e.g., "abc") shows "Please enter a valid email." in red
- Loading state shows spinner in button, button disabled
- Success state fades out the form and shows green success message
- Duplicate state shows friendly message in muted text (NOT as an error)
- Server error shows red error message
- No TypeScript errors, no unused imports

## ONLY Rules

- ONLY use named export: `export function WaitlistForm()`
- ONLY import Button and Input from `@/components/ui/` (do NOT inline a raw button or input)
- ONLY use Framer Motion AnimatePresence + motion.div/motion.form/motion.p for transitions
- ONLY use Tailwind token classes for colors (NOT raw hex in className)
- ONLY use `@/` path aliases for imports
- ONLY create 1 file: `src/components/ui/WaitlistForm.tsx`
- ONLY POST to `/api/waitlist` endpoint (do NOT create the API route — it will be built in Phase 3)
- ONLY use the exact copy text listed in the Copy table above
- ONLY handle these response status codes: 201, 409, 400, and fallback for all others
