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
        // Backgrounds (neutral — no green tint)
        primary: "#0A0A0B",
        secondary: "#111116",
        tertiary: "#1A1A22",
        elevated: "#222230",
        deep: "#080809",

        // Pillar colors (base / bright)
        "core-base": "#006381",
        "core-bright": "#1A9BBF",
        "code-base": "#5A5A5A",
        "code-bright": "#8A8A8A",
        "scale-base": "#9A1515",
        "scale-bright": "#D94040",
        "style-base": "#121CDB",
        "style-bright": "#6E75FF",
        "deltax-base": "#15339A",
        "deltax-bright": "#4466CC",

        // Text hierarchy
        "text-hero": "#FFFFFF",
        "text-body": "#E8E8E8",
        "text-secondary": "#999999",
        "text-muted": "#666666",

        // Accent (single-accent discipline — CTAs only)
        "accent-gold": "#f0b429",
        "accent-gold-hover": "#ffca4a",

        // Status
        success: "#22C55E",
        error: "#EF4444",
        warning: "#FACC15",
        info: "#60A5FA",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: [
          "var(--font-mono)",
          "SF Mono",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
