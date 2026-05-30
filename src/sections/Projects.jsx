import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projects, projectCategories } from '../constants/projects'
import ProjectCard from '../components/projects/ProjectCard'
import SectionHeading from '../components/common/SectionHeading'
import './Projects.css'

export default function Projects() {
  const ref       = useRef(null)
  const inView    = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? projects
    : projects.filter((p) => p.category === active)

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <SectionHeading
          number="03"
          title="Projects"
          subtitle="Things I've built — side projects, coursework, and experiments."
        />

        {/* Filter tabs */}
        <div className="projects__filters" role="tablist" aria-label="Filter projects by category">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              className={`projects__filter${active === cat.id ? ' projects__filter--active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
              <span className="projects__filter-count">
                {cat.id === 'all'
                  ? projects.length
                  : projects.filter((p) => p.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className={`projects__grid-wrap${filtered.length > 6 ? ' projects__grid-wrap--scroll' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="projects__grid">
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  inView={inView}
                />
              ))}
            </div>
            {filtered.length > 6 && (
              <div className="projects__scroll-hint" aria-hidden="true">
                <span>Scroll to see more</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          className="projects__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p>More experiments and contributions on GitHub</p>
          <a
            href="https://github.com/Akila-Prabath"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  )
}
