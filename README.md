# landingbase

Base minimalista para criação de landing pages — **Astro** estático, sem framework de CSS, otimizada para nota máxima em performance, acessibilidade, boas práticas e SEO.

Cada novo projeto parte deste repositório. Estilos e componentes específicos são adicionados depois, conforme a necessidade.

## Stack

- **Astro** (saída estática, zero JS por padrão)
- Reset CSS mínimo em `src/styles/global.css`
- Sem dependências opinativas

## Comandos

| Comando           | Ação                                  |
| ----------------- | ------------------------------------- |
| `npm install`     | Instala as dependências               |
| `npm run dev`     | Servidor de desenvolvimento (`:4321`) |
| `npm run build`   | Build estático em `./dist/`           |
| `npm run preview` | Pré-visualiza o build local           |

## Estrutura

```
src/
├── layouts/Layout.astro   # <head> com meta tags essenciais (SEO/A11y)
├── pages/index.astro      # página inicial (em branco)
└── styles/global.css      # reset mínimo
public/
├── favicon.svg
└── robots.txt
```

## Deploy

Conectar o repositório no [Vercel](https://vercel.com/new) — detecção automática do Astro, sem configuração. Cada push no GitHub publica.
