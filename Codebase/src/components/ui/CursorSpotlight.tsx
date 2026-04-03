"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorSpotlight() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (isTouchDevice || prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        x: springX,
        y: springY,
      }}
    >
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
