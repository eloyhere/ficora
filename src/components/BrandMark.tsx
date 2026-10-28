interface BrandMarkProps {
  className?: string
}

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="20" cy="20" r="18.25" stroke="currentColor" strokeOpacity="0.35" />
      <circle cx="20" cy="20" r="12.5" stroke="currentColor" strokeOpacity="0.18" />
      <path
        d="M14 29V11h12M14 20h9"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="11" r="2.2" fill="currentColor" />
      <circle cx="26" cy="11" r="1.5" fill="currentColor" fillOpacity="0.55" />
      <circle cx="23" cy="20" r="1.5" fill="currentColor" fillOpacity="0.55" />
      <circle cx="14" cy="29" r="1.5" fill="currentColor" fillOpacity="0.55" />
    </svg>
  )
}
