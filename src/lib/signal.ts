export const SAMPLE_RATE = 256
export const SAMPLE_COUNT = 512
export const TAU = Math.PI * 2

export function makeSignal(frequency: number, amplitude: number, phaseDegrees: number): number[] {
  const phase = phaseDegrees * Math.PI / 180
  return Array.from({ length: SAMPLE_COUNT }, (_, n) => {
    const angle = TAU * frequency * n / SAMPLE_RATE + phase
    return amplitude * (Math.cos(angle) + 0.22 * Math.cos(2 * angle + 0.6))
  })
}

/** One-sided Hann-windowed periodogram, in µV²/Hz; no zero padding. */
export function powerSpectrum(signal: number[]): { frequency: number; power: number }[] {
  const count = signal.length
  const mean = signal.reduce((sum, value) => sum + value, 0) / count
  const window = signal.map((_, n) => 0.5 - 0.5 * Math.cos(TAU * n / (count - 1)))
  const energy = window.reduce((sum, value) => sum + value * value, 0)
  const windowed = signal.map((value, n) => (value - mean) * window[n])
  return Array.from({ length: count / 2 + 1 }, (_, k) => {
    let real = 0
    let imaginary = 0
    for (let n = 0; n < count; n++) {
      const angle = TAU * k * n / count
      real += windowed[n] * Math.cos(angle)
      imaginary -= windowed[n] * Math.sin(angle)
    }
    const sided = k === 0 || k === count / 2 ? 1 : 2
    return { frequency: k * SAMPLE_RATE / count, power: sided * (real * real + imaginary * imaginary) / (SAMPLE_RATE * energy) }
  })
}

export function linePath(points: { x: number; y: number }[]): string {
  return points.map(({ x, y }, i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`).join(' ')
}
