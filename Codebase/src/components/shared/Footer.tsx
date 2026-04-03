"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";

const SERVICES = [
  { label: "CoreX", href: "#", tab: "core", color: "#1A9BBF" },
  { label: "CodeX", href: "#", tab: "code", color: "#8A8A8A" },
  { label: "ScaleX", href: "#", tab: "scale", color: "#D94040" },
  { label: "StyleX", href: "#", tab: "style", color: "#6E75FF" },
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

// Grid background component (from Hero)
function GridBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Primary grid layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(157, 125, 232, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(157, 125, 232, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          transform: "rotateX(60deg) translateZ(-100px)",
          transformOrigin: "center center",
        }}
        animate={{
          opacity: [0.15, 0.35, 0.15],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary offset grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(157, 125, 232, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(157, 125, 232, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          transform: "rotateX(60deg) translateZ(-200px) translateY(25px)",
          transformOrigin: "center center",
        }}
        animate={{
          opacity: [0.1, 0.25, 0.1],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 11, 0.6) 100%)",
        }}
      />
    </div>
  );
}

// Night sky stars component (from Hero)
function NightSky() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Deep space gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at bottom, #0D0D12 0%, #080809 50%, #050508 100%)",
        }}
      />

      {/* Stars container */}
      <div className="absolute inset-0">
        {/* Large bright stars */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 2,
              height: Math.random() * 2 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              background: "white",
              boxShadow: "0 0 6px rgba(255,255,255,0.6), 0 0 12px rgba(255,255,255,0.3)",
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Medium stars */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`medium-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: 1,
              height: 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Purple nebula clouds */}
        <motion.div
          className="absolute w-[400px] h-[300px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(ellipse, rgba(157,125,232,0.3) 0%, transparent 70%)",
            filter: "blur(60px)",
            left: "5%",
            bottom: "20%",
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[350px] h-[250px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(ellipse, rgba(77,21,154,0.25) 0%, transparent 70%)",
            filter: "blur(50px)",
            right: "10%",
            bottom: "30%",
          }}
          animate={{
            x: [0, -15, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}

function FooterServices({ delay }: { delay: number }) {
  const router = useRouter();

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, tab: string) => {
    e.preventDefault();
    router.push(`/?tab=${tab}#ecosystem`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: EASE_OUT, delay }}
    >
      <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] mb-4" style={{ color: "rgba(240,180,41,0.8)" }}>
        Services
      </h4>
      <ul className="flex flex-col gap-2">
        {SERVICES.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              onClick={(e) => handleServiceClick(e, link.tab)}
              className="group relative inline-flex items-center gap-2 font-body text-sm transition-colors duration-200"
              style={{ color: "rgba(232,232,232,0.6)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: link.color }}
              />
              <span className="group-hover:text-white transition-colors">
                {link.label}
              </span>
              <span className="absolute -bottom-0.5 left-5 h-px w-0 group-hover:w-full transition-all duration-200" style={{ background: link.color }} />
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
      <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] mb-4" style={{ color: "rgba(240,180,41,0.8)" }}>
        {title}
      </h4>
      <ul className="flex flex-col">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-body text-[14px] leading-[2] transition-colors duration-200 hover:text-white"
              style={{ color: "rgba(232,232,232,0.6)" }}
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
    <footer className="relative overflow-hidden" role="contentinfo">
      {/* Night sky background */}
      <NightSky />

      {/* Grid overlay */}
      <GridBackground />

      {/* Top separator with glow */}
      <div className="relative w-full h-px">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(157,125,232,0.3), rgba(240,180,41,0.3), rgba(157,125,232,0.3), transparent)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-16 pb-8">
        {/* System status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: "#00ff88" }} />
            <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "#00ff88" }}>
              SYSTEM ONLINE
            </span>
          </div>
          <div className="h-3 w-px bg-white/20" />
          <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "rgba(153,153,153,0.6)" }}>
            DELTAX v2.0
          </span>
        </motion.div>

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
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <DeltaXLogo size={28} className="text-white block" />
              <span className="font-display text-lg text-white">DeltaX</span>
            </div>
            <p className="font-mono text-xs tracking-wider mt-2" style={{ color: "rgba(153,153,153,0.8)" }}>
              thesx.co
            </p>
            <a
              href="mailto:hello@thesx.co"
              className="font-mono text-xs tracking-wider transition-colors duration-200 hover:text-white"
              style={{ color: "rgba(240,180,41,0.8)" }}
            >
              hello@thesx.co
            </a>

            {/* Circuit decoration */}
            <div className="mt-4 opacity-30">
              <svg width="60" height="30" viewBox="0 0 60 30">
                <circle cx="5" cy="15" r="2" fill="#f0b429" />
                <path d="M5 15 L20 15" stroke="#f0b429" strokeWidth="1" />
                <circle cx="20" cy="15" r="3" stroke="#f0b429" strokeWidth="1" fill="none" />
                <path d="M20 15 L35 15" stroke="#f0b429" strokeWidth="1" />
                <circle cx="35" cy="15" r="2" fill="#1A9BBF" />
                <path d="M35 15 L50 15" stroke="#1A9BBF" strokeWidth="1" />
                <circle cx="50" cy="15" r="2" fill="#1A9BBF" />
              </svg>
            </div>
          </motion.div>

          {/* Link columns */}
          <div className="col-span-1 md:contents grid grid-cols-3 gap-8">
            <FooterServices delay={0.1} />
            <FooterLinkList title="Company" links={COMPANY} delay={0.2} />
            <FooterLinkList title="Legal" links={LEGAL} delay={0.3} />
          </div>
        </nav>

        {/* Divider with circuit pattern */}
        <div className="relative mt-12 mb-6">
          <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-20">
            <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(157,125,232,0.5))" }} />
            <svg width="20" height="20" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="3" fill="#6E75FF" />
              <path d="M10 0 L10 7 M10 13 L10 20 M0 10 L7 10 M13 10 L20 10" stroke="#6E75FF" strokeWidth="1" />
            </svg>
            <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(157,125,232,0.5), transparent)" }} />
          </div>
          <div className="h-px bg-white/5" />
        </div>

        {/* Copyright with system info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-mono text-[11px] tracking-wider" style={{ color: "rgba(102,102,102,0.8)" }}>
            &copy; 2026 DELTAX. ALL SYSTEMS OPERATIONAL.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-wider" style={{ color: "rgba(102,102,102,0.6)" }}>
              [04] PILLARS ACTIVE
            </span>
            <div className="flex items-center gap-1">
              {SERVICES.map((s) => (
                <div
                  key={s.label}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: s.color }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
