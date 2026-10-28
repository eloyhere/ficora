import { BrandMark } from './BrandMark'
import { mailtoHref } from '../lib/contact'
import { useI18n } from '../i18n/useI18n'

export function SiteFooter() {
  const { copy } = useI18n()
  const year = new Date().getFullYear()
  const contactHref = mailtoHref(copy.footer.email, copy.cta.mailSubject)

  const links = [
    { href: '#platform', label: copy.footer.platform },
    { href: '#applications', label: copy.footer.applications },
    { href: '#science', label: copy.footer.science },
    { href: '#clinical', label: copy.footer.clinical },
  ]

  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand">
          <a className="brand brand--footer" href="#top">
            <BrandMark className="brand__mark" />
            <span className="brand__copy">
              <span className="brand__name">{copy.brand.name}</span>
              <span className="brand__descriptor">{copy.brand.descriptor}</span>
            </span>
          </a>
          <p>{copy.footer.tagline}</p>
        </div>

        <div className="footer-columns">
          <nav className="footer-column" aria-label={copy.footer.explore}>
            <h2>{copy.footer.explore}</h2>
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-column">
            <h2>{copy.footer.contact}</h2>
            <a href={contactHref}>{copy.footer.email}</a>
            <p>{copy.footer.location}</p>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <p className="footer-copyright">
          © {year} {copy.footer.copyright}
        </p>
        <p className="footer-research-note">{copy.footer.note}</p>
        <a className="footer-top-link" href="#top">
          {copy.footer.backToTop}
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
            <path
              d="M8 13V3M3.5 7.5 8 3l4.5 4.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </footer>
  )
}
