import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  tone?: "light" | "tint" | "navy";
  className?: string;
  id?: string;
  /** Sobe por cima da seção anterior com cantos arredondados grandes — o
   * efeito "scoop" de transição entre seções (referência: unico.io). */
  roundedTop?: boolean;
  /** Sem o wrapper `max-w-6xl`/padding — seção full-bleed (edge a edge),
   * pros filhos controlarem 100% da área (ex: foto/cover em tela cheia). */
  bleed?: boolean;
};

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  light: "bg-background text-navy-900",
  tint: "bg-tint text-navy-900",
  navy: "bg-navy-900 text-white",
};

export default function Section({
  children,
  tone = "light",
  className = "",
  id,
  roundedTop = false,
  bleed = false,
}: SectionProps) {
  const scoop = roundedTop ? "relative z-10 -mt-8 rounded-t-[40px] sm:-mt-10 sm:rounded-t-[56px]" : "";

  return (
    <section id={id} className={`relative overflow-hidden ${tones[tone]} ${scoop} ${className}`}>
      {bleed ? children : <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">{children}</div>}
    </section>
  );
}
