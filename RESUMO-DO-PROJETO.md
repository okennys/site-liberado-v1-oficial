# Site institucional Liberado — resumo do que foi pedido e do que foi feito

Este arquivo explica, em detalhe, o contexto da conversa que resultou neste projeto: o que foi pedido e por quê, e o que foi construído em resposta a cada pedido. A ideia é que qualquer pessoa (inclusive você, meses depois) consiga entender o raciocínio sem precisar reabrir a conversa original.

---

## 1. O que foi pedido

### 1.1 O pedido principal

Você tinha uma pasta (`C:\Users\kenne\Desktop\novo site Liberado`) com dois PDFs:

- **`SITE - LIBERADO - teste 2.pdf`** — um documento de planejamento com a estrutura completa de um site institucional novo: a árvore do menu e o copy (título, subtítulo, textos, CTAs, meta title/description de SEO) de cerca de 24 páginas, para uma marca chamada **Liberado** — uma plataforma de verificação de pessoas, empresas e documentos (o mercado chama isso de "Background Check").
- **`BRANDBOOK ANORA OFICIAL.pdf`** — o brandbook da marca Liberado (produzido pela agência Anora): essência da marca, propósito/missão/visão, arquétipo, tom de voz, paleta de cores, tipografia, regras de uso do logotipo, pattern gráfico e estilo fotográfico.

O pedido era: **construir esse site institucional do zero**, usando esses dois documentos como fonte de verdade, e criar tudo dentro dessa mesma pasta — incluindo o site em si.

### 1.2 A referência de menu (idwall.co)

Você também trouxe uma análise técnica sua sobre como o menu (mega menu) do site da idwall.co é construído, e pediu que o menu do site da Liberado seguisse o mesmo princípio arquitetural. Resumindo o que você descreveu:

- O menu **não é escrito à mão** em cada componente — ele vem de **um único objeto de dados** (uma lista de grupos e links).
- Esse mesmo objeto é consumido por **duas renderizações diferentes**: no desktop, um botão que abre um painel (dropdown) controlado por estado do React; no mobile, um acordeão que já existe inteiro no HTML (mais acessível), só escondido/mostrado por CSS.
- As duas versões compartilham o **mesmo estado** de "qual menu está aberto" e o mesmo **overlay** (fundo escurecido) que aparece atrás do menu e fecha tudo ao ser clicado.

Esse foi o modelo que pedi para replicar — não copiando o idwall visualmente, mas replicando esse princípio de construção.

### 1.3 O contexto sobre skills do Claude Code

Você também compartilhou uma pesquisa sua sobre skills/plugins de design para Claude Code (`frontend-design`, packs de animação, etc.) que ajudariam a fugir do "visual genérico de IA". Isso não era um pedido direto de instalação — era contexto para eu levar em conta a qualidade visual do resultado. Expliquei que essas skills específicas não estavam instaladas nesta sessão e que instalar plugins de marketplace é uma ação que você faria numa sessão interativa (`/plugin marketplace add`), não algo que eu posso fazer de forma autônoma aqui. Segui em frente construindo o design diretamente, com atenção à identidade visual descrita no brandbook.

### 1.4 Decisões que tomamos juntos no meio do caminho

Como o pedido original era grande (um site institucional completo, ~24 páginas), parei antes de começar a codar para alinhar decisões com você:

1. **Stack técnica: Next.js (React)** — escolhida porque é a mesma arquitetura por trás do menu do idwall que você analisou (Server Components, `useState` para o menu, `next/font`, `next/image`), e porque facilita o deploy futuro.
2. **Escopo desta primeira rodada: fundação primeiro** — em vez de gerar as ~24 páginas de uma vez (arriscando ter que refazer tudo se o visual não agradasse), construímos primeiro o design system, o mega menu completo e duas páginas completas (Home e Quem Somos), para você aprovar o padrão visual antes de eu replicá-lo nas páginas restantes.
3. **Assets de marca (logo, pattern, fotos)**: o PDF do brandbook só pôde ser lido como texto (a ferramenta que extrai imagens embutidas de PDF, `pdfimages`, não estava disponível neste ambiente) — então não temos os arquivos reais de logotipo, pattern gráfico ou fotografia. Você optou por me avisar depois, numa pasta específica, quando tiver esses arquivos prontos. Por isso, o projeto usa **placeholders funcionais** (um logotipo simples desenhado em SVG, um pattern de curvas genérico) que ficam fáceis de substituir sem tocar na estrutura do site.

