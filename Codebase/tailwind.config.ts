import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Backgrounds ─────────────────────────────── */
        "bg-primary": "#0A0C0B",
        "bg-secondary": "#161C19",
        "bg-tertiary": "#1C2320",
        "bg-break": "#0D3535",

        /* ── Sub-brand: CoreXs ───────────────────────── */
        "core-base": "#006381",
        "core-bright": "#1A9BBF",

        /* ── Sub-brand: CodeXs ───────────────────────── */
        "code-base": "#5A5A5A",
        "code-bright": "#8A8A8A",

        /* ── Sub-brand: ScaleXs ──────────────────────── */
        "scale-base": "#9A1515",
        "scale-bright": "#D94040",

        /* ── Sub-brand: StyleXs ──────────────────────── */
        "style-base": "#121CDB",
        "style-bright": "#6E75FF",

        /* ── Sub-brand: DeltaX ───────────────────────── */
        "deltax-base": "#15339A",
        "deltax-bright": "#4466CC",

        /* ── Text ────────────────────────────────────── */
        "text-hero": "#FFFFFF",
        "text-body": "#E8E8E8",
        "text-dim": "rgba(255,255,255,0.60)",
        "text-muted": "rgba(255,255,255,0.50)",

        /* ── Special ─────────────────────────────────── */
        gold: "#f0b429",
        success: "#22C55E",
        error: "#EF4444",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["SF Mono", "Menlo", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
