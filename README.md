# Viagem no Tempo — Gabizinha 💛

Um site de página única, mobile-first (pensado pra abrir no iPhone), que conta a história
da Gabizinha numa linha do tempo com fotos — do bebê até hoje — terminando numa mensagem
afetiva com corações flutuantes e confete. Um presente de irmão pra irmã.

Stack: **React + Vite + Tailwind CSS + Framer Motion + Lucide + canvas-confetti**.

## Como rodar

```bash
npm install      # só na primeira vez
npm run dev      # abre em http://localhost:5173
```

Para testar como no celular: abra o DevTools (F12) → ícone de dispositivo → escolha um iPhone.

## Personalizar (o que você vai querer mudar) ✏️

Quase tudo de conteúdo está em **um único arquivo**: [`src/data/moments.js`](src/data/moments.js).

- **Trocar as fotos:** substitua cada `image` por uma URL sua, ou ponha as fotos em
  `public/fotos/` e use `image: '/fotos/2010.jpg'`. Dica de performance: deixe cada foto
  com no máximo ~1080px de largura e < 150kb (ferramenta: [Squoosh](https://squoosh.app)).
- **Textos:** edite `title`, `description`, `year` de cada momento, o `hero` (saudação e
  botão) e o `closing` (frase final + assinatura). No `closing.message`, o trecho entre
  `**asteriscos**` aparece destacado em rosa.
- **Mais/menos momentos:** é só adicionar ou remover itens do array `moments`.

## Publicar (mandar o link pra ela) 🚀

```bash
npm run build    # gera a pasta dist/
```

Depois suba a pasta `dist/` em qualquer um (todos têm plano grátis):

- **Netlify Drop** — https://app.netlify.com/drop (só arrastar a pasta `dist/`).
- **Vercel** — `npx vercel` ou conectar o repositório.
- **GitHub Pages** — servir o conteúdo de `dist/`.

## Estrutura

```
src/
  data/moments.js        ← edite aqui (fotos + textos)
  components/
    Hero.jsx             abertura: vinheta + botão "Viajar no Tempo"
    Timeline.jsx         eixo tracejado + lista de momentos
    TimelineItem.jsx     marcador pulsante + card
    PolaroidCard.jsx     card estilo polaroid (scroll reveal)
    Finale.jsx           mensagem final + botão coração (confete)
    FloatingHearts.jsx   corações subindo
  App.jsx                junta tudo + scroll suave de abertura
  index.css              tokens, fontes, keyframes, safe-area do iPhone
tailwind.config.js       paleta do design system (cream-sand, soft-rose, etc.)
```

Feito com carinho. 💗
