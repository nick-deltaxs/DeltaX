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
      <h4 className="font-body text-[14px] uppercase font-semibold text-text-secondary mb-4">
        {title}
      </h4>
      <ul className="flex flex-col">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-body text-[14px] leading-[2] text-text-muted hover:text-text-body transition-colors duration-150"
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
    <footer className="bg-deep pt-16 pb-8" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-6">
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 md:grid-cols-[35%_21%_21%_21%] gap-8"
        >
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <DeltaXLogo size={24} className="text-text-muted" />
            <p className="font-body text-[14px] text-text-muted mt-3">
              thesx.co
            </p>
            <a
              href="mailto:hello@thesx.co"
              className="font-body text-[14px] text-accent-gold hover:underline mt-1 inline-block"
            >
              hello@thesx.co
            </a>
          </div>

          {/* Services */}
          <FooterLinkList title="Services" links={SERVICES} />

          {/* Company */}
          <FooterLinkList title="Company" links={COMPANY} />

          {/* Legal */}
          <FooterLinkList title="Legal" links={LEGAL} />
        </nav>

        {/* Divider */}
        <div className="border-t border-elevated mt-12 mb-6" />

        {/* Copyright */}
        <p className="font-body text-[12px] text-text-muted text-center">
          &copy; 2026 DeltaX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
