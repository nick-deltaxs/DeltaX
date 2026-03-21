"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";

export function Story() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <ScrollReveal delay={0}>
          <p className="font-body text-base text-text-body leading-relaxed mb-6">
            Founded by Dave Benrouz and Ramtin Ghaffary — based in Bali. Dave&apos;s MSc in Computer Mathematics from Igor Sikorsky KPI gave him the systems thinking that became DeltaX&apos;s foundation.
          </p>
          <p className="font-body text-base text-text-body leading-relaxed mb-6">
            They kept seeing the same pattern: companies spending six figures on agencies that never shared a single Slack channel. Strategy went one direction. Tech went another. Growth had no data from either. Brand was decorating what nobody aligned on.
          </p>
          <p className="font-body text-base text-text-body leading-relaxed mb-6">
            So they built one system — where strategy feeds tech, tech feeds growth, growth feeds brand, and brand feeds strategy back. A closed loop. DeltaX.
          </p>
          <Card variant="left-accent" accentColor="core">
            <p className="font-display text-lg text-text-hero">
              Stop hiring four agencies. Start building one system.
            </p>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
