import { createContext } from 'react'
import type { Locale } from './locales'
import type { Messages } from './messages'

export interface I18nContextValue {
  locale: Locale
  copy: Messages
  setLocale: (locale: Locale) => void
  formatNumber: (
    value: number,
    options?: Intl.NumberFormatOptions,
  ) => string
  formatDate: (
    value: Date | number | string,
    options?: Intl.DateTimeFormatOptions,
  ) => string
}

export const I18nContext = createContext<I18nContextValue | null>(null)