---

## 2. O que eu fiz

### 2.1 Preparação e organização

- Extraí o texto dos dois PDFs com `pdftotext` (a única ferramenta de PDF disponível no ambiente) e salvei em `docs/site-estrutura.txt` e `docs/brandbook.txt` — essas cópias em texto são a referência de conteúdo para todas as páginas, inclusive as que ainda faltam construir.
- Criei o arquivo **`BRAND.md`**, na raiz do projeto: um resumo rápido e "acionável" das regras do brandbook (cores com os códigos hex, tipografia, tom de voz, regras do pattern e do logotipo). A ideia é que, ao construir as próximas páginas, seja mais rápido consultar esse resumo do que reabrir o PDF inteiro.

### 2.2 A identidade de marca traduzida em código

Do brandbook, extraí e codifiquei como "tokens" de design (em `src/app/globals.css`):

- **Cores**: azul da marca (`#4DC3F0`), dois tons de navy (`#14264E`, `#16233A`), um azul claro e um cinza-azulado de apoio, e o **amarelo (`#FCE100`)** — que o brandbook diz explicitamente ser de **uso exclusivo em botões de chamada para ação (CTA)**. Essa regra foi respeitada à risca: o amarelo só aparece nos botões "Teste Grátis" / "Solicitar Demonstração" em todo o site.
- **Tipografia**: a fonte única da marca, **Outfit** (Google Font), carregada via `next/font` — títulos usam o peso Black com tracking apertado, exatamente como o brandbook especifica.
- **Tom de voz**: no texto das páginas, priorizei o vocabulário que o brandbook pede ("verificação", "validação") em vez dos termos de mercado ("Background Check", "KYC") — exceto nos metadados de SEO (`title`/`description`), onde o próprio brandbook recomenda usar os termos de mercado por serem o que as pessoas buscam no Google.

### 2.3 O mega menu

Este foi o núcleo técnico do pedido. Construí:

- **`src/data/nav.ts`** — um único objeto TypeScript com toda a árvore do menu (Plataforma, Soluções, Recursos, Institucional, cada um com suas colunas e links), extraída fielmente do PDF de estrutura.
- **`Header.tsx`** — guarda o estado de "qual menu está aberto" e o estado de "o drawer mobile está aberto", e monta os componentes abaixo.
- **`DesktopNav.tsx`** — os botões com dropdown do desktop, que leem o mesmo `nav.ts`.
- **`MobileNav.tsx`** — o drawer/acordeão do mobile, que lê o mesmo `nav.ts`, com cada grupo podendo abrir/fechar de forma independente.
- **`NavOverlay.tsx`** — o fundo escurecido compartilhado entre desktop e mobile.

Ou seja: exatamente o padrão que você descreveu — um dado, duas renderizações, um estado compartilhado.

### 2.4 As páginas construídas nesta rodada

- **Home** (`src/app/page.tsx`) — hero, prova social, "como funciona", soluções da plataforma, diferenciais, soluções por mercado, CTA final. Todo o copy vem do PDF.
- **Quem Somos** (`src/app/quem-somos/page.tsx`) — trajetória, missão, visão, valores, encerramento.
- **Footer** — as 4 colunas de links, CTA e barra inferior, também extraídos do PDF.
- Componentes de UI reutilizáveis (`Button`, `Section`, `Card`, `StatBadge`, `PatternBackground`, `LogoMark`) que as próximas ~22 páginas vão reaproveitar.

