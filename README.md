# Ficora

A research site on brain–computer interfaces. It takes a neural starfield as its visual metaphor and brings together neuroscience, time-series analysis and the mathematics of periodicity.

## Running locally

Node.js 22.18 or later is required (the numerical tests load TypeScript directly), along with npm.

```sh
npm install
npm run dev
```

```sh
npm run build
npm run lint
npm test
```

## Pages and interaction

- Built on `periodicity-react 0.1.15`: `PeriodicityTheme` and `PeriodicityInternational` manage theme and language; `PeriodicityGridLayout`, `PeriodicityLinearLayout` and `PeriodicitySticky` arrange the layout; `PeriodicityText`, `PeriodicityCard`, `PeriodicitySurface` and `PeriodicityTag` present content; `PeriodicityButton`, `PeriodicitySelect`, `PeriodicityRadio` and `PeriodicitySeekBar` provide interaction; `PeriodicityLineChart` shows the time domain and the power spectrum; and `PeriodicityTex` sets formulae.
- Components are configured through the props and theme tokens the library exposes. Page styles are responsible for typography, responsive behaviour and scientific figures, and do not override the internal styles of the components.
- The Canvas starfield rotates slowly and honours the reduced-motion setting, pausing when it leaves the viewport or the tab moves to the background.
- The signal experiment covers the theta, alpha/mu, beta and gamma bands. Frequency, amplitude and initial phase can all be adjusted, phase changes can be played back, and the result exported as CSV.
- English, Simplified Chinese, Japanese, Spanish and French, with browser-language detection, a saved preference and `?lang=zh-CN` links.

## Bundled UI library

The dependency is pinned to `vendor/periodicity-react-0.1.15.tgz`, a build artefact of the neighbouring `periodicity-react` project. Installation uses that package directly, so that the site runs the version of the components produced by this update. To move to a later version of the UI library, build it in its own project first, then place the new package in `vendor/` and update the dependency.

## Scientific content

The experiment uses a synthetic signal sampled at 256 Hz over 512 samples, with a second harmonic at 0.22 times the amplitude of the fundamental. After mean removal, a symmetric Hann window yields a one-sided power spectral density (µV²/Hz), with bins spaced 0.5 Hz apart. The numerical tests verify the peak frequency, the second harmonic, PSD normalisation, the amplitude-squared law and phase changes.

The starfield is an artistic impression and the signal is a mathematical example; the research direction does not imply clinical performance. `periodicity-react` is an interface component library, cited here separately from the Periodicity mathematics repository below.

- [Pfurtscheller & Lopes da Silva: event-related synchronisation and desynchronisation](https://doi.org/10.1016/S1388-2457(99)00141-8)
- [SciPy: the `periodogram` method](https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.periodogram.html)
- [Eloy Kim: the Periodicity research programme](https://github.com/eloyhere/periodicity)

The periodic-mathematics section uses rotating vectors and time-domain projections to explain complex oscillation. How the broader Periodicity framework might apply to brain–computer interfaces still requires experimental evaluation.
