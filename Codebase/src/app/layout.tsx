import type { Metadata } from "next";
import { Days_One, Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
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
  metadataBase: new URL("https://thesx.co"),
  title: "DeltaX — One System. Four Engines. Total Transformation.",
  description:
    "DeltaX transforms businesses through four integrated engines: strategy, technology, growth, and brand. One system, total transformation.",
  openGraph: {
    title: "DeltaX — One System. Four Engines. Total Transformation.",
    description:
      "DeltaX transforms businesses through four integrated engines: strategy, technology, growth, and brand. One system, total transformation.",
    url: "https://thesx.co",
    siteName: "DeltaX",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeltaX — One System. Four Engines. Total Transformation.",
    description:
      "DeltaX transforms businesses through four integrated engines: strategy, technology, growth, and brand.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${daysOne.variable} ${inter.variable}`}>
      <body className="bg-bg-primary text-text-body font-body">
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        <Providers>
          <main id="main">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
