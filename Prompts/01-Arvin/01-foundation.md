# Foundation Setup

## Metadata
- **Phase:** 0
- **Branch:** `setup/foundation`
- **Output File(s):** Multiple files (listed in Expected Output)
- **Depends On:** None
- **Estimated Complexity:** High

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
- No default exports (except layout.tsx and page.tsx which Next.js requires as default)
- No any types in TypeScript
- Write clean, production-ready code

Output exactly the file(s) specified. Nothing more, nothing less.

## Context

This is the foundation prompt for the DeltaX website (thesx.co). It initializes the entire project — Tailwind config with brand DNA colors, global CSS with atmosphere system, root layout with fonts, and all shared UI primitives. Every other prompt depends on the files created here.

## Requirements

1. Create `tailwind.config.ts` with ALL custom color tokens listed below
2. Create `src/app/globals.css` with Tailwind imports, CSS custom properties, grid texture, atmosphere classes, and @keyframes animations
3. Create `src/app/layout.tsx` with Days One + Inter fonts via next/font/google, MotionConfig with reducedMotion="user", root metadata
4. Create `src/types/index.ts` with ALL component interfaces for the entire project
5. Create `src/components/ui/DeltaXLogo.tsx` — SVG delta mark component
6. Create `src/components/ui/ScrollReveal.tsx` — reusable whileInView animation wrapper
7. Create `src/components/ui/SectionLabel.tsx` — monospace uppercase label component
8. Create `.windsurfrules` in project root
9. Create `.env.local.template` with placeholder values

## File 1: tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A0C0B",
        secondary: "#161C19",
        tertiary: "#1C2320",
        "bg-break": "#0D3535",
        "core-base": "#006381",
        "core-bright": "#1A9BBF",
        "code-base": "#5A5A5A",
        "code-bright": "#8A8A8A",
        "scale-base": "#9A1515",
        "scale-bright": "#D94040",
        "style-base": "#121CDB",
        "style-bright": "#6E75FF",
        "deltax-base": "#15339A",
        "deltax-bright": "#4466CC",
        "text-hero": "#FFFFFF",
        "text-body": "#E8E8E8",
        "text-dim": "rgba(255,255,255,0.60)",
        "text-muted": "rgba(255,255,255,0.50)",
        gold: "#f0b429",
        success: "#22C55E",
        error: "#EF4444",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["SF Mono", "Menlo", "Consolas", "Liberation Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
```

## File 2: src/app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg-primary: #0A0C0B;
  --bg-secondary: #161C19;
  --bg-tertiary: #1C2320;
  --bg-break: #0D3535;
  --core-bright: #1A9BBF;
  --code-bright: #8A8A8A;
  --scale-bright: #D94040;
  --style-bright: #6E75FF;
  --deltax-bright: #4466CC;
  --gold: #f0b429;
  --text-hero: #FFFFFF;
  --text-body: #E8E8E8;
  --text-dim: rgba(255,255,255,0.60);
  --text-muted: rgba(255,255,255,0.50);
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.atmosphere-grid {
  background-image:
    linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 48px 48px;
}

.atmosphere-vignette {
  position: relative;
}
.atmosphere-vignette::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.25) 100%);
}

@keyframes breathe {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}
.glow-breathe {
  animation: breathe 4s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
.spinner {
  animation: spin 600ms linear infinite;
}

*:focus-visible {
  outline: 2px solid #1A9BBF;
  outline-offset: 2px;
}

.skip-to-content {
  position: absolute;
  top: -40px;
  left: 0;
  background: #1A9BBF;
  color: #0A0C0B;
  padding: 8px 16px;
  z-index: 100;
  font-weight: 600;
}
.skip-to-content:focus {
  top: 0;
}
```

## File 3: src/app/layout.tsx

```tsx
import type { Metadata } from "next";
import { Days_One, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const daysOne = Days_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DeltaX — One System. Four Engines. Total Transformation.",
  description: "Strategy, technology, growth, and brand — engineered into one system. Built for companies doing $500K–$10M. Join the waitlist.",
  metadataBase: new URL("https://thesx.co"),
  openGraph: {
    title: "DeltaX — One System. Four Engines. Total Transformation.",
    description: "Strategy, technology, growth, and brand — engineered into one system.",
    url: "https://thesx.co",
    siteName: "DeltaX",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${daysOne.variable} ${inter.variable}`}>
      <body className="bg-primary text-text-body font-body">
        <a href="#main" className="skip-to-content">Skip to content</a>
        <MotionConfig reducedMotion="user">
          <main id="main">{children}</main>
        </MotionConfig>
      </body>
    </html>
  );
}
```

## File 4: src/types/index.ts

```typescript
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "ghost";
  size?: "default" | "small";
  className?: string;
  type?: "button" | "submit";
}

export interface InputProps {
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

export interface TextareaProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  className?: string;
  name?: string;
  required?: boolean;
  maxLength?: number;
  rows?: number;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  accentColor?: "core" | "code" | "scale" | "style" | "deltax";
  variant?: "default" | "left-accent";
}

export interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "primary" | "secondary" | "break";
}

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export interface SectionLabelProps {
  children: React.ReactNode;
  color?: "core" | "code" | "scale" | "style" | "deltax" | "gold";
  className?: string;
}

export interface DeltaXLogoProps {
  className?: string;
  size?: number;
}

export interface TeamMember {
  name: string;
  nickname: string;
  role: string;
  pillar: "deltax" | "core" | "code" | "scale" | "style";
  tier: "founder" | "lead" | "support";
}

export interface CaseStudy {
  label: string;
  stat: string;
  direction: "up" | "down";
  description: string;
  engines: string;
}

