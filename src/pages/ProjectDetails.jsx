import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../constants/projects'
import './ProjectDetails.css'

const FADE_UP = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1], delay: i * 0.1 },
  }),
}

export default function ProjectDetails() {
  const { id }     = useParams()
  const navigate   = useNavigate()
  const project    = projects.find((p) => p.id === id)

  /* Scroll to top on mount */
  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!project) {
    return (
      <div className="pd-not-found">
        <h1>Project not found</h1>
        <Link to="/" className="btn btn--ghost">← Back home</Link>
      </div>
    )
  }

  /* Prev / Next navigation */
  const idx  = projects.findIndex((p) => p.id === id)
  const prev = projects[idx - 1] ?? null
  const next = projects[idx + 1] ?? null

  return (
    <article className="pd">
      {/* Hero banner */}
      <div className="pd__hero">
        <div className="pd__hero-bg" aria-hidden="true">
          <img src={project.image} alt="" className="pd__hero-img" />
          <div className="pd__hero-overlay" />
        </div>

        <div className="container pd__hero-content">
          {/* Back button */}
          <motion.button
            className="pd__back"
            onClick={() => navigate(-1)}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            ← Back
          </motion.button>

          {/* Meta */}
          <motion.div className="pd__meta" variants={FADE_UP} initial="hidden" animate="visible" custom={0.1}>
            <span className="pd__year">{project.year}</span>
            <span className="pd__category">{project.category}</span>
          </motion.div>

          {/* Title */}
          <motion.h1 className="pd__title" variants={FADE_UP} initial="hidden" animate="visible" custom={0.2}>
            {project.title}
          </motion.h1>

          {/* Short desc */}
          <motion.p className="pd__short" variants={FADE_UP} initial="hidden" animate="visible" custom={0.3}>
            {project.shortDesc}
          </motion.p>

          {/* Action links */}
          <motion.div className="pd__links" variants={FADE_UP} initial="hidden" animate="visible" custom={0.4}>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Live Demo
              </a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="pd__body container">
        <div className="pd__layout">

          {/* Long description */}
          <motion.section
            className="pd__section"
            variants={FADE_UP} initial="hidden" animate="visible" custom={0.3}
          >
            <h2 className="pd__section-title">Overview</h2>
            {(typeof project.longDesc === 'string'
              ? [{ type: 'text', content: project.longDesc }]
              : project.longDesc
            ).map((block, i) => {
              if (block.type === 'text') {
                return block.content.split('\n').filter(Boolean).map((para, j) => (
                  <p key={`${i}-${j}`} className="pd__para">{para.trim()}</p>
                ))
              }
              if (block.type === 'features') {
                return (
                  <div key={i} className="pd__features">
                    {block.title && <h3 className="pd__features-title">{block.title}</h3>}
                    <ul className="pd__features-list">
                      {block.items.map((item, k) => (
                        <li key={k} className="pd__features-item">
                          <span className="pd__features-bullet" aria-hidden="true">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              }
              return null
            })}
          </motion.section>

          {/* Sidebar */}
          <aside className="pd__sidebar">

            {/* Tech stack */}
            <motion.div
              className="pd__card"
              variants={FADE_UP} initial="hidden" animate="visible" custom={0.4}
            >
              <h3 className="pd__card-title">Tech Stack</h3>
              <div className="pd__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-card__tag">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              className="pd__card"
              variants={FADE_UP} initial="hidden" animate="visible" custom={0.5}
            >
              <h3 className="pd__card-title">Highlights</h3>
              <ul className="pd__highlights">
                {project.highlights.map((h) => (
                  <li key={h}>
                    <span className="pd__bullet" aria-hidden="true">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick info */}
            <motion.div
              className="pd__card pd__info-grid"
              variants={FADE_UP} initial="hidden" animate="visible" custom={0.6}
            >
              <div>
                <span className="pd__info-label">Year</span>
                <span className="pd__info-value">{project.year}</span>
              </div>
              <div>
                <span className="pd__info-label">Type</span>
                <span className="pd__info-value" style={{ textTransform: 'capitalize' }}>{project.category}</span>
              </div>
            </motion.div>
          </aside>
        </div>

        {/* Prev / Next nav */}
        <nav className="pd__nav" aria-label="Project navigation">
          {prev ? (
            <Link to={`/project/${prev.id}`} className="pd__nav-link pd__nav-link--prev">
              <span className="pd__nav-dir">← Previous</span>
              <span className="pd__nav-name">{prev.title}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/project/${next.id}`} className="pd__nav-link pd__nav-link--next">
              <span className="pd__nav-dir">Next →</span>
              <span className="pd__nav-name">{next.title}</span>
            </Link>
          ) : <div />}
        </nav>
      </div>
    </article>
  )
}
