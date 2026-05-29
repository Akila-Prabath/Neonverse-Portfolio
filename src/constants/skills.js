/**
 * Skills constant
 * Grouped by category. Add / remove items freely.
 * icon: must match a key in ICON_MAP inside Skills.jsx
 */
export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React',       level: 90, icon: 'FaReact' },
      { name: 'JavaScript',  level: 88, icon: 'SiJavascript' },
      { name: 'TypeScript',  level: 75, icon: 'SiTypescript' },
      { name: 'HTML5',       level: 95, icon: 'SiHtml5' },
      { name: 'CSS3',        level: 90, icon: 'SiCss3' },   // mapped → SiCss in Skills.jsx
      { name: 'Tailwind',    level: 85, icon: 'SiTailwindcss' },
      { name: 'Three.js',    level: 65, icon: 'SiThreedotjs' },
      { name: 'Framer',      level: 70, icon: 'SiFramer' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js',     level: 82, icon: 'FaNodeJs' },
      { name: 'Express',     level: 80, icon: 'SiExpress' },
      { name: 'Spring Boot', level: 75, icon: 'SiSpringboot' },
      { name: 'Java',        level: 80, icon: 'FaJava' },
      { name: 'Python',      level: 72, icon: 'FaPython' },
      { name: 'REST APIs',   level: 88, icon: 'TbApi' },
      { name: 'GraphQL',     level: 55, icon: 'SiGraphql' },
    ],
  },
  {
    id: 'database',
    label: 'Database & Cloud',
    skills: [
      { name: 'MySQL',       level: 82, icon: 'SiMysql' },
      { name: 'MongoDB',     level: 78, icon: 'SiMongodb' },
      { name: 'PostgreSQL',  level: 70, icon: 'SiPostgresql' },
      { name: 'Firebase',    level: 72, icon: 'SiFirebase' },
      { name: 'AWS',         level: 55, icon: 'FaAws' },
      { name: 'Docker',      level: 60, icon: 'SiDocker' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Practices',
    skills: [
      { name: 'Git',         level: 90, icon: 'FaGitAlt' },
      { name: 'GitHub',      level: 90, icon: 'FaGithub' },
      { name: 'Figma',       level: 75, icon: 'SiFigma' },
      { name: 'Linux',       level: 68, icon: 'FaLinux' },
      { name: 'Jira',        level: 70, icon: 'SiJira' },
      { name: 'Jest',        level: 62, icon: 'SiJest' },
    ],
  },
]
