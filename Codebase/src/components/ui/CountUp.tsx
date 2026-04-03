"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CountUpProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
}

export function CountUp({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 30,
    duration: duration * 1000,
  });

  const displayValue = useTransform(springValue, (latest) => {
    return `${prefix}${latest.toFixed(decimals)}${suffix}`;
  });

  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      motionValue.set(value);
    }
  }, [isInView, hasAnimated, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(`${prefix}${latest.toFixed(decimals)}${suffix}`);
    });
    return unsubscribe;
  }, [springValue, prefix, suffix, decimals]);

  return (
    <motion.span
      ref={ref}
      className={`font-mono tabular-nums ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3 }}
    >
      {display}
    </motion.span>
  );
}
