import { preparacaoDoAlunoModules } from './modulos.js'

export const preparacaoDoAlunoTrack = {
    name: 'Preparação do aluno',
    level: 'iniciante',
    levelLabel: 'Iniciante',
    tags: ['Front-end', 'Internet', 'VS Code', 'Terminal', 'GitHub', 'Deploy'],
    accent: '#22C55E',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    description: 'Entenda o que é front-end, como a internet funciona, como usar VS Code, terminal, GitHub e como publicar seus primeiros projetos.',
    modules: preparacaoDoAlunoModules,
    challenge: {
      title: 'Desafio final: Setup profissional de projeto',
      brief: 'Crie um repositório modelo de front-end com estrutura de pastas, README, convenções de commit e deploy funcional.',
      portfolio: 'Entregáveis: link do repositório, link do deploy e documentação de onboarding.'
    }
  }
