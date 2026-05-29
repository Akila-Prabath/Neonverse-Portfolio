import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './ProjectCard.css'

/**
 * ProjectCard
 * Used in the Projects section grid.
 * Featured cards span 2 columns on wider screens.
 *
 * Props:
 *  project  — project object from projects.js
 *  index    — for stagger delay
 *  inView   — from parent IntersectionObserver
 */
export default function ProjectCard({ project, index, inView }) {
  const navigate = useNavigate()

  const goToDetail = () => navigate(`/project/${project.id}`)

  return (
    <motion.article
      className={`project-card${project.featured ? ' project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1], delay: index * 0.08 }}
      onClick={goToDetail}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} project details`}
      onKeyDown={(e) => e.key === 'Enter' && goToDetail()}
    >
      {/* Image / placeholder */}
      <div className="project-card__img-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="project-card__img"
          loading="lazy"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        {/* Overlay */}
        <div className="project-card__overlay" aria-hidden="true">
          <span className="project-card__view-btn">View Case Study →</span>
        </div>
        {/* Placeholder pattern shown when no image */}
        <div className="project-card__placeholder" aria-hidden="true">
          <span>{project.title.charAt(0)}</span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <span className="project-card__badge">Featured</span>
        )}

        {/* Year chip */}
        <span className="project-card__year">{project.year}</span>
      </div>

      {/* Body */}
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.shortDesc}</p>

        {/* Tags */}
        <div className="project-card__tags" aria-label="Technologies used">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
          {project.tags.length > 4 && (
            <span className="project-card__tag project-card__tag--more">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="project-card__links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label={`${project.title} GitHub repository`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* GitHub icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link project-card__link--live"
              aria-label={`${project.title} live demo`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* External link icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
