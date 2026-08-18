import type { ReactNode } from "react";

type BentoCardProps = {
  icon: ReactNode;
  title: string;
  text: string;
  className?: string;
};

// Evolução do card que já existia em "Diferenciais" — agora como card escuro
// flutuando sobre uma seção clara (mesmo princípio de contraste do
// FeaturePanel/Migital), com selo de ícone no topo (referência: bento de
// motivos da lorolabs.ai).
export default function BentoCard({ icon, title, text, className = "" }: BentoCardProps) {
  return (
    <div className={`flex h-full flex-col rounded-2xl bg-navy-900 p-6 transition-transform duration-200 hover:-translate-y-1 ${className}`}>
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue">
        {icon}
      </span>
      <h3 className="text-subtitle mt-4 text-lg text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{text}</p>
    </div>
  );
}
