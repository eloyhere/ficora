import { useEffect, useState } from 'react'
import { PeriodicityButton, PeriodicityLinearLayout, PeriodicitySticky } from 'periodicity-react'
import { BrandMark } from './BrandMark'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeSwitcher } from './ThemeSwitcher'
import type { ThemePresetId } from './themePresets'
import { mailtoHref } from '../lib/contact'
import { useI18n } from '../i18n/useI18n'

interface SiteHeaderProps {
  theme: ThemePresetId
  onThemeChange: (theme: ThemePresetId) => void
}

export function SiteHeader({ theme, onThemeChange }: SiteHeaderProps) {
  const { copy } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#platform', label: copy.nav.platform },
    { href: '#science', label: copy.nav.science },
    { href: '#applications', label: copy.nav.applications },
    { href: '#clinical', label: copy.nav.clinical },
  ]

  const contactHref = mailtoHref(copy.footer.email, copy.cta.mailSubject)

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <PeriodicitySticky zIndex={100} className="site-header-sticky"><header className="site-header">
      <PeriodicityLinearLayout className="shell header-inner" orientation="horizontal" align="center" gravity="between" gap="lg">
        <a className="brand" href="#top" aria-label={`${copy.brand.name} — ${copy.brand.descriptor}`}>
          <BrandMark className="brand__mark" />
          <span className="brand__copy">
            <span className="brand__name">{copy.brand.name}</span>
            <span className="brand__descriptor">{copy.brand.descriptor}</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label={copy.navLabel}>
          {links.map((link) => (
            <a key={link.href} className="desktop-nav__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <PeriodicityLinearLayout className="header-actions" orientation="horizontal" align="center" gap="lg">
          <ThemeSwitcher value={theme} onChange={onThemeChange} />
          <LanguageSwitcher />
          <a className="header-demo" href={contactHref}>{copy.nav.cta}</a>
          <PeriodicityButton
            type="button"
            className="menu-toggle"
            variant="outline"
            size="sm"
            rippleTrigger={['hover', 'click']}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? copy.closeMenu : copy.menu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-toggle__lines" data-open={menuOpen} aria-hidden="true">
              <span />
              <span />
            </span>
          </PeriodicityButton>
        </PeriodicityLinearLayout>
      </PeriodicityLinearLayout>

      {menuOpen ? (
        <div className="mobile-nav" id="mobile-navigation" data-open="true">
          <nav className="mobile-nav__inner shell" aria-label={copy.navLabel}>
            {links.map((link, index) => (
              <a
                key={link.href}
                className="mobile-nav__link"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mobile-nav__index">{String(index + 1).padStart(2, '0')}</span>
                {link.label}
              </a>
            ))}
            <a
              className="mobile-nav__contact"
              href={contactHref}
              onClick={() => setMenuOpen(false)}
            >
              {copy.nav.cta}
              <ArrowIcon />
            </a>
          </nav>
        </div>
      ) : null}
    </header></PeriodicitySticky>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
