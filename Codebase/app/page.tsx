import Header from "@/components/header";
import Hero from "@/components/hero";
import TheProblem from "@/components/the-problem";
import NodeDiagram from "@/components/node-diagram";
import FeatureTabs from "@/components/feature-tabs";
import MetricCounters from "@/components/metric-counters";
import TheProof from "@/components/the-proof";
import LogoMarquee from "@/components/logo-marquee";
import TheArchitects from "@/components/the-architects";
import FrameworkGrid from "@/components/framework-grid";
import AccordionPath from "@/components/accordion-path";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="pt-16">
        {/* Section 1: Hero */}
        <Hero />
        
        {/* Section 2: The Problem - Before/After split */}
        <TheProblem />
        
        {/* Section 3: Built by Founders - Node Diagram */}
        <NodeDiagram />
        
        {/* Section 4: 4 Engines - Feature Tabs */}
        <FeatureTabs />
        
        {/* Section 5: Metric Counters */}
        <MetricCounters />
        
        {/* Section 6: The Proof */}
        <TheProof />
        
        {/* Section 7: Logo Marquee */}
        <LogoMarquee />
        
        {/* Section 8: The Architects */}
        <TheArchitects />
        
        {/* Section 9: Tech Stack */}
        <FrameworkGrid />
        
        {/* Section 10: Your Path - Accordion Steps */}
        <AccordionPath />
      </main>
      
      {/* Section 11: CTA + Footer */}
      <Footer />
    </>
  );
}
