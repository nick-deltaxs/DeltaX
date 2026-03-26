"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";

const SERVICES = [
  { label: "CoreX", href: "#", tab: "core" },
  { label: "CodeX", href: "#", tab: "code" },
  { label: "ScaleX", href: "#", tab: "scale" },
  { label: "StyleX", href: "#", tab: "style" },
];

const COMPANY = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const LEGAL = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const EASE_OUT: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

function FooterServices({ delay }: { delay: number }) {
  const router = useRouter();

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, tab: string) => {
    e.preventDefault();
    // Navigate to home with tab param and system section hash
    router.push(`/?tab=${tab}#system`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: EASE_OUT, delay }}
    >
      <h4 className="font-body text-sm font-semibold text-text-body mb-4">
        Services
      </h4>
      <ul className="flex flex-col gap-2">
        {SERVICES.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              onClick={(e) => handleServiceClick(e, link.tab)}
              className="group relative inline-block font-body text-sm text-text-dim hover:text-text-body transition-colors duration-200"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-[1px] bg-core-bright w-0 group-hover:w-full transition-all duration-200" />
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function FooterLinkList({
  title,
  links,
  delay,
}: {
  title: string;
  links: { label: string; href: string }[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: EASE_OUT, delay }}
    >
      <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted mb-4">
        {title}
      </h4>
      <ul className="flex flex-col">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-body text-[14px] leading-[2] text-text-secondary hover:text-text-body transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-primary overflow-hidden" role="contentinfo">
      {/* Teal radial glow - centered */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(26,155,191,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Top separator */}
      <div className="w-full h-px bg-elevated" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-16 pb-8">
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-1 md:grid-cols-[35%_21%_21%_21%] items-start gap-10 md:gap-8"
        >
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_OUT, delay: 0 }}
            className="flex flex-col gap-2"
          >
            <DeltaXLogo size={24} className="text-text-secondary block" />
            <p className="font-body text-[14px] font-medium text-text-body mt-2">
              thesx.co
            </p>
            <a
              href="mailto:hello@thesx.co"
              className="font-body text-[13px] text-text-muted hover:text-text-body transition-colors duration-200"
            >
              hello@thesx.co
            </a>
          </motion.div>

          {/* Link columns */}
          <div className="col-span-1 md:contents grid grid-cols-3 gap-8">
            <FooterServices delay={0.1} />
            <FooterLinkList title="Company" links={COMPANY} delay={0.2} />
            <FooterLinkList title="Legal" links={LEGAL} delay={0.3} />
          </div>
        </nav>

        {/* Divider */}
        <div className="border-t border-elevated mt-12 mb-6" />

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.4 }}
          className="font-body text-[12px] text-text-muted text-center"
        >
          &copy; 2026 DeltaX. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
