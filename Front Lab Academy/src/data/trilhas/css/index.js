import { cssModules } from './modulos.js'

export const cssTrack = {
    name: 'CSS', level: 'basico', levelLabel: 'Básico',
    tags: ['CSS', 'Box Model', 'Flexbox', 'Grid', 'Responsividade', 'Componentes'],
    accent: '#3B82F6', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    description: 'Aprenda CSS em 60 módulos progressivos, saindo dos fundamentos e chegando a layouts responsivos, componentes modernos e um projeto final pronto para portfólio.',
    modules: cssModules,
    challenge: { title: 'Desafio final: Interface responsiva com CSS', brief: 'Construa uma página completa para um produto, serviço ou portfólio usando box model, Flexbox, Grid, componentes visuais e responsividade mobile-first.', portfolio: 'Entregáveis: deploy, README com decisões de layout, revisão responsiva e capturas de tela em mobile, tablet e desktop.' }
  }
