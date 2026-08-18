import Link from "next/link";
import LogoMark from "@/components/ui/LogoMark";
import Button from "@/components/ui/Button";

const footerColumns = [
  {
    title: "Plataforma",
    links: [
      { title: "Verificação de pessoas", href: "/verificacao-de-pessoas" },
      { title: "Verificação de empresas", href: "/verificacao-de-empresas" },
    ],
  },
  {
    title: "Soluções",
    links: [
      { title: "Soluções por Mercado", href: "/solucoes/rh-recrutamento" },
      { title: "Contratação Segura", href: "/solucoes/contratacao-de-colaboradores" },
      { title: "Gestão de Terceiros", href: "/solucoes/gestao-de-terceiros" },
      { title: "Prevenção a Fraudes", href: "/solucoes/prevencao-a-fraudes" },
      { title: "Homologação de Fornecedores", href: "/solucoes/homologacao-de-fornecedores" },
      { title: "Compliance e Gestão de Riscos", href: "/solucoes/compliance-e-gestao-de-riscos" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { title: "Planos", href: "/planos" },
      { title: "Central de Ajuda", href: "/central-de-ajuda" },
      { title: "Documentação API", href: "https://api.liberadoapp.com/docs", external: true },
    ],
  },
  {
    title: "Institucional",
    links: [
      { title: "Quem Somos", href: "/quem-somos" },
      { title: "Segurança e LGPD", href: "/seguranca-e-lgpd" },
      { title: "Política de Privacidade", href: "/politica-de-privacidade" },
      { title: "Termos de Uso", href: "/termos-de-uso" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/search/results/all/?keywords=Liberado&origin=RICH_QUERY_SUGGESTION&heroEntityKey=urn%3Ali%3Aorganization%3A101340347&position=0",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2.2" />
        <path d="M10 9h4v2.2c1-1.6 2.7-2.6 4.7-2.6 3.6 0 5.3 2.4 5.3 6.4V21h-4v-5.4c0-1.9-.7-3.2-2.4-3.2-1.3 0-2.1.9-2.4 1.8-.1.3-.2.8-.2 1.3V21h-4z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/liberadoapp/",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-900 text-white">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <LogoMark tone="light" />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Informação confiável para decisões mais rápidas. Verificação de pessoas, empresas e
              documentos em uma única plataforma.
            </p>
            <Button href="/planos" variant="primary" className="w-fit">
              Solicitar Demonstração
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-title text-slate-blue">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white/70 hover:text-white"
                        >
                          {link.title}
                        </a>
                      ) : (
                        <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                          {link.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <p>© {year} Liberado. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link href="/politica-de-privacidade" className="hover:text-white">
                Política de Privacidade
              </Link>
              <Link href="/termos-de-uso" className="hover:text-white">
                Termos de Uso
              </Link>
            </div>
          </div>
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
