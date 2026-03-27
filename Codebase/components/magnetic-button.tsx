"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { prefersReducedMotion } from "@/lib/animations";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface Position {
  x: number;
  y: number;
}

// Spring physics configuration
const SPRING_CONFIG = {
  stiffness: 150,
  damping: 15,
  mass: 1,
};

export default function MagneticButton({
  children,
  className = "",
  onClick,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [textPosition, setTextPosition] = useState<Position>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);
  const targetRef = useRef<Position>({ x: 0, y: 0 });
  const currentRef = useRef<Position>({ x: 0, y: 0 });
  const textTargetRef = useRef<Position>({ x: 0, y: 0 });
  const textCurrentRef = useRef<Position>({ x: 0, y: 0 });
  const velocityRef = useRef<Position>({ x: 0, y: 0 });
  const textVelocityRef = useRef<Position>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || prefersReducedMotion()) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance from center
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;

    // Magnetic pull strength (button moves 15px max, text moves 25px max)
    const maxMove = 15;
    const maxTextMove = 25;

    targetRef.current = {
      x: (distX / rect.width) * maxMove * 2,
      y: (distY / rect.height) * maxMove * 2,
    };

    textTargetRef.current = {
      x: (distX / rect.width) * maxTextMove * 2,
      y: (distY / rect.height) * maxTextMove * 2,
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    targetRef.current = { x: 0, y: 0 };
    textTargetRef.current = { x: 0, y: 0 };
  }, []);

  // Spring animation loop
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const animate = () => {
      const { stiffness, damping, mass } = SPRING_CONFIG;

      // Button spring physics
      const forceX = (targetRef.current.x - currentRef.current.x) * stiffness;
      const forceY = (targetRef.current.y - currentRef.current.y) * stiffness;

      velocityRef.current.x += forceX / mass;
      velocityRef.current.y += forceY / mass;
      velocityRef.current.x *= damping / 100;
      velocityRef.current.y *= damping / 100;

      currentRef.current.x += velocityRef.current.x * 0.016;
      currentRef.current.y += velocityRef.current.y * 0.016;

      // Text spring physics (slightly different for parallax effect)
      const textForceX = (textTargetRef.current.x - textCurrentRef.current.x) * stiffness;
      const textForceY = (textTargetRef.current.y - textCurrentRef.current.y) * stiffness;

      textVelocityRef.current.x += textForceX / mass;
      textVelocityRef.current.y += textForceY / mass;
      textVelocityRef.current.x *= damping / 100;
      textVelocityRef.current.y *= damping / 100;

      textCurrentRef.current.x += textVelocityRef.current.x * 0.016;
      textCurrentRef.current.y += textVelocityRef.current.y * 0.016;

      setPosition({ ...currentRef.current });
      setTextPosition({ ...textCurrentRef.current });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative overflow-hidden rounded-full
        bg-[#6366F1] text-white font-semibold
        px-8 py-4 text-base
        transition-shadow duration-300
        hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]
        focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 focus:ring-offset-[var(--bg-base)]
        ${className}
      `}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <span
        className="relative z-10 block"
        style={{
          transform: `translate3d(${textPosition.x}px, ${textPosition.y}px, 0)`,
        }}
      >
        {children}
      </span>
      {/* Glow effect on hover */}
      <div
        className={`
          absolute inset-0 rounded-full bg-gradient-to-r from-[#818cf8] to-[#6366F1]
          transition-opacity duration-300
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
        style={{ zIndex: 0 }}
      />
    </button>
  );
}
