"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MagneticButton from "@/components/magnetic-button";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.25) 0%, transparent 50%)
          `,
          filter: "blur(60px)",
          animation: "mesh-move 20s ease-in-out infinite",
        }}
      />
    </div>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="section content-width text-center relative min-h-[80vh] flex flex-col items-center justify-center">
      <MeshGradient />
      
      <span 
        className={`text-label mb-6 block transition-all duration-700 ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        DeltaX Engine
      </span>
      
      <h1 
        className={`text-h1 mb-8 max-w-4xl text-balance transition-all duration-700 ease-out delay-100 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Ship faster with{" "}
        <span className="text-[var(--accent)]">intelligent</span> workflows
      </h1>
      
      <p 
        className={`text-body max-w-2xl mx-auto mb-12 text-pretty transition-all duration-700 ease-out delay-200 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        The unified platform that connects your stack, automates complexity,
        and scales with your ambition.
      </p>
      
      <div 
        className={`flex gap-4 justify-center flex-wrap transition-all duration-700 ease-out delay-300 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Link href="/contact">
          <MagneticButton>
            Start a Project
          </MagneticButton>
        </Link>
        <Link href="#problem">
          <Button
            variant="ghost"
            size="lg"
            className="text-[var(--text-secondary)] hover:text-white hover:bg-transparent"
          >
            See the System <ArrowRight className="ml-1 size-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
