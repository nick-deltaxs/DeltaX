# Legal Pages — Privacy Policy & Terms of Service

## Metadata
- **Phase:** 4
- **Branch:** `pages/legal`
- **Output File(s):** `src/app/privacy/page.tsx`, `src/app/terms/page.tsx`
- **Depends On:** Phase 0 (Foundation), Phase 1 (Navbar, Footer)
- **Estimated Complexity:** Low

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

The Privacy Policy and Terms of Service pages share the same layout pattern: Navbar at top, centered content column with proper semantic HTML headings, and Footer at bottom. Both pages contain real legal text (not placeholder), styled consistently with the DeltaX design system. These are static Server Components — no client-side JavaScript needed.

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
```

## Requirements

### File 1: `src/app/privacy/page.tsx`

1. Default export function (page convention)
2. Export metadata: `{ title: "Privacy Policy — DeltaX", description: "How DeltaX handles your data." }`
3. No "use client" — static Server Component
4. Layout: `Navbar` at top, content section, `Footer` at bottom
5. Content section: `bg-primary relative overflow-hidden min-h-screen`
6. Subtle navy atmosphere: absolute div with `radial-gradient(ellipse at center, rgba(68, 102, 204, 0.05) 0%, transparent 70%)`
7. Apply `atmosphere-grid` class
8. Content wrapper: `max-w-3xl mx-auto px-6 lg:px-8 py-24 lg:py-32 relative z-10`
9. Page title: `<h1>` — `font-display text-3xl lg:text-4xl text-text-hero mb-8`
10. Last updated line: `text-sm text-text-muted mb-12` — "Last updated: March 2026"
11. **6 sections** with real legal content (exact copy below):
    - Each section heading: `<h2>` — `font-display text-xl text-text-hero mt-12 mb-4`
    - Each paragraph: `<p>` — `font-body text-base text-text-body leading-relaxed mb-4`
    - Lists where applicable: `<ul>` — `font-body text-base text-text-body leading-relaxed mb-4 list-disc list-inside space-y-2`
12. ~100-130 lines

### File 2: `src/app/terms/page.tsx`

1. Default export function (page convention)
2. Export metadata: `{ title: "Terms of Service — DeltaX", description: "Terms governing use of DeltaX services." }`
3. No "use client" — static Server Component
4. Identical layout structure to privacy page
5. **6 sections** with real legal content (exact copy below)
6. ~100-120 lines

## Copy (Exact Text)

### Privacy Policy

**Title:** `Privacy Policy`

**Last updated:** `Last updated: March 2026`

**Section 1 — Information We Collect:**
```
heading: Information We Collect

We collect information you provide directly to us when you use our website. This includes:

- Email address when you join our waitlist
- Name, email, company name, and message content when you submit our contact form
- Usage data such as pages visited, time spent, and interaction patterns through standard analytics

We do not collect sensitive personal information such as financial data, health records, or government identifiers.
```

**Section 2 — How We Use Your Information:**
```
heading: How We Use Your Information

We use the information we collect to:

- Process your waitlist registration and send relevant updates about DeltaX
- Respond to your contact form submissions and inquiries
- Improve our website, services, and user experience
- Communicate important updates about our services
- Comply with legal obligations

We will never sell, rent, or share your personal information with third parties for their marketing purposes.
```

**Section 3 — Data Storage & Security:**
```
heading: Data Storage & Security

Your data is stored securely using Supabase, a SOC 2 Type II compliant database platform hosted on AWS infrastructure. We implement industry-standard security measures including encryption in transit (TLS 1.2+) and at rest to protect your personal information.

We retain your data only for as long as necessary to fulfill the purposes outlined in this policy. Waitlist data is retained until you request removal or until the waitlist program concludes.
```

**Section 4 — Third-Party Services:**
```
heading: Third-Party Services

We use the following third-party services to operate our website:

- Supabase — database and authentication (supabase.com)
- Resend — transactional email delivery (resend.com)
- Vercel — website hosting and deployment (vercel.com)

Each of these services has their own privacy policy governing their handling of data. We encourage you to review their policies.
```

**Section 5 — Your Rights:**
```
heading: Your Rights

You have the right to:

- Request access to the personal data we hold about you
- Request correction of inaccurate personal data
- Request deletion of your personal data
- Withdraw consent for data processing at any time
- Lodge a complaint with a supervisory authority

