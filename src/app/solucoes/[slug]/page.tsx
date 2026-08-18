import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { solucoes } from "@/data/solucoes";
import LandingTemplate from "@/components/ui/LandingTemplate";

export function generateStaticParams() {
  return solucoes.map((solucao) => ({ slug: solucao.slug }));
}

export async function generateMetadata({ params }: PageProps<"/solucoes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const solucao = solucoes.find((item) => item.slug === slug);
  if (!solucao) return {};
  return { title: solucao.seoTitle, description: solucao.seoDescription };
}

export default async function SolucaoPage({ params }: PageProps<"/solucoes/[slug]">) {
  const { slug } = await params;
  const solucao = solucoes.find((item) => item.slug === slug);
  if (!solucao) notFound();

  return (
    <LandingTemplate eyebrow={solucao.eyebrow} h1={solucao.h1} intro={solucao.intro} sections={solucao.sections} />
  );
}
