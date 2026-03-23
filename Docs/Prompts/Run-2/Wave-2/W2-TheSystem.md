━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-014
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-014
  Name:      W2-TheSystem
  Title:     W2 — The System (Tab-Based — Replaces 6 Old Files)
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 2
  Model:     Claude Sonnet 4.6 Thinking
  Mode:      Plan
  Assigned:  Marina
  File:      src/components/home/TheSystem.tsx · **Fallback:** GPT-5.3-Codex High
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-014.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git checkout main && git pull origin main
git checkout -b wave2/marina-thesystem
cd Codebase && npm install

---

This is the HARDEST component on the entire site. Take your time. Read everything twice before building.

You're creating a tab-based section that shows DeltaX's 4 engines (CoreXs, CodeXs, ScaleXs, StyleXs). In Run 1, this was split across 6 files — TheSystem.tsx (498 lines, SVG with magic numbers) + TheEngine.tsx (300vh sticky scroll, broken) + 4 engine pillar files. All of that is gone. Replaced by ONE component with tabs.

**INTENT:** Mercury (the banking app) has this pattern — accordion-paired-visual. You click a tab, the content crossfades, and a visual on the right changes color. It's the most sophisticated homepage pattern in the research — progressive disclosure + contextual demonstration. Attio uses numbered sections [01]-[04] for editorial progression. We combine both.

The old sticky scroll was the #1 broken feature in Run 1. It's gone. Tabs are simpler, more reliable, and work perfectly on mobile.

---

## What the user sees

```
[01] THE SYSTEM

One company. Four engines.

Each engine operates independently. Together, they
form a system no single agency can replicate.

┌──────────────────────────────────────────────────┐
│  [▲] CoreXs ·  [◉] CodeXs   [▼] ScaleXs  SX StyleXs │
│   ACTIVE        inactive      inactive     inactive    │
└──────────────────────────────────────────────────┘

┌──── 55% ─────────────────┐  ┌──── 45% ──────────┐
│                           │  │                    │
│  CoreXs — The Audit.      │  │   ╔═══════════╗   │
│                           │  │   ║  abstract  ║   │
│  Every project starts     │  │   ║  teal CSS  ║   │
│  with a systematic        │  │   ║  shapes    ║   │
│  diagnosis...             │  │   ╚═══════════╝   │
│                           │  │                    │
│  CAPABILITY    DETAIL     │  │                    │
│  ─────────────────────    │  │                    │
│  Business Audit  Revenue..│  │                    │
│  Market Analysis Compet...│  │                    │
│  System Design   Archit...│  │                    │
│                           │  │                    │
└───────────────────────────┘  └────────────────────┘

(pillar-colored glow behind content panel — changes on tab switch)
```

---

## Exact copy per tab

**CoreXs — The Audit.**
"Every project starts with a systematic diagnosis. We map your revenue streams, team structure, operations, and bottlenecks before writing a single line of code."
| Business Audit | Revenue, team, operations, bottleneck mapping |
| Market Analysis | Competitive positioning and opportunity gaps |
| System Design | Architecture before code, strategy before campaigns |

**CodeXs — The Machine.**
"Two development teams. One codebase. The best code wins. Nick controls quality while Team Razm and Team Bazm compete on every build."
| Team Razm | Frontend, backend, mobile — led by Arvin |
| Team Bazm | Same capabilities, parallel track — led by Ali |
| Quality Gate | Every commit reviewed. Every deploy verified. |

**ScaleXs — The Fuel.**
"Growth without a system is just spending. We build pipelines that compound — paid acquisition, content, analytics, all feeding the same machine."
| Paid Acquisition | Performance marketing with transparent ROAS |
| Content & Social | Brand presence that builds audience over time |
| Analytics | Decisions from data, not from gut feelings |

**StyleXs — The Signal.**
"Design is the first thing they see and the last thing they remember. We don't make it pretty — we make it impossible to ignore."
| Brand Identity | Logo, colors, typography, voice — the complete system |
| UI/UX Design | Interfaces built on research, not on trends |
| Design Systems | Scalable, documented, consistent everywhere |

---

## Technical specs

**Layout:** SectionWrapper background="secondary" glow="none" (custom active-pillar glow instead)

**Overline:** SectionOverline number="01" label="THE SYSTEM", mb-4

**Headline:** "One company. Four engines." — font-display, 48px, text-hero, tracking-[-0.02em], text-wrap: balance, mb-4

