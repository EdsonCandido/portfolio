export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Portfólio Pessoal',
    description: 'Meu portfólio profissional desenvolvido com Next.js e Tailwind CSS.',
    image: 'projects/portfolio.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/EdsonCandido/portfolio2',
    liveUrl: 'https://edsoncandido.vercel.app',
  },
  {
    title: 'Sistema de Gestão de Estoque',
    description: 'Sistema completo para gestão de estoque com controle de entrada, saída e relatórios.',
    image: 'projects/estoque.jpg',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Bootstrap'],
    githubUrl: 'https://github.com/EdsonCandido/sistema-estoque',
    liveUrl: 'https://sistema-estoque.vercel.app',
  },
  {
    title: 'API REST com Node.js',
    description: 'API RESTful desenvolvida com Node.js, Express e MongoDB para gerenciamento de usuários.',
    image: 'projects/api.jpg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/EdsonCandido/api-rest-node',
    liveUrl: 'https://api-rest-node.vercel.app',
  },
  {
    title: 'E-commerce React',
    description: 'Plataforma de e-commerce desenvolvida com React, Redux e integração com API de pagamentos.',
    image: 'projects/ecommerce.jpg',
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/EdsonCandido/ecommerce-react',
    liveUrl: 'https://ecommerce-react.vercel.app',
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo para visualização de dados e métricas de negócio.',
    image: 'projects/dashboard.jpg',
    technologies: ['React', 'D3.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/EdsonCandido/dashboard-analytics',
    liveUrl: 'https://dashboard-analytics.vercel.app',
  },
  {
    title: 'App de Tarefas',
    description: 'Aplicativo de gerenciamento de tarefas com autenticação e sincronização em tempo real.',
    image: 'projects/tasks.jpg',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    githubUrl: 'https://github.com/EdsonCandido/tasks-app',
    liveUrl: 'https://tasks-app.vercel.app',
  }
] 