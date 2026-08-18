// Fonte única de dados do menu. Desktop (dropdown por botão) e mobile
// (acordeão sempre no DOM) consomem exatamente este mesmo objeto — nada de
// JSX duplicado entre as duas versões.

export type NavLink = {
  title: string;
  href: string;
  external?: boolean;
};

export type NavColumn = {
  heading?: string;
  items: NavLink[];
};

// Um grupo do menu é OU um dropdown (colunas) OU um link direto (sem
// dropdown) — ex: Planos e Central de Ajuda, que não precisam de submenu.
export type NavGroup = { title: string; columns: NavColumn[] } | { title: string; href: string; external?: boolean };

export const navGroups: NavGroup[] = [
  {
    title: "Produto",
    columns: [
      {
        heading: "Recursos",
        items: [
          { title: "Biometria", href: "/biometria" },
          { title: "OCR de Documentos", href: "/ocr-de-documentos" },
          { title: "Dados e Análises", href: "/dados-e-analises" },
          { title: "Inteligência Artificial", href: "/inteligencia-artificial" },
          { title: "API e Integrações", href: "/api-integracoes" },
          { title: "Recursos da Plataforma", href: "/recursos-da-plataforma" },
        ],
      },
    ],
  },
  {
    title: "Soluções",
    columns: [
      {
        heading: "Por Mercado",
        items: [
          { title: "RH e Recrutamento", href: "/solucoes/rh-recrutamento" },
          { title: "Varejo", href: "/solucoes/varejo" },
          { title: "Facilities", href: "/solucoes/facilities" },
          { title: "Saúde", href: "/solucoes/saude" },
          { title: "Indústria", href: "/solucoes/industria" },
          { title: "Segurança Patrimonial", href: "/solucoes/seguranca-patrimonial" },
          { title: "Condomínios", href: "/solucoes/condominios" },
        ],
      },
      {
        heading: "Por Uso",
        items: [
          { title: "Contratação Segura", href: "/solucoes/contratacao-de-colaboradores" },
          // "Validação de Terceiros" no menu original corresponde à página "Gestão de Terceiros".
          { title: "Validação de Terceiros", href: "/solucoes/gestao-de-terceiros" },
          // "Validação Cadastral" não tem página própria no material recebido; aponta para
          // Verificação de Pessoas (dados cadastrais) até existir uma página dedicada.
          { title: "Validação Cadastral", href: "/verificacao-de-pessoas" },
          { title: "Prevenção a Fraudes", href: "/solucoes/prevencao-a-fraudes" },
          { title: "Homologação de Fornecedores", href: "/solucoes/homologacao-de-fornecedores" },
          { title: "Compliance e Gestão de Riscos", href: "/solucoes/compliance-e-gestao-de-riscos" },
        ],
      },
    ],
  },
  { title: "Preços", href: "/planos" },
  { title: "Central de Ajuda", href: "/central-de-ajuda" },
  { title: "Dev", href: "https://api.liberadoapp.com/docs", external: true },
  {
    title: "Institucional",
    columns: [
      {
        items: [
          { title: "Quem Somos", href: "/quem-somos" },
          { title: "Segurança e LGPD", href: "/seguranca-e-lgpd" },
          { title: "Política de Privacidade", href: "/politica-de-privacidade" },
          { title: "Termos de Uso", href: "/termos-de-uso" },
        ],
      },
    ],
  },
];

// Destino provisório: ainda não existe fluxo de cadastro/app definido pelo cliente.
// Por ora leva para Planos, onde a pessoa pode falar com um consultor.
export const ctaPrincipal: NavLink = { title: "Teste Grátis", href: "/planos" };
