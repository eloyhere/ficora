import { PeriodicitySurface, PeriodicityTex } from 'periodicity-react'
import { useI18n } from '../i18n/useI18n'
import { linePath, TAU } from '../lib/signal'

export function PeriodicStudy() {
  const { copy } = useI18n()
  const angle = .85
  const r1 = 61
  const r2 = 24
  const center = { x: 123, y: 130 }
  const first = { x: center.x + r1 * Math.cos(angle), y: center.y - r1 * Math.sin(angle) }
  const end = { x: first.x + r2 * Math.cos(3 * angle), y: first.y - r2 * Math.sin(3 * angle) }
  const curve = linePath(Array.from({ length: 241 }, (_, n) => { const t = n / 240 * TAU; return { x: center.x + r1 * Math.cos(t) + r2 * Math.cos(3 * t), y: center.y - r1 * Math.sin(t) - r2 * Math.sin(3 * t) } }))
  const projection = linePath(Array.from({ length: 300 }, (_, n) => { const t = angle + n / 299 * TAU * 1.5; return { x: 260 + n / 299 * 240, y: center.y - r1 * Math.sin(t) - r2 * Math.sin(3 * t) } }))
  return <PeriodicitySurface className="periodic-study" shape="sm" ripple={{ layer: 'foreground', trigger: ['hover', 'click'] }} stateLayer><figure><div className="figure-header"><span>FIG. 02</span><span>z(t) → Im z(t)</span><span>+</span></div>
    <svg viewBox="0 0 520 265" fill="none" role="img" aria-label={copy.mathematics.figure}>
      <path d="M21 130h479M123 25v210M260 25v210" stroke="#34465f" strokeWidth=".7" /><circle cx={center.x} cy={center.y} r={r1} stroke="#7188a9" strokeWidth=".7" strokeDasharray="3 4" /><path d={curve} stroke="#8ea9cc" strokeWidth=".9" />
      <circle cx={first.x} cy={first.y} r={r2} stroke="#d9b88a" strokeWidth=".8" /><path d={`M123 130L${first.x} ${first.y}L${end.x} ${end.y}`} stroke="#d9b88a" strokeWidth="1.6" /><circle cx={first.x} cy={first.y} r="2.6" fill="#d9b88a" /><circle cx={end.x} cy={end.y} r="3.8" fill="#d9b88a" />
      <path d={`M${end.x} ${end.y}H260`} stroke="#d9b88a" strokeDasharray="3 4" strokeWidth=".8" /><path d={projection} stroke="#d9b88a" strokeWidth="1.2" /><circle cx="260" cy={end.y} r="3.8" fill="#d9b88a" />
      <text x="22" y="245" className="diagram-label">z₁ + z₂</text><text x="476" y="245" className="diagram-label">t →</text>
    </svg>
    <div className="formula-panel"><p>{copy.mathematics.formulaLabel}</p><PeriodicityTex className="formula" source={String.raw`z\left(t\right) = \sum_k A_k e^{i(\omega_k t + \varphi_k)}`} /><div className="formula-terms">{copy.mathematics.terms.map((term, i) => <span key={term}><i>{['A', 'ω', 'φ'][i]}</i>{term}</span>)}</div></div>
  </figure></PeriodicitySurface>
}
