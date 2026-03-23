# Scroll Animations — Notes

Notes about scroll reveal pattern from the Hero component found:
- Uses AnimatedGroup with spring physics: bounce 0.3, duration 1.5
- Blur transition: filter blur(12px) -> blur(0px) + y: 12 -> 0
- This is MORE sophisticated than our simple translateY + opacity
- RECOMMENDATION: Use this blur+translate+opacity pattern for premium feel
- Implementation: wrap sections in AnimatedGroup from 21st.dev
- Source: 21st.dev "Hero Section 1" — uses custom transitionVariants
