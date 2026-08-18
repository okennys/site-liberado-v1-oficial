import type { ReactNode } from "react";

type CardProps = {
  title: string;
  children?: ReactNode;
  eyebrow?: string;
  className?: string;
};

export default function Card({ title, children, eyebrow, className = "" }: CardProps) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm shadow-navy-900/5 transition-transform duration-200 hover:-translate-y-1 ${className}`}
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-title text-brand-blue">
          {eyebrow}
        </p>
      )}
      <h3 className="text-subtitle text-lg text-navy-900">{title}</h3>
      {children && <div className="mt-2 text-sm leading-relaxed text-navy-900/70">{children}</div>}
    </div>
  );
}
