# Reference — Portão de qualidade

Rode antes de entregar qualquer página. Só ship com tudo ✓. Esta base existe para tirar
**100/100/100/100 no Lighthouse** — não regrida isso.

## Performance

- [ ] `npm run build` passa sem erros nem warnings relevantes.
- [ ] **Zero JS** enviado, exceto ilhas estritamente necessárias (e essas com `client:visible`/`idle`).
- [ ] CSS crítico inlined (padrão do Astro) — sem folhas externas bloqueando render.
- [ ] Imagens via `astro:assets` (`<Image />`), com `width`/`height` (sem CLS) e formato moderno (AVIF/WebP).
- [ ] Fontes: do sistema (sem custo) ou `font-display: swap` + `preload` se for webfont; subset quando possível.
- [ ] Nenhuma dependência adicionada sem necessidade real.

## Acessibilidade

- [ ] HTML semântico: um `<h1>`, hierarquia de headings correta, landmarks (`header`/`main`/`footer`).
- [ ] Contraste AA+ em todos os textos e botões.
- [ ] Imagens com `alt` significativo (ou `alt=""` se decorativas).
- [ ] Navegável por teclado; foco visível; ordem lógica.
- [ ] `prefers-reduced-motion` respeitado em qualquer animação.
- [ ] Formulários com `<label>` associado.

## Boas práticas

- [ ] Sem erros no console.
- [ ] `lang` correto no `<html>`.
- [ ] Favicon presente; sem 404s de assets.
- [ ] Links externos sensíveis com `rel="noopener"`.

## SEO

- [ ] `<title>` e `<meta name="description">` únicos e descritivos por página.
- [ ] `site` definido em `astro.config.mjs` → canonical e OG absolutos ativos.
- [ ] Open Graph / Twitter card preenchidos (título, descrição, imagem).
- [ ] `robots.txt` coerente; sitemap se o site tiver múltiplas páginas.
- [ ] URLs limpas e semânticas.

## Responsividade e compatibilidade

- [ ] Testado de **360px a ultrawide** sem quebra nem scroll horizontal.
- [ ] Tipografia fluida (`clamp`) sem saltos bruscos.
- [ ] Alvos de toque ≥ 44px.
- [ ] Verificado em pelo menos um navegador WebKit (Safari) além do Chromium.

## Conversão

- [ ] Promessa clara no fold 1 sem rolar.
- [ ] Uma ação primária por fold; CTA repetido ao longo da página.
- [ ] Prova antes de cada ponto de fricção.
- [ ] Página termina em uma ação, não em texto solto.
