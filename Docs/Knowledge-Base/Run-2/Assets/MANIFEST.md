# Assets Manifest — DeltaX Website V2

Generated: 2026-03-24
Pipeline: Leo Studio + 21st Magic MCP + Higgsfield API

---

## IMAGES (10 generated via Higgsfield)

All images saved to BOTH locations:
- Assets: `Docs/Knowledge-Base/Run-2/Assets/images/[subfolder]/`
- Web: `Codebase/public/images/`

| # | File | Size | Section | CSS Usage | Model | Quality |
|---|------|------|---------|-----------|-------|---------|
| 1 | hero-atmosphere.png | 1027KB | Home > Hero | `background-image: url('/images/hero-atmosphere.png'); background-size: cover; background-position: center top;` | Seedream v4 | EXCELLENT — teal light from top on pure black |
| 2 | system-core.png | 605KB | Home > System (CoreXs tab) | `background-image: url('/images/system-core.png'); background-size: contain; background-position: center;` | Soul 2.0 | EXCELLENT — teal geometric lines/circles |
| 3 | system-code.png | 856KB | Home > System (CodeXs tab) | Same pattern as system-core | Soul 2.0 | GOOD — gray circuit patterns |
| 4 | system-scale.png | 1254KB | Home > System (ScaleXs tab) | Same pattern as system-core | Soul 2.0 | EXCELLENT — red 3D angular bars, upward energy |
| 5 | system-style.png | 542KB | Home > System (StyleXs tab) | Same pattern as system-core | Soul 2.0 | EXCELLENT — blue-violet fluid organic shape |
| 6 | proof-gold-dust.png | 804KB | Home > Proof | `background-image: url('/images/proof-gold-dust.png'); background-size: cover; opacity: 0.4;` | Seedream v4 | GOOD — gold dust on dark |
| 7 | about-atmosphere.png | 558KB | About > Hero | `background-image: url('/images/about-atmosphere.png'); background-size: cover;` | Seedream v4 | GOOD — four colored corner lights |
| 8 | 404-mood.png | 694KB | 404 Page | `background-image: url('/images/404-mood.png'); background-size: cover; background-position: center;` | Seedream v4 | STUNNING — red nebula fog on black |
| 9 | cta-atmosphere.png | 538KB | Home > FinalCTA | `background-image: url('/images/cta-atmosphere.png'); background-size: cover;` | Seedream v4 | GOOD — subtle navy on dark |
| 10 | og-social.png | 409KB | Social sharing | NOT USED — AI text is garbled. Keep `api/og/route.tsx` code-generated OG | Soul 2.0 | FAILED — text garbled |

### Image Quality Summary
- 4 EXCELLENT (hero, core, scale, style, 404)
- 4 GOOD (code, proof, about, cta)
- 1 FAILED (og-social — use code OG instead)
- Total disk: ~7.3MB

### Which Prompts Use Which Images

| Image | Used By Prompt |
|-------|----------------|
| hero-atmosphere.png | W1-Hero (Nazar) |
| system-core/code/scale/style.png | W1-System (Nazar) |
| proof-gold-dust.png | W1-Proof (Erfan) |
| about-atmosphere.png | W2-AboutHero (New Member) |
| 404-mood.png | W2-404 (New Member) |
| cta-atmosphere.png | W1-FinalCTA (New Member) |

---

## COMPONENTS (from 21st Magic MCP)

| Component | Source | File | Adaptation Needed |
|-----------|--------|------|-------------------|
| **CountAnimation** | 21st.dev | `components/stats/CountAnimation.tsx` | Change duration to 1.2s, add IntersectionObserver, use JetBrains Mono |
| **Timeline** | Aceternity (21st.dev) | `components/timeline/Timeline.tsx` | Change gradient to pillar colors, simplify to 3 steps, use Days One |
| **InView** | Motion Primitives (21st.dev) | `components/scroll-animations/InView.tsx` | Ready to use — add blur variant |
| **ScrollReveal** | 21st.dev | `components/scroll-animations/ScrollReveal.tsx` | Ready to use — directional reveal with blur |
| Navbar | 21st.dev Header 1 | `components/navbar/NOTES.md` | Add glassmorphism, mega-menu, gold CTA |
| Tabs | Custom needed | `components/tabs/NOTES.md` | Build with Radix Tabs + Framer Motion crossfade |
| Footer | 21st.dev Footer | `components/footer/NOTES.md` | Config-driven columns, shared social icons |
| Contact Form | Custom needed | `components/contact-form/NOTES.md` | 60/40 split, "What happens next" timeline |
| 404 Page | Custom needed | `components/four-oh-four/NOTES.md` | Dark atmospheric with red glow bg |

