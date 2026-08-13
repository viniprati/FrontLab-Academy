import { ferramentasModules } from './modulos.js'

export const ferramentasTrack = {
    name: 'Ferramentas', level: 'intermediario', levelLabel: 'Básico ao intermediário',
    tags: ['Git', 'GitHub', 'npm', 'Vite', 'ESLint', 'Prettier'],
    accent: '#6366F1', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    description: 'Estude Git, GitHub, npm, Node.js, Vite, Webpack, ESLint, Prettier e ferramentas essenciais do ecossistema front-end.',
    modules: ferramentasModules,
    challenge: { title: 'Desafio final: Starter kit de equipe front-end', brief: 'Crie um template completo com scripts, lint, format, convenções e documentação de contribuição.', portfolio: 'Entregáveis: template público reutilizável e guia de onboarding técnico.' }
  }
