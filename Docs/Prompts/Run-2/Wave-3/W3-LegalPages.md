━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-025
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-025
  Name:      W3-LegalPages
  Title:     W3 — Legal Pages + 404
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 3
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  Katareina
  File:      src/app/privacy/page.tsx, src/app/terms/page.tsx, src/app/not-found.tsx
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-025.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git checkout main && git pull origin main
git checkout -b wave3/katareina-legalpages
cd Codebase && npm install

---

You're building three simple pages: Privacy Policy, Terms of Service, and a branded 404 page. Legal pages are clean and minimal — single column, max 720px width, no atmosphere effects. The 404 is the opposite — fully branded with a red glow, pulsing logo, and witty copy.

**INTENT:** Legal pages should be boring ON PURPOSE — no distractions from the legal text. Just clean typography on a dark page. Wealthsimple's legal pages — single column, generous line height, headings that help you scan. The 404 page is where personality shines. Ghostty's 404 — a branded error page shows attention to detail and makes people smile instead of bouncing.

---

## File 1: src/app/privacy/page.tsx

Metadata: title "Privacy Policy"

Layout: bg-primary, min-h-screen, pt-32 pb-16, max-w-[720px] mx-auto px-6

**Headline:** `Privacy Policy.` — font-display, 48px, text-hero, tracking-[-0.02em], mb-2

**Date:** `Last updated: March 2026` — font-body, text-sm, text-muted, mb-12

**Sections (each with heading + body):**
- "Information We Collect" — name, email, company from contact form. Basic analytics.
- "How We Use Your Information" — respond to inquiries, improve site, send relevant comms. Use 3px left-border list (border-core-bright/30).
- "Data Storage" — Supabase on AWS. Don't sell/share data.
- "Contact" — "Questions? Email hello@thesx.co" with gold mailto link.

Headings: font-body, text-2xl (24px), font-semibold, text-hero, mt-12 mb-4
Body: font-body, text-base, text-body, leading-[1.8]

Animation: headline fade-up only. Minimal.

## File 2: src/app/terms/page.tsx

Same layout as Privacy. Metadata: title "Terms of Service"

**Headline:** `Terms of Service.`

**Sections:** Acceptance, Services, Payment, Intellectual Property, Limitation of Liability, Contact

Placeholder legal text is fine — Dave will replace with real terms. Same styling as Privacy.

## File 3: src/app/not-found.tsx

Full branded 404 page.

```
[DeltaX logo, 120px, opacity 0.4, pulsing]

Lost in the system.

This page doesn't exist. But we do.

[ Back to Home ]
```

- bg-primary, min-h-screen, flex centered
- Red glow: `radial-gradient(ellipse at 50% 50%, rgba(154,21,21,0.08), transparent 60%)`
- Grid texture + vignette (atmosphere-grid + atmosphere-vignette classes)
- Logo: DeltaXLogo size={120} className="text-text-hero opacity-40 glow-breathe mb-8"
- Headline: `Lost in the system.` — font-display, 48px, text-hero
- Subtext: `This page doesn't exist. But we do.` — font-body, text-lg, text-secondary, mb-8
- CTA: Button variant="primary" size="medium" href="/"  text: "Back to Home"
- Mobile: logo 80px

Imports: DeltaXLogo, Button from @/components/ui/

---

**After building:**
- /privacy → clean legal page
- /terms → same layout, different content
- /random-url → branded 404 with red glow and "Lost in the system."

**Only modify:** the 3 files listed. Don't touch any other file. If Button or DeltaXLogo imports fail, tell me.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "W3-LegalPages: built by Katareina"
  git push origin wave3/katareina-legalpages

  Then create a Pull Request on GitHub.
  Arvin will review and merge. DO NOT merge yourself.
  SIGN-OFF
  ─────────────────────────────────────────
  □ Built by:    ________________  (Katareina)
  □ Reviewed by: ________________  (Arvin)
  □ QA by:       ________________  (Nick)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  © DeltaX · CodeXs · "Every paste builds the future."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
