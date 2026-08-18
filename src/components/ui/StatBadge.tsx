"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

type StatBadgeProps = {
  value: string;
  label: string;
  tone?: "light" | "navy";
  size?: "sm" | "lg";
  align?: "left" | "center";
  /** Conta de 0 até o número ao entrar na viewport (uma vez). */
  countUp?: boolean;
};

const valueSize: Record<NonNullable<StatBadgeProps["size"]>, string> = {
  sm: "text-xl sm:text-2xl",
  lg: "text-3xl sm:text-4xl",
};

// Separa "+5M" em prefixo "+", número 5, sufixo "M" pra poder animar só a
// parte numérica e remontar o texto original nos frames.
const NUMBER_PATTERN = /^([^\d]*)(\d+)(.*)$/;

export default function StatBadge({
  value,
  label,
  tone = "light",
  size = "lg",
  align = "left",
  countUp = false,
}: StatBadgeProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const match = NUMBER_PATTERN.exec(value);
  const target = match ? Number(match[2]) : 0;
  const hasNumber = match !== null;

  const [display, setDisplay] = useState(countUp && hasNumber ? 0 : target);

  // `match` é um array novo (regex.exec) a cada render — nunca usar como
  // dependência do efeito, senão o próprio setDisplay do onUpdate recria a
  // dependência e reinicia a animação em loop a cada frame.
  useEffect(() => {
    if (!countUp || !inView || !hasNumber) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, countUp, target, hasNumber]);

  const text = match ? `${match[1]}${display}${match[3]}` : value;
  const valueColor = tone === "navy" ? "text-brand-blue" : "text-navy-900";
  const labelColor = tone === "navy" ? "text-white/70" : "text-navy-900/60";

  return (
    <div className={`flex flex-col ${align === "center" ? "items-center text-center" : ""}`}>
      <span ref={ref} className={`text-title ${valueSize[size]} ${valueColor}`}>
        {text}
      </span>
      <span className={`mt-1 text-sm ${labelColor}`}>{label}</span>
    </div>
  );
}
