"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { team } from "@/data/team";
import type { TeamMember } from "@/types";

const pillarColors: Record<TeamMember["pillar"], string> = {
  core: "bg-core-bright",
  code: "bg-code-bright",
  scale: "bg-scale-bright",
  style: "bg-style-bright",
  deltax: "bg-deltax-bright",
};

const pillarTextColors: Record<TeamMember["pillar"], string> = {
  core: "text-core-bright",
  code: "text-code-bright",
  scale: "text-scale-bright",
  style: "text-style-bright",
  deltax: "text-deltax-bright",
};

const pillarLabels: Record<TeamMember["pillar"], string> = {
  core: "CoreXs",
  code: "CodeXs",
  scale: "ScaleXs",
  style: "StyleXs",
  deltax: "DeltaX",
};

function TeamRow({
  member,
  index,
  isLastInTier,
}: {
  member: TeamMember;
  index: number;
  isLastInTier: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`py-4 border-b ${isLastInTier ? "border-b-2 border-elevated" : "border-elevated"} hover:bg-tertiary transition-colors duration-150`}
    >
      {/* Desktop: Grid layout */}
      <div className="hidden md:grid grid-cols-[8px_1fr_1.5fr_1fr] gap-4 items-center">
        <div className={`w-2 h-2 rounded-full ${pillarColors[member.pillar]}`} />
        <span className="font-body text-base font-medium text-text-hero">
          {member.name}
        </span>
        <span className="font-body text-sm text-text-body">{member.role}</span>
        <span
          className={`font-body text-sm ${pillarTextColors[member.pillar]}`}
        >
          {pillarLabels[member.pillar]}
        </span>
      </div>

      {/* Mobile: Stacked layout */}
      <div className="md:hidden flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${pillarColors[member.pillar]}`} />
        <div className="flex flex-col gap-0.5">
          <span className="font-body text-base font-medium text-text-hero">
            {member.name}
          </span>
          <span className="font-body text-sm text-text-body">
            {member.role}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function TeamTable() {
  const founders = team.filter((m) => m.tier === "founder");
  const leaders = team.filter((m) => m.tier === "leader");
  const members = team.filter((m) => m.tier === "team");

  const orderedTeam = [...founders, ...leaders, ...members];

  let rowIndex = 0;

  return (
    <SectionWrapper id="team" background="primary">
      <h2 className="font-display text-5xl text-text-hero tracking-[-0.03em] mb-12">
        The People.
      </h2>

      {/* Table Header - Desktop only */}
      <div className="hidden md:grid grid-cols-[8px_1fr_1.5fr_1fr] gap-4 items-center pb-3 border-b border-elevated">
        <span />
        <span className="font-mono text-xs uppercase text-text-muted tracking-[0.08em]">
          NAME
        </span>
        <span className="font-mono text-xs uppercase text-text-muted tracking-[0.08em]">
          ROLE
        </span>
        <span className="font-mono text-xs uppercase text-text-muted tracking-[0.08em]">
          SECTION
        </span>
      </div>

      {/* Team Rows */}
      <div>
        {orderedTeam.map((member, idx) => {
          const isLastInTier =
            (member.tier === "founder" && idx === founders.length - 1) ||
            (member.tier === "leader" &&
              idx === founders.length + leaders.length - 1) ||
            (member.tier === "team" &&
              idx === orderedTeam.length - 1);

          const currentRow = rowIndex++;

          return (
            <TeamRow
              key={member.name}
              member={member}
              index={currentRow}
              isLastInTier={isLastInTier}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
}
