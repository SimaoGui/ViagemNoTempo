import { useCallback, useRef } from 'react'

const MUSIC_SRC = '/photograph.mp3'
const VOLUME_LOW = 0.15 // som de fundo baixinho
const VOLUME_HIGH = 0.7 // depois do 1º toque no coração da finale
const RAMP_SECONDS = 1.8 // tempo da subida suave do volume

// Gerencia a música de fundo em loop.
//  - start(): começa a tocar baixinho. Precisa ser chamado dentro de um
//    gesto do usuário (clique), por causa da política de autoplay.
//  - boost(): sobe o volume suavemente. Só tem efeito na 1ª chamada.
//
// O áudio é roteado por um GainNode (Web Audio API) porque no Safari do
// iPhone a propriedade audio.volume é somente-leitura — controlar volume
// pelo elemento <audio> não funciona lá. O GainNode funciona em todo lugar.
export default function useBackgroundMusic() {
  const graphRef = useRef(null)
  const startedRef = useRef(false)
  const boostedRef = useRef(false)

  const getGraph = useCallback(() => {
    if (graphRef.current) return graphRef.current

    const el = new Audio(MUSIC_SRC)
    el.loop = true
    el.preload = 'auto'
    el.volume = VOLUME_LOW // fallback caso a Web Audio API não exista

    let ctx = null
    let gain = null
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext
      if (Ctx) {
        ctx = new Ctx()
        const source = ctx.createMediaElementSource(el)
        gain = ctx.createGain()
        gain.gain.value = VOLUME_LOW
        source.connect(gain)
        gain.connect(ctx.destination)
      }
    } catch {
      ctx = null
      gain = null
    }

    graphRef.current = { el, ctx, gain }
    return graphRef.current
  }, [])

  const start = useCallback(() => {
    if (startedRef.current) return
    startedRef.current = true
    const { el, ctx } = getGraph()
    if (ctx && ctx.state === 'suspended') ctx.resume().catch(() => {})
    el.play().catch(() => {})
  }, [getGraph])

  const boost = useCallback(() => {
    if (boostedRef.current) return
    boostedRef.current = true
    const { el, ctx, gain } = getGraph()
    // garante que esteja tocando (caso o boost venha antes do start)
    if (ctx && ctx.state === 'suspended') ctx.resume().catch(() => {})
    el.play().catch(() => {})

    if (gain && ctx) {
      // Subida suave do volume — funciona inclusive no iPhone.
      const now = ctx.currentTime
      gain.gain.cancelScheduledValues(now)
      gain.gain.setValueAtTime(gain.gain.value, now)
      gain.gain.linearRampToValueAtTime(VOLUME_HIGH, now + RAMP_SECONDS)
    } else {
      // Fallback (desktop sem Web Audio): anima el.volume via rAF.
      const t0 = performance.now()
      const from = el.volume
      const step = (n) => {
        const p = Math.min((n - t0) / (RAMP_SECONDS * 1000), 1)
        el.volume = from + (VOLUME_HIGH - from) * (1 - Math.pow(1 - p, 3))
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
  }, [getGraph])

  return { start, boost }
}
