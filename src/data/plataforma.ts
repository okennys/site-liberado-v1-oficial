// Conteúdo das páginas de Plataforma (features do produto).
// Extraído de docs/site-estrutura.txt.

export type PlataformaSection = {
  heading: string;
  items: { title: string; text: string; bullets?: string[] }[];
};

export type PlataformaFeature = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: PlataformaSection[];
};

export const plataforma: PlataformaFeature[] = [
  {
    slug: "verificacao-de-pessoas",
    seoTitle: "Verificação de Pessoas por CPF | Dados e Consultas",
    seoDescription:
      "Verifique pessoas por CPF com dados cadastrais, antecedentes, processos judiciais, mandados de prisão e informações de crédito em uma única plataforma.",
    eyebrow: "Plataforma",
    h1: "Verifique pessoas por CPF com informações completas para suas análises.",
    intro:
      "Dados cadastrais, antecedentes, processos e informações de crédito reunidos em uma única consulta. A partir do CPF, o Liberado reúne informações de diferentes fontes para apoiar análises de candidatos, colaboradores, prestadores e outros profissionais.",
    sections: [
      {
        heading: "O que pode ser verificado",
        items: [
          {
            title: "Dados Cadastrais",
            text: "Consulte informações básicas da pessoa, como:",
            bullets: ["Nome", "CPF", "Filiação", "Gênero", "Data de nascimento", "Outras informações cadastrais disponíveis"],
          },
          {
            title: "Antecedentes Criminais",
            text: "Consulte antecedentes criminais diretamente em fontes oficiais, com emissão de certidão.",
            bullets: [
              "Polícia Civil — pesquisa de antecedentes criminais no website da Polícia Civil do estado",
              "Polícia Federal — pesquisa de antecedentes criminais no website da Polícia Federal do Brasil",
              "Tribunais Regionais Federais (TRFs) — consulta de certidões e informações processuais nas plataformas dos Tribunais Regionais Federais",
            ],
          },
          {
            title: "Mandados de Prisão",
            text: "Pesquise mandados de prisão no website do CNJ, com emissão de certidão.",
          },
          {
            title: "Facematch Procurados",
            text: "Compare a biometria facial com base de imagens de procurados.",
          },
          {
            title: "Processos Judiciais",
            text: "Pesquise processos judiciais nas esferas cível e criminal.",
          },
          {
            title: "Autenticação",
            text: "Valide a identidade da pessoa na base oficial do Governo Federal.",
          },
          {
            title: "Score de Crédito",
            text: "Consulte informações relacionadas a restrições de crédito em bureau de referência no mercado.",
          },
          {
            title: "Dados Sociais",
            text: "Consulte informações disponíveis sobre a pessoa para apoiar processos de verificação e validação.",
          },
          {
            title: "Dados Societários",
            text: "Consulte informações sobre vínculos societários, participação em empresas e relações empresariais.",
          },
          {
            title: "Compliance",
            text: "Consulte informações de compliance, incluindo sanções, PEP e listas internacionais.",
          },
        ],
      },
      {
        heading: "Aplicações",
        items: [
          {
            title: "Contratação",
            text: "Tenha mais informações sobre candidatos antes de avançar no processo de admissão.",
          },
          {
            title: "Validação de Terceiros",
            text: "Consulte informações de prestadores, parceiros e outros profissionais.",
          },
          {
            title: "Cadastro e Acesso",
            text: "Agilize processos que exigem identificação e conferência de dados.",
          },
          {
            title: "Análise de Risco",
            text: "Reúna informações relevantes para processos que exigem uma avaliação mais completa.",
          },
        ],
      },
    ],
  },
  {
    slug: "verificacao-de-empresas",
    seoTitle: "Verificação de Empresas por CNPJ | Dados e Análises Empresariais",
    seoDescription:
      "Verifique empresas por CNPJ com dados cadastrais, societários, fiscais, regulatórios, judiciais e indicadores de risco em uma única plataforma.",
    eyebrow: "Plataforma",
    h1: "Verifique empresas por CNPJ com informações completas para suas análises.",
    intro:
      "Dados empresariais, societários, fiscais e regulatórios reunidos em uma única análise. A partir do CNPJ, o Liberado reúne informações de diferentes fontes para ajudar sua empresa a avaliar fornecedores, parceiros e relacionamentos comerciais.",
    sections: [
      {
        heading: "O que pode ser verificado",
        items: [
          {
            title: "Dados Cadastrais",
            text: "Consulte informações básicas da empresa, como:",
            bullets: ["CNPJ", "Razão Social", "Endereço", "Telefone", "E-mail", "Quadro Societário"],
          },
          {
            title: "Dados Societários",
            text: "Consulte informações relacionadas aos sócios, responsáveis pela empresa e seus vínculos societários.",
          },
          {
            title: "Dados Fiscais e Tributários",
            text: "Consulte informações relacionadas a:",
            bullets: ["Débitos inscritos em dívida ativa", "PGFN", "Sefaz", "Situação fiscal", "Certidões disponíveis"],
          },
          {
            title: "Dados Trabalhistas",
            text: "Consulte informações relacionadas a:",
            bullets: ["Débitos trabalhistas", "FGTS", "PGFN", "Certidão Negativa de Débitos Trabalhistas"],
          },
          {
            title: "Transparência e Compliance",
            text: "Consulte informações relacionadas a:",
            bullets: ["PEP", "Listas Restritivas", "Empresas Inidôneas e Suspensas", "CNEP", "CNJ", "TCU", "MPF"],
          },
          {
            title: "Dados Regulatórios",
            text: "Consulte informações relacionadas a:",
            bullets: [
              "Licenças e autorizações",
              "Regularidade de empresas de segurança privada",
              "Alvará de funcionamento",
              "Regularidade ANTT",
            ],
          },
          {
            title: "Processos Judiciais",
            text: "Pesquise informações relacionadas a:",
            bullets: [
              "Processos cíveis",
              "Processos criminais",
              "Inquéritos civis",
              "Inquéritos criminais",
              "Procedimentos extrajudiciais no MPF",
            ],
          },
          {
            title: "Protesto Nacional",
            text: "Pesquise informações relacionadas ao risco de crédito de uma empresa no mercado.",
          },
          {
            title: "Score de Crédito",
            text: "Consulte informações relacionadas a:",
            bullets: ["Score de crédito empresarial", "Restrições de crédito"],
          },
        ],
      },
      {
        heading: "Aplicações",
        items: [
          {
            title: "Homologação de Fornecedores",
            text: "Tenha mais informações antes de iniciar ou manter relações comerciais.",
          },
          {
            title: "Análise de Parceiros",
            text: "Avalie informações empresariais antes de novos negócios e parcerias.",
          },
          {
            title: "Compliance e Due Diligence",
            text: "Reúna informações cadastrais, societárias, regulatórias e de transparência para apoiar processos de análise empresarial.",
          },
          {
            title: "Gestão de Terceiros",
            text: "Centralize informações de empresas que fazem parte da sua operação.",
          },
        ],
      },
    ],
  },
  {
    slug: "biometria",
    seoTitle: "Biometria Facial com Facematch e Liveness | Liberado",
    seoDescription:
      "Valide identidades com biometria facial, Facematch e Liveness integrados à plataforma Liberado para processos mais seguros e eficientes.",
    eyebrow: "Plataforma",
    h1: "Valide identidades com biometria facial integrada à sua análise.",
    intro:
      "Combine biometria, dados e inteligência para identificar pessoas com mais segurança. O Liberado utiliza recursos de biometria facial para comparar identidades e apoiar processos que exigem confirmação de uma pessoa.",
    sections: [
      {
        heading: "Recursos de Biometria",
        items: [
          {
            title: "Facematch",
            text: "Compare imagens faciais para verificar se a pessoa corresponde à identidade apresentada.",
          },
          {
            title: "Liveness",
            text: "Identifique se a captura facial está sendo realizada por uma pessoa real durante o processo de validação.",
          },
        ],
      },
      {
        heading: "Aplicações",
        items: [
          {
            title: "Contratação e Recrutamento",
            text: "Apoie processos que precisam confirmar a identidade de candidatos.",
          },
          {
            title: "Cadastro de Clientes e Usuários",
            text: "Adicione uma camada de identificação em processos digitais.",
          },
          {
            title: "Controle de Parceiros e Prestadores",
            text: "Auxilie na confirmação de identidade em operações com terceiros.",
          },
        ],
      },
    ],
  },
  {
    slug: "ocr-de-documentos",
    seoTitle: "OCR de Documentos | Extração e Análise de Informações | Liberado",
    seoDescription:
      "Extraia informações de documentos automaticamente com OCR integrado ao Liberado para agilizar análises, validações e processos digitais.",
    eyebrow: "Plataforma",
    h1: "Extraia informações de documentos de forma rápida e inteligente.",
    intro:
      "Transforme documentos em dados estruturados para facilitar análises e processos. O Liberado utiliza OCR para identificar e extrair informações de documentos, reduzindo processos manuais e facilitando a análise dos dados apresentados.",
    sections: [
      {
        heading: "Recursos de OCR",
        items: [
          {
            title: "Extração automática de informações",
            text: "Capture dados presentes em documentos para agilizar processos de análise.",
          },
          {
            title: "Organização de dados",
            text: "Transforme informações documentais em dados estruturados para facilitar consultas e verificações.",
          },
          {
            title: "Apoio à análise de identidade",
            text: "Utilize informações extraídas de documentos junto a outras camadas de verificação da plataforma.",
          },
        ],
      },
      {
        heading: "Aplicações",
        items: [
          {
            title: "Recrutamento e Seleção",
            text: "Agilize processos que envolvem análise de documentos de candidatos.",
          },
          {
            title: "Cadastro de Pessoas",
            text: "Facilite a conferência de informações documentais em novos cadastros.",
          },
          {
            title: "Processos Operacionais",
            text: "Reduza atividades manuais relacionadas à leitura e organização de documentos.",
          },
        ],
      },
    ],
  },
  {
    slug: "dados-e-analises",
    seoTitle: "Análise de Dados e Informações Empresariais | Liberado",
    seoDescription:
      "Organize dados de pessoas e empresas com análises inteligentes, indicadores e classificação de informações para apoiar processos mais seguros.",
    eyebrow: "Plataforma",
    h1: "Transforme dados em informações para análises mais inteligentes.",
    intro:
      "Reúna informações de diferentes fontes e visualize resultados de forma organizada. O Liberado utiliza os dados analisados para apresentar indicadores e uma classificação de informações que facilitam a interpretação dos resultados.",
    sections: [
      {
        heading: "Recursos de Dados e Análises",
        items: [
          {
            title: "Informações organizadas",
            text: "Centralize dados coletados durante as verificações para facilitar a análise.",
          },
          {
            title: "Indicadores de análise",
            text: "Visualize informações relevantes para apoiar avaliações de pessoas e empresas.",
          },
          {
            title: "Classificação com Inteligência Artificial",
            text: "Utilize uma análise inteligente baseada nos dados consultados para facilitar a interpretação dos resultados.",
          },
          {
            title: "Diferentes tipos de informações",
            text: "Analise dados como:",
            bullets: ["Dados cadastrais", "Antecedentes", "Informações empresariais", "Dados documentais", "Indicadores financeiros"],
          },
        ],
      },
      {
        heading: "Aplicações",
        items: [
          {
            title: "Recrutamento e Seleção",
            text: "Apoie análises de candidatos com informações organizadas.",
          },
          {
            title: "Fornecedores e Parceiros",
            text: "Tenha uma visão mais completa antes de iniciar relacionamentos comerciais.",
          },
          {
            title: "Processos Internos",
            text: "Facilite análises que dependem de múltiplas informações.",
          },
        ],
      },
    ],
  },
  {
    slug: "inteligencia-artificial",
    seoTitle: "Inteligência Artificial para Análise de Dados | Liberado",
    seoDescription:
      "Utilize Inteligência Artificial para configurar análises, interpretar informações e gerar resumos inteligentes de pessoas e empresas.",
    eyebrow: "Plataforma",
    h1: "Uma Inteligência Artificial configurada para o contexto da sua análise.",
    intro:
      "Configure diferentes agentes para analisar informações de acordo com cada perfil de consulta. O Liberado permite configurar agentes de Inteligência Artificial de acordo com os critérios e contextos definidos pela sua empresa.",
    sections: [
      {
        heading: "Agentes de IA",
        items: [
          {
            title: "Agentes configuráveis",
            text: "Configure diferentes agentes de Inteligência Artificial para atender necessidades específicas de análise.",
          },
          {
            title: "Análises por contexto",
            text: "Defina o contexto em que cada agente deve atuar e quais informações devem ser consideradas durante a análise.",
          },
          {
            title: "Critérios personalizados",
            text: "Configure os critérios utilizados pelos agentes de acordo com as necessidades da sua operação.",
          },
        ],
      },
      {
        heading: "Perfis de Consulta",
        items: [
          {
            title: "Diferentes perfis para diferentes necessidades",
            text: "Crie perfis de consulta específicos para cada tipo de análise realizada pela empresa.",
          },
          {
            title: "Consultas selecionadas",
            text: "Defina quais consultas e informações fazem parte de cada perfil.",
          },
          {
            title: "IA aplicada ao perfil",
            text: "Associe agentes de Inteligência Artificial aos perfis de consulta para analisar os resultados de acordo com o contexto definido.",
          },
        ],
      },
      {
        heading: "Resumo Inteligente",
        items: [
          {
            title: "Os principais pontos da análise em um único resumo",
            text: "A Inteligência Artificial reúne os principais pontos encontrados durante as consultas e apresenta um resumo das informações relevantes.",
          },
          {
            title: "Mais clareza sobre os resultados",
            text: "Tenha uma visão consolidada das informações encontradas sem precisar interpretar cada resultado separadamente.",
          },
        ],
      },
    ],
  },
  {
    slug: "api-integracoes",
    seoTitle: "API de Verificação de Dados e Integrações | Liberado",
    seoDescription:
      "Integre as soluções do Liberado aos seus sistemas por meio de API para automatizar verificações de pessoas, empresas e documentos.",
    eyebrow: "Plataforma",
    h1: "Integre verificações de pessoas, empresas e documentos aos seus sistemas.",
    intro:
      "Automatize processos conectando o Liberado às ferramentas da sua operação. Por meio de API, sua empresa pode integrar as soluções do Liberado aos seus sistemas e utilizar dados e análises dentro dos próprios fluxos operacionais.",
    sections: [
      {
        heading: "Recursos da API",
        items: [
          {
            title: "Integração com sistemas próprios",
            text: "Conecte as soluções do Liberado às plataformas utilizadas pela sua empresa.",
          },
          {
            title: "Automação de processos",
            text: "Reduza etapas manuais ao inserir verificações diretamente nos seus fluxos.",
          },
          {
            title: "Acesso aos resultados das análises",
            text: "Utilize as informações retornadas pelo Liberado dentro das aplicações integradas.",
          },
          {
            title: "Escalabilidade operacional",
            text: "Realize verificações de acordo com a necessidade da sua operação.",
          },
        ],
      },
      {
        heading: "Aplicações",
        items: [
          {
            title: "Recrutamento e Seleção",
            text: "Integre verificações aos sistemas utilizados por RH e recrutamento.",
          },
          {
            title: "Plataformas e Sistemas Internos",
            text: "Inclua consultas e análises dentro dos seus próprios processos.",
          },
          {
            title: "Operações com Alto Volume",
            text: "Automatize verificações realizadas frequentemente pela empresa.",
          },
        ],
      },
    ],
  },
  {
    slug: "recursos-da-plataforma",
    seoTitle: "Recursos da Plataforma | Liberado",
    seoDescription:
      "Conheça os recursos do Liberado para agilizar cadastros, consultas, análises e gestão das informações em uma única plataforma.",
    eyebrow: "Plataforma",
    h1: "Recursos que tornam sua operação mais simples e eficiente.",
    intro:
      "Do cadastro ao relatório, menos etapas manuais no dia a dia. O Liberado reúne recursos para facilitar operações com diferentes volumes de consultas e tornar processos recorrentes mais ágeis.",
    sections: [
      {
        heading: "Recursos da Plataforma",
        items: [
          {
            title: "Cadastro em Massa",
            text: "Cadastre múltiplas pessoas ou empresas de uma só vez.",
          },
          {
            title: "Convite para Autocadastro",
            text: "Envie um convite para que a própria pessoa ou empresa realize seu cadastro.",
          },
          {
            title: "Relatórios em PDF",
            text: "Gere relatórios com os resultados das análises para consulta, registro e compartilhamento.",
          },
          {
            title: "Perfis de Consulta",
            text: "Crie diferentes configurações de consulta de acordo com cada operação ou necessidade.",
          },
          {
            title: "Automação de Processos",
            text: "Reduza tarefas manuais em processos recorrentes e ganhe agilidade na operação.",
          },
          {
            title: "Gestão Centralizada",
            text: "Concentre cadastros, consultas e resultados em um único ambiente.",
          },
        ],
      },
      {
        heading: "Aplicações",
        items: [
          {
            title: "Operações com Alto Volume",
            text: "Simplifique processos que envolvem grande quantidade de cadastros e consultas.",
          },
          {
            title: "Processos Recorrentes",
            text: "Padronize atividades que fazem parte da rotina da sua equipe.",
          },
          {
            title: "Gestão de Consultas",
            text: "Organize diferentes perfis e necessidades de consulta em um único ambiente.",
          },
        ],
      },
    ],
  },
];
