import { typescriptModules } from './modulos.js'

export const typescriptTrack = {
    name: 'TypeScript', level: 'intermediario', levelLabel: 'Intermediário',
    tags: ['TypeScript', 'Tipos', 'Interfaces', 'Generics'],
    accent: '#3178C6', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    description: 'Aprenda tipagem básica, interfaces, type aliases, union types, generics, narrowing e tipagem de funções, eventos e APIs.',
    modules: typescriptModules,
    challenge: { title: 'Desafio final: Painel tipado de gestão', brief: 'Construa uma interface com domínio tipado de ponta a ponta (estado, formulários, API e validações).', portfolio: 'Entregáveis: repositório com arquitetura de tipos documentada e aplicação em produção.' }
  }
