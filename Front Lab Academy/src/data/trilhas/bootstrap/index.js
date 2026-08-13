import { bootstrapModules } from './modulos.js'

export const bootstrapTrack = {
    name: 'Bootstrap', level: 'basico', levelLabel: 'Básico ao intermediário',
    tags: ['Bootstrap', 'Grid', 'Componentes', 'Responsividade', 'Sass'],
    accent: '#7952B3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    description: 'Aprenda Bootstrap para criar interfaces responsivas rapidamente usando grid, utilitários, componentes, formulários, temas e customização.',
    modules: bootstrapModules,
    challenge: { title: 'Desafio final: Painel responsivo com Bootstrap', brief: 'Construa um painel administrativo usando grid, formulários, cards, modal, dropdown e tema customizado com Bootstrap.', portfolio: 'Entregáveis: deploy, README explicando componentes usados, screenshots mobile/desktop e lista de customizações.' }
  }
