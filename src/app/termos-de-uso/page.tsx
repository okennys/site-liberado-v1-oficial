import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import SplitHeading from "@/components/ui/SplitHeading";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Consulte os Termos de Uso da Liberado e conheça as regras, responsabilidades e condições para utilização da nossa plataforma.",
};

export default function TermosDeUsoPage() {
  return (
    <>
      <Section tone="navy" className="pt-28 sm:pt-36">
        <div className="relative max-w-2xl">
          <SplitHeading as="h1" className="text-title text-4xl sm:text-5xl" text="Termos de Uso" />
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            Conheça as condições, responsabilidades e diretrizes para utilização da plataforma Liberado.
          </p>
          <p className="mt-4 text-sm text-white/50">Última atualização: junho de 2026.</p>
        </div>
      </Section>

      <Section tone="light" roundedTop>
        <div className="mx-auto flex max-w-3xl flex-col gap-12">
          <div>
            <h2 className="text-title text-xl text-navy-900 sm:text-2xl">1. Sobre a Plataforma</h2>
            <p className="mt-3 text-base leading-relaxed text-navy-900/70">
              A Liberado disponibiliza uma plataforma tecnológica para apoio à análise de informações,
              consultas e validações realizadas por empresas, utilizando dados provenientes de fontes
              autorizadas e legítimas. A utilização da plataforma permite que clientes realizem
              processos de análise de acordo com suas necessidades operacionais, respeitando as
              legislações aplicáveis.
            </p>
          </div>

          <div>
            <h2 className="text-title text-xl text-navy-900 sm:text-2xl">2. Uso das Informações</h2>
            <p className="mt-3 text-base leading-relaxed text-navy-900/70">
              Ao utilizar a plataforma para realizar consultas ou validações envolvendo pessoas ou
              empresas, o usuário declara possuir uma finalidade legítima e responsabilidade pelo
              tratamento das informações utilizadas. O usuário deve garantir que suas atividades estejam
              em conformidade com a legislação brasileira aplicável, incluindo a Lei Geral de Proteção de
              Dados (LGPD).
            </p>
          </div>

          <div>
            <h2 className="text-title text-xl text-navy-900 sm:text-2xl">3. Restrições de Uso</h2>
            <p className="mt-3 text-base leading-relaxed text-navy-900/70">
              A plataforma não deve ser utilizada para práticas discriminatórias, ilícitas ou qualquer
              finalidade que viole direitos individuais, normas legais ou princípios de privacidade. A
              Liberado poderá adotar medidas necessárias para impedir usos inadequados ou que estejam em
              desacordo com estes Termos de Uso.
            </p>
          </div>

          <div>
            <h2 className="text-title text-xl text-navy-900 sm:text-2xl">4. Monitoramento e Segurança</h2>
            <p className="mt-3 text-base leading-relaxed text-navy-900/70">
              Para garantir a segurança da plataforma e prevenir usos indevidos, a Liberado poderá
              monitorar atividades realizadas no ambiente, incluindo registros técnicos e informações
              relacionadas às operações executadas. Essas medidas têm como objetivo preservar a
              segurança, a confiabilidade e o uso adequado dos serviços disponibilizados.
            </p>
          </div>

          <div>
            <h2 className="text-title text-xl text-navy-900 sm:text-2xl">5. Foro e Legislação</h2>
            <p className="mt-3 text-base leading-relaxed text-navy-900/70">
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica eleito
              o Foro da Comarca de São Paulo, SP, para resolver eventuais questões relacionadas à
              utilização da plataforma, conforme permitido pela legislação aplicável.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
