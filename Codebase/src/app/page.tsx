import { Hero } from "@/components/home/Hero";
import { TheSystem } from "@/components/home/TheSystem";
import { TheProblem } from "@/components/home/TheProblem";
import { TheProof } from "@/components/home/TheProof";
import { TheArchitects } from "@/components/home/TheArchitects";
import { YourPath } from "@/components/home/YourPath";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TheSystem />
      <TheProblem />
      <TheProof />
      <TheArchitects />
      <YourPath />
      <FinalCTA />
    </div>
  );
}
