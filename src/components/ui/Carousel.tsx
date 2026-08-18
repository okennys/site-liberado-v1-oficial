"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

type CarouselProps = {
  children: ReactNode;
  className?: string;
};

// Carrossel horizontal com scroll nativo (overflow-x-auto + scroll-snap) e
// botões prev/next via scrollBy — sem dependência nova (referência: lorolabs.ai,
// confirmado ao vivo que não usa drag/swipe, só os botões). v1: sem estado de
// "seta desabilitada no fim", isso fica pra próxima rodada.
export default function Carousel({ children, className = "" }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: track.clientWidth * 0.8 * direction, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div ref={trackRef} className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2">
        {children}
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => scroll(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition hover:bg-navy-900/5"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M10 3 L5 8 L10 13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Próximo"
          onClick={() => scroll(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-white transition hover:bg-navy-800"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M6 3 L11 8 L6 13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
