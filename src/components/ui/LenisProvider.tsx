"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import type { ReactNode } from "react";

// Scroll suave com inércia (efeito "Apple-like"). Não inicializa se o usuário
// pedir menos movimento — rolagem nativa assume nesse caso.
export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis();
    let frameId: number;

    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
