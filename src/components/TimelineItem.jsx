import { useState } from 'react'
import { motion } from 'framer-motion'
import PolaroidCard from './PolaroidCard'

const SOFT_EASE = [0.16, 1, 0.3, 1]

// Um item da linha do tempo: marcador de ano (que "acende" e pulsa
// ao entrar na tela) seguido do card Polaroid.
export default function TimelineItem({ moment }) {
  const [lit, setLit] = useState(false)

  return (
    <li className="relative pb-16 last:pb-2">
      {/* Marcador no eixo central */}
      <div className="flex justify-center">
        <motion.span
          onViewportEnter={() => setLit(true)}
          viewport={{ once: true, margin: '-45% 0px -45% 0px' }}
          initial={{ scale: 0.3, opacity: 0.35 }}
          animate={{ scale: lit ? 1 : 0.3, opacity: lit ? 1 : 0.35 }}
          transition={{ duration: 0.5, ease: SOFT_EASE }}
          className={`relative z-10 block h-3.5 w-3.5 rounded-full bg-soft-rose ring-4 ring-cream-sand ${
            lit ? 'animate-pulse-glow' : ''
          }`}
        />
      </div>

      {/* O card de memória */}
      <div className="relative z-10 mt-7">
        <PolaroidCard {...moment} />
      </div>
    </li>
  )
}
