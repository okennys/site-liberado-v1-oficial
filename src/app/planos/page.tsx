import type { Metadata } from "next";
import Script from "next/script";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import FaqItem from "@/components/ui/FaqItem";
import ClosingCta from "@/components/ui/ClosingCta";
import { whatsappLink } from "@/data/whatsapp";

export const metadata: Metadata = {
  title: "Planos",
  description:
    "Compare os planos do Liberado e escolha a solução ideal para realizar verificações, análises e consultas de pessoas e empresas com mais agilidade e segurança.",
};

const planos = [
  {
    nome: "Start",
    preco: "R$ 397/mês",
    descricao: "Ideal para empresas que desejam iniciar seus processos de verificação utilizando a plataforma Liberado.",
    recursos: [
      { label: "Acesso à plataforma", incluso: true },
      { label: "Consulta básica online", incluso: true },
      { label: "Consulta avançada", incluso: false },
      { label: "Integração via API", incluso: false },
      { label: "Relatório Dossiê", incluso: false },
    ],
  },
  {
    nome: "Basic",
    preco: "R$ 797/mês",
    descricao: "Plano recomendado para empresas que precisam de análises mais completas.",
    recursos: [
      { label: "Acesso à plataforma", incluso: true },
      { label: "Consulta básica online", incluso: true },
      { label: "Consulta avançada", incluso: true },
      { label: "Integração via API", incluso: false },
      { label: "Relatório Dossiê", incluso: true },
    ],
    destaque: true,
  },
  {
    nome: "Standard",
    preco: "R$ 1.797/mês",
    descricao: "Ideal para empresas que desejam integrar verificações diretamente aos seus sistemas.",
    recursos: [
      { label: "Acesso à plataforma", incluso: true },
      { label: "Consulta básica online", incluso: true },
      { label: "Consulta avançada", incluso: true },
      { label: "Integração via API", incluso: true },
      { label: "Relatório Dossiê", incluso: true },
    ],
  },
  {
    nome: "Enterprise",
    preco: "Consulte-nos",
    descricao: "Projetado para operações de grande porte que necessitam de soluções personalizadas, alto volume de consultas e integração conforme as necessidades do negócio.",
    recursos: [
      { label: "Acesso à plataforma", incluso: true },
      { label: "Consulta básica online", incluso: true },
      { label: "Consulta avançada", incluso: true },
      { label: "Integração via API", incluso: true },
      { label: "Relatório Dossiê", incluso: true },
    ],
  },
];

const incluidos = [
  "Plataforma em nuvem",
  "Ambiente seguro",
  "Atualizações contínuas",
  "Atendimento especializado",
  "Evolução constante da plataforma",
];

const faqs = [
  {
    question: "Posso mudar de plano depois?",
    answer: "Sim. Conforme sua operação evolui, é possível migrar para um plano superior.",
  },
  {
    question: "O valor da API está incluso?",
    answer: "A integração via API está disponível a partir do plano Standard.",
  },
  {
    question: "O plano Enterprise possui funcionalidades adicionais?",
    answer: "Sim. O plano Enterprise é personalizado conforme o volume de consultas, integrações e necessidades da operação.",
  },
  {
    question: "Existe implantação?",
    answer: "Nossa equipe orienta todo o processo de implantação e configuração da plataforma.",
  },
];

export default function PlanosPage() {
  return (
    <>
      <Section tone="navy" className="pt-28 sm:pt-36">
        <div className="relative max-w-2xl">
          <SplitHeading as="h1" className="text-title text-4xl sm:text-5xl" text="Escolha o plano ideal para a sua operação." />
          <Reveal delay={0.15}>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              Da validação de informações à automação completa de processos, o Liberado oferece planos
              que acompanham o crescimento da sua empresa.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="tint" roundedTop>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {planos.map((plano, index) => (
            <Reveal key={plano.nome} delay={index * 0.06}>
              <div
                className={`flex h-full flex-col justify-between rounded-2xl p-6 shadow-sm ${
                  plano.destaque
                    ? "bg-navy-900 text-white shadow-navy-900/20"
                    : "border border-navy-900/10 bg-white text-navy-900 shadow-navy-900/5"
                }`}
              >
                <div>
                  <h3 className={`text-subtitle text-lg ${plano.destaque ? "text-white" : "text-navy-900"}`}>
                    {plano.nome}
                  </h3>
                  <p className={`mt-1 text-2xl font-black ${plano.destaque ? "text-brand-blue" : "text-navy-900"}`}>
                    {plano.preco}
                  </p>
                  <p className={`mt-3 text-sm leading-relaxed ${plano.destaque ? "text-white/70" : "text-navy-900/70"}`}>
                    {plano.descricao}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {plano.recursos.map((recurso) => (
                      <li
                        key={recurso.label}
                        className={`flex items-center gap-2 text-sm ${
                          recurso.incluso
                            ? plano.destaque
                              ? "text-white/85"
                              : "text-navy-900/80"
                            : plano.destaque
                              ? "text-white/30"
                              : "text-navy-900/30"
                        }`}
                      >
                        <span>{recurso.incluso ? "✓" : "–"}</span>
                        {recurso.label}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  href={whatsappLink(
                    `Olá! Gostaria de saber sobre o plano ${plano.nome} (${plano.preco}) e também pedir um teste gratuito.`
                  )}
                  external
                  variant={plano.destaque ? "primary" : "ghost"}
                  className="mt-6 w-full"
                >
                  Fale com um consultor
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-navy-900/10 pt-8">
          <p className="text-xs font-bold uppercase tracking-title text-slate-blue">Todos os planos incluem</p>
          {incluidos.map((item) => (
            <span key={item} className="text-sm text-navy-900/70">
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <div className="mx-auto max-w-2xl text-center">
          <SplitHeading as="h2" className="text-title text-2xl sm:text-3xl" text="Prefere preencher um formulário?" />
          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-navy-900/70">
              Deixe seus dados que nossa equipe entra em contato para uma demonstração personalizada.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="mx-auto mt-10 max-w-xl">
          <div id="gf-gorilaforms-20260818-slg-demo-contratacao-copia-8ulm" className="min-h-[200px]" />
          <Script
            src="https://www.gorilaforms.app/e/gorilaforms-20260818-slg-demo-contratacao-copia-8ulm.js"
            strategy="afterInteractive"
          />
        </Reveal>
      </Section>

      <Section tone="light" roundedTop>
        <SplitHeading as="h2" className="text-title text-2xl sm:text-3xl" text="Perguntas Frequentes" />
        <div className="mt-8 flex flex-col gap-4">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Section>

      <ClosingCta
        title="Ainda não sabe qual plano escolher?"
        text="Nossa equipe pode ajudar você a identificar a melhor opção para o seu volume de consultas, integrações e processos."
        ctaLabel="Fale com um consultor"
      />
    </>
  );
}
