━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-024
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-024
  Name:      W3-SEO
  Title:     W3 — SEO (robots + sitemap + OG image)
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 3
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  Nazar
  File:      src/app/robots.ts, src/app/sitemap.ts, src/app/api/og/route.tsx
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-024.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git checkout main && git pull origin main
git checkout -b wave3/nazar-seo

---

You're building the SEO infrastructure — robots.txt to tell search engines what to index, a sitemap listing all pages, and an OG image that shows up when someone shares thesx.co on social media or Slack.

**INTENT:** Run 1's SEO score was 69/100. The robots.txt didn't block /api/ (search engines could index API endpoints), and the OG image route cached responses for 1 year (any offensive title could be stuck for a year). This version: block /api/, cache OG for 1 hour, limit title length to 100 chars.

---

## File 1: src/app/robots.ts

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: "https://thesx.co/sitemap.xml",
  };
}
```

## File 2: src/app/sitemap.ts

```typescript
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thesx.co";
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
```

## File 3: src/app/api/og/route.tsx

OG image generator — 1200x630, dark background, DeltaX mark, headline, domain in gold.

```typescript
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title")?.slice(0, 100) || "Four engines. One system.";

  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", backgroundColor: "#0A0A0B",
        fontFamily: "sans-serif",
      }}>
        <div style={{ fontSize: 80, color: "#FFFFFF", marginBottom: 20 }}>ΔX</div>
        <div style={{ fontSize: 40, color: "#FFFFFF", textAlign: "center", maxWidth: 800, lineHeight: 1.2 }}>
          {title}
        </div>
        <div style={{ fontSize: 20, color: "#f0b429", marginTop: 30 }}>thesx.co</div>
      </div>
    ),
    { width: 1200, height: 630, headers: { "Cache-Control": "public, max-age=3600" } }
  );
}
```

---

**After building:**
- /robots.txt → blocks /api/, includes sitemap URL
- /sitemap.xml → lists all 5 pages
- /api/og → renders dark image with ΔX mark and headline (open in browser to test)
- /api/og?title=Custom+Title → renders with custom title (max 100 chars)

**Only modify:** the 3 files listed. Don't touch any other file. If ImageResponse import fails, tell me.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "W3-SEO: built by Nazar"
  git push origin wave3/nazar-seo

  Then create a Pull Request on GitHub.
  Arvin will review and merge. DO NOT merge yourself.
  SIGN-OFF
  ─────────────────────────────────────────
  □ Built by:    ________________  (Nazar)
  □ Reviewed by: ________________  (Arvin)
  □ QA by:       ________________  (Nick)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  © DeltaX · CodeXs · "Every paste builds the future."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
