import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";

export const metadata: Metadata = {
  title: "Segurança e LGPD",
  description: "Conheça os compromissos da Liberado com segurança, privacidade e proteção de dados.",
};

const pilares = [
  {
    title: "Privacidade e LGPD",
    text: "O tratamento das informações segue princípios de finalidade, necessidade, transparência e segurança, respeitando os direitos dos titulares de dados.",
  },
  {
    title: "Proteção de Dados",
    text: "Adotamos medidas técnicas e organizacionais para proteger informações contra acessos indevidos e garantir maior segurança durante todo o ciclo de tratamento dos dados.",
  },
  {
    title: "Controle de Acesso",
    text: "Utilizamos controles de permissão para garantir que usuários tenham acesso apenas às informações necessárias para sua atuação dentro da plataforma.",
  },
  {
    title: "Rastreabilidade e Auditoria",
    text: "Mantemos registros das operações realizadas na plataforma, permitindo maior controle e transparência sobre as atividades executadas.",
  },
  {
    title: "Segurança da Infraestrutura",
    text: "Nossa plataforma utiliza uma infraestrutura tecnológica preparada para oferecer disponibilidade, desempenho e proteção dos dados tratados.",
  },
  {
    title: "Governança e Responsabilidade",
    text: "Acompanhamos continuamente nossas práticas de segurança e privacidade para evoluir nossos processos e manter um ambiente confiável para nossos clientes.",
  },
];

export default function SegurancaLgpdPage() {
  return (
    <>
      <Section tone="navy" className="pt-28 sm:pt-36">
        <div className="relative max-w-2xl">
          <SplitHeading as="h1" className="text-title text-4xl sm:text-5xl" text="Segurança e privacidade como parte da nossa tecnologia." />
          <Reveal delay={0.15}>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              No Liberado, entendemos que informações confiáveis exigem responsabilidade. Por isso,
              desenvolvemos nossa plataforma seguindo boas práticas de segurança, privacidade e proteção
              de dados.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="light" roundedTop>
        <div className="max-w-2xl">
          <SplitHeading as="h2" className="text-title text-2xl sm:text-3xl" text="Protegendo informações com responsabilidade e transparência." />
          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-navy-900/70">
              A segurança dos dados é parte fundamental da nossa operação. Trabalhamos para garantir que
              as informações sejam tratadas de forma responsável, transparente e alinhada aos princípios
              da Lei Geral de Proteção de Dados (LGPD).
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="tint" roundedTop>
        <SplitHeading as="h2" className="text-title text-2xl sm:text-3xl" text="Como protegemos as informações" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pilares.map((pilar, index) => (
            <Reveal key={pilar.title} delay={index * 0.06}>
              <Card title={pilar.title}>{pilar.text}</Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="light" roundedTop>
        <div className="max-w-2xl">
          <SplitHeading as="h2" className="text-title text-2xl sm:text-3xl" text="Compromisso com o uso responsável dos dados." />
          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-navy-900/70">
              A Liberado utiliza informações exclusivamente para finalidades legítimas relacionadas aos
              serviços contratados por seus clientes. Não comercializamos dados ou bases de informações.
              Nosso compromisso é oferecer tecnologia para apoiar processos de análise de forma
              responsável, segura e transparente.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="navy" roundedTop>
        <div className="relative max-w-2xl">
          <SplitHeading as="h2" className="text-title text-2xl sm:text-3xl" text="Conheça nossas políticas" />
          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Disponibilizamos documentos que apresentam nossas práticas, responsabilidades e
              compromissos relacionados ao uso da plataforma.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/politica-de-privacidade"
                className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-bold tracking-title text-white ring-1 ring-white/15 hover:bg-white/15"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-de-uso"
                className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-bold tracking-title text-white ring-1 ring-white/15 hover:bg-white/15"
              >
                Termos de Uso
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
