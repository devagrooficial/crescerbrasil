import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "bg-forest text-white hover:bg-forest-dark shadow-sm hover:shadow-md",
  secondary: "bg-amber text-white hover:bg-amber/90 shadow-sm hover:shadow-md",
  outline: "border-2 border-forest text-forest hover:bg-forest hover:text-white",
  ghost: "text-forest hover:bg-cream",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm font-semibold",
  lg: "px-8 py-4 text-base font-semibold",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    ) : (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
