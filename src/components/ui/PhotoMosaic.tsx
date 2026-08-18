import Image from "next/image";
import type { ReactNode } from "react";

type MosaicTile =
  | { type: "photo"; src: string; alt: string; className?: string }
  | { type: "slot"; content: ReactNode; className?: string };

type PhotoMosaicProps = {
  tiles: MosaicTile[];
  className?: string;
};

// Grid de fotos — quem chama controla o template do grid (colunas/linhas) e
// o span de cada tile via className. Um tile pode ser `slot` (qualquer
// ReactNode) em vez de foto, pra encaixar um Card/ProductSnippet no meio do
// mosaico.
export default function PhotoMosaic({ tiles, className = "" }: PhotoMosaicProps) {
  return (
    <div className={`grid gap-3 ${className}`}>
      {tiles.map((tile, index) => (
        <div key={index} className={`relative overflow-hidden rounded-2xl ${tile.className ?? ""}`}>
          {tile.type === "photo" ? (
            <Image src={tile.src} alt={tile.alt} fill className="object-cover" />
          ) : (
            tile.content
          )}
        </div>
      ))}
    </div>
  );
}
