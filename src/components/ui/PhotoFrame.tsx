"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type PhotoFrameProps = {
  src?: string;
  alt?: string;
  floatingCard?: ReactNode;
  statBand?: ReactNode;
  className?: string;
};

// Moldura em shape orgânico (arco/pílula) para foto de pessoa — foto sem
// nenhum tratamento de cor, exibida como veio.
// `floatingCard` e `statBand` flutuam sobre a foto em velocidades de parallax
// diferentes da foto (referência: Migital/Fingoals nunca usam só 1 elemento
// flutuante — sempre há profundidade de camadas).
export default function PhotoFrame({ src, alt = "", floatingCard, statBand, className = "" }: PhotoFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Estado local (não o hook useReducedMotion do framer-motion): o servidor
  // sempre assume "sem preferência" e ajusta só depois de montar no cliente,
  // sem nunca mudar a estrutura do DOM — só o range numérico do parallax.
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-48, 48]);
  const cardY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-16, 64]);
  const bandY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [24, -24]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        style={{ y: photoY }}
        className="relative aspect-[3/4] w-full overflow-hidden rounded-t-full rounded-b-3xl bg-navy-900"
      >
        {src ? (
          <Image src={src} alt={alt} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-brand-blue/25 via-blue-light/15 to-navy-900">
            <svg width="88" height="88" viewBox="0 0 88 88" aria-hidden="true" className="text-white/15">
              <circle cx="44" cy="32" r="16" fill="currentColor" />
              <path d="M12 82c0-20 14-32 32-32s32 12 32 32" fill="currentColor" />
            </svg>
          </div>
        )}
      </motion.div>

      {floatingCard && (
        <motion.div style={{ y: cardY }} className="absolute -right-3 -top-6 z-10 rotate-3 sm:-right-8">
          {floatingCard}
        </motion.div>
      )}

      {statBand && (
        <motion.div style={{ y: bandY }} className="absolute inset-x-3 -bottom-8 z-10 sm:inset-x-8">
          {statBand}
        </motion.div>
      )}
    </div>
  );
}
