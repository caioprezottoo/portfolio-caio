# Reference — Princípios de design

O "gosto" aplicado. Use na Etapa 1 (direção criativa) e na Etapa 4 (build).

## Tipografia

- **Escala modular.** Defina display / H1 / H2 / corpo / legenda com salto perceptível
  (razão ~1.25–1.333). Contraste de tamanho cria hierarquia sem esforço.
- **Poucos pesos.** 2–3 pesos bastam (ex.: 400 corpo, 600 títulos, 700 display).
- **Medida de leitura.** Corpo entre 60–75 caracteres por linha (`max-width: 65ch`).
- **Altura de linha.** ~1.5 no corpo, mais apertada (1.05–1.2) em displays grandes.
- **Balanceamento.** `text-wrap: balance` em títulos, `text-pretty` em parágrafos.

## Cor

- **Base neutra + 1 destaque.** Fundo, texto e neutros fazem 90% da página; a cor de ação
  aparece pouco e por isso converte.
- **Contraste AA+.** Texto normal ≥ 4.5:1, grande ≥ 3:1. Teste antes de fechar a paleta.
- **Significado.** A cor de destaque = ação/links. Não a desperdice em decoração.
- **Dark ou light com intenção.** Escuro premium pede neutros frios e um glow contido;
  claro pede sombras suaves e bastante respiração.

## Espaço e ritmo

- **Respiração é design.** Margens generosas e espaço entre seções (clamp 4–8rem) fazem a
  página parecer cara. Aperto faz parecer template.
- **Escala de espaçamento consistente.** Use múltiplos previsíveis (4/8px) — não números soltos.
- **Ritmo vertical.** Alterne densidade: seção respirada → seção densa → respirada.

## Composição

- **Grid e alinhamento.** Tudo se alinha a um eixo. `max-width` central + padding lateral fluido.
- **Um foco por fold.** Um título, uma ação. O resto suporta.
- **Direção do olho.** Tamanho, cor e posição conduzem para o CTA.
- **Assinatura visual.** Um motivo recorrente (gradiente, borda, grão, linha) dá unidade.

## Movimento (quando houver)

- **Sutil e com propósito.** Fade/slide curtos na entrada, hover discreto. Nada que distraia.
- **Respeite `prefers-reduced-motion`.** Sempre.
- **Custo zero quando possível.** Prefira transições CSS a bibliotecas de animação.

## Responsividade

- **Mobile primeiro.** Desenhe o fold 1 para 360px e expanda.
- **Tipografia fluida.** `clamp()` para escalar entre breakpoints sem saltos.
- **Toque.** Alvos ≥ 44px, espaçados.
