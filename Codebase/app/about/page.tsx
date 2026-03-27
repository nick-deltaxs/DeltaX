import Header from "@/components/header";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { team, founders, leaders, members } from "@/lib/team-data";

export const metadata: Metadata = {
  title: "About - DeltaX",
  description: "Learn about DeltaX and our mission to help businesses scale with AI.",
};

const PILLAR_COLORS: Record<string, string> = {
  deltax: "#6366F1",
  core: "#14B8A6",
  code: "#3B82F6",
  scale: "#22C55E",
  style: "#A855F7",
};

const values = [
  {
    title: "Developer-first",
    description: "Every decision we make starts with the developer experience. We build tools we want to use ourselves.",
  },
  {
    title: "Speed matters",
    description: "Fast feedback loops lead to better products. We optimize for velocity at every level.",
  },
  {
    title: "Open by default",
    description: "We believe in transparency. Our roadmap, documentation, and community are open to all.",
  },
  {
    title: "Quality over features",
    description: "We ship fewer things that work perfectly, rather than many things that work okay.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="section content-width text-center">
          <span className="text-label mb-6 block">About Us</span>
          <h1 className="text-h1 mb-8 max-w-3xl mx-auto text-balance">
            Building the future of{" "}
            <span className="text-[var(--accent)]">developer tools</span>
          </h1>
          <p className="text-body max-w-2xl mx-auto">
            DeltaX was founded by developers who were tired of stitching together 
            dozens of tools to ship a single feature. We&apos;re building the unified 
            platform we always wished existed.
          </p>
        </section>

        {/* Values */}
        <section className="section content-width">
          <h2 className="text-h2 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Systems-first",
                description: "Every business is a system. We design the machine before writing a single line of code.",
              },
              {
                title: "10x return",
                description: "Every solution must return at least 10 times its cost. That's our scoping standard.",
              },
              {
                title: "Founder mindset",
                description: "We build like founders who own the business. No shortcuts, no handoffs.",
              },
              {
                title: "4 engines, one machine",
                description: "CoreXs, CodeXs, ScaleXs, StyleXs - all working together as a unified system.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-6 border-subtle rounded-xl hover:bg-[var(--bg-surface)]/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-body text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team - Founders */}
        <section className="section content-width">
          <h2 className="text-h2 text-center mb-4">Founders</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {founders.map((member) => (
              <div
                key={member.name}
                className="text-center p-6 border-subtle rounded-xl"
              >
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ 
                    backgroundColor: `${PILLAR_COLORS[member.pillar]}20`,
                    border: `2px solid ${PILLAR_COLORS[member.pillar]}40`
                  }}
                >
                  <span 
                    className="text-2xl font-bold"
                    style={{ color: PILLAR_COLORS[member.pillar] }}
                  >
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p 
                  className="text-sm mb-2"
                  style={{ color: PILLAR_COLORS[member.pillar] }}
                >
                  {member.role}
                </p>
                <div 
                  className="inline-block px-2 py-0.5 rounded text-xs font-medium"
                  style={{ 
                    backgroundColor: `${PILLAR_COLORS[member.pillar]}15`,
                    color: PILLAR_COLORS[member.pillar]
                  }}
                >
                  {member.pillar.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team - Leadership */}
        <section className="section content-width">
          <h2 className="text-h2 text-center mb-4">Leadership</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {leaders.map((member) => (
              <div
                key={member.name}
                className="text-center p-5 border-subtle rounded-xl"
              >
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ 
                    backgroundColor: `${PILLAR_COLORS[member.pillar]}15`,
                    border: `1px solid ${PILLAR_COLORS[member.pillar]}30`
                  }}
                >
                  <span 
                    className="text-xl font-bold"
                    style={{ color: PILLAR_COLORS[member.pillar] }}
                  >
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mb-2">{member.role}</p>
                <div 
                  className="inline-block px-2 py-0.5 rounded text-[10px] font-medium"
                  style={{ 
                    backgroundColor: `${PILLAR_COLORS[member.pillar]}10`,
                    color: PILLAR_COLORS[member.pillar]
                  }}
                >
                  {member.pillar.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team - Members */}
        <section className="section content-width">
          <h2 className="text-h2 text-center mb-4">The Team</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {members.map((member) => (
              <div
                key={member.name}
                className="text-center p-4 border border-white/5 rounded-lg hover:border-white/10 transition-colors"
              >
                <div 
                  className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center"
                  style={{ 
                    backgroundColor: `${PILLAR_COLORS[member.pillar]}10`,
                    border: `1px solid ${PILLAR_COLORS[member.pillar]}20`
                  }}
                >
                  <span 
                    className="text-lg font-bold"
                    style={{ color: PILLAR_COLORS[member.pillar] }}
                  >
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-white mb-0.5">
                  {member.name}
                </h3>
                <p className="text-xs text-[var(--text-secondary)]/70">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="section content-width">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-white mb-2">2026</div>
              <div className="text-[var(--text-secondary)]">Founded</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-white mb-2">{team.length}+</div>
              <div className="text-[var(--text-secondary)]">Team members</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-white mb-2">4</div>
              <div className="text-[var(--text-secondary)]">Core Engines</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-white mb-2">10x</div>
              <div className="text-[var(--text-secondary)]">ROI Standard</div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
