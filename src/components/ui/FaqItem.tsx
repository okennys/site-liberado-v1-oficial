type FaqItemProps = {
  question: string;
  answer: string;
};

// <details>/<summary> nativo — acessível por padrão, zero JS.
export default function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details className="group rounded-2xl border border-navy-900/10 bg-white p-6 open:shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-subtitle text-base text-navy-900">
        {question}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          aria-hidden="true"
          className="shrink-0 text-brand-blue transition-transform duration-200 group-open:rotate-45"
        >
          <path d="M7 1 V13 M1 7 H13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-navy-900/70">{answer}</p>
    </details>
  );
}
