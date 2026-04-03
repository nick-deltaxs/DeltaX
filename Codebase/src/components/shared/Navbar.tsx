"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
import { Button } from "@/components/ui/Button";

const PILLARS = [
  {
    name: "CoreXs",
    description: "Strategy & Audit",
    href: "#",
    tab: "core",
    color: "text-core-bright",
    icon: "core",
  },
  {
    name: "CodeXs",
    description: "Engineering & Build",
    href: "#",
    tab: "code",
    color: "text-code-bright",
    icon: "code",
  },
  {
    name: "ScaleXs",
    description: "Growth & Marketing",
    href: "#",
    tab: "scale",
    color: "text-scale-bright",
    icon: "scale",
  },
  {
    name: "StyleXs",
    description: "Design & Brand",
    href: "#",
    tab: "style",
    color: "text-style-bright",
    icon: "style",
  },
] as const;

// NEXT-GEN Pillar Icons with circuit/futuristic aesthetic
function PillarIcon({ icon, className, isActive }: { icon: string; className?: string; isActive?: boolean }) {
  const size = 28;
  const glowFilter = isActive ? "drop-shadow(0 0 6px currentColor)" : "none";
  
  if (icon === "core") {
    // CoreXs - Hexagonal core with energy pulse
    return (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className} style={{ filter: glowFilter }}>
        <defs>
          <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A9BBF" />
            <stop offset="100%" stopColor="#0d4f61" />
          </linearGradient>
        </defs>
        {/* Outer hexagon */}
        <path 
          d="M14 2L24 8.5V19.5L14 26L4 19.5V8.5L14 2Z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="url(#coreGrad)"
          fillOpacity="0.3"
        />
        {/* Inner core dot */}
        <circle cx="14" cy="14" r="4" fill="currentColor" />
        {/* Circuit trace lines */}
        <path d="M14 6V10M14 18V22M8 11L11 13M17 15L20 17" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
      </svg>
    );
  }
  if (icon === "code") {
    // CodeXs - Processor/circuit board style
    return (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className} style={{ filter: glowFilter }}>
        <defs>
          <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A8A8A" />
            <stop offset="100%" stopColor="#4A4A4A" />
          </linearGradient>
        </defs>
        {/* Chip outline */}
        <rect x="5" y="5" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" fill="url(#codeGrad)" fillOpacity="0.3" />
        {/* Inner processor core */}
        <rect x="10" y="10" width="8" height="8" rx="1" fill="currentColor" />
        {/* Circuit pins */}
        <path d="M9 2V5M14 2V5M19 2V5M9 23V26M14 23V26M19 23V26M2 9H5M2 14H5M2 19H5M23 9H26M23 14H26M23 19H26" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7" />
      </svg>
    );
  }
  if (icon === "scale") {
    // ScaleXs - Growth graph/signal tower style
    return (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className} style={{ filter: glowFilter }}>
        <defs>
          <linearGradient id="scaleGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#D94040" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#D94040" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Base tower */}
        <path d="M14 24V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Signal bars */}
        <path d="M8 20C8 16 10 14 14 14C18 14 20 16 20 20" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M4 16C4 10 8 6 14 6C20 6 24 10 24 16" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M2 10C2 4 7 2 14 2C21 2 26 4 26 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Top beacon dot */}
        <circle cx="14" cy="4" r="2" fill="currentColor">
          <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    );
  }
  // StyleXs - Geometric design system grid
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className} style={{ filter: glowFilter }}>
      <defs>
        <linearGradient id="styleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6E75FF" />
          <stop offset="100%" stopColor="#3d42b0" />
        </linearGradient>
      </defs>
      {/* Grid frame */}
      <rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="url(#styleGrad)" fillOpacity="0.3" />
      <rect x="15" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="url(#styleGrad)" fillOpacity="0.3" />
      <rect x="3" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="url(#styleGrad)" fillOpacity="0.3" />
      <rect x="15" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="url(#styleGrad)" fillOpacity="0.3" />
      {/* Center connector */}
      <circle cx="14" cy="14" r="2" fill="currentColor" />
    </svg>
  );
}

export function Navbar() {
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

  // Handle service click with tab navigation - points to Ecosystem section
  const handleServiceClick = useCallback((tab: string, closeMenu: () => void) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      closeMenu();
      router.push(`/?tab=${tab}#ecosystem`);
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
            ? "bg-primary/85 backdrop-blur-[12px] border-b border-elevated/50"
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
            <DeltaXLogo size={32} className="text-text-hero" />
            <span className="font-display text-[16px] text-text-hero tracking-[0.08em] uppercase ml-2">
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
                className="font-body text-[16px] text-text-secondary hover:text-text-body transition-colors duration-150 flex items-center gap-1.5 cursor-pointer"
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
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-secondary border border-elevated rounded-xl p-5 shadow-2xl"
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
                        className="flex items-center gap-3 rounded-lg p-4 hover:bg-tertiary transition-colors duration-200 group"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-tertiary border border-elevated flex items-center justify-center ${pillar.color} group-hover:border-current transition-colors`}>
                          <PillarIcon icon={pillar.icon} />
                        </div>
                        <div>
                          <span className="font-body text-[15px] font-medium text-text-hero block">
                            {pillar.name}
                          </span>
                          <span className="font-body text-[13px] text-text-secondary">
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
              className="font-body text-[16px] text-text-secondary hover:text-text-body transition-colors duration-150"
            >
              About
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="font-body text-[16px] text-text-secondary hover:text-text-body transition-colors duration-150"
            >
              Contact
            </Link>
          </nav>

          {/* --- Desktop CTA --- */}
          <div className="hidden md:block shrink-0">
            <Button variant="primary" size="small" href="/contact">
              Start a Project
            </Button>
          </div>

          {/* --- Mobile hamburger --- */}
          <button
            ref={hamburgerRef}
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-label="Open menu"
            className="md:hidden w-11 h-11 flex items-center justify-center text-text-body"
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
          className="fixed inset-0 z-50 bg-primary flex flex-col"
        >
          {/* Top bar with close */}
          <div className="h-16 flex items-center justify-between px-6 shrink-0">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-2.5"
              aria-label="DeltaX home"
            >
              <DeltaXLogo size={32} className="text-text-hero" />
              <span className="font-display text-[16px] text-text-hero tracking-[0.08em] uppercase ml-2">
                DELTAX
              </span>
            </Link>
            <button
              onClick={closeMobileMenu}
              aria-label="Close menu"
              className="w-11 h-11 flex items-center justify-center text-text-body"
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
              <Button
                variant="primary"
                size="large"
                href="/contact"
                className="w-full"
              >
                Start a Project
              </Button>
            </div>

            {/* Services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((o) => !o)}
                aria-expanded={mobileServicesOpen}
                className="w-full h-12 flex items-center justify-between font-body text-[18px] text-text-body"
              >
                Services
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className={`transition-transform duration-200 text-text-muted ${
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
                      className="flex items-center gap-3 h-11 font-body text-[16px] text-text-secondary hover:text-text-body transition-colors duration-150"
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
              className="h-12 flex items-center font-body text-[18px] text-text-body"
            >
              About
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="h-12 flex items-center font-body text-[18px] text-text-body"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
