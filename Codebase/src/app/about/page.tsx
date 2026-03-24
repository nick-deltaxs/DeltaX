import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { Story } from "@/components/about/Story";
import { TeamTable } from "@/components/about/TeamTable";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About",
  description: "The system behind the system. Meet the 16 specialists building DeltaX.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <TeamTable />
      <AboutCTA />
    </>
  );
}
