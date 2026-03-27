"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DeltaXLogo } from "@/components/ui/delta-x-logo";
import MagneticButton from "@/components/magnetic-button";

const PILLARS = [
  {
    name: "CoreXs",
    description: "Strategy & Audit",
    href: "#",
    tab: "core",
    color: "text-amber-400",
    icon: "core",
  },
  {
    name: "CodeXs",
    description: "Engineering & Build",
    href: "#",
    tab: "code",
    color: "text-blue-400",
    icon: "code",
  },
  {
    name: "ScaleXs",
    description: "Growth & Marketing",
    href: "#",
    tab: "scale",
    color: "text-green-400",
    icon: "scale",
  },
  {
    name: "StyleXs",
    description: "Design & Brand",
    href: "#",
    tab: "style",
    color: "text-purple-400",
    icon: "style",
  },
] as const;

function PillarIcon({ icon, className }: { icon: string; className?: string }) {
  const size = 28;
  
  const iconConfig: Record<string, { text: string; gradient: string[] }> = {
    core: { text: "CX", gradient: ["#14B8A6", "#0D9488"] }, // teal
    code: { text: "</>", gradient: ["#3B82F6", "#2563EB"] }, // blue
    scale: { text: "SX", gradient: ["#22C55E", "#16A34A"] }, // green
    style: { text: "SX", gradient: ["#A855F7", "#6366F1"] }, // purple
  };

  const config = iconConfig[icon] || iconConfig.style;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id={`${icon}Gradient`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={config.gradient[0]} />
          <stop offset="100%" stopColor={config.gradient[1]} />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={`url(#${icon}Gradient)`}
        fontSize={icon === "code" ? "10" : "12"}
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        {config.text}
      </text>
    </svg>
  );
}

