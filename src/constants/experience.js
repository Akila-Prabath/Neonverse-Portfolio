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
    id: 'coursera-meta-react',
    type: 'education',
    title: 'Meta Front-End Developer Certificate',
    organisation: 'Coursera — Meta',
    location: 'Online',
    period: '2024',
    current: false,
    description:
      'Completed the Meta Front-End Developer professional certificate covering React fundamentals, component design, state management, testing, and UX principles.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'UX'],
    certificate: 'https://coursera.org/verify/your-cert-id', // replace with real URL
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
    id: 'coursera-meta-backend',
    type: 'education',
    title: 'Meta Back-End Developer Certificate',  // replace with your actual course
    organisation: 'Coursera — Meta',               // replace with actual provider
    location: 'Online',
    period: '2023',
    current: false,
    description:
      'Completed an online professional certificate covering back-end development concepts including APIs, databases, version control, and cloud deployment fundamentals.',
    tags: ['Python', 'Django', 'APIs', 'Databases', 'Git'],
    certificate: 'https://coursera.org/verify/your-cert-id', // replace with real URL
  },

  /* ── WORK (right) ───────────────────────────────────────── */
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
  },

  /* ── EDUCATION (left) ──────────────────────────────────── */
  {
    id: 'alevel',
    type: 'education',
    title: 'A/L — Physical Science Stream',
    organisation: 'Your School Name',  // replace with your school
    location: 'Sri Lanka',
    period: '2019 — 2021',
    current: false,
    description:
      'Completed Advanced Levels in Combined Mathematics, Physics, and Chemistry. Achieved results qualifying for university entrance into the Engineering faculty.',
    tags: ['Mathematics', 'Physics', 'Chemistry'],
  },
]
