# Connect Forms + Scroll — Verification Prompt

## Metadata
- **Phase:** 5
- **Branch:** `integration/connect`
- **Output File(s):** No new files — this is a QA/verification prompt
- **Depends On:** All previous phases (0-4, 5/01)
- **Estimated Complexity:** Low (verification only)

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

This is a verification and connection prompt. No new files are created. Instead, you must verify that all forms submit correctly, all navigation links work, and all scroll anchors resolve. If any connection is broken, fix it in the EXISTING file — do not create new files. This prompt ensures the full site works as an integrated system.

## Requirements

### 1. WaitlistForm Connection Verification

Verify that the `WaitlistForm` component (`src/components/ui/WaitlistForm.tsx`):

- POSTs to `/api/waitlist` with body `{ email: string }`
- Handles response status codes correctly:
  - 201 → shows success message "You're in. Watch your inbox." in `text-success`
  - 409 → shows "You're already on the list." in `text-text-muted`
  - 400 → shows "Please enter a valid email." in `text-error`
  - 500 → shows "Something went wrong. Try again." in `text-error`
- Uses `Content-Type: application/json` header
- Trims and lowercases email before sending
- Validates email client-side before submitting (regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
- Button shows loading spinner during request
- Form appears in 3 locations: Hero, TheEngine post-engine CTA, FinalCTA

**If any of the above is not implemented, fix the WaitlistForm component.**

### 2. ContactForm Connection Verification

Verify that the `ContactForm` component (`src/components/contact/ContactForm.tsx`):

- POSTs to `/api/contact` with body `{ name, email, company, challenge, website }`
- Includes the honeypot `website` field in the request body
- Handles response status codes:
  - 201 → fades form out, shows success message
  - 429 → shows rate limit error
  - Other → shows generic error
- Uses `Content-Type: application/json` header

**If any of the above is not implemented, fix the ContactForm component.**

### 3. Navbar Smooth Scroll Verification

Verify that the `Navbar` component (`src/components/shared/Navbar.tsx`):

- On the home page (`/`): clicking a Services dropdown item smooth-scrolls to the corresponding section anchor:
  - Core → `/#core`
  - Code → `/#code`
  - Scale → `/#scale`
  - Style → `/#style`
- On other pages (`/about`, `/contact`, etc.): clicking a Services dropdown item navigates to `/#core`, `/#code`, etc. (full navigation, not smooth scroll)
- "Join the Waitlist" button scrolls to `#cta` on the home page, or navigates to `/#cta` on other pages
- About link goes to `/about`
- Contact link goes to `/contact`

**Verify these section IDs exist on the home page:**
- `id="hero"` on Hero section
- `id="problem"` on TheProblem section
- `id="system"` on TheSystem section
- `id="engine"` on TheEngine section
- `id="core"` on EngineCore (or TheEngine must contain it)
- `id="code"` on EngineCode (or TheEngine must contain it)
- `id="scale"` on EngineScale (or TheEngine must contain it)
- `id="style"` on EngineStyle (or TheEngine must contain it)
- `id="proof"` on TheProof section
- `id="architects"` on TheArchitects section
- `id="path"` on YourPath section
- `id="cta"` on FinalCTA section

**If any ID is missing, add it to the corresponding component.**

### 4. About Page Anchor Verification

Verify that:
- `/about#team` scrolls to the TeamGrid section (which has `id="team"`)
- The link "Meet the full 16-person team" in TheArchitects points to `/about#team`

**If the anchor is missing, add `id="team"` to the TeamGrid section.**

### 5. Footer Link Verification

Verify that all Footer links point to valid routes:
- Services: Core (`/#core`), Code (`/#code`), Scale (`/#scale`), Style (`/#style`)
- Company: About (`/about`), Contact (`/contact`)
- Legal: Privacy Policy (`/privacy`), Terms of Service (`/terms`)

**If any link is incorrect, fix it in the Footer component.**

## Manual Test Cases

After all verifications are complete, run through these test cases manually:

```
TEST 1: Waitlist — Happy Path
1. Go to /
2. Enter valid email in Hero WaitlistForm
3. Click "Join the Waitlist"
4. Expect: loading spinner → success message

TEST 2: Waitlist — Duplicate
1. Submit same email again
2. Expect: "You're already on the list."

TEST 3: Waitlist — Invalid Email
1. Enter "notanemail" in the field
2. Click submit
3. Expect: client-side validation prevents submission

TEST 4: Contact — Happy Path
1. Go to /contact
2. Fill: Name, Email, Challenge (leave Company empty)
3. Click "Send Message"
4. Expect: form fades out → success message with 2 links

TEST 5: Contact — Rate Limit
1. Submit contact form 4 times rapidly
2. Expect: 4th returns "Too many requests"

TEST 6: Navbar — Smooth Scroll (Home)
1. Go to /
2. Open Services dropdown
3. Click "Core"
4. Expect: smooth scroll to #core section

TEST 7: Navbar — Cross-Page Navigation
1. Go to /about
2. Open Services dropdown
3. Click "Core"
4. Expect: navigate to /#core

TEST 8: Navbar — Join Waitlist
1. Go to /
2. Click "Join the Waitlist" in navbar
3. Expect: smooth scroll to #cta (FinalCTA section)

TEST 9: Footer — All Links
1. Click every footer link
2. Expect: each navigates to correct page/section

TEST 10: About — Team Anchor
1. Go to /
2. Click "Meet the full 16-person team" in TheArchitects
3. Expect: navigate to /about, scroll to #team section

TEST 11: 404 — Navigation
1. Go to /nonexistent
2. Click "→ Home"
3. Expect: navigate to /

TEST 12: Contact — Honeypot
1. Programmatically set the hidden "website" field to "spam"
2. Submit form
3. Expect: 200 response (silently accepted, not processed)
```

## Expected Output

This prompt produces **0 new files.**

It may modify existing files ONLY to fix broken connections:
- Add missing section `id` attributes
- Fix incorrect API endpoints
- Fix incorrect navigation hrefs
- Fix missing request headers

**ONLY rules:**
- ONLY modify existing files — do NOT create new files
- ONLY fix what is broken — do NOT add features or refactor
- ONLY address the specific verifications listed above

**Test:** After completing all verifications and fixes, all 12 manual test cases above should pass. The site should function as a fully connected system where every form submits to the correct API, every link navigates to the correct destination, and every anchor scrolls to the correct section.
