# Tabs — Notes

- Found tabs were basic (Radix, Ark UI, Headless UI — all light mode focused)
- NONE match our accordion-paired-visual with content panel pattern
- RECOMMENDATION: Build custom using Framer Motion AnimatePresence for crossfade
- Use Radix Tabs for accessibility (keyboard nav, ARIA) but completely custom style
- Our design: horizontal text tabs with icon + label, 55/45 content panel below
- The tab switching should crossfade content (200ms fade out, 300ms fade in)
