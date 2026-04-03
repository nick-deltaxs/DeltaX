"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const EASE_OUT = [0.25, 0.1, 0.25, 1] as const;

const ecosystemItems = [
  {
    id: "core",
    name: "CoreXs",
    subtitle: "The Audit",
    description: "Strategy & system design",
    color: "#1A9BBF",
    glowColor: "rgba(26, 155, 191, 0.4)",
  },
  {
    id: "code",
    name: "CodeXs",
    subtitle: "The Machine",
    description: "Engineering & development",
    color: "#8A8A8A",
    glowColor: "rgba(138, 138, 138, 0.4)",
  },
  {
    id: "scale",
    name: "ScaleXs",
    subtitle: "The Fuel",
    description: "Growth & acquisition",
    color: "#D94040",
    glowColor: "rgba(217, 64, 64, 0.4)",
  },
  {
    id: "style",
    name: "StyleXs",
    subtitle: "The Signal",
    description: "Design & identity",
    color: "#6E75FF",
    glowColor: "rgba(110, 117, 255, 0.4)",
  },
];

// Extended content from TheSystem section
const ecosystemDetails = {
  core: {
    fullDescription: "Every project starts with a systematic diagnosis. We map your revenue streams, team structure, operations, and bottlenecks before writing a single line of code.",
    capabilities: [
      { name: "Business Audit", detail: "Revenue, team, operations, bottleneck mapping" },
      { name: "Market Analysis", detail: "Competitive positioning and opportunity gaps" },
      { name: "System Design", detail: "Architecture before code, strategy before campaigns" },
    ],
  },
  code: {
    fullDescription: "Two development teams. One codebase. The best code wins. Nick controls quality while Team Razm and Team Bazm compete on every build.",
    capabilities: [
      { name: "Team Razm", detail: "Frontend, backend, mobile — led by Arvin" },
      { name: "Team Bazm", detail: "Same capabilities, parallel track — led by Ali" },
      { name: "Quality Gate", detail: "Every commit reviewed. Every deploy verified." },
    ],
  },
  scale: {
    fullDescription: "Growth without a system is just spending. We build pipelines that compound — paid acquisition, content, analytics, all feeding the same machine.",
    capabilities: [
      { name: "Paid Acquisition", detail: "Performance marketing with transparent ROAS" },
      { name: "Content & Social", detail: "Brand presence that builds audience over time" },
      { name: "Analytics", detail: "Decisions from data, not from gut feelings" },
    ],
  },
  style: {
    fullDescription: "Design is the first thing they see and the last thing they remember. We don't make it pretty — we make it impossible to ignore.",
    capabilities: [
      { name: "Brand Identity", detail: "Logo, colors, typography, voice — the complete system" },
      { name: "UI/UX Design", detail: "Interfaces built on research, not on trends" },
      { name: "Design Systems", detail: "Scalable, documented, consistent everywhere" },
    ],
  },
};

