# VISUAL AUDIT — thesx.co
Auditor: Claude Opus 4.6 (Browser)  
Date: March 23, 2026  
Method: Manual visual inspection, interaction testing, responsive testing  
Verdict: **REJECTED**

---

## FIRST IMPRESSION

**Gut reaction in 2 seconds:** Dark, moody, tries to feel premium — but lands closer to "developer side project with ambition." The headline typography is bold and custom, which is good. But the hero feels empty on the right side (logo is small and lonely), the sub-copy is barely visible, and the email form feels disconnected from the headline. First thought: "This could be good, but it's not there yet." It does NOT feel like a $50K/engagement company. It feels like a $5K template that someone is customizing.

The grey/low-contrast text on the headline at certain viewport sizes makes it look broken, not artistic.

---

## SEVERITY SUMMARY

| Severity | Count |
|----------|-------|
| CRITICAL | 8 |
| HIGH | 11 |
| MEDIUM | 14 |
| LOW | 9 |
| POLISH | 6 |

---

## TOP 10 WORST ISSUES

| # | Severity | Issue | Impact |
|---|----------|-------|--------|
| 1 | CRITICAL | **The Engine section (CORE/CODE/SCALE/STYLE) is entirely invisible** on scroll-through. 2,931px of blank space with opacity-0 panels. The most important section on the page is a void. | Visitors will think the site is broken and leave. |
| 2 | CRITICAL | **The Problem "AFTER" column never appears.** The crossfade animation doesn't work — only BEFORE is shown, then massive empty space. The entire value proposition contrast is missing. | The "before/after" narrative — the core sales mechanic — is broken. |
| 3 | CRITICAL | **Case studies in The Proof are invisible** (opacity: 0). "Here's what that looks like:" followed by pure emptiness. The 10x counter shows "0x" and never animates to 10. | Credibility section renders zero proof. Ironic. |
| 4 | CRITICAL | **Contact form has 3 fields with NO labels and NO placeholders** (name, email, company). Users literally cannot tell what to type where. | Contact form is unusable. Leads are lost. |
| 5 | CRITICAL | **Contact page social icons (X, LinkedIn, Instagram) all link to "#"** — completely broken. | Broken links on a professional contact page. Embarrassing. |
| 6 | CRITICAL | **Horizontal overflow on mobile (375px).** Headline text extends beyond viewport. Body scrolls horizontally. | Mobile experience is broken. Over 50% of traffic will see this. |
| 7 | CRITICAL | **Waitlist form returns "Something went wrong. Try again."** on valid email submission. The primary conversion action is broken. | Zero conversions possible. The entire funnel is dead. |
| 8 | HIGH | **~2,000px of dead empty space** between The Problem and The Proof sections (where The Engine should render). Users will scroll through a void and assume the page is broken. | Massive abandonment risk mid-scroll. |
| 9 | HIGH | **Services dropdown "CoreX" navigates to wrong section** — it scrolls to CODE (THE MACHINE) instead of CORE (THE AUDIT). Navigation to content mismatch. | Confusing UX, undermines trust. |
| 10 | HIGH | **Contact form textarea is white** while all other inputs are dark. Jarring visual inconsistency on the most important conversion page. | Feels unfinished. Breaks design language. |
---

## PAGE-BY-PAGE FINDINGS

### Homepage

#### Section: Navbar
- Visual Score: **6/10**
- Emotion: Functional but unremarkable. The teal CTA button is the only strong element.

| # | Severity | Issue | What I See | What It Should Be |
|---|----------|-------|-----------|-------------------|
| 1 | MEDIUM | Nav logo is tiny (40px) and has no text | Small triangle icon alone | Logo + "DeltaX" wordmark, or larger logo |
| 2 | LOW | No backdrop blur on scroll | Solid dark bg, content scrolls behind | Frosted glass effect like Linear/Vercel |
| 3 | MEDIUM | Services dropdown requires TWO clicks to open | First click scrolls page, second opens dropdown | Should open on first click or hover |
| 4 | LOW | No active state indicator on homepage nav | All links look the same on homepage | Underline or color change for current page |
| 5 | POLISH | Dropdown panel has no border-radius or shadow refinement | Flat dark box | Subtle shadow, rounded corners, backdrop-blur |

#### Section: Hero
- Visual Score: **5/10**
- Emotion: Bold headline tries to impress, but the execution is uneven. The triangle logo animation is a nice touch, but the right side of the hero feels empty.

