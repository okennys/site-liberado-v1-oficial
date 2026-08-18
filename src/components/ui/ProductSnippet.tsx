type ProductSnippetProps = {
  variant: "consulta" | "score" | "status";
  className?: string;
};

// Mini-recortes ilustrativos do produto (não são screenshots reais — são uma
// representação visual, no espírito dos mockups de dashboard do unico.io),
// usando só os tokens de cor da marca. Preenchem cards ao lado de texto puro.
export default function ProductSnippet({ variant, className = "" }: ProductSnippetProps) {
  if (variant === "consulta") {
    return (
      <div className={`rounded-2xl bg-navy-900 p-4 text-white ${className}`}>
        <div className="flex items-center justify-between text-xs text-white/50">
          <span>Consulta de CPF</span>
          <span className="rounded-full bg-brand-blue/20 px-2 py-0.5 text-brand-blue">Concluída</span>
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-2 w-3/4 rounded-full bg-white/15" />
          <div className="h-2 w-1/2 rounded-full bg-white/15" />
          <div className="h-2 w-2/3 rounded-full bg-white/15" />
        </div>
      </div>
    );
  }

  if (variant === "score") {
    return (
      <div className={`rounded-2xl bg-white p-4 ${className}`}>
        <div className="flex items-center justify-between text-xs text-navy-900/50">
          <span>Classificação de risco</span>
          <span className="font-bold text-navy-900">Baixo</span>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-tint">
          <div className="h-full w-1/5 rounded-full bg-brand-blue" />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm shadow-navy-900/5 ${className}`}>
      <span className="h-2 w-2 rounded-full bg-brand-blue" />
      <span className="text-sm font-medium text-navy-900">Identidade verificada</span>
    </div>
  );
}
