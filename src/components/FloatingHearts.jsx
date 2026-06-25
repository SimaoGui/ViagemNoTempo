import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Heart } from 'lucide-react'

let uid = 0

// Corações que sobem flutuando pela tela a cada toque no botão.
// `trigger` é um contador: sempre que muda, dispara uma nova leva.
export default function FloatingHearts({ trigger }) {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    if (!trigger) return
    const rise =
      typeof window !== 'undefined' ? window.innerHeight * 0.9 : 700
    const burst = Array.from({ length: 14 }).map(() => ({
      id: uid++,
      left: 8 + Math.random() * 84, // % horizontal
      drift: (Math.random() - 0.5) * 90, // deriva lateral (px)
      size: 16 + Math.random() * 24,
      duration: 2.4 + Math.random() * 1.8,
      delay: Math.random() * 0.35,
      rise,
    }))
    setHearts((h) => [...h, ...burst])
  }, [trigger])

  const remove = (id) => setHearts((h) => h.filter((x) => x.id !== id))

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      <AnimatePresence>
        {hearts.map((h) => (
          <motion.div
            key={h.id}
            initial={{ opacity: 0, y: 0, x: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: -h.rise,
              x: h.drift,
              scale: 1,
            }}
            transition={{ duration: h.duration, delay: h.delay, ease: 'easeOut' }}
            onAnimationComplete={() => remove(h.id)}
            style={{ left: `${h.left}%`, bottom: '14%' }}
            className="absolute"
          >
            <Heart
              fill="#FCA5A5"
              strokeWidth={1.5}
              className="text-soft-rose drop-shadow-[0_4px_10px_rgba(252,165,165,0.5)]"
              style={{ width: h.size, height: h.size }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
