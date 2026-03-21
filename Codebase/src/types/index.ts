export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "ghost";
  size?: "default" | "small";
  className?: string;
  type?: "button" | "submit";
}

export interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  className?: string;
  type?: string;
  name?: string;
  required?: boolean;
  maxLength?: number;
}

export interface TextareaProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  className?: string;
  name?: string;
  required?: boolean;
  maxLength?: number;
  rows?: number;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  accentColor?: "core" | "code" | "scale" | "style" | "deltax";
  variant?: "default" | "left-accent";
}

export interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "primary" | "secondary" | "break";
}

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export interface SectionLabelProps {
  children: React.ReactNode;
  color?: "core" | "code" | "scale" | "style" | "deltax" | "gold";
  className?: string;
}

export interface DeltaXLogoProps {
  className?: string;
  size?: number;
}

export interface TeamMember {
  name: string;
  nickname: string;
  role: string;
  pillar: "deltax" | "core" | "code" | "scale" | "style";
  tier: "founder" | "lead" | "support";
}

export interface CaseStudy {
  label: string;
  stat: string;
  direction: "up" | "down";
  description: string;
  engines: string;
}

export interface WaitlistFormState {
  status: "idle" | "loading" | "success" | "error" | "duplicate";
  email: string;
}

export interface ContactFormState {
  status: "idle" | "loading" | "success" | "error" | "ratelimited";
  name: string;
  email: string;
  company: string;
  challenge: string;
}
