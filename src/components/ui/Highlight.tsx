import type { ReactNode } from "react";

type HighlightProps = {
  children: ReactNode;
  tone?: "navy" | "light";
  className?: string;
};

// Destaque de trecho dentro de um parágrafo corrido — via composição JSX
// (não parsing de markup em string), para ficar consistente com o resto do
// design system. Usar com moderação: 1-2 trechos por bloco de texto, nunca a
// frase toda.
//
// `text-brand-blue` só tem contraste (WCAG AA) sobre fundo navy — é a regra
// do BRAND.md. Sobre fundo claro, o destaque usa navy (mesma cor do corpo do
// texto, alto contraste) com um sublinhado azul, mantendo a associação com a
// marca sem violar contraste.
const tones: Record<NonNullable<HighlightProps["tone"]>, string> = {
  navy: "text-brand-blue font-semibold",
  light: "text-navy-900 font-semibold underline decoration-brand-blue decoration-2 underline-offset-4",
};

export default function Highlight({ children, tone = "navy", className = "" }: HighlightProps) {
  return <span className={`${tones[tone]} ${className}`}>{children}</span>;
}
