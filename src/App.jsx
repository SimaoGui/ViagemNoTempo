import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Finale from './components/Finale'
import Loading from './components/Loading'
import useBackgroundMusic from './useBackgroundMusic'

export default function App() {
  const [entered, setEntered] = useState(false)
  const [loading, setLoading] = useState(true)
  const timelineRef = useRef(null)
  const music = useBackgroundMusic()

  // Tela de loading: visível por 2s na abertura, depois some.
  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 2000)
    return () => window.clearTimeout(t)
  }, [])

  // Efeito de chegada na finale: a timeline "congela" ao chegar no fim e o
  // finale sobe POR CIMA dela. Fazemos isso com position: sticky e um `top`
  // NEGATIVO igual a (altura da tela − altura da timeline): assim a timeline
  // trava exibindo a ÚLTIMA tela (e não a primeira). Como a altura muda com
  // as imagens e o tamanho da tela, recalculamos com ResizeObserver.
  const [pinTop, setPinTop] = useState(0)
  useLayoutEffect(() => {
    const el = timelineRef.current
    if (!el) return
    const update = () => {
      const h = el.offsetHeight
      const vh = window.innerHeight
      setPinTop(h > vh ? vh - h : 0)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  // Ao clicar em "Viajar no Tempo": dispara a animação de abertura,
  // inicia a música de fundo baixinho (1º gesto do usuário — exigido
  // pela política de autoplay) e rola suavemente até a linha do tempo.
  const enter = () => {
    setEntered(true)
    music.start()
    window.setTimeout(() => {
      timelineRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 650)
  }

  return (
    <>
      <AnimatePresence>{loading && <Loading key="loading" />}</AnimatePresence>

      <main>
        <Hero entered={entered} onEnter={enter} />

        <div className="relative">
          {/* timeline-pin: congela mostrando a última tela (sticky + top negativo) */}
          <div ref={timelineRef} className="timeline-pin z-0" style={{ top: `${pinTop}px` }}>
            <Timeline />
          </div>
          {/* music.boost sobe o volume — só na 1ª vez (controlado no hook) */}
          <Finale onCelebrate={music.boost} />
        </div>
      </main>
    </>
  )
}
