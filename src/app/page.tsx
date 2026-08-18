import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatBadge from "@/components/ui/StatBadge";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import ProductSnippet from "@/components/ui/ProductSnippet";
import FeaturePanel from "@/components/ui/FeaturePanel";
import ScanBanner from "@/components/ui/ScanBanner";
import Highlight from "@/components/ui/Highlight";
import PhotoMosaic from "@/components/ui/PhotoMosaic";
import Carousel from "@/components/ui/Carousel";
import MediaCard from "@/components/ui/MediaCard";
import LogoMarquee from "@/components/ui/LogoMarquee";
import BentoCard from "@/components/ui/BentoCard";
import ScrollBlurQuote from "@/components/ui/ScrollBlurQuote";
import ClosingCta from "@/components/ui/ClosingCta";
import { solucoes } from "@/data/solucoes";

export const metadata: Metadata = {
  title: "Plataforma de Verificação de Dados e Background Check",
  description:
    "Verifique pessoas, empresas e documentos em segundos com uma plataforma de Background Check, validação de identidade, biometria, OCR e análise de risco para decisões empresariais mais seguras.",
};

const fluxoCards = [
  {
    title: "Integração com os sistemas da empresa",
    text: "A consulta pode ser realizada diretamente pela plataforma Liberado ou integrada aos sistemas internos da empresa por meio de API.",
  },
  {
    title: "Consulta automatizada nas fontes de informação",
    text: "A Liberado realiza consultas utilizando integrações tecnológicas com diferentes fontes oficiais e bases especializadas, entre elas órgãos públicos, tribunais, bases cadastrais e parceiros de informação.",
  },
  {
    title: "Organização e processamento dos dados",
    text: "As informações coletadas são processadas e organizadas pela plataforma, transformando dados dispersos em uma análise estruturada.",
  },
  {
    title: "Resultado para tomada de decisão",
    text: "Em poucos segundos, a empresa recebe as informações consolidadas para apoiar seus processos de análise e decisão.",
  },
];

const tecnologiaCards = [
  {
    title: "Integração via API",
    text: "Conecte a Liberado aos sistemas da empresa para automatizar consultas e criar fluxos integrados aos processos internos.",
  },
  {
    title: "Automação via RPA",
    text: "Automatize processos de consulta e coleta de informações em diferentes ambientes, reduzindo etapas manuais.",
  },
  {
    title: "Conexão com fontes oficiais e especializadas",
    text: "A Liberado integra informações provenientes de fontes públicas e privadas, incluindo órgãos oficiais, tribunais e bases especializadas.",
  },
  {
    title: "Dados organizados em uma única plataforma",
    text: "Transforme informações coletadas em análises estruturadas para facilitar a interpretação e acelerar decisões.",
  },
];

const solucoesPlataforma = [
  {
    title: "Verificação de Pessoas",
    text: "Consulte dados cadastrais, antecedentes, processos judiciais, identidade, Facematch e informações de crédito a partir do CPF.",
    href: "/verificacao-de-pessoas",
    cta: "Conhecer Verificação de Pessoas",
    snippet: "status" as const,
    highlight: true,
  },
  {
    title: "Verificação de Empresas",
    text: "Consulte dados cadastrais, societários, fiscais, regulatórios, judiciais, compliance e informações de crédito a partir do CNPJ.",
    href: "/verificacao-de-empresas",
    cta: "Conhecer Verificação de Empresas",
  },
  {
    title: "Biometria",
    text: "Valide identidades com recursos de Face Match e Prova de Vida (Liveness).",
    href: "/biometria",
    cta: "Conhecer Biometria",
  },
  {
    title: "OCR de Documentos",
    text: "Extraia informações de documentos para agilizar processos de cadastro, conferência e validação.",
    href: "/ocr-de-documentos",
    cta: "Conhecer OCR",
  },
  {
    title: "Dados e Gestão de Risco",
    text: "Reúna dados, indicadores, scores e análises para apoiar processos que exigem uma visão mais completa das informações.",
    href: "/dados-e-analises",
    cta: "Conhecer Dados e Gestão de Risco",
    snippet: "score" as const,
  },
  {
    title: "Inteligência Artificial",
    text: "Configure agentes e perfis de consulta para analisar informações de acordo com diferentes contextos e gerar resumos inteligentes.",
    href: "/inteligencia-artificial",
    cta: "Conhecer Inteligência Artificial",
    snippet: "consulta" as const,
  },
  {
    title: "Recursos da Plataforma",
    text: "Simplifique a operação com cadastro em massa, autocadastro, relatórios em PDF e outros recursos.",
    href: "/recursos-da-plataforma",
    cta: "Conhecer Recursos da Plataforma",
  },
];

