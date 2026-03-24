"use client";

import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="bg-primary min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image for cinematic effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/404-mood.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8,
        }}
      />

      {/* Grid texture */}
      <div className="absolute inset-0 atmosphere-grid pointer-events-none" />

      {/* Vignette */}
      <div className="atmosphere-vignette" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <DeltaXLogo
          size={120}
          className="text-text-hero opacity-40 glow-breathe mb-8 mx-auto w-[80px] h-auto md:w-[120px]"
        />
        <h1 className="font-display text-[48px] text-hero mb-4">
          Lost in the system.
        </h1>
        <p className="font-body text-lg text-secondary mb-8">
          This page doesn&apos;t exist. But we do.
        </p>
        <Button variant="primary" size="medium" href="/">
          Back to Home
        </Button>
      </div>
    </main>
  );
}
