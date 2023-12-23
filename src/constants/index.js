import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  flc,
  gym,
  mart,
  proph,
  food,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Mobile App Developer',
    icon: prototyping,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'MBFAM MM',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Sep 2021 - june 2023',
  },
  {
    title: 'Fullstack Web Developer',
    company_name: 'FLC Group',
    icon: microverse,
    iconBg: '#333333',
    date: 'february 2023 - June 2023',
  },
  {
    title: 'Front-End developer',
    company_name: 'Elebat Solution',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Aug 2023 - Present',
  },
  {
    title: 'Senior Fullstack Developer',
    company_name: 'Prophecius Technology',
    icon: dcc,
    iconBg: '#333333',
    date: 'june 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'FLC',
    description: 'A digital Marketing Company Profile web App',
    tags: [
      {
        name: 'next js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Strapi-CMS',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: flc,
    repo: 'https://github.com/jonny-grace',
    demo: 'https://webhostconcept.com/',
  },
  {
    id: 'project-2',
    name: 'Prophicius',
    description:
      'A software development Company Web App.',
    tags: [
      {
        name: 'next js',
        color: 'blue-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: proph,
    repo: 'https://github.com/jony-grace/',
    demo: 'https://prophecies-web.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'Food Delivery',
    description: 'A food Delivery app developed by React and Redux',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: food,
    repo: 'https://github.com/jony-grace',
    demo: 'https://food-delivery-steel.vercel.app/home',
  },
  {
    id: 'project-4',
    name: 'Grace Fitness club',
    description: `A single-page application that shows a list of gym workout types for difrent body.`,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Rapid API',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: gym,
    repo: 'https://github.com/jony-grace',
    demo: 'https://grace-fitness.vercel.app/',
  },
  {
    id: 'project-5',
    name: 'E-Mart',
    description:
      'A simple ecommerce wbsite developed by react js.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Vercel',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: mart,
    repo: 'https://github.com/jony-grace',
    demo: 'https://emart-gray.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
