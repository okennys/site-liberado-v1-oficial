import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

type MediaCardProps = {
  href: string;
  src: string;
  alt: string;
  icon: ReactNode;
  index: number;
  total: number;
  title: string;
  hoverText: string;
  className?: string;
};

// Card do carrossel "Sobre o Produto" — referência: cards de serviço da
// lorolabs.ai (foto full-bleed + badge de ícone + contador + título no
// rodapé; hover revela frase curta + seta, confirmado ao vivo no site deles).
export default function MediaCard({
  href,
  src,
  alt,
  icon,
  index,
  total,
  title,
  hoverText,
  className = "",
}: MediaCardProps) {
  const counter = `${String(index).padStart(2, "0")}/${String(total).padStart(2, "0")}`;

  return (
    <Link
      href={href}
      className={`group relative flex h-[420px] w-[270px] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-2xl sm:w-[320px] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />

      <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur">
        {icon}
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
        {counter}
      </span>

      <div className="relative z-10 p-6">
        <h3 className="text-subtitle text-xl text-white">{title}</h3>
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:mt-3 group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <div className="flex min-h-0 items-end justify-between gap-3 overflow-hidden">
            <p className="text-sm leading-relaxed text-white/80">{hoverText}</p>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M3 11 L11 3 M5 3 H11 V9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
