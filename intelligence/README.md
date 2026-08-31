# intelligence/

A **inteligência de criação de landing pages** deste projeto: um conjunto de prompts e
instruções para uma IA (Claude) dirigir e construir páginas sobre a base Astro deste repo.

É **referência**, não código. O build do Astro (`src/pages/`) ignora esta pasta — os dois
convivem no mesmo repositório, mas são usados de forma independente.

## Como a IA deve usar isto

Ao receber um pedido de landing page neste repositório, o Claude deve:

1. Ler [`system-prompt.md`](system-prompt.md) — assume a persona e as regras inegociáveis.
2. Coletar o briefing com [`brief-template.md`](brief-template.md).
3. Seguir o fluxo em [`pipeline.md`](pipeline.md): briefing → direção criativa → copy → build → QA.
4. Consultar `reference/` durante cada etapa.
5. Só entregar após passar por [`reference/quality-checklist.md`](reference/quality-checklist.md).

## Índice

| Arquivo | Para quê |
| ------- | -------- |
| [`system-prompt.md`](system-prompt.md) | A persona/cérebro e os princípios não-negociáveis |
| [`pipeline.md`](pipeline.md) | O passo a passo de briefing → entrega |
| [`brief-template.md`](brief-template.md) | Questionário de intake de um novo pedido |
| [`reference/design-principles.md`](reference/design-principles.md) | Tipografia, cor, espaço, ritmo — o "gosto" |
| [`reference/section-anatomy.md`](reference/section-anatomy.md) | Catálogo de seções e quando usar cada uma |
| [`reference/quality-checklist.md`](reference/quality-checklist.md) | Portão de qualidade antes do ship |

## Relação com a base de código

A base é **Astro estático, zero JS por padrão, CSS crítico inlined, nota máxima de Lighthouse**.
Qualquer página gerada por esta inteligência deve preservar essas garantias — ver
[`reference/quality-checklist.md`](reference/quality-checklist.md).
