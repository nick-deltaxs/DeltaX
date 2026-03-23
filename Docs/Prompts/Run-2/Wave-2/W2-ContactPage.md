━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-017
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-017
  Name:      W2-ContactPage
  Title:     W2 — Contact Page: Hero + Form
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 2
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  Nick
  File:      src/components/contact/ContactHero.tsx, src/components/contact/ContactForm.tsx
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-017.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git checkout main && git pull origin main
git checkout -b wave2/nick-contactpage

---

You're building the Contact page — how people reach DeltaX. Two sections: a short hero and a form with a "What happens next" timeline on the right. The timeline reduces anxiety — it tells visitors exactly what happens after they hit submit.

**INTENT:** Plaid's generous form spacing — every input has room to breathe. Capital.com's trust-first funnel — the "What happens next" mini-timeline addresses the #1 conversion blocker for service companies: uncertainty. No social links (DeltaX has no accounts yet).

---

## File 1: src/components/contact/ContactHero.tsx

50vh height, centered, bg-primary.

**Headline:** `Let's talk.` — font-display, 56px, text-hero, text-center, tracking-[-0.03em]

**Info row:** flex flex-wrap justify-center gap-16, mt-8
- Email: envelope icon (inline SVG, 20px, text-muted) + `hello@thesx.co` (mailto link, text-body, hover:text-accent-gold)
- Location: globe icon (inline SVG, 20px, text-muted) + `Remote-first. Global.` (text-body)

No social links. Just email and location. Clean.

Animation: headline fade-up 600ms, info items stagger 100ms.
Mobile: info items stack vertically, left-aligned.

## File 2: src/components/contact/ContactForm.tsx

SectionWrapper background="secondary". py-24.

**Layout:** grid grid-cols-1 md:grid-cols-[60fr_40fr] gap-16

**Left (60%) — The form:**

Use Input and Textarea components from @/components/ui/:
- Input label="Name" name="name" required
- Input label="Email" name="email" type="email" required
- Input label="Company" name="company"
- Textarea label="What's your challenge?" name="challenge" rows={4} required

Gap between fields: 16px (space-y-4)

Hidden honeypot:
```tsx
<div aria-hidden="true" className="absolute opacity-0 h-0 overflow-hidden">
  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
</div>
```

Submit: Button variant="primary" size="medium" type="submit" className="w-full mt-4"
Text: "Send Message", loading={status === "loading"}

Success (aria-live="polite"): "Message sent. We'll be in touch within 24 hours." — text-success, text-sm, mt-3
Error (aria-live="polite"): "Something went wrong. Please try again or email hello@thesx.co." — text-error, text-sm, mt-3

Form submits POST to `/api/contact`. Use ContactFormState from @/types.

**Right (40%) — What happens next:**

Title: "What happens next." — font-display, 24px, text-hero, mb-8

Mini timeline (3 steps, vertical):
- ◉ "We read every message within 24 hours." (circle: 8px, bg-core-bright)
- ◉ "If there's a fit, we schedule a call." (circle: 8px, bg-code-bright)
- ◉ "CoreXs begins your audit." (circle: 8px, bg-accent-gold)

Line between circles: 1px bg-elevated, vertical.
Text: font-body, 14px, text-secondary, ml-6.
Gap between steps: 24px.

**Imports:**
```tsx
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import type { ContactFormState } from "@/types";
```

Animation: form fields stagger 80ms, timeline steps stagger 100ms delay 200ms.
Mobile: stack vertically. Form first, timeline below. CTA full-width.

---

**After building:** visit /contact. "Let's talk." hero. Form with proper labels. "What happens next" timeline on right. Submit button. Check form submits (or shows error if API not connected).

**Only modify:** src/components/contact/ContactHero.tsx, src/components/contact/ContactForm.tsx. If Input, Textarea, or Button imports fail, tell me.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "W2-ContactPage: built by Nick"
  git push origin wave2/nick-contactpage

  Then create a Pull Request on GitHub.
  Arvin will review and merge. DO NOT merge yourself.
  SIGN-OFF
  ─────────────────────────────────────────
  □ Built by:    ________________  (Nick)
  □ Reviewed by: ________________  (Arvin)
  □ QA by:       ________________  (Nick)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  © DeltaX · CodeXs · "Every paste builds the future."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