### Key Component Decisions
- **InView + ScrollReveal** are the two scroll animation components the team uses
- **CountAnimation** handles the stat counters with Framer Motion spring physics
- **Timeline** from Aceternity has scroll-driven line draw — PERFECT for YourPath section
- **Tabs, Footer, Contact Form** need custom builds but have reference NOTES.md files
- **NO Card component** — deliberately removed (Run 1 anti-pattern)

---

## CONTENT (written by Leo Council)

| File | Section | Status |
|------|---------|--------|
| `content/about-story.md` | About > Story | READY — 3 paragraphs + pull quote |
| `content/meta-descriptions.md` | All pages SEO | READY — 6 page descriptions |
| `content/case-studies.md` | Home > Proof | READY — DEVYN case study + template |

### Content NOT Yet Written (placeholder in code)
- Privacy policy text (legal — use standard template)
- Terms of service text (legal — use standard template)
- Team bios for Dave and Ramtin (need from Dave)

---

## ANIMATION PATTERNS

| Pattern | Component | Duration | Easing |
|---------|-----------|----------|--------|
| Scroll reveal (fade+blur+translate) | ScrollReveal | 500ms | easeOut |
| In-view trigger | InView | 300ms | easeInOut |
| Counter count-up | CountAnimation | 1200ms | spring |
| Timeline line-draw | Timeline | scroll-driven | useTransform |
| Logo pulse | Custom CSS | 4000ms | ease-in-out (infinite) |
| Tab crossfade | AnimatePresence | 300ms | ease |
| Nav glass transition | CSS transition | 300ms | ease |
| Button hover glow | CSS transition | 150ms | ease |

---

## LOGO STATUS

| Logo | File | Location | Status |
|------|------|----------|--------|
| DeltaX (white) | deltax-white.png | `public/logos/DeltaX/` | READY |
| DeltaX (black) | deltax-black.png | `public/logos/DeltaX/` | READY (not used on dark site) |
| CodeXs (light) | codexs-light.png | `public/logos/CodeXs/` | NEEDS HI-RES (202px too small) |
| CoreXS (teal) | corexs-teal.png | `public/logos/CoreXS/` | READY |
| ScaleXS (red) | scalexs-red.png | `public/logos/ScaleXS/` | NEEDS CROPPING |
| StyleXs | — | — | NO FILE — use CSS "SX" text monogram |

---

## TOTAL WARDROBE

```
Assets/
├── images/                    10 atmospheric images (7.3MB)
│   ├── hero/                  hero-atmosphere.png
│   ├── system/                4 pillar visuals
│   ├── proof/                 proof-gold-dust.png
│   ├── about/                 about-atmosphere.png
│   ├── four-oh-four/          404-mood.png
│   ├── cta/                   cta-atmosphere.png
│   └── og/                    og-social.png (NOT USED)
│
├── components/                9 component references
│   ├── stats/                 CountAnimation.tsx
│   ├── timeline/              Timeline.tsx (Aceternity)
│   ├── scroll-animations/     InView.tsx + ScrollReveal.tsx
│   ├── navbar/                NOTES.md
│   ├── tabs/                  NOTES.md
│   ├── footer/                NOTES.md
│   ├── contact-form/          NOTES.md
│   ├── four-oh-four/          NOTES.md
│   └── buttons/               (use design system pill buttons)
│
├── content/                   3 content files
│   ├── about-story.md
│   ├── meta-descriptions.md
│   └── case-studies.md
│
├── animations/                (patterns in MANIFEST.md)
├── logos/                     9 logo copies (reference)
├── generate_images.py         Image generation script
├── MANIFEST.md                THIS FILE
└── README.md                  Folder guide
```

Workers open their prompt → everything is in the closet → they dress and go.
