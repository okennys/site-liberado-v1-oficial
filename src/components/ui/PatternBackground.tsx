import Image from "next/image";

// Pattern oficial da marca (public/brand/) — 2 formas reais do brandbook
// ("check": curva/swoosh única; "corner": moinho de 4 cantos), cada uma nos
// 3 tons oficiais (+ "navy", pra pattern escuro sobre fundo claro).
// `layout` controla onde/como sangra:
// - "corners" (padrão): 2 instâncias médias nos cantos opostos, sangrando
//   pra fora da borda da Section — uso em hero de página (texto ao lado).
// - "edges": 2 instâncias grandes coladas nas bordas esquerda/direita,
//   quase a altura toda da seção — uso em faixas escuras curtas (CTA final,
//   footer), onde não há coluna de texto pra proteger.
// - "frame": 2 instâncias grandes, diagonalmente opostas, por FORA de um
//   cartão vizinho (o wrapper não recorta/`overflow-hidden`) — uso quando o
//   pattern deve emoldurar um card escuro sobre fundo claro, não ficar
//   preso dentro dele. Nunca posicionar atrás do logotipo.
type PatternBackgroundProps = {
  variant?: "positive" | "reduced" | "negative" | "navy";
  shape?: "check" | "corner";
  layout?: "corners" | "edges" | "frame";
  className?: string;
};

// positivo = azul sobre fundo claro · negativo = azul sobre fundo navy ·
// navy = navy sobre fundo claro (emoldurar card escuro) · reduzido = tom
// claro (#F2F6F8), pra uso bem sutil (ex: sobre azul sólido).
const fileByVariant: Record<NonNullable<PatternBackgroundProps["variant"]>, string> = {
  positive: "blue",
  negative: "blue",
  reduced: "light",
  navy: "navy",
};

const opacityByVariant: Record<"corners" | "bold", Record<NonNullable<PatternBackgroundProps["variant"]>, number>> = {
  corners: { positive: 0.18, negative: 0.28, reduced: 0.45, navy: 0.28 },
  bold: { positive: 0.5, negative: 0.65, reduced: 0.55, navy: 0.85 },
};

const ratioByShape: Record<NonNullable<PatternBackgroundProps["shape"]>, number> = {
  check: 195.25 / 327.85,
  corner: 286.95 / 281.12,
};

export default function PatternBackground({
  variant = "positive",
  shape = "check",
  layout = "corners",
  className = "",
}: PatternBackgroundProps) {
  const color = fileByVariant[variant];
  const opacity = opacityByVariant[layout === "corners" ? "corners" : "bold"][variant];
  const src = `/brand/pattern-${shape}-${color}.svg`;
  const ratio = ratioByShape[shape];
  const width = Math.round(520 * ratio);

  if (layout === "edges") {
    // Altura relativa ao container real (não px fixo por breakpoint): a
    // faixa da CTA é baixa e o footer é alto, então a arte precisa acompanhar
    // a altura de CADA seção pra nunca ficar cortada/desproporcional.
    // Offset horizontal em % (não px fixo) pra sangrar de forma consistente
    // em qualquer largura de viewport, sem "pulos" entre breakpoints.
    // z-0 explícito: o conteúdo de quem usa este layout deve sempre declarar
    // z-10 (ou maior) pra garantir que fica por cima do pattern.
    return (
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}>
        <Image
          src={src}
          alt=""
          width={width}
          height={520}
          style={{ opacity }}
          className="absolute -left-[4%] top-1/2 h-[85%] w-auto -translate-y-1/2 sm:-left-[5%]"
        />
        <Image
          src={src}
          alt=""
          width={width}
          height={520}
          style={{ opacity }}
          className="absolute -right-[4%] top-1/2 h-[85%] w-auto -translate-y-1/2 scale-x-[-1] sm:-right-[5%]"
        />
      </div>
    );
  }

  if (layout === "frame") {
    return (
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-visible ${className}`}>
        <Image
          src={src}
          alt=""
          width={width}
          height={520}
          style={{ opacity }}
          className="absolute -left-12 -top-16 h-48 w-auto sm:-left-24 sm:-top-28 sm:h-80"
        />
        <Image
          src={src}
          alt=""
          width={width}
          height={520}
          style={{ opacity }}
          className="absolute -bottom-20 -right-12 h-56 w-auto rotate-180 sm:-bottom-32 sm:-right-24 sm:h-96"
        />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <Image
        src={src}
        alt=""
        width={width}
        height={520}
        style={{ opacity }}
        className="absolute -right-12 -top-20 h-72 w-auto sm:-right-16 sm:-top-24 sm:h-[420px]"
      />
      <Image
        src={src}
        alt=""
        width={width}
        height={520}
        style={{ opacity }}
        className="absolute -bottom-16 -left-12 h-56 w-auto rotate-180 sm:-bottom-20 sm:-left-16 sm:h-72"
      />
    </div>
  );
}
