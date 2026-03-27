// Animation utilities for DeltaX landing page

export const animations = {
  // Webflow easeOutQuart
  easeOutQuart: [0.165, 0.84, 0.44, 1] as const,
  
  // Counter easing (easeOutExpo)
  counterEase: (progress: number): number => {
    return progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
  },
  
  // Stagger children
  stagger: (index: number, base = 100) => ({
    delay: index * base,
    ease: [0.165, 0.84, 0.44, 1] as const,
  }),
  
  // Spring config for node appearance
  spring: {
    type: "spring" as const,
    stiffness: 300,
    damping: 25,
    mass: 0.8,
  },
  
  // Viewport trigger config
  viewport: {
    once: true,
    margin: "-100px",
  },
};

// Animated counter using requestAnimationFrame
export function animateCounter(
  target: number,
  duration: number,
  onUpdate: (value: number) => void,
  onComplete?: () => void
): () => void {
  const startTime = performance.now();
  let animationId: number;
  
  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // easeOutExpo with overshoot
    const easedProgress = animations.counterEase(progress);
    
    // Add slight overshoot then settle
    let value: number;
    if (progress < 0.9) {
      value = target * easedProgress * 1.03;
    } else {
      // Settle to target in last 10%
      const settleProgress = (progress - 0.9) / 0.1;
      value = target * 1.03 - (target * 0.03 * settleProgress);
    }
    
    onUpdate(Math.min(value, target * 1.03));
    
    if (progress < 1) {
      animationId = requestAnimationFrame(animate);
    } else {
      onUpdate(target);
      onComplete?.();
    }
  };
  
  animationId = requestAnimationFrame(animate);
  
  // Return cleanup function
  return () => cancelAnimationFrame(animationId);
}

// SVG path animation utility
export function animateStrokeDashoffset(
  element: SVGPathElement,
  duration: number,
  onComplete?: () => void
): () => void {
  const length = element.getTotalLength();
  element.style.strokeDasharray = `${length}`;
  element.style.strokeDashoffset = `${length}`;
  
  const startTime = performance.now();
  let animationId: number;
  
  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = animations.counterEase(progress);
    
    element.style.strokeDashoffset = `${length * (1 - easedProgress)}`;
    
    if (progress < 1) {
      animationId = requestAnimationFrame(animate);
    } else {
      onComplete?.();
    }
  };
  
  animationId = requestAnimationFrame(animate);
  
  return () => cancelAnimationFrame(animationId);
}

// Check for reduced motion preference
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
