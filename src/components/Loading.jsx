import { motion, useReducedMotion } from 'framer-motion'
import { Heart } from 'lucide-react'

const SOFT_EASE = [0.16, 1, 0.3, 1]

// Tela de carregamento exibida por ~2s na abertura e que some com um fade.
// Coração pulsando + barra de progresso que enche no tempo do loading.
export default function Loading() {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: SOFT_EASE }}
      className="safe-top safe-bottom fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream-sand px-8 text-center"
    >
      <motion.span
        animate={reduce ? {} : { scale: [1, 1.18, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        className="text-soft-rose"
      >
        <Heart
          fill="currentColor"
          strokeWidth={1.5}
          className="h-14 w-14 drop-shadow-[0_6px_16px_rgba(252,165,165,0.45)]"
        />
      </motion.span>

      <p className="mt-6 font-mono text-xs uppercase tracking-meta text-muted-earth">
        uma viagem no tempo
      </p>

      {/* Barra de progresso que enche no tempo do loading (2s) */}
      <div className="mt-5 h-1 w-44 overflow-hidden rounded-full bg-soft-rose/20">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="h-full rounded-full bg-soft-rose"
        />
      </div>
    </motion.div>
  )
}
