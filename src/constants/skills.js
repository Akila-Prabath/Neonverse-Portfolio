/**
 * Skills constant
 * Grouped by category.
 * icon: must match a key in ICON_MAP inside Skills.jsx
 */
export const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'Java', icon: 'FaJava' },
      { name: 'Python', icon: 'FaPython' },
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'PHP', icon: 'SiPhp' },
      { name: 'Dart', icon: 'SiDart' },
    ],
  },

  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React', icon: 'FaReact' },
      { name: 'Flutter', icon: 'SiFlutter' },
      { name: 'HTML5', icon: 'SiHtml5' },
      { name: 'CSS3', icon: 'SiCss3' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'Bootstrap', icon: 'SiBootstrap' },
      { name: 'Vite', icon: 'SiVite' },
    ],
  },

  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'FaNodeJs' },
      { name: 'Express.js', icon: 'SiExpress' },
      { name: 'Laravel', icon: 'SiLaravel' },
      { name: 'REST APIs', icon: 'TbApi' },
    ],
  },

  {
    id: 'database',
    label: 'Database',
    skills: [
      { name: 'MySQL', icon: 'SiMysql' },
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'PostgreSQL', icon: 'SiPostgresql' },
      { name: 'Firebase', icon: 'SiFirebase' },
    ],
  },

  {
    id: 'aiml',
    label: 'AI / Machine Learning',
    skills: [
      { name: 'TensorFlow', icon: 'SiTensorflow' },
      { name: 'Scikit-learn', icon: 'SiScikitlearn' },
      { name: 'OpenCV', icon: 'SiOpencv' },
      { name: 'Pandas', icon: 'SiPandas' },
      { name: 'NumPy', icon: 'SiNumpy' },
      { name: 'Jupyter', icon: 'SiJupyter' },
    ],
  },

  {
    id: 'tools',
    label: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: 'FaGitAlt' },
      { name: 'GitHub', icon: 'FaGithub' },
      { name: 'Docker', icon: 'SiDocker' },
      { name: 'Linux', icon: 'FaLinux' },
      { name: 'Android Studio', icon: 'SiAndroidstudio' },
      { name: 'Postman', icon: 'SiPostman' },
      { name: 'Figma', icon: 'SiFigma' },
    ],
  },

  {
    id: 'testing',
    label: 'Testing',
    skills: [
      { name: 'Vitest', icon: 'SiVitest' },
      { name: 'React Testing Library', icon: 'SiTestinglibrary' },
      { name: 'Selenium WebDriver', icon: 'SiSelenium' },
    ],
  },
];