"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

type ScanBannerProps = {
  className?: string;
};

// Banner de "escaneamento facial" — portado do protótipo
// `ASSETS SITE/banner_animado_v2.html` (mesmas imagens/tempos/easings, via
// Web Animations API nos refs; geometria 1440×810). Duas diferenças do
// protótipo: o gatilho deixa de ser "ao carregar a página" e passa a ser "ao
// entrar na viewport" (useInView, once), e existe o corte para
// prefers-reduced-motion (vai direto pro estado final, sem animar).
export default function ScanBanner({ className = "" }: ScanBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const cornersRef = useRef<SVGImageElement>(null);
  const sweepRef = useRef<SVGPathElement>(null);
  const eyesRef = useRef<SVGImageElement>(null);
  const wipeRef = useRef<SVGLineElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);

  const inView = useInView(containerRef, { once: true, margin: "-80px" });
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!inView) return;
    const corners = cornersRef.current;
    const sweep = sweepRef.current;
    const eyes = eyesRef.current;
    const wipe = wipeRef.current;
    const scan = scanRef.current;
    const svg = svgRef.current;
    if (!corners || !sweep || !eyes || !wipe || !scan || !svg) return;

    if (reduceMotion) {
      corners.setAttribute("opacity", "1");
      eyes.setAttribute("opacity", "1");
      sweep.setAttribute("stroke-dashoffset", "0");
      wipe.setAttribute("stroke-dashoffset", "0");
      return;
    }

    scan.animate(
      [
        { opacity: 0, top: "3.4%" },
        { opacity: 1, offset: 0.06 },
        { opacity: 1, offset: 0.9 },
        { opacity: 0, top: "37%" },
      ],
      { duration: 1600, delay: 300, easing: "linear", fill: "forwards" }
    );
    corners.animate(
      [
        { opacity: 0, transform: "scale(1.16)" },
        { opacity: 1, transform: "scale(0.98)", offset: 0.7 },
        { opacity: 1, transform: "scale(1)" },
      ],
      { duration: 430, delay: 1850, easing: "ease-out", fill: "forwards" }
    );
    sweep.animate([{ strokeDashoffset: 100 }, { strokeDashoffset: 0 }], {
      duration: 1500,
      delay: 2150,
      easing: "cubic-bezier(.42,0,.58,1)",
      fill: "forwards",
    });
    eyes.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      delay: 3700,
      easing: "ease-out",
      fill: "forwards",
    });
    wipe.animate([{ strokeDashoffset: 100 }, { strokeDashoffset: 0 }], {
      duration: 500,
      delay: 3950,
      easing: "ease-in-out",
      fill: "forwards",
    });
    svg.animate([{ opacity: 1 }, { opacity: 0.32, offset: 0.45 }, { opacity: 1 }], {
      duration: 460,
      delay: 4550,
      easing: "ease-in-out",
      fill: "forwards",
    });
  }, [inView, reduceMotion]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-[32px] bg-navy-900 ${className}`}
      style={{ aspectRatio: "1440 / 810" }}
    >
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-scan/backdrop-v2.jpg" alt="" fill className="object-cover" />
      </div>

      <svg ref={svgRef} viewBox="0 0 1440 810" className="absolute inset-0 z-10 h-full w-full" aria-hidden="true">
        <defs>
          <mask id="scan-sweep-mask">
            <path
              ref={sweepRef}
              d="M364 307 A105 105 0 0 1 364 517 A105 105 0 0 1 364 307"
              fill="none"
              stroke="#fff"
              strokeWidth={240}
              strokeLinecap="butt"
              pathLength={100}
              strokeDasharray={100}
              strokeDashoffset={100}
            />
          </mask>
          <mask id="scan-smile-mask">
            <line
              ref={wipeRef}
              x1={267}
              y1={522}
              x2={463}
              y2={522}
              stroke="#fff"
              strokeWidth={73}
              strokeLinecap="butt"
              pathLength={100}
              strokeDasharray={100}
              strokeDashoffset={100}
            />
          </mask>
        </defs>
        <image
          ref={cornersRef}
          href="/images/hero-scan/corners-v2.png"
          x={0}
          y={0}
          width={1440}
          height={810}
          opacity={0}
          style={{ transformOrigin: "364px 412px" }}
        />
        <image href="/images/hero-scan/contour-v2.png" x={0} y={0} width={1440} height={810} mask="url(#scan-sweep-mask)" />
        <image ref={eyesRef} href="/images/hero-scan/eyes-v2.png" x={0} y={0} width={1440} height={810} opacity={0} />
        <image href="/images/hero-scan/smile-v2.png" x={0} y={0} width={1440} height={810} mask="url(#scan-smile-mask)" />
      </svg>

      <div className="absolute inset-0 z-20">
        <Image
          src="/images/hero-scan/person-v2.png"
          alt="Pessoa sendo verificada pela plataforma Liberado"
          fill
          className="object-cover"
        />
      </div>

      <div
        ref={scanRef}
        className="absolute z-30 rounded-full opacity-0"
        style={{
          left: "55.5%",
          width: "14.6%",
          height: "3px",
          top: "3.4%",
          background: "#4dc3f0",
          boxShadow: "0 0 16px 4px rgba(77,196,239,.85)",
        }}
      />
    </div>
  );
}
