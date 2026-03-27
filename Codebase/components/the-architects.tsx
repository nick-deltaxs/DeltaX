"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { founders, leaders, members } from "@/lib/team-data";

const PILLAR_COLORS: Record<string, string> = {
  deltax: "var(--deltax-bright, #6366F1)",
  core: "var(--core-bright, #14B8A6)",
  code: "var(--code-bright, #3B82F6)",
  scale: "var(--scale-bright, #22C55E)",
  style: "var(--style-bright, #A855F7)",
};

const FOUNDER_META: Record<string, { initials: string; bio: string }> = {
  "Dave Benrouz": {
    initials: "DB",
    bio: "Systems thinker who builds companies like machines. Former engineer turned architect — designs the system before writing a single line of code.",
  },
  "Ramtin Ghaffary": {
    initials: "RG",
    bio: "Strategy mind who finds the signal in the noise. Leads CoreXs — mapping every business before the engines activate.",
  },
};

export default function TheArchitects() {
  return (
    <section className="section relative overflow-hidden">
      {/* Multi-pillar glow */}
      <div
        className="absolute top-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(68, 102, 204, 0.04) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 0%, rgba(138, 138, 138, 0.04) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 100%, rgba(217, 64, 64, 0.04) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 100%, rgba(110, 117, 255, 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="content-width relative z-10">
        {/* Header */}
        <AnimatedSection delay={0}>
          <span className="text-label mb-4 block">03 — THE ARCHITECTS</span>
          <h2
            className="text-h2 text-white"
            style={{ letterSpacing: "-0.03em" }}
          >
            Built by founders who build.
          </h2>
        </AnimatedSection>

        {/* Co-founders */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
          {founders.map((founder, index) => {
            const meta = FOUNDER_META[founder.name];
            return (
              <AnimatedSection
                key={founder.name}
                delay={100 + index * 100}
                direction={index === 0 ? "left" : "right"}
              >
                <div
                  className={
                    index === 0
                      ? "md:border-r md:border-white/10 md:pr-8 pb-8 md:pb-0 border-b md:border-b-0 border-white/10"
                      : "md:pl-8"
                  }
                >
                  {/* Initials avatar */}
                  <div
                    className="flex items-center justify-center rounded-full font-mono text-[13px] font-semibold tracking-[0.05em] mb-4"
                    style={{
                      width: 40,
                      height: 40,
                      border: "1.5px solid rgba(240, 180, 41, 0.4)",
                      color: "var(--accent-gold, #EAB308)",
                      backgroundColor: "rgba(240, 180, 41, 0.06)",
                    }}
                  >
                    {meta?.initials}
                  </div>

                  <h3
                    className="text-xl md:text-2xl font-bold text-white"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {founder.name}
                  </h3>

                  <p
                    className="font-mono text-[13px] tracking-[0.08em] mt-2"
                    style={{ color: "var(--accent-gold, #EAB308)" }}
                  >
                    {founder.role}
                  </p>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-4 max-w-[400px]">
                    {meta?.bio}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Tier divider 1 */}
        <div className="pt-16 border-b border-white/10" />

        {/* Section Leaders */}
        <AnimatedSection delay={300}>
          <div className="pt-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35 mb-6">
              SECTION LEADERS
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5">
              {leaders.map((leader) => (
                <div
                  key={leader.name}
                  className="flex items-start gap-2.5"
                >
                  <div
                    className="rounded-full shrink-0"
                    style={{
                      width: 8,
                      height: 8,
                      backgroundColor: PILLAR_COLORS[leader.pillar],
                      marginTop: 5,
                    }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {leader.name}
                    </p>
                    <p className="text-xs text-white/45">
                      {leader.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Tier divider 2 */}
        <div className="pt-12 border-b border-white/10" />

        {/* The Team */}
        <AnimatedSection delay={500}>
          <div className="pt-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35 mb-6">
              THE TEAM
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
              {members.map((member) => (
                <div
                  key={member.name}
                  className="flex items-start gap-2"
                >
                  <div
                    className="rounded-full shrink-0"
                    style={{
                      width: 6,
                      height: 6,
                      backgroundColor: PILLAR_COLORS[member.pillar],
                      marginTop: 6,
                    }}
                  />
                  <div>
                    <p className="text-[13px] font-medium text-white/75">
                      {member.name}
                    </p>
                    <p className="text-[11px] text-white/35">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
