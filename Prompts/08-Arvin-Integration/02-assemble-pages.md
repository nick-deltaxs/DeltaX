# Assemble Home Page

## Metadata
- **Phase:** 5
- **Branch:** `integration/assemble`
- **Output File(s):** `src/app/page.tsx`
- **Depends On:** Phase 1 (Navbar, Footer), Phase 2 (all 8 home sections)
- **Estimated Complexity:** Low

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

The home page (`/`) is the primary landing page for thesx.co. It assembles all 8 home sections in order, sandwiched between the shared Navbar and Footer. Sections 1-4 (Hero, TheProblem, TheSystem, TheEngine) load eagerly because they are above or near the fold. Sections 5-8 (TheProof, TheArchitects, YourPath, FinalCTA) are lazy-loaded with `next/dynamic` to improve initial page load performance. This file is a Server Component — no "use client" needed.

## Requirements

1. Default export function (page convention)
2. Export metadata object:
```tsx
export const metadata = {
  title: "DeltaX — One System. Four Engines. Total Transformation.",
  description: "DeltaX replaces the 4 agencies that never talk to each other with one system where strategy, tech, growth, and brand feed into each other.",
};
```
3. **Eager imports (sections 1-4):**
   - `Hero` from `@/components/home/Hero`
   - `TheProblem` from `@/components/home/TheProblem`
   - `TheSystem` from `@/components/home/TheSystem`
   - `TheEngine` from `@/components/home/TheEngine`
4. **Lazy imports (sections 5-8) using `next/dynamic`:**
   - `TheProof`: `dynamic(() => import("@/components/home/TheProof").then(m => ({ default: m.TheProof })), { ssr: false, loading: () => <div className="min-h-[50vh]" /> })`
   - `TheArchitects`: `dynamic(() => import("@/components/home/TheArchitects").then(m => ({ default: m.TheArchitects })), { ssr: false, loading: () => <div className="min-h-[50vh]" /> })`
   - `YourPath`: `dynamic(() => import("@/components/home/YourPath").then(m => ({ default: m.YourPath })), { ssr: false, loading: () => <div className="min-h-[50vh]" /> })`
   - `FinalCTA`: `dynamic(() => import("@/components/home/FinalCTA").then(m => ({ default: m.FinalCTA })), { ssr: false, loading: () => <div className="min-h-[50vh]" /> })`
5. **Shared imports:**
   - `Navbar` from `@/components/shared/Navbar`
   - `Footer` from `@/components/shared/Footer`
6. **Render order:**
   ```tsx
   <main>
     <Navbar />
     <Hero />
     <TheProblem />
     <TheSystem />
     <TheEngine />
     <TheProof />
     <TheArchitects />
     <YourPath />
     <FinalCTA />
     <Footer />
   </main>
   ```
7. Wrap everything in a `<main>` element — no additional wrapper divs needed
8. No "use client" directive — this is a Server Component

## Imports

```tsx
import dynamic from "next/dynamic";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/home/Hero";
import { TheProblem } from "@/components/home/TheProblem";
import { TheSystem } from "@/components/home/TheSystem";
import { TheEngine } from "@/components/home/TheEngine";

const TheProof = dynamic(
  () => import("@/components/home/TheProof").then((m) => ({ default: m.TheProof })),
  { ssr: false, loading: () => <div className="min-h-[50vh]" /> }
);

const TheArchitects = dynamic(
  () => import("@/components/home/TheArchitects").then((m) => ({ default: m.TheArchitects })),
  { ssr: false, loading: () => <div className="min-h-[50vh]" /> }
);

const YourPath = dynamic(
  () => import("@/components/home/YourPath").then((m) => ({ default: m.YourPath })),
  { ssr: false, loading: () => <div className="min-h-[50vh]" /> }
);

const FinalCTA = dynamic(
  () => import("@/components/home/FinalCTA").then((m) => ({ default: m.FinalCTA })),
  { ssr: false, loading: () => <div className="min-h-[50vh]" /> }
);
```

## Expected Output

This prompt produces exactly **1 file:**

| # | File | Location |
|---|------|----------|
| 1 | page.tsx | `src/app/page.tsx` |

- Default export (page convention)
- No `"use client"` directive
- Total lines: ~40-50
- No additional files created
- No files modified

**ONLY rules:**
- ONLY import from the paths listed above
- ONLY create the 1 file specified
- ONLY use `next/dynamic` for sections 5-8
- ONLY use default export for the page function
- ONLY render sections in the exact order specified

**Test:** Navigate to `/`. All 8 sections should render in order: Hero, TheProblem, TheSystem, TheEngine, TheProof, TheArchitects, YourPath, FinalCTA. Sections 5-8 should load after initial paint (lazy). Navbar should be fixed at the top. Footer should render after the last section. Each section's `id` attribute should be present for smooth-scroll navigation.
