"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ScrollBlurQuoteProps = {
  quote: string;
  author?: string;
  className?: string;
};

// Citação que entra borrada e vai ficando nítida conforme o scroll avança
// por ela (referência: testemunho da lorolabs.ai). v1 em bloco único — o
// blur por palavra fica pra próxima rodada de animação. Mesmo padrão de
// useScroll/useTransform já usado no PhotoFrame; range zera com
// prefers-reduced-motion (estado local + matchMedia, mesmo padrão do resto
// do design system).
export default function ScrollBlurQuote({ quote, author, className = "" }: ScrollBlurQuoteProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "start 0.35"] });
  const blur = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [10, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [0.25, 1]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <motion.blockquote
        style={{ filter, opacity }}
        className="text-title text-2xl leading-snug text-navy-900 sm:text-3xl"
      >
        “{quote}”
      </motion.blockquote>
      {author && <p className="mt-6 text-xs font-bold uppercase tracking-title text-slate-blue">{author}</p>}
    </div>
  );
}
