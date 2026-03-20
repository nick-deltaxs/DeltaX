# TheArchitects Section

## Metadata
- **Phase:** 2
- **Branch:** `home/the-architects`
- **Output File(s):** `src/components/home/TheArchitects.tsx`
- **Depends On:** Phase 0 (Foundation), Phase 1 (ScrollReveal, SectionLabel, SectionWrapper)
- **Estimated Complexity:** Medium

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

TheArchitects is Section 6 on the home page. It showcases the DeltaX team of 16 people across three visual tiers: co-founders (120px avatars), leadership (72px avatars), and team members (48px avatars). Each person has a gradient circle avatar with initials, their name, role, and pillar badge. The section establishes trust by putting real names and roles in front of the visitor.

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
// <SectionLabel color="core">THE ARCHITECTS</SectionLabel>

// SectionWrapper — consistent section spacing + atmosphere
import { SectionWrapper } from "@/components/ui/SectionWrapper";
// <SectionWrapper id="architects" background="primary">...</SectionWrapper>
```

## Requirements

1. Add `"use client"` directive at top (component uses Framer Motion for stagger)
2. Use `SectionWrapper` with `id="architects"` and `background="primary"`
3. Add navy radial glow (`#4466CC` at 0.06 opacity) via a positioned div
4. Apply `atmosphere-grid` and `atmosphere-vignette` classes
5. Display section label "THE ARCHITECTS" via `SectionLabel` with `color="core"`
6. Display subtext "16 people. Four disciplines. One system."
7. CO-FOUNDERS tier: 2 people in a 50/50 layout (equal prominence), 120px gradient circle avatars with initials
8. LEADERSHIP tier: 4 people in a row, 72px gradient circle avatars
9. TEAM tier: 10 people in a responsive grid, 48px gradient circle avatars
10. Each avatar uses a gradient background based on their pillar accent color (teal for core, grey for code, red for scale, blue for style, navy for deltax)
11. Pillar badge: monospace text in pillar accent color, no border, no background
12. Hover on avatars: `scale(1.05)`, transition 200ms
13. Link at bottom: "Meet the full 16-person team" linking to `/about#team`
14. Stagger animation: founders first, then leadership (60ms stagger), then team (40ms stagger)
15. All data is hardcoded inside the component as typed arrays

## Copy (Exact Text)

**Section Label:**
```
THE ARCHITECTS
```

**Subtext:**
```
16 people. Four disciplines. One system.
```

**Co-Founders:**
| Name | Initials | Role | Pillar |
|------|----------|------|--------|
| Dave Benrouz | DB | Co-Founder & System Architect | deltax |
| Ramtin Ghaffary | RG | Co-Founder | deltax |

**Leadership:**
| Name | Initials | Role | Pillar |
|------|----------|------|--------|
| Vitaly Kulak | VK | COO | deltax |
| Yaroslav Gordon | YG | Chief of Staff | deltax |
| Vadim Parker | VP | Creative Director | style |
| Masha Ghaffary | MG | Growth Director | scale |

**Team:**
| Name | Initials | Role | Pillar |
|------|----------|------|--------|
| Nick | NK | Quality & Ops | code |
| Den | DP | Admin | deltax |
| Hassan | HA | Finance | deltax |
| Goga | GZ | Research | core |
| Arvin | AA | Engineer | code |
| Arrom | AM | Engineer | code |
| Nazar | NZ | Builder | code |
| Marina | MO | Builder | code |
| Katareina | KM | Builder | code |
| Erfan | EM | Builder | code |

**Link:**
```
→ Meet the full 16-person team
```

## Styles

**Navy radial glow:**
- A div with `absolute inset-0 pointer-events-none z-0`
- `style={{ background: "radial-gradient(ellipse at center, rgba(68, 102, 204, 0.10) 0%, transparent 70%)" }}`

**Subtext:**
- `font-body text-lg text-text-body mt-4`

**Avatar gradient backgrounds by pillar:**
```tsx
const pillarGradients: Record<string, string> = {
  core: "linear-gradient(135deg, #006381 0%, #1A9BBF 100%)",
  code: "linear-gradient(135deg, #5A5A5A 0%, #8A8A8A 100%)",
  scale: "linear-gradient(135deg, #9A1515 0%, #D94040 100%)",
  style: "linear-gradient(135deg, #121CDB 0%, #6E75FF 100%)",
  deltax: "linear-gradient(135deg, #1A9BBF 0%, #15339A 100%)",
};
```

