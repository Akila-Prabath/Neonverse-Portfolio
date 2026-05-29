/**
 * Experience & Education constant
 * Rendered as a vertical timeline in the Experience section.
 * type: 'work' | 'education'
 */
export const timeline = [
  {
    id: 'usjp',
    type: 'education',
    title: 'BSc (Hons) Software Engineering',
    organisation: 'University of Sri Jayewardenepura',
    location: 'Nugegoda, Sri Lanka',
    period: '2022 — Present',
    current: true,
    description:
      'Final year undergraduate studying software engineering fundamentals — algorithms, data structures, software architecture, databases, and distributed systems. Dean\'s List for two consecutive semesters.',
    tags: ['Java', 'Python', 'SQL', 'Software Architecture'],
  },
  {
    id: 'intern-2024',
    type: 'work',
    title: 'Software Engineering Intern',
    organisation: 'Tech Company (Add Yours)',
    location: 'Colombo, Sri Lanka',
    period: 'Jun 2024 — Dec 2024',
    current: false,
    description:
      'Worked on the core product team building React features and Node.js microservices. Contributed to a performance refactor that cut page-load time by 35%. Participated in daily standups, code reviews, and sprint planning.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Agile'],
  },
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
  {
    id: 'alevel',
    type: 'education',
    title: 'A/L — Physical Science Stream',
    organisation: 'Your School Name',
    location: 'Sri Lanka',
    period: '2019 — 2021',
    current: false,
    description:
      'Completed Advanced Levels in Combined Mathematics, Physics, and Chemistry. Achieved results qualifying for university entrance into the Engineering faculty.',
    tags: ['Mathematics', 'Physics', 'Chemistry'],
  },
]
