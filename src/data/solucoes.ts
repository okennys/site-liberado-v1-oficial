// Conteúdo das páginas de Soluções (por Mercado e por Caso de Uso).
// Extraído de docs/site-estrutura.txt. A página de Segurança Patrimonial
// não tinha bloco de texto-fonte no PDF original (só aparece no menu) —
// o conteúdo desse registro foi escrito seguindo o mesmo formato e tom de
// voz das páginas de Facilities e Condomínios (grupo temático de
// segurança/controle de acesso).

export type SolucaoSection = {
  heading: string;
  items: { title: string; text: string }[];
};

export type Solucao = {
  slug: string;
  categoria: "mercado" | "uso";
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  cardTitle: string;
  cardText: string;
  sections: SolucaoSection[];
};

export const solucoes: Solucao[] = [
  // ----------------------------------------------------------------------
  // Soluções por Mercado
  // ----------------------------------------------------------------------
  {
    slug: "rh-recrutamento",
    categoria: "mercado",
    seoTitle: "Background Check para RH | Contratação Mais Segura | Liberado",
    seoDescription:
      "Apoie processos de recrutamento com mais informações sobre candidatos, reduzindo incertezas e trazendo mais agilidade para decisões de contratação.",
    eyebrow: "Soluções por Mercado",
    h1: "Contrate melhor com informações completas antes da admissão.",
    intro:
      "Mais informações para apoiar processos seletivos e reduzir incertezas na contratação. O Liberado auxilia equipes de RH e recrutamento a analisarem candidatos antes da admissão, reunindo informações relevantes em uma única plataforma.",
    cardTitle: "RH e Recrutamento",
    cardText: "Verifique candidatos e colaboradores para apoiar processos de contratação mais seguros.",
    sections: [
      {
        heading: "Como o Liberado apoia o RH",
        items: [
          {
            title: "Mais informações antes da contratação",
            text: "Tenha uma visão mais completa dos candidatos para complementar o processo seletivo.",
          },
          {
            title: "Mais agilidade para recrutadores",
            text: "Reduza o tempo gasto na busca e organização de informações durante as etapas de contratação.",
          },
          {
            title: "Processos mais padronizados",
            text: "Utilize critérios consistentes para apoiar análises em diferentes processos seletivos.",
          },
        ],
      },
      {
        heading: "Impactos para a operação de RH",
        items: [
          {
            title: "Apoio na redução de contratações inadequadas",
            text: "Tenha mais informações antes da admissão para reduzir incertezas durante a escolha de candidatos.",
          },
          {
            title: "Apoio ao controle de turnover",
            text: "Contratações mais estruturadas podem contribuir para processos seletivos mais alinhados às necessidades da empresa.",
          },
          {
            title: "Mais produtividade para a equipe",
            text: "Reduza atividades operacionais e permita que o RH dedique mais tempo às atividades estratégicas.",
          },
        ],
      },
    ],
  },
  {
    slug: "varejo",
    categoria: "mercado",
    seoTitle: "Background Check para Varejo | Mais Segurança Operacional | Liberado",
    seoDescription:
      "Apoie decisões no varejo com informações de pessoas e empresas, análises inteligentes e uma plataforma completa para reduzir incertezas.",
    eyebrow: "Soluções por Mercado",
    h1: "Mais confiança para decisões que movimentam o varejo.",
    intro:
      "Informações, tecnologia e análises para apoiar operações com alto volume de pessoas e empresas. O Liberado reúne dados de diferentes fontes, verificações e análises inteligentes para ajudar empresas varejistas a avaliar pessoas, parceiros e relacionamentos importantes para a operação.",
    cardTitle: "Varejo",
    cardText: "Apoie processos de contratação, prevenção a fraudes e relacionamento com clientes e parceiros.",
    sections: [
      {
        heading: "Como o Liberado apoia o Varejo",
        items: [
          {
            title: "Pessoas e colaboradores",
            text: "Apoie processos que envolvem colaboradores e profissionais que fazem parte da operação, trazendo mais informações para análises internas.",
          },
          {
            title: "Parceiros e terceiros",
            text: "Tenha mais informações antes de iniciar ou manter relacionamentos com profissionais e empresas que fazem parte da cadeia operacional.",
          },
          {
            title: "Operações em escala",
            text: "Utilize uma plataforma preparada para empresas que precisam analisar grandes volumes de informações com agilidade.",
          },
          {
            title: "Segurança operacional",
            text: "Fortaleça processos internos com informações organizadas para reduzir incertezas em decisões do dia a dia.",
          },
        ],
      },
      {
        heading: "Benefícios para o Varejo",
        items: [
          {
            title: "Mais agilidade na operação",
            text: "Reduza processos manuais e tenha informações organizadas em menos tempo.",
          },
          {
            title: "Mais controle e padronização",
            text: "Aplique critérios consistentes em diferentes áreas, unidades e operações.",
          },
          {
            title: "Proteção da marca",
            text: "Apoie decisões mais estruturadas em processos que impactam clientes, colaboradores e parceiros.",
          },
          {
            title: "Atendimento próximo e suporte especializado",
            text: "Conte com apoio durante a utilização da plataforma para garantir uma melhor experiência operacional.",
          },
        ],
      },
    ],
  },
  {
    slug: "facilities",
    categoria: "mercado",
    seoTitle: "Background Check para Facilities | Gestão de Terceiros | Liberado",
    seoDescription:
      "Apoie operações de facilities com informações de pessoas e empresas para melhorar processos de análise, gestão de terceiros e segurança operacional.",
    eyebrow: "Soluções por Mercado",
    h1: "Mais confiança para operações que dependem de pessoas.",
    intro:
      "Informações e análises para apoiar a gestão de profissionais, terceiros e parceiros em operações de facilities. O Liberado ajuda empresas de facilities a analisar informações de pessoas e empresas envolvidas na operação, trazendo mais controle e agilidade para processos que exigem confiança.",
    cardTitle: "Facilities",
    cardText: "Valide profissionais e terceiros para aumentar a segurança operacional.",
    sections: [
      {
        heading: "Como o Liberado apoia Facilities",
        items: [
          {
            title: "Gestão de profissionais terceirizados",
            text: "Tenha mais informações sobre profissionais envolvidos em contratos e operações realizadas nos clientes.",
          },
          {
            title: "Apoio na entrada de novos profissionais",
            text: "Estruture processos de análise antes da atuação de colaboradores em diferentes ambientes.",
          },
          {
            title: "Análise de parceiros e empresas",
            text: "Tenha informações para apoiar relacionamentos com empresas terceirizadas e prestadores envolvidos na operação.",
          },
          {
            title: "Operações em diferentes locais",
            text: "Centralize informações e mantenha critérios consistentes em contratos, unidades e clientes distintos.",
          },
        ],
      },
      {
        heading: "Benefícios para Facilities",
        items: [
          {
            title: "Mais confiança na operação",
            text: "Apoie decisões relacionadas a pessoas e empresas que representam sua operação dentro dos clientes.",
          },
          {
            title: "Mais controle sobre terceiros",
            text: "Tenha informações organizadas para auxiliar processos de gestão e relacionamento.",
          },
          {
            title: "Mais agilidade operacional",
            text: "Reduza etapas manuais e facilite análises necessárias para movimentações de profissionais.",
          },
          {
            title: "Proteção da reputação da empresa",
            text: "Fortaleça processos internos em operações onde confiança e qualidade são essenciais.",
          },
        ],
      },
    ],
  },
  {
    slug: "saude",
    categoria: "mercado",
    seoTitle: "Background Check para Saúde | Segurança e Confiança | Liberado",
    seoDescription:
      "Apoie instituições de saúde com informações e análises para processos envolvendo profissionais, parceiros e operações que exigem confiança.",
    eyebrow: "Soluções por Mercado",
    h1: "Mais confiança para decisões em ambientes onde as pessoas importam.",
    intro:
      "Informações organizadas para apoiar processos envolvendo profissionais, parceiros e instituições de saúde. O Liberado auxilia empresas e instituições de saúde a analisarem informações relevantes de pessoas e empresas envolvidas em suas operações.",
    cardTitle: "Saúde",
    cardText: "Apoie processos que exigem validação de informações e maior controle operacional.",
    sections: [
      {
        heading: "Como o Liberado apoia a Saúde",
        items: [
          {
            title: "Profissionais e equipes assistenciais",
            text: "Apoie processos que envolvem pessoas que atuam diretamente em ambientes de cuidado e atendimento.",
          },
          {
            title: "Empresas terceirizadas e prestadores",
            text: "Tenha mais informações sobre parceiros envolvidos em serviços essenciais para a operação.",
          },
          {
            title: "Processos com maior necessidade de confiança",
            text: "Utilize informações organizadas para apoiar decisões em ambientes que exigem atenção e responsabilidade.",
          },
          {
            title: "Gestão de relacionamentos",
            text: "Centralize informações de pessoas e empresas envolvidas na operação da instituição.",
          },
        ],
      },
      {
        heading: "Benefícios para Saúde",
        items: [
          {
            title: "Mais segurança nos processos internos",
            text: "Apoie decisões com informações estruturadas antes de estabelecer relações profissionais ou comerciais.",
          },
          {
            title: "Mais controle operacional",
            text: "Tenha uma visão mais organizada das informações utilizadas nos processos da instituição.",
          },
          {
            title: "Mais eficiência na análise de informações",
            text: "Reduza tempo gasto em consultas dispersas e reúna informações em uma única plataforma.",
          },
          {
            title: "Fortalecimento da confiança",
            text: "Demonstre processos mais estruturados para colaboradores, parceiros e pacientes.",
          },
        ],
      },
    ],
  },
  {
    slug: "industria",
    categoria: "mercado",
    seoTitle: "Background Check para Indústria | Análise de Fornecedores e Parceiros | Liberado",
    seoDescription:
      "Analise informações de pessoas e empresas envolvidas na operação industrial, fornecedores e parceiros para relações mais seguras.",
    eyebrow: "Soluções por Mercado",
    h1: "Mais confiança para relações que movimentam a indústria.",
    intro:
      "Informações de pessoas e empresas para apoiar decisões na cadeia operacional e de negócios. O Liberado ajuda empresas industriais a analisar fornecedores, parceiros, prestadores e profissionais envolvidos em processos estratégicos da operação.",
    cardTitle: "Indústria",
    cardText: "Fortaleça processos de contratação, fornecedores e gestão de terceiros.",
    sections: [
      {
        heading: "Como o Liberado apoia a Indústria",
        items: [
          {
            title: "Fornecedores e parceiros comerciais",
            text: "Tenha mais informações sobre empresas que fazem parte da sua cadeia de relacionamento antes de iniciar ou ampliar negócios.",
          },
          {
            title: "Terceiros com acesso à operação",
            text: "Apoie processos envolvendo empresas e profissionais externos que atuam dentro das instalações industriais.",
          },
          {
            title: "Análises para processos de negócio",
            text: "Reúna informações relevantes para apoiar avaliações relacionadas a novos relacionamentos e operações.",
          },
          {
            title: "Gestão de informações em escala",
            text: "Centralize análises de diferentes envolvidos na operação em uma única plataforma.",
          },
        ],
      },
      {
        heading: "Benefícios para Indústria",
        items: [
          {
            title: "Mais segurança nas relações empresariais",
            text: "Tenha informações adicionais antes de estabelecer conexões comerciais e operacionais.",
          },
          {
            title: "Mais controle sobre a cadeia de parceiros",
            text: "Apoie processos internos envolvendo fornecedores, terceiros e empresas relacionadas.",
          },
          {
            title: "Redução de incertezas operacionais",
            text: "Conte com informações organizadas para apoiar avaliações importantes para o negócio.",
          },
          {
            title: "Processos mais estruturados",
            text: "Padronize análises e facilite decisões em diferentes áreas da organização.",
          },
        ],
      },
    ],
  },
  {
    slug: "seguranca-patrimonial",
    categoria: "mercado",
    seoTitle: "Background Check para Segurança Patrimonial | Controle de Acesso e Terceiros | Liberado",
    seoDescription:
      "Apoie operações de segurança patrimonial com informações de pessoas e empresas para reforçar o controle de acesso de prestadores, terceiros e visitantes.",
    eyebrow: "Soluções por Mercado",
    h1: "Mais controle para operações de segurança patrimonial.",
    intro:
      "Informações e análises para apoiar o controle de acesso de prestadores, terceiros e visitantes em operações de segurança patrimonial. O Liberado ajuda equipes de segurança a analisar informações de pessoas e empresas antes da liberação de acesso, trazendo mais confiança para portarias, condomínios corporativos e áreas de circulação controlada.",
    cardTitle: "Segurança Patrimonial",
    cardText: "Valide profissionais e informações para operações que exigem maior controle.",
    sections: [
      {
        heading: "Como o Liberado apoia a Segurança Patrimonial",
        items: [
          {
            title: "Liberação de acesso de prestadores e visitantes",
            text: "Agilize a análise de profissionais e visitantes antes da liberação de acesso a áreas patrimoniais, com informações organizadas para apoiar a decisão da portaria.",
          },
          {
            title: "Gestão de terceiros e empresas prestadoras",
            text: "Tenha mais informações sobre empresas terceirizadas responsáveis por serviços de segurança, manutenção e apoio operacional.",
          },
          {
            title: "Controle de acesso em diferentes unidades",
            text: "Centralize critérios de liberação e mantenha padrões consistentes entre portarias, condomínios corporativos e outras áreas sob responsabilidade da operação.",
          },
          {
            title: "Apoio às equipes de portaria e segurança",
            text: "Reúna informações relevantes para apoiar decisões rápidas no dia a dia da operação, sem depender de consultas manuais em diferentes sistemas.",
          },
        ],
      },
      {
        heading: "Benefícios para a Segurança Patrimonial",
        items: [
          {
            title: "Mais controle sobre quem acessa a operação",
            text: "Apoie decisões de liberação com informações organizadas sobre prestadores, terceiros e visitantes.",
          },
          {
            title: "Mais agilidade nas portarias",
            text: "Reduza o tempo de espera em liberações de acesso com consultas rápidas e centralizadas.",
          },
          {
            title: "Padronização entre unidades",
            text: "Aplique os mesmos critérios de segurança em diferentes portarias, contratos e áreas patrimoniais.",
          },
          {
            title: "Redução de riscos operacionais",
            text: "Fortaleça processos de controle de acesso com informações mais completas sobre pessoas e empresas envolvidas na operação.",
          },
        ],
      },
    ],
  },
  {
    slug: "condominios",
    categoria: "mercado",
    seoTitle: "Verificação de pessoas para Condomínios | Mais Agilidade e Segurança | Liberado",
    seoDescription:
      "Analise informações de pessoas e empresas em poucos segundos para apoiar liberações, cadastros e processos da gestão condominial com mais confiança.",
    eyebrow: "Soluções por Mercado",
    h1: "Mais agilidade e confiança para processos condominiais.",
    intro:
      "Em poucos segundos, tenha informações e análises para apoiar decisões sobre pessoas e empresas. O Liberado reúne dados de diferentes fontes e apresenta análises inteligentes para auxiliar administradoras e condomínios em processos que envolvem moradores, prestadores e empresas.",
    cardTitle: "Condomínios",
    cardText: "Aumente a segurança na validação de prestadores, colaboradores e visitantes.",
    sections: [
      {
        heading: "Como o Liberado apoia Condomínios",
        items: [
          {
            title: "Liberação mais rápida de prestadores",
            text: "Agilize processos envolvendo profissionais que precisam acessar o condomínio para realizar serviços, com informações organizadas para apoiar a análise.",
          },
          {
            title: "Análise de empresas terceirizadas",
            text: "Consulte informações de empresas envolvidas na operação condominial antes de estabelecer relacionamentos ou contratar serviços.",
          },
          {
            title: "Mais agilidade para administradoras",
            text: "Reduza tempo gasto em buscas manuais e facilite processos que dependem de informações confiáveis.",
          },
          {
            title: "Controle de pessoas e empresas",
            text: "Tenha uma visão mais completa dos envolvidos na rotina do condomínio, apoiando processos internos de gestão.",
          },
        ],
      },
      {
        heading: "Benefícios para Condomínios",
        items: [
          {
            title: "Processos mais rápidos",
            text: "Tenha informações disponíveis em menos tempo para apoiar liberações e cadastros.",
          },
          {
            title: "Mais confiança na gestão",
            text: "Apoie decisões com dados organizados sobre pessoas e empresas.",
          },
          {
            title: "Melhor experiência para moradores",
            text: "Torne processos de entrada, cadastro e relacionamento mais eficientes.",
          },
          {
            title: "Gestão mais estruturada",
            text: "Centralize informações utilizadas pela administração condominial.",
          },
        ],
      },
    ],
  },

  // ----------------------------------------------------------------------
  // Soluções por Uso
  // ----------------------------------------------------------------------
  {
    slug: "contratacao-de-colaboradores",
    categoria: "uso",
    seoTitle: "Background Check para Contratação de Colaboradores | Liberado",
    seoDescription:
      "Reduza incertezas antes da contratação com informações, verificações e análises inteligentes sobre candidatos.",
    eyebrow: "Soluções por Uso",
    h1: "Contrate com mais confiança desde o primeiro contato.",
    intro:
      "Antes de uma contratação, conhecer melhor quem fará parte da sua equipe pode fazer toda a diferença. O Liberado reúne informações de diferentes fontes para apoiar processos admissionais com mais agilidade e segurança.",
    cardTitle: "Contratação de Colaboradores",
    cardText: "Reduza incertezas antes da admissão com informações completas sobre candidatos.",
    sections: [
      {
        heading: "Como o Liberado atua",
        items: [
          {
            title: "Verificações centralizadas",
            text: "O Liberado centraliza verificações e informações em uma única plataforma, permitindo que o RH tenha uma visão mais completa antes da admissão.",
          },
          {
            title: "Análises em poucos segundos",
            text: "As análises acontecem em poucos segundos e podem ser incorporadas ao fluxo de contratação da empresa.",
          },
        ],
      },
      {
        heading: "Benefícios",
        items: [
          {
            title: "Mais agilidade na contratação",
            text: "Reduza tempo gasto com consultas realizadas em diferentes sistemas.",
          },
          {
            title: "Processos mais consistentes",
            text: "Padronize critérios para diferentes vagas e unidades.",
          },
          {
            title: "Mais confiança",
            text: "Tenha informações adicionais antes da admissão de novos colaboradores.",
          },
          {
            title: "Melhor experiência para o RH",
            text: "Automatize etapas operacionais e permita que a equipe foque na seleção dos melhores profissionais.",
          },
        ],
      },
    ],
  },
  {
    slug: "gestao-de-terceiros",
    categoria: "uso",
    seoTitle: "Gestão de Terceiros | Mais Controle sobre Pessoas e Empresas | Liberado",
    seoDescription:
      "Tenha mais controle sobre terceiros, prestadores e empresas parceiras com informações e análises reunidas em uma única plataforma.",
    eyebrow: "Soluções por Uso",
    h1: "Mais controle sobre quem faz parte da sua operação.",
    intro:
      "Profissionais terceirizados, prestadores de serviço e empresas parceiras fazem parte da rotina de milhares de organizações. Conhecer melhor quem atua na sua operação ajuda a reduzir riscos e padronizar processos.",
    cardTitle: "Gestão de Terceiros",
    cardText: "Tenha mais controle sobre prestadores, terceiros e empresas parceiras da operação.",
    sections: [
      {
        heading: "Como o Liberado atua",
        items: [
          {
            title: "Consultas centralizadas e organizadas",
            text: "O Liberado centraliza informações de pessoas e empresas em uma única plataforma, permitindo consultas rápidas e análises organizadas para apoiar a gestão de terceiros durante todo o relacionamento.",
          },
        ],
      },
      {
        heading: "Benefícios",
        items: [
          {
            title: "Mais controle sobre terceiros",
            text: "Tenha informações organizadas sobre profissionais e empresas que fazem parte da operação.",
          },
          {
            title: "Processos mais ágeis",
            text: "Reduza o tempo gasto em consultas manuais e facilite análises recorrentes.",
          },
          {
            title: "Gestão padronizada",
            text: "Utilize critérios consistentes para diferentes contratos, unidades e operações.",
          },
          {
            title: "Mais confiança para a operação",
            text: "Apoie decisões relacionadas a terceiros com informações reunidas em um único ambiente.",
          },
        ],
      },
    ],
  },
  {
    slug: "prevencao-a-fraudes",
    categoria: "uso",
    seoTitle: "Prevenção a Fraudes | Verificação de Pessoas e Empresas | Liberado",
    seoDescription:
      "Utilize informações e análises para apoiar processos de prevenção a fraudes envolvendo pessoas e empresas.",
    eyebrow: "Soluções por Uso",
    h1: "Antecipe riscos antes que eles impactem sua operação.",
    intro:
      "Fraudes podem acontecer em processos de contratação, cadastros, parcerias, fornecedores ou qualquer relacionamento envolvendo pessoas e empresas. Ter acesso às informações certas ajuda sua empresa a agir com mais segurança.",
    cardTitle: "Prevenção a Fraudes",
    cardText: "Identifique inconsistências e antecipe riscos antes que impactem sua operação.",
    sections: [
      {
        heading: "Como o Liberado apoia esse processo",
        items: [
          {
            title: "Verificação de informações",
            text: "Consulte dados de pessoas e empresas em diferentes fontes para identificar inconsistências antes de seguir com um processo.",
          },
          {
            title: "Mais confiança para análises",
            text: "Reúna informações relevantes em um único ambiente para apoiar avaliações com mais agilidade.",
          },
          {
            title: "Apoio à prevenção",
            text: "Adicione uma camada extra de inteligência aos processos que exigem validação de informações.",
          },
          {
            title: "Integração à rotina da empresa",
            text: "Utilize o Liberado em diferentes etapas da operação, desde novos cadastros até relacionamentos já existentes.",
          },
        ],
      },
      {
        heading: "Benefícios",
        items: [
          {
            title: "Mais segurança para a operação",
            text: "Tenha acesso a informações que ajudam a identificar situações que merecem atenção.",
          },
          {
            title: "Redução de processos manuais",
            text: "Centralize consultas e facilite análises em uma única plataforma.",
          },
          {
            title: "Mais agilidade para equipes",
            text: "Obtenha informações rapidamente sem comprometer a qualidade da análise.",
          },
          {
            title: "Decisões mais consistentes",
            text: "Conte com informações organizadas para apoiar diferentes processos da empresa.",
          },
        ],
      },
    ],
  },
  {
    slug: "homologacao-de-fornecedores",
    categoria: "uso",
    seoTitle: "Homologação de Fornecedores | Avalie Empresas com Mais Confiança | Liberado",
    seoDescription:
      "Analise informações de fornecedores e empresas antes de iniciar novos contratos e fortaleça seus processos de homologação.",
    eyebrow: "Soluções por Uso",
    h1: "Conheça melhor seus fornecedores antes de fechar negócio.",
    intro:
      "Escolher um fornecedor vai muito além de preço e prazo. Tenha acesso a informações que ajudam sua empresa a avaliar parceiros com mais confiança antes de iniciar uma nova relação comercial.",
    cardTitle: "Homologação de Fornecedores",
    cardText: "Avalie fornecedores com mais confiança antes de iniciar uma nova relação comercial.",
    sections: [
      {
        heading: "Como o Liberado atua",
        items: [
          {
            title: "Informações empresariais reunidas",
            text: "O Liberado reúne informações empresariais em uma única plataforma, facilitando processos de homologação e apoiando equipes responsáveis pela avaliação de fornecedores e parceiros comerciais.",
          },
        ],
      },
      {
        heading: "Benefícios",
        items: [
          {
            title: "Homologações mais ágeis",
            text: "Reduza o tempo necessário para reunir informações antes da aprovação de novos fornecedores.",
          },
          {
            title: "Mais confiança nas relações comerciais",
            text: "Conte com informações organizadas para apoiar avaliações de empresas parceiras.",
          },
          {
            title: "Processos mais padronizados",
            text: "Utilize critérios consistentes para homologações em diferentes áreas da organização.",
          },
          {
            title: "Melhor gestão da cadeia de fornecedores",
            text: "Centralize informações utilizadas durante o relacionamento com empresas fornecedoras.",
          },
        ],
      },
    ],
  },
  {
    slug: "compliance-e-gestao-de-riscos",
    categoria: "uso",
    seoTitle: "Compliance e Gestão de Riscos | Verificação de Pessoas e Empresas | Liberado",
    seoDescription:
      "Fortaleça processos de compliance e gestão de riscos com verificações, informações e análises sobre pessoas e empresas em uma única plataforma.",
    eyebrow: "Soluções por Uso",
    h1: "Fortaleça sua estratégia de compliance com mais controle e inteligência.",
    intro:
      "Empresas que crescem precisam de processos consistentes. O Liberado centraliza verificações, organiza informações e apoia análises para fortalecer políticas internas, reduzir riscos e aumentar a confiabilidade das decisões.",
    cardTitle: "Compliance e Gestão de Riscos",
    cardText: "Padronize critérios e fortaleça a governança com processos mais consistentes.",
    sections: [
      {
        heading: "Como o Liberado apoia sua estratégia de Compliance",
        items: [
          {
            title: "Padronize critérios de análise",
            text: "Defina políticas internas e aplique os mesmos critérios em processos de contratação, homologação de fornecedores, gestão de terceiros e demais operações que exigem análise de pessoas e empresas.",
          },
          {
            title: "Centralize informações",
            text: "Reúna verificações e consultas em uma única plataforma, facilitando o acesso às informações e reduzindo processos descentralizados.",
          },
          {
            title: "Fortaleça a governança",
            text: "Estruture processos mais consistentes para apoiar auditorias, controles internos e iniciativas de compliance.",
          },
          {
            title: "Tenha histórico e rastreabilidade",
            text: "Mantenha o registro das verificações realizadas, permitindo consultas futuras e maior controle sobre os processos.",
          },
        ],
      },
      {
        heading: "Benefícios",
        items: [
          {
            title: "Mais consistência nos processos",
            text: "Padronize análises em diferentes áreas da empresa utilizando critérios previamente definidos.",
          },
          {
            title: "Mais controle",
            text: "Centralize informações e acompanhe processos com mais organização e transparência.",
          },
          {
            title: "Mais rastreabilidade",
            text: "Tenha histórico das verificações realizadas para apoiar auditorias e controles internos.",
          },
          {
            title: "Redução de riscos operacionais",
            text: "Utilize informações organizadas para fortalecer decisões relacionadas a pessoas, empresas, fornecedores e parceiros.",
          },
        ],
      },
    ],
  },
];
