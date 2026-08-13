import { frameworksFrontEndModules } from './modulos.js'

export const frameworksFrontEndTrack = {
    name: 'Frameworks front-end', level: 'avancado', levelLabel: 'Intermediário ao avançado',
    tags: ['React', 'Vue', 'Angular', 'Svelte', 'Next.js'],
    accent: '#7B5CFF', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'Conheça React, Vue, Angular, Svelte, SolidJS, Next.js e Astro para criar interfaces modernas e aplicações mais completas.',
    modules: frameworksFrontEndModules,
    challenge: { title: 'Desafio final: Plataforma de conteúdo técnico', brief: 'Crie uma aplicação front-end completa com roteamento, busca, filtros, páginas de detalhe e integração com APIs.', portfolio: 'Entregáveis: app publicado, documentação de arquitetura e decisões técnicas.' }
  }