| # | Severity | Issue | What I See | What It Should Be |
|---|----------|-------|-----------|-------------------|
| 1 | HIGH | Hero headline renders as dark grey/low-contrast at certain viewport sizes | Grey text on dark background, nearly invisible | Full white/bright text always visible |
| 2 | HIGH | Sub-copy and email form pushed below fold on many viewports | Content is hidden, requiring scroll | All hero content visible in first viewport |
| 3 | MEDIUM | DeltaX logo (triangle) is isolated on right with too much empty space | Small logo floating in empty dark area | Larger logo or remove gap with supporting visuals |
| 4 | MEDIUM | Email form + button horizontal alignment feels disconnected from headline | Form is 500px below headline with gap | Tighter vertical rhythm, form closer to sub-copy |
| 5 | LOW | "Be the first to get access" helper text has zero visual weight | Tiny grey text easily missed | Slightly larger or styled as a badge/tag |
| 6 | HIGH | Hero email/form overlaps navbar z-index when scrolled | Form and button render ON TOP of nav links | Fix z-index stacking: nav z-50, form z-10 |
| 7 | MEDIUM | No cursor-following glow detected on hero | Static dark background | Subtle radial gradient following mouse |

#### Section: The Problem
- Visual Score: **2/10**
- Emotion: Broken. Frustrating. You see "BEFORE" list and then... nothing.

| # | Severity | Issue | What I See | What It Should Be |
|---|----------|-------|-----------|-------------------|
| 1 | CRITICAL | AFTER column never renders/fades in | Only BEFORE visible, then void | Scroll-driven crossfade: BEFORE fades out, AFTER fades in |
| 2 | HIGH | Section is position:sticky h-screen but crossfade logic is broken | Static BEFORE content with massive gap after | Smooth scroll-pinned transition between states |
| 3 | MEDIUM | BEFORE text uses inconsistent opacity/font treatment | Mixed monospace + italic + regular weights | Unified typographic treatment |
| 4 | HIGH | ~400px of empty dead space after BEFORE content ends | Black void before next section | Content should fill or transition cleanly |
| 5 | LOW | Red left border on BEFORE is too thin and subtle | Barely visible 2px red line | Bolder accent or gradient line |

#### Section: The System (SVG Flow Diagram)
- Visual Score: **5/10**
- Emotion: The SVG diagram concept is good but execution is flat.

| # | Severity | Issue | What I See | What It Should Be |
|---|----------|-------|-----------|-------------------|
| 1 | MEDIUM | SVG paths do not animate on scroll | All paths visible immediately | Sequential draw-on-scroll animation |
| 2 | MEDIUM | Nodes appear all at once, no stagger | Static diagram | Nodes fade in sequentially |
| 3 | LOW | Central node has faint amber border, inconsistent with teal | Amber/orange accent | Consistent teal or intentional contrast |
| 4 | MEDIUM | Tagline has too much space above and below | Floating in void | Tighter spacing, closer to diagram |

#### Section: The Engine (4-Panel Crossfade)
- Visual Score: **1/10**
- Emotion: Catastrophic failure. The flagship section is a 2,931px void of nothingness.

| # | Severity | Issue | What I See | What It Should Be |
|---|----------|-------|-----------|-------------------|
| 1 | CRITICAL | All 4 engine panels are opacity:0 during scroll | Blank dark space for ~3000px | Scroll-driven crossfade between panels |
| 2 | CRITICAL | Background atmosphere crossfade not visible | Uniform dark background | Color-shifting ambient glow per engine |
| 3 | HIGH | Header renders but content below is invisible | Title visible, then void | Full engine content with panel transitions |
| 4 | HIGH | Mobile fallback (lg:hidden div) has display:none and height:0 | Nothing on mobile | Stacked panels for mobile |
| 5 | MEDIUM | Bottom CTA renders with no context | Floating CTA | Should appear AFTER seeing all 4 engines |
#### Section: The Proof
- Visual Score: **3/10**
- Emotion: The "10x" concept is strong. The counter showing "0x" is not.

| # | Severity | Issue | What I See | What It Should Be |
|---|----------|-------|-----------|-------------------|
| 1 | CRITICAL | 10x counter displays "0x" — never animates to 10 | Static "0x" in gold | Count-up animation: 0 → 10 on scroll enter |
| 2 | CRITICAL | All 3 case study rows are invisible (opacity: 0) | Empty space after "Here's what that looks like:" | Visible case studies with hover animations |
| 3 | HIGH | Disclaimer text floats in empty space | "Based on methodology..." alone | Should be below visible case studies |
| 4 | MEDIUM | Gold/amber "0x" color doesn't match teal brand palette | Jarring gold number | Teal accent or justified contrast |

