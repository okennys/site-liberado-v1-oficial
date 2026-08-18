"use client";

import { motion } from "framer-motion";
import type { ElementType } from "react";

type SplitHeadingProps = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
};

const container = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.06, delayChildren: delay },
  }),
};

const word = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

// Título entra palavra por palavra, "revelado" de dentro de uma máscara (cada
// palavra fica num span com overflow escondido) — o efeito clássico de
// hero da Apple. A estrutura do DOM é igual em servidor e cliente; quem
// desliga a animação para quem prefere menos movimento é o
// <MotionConfig reducedMotion="user"> no layout raiz (ver Reveal.tsx).
export default function SplitHeading({ text, as = "h2", className = "", delay = 0 }: SplitHeadingProps) {
  const Tag = as;
  const words = text.split(" ");

  return (
    <Tag className={className}>
      <motion.span
        className="inline"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        custom={delay}
      >
        {words.map((w, i) => (
          <span
            key={i}
            className={`inline-block overflow-hidden pb-1 align-bottom ${i < words.length - 1 ? "mr-[0.25em]" : ""}`}
          >
            <motion.span className="inline-block" variants={word}>
              {w}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
