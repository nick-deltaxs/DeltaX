import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center content-width text-center">
      <div>
        <div className="text-[100px] md:text-[120px] font-extrabold text-[var(--accent)] mb-4 leading-none">
          404
        </div>
        <h1 className="text-h1 text-3xl md:text-4xl mb-4">Page not found</h1>
        <p className="text-body mb-8 max-w-md mx-auto">
          The workflow you&apos;re looking for doesn&apos;t exist (yet).
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[var(--accent)] hover:opacity-80 transition-opacity font-medium"
        >
          <ArrowLeft className="size-4" />
          Return to home
        </Link>
      </div>
    </div>
  );
}