To exercise any of these rights, contact us at contact@thesx.co. We will respond to your request within 30 days.
```

**Section 6 — Contact:**
```
heading: Contact

If you have any questions about this Privacy Policy, please contact us at:

DeltaX
Email: contact@thesx.co
Location: Bali, Indonesia
```

### Terms of Service

**Title:** `Terms of Service`

**Last updated:** `Last updated: March 2026`

**Section 1 — Acceptance of Terms:**
```
heading: Acceptance of Terms

By accessing or using the DeltaX website (thesx.co), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website. We reserve the right to modify these terms at any time, and your continued use of the website constitutes acceptance of any changes.
```

**Section 2 — Description of Services:**
```
heading: Description of Services

DeltaX provides an integrated business growth system combining strategy, technology, growth, and brand services. Our website serves as an informational platform and waitlist registration system. The specific services, deliverables, and terms of any engagement will be defined in a separate service agreement between DeltaX and the client.
```

**Section 3 — Waitlist:**
```
heading: Waitlist

By joining our waitlist, you agree to receive email communications from DeltaX regarding service availability and updates. You may unsubscribe from these communications at any time by contacting us at contact@thesx.co. Joining the waitlist does not constitute a binding agreement for services and does not guarantee availability or pricing.
```

**Section 4 — Intellectual Property:**
```
heading: Intellectual Property

All content on this website — including but not limited to text, graphics, logos, icons, images, audio, video, software, and design elements — is the property of DeltaX and is protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our explicit written permission.
```

**Section 5 — Limitation of Liability:**
```
heading: Limitation of Liability

DeltaX provides this website and its content on an "as is" basis without warranties of any kind, either express or implied. To the fullest extent permitted by law, DeltaX shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the website or services. Our total liability for any claim arising from these terms shall not exceed the amount paid by you to DeltaX in the twelve months preceding the claim.
```

**Section 6 — Governing Law:**
```
heading: Governing Law

These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of Indonesia, without regard to conflict of law principles. Any disputes arising from these terms shall be resolved through good-faith negotiation, and if necessary, through arbitration in Bali, Indonesia, in accordance with applicable arbitration rules.
```

## Styles

**Page wrapper:**
- `<main className="bg-primary">`

**Content section:**
- `relative overflow-hidden min-h-screen`

**Atmosphere glow:**
- `absolute inset-0 pointer-events-none`
- `style={{ background: "radial-gradient(ellipse at center, rgba(68, 102, 204, 0.05) 0%, transparent 70%)" }}`

**Content wrapper:**
- `max-w-3xl mx-auto px-6 lg:px-8 py-24 lg:py-32 relative z-10`

**H1:**
- `font-display text-3xl lg:text-4xl text-text-hero mb-8`

**Last updated:**
- `text-sm text-text-muted mb-12`

**H2:**
- `font-display text-xl text-text-hero mt-12 mb-4`

**Paragraphs:**
- `font-body text-base text-text-body leading-relaxed mb-4`

**Lists:**
- `font-body text-base text-text-body leading-relaxed mb-4 list-disc list-inside space-y-2`

## Responsive Behavior

- **Base (mobile):** Full-width with `px-6` padding. `py-24` vertical spacing. All text readable at mobile widths.
- **lg (1024px+):** `px-8` horizontal padding. `py-32` vertical spacing. `max-w-3xl` keeps text at optimal reading width.

## Imports

**Both files:**
```tsx
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
```

## Expected Output

This prompt produces exactly **2 files:**

| # | File | Location |
|---|------|----------|
| 1 | page.tsx | `src/app/privacy/page.tsx` |
| 2 | page.tsx | `src/app/terms/page.tsx` |

- Default exports (page convention)
- No `"use client"` directive on either file
- Total lines: ~200-250 across both files
- No additional files created
- No files modified

**ONLY rules:**
- ONLY use Tailwind token classes
- ONLY use the 2 imported components (Navbar, Footer)
- ONLY create the 2 files specified
- ONLY use semantic HTML (h1, h2, p, ul, li)
- ONLY use real legal text — no "Lorem ipsum" or "[insert text]" placeholders

**Test:** Navigate to `/privacy` and `/terms`. Each page should display a properly formatted legal document with the page title, last updated date, and 6 clearly headed sections. Text should be readable on all screen sizes. Navbar and Footer should render correctly. The subtle navy atmosphere should be barely perceptible behind the content.
