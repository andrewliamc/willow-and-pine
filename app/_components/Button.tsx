import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
  size?: "md" | "lg";
} & ComponentProps<"button">;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-soft-sage text-forest border border-soft-sage/40 hover:bg-soft-sage/80",
  secondary:
    "border border-clay text-forest bg-transparent hover:bg-clay/15",
  ghost:
    "border border-transparent text-forest hover:border-forest/20 hover:bg-cream/80",
};

const sizeStyles = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  type = "button",
  size = "md",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-subheading transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-sage";
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
