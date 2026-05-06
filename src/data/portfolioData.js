export const navLinks = [
  { label: 'Hero', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const profile = {
  name: 'MAHARSHI DENUVAKONDA',
  title: 'Software Engineer & AI/ML Research Collaborator',
  summary:
    'I build software products and AI/ML systems that turn research ideas into usable, reliable experiences.',
  bio:
    'I work at the intersection of software engineering and applied AI. My focus is on building dependable full-stack products, intelligent developer tools, and ML-powered workflows that move from experimentation to real-world impact. I enjoy translating complex ideas into clean interfaces, scalable systems, and practical research prototypes.',
  focus:
    'Currently focused on agentic systems, evaluation pipelines, applied machine learning, and product-grade developer experiences.',
  email: 'maharshi.dv.kld@gmail.com',
  phone: '+91 6303984967',
  github: 'https://github.com/maharshi0143',
  linkedin: 'https://www.linkedin.com/in/denuvakonda-maharshi-4a6195292/',
  resumeView:
    'https://drive.google.com/file/d/148s3AA265Z2p7hR9qYHhGcQVoKTMg_8_/view?usp=sharing',
  resumeDownload:
    'https://drive.google.com/uc?export=download&id=148s3AA265Z2p7hR9qYHhGcQVoKTMg_8_',
}

export const highlights = [
  { label: 'Core focus', value: 'Software + AI' },
  { label: 'Working style', value: 'Research to product' },
  { label: 'Strength', value: 'End-to-end building' },
]

export const aboutPoints = [
  'End-to-end engineering across frontend, backend, and data-aware systems.',
  'Applied AI/ML thinking shaped around practical user and product outcomes.',
  'Strong bias toward clear architecture, rapid iteration, and dependable delivery.',
]

export const currentExploration =
  'Agentic workflows, LLM evaluation, intelligent automation, and software systems that make advanced tooling more usable in practice.'

export const education = {
  university: 'Aditya University',
  degree: 'B.Tech in Artificial Intelligence and Machine Learning',
  period: '2024 - 2027',
  summary:
    'Pursuing an AIML-focused engineering degree with an emphasis on applied machine learning, software development, intelligent systems, and practical problem solving.',
}

export const experiences = [
  {
    role: 'AI/ML Research Collaborator',
    company: 'Project Genesis AI Labs Pvt. Ltd.',
    period: 'Current',
    summary:
      'Currently contributing to applied AI/ML research with a focus on practical experimentation, intelligent workflows, model evaluation, and turning research concepts into usable software directions.',
    points: [
      'Collaborating on AI/ML initiatives that connect research ideas with implementation-ready prototypes.',
      'Exploring evaluation-driven workflows to improve the reliability and usefulness of intelligent systems.',
      'Supporting product-minded experimentation around automation, LLM-driven tooling, and applied machine learning.',
    ],
  },
]

export const techSkills = [
  { label: 'React', iconKey: 'react' },
  { label: 'JavaScript', iconKey: 'javascript' },
  { label: 'TypeScript', iconKey: 'typescript' },
  { label: 'Node.js', iconKey: 'node' },
  { label: 'Python', iconKey: 'python' },
  { label: 'PostgreSQL', iconKey: 'postgresql' },
  { label: 'Docker', iconKey: 'docker' },
  { label: 'GitHub', iconKey: 'github' },
  { label: 'Machine Learning', iconKey: 'ml' },
  { label: 'LLMs', iconKey: 'llm' },
  { label: 'REST APIs', iconKey: 'api' },
]

export const projects = [
  {
    title: 'Bank Account Management API',
    image: '/project-bank-management.png',
    description:
      'A financial systems API built with Event Sourcing and CQRS, featuring immutable event logs, projection rebuilds, snapshotting, idempotent transactions, and time-travel balance queries.',
    stack: ['Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'CQRS', 'Event Sourcing'],
    repo: 'https://github.com/maharshi0143/Bank-Account-Management-API',
  },
  {
    title: 'Library Management API',
    image: '/project-library-management.png',
    description:
      'A RESTful backend for library operations with complete CRUD flows, borrowing and return tracking, automated overdue fine calculation, and state-machine-driven book lifecycle management.',
    stack: ['Node.js', 'Express.js', 'PostgreSQL', 'REST API', 'Business Rules'],
    repo: 'https://github.com/maharshi0143/Library-Management-API',
  },
  {
    title: 'Local LLM Chatbot',
    image: '/project-local-llm.jpeg',
    description:
      'An offline customer support chatbot workflow using Ollama and Llama 3.2 (3B), designed to compare zero-shot and one-shot prompting while logging responses for structured manual evaluation.',
    stack: ['Python', 'Ollama', 'Llama 3.2', 'Prompt Engineering', 'Evaluation'],
    repo: 'https://github.com/maharshi0143/local-llm-chatbot',
  },
]
