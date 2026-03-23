# Run 2 — What Changed From Run 1

## Inheritance Map

| Topic | Run 1 Source | Run 2 Source | Status |
|---|---|---|---|
| **Design spec** | Knowledge-Base/Run-1/SPEC.md | **DESIGN-V2.md** | Replaced — Leo V2 is 10x more detailed |
| **Wireframes** | Knowledge-Base/Run-1/WIREFRAMES.md | **DESIGN-V2.md** (Section 3) | Replaced — new ASCII wireframes per section |
| **Blueprint** | Knowledge-Base/Run-1/BLUEPRINT.md | **DESIGN-V2.md** (Section 1) | Replaced — new design system |
| **Team rules** | Knowledge-Base/Run-1/RULES.md | **Prompts/Run-2/README.md** + **.windsurfrules** | Replaced — wave system, not phase system |
| **Env setup** | Knowledge-Base/Run-1/ENV-SETUP.md | **.env.local.template** + **README.md** | Replaced |
| **Colors** | SPEC.md (green-tinted bg) | **tailwind.config.ts** (neutral bg) | Changed — all backgrounds now neutral |
| **Fonts** | Days One + Inter | Days One + Inter + **JetBrains Mono** | Added mono for stats/data |
| **Sections** | 8 sections (Hero, Problem, System, Engine×4, Proof, Architects, Path, CTA) | **7 sections** (Engine merged into System tabs) | Simplified — 6 files became 1 |
| **Card grids** | Used in Engine, About | **Removed entirely** | Cards banned (Dave rejected 4 times) |
| **Scroll system** | 300vh sticky scroll | **Tab-based accordion** | Replaced — Mercury pattern |
| **CTA text** | "Join the Waitlist" / "Get Started" | **"Start a Project"** | Changed — DeltaX is open for business |
| **Social links** | Placeholder href="#" | **Removed** | No social accounts exist |
| **Security** | Service role key, no rate limiting | **Anon key only, Supabase rate limiting** | Fixed all 16 security issues |
| **Audit** | 348 issues | **Target: <20 issues** | 87% reduction expected |

## What Was Carried Forward (unchanged)

| Item | Notes |
|---|---|
| Supabase project | Same instance (nbkbcntkqkmlpuwulmub) |
| Resend integration | Same service for emails |
| Domain | thesx.co (not deployed yet) |
| GitHub repo | Arvin-DeltaX/DeltaX-Landing |
| Team roster | Same 16 people |
| Pillar colors | CoreXs teal, CodeXs grey, ScaleXs red, StyleXs blue — unchanged |
| Dave's title | Chief System Architect (never CEO) |
| Ramtin's 50/50 prominence | Equal treatment with Dave — enforced |

## What Run 1 Audit Taught Us (applied to Run 2)

| Run 1 Problem | Run 2 Prevention |
|---|---|
| Build broke (InputProps missing label) | Types defined FIRST, tested before team starts |
| Engine sections invisible | Replaced with reliable tab component |
| 503-line component with 3x duplication | Max 200 lines per component rule |
| Service role key exposed | Removed from codebase + .windsurfrules blocks it |
| No favicon | Created in prep (favicon.svg) |
| Social links to wrong URLs | Removed entirely |
| CSS opacities invisible (<0.05) | Minimum 0.06 enforced in design system |
| No security headers | middleware.ts + next.config.js |
