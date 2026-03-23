# Footer Component Reference

## Source: 21st.dev "Footer" by 21st.dev team

## Best Match Found
The multi-column footer with config object pattern. Uses:
- footerConfig object with columns, socials, contact info
- Lucide icons for social (Github, Twitter, Linkedin, Instagram)
- Grid layout: responsive columns
- Bottom bar with copyright + legal links
- Dark/light logo support

## Adaptation for DeltaX
- Background: #080809 (--bg-deep)
- 4 columns: DELTAX (brand), Services, Company, Legal
- Brand column wider (~35%)
- Links: Inter 400, 14px, #666666, hover: #E8E8E8
- Column headers: Inter 600, 14px, uppercase, #999999
- Social icons: 16px, #666666, hover: #E8E8E8 (X, LinkedIn, Instagram)
- Bottom divider: 1px #1A1A22
- Copyright: Inter 400, 12px, #666666, centered
- Mobile: 2x2 grid for columns
- USE shared SocialIcons component (not inline SVGs — Run 1 had 6 inline copies)
