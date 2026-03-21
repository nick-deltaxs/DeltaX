import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { Story } from "@/components/about/Story";
import { TeamGrid } from "@/components/about/TeamGrid";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata = {
  title: "About — DeltaX",
  description: "Meet the team behind the system.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      <AboutHero />
      <Story />
      <TeamGrid />
      <AboutCTA />
      <Footer />
    </main>
  );
}