**Subtext:** "Each engine operates independently..." — font-body, 18px, text-secondary, max-w-[640px], mb-12

**Tab row:** flex gap-1, border-b border-elevated. 4 tabs, each: flex items-center gap-2, px-4 py-3, cursor-pointer, transition-all 300ms.
- Active: text in pillar-bright color, 2px bottom border in pillar-bright
- Inactive: text-muted, no border
- Tab icons: img from /logos/ at 28px for Core/Code/Scale. For StyleXs: "SX" text in font-display, 16px, text-style-bright

**Tab state:** `const [activeTab, setActiveTab] = useState(0);`

**Content panel:** mt-8, min-h-[400px]. grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12.

**Left (55%):**
- Title: font-display, 28px, text-[pillar-bright], mb-4
- Description: font-body, 16px, text-body, leading-[1.6], mb-8
- Capability table:
  - Header: font-mono, 12px, uppercase, text-muted, tracking-[0.08em]
  - Rows: grid grid-cols-[1fr_2fr], py-3, border-b border-elevated
  - Name: font-body, 14px, font-medium, text-hero
  - Detail: font-body, 14px, text-secondary

**Right (45%) — CSS art composition:**
```tsx
<div className="relative w-full aspect-square max-w-[300px] mx-auto bg-tertiary border border-elevated rounded-lg overflow-hidden">
  <div
    className="absolute top-6 right-6 w-24 h-24 rounded-lg transition-colors duration-300"
    style={{ backgroundColor: activeColor, opacity: 0.12 }}
  />
  <div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full transition-colors duration-300"
    style={{ backgroundColor: activeColor, opacity: 0.18 }}
  />
  <div
    className="absolute bottom-8 left-6 w-32 h-3 rounded-full transition-colors duration-300"
    style={{ backgroundColor: activeColor, opacity: 0.10 }}
  />
  <div
    className="absolute bottom-14 left-6 w-20 h-3 rounded-full transition-colors duration-300"
    style={{ backgroundColor: activeColor, opacity: 0.08 }}
  />
</div>
```
Where `activeColor` = CSS variable for the active pillar's bright color (e.g., `var(--core-bright)`).

**Active pillar glow:** Absolute div behind content panel. Radial gradient using active pillar's base color at 0.08 opacity. Crossfades 300ms on tab switch. Use inline style with the pillar's glowColor value.

**Tab switch animation:** Use AnimatePresence + motion.div with key={activeTab}. Old content: opacity 0 over 200ms. New content: opacity 0→1 + translateY(8px→0) over 300ms.

**Mobile:** Tabs become horizontally scrollable (overflow-x-auto, flex-nowrap, no wrapping). Content panel: grid stacks (1 column). CSS art hidden on mobile (hidden md:block). Everything else stays.

**Section id:** "system"

**Pillar data (hardcode in component):**
```tsx
const pillars = [
  {
    id: "core", name: "CoreXs", logo: "/logos/corexs-teal.png",
    title: "CoreXs — The Audit.",
    description: "Every project starts with a systematic diagnosis...",
    capabilities: [...],
    brightClass: "text-core-bright", borderClass: "border-core-bright",
    cssColor: "var(--core-bright)", glowColor: "rgba(0,99,129,0.08)",
  },
  // ... same for code, scale, style
];
```
For StyleXs: no logo image. Use `logoText: "SX"` rendered in font-display, 16px, text-style-bright.

---

**After building:** check:
- [ ] "[01] THE SYSTEM" overline
- [ ] 4 tabs with pillar logos/text
- [ ] Click each tab — content crossfades smoothly
- [ ] Glow behind panel changes color per tab
- [ ] CSS art shapes change color per tab
- [ ] Capability tables with rows (NOT cards)
- [ ] Mobile: tabs scroll horizontally, CSS art hidden

**Only modify:** src/components/home/TheSystem.tsx. Don't touch any other file.

If logo images don't load from /logos/, check that the files exist in public/logos/. If they don't, tell me.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "W2-TheSystem: built by Marina"
  git push origin wave2/marina-thesystem

  Then create a Pull Request on GitHub.
  Arvin will review and merge. DO NOT merge yourself.
  SIGN-OFF
  ─────────────────────────────────────────
  □ Built by:    ________________  (Marina)
  □ Reviewed by: ________________  (Arvin)
  □ QA by:       ________________  (Nick)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  © DeltaX · CodeXs · "Every paste builds the future."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
