# Contact Page

## Metadata
- **Phase:** 4
- **Branch:** `pages/contact`
- **Output File(s):** `src/app/contact/page.tsx`, `src/components/contact/ContactHero.tsx`, `src/components/contact/ContactForm.tsx`
- **Depends On:** Phase 0 (Foundation), Phase 1 (ScrollReveal, Input, Button, Navbar, Footer), Phase 3 (Backend — /api/contact)
- **Estimated Complexity:** Medium

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

The Contact page provides a direct way for visitors to reach the DeltaX team. It has a simple hero section with contact info and social links, followed by a form that POSTs to `/api/contact`. The form includes a hidden honeypot field for spam protection. On successful submission, the form fades out and a confirmation message appears with navigation links.

## Color Tokens

```
bg-primary #0A0C0B | bg-secondary #161C19 | bg-tertiary #1C2320 | bg-break #0D3535
core-bright #1A9BBF | code-bright #8A8A8A | scale-bright #D94040 | style-bright #6E75FF | deltax-bright #4466CC
gold #f0b429 | success #22C55E | error #EF4444
text-hero #FFFFFF | text-body #E8E8E8 | text-dim rgba(255,255,255,0.60) | text-muted rgba(255,255,255,0.50)
```

## Component Signatures (Available Imports)

```tsx
// Navbar — site navigation
import { Navbar } from "@/components/shared/Navbar";

// Footer — site footer
import { Footer } from "@/components/shared/Footer";

// ScrollReveal — wraps content with whileInView fade-in
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// Input — styled input component
import { Input } from "@/components/ui/Input";
// <Input label="Name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />

// Button — styled button component
import { Button } from "@/components/ui/Button";
// <Button variant="primary" type="submit" loading={loading}>SEND MESSAGE</Button>
```

## Requirements

### File 1: `src/app/contact/page.tsx`

1. Default export function (page convention)
2. Import and render in order: `Navbar`, `ContactHero`, `ContactForm`, `Footer`
3. Export metadata object: `{ title: "Contact — DeltaX", description: "Get in touch with the DeltaX team." }`
4. No "use client" — this is a Server Component
5. ~20-25 lines

### File 2: `src/components/contact/ContactHero.tsx`

1. Add `"use client"` directive (uses ScrollReveal)
2. Named export: `export function ContactHero()`
3. `bg-primary` background, `relative overflow-hidden`
4. Minimal teal atmosphere: absolute div with `radial-gradient(ellipse at center, rgba(26, 155, 191, 0.05) 0%, transparent 70%)`
5. Apply `atmosphere-grid` and `atmosphere-vignette` classes
6. Content centered: `max-w-4xl mx-auto px-6 lg:px-8 text-center py-24 lg:py-32`
7. Headline: "LET'S TALK" — `font-display text-3xl lg:text-4xl text-text-hero text-center`
8. Subtext: "Have a question or want to reach out directly? We'd love to hear from you." — `font-body text-lg text-text-body text-center mt-4`
9. Contact email: "contact@thesx.co" — `text-sm text-text-muted text-center mt-6`
10. Location: "Bali, Indonesia" — `text-sm text-text-muted text-center mt-1`
11. Social icons row: X (Twitter), LinkedIn, Instagram — `flex gap-4 justify-center mt-4`
    - Each: simple inline SVG, `w-5 h-5` (20px), `text-text-muted hover:text-text-body transition-colors duration-200`
    - X icon: simple X shape SVG path
    - LinkedIn icon: simple "in" box SVG path
    - Instagram icon: simple camera outline SVG path
    - Each wrapped in `<a>` with `target="_blank" rel="noopener noreferrer"` and appropriate href (use `#` as placeholder URL)
12. All wrapped in `<ScrollReveal delay={0}>`
13. ~60-80 lines

### File 3: `src/components/contact/ContactForm.tsx`

1. Add `"use client"` directive (uses hooks, state, Framer Motion)
2. Named export: `export function ContactForm()`
3. `bg-secondary` background band, `py-24 lg:py-32`
4. Form container: `max-w-xl mx-auto px-6 lg:px-8`
5. **Form fields:**
   - Name: `<Input label="Name" name="name" required />` — controlled with useState
   - Email: `<Input label="Email" name="email" type="email" required />` — controlled with useState
   - Company: `<Input label="Company" name="company" />` (optional) — controlled with useState
   - Challenge: `<textarea>` with label "What's your biggest challenge?", `rows={4}`, `maxLength={500}`, `resize-y`, controlled with useState
     - Live character counter below: `<span className="text-xs text-text-muted mt-1 block text-right">{challenge.length}/500</span>`
     - Textarea styling: `w-full bg-bg-tertiary border border-[rgba(255,255,255,0.06)] rounded-lg px-4 py-3 font-body text-base text-text-body placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-core-bright focus:ring-offset-2 focus:ring-offset-bg-primary resize-y`
     - Placeholder: `"e.g., We're doing $2M but our ops can't scale past 5 team members."`
