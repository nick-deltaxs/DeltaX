import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/home/Hero";
import { TheProblem } from "@/components/home/TheProblem";
import { TheEngine } from "@/components/home/TheEngine";
import { TheSystem } from "@/components/home/TheSystem";
import { TheProof } from "@/components/home/TheProof";
import { TheArchitects } from "@/components/home/TheArchitects";
import { YourPath } from "@/components/home/YourPath";
import { FinalCTA } from "@/components/home/FinalCTA";

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

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <TheProblem />
      <TheEngine />
      <TheSystem />
      <TheProof />
      <TheArchitects />
      <YourPath />
      <FinalCTA />
      <Footer />
    </main>
  );
}
