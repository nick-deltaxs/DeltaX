"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-primary">
      {/* Background atmosphere image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/about-atmosphere.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6,
        }}
      />

      {/* 4 corner glows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 w-[300px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 0% 0%, rgba(26,155,191,0.04), transparent 60%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 100% 0%, rgba(138,138,138,0.04), transparent 60%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 0% 100%, rgba(217,64,64,0.04), transparent 60%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 right-0 w-[300px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 100% 100%, rgba(110,117,255,0.04), transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-text-hero text-center tracking-[-0.03em]"
          style={{
            fontSize: "clamp(40px, 6vw, 56px)",
            textWrap: "balance",
          }}
        >
          The System Behind the System.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-lg md:text-xl text-text-body max-w-[640px] mx-auto text-center leading-[1.6] mt-6"
        >
          DeltaX was built on one belief: businesses should run on systems, not on founders.
        </motion.p>
      </div>
    </section>
  );
}
