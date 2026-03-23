import dynamic from "next/dynamic";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/home/Hero";
import { TheProblem } from "@/components/home/TheProblem";
import { TheSystem } from "@/components/home/TheSystem";
import { TheEngine } from "@/components/home/TheEngine";

const TheProof = dynamic(
  () => import("@/components/home/TheProof").then((m) => ({ default: m.TheProof })),
  { ssr: false, loading: () => <div className="min-h-[50vh]" /> }
);

const TheArchitects = dynamic(
  () => import("@/components/home/TheArchitects").then((m) => ({ default: m.TheArchitects })),
  { ssr: false, loading: () => <div className="min-h-[50vh]" /> }
);

const YourPath = dynamic(
  () => import("@/components/home/YourPath").then((m) => ({ default: m.YourPath })),
  { ssr: false, loading: () => <div className="min-h-[50vh]" /> }
);

const FinalCTA = dynamic(
  () => import("@/components/home/FinalCTA").then((m) => ({ default: m.FinalCTA })),
  { ssr: false, loading: () => <div className="min-h-[50vh]" /> }
);

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
    <>
      <Navbar />
      <Hero />
      <TheProblem />
      <TheSystem />
      <TheEngine />
      <TheProof />
      <TheArchitects />
      <YourPath />
      <FinalCTA />
      <Footer />
    </>
  );
}
