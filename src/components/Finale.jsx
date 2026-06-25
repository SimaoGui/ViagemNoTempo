import { useCallback, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Heart } from 'lucide-react'
import confetti from 'canvas-confetti'
import { closing } from '../data/moments'
import FloatingHearts from './FloatingHearts'

const SOFT_EASE = [0.16, 1, 0.3, 1]
const PASTEL = ['#FCA5A5', '#FFD6A5', '#FFADAD', '#FFC6FF', '#FDE2E4', '#FFFAF1']

// Renderiza a frase, destacando **trechos** em soft-rose.
function renderMessage(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <span key={i} className="text-soft-rose">
        {part.slice(2, -2)}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

// Grand Finale: mensagem afetiva + botão coração que dispara
// corações flutuantes e uma explosão de confete pastel.
//
// Efeito de scroll (inspirado no 3dMarketPlace): a foto de fundo da finale
// fica "presa" na tela (parallax) enquanto a timeline desliza pra cima e o
// card sobe POR CIMA — dando a sensação de que a finale passa por cima do
// conteúdo anterior, em vez de um scroll de blocos estáticos.
export default function Finale() {
  const reduce = useReducedMotion()
  const [trigger, setTrigger] = useState(0)

  const celebrate = useCallback(() => {
    setTrigger((t) => t + 1)
    if (reduce) return

    const fire = (ratio, opts) =>
      confetti({
        origin: { y: 0.7 },
        colors: PASTEL,
        disableForReducedMotion: true,
        particleCount: Math.floor(170 * ratio),
        ...opts,
      })

    fire(0.25, { spread: 26, startVelocity: 55, scalar: 0.9 })
    fire(0.2, { spread: 60, scalar: 0.9 })
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 })
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 })
    fire(0.1, { spread: 120, startVelocity: 45, scalar: 0.9 })
  }, [reduce])

  return (
    // -mt-[6vh]: a finale sobe um pouco sobre o fim da timeline (o "lábio"
    // arredondado + sombra superior fazem ela passar por cima da timeline).
    <section className="relative z-10 -mt-[6vh]">
      {/* Camada de fundo PRESA (parallax): fica travada na viewport enquanto
          o conteúdo rola por cima. Borda superior arredondada + sombra dão o
          efeito de "deslizar por cima" do conteúdo anterior. */}
      <div className="finale-sticky-bg overflow-hidden rounded-t-[2.75rem] shadow-[0_-24px_50px_-12px_rgba(0,0,0,0.45)]">
        <img
          src={closing.image}
          alt={closing.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Vinheta para o card e o coração permanecerem legíveis */}
        <div aria-hidden className="vignette absolute inset-0 bg-charcoal/30" />
      </div>

      {/* Conteúdo que sobe POR CIMA do fundo preso */}
      <div className="safe-bottom relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: SOFT_EASE }}
          viewport={{ once: true, margin: '-80px' }}
          className="w-full max-w-md rounded-3xl bg-warm-canvas/95 px-7 py-12 shadow-polaroid backdrop-blur-sm"
        >
          <span className="font-mono text-xs uppercase tracking-meta text-soft-rose">
            e hoje...
          </span>

          <p className="mx-auto mt-5 max-w-sm font-sans text-2xl font-bold leading-snug text-charcoal">
            {renderMessage(closing.message)}
          </p>

          <motion.button
            onClick={celebrate}
            whileTap={{ scale: 0.9 }}
            aria-label="Mandar amor para a Gabizinha"
            className="mx-auto mt-10 flex h-16 w-16 items-center justify-center rounded-full bg-soft-rose shadow-lg shadow-soft-rose/40 transition-transform active:scale-95"
          >
            <motion.span
              animate={reduce ? {} : { scale: [1, 1.18, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart fill="#fff" strokeWidth={1.5} className="h-7 w-7 text-white" />
            </motion.span>
          </motion.button>

          <p className="mt-4 font-mono text-xs uppercase tracking-meta text-muted-earth">
            toque no coração 💗
          </p>

          <p className="mt-10 font-mono text-sm text-muted-earth">{closing.signature}</p>
        </motion.div>
      </div>

      <FloatingHearts trigger={trigger} />
    </section>
  )
}