// Detail Modal component - positioned to the right of clicked element
function DetailModal({
  item,
  isOpen,
  onClose,
  clickPosition,
}: {
  item: typeof ecosystemItems[0] | null;
  isOpen: boolean;
  onClose: () => void;
  clickPosition: { x: number; y: number } | null;
}) {
  if (!isOpen || !item) return null;

  const details = ecosystemDetails[item.id as keyof typeof ecosystemDetails];

  // Calculate position: to the right of click, vertically centered
  const modalStyle = clickPosition ? {
    position: "fixed" as const,
    left: Math.min(clickPosition.x + 200, window.innerWidth - 400),
    top: Math.max(100, Math.min(clickPosition.y, window.innerHeight - 500)),
    transform: "translateY(-30%)",
    maxWidth: "380px",
  } : {
    position: "fixed" as const,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "380px",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal - positioned to right of click */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -20 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="z-50 w-full mx-4"
            style={modalStyle}
          >
            <div
              className="relative p-6 rounded-2xl border overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(17,17,22,0.98) 0%, rgba(10,10,11,0.99) 100%)",
                borderColor: item.color,
                boxShadow: `0 0 40px ${item.glowColor}, 0 25px 80px rgba(0,0,0,0.5)`,
              }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: item.color }}
                />
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: item.color }}>
                  {item.id.toUpperCase()}_{String(ecosystemItems.findIndex(i => i.id === item.id) + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl mb-1" style={{ color: "#FFFFFF" }}>
                {item.name}
              </h3>
              <p className="font-mono text-xs mb-3" style={{ color: item.color }}>
                {item.subtitle}
              </p>

              {/* Full description */}
              <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "rgba(232, 232, 232, 0.9)" }}>
                {details.fullDescription}
              </p>

              {/* Capabilities */}
              <div className="space-y-2">
                <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: "rgba(102, 102, 102, 0.9)" }}>
                  // Capabilities
                </p>
                {details.capabilities.map((cap, index) => (
                  <motion.div
                    key={cap.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-2 p-2 rounded-lg"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <div
                      className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: item.color }}
                    />
                    <div>
                      <p className="font-body text-xs font-medium" style={{ color: "#E8E8E8" }}>
                        {cap.name}
                      </p>
                      <p className="font-body text-[10px]" style={{ color: "rgba(153, 153, 153, 0.8)" }}>
                        {cap.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
function ConnectionLine({ 
  active, 
  delay = 0,
  color = "rgba(255,255,255,0.1)"
}: { 
  active: boolean; 
  delay?: number;
  color?: string;
}) {
  return (
    <motion.div
      className="absolute h-px"
      style={{ background: color }}
      initial={{ width: "0%", opacity: 0 }}
      animate={active ? { width: "100%", opacity: 1 } : { width: "0%", opacity: 0 }}
      transition={{ duration: 0.8, delay, ease: EASE_OUT }}
    />
  );
}

// Individual ecosystem node
function EcosystemNode({
  item,
  index,
  isActive,
  onHover,
  onClick,
  cardRef,
}: {
  item: typeof ecosystemItems[0];
  index: number;
  isActive: boolean;
  onHover: (id: string | null) => void;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  cardRef?: (el: HTMLDivElement | null) => void;
}) {
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE_OUT }}
      className="relative cursor-pointer"
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl -z-10"
        animate={{
          boxShadow: isActive
            ? `0 0 60px ${item.glowColor}, 0 0 100px ${item.glowColor}`
            : "0 0 0px transparent",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Card */}
      <motion.div
        className="relative p-6 rounded-xl border backdrop-blur-sm cursor-pointer overflow-hidden"
        style={{
          background: isActive
            ? `linear-gradient(135deg, rgba(17,17,22,0.9) 0%, ${item.glowColor.replace("0.4", "0.15")} 100%)`
            : "rgba(17, 17, 22, 0.6)",
          borderColor: isActive ? item.color : "rgba(255, 255, 255, 0.08)",
          borderWidth: isActive ? "2px" : "1px",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Animated border gradient on active */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-xl -z-10"
            style={{
              background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
              opacity: 0.3,
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* Node indicator */}
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className="w-3 h-3 rounded-full"
            style={{ background: item.color }}
            animate={isActive ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: item.color }}>
            {item.id.toUpperCase()}_{String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Name */}
        <h3 
          className="font-display text-2xl mb-1"
          style={{ 
            color: isActive ? "#FFFFFF" : "#E8E8E8",
          }}
        >
          {item.name}
        </h3>

        {/* Subtitle */}
        <p className="font-mono text-sm mb-3" style={{ color: item.color }}>
          {item.subtitle}
        </p>

        {/* Description */}
        <p className="font-body text-sm" style={{ color: "rgba(153, 153, 153, 0.9)" }}>
          {item.description}
        </p>

        {/* Status indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: item.color }}
            animate={isActive ? { opacity: [0.4, 1, 0.4] } : { opacity: 0.4 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-mono text-[10px] uppercase" style={{ color: "rgba(102, 102, 102, 0.7)" }}>
            {isActive ? "ACTIVE" : "STANDBY"}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Central hub animation
function CentralHub({ activeId }: { activeId: string | null }) {
  const getHubColor = () => {
    if (!activeId) return "#666";
    const item = ecosystemItems.find((i) => i.id === activeId);
    return item?.color || "#666";
  };

  return (
    <motion.div
      className="absolute z-20"
      style={{
        left: "calc(50% - 40px)",
        top: "calc(50% - 40px)",
        width: "80px",
        height: "80px",
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4, ease: EASE_OUT }}
    >
      {/* Outer rings */}
      <motion.div
        className="absolute inset-0 rounded-full border"
        style={{ 
          borderColor: "rgba(255, 255, 255, 0.05)",
          margin: "-32px",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 rounded-full border"
        style={{ 
          borderColor: "rgba(255, 255, 255, 0.03)",
          margin: "-48px",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Core */}
      <motion.div
        className="relative w-full h-full rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #1A1A22 0%, #0A0A0B 100%)",
          border: `2px solid ${activeId ? getHubColor() : "rgba(255,255,255,0.1)"}`,
          boxShadow: activeId
            ? `0 0 40px ${getHubColor().replace(")", ", 0.5)")}, inset 0 0 20px rgba(0,0,0,0.8)`
            : "inset 0 0 20px rgba(0,0,0,0.8)",
        }}
        animate={{
          borderColor: getHubColor(),
        }}
        transition={{ duration: 0.3 }}
      >
        <span className="font-mono text-xs" style={{ color: getHubColor() }}>
          ΔX
        </span>

        {/* Pulse effect */}
        {activeId && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: `1px solid ${getHubColor()}`,
            }}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

export function Ecosystem() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<typeof ecosystemItems[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
  const hasAutoOpened = useRef(false);

  // Get position of a specific card
  const getCardPosition = (itemId: string): { x: number; y: number } | null => {
    const cardEl = cardRefs.current[itemId];
    if (!cardEl) return null;
    const rect = cardEl.getBoundingClientRect();
    // Position modal to the right of the card, vertically centered on card
    return {
      x: rect.right + 20, // 20px to the right
      y: rect.top + rect.height / 2, // vertically centered
    };
  };

  // Auto-open modal when section scrolls into view with ?tab param
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoOpened.current && !isModalOpen) {
            // Check for tab param when section comes into view
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const tab = params.get("tab");
            
            if (tab) {
              const item = ecosystemItems.find((i) => i.id === tab);
              if (item) {
                hasAutoOpened.current = true;
                // Get card position for modal placement
                const cardPos = getCardPosition(tab);
                // Small delay for visual effect
                setTimeout(() => {
                  setSelectedItem(item);
                  setClickPosition(cardPos || { x: window.innerWidth / 2, y: window.innerHeight / 2 });
                  setIsModalOpen(true);
                  setActiveId(tab);
                }, 400);
              }
            }
          } else if (!entry.isIntersecting) {
            // Reset flag when section leaves view so it works again next time
            hasAutoOpened.current = false;
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isModalOpen]);

  // Reset auto-open flag when hash changes away from ecosystem
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash !== "#ecosystem") {
        hasAutoOpened.current = false;
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleCardClick = (item: typeof ecosystemItems[0], e: React.MouseEvent) => {
    setSelectedItem(item);
    setClickPosition({ x: e.clientX, y: e.clientY });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedItem(null);
      setClickPosition(null);
    }, 300);
  };

  return (
    <div ref={sectionRef}>
      <SectionWrapper id="ecosystem" background="secondary" glow="none" className="relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="ecosystem-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ecosystem-grid)" />
        </svg>
      </div>

      {/* Detail Modal */}
      <DetailModal item={selectedItem} isOpen={isModalOpen} onClose={handleCloseModal} clickPosition={clickPosition} />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest mb-4 block" style={{ color: "rgba(102, 102, 102, 0.9)" }}>
            [03] ECOSYSTEM
          </span>
          <h2 
            className="font-display text-3xl md:text-4xl lg:text-5xl"
            style={{ 
              textWrap: "balance",
              color: "#E8E8E8",
            }}
          >
            Four engines. One system.
          </h2>
          <p className="font-body text-lg mt-4 max-w-2xl mx-auto" style={{ color: "rgba(153, 153, 153, 0.9)" }}>
            Interconnected components working as a unified machine.
          </p>
        </motion.div>

        {/* Ecosystem Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Hub - Desktop only */}
          <div className="hidden md:block">
            <CentralHub activeId={activeId} />
          </div>

          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {ecosystemItems.map((item, index) => (
              <EcosystemNode
                key={item.id}
                item={item}
                index={index}
                isActive={activeId === item.id}
                onHover={setActiveId}
                onClick={(e: React.MouseEvent<HTMLDivElement>) => handleCardClick(item, e)}
                cardRef={(el: HTMLDivElement | null) => { cardRefs.current[item.id] = el; }}
              />
            ))}
          </div>

          {/* Connection lines - Desktop visual effect */}
          <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none -z-10">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            {/* Cross lines from center to corners */}
            <motion.line
              x1="50%" y1="50%" x2="25%" y2="25%"
              stroke={activeId === "core" ? "rgba(26,155,191,0.3)" : "rgba(255,255,255,0.05)"}
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.line
              x1="50%" y1="50%" x2="75%" y2="25%"
              stroke={activeId === "code" ? "rgba(138,138,138,0.3)" : "rgba(255,255,255,0.05)"}
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            />
            <motion.line
              x1="50%" y1="50%" x2="25%" y2="75%"
              stroke={activeId === "scale" ? "rgba(217,64,64,0.3)" : "rgba(255,255,255,0.05)"}
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
            />
            <motion.line
              x1="50%" y1="50%" x2="75%" y2="75%"
              stroke={activeId === "style" ? "rgba(110,117,255,0.3)" : "rgba(255,255,255,0.05)"}
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </svg>
        </div>

        {/* Integration statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6, ease: EASE_OUT }}
          className="mt-16 text-center"
        >
          <div 
            className="inline-flex items-center gap-4 px-6 py-3 rounded-full border"
            style={{ 
              background: "rgba(17, 17, 22, 0.8)",
              borderColor: "rgba(255, 255, 255, 0.08)",
            }}
          >
            <div className="flex -space-x-2">
              {ecosystemItems.map((item) => (
                <div
                  key={item.id}
                  className="w-6 h-6 rounded-full border-2"
                  style={{ 
                    background: item.color,
                    borderColor: "#0A0A0B",
                  }}
                />
              ))}
            </div>
            <span className="font-mono text-sm" style={{ color: "rgba(153, 153, 153, 0.9)" }}>
              Unified Output
            </span>
            <motion.div
              className="w-2 h-2 rounded-full bg-core-bright"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
    </div>
  );
}
