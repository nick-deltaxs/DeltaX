import { Hero } from "@/components/home/Hero";
import { TheProblem } from "@/components/home/TheProblem";
import { TheSystem } from "@/components/home/TheSystem";
import { TheProof } from "@/components/home/TheProof";
import { TheArchitects } from "@/components/home/TheArchitects";
import { YourPath } from "@/components/home/YourPath";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TheProblem />
      <TheSystem />
      <TheProof />
      <TheArchitects />
      <YourPath />
      <FinalCTA />
    </>
  );
}
