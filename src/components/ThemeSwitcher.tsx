import { PeriodicitySelect } from 'periodicity-react'
import { useI18n } from '../i18n/useI18n'
import { THEME_PRESETS, type ThemePresetId } from './themePresets'

interface ThemeSwitcherProps {
  value: ThemePresetId
  onChange: (value: ThemePresetId) => void
}

export function ThemeSwitcher({ value, onChange }: ThemeSwitcherProps) {
  const { locale, copy } = useI18n()

  return (
    <PeriodicitySelect
      className="site-theme"
      label={copy.theme}
      value={value}
      options={THEME_PRESETS.map((preset) => ({
        value: preset.value,
        label: locale === 'zh-CN' ? preset.zh : preset.en,
      }))}
      onChange={(nextValue) => onChange(nextValue as ThemePresetId)}
      variant="standard"
      size="sm"
    />
  )
}
