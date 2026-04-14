import { CourseModule, TechTrack } from '@/types/course';

const m = (track: string, id: string, title: string, description: string): CourseModule => ({
  id: `${track}-${id}`,
  title,
  description,
  conceptSummary: `${title} em linguagem direta e foco pratico.`,
  shortExample: `// exemplo rapido: ${title.toLowerCase()}`,
  importantTip: 'Pratique em pequenos passos e evolua com consistencia.',
  officialReference: 'https://example.com/docs',
  type: 'lesson',
  durationMinutes: 24,
  content: {
    id: `${track}-${id}-content`,
    title,
    simplifiedExplanation: `Explicacao simplificada sobre ${title.toLowerCase()} com foco didatico.`,
    practicalExample: `Construa um mini exercicio aplicando ${title.toLowerCase()}.`,
    commonMistakes: ['Pular fundamentos', 'Nao revisar erros comuns', 'Ignorar acessibilidade'],
    quickSummary: `${title} e uma base importante para evoluir na trilha.`,
    nextStep: 'Continue para o proximo modulo da trilha.'
  }
});

const makeTrack = (track: Omit<TechTrack, 'modulesCount'>): TechTrack => ({
  ...track,
  modulesCount: track.modules.length,
  modules: track.modules.map((module) => ({
    ...module,
    officialReference:
      module.officialReference === 'https://example.com/docs'
        ? track.officialDocs
        : module.officialReference
  }))
});

