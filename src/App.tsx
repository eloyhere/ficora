import { useState } from 'react'
import { PeriodicityButton, PeriodicityCard, PeriodicityGridLayout, PeriodicityInternational, PeriodicityLinearLayout, PeriodicityTag, PeriodicityText, PeriodicityTheme } from 'periodicity-react'
import { NeuralVisual } from './components/NeuralVisual'
import { ScienceConsole } from './components/ScienceConsole'
import { PeriodicStudy } from './components/PeriodicStudy'
import { SectionHeading } from './components/SectionHeading'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { type ThemePresetId } from './components/themePresets'
import { useI18n } from './i18n/useI18n'
import { libraryFallback } from './i18n/locales'
import { mailtoHref } from './lib/contact'
import { useMediaQuery } from './lib/useMediaQuery'
import './App.css'

const themeTokens = {
  '--font-sans': "'Segoe UI', 'Microsoft YaHei UI', system-ui, sans-serif",
  '--font-display': "Georgia, 'Times New Roman', 'Songti SC', SimSun, serif",
  '--font-mono': "Consolas, 'Microsoft YaHei UI', monospace",
  '--type-display': 'clamp(42px, 4.6vw, 68px)',
  '--type-h2': 'clamp(30px, 3vw, 42px)',
  '--type-h3': '26px', '--type-h4': '20px',
  '--type-body': '16px', '--type-body-sm': '14px',
  '--type-label': '13px', '--type-label-sm': '12px', '--type-mono': '11px',
  '--focus-ring-color': 'var(--accent)',
}

const references = [
  'https://doi.org/10.1016/S1388-2457(99)00141-8',
  'https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.periodogram.html',
  'https://github.com/eloyhere/periodicity',
]