6. **Hidden honeypot field:**
   - `<input name="website" tabIndex={-1} autoComplete="off" className="absolute opacity-0 h-0 w-0 overflow-hidden" />`
   - Controlled with useState
7. **Submit button:** `<Button variant="primary" type="submit" loading={status === "loading"}>SEND MESSAGE</Button>`
   - Full width: wrap in `mt-6`
8. **State management:**
   - `useState` for: name, email, company, challenge, website (honeypot), status
   - Status type: `"idle" | "loading" | "success" | "error" | "ratelimited"`
9. **On submit (handleSubmit):**
   - `e.preventDefault()`
   - Set status to "loading"
   - POST to `/api/contact` with JSON body: `{ name, email, company, challenge, website }`
   - Handle response:
     - 201: set status to "success"
     - 429: set status to "ratelimited"
     - Other: set status to "error"
   - Catch: set status to "error"
10. **Success state:**
    - Form fades out using `<AnimatePresence>` + `motion.div` with `exit={{ opacity: 0, y: -10 }}` transition 300ms
    - Confirmation fades in with `motion.div` `initial={{ opacity: 0, y: 10 }}` `animate={{ opacity: 1, y: 0 }}`
    - Text: "We've received your message. Expect a response within 24 hours." — `font-body text-base text-text-body text-center`
    - Two links below: `flex gap-6 justify-center mt-6`
      - "Back to Home" — `<a href="/" className="font-body text-sm text-core-bright hover:underline">`
      - "Learn About Our Process" — `<a href="/about" className="font-body text-sm text-core-bright hover:underline">`
11. **Error messages:**
    - error: "Something went wrong. Please try again." — `text-sm text-error mt-2`
    - ratelimited: "Too many requests. Please try again later." — `text-sm text-error mt-2`
12. ~150-200 lines

## Copy (Exact Text)

**ContactHero headline:**
```
LET'S TALK
```

**ContactHero subtext:**
```
Have a question or want to reach out directly? We'd love to hear from you.
```

**Contact info:**
```
contact@thesx.co
Bali, Indonesia
```

**Success message:**
```
We've received your message. Expect a response within 24 hours.
```

**Success links:**
```
Back to Home
Learn About Our Process
```

**Error message:**
```
Something went wrong. Please try again.
```

**Rate limit message:**
```
Too many requests. Please try again later.
```

## Styles

**Textarea:**
- `w-full bg-bg-tertiary border border-[rgba(255,255,255,0.06)] rounded-lg px-4 py-3 font-body text-base text-text-body placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-core-bright focus:ring-offset-2 focus:ring-offset-bg-primary resize-y`

**Character counter:**
- `text-xs text-text-muted mt-1 block text-right`

**Form field spacing:**
- Each field wrapper: `mb-4` or `space-y-4` on the form

**Submit button wrapper:**
- `mt-6`

**Success container:**
- `text-center py-12`

## Animations

**Form exit (on success):**
```tsx
<AnimatePresence mode="wait">
  {status !== "success" ? (
    <motion.form
      key="form"
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
    >
      {/* fields */}
    </motion.form>
  ) : (
    <motion.div
      key="success"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      {/* success message */}
    </motion.div>
  )}
</AnimatePresence>
```

## Responsive Behavior

- **Base (mobile):** Single column. Full-width fields. Social icons centered.
- **md (768px+):** No layout changes — form is already `max-w-xl` centered.
- **lg (1024px+):** Padding increases for hero. Same form layout.

## Imports

**page.tsx:**
```tsx
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
```

**ContactHero.tsx:**
```tsx
import { ScrollReveal } from "@/components/ui/ScrollReveal";
```

**ContactForm.tsx:**
```tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
```

## Expected Output

This prompt produces exactly **3 files:**

| # | File | Location |
|---|------|----------|
| 1 | page.tsx | `src/app/contact/page.tsx` |
| 2 | ContactHero.tsx | `src/components/contact/ContactHero.tsx` |
| 3 | ContactForm.tsx | `src/components/contact/ContactForm.tsx` |

- Named exports for components. Default export for page.tsx only.
- `"use client"` directive on: ContactHero, ContactForm (NOT page.tsx)
- Total lines: ~150-200 across all 3 files (corrected from original — ContactForm alone is ~150-200, total ~230-300)
- No additional files created
- No files modified

**ONLY rules:**
- ONLY use Tailwind token classes (never raw hex in className, except border-[] rgba)
- ONLY use the imported components listed above plus React hooks and Framer Motion
- ONLY create the 3 files specified
- ONLY use named exports for components

**Test:** Navigate to `/contact`. You should see the hero with headline, email, location, and social icons. Below, a form with Name, Email, Company, and Challenge fields. The challenge textarea shows a live character counter. Submit the form — on success, the form fades out and a confirmation message with two links appears. On error, an inline error message appears. The hidden honeypot field should not be visible. Social icons should be monochrome and brighten on hover.
