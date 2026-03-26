import type { Metadata } from "next";
import { Days_One, Inter, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { CursorSpotlight } from "@/components/ui/CursorSpotlight";
import "./globals.css";

const daysOne = Days_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DeltaX — Four engines. One system.",
    template: "%s | DeltaX",
  },
  description:
    "Strategy, engineering, design, and growth — working as one machine to build businesses that don't depend on their founders.",
  metadataBase: new URL("https://thesx.co"),
  openGraph: {
    title: "DeltaX — Four engines. One system.",
    description:
      "Strategy, engineering, design, and growth — working as one machine.",
    url: "https://thesx.co",
    siteName: "DeltaX",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "DeltaX — Four engines. One system.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeltaX — Four engines. One system.",
    description:
      "Strategy, engineering, design, and growth — working as one machine.",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${daysOne.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-primary text-text-body font-body">
        {/* Hardware gating — disable ambient effects on low-end devices (Linear pattern) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if(navigator.hardwareConcurrency<=4)document.body.classList.add('low-end')`,
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent-gold focus:text-primary focus:px-4 focus:py-2 focus:rounded-full font-body text-sm focus:outline-none"
        >
          Skip to content
        </a>
        <MotionConfig reducedMotion="user">
          <CursorSpotlight />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </MotionConfig>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DeltaX",
              url: "https://thesx.co",
              description:
                "Strategy, engineering, design, and growth — working as one machine to build businesses that don't depend on their founders.",
              foundingDate: "2025",
              founders: [
                { "@type": "Person", name: "Dave Benrouz" },
                { "@type": "Person", name: "Ramtin Ghaffary" },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@thesx.co",
                contactType: "customer service",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
