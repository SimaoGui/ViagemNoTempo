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

// Grand Finale: foto de fundo em tela cheia + mensagem afetiva + botão
// coração que dispara corações flutuantes e confete pastel.
//
// É uma seção opaca com z-index acima da timeline: quando a timeline
// congela no fim, este bloco sobe POR CIMA dela (ver App + .timeline-pin).
export default function Finale({ onCelebrate }) {
  const reduce = useReducedMotion()
  const [trigger, setTrigger] = useState(0)

  const celebrate = useCallback(() => {
    setTrigger((t) => t + 1)
    onCelebrate?.() // sobe o volume da música (só na 1ª vez; controlado no hook)
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
  }, [reduce, onCelebrate])

  return (
    <section className="safe-bottom relative z-20 flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-charcoal px-6 py-24 text-center">
      {/* Foto de fundo (tela cheia) — sobe por cima da timeline congelada */}
      <img
        src={closing.image}
        alt={closing.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Vinheta para o card e o coração permanecerem legíveis */}
      <div aria-hidden className="vignette absolute inset-0 bg-charcoal/30" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: SOFT_EASE }}
        viewport={{ once: true, margin: '-80px' }}
        className="relative z-10 w-full max-w-md rounded-3xl bg-warm-canvas/95 px-7 py-12 shadow-polaroid backdrop-blur-sm"
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

      <FloatingHearts trigger={trigger} />
    </section>
  )
}