function App() {
  const { locale, copy } = useI18n()
  const narrow = useMediaQuery('(max-width: 720px)')
  const [theme, setTheme] = useState<ThemePresetId>('space-gray')
  return (
    <PeriodicityTheme theme={theme} onThemeChange={(nextTheme) => setTheme(nextTheme as ThemePresetId)} defaultMode="dark" defaultDensity="regular" defaultRadius="sharp" tokens={themeTokens} className="app-theme">
      <PeriodicityInternational locale={locale} fallbackLocale={libraryFallback(locale)}>
        <div className="site" id="top">
          <a className="skip-link" href="#main">{copy.skipToContent}</a>
          <SiteHeader theme={theme} onThemeChange={setTheme} />
          <main id="main">
            <section className="hero shell" aria-labelledby="hero-title">
              <div className="hero__copy">
                <p className="eyebrow"><span className="eyebrow__mark" />{copy.hero.eyebrow}</p>
                <PeriodicityText as="h1" variant="display" id="hero-title"><span>{copy.hero.titleA}</span><em>{copy.hero.titleB}</em></PeriodicityText>
                <PeriodicityText className="hero__description" tone="muted">{copy.hero.description}</PeriodicityText>
                <PeriodicityLinearLayout className="hero__actions" orientation="horizontal" align="center" gap="xl" wrap>
                  <PeriodicityButton className="hero-primary" size="lg" rippleTrigger={['hover', 'click']} content={copy.hero.primary} suffix={<Arrow />} onClick={() => { window.location.hash = 'science' }} />
                  <a className="link-button" href="#platform">{copy.hero.secondary}<span>↗</span></a>
                </PeriodicityLinearLayout>
                <p className="hero__note"><span />{copy.hero.note}</p>
              </div>
              <NeuralVisual />
              <div className="hero__bottom"><div className="discipline-list">{copy.hero.disciplines.map((item, i) => <span key={item}><small>0{i + 1}</small>{item}</span>)}</div><a href="#platform" className="scroll-link">{copy.hero.scroll}<span>↓</span></a></div>
            </section>

            <section className="section approach-section" id="platform" aria-labelledby="approach-title">
              <div className="shell">
                <div className="section-intro"><SectionHeading eyebrow={copy.approach.eyebrow} title={copy.approach.title} titleId="approach-title" /><p>{copy.approach.description}</p></div>
                <PeriodicityGridLayout columns={narrow ? 1 : 3} responsive={false} gap="lg" className="approach-grid">{copy.approach.items.map((item, i) => <PeriodicityCard className="approach-item" key={item.title} title={item.title} eyebrow={`0${i + 1} / ${item.sub}`} action={<MethodGlyph index={i} />} footer={<PeriodicityText as="span" variant="mono" tone="accent">{item.meta}</PeriodicityText>} ripple={{ layer: 'foreground', trigger: ['hover', 'click'] }}>
                  <PeriodicityText variant="body-sm" tone="muted">{item.body}</PeriodicityText>
                </PeriodicityCard>)}</PeriodicityGridLayout>
              </div>
            </section>

            <section className="section lab-section" id="science" aria-labelledby="lab-title">
              <div className="shell"><div className="section-intro"><SectionHeading eyebrow={copy.lab.eyebrow} title={copy.lab.title} titleId="lab-title" /><p>{copy.lab.description}</p></div><ScienceConsole /></div>
            </section>

            <section className="section math-section" aria-labelledby="math-title">
              <div className="shell math-grid"><div className="math-copy"><SectionHeading eyebrow={copy.mathematics.eyebrow} title={copy.mathematics.title} titleId="math-title" /><p className="math-intro">{copy.mathematics.intro}</p><p>{copy.mathematics.body}</p><a className="research-link" href={references[2]} target="_blank" rel="noreferrer">{copy.mathematics.link}<Arrow /></a></div><PeriodicStudy /><p className="math-footnote"><span>↳</span>{copy.mathematics.distinction}</p></div>
            </section>

            <section className="section applications-section" id="applications" aria-labelledby="applications-title"><div className="shell">
              <div className="section-intro"><SectionHeading eyebrow={copy.applications.eyebrow} title={copy.applications.title} titleId="applications-title" /><p>{copy.applications.description}</p></div>
              <div className="application-list">{copy.applications.items.map((item, index) => <article className="application-item" key={item.title}><PeriodicityTag className="application-item__tag" variant="outlined" size="sm">{item.tag}</PeriodicityTag><h3>{item.title}</h3><p>{item.body}</p><span className="application-symbol" aria-hidden="true">{['↔', '↗', '∿'][index]}</span></article>)}</div>
            </div></section>

            <section className="section notes-section" id="clinical" aria-labelledby="notes-title"><div className="shell"><SectionHeading eyebrow={copy.notes.eyebrow} title={copy.notes.title} titleId="notes-title" />
              <div className="notes-grid">{copy.notes.items.map((item, i) => <a className="note" href={references[i]} key={item.title} target="_blank" rel="noreferrer"><div className="note__top"><span>{item.category}</span><Arrow /></div><h3>{item.title}</h3><p>{item.description}</p><span className="note__detail">{item.detail}</span></a>)}</div>
            </div></section>

            <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="shell contact-grid"><div><p className="eyebrow">{copy.cta.eyebrow}</p><h2 id="contact-title">{copy.cta.title}</h2><p>{copy.cta.description}</p></div><a className="contact-link" href={mailtoHref(copy.footer.email, copy.cta.mailSubject)}>{copy.cta.primary}<Arrow /></a></div></section>
          </main>
          <SiteFooter />
        </div>
      </PeriodicityInternational>
    </PeriodicityTheme>
  )
}

function Arrow() { return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.4" /></svg> }

function MethodGlyph({ index }: { index: number }) {
  return <svg className="method-glyph" viewBox="0 0 100 52" fill="none" aria-hidden="true">
    {index === 0 ? <><path d="M0 27h100M50 0v52" stroke="currentColor" opacity=".2" /><path d="M0 27h10l4-6 4 12 5-20 5 30 5-16h10l4-12 5 24 6-32 6 29 4-9h32" stroke="currentColor" /></> : index === 1 ? <>{[12, 26, 46, 32, 15, 21, 37, 24, 9].map((height, i) => <path key={i} d={`M${10 + i * 10} 50v-${height}`} stroke="currentColor" strokeWidth="2" />)}<path d="M0 50h100" stroke="currentColor" opacity=".3" /></> : <><circle cx="35" cy="26" r="20" stroke="currentColor" /><circle cx="67" cy="26" r="20" stroke="currentColor" /><path d="m47 22 5 4-5 4m10-8-5 4 5 4" stroke="currentColor" /></>}
  </svg>
}

export default App
