"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useAnimation, AnimatePresence, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import { Button } from "@/components/ui/Button";

// Animation timing constants (in seconds) - Enhanced sequence
// 0-5s: Particles converge | 5-8s: Flash effect | 8-9.5s: Logo appears
const TIMING = {
  particleConverge: 5,
  collisionFlash: 3,
  logoAppear: 1.5,
  headlineReveal: 1.0,
  subtitleReveal: 0.8,
  ctaReveal: 0.8,
  staggerDelay: 0.2,
  holdBeforeExit: 2.0,
};

const EASE = {
  mechanical: [0.22, 1, 0.36, 1] as [number, number, number, number],
  elastic: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  smooth: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

// Logo fragment paths - 4 quadrants of the DeltaX X shape
const LOGO_FRAGMENTS = [
  // Top-left quadrant (pointing up-left)
  "M922.978 1002.55C903.577 1031.95 860.679 1032.61 840.385 1003.82L385.554 358.749C362.402 325.911 385.476 280.559 425.65 279.942L1315.27 266.272C1355.45 265.654 1379.91 310.276 1357.77 343.809L922.978 1002.55Z",
  // Bottom-left quadrant (pointing down-left)
  "M548.877 1074.75C549.062 1074.47 549.375 1074.3 549.711 1074.3H1115.39C1116.19 1074.3 1116.67 1075.2 1116.21 1075.87L549.471 1904.67C549.285 1904.94 548.976 1905.1 548.646 1905.1H1.85974C1.06282 1905.1 0.586075 1904.22 1.02552 1903.55L548.877 1074.75Z",
  // Top-right quadrant (pointing up-right)
  "M1623.19 243.943C1623.38 243.663 1623.69 243.495 1624.03 243.495H2189.71C2190.51 243.495 2190.98 244.395 2190.53 245.059L1623.79 1073.86C1623.6 1074.13 1623.29 1074.3 1622.96 1074.3H1076.18C1075.38 1074.3 1074.9 1073.41 1075.34 1072.74L1623.19 243.943Z",
  // Bottom-right quadrant (pointing down-right)
  "M1609.12 1947.6C1609.3 1947.9 1609.62 1948.08 1609.97 1948.08H2161.13C2161.92 1948.08 2162.4 1947.21 2161.98 1946.54L1609.7 1074.77C1609.52 1074.48 1609.2 1074.3 1608.86 1074.3H1076.1C1075.32 1074.3 1074.84 1075.16 1075.25 1075.83L1609.12 1947.6Z",
];

// Simple visible logo particle - uses a clear X shape
function LogoParticle({
  fragmentIndex,
  startX,
  startY,
  delay = 0,
  onComplete,
}: {
  fragmentIndex: number;
  startX: string;
  startY: string;
  delay?: number;
  onComplete?: () => void;
}) {
  const parseStartPos = () => {
    const x = parseInt(startX);
    const y = parseInt(startY);
    const offsetX = (x - 50) * 0.8; 
    const offsetY = (y - 50) * 0.8;
    return { x: offsetX, y: offsetY };
  };

  const startOffset = parseStartPos();
  
  // Rotation based on fragment index for visual variety
  const baseRotation = fragmentIndex * 90;

  return (
    <motion.div
      initial={{
        x: `${startOffset.x}vw`,
        y: `${startOffset.y}vh`,
        scale: 0.5,
        opacity: 0,
        rotate: baseRotation,
      }}
      animate={{
        x: "0vw",
        y: "0vh",
        scale: [0.5, 1.5, 0],
        opacity: [0, 1, 1, 0],
        rotate: [baseRotation, baseRotation + 180, baseRotation + 360],
      }}
      transition={{
        duration: TIMING.particleConverge,
        delay,
        ease: EASE.mechanical,
        times: [0, 0.1, 0.5, 1],
      }}
      onAnimationComplete={onComplete}
      className="absolute left-1/2 top-1/2 z-[100]"
      style={{
        width: 120,
        height: 96,
        marginLeft: -60,
        marginTop: -48,
        willChange: "transform, opacity",
      }}
    >
      {/* Broken logo part - uses actual DeltaX logo fragment */}
      <svg
        viewBox="0 0 2429 1949"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id={`logoGrad-${fragmentIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F0E6FF" />
            <stop offset="40%" stopColor="#C4A8FF" />
            <stop offset="70%" stopColor="#9D7DE8" />
            <stop offset="100%" stopColor="#4D159A" />
          </linearGradient>
        </defs>
        <path
          d={LOGO_FRAGMENTS[fragmentIndex]}
          fill={`url(#logoGrad-${fragmentIndex})`}
          stroke="#FFFFFF"
          strokeWidth="20"
          strokeLinejoin="round"
          style={{
            filter: "drop-shadow(0 0 15px rgba(196, 168, 255, 0.9)) drop-shadow(0 0 30px rgba(157, 125, 232, 0.7)) drop-shadow(0 0 45px rgba(77, 21, 154, 0.5))",
          }}
        />
      </svg>
    </motion.div>
  );
}

// Enhanced Grid background component with state management
function GridBackground({ isActive }: { isActive: boolean }) {
  const baseDuration = isActive ? 0.8 : 4;
  const baseOpacity = isActive ? [0.3, 0.8, 0.3] : [0.15, 0.35, 0.15];
  const baseTranslateY = isActive ? -50 : -20;

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
          opacity: baseOpacity,
          y: [0, baseTranslateY, 0],
        }}
        transition={{
          duration: baseDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary offset grid for parallax effect */}
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
          opacity: baseOpacity,
          y: [0, baseTranslateY * 0.7, 0],
        }}
        transition={{
          duration: baseDuration * 1.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Subtle vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 11, 0.4) 100%)",
        }}
      />
    </div>
  );
}