export interface WaitlistFormState {
  status: "idle" | "loading" | "success" | "error" | "duplicate";
  email: string;
}

export interface ContactFormState {
  status: "idle" | "loading" | "success" | "error" | "ratelimited";
  name: string;
  email: string;
  company: string;
  challenge: string;
}
```

## File 5: src/components/ui/DeltaXLogo.tsx

```tsx
"use client";

import type { DeltaXLogoProps } from "@/types";

export function DeltaXLogo({ className = "", size = 80 }: DeltaXLogoProps) {
  const height = Math.round(size * 0.835);
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 375 313"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="DeltaX logo"
      role="img"
    >
      <path d="M187.5 0L375 313H0L187.5 0Z" fill="currentColor" />
      <path d="M187.5 60L330 280H45L187.5 60Z" fill="var(--bg-primary, #0A0C0B)" />
      <path d="M187.5 100L290 255H85L187.5 100Z" fill="currentColor" />
      <path d="M187.5 145L250 230H125L187.5 145Z" fill="var(--bg-primary, #0A0C0B)" />
    </svg>
  );
}
```

## File 6: src/components/ui/ScrollReveal.tsx

```tsx
"use client";

import { motion } from "framer-motion";
import type { ScrollRevealProps } from "@/types";

const directionMap = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: 30 },
  right: { x: -30 },
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const offset = directionMap[direction];
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

## File 7: src/components/ui/SectionLabel.tsx

```tsx
import type { SectionLabelProps } from "@/types";

const colorMap = {
  core: "text-core-bright",
  code: "text-code-bright",
  scale: "text-scale-bright",
  style: "text-style-bright",
  deltax: "text-deltax-bright",
  gold: "text-gold",
};

export function SectionLabel({ children, color = "core", className = "" }: SectionLabelProps) {
  return (
    <span className={`font-mono text-[0.85rem] uppercase tracking-[4px] font-semibold ${colorMap[color]} ${className}`}>
      {children}
    </span>
  );
}
```

## File 8: .windsurfrules

```
Project: DeltaX Website | thesx.co | 5 pages + 404
Stack: Next.js 14 App Router, TypeScript strict, Tailwind v3.4, Framer Motion (domMax), Days One + Inter

ARCHITECTURE:
- Home sections in src/components/home/
- About sections in src/components/about/
- Contact sections in src/components/contact/
- Shared (Navbar, Footer) in src/components/shared/
- UI primitives in src/components/ui/
- No section imports another section. Only ui/ and shared/.

CODE RULES:
- Named exports only. Never default exports (except page.tsx/layout.tsx).
- "use client" when using hooks, state, or Framer Motion.
- @/ path aliases for all imports.
- Import types from @/types.
- CSS @keyframes for infinite animations. Framer Motion for scroll-triggered.
- position: sticky for scroll sections. NEVER position: fixed.
- All data hardcoded inside components. No external data files.

COLORS (Tailwind tokens):
bg-primary #0A0C0B | bg-secondary #161C19 | bg-tertiary #1C2320 | bg-break #0D3535
core-bright #1A9BBF | code-bright #8A8A8A | scale-bright #D94040 | style-bright #6E75FF
deltax-bright #4466CC | gold #f0b429 | success #22C55E | error #EF4444
text-hero #FFFFFF | text-body #E8E8E8

FONTS:
font-display = Days One (headlines, section titles)
font-body = Inter (body, subtext, UI)
font-mono = system monospace (labels, tags — uppercase, letter-spacing: 4px)

TAGS: borderless text only. No border, no background box.
HIGHLIGHT BOXES: 3px left-border only. No full border.
DATA: table rows, NEVER card grids.

DO NOT:
- Use raw hex in className (use Tailwind tokens)
- Use any type in TypeScript
- Add console.log or TODO comments
- Create files outside your assigned task
- Use Framer Motion for infinite animations (use CSS @keyframes)
```

## File 9: .env.local.template

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://nbkbcntkqkmlpuwulmub.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<ask project owner>
SUPABASE_SERVICE_ROLE_KEY=<ask project owner>

# Resend
RESEND_API_KEY=<backend dev creates on resend.com>

# Site
NEXT_PUBLIC_SITE_URL=https://thesx.co
```

## Expected Output

This prompt produces exactly these files:

| # | File | Location |
|---|------|----------|
| 1 | tailwind.config.ts | `Codebase/tailwind.config.ts` |
| 2 | globals.css | `Codebase/src/app/globals.css` |
| 3 | layout.tsx | `Codebase/src/app/layout.tsx` |
| 4 | index.ts | `Codebase/src/types/index.ts` |
| 5 | DeltaXLogo.tsx | `Codebase/src/components/ui/DeltaXLogo.tsx` |
| 6 | ScrollReveal.tsx | `Codebase/src/components/ui/ScrollReveal.tsx` |
| 7 | SectionLabel.tsx | `Codebase/src/components/ui/SectionLabel.tsx` |
| 8 | .windsurfrules | `Codebase/.windsurfrules` |
| 9 | .env.local.template | `Codebase/.env.local.template` |

Before generating files, run:
```bash
npx create-next-app@14 . --typescript --tailwind --app --src-dir --no-git
npm install framer-motion @supabase/supabase-js resend
```

After generating all files, run `npm run dev` and verify the app starts with no errors at localhost:3000.

## Visual Reference

After this prompt, the app should show a blank dark page (#0A0C0B background) with no content. The browser tab should say "DeltaX — One System. Four Engines. Total Transformation." The fonts should be loaded (Days One + Inter). No visual components yet — those come in Phase 1 and 2.
