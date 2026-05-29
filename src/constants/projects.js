/**
 * Projects constant
 * Add your real projects here. Each entry maps to a card on
 * the Projects section AND a full ProjectDetails page at /project/:id
 *
 * tags  — used for filter buttons
 * featured — shown first, gets a larger card treatment
 */
export const projects = [
  {
    id: 'counseling-platform',
    title: 'Student Counseling System',
    shortDesc: 'A MERN stack–based Student Counseling and Mental Health Support Portal .',
    longDesc: [
      {
        type: 'text',
        content: `A full-stack MERN web application developed to provide students with accessible, confidential, and structured mental health support. The platform allows students to connect with counselors, book appointments, access wellness resources, and communicate securely through a modern digital counseling system.`,
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Book counseling appointments.',
          'Appointment status tracking.',
          'Anonymous messaging support.',
          'Access mental health resources.',
        ],
      },
    ],
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    category: 'fullstack',
    featured: true,
    //liveUrl: 'https://neoshop-demo.vercel.app',
    githubUrl: 'https://github.com/Akila-Prabath/Student-Counseling-System',
    image: '../../public/projects/counseling.png',
    highlights: [
      'JWT authentication & authorization',
      'Password hashing using bcrypt',
      'Protected routes & middleware',
      'Secure environment variables',
    ],
    year: '2026',
  },
  {
    id: 'taskflow',
    title: 'TaskFlow — Project Management App',
    shortDesc: 'Kanban-style task manager with real-time collaboration via WebSockets.',
    longDesc: `TaskFlow is a collaborative project management tool inspired by Trello and Linear.
Teams can create workspaces, manage boards, assign tasks, set deadlines, and communicate
via in-app comments — all updating in real time through Socket.IO.

The drag-and-drop board uses dnd-kit for accessible, touch-friendly interactions.
Firebase is used for file attachments; the core data lives in MongoDB.`,
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Firebase'],
    category: 'fullstack',
    featured: true,
    liveUrl: 'https://taskflow-demo.vercel.app',
    githubUrl: 'https://github.com/Akila-Prabath/taskflow',
    image: '/projects/taskflow.png',
    highlights: [
      'Real-time updates via Socket.IO',
      'Drag-and-drop with dnd-kit (WCAG AA)',
      'Role-based access: owner / admin / member',
      'File uploads via Firebase Storage',
    ],
    year: '2024',
  },
  {
    id: 'devblog',
    title: 'DevBlog — Technical Blog Platform',
    shortDesc: 'Markdown-powered blog with syntax highlighting, comments, and an RSS feed.',
    longDesc: `A fast, SEO-friendly blog platform for developers. Posts are written in Markdown
and rendered with unified / rehype, including GitHub-flavoured code blocks with
Shiki syntax highlighting.

Readers can leave comments (stored in MongoDB), subscribe via RSS, and share posts.
The admin UI uses a custom Markdown editor with live preview. Lighthouse score: 98.`,
    tags: ['React', 'Node.js', 'MongoDB', 'Markdown'],
    category: 'frontend',
    featured: false,
    liveUrl: 'https://devblog-demo.vercel.app',
    githubUrl: 'https://github.com/Akila-Prabath/devblog',
    image: '/projects/devblog.png',
    highlights: [
      'Shiki syntax highlighting (30+ languages)',
      'RSS feed auto-generated on publish',
      'Lighthouse performance score: 98',
      'Custom Markdown editor with live preview',
    ],
    year: '2023',
  },
  {
    id: 'weathersphere',
    title: 'WeatherSphere — 3D Weather Visualiser',
    shortDesc: 'Interactive globe showing live weather data rendered with Three.js.',
    longDesc: `WeatherSphere pulls live weather data from the OpenWeatherMap API and renders
it on an interactive 3D globe built with Three.js. Temperature layers, wind
vectors, and precipitation zones are overlaid as coloured textures that update
every 10 minutes.

Users can click any country to get a detailed 7-day forecast panel. The globe
supports touch gestures for mobile exploration.`,
    tags: ['React', 'Three.js', 'REST APIs'],
    category: 'frontend',
    featured: false,
    liveUrl: 'https://weathersphere.vercel.app',
    githubUrl: 'https://github.com/Akila-Prabath/weathersphere',
    image: '/projects/weathersphere.png',
    highlights: [
      'Live data from OpenWeatherMap API',
      '3D globe with Three.js + custom shaders',
      'Touch-friendly drag-to-rotate',
      'Auto-refreshes every 10 minutes',
    ],
    year: '2023',
  },
  {
    id: 'spring-auth',
    title: 'AuthKit — Spring Boot Auth Service',
    shortDesc: 'Production-ready authentication microservice with JWT, OAuth2, and rate limiting.',
    longDesc: `AuthKit is a standalone Spring Boot microservice that handles authentication
and authorisation for other services in a distributed system. It implements
JWT access + refresh tokens, Google / GitHub OAuth2 via Spring Security,
bcrypt password hashing, and token blacklisting via Redis.

A built-in rate limiter (Bucket4j) prevents brute-force attacks. Swagger UI
documents every endpoint. Designed to be dropped into any microservices architecture.`,
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker'],
    category: 'backend',
    featured: false,
    liveUrl: '',
    githubUrl: 'https://github.com/Akila-Prabath/authkit',
    image: '/projects/authkit.png',
    highlights: [
      'JWT access + refresh token rotation',
      'Google & GitHub OAuth2 (Spring Security)',
      'Bucket4j rate limiting against brute force',
      'Swagger UI — fully documented API',
    ],
    year: '2024',
  },
  {
    id: 'portfolio',
    title: 'Neonverse Portfolio',
    shortDesc: 'This very portfolio — React, Three.js, Framer Motion, dark neon theme.',
    longDesc: `The site you're looking at right now. Built to showcase my skills in modern
frontend development: React + Vite for the SPA shell, Three.js / React Three Fiber
for the particle field hero background, Framer Motion for scroll-driven animations,
and Lenis for buttery-smooth scrolling.

Design tokens live in CSS custom properties for easy theming. Every section is
fully responsive and accessible (keyboard navigable, ARIA labelled).`,
    tags: ['React', 'Three.js', 'Framer', 'Tailwind'],
    category: 'frontend',
    featured: false,
    liveUrl: 'https://akilaprabath.dev',
    githubUrl: 'https://github.com/Akila-Prabath/Neonverse-Portfolio',
    image: '/projects/portfolio.png',
    highlights: [
      '2,200-particle Three.js hero background',
      'Framer Motion scroll-driven animations',
      'Lenis smooth scroll synced with GSAP',
      'Fully responsive & WCAG AA accessible',
    ],
    year: '2025',
  },
]

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
]
