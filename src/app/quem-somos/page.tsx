import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a trajetória da Liberado, nossa missão, visão e os valores que orientam a construção das nossas soluções.",
};

const valores = [
  {
    title: "Transparência",
    text: "Atuamos com clareza, responsabilidade e ética em todas as nossas relações.",
  },
  {
    title: "Segurança",
    text: "Tratamos informações com responsabilidade, seguindo boas práticas de proteção e privacidade de dados.",
  },
  {
    title: "Agilidade",
    text: "Buscamos reduzir processos manuais e tornar operações mais simples e eficientes.",
  },
  {
    title: "Inovação",
    text: "Evoluímos continuamente nossas soluções para acompanhar as necessidades do mercado.",
  },
  {
    title: "Compromisso",
    text: "Construímos relações de confiança, buscando gerar valor para nossos clientes em cada entrega.",
  },
];

export default function QuemSomosPage() {
  return (
    <>
      {/* Bloco 1 | Hero */}
      <Section tone="navy" className="pt-28 sm:pt-36">
        <div className="relative max-w-3xl">
          <h1 className="text-title text-4xl sm:text-5xl">
            Conheça a empresa por trás da plataforma Liberado.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            A Liberado nasceu para simplificar processos que antes dependiam de análises manuais,
            diferentes fontes de informação e muito tempo operacional. Desde o início, nosso
            objetivo é transformar essa realidade por meio da tecnologia, tornando processos mais
            rápidos, organizados e eficientes para empresas de diferentes segmentos.
          </p>
        </div>
      </Section>

      {/* Bloco 2 | Nossa Trajetória */}
      <Section tone="light">
        <div className="max-w-2xl">
          <h2 className="text-title text-2xl sm:text-3xl">Nossa Trajetória</h2>
          <p className="mt-4 text-base leading-relaxed text-navy-900/70">
            A Liberado nasceu em São Paulo com um propósito claro: simplificar processos que, por
            muito tempo, consumiram tempo e recursos das empresas. Ao longo da nossa evolução,
            desenvolvemos soluções para tornar análises mais ágeis, organizadas e confiáveis,
            acompanhando as necessidades de empresas que buscam mais eficiência em suas
            operações.
          </p>
        </div>
      </Section>

      {/* Bloco 3 | Missão + Bloco 4 | Visão */}
      <Section tone="tint">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-title text-2xl sm:text-3xl">Nossa Missão</h2>
            <p className="mt-4 text-base leading-relaxed text-navy-900/70">
              Automatizar processos por meio da tecnologia, unindo inteligência, agilidade e
              segurança para apoiar empresas na tomada de decisões mais confiáveis.
            </p>
          </div>
          <div>
            <h2 className="text-title text-2xl sm:text-3xl">Nossa Visão</h2>
            <p className="mt-4 text-base leading-relaxed text-navy-900/70">
              Ser referência em soluções inteligentes para análise de informações e apoio à
              tomada de decisão, contribuindo para operações mais eficientes e seguras.
            </p>
          </div>
        </div>
      </Section>

      {/* Bloco 5 | Nossos Valores */}
      <Section tone="light">
        <h2 className="text-title text-2xl sm:text-3xl">Nossos Valores</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valores.map((valor, index) => (
            <Reveal key={valor.title} delay={index * 0.06}>
              <Card title={valor.title}>{valor.text}</Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Bloco 6 | Encerramento */}
      <Section tone="navy">
        <div className="relative max-w-2xl">
          <h2 className="text-title text-2xl sm:text-3xl">
            Construímos tecnologia para empresas que precisam evoluir seus processos.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            A Liberado segue desenvolvendo soluções para apoiar empresas em um cenário cada vez
            mais dinâmico, conectando tecnologia, eficiência e confiança.
          </p>
        </div>
      </Section>
    </>
  );
}