#### Section: The Architects
- Visual Score: **5/10**
- Emotion: Decent team display but feels incomplete on homepage.

| # | Severity | Issue | What I See | What It Should Be |
|---|----------|-------|-----------|-------------------|
| 1 | MEDIUM | Homepage shows truncated team with weird layout | DB, RG visible, VK offset | Clean 3-tier pyramid or grid |
| 2 | LOW | Circle avatars use plain initials — no photos | Colored circles with initials | Real photos or illustrated avatars |
| 3 | MEDIUM | Department tags have inconsistent sizing | Different badge sizes | Uniform badge treatment |
| 4 | HIGH | "Meet the full 16-person team" links to /about#team but anchor doesn't auto-scroll | Page loads at top of /about | Should smooth-scroll to #team section |

#### Section: Your Path
- Visual Score: **6/10**
- Emotion: Clean 3-step timeline. One of the better-looking sections.

| # | Severity | Issue | What I See | What It Should Be |
|---|----------|-------|-----------|-------------------|
| 1 | LOW | Step numbers (01, 02, 03) don't animate | Static numbers | Count/fade animation on scroll |
| 2 | MEDIUM | Background shifts to solid teal — feels disconnected | Different atmosphere | Dark theme with teal accents |
| 3 | POLISH | Timeline vertical line is too subtle | Barely visible grey line | Slightly brighter or animated |

#### Section: Final CTA
- Visual Score: **6/10**
- Emotion: Adequate. The headline is strong but the form is identical to the hero.

| # | Severity | Issue | What I See | What It Should Be |
|---|----------|-------|-----------|-------------------|
| 1 | MEDIUM | Email form identical to hero — no progression | Same form | Different framing, urgency, or social proof |
| 2 | LOW | Logo above headline is static | Small triangle | Animated or larger |
| 3 | LOW | Fade-in animation not observed | Instant render | Subtle opacity/translate animation on scroll |

#### Section: Footer
- Visual Score: **6/10**
- Emotion: Standard 4-column footer. Functional but not premium.

| # | Severity | Issue | What I See | What It Should Be |
|---|----------|-------|-----------|-------------------|
| 1 | MEDIUM | Social icons have no aria-labels | Empty links with SVGs | aria-label="Twitter", etc. |
| 2 | LOW | Footer services link to invisible sections | Broken scroll targets | Link to visible content |
| 3 | POLISH | No newsletter signup in footer | Just links and copyright | Email capture opportunity |
| 4 | POLISH | contact@thesx.co not styled as button | Plain text | Styled email link with hover effect |

---

### About Page (/about)
- Visual Score: **5/10**

| # | Severity | Issue | What I See | What It Should Be |
|---|----------|-------|-----------|-------------------|
| 1 | HIGH | Hero has massive dead space below headline | Title + subtitle, then void | Tighter spacing or visual element |
| 2 | MEDIUM | Founding story reads like a first draft | Plain grey paragraphs | Stronger narrative with visual breaks |
| 3 | LOW | No hero image or visual element | Text-only hero | Photo, illustration, or animation |
| 4 | HIGH | #team anchor doesn't scroll on direct nav | Page loads at top | Should auto-scroll to team section |
| 5 | MEDIUM | Team section title not premium | Basic heading | Styled consistent with homepage |

---

### Contact Page (/contact)
- Visual Score: **3/10**

| # | Severity | Issue | What I See | What It Should Be |
|---|----------|-------|-----------|-------------------|
| 1 | CRITICAL | Social icons in hero link to "#" — broken | Icons do nothing | Link to actual social profiles |
| 2 | CRITICAL | 3 form fields have NO labels and NO placeholders | Empty dark rectangles | Clear labels or placeholder text |
| 3 | HIGH | Textarea has white bg while other inputs are dark | Jarring white box | Dark bg matching other inputs |
| 4 | HIGH | No form validation — empty form submits with no errors | No feedback | Required field validation with errors |
| 5 | MEDIUM | Website field exists in DOM but not visible | Hidden field | Either show or remove |
| 6 | LOW | Character counter "0/500" feels like afterthought | Plain grey text | Styled counter that changes color |

---

### Privacy Policy (/privacy) — Visual Score: **6/10**
| # | Severity | Issue | What I See | What It Should Be |
|---|----------|-------|-----------|-------------------|
| 1 | LOW | No styled hero section | Raw heading + text | Minimal hero consistent with brand |
| 2 | POLISH | Bullet points use default browser styling | Basic circles | Custom teal bullets |

