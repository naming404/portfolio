export const personal = {
  name: 'Nguyen Huu Nghia',
  role: 'Senior Frontend Developer',
  tagline: 'Crafting high-performance web experiences with Vue.js, Nuxt.js, React.js, Next.js, Nest.js & TypeScript',
  email: 'nhn280700@gmail.com',
  phone: '(+84) 859 255277',
  location: 'Go Vap, Ho Chi Minh City',
  linkedin: 'https://linkedin.com/in/nghia-nguyen',
  github: 'https://github.com/HuuNghia2807',
  github2: 'https://github.com/naming404',
  portfolio: 'https://huunghia2807.github.io/portfolio',
  avatar: './personal.jpg',
  summary: 'Senior Frontend Developer with 4+ years of experience building high-performance web applications with Vue.js, Nuxt.js, React.js, Next.js & TypeScript. Improved Lighthouse scores by 73%, reduced production bugs by 40%, and optimized API usage by 60%. Strong in SSR/SSG and performance optimization. Actively expanding into Backend and DevOps to build scalable end-to-end systems.',
}

export const stats = [
  { value: '4+', label: 'Years of experience' },
  { value: '2', label: 'Companies' },
  { value: '+73%', label: 'Lighthouse Score' },
  { value: '-40%', label: 'Production Bugs' },
]

export const experiences = [
  {
    company: 'GLODIVAL',
    role: 'Frontend Developer',
    period: 'Apr 2024 – Present',
    type: 'current',
    project: 'Travel & Visa Platform — Tour booking and online visa registration system',
    achievements: [
      'Led SSR migration to Nuxt.js 3 for a travel platform (~8,000 monthly visits), increasing Google Lighthouse score from ~55 to ~95 (+73%) and improving SEO performance.',
      'Migrated a legacy JavaScript codebase to strict TypeScript, cutting production bug reports by ~40% and improving developer onboarding.',
      'Architected a multi-layer performance optimization strategy (lazy loading, route-level code splitting, next-gen image formats), bringing LCP below 2.5s and CLS under 0.1 to meet Google\'s "Good" Core Web Vitals threshold.',
      'Architected Apollo Client caching for 15+ GraphQL queries, eliminating ~60% of redundant API calls and reducing data-fetch latency by ~300ms.',
      'Implemented end-to-end test coverage using Puppeteer for critical booking and visa registration user flows.',
    ],
    stack: ['Nuxt.js 3', 'TypeScript', 'GraphQL', 'Apollo Client', 'SSR', 'TailwindCSS', 'Pinia', 'Puppeteer'],
  },
  {
    company: 'GLODIVAL',
    role: 'Frontend Developer',
    period: 'Aug 2023 – Mar 2024',
    type: '',
    project: 'CRM & ERP System — Internal company management platform',
    achievements: [
      'Architected a real-time notification system using Socket.IO supporting 70+ concurrent internal users, achieving <200ms end-to-end delivery latency with zero message loss under load.',
      'Architected a shared Vue.js component library powered by Pinia, consolidating 5+ legacy workflows, reducing UI codebase size by ~30% and standardizing internal tools across 3 departments.',
      'Developed 8 real-time KPI dashboards using Chart.js, replacing manual Excel-based reporting and saving the operations team ~5+ hours per week.',
    ],
    stack: ['Nuxt.js 3', 'TypeScript', 'GraphQL', 'Ant Design', 'Chart.js', 'Socket.IO', 'Pinia'],
  },
  {
    company: 'TMA SOLUTIONS',
    role: 'Frontend Developer',
    period: 'Mar 2023 – Jul 2023',
    type: '',
    project: 'Data Analyst Portal — Analytics platform for telecom communication data',
    achievements: [
      'Built a reusable component library of 12 WCAG-compliant charts and tables from Figma designs, enabling cross-page reuse across 4+ portal pages and accelerating feature development by ~40%.',
      'Integrated multiple telecom data APIs for real-time monitoring dashboards, implementing retry logic and resilient error handling to reduce user-facing failures to near zero.',
      'Developed a one-click data export pipeline to Nextcloud (Excel/CSV), automating report generation and removing the need for manual data extraction.',
      'Bridged business and engineering by translating complex requirements into clear technical specifications to improve delivery stability.'
    ],
    stack: ['Vue.js 3', 'TypeScript', 'RESTful API', 'Axios', 'PrimeVue', 'Chart.js', 'Socket.IO'],
  },
  {
    company: 'TMA SOLUTIONS',
    role: 'Frontend Developer',
    period: 'Jun 2022 – Feb 2023',
    type: 'first',
    project: 'Chair Management System — Seat management tool for 1,000+ employees',
    achievements: [
      'Led frontend development of an end-to-end seat management system, delivering the product from concept to production and supporting daily internal operations.',
      'Engineered an interactive floor plan editor using Konva.js with drag-and-drop layout editing and real-time seat assignment, replacing HR\'s manual Excel-based seat management process.',
      'Implemented an Axios-based API sync layer to handle concurrent seat assignments and prevent double-booking in production.',
      'Designed and implemented the frontend architecture from scratch, delivering a production-ready product and owning the end-to-end implementation.'
    ],
    stack: ['Vue.js 3', 'TypeScript', 'RESTful API', 'Axios', 'PrimeVue', 'Konva.js'],
  },
]

export const skills = {
  'Languages': ['JavaScript', 'TypeScript'],
  'Frameworks': ['Vue.js 3', 'Nuxt.js 3', 'React.js', 'Next.js', 'Nest.js'],
  'State Management': ['Pinia', 'Vuex', 'Zustand'],
  'Styling': ['TailwindCSS', 'SCSS / Sass', 'Ant Design', 'PrimeVue', 'Vuetify'],
  'Build & DevOps': ['Vite', 'Webpack', 'Docker', 'CI/CD', 'Git'],
  'Testing': [ 'Unit Testing', 'Vitest', 'Puppeteer'],
  'Concepts': ['SSR', 'SSG', 'Core Web Vitals', 'SEO', 'Responsive', 'WCAG', 'Agile/Scrum', 'Code Review'],
}

export const achievements = [
  {
    metric: '+73%',
    title: 'Lighthouse Score',
    description: 'From ~55 to ~95 — SSR migration and Core Web Vitals optimization across 2 production platforms.',
    color: '#218c00',
  },
  {
    metric: '-40%',
    title: 'Production Bugs',
    description: 'TypeScript migration, type-safe architecture, and structured code review processes.',
    color: '#262626',
  },
  {
    metric: '-60%',
    title: 'Redundant API Calls',
    description: 'Apollo Client caching for 15+ GraphQL queries, reducing fetch latency by ~300ms.',
    color: '#218c00',
  },
  {
    metric: '1,000+',
    title: 'Users Supported',
    description: 'End-to-end seat management system supporting daily internal operations.',
    color: '#262626',
  },
  {
    metric: '10,000+',
    title: 'Performance & SEO',
    description: 'Drove 10,000+ monthly visits through SSR migration and Core Web Vitals optimization.',
    color: '#218c00',
  },
]

export const education = {
  degree: 'Bachelor of Software Engineering',
  school: 'Can Tho University',
  period: '2018 – 2022',
  english: 'English Proficiency: B1 (Communicative)',
}
