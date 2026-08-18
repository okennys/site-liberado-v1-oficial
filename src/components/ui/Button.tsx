import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline-light";
  external?: boolean;
  className?: string;
};

// variant="primary" é o único lugar do site onde o amarelo de marca (#fce100)
// pode aparecer — regra do brandbook: "uso somente em CTA".
// "outline-light" é o 2º CTA sobre fundo escuro/foto (referência: hero da
// Loro — botão sólido + botão outline lado a lado).
const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-cta-yellow text-navy-900 hover:bg-cta-yellow/90 focus-visible:outline-navy-900",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 focus-visible:outline-navy-900",
  ghost:
    "bg-transparent text-navy-900 ring-1 ring-inset ring-navy-900/20 hover:bg-navy-900/5 focus-visible:outline-navy-900",
  "outline-light":
    "bg-transparent text-white ring-1 ring-inset ring-white/40 hover:bg-white/10 focus-visible:outline-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-title transition duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
