// ============================================================
//  CONTEÚDO DO SITE — edite SÓ este arquivo para personalizar.
//  As fotos ficam em /public e são servidas a partir da raiz:
//  /iniciobackground.png, /linha1.png ... /linha6.png, /finalebackground.png
//  Troque os textos pelos da Gabizinha de verdade. ✨
// ============================================================

// --- Foto de abertura (tela cheia do Hero) ---
export const hero = {
  image: '/iniciobackground.webp',
  alt: 'Foto de infância cheia de memória',
  greeting: 'Para a Gabizinha!',
  cta: 'Viajar no Tempo',
}

// --- Linha do tempo: momentos em ordem cronológica ---
// rotate: rotação sutil alternada (cara de "fotos jogadas na mesa")
export const moments = [
  {
    title: 'O começo de tudo',
    description:
      'Você era um pacotinho pequenininho — e já era a coisa mais importante da casa inteira.',
    image: '/linha1.webp',
    alt: 'Bebê dormindo aconchegada',
    rotate: '-rotate-2',
  },
  {
    title: 'Primeiros passos',
    description:
      'Cada tombo, cada risada. Você descobrindo o mundo e a gente descobrindo você.',
    image: '/linha2.webp',
    alt: 'Criança pequena dando os primeiros passos',
    rotate: 'rotate-2',
  },
  {
    title: 'Parceiros de crime',
    description:
      'As melhores bagunças da infância foram do nosso lado. Cúmplices em tudo. 🤝',
    image: '/linha3.webp',
    alt: 'Irmãos brincando juntos',
    rotate: '-rotate-1',
  },
  {
    title: 'Crescendo',
    description:
      'Do nada você já tinha opinião sobre tudo, gosto próprio e um sorriso que ilumina.',
    image: '/linha4.webp',
    alt: 'Criança sorrindo ao ar livre',
    rotate: 'rotate-1',
  },
  {
    title: 'Virando gente grande',
    description:
      'Sonhos maiores, conversas mais longas. Continua sendo minha pessoinha favorita.',
    image: '/linha5.webp',
    alt: 'Adolescente em um momento alegre',
    rotate: '-rotate-2',
  },
  {
    title: 'Orgulho de irmão',
    description:
      'Olha quem você se tornou. Forte, doce, uma benção na nossa vida. Te amamos muito!',
    image: '/linha6.webp',
    alt: 'Retrato recente, cheio de luz',
    rotate: 'rotate-1',
  },
]

// --- Fechamento (Grand Finale) ---
export const closing = {
  // foto de fundo da última página (tela cheia, atrás do card)
  image: '/finalebackground.webp',
  alt: 'Foto recente cheia de amor',
  // a palavra entre **asteriscos** ganha destaque em soft-rose
  message: 'Por mais que cresça, sempre caberá no nosso **coração**!',
  signature: '— Com amor, Tato',
}
