# About Page

## Metadata
- **Phase:** 4
- **Branch:** `pages/about`
- **Output File(s):** `src/app/about/page.tsx`, `src/components/about/AboutHero.tsx`, `src/components/about/Story.tsx`, `src/components/about/TeamGrid.tsx`, `src/components/about/AboutCTA.tsx`
- **Depends On:** Phase 0 (Foundation), Phase 1 (ScrollReveal, SectionLabel, SectionWrapper, Card, WaitlistForm, Navbar, Footer)
- **Estimated Complexity:** Medium-High

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

The About page tells the DeltaX origin story and showcases the full 16-person team. It has four sections: a hero with headline, a narrative story block, a full team grid (anchored at #team for links from the home page), and a closing CTA with WaitlistForm. The team grid uses the same three-tier hierarchy as TheArchitects on the home page (founders 120px, leadership 72px, team 48px) but shows all 16 members with full detail.

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

// SectionWrapper — consistent section spacing + atmosphere
import { SectionWrapper } from "@/components/ui/SectionWrapper";

// Card — highlight box with left accent
import { Card } from "@/components/ui/Card";
// <Card variant="left-accent" accentColor="core">...</Card>

// WaitlistForm — email + JOIN WAITLIST button
import { WaitlistForm } from "@/components/ui/WaitlistForm";
```

## Requirements

### File 1: `src/app/about/page.tsx`

1. Default export function (page convention)
2. Import and render in order: `Navbar`, `AboutHero`, `Story`, `TeamGrid`, `AboutCTA`, `Footer`
3. Export metadata object: `{ title: "About — DeltaX", description: "Meet the team behind the system." }`
4. No "use client" — this is a Server Component
5. ~25-30 lines

### File 2: `src/components/about/AboutHero.tsx`

1. Add `"use client"` directive (uses ScrollReveal / Framer Motion)
2. Named export: `export function AboutHero()`
3. `bg-primary` background, `min-h-[60vh] flex items-center justify-center`, `relative overflow-hidden`
4. Teal atmosphere glow: absolute div with `radial-gradient(ellipse at center, rgba(26, 155, 191, 0.07) 0%, transparent 70%)`
5. Apply `atmosphere-grid` and `atmosphere-vignette` classes
6. Content centered: `max-w-4xl mx-auto px-6 lg:px-8 text-center py-24 lg:py-32`
7. Headline: "THE SYSTEM BEHIND THE SYSTEM" — `font-display text-3xl lg:text-4xl text-text-hero text-center`
8. Subtext: "What DeltaX is and why it exists." — `font-body text-lg text-text-body text-center mt-4`
9. Both wrapped in `<ScrollReveal delay={0}>`
10. ~40-50 lines

### File 3: `src/components/about/Story.tsx`

1. Add `"use client"` directive (uses ScrollReveal, Card)
2. Named export: `export function Story()`
3. `bg-secondary` background band, `py-24 lg:py-32`
4. Content: `max-w-3xl mx-auto px-6 lg:px-8`
5. Three paragraphs of hardcoded text (exact copy below), each `font-body text-base text-text-body leading-relaxed mb-6`
6. After the paragraphs, a `<Card variant="left-accent" accentColor="core">` containing the key quote
7. All wrapped in `<ScrollReveal delay={0}>`
8. ~50-70 lines

### File 4: `src/components/about/TeamGrid.tsx`

1. Add `"use client"` directive (uses Framer Motion for stagger)
2. Named export: `export function TeamGrid()`
3. Section `id="team"` — this is the anchor target from `/about#team`
4. `bg-primary` background, `py-24 lg:py-32`
5. Navy atmosphere glow: `radial-gradient(ellipse at center, rgba(68, 102, 204, 0.06) 0%, transparent 70%)`
6. Apply `atmosphere-grid` and `atmosphere-vignette` classes
7. Headline: "The Full Team" — `font-display text-2xl text-text-hero text-center`
8. Content: `max-w-6xl mx-auto px-6 lg:px-8`
9. **Three tiers of team members** (all data hardcoded as typed arrays):

**Founders (120px avatars, 50/50 grid):**

| Name | Initials | Role | Pillar |
|------|----------|------|--------|
| Dave Benrouz | DB | Co-Founder & System Architect | deltax |
| Ramtin Ghaffary | RG | Co-Founder | deltax |

**Leadership (72px avatars, 4-column grid):**

| Name | Initials | Role | Pillar |
|------|----------|------|--------|
| Vitaly Kulak | VK | COO | deltax |
| Yaroslav Gordon | YG | Chief of Staff | deltax |
| Vadim Parker | VP | Creative Director | style |
| Masha Ghaffary | MG | Growth Director | scale |

**Team (48px avatars, responsive grid):**

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

10. Avatar gradient backgrounds by pillar (same as TheArchitects):
```tsx
const pillarGradients: Record<string, string> = {
  core: "linear-gradient(135deg, #006381 0%, #1A9BBF 100%)",
  code: "linear-gradient(135deg, #5A5A5A 0%, #8A8A8A 100%)",
  scale: "linear-gradient(135deg, #9A1515 0%, #D94040 100%)",
  style: "linear-gradient(135deg, #121CDB 0%, #6E75FF 100%)",
  deltax: "linear-gradient(135deg, #1A9BBF 0%, #15339A 100%)",
};
```

11. Pillar text colors (same as TheArchitects):
```tsx
const pillarTextColors: Record<string, string> = {
  core: "text-core-bright",
  code: "text-code-bright",
  scale: "text-scale-bright",
  style: "text-style-bright",
  deltax: "text-deltax-bright",
};
```

12. Founder avatars: `w-[120px] h-[120px]`, initials `font-display text-2xl`, name `font-display text-base text-text-hero mt-4`, role `font-body text-sm text-text-dim`
13. Leadership avatars: `w-[72px] h-[72px]`, initials `font-display text-lg`, name `font-body text-sm text-text-body mt-3`, role `font-body text-xs text-text-dim`, pillar badge `font-mono text-[10px] uppercase tracking-wider mt-1`
14. Team avatars: `w-[48px] h-[48px]`, initials `font-display text-sm`, name `text-xs text-text-dim mt-2 text-center truncate w-full`, role `text-[10px] text-text-muted text-center truncate w-full`
15. Hover on all avatars: `transition-transform duration-200 hover:scale-105`
16. Stagger animation using `motion.div` with `staggerChildren: 0.06` for leadership, `staggerChildren: 0.04` for team
17. ~150-180 lines

### File 5: `src/components/about/AboutCTA.tsx`

1. Add `"use client"` directive (uses ScrollReveal)
2. Named export: `export function AboutCTA()`
3. `bg-secondary` background, `py-24 lg:py-32`
4. Teal atmosphere glow: `radial-gradient(ellipse at center, rgba(26, 155, 191, 0.07) 0%, transparent 70%)`
5. Content centered: `max-w-3xl mx-auto px-6 lg:px-8 text-center`
6. Text: "Ready to work with us?" — `font-display text-xl text-text-hero text-center`
7. `<WaitlistForm />` below with `mt-8`
8. Wrapped in `<ScrollReveal delay={0}>`
9. ~30-40 lines

## Copy (Exact Text)

**AboutHero headline:**
```
THE SYSTEM BEHIND THE SYSTEM
```

**AboutHero subtext:**
```
What DeltaX is and why it exists.
```

**Story paragraph 1:**
```
Founded by Dave Benrouz and Ramtin Ghaffary — based in Bali. Dave's MSc in Computer Mathematics from Igor Sikorsky KPI gave him the systems thinking that became DeltaX's foundation.
```

**Story paragraph 2:**
```
They kept seeing the same pattern: companies spending six figures on agencies that never shared a single Slack channel. Strategy went one direction. Tech went another. Growth had no data from either. Brand was decorating what nobody aligned on.
```

**Story paragraph 3:**
```
So they built one system — where strategy feeds tech, tech feeds growth, growth feeds brand, and brand feeds strategy back. A closed loop. DeltaX.
```

**Story key quote (inside Card):**
```
Stop hiring four agencies. Start building one system.
```

**TeamGrid headline:**
```
The Full Team
```

**AboutCTA text:**
```
Ready to work with us?
```

## Styles

**Founder grid:**
- `grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-lg mx-auto`
- Each: `flex flex-col items-center text-center`

**Leadership grid:**
- `grid grid-cols-2 md:grid-cols-4 gap-6 mt-12`
- Each: `flex flex-col items-center text-center`

**Team grid:**
- `grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 xl:grid-cols-10 gap-4 mt-8`
- Each: `flex flex-col items-center text-center`

**Avatar circles:**
- `rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105`
- `style={{ background: pillarGradients[pillar] }}`
- Initials: `text-text-hero text-center select-none`

## Animations

**Stagger groups using motion.div:**

```tsx
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

- Founders: `<ScrollReveal delay={0}>` wrapping the grid
- Leadership: `motion.div` with `variants={staggerContainer(0.06)}`, `initial="hidden"`, `whileInView="visible"`, `viewport={{ once: true, amount: 0.2 }}`
- Team: `motion.div` with `variants={staggerContainer(0.04)}`, same viewport config
- Each child in leadership/team: `<motion.div variants={fadeUpItem}>`

## Responsive Behavior

- **Base (mobile, <640px):** Founders stack vertically (`grid-cols-1`), still 120px. Leadership 2-col. Team 3-col.
- **sm (640px+):** Team goes to 5-col.
- **md (768px+):** Founders side by side (`grid-cols-2`). Leadership 4-col.
- **lg (1024px+):** Team goes to 10-col (one row).

## Imports

**page.tsx:**
```tsx
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { Story } from "@/components/about/Story";
import { TeamGrid } from "@/components/about/TeamGrid";
import { AboutCTA } from "@/components/about/AboutCTA";
```

**AboutHero.tsx:**
```tsx
import { ScrollReveal } from "@/components/ui/ScrollReveal";
```

**Story.tsx:**
```tsx
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
```

**TeamGrid.tsx:**
```tsx
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
```

**AboutCTA.tsx:**
```tsx
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
```

## Expected Output

This prompt produces exactly **5 files:**

| # | File | Location |
|---|------|----------|
| 1 | page.tsx | `src/app/about/page.tsx` |
| 2 | AboutHero.tsx | `src/components/about/AboutHero.tsx` |
| 3 | Story.tsx | `src/components/about/Story.tsx` |
| 4 | TeamGrid.tsx | `src/components/about/TeamGrid.tsx` |
| 5 | AboutCTA.tsx | `src/components/about/AboutCTA.tsx` |

- Named exports for all components. Default export for page.tsx only.
- `"use client"` directive on: AboutHero, Story, TeamGrid, AboutCTA (NOT page.tsx)
- Total lines: ~300-400 across all 5 files
- No additional files created
- No files modified

**ONLY rules:**
- ONLY use Tailwind token classes (never raw hex in className, except inline styles for gradient backgrounds on avatars)
- ONLY use the imported components listed above plus `motion` from framer-motion
- ONLY create the 5 files specified
- ONLY use the team data listed in this prompt (16 people total)

**Test:** Navigate to `/about`. You should see the hero with headline, three paragraphs of story text with a teal-accented quote card, the full 16-person team grid with gradient circle avatars in three size tiers, and a closing CTA with WaitlistForm. Clicking `/about#team` from the home page should scroll directly to the team grid. On mobile, grids collapse to fewer columns. Avatar hover shows subtle scale effect.
