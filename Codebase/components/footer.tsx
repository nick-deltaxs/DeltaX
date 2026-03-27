"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { DeltaXLogo } from "@/components/ui/delta-x-logo";

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

const EASE_OUT = "cubic-bezier(0.25, 0.1, 0.25, 1)";

function FooterServices({ delay }: { delay: number }) {
  const router = useRouter();

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, tab: string) => {
    e.preventDefault();
    router.push(`/?tab=${tab}#system`);
  };

  return (
    <div
      className="transition-all duration-500"
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: EASE_OUT 
      }}
    >
      <h4 className="text-sm font-semibold text-white mb-4">
        Services
      </h4>
      <ul className="flex flex-col gap-2">
        {SERVICES.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              onClick={(e) => handleServiceClick(e, link.tab)}
              className="group relative inline-block text-sm text-[var(--text-secondary)] hover:text-white transition-colors duration-200"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-[1px] bg-[var(--core-bright, #14B8A6)] w-0 group-hover:w-full transition-all duration-200" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
    <div
      className="transition-all duration-500"
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: EASE_OUT 
      }}
    >
      <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-secondary)] mb-4">
        {title}
      </h4>
      <ul className="flex flex-col">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[14px] leading-[2] text-[var(--text-secondary)] hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[var(--bg-base)] overflow-hidden" role="contentinfo">
      {/* Teal radial glow - centered */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(26,155,191,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Top separator */}
      <div className="w-full h-px bg-white/10" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-16 pb-8">
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-1 md:grid-cols-[35%_21%_21%_21%] items-start gap-10 md:gap-8"
        >
          {/* Brand column */}
          <div
            className="flex flex-col gap-2 transition-all duration-500"
            style={{ transitionTimingFunction: EASE_OUT }}
          >
            <DeltaXLogo size={24} className="text-white block" />
            <p className="text-[14px] font-medium text-white mt-2">
              thesx.co
            </p>
            <a
              href="mailto:hello@thesx.co"
              className="text-[13px] text-[var(--text-secondary)] hover:text-white transition-colors duration-200"
            >
              hello@thesx.co
            </a>
          </div>

          {/* Link columns */}
          <div className="col-span-1 md:contents grid grid-cols-3 gap-8">
            <FooterServices delay={100} />
            <FooterLinkList title="Company" links={COMPANY} delay={200} />
            <FooterLinkList title="Legal" links={LEGAL} delay={300} />
          </div>
        </nav>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 mb-6" />

        {/* Copyright */}
        <p
          className="text-[12px] text-[var(--text-secondary)] text-center transition-all duration-500"
          style={{ transitionDelay: "400ms", transitionTimingFunction: EASE_OUT }}
        >
          &copy; 2026 DeltaX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
