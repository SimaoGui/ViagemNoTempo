Design System — Viagem no Tempo (Gabizinha)

Este guia define as diretrizes visuais, de interface e de experiência (UI/UX) para o site interativo da Gabizinha. O objetivo é criar uma atmosfera calorosa, nostálgica e íntima, sem perder o refinamento técnico de um produto digital moderno e perfeitamente adaptado para dispositivos móveis (mobile-first).

1. Princípios de Design (Concept)

Nostalgia Confortável (Warm & Cozy): Cores quentes e suaves que lembram álbuns de fotos antigos, café da manhã em família e momentos felizes.

Foco no Conteúdo: A interface serve como moldura. As fotos e os pequenos textos de afeto são os verdadeiros protagonistas.

Fluidez e Ritmo: A navegação por scroll deve ser suave, criando um ritmo de leitura cinematográfico à medida que a história é revelada.

Toque Moderno (Tech-Chic): Detalhes tipográficos em fonte mono-espaçada trazem a sensação de "linhas de tempo", "metadados" e precisão moderna, equilibrando o sentimentalismo.

2. Paleta de Cores (Color Palette)

As cores foram escolhidas para evocar sentimentos de carinho, suavidade e passagem de tempo (tons amarelados e rosados de pôr do sol).

Cores Principais

Nome da Cor

Hex

Uso Recomendado

Sensação Psicológica

Cream Sand

#FFF3DD

Fundo principal da página (Background)

Acolhimento, calor, nostalgia, papel antigo.

Warm Canvas

#FFFAF1

Fundo de cards, áreas de destaque

Limpeza, suavidade, contraste sutil.

Soft Rose

#FCA5A5

Botões, linhas do tempo, corações, destaques

Amor, doçura, afeto fraternal.

Charcoal Night

#3D3D3D

Títulos, textos principais, ícones

Modernidade, leitura confortável (evita o preto puro).

Muted Earth

#555555

Legendas, metadados, textos secundários

Estabilidade, discrição.

Gradientes de Transição

Dark Vintage Vignette: radial-gradient(circle, transparent 20%, rgba(0, 0, 0, 0.8) 100%)

Uso: Na imagem Hero para criar o efeito de "foco antigo" e escurecimento nas bordas, facilitando a leitura do título inicial.

Nostalgic Overlay: linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0) 60%)

Uso: Sobreposição de imagens que ocupam a tela inteira, garantindo contraste para textos posicionados na base.

3. Tipografia (Typography)

A combinação tipográfica contrasta a legibilidade moderna com a precisão minimalista de metadados.

Fonte Principal (Títulos e Corpo): Arimo (Sans-serif, Google Fonts)

Alternativas: Inter, Helvetica, Arial.

Características: Neutra, legível em telas pequenas de celular, transmite proximidade.

Fonte Secundária (Metadados e Tags): Azeret Mono (Monospace, Google Fonts)

Alternativas: JetBrains Mono, Fira Code, Courier.

Características: Usada para anos (ex: 2010), hashtags (ex: #MelhorAmigo) e pequenos marcadores cronológicos.

Escala Tipográfica (Mobile-First)

Título Hero (H1): font-size: 32px (2rem) | line-height: 1.2 | font-weight: 700

Títulos de Seção (H2): font-size: 24px (1.5rem) | line-height: 1.3 | font-weight: 700

Subtítulos/Cards (H3): font-size: 20px (1.25rem) | line-height: 1.4 | font-weight: 700

Corpo de Texto (P): font-size: 16px (1rem) | line-height: 1.6 | font-weight: 400

Metadados / Mono (Span): font-size: 14px (0.875rem) | line-height: 1 | font-weight: 500 | letter-spacing: 0.05em

4. Grid e Espaçamento (Spacing & Layout)

Para garantir uma navegação sem atrito nos dedos no celular, os espaçamentos seguem uma escala de base $8$ ($8\text{px}$, $16\text{px}$, $24\text{px}$, $32\text{px}$, $48\text{px}$, $64\text{px}$).

Margens do Container Mobile

Laterais: 16px (mínimo) a 24px (recomendado) para dar respiro ao conteúdo.

Espaço entre seções (Vertical): 64px a 96px para simular capítulos distintos da história enquanto ela faz o scroll.

Toques e Interações

Touch Targets: Qualquer elemento clicável (como o botão "Viajar no Tempo" ou links) deve ter uma área de toque ativa de no mínimo $48\text{px} \times 48\text{px}$.

5. Componentes Visuais (UI Elements)

A. Molduras de Foto (Os Cards de Memória)

Inspirados em fotografias Polaroid e álbuns analógicos físicos.

Fundo: #FFFFFF (Branco puro)

Bordas: 12px de espessura de borda branca simulando revelação física.

Bordas arredondadas (Radius): 16px no container externo.

Sombra (Box Shadow): 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05) (Uma sombra extremamente leve e difusa para dar sensação de flutuação sobre o fundo de creme).

B. Linha do Tempo (The Spine)

A Linha Física: Um traço vertical centralizado de 2px usando a cor #FCA5A5 (Soft Rose) com estilo tracejado (dashed), ligando um card de memória ao outro.

Marcador de Ano: Um pequeno círculo de 12px preenchido com #FCA5A5, que pulsa levemente quando entra na tela.

C. Botões (Call to Action)

Estilo Principal: Pílula (border-radius: 9999px).

Preenchimento: #FCA5A5 (Soft Rose) com texto em #FFFFFF (Negrito).

Efeito Hover/Active (Mobile): Redução sutil de escala ao pressionar (scale: 0.96) para dar resposta física imediata (haptic feel).

6. Diretrizes de Movimento (Motion & Micro-interactions)

A sensação premium do site virá das transições. Toda animação deve ser sutil e baseada em físicas naturais (evitar efeitos de "bater" ou "quicar" exagerados).

Curva de Transição Base (Ease)

Use curvas de amortecimento suaves:

cubic-bezier(0.16, 1, 0.3, 1) (Ultra suave/Custom Ease)

Estados de Transição

Entrada de Cards (Scroll Reveal):

Estado Inicial: opacity: 0, translateY: 40px

Estado Final: opacity: 1, translateY: 0

Duração: 0.8s

O Efeito Hero (Abertura do Site):

Ao clicar no botão "Viajar no Tempo", a vinheta escura (vignette) diminui sua opacidade de 1 para 0.2 em 1.2s.

A imagem de fundo faz um zoom sutil de scale: 1.1 para scale: 1.0, dando a sensação de que o usuário está "entrando" na foto.

7. Preparação de Mídia (Media Guidelines)

Para que o site abra instantaneamente no celular dela (mesmo no 3G/4G):

Formato de Imagem: Converter todas as fotos antigas e novas para .webp ou .avif.

Resolução Mobile: Largura máxima de 1080px é mais do que suficiente para telas de celulares modernos de alta densidade de pixels (Retina/Super Retina).

Compressão: Utilizar ferramentas como o Squoosh para reduzir o peso das fotos para menos de 150kb cada uma.