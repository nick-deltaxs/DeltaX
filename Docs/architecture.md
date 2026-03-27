# Architecture

This document outlines the technical architecture and design decisions for the DeltaX website.

## Tech Stack

### Core
- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Runtime**: [Node.js 20+](https://nodejs.org/)

### Styling
- **CSS Framework**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animation**: CSS transitions + Framer Motion ready
- **Icons**: [Lucide React](https://lucide.dev/)

### UI Components
- **Base**: [Radix UI](https://www.radix-ui.com/) primitives
- **Styling**: [shadcn/ui](https://ui.shadcn.com/) pattern
- **Components**: 30+ pre-built accessible components

### Analytics
- **Provider**: [Vercel Analytics](https://vercel.com/analytics)

## Project Structure

```
Codebase/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── not-found.tsx      # 404 page
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── privacy/           # Privacy policy
│   └── terms/             # Terms of service
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── header.tsx        # Site header
│   ├── footer.tsx        # Site footer
│   ├── hero.tsx          # Hero section
│   └── ...               # Other page sections
├── hooks/                 # Custom React hooks
│   ├── use-mobile.ts     # Mobile detection
│   └── use-toast.ts      # Toast notifications
├── lib/                   # Utilities & data
│   ├── utils.ts          # Helper functions
│   ├── animations.ts     # Animation variants
│   └── team-data.ts      # Team member data
├── public/               # Static assets
│   ├── *.png             # Logo images
│   └── *.svg             # Icons
└── styles/               # Additional styles
```

## Design System

### Colors (CSS Variables)

```css
--bg-base: #050507           /* Primary background */
--bg-surface: #0A0A0F        /* Card/surface background */
--text-primary: #FFFFFF      /* Primary text */
--text-secondary: #8A8A8F    /* Secondary/muted text */
--accent: #00D9FF            /* Brand accent (cyan) */
--border-subtle: #1A1A1F     /* Subtle borders */
```

### Typography

- **Font**: Geist (system fallback)
- **Scale**: Custom text classes
  - `text-h1`: Hero headings
  - `text-h2`: Section headings
  - `text-h3`: Subsection headings
  - `text-body`: Body text
  - `text-label`: Small labels/eyebrows

### Spacing

- **Section padding**: `section` class (responsive)
- **Content width**: `content-width` class (max-width container)
- **Component gaps**: Tailwind spacing scale

## Component Patterns

### Page Sections

Each major section is a separate component:

```tsx
// components/hero.tsx
export default function Hero() {
  return (
    <section className="section">
      <div className="content-width">
        {/* Content */}
      </div>
    </section>
  );
}
```

### UI Components

Using shadcn/ui pattern with Radix primitives:

```tsx
// components/ui/button.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center...",
  {
    variants: {
      variant: {
        default: "bg-[var(--accent)]...",
        secondary: "bg-[var(--bg-surface)]...",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8...",
        lg: "h-11...",
      },
    },
  }
);
```

## Data Flow

### Static Data
Team members and other static content stored in `lib/team-data.ts`.

### Forms
Contact form currently simulates API calls (ready for backend integration).

### Analytics
Vercel Analytics integrated at layout level, tracks page views automatically.

## Performance

### Optimizations
- **Images**: Next.js Image component with lazy loading
- **Fonts**: next/font for optimized font loading
- **Code Splitting**: Automatic route-based splitting
- **CSS**: Tailwind purges unused styles in production

### Build Output
- Static generation for marketing pages
- Client-side hydration for interactive components

## Security

### Environment Variables
- `.env.local` for secrets (never committed)
- `.env.example` as template
- No secrets in client-side code

### Dependencies
Regular updates via:
```bash
npm update
npm audit
```

## Future Considerations

### Potential Additions
- CMS integration (Contentful, Sanity)
- i18n internationalization
- Contact form backend (Resend, SendGrid)
- Authentication (NextAuth.js)
- Database (Supabase, PlanetScale)

### Scalability
- CDN-ready static output
- Edge function capable
- Database connection pooling ready
