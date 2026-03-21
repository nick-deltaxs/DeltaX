import { DeltaXLogo } from "@/components/ui/DeltaXLogo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(26, 155, 191, 0.05) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <DeltaXLogo size={80} className="text-text-hero" />
        <p className="font-body text-lg text-text-body mt-6">
          This page doesn&apos;t exist yet.
        </p>
        <div className="flex gap-6 mt-8">
          <a href="/" className="font-body text-sm text-core-bright hover:underline">
            → Home
          </a>
          <a href="/about" className="font-body text-sm text-core-bright hover:underline">
            → About
          </a>
          <a href="/contact" className="font-body text-sm text-core-bright hover:underline">
            → Contact
          </a>
        </div>
      </div>
    </div>
  );
}
