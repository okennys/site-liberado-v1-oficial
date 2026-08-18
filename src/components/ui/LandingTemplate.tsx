import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import ClosingCta from "@/components/ui/ClosingCta";

type LandingSection = {
  heading: string;
  items: { title: string; text: string; bullets?: string[] }[];
};

type LandingTemplateProps = {
  eyebrow: string;
  h1: string;
  intro: string;
  sections: LandingSection[];
  ctaTitle?: string;
  ctaText?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

// Template compartilhado pelas ~20 páginas de Soluções (por mercado/por uso)
// e Plataforma — hero + N blocos de `sections` em grid de Card + CTA final.
// Evita escrever ~20 page.tsx quase idênticos à mão.
export default function LandingTemplate({
  eyebrow,
  h1,
  intro,
  sections,
  ctaTitle = "Simplifique verificações com uma plataforma completa.",
  ctaText = "Teste o Liberado gratuitamente e tenha acesso a dados, tecnologia e análises para verificar pessoas, empresas e documentos de forma mais rápida.",
  ctaLabel,
  ctaHref,
}: LandingTemplateProps) {
  return (
    <>
      <Section tone="navy" className="pt-28 sm:pt-36">
        <div className="relative max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-title text-brand-blue">{eyebrow}</p>
          <SplitHeading as="h1" className="text-title mt-4 text-4xl sm:text-5xl" text={h1} />
          <Reveal delay={0.15}>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">{intro}</p>
          </Reveal>
        </div>
      </Section>

      {sections.map((section, sectionIndex) => (
        <Section key={section.heading} tone={sectionIndex % 2 === 0 ? "tint" : "light"} roundedTop>
          <SplitHeading as="h2" className="text-title text-2xl sm:text-3xl" text={section.heading} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item, itemIndex) => (
              <Reveal key={item.title} delay={itemIndex * 0.06}>
                <Card title={item.title}>
                  <p>{item.text}</p>
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="rounded-full bg-tint px-3 py-1 text-xs font-medium text-navy-900/70">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      <ClosingCta title={ctaTitle} text={ctaText} ctaLabel={ctaLabel} ctaHref={ctaHref} />
    </>
  );
}
