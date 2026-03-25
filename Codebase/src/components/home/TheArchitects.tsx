"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionOverline } from "@/components/ui/SectionOverline";
import { founders, leaders, members } from "@/data/team";

const EASE_OUT: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const PILLAR_COLORS: Record<string, string> = {
  deltax: "var(--deltax-bright)",
  core: "var(--core-bright)",
  code: "var(--code-bright)",
  scale: "var(--scale-bright)",
  style: "var(--style-bright)",
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

const leaderContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const teamContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
};

export function TheArchitects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <SectionWrapper id="architects" background="secondary" glow="none">
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

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <SectionOverline number="03" label="THE ARCHITECTS" className="mb-4" />
          <h2
            className="font-display text-[32px] md:text-5xl text-text-hero"
            style={{ letterSpacing: "-0.03em", textWrap: "balance" }}
          >
            Built by founders who build.
          </h2>
        </motion.div>

        {/* Co-founders */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
          {founders.map((founder, index) => {
            const meta = FOUNDER_META[founder.name];
            return (
              <motion.div
                key={founder.name}
                initial={{
                  opacity: 0,
                  x: isMobile ? 0 : index === 0 ? -40 : 40,
                  y: isMobile ? 20 : 0,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
                className={
                  index === 0
                    ? "md:border-r md:border-white/[0.1] md:pr-8 pb-8 md:pb-0 border-b md:border-b-0 border-white/[0.08]"
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
                    color: "var(--accent-gold)",
                    backgroundColor: "rgba(240, 180, 41, 0.06)",
                  }}
                >
                  {meta?.initials}
                </div>

                <h3
                  className="font-display text-2xl text-text-hero"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {founder.name}
                </h3>

                <p
                  className="font-mono text-[13px] tracking-[0.08em] mt-2"
                  style={{ color: "var(--accent-gold)" }}
                >
                  {founder.role}
                </p>

                <p className="font-body text-sm text-white/50 leading-[1.6] mt-4 max-w-[400px]">
                  {meta?.bio}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Tier divider 1 */}
        <div className="pt-16 border-b border-white/[0.08]" />

        {/* Section Leaders */}
        <div className="pt-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35 mb-6">
            SECTION LEADERS
          </p>
          <motion.div
            variants={leaderContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5"
          >
            {leaders.map((leader) => (
              <motion.div
                key={leader.name}
                variants={itemVariants}
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
                  <p className="font-body text-sm font-semibold text-text-hero">
                    {leader.name}
                  </p>
                  <p className="font-body text-xs text-white/45">
                    {leader.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tier divider 2 */}
        <div className="pt-12 border-b border-white/[0.08]" />

        {/* The Team */}
        <div className="pt-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35 mb-6">
            THE TEAM
          </p>
          <motion.div
            variants={teamContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4"
          >
            {members.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
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
                  <p className="font-body text-[13px] font-medium text-white/75">
                    {member.name}
                  </p>
                  <p className="font-body text-[11px] text-white/35">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