### Terms of Service (/terms) — Visual Score: **6/10**
| # | Severity | Issue | What I See | What It Should Be |
|---|----------|-------|-----------|-------------------|
| 1 | LOW | Same as privacy — no styled hero | Raw heading | Consistent treatment |
| 2 | POLISH | Custom font "A" creates slight visual oddity | Mixed glyph rendering | Consistent heading font |

### 404 Page — Visual Score: **7/10**
| # | Severity | Issue | What I See | What It Should Be |
|---|----------|-------|-----------|-------------------|
| 1 | LOW | "doesn't exist yet" implies it will | Awkward copy | "Page not found" |
| 2 | POLISH | No navigation header | Logo + links only | Include full navbar |
---

## INTERACTION TEST RESULTS

| # | Test | Result | Severity |
|---|------|--------|----------|
| 1 | Hover nav links | ✅ Underline appears on hover | OK |
| 2 | Click Services dropdown | ⚠️ Requires 2 clicks — first click scrolls page | MEDIUM |
| 3 | Services dropdown items | ✅ CoreX, CodeX, ScaleX, StyleX visible | OK |
| 4 | Click CoreX from dropdown | ❌ Scrolls to CODE section, not CORE | HIGH |
| 5 | Click JOIN WAITLIST nav button | ✅ Scrolls to #cta section | OK |
| 6 | Hero waitlist form submit | ❌ "Something went wrong. Try again." | CRITICAL |
| 7 | Case study hover animations | ❌ Case studies invisible (opacity:0) | CRITICAL |
| 8 | "Meet the full 16-person team" link | ⚠️ Links to /about#team, doesn't auto-scroll | HIGH |
| 9 | Footer links (About, Contact, etc.) | ✅ All navigate correctly | OK |
| 10 | Footer service links | ⚠️ Navigate to invisible engine sections | HIGH |
| 11 | Footer social icons | ✅ Open in new tab, correct URLs | OK |
| 12 | Contact page social icons | ❌ All link to "#" — broken | CRITICAL |
| 13 | Contact form empty submit | ❌ No validation errors | HIGH |
| 14 | Contact form textarea styling | ⚠️ White bg, inconsistent | HIGH |

---

## ANIMATION TEST RESULTS

| # | Animation | Expected | Actual | Severity |
|---|-----------|----------|--------|----------|
| 1 | Hero cursor-following glow | Radial gradient follows mouse | ❌ Not detected | MEDIUM |
| 2 | Hero logo rotation | Slow continuous rotation | ⚠️ May rotate slightly | LOW |
| 3 | Problem BEFORE→AFTER crossfade | Crossfade on scroll | ❌ AFTER never appears | CRITICAL |
| 4 | System SVG path drawing | Sequential draw on scroll | ❌ All visible immediately | MEDIUM |
| 5 | System node stagger | Nodes appear one by one | ❌ All at once | MEDIUM |
| 6 | Engine atmosphere crossfade | teal → grey → red → blue | ❌ Panels opacity:0 | CRITICAL |
| 7 | Engine panel transitions | 4 panels crossfade | ❌ All invisible | CRITICAL |
| 8 | Proof 10x counter | Counts 0 → 10 | ❌ Shows "0x" static | CRITICAL |
| 9 | Proof case study reveals | Rows animate in | ❌ opacity:0 | CRITICAL |
| 10 | Architects circle stagger | Stagger animation | ❌ All appear at once | MEDIUM |
| 11 | Path step number animation | Numbers animate | ❌ Static | LOW |
| 12 | Final CTA fade-in | Fades in on scroll | ❌ Not observed | LOW |

---

## RESPONSIVE TEST RESULTS

| # | Test | Breakpoint | Result | Severity |
|---|------|-----------|--------|----------|
| 1 | Hamburger menu appears | 375px | ✅ Visible | OK |
| 2 | Mobile menu opens/closes | 375px | ✅ Works | OK |
| 3 | Headline text overflow | 375px | ❌ Truncated | CRITICAL |
| 4 | Horizontal scrolling | 375px | ❌ Body scrolls horizontally | CRITICAL |
| 5 | Content readability | 375px | ⚠️ Readable but cramped | MEDIUM |
| 6 | /contact mobile forms | 375px | ⚠️ Visible but unlabeled | HIGH |
| 7 | Tablet headline | 768px | ❌ Text overflows | HIGH |
| 8 | Tablet layout | 768px | ⚠️ Uses mobile hamburger | MEDIUM |
| 9 | Mobile Engine section | 375px | ❌ Fallback has display:none | CRITICAL |

