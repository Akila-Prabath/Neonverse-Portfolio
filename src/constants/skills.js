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
      { name: 'React',        icon: 'FaReact' },
      { name: 'JavaScript',   icon: 'SiJavascript' },
      { name: 'TypeScript',   icon: 'SiTypescript' },
      { name: 'HTML5',        icon: 'SiHtml5' },
      { name: 'CSS3',         icon: 'SiCss3' },   // mapped → SiCss in Skills.jsx
      { name: 'Tailwind',     icon: 'SiTailwindcss' },
      { name: 'Three.js',     icon: 'SiThreedotjs' },
      { name: 'Framer',       icon: 'SiFramer' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js',      icon: 'FaNodeJs' },
      { name: 'Express',      icon: 'SiExpress' },
      { name: 'Spring Boot',  icon: 'SiSpringboot' },
      { name: 'Java',         icon: 'FaJava' },
      { name: 'Python',       icon: 'FaPython' },
      { name: 'REST APIs',    icon: 'TbApi' },
      { name: 'GraphQL',      icon: 'SiGraphql' },
    ],
  },
  {
    id: 'database',
    label: 'Database & Cloud',
    skills: [
      { name: 'MySQL',        icon: 'SiMysql' },
      { name: 'MongoDB',      icon: 'SiMongodb' },
      { name: 'PostgreSQL',   icon: 'SiPostgresql' },
      { name: 'Firebase',     icon: 'SiFirebase' },
      { name: 'AWS',          icon: 'FaAws' },
      { name: 'Docker',       icon: 'SiDocker' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Practices',
    skills: [
      { name: 'Git',          icon: 'FaGitAlt' },
      { name: 'GitHub',       icon: 'FaGithub' },
      { name: 'Figma',        icon: 'SiFigma' },
      { name: 'Linux',        icon: 'FaLinux' },
      { name: 'Jira',         icon: 'SiJira' },
      { name: 'Jest',         icon: 'SiJest' },
    ],
  },
]
