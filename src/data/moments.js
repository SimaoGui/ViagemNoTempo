// ============================================================
//  CONTEÚDO DO SITE — edite SÓ este arquivo para personalizar.
//  As fotos ficam em /public e são servidas a partir da raiz:
//  /iniciobackground.png, /linha1.png ... /linha6.png, /finalebackground.png
//  Troque os textos pelos da Gabizinha de verdade. ✨
// ============================================================

// --- Foto de abertura (tela cheia do Hero) ---
export const hero = {
  image: '/iniciobackground.png',
  alt: 'Foto de infância cheia de memória',
  greeting: 'Para a Gabizinha!',
  cta: 'Viajar no Tempo',
}

// --- Linha do tempo: momentos em ordem cronológica ---
// rotate: rotação sutil alternada (cara de "fotos jogadas na mesa")
export const moments = [
  {
    year: '2010',
    title: 'O começo de tudo',
    description:
      'Você era um pacotinho pequenininho — e já era a coisa mais importante da casa inteira.',
    image: '/linha1.png',
    alt: 'Bebê dormindo aconchegada',
    rotate: '-rotate-2',
  },
  {
    year: '2013',
    title: 'Primeiros passos',
    description:
      'Cada tombo, cada risada. Você descobrindo o mundo e a gente descobrindo você.',
    image: '/linha2.png',
    alt: 'Criança pequena dando os primeiros passos',
    rotate: 'rotate-2',
  },
  {
    year: '2016',
    title: 'Parceiros de crime',
    description:
      'As melhores bagunças da infância foram do nosso lado. Cúmplices em tudo. 🤝',
    image: '/linha3.png',
    alt: 'Irmãos brincando juntos',
    rotate: '-rotate-1',
  },
  {
    year: '2019',
    title: 'Crescendo',
    description:
      'Do nada você já tinha opinião sobre tudo, gosto próprio e um sorriso que ilumina.',
    image: '/linha4.png',
    alt: 'Criança sorrindo ao ar livre',
    rotate: 'rotate-1',
  },
  {
    year: '2022',
    title: 'Virando gente grande',
    description:
      'Sonhos maiores, conversas mais longas. Continua sendo minha pessoinha favorita.',
    image: '/linha5.png',
    alt: 'Adolescente em um momento alegre',
    rotate: '-rotate-2',
  },
  {
    year: '2024',
    title: 'Orgulho de irmão',
    description:
      'Olha quem você se tornou. Forte, doce, uma benção na nossa vida. Te amamos muito!',
    image: '/linha6.png',
    alt: 'Retrato recente, cheio de luz',
    rotate: 'rotate-1',
  },
]

// --- Fechamento (Grand Finale) ---
export const closing = {
  // foto de fundo da última página (tela cheia, atrás do card)
  image: '/finalebackground.png',
  alt: 'Foto recente cheia de amor',
  // a palavra entre **asteriscos** ganha destaque em soft-rose
  message: 'Por mais que cresça, sempre caberá no nosso **coração**!',
  signature: '— Com amor, seu irmão',
}