**Pillar accent text colors:**
```tsx
const pillarTextColors: Record<string, string> = {
  core: "text-core-bright",
  code: "text-code-bright",
  scale: "text-scale-bright",
  style: "text-style-bright",
  deltax: "text-deltax-bright",
};
```

**Co-Founder avatars (120px):**
- Container: `grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-lg mx-auto`
- Each: centered in column, `flex flex-col items-center`
- Circle: `w-[120px] h-[120px] rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105`
- `style={{ background: pillarGradients[pillar] }}`
- Initials: `font-display text-2xl text-text-hero text-center select-none`
- Name: `font-display text-base text-text-hero mt-4`
- Role: `font-body text-sm text-text-dim`

**Leadership avatars (72px):**
- Container: `grid grid-cols-2 md:grid-cols-4 gap-6 mt-12`
- Circle: `w-[72px] h-[72px] rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105`
- Initials: `font-display text-lg text-text-hero select-none`
- Name: `font-body text-sm text-text-body mt-3`
- Role: `font-body text-xs text-text-dim`
- Pillar badge: `font-mono text-[10px] uppercase tracking-wider mt-1` + pillar text color class, no border, no background

**Team avatars (48px):**
- Container: `grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 xl:grid-cols-10 gap-4 mt-8`
- Circle: `w-[48px] h-[48px] rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105`
- Initials: `font-display text-sm text-text-hero select-none`
- Name: `text-xs text-text-dim mt-2 text-center truncate w-full`
- Role: `text-[10px] text-text-muted text-center truncate w-full`

**Link:**
- `font-body text-sm text-core-bright hover:underline mt-8 inline-block`
- Wrap in `<a href="/about#team">`

## Animations

**Stagger groups using ScrollReveal:**

Co-founders:
- Entire founders block: `<ScrollReveal delay={0}>`

Leadership (stagger 60ms each):
- Person 1: `<ScrollReveal delay={0.06}>`
- Person 2: `<ScrollReveal delay={0.12}>`
- Person 3: `<ScrollReveal delay={0.18}>`
- Person 4: `<ScrollReveal delay={0.24}>`

Alternatively, use a `motion.div` container with `staggerChildren: 0.06` for the leadership grid, and `staggerChildren: 0.04` for the team grid.

```tsx
import { motion } from "framer-motion";

const staggerContainer = (stagger: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};
```

Use `motion.div` with `variants={staggerContainer(0.06)}`, `initial="hidden"`, `whileInView="visible"`, `viewport={{ once: true, amount: 0.2 }}` for the leadership grid. Use `staggerContainer(0.04)` for the team grid.

Each child: `<motion.div variants={fadeUpItem}>`.

**Hover on avatars:**
- CSS only: `transition-transform duration-200 hover:scale-105`

## Responsive Behavior

- **Base (mobile, <640px):** Co-founders stack vertically (`grid-cols-1`), still 120px. Leadership 2-col. Team 3-col.
- **sm (640px+):** Team goes to 5-col.
- **md (768px+):** Co-founders side by side (`grid-cols-2`). Leadership 4-col.
- **lg (1024px+):** Team goes to 10-col (one row).

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
| 1 | TheArchitects.tsx | `src/components/home/TheArchitects.tsx` |

- Single named export: `export function TheArchitects()`
- `"use client"` directive: yes
- Total lines: ~200-250
- No additional files created
- No files modified

**ONLY rules:**
- ONLY use Tailwind token classes (never raw hex in className, except inline style for gradient backgrounds on avatars)
- ONLY use the imported components listed above plus `motion` from framer-motion
- ONLY create the one file specified
- ONLY use named export
- ONLY use the team data listed in this prompt (16 people total)

**Test:** Render `<TheArchitects />` in isolation. You should see the section label, two co-founder avatars with gradient circles and initials, four leadership members below, and ten team members in a row on desktop. Avatar circles should show a subtle scale effect on hover. On mobile, the layout should gracefully collapse to fewer columns. The link at the bottom should navigate to `/about#team`. Stagger animations should fire when the section scrolls into view.
