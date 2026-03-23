━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-002
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-002
  Name:      F1-ui-primitives
  Title:     F1 — UI Primitives
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 0
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  Arvin
  File:      All files in src/components/ui/
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-002.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git pull origin main


---

You're rebuilding all the UI primitive components for the DeltaX website. These are the building blocks that every other component imports — so they need to be perfect. If these are wrong, everything built on top breaks.

**INTENT:** Think of these like a design system kit. Every button, every input, every section wrapper follows the same rules. Premium, minimal, pill-shaped buttons. Proper accessible labels on every form field. No card components (we killed those — Dave rejected card grids 4 times).

Read these files first — they contain the types and tokens you must use:
- `src/types/index.ts` (every prop interface)
- `tailwind.config.ts` (color tokens)
- `src/app/globals.css` (CSS variables, keyframes, atmosphere classes)

---

## File 1: src/components/ui/Button.tsx

This is a pill button with 3 variants (gold primary, ghost secondary, text-only ghost) and 3 sizes. The gold color is ONLY for CTAs — single-accent discipline from Mercury's pattern.

```tsx
"use client";

import type { ButtonProps } from "@/types";

const sizeMap = {
  large: "h-[52px] px-8 text-[16px]",
  medium: "h-[44px] px-6 text-[15px]",
  small: "h-[36px] px-5 text-[14px]",
};

const variantMap = {
  primary:
    "bg-accent-gold text-primary hover:bg-accent-gold-hover font-body font-medium rounded-full transition-all duration-150",
  secondary:
    "bg-transparent border border-text-muted text-text-body hover:border-text-body font-body font-medium rounded-full transition-all duration-150",
  ghost:
    "bg-transparent text-text-secondary hover:text-text-body font-body font-medium transition-all duration-150",
};

export function Button({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = "primary",
  size = "medium",
  className = "",
  type = "button",
  href,
}: ButtonProps) {
  const classes = `${variantMap[variant]} ${sizeMap[size]} inline-flex items-center justify-center gap-2 ${
    disabled || loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  } ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
      className={classes}
    >
      {loading ? (
        <span className="spinner w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
      ) : null}
      {children}
    </button>
  );
}
```

## File 2: src/components/ui/Input.tsx

The #1 bug from Run 1 was that Input had no label prop — the build broke because ContactForm passed `label` and it didn't exist. This time, every input MUST have a visible label element linked via htmlFor.

```tsx
"use client";

import { useId } from "react";
import type { InputProps } from "@/types";

export function Input({
  label,
  placeholder,
  value,
  onChange,
  error = false,
  errorMessage,
  className = "",
  type = "text",
  id,
  name,
  required = false,
  maxLength,
}: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className={className}>
      <label
        htmlFor={inputId}
        className="block font-body text-sm font-medium text-text-secondary mb-2"
      >
        {label}
        {required && <span className="text-error ml-1">*</span>}
      </label>
      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        aria-invalid={error}
        aria-describedby={error && errorMessage ? `${inputId}-error` : undefined}
        className={`w-full h-[44px] px-4 bg-tertiary border ${
          error ? "border-error" : "border-elevated focus:border-accent-gold"
        } rounded-lg text-text-body placeholder:text-text-muted font-body text-base outline-none transition-colors duration-150`}
      />
      {error && errorMessage && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-error font-body" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
```

## File 3: src/components/ui/ScrollReveal.tsx

Framer Motion wrapper for scroll-triggered reveals. Every section uses this for entrance animations. The easing `[0.16, 1, 0.3, 1]` is from Linear's pattern — smooth deceleration that feels premium, not bouncy.

```tsx
"use client";

import { motion } from "framer-motion";
import type { ScrollRevealProps } from "@/types";

const directionMap = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
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
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

## File 4: src/components/ui/SectionOverline.tsx

This replaces the old SectionLabel. Format: "[01] THE SYSTEM" — numbered sections create editorial progression (Attio pattern). JetBrains Mono, uppercase, muted gray, wide tracking.

```tsx
import type { SectionOverlineProps } from "@/types";

export function SectionOverline({ number, label, className = "" }: SectionOverlineProps) {
  return (
    <span
      className={`font-mono text-xs uppercase tracking-[0.12em] text-text-muted font-medium ${className}`}
    >
      [{number}] {label}
    </span>
  );
}
```

## File 5: src/components/ui/SectionWrapper.tsx

Every section on the site uses this wrapper. It provides: dark background, grid texture (with soft radial mask — Dub pattern), edge vignette, and an optional pillar glow. The glow uses CSS custom properties defined in globals.css.

```tsx
import type { SectionWrapperProps } from "@/types";

const bgMap = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  deep: "bg-deep",
};

export function SectionWrapper({
  children,
  id,
  className = "",
  background = "primary",
  glow = "none",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-24 lg:py-32 ${bgMap[background]} ${className}`}
    >
      <div className="atmosphere-grid absolute inset-0 pointer-events-none" />
      <div className="atmosphere-vignette" />
      {glow !== "none" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `var(--glow-${glow})` }}
        />
      )}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
```

## File 6: src/components/ui/DeltaXLogo.tsx

The SVG delta mark. Simple, clean. Uses currentColor so the parent can control the color via text-* classes. aria-label for accessibility.

```tsx
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
      <path d="M187.5 60L330 280H45L187.5 60Z" fill="var(--bg-primary, #0A0A0B)" />
      <path d="M187.5 100L290 255H85L187.5 100Z" fill="currentColor" />
      <path d="M187.5 145L250 230H125L187.5 145Z" fill="var(--bg-primary, #0A0A0B)" />
    </svg>
  );
}
```

---

After building all 6 files, also delete `src/components/ui/SectionLabel.tsx` — it's replaced by SectionOverline.

Then run `npm run dev` and open localhost:3000. You should see a dark page with no errors in the console. Fonts should load (check Days One on any headline vs Inter on body text). No visual components yet — those come in Wave 1.

**Only modify files in src/components/ui/. Do NOT touch globals.css, types/index.ts, tailwind.config.ts, layout.tsx, or any file outside ui/.**

If any import path doesn't resolve or a type doesn't match what's in types/index.ts, tell me instead of guessing a fix.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "F1-ui-primitives: built by Arvin"
  git push origin main

  Then create a Pull Request on GitHub.
  Arvin will review and merge. DO NOT merge yourself.
  SIGN-OFF
  ─────────────────────────────────────────
  □ Built by:    ________________  (Arvin)
  □ Reviewed by: ________________  (Arvin)
  □ QA by:       ________________  (Nick)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  © DeltaX · CodeXs · "Every paste builds the future."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