export const tracks: TechTrack[] = [
  makeTrack({
    slug: 'html',
    title: 'HTML',
    tagline: 'Estrutura semantica para interfaces web.',
    category: 'Linguagem',
    difficulty: 'Iniciante',
    prerequisites: ['Conhecimento basico de internet'],
    estimatedHours: 6,
    icon: 'FileCode2',
    coverGradient: 'from-cyan-500/30 via-sky-500/20 to-transparent',
    officialDocs: 'https://developer.mozilla.org/docs/Web/HTML',
    intro: 'Aprenda estrutura, semantica e formularios para construir paginas consistentes.',
    roadmap: ['Estrutura base', 'Semantica', 'Formularios'],
    modules: [
      m('html', 'estrutura', 'Estrutura de Documento', 'Organize head e body de forma correta.'),
      m('html', 'semantica', 'Semantica e Acessibilidade', 'Escolha tags por significado.'),
      m('html', 'formularios', 'Formularios', 'Colete dados com UX e validacao nativa.')
    ]
  }),
  makeTrack({
    slug: 'css',
    title: 'CSS',
    tagline: 'Estilo, layout e responsividade.',
    category: 'Linguagem',
    difficulty: 'Iniciante',
    prerequisites: ['HTML basico'],
    estimatedHours: 8,
    icon: 'Palette',
    coverGradient: 'from-indigo-500/30 via-blue-500/20 to-transparent',
    officialDocs: 'https://developer.mozilla.org/docs/Web/CSS',
    intro: 'Controle visual com seletores, box model, flexbox, grid e breakpoints.',
    roadmap: ['Seletores', 'Box model', 'Flexbox e Grid', 'Responsividade'],
    modules: [
      m('css', 'seletores', 'Seletores e Cascata', 'Entenda especificidade sem gambiarra.'),
      m('css', 'box-model', 'Box Model', 'Dimensoes previsiveis em todos os componentes.'),
      m('css', 'flex-grid', 'Flexbox e Grid', 'Monte layouts modernos em camadas.'),
      m('css', 'responsividade', 'Responsividade', 'Adapte a experiencia para qualquer tela.')
    ]
  }),
  makeTrack({
    slug: 'javascript',
    title: 'JavaScript',
    tagline: 'Interatividade e logica no navegador.',
    category: 'Linguagem',
    difficulty: 'Iniciante',
    prerequisites: ['HTML e CSS'],
    estimatedHours: 10,
    icon: 'Braces',
    coverGradient: 'from-amber-400/30 via-orange-400/20 to-transparent',
    officialDocs: 'https://developer.mozilla.org/docs/Web/JavaScript',
    intro: 'Fundamentos da linguagem e manipulacao de DOM com eventos.',
    roadmap: ['Variaveis', 'Funcoes', 'DOM e eventos', 'Arrays e objetos'],
    modules: [
      m('javascript', 'variaveis', 'Variaveis e Tipos', 'Base para qualquer script.'), 
      m('javascript', 'funcoes', 'Funcoes e Escopo', 'Organize regras de negocio.'),
      m('javascript', 'dom', 'DOM e Eventos', 'Conecte interface e comportamento.'),
      m('javascript', 'arrays', 'Arrays e Objetos', 'Modele dados com clareza.')
    ]
  }),
  makeTrack({
    slug: 'typescript',
    title: 'TypeScript',
    tagline: 'Escalabilidade com seguranca de tipos.',
    category: 'Linguagem',
    difficulty: 'Intermediario',
    prerequisites: ['JavaScript moderno'],
    estimatedHours: 7,
    icon: 'ShieldCheck',
    coverGradient: 'from-blue-500/30 via-cyan-500/20 to-transparent',
    officialDocs: 'https://www.typescriptlang.org/docs/',
    intro: 'Tipagem estatica para reduzir bugs e melhorar refatoracao.',
    roadmap: ['Tipos', 'Interfaces', 'Generics'],
    modules: [
      m('typescript', 'tipos', 'Tipos e Inferencia', 'Entenda como o compilador analisa seu codigo.'),
      m('typescript', 'interfaces', 'Interfaces', 'Contratos claros entre camadas.'),
      m('typescript', 'generics', 'Generics', 'Reuso forte com flexibilidade.')
    ]
  }),
  makeTrack({
    slug: 'react',
    title: 'React',
    tagline: 'Componentizacao e estado para UI rica.',
    category: 'Framework',
    difficulty: 'Intermediario',
    prerequisites: ['JavaScript', 'TypeScript basico'],
    estimatedHours: 9,
    icon: 'Atom',
    coverGradient: 'from-cyan-400/30 via-teal-400/20 to-transparent',
    officialDocs: 'https://react.dev/',
    intro: 'Crie componentes reutilizaveis com estado e hooks.',
    roadmap: ['Componentes', 'State', 'Hooks'],
    modules: [
      m('react', 'componentes', 'Componentes e Props', 'Separacao clara de responsabilidades.'),
      m('react', 'state', 'State e Renderizacao', 'UI previsivel orientada a estado.'),
      m('react', 'hooks', 'Hooks', 'Reutilize logica sem repetir codigo.')
    ]
  }),
  makeTrack({
    slug: 'nextjs',
    title: 'Next.js',
    tagline: 'Framework full-stack com App Router.',
    category: 'Framework',
    difficulty: 'Intermediario',
    prerequisites: ['React'],
    estimatedHours: 10,
    icon: 'Rocket',
    coverGradient: 'from-slate-300/30 via-zinc-400/20 to-transparent',
    officialDocs: 'https://nextjs.org/docs',
    intro: 'Organize rotas, layouts e estrategias de rendering.',
    roadmap: ['Rotas', 'Server/Client', 'Data fetching', 'Otimizacoes'],
    modules: [
      m('nextjs', 'rotas', 'Rotas e Layouts', 'Estruture o produto para crescer.'),
      m('nextjs', 'server-client', 'Server e Client Components', 'Performance e interatividade no equilibrio certo.'),
      m('nextjs', 'fetching', 'Data Fetching', 'Dados com cache e revalidacao.'),
      m('nextjs', 'otimizacao', 'Otimizacoes', 'Melhore UX e tempo de carregamento.')
    ]
  }),
  makeTrack({
    slug: 'vue',
    title: 'Vue',
    tagline: 'Reatividade com curva de entrada suave.',
    category: 'Framework',
    difficulty: 'Intermediario',
    prerequisites: ['HTML', 'JavaScript'],
    estimatedHours: 4,
    icon: 'Layers',
    coverGradient: 'from-emerald-400/30 via-teal-400/20 to-transparent',
    officialDocs: 'https://vuejs.org/guide/introduction.html',
    intro: 'Visao inicial de reatividade e componentes SFC.',
    roadmap: ['Reatividade', 'SFC'],
    modules: [
      m('vue', 'reatividade', 'Reatividade', 'Atualize interface de forma declarativa.'),
      m('vue', 'sfc', 'SFC e Componentes', 'Estruture UI com arquivos unicos.')
    ]
  }),
  makeTrack({
    slug: 'angular',
    title: 'Angular',
    tagline: 'Arquitetura opinativa para apps robustos.',
    category: 'Framework',
    difficulty: 'Avancado',
    prerequisites: ['TypeScript'],
    estimatedHours: 5,
    icon: 'Workflow',
    coverGradient: 'from-rose-400/30 via-red-500/20 to-transparent',
    officialDocs: 'https://angular.dev/overview',
    intro: 'Introducao ao ecossistema Angular com foco em arquitetura.',
    roadmap: ['Arquitetura', 'Binding e Servicos'],
    modules: [
      m('angular', 'arquitetura', 'Arquitetura Angular', 'Organizacao por dominio e DI.'),
      m('angular', 'binding', 'Binding e Servicos', 'Fluxo de dados padronizado.')
    ]
  }),
  makeTrack({
    slug: 'tailwind',
    title: 'Tailwind CSS',
    tagline: 'Design system utilitario para produtividade.',
    category: 'Ferramenta',
    difficulty: 'Iniciante',
    prerequisites: ['CSS basico'],
    estimatedHours: 5,
    icon: 'Paintbrush',
    coverGradient: 'from-cyan-400/30 via-blue-400/20 to-transparent',
    officialDocs: 'https://tailwindcss.com/docs',
    intro: 'Estilize interfaces com classes utilitarias e tokens consistentes.',
    roadmap: ['Utilities', 'Responsividade', 'Composicao'],
    modules: [
      m('tailwind', 'utilities', 'Utility Classes', 'Estilo rapido com consistencia.'),
      m('tailwind', 'responsive', 'Responsividade', 'Ajustes por breakpoint e estado.'),
      m('tailwind', 'composicao', 'Composicao', 'Transforme utilitarios em componentes.')
    ]
  }),
  makeTrack({
    slug: 'git-github',
    title: 'Git e GitHub',
    tagline: 'Versionamento e colaboracao de time.',
    category: 'Ferramenta',
    difficulty: 'Iniciante',
    prerequisites: ['Nenhum'],
    estimatedHours: 3,
    icon: 'GitBranch',
    coverGradient: 'from-fuchsia-400/30 via-pink-500/20 to-transparent',
    officialDocs: 'https://docs.github.com/en/get-started',
    intro: 'Fluxo de commit, branch e pull request para times profissionais.',
    roadmap: ['Comandos essenciais', 'Fluxo de PR'],
    modules: [
      m('git-github', 'fundamentos', 'Fundamentos', 'Registre historico com clareza.'),
      m('git-github', 'pr', 'Branches e PRs', 'Colabore com revisao tecnica.')
    ]
  }),
  makeTrack({
    slug: 'fundamentos-web',
    title: 'Fundamentos de Web',
    tagline: 'Base tecnica para decisoes melhores.',
    category: 'Fundamentos',
    difficulty: 'Iniciante',
    prerequisites: ['Nenhum'],
    estimatedHours: 3,
    icon: 'Globe2',
    coverGradient: 'from-violet-400/30 via-indigo-500/20 to-transparent',
    officialDocs: 'https://developer.mozilla.org/docs/Learn',
    intro: 'Entenda internet, navegador, performance e acessibilidade.',
    roadmap: ['Como a web funciona', 'Performance e A11y'],
    modules: [
      m('fundamentos-web', 'mecanica', 'Como a Web Funciona', 'Do DNS ao rendering da pagina.'),
      m('fundamentos-web', 'qualidade', 'Performance e Acessibilidade', 'Qualidade tecnica e experiencia.')
    ]
  })
];

export const trackBySlug = new Map(tracks.map((track) => [track.slug, track]));

export const allModules = tracks.flatMap((track) =>
  track.modules.map((module) => ({
    ...module,
    trackSlug: track.slug,
    trackTitle: track.title,
    difficulty: track.difficulty
  }))
);
