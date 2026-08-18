import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import SplitHeading from "@/components/ui/SplitHeading";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Conheça como a Liberado trata, protege e utiliza informações pessoais em sua plataforma, seguindo boas práticas de privacidade e a LGPD.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Section tone="navy" className="pt-28 sm:pt-36">
        <div className="relative max-w-2xl">
          <SplitHeading as="h1" className="text-title text-4xl sm:text-5xl" text="Política de Privacidade" />
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            Nosso compromisso com a proteção e o uso responsável das informações. A Liberado respeita a
            privacidade de usuários, clientes e titulares de dados e adota medidas para garantir que as
            informações tratadas pela plataforma sejam utilizadas de forma segura, transparente e
            alinhada à Lei Geral de Proteção de Dados (LGPD).
          </p>
          <p className="mt-4 text-sm text-white/50">Última atualização: junho de 2026.</p>
        </div>
      </Section>

      <Section tone="light" roundedTop>
        <div className="mx-auto flex max-w-3xl flex-col gap-12">
          <div>
            <h2 className="text-title text-xl text-navy-900 sm:text-2xl">Quais informações podem ser tratadas?</h2>
            <p className="mt-3 text-base leading-relaxed text-navy-900/70">
              Dependendo da utilização dos serviços, a Liberado pode tratar diferentes categorias de
              informações para disponibilizar suas funcionalidades e realizar consultas solicitadas
              pelos clientes.
            </p>

            <h3 className="text-subtitle mt-6 text-base text-navy-900">Dados cadastrais</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-900/70">
              Informações utilizadas para realização de consultas, validações e utilização da
              plataforma. Exemplos:
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed text-navy-900/70">
              <li>Nome</li>
              <li>CPF</li>
              <li>CNPJ</li>
              <li>Dados de contato</li>
              <li>Informações empresariais</li>
            </ul>

            <h3 className="text-subtitle mt-6 text-base text-navy-900">Dados utilizados nas consultas</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-900/70">
              Informações consultadas por meio das integrações disponíveis na plataforma, provenientes
              de fontes oficiais e bases autorizadas.
            </p>

            <h3 className="text-subtitle mt-6 text-base text-navy-900">Dados técnicos de utilização</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-900/70">
              Informações relacionadas ao uso da plataforma, como registros de acesso, logs e dados
              necessários para segurança e funcionamento dos serviços.
            </p>
          </div>

          <div>
            <h2 className="text-title text-xl text-navy-900 sm:text-2xl">
              Utilizamos informações para oferecer análises mais seguras e eficientes.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-navy-900/70">
              As informações tratadas pela Liberado podem ser utilizadas para:
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed text-navy-900/70">
              <li>Realizar consultas e validações solicitadas pelos clientes</li>
              <li>Disponibilizar resultados de análises pela plataforma</li>
              <li>Garantir segurança e funcionamento dos serviços</li>
              <li>Melhorar produtos e funcionalidades</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </div>

          <div>
            <h2 className="text-title text-xl text-navy-900 sm:text-2xl">Tratamento de dados conforme a LGPD.</h2>
            <p className="mt-3 text-base leading-relaxed text-navy-900/70">
              A Liberado realiza o tratamento de informações considerando as bases legais previstas na
              legislação brasileira, incluindo:
            </p>

            <h3 className="text-subtitle mt-6 text-base text-navy-900">Consentimento</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-900/70">Quando aplicável, mediante autorização do titular dos dados.</p>

            <h3 className="text-subtitle mt-6 text-base text-navy-900">Execução de contrato</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-900/70">
              Quando necessário para disponibilizar os serviços contratados pelos clientes.
            </p>

            <h3 className="text-subtitle mt-6 text-base text-navy-900">Legítimo interesse</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-900/70">Quando aplicável, respeitando os direitos e garantias dos titulares.</p>

            <h3 className="text-subtitle mt-6 text-base text-navy-900">Cumprimento de obrigação legal</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-900/70">Quando necessário para atender determinações previstas em lei.</p>
          </div>

          <div>
            <h2 className="text-title text-xl text-navy-900 sm:text-2xl">Uso responsável das informações consultadas.</h2>
            <p className="mt-3 text-base leading-relaxed text-navy-900/70">
              Os clientes da Liberado são responsáveis por utilizar as informações obtidas pela
              plataforma de acordo com suas finalidades legítimas, respeitando a legislação aplicável e
              os direitos dos titulares. A utilização dos serviços deve ocorrer de forma ética,
              transparente e em conformidade com a LGPD.
            </p>
          </div>

          <div>
            <h2 className="text-title text-xl text-navy-900 sm:text-2xl">Como compartilhamos informações.</h2>
            <p className="mt-3 text-base leading-relaxed text-navy-900/70">
              A Liberado não comercializa dados pessoais. As informações podem ser compartilhadas quando
              necessário para:
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed text-navy-900/70">
              <li>Prestação dos serviços contratados</li>
              <li>Operação e manutenção da plataforma</li>
              <li>Cumprimento de obrigações legais</li>
              <li>Atendimento a solicitações autorizadas ou previstas em legislação</li>
            </ul>
          </div>

          <div>
            <h2 className="text-title text-xl text-navy-900 sm:text-2xl">Proteção dos dados tratados.</h2>
            <p className="mt-3 text-base leading-relaxed text-navy-900/70">
              A Liberado adota medidas técnicas e organizacionais para proteger as informações contra
              acessos não autorizados, uso indevido, perda ou alterações indevidas. Para conhecer nossas
              práticas de segurança, acesse{" "}
              <Link href="/seguranca-e-lgpd" className="font-semibold text-brand-blue underline">
                Segurança e LGPD
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-title text-xl text-navy-900 sm:text-2xl">Seus direitos sobre os dados pessoais.</h2>
            <p className="mt-3 text-base leading-relaxed text-navy-900/70">
              Nos termos da LGPD, os titulares podem solicitar informações relacionadas ao tratamento de
              seus dados, incluindo:
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed text-navy-900/70">
              <li>Confirmação da existência de tratamento</li>
              <li>Acesso aos dados</li>
              <li>Correção de informações</li>
              <li>Solicitações relacionadas ao tratamento dos dados</li>
            </ul>
          </div>

          <div>
            <h2 className="text-title text-xl text-navy-900 sm:text-2xl">Uso de cookies e tecnologias semelhantes.</h2>
            <p className="mt-3 text-base leading-relaxed text-navy-900/70">
              A Liberado pode utilizar cookies e tecnologias similares para garantir o funcionamento da
              plataforma, melhorar a experiência de navegação e compreender a utilização dos ambientes
              digitais.
            </p>
          </div>

          <div>
            <h2 className="text-title text-xl text-navy-900 sm:text-2xl">Contato</h2>
            <p className="mt-3 text-base leading-relaxed text-navy-900/70">
              Para dúvidas relacionadas à privacidade, proteção de dados ou exercício de direitos
              previstos na LGPD, entre em contato pelos canais oficiais da Liberado.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
