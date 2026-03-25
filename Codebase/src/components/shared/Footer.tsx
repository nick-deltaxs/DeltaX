import Link from "next/link";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";

const SERVICES = [
  { label: "CoreXs", href: "/#system" },
  { label: "CodeXs", href: "/#system" },
  { label: "ScaleXs", href: "/#system" },
  { label: "StyleXs", href: "/#system" },
];

const COMPANY = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const LEGAL = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

function FooterLinkList({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/30 mb-4">
        {title}
      </h4>
      <ul className="flex flex-col">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-body text-[14px] leading-[2] text-white/60 hover:text-white/90 transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-deep" role="contentinfo">
      {/* Top separator */}
      <div className="w-full h-px bg-white/[0.08]" />

      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-1 md:grid-cols-[35%_21%_21%_21%] items-start gap-10 md:gap-8"
        >
          {/* Brand column */}
          <div className="flex flex-col gap-2">
            <DeltaXLogo size={24} className="text-white/50 block" />
            <p className="font-body text-[14px] font-medium text-white/[0.85] mt-2">
              thesx.co
            </p>
            <a
              href="mailto:hello@thesx.co"
              className="font-body text-[13px] text-white/50 hover:text-white/[0.85] transition-colors duration-200"
            >
              hello@thesx.co
            </a>
          </div>

          {/* Link columns — 3-col sub-grid on mobile */}
          <div className="col-span-1 md:contents grid grid-cols-3 gap-8">
            <FooterLinkList title="Services" links={SERVICES} />
            <FooterLinkList title="Company" links={COMPANY} />
            <FooterLinkList title="Legal" links={LEGAL} />
          </div>
        </nav>

        {/* Divider */}
        <div className="border-t border-white/[0.08] mt-12 mb-6" />

        {/* Copyright */}
        <p className="font-body text-[12px] text-white/30 text-center">
          &copy; 2026 DeltaX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