const diferenciais = [
  {
    title: "Verificações em até 15 segundos",
    text: "Tenha acesso rápido aos resultados para agilizar processos e tomar decisões com mais eficiência.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <circle cx="9" cy="9" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 5v4l3 2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "+200 fontes de informação",
    text: "Conecte dados de diferentes fontes para realizar análises mais completas de pessoas, empresas e documentos.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <ellipse cx="9" cy="4.5" rx="6" ry="2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 4.5V13c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2V4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 9c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Inteligência Artificial aplicada aos resultados",
    text: "Receba uma classificação de risco baseada nas informações analisadas para facilitar a interpretação dos dados.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <rect x="5" y="5" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 2v2M9 14v2M2 9h2M14 9h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Tudo em uma única plataforma",
    text: "Reúna verificações de pessoas, empresas, documentos, biometria e análises em um único ambiente.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <path d="M9 2l7 3.5L9 9l-7-3.5L9 2z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M2 9.5l7 3.5 7-3.5M2 13l7 3.5 7-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Integração via API",
    text: "Conecte as soluções do Liberado aos sistemas utilizados pela sua empresa.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <rect x="2" y="6" width="6" height="6" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <rect x="10" y="6" width="6" height="6" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 9h2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Atendimento próximo e especializado",
    text: "Conte com suporte ágil e atendimento humanizado para tirar dúvidas e aproveitar melhor a plataforma.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <path d="M4 10a5 5 0 0 1 10 0v3a2 2 0 0 1-2 2h-1" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="2.5" y="9" width="3" height="4" rx="1" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <rect x="12.5" y="9" width="3" height="4" rx="1" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

const nichoIcons: Record<string, ReactNode> = {
  "rh-recrutamento": (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <circle cx="9" cy="6" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 15c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  varejo: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M4 6h10l-1 9H5L4 6z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6.5 6V4.5a2.5 2.5 0 0 1 5 0V6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  facilities: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <rect x="4" y="3" width="10" height="13" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 7h1M10 7h1M7 10h1M10 10h1M7 13h1M10 13h1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  saude: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  industria: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M3 15V8l4 3V8l4 3V6l4 3v6H3z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  "seguranca-patrimonial": (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M9 2l6 2.2v4.6c0 4-2.6 6.8-6 8-3.4-1.2-6-4-6-8V4.2L9 2z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  condominios: (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M3 16V9l3-2.5L9 9v7M9 16V6l3-2.5L15 6v10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
};

const nichoFotos: Record<string, string> = {
  "rh-recrutamento": "/images/nichos/rh-recrutamento.png",
  varejo: "/images/nichos/varejo.png",
  facilities: "/images/nichos/facilities.png",
  // Sem foto oficial ainda para Saúde — segue com o placeholder genérico até chegar.
  saude: "/images/people/team-conversation-1.jpg",
  industria: "/images/nichos/industria.jpg",
  "seguranca-patrimonial": "/images/nichos/seguranca-patrimonial.png",
  condominios: "/images/nichos/condominios.png",
};

const mercados = solucoes.filter((solucao) => solucao.categoria === "mercado");

const clientes = [
  { name: "Grupo Brasanitas", src: "/images/clientes/brasanitas.png" },
  { name: "Hagana", src: "/images/clientes/hagana.png" },
  { name: "Colégio Cruzeiro", src: "/images/clientes/colegio-cruzeiro.png" },
  { name: "Grupo Vikings", src: "/images/clientes/vikings.png" },
  { name: "JBS", src: "/images/clientes/jbs.png" },
];

export default function HomePage() {
  return (
    <>
      {/* Bloco 1 | Hero */}
      <Section tone="navy" className="relative isolate overflow-hidden pt-28 sm:pt-36">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/team/hero-oficial.png" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/40" />
        </div>

        <div className="relative max-w-2xl">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-title text-brand-blue">Antes de confiar, valide</p>
          </Reveal>
          <SplitHeading
            as="h1"
            className="text-title mt-4 text-4xl sm:text-5xl lg:text-6xl"
            text="Verifique pessoas e empresas em até 15 segundos."
          />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Tome decisões mais seguras verificando pessoas, empresas e documentos com dados confiáveis,
              inteligência artificial e múltiplas fontes de informação. O Liberado reúne validação de
              identidade, Background Check, biometria e análise de risco em{" "}
              <Highlight tone="navy">uma única plataforma</Highlight>.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <p className="mt-5 text-xs font-bold uppercase tracking-title text-white/40">
              Tecnologia com propósito · Confiança em cada decisão
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/planos">Teste Grátis</Button>
              <Button href="#solucoes" variant="outline-light">
                Ver Soluções
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Bloco 2 | Clientes e Prova Social */}
      <Section tone="tint" roundedTop>
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <SplitHeading as="h2" className="text-title text-2xl sm:text-3xl" text="Empresas que já confiam no Liberado." />
          <Button href="/quem-somos" variant="ghost">
            Conheça a plataforma
          </Button>
        </div>
        <Reveal delay={0.1} className="mt-10">
          <LogoMarquee logos={clientes} />
        </Reveal>
      </Section>

      {/* Bloco 3 | Sobre o Produto — carrossel de nichos (referência: lorolabs.ai) */}
      <Section id="solucoes" tone="light" roundedTop>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-title text-brand-blue">Sobre o Produto</p>
          <SplitHeading
            as="h2"
            className="text-title mt-3 text-2xl sm:text-3xl"
            text="Tecnologia que se adapta a cada operação."
          />
          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-navy-900/70">
              Reunimos verificação de pessoas, empresas e documentos em{" "}
              <Highlight tone="light">uma única plataforma</Highlight>, adaptada aos desafios de cada
              mercado que atendemos.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-12">
          <Carousel>
            {mercados.map((mercado, index) => (
              <MediaCard
                key={mercado.slug}
                href={`/solucoes/${mercado.slug}`}
                src={nichoFotos[mercado.slug]}
                alt={mercado.cardTitle}
                icon={nichoIcons[mercado.slug]}
                index={index + 1}
                total={mercados.length}
                title={mercado.cardTitle}
                hoverText={mercado.cardText}
              />
            ))}
          </Carousel>
        </Reveal>
      </Section>

      {/* Bloco 4 | Testemunho */}
      <Section tone="tint" roundedTop>
        <ScrollBlurQuote
          quote="A Liberado não apenas simplificou nossas verificações — trouxe agilidade e confiança para decisões que antes levavam dias."
          author="Depoimento de cliente · em breve"
          className="mx-auto max-w-3xl"
        />
      </Section>

      {/* Bloco 5 | Stats */}
      <Section tone="light" roundedTop>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <StatBadge countUp align="center" value="+400" label="clientes atendidos" />
          <StatBadge countUp align="center" value="+5M" label="verificações realizadas" />
          <StatBadge countUp align="center" value="+200" label="fontes de informação" />
          <StatBadge countUp align="center" value="98%" label="índice de satisfação" />
        </div>
      </Section>

      {/* Bloco 6 | Cover full-bleed (referência: lorolabs.ai — seção sem padding/rounded,
          seguida de uma seção com roundedTop, criando o efeito de "tomar a tela toda") */}
      <Section tone="navy" bleed className="relative min-h-screen">
        <Image src="/images/team/trabalho-01-v2.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/10 to-transparent" />
        <Reveal className="absolute bottom-8 right-6 sm:bottom-14 sm:right-10 lg:right-16">
          <div className="max-w-md border-r-2 border-brand-blue py-1 pr-5 text-right sm:pr-6">
            <p className="text-xs font-bold uppercase tracking-title text-brand-blue sm:text-sm">
              Confiança em cada decisão
            </p>
            <p className="text-title mt-3 text-xl leading-snug text-white sm:text-2xl lg:text-3xl">
              Cada verificação da Liberado é <Highlight tone="navy">registrada e rastreável</Highlight> —
              construída para gerar confiança do primeiro acesso à decisão final.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Bloco 7 | Por que importa (evolução de "Diferenciais") */}
      <Section tone="light" roundedTop>
        <div className="max-w-2xl">
          <SplitHeading
            as="h2"
            className="text-title text-2xl sm:text-3xl"
            text="Mais velocidade, mais inteligência e mais segurança para suas decisões."
          />
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
              <BentoCard icon={item.icon} title={item.title} text={item.text} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Bloco 8 | Como funciona */}
      <Section tone="tint" roundedTop>
        <div className="max-w-2xl">
          <SplitHeading
            as="h2"
            className="text-title text-2xl sm:text-3xl"
            text="Como o Liberado transforma dados em decisões mais seguras?"
          />
          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-navy-900/70">
              O Liberado automatiza verificações que antes exigiam pesquisas manuais em diferentes
              sistemas. A plataforma reúne informações de pessoas, empresas e documentos, organizando os
              dados para apoiar decisões mais rápidas e seguras.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mx-auto mt-10 max-w-3xl">
          <ScanBanner />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fluxoCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <Card eyebrow={`Etapa ${index + 1}`} title={card.title}>
                {card.text}
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 max-w-2xl">
          <SplitHeading
            as="h3"
            className="text-title text-xl sm:text-2xl"
            text="Tecnologia que conecta dados, sistemas e decisões."
          />
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tecnologiaCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <Card title={card.title}>{card.text}</Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Bloco 9 | Soluções da Plataforma */}
      <Section tone="light" roundedTop>
        <div className="max-w-2xl">
          <SplitHeading
            as="h2"
            className="text-title text-2xl sm:text-3xl"
            text="Tudo o que sua empresa precisa para validar informações em um único lugar."
          />
          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-navy-900/70">
              Combine consultas, documentos, biometria e análise de dados para diferentes necessidades da
              sua operação.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solucoesPlataforma.map((item, index) => (
            <Reveal key={item.href} delay={index * 0.06}>
              <div
                className={`flex h-full flex-col justify-between rounded-2xl p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 ${
                  item.highlight
                    ? "bg-brand-blue shadow-brand-blue/20"
                    : "border border-navy-900/10 bg-white shadow-navy-900/5"
                }`}
              >
                <div>
                  <h3 className={`text-subtitle text-lg ${item.highlight ? "text-white" : "text-navy-900"}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed ${item.highlight ? "text-white/80" : "text-navy-900/70"}`}>
                    {item.text}
                  </p>
                  {item.snippet && <ProductSnippet variant={item.snippet} className="mt-4" />}
                </div>
                <Link
                  href={item.href}
                  className={`mt-4 inline-flex items-center gap-1 text-sm font-bold tracking-title hover:underline ${
                    item.highlight ? "text-white" : "text-brand-blue"
                  }`}
                >
                  {item.cta} →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Bloco 10 | Painel de destaque (estilo Migital: headline + lista + CTA em bloco escuro) */}
      <Section tone="tint">
        <FeaturePanel
          eyebrow="Por que a Liberado"
          title="Uma plataforma completa para decisões mais seguras."
          text="Reúna verificações de pessoas, empresas e documentos com dados confiáveis e inteligência artificial — sem depender de múltiplos sistemas."
          items={[
            "Verificações em até 15 segundos",
            "+200 fontes de informação conectadas",
            "Inteligência Artificial aplicada aos resultados",
            "Atendimento próximo e especializado",
          ]}
          ctaLabel="Teste Grátis"
          ctaHref="/planos"
          aside={
            <PhotoMosaic
              className="aspect-[4/5] w-full grid-cols-2 grid-rows-2"
              tiles={[
                { type: "photo", src: "/images/box/equipe-corredor-1.png", alt: "Equipe Liberado em conversa no corredor do escritório" },
                { type: "photo", src: "/images/box/equipe-laptop.png", alt: "Colaboradora Liberado em reunião pelo laptop" },
                { type: "photo", src: "/images/box/equipe-corredor-2.png", alt: "Equipe Liberado caminhando pelo escritório" },
                { type: "photo", src: "/images/box/equipe-evento.png", alt: "Equipe Liberado no Summit São Paulo 2024" },
              ]}
            />
          }
        />
      </Section>

      {/* Bloco 11 | CTA Final */}
      <ClosingCta
        title="Simplifique verificações com uma plataforma completa."
        text="Teste o Liberado gratuitamente e tenha acesso a dados, tecnologia e análises para verificar pessoas, empresas e documentos de forma mais rápida."
      />
    </>
  );
}
