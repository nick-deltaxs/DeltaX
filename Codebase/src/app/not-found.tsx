import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-primary flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(26, 155, 191, 0.05) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md">
        <DeltaXLogo size={80} className="text-text-hero" aria-hidden="true" />
        <h1 className="font-display text-4xl text-text-hero mt-6">
          Page not found
        </h1>
        <p className="font-body text-lg text-text-body mt-4">
          This page doesn&apos;t exist yet.
        </p>
        <nav className="flex gap-6 mt-8" aria-label="Navigation">
          <Link 
            href="/" 
            className="font-body text-sm text-core-bright hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-core-bright focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded px-2 py-1"
          >
            → Home
          </Link>
          <Link 
            href="/about" 
            className="font-body text-sm text-core-bright hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-core-bright focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded px-2 py-1"
          >
            → About
          </Link>
          <Link 
            href="/contact" 
            className="font-body text-sm text-core-bright hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-core-bright focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded px-2 py-1"
          >
            → Contact
          </Link>
        </nav>
      </div>
    </main>
  );
}
