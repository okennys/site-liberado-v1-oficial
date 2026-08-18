import type { Metadata } from "next";
import { plataforma } from "@/data/plataforma";
import LandingTemplate from "@/components/ui/LandingTemplate";

const feature = plataforma.find((item) => item.slug === "verificacao-de-empresas")!;

export const metadata: Metadata = { title: feature.seoTitle, description: feature.seoDescription };

export default function VerificacaoDeEmpresasPage() {
  return <LandingTemplate eyebrow={feature.eyebrow} h1={feature.h1} intro={feature.intro} sections={feature.sections} />;
}
