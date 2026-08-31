# Reference — Anatomia de seções

Catálogo de seções de landing page. Use na Etapa 2 para montar a sequência. Nem toda página
usa todas — escolha o que serve à conversão. A espinha mínima é: **Hero → Prova/Valor → CTA**.

## Essenciais

| Seção | Função | Notas |
| ----- | ------ | ----- |
| **Hero** | Promessa em 5s + ação primária | Headline de benefício, subhead de contexto, 1 CTA, prova leve (logos/nota) |
| **Prova social** | Reduzir risco | Depoimentos, logos, números, mídia. Específico > genérico |
| **Benefícios / Valor** | Traduzir features em ganhos | "O que você ganha", não "o que tem". Ícone + título + 1 linha |
| **Oferta / Pricing** | Tornar a decisão fácil | Preço claro, o que inclui, âncora, garantia, CTA repetido |
| **CTA final** | Última chamada | Reforça promessa + remove fricção + ação |

## De apoio (use conforme a oferta)

| Seção | Quando usar |
| ----- | ----------- |
| **Como funciona** | Processo/onboarding não óbvio — 3 a 4 passos |
| **Para quem é / não é** | Qualificar o público e aumentar identificação |
| **Objeções / FAQ** | Há dúvidas recorrentes que travam a compra |
| **Comparativo** | Mercado competitivo; mostrar diferencial lado a lado |
| **Demonstração / Preview** | Produto visual (screenshots, vídeo, antes/depois) |
| **Sobre / Autoridade** | A credibilidade de quem oferece é parte da venda |
| **Garantia / Risco-zero** | Diminuir o medo da decisão |
| **Bônus / Urgência** | Lançamentos com prazo ou estoque |

## Regras de sequência

1. O fold 1 entrega a promessa **sem rolar**.
2. Cada bloco de fricção (preço, formulário) vem **depois** de prova suficiente.
3. Repita o CTA a cada ~2–3 seções — quem decidir não deve precisar rolar de volta.
4. Termine sempre com uma ação clara, nunca em um parágrafo solto.

## No código

Cada seção = um componente em `src/components/` (ex.: `Hero.astro`, `Pricing.astro`),
composto na página de `src/pages/`. Estilo scoped por componente.
