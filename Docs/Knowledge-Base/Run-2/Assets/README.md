# Run 2 — Assets & Content

This folder holds pre-prepared content and media that prompts reference.
Drop files here BEFORE the team builds. Prompts point at these locations.

---

## Folder Map

```
Assets/
├── logos/              ← Logo files for the website
│                         Already copied to Codebase/public/logos/
│                         Drop new/updated logos here first, then copy to public/
│
├── team-photos/        ← Team member photos (if/when available)
│                         Leo V2 uses text-only design (no photos needed for v1)
│                         When photos are ready, add here and update TheArchitects prompt
│
├── hero/               ← Hero section visual assets
│                         Leo V2 uses CSS-only atmosphere (no images for v1)
│                         If you want a background image later, drop it here
│
├── case-studies/       ← Client work samples, screenshots, testimonials
│                         Currently: DEVYN only (data in Codebase/src/data/caseStudies.ts)
│                         Add client logos, screenshots, or testimonial quotes here
│                         Then update the data file + TheProof prompt
│
├── legal/              ← Real legal text (Privacy Policy, Terms of Service)
│                         Currently: placeholder text in prompts
│                         When real legal text is ready, drop the .md files here
│                         Then update W3-LegalPages prompt with real content
│
└── content/            ← Any other content: blog posts, PDF exports, social images
                          Drop anything the website might need that isn't code
```

---

## What's Ready Now vs What's Placeholder

| Content | Status | Location |
|---|---|---|
| Logos (9 files) | ✅ Ready | Codebase/public/logos/ |
| Favicon | ✅ Ready | Codebase/public/favicon.svg |
| Team data (16 people) | ✅ Ready | Codebase/src/data/team.ts |
| Case study (DEVYN) | ✅ Ready | Codebase/src/data/caseStudies.ts |
| About page story | ✅ Draft | In W2-AboutHero prompt (Dave reviews) |
| Hero copy | ✅ Final | "Four engines. One system." |
| Legal text | ⏳ Placeholder | In W3-LegalPages prompt — needs real lawyer text |
| Team photos | ⏳ Not needed | Leo V2 = text-only (add later if wanted) |
| Client testimonials | ⏳ None yet | Add to case-studies/ when available |
| OG image | ✅ Auto-generated | /api/og route creates it |

---

## How to Add New Content

1. Drop the file in the right subfolder
2. Tell Dave (AI) or update the relevant prompt
3. If it's code data (like a new case study), update `Codebase/src/data/`
4. If it's a visual asset, also copy to `Codebase/public/`
