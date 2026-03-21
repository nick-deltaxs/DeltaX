import type { Metadata } from "next";
import { Days_One, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
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

export const metadata: Metadata = {
  title: "DeltaX — One System. Four Engines. Total Transformation.",
  description: "Strategy, technology, growth, and brand — engineered into one system. Built for companies doing $500K–$10M. Join the waitlist.",
  metadataBase: new URL("https://thesx.co"),
  openGraph: {
    title: "DeltaX — One System. Four Engines. Total Transformation.",
    description: "Strategy, technology, growth, and brand — engineered into one system.",
    url: "https://thesx.co",
    siteName: "DeltaX",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${daysOne.variable} ${inter.variable}`}>
      <body className="bg-primary text-text-body font-body">
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
        <a href="#main" className="skip-to-content">Skip to content</a>
        <MotionConfig reducedMotion="user">
          <main id="main">{children}</main>
        </MotionConfig>
      </body>
    </html>
  );
}
