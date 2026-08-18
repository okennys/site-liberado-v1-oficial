"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

// Fade + subida discreta ao entrar na viewport. A estrutura do DOM é sempre a
// mesma (servidor e cliente) — quem desliga a animação para quem prefere
// menos movimento é o <MotionConfig reducedMotion="user"> lá no layout raiz,
// não uma ramificação aqui (ramificar por useReducedMotion quebra a hidratação:
// o servidor sempre assume "sem preferência").
export default function Reveal({ children, delay = 0, y = 24, className = "" }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
