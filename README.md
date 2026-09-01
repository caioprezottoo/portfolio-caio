# Portfólio — Caio Prezotto

Site de portfólio de direção criativa e produção visual, construído sobre a base
[landingbase](#sobre-a-base) (Astro estático).

Uma página só, em três atos:

1. **Hero** — o nome ocupando a tela sobre laranja, com as letras subindo da borda de baixo.
2. **Palco** — a frase de posicionamento e a roda de projetos dividem o mesmo carrossel:
   rolar não desce a página, gira a roda.
3. **Publicidade com IA** — comparações lado a lado entre o material que o cliente
   mandou e a peça que saiu.

## Comandos

| Comando                          | Ação                                   |
| -------------------------------- | -------------------------------------- |
| `npm install`                    | Instala as dependências                |
| `npm run dev -- --port 4400`     | Servidor de desenvolvimento em `:4400` |
| `npm run build`                  | Build estático em `./dist/`            |
| `npm run preview -- --port 4400` | Pré-visualiza o build                  |

> O preview roda **sempre na 4400**. Antes de subir, mate o servidor anterior
> (`pkill -f "astro dev"`); porta nova a cada build faz a aba aberta apontar para
> código velho.

Se o navegador mostrar markup novo com CSS antigo, é cache do Vite:
`rm -rf node_modules/.vite .astro dist` e suba de novo.

## Estrutura

```
src/
├── components/
│   ├── Hero.astro         # nome em tela cheia, masked reveal por letra + soco
│   ├── Palco.astro        # a roda: a seção de força é o primeiro item dela
│   ├── Forca.astro        # "Sites personalizados que cansaram de passar…"
│   ├── Ia.astro           # comparações origem → resultado
│   └── ScrollSuave.astro  # ilha do Lenis (único JS externo do site)
├── data/contato.ts        # e-mail, WhatsApp e link de agenda
├── layouts/Layout.astro   # <head>, fontes, Open Graph
├── styles/global.css      # @font-face da Neue Montreal + tokens
└── assets/                # imagens processadas pelo astro:assets
public/
├── fonts/                 # Neue Montreal 400 e 600 em woff2
└── videos/                # vídeos dos cards e das comparações
```

## Decisões que valem saber

**Tipografia.** [PP Neue Montreal](https://pangrampangram.com/products/neue-montreal)
é a fonte do site, servida localmente em woff2 (pesos 400 e 600). O wordmark do hero
é a exceção: usa **Anton**, do Google Fonts — é o desenho daquele cartaz, não a fonte
da marca. Para adicionar outro peso, converta o `.otf` com `fontTools`
(`f.flavor = "woff2"`).

**Movimento.** Quase tudo é CSS. A entrada do nome, o glow e as revelações de texto
não usam JavaScript. Três coisas exigiram script, e cada uma é uma ilha isolada:

- **Lenis** (5,6 KB gzip) para o scroll com inércia — a única dependência externa.
- A **roda** do palco, que precisa medir larguras e posicionar cada item no arco.
- O **scramble** da última palavra da frase de posicionamento.

**A roda.** O palco tem 520vh de altura e a tela fica presa em `sticky`, então rolar
vira movimento lateral. O curso é dividido em um trecho por item: dentro do trecho a
roda trava com o card centralizado, e a virada acontece no fim com uma curva suave.
A volta fecha na seção — não segue girando indefinidamente.

**Glow sem travar.** O halo do nome no hero são duas cópias borradas com `blur` **fixo**,
animando só a opacidade. A primeira versão animava o raio do `drop-shadow` em 12 letras
e derrubava a página para 26fps; assim roda a 165fps.

**Acessibilidade.** Todo o movimento respeita `prefers-reduced-motion`. O texto que
embaralha é `aria-hidden` e existe uma versão estável ao lado dele para leitores de
tela — senão o `<h2>` mudaria de conteúdo várias vezes por segundo.

**Vídeos.** Todos os originais vinham em HEVC, que o Chrome não decodifica. Foram
convertidos para H.264 (`-crf 30`) e caíram de ~16 MB para ~2,8 MB no total. Os dos
cards usam `preload="none"` e só tocam no hover.

## Pendências

- [ ] **Domínio** — sem `site` no `astro.config.mjs`, canonical e Open Graph absolutos
      não são emitidos. É o único item aberto do portão de qualidade da base.
- [ ] **Contato** — `src/data/contato.ts` ainda tem placeholders no número do WhatsApp
      e no link de agenda. A página também não tem mais nenhum CTA desde que as seções
      finais foram removidas.
- [ ] **Imagem do rasgo** — `src/assets/rasgo.jpg` veio do moodboard e é obra de
      terceiro. Trocar por algo próprio antes de publicar.

## Deploy

Conectar o repositório no [Vercel](https://vercel.com/new): ele detecta o Astro
sozinho e publica a cada push. `vercel.json` já aponta para `dist/`.

## Sobre a base

Este projeto partiu da **landingbase** — Astro estático, sem framework de CSS, pensada
para nota máxima em Lighthouse. A pasta [`intelligence/`](intelligence/README.md) guarda
o processo de criação de landing pages (briefing → direção → copy → build → QA) e não
faz parte do build.
