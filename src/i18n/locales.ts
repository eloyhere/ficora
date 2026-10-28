export const LOCALES = [
  { code: 'en-US', label: 'English', short: 'EN', libraryFallback: 'en-GB' },
  { code: 'zh-CN', label: '简体中文', short: '中', libraryFallback: 'en-GB' },
  { code: 'ja-JP', label: '日本語', short: '日', libraryFallback: 'en-GB' },
  { code: 'es-ES', label: 'Español', short: 'ES', libraryFallback: 'en-GB' },
  { code: 'fr-FR', label: 'Français', short: 'FR', libraryFallback: 'fr-CA' },
] as const

export type Locale = (typeof LOCALES)[number]['code']

export const DEFAULT_LOCALE: Locale = 'en-US'

export function isLocale(value: string | null | undefined): value is Locale {
  return LOCALES.some((item) => item.code === value)
}

export function libraryFallback(locale: Locale): string {
  return LOCALES.find((item) => item.code === locale)?.libraryFallback ?? 'en-GB'
}

/**
 * Resolve the best supported locale from the browser's language preferences.
 * Chinese variants collapse to Simplified Chinese, other regional variants to
 * their closest supported locale. Unknown languages fall back to English.
 */
export function detectLocale(): Locale {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE

  const requested = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]

  for (const tag of requested) {
    const language = tag.toLowerCase().split('-')[0]

    if (language === 'zh') return 'zh-CN'
    if (language === 'ja') return 'ja-JP'
    if (language === 'es') return 'es-ES'
    if (language === 'fr') return 'fr-FR'
    if (language === 'en') return 'en-US'
  }

  return DEFAULT_LOCALE
}
