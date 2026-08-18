import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import FaqItem from "@/components/ui/FaqItem";
import ClosingCta from "@/components/ui/ClosingCta";

export const metadata: Metadata = {
  title: "Central de Ajuda",
  description: "Encontre respostas para as principais dúvidas sobre a plataforma Liberado.",
};

const faqs = [
  {
    question: "O Liberado está em acordo com a LGPD?",
    answer:
      "Sim. O Liberado leva a sério a proteção de dados pessoais e está em total conformidade com a Lei Geral de Proteção de Dados (LGPD) do Brasil. Coletamos apenas os dados estritamente necessários, sempre com consentimento explícito, utilizamos tecnologias avançadas para proteger as informações, somos transparentes sobre como os dados são tratados e garantimos que os usuários possam acessar, corrigir e excluir seus dados a qualquer momento. Para mais detalhes, consulte nossa Política de Privacidade.",
  },
  {
    question: "Quanto custa para usar o Liberado?",
    answer:
      "O Liberado possui diferentes planos disponíveis, de acordo com o tamanho da sua empresa e o volume de pesquisas que você precisa. Você paga uma assinatura para ter acesso à plataforma e também pelas pesquisas que realizar. Entre em contato com nossa equipe comercial para ter acesso à tabela completa de preços por tipo de pesquisa.",
  },
  {
    question: "O Liberado pode ser usado em RH's e Condomínios?",
    answer:
      "Sim, o Liberado foi desenvolvido para ser facilmente usado nesses modelos de serviço, proporcionando uma experiência de usuário fluida e sem complicações.",
  },
  {
    question: "Existe algum suporte disponível caso tenhamos dúvidas ou problemas com o Liberado?",
    answer:
      "Com certeza! Nossa equipe de suporte está disponível para ajudar com qualquer questão ou dificuldade que você possa encontrar, garantindo que sua experiência com o Liberado seja sempre a melhor possível.",
  },
  {
    question: "Quanto tempo leva para obter os resultados de uma verificação de antecedentes?",
    answer:
      "A verificação é realizada em tempo real e os resultados são gerados quase instantaneamente (em até 15 segundos), permitindo que decisões importantes sejam tomadas com rapidez e confiança.",
  },
];

export default function CentralDeAjudaPage() {
  return (
    <>
      <Section tone="navy" className="pt-28 sm:pt-36">
        <div className="relative max-w-2xl">
          <SplitHeading as="h1" className="text-title text-4xl sm:text-5xl" text="Como podemos ajudar?" />
          <Reveal delay={0.15}>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              Encontre respostas para as dúvidas mais frequentes sobre a plataforma Liberado.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 flex max-w-md items-center gap-3 rounded-full bg-white/10 px-5 py-3 ring-1 ring-white/15">
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0 text-white/60">
                <circle cx="7" cy="7" r="5.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M11 11 L15 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Pesquisar na Central de Ajuda"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="light" roundedTop>
        <SplitHeading as="h2" className="text-title text-2xl sm:text-3xl" text="Perguntas Frequentes" />
        <Reveal delay={0.15}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-900/70">
            Veja as principais dúvidas sobre a plataforma.
          </p>
        </Reveal>
        <div className="mt-8 flex flex-col gap-4">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Section>

      <ClosingCta
        title="Não encontrou a resposta que procurava?"
        text="Nossa equipe está pronta para ajudar."
        ctaLabel="Entrar em contato com o suporte"
      />
    </>
  );
}
