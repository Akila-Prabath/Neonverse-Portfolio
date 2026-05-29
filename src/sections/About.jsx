import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '../components/common/SectionHeading'
import './About.css'

const STATS = [
  { value: '3+',  label: 'Years coding' },
  { value: '15+', label: 'Projects built' },
  { value: '5+',  label: 'Technologies' },
  { value: '∞',   label: 'Cups of coffee' },
]

const FADE_UP = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1], delay: i * 0.1 },
  }),
}

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <SectionHeading number="01" title="About Me" />

        <div className="about__grid">
          {/* Text column */}
          <div className="about__text">
            <motion.p
              variants={FADE_UP} initial="hidden"
              animate={inView ? 'visible' : 'hidden'} custom={0}
            >
              Hey! I'm <span className="text-accent">Akila Prabath</span>, a final-year
              Software Engineering undergraduate at the{' '}
              <span className="text-accent">University of Sri Jayewardenepura</span>.
              I'm passionate about crafting high-performance web applications that
              sit at the intersection of clean engineering and thoughtful design.
            </motion.p>

            <motion.p
              variants={FADE_UP} initial="hidden"
              animate={inView ? 'visible' : 'hidden'} custom={1}
            >
              My journey started with curiosity — tinkering with HTML in a school
              computer lab — and has since evolved into a deep love for the full
              stack: React frontends, Spring Boot &amp; Node.js backends, cloud
              deployments, and everything in between.
            </motion.p>

            <motion.p
              variants={FADE_UP} initial="hidden"
              animate={inView ? 'visible' : 'hidden'} custom={2}
            >
              When I'm not writing code, you'll find me exploring 3D graphics,
              contributing to open-source projects, or chasing the perfect espresso.
              I'm actively looking for internship &amp; graduate opportunities where
              I can grow fast and ship meaningful products.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              className="about__highlights"
              variants={FADE_UP} initial="hidden"
              animate={inView ? 'visible' : 'hidden'} custom={3}
            >
              {[
                'BSc (Hons) Software Engineering — USJ',
                'Full-stack React + Node / Spring Boot',
                'Strong eye for UI/UX and motion design',
                'Available for internships & graduate roles',
              ].map((item) => (
                <li key={item}>
                  <span className="about__highlight-arrow" aria-hidden="true">▸</span>
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Visual column */}
          <div className="about__visual">
            {/* Avatar frame */}
            <motion.div
              className="about__avatar-wrap"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1], delay: 0.15 }}
            >
              <div className="about__avatar-frame">
                <div className="about__avatar-inner">
                  {/* Replace src with your actual photo */}
                  <img
                    src="/avatar.jpg"
                    alt="Akila Prabath"
                    className="about__avatar-img"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                  {/* Fallback initials */}
                  <div className="about__avatar-fallback" aria-hidden="true">AP</div>
                </div>
              </div>
              {/* Floating glow ring */}
              <div className="about__avatar-ring" aria-hidden="true" />
              {/* Corner decoration */}
              <div className="about__avatar-corner about__avatar-corner--tl" aria-hidden="true" />
              <div className="about__avatar-corner about__avatar-corner--br" aria-hidden="true" />
            </motion.div>

            {/* Stats grid */}
            <motion.div
              className="about__stats"
              variants={FADE_UP} initial="hidden"
              animate={inView ? 'visible' : 'hidden'} custom={0.4}
            >
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="about__stat"
                  variants={FADE_UP}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={0.5 + i * 0.08}
                >
                  <span className="about__stat-value">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
