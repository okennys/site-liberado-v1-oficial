import Image from "next/image";

// Logotipo oficial (public/brand/) — `logo-menu.png` (tinta navy/azul, pro
// header sobre a pílula branca) e `logo-footer.png` (tinta branca, pro
// footer sobre fundo navy). Diferente das primeiras versões recebidas, os
// dois arquivos atuais têm canal alfa de verdade (confirmado lendo o IHDR:
// colorType 6 = RGBA) — sem o bug antigo do fundo branco chapado.
type LogoMarkProps = {
  tone?: "dark" | "light";
  className?: string;
};

const srcByTone: Record<NonNullable<LogoMarkProps["tone"]>, string> = {
  dark: "/brand/logo-menu.png",
  light: "/brand/logo-footer.png",
};

const naturalRatio: Record<NonNullable<LogoMarkProps["tone"]>, number> = {
  dark: 1607 / 247,
  light: 1608 / 248,
};

export default function LogoMark({ tone = "dark", className = "" }: LogoMarkProps) {
  const ratio = naturalRatio[tone];

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={srcByTone[tone]}
        alt="Liberado"
        width={Math.round(28 * ratio)}
        height={28}
        className="h-7 w-auto sm:h-8"
        priority
      />
    </span>
  );
}
