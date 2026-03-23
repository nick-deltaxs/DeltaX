# SEO + OG Images + Structured Data

## Metadata
- **Phase:** 6
- **Branch:** `production/seo`
- **Output File(s):** `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/api/og/route.tsx`
- **Depends On:** All previous phases (0-5)
- **Estimated Complexity:** Medium

## System Instruction

You are a senior frontend developer. You will generate exactly the code specified below. Do not ask questions. Do not add features, comments, or explanations beyond what is specified. Do not create additional files unless explicitly told to. Do not modify any existing files unless explicitly told to. Follow every instruction precisely.

Tech stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS (custom tokens), Framer Motion (domMax), Days One + Inter fonts, CSS @keyframes for infinite animations.

Global rules: "use client" when hooks/state/Framer Motion. Named exports. @/ path aliases. Custom Tailwind tokens only. Mobile-first. No console.log, no TODO, no any, no default exports (except page/layout).

## Context

This prompt adds SEO infrastructure to the DeltaX website: a dynamic sitemap, robots.txt, dynamic OG image generation, and structured data. It also updates each page's metadata export to include Open Graph image references. The OG image endpoint dynamically generates a branded 1200x630 image using `@vercel/og` with the DaysOne font loaded from the public fonts directory.

## Color Tokens

```
bg-primary #0A0C0B
core-bright #1A9BBF
text-hero #FFFFFF
text-body #E8E8E8
text-dim rgba(255,255,255,0.60)
```

## Requirements

### File 1: `src/app/sitemap.ts`

1. Default export function `sitemap()` returning `MetadatRoute.Sitemap`
2. Base URL: `https://thesx.co`
3. Return array of all 5 pages:

```tsx
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thesx.co";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
```

4. ~25-30 lines

### File 2: `src/app/robots.ts`

1. Default export function `robots()` returning `MetadataRoute.Robots`
2. Allow all crawlers, point to sitemap:

```tsx
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://thesx.co/sitemap.xml",
  };
}
```

3. ~12-15 lines

### File 3: `src/app/api/og/route.tsx`

1. Use `ImageResponse` from `@vercel/og` (or `next/og` in Next.js 14+)
2. Accept `?title=` query parameter (default: "DeltaX")
3. Load DaysOne-Regular.ttf from `public/fonts/DaysOne-Regular.ttf` using `fetch` with `new URL` at module scope
4. Generate a 1200x630 OG image with:
   - Background: `#0A0C0B` (bg-primary)
   - Subtle teal radial glow in the center (CSS radial-gradient)
   - "ΔX" text centered: DaysOne font, 80px, `#FFFFFF`
   - Page title below: DaysOne font, 40px, `#E8E8E8`
   - "thesx.co" at bottom: Inter font (system fallback), 20px, `rgba(255,255,255,0.50)`
5. Use `edge` runtime for optimal performance
6. Cache: `Cache-Control: public, max-age=31536000, immutable`
7. ~60-80 lines

```tsx
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

const fontData = fetch(
  new URL("../../../../public/fonts/DaysOne-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "DeltaX";
  const font = await fontData;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0C0B",
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(26, 155, 191, 0.15) 0%, transparent 70%)",
        }}
      >
        <div
          style={{
            fontFamily: "DaysOne",
            fontSize: 80,
            color: "#FFFFFF",
            marginBottom: 16,
          }}
        >
          ΔX
        </div>
        <div
          style={{
            fontFamily: "DaysOne",
            fontSize: 40,
            color: "#E8E8E8",
            marginBottom: 40,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.50)",
          }}
        >
          thesx.co
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "DaysOne",
          data: font,
          style: "normal",
          weight: 400,
        },
      ],
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    }
  );
}
```

### File Modifications: Update page metadata

Update each page's metadata export to include Open Graph image. Modify these existing files:

**`src/app/page.tsx`** — add to metadata:
```tsx
export const metadata = {
  title: "DeltaX — One System. Four Engines. Total Transformation.",
  description: "DeltaX replaces the 4 agencies that never talk to each other with one system where strategy, tech, growth, and brand feed into each other.",
  openGraph: {
    title: "DeltaX — One System. Four Engines. Total Transformation.",
    description: "DeltaX replaces the 4 agencies that never talk to each other with one system where strategy, tech, growth, and brand feed into each other.",
    url: "https://thesx.co",
    siteName: "DeltaX",
    images: [{ url: "/api/og?title=One%20System.%20Four%20Engines.", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeltaX — One System. Four Engines. Total Transformation.",
    description: "DeltaX replaces the 4 agencies that never talk to each other with one system.",
    images: ["/api/og?title=One%20System.%20Four%20Engines."],
  },
};
```

