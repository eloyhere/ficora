import { PeriodicityText } from 'periodicity-react'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  titleId?: string
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className ? `section-heading ${className}` : 'section-heading'}>
      <PeriodicityText variant="label" tone="accent" className="eyebrow">
        <span className="eyebrow__mark" aria-hidden="true" />
        {eyebrow}
      </PeriodicityText>
      <PeriodicityText as="h2" variant="h2" id={titleId}>{title}</PeriodicityText>
      {description ? <PeriodicityText tone="muted" className="section-heading__description">{description}</PeriodicityText> : null}
    </div>
  )
}
