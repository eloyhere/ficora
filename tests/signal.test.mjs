import assert from 'node:assert/strict'
import test from 'node:test'
import { makeSignal, powerSpectrum, SAMPLE_COUNT, SAMPLE_RATE } from '../src/lib/signal.ts'

const peakOf = spectrum => spectrum.reduce((best, bin) => bin.power > best.power ? bin : best)
const integratedPower = spectrum => spectrum.reduce((sum, bin) => sum + bin.power, 0) * SAMPLE_RATE / SAMPLE_COUNT

test('resolves the fundamental and second harmonic across all four EEG bands', () => {
  for (const frequency of [4, 6, 8.5, 10, 13, 20, 30, 40, 45]) {
    const spectrum = powerSpectrum(makeSignal(frequency, 20, 30))
    assert.equal(peakOf(spectrum).frequency, frequency)
    const fundamental = spectrum.find(bin => bin.frequency === frequency).power
    const harmonic = spectrum.find(bin => bin.frequency === frequency * 2).power
    assert.ok(Math.abs(harmonic / fundamental - 0.22 ** 2) < 0.0001)
    assert.equal(spectrum[1].frequency - spectrum[0].frequency, 0.5)
  }
})

test('normalises one-sided PSD to the expected mean-square amplitude', () => {
  const amplitude = 20
  const expected = amplitude ** 2 / 2 * (1 + 0.22 ** 2)
  const measured = integratedPower(powerSpectrum(makeSignal(10, amplitude, 30)))
  assert.ok(Math.abs(measured - expected) / expected < 0.0001)
})

test('doubling the amplitude quadruples power', () => {
  const power20 = integratedPower(powerSpectrum(makeSignal(10, 20, 30)))
  const power40 = integratedPower(powerSpectrum(makeSignal(10, 40, 30)))
  assert.ok(Math.abs(power40 / power20 - 4) < 1e-10)
})

test('phase changes the time series while preserving spectral power', () => {
  const first = makeSignal(10, 20, 0)
  const shifted = makeSignal(10, 20, 90)
  assert.notDeepEqual(first, shifted)
  const baseline = integratedPower(powerSpectrum(first))
  const changed = integratedPower(powerSpectrum(shifted))
  assert.ok(Math.abs(changed - baseline) / baseline < 0.0001)
})

test('removes DC offset and gives finite zero power for a flat recording', () => {
  const flat = powerSpectrum(Array(SAMPLE_COUNT).fill(12))
  assert.ok(flat.every(bin => bin.power === 0))
  const original = makeSignal(10, 20, 30)
  const offset = original.map(value => value + 100)
  const before = integratedPower(powerSpectrum(original))
  const after = integratedPower(powerSpectrum(offset))
  assert.ok(Math.abs(before - after) < 1e-8)
})
