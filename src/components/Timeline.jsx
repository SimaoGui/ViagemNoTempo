import { moments } from '../data/moments'
import TimelineItem from './TimelineItem'

// A Linha do Tempo (The Spine): eixo vertical tracejado central
// com os momentos cronológicos em cards Polaroid.
export default function Timeline() {
  return (
    <section className="bg-cream-sand px-4 pb-16 pt-20">
      <header className="mx-auto mb-14 max-w-md text-center">
        <span className="font-mono text-xs uppercase tracking-meta text-soft-rose">
          a sua história
        </span>
        <h2 className="mt-3 font-sans text-2xl font-bold leading-tight text-charcoal">
          Do pacotinho até agora
        </h2>
        <p className="mt-2 font-sans text-base text-muted-earth">
          Role devagar — cada foto é um pedacinho do caminho. 💛
        </p>
      </header>

      <div className="relative mx-auto max-w-md">
        {/* Eixo central tracejado (Soft Rose) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-soft-rose/60"
        />
        <ol>
          {moments.map((m) => (
            <TimelineItem key={m.year} moment={m} />
          ))}
        </ol>
      </div>
    </section>
  )
}
