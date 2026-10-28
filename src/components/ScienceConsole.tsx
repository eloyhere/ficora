import { useEffect, useMemo, useState } from 'react'
import { PeriodicityButton, PeriodicityLineChart, PeriodicityLinearLayout, PeriodicityRadio, PeriodicityRadioGroup, PeriodicitySeekBar, PeriodicitySurface, PeriodicityTag, PeriodicityText } from 'periodicity-react'
import { useI18n } from '../i18n/useI18n'
import { makeSignal, powerSpectrum, SAMPLE_COUNT, SAMPLE_RATE } from '../lib/signal'

const bands = [
  { symbol: 'θ', min: 4, max: 8, initial: 6 },
  { symbol: 'α', min: 8, max: 13, initial: 10 },
  { symbol: 'β', min: 13, max: 30, initial: 20 },
  { symbol: 'γ', min: 30, max: 45, initial: 40 },
]

export function ScienceConsole() {
  const { copy, formatNumber } = useI18n()
  const text = copy.lab
  const [bandIndex, setBandIndex] = useState(1)
  const [frequency, setFrequency] = useState(10)
  const [amplitude, setAmplitude] = useState(20)
  const [phase, setPhase] = useState(30)
  const [playing, setPlaying] = useState(false)
  const band = bands[bandIndex]
  const signal = useMemo(() => makeSignal(frequency, amplitude, phase), [frequency, amplitude, phase])
  const spectrum = useMemo(() => powerSpectrum(signal), [signal])
  const timePoints = useMemo(() => signal.map((y, n) => ({ x: n / SAMPLE_RATE, y })), [signal])
  const spectralPoints = useMemo(() => spectrum.filter(item => item.frequency <= 95).map(item => ({ x: item.frequency, y: item.power })), [spectrum])
  const peak = spectrum.reduce((best, item) => item.power > best.power ? item : best, spectrum[0])
  const phaseRadians = phase * Math.PI / 180
  const radius = amplitude / 45 * 60

  useEffect(() => {
    if (!playing) return
    const timer = window.setInterval(() => setPhase(previous => (previous + 3) % 360), 80)
    return () => window.clearInterval(timer)
  }, [playing])

  function selectBand(value: string) {
    const index = Number(value)
    setBandIndex(index)
    setFrequency(bands[index].initial)
  }

  function reset() {
    setPlaying(false)
    setBandIndex(1)
    setFrequency(10)
    setAmplitude(20)
    setPhase(30)
  }

  function exportSignal() {
    const csv = [
      '# Ficora synthetic signal; not a clinical recording',
      `# fs_hz=${SAMPLE_RATE}; frequency_hz=${frequency}; amplitude_uv=${amplitude}; phase_deg=${phase}; second_harmonic_ratio=0.22`,
      'time_s,amplitude_uv',
      ...signal.map((value, n) => `${(n / SAMPLE_RATE).toFixed(8)},${value.toFixed(8)}`),
    ].join('\r\n')
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }))
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `ficora-synthetic-${frequency}hz.csv`
    anchor.click()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  return <PeriodicitySurface className="signal-lab" shape="sm" ripple={{ layer: 'foreground', trigger: ['hover', 'click'] }} stateLayer>
    <header className="lab-header">
      <div><PeriodicityText variant="mono" tone="muted">{text.kicker}</PeriodicityText><PeriodicityText as="h3" variant="h3">{text.titleSmall}</PeriodicityText></div>
      <PeriodicityTag variant="outlined" size="sm">{text.simulated}</PeriodicityTag>
    </header>
    <div className="lab-layout">
      <div className="lab-controls">
        <PeriodicityRadioGroup value={String(bandIndex)} onValueChange={selectBand} orientation="vertical" aria-label={text.frequency} name="neural-band">
          {bands.map((item, i) => <PeriodicityRadio key={item.symbol} className="band-option" value={String(i)}
            label={<span className="band-label"><span className="band-symbol">{item.symbol}</span>{text.bands[i]}</span>}
            description={`${item.min}–${item.max} Hz`} />)}
        </PeriodicityRadioGroup>
        <PeriodicityLinearLayout className="parameter-controls" orientation="vertical" gap="lg">
          <PeriodicitySeekBar id="frequency" label={text.frequency} min={band.min} max={band.max} step={0.5} value={frequency} onChange={setFrequency} format={value => `${formatNumber(value)} Hz`} ticks={5} showValue size="sm" />
          <PeriodicitySeekBar id="amplitude" label={text.amplitude} min={5} max={45} value={amplitude} onChange={setAmplitude} format={value => `${formatNumber(value)} µV`} showValue size="sm" />
          <PeriodicitySeekBar id="phase" label={text.phaseControl} min={0} max={359} value={phase} onChange={value => { setPlaying(false); setPhase(value) }} format={value => `${formatNumber(value)}°`} showValue size="sm" />
        </PeriodicityLinearLayout>
        <PeriodicityLinearLayout className="lab-control-actions" orientation="horizontal" gap="sm">
          <PeriodicityButton variant="outline" size="sm" rippleTrigger={['hover', 'click']} className="phase-play" onClick={() => setPlaying(value => !value)} aria-pressed={playing} prefix={<span aria-hidden="true">{playing ? 'Ⅱ' : '▷'}</span>} content={playing ? text.pause : text.play} />
          <PeriodicityButton variant="quiet" size="sm" rippleTrigger={['hover', 'click']} onClick={reset} title={text.reset} aria-label={text.reset} content="↺" />
        </PeriodicityLinearLayout>
      </div>
      <div className="lab-charts">
        <div className="chart-title"><span>01 / {text.time}</span><span>x(t) · µV</span></div>
        <PeriodicityLineChart className="time-chart" ariaLabel={`${text.time} · x(t) · µV`} height={240} renderer="canvas" showLegend={false}
          series={[{ id: 'signal', label: text.time, points: timePoints }]}
          xFormatter={value => `${formatNumber(value)} s`} yFormatter={value => formatNumber(value)} />
        <div className="lower-charts">
          <div className="spectrum-panel">
            <div className="chart-title"><span>02 / {text.spectrum}</span><span>µV²/Hz</span></div>
            <PeriodicityLineChart className="spectrum-chart" ariaLabel={`${text.spectrum} · µV²/Hz`} height={220} renderer="canvas" showLegend={false} area
              series={[{ id: 'psd', label: text.spectrum, points: spectralPoints }]}
              xFormatter={value => `${formatNumber(value)} Hz`} yFormatter={value => formatNumber(value)} />
          </div>
          <div className="phase-panel">
            <div className="chart-title"><span>03 / {text.phase}</span></div>
            <svg viewBox="0 0 220 220" fill="none" role="img" aria-label={`${text.phase}: ${phase}°; ${text.amplitude}: ${amplitude} µV`}>
              <path d="M20 110h180M110 20v180" className="chart-gridline" />
              {[30, 60].map(r => <circle key={r} cx="110" cy="110" r={r} className="chart-gridline" />)}
              <circle cx="110" cy="110" r={radius} stroke="var(--mint)" strokeWidth=".8" strokeDasharray="2 4" />
              <path d={`M110 110L${110 + radius * Math.cos(phaseRadians)} ${110 - radius * Math.sin(phaseRadians)}`} stroke="var(--accent)" strokeWidth="1.5" />
              <circle cx={110 + radius * Math.cos(phaseRadians)} cy={110 - radius * Math.sin(phaseRadians)} r="4" fill="var(--accent)" />
              <text x="190" y="126">Re</text><text x="118" y="28">Im</text><text x="110" y="206" textAnchor="middle">φ = {phase}°</text>
            </svg>
          </div>
        </div>
        <PeriodicityLinearLayout className="chart-readouts" orientation="horizontal" gravity="between" gap="sm" wrap>
          <span>{text.peak}<strong data-testid="spectral-peak">{formatNumber(peak.frequency)} Hz</strong></span>
          <span>{text.window}<strong>{SAMPLE_COUNT} {text.samples}</strong></span>
          <span>{text.resolution}<strong>0.5 Hz</strong></span>
        </PeriodicityLinearLayout>
      </div>
    </div>
    <div className="lab-band-note" aria-live="polite"><span>{band.symbol}</span>{text.bandNotes[bandIndex]}</div>
    <footer className="lab-footer"><PeriodicityText variant="body-sm" tone="muted">{text.caption}</PeriodicityText><PeriodicityButton variant="ghost" size="sm" rippleTrigger={['hover', 'click']} onClick={exportSignal} content={text.export} suffix={<span aria-hidden="true">↓</span>} /></footer>
  </PeriodicitySurface>
}
