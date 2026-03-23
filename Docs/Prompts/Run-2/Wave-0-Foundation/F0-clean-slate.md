━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-001
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-001
  Name:      F0-clean-slate
  Title:     F0 — Clean Slate (MUST DO FIRST)
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 0
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  Arvin
  File:      ALL page files + old component cleanup
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-001.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything:
```
git pull origin main

cd Codebase
npm install
```

---

THIS RUNS BEFORE EVERYTHING ELSE. The current codebase is broken — old page files import deleted components (TheEngine, WaitlistForm, TeamGrid, Card). Nothing will build until we fix this. Every person on the team will be stuck if this isn't done first.

**INTENT:** We're resetting every page file to a blank state so `npm run build` passes. The old components are getting completely rewritten by the team — but until those rewrites happen, the pages need to be empty shells. Think of it as clearing the construction site before the new building starts.

---

## Step 1: Blank out all pages

**src/app/page.tsx** — replace entire file with:
```tsx
export default function HomePage() {
  return <div className="min-h-screen" />;
}
```

**src/app/about/page.tsx** — replace entire file with:
```tsx
export default function AboutPage() {
  return <div className="min-h-screen" />;
}
```

**src/app/contact/page.tsx** — replace entire file with:
```tsx
export default function ContactPage() {
  return <div className="min-h-screen" />;
}
```

**src/app/privacy/page.tsx** — replace with:
```tsx
export default function PrivacyPage() {
  return <div className="min-h-screen" />;
}
```

**src/app/terms/page.tsx** — replace with:
```tsx
export default function TermsPage() {
  return <div className="min-h-screen" />;
}
```

**src/app/not-found.tsx** — replace with:
```tsx
export default function NotFound() {
  return <div className="min-h-screen flex items-center justify-center text-text-muted">Page not found</div>;
}
```

## Step 2: Blank out broken home components

These files still exist but import deleted components. Blank them so they don't break the build. The team will rewrite them in Wave 1:

For EACH file in src/components/home/ (Hero.tsx, TheProblem.tsx, TheSystem.tsx, TheProof.tsx, TheArchitects.tsx, YourPath.tsx, FinalCTA.tsx), replace with:
```tsx
export function ComponentName() {
  return <section className="py-32"><div className="max-w-[1200px] mx-auto px-6 text-text-muted">[ComponentName — Wave 1]</div></section>;
}
```
Replace ComponentName with the actual export name (Hero, TheProblem, etc.).

## Step 3: Blank out broken about/contact components

**src/components/about/AboutHero.tsx, Story.tsx, AboutCTA.tsx** — same blank shell pattern
**src/components/contact/ContactHero.tsx, ContactForm.tsx** — same blank shell pattern

## Step 4: Create a dev test page

Create **src/app/dev/page.tsx** — a page where devs can temporarily test their component:
```tsx
export default function DevPage() {
  return (
    <div className="min-h-screen bg-primary text-text-body p-8">
      <h1 className="font-display text-2xl text-text-hero mb-4">Dev Testing Page</h1>
      <p className="text-text-secondary mb-8">Import your component below to test it visually.</p>
      {/*
        Dev: uncomment and add your component here to test:
        import { Hero } from "@/components/home/Hero";
        Then add <Hero /> below
      */}
      <div className="border border-elevated rounded-lg p-4 text-text-muted">
        Add your component import above and render it here
      </div>
    </div>
  );
}
```

## Step 5: Verify

```bash
npm run build
```

This MUST pass with 0 errors. If it doesn't, check which file still imports a deleted component and blank it.

Then:
```bash
npm run dev
```

Open localhost:3000 — you should see Navbar (once F2 is done), an empty page, and Footer (once F3 is done). localhost:3000/dev shows the dev testing page.

---

**After this is done:** the build passes, every dev can work, and the clean slate is ready for Wave 1. This is prompt F0 — do it BEFORE F1, F2, F3, F4.

**Modify:** all page files + all component files listed above. This is the ONLY prompt that touches multiple directories — it's the cleanup pass.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "F0-clean-slate: built by Arvin"
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
