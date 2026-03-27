"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { StyleXsLogo } from "@/components/ui/style-xs-logo";

interface Tab {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const tabs: Tab[] = [
  {
    id: "core",
    label: "Engine 01",
    title: "CoreXs",
    description: "Strategy & Audit. Business analysis, roadmap planning, and technical audits to build the right foundation.",
    icon: <img src="/corexs-teal.png" alt="CoreXs" className="w-5 h-5 object-contain" />,
    features: ["Business Analysis", "Technical Audit", "Roadmap Planning", "Risk Assessment"],
  },
  {
    id: "code",
    label: "Engine 02",
    title: "CodeXs",
    description: "Engineering & Build. Full-stack development with modern frameworks, clean architecture, and scalable systems.",
    icon: <img src="/codexs-dark.png" alt="CodeXs" className="w-5 h-5 object-contain" />,
    features: ["Full-Stack Dev", "Clean Architecture", "API Design", "DevOps"],
  },
  {
    id: "scale",
    label: "Engine 03",
    title: "ScaleXs",
    description: "Growth & Marketing. Data-driven growth strategies, SEO optimization, and marketing automation.",
    icon: <img src="/scalexs-teal.png" alt="ScaleXs" className="w-5 h-5 object-contain" />,
    features: ["Growth Strategy", "SEO & Content", "Marketing Automation", "Analytics"],
  },
  {
    id: "style",
    label: "Engine 04",
    title: "StyleXs",
    description: "Design & Brand. Visual identity, UI/UX design systems, and brand strategy that stands out.",
    icon: <StyleXsLogo size={20} className="text-purple-400" />,
    features: ["Brand Identity", "UI/UX Design", "Design Systems", "Motion Design"],
  },
];

function WorkflowPreview({ type }: { type: string }) {
  const getContent = () => {
    switch (type) {
      case "core":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img src="/corexs-teal.png" alt="CoreXs" className="w-8 h-8 object-contain" />
              <span className="font-semibold text-white">Strategy & Audit</span>
            </div>
            <div className="space-y-3">
              {["Business Analysis", "Technical Audit", "Roadmap", "Risk Assessment"].map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[var(--bg-surface)]/50 border border-[var(--border-subtle)]"
                >
                  <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-xs text-teal-400">
                    {i + 1}
                  </div>
                  <span className="text-sm text-white">{item}</span>
                  <div className="ml-auto w-2 h-2 rounded-full bg-teal-500" />
                </div>
              ))}
            </div>
          </div>
        );
      case "code":
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <img src="/codexs-dark.png" alt="CodeXs" className="w-8 h-8 object-contain" />
              <span className="font-semibold text-white">Engineering</span>
            </div>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg bg-[var(--bg-surface)]/50 border border-[var(--border-subtle)]"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--accent)]/20" />
                <div className="flex-1 space-y-1">
                  <div
                    className="h-3 bg-[var(--text-secondary)]/20 rounded"
                    style={{ width: `${50 + i * 10}%` }}
                  />
                  <div className="h-2 bg-[var(--text-secondary)]/10 rounded w-1/2" />
                </div>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              </div>
            ))}
          </div>
        );
      case "scale":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img src="/scalexs-teal.png" alt="ScaleXs" className="w-8 h-8 object-contain" />
              <span className="font-semibold text-white">Growth Metrics</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Traffic", "Conversions", "SEO Score", "ROI"].map((metric, i) => (
                <div key={metric} className="p-3 rounded-lg bg-[var(--bg-surface)]/50 border border-[var(--border-subtle)]">
                  <div className="text-xs text-[var(--text-secondary)] mb-1">{metric}</div>
                  <div className="text-lg font-semibold text-white">{85 + i * 5}%</div>
                  <div className="h-1 bg-green-500/30 rounded-full mt-2">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: `${85 + i * 5}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "style":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <StyleXsLogo size={32} />
              <span className="font-semibold text-white">Design System</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["Colors", "Typography", "Components", "Icons", "Spacing", "Effects"].map((item) => (
                <div
                  key={item}
                  className="p-3 rounded-lg bg-[var(--bg-surface)]/50 border border-[var(--border-subtle)] text-center"
                >
                  <div className="w-8 h-8 mx-auto mb-2 rounded bg-gradient-to-br from-purple-500 to-indigo-500" />
                  <span className="text-xs text-[var(--text-secondary)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col justify-center">{getContent()}</div>
  );
}

export default function FeatureTabs() {
  const searchParams = useSearchParams();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState("core");
  const activeTabData = tabs.find((t) => t.id === activeTab);

  // Read tab from URL params and handle scroll
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    const hash = window.location.hash;
    
    // Set active tab from URL if valid
    if (tabParam && tabs.some(t => t.id === tabParam)) {
      setActiveTab(tabParam);
    }
    
    // Scroll to section if hash is #system
    if (hash === "#system" && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchParams]);

  return (
    <section ref={sectionRef} id="system" className="section content-width">
      <div className="text-center mb-12">
        <span className="text-label mb-4 block">4 Engines</span>
        <h2 className="text-h2 mb-4">
          Everything you need to{" "}
          <span className="text-[var(--accent)]">ship faster</span>
        </h2>
        <p className="text-body max-w-xl mx-auto">
          Four powerful engines working together to accelerate your development workflow.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Tabs */}
        <div className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left p-4 md:p-6 border-subtle rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? "border-l-4 border-l-[var(--accent)] bg-[var(--bg-surface)]"
                  : "hover:bg-[var(--bg-surface)]/50"
              }`}
              aria-selected={activeTab === tab.id}
              role="tab"
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`${
                    activeTab === tab.id
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-secondary)]"
                  }`}
                >
                  {tab.icon}
                </span>
                <span className="text-label">{tab.label}</span>
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {tab.title}
              </div>
              <p
                className={`text-sm text-[var(--text-secondary)] transition-all duration-300 ${
                  activeTab === tab.id ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
                }`}
              >
                {tab.description}
              </p>
            </button>
          ))}
        </div>

        {/* Preview area */}
        <div className="relative min-h-[400px] border-subtle rounded-xl overflow-hidden bg-[var(--bg-surface)]/30">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`absolute inset-0 p-6 transition-all duration-300 ${
                activeTab === tab.id
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
              role="tabpanel"
              aria-hidden={activeTab !== tab.id}
            >
              <WorkflowPreview type={tab.id} />

              {/* Features list */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2">
                  {activeTabData?.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