// Enhanced Flash effect component with white core, purple glow, and burst ring
function CollisionFlash({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-[60] pointer-events-none flex items-center justify-center"
        >
          {/* White bright core with heavy blur */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0.8, 0],
              scale: [0, 1, 1.2, 1.5, 2]
            }}
            transition={{ 
              duration: TIMING.collisionFlash,
              times: [0, 0.1, 0.3, 0.7, 1],
              ease: "easeOut"
            }}
            className="absolute w-[200px] h-[200px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 30%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          
          {/* Purple outer glow - large radius */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.9, 0.7, 0.5, 0],
              scale: [0.5, 1, 1.3, 1.6, 2.2]
            }}
            transition={{ 
              duration: TIMING.collisionFlash,
              times: [0, 0.15, 0.4, 0.7, 1],
              ease: "easeOut"
            }}
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(157,125,232,0.6) 0%, rgba(77,21,154,0.4) 40%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Expanding burst ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 1, 0.8, 0.4, 0],
              scale: [0.8, 1, 1.5, 2, 2.5]
            }}
            transition={{ 
              duration: TIMING.collisionFlash,
              times: [0, 0.1, 0.3, 0.6, 1],
              ease: "easeOut"
            }}
            className="absolute w-[300px] h-[300px] rounded-full border-2"
            style={{
              borderColor: "rgba(157, 125, 232, 0.8)",
              boxShadow: "0 0 30px rgba(157, 125, 232, 0.5), inset 0 0 30px rgba(157, 125, 232, 0.3)",
            }}
          />

          {/* Secondary expanding ring */}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ 
              opacity: [0, 0.6, 0.3, 0],
              scale: [1, 1.8, 2.5, 3.2]
            }}
            transition={{ 
              duration: TIMING.collisionFlash * 0.9,
              delay: 0.2,
              times: [0, 0.2, 0.5, 1],
              ease: "easeOut"
            }}
            className="absolute w-[400px] h-[400px] rounded-full border"
            style={{
              borderColor: "rgba(255, 255, 255, 0.4)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Night Sky background - appears after flash fades
function NightSky({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-[5] pointer-events-none overflow-hidden"
        >
          {/* Deep space gradient */}
          <div 
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at bottom, #1A1A22 0%, #0A0A0B 50%, #050508 100%)",
            }}
          />
          
          {/* Stars container */}
          <div className="absolute inset-0">
            {/* Large bright stars */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`large-${i}`}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 3 + 2,
                  height: Math.random() * 3 + 2,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 60}%`,
                  background: "white",
                  boxShadow: "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)",
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
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
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={`medium-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 2 + 1,
                  height: Math.random() * 2 + 1,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 70}%`,
                  opacity: Math.random() * 0.6 + 0.2,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut",
                }}
              />
            ))}
            
            {/* Small distant stars */}
            {[...Array(80)].map((_, i) => (
              <div
                key={`small-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  width: 1,
                  height: 1,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 80}%`,
                  opacity: Math.random() * 0.4 + 0.1,
                }}
              />
            ))}
            
            {/* Purple nebula clouds */}
            <motion.div
              className="absolute w-[600px] h-[400px] rounded-full opacity-20"
              style={{
                background: "radial-gradient(ellipse, rgba(157,125,232,0.3) 0%, transparent 70%)",
                filter: "blur(60px)",
                left: "10%",
                top: "20%",
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute w-[500px] h-[350px] rounded-full opacity-15"
              style={{
                background: "radial-gradient(ellipse, rgba(77,21,154,0.25) 0%, transparent 70%)",
                filter: "blur(50px)",
                right: "15%",
                top: "30%",
              }}
              animate={{
                x: [0, -25, 0],
                y: [0, 15, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Shooting stars */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`shooting-${i}`}
                className="absolute h-px w-20"
                style={{
                  background: "linear-gradient(90deg, transparent, white, transparent)",
                  left: `${Math.random() * 80}%`,
                  top: `${Math.random() * 40}%`,
                  transform: "rotate(-45deg)",
                }}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, 200],
                  y: [0, 200],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 8 + 5,
                  delay: Math.random() * 5,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
          
          {/* Vignette overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,10,11,0.6) 100%)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Logo component - appears after flash fades
function AnimatedLogo({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: TIMING.logoAppear,
        ease: EASE.elastic,
      }}
      className="relative z-[70]"
    >
      <svg
        width="120"
        height="96"
        viewBox="0 0 2429 1949"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
        style={{
          filter: "drop-shadow(0 0 30px rgba(157, 125, 232, 0.5)) drop-shadow(0 0 60px rgba(77, 21, 154, 0.3))",
          shapeRendering: "geometricPrecision",
        }}
      >
        <path
          d="M922.978 1002.55C903.577 1031.95 860.679 1032.61 840.385 1003.82L385.554 358.749C362.402 325.911 385.476 280.559 425.65 279.942L1315.27 266.272C1355.45 265.654 1379.91 310.276 1357.77 343.809L922.978 1002.55Z"
          fill="currentColor"
        />
        <path
          d="M548.877 1074.75C549.062 1074.47 549.375 1074.3 549.711 1074.3H1115.39C1116.19 1074.3 1116.67 1075.2 1116.21 1075.87L549.471 1904.67C549.285 1904.94 548.976 1905.1 548.646 1905.1H1.85974C1.06282 1905.1 0.586075 1904.22 1.02552 1903.55L548.877 1074.75Z"
          fill="currentColor"
        />
        <path
          d="M1623.19 243.943C1623.38 243.663 1623.69 243.495 1624.03 243.495H2189.71C2190.51 243.495 2190.98 244.395 2190.53 245.059L1623.79 1073.86C1623.6 1074.13 1623.29 1074.3 1622.96 1074.3H1076.18C1075.38 1074.3 1074.9 1073.41 1075.34 1072.74L1623.19 243.943Z"
          fill="currentColor"
        />
        <path
          d="M1609.12 1947.6C1609.3 1947.9 1609.62 1948.08 1609.97 1948.08H2161.13C2161.92 1948.08 2162.4 1947.21 2161.98 1946.54L1609.7 1074.77C1609.52 1074.48 1609.2 1074.3 1608.86 1074.3H1076.1C1075.32 1074.3 1074.84 1075.16 1075.25 1075.83L1609.12 1947.6Z"
          fill="currentColor"
        />
        <rect x="2234" y="1745" width="195" height="203" rx="29" fill="currentColor" />
      </svg>
    </motion.div>
  );
}

// Main Hero component
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animationPhase, setAnimationPhase] = useState<
    "idle" | "converging" | "collision" | "revealed"
  >("idle");
  const [particlesComplete, setParticlesComplete] = useState(0);
  const [isGridActive, setIsGridActive] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Start animation on mount (after preloader completes ~1.75s + buffer)
  useEffect(() => {
    if (shouldReduceMotion) {
      setAnimationPhase("revealed");
      return;
    }

    // Wait for preloader to complete (1.75s preloader + 0.6s exit + buffer = 2.4s)
    const timer = setTimeout(() => {
      setAnimationPhase("converging");
    }, 2400);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  // Handle particle completion
  const handleParticleComplete = useCallback(() => {
    setParticlesComplete((prev) => {
      const newCount = prev + 1;
      if (newCount >= 4) {
        // All particles converged, trigger collision
        setTimeout(() => {
          setAnimationPhase("collision");
          // After flash duration, reveal logo
          setTimeout(() => {
            setAnimationPhase("revealed");
          }, TIMING.collisionFlash * 1000);
        }, 100);
      }
      return newCount;
    });
  }, []);

  // Skip animation for reduced motion
  if (shouldReduceMotion) {
    return (
      <section
        ref={sectionRef}
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-primary pt-20 lg:pt-24 pb-16 px-6"
      >
        <div className="text-white mb-6">
          <svg
            width="120"
            height="96"
            viewBox="0 0 2429 1949"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <path
              d="M922.978 1002.55C903.577 1031.95 860.679 1032.61 840.385 1003.82L385.554 358.749C362.402 325.911 385.476 280.559 425.65 279.942L1315.27 266.272C1355.45 265.654 1379.91 310.276 1357.77 343.809L922.978 1002.55Z"
              fill="currentColor"
            />
            <path
              d="M548.877 1074.75C549.062 1074.47 549.375 1074.3 549.711 1074.3H1115.39C1116.19 1074.3 1116.67 1075.2 1116.21 1075.87L549.471 1904.67C549.285 1904.94 548.976 1905.1 548.646 1905.1H1.85974C1.06282 1905.1 0.586075 1904.22 1.02552 1903.55L548.877 1074.75Z"
              fill="currentColor"
            />
            <path
              d="M1623.19 243.943C1623.38 243.663 1623.69 243.495 1624.03 243.495H2189.71C2190.51 243.495 2190.98 244.395 2190.53 245.059L1623.79 1073.86C1623.6 1074.13 1623.29 1074.3 1622.96 1074.3H1076.18C1075.38 1074.3 1074.9 1073.41 1075.34 1072.74L1623.19 243.943Z"
              fill="currentColor"
            />
            <path
              d="M1609.12 1947.6C1609.3 1947.9 1609.62 1948.08 1609.97 1948.08H2161.13C2161.92 1948.08 2162.4 1947.21 2161.98 1946.54L1609.7 1074.77C1609.52 1074.48 1609.2 1074.3 1608.86 1074.3H1076.1C1075.32 1074.3 1074.84 1075.16 1075.25 1075.83L1609.12 1947.6Z"
              fill="currentColor"
            />
            <rect x="2234" y="1745" width="195" height="203" rx="29" fill="currentColor" />
          </svg>
        </div>

        <h1
          className="font-display text-text-hero tracking-[-0.03em] mb-6"
          style={{ fontSize: "clamp(40px, 6vw, 64px)", textWrap: "balance" }}
        >
          Four engines. One system.
        </h1>

        <p className="font-body text-lg md:text-xl text-text-body max-w-[600px] mx-auto leading-[1.6] mb-8">
          Strategy, engineering, design, and growth — working as one machine
          to build businesses that don&apos;t depend on their founders.
        </p>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto">
          <Button variant="primary" size="large" href="/contact">
            Start a Project
          </Button>
          <Button variant="secondary" size="large" href="#system">
            See the System
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-[#0a0a0a] pt-20 lg:pt-24 pb-16 px-6 relative overflow-hidden"
    >
      {/* Grid background */}
      <GridBackground isActive={isGridActive} />

      {/* Phase 1: Logo particle convergence (0-5s) */}
      {animationPhase === "converging" && (
        <>
          <LogoParticle fragmentIndex={0} startX="10%" startY="10%" onComplete={handleParticleComplete} />
          <LogoParticle fragmentIndex={1} startX="90%" startY="10%" delay={0.02} onComplete={handleParticleComplete} />
          <LogoParticle fragmentIndex={2} startX="10%" startY="90%" delay={0.04} onComplete={handleParticleComplete} />
          <LogoParticle fragmentIndex={3} startX="90%" startY="90%" delay={0.06} onComplete={handleParticleComplete} />
        </>
      )}

      {/* Phase 2: Enhanced collision flash (5-8s) */}
      <CollisionFlash isVisible={animationPhase === "collision"} />

      {/* Night Sky - appears after flash fades (8s+) */}
      <NightSky isVisible={animationPhase === "revealed"} />

      {/* Phase 3: Logo formation and content (8s+) */}
      <div className="relative z-[70] flex flex-col items-center">
        {/* Logo appears from flash center */}
        <AnimatedLogo isVisible={animationPhase === "revealed"} />

        {/* Content reveal sequence */}
        <AnimatePresence>
          {animationPhase === "revealed" && (
            <>
              {/* Headline - split into two phrases */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: TIMING.headlineReveal,
                  ease: EASE.mechanical,
                  delay: TIMING.logoAppear,
                }}
                className="mt-8"
              >
                <h1
                  className="font-display text-text-hero tracking-[-0.03em]"
                  style={{
                    fontSize: "clamp(40px, 6vw, 64px)",
                    textWrap: "balance",
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: TIMING.headlineReveal * 0.6,
                      ease: EASE.mechanical,
                      delay: TIMING.logoAppear,
                    }}
                    className="inline-block"
                  >
                    Four engines.
                  </motion.span>{" "}
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: TIMING.headlineReveal * 0.6,
                      ease: EASE.mechanical,
                      delay: TIMING.logoAppear + TIMING.staggerDelay,
                    }}
                    className="inline-block"
                  >
                    One system.
                  </motion.span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: TIMING.subtitleReveal,
                  ease: EASE.mechanical,
                  delay: TIMING.logoAppear + TIMING.headlineReveal + 0.2,
                }}
                className="font-body text-lg md:text-xl text-text-body max-w-[600px] mx-auto leading-[1.6] mt-6"
              >
                Strategy, engineering, design, and growth — working as one machine
                to build businesses that don&apos;t depend on their founders.
              </motion.p>

              {/* CTA Buttons with hover effects */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: TIMING.ctaReveal,
                  ease: EASE.elastic,
                  delay: TIMING.logoAppear + TIMING.headlineReveal + TIMING.subtitleReveal + 0.1,
                }}
                className="flex flex-col md:flex-row gap-3 md:gap-4 mt-8 w-full md:w-auto"
                onMouseEnter={() => setIsGridActive(true)}
                onMouseLeave={() => setIsGridActive(false)}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Button variant="primary" size="large" href="/contact">
                    Start a Project
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Button variant="secondary" size="large" href="#system">
                    See the System
                  </Button>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Scroll indicator - only show after content revealed */}
        {animationPhase === "revealed" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3, ease: EASE.smooth }}
            className="mt-16 flex flex-col items-center gap-3 cursor-pointer group"
            onClick={() => {
              const lenis = new Lenis();
              const element = document.getElementById("problem");
              if (element) {
                lenis.scrollTo(element, {
                  offset: -80,
                  duration: 1.5,
                });
              }
            }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted group-hover:text-white transition-colors duration-300">
              Scroll to explore
            </span>
            <motion.div
              className="relative w-8 h-12 rounded-full border border-white/20 flex items-start justify-center pt-2 group-hover:border-white/40 transition-colors duration-300"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-1 h-2 bg-white/60 rounded-full"
                animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