**`src/app/about/page.tsx`** — add to metadata:
```tsx
export const metadata = {
  title: "About — DeltaX",
  description: "Meet the team behind the system.",
  openGraph: {
    title: "About — DeltaX",
    description: "Meet the team behind the system.",
    url: "https://thesx.co/about",
    siteName: "DeltaX",
    images: [{ url: "/api/og?title=About%20DeltaX", width: 1200, height: 630 }],
    type: "website",
  },
};
```

**`src/app/contact/page.tsx`** — add to metadata:
```tsx
export const metadata = {
  title: "Contact — DeltaX",
  description: "Get in touch with the DeltaX team.",
  openGraph: {
    title: "Contact — DeltaX",
    description: "Get in touch with the DeltaX team.",
    url: "https://thesx.co/contact",
    siteName: "DeltaX",
    images: [{ url: "/api/og?title=Contact%20Us", width: 1200, height: 630 }],
    type: "website",
  },
};
```

**`src/app/privacy/page.tsx`** — add to metadata:
```tsx
export const metadata = {
  title: "Privacy Policy — DeltaX",
  description: "How DeltaX handles your data.",
  openGraph: {
    title: "Privacy Policy — DeltaX",
    description: "How DeltaX handles your data.",
    url: "https://thesx.co/privacy",
    siteName: "DeltaX",
    images: [{ url: "/api/og?title=Privacy%20Policy", width: 1200, height: 630 }],
    type: "website",
  },
};
```

**`src/app/terms/page.tsx`** — add to metadata:
```tsx
export const metadata = {
  title: "Terms of Service — DeltaX",
  description: "Terms governing use of DeltaX services.",
  openGraph: {
    title: "Terms of Service — DeltaX",
    description: "Terms governing use of DeltaX services.",
    url: "https://thesx.co/terms",
    siteName: "DeltaX",
    images: [{ url: "/api/og?title=Terms%20of%20Service", width: 1200, height: 630 }],
    type: "website",
  },
};
```

### Structured Data: JSON-LD Organization Schema

Add a JSON-LD `<script>` to the home page layout or directly in `src/app/layout.tsx`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "DeltaX",
      url: "https://thesx.co",
      logo: "https://thesx.co/logo.svg",
      description:
        "DeltaX replaces the 4 agencies that never talk to each other with one system where strategy, tech, growth, and brand feed into each other.",
      foundingDate: "2025",
      founders: [
        { "@type": "Person", name: "Dave Benrouz" },
        { "@type": "Person", name: "Ramtin Ghaffary" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bali",
        addressCountry: "ID",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@thesx.co",
        contactType: "customer service",
      },
      sameAs: [],
    }),
  }}
/>
```

Place this inside the `<body>` tag in `layout.tsx`, before `{children}`.

## Imports

**sitemap.ts:**
```tsx
import type { MetadataRoute } from "next";
```

**robots.ts:**
```tsx
import type { MetadataRoute } from "next";
```

**og/route.tsx:**
```tsx
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
```

## Expected Output

This prompt produces exactly **3 new files** and modifies **6 existing files:**

**New files:**

| # | File | Location |
|---|------|----------|
| 1 | sitemap.ts | `src/app/sitemap.ts` |
| 2 | robots.ts | `src/app/robots.ts` |
| 3 | route.tsx | `src/app/api/og/route.tsx` |

**Modified files:**

| # | File | Change |
|---|------|--------|
| 1 | `src/app/page.tsx` | Add openGraph + twitter metadata |
| 2 | `src/app/about/page.tsx` | Add openGraph metadata |
| 3 | `src/app/contact/page.tsx` | Add openGraph metadata |
| 4 | `src/app/privacy/page.tsx` | Add openGraph metadata |
| 5 | `src/app/terms/page.tsx` | Add openGraph metadata |
| 6 | `src/app/layout.tsx` | Add JSON-LD structured data |

- No `"use client"` on any new files
- Total new lines: ~150-200 across 3 new files
- `runtime = "edge"` on the OG route only

**ONLY rules:**
- ONLY create the 3 new files specified
- ONLY modify the 6 existing files listed
- ONLY use the base URL `https://thesx.co`
- ONLY load DaysOne font from `public/fonts/DaysOne-Regular.ttf`
- ONLY use `@vercel/og` or `next/og` for image generation

**Test:**
1. Visit `/sitemap.xml` — should list all 5 pages with correct URLs
2. Visit `/robots.txt` — should allow all, point to sitemap
3. Visit `/api/og?title=Test` — should return a 1200x630 PNG with dark background, ΔX logo, "Test" title, and "thesx.co"
4. Share any page URL on Twitter/LinkedIn/Slack — preview card should show the branded OG image
5. Google Rich Results Test — Organization schema should validate
