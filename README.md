# DeltaX Website — thesx.co

Marketing website with waitlist for DeltaX. Built by 7 devs using prompt-driven development in Windsurf.

## Folder Structure

```
DeltaX-Landing/
├── Knowledge-Base/   # Design specs, copy, tokens, architecture
├── Prompts/          # Per-person prompt files (run in Windsurf)
├── Codebase/         # Next.js project (the actual website)
└── Roadmap/          # Build phases and progress tracking
```

## Team

| #  | Name    | Role                                      |
|----|---------|-------------------------------------------|
| 01 | Arvin   | Foundation + Integration                  |
| 02 | Erfan   | Hero, Final CTA, About, Legal, 404       |
| 03 | Ali     | The Problem (static + anim), Backend      |
| 04 | Nazar   | The System (static + anim), SEO           |
| 05 | Marina  | Engine CORE, Engine CODE, Your Path       |
| 06 | Katrine | Engine SCALE, Engine STYLE, Contact       |
| 07 | Nick    | The Proof, The Architects, QA             |

## How to Build

1. **Arvin runs foundation first** — project init, config, layout, UI primitives, shared components
2. **Everyone else runs their prompts in parallel** — each dev opens Windsurf, loads their prompt file from `Prompts/`, and executes
3. **Arvin integrates** — assembles all sections into pages, connects forms and scroll behavior
4. **Nick runs QA** — responsive, animation, accessibility, cross-page testing

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v3.4
- **Animation:** Framer Motion (domMax)
- **Fonts:** Days One + Inter
- **Database:** Supabase
- **Email:** Resend
- **Deploy:** Vercel

## Quick Setup (All Team Members)

### Option A — One-click (Windows)

Double-click **`setup.bat`** in the repo root. It installs everything and creates your `.env.local`.

### Option B — Terminal

```bash
git clone https://github.com/Arvin-DeltaX/DeltaX-Landing.git
cd DeltaX-Landing
npm run setup
```

Or manually:

```bash
cd Codebase
npm install
copy .env.local.template .env.local
```

Then fill in the API keys in `Codebase/.env.local`:
- **Supabase keys** — ask Arvin
- **Resend key** — ask Ali

### Start dev server

```bash
npm run dev
```

This works from **both** the repo root and the `Codebase/` folder.

Opens at `http://localhost:3000`.

### Troubleshooting

| Problem | Fix |
|---------|-----|
| `npm install` fails at root | Run `npm run setup` instead of `npm install` |
| Missing modules / can't find package.json | Make sure you're in `Codebase/` or use root scripts |
| `node` not recognized | Install Node.js LTS from https://nodejs.org |
| Permission errors | Run terminal as Administrator |
| Stale dependencies | Delete `Codebase/node_modules` and run `npm run setup` again |

## Pages

1. **Home** — Hero, Problem, System, Engine (CORE/CODE/SCALE/STYLE), Your Path, Proof, Architects, Final CTA
2. **About** — Team and company story
3. **Contact** — Contact form
4. **Legal** — Privacy Policy, Terms of Service
5. **404** — Custom not-found page

## Links

- **Live site:** https://thesx.co
- **Roadmap:** [Roadmap/ROADMAP.md](Roadmap/ROADMAP.md)
- **Progress:** [Roadmap/PROGRESS.md](Roadmap/PROGRESS.md)
