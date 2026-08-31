# Pipeline — do briefing à entrega

Fluxo padrão para criar uma landing page nesta base. Cada etapa tem um objetivo, um prompt
e um artefato de saída. Não pule etapas.

---

## Etapa 0 — Briefing

**Objetivo:** entender oferta, público, objetivo e restrições.
**Prompt:** preencha [`brief-template.md`](brief-template.md) com o cliente/usuário. Se faltar
algo essencial (oferta, público-alvo, ação desejada), pergunte antes de seguir.
**Saída:** briefing preenchido.

---

## Etapa 1 — Direção criativa

**Objetivo:** definir a ideia antes do layout. Consulte
[`reference/design-principles.md`](reference/design-principles.md).

Defina e escreva:

- **Conceito / ângulo:** a ideia central e a promessa em uma frase.
- **Tom:** 3–5 adjetivos (ex.: confiante, técnico, caloroso).
- **Paleta:** fundo, texto, 1 cor de destaque/ação, e neutros. Justifique o contraste.
- **Sistema tipográfico:** família(s), escala (display → corpo → legenda), pesos.
- **Motivo/assinatura:** o elemento visual recorrente (gradiente, grão, borda, glow, linha).
- **Anatomia de folds:** a lista ordenada de seções (ver Etapa 2).

**Saída:** um bloco de "Direção Criativa" em markdown.

---

## Etapa 2 — Estrutura (anatomia de folds)

**Objetivo:** decidir a sequência de seções que conduz à conversão.
**Prompt:** monte a ordem usando o catálogo em
[`reference/section-anatomy.md`](reference/section-anatomy.md). Toda página precisa de:
hero claro → prova/benefício → oferta/CTA. O resto é a serviço disso.
**Saída:** lista ordenada de seções com a função de cada uma.

---

## Etapa 3 — Copy

**Objetivo:** escrever o texto de cada seção.

Diretrizes:

- **Headline (fold 1):** benefício concreto, não slogan vago. Subhead explica o "como/para quem".
- **Voz:** segue o tom da direção. Frases curtas. Sem jargão vazio.
- **Prova:** específica (números, nomes, resultados) — não adjetivo.
- **CTA:** verbo de ação + valor ("Começar agora" > "Enviar").
- **Escaneável:** títulos, bullets, ênfase. Ninguém lê parágrafo gigante em LP.

**Saída:** copy por seção, pronta para entrar no layout.

---

## Etapa 4 — Build (sobre a base Astro)

**Objetivo:** implementar a página mantendo as garantias técnicas.

Regras de implementação:

- Páginas em `src/pages/`. Use o `Layout.astro` para `<head>` (title/description por página).
- Seções como **componentes Astro** em `src/components/` (crie a pasta) — uma seção por arquivo.
- Estilo: comece pelo reset em `src/styles/global.css`. Estilos específicos via **`<style>`
  scoped** dentro de cada componente `.astro` (Astro escopa e inlining automático).
- **Zero JS por padrão.** Precisa de interação real (carrossel, accordion, form dinâmico)?
  Crie uma **ilha** (`client:visible`/`client:idle`) só naquele componente — nunca hidrate a
  página toda. Se for CSS-only (menu, tabs simples), prefira CSS.
- Imagens: use `astro:assets` (`<Image />`) com `width`/`height` e formatos modernos.
- Defina `site` em `astro.config.mjs` quando houver domínio (ativa canonical/OG absolutos).

**Saída:** página funcionando em `npm run dev`, build limpo em `npm run build`.

---

## Etapa 5 — QA (portão de qualidade)

**Objetivo:** garantir nota máxima e responsividade antes de entregar.
**Prompt:** rode todos os itens de
[`reference/quality-checklist.md`](reference/quality-checklist.md). Só entregue com tudo ✓.
**Saída:** checklist preenchido + confirmação de build.
