"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function FinalCTA() {
  return (
    <SectionWrapper
      id="cta"
      background="primary"
      className="!py-0 lg:!py-0 !px-0 lg:!px-0 !max-w-none [&_.atmosphere-vignette]:hidden"
    >
      <div className="atmosphere-grid py-24 lg:py-32">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center px-6 lg:px-8">
            <DeltaXLogo size={80} className="text-text-hero" />

            <h2 className="font-display text-xl md:text-2xl lg:text-[clamp(1.6rem,3.5vw,2.6rem)] text-text-hero mt-8 leading-tight whitespace-pre-line">
              {`YOU'VE SEEN THE SYSTEM.
JOIN THE WAITLIST.`}
            </h2>

            <p className="font-body text-sm text-text-dim mt-4">
              Be first in line when we launch.
            </p>

            <div className="mt-8 w-full max-w-md">
              <WaitlistForm />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
