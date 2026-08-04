import type { ReactNode } from "react";
import Link from "next/link";

export type Variant = "primary" | "accent" | "solid" | "outline";
export type Size = "sm" | "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 font-headline font-bold uppercase tracking-tight transition-all text-center";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "rounded-lg bg-primary text-on-primary shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_35%,transparent)] hover:animate-[glow-ring_1.4s_ease-in-out_infinite] hover:-translate-y-0.5 active:translate-y-0",
  accent:
    "rounded-lg bg-secondary text-on-secondary shadow-[0_0_20px_color-mix(in_srgb,var(--color-secondary)_35%,transparent)] hover:shadow-[0_0_36px_color-mix(in_srgb,var(--color-secondary)_55%,transparent)] hover:-translate-y-0.5 active:translate-y-0",
  solid: "rounded-lg bg-surface-container-highest text-on-surface border border-outline-variant/40 hover:border-primary/50 active:translate-y-0",
  outline:
    "rounded-lg bg-transparent border border-outline-variant/60 text-on-surface-variant hover:border-primary hover:text-primary active:translate-y-0",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "px-5 py-2 text-xs",
  md: "px-8 py-3.5 text-sm",
  lg: "px-11 py-5 text-base",
};

const DISABLED_CLASSES = "opacity-50 cursor-not-allowed pointer-events-none hover:scale-100 active:scale-100";

export function buttonClasses(
  variant: Variant = "solid",
  size: Size = "md",
  disabled?: boolean,
  className?: string
) {
  return [BASE, VARIANT_CLASSES[variant], SIZE_CLASSES[size], disabled && DISABLED_CLASSES, className]
    .filter(Boolean)
    .join(" ");
}

interface ButtonProps {
  href?: string;
  external?: boolean;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  children: ReactNode;
}

export default function Button({
  href,
  external,
  variant = "solid",
  size = "md",
  disabled,
  className,
  onClick,
  type = "button",
  children,
}: ButtonProps) {
  const classes = buttonClasses(variant, size, disabled, className);

  if (href && !disabled) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
