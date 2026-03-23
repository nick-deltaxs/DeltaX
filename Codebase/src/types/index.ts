export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  size?: "large" | "medium" | "small";
  className?: string;
  type?: "button" | "submit";
  href?: string;
}

export interface InputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  type?: string;
  id?: string;
  name?: string;
  required?: boolean;
  maxLength?: number;
}

export interface TextareaProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  name?: string;
  required?: boolean;
  maxLength?: number;
  rows?: number;
}

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "primary" | "secondary" | "deep";
  glow?: "core" | "code" | "scale" | "style" | "deltax" | "gold" | "none";
}

export interface SectionOverlineProps {
  number: string;
  label: string;
  className?: string;
}

export interface DeltaXLogoProps {
  className?: string;
  size?: number;
}

export interface TeamMember {
  name: string;
  role: string;
  pillar: "deltax" | "core" | "code" | "scale" | "style";
  tier: "founder" | "leader" | "team";
}

export interface CaseStudy {
  client: string;
  sector: string;
  delivered: string;
}

export interface ContactFormState {
  status: "idle" | "loading" | "success" | "error";
  name: string;
  email: string;
  company: string;
  challenge: string;
}

export type PillarColor = "core" | "code" | "scale" | "style" | "deltax";
