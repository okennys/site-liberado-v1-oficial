import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SplitHeading from "@/components/ui/SplitHeading";
import { whatsappLink } from "@/data/whatsapp";

type ClosingCtaProps = {
  title: string;
  text: string;
  ctaLabel?: string;
  ctaHref?: string;
};

// Bloco de CTA final — extraído do que já existia na Home, reaproveitado nas
// páginas de Soluções/Plataforma pra não repetir o mesmo JSX ~20 vezes.
export default function ClosingCta({ title, text, ctaLabel = "Teste Grátis", ctaHref = whatsappLink() }: ClosingCtaProps) {
  return (
    <Section tone="navy" roundedTop>
      <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <SplitHeading as="h2" className="text-title text-2xl sm:text-3xl" text={title} />
          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-white/70">{text}</p>
          </Reveal>
        </div>
        <Button href={ctaHref} external={ctaHref.startsWith("http")}>
          {ctaLabel}
        </Button>
      </div>
    </Section>
  );
}
