# YourPath Section

## Metadata
- **Phase:** 2
- **Branch:** `home/your-path`
- **Output File(s):** `src/components/home/YourPath.tsx`
- **Depends On:** Phase 0 (Foundation), Phase 1 (ScrollReveal, SectionLabel, SectionWrapper)
- **Estimated Complexity:** Low

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

YourPath is Section 7 on the home page. It is the ONE section that breaks the dark palette, using `bg-break` (#0D3535) — a deep teal background. It presents a 3-step vertical timeline showing the user's journey from waitlist to deployment. The section has 1px teal borders at top and bottom to mark the visual transition. Step numbers are large and teal-colored, connected by a vertical line.

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

// SectionLabel — monospace uppercase label
import { SectionLabel } from "@/components/ui/SectionLabel";
// <SectionLabel color="core">YOUR PATH</SectionLabel>

// SectionWrapper — consistent section spacing + atmosphere
import { SectionWrapper } from "@/components/ui/SectionWrapper";
// <SectionWrapper id="path" background="break">...</SectionWrapper>
```

## Requirements

1. Add `"use client"` directive at top (component uses Framer Motion)
2. Use `SectionWrapper` with `id="path"` and `background="break"`
3. Add 1px top border: `border-t border-[rgba(26,155,191,0.15)]` on the outermost wrapper
4. Add 1px bottom border: `border-b border-[rgba(26,155,191,0.15)]` on the outermost wrapper
5. Apply `atmosphere-grid` and `atmosphere-vignette` classes
6. Display section label "YOUR PATH" via `SectionLabel` with `color="core"`
7. Build a vertical timeline with 3 steps, left-aligned
8. Vertical connector line: absolute, 2px wide, `rgba(255,255,255,0.15)`, connecting the 3 step numbers
9. Each step has: large number ("01", "02", "03"), title, body text
10. Steps reveal one by one with staggered delays (150ms each) using ScrollReveal
11. Numbers appear with spring physics via `motion.span` (scale 0.8 to 1, opacity 0 to 1)
12. All content within `max-w-3xl mx-auto`

## Copy (Exact Text)

**Section Label:**
```
YOUR PATH
```

**Step 1:**
- Number: `01`
- Title: `JOIN THE WAITLIST`
- Body: `Secure your spot. We're onboarding in waves — early access means priority.`

**Step 2:**
- Number: `02`
- Title: `GET YOUR DIAGNOSTIC`
- Body: `We analyze your business across all 4 engines. You get a diagnostic report + custom roadmap. The audit is standalone — no commitment beyond it.`

**Step 3:**
- Number: `03`
- Title: `DEPLOY THE SYSTEM`
- Body: `Strategy, tech, growth, and brand — designed together, deployed in 90-day sprints. You see results in weeks, not quarters.`

## Styles

**Section borders:**
- Apply on the section element or a wrapper div: `border-t border-b border-[rgba(26,155,191,0.15)]`

**Timeline container:**
- `relative max-w-3xl mx-auto`

**Vertical connector line:**
- `absolute left-[1.25rem] md:left-[2rem] top-0 bottom-0 w-[2px]` with `bg-[rgba(255,255,255,0.15)]`
- This line should span from the first step number to the last step number vertically

**Step container:**
- `relative pl-16 md:pl-24 py-8`
- Each step spaced with consistent padding

**Step number ("01", "02", "03"):**
- `font-display text-core-bright text-5xl md:text-6xl lg:text-[clamp(2rem,4vw,3.5rem)]`
- Positioned to align with the vertical connector line on its left edge
- `absolute left-0 top-8`

**Step title:**
- `font-display text-lg lg:text-xl text-text-hero mt-2`

**Step body:**
- `font-body text-base text-text-body mt-2 max-w-lg`

## Animations

**Step reveal (staggered ScrollReveal):**
- Step 1: `<ScrollReveal delay={0}>`
- Step 2: `<ScrollReveal delay={0.15}>`
- Step 3: `<ScrollReveal delay={0.3}>`

**Number spring entrance:**
```tsx
import { motion } from "framer-motion";

// Each step number:
<motion.span
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ type: "spring", stiffness: 100, damping: 20 }}
  className="font-display text-core-bright text-5xl md:text-6xl lg:text-[clamp(2rem,4vw,3.5rem)]"
>
  01
</motion.span>
```

## Responsive Behavior

- **Base (mobile, <768px):** Same vertical layout — works naturally. Numbers use `text-5xl`. Step padding-left `pl-16`. Connector line at `left-[1.25rem]`.
- **md (768px+):** Numbers grow to `text-6xl`. Step padding-left `pl-24`. Connector line at `left-[2rem]`.
- **lg (1024px+):** Numbers scale to `clamp(2rem, 4vw, 3.5rem)`. Title grows to `text-xl`.

## Imports

```tsx
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
```

## Expected Output

This prompt produces exactly **1 file:**

| # | File | Location |
|---|------|----------|
| 1 | YourPath.tsx | `src/components/home/YourPath.tsx` |

- Single named export: `export function YourPath()`
- `"use client"` directive: yes
- Total lines: ~100-130
- No additional files created
- No files modified

**ONLY rules:**
- ONLY use Tailwind token classes (never raw hex in className, except the rgba border values where Tailwind tokens do not exist)
- ONLY use the imported components listed above plus `motion` from framer-motion
- ONLY create the one file specified
- ONLY use named export
- ONLY display the 3 steps specified (do not add more steps or additional CTAs)

**Test:** Render `<YourPath />` in isolation. The deep teal background (#0D3535) should visually break from the surrounding dark sections. You should see 3 steps with large teal numbers connected by a vertical line. Steps should animate in sequentially when scrolled into view. Numbers should spring into place with a subtle scale effect. On mobile, the layout stays vertical and works naturally with slightly smaller numbers. The 1px teal borders at top and bottom should be visible as subtle dividers.
