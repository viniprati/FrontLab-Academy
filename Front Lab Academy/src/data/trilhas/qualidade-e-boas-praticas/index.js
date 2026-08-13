import { qualidadeEBoasPraticasModules } from './modulos.js'

export const qualidadeEBoasPraticasTrack = {
    name: 'Qualidade e boas práticas', level: 'intermediario', levelLabel: 'Intermediário',
    tags: ['Acessibilidade', 'Performance', 'PWA', 'Testes'],
    accent: '#10B981', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    description: 'Aprenda acessibilidade, performance, PWA, testes, organização de código, responsividade e boas práticas para projetos reais.',
    modules: qualidadeEBoasPraticasModules,
    challenge: { title: 'Desafio final: Upgrade de qualidade em projeto real', brief: 'Pegue um projeto existente e aplique melhorias de acessibilidade, performance, testes e experiência offline.', portfolio: 'Entregáveis: relatório técnico, métricas comparativas e branch pública com melhorias implementadas.' }
  }
