"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
import { Button } from "@/components/ui/Button";

const serviceLinks = [
  { label: "CoreX", href: "/#core", hoverClass: "hover:border-l-core-bright" },
  { label: "CodeX", href: "/#code", hoverClass: "hover:border-l-code-bright" },
  { label: "ScaleX", href: "/#scale", hoverClass: "hover:border-l-scale-bright" },
  { label: "StyleX", href: "/#style", hoverClass: "hover:border-l-style-bright" },
] as const;

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

const mobileLinks = [
  { label: "About", href: "/about" },
  ...serviceLinks.map((s) => ({ label: s.label, href: s.href })),
  { label: "Contact", href: "/contact" },
];

const overlayVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, y: "-100%", transition: { duration: 0.25, ease: "easeIn" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.3 },
  }),
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    if (isMobileOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMobileOpen, closeMobile]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 h-16 px-6 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-bg-primary/80 backdrop-blur-lg border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        {/* Left — Logo */}
        <Link href="/" aria-label="DeltaX home">
          <DeltaXLogo size={35} />
        </Link>

        {/* Center — Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-sm text-text-dim hover:text-text-body transition-colors"
          >
            About
          </Link>

          {/* Services dropdown */}
          <div className="relative group">
            <button
              type="button"
              className="text-sm text-text-dim hover:text-text-body transition-colors"
            >
              Services
            </button>
            <div className="absolute top-full mt-2 bg-bg-secondary border border-white/[0.06] rounded-lg p-2 min-w-[200px] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {serviceLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block py-2 px-3 rounded text-sm text-text-dim hover:text-text-body hover:bg-white/[0.04] transition-all border-l-2 border-transparent ${item.hoverClass}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="text-sm text-text-dim hover:text-text-body transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Right — Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/#cta">
            <Button size="small">JOIN WAITLIST</Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsMobileOpen(true)}
          className="md:hidden flex items-center justify-center w-11 h-11"
          aria-label="Open menu"
        >
          <div className="flex flex-col gap-[5px]">
            <span className="block w-6 h-[2px] bg-text-body" />
            <span className="block w-6 h-[2px] bg-text-body" />
            <span className="block w-6 h-[2px] bg-text-body" />
          </div>
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            key="mobile-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-bg-primary z-50 flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-end px-6 h-16 items-center">
              <button
                type="button"
                onClick={closeMobile}
                className="flex items-center justify-center w-11 h-11"
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-text-body"
                >
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {mobileLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className="text-2xl text-text-body hover:text-core-bright transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              custom={mobileLinks.length}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="px-6 pb-12"
            >
              <Link href="/#cta" onClick={closeMobile} className="block">
                <Button className="w-full">JOIN WAITLIST</Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
