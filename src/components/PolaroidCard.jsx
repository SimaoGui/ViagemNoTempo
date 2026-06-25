import { motion } from 'framer-motion'

const SOFT_EASE = [0.16, 1, 0.3, 1]

// Card de memória estilo Polaroid — moldura branca, leve rotação,
// entra com fade + slide suave ao surgir na tela.
export default function PolaroidCard({
  year,
  title,
  description,
  image,
  alt,
  rotate = '',
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: SOFT_EASE }}
      viewport={{ once: true, margin: '-100px' }}
      className={`relative mx-auto w-full max-w-sm rounded-2xl bg-white p-4 pb-7 shadow-polaroid ${rotate} transition-transform duration-500 ease-soft will-change-transform hover:rotate-0`}
    >
      <div className="aspect-square overflow-hidden rounded-lg bg-cream-sand ring-1 ring-black/5">
        <img
          src={image}
          alt={alt || title}
          loading="lazy"
          decoding="async"
          width="1080"
          height="1080"
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="px-1 pt-4">
        <span className="font-mono text-xs font-medium uppercase tracking-meta text-soft-rose">
          {year}
        </span>
        <h3 className="mt-1.5 font-sans text-xl font-bold leading-snug text-charcoal">
          {title}
        </h3>
        <p className="mt-2 font-sans text-base leading-relaxed text-muted-earth">
          {description}
        </p>
      </figcaption>
    </motion.figure>
  )
}
