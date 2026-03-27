export interface TeamMember {
  name: string;
  role: string;
  pillar: "deltax" | "core" | "code" | "scale" | "style";
  tier: "founder" | "leader" | "team";
}

export const team: TeamMember[] = [
  // Founders
  { name: "Dave Benrouz", role: "Chief System Architect", pillar: "deltax", tier: "founder" },
  { name: "Ramtin Ghaffary", role: "Co-Founder & Head of Strategy", pillar: "core", tier: "founder" },

  // Leadership
  { name: "Vitaly Kulak", role: "Chief Operating Officer", pillar: "deltax", tier: "leader" },
  { name: "Yarik Gordon", role: "Chief of Staff", pillar: "deltax", tier: "leader" },
  { name: "Nikita Zerekidze", role: "Head of Quality & Operations", pillar: "code", tier: "leader" },
  { name: "Steven Parker", role: "Creative Director", pillar: "style", tier: "leader" },
  { name: "Masha Ghaffary", role: "Growth Director", pillar: "scale", tier: "leader" },
  { name: "Denis Pryadun", role: "Head of Administration", pillar: "deltax", tier: "leader" },
  { name: "Hassan Ahmadi", role: "Finance Manager", pillar: "deltax", tier: "leader" },

  // Team Razm
  { name: "Ali Abdi", role: "Systems Engineer — Team Razm", pillar: "code", tier: "team" },
  { name: "Nazar Zerekidze", role: "Developer — Team Razm", pillar: "code", tier: "team" },
  { name: "Marina Omelianchenko", role: "Developer — Team Razm", pillar: "code", tier: "team" },

  // Team Bazm
  { name: "Ali Moghaddas Vahid", role: "Systems Engineer — Team Bazm", pillar: "code", tier: "team" },
  { name: "Katareina Moghaddas Vahid", role: "Developer — Team Bazm", pillar: "code", tier: "team" },
  { name: "Erfan Moghaddas Vahid", role: "Developer — Team Bazm", pillar: "code", tier: "team" },

  // Research
  { name: "Goga Zerekidze", role: "Research Analyst", pillar: "core", tier: "team" },
];

export const founders = team.filter((m) => m.tier === "founder");
export const leaders = team.filter((m) => m.tier === "leader");
export const members = team.filter((m) => m.tier === "team");
