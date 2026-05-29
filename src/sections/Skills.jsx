import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  FaReact, FaNodeJs, FaJava, FaPython, FaAws,
  FaGitAlt, FaGithub, FaLinux,
} from 'react-icons/fa'
import {
  SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiTailwindcss, SiThreedotjs, SiFramer,
  SiExpress, SiSpringboot, SiGraphql,
  SiMysql, SiMongodb, SiPostgresql, SiFirebase,
  SiDocker, SiFigma, SiJira, SiJest,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { skillCategories } from '../constants/skills'
import SectionHeading from '../components/common/SectionHeading'
import './Skills.css'

/* Map icon string → component */
const ICON_MAP = {
  FaReact, FaNodeJs, FaJava, FaPython, FaAws,
  FaGitAlt, FaGithub, FaLinux,
  SiJavascript, SiTypescript, SiHtml5, SiCss3: SiCss,
  SiTailwindcss, SiThreedotjs, SiFramer,
  SiExpress, SiSpringboot, SiGraphql,
  SiMysql, SiMongodb, SiPostgresql, SiFirebase,
  SiDocker, SiFigma, SiJira, SiJest,
  TbApi,
}

function SkillCard({ skill, index, inView }) {
  const Icon = ICON_MAP[skill.icon]

  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.05 * index,
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="skill-card__icon">
        {Icon && <Icon aria-hidden="true" />}
      </div>
      <span className="skill-card__name">{skill.name}</span>
      <div className="skill-card__bar-track" role="progressbar"
           aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100}
           aria-label={`${skill.name} proficiency ${skill.level}%`}>
        <motion.div
          className="skill-card__bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.1 + 0.04 * index }}
        />
      </div>
      <span className="skill-card__level">{skill.level}%</span>
    </motion.div>
  )
}

export default function Skills() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState(skillCategories[0].id)

  const current = skillCategories.find((c) => c.id === activeTab)

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="container">
        <SectionHeading
          number="02"
          title="Skills & Technologies"
          subtitle="A snapshot of the tools and languages I work with day to day."
        />

        {/* Category tabs */}
        <div className="skills__tabs" role="tablist" aria-label="Skill categories">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              aria-controls={`skills-panel-${cat.id}`}
              className={`skills__tab${activeTab === cat.id ? ' skills__tab--active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`skills-panel-${activeTab}`}
            role="tabpanel"
            className="skills__grid"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {current.skills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* All-tech ribbon */}
        <motion.div
          className="skills__ribbon"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="skills__ribbon-label">Also familiar with</p>
          <div className="skills__ribbon-tags">
            {['Redux', 'Zustand', 'Next.js', 'Vite', 'Webpack', 'Nginx',
              'Redis', 'Prisma', 'Jest', 'Vitest', 'CI/CD', 'Agile / Scrum'].map((t) => (
              <span key={t} className="skills__tag">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
