import './SectionHeading.css'

/**
 * SectionHeading
 * Reusable section title used across About, Skills, Projects, etc.
 *
 * Props:
 *  number  — "01", "02" etc. (decorative, optional)
 *  title   — main heading text
 *  subtitle — optional supporting line
 *  align   — 'left' (default) | 'center'
 */
export default function SectionHeading({ number, title, subtitle, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {number && (
        <span className="section-heading__num">{number}.</span>
      )}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && (
        <p className="section-heading__sub">{subtitle}</p>
      )}
      <div className="section-heading__line" aria-hidden="true" />
    </div>
  )
}
