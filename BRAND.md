# Liberado — Guia rápido de marca

Extraído de `BRANDBOOK ANORA OFICIAL.pdf` (ver `docs/brandbook.txt` para o texto completo). Este arquivo é a referência rápida de "o que não fazer" ao construir novas páginas.

## Essência

- **Nome:** Liberado — plataforma de verificação de pessoas, empresas e documentos.
- **Tagline:** "Antes de confiar, valide." / "Verificar, Validar, Confiar."
- **Propósito:** Levar mais confiança para decisões que importam.
- **Missão:** Simplificar a verificação de informações para empresas.
- **Visão:** Tornar a verificação de informações uma etapa natural de toda decisão importante.
- **Arquétipo:** 70% Sábio + Guia, 20% Cuidador + Parceiro, 10% Inovador + Explorador.

## Tom de voz

- Claro, humano, direto. Explicar em vez de impressionar.
- **Sem emojis** em conteúdo institucional (site, e-mail, produto). Exceção: redes sociais, se fizer sentido.
- Vocabulário preferido da marca vs. termos de mercado:

| Sempre (copy da marca) | Nunca (fora de SEO) |
|---|---|
| validação, verificar, verificação, antecedentes, processos, pessoas, empresas, "em até 15 segundos" | background check, security check, KYC, score, aprovado/reprovado, plataforma SaaS, real-time, instantâneo |

  **Exceção explícita do brandbook:** em `meta title`/`meta description`/SEO, usar os termos de mercado (Background Check etc.) porque é o que o público busca no Google. No corpo da página (H1/H2/H3/cards), usar sempre a linguagem da marca.
- Tom por canal: SMS/push = curto e direto; e-mail = próximo e explicativo; site/app = claro, simples, orientado à ação; suporte = empático e resolutivo.

## Cores

| Token | Hex | Uso |
|---|---|---|
| `brand-blue` | `#4DC3F0` | Cor primária — links, ícones, destaques sobre fundo navy |
| `navy-900` | `#16233A` | **Fundo escuro principal** — Header, Hero, Footer, seções dark |
| `navy-800` | `#14264E` | Navy secundário — variação/hover sobre fundo escuro |
| `cta-yellow` | `#FCE100` | **Uso exclusivo em CTA.** Nunca decorativo, nunca em texto solto, ícone ou fundo fora de um botão de ação. |
| `blue-light` | `#A8D8EE` | Tom de apoio — fundos claros, tags |
| `tint` / `background` | `#E7EDF2` | **Branco do site** — fundo claro principal (substitui o branco puro) |
| `slate-blue` | `#8FA3BE` | Texto secundário sobre navy, bordas |

Regra dura: **o amarelo é só para chamar ação.** Se aparecer amarelo em qualquer lugar que não seja um CTA, está errado.

## Tipografia

- Família única: **Outfit** (Google Font). Nenhuma outra fonte em qualquer aplicação visual.
- Pesos: Light e Regular → apoio/legendas/CTA leve; Medium → subtítulos; Bold e Black → títulos e destaques.
- Títulos: peso Black, tracking apertado (~-0.02em), kerning ótico.
- Subtítulos: peso Medium, mesmo tracking.
- Corpo: peso Regular, entrelinha ~1,2.
- Itálico reservado a estrangeirismos e citações.

## Pattern e imagem

- 2 formas oficiais (`public/brand/pattern-check-*.svg` e `pattern-corner-*.svg`), cada uma em 3 tons: `blue` (#4DC3F0), `navy` (#16233A), `light` (#F2F6F8). São **flourishes decorativos grandes**, usados um por vez sangrando por um canto da seção (`PatternBackground.tsx`) — nunca como textura repetida em mosaico.
- **Nunca posicionar o pattern sob o logotipo/texto** — só como acento decorativo de canto, com opacidade baixa (ajustada em `PatternBackground.tsx` por variante) pra não brigar com o conteúdo.
- Fotografia: pessoas reais em ação (atendendo, explicando, demonstrando), luz definida, um ou dois personagens em foco, azul da marca aparecendo no uniforme/cenário. Sem pose de banco de imagens. Enquanto a fotografia oficial não chega, `public/images/people/` tem 6 fotos genéricas (Unsplash/Pexels, licença livre) como placeholder.

## Uso incorreto do logotipo

Não: distorcer, girar, usar cores fora da marca, alterar composição, aplicar sobre fundo de baixo contraste, espelhar, contornar, recortar, sombrear, usar em baixa resolução, sobrepor texto, usar mais de uma cor.

## Assets

Logo (lockup completo + ícone isolado, versão colorida e branca) e os 2 patterns oficiais **já foram recebidos** e estão em `public/brand/` (`logo-color.png`, `logo-white.png`, `icon-color.png`, `icon-white.png`, `pattern-check-*.svg`, `pattern-corner-*.svg`) — consumidos por `LogoMark.tsx` (prop `tone`) e `PatternBackground.tsx` (prop `variant`). Fotografia oficial da marca ainda não foi enviada — segue com os placeholders genéricos citados acima.

**Pendência real nos arquivos de logo**: `logo-white.png` e `icon-white.png` (versão "para fundo azul escuro") foram exportados como PNG comum (RGB, sem canal alfa) com fundo branco chapado, não transparente — confirmado lendo o header do PNG. Sobre fundo navy isso aparece como um retângulo branco atrás do logo. `LogoMark.tsx` contorna isso caindo pro mark vetorial simples quando `tone="light"`, em vez de usar o PNG quebrado. **Pra usar o arquivo oficial no navy também**, pedir ao designer um re-export com canal alfa (PNG-32/RGBA ou SVG) — aí é só trocar o caminho em `LogoMark.tsx`.
