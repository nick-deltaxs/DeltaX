"use client";

import { motion, Variants } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Founder {
  name: string;
  initials: string;
  role: string;
  pillar: string;
}

interface Leadership {
  name: string;
  initials: string;
  role: string;
  pillar: string;
}

interface TeamMember {
  name: string;
  initials: string;
  role: string;
  pillar: string;
}

const pillarGradients: Record<string, string> = {
  core: "linear-gradient(135deg, #006381 0%, #1A9BBF 100%)",
  code: "linear-gradient(135deg, #5A5A5A 0%, #8A8A8A 100%)",
  scale: "linear-gradient(135deg, #9A1515 0%, #D94040 100%)",
  style: "linear-gradient(135deg, #121CDB 0%, #6E75FF 100%)",
  deltax: "linear-gradient(135deg, #1A9BBF 0%, #15339A 100%)",
};

const pillarTextColors: Record<string, string> = {
  core: "text-core-bright",
  code: "text-code-bright",
  scale: "text-scale-bright",
  style: "text-style-bright",
  deltax: "text-deltax-bright",
};

const founders: Founder[] = [
  {
    name: "Dave Benrouz",
    initials: "DB",
    role: "Co-Founder & System Architect",
    pillar: "deltax",
  },
  {
    name: "Ramtin Ghaffary",
    initials: "RG",
    role: "Co-Founder",
    pillar: "deltax",
  },
];

const leadership: Leadership[] = [
  { name: "Vitaly Kulak", initials: "VK", role: "COO", pillar: "deltax" },
  { name: "Yaroslav Gordon", initials: "YG", role: "Chief of Staff", pillar: "deltax" },
  { name: "Vadim Parker", initials: "VP", role: "Creative Director", pillar: "style" },
  { name: "Masha Ghaffary", initials: "MG", role: "Growth Director", pillar: "scale" },
];

const team: TeamMember[] = [
  { name: "Nick", initials: "NK", role: "Quality & Ops", pillar: "code" },
  { name: "Den", initials: "DP", role: "Admin", pillar: "deltax" },
  { name: "Hassan", initials: "HA", role: "Finance", pillar: "deltax" },
  { name: "Goga", initials: "GZ", role: "Research", pillar: "core" },
  { name: "Arvin", initials: "AA", role: "Engineer", pillar: "code" },
  { name: "Arrom", initials: "AM", role: "Engineer", pillar: "code" },
  { name: "Nazar", initials: "NZ", role: "Builder", pillar: "code" },
  { name: "Marina", initials: "MO", role: "Builder", pillar: "code" },
  { name: "Katareina", initials: "KM", role: "Builder", pillar: "code" },
  { name: "Erfan", initials: "EM", role: "Builder", pillar: "code" },
];

const staggerContainer = (stagger: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function TeamGrid() {
  return (
    <section id="team" className="bg-primary py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(68, 102, 204, 0.06) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 atmosphere-grid" />
      <div className="absolute inset-0 atmosphere-vignette" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="font-display text-2xl text-text-hero text-center">
          The Full Team
        </h2>

        <ScrollReveal delay={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-lg mx-auto">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="w-[120px] h-[120px] rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105"
                  style={{ background: pillarGradients[founder.pillar] }}
                >
                  <span className="font-display text-2xl text-text-hero text-center select-none">
                    {founder.initials}
                  </span>
                </div>
                <p className="font-display text-base text-text-hero mt-4">
                  {founder.name}
                </p>
                <p className="font-body text-sm text-text-dim">{founder.role}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {leadership.map((member) => (
            <motion.div
              key={member.name}
              className="flex flex-col items-center text-center"
              variants={fadeUpItem}
            >
              <div
                className="w-[72px] h-[72px] rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105"
                style={{ background: pillarGradients[member.pillar] }}
              >
                <span className="font-display text-lg text-text-hero text-center select-none">
                  {member.initials}
                </span>
              </div>
              <p className="font-body text-sm text-text-body mt-3">
                {member.name}
              </p>
              <p className="font-body text-xs text-text-dim">{member.role}</p>
              <p
                className={`font-mono text-[10px] uppercase tracking-wider mt-1 ${pillarTextColors[member.pillar]}`}
              >
                {member.pillar}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 xl:grid-cols-10 gap-4 mt-8"
          variants={staggerContainer(0.04)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              className="flex flex-col items-center text-center"
              variants={fadeUpItem}
            >
              <div
                className="w-[48px] h-[48px] rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105"
                style={{ background: pillarGradients[member.pillar] }}
              >
                <span className="font-display text-sm text-text-hero text-center select-none">
                  {member.initials}
                </span>
              </div>
              <p className="text-xs text-text-dim mt-2 text-center truncate w-full">
                {member.name}
              </p>
              <p className="text-[10px] text-text-muted text-center truncate w-full">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
