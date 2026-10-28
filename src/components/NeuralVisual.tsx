import { useEffect, useRef } from 'react'
import { useI18n } from '../i18n/useI18n'
import { linePath, makeSignal, SAMPLE_COUNT } from '../lib/signal'

/** An artistic galaxy, separate from the calculated signals in the laboratory. */
function Galaxy() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return
    let seed = 8147
    const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646 }
    const stars = Array.from({ length: 190 }, () => ({ x: random() * 600, y: random() * 480, size: .3 + random() * 1, alpha: .12 + random() * .55 }))
    const dust = Array.from({ length: 4600 }, (_, i) => {
      const r = Math.pow(random(), .78) * 254
      const arm = i % 4
      const angle = arm * Math.PI / 2 + r * .018 + (random() - .5) * (.5 + 30 / (r + 20))
      return { r, angle, height: (random() - .5) * (10 + r * .16), size: .3 + random() * 1.1, alpha: .1 + random() * .65, warm: random() > r / 270 }
    })
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let visible = true
    let rotation = 0
    let last = 0

    function draw() {
      if (!canvas || !context) return
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
      if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
        canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr)
      }
      context.setTransform(canvas.width / 600, 0, 0, canvas.height / 480, 0, 0)
      context.clearRect(0, 0, 600, 480)
      for (const star of stars) {
        context.fillStyle = `rgba(204,219,240,${star.alpha})`
        context.beginPath(); context.arc(star.x, star.y, star.size, 0, Math.PI * 2); context.fill()
      }
      context.save()
      context.translate(300, 242)
      context.rotate(-.46)
      context.scale(1, .53)
      const halo = context.createRadialGradient(0, 0, 2, 0, 0, 280)
      halo.addColorStop(0, 'rgba(242,213,164,.5)')
      halo.addColorStop(.13, 'rgba(197,181,167,.18)')
      halo.addColorStop(.4, 'rgba(87,128,174,.1)')
      halo.addColorStop(1, 'rgba(58,92,146,0)')
      context.fillStyle = halo; context.fillRect(-300, -300, 600, 600)
      context.restore()
      context.globalCompositeOperation = 'screen'
      for (const particle of dust) {
        const angle = particle.angle + rotation
        const x = Math.cos(angle) * particle.r
        const y = Math.sin(angle) * particle.r * .53 + particle.height
        const px = 300 + x * .896 + y * .444
        const py = 242 - x * .444 + y * .896
        context.fillStyle = particle.warm ? `rgba(225,202,168,${particle.alpha})` : `rgba(122,162,214,${particle.alpha})`
        context.beginPath(); context.arc(px, py, particle.size, 0, Math.PI * 2); context.fill()
      }
      const core = context.createRadialGradient(300, 242, 0, 300, 242, 44)
      core.addColorStop(0, 'rgba(255,245,215,.9)'); core.addColorStop(.12, 'rgba(255,226,179,.55)'); core.addColorStop(1, 'rgba(221,178,133,0)')
      context.fillStyle = core; context.fillRect(255, 197, 90, 90)
      context.globalCompositeOperation = 'source-over'
    }

    function tick(time: number) {
      if (visible && !document.hidden && !motion.matches && time - last >= 50) {
        rotation += Math.min(time - last, 80) * .000009
        last = time; draw()
      }
      if (visible && !document.hidden && !motion.matches) frame = requestAnimationFrame(tick)
    }
    function resume() {
      cancelAnimationFrame(frame)
      draw()
      last = performance.now()
      if (visible && !document.hidden && !motion.matches) frame = requestAnimationFrame(tick)
    }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; resume() })
    observer.observe(canvas)
    const resize = new ResizeObserver(draw)
    resize.observe(canvas)
    motion.addEventListener('change', resume)
    document.addEventListener('visibilitychange', resume)
    resume()
    return () => { cancelAnimationFrame(frame); observer.disconnect(); resize.disconnect(); motion.removeEventListener('change', resume); document.removeEventListener('visibilitychange', resume) }
  }, [])

  return <canvas ref={canvasRef} className="galaxy-canvas" aria-hidden="true" />
}

export function NeuralVisual() {
  const { copy } = useI18n()
  return <figure className="neural-figure">
    <div className="figure-header"><span>FIELD NOTES / 001</span><span>{copy.hero.figure}</span><span>+</span></div>
    <div className="galaxy-drawing" role="img" aria-label={copy.hero.diagram}>
      <Galaxy />
      <svg className="galaxy-overlay" viewBox="0 0 600 480" fill="none" aria-hidden="true">
        <ellipse cx="300" cy="242" rx="262" ry="139" transform="rotate(-26 300 242)" stroke="#8a9eb9" strokeOpacity=".22" strokeWidth=".6" strokeDasharray="2 7" />
        <path d="M45 115h62l60 66M435 310l52 53h68M300 242l-109 55 245-118-92 159" stroke="#b9c9df" strokeOpacity=".22" strokeWidth=".7" />
        {[[191, 297], [436, 179], [344, 338]].map(([x, y], i) => <g key={x}><circle cx={x} cy={y} r="12" stroke="#dfc497" strokeOpacity=".3" /><circle cx={x} cy={y} r="3" fill="#e7cc9e" /><text x={x + 19} y={y + 4} className="galaxy-symbol">{['α', 'β', 'φ'][i]}</text></g>)}
        <path d="M290 242h20M300 232v20M37 400h12m-6-6v12M550 73h12m-6-6v12" stroke="#d7c19c" strokeOpacity=".55" strokeWidth=".7" />
        <text x="45" y="101" className="diagram-label">{copy.hero.topView}</text>
        <text x="459" y="382" className="diagram-label">A · ω · φ</text>
        <text x="43" y="439" className="diagram-label">{copy.hero.motor}</text>
      </svg>
    </div>
    <div className="figure-traces"><div className="trace-label"><span>{copy.hero.signal}</span><span>256 Hz / 2 s</span></div>
      <svg viewBox="0 0 520 64" fill="none" aria-hidden="true">
        {[0, 1].map(row => <g key={row}><text x="0" y={23 + row * 29} className="electrode-label">{row === 0 ? 'α' : 'β'}</text><path d={`M28 ${19 + row * 29}H520`} stroke="#8596b0" strokeOpacity=".13" /><path d={linePath(makeSignal(row === 0 ? 10 : 20, 7, 30).map((value, n) => ({ x: 28 + n / (SAMPLE_COUNT - 1) * 490, y: 19 + row * 29 - value })))} stroke={row === 0 ? '#d9b88a' : '#8ea9cc'} strokeWidth=".8" opacity=".8" /></g>)}
      </svg>
    </div>
    <figcaption><span>{copy.hero.caption}</span><span>FICORA / ∿</span></figcaption>
  </figure>
}
