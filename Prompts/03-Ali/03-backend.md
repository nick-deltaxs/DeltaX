# Full Backend — Supabase + Resend + API Routes

## Metadata
- **Phase:** 3
- **Branch:** `backend/api`
- **Output File(s):** `src/lib/supabase.ts`, `src/lib/resend.ts`, `src/app/api/waitlist/route.ts`, `src/app/api/contact/route.ts`
- **Depends On:** Phase 0 (Foundation — env vars configured)
- **Estimated Complexity:** Medium

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

This prompt creates the entire backend for the DeltaX website: two client libraries (Supabase and Resend) and two API routes (waitlist signup and contact form submission). These are all server-side files — none use "use client". The waitlist route handles email signup with duplicate checking and sends a welcome email. The contact route handles form submissions with honeypot spam protection, simple in-memory rate limiting, validation, and notification emails.

Supabase project URL: `https://nbkbcntkqkmlpuwulmub.supabase.co`

## Requirements

### File 1: `src/lib/supabase.ts`

1. Import `createClient` from `@supabase/supabase-js`
2. Read `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` from `process.env`
3. Throw an error if either is missing (check at module scope)
4. Export a named `supabase` client created with `createClient(url, key)`
5. ~10-15 lines

### File 2: `src/lib/resend.ts`

1. Import `Resend` from `"resend"`
2. Read `RESEND_API_KEY` from `process.env`
3. Throw an error if missing
4. Export a named `resend` instance: `new Resend(apiKey)`
5. ~8-12 lines

### File 3: `src/app/api/waitlist/route.ts` (POST handler)

1. Export an async `POST` function (Next.js Route Handler convention)
2. Parse request body as JSON: `{ email: string }`
3. Validate email:
   - Trim and lowercase
   - Max 254 characters
   - Regex validation: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
   - If invalid, return `NextResponse.json({ error: "Please enter a valid email." }, { status: 400 })`
4. Check Supabase `waitlist` table for existing email:
   - `supabase.from("waitlist").select("email").eq("email", email).single()`
   - If found, return `NextResponse.json({ error: "Email already exists." }, { status: 409 })`
5. Insert into Supabase:
   - `supabase.from("waitlist").insert({ email, created_at: new Date().toISOString() })`
   - If insert error, return `NextResponse.json({ error: "Something went wrong." }, { status: 500 })`
6. Send welcome email via Resend:
   - `from`: `"DeltaX <hello@thesx.co>"`
   - `to`: the submitted email
   - `subject`: `"You're on the list. ΔX is coming."`
   - `text` body (plain text, exact copy below)
   - Do NOT fail the entire request if email sending fails — wrap in try/catch and continue
7. Return `NextResponse.json({ message: "Success" }, { status: 201 })`
8. Wrap entire handler in try/catch — return 500 on unexpected errors
9. ~50-70 lines

### File 4: `src/app/api/contact/route.ts` (POST handler)

1. Export an async `POST` function
2. Parse request body as JSON: `{ name: string, email: string, company?: string, challenge: string, website?: string }`
3. **Honeypot check:** If `website` field is non-empty (truthy after trim), return `NextResponse.json({ message: "Success" }, { status: 200 })` silently — do not process
4. **Rate limiting:** Simple in-memory `Map<string, number[]>` at module scope
   - Key: IP address from `request.headers.get("x-forwarded-for")` or `"unknown"`
   - Value: array of timestamps
   - On each request: filter out timestamps older than 1 hour, then check if count >= 3
   - If rate limited: return `NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })`
   - Otherwise: push current timestamp to array
5. **Validate fields (inline checks, no zod):**
   - `name`: required, trim, max 100 chars
   - `email`: required, trim, lowercase, max 254 chars, same regex as waitlist
   - `company`: optional, trim, max 100 chars
   - `challenge`: required, trim, max 500 chars
   - If any validation fails: return `NextResponse.json({ error: "Invalid input." }, { status: 400 })`
6. **Insert into Supabase:**
   - `supabase.from("contacts").insert({ name, email, company: company || null, challenge, created_at: new Date().toISOString() })`
   - If error: return 500
7. **Send notification email via Resend:**
   - `from`: `"DeltaX <notifications@thesx.co>"`
   - `to`: `"contact@thesx.co"`
   - `subject`: `"New contact: {name}"` (interpolate the name)
   - `text` body: include all fields (name, email, company or "N/A", challenge)
   - Do NOT fail the request if email fails — wrap in try/catch
8. Return `NextResponse.json({ message: "Success" }, { status: 201 })`
9. Wrap entire handler in try/catch — return 500 on unexpected errors
10. ~80-100 lines

## Copy (Exact Text)

**Waitlist welcome email body (plain text):**
```
You've secured your spot.

DeltaX is building something different — a system that connects strategy, tech, growth, and brand into one engine for your business.

We're onboarding in waves. When it's your turn, you'll be the first to know.

— The ΔX Team
thesx.co
```

**Contact notification email body template (plain text):**
```
New contact form submission:

Name: {name}
Email: {email}
Company: {company or "N/A"}
Challenge: {challenge}
```

## Imports

**supabase.ts:**
```tsx
import { createClient } from "@supabase/supabase-js";
```

**resend.ts:**
```tsx
import { Resend } from "resend";
```

**waitlist/route.ts:**
```tsx
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";
```

**contact/route.ts:**
```tsx
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";
```

## Expected Output

This prompt produces exactly **4 files:**

| # | File | Location |
|---|------|----------|
| 1 | supabase.ts | `src/lib/supabase.ts` |
| 2 | resend.ts | `src/lib/resend.ts` |
| 3 | route.ts | `src/app/api/waitlist/route.ts` |
| 4 | route.ts | `src/app/api/contact/route.ts` |

- No `"use client"` directive on ANY of these files (all server-only)
- No default exports — use named `POST` export for route handlers (Next.js convention)
- Total lines: ~200-250 across all 4 files
- No additional files created
- No files modified

**ONLY rules:**
- ONLY use the libraries imported above (@supabase/supabase-js, resend, next/server)
- ONLY create the 4 files specified
- ONLY use environment variables listed (NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY)
- ONLY use inline validation — no zod, no joi, no external validation library
- ONLY send plain text emails — no HTML email templates

**Test:**
1. POST to `/api/waitlist` with `{ "email": "test@example.com" }` — should return 201 and insert into Supabase
2. POST again with same email — should return 409
3. POST with invalid email — should return 400
4. POST to `/api/contact` with `{ "name": "Test", "email": "test@example.com", "challenge": "Need help" }` — should return 201
5. POST to `/api/contact` with `{ "website": "spam" }` — should return 200 silently (honeypot)
6. POST to `/api/contact` 4 times rapidly — 4th should return 429
