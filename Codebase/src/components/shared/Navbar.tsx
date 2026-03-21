"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  
  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsDropdownOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      menuItemsRef.current[0]?.focus();
    }
  };

  const handleMenuItemKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Escape") {
      setIsDropdownOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % menuItemsRef.current.length;
      menuItemsRef.current[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = index === 0 ? menuItemsRef.current.length - 1 : index - 1;
      menuItemsRef.current[prevIndex]?.focus();
    }
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const mobileMenuItems = [
    { label: "About", href: "/about" },
    { label: "Core", href: "/#core", targetId: "core" },
    { label: "Code", href: "/#code", targetId: "code" },
    { label: "Scale", href: "/#scale", targetId: "scale" },
    { label: "Style", href: "/#style", targetId: "style" },
    { label: "Contact", href: "/contact" },
    { label: "JOIN WAITLIST", href: "/#cta", targetId: "cta", isCTA: true },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ease-in-out ${
          scrolled ? "bg-primary/80 backdrop-blur-lg border-b border-white/[0.06]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="DeltaX home" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-core-bright focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded">
            <DeltaXLogo size={35} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {/* About Link */}
            <span className="group relative">
              <Link
                href="/about"
                className={`font-body text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-core-bright focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded px-1 py-0.5 ${
                  pathname === "/about" ? "text-core-bright" : "text-text-dim hover:text-text-body"
                }`}
              >
                About
              </Link>
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-core-bright transition-all duration-200 ${
                  pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </span>

            {/* Services Dropdown */}
            <div
              ref={dropdownContainerRef}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
              onKeyDown={handleDropdownKeyDown}
              className="relative"
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsDropdownOpen(!isDropdownOpen);
                  }
                }}
                aria-expanded={isDropdownOpen}
                aria-haspopup="menu"
                className="font-body text-sm text-text-dim hover:text-text-body transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-core-bright focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded px-1 py-0.5"
              >
                Services
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                >
                  <path
                    d="M2 4l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                  role="menu"
                  className="absolute top-full left-0 mt-2 min-w-[200px] bg-secondary border border-white/[0.06] rounded-lg py-2 shadow-xl"
                >
                  <Link
                    href="/#core"
                    role="menuitem"
                    tabIndex={isDropdownOpen ? 0 : -1}
                    ref={(el) => { menuItemsRef.current[0] = el; }}
                    onKeyDown={(e) => handleMenuItemKeyDown(e, 0)}
                    onClick={(e) => handleSmoothScroll(e, "core")}
                    className="block px-4 py-2 text-sm font-body text-text-dim hover:text-text-body hover:bg-white/[0.03] transition-colors duration-150 border-l-2 border-transparent hover:border-core-bright"
                  >
                    CoreX
                  </Link>
                  <Link
                    href="/#code"
                    role="menuitem"
                    tabIndex={isDropdownOpen ? 0 : -1}
                    ref={(el) => { menuItemsRef.current[1] = el; }}
                    onKeyDown={(e) => handleMenuItemKeyDown(e, 1)}
                    onClick={(e) => handleSmoothScroll(e, "code")}
                    className="block px-4 py-2 text-sm font-body text-text-dim hover:text-text-body hover:bg-white/[0.03] transition-colors duration-150 border-l-2 border-transparent hover:border-code-bright"
                  >
                    CodeX
                  </Link>
                  <Link
                    href="/#scale"
                    role="menuitem"
                    tabIndex={isDropdownOpen ? 0 : -1}
                    ref={(el) => { menuItemsRef.current[2] = el; }}
                    onKeyDown={(e) => handleMenuItemKeyDown(e, 2)}
                    onClick={(e) => handleSmoothScroll(e, "scale")}
                    className="block px-4 py-2 text-sm font-body text-text-dim hover:text-text-body hover:bg-white/[0.03] transition-colors duration-150 border-l-2 border-transparent hover:border-scale-bright"
                  >
                    ScaleX
                  </Link>
                  <Link
                    href="/#style"
                    role="menuitem"
                    tabIndex={isDropdownOpen ? 0 : -1}
                    ref={(el) => { menuItemsRef.current[3] = el; }}
                    onKeyDown={(e) => handleMenuItemKeyDown(e, 3)}
                    onClick={(e) => handleSmoothScroll(e, "style")}
                    className="block px-4 py-2 text-sm font-body text-text-dim hover:text-text-body hover:bg-white/[0.03] transition-colors duration-150 border-l-2 border-transparent hover:border-style-bright"
                  >
                    StyleX
                  </Link>
                </div>
              )}
            </div>

            {/* Contact Link */}
            <span className="group relative">
              <Link
                href="/contact"
                className={`font-body text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-core-bright focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded px-1 py-0.5 ${
                  pathname === "/contact" ? "text-core-bright" : "text-text-dim hover:text-text-body"
                }`}
              >
                Contact
              </Link>
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-core-bright transition-all duration-200 ${
                  pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </span>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/#cta"
              onClick={(e) => handleSmoothScroll(e, "cta")}
              className="bg-core-bright text-primary font-semibold text-sm rounded-full py-2 px-6 hover:opacity-90 transition-opacity duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-core-bright focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              JOIN WAITLIST
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-text-body focus:outline-none focus-visible:ring-2 focus-visible:ring-core-bright focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
            aria-label="Open mobile menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center gap-8">
          {/* Close Button */}
          <button
            onClick={closeMobileMenu}
            className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center text-text-body focus:outline-none focus-visible:ring-2 focus-visible:ring-core-bright focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
            aria-label="Close mobile menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>

          {/* Mobile Menu Items */}
          {mobileMenuItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={item.href}
                onClick={(e) => {
                  closeMobileMenu();
                  if (item.targetId) {
                    handleSmoothScroll(e, item.targetId);
                  }
                }}
                className={`${
                  item.isCTA
                    ? "bg-core-bright text-primary font-semibold text-sm rounded-full py-3 px-8 mt-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-core-bright focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                    : "font-body text-lg text-text-dim hover:text-text-body transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-core-bright focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded px-2 py-1"
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
}
