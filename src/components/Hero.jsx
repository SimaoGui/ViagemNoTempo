import { motion, useReducedMotion } from 'framer-motion'
import { Rocket, ChevronDown } from 'lucide-react'
import { hero } from '../data/moments'

const SOFT_EASE = [0.16, 1, 0.3, 1]

// Hero: foto de infância em tela cheia com vinheta escura.
// Ao clicar no CTA, a vinheta clareia e a imagem dá um zoom-out
// (sensação de "entrar na foto"); o App rola até a linha do tempo.
export default function Hero({ entered, onEnter }) {
  const reduce = useReducedMotion()

  return (
    <section className="relative h-dvh min-h-dvh w-full overflow-hidden bg-charcoal">
      {/* Imagem de fundo (zoom-out suave na abertura) */}
      <motion.img
        src={hero.image}
        alt={hero.alt}
        loading="eager"
        initial={false}
        animate={{ scale: entered || reduce ? 1 : 1.1 }}
        transition={{ duration: 1.2, ease: SOFT_EASE }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Vinheta escura → clareia ao entrar */}
      <motion.div
        aria-hidden
        className="vignette absolute inset-0"
        initial={false}
        animate={{ opacity: entered ? 0.2 : 1 }}
        transition={{ duration: 1.2, ease: SOFT_EASE }}
      />

      {/* Conteúdo central */}
      <div className="safe-top safe-bottom relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: entered ? 0 : 1,
            y: entered ? -12 : 0,
          }}
          transition={{
            duration: entered ? 0.6 : 1,
            ease: SOFT_EASE,
            delay: entered ? 0 : 0.3,
          }}
          className={entered ? 'pointer-events-none' : ''}
        >
          <span className="font-mono text-xs uppercase tracking-meta text-white/75">
            uma viagem no tempo
          </span>
          <h1 className="mx-auto mt-4 max-w-md font-sans text-3xl font-bold leading-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
            {hero.greeting}
          </h1>

          <button
            onClick={onEnter}
            className="mt-9 inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-soft-rose px-8 py-3.5 font-sans text-base font-bold text-white shadow-xl shadow-black/20 transition-transform duration-200 ease-soft active:scale-95"
          >
            {hero.cta}
            <Rocket className="h-5 w-5" />
          </button>
        </motion.div>
      </div>

      {/* Dica de scroll (aparece depois de entrar) */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: entered ? 1 : 0 }}
        transition={{ duration: 0.8, delay: entered ? 1 : 0 }}
        className="safe-bottom pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center"
      >
        <motion.span
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/80"
        >
          <ChevronDown className="h-7 w-7" />
        </motion.span>
      </motion.div>
    </section>
  )
}