### 2.5 Testes reais no navegador (e os bugs que isso revelou)

Não me limitei a rodar o build — usei o Playwright para abrir o site de verdade num Chromium headless, em viewport de desktop e de mobile, cliquei nos menus, tirei screenshots e verifiquei os erros de console. Isso encontrou **três bugs reais**, que corrigi:

1. **O overlay tampava os próprios botões do menu** — depois de abrir um menu, não era possível clicar direto em outro grupo sem fechar antes. Causa: falta de um `z-index` correto no cabeçalho.
2. **O botão "Teste Grátis" continuava visível no mobile**, mesmo devendo ficar escondido — um conflito de especificidade entre uma classe interna do componente `Button` (`inline-flex`) e a classe `hidden` que eu passei por fora. O CSS gerado pelo Tailwind não respeita a ordem em que as classes aparecem no HTML, então a classe errada estava "ganhando". Corrigido isolando a visibilidade num elemento separado.
3. **O bug mais sério**: o cabeçalho tem um efeito de "vidro" (`backdrop-blur`). Por uma regra pouco conhecida do CSS, um elemento com esse efeito se torna a "referência de posicionamento" de qualquer elemento `position: fixed` dentro dele — isso fazia o fundo escurecido e o menu mobile (que deveriam cobrir a tela inteira) colapsarem para a altura de só 62 pixels (a altura do próprio cabeçalho). Corrigido movendo esses dois elementos para fora do cabeçalho na árvore do componente.

Só depois de confirmar visualmente (com screenshots) que o menu abre certo em desktop e mobile, que o acordeão do mobile expande cada grupo de forma independente, e que não há erros de console, considerei essa etapa concluída.

### 2.6 Entrega e acesso local

Deixei o servidor de desenvolvimento (`npm run dev`) rodando, para você poder abrir `http://localhost:3000` no seu navegador e navegar pelo site de verdade — inclusive testando o mega menu, que só funciona com o servidor ligado (ele depende de JavaScript/React).

---

## 3. O que ainda falta (próximos passos já mapeados)

- **Assets reais da marca**: logotipo, pattern em arquivo e fotografia — hoje são placeholders. Quando você enviar os arquivos, é só trocar dentro de `LogoMark.tsx` e `PatternBackground.tsx`/`public/brand/`.
- **As ~22 páginas restantes**: Verificação de Pessoas/Empresas, Biometria, OCR, Dados e Análises, Inteligência Artificial, API e Integrações, Recursos da Plataforma, as 6 páginas de mercado (RH, Varejo, Facilities, Saúde, Indústria, Condomínios — "Segurança Patrimonial" está no menu mas ainda não tem página redigida no PDF), as 5 páginas de caso de uso (Contratação, Gestão de Terceiros, Homologação de Fornecedores, Compliance, Prevenção a Fraudes), Planos, Central de Ajuda, Segurança e LGPD, Política de Privacidade e Termos de Uso. O copy de todas já está pronto em `docs/site-estrutura.txt` — falta só aplicar aos templates que já existem.

---

## 4. Onde encontrar cada coisa

| O que | Onde |
|---|---|
| Regras de marca resumidas | `BRAND.md` |
| Copy completo de todas as páginas (fonte de verdade) | `docs/site-estrutura.txt` |
| Texto completo do brandbook | `docs/brandbook.txt` |
| Menu (dados) | `src/data/nav.ts` |
| Cabeçalho / menu (componentes) | `src/components/layout/` |
| Componentes visuais reutilizáveis | `src/components/ui/` |
| Páginas construídas | `src/app/page.tsx` (Home), `src/app/quem-somos/page.tsx` |
| Cores e tipografia | `src/app/globals.css` |
| Este resumo | `RESUMO-DO-PROJETO.md` |
| Snapshot estático em HTML (visual, sem menu funcional) | `docs/html-snapshot/` |
