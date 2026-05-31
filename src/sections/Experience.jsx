import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { timeline } from '../constants/experience'
import SectionHeading from '../components/common/SectionHeading'
import './Experience.css'

function TimelineItem({ item, index, inView }) {
  const isWork = item.type === 'work'

  return (
    <div className={`tl-row${isWork ? ' tl-row--right' : ' tl-row--left'}`}>

      {/* Left slot — education cards live here */}
      <div className="tl-row__left">
        {!isWork && (
          <motion.div
            className="tl-item tl-item--edu"
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: index * 0.12 }}
          >
            <Card item={item} isWork={false} />
          </motion.div>
        )}
      </div>

      {/* Centre — dot on the spine */}
      <div className="tl-row__spine">
        <div className="tl-item__dot" aria-hidden="true">
          <div className={`tl-item__dot-inner${isWork ? '' : ' tl-item__dot-inner--edu'}`} />
        </div>
      </div>

      {/* Right slot — work cards live here */}
      <div className="tl-row__right">
        {isWork && (
          <motion.div
            className="tl-item tl-item--work"
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: index * 0.12 }}
          >
            <Card item={item} isWork />
          </motion.div>
        )}
      </div>
    </div>
  )
}

function Card({ item, isWork }) {
  return (
    <div className="tl-item__card">
      {/* Header */}
      <div className="tl-item__header">
        <div className="tl-item__type-badge">
          {isWork ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="7" width="20" height="14" rx="2"/>
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          )}
        </div>

        <div className="tl-item__title-group">
          <h3 className="tl-item__title">{item.title}</h3>
          <span className="tl-item__org">{item.organisation}</span>
        </div>
      </div>

      {/* Meta row */}
      <div className="tl-item__meta">
        <span className="tl-item__period">
          {item.current && <span className="tl-item__current-dot" aria-label="Current" />}
          {item.period}
        </span>
        <span className="tl-item__location">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round" width="12" height="12" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {item.location}
        </span>
      </div>

      {/* Description */}
      <p className="tl-item__desc">{item.description}</p>

      {/* Tags */}
      <div className="tl-item__tags">
        {item.tags.map((tag) => (
          <span key={tag} className="tl-item__tag">{tag}</span>
        ))}
      </div>

      {/* Certificate link — Coursera / online courses */}
      {item.certificate && (
        <a
          href={item.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="tl-item__cert-link"
          onClick={(e) => e.stopPropagation()}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden="true">
            <circle cx="12" cy="8" r="6"/>
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
          </svg>
          View Certificate
        </a>
      )}
    </div>
  )
}

export default function Experience() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="experience section" id="experience" ref={ref}>
      <div className="container">
        <SectionHeading
          number="04"
          title="Experience & Education"
          subtitle="My journey so far — work experience, internships, and academic background."
        />

        {/* Legend */}
        <div className="tl-legend" aria-label="Timeline legend">
          <span className="tl-legend__item tl-legend__item--edu">
            <span className="tl-legend__dot" />
            Education
          </span>
          <span className="tl-legend__divider" aria-hidden="true" />
          <span className="tl-legend__item tl-legend__item--work">
            <span className="tl-legend__dot tl-legend__dot--work" />
            Experience
          </span>
        </div>

        {/* Column labels */}
        <div className="tl-cols-label" aria-hidden="true">
          <span>← Education</span>
          <span>Experience →</span>
        </div>

        <div className="tl">
          {/* Vertical spine */}
          <motion.div
            className="tl__spine"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            aria-hidden="true"
          />

          {timeline.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
