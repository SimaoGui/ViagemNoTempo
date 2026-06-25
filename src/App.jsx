import { useRef, useState } from 'react'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Finale from './components/Finale'

export default function App() {
  const [entered, setEntered] = useState(false)
  const timelineRef = useRef(null)

  // Ao clicar em "Viajar no Tempo": dispara a animação de abertura
  // e, logo depois, rola suavemente até a linha do tempo.
  const enter = () => {
    setEntered(true)
    window.setTimeout(() => {
      timelineRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 650)
  }

  return (
    <main>
      <Hero entered={entered} onEnter={enter} />
      <div ref={timelineRef}>
        <Timeline />
      </div>
      <Finale />
    </main>
  )
}
