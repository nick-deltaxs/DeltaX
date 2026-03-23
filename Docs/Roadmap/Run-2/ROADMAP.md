# Run 2 — Build Roadmap

## Overview
- **Design:** Leo V2 (DeltaX-Website-Design-V2.md)
- **Team:** 8 builders + Arvin (lead) = 9 people
- **Prompts:** 32 branded prompts in Docs/Prompts/Run-2/
- **Timeline:** 2 days
- **Tool:** Windsurf IDE (Teams plan) with Kimi K2.5 / GPT-5.3-Codex / Sonnet 4.6

---

## Wave System

### Wave 0 — Foundation (Arvin, solo)
| Prompt | What | Model |
|---|---|---|
| F0 | Clean slate — blank all pages, fix build | Kimi K2.5 |
| F1 | UI primitives — Button, Input, ScrollReveal, etc. | Kimi K2.5 |
| F2 | Navbar — glassmorphic + mega-menu | GPT-5.3-Codex |
| F3 | Footer — 4-column, no social | Kimi K2.5 |
| F4 | Layout — wire Navbar + Footer | Kimi K2.5 |

Arvin pushes directly to main. Team pulls after F4.

### Wave 1 — Home Sections (8 parallel)
| Prompt | Assigned | What | Model |
|---|---|---|---|
| W1-Hero | Nazar | Hero section | GPT-5.3-Codex |
| W1-TheProblem | Marina | 55/45 split section | Kimi K2.5 |
| W1-TheProof | Arrom | Stats + case study table | Kimi K2.5 |
| W1-TheArchitects | Erfan | Founders + team | Kimi K2.5 |
| W1-YourPath | Nick | 3-step timeline | Kimi K2.5 |
| W1-FinalCTA | New Member | CTA section | Kimi K2.5 |
| W1-Textarea | Katareina | Textarea component | Kimi K2.5 |
| W1-Nick-SpotCheck | Nick | Foundation QA | Sonnet 4.6 |

Everyone creates branches. Arvin merges all PRs. Nick spot-checks.

### Wave 2 — Complex + Pages (8 parallel)
| Prompt | Assigned | What | Model |
|---|---|---|---|
| W2-TheSystem | Marina | Tab-based 4-pillar section | Sonnet 4.6 |
| W2-AboutHero | Katareina | About Hero + Story | Kimi K2.5 |
| W2-AboutTeam | New Member | Team table + CTA | Kimi K2.5 |
| W2-ContactPage | Nick | Contact Hero + Form | Kimi K2.5 |
| W2-Erfan-Favicon | Erfan | Favicon | Kimi K2.5 |
| W2-Nazar-SpotCheck | Nazar | Wave 1 visual check | Kimi K2.5 |
| W2-Arrom-SpotCheck | Arrom | Supabase tables | Browser |
| W2-Nick-SpotCheck | Nick | Wave 1 deep check | Sonnet 4.6 |

### Wave 3 — Backend + Remaining (6 parallel)
| Prompt | Assigned | What | Model |
|---|---|---|---|
| W3-WaitlistAPI | Arrom | Waitlist API (security) | GPT-5.3-Codex |
| W3-ContactAPI | Erfan | Contact API (security) | GPT-5.3-Codex |
| W3-SEO | Nazar | robots, sitemap, OG | Kimi K2.5 |
| W3-LegalPages | Katareina | Privacy, Terms, 404 | Kimi K2.5 |
| W3-SubabaseLib | Nick | Supabase client fix | Kimi K2.5 |
| W3-Middleware | New Member | CSP verify | Kimi K2.5 |

### Integration (Arvin, solo)
| Prompt | What | Model |
|---|---|---|
| I1 | Home page assembly | Sonnet 4.6 |
| I2 | About + Contact assembly | Kimi K2.5 |

### QA (Nick, solo)
| Prompt | What | Model |
|---|---|---|
| Q1 | Responsive (6 breakpoints) | Sonnet 4.6 |
| Q2 | Accessibility (WCAG 2.1 AA) | Sonnet 4.6 |
| Q3 | Security + Performance | GPT-5.3-Codex |

### Fix + Deploy
- Arvin + 2-3 devs fix Nick's findings
- Arvin deploys to Vercel
- thesx.co goes live

---

## Rules
1. Pull before every wave
2. Only modify your assigned file
3. Check browser after building
4. Arvin merges all PRs (nobody else merges)
5. Nick spot-checks after every wave
6. Don't modify Docs/, .windsurfrules, or config files
