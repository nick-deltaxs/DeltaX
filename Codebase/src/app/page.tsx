import { Suspense } from "react";
import { Hero } from "@/components/home/Hero";
import { TheProblem } from "@/components/home/TheProblem";
import { Ecosystem } from "@/components/home/Ecosystem";
import { TheProof } from "@/components/home/TheProof";
import { TheArchitects } from "@/components/home/TheArchitects";
import { YourPath } from "@/components/home/YourPath";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TheProblem />
      <Ecosystem />
      <TheProof />
      <TheArchitects />
      <YourPath />
      <FinalCTA />
    </>
  );
}
