"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";

const workflowRows = [
  { before: "Manual invoicing", after: "Auto-generated" },
  { before: "Spreadsheet CRM", after: "Integrated pipeline" },
  { before: "Email onboarding", after: "Automated sequences" },
  { before: "Monthly reporting", after: "Real-time dashboard" },
];

export function EngineCode() {
  return (
    <div id="code" className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div className="mb-8 lg:mb-12">
        <ScrollReveal delay={0} direction="up">
          <SectionLabel color="code">THE MACHINE</SectionLabel>
          <p className="font-display text-sm text-text-dim uppercase tracking-wider mt-2">
            Automate. Build. Ship.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1} direction="up">
        <Card variant="left-accent" accentColor="code">
          <div className="p-6 lg:p-8">
            {workflowRows.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className={`flex items-center gap-4 lg:gap-6 py-3 ${
                  index < workflowRows.length - 1 ? "border-b" : ""
                }`}
                style={{ borderColor: index < workflowRows.length - 1 ? "rgba(255, 255, 255, 0.04)" : undefined }}
              >
                <span className="font-mono text-sm text-text-muted line-through flex-1 min-w-[140px] lg:min-w-[200px]">
                  {row.before}
                </span>
                <span className="font-mono text-sm text-code-bright flex-shrink-0">→</span>
                <span className="font-mono text-sm text-text-body flex-1 min-w-[140px] lg:min-w-[200px]">
                  {row.after}
                </span>
              </motion.div>
            ))}
          </div>
        </Card>
      </ScrollReveal>

      <ScrollReveal delay={0.2} direction="up">
        <h3 className="font-display text-xl lg:text-2xl text-text-hero mt-8">
          X CODE — Technology & Automation
        </h3>
        
        <p className="font-body text-base text-text-body mt-4 leading-relaxed max-w-2xl">
          We build the infrastructure that eliminates manual operations. Automation, integrations, backend systems — engineered to run without you.
        </p>
        
        <p className="font-body text-sm text-text-muted mt-4">
          AI Automation · CRM & Integrations · Backend Systems
        </p>
      </ScrollReveal>
    </div>
  );
}
