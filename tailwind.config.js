/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Design tokens — Viagem no Tempo
        'cream-sand': '#FFF3DD', // fundo principal (papel antigo)
        'warm-canvas': '#FFFAF1', // cards / áreas de destaque
        'soft-rose': '#FCA5A5', // acento: botões, linha do tempo, corações
        charcoal: '#3D3D3D', // texto principal (evita preto puro)
        'muted-earth': '#555555', // texto secundário / metadados
      },
      fontFamily: {
        sans: ['Arimo', 'Inter', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"Azeret Mono"', '"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        // sombra leve e difusa para os cards "flutuarem" sobre o creme
        polaroid:
          '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
      },
      letterSpacing: {
        meta: '0.05em',
      },
    },
  },
  plugins: [],
}
