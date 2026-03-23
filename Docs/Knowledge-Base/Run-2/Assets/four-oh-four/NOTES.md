# 404 Page Component Reference

## Found Components
1. Error 404 Page — SVG wave background, centered text, "Return Home" CTA
2. 404 Page with Logo — centered logo + headline + description
3. 404 Page Error — animated circle with 404, dual CTAs, theme toggle

## Adaptation for DeltaX
None of these match our dark atmospheric design. BUILD CUSTOM:
- Background: #0A0A0B with red glow (--glow-scale at 0.08)
- deltax-white.png logo at 120px, opacity 0.4, subtle pulse
- Headline: "Lost in the system." — Days One, 48px
- Subtext: "This page doesn't exist. But we do." — Inter 400, 18px, #999999
- CTA: "Back to Home" — gold pill, medium
- Use InView component for entrance animation
- 100vh centered layout
