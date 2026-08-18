import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

type FeaturePanelProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  items?: string[];
  ctaLabel: string;
  ctaHref: string;
  aside?: ReactNode;
  className?: string;
};

// Painel escuro (headline + lista + CTA lado a lado) — referência: card
// "Let's grow your Brand Together" da Migital. Fica dentro de uma Section
// clara, criando o contraste "cartão escuro sobre fundo neutro" que faltava.
// Coluna esquerda concentra todo o texto/prova (headline, checklist em grid
// 2 colunas, CTA); coluna direita fica só com o `aside` (grade de fotos) —
// evita empilhar checklist + fotos na mesma coluna, que ficava apertado.
export default function FeaturePanel({
  eyebrow,
  title,
  text,
  items,
  ctaLabel,
  ctaHref,
  aside,
  className = "",
}: FeaturePanelProps) {
  return (
    <Reveal className={className}>
      <div className="relative overflow-hidden rounded-[32px] bg-navy-900 p-8 sm:p-12">
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            {eyebrow && (
              <p className="text-sm font-bold uppercase tracking-title text-brand-blue">{eyebrow}</p>
            )}
            <h2 className="text-title mt-3 text-2xl text-white sm:text-3xl">{title}</h2>
            {text && <p className="mt-4 text-base leading-relaxed text-white/70">{text}</p>}

            {items && items.length > 0 && (
              <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                      <svg width="12" height="12" viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M2 7 L5.5 10.5 L12 3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-white/85 sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8">
              <Button href={ctaHref} external={ctaHref.startsWith("http")}>
                {ctaLabel}
              </Button>
            </div>
          </div>

          {aside && <div>{aside}</div>}
        </div>
      </div>
    </Reveal>
  );
}
