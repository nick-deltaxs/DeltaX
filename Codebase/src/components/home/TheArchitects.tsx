"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { founders, leaders, members } from "@/data/team";

const pillarColors: Record<string, string> = {
  deltax: "bg-deltax-bright",
  core: "bg-core-bright",
  code: "bg-code-bright",
  scale: "bg-scale-bright",
  style: "bg-style-bright",
};

const founderBios: Record<string, string> = {
  "Dave Benrouz":
    "Systems thinker who builds companies like machines. Former engineer turned architect — designs the system before writing a single line of code.",
  "Ramtin Ghaffary":
    "Strategy mind who finds the signal in the noise. Leads CoreXs — mapping every business before the engines activate.",
};

export function TheArchitects() {
  const [dave, ramtin] = founders;

  return (
    <SectionWrapper id="architects" background="primary" glow="none">
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
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs uppercase tracking-[0.12em] text-text-muted"
        >
          [03] THE ARCHITECTS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[32px] text-text-hero mt-4"
          style={{ letterSpacing: "-0.03em", textWrap: "balance" }}
        >
          Built by founders who build.
        </motion.h2>

        {/* Co-founders */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          {/* Dave */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:border-r md:border-elevated md:pr-8 pb-8 md:pb-0 border-b md:border-b-0 border-elevated"
          >
            <h3
              className="font-display text-[32px] text-text-hero"
              style={{ letterSpacing: "-0.03em" }}
            >
              {dave.name}
            </h3>
            <p className="font-body text-base font-medium text-text-secondary mt-2">
              {dave.role}
            </p>
            <p className="font-body text-base text-text-secondary mt-4 max-w-[400px]">
              {founderBios[dave.name]}
            </p>
          </motion.div>

          {/* Ramtin */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:pl-8"
          >
            <h3
              className="font-display text-[32px] text-text-hero"
              style={{ letterSpacing: "-0.03em" }}
            >
              {ramtin.name}
            </h3>
            <p className="font-body text-base font-medium text-text-secondary mt-2">
              {ramtin.role}
            </p>
            <p className="font-body text-base text-text-secondary mt-4 max-w-[400px]">
              {founderBios[ramtin.name]}
            </p>
          </motion.div>
        </div>

        {/* Leaders */}
        <div className="mt-16">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-text-muted mb-6">
            SECTION LEADERS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center gap-3"
              >
                <span
                  className={`w-2 h-2 rounded-full ${pillarColors[leader.pillar]}`}
                />
                <div>
                  <p className="font-body text-base font-medium text-text-hero">
                    {leader.name}
                  </p>
                  <p className="font-body text-sm text-text-secondary">
                    {leader.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mt-12">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-text-muted mb-6">
            THE TEAM
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center gap-2"
              >
                <span
                  className={`w-2 h-2 rounded-full ${pillarColors[member.pillar]}`}
                />
                <p className="font-body text-sm text-text-body">
                  {member.name} · {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
