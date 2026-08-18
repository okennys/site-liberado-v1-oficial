import Image from "next/image";

type Logo = { name: string; src: string };

type LogoMarqueeProps = {
  logos: Logo[];
  className?: string;
};

// Faixa de logos de clientes em loop contínuo (ver .animate-marquee em
// globals.css). Os arquivos já vêm normalizados no mesmo tamanho de prancheta
// (1111x266) — cada logo escalado/centralizado pelo designer, então o
// "mesmo tamanho" não depende só da caixa CSS, o próprio arquivo já resolve.
// A trilha é a lista duplicada (2x) pra loop sem costura; quem prefere menos
// movimento vê a faixa parada (media query cuida disso, sem JS).
export default function LogoMarquee({ logos, className = "" }: LogoMarqueeProps) {
  const track = [...logos, ...logos];

  return (
    <div className={`logo-marquee-fade overflow-hidden ${className}`}>
      <div className="animate-marquee flex w-max items-center gap-4 hover:[animation-play-state:paused]">
        {track.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex h-24 w-48 shrink-0 items-center justify-center rounded-xl bg-white px-8 py-5"
          >
            <div className="relative h-12 w-full grayscale transition-all duration-300 hover:grayscale-0">
              <Image src={logo.src} alt={logo.name} fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
