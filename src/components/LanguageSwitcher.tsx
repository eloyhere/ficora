import { PeriodicitySelect } from 'periodicity-react'
import { LOCALES, isLocale } from '../i18n/locales'
import { useI18n } from '../i18n/useI18n'

export function LanguageSwitcher() {
  const { locale, copy, setLocale } = useI18n()

  return (
    <PeriodicitySelect className="site-language" label={copy.language} value={locale}
      options={LOCALES.map(item => ({ value: item.code, label: item.label }))}
      onChange={value => { if (isLocale(value)) setLocale(value) }} variant="standard" size="sm" />
  )
}