export default function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const megaContainerRef = useRef<HTMLDivElement>(null);
  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const megaItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // --- Scroll detection ---
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- Body lock when mobile menu open ---
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // --- Focus trap for mobile menu ---
  useEffect(() => {
    if (!mobileOpen) return;

    const menu = mobileMenuRef.current;
    if (!menu) return;

    const getFocusable = () =>
      menu.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );

    // Focus first element on open
    const timer = setTimeout(() => {
      const items = getFocusable();
      if (items.length > 0) items[0].focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobileMenu();
        return;
      }
      if (e.key !== "Tab") return;

      const items = getFocusable();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  // --- Mega-menu hover with delay ---
  const megaEnter = useCallback(() => {
    if (megaTimeoutRef.current) {
      clearTimeout(megaTimeoutRef.current);
      megaTimeoutRef.current = null;
    }
    setMegaOpen(true);
  }, []);

  const megaLeave = useCallback(() => {
    megaTimeoutRef.current = setTimeout(() => setMegaOpen(false), 150);
  }, []);

  // --- Mega-menu keyboard ---
  const handleMegaTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setMegaOpen(false);
    } else if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setMegaOpen(true);
      setTimeout(() => megaItemsRef.current[0]?.focus(), 0);
    }
  };

  const handleMegaItemKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Escape") {
      setMegaOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = (index + 1) % PILLARS.length;
      megaItemsRef.current[next]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = index === 0 ? PILLARS.length - 1 : index - 1;
      megaItemsRef.current[prev]?.focus();
    }
  };

  // Handle service click with tab navigation
  const handleServiceClick = useCallback((tab: string, closeMenu: () => void) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      closeMenu();
      router.push(`/?tab=${tab}#system`);
    };
  }, [router]);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    // Return focus to hamburger
    setTimeout(() => hamburgerRef.current?.focus(), 0);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ease-out ${
          scrolled
            ? "bg-[var(--bg-base)]/85 backdrop-blur-[12px] border-b border-[var(--border-subtle)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          {/* --- Logo + wordmark --- */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="DeltaX home"
          >
            <DeltaXLogo size={32} className="text-white" />
            <span className="font-semibold text-[16px] text-white tracking-[0.08em] uppercase ml-2">
              DELTAX
            </span>
          </Link>

          {/* --- Desktop nav (center) --- */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {/* Services with mega-menu */}
            <div
              ref={megaContainerRef}
              onMouseEnter={megaEnter}
              onMouseLeave={megaLeave}
              className="relative"
            >
              <button
                onClick={() => setMegaOpen((o) => !o)}
                onKeyDown={handleMegaTriggerKeyDown}
                aria-expanded={megaOpen}
                aria-haspopup="true"
                className="text-[16px] text-[var(--text-secondary)] hover:text-white transition-colors duration-150 flex items-center gap-1.5 cursor-pointer"
              >
                Services
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                >
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Mega-menu panel */}
              {megaOpen && (
                <div
                  role="menu"
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl p-5 shadow-2xl"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {PILLARS.map((pillar, i) => (
                      <Link
                        key={pillar.name}
                        href="#"
                        role="menuitem"
                        tabIndex={0}
                        ref={(el) => {
                          megaItemsRef.current[i] = el;
                        }}
                        onKeyDown={(e) => handleMegaItemKeyDown(e, i)}
                        onClick={handleServiceClick(pillar.tab, () => setMegaOpen(false))}
                        className="flex items-center gap-3 rounded-lg p-4 hover:bg-[var(--bg-base)] transition-colors duration-200 group"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center justify-center ${pillar.color} group-hover:border-current transition-colors`}>
                          <PillarIcon icon={pillar.icon} />
                        </div>
                        <div>
                          <span className="text-[15px] font-medium text-white block">
                            {pillar.name}
                          </span>
                          <span className="text-[13px] text-[var(--text-secondary)]">
                            {pillar.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* About */}
            <Link
              href="/about"
              className="text-[16px] text-[var(--text-secondary)] hover:text-white transition-colors duration-150"
            >
              About
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="text-[16px] text-[var(--text-secondary)] hover:text-white transition-colors duration-150"
            >
              Contact
            </Link>
          </nav>

          {/* --- Desktop CTA --- */}
          <div className="hidden md:block shrink-0">
            <Link href="/contact">
              <MagneticButton className="px-6 py-2 text-sm">
                Start a Project
              </MagneticButton>
            </Link>
          </div>

          {/* --- Mobile hamburger --- */}
          <button
            ref={hamburgerRef}
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-label="Open menu"
            className="md:hidden w-11 h-11 flex items-center justify-center text-white"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* --- Mobile overlay --- */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 bg-[var(--bg-base)] flex flex-col"
        >
          {/* Top bar with close */}
          <div className="h-16 flex items-center justify-between px-6 shrink-0">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-2.5"
              aria-label="DeltaX home"
            >
              <DeltaXLogo size={32} className="text-white" />
              <span className="font-semibold text-[16px] text-white tracking-[0.08em] uppercase ml-2">
                DELTAX
              </span>
            </Link>
            <button
              onClick={closeMobileMenu}
              aria-label="Close menu"
              className="w-11 h-11 flex items-center justify-center text-white"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
          </div>

          {/* Menu content */}
          <nav className="flex-1 px-6 pt-8 flex flex-col gap-2" aria-label="Mobile navigation">
            {/* CTA first */}
            <div className="mb-6">
              <Link href="/contact">
                <MagneticButton className="w-full py-4 text-base">
                  Start a Project
                </MagneticButton>
              </Link>
            </div>

            {/* Services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((o) => !o)}
                aria-expanded={mobileServicesOpen}
                className="w-full h-12 flex items-center justify-between text-[18px] text-white"
              >
                Services
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className={`transition-transform duration-200 text-[var(--text-secondary)] ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M3 6L8 11L13 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 flex flex-col gap-1 pb-2">
                  {PILLARS.map((pillar) => (
                    <Link
                      key={pillar.name}
                      href="#"
                      onClick={handleServiceClick(pillar.tab, closeMobileMenu)}
                      className="flex items-center gap-3 h-11 text-[16px] text-[var(--text-secondary)] hover:text-white transition-colors duration-150"
                    >
                      <span className={pillar.color}>
                        <PillarIcon icon={pillar.icon} className="!w-5 !h-5" />
                      </span>
                      {pillar.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About */}
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="h-12 flex items-center text-[18px] text-white"
            >
              About
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="h-12 flex items-center text-[18px] text-white"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
