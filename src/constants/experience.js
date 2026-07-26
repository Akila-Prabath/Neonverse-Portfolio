/**
 * Experience & Education timeline
 *
 * type: 'work' → appears on the RIGHT side of the timeline (green)
 * type: 'education' → appears on the LEFT side (blue)
 *
 * Entries are rendered top-to-bottom in the order listed here.
 * Tip: interleave work and education so both columns fill evenly.
 */
export const timeline = [
  /* ── EDUCATION (left) ──────────────────────────────────── */
  {
    id: 'usjp',
    type: 'education',
    title: 'BComp (Hons) Software Engineering',
    organisation: 'University of Sri Jayewardenepura',
    location: 'Nugegoda, Sri Lanka',
    period: 'June 2023 — Present',
    current: true,
    description:
      "Final year undergraduate studying cloud computing and network security, software engineering economics, robotics and automation, and game designing and development.",
    tags: ['Deep Learning', 'Python', 'Software Architecture'],
  },

  {
  id: 'coursera-ibm-cicd',
  type: 'education',
  title: 'Continuous Integration and Continuous Delivery (CI/CD)',
  organisation: 'Coursera — IBM',
  location: 'Online',
  period: '2026',
  current: false,
  description:
    'Completed the IBM Continuous Integration and Continuous Delivery (CI/CD) course, gaining hands-on experience in building automated CI/CD pipelines using GitHub Actions, Tekton, Docker, Kubernetes, and OpenShift. Developed and deployed a Node.js application through automated linting, testing, container image building, and continuous deployment as part of the course final project.',
  tags: [
    'CI/CD',
    'GitHub Actions',
    'Tekton',
    'OpenShift',
    'Docker',
    'Kubernetes',
    'DevOps',
    'Git'
  ],
  certificate: 'https://coursera.org/verify/GD64ZC40JMHE', // Replace with your certificate URL
},

  {
  id: 'coursera-software-qa-test-automation',
  type: 'education',
  title: 'Software QA & Test Automation Engineering',
  organisation: 'Coursera',
  location: 'Online',
  period: '2026',
  current: false,
  description:
    'Completed the Software QA & Test Automation Engineering course, gaining practical experience in software testing fundamentals, test case design, quality assurance processes, manual and automated testing, API testing, CI/CD integration, GitHub Actions, Selenium WebDriver, and industry best practices for delivering high-quality software.',
  tags: [
    'Software Testing',
    'Quality Assurance',
    'Test Automation',
    'Selenium',
    'GitHub Actions',
    'CI/CD',
    'API Testing',
    'Manual Testing'
  ],
  certificate: 'https://coursera.org/verify/QL6W50V3IFA5', // Replace with your certificate URL
},

  {
    id: 'coursera-google-ai',
    type: 'education',
    title: 'Google AI Professional Certificate',
    organisation: 'Coursera — Google',
    location: 'Online',
    period: '2026',
    current: false,
    description:
      'Completed the Google AI Professional Certificate, gaining practical knowledge of generative AI, prompt engineering, responsible AI, AI-powered productivity, and applying AI tools to solve real-world software engineering and business problems.',
    tags: [
      'Artificial Intelligence',
      'Generative AI',
      'Prompt Engineering',
      'Google AI'
    ],
    certificate: 'https://coursera.org/verify/4CGPJOC2FB7P', // Replace with your certificate URL
  },

  /* ── WORK (right) ───────────────────────────────────────── */
  {
    id: 'heart-attack-predictor',
    type: 'work',
    title: 'Machine Learning Developer — Heart Attack Predictor',
    organisation: 'Group Project',
    location: 'University of Sri Jayewardenepura',
    period: '2025',
    current: false,
    description:
      'Contributed to a team-developed healthcare prediction system designed to assess heart attack risk using machine learning techniques. Performed data preprocessing, feature engineering, and exploratory data analysis (EDA) to improve data quality and model effectiveness. Trained and evaluated a Support Vector Machine (SVM) classifier, analyzed model performance, and supported the development of a data-driven predictive solution for healthcare risk assessment.',
    tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'SVM'],
  },

  /* ── WORK (right) ───────────────────────────────────────── */
  {
    id: 'ecommerce-backend',
    type: 'work',
    title: 'Backend Developer — E-Commerce Web Application',
    organisation: 'Group Project',
    location: 'University of Sri Jayewardenepura',
    period: '2025',
    current: false,
    description:
      'Contributed as a backend developer in a team built e-commerce web application for the fundamentals of software security module. Implemented server-side functionalities, developed APIs, managed database interactions, and supported authentication and business logic components to ensure secure, scalable, and efficient system operations..',
    tags: ['PHP', 'Laravel Framework', 'MySQL', 'JavaScript', 'Bootstrap'],
  },

  /* ── EDUCATION (left) ──────────────────────────────────── */
  {
    id: 'coursera-programming-python',
    type: 'education',
    title: 'Programming in Python',
    organisation: 'Coursera — Meta',
    location: 'Online',
    period: '2025',
    current: false,
    description:
      'Completed the Programming in Python course, developing a strong foundation in Python programming, object-oriented programming, file handling, exception handling, data structures, and writing clean, reusable code to solve real-world programming problems.',
    tags: [
      'Python',
      'Object-Oriented Programming',
      'Data Structures',
      'File Handling',
      'Exception Handling',
      'Problem Solving'
    ],
    certificate: 'https://coursera.org/verify/8UC1JN5JTFDV', // Replace with your certificate URL
  },

  /* ── WORK (right) ───────────────────────────────────────── */
  {
    id: 'canteen-tester',
    type: 'work',
    title: 'Software Tester — Canteen Management System',
    organisation: 'Group Project',
    location: 'University of Sri Jayewardenepura',
    period: '2024',
    current: false,
    description:
      'Contributed as a Software tester in a team built canteen management system. Designed and executed test cases, performed unit testing using Vitest and React Testing Library, and validated system behavior through integration testing with Selenium to ensure software quality, reliability, and functional correctness.',
    tags: ['Unit Testing', 'Test Cases', 'Bug Reporting', 'Vitest'],
  },

  /* ── EDUCATION (left) ──────────────────────────────────── */
  {
    id: 'coursera-intro-web-development',
    type: 'education',
    title: 'Introduction to Web Development with HTML, CSS, JavaScript',
    organisation: 'Coursera — IBM',
    location: 'Online',
    period: '2024',
    current: false,
    description:
      'Completed the Introduction to Web Development with HTML, CSS, JavaScript course, gaining a solid foundation in front-end web development, including semantic HTML, responsive CSS, JavaScript fundamentals, DOM manipulation, and building interactive web pages.',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive Web Design',
      'DOM Manipulation',
      'Front-End Development'
    ],
    certificate: 'https://coursera.org/verify/YS1JUGZGTSK5B', // Replace with your certificate URL
  },

  {
    id: 'coursera-wordpress-website',
    type: 'education',
    title: 'Build a Full Website using WordPress',
    organisation: 'Coursera — Coursera Project Network',
    location: 'Online',
    period: '2024',
    current: false,
    description:
      'Completed the Build a Full Website using WordPress guided project, gaining hands-on experience in designing and developing a responsive website using WordPress, including page creation, theme customization, navigation, plugins, and website publishing.',
    tags: [
      'WordPress',
      'Website Development',
      'CMS',
      'Responsive Design',
      'Web Design',
      'Plugins'
    ],
    certificate: 'https://coursera.org/verify/GL8JLIX68D79', // Replace with your certificate URL
  },

  /* ── WORK (right) ───────────────────────────────────────── 
  {
    id: 'freelance',
    type: 'work',
    title: 'Freelance Web Developer',
    organisation: 'Self-employed',
    location: 'Remote',
    period: '2023 — Present',
    current: true,
    description:
      'Built and maintained web applications for small businesses and startups in Sri Lanka. Projects ranged from landing pages and e-commerce stores to custom admin dashboards. All delivered on time and within budget.',
    tags: ['React', 'Next.js', 'Firebase', 'Tailwind'],
  },*/

  /* ── EDUCATION (left) ──────────────────────────────────── */
  {
    id: 'alevel',
    type: 'education',
    title: 'A/L — Physical Science Stream',
    organisation: 'Maliyadewa Adarsha Maha Vidyalaya ',  // replace with your school
    location: 'Sri Lanka',
    period: '2019 — 2021',
    current: false,
    description:
      'Completed Advanced Levels in Combined Mathematics, Physics, and Chemistry. Achieved results qualifying for university entrance into the Engineering faculty.',
    tags: ['Mathematics', 'Physics', 'Chemistry'],
  },
]
