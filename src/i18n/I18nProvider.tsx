import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { I18nContext, type I18nContextValue } from './context'
import { DEFAULT_LOCALE, detectLocale, isLocale, type Locale } from './locales'
import { messages } from './messages'

const STORAGE_KEY = 'ficora.locale'

function initialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE

  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLocale(fromUrl)) return fromUrl

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    // Storage can be unavailable in private or embedded contexts.
  }

  return detectLocale()
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)

    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Persisting the preference is an enhancement, not a requirement.
    }

    const url = new URL(window.location.href)
    if (next === DEFAULT_LOCALE) {
      url.searchParams.delete('lang')
    } else {
      url.searchParams.set('lang', next)
    }
    window.history.replaceState(window.history.state, '', url)
  }, [])

  const copy = messages[locale]

  useEffect(() => {
    const root = document.documentElement
    root.lang = locale
    root.dir = 'ltr'
    document.title = copy.meta.title

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    description?.setAttribute('content', copy.meta.description)
  }, [locale, copy])

  const value = useMemo<I18nContextValue>(() => {
    const numberFormat = new Intl.NumberFormat(locale)
    const dateFormat = new Intl.DateTimeFormat(locale, {
      dateStyle: 'medium',
    })

    return {
      locale,
      copy,
      setLocale,
      formatNumber: (input, options) =>
        options
          ? new Intl.NumberFormat(locale, options).format(input)
          : numberFormat.format(input),
      formatDate: (input, options) =>
        options
          ? new Intl.DateTimeFormat(locale, options).format(new Date(input))
          : dateFormat.format(new Date(input)),
    }
  }, [copy, locale, setLocale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
