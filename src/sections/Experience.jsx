import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { timeline } from '../constants/experience'
import SectionHeading from '../components/common/SectionHeading'
import './Experience.css'

function TimelineItem({ item, index, inView }) {
  const isWork = item.type === 'work'

  return (
    <motion.div
      className={`tl-item${isWork ? ' tl-item--work' : ' tl-item--edu'}`}
      initial={{ opacity: 0, x: -28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: index * 0.12 }}
    >
      {/* Timeline spine dot */}
      <div className="tl-item__dot" aria-hidden="true">
        <div className="tl-item__dot-inner" />
      </div>

      {/* Card */}
      <div className="tl-item__card">
        {/* Header row */}
        <div className="tl-item__header">
          <div className="tl-item__type-badge">
            {isWork ? (
              /* Briefcase icon */
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
              </svg>
            ) : (
              /* Graduation cap icon */
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            )}
          </div>

          <div className="tl-item__title-group">
            <h3 className="tl-item__title">{item.title}</h3>
            <span className="tl-item__org">{item.organisation}</span>
          </div>

          <div className="tl-item__meta">
            <span className="tl-item__period">
              {item.current && <span className="tl-item__current-dot" aria-label="Current" />}
              {item.period}
            </span>
            <span className="tl-item__location">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="12" height="12" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {item.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="tl-item__desc">{item.description}</p>

        {/* Tags */}
        <div className="tl-item__tags">
          {item.tags.map((tag) => (
            <span key={tag} className="tl-item__tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
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

        <div className="tl">
          {/* Vertical spine line */}
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