---

## THE BRUTAL TRUTH

### 1. Would you trust this company with $50,000 based on this website?
**No.** Not even close. A site that promises "Total Transformation" but can't display its own Engine section, can't make its own waitlist form work, and has invisible case studies is disqualifying. If this is the quality of their public-facing work, what does their client work look like?

### 2. If this were a Stripe or Linear page, what would they fix first?
They would never ship this. But if forced to triage: **Fix the Engine section visibility first.** It's the entire product showcase. Then fix the waitlist form (the conversion action), then fix the BEFORE/AFTER crossfade (the sales narrative).

### 3. What's the single most embarrassing thing on this site?
**The Engine section — 3,000 pixels of absolutely nothing.** A user scrolls past the hero, past the problem, past the system diagram, and then encounters a screen-sized void of darkness. Then another. Then another. They'll close the tab before they ever see The Proof, The Architects, or the CTA.

### 4. Does the site tell a clear story from top to bottom?
**The story structure is actually excellent on paper:** Problem → System → Engine → Proof → Team → Path → CTA. That's a strong narrative arc. But the execution destroys it. The AFTER never shows, the Engine is invisible, and the Proof has no proof. It's a beautiful screenplay with the middle 40 pages missing.

### 5. Is there any section you'd delete entirely?
No — every section has a purpose. But the execution of The Problem, The Engine, and The Proof needs to be completely rebuilt.

### 6. Does it feel like 7 different developers built different parts? Or unified?
**It feels like 3 developers built it** — one who cares deeply about design tokens and typography (hero, footer, your path), one who attempted ambitious scroll animations and failed (engine, problem, proof), and one who rushed the contact page. The dark theme is consistent but the quality variance between sections is extreme.

### 7. If a competitor showed this to your prospect, would they laugh?
**Yes.** The moment they scroll past the hero and hit the void, they'd screenshot it and send it to the prospect: "This is who you're considering for a $50K engagement?" The invisible Engine section alone would kill the deal.

### 8. What 3 changes would have the biggest impact on perceived quality?

1. **Fix ALL scroll animations** — The Engine crossfade, The Problem BEFORE/AFTER, The Proof counter and case studies. These are the difference between "broken page" and "premium experience."

2. **Fix the waitlist form** — The #1 conversion action must work. Period. If the API isn't ready, show a success state anyway and queue the email.

3. **Fix the contact form** — Add labels/placeholders to all fields, fix the textarea styling, add validation. This is your second conversion path and it's unusable.

---

## COMPARISON TO PREMIUM SITES

| Section | DeltaX | Stripe | Linear | Vercel |
|---------|--------|--------|--------|--------|
| Hero | Bold headline, broken sub-fold | Animated gradients, clear value prop, visible CTA | Clean typography, instant clarity | Subtle animations, zero clutter |
| Problem/Solution | Invisible AFTER state | Interactive demos | Animated comparisons | Before/after code examples |
| Product Showcase | 3000px void | Interactive product tours | Smooth scroll reveals | Live code previews |
| Social Proof | Invisible case studies | Named logos, real numbers | Customer testimonials | Deployment counter |
| Team | Colored circles | Not shown (enterprise focus) | Small team section | Not shown |
| CTA | Broken form | Working signup, clear next step | Clear onboarding path | Deploy button works |

---

## FINAL VERDICT

### Status: REJECTED

This site has the bones of something good. The narrative structure, the brand concept (four engines, one system), the typography choices, and the dark premium aesthetic all show ambition and taste. The copy is strong in places.

But it is **not ready for public release** as the digital front door of a $50K+ engagement company. The flagship section (The Engine) is invisible. The primary conversion action (waitlist form) is broken. The proof section has no visible proof. The contact form is unlabeled and broken. Mobile has horizontal overflow.

**This site, in its current state, would actively harm the business.** A prospect visiting this page would conclude that DeltaX cannot ship quality work — which is the exact opposite of the message the site is trying to send.

### Before launch, these must be resolved:
1. All scroll-driven animations must work (Engine, Problem, Proof)
2. Waitlist form must successfully submit
3. Contact form must have labels, validation, and consistent styling
4. Contact page social links must point to real URLs
5. Mobile horizontal overflow must be eliminated
6. Case studies must be visible
7. 10x counter must animate

### Time estimate to fix: 2-3 focused developer days for critical issues, 1 additional week for polish.