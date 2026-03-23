━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-029
  INTEGRATION PROMPT · RUN 2 · INTEGRATION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-029
  Name:      I2-OtherPages
  Title:     I2 — About + Contact Page Assembly
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Integration
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  Arvin
  File:      src/app/about/page.tsx, src/app/contact/page.tsx
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-029.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git checkout main && git pull origin main
git checkout -b integration/arvin-i2-otherpages

---

You're assembling the About and Contact pages — importing sections and rendering them in order. Each page gets its own metadata for SEO. Simple but important.

**INTENT:** These are the secondary pages. About is where trust is earned (story + team). Contact is where conversion happens (form + "what happens next"). Both should feel like natural extensions of the home page — same atmosphere, same typography, same quality.

---

## File 1: src/app/about/page.tsx

```tsx
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { Story } from "@/components/about/Story";
import { TeamTable } from "@/components/about/TeamTable";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About",
  description: "The system behind the system. Meet the 16 specialists building DeltaX.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <TeamTable />
      <AboutCTA />
    </>
  );
}
```

## File 2: src/app/contact/page.tsx

```tsx
import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with DeltaX. One conversation. No commitments. Just clarity.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
```

---

**After assembling:**
- /about → Hero (4 corner glows), Story (editorial + pull quote), Team (table with dots), CTA
- /contact → Hero (email + location), Form (with "what happens next" timeline)
- Browser tab: "About | DeltaX" and "Contact | DeltaX"
- Navbar + Footer visible on both (from layout.tsx)

**Only modify:** the 2 page files. If any component import fails, tell me — it means that wave's prompt wasn't completed yet.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "I2-OtherPages: built by Arvin"
  git push origin integration/arvin-i2-otherpages

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
