━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-028
  INTEGRATION PROMPT · RUN 2 · INTEGRATION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-028
  Name:      I1-HomePage
  Title:     I1 — Home Page Assembly
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Integration
  Model:     Claude Sonnet 4.6
  Mode:      Plan
  Assigned:  Arvin
  File:      src/app/page.tsx
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-028.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything:
```
git checkout main && git pull origin main
git checkout -b integration/arvin-i1-homepage
npm run build
```
Build MUST pass before you start integration. If it fails, fix the failing component FIRST.

---

This is where everything comes together. You're assembling the home page by importing all 7 sections in the correct order. It sounds simple, but Run 1's integration phase is where the 300vh sticky scroll broke, sections overlapped, and the "would actively harm the business" verdict came from.

**INTENT:** The home page is a STORY. Each section flows into the next: hero (confidence) → problem (pain) → system (solution) → proof (evidence) → architects (people) → path (how) → CTA (action). The order matters. The rhythm matters. bg-primary → bg-primary → bg-secondary → bg-primary → bg-secondary → bg-primary → bg-primary creates a depth alternation pattern.

---

## Exact code

```tsx
import { Hero } from "@/components/home/Hero";
import { TheProblem } from "@/components/home/TheProblem";
import { TheSystem } from "@/components/home/TheSystem";
import { TheProof } from "@/components/home/TheProof";
import { TheArchitects } from "@/components/home/TheArchitects";
import { YourPath } from "@/components/home/YourPath";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TheProblem />
      <TheSystem />
      <TheProof />
      <TheArchitects />
      <YourPath />
      <FinalCTA />
    </>
  );
}
```

No metadata override needed — layout.tsx handles the default title "DeltaX — Four engines. One system."

---

## After assembling — THE FULL CHECK

This is not a quick glance. Open localhost:3000 and check every single thing:

**Scroll test (desktop):**
- [ ] Hero fills viewport — logo, headline, two buttons
- [ ] Scroll to Problem — red/teal split visible, items stagger in
- [ ] Scroll to System — tabs work, click each one, content crossfades
- [ ] Scroll to Proof — stats count up, DEVYN in table
- [ ] Scroll to Architects — Dave + Ramtin equal, team dots visible
- [ ] Scroll to Your Path — timeline draws, 3 steps
- [ ] Scroll to Final CTA — pulsing logo, gold button
- [ ] No blank gaps between sections
- [ ] Background alternation visible (primary → primary → secondary → ...)
- [ ] Grid texture visible on every section

**Navigation test:**
- [ ] "Start a Project" in hero → /contact
- [ ] "See the System" in hero → smooth scroll to #system
- [ ] "Start a Project" in navbar → /contact
- [ ] "Start a Project" in final CTA → /contact
- [ ] Navbar Services dropdown → shows 4 pillars
- [ ] Footer links all work

**Mobile test (375px):**
- [ ] No horizontal overflow anywhere
- [ ] Everything stacks vertically
- [ ] Hero buttons stack
- [ ] Tabs scroll horizontally
- [ ] Hamburger menu works

**Form test:**
- [ ] /contact form submits (or shows proper error without keys)

If ANYTHING is wrong, fix the source component — don't hack page.tsx.

**Only modify:** src/app/page.tsx.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "I1-HomePage: built by Arvin"
  git push origin integration/arvin-i1-homepage

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
