import { CourseModule, TechTrack } from '@/types/course';

type ModuleSeed = [id: string, title: string, description: string];

const m = (track: string, id: string, title: string, description: string): CourseModule => ({
  id: `${track}-${id}`,
  title,
  description,
  conceptSummary: `${title}: entenda o conceito central, veja exemplos claros e aplique em um contexto real de desenvolvimento.`,
  shortExample: `// exemplo inicial de ${title.toLowerCase()}\nconst resultado = 'Aprendizado ativo';\nconsole.log(resultado);`,
  importantTip: 'Leia o conceito, pratique imediatamente e revise os erros mais frequentes antes de avancar.',
  officialReference: 'https://example.com/docs',
  type: 'lesson',
  durationMinutes: 32,
  content: {
    id: `${track}-${id}-content`,
    title,
    objective: `Dominar os fundamentos de ${title.toLowerCase()} e aplicar em tarefas praticas do dia a dia.`,
    simplifiedExplanation: `${title} deve ser estudado como base de raciocinio tecnico: primeiro entendimento do conceito, depois aplicacao com exemplos simples.`,
    deepDive: `Ao estudar ${title.toLowerCase()}, foque na relacao entre teoria e implementacao. Entender o por que de cada escolha reduz erros e acelera evolucao.`,
    simpleExample: `// exemplo simples de ${title.toLowerCase()}\nconst conceito = '${title}';\nconsole.log('Estudando:', conceito);`,
    commentedExample: `// exemplo comentado\n// 1) declare uma variavel clara\nconst moduloAtual = '${title}';\n// 2) use o valor em um fluxo simples\nconsole.log('Modulo:', moduloAtual);`,
    practicalExample: `Monte um exemplo de ${title.toLowerCase()} em um mini contexto de pagina real (lista, formulario ou bloco de conteudo).`,
    miniExercise: `Desafio: construa uma versao propria do exemplo de ${title.toLowerCase()} e explique suas escolhas em 3 pontos.`,
    keyTakeaways: [
      `${title} e parte essencial da trilha`,
      'Pratica imediata aumenta retencao',
      'Revisao de erros comuns evita retrabalho'
    ],
    commonMistakes: ['Pular fundamentos', 'Nao revisar erros comuns', 'Nao validar resultado no navegador'],
    importantTips: [
      'Trabalhe em blocos curtos e frequentes.',
      'Sempre adapte o exemplo para um caso proprio.',
      'Finalize o modulo com mini resumo em suas palavras.'
    ],
    quickSummary: `${title} consolida base tecnica para os proximos modulos da trilha.`,
    nextStep: 'Continue para o proximo modulo mantendo o ciclo: entender, praticar e revisar.'
  }
});

const buildModules = (track: string, seeds: ModuleSeed[]) =>
  seeds.map(([id, title, description]) => m(track, id, title, description));

const makeTrack = (track: Omit<TechTrack, 'modulesCount'>): TechTrack => ({
  ...track,
  modulesCount: track.modules.length,
  modules: track.modules.map((module) => ({
    ...module,
    officialReference: module.officialReference === 'https://example.com/docs' ? track.officialDocs : module.officialReference
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
    estimatedHours: 22,
    icon: 'FileCode2',
    coverGradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    officialDocs: 'https://developer.mozilla.org/docs/Web/HTML',
    intro: 'Curso completo de HTML, da estrutura basica ate formularios e acessibilidade inicial.',
    roadmap: ['Base do documento', 'Conteudo semantico', 'Midia e dados', 'Formularios', 'Acessibilidade'],
    modules: buildModules('html', [
      ['estrutura', 'Estrutura de Documento', 'Organize head e body de forma correta.'],
      ['titulos-paragrafos', 'Titulos e Paragrafos', 'Crie hierarquia textual clara para leitura.'],
      ['links-navegacao', 'Links e Navegacao', 'Construa fluxos de navegacao com ancoras e menus.'],
      ['imagens-midia', 'Imagens e Midia', 'Trabalhe com imagem, video e boas praticas de carregamento.'],
      ['listas', 'Listas Ordenadas e Nao Ordenadas', 'Estruture sequencias e agrupamentos de informacao.'],
      ['tabelas', 'Tabelas HTML', 'Apresente dados tabulares com semantica.'],
      ['semantica', 'Semantica e Acessibilidade', 'Escolha tags pelo significado e funcao.'],
      ['blocos-semanticos', 'Header, Main, Section, Article e Footer', 'Organize layout semantico completo.'],
      ['formularios', 'Formularios', 'Colete dados com UX e validacao nativa.'],
      ['inputs-avancados', 'Inputs e Validacao', 'Aplique tipos de campo e restricoes nativas.'],
      ['metadados-seo', 'Metadados e SEO Basico', 'Use title, description e meta tags com criterio.'],
      ['acessibilidade-basica', 'Acessibilidade Basica', 'Melhore navegacao por teclado e leitura assistiva.'],
      ['boas-praticas-html', 'Boas Praticas de Marcacao', 'Evite divizacao excessiva e padronize estrutura.'],
      ['revisao-projeto-html', 'Projeto Guiado HTML', 'Consolide o curso com uma pagina completa.']
    ])
  }),
  makeTrack({
    slug: 'css',
    title: 'CSS',
    tagline: 'Estilo, layout e responsividade.',
    category: 'Linguagem',
    difficulty: 'Iniciante',
    prerequisites: ['HTML basico'],
    estimatedHours: 26,
    icon: 'Palette',
    coverGradient: 'from-indigo-500/20 via-blue-500/10 to-transparent',
    officialDocs: 'https://developer.mozilla.org/docs/Web/CSS',
    intro: 'Curso completo de CSS com foco em layout real, legibilidade e padronizacao visual.',
    roadmap: ['Fundamentos', 'Box model', 'Layout', 'Responsividade', 'Interacao'],
    modules: buildModules('css', [
      ['seletores', 'Seletores e Cascata', 'Entenda especificidade sem gambiarra.'],
      ['sintaxe-heranca', 'Sintaxe, Heranca e Ordem', 'Controle prioridade de regras com previsibilidade.'],
      ['box-model', 'Box Model', 'Dimensoes previsiveis em todos os componentes.'],
      ['display', 'Display e Fluxo', 'Compreenda block, inline, inline-block e none.'],
      ['position', 'Position e Camadas', 'Trabalhe com relative, absolute, fixed e sticky.'],
      ['tipografia', 'Tipografia e Legibilidade', 'Defina hierarquia de texto para leitura confortavel.'],
      ['cores-contraste', 'Cores, Contraste e Tokens', 'Monte paleta consistente com bom contraste.'],
      ['flexbox', 'Flexbox', 'Alinhe componentes em um eixo com controle fino.'],
      ['grid', 'Grid Layout', 'Monte estrutura em colunas e areas com clareza.'],
      ['flex-grid', 'Flexbox e Grid na Pratica', 'Combine tecnicas para telas reais.'],
      ['responsividade', 'Responsividade', 'Adapte a experiencia para qualquer tela.'],
      ['pseudo-classes', 'Pseudo-classes', 'Crie estados de interacao como hover e focus.'],
      ['pseudo-elementos', 'Pseudo-elementos', 'Adicione detalhes visuais sem markup extra.'],
      ['transicoes', 'Transicoes', 'Aplique movimento sutil para feedback visual.'],
      ['animacoes', 'Animacoes Basicas', 'Construa animacoes simples sem poluicao visual.'],
      ['arquitetura-css', 'Organizacao e Arquitetura CSS', 'Estruture estilos para crescer sem caos.']
    ])
  }),
  makeTrack({
    slug: 'javascript',
    title: 'JavaScript',
    tagline: 'Interatividade e logica no navegador.',
    category: 'Linguagem',
    difficulty: 'Iniciante',
    prerequisites: ['HTML e CSS'],
    estimatedHours: 30,
    icon: 'Braces',
    coverGradient: 'from-amber-400/20 via-orange-400/10 to-transparent',
    officialDocs: 'https://developer.mozilla.org/docs/Web/JavaScript',
    intro: 'Curso completo de JavaScript do basico ao consumo de APIs com pratica guiada.',
    roadmap: ['Fundamentos', 'Estruturas de controle', 'Funcoes e dados', 'DOM', 'Assincronia'],
    modules: buildModules('javascript', [
      ['variaveis', 'Variaveis e Tipos', 'Base para qualquer script.'],
      ['operadores', 'Operadores', 'Use operadores aritmeticos, logicos e de comparacao.'],
      ['condicionais', 'Condicionais', 'Tome decisoes com if, else e switch.'],
      ['loops', 'Loops', 'Repita blocos com for, while e for...of.'],
      ['funcoes', 'Funcoes e Escopo', 'Organize regras de negocio.'],
      ['arrays', 'Arrays', 'Modele listas e transforme dados com metodos.'],
      ['objetos', 'Objetos', 'Represente entidades e propriedades com clareza.'],
      ['metodos-uteis', 'Metodos Mais Usados', 'Use map, filter, reduce, find e some.'],
      ['dom', 'DOM e Eventos', 'Conecte interface e comportamento.'],
      ['eventos-formulario', 'Eventos de Formulario', 'Capture input, submit e validacoes de usuario.'],
      ['modulos-js', 'Modulos JavaScript', 'Organize codigo em arquivos reutilizaveis.'],
      ['fetch', 'Fetch API', 'Consuma dados remotos de forma controlada.'],
      ['async-await', 'Async/Await', 'Trabalhe com assincronia de forma legivel.'],
      ['tratamento-erros', 'Tratamento de Erros', 'Use try/catch e mensagens de falha claras.'],
      ['manipulacao-ui', 'Manipulacao Pratica da Interface', 'Atualize elementos dinamicamente com padrao.'],
      ['projeto-js', 'Projeto Guiado JavaScript', 'Feche o curso com app interativo completo.']
    ])
  }),
  makeTrack({
    slug: 'typescript',
    title: 'TypeScript',
    tagline: 'Escalabilidade com seguranca de tipos.',
    category: 'Linguagem',
    difficulty: 'Intermediario',
    prerequisites: ['JavaScript moderno'],
    estimatedHours: 24,
    icon: 'ShieldCheck',
    coverGradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    officialDocs: 'https://www.typescriptlang.org/docs/',
    intro: 'Curso completo de TypeScript para modelagem robusta em projetos front-end.',
    roadmap: ['Tipos basicos', 'Modelagem', 'Funcoes', 'Generics', 'Uso com React'],
    modules: buildModules('typescript', [
      ['tipos', 'Tipos e Inferencia', 'Entenda como o compilador analisa seu codigo.'],
      ['tipos-basicos', 'Tipos Basicos', 'Use string, number, boolean, null e undefined.'],
      ['unions', 'Union Types', 'Represente estados e variacoes de dados.'],
      ['interfaces', 'Interfaces', 'Contratos claros entre camadas.'],
      ['types', 'Type Aliases', 'Modele estruturas complexas com aliases.'],
      ['arrays-tipados', 'Arrays Tipados', 'Controle colecoes com tipos consistentes.'],
      ['funcoes-tipadas', 'Funcoes Tipadas', 'Declare parametros e retorno com precisao.'],
      ['objetos-tipados', 'Tipagem em Objetos', 'Valide shape de dados de dominio.'],
      ['generics', 'Generics', 'Reuso forte com flexibilidade.'],
      ['narrowing', 'Narrowing', 'Refine tipos com guards e verificacoes.'],
      ['utility-types', 'Utility Types', 'Aplique Partial, Pick, Omit e Record.'],
      ['ts-react-props', 'TypeScript com Props React', 'Tipagem de componentes e eventos.'],
      ['ts-react-state', 'TypeScript com State React', 'Tipagem de estado e callbacks.'],
      ['projeto-ts', 'Projeto Guiado TypeScript', 'Construa modulo tipado de ponta a ponta.']
    ])
  }),
  makeTrack({
    slug: 'react',
    title: 'React',
    tagline: 'Componentizacao e estado para UI rica.',
    category: 'Framework',
    difficulty: 'Intermediario',
    prerequisites: ['JavaScript', 'TypeScript basico'],
    estimatedHours: 30,
    icon: 'Atom',
    coverGradient: 'from-sky-400/18 via-indigo-400/10 to-transparent',
    officialDocs: 'https://react.dev/',
    intro: 'Curso completo de React com foco em fluxo mental, composicao e escalabilidade.',
    roadmap: ['Fundamentos', 'Estado e eventos', 'Renderizacao', 'Hooks', 'Arquitetura'],
    modules: buildModules('react', [
      ['componentes', 'Componentes e Props', 'Separacao clara de responsabilidades.'],
      ['jsx', 'JSX na Pratica', 'Escreva UI declarativa com consistencia.'],
      ['renderizacao', 'Renderizacao React', 'Entenda ciclos de render e reconciliacao.'],
      ['state', 'State e Renderizacao', 'UI previsivel orientada a estado.'],
      ['eventos', 'Eventos', 'Capture interacoes de usuario com handlers claros.'],
      ['condicional', 'Renderizacao Condicional', 'Exiba blocos conforme estado e contexto.'],
      ['listas', 'Listas e Keys', 'Renderize colecoes sem problemas de identidade.'],
      ['hooks', 'Hooks Fundamentais', 'Reutilize logica sem repetir codigo.'],
      ['useeffect', 'useEffect', 'Sincronize efeitos externos de forma segura.'],
      ['usememo', 'useMemo', 'Otimize calculos em pontos de custo real.'],
      ['usestate', 'useState Avancado', 'Atualizacoes funcionais e padroes de estado.'],
      ['composicao', 'Composicao de Componentes', 'Monte interfaces escalaveis por blocos.'],
      ['organizacao', 'Organizacao de Projeto React', 'Estruture pastas e responsabilidades.'],
      ['projeto-react', 'Projeto Guiado React', 'Desenvolva uma tela completa de estudo.']
    ])
  }),
  makeTrack({
    slug: 'nextjs',
    title: 'Next.js',
    tagline: 'Framework full-stack com App Router.',
    category: 'Framework',
    difficulty: 'Intermediario',
    prerequisites: ['React'],
    estimatedHours: 28,
    icon: 'Rocket',
    coverGradient: 'from-slate-300/20 via-zinc-400/10 to-transparent',
    officialDocs: 'https://nextjs.org/docs',
    intro: 'Curso completo de Next.js focado em App Router, dados e organizacao de aplicacao real.',
    roadmap: ['Estrutura de app', 'Rendering', 'Rotas e metadata', 'Data fetching', 'Boas praticas'],
    modules: buildModules('nextjs', [
      ['rotas', 'Rotas e Layouts', 'Estruture a aplicacao para crescer com clareza.'],
      ['app-router', 'App Router', 'Modele paginas e segmentos de rota.'],
      ['layouts', 'Layouts Compartilhados', 'Reaproveite estrutura entre rotas relacionadas.'],
      ['server-client', 'Server e Client Components', 'Performance e interatividade no equilibrio certo.'],
      ['roteamento-dinamico', 'Roteamento Dinamico', 'Use segmentos dinamicos e params com seguranca.'],
      ['loading', 'Loading UI', 'Melhore percepcao de carregamento por rota.'],
      ['error', 'Error UI', 'Trate falhas sem quebrar toda a experiencia.'],
      ['metadata', 'Metadata', 'Otimize titulo, descricao e SEO por pagina.'],
      ['fetching', 'Data Fetching', 'Dados com cache e revalidacao.'],
      ['cache-revalidate', 'Cache e Revalidate', 'Defina estrategia de frescor de dados.'],
      ['actions', 'Server Actions Basicas', 'Execute mutacoes no servidor com simplicidade.'],
      ['organizacao-app', 'Organizacao da App', 'Padronize estrutura de componentes e dominio.'],
      ['boas-praticas-next', 'Boas Praticas Next.js', 'Evite anti-patterns comuns no App Router.'],
      ['projeto-next', 'Projeto Guiado Next.js', 'Feche o curso com aplicacao funcional completa.']
    ])
  }),
  makeTrack({
    slug: 'vue',
    title: 'Vue',
    tagline: 'Reatividade com curva de entrada suave.',
    category: 'Framework',
    difficulty: 'Intermediario',
    prerequisites: ['HTML', 'JavaScript'],
    estimatedHours: 14,
    icon: 'Layers',
    coverGradient: 'from-indigo-400/18 via-sky-400/10 to-transparent',
    officialDocs: 'https://vuejs.org/guide/introduction.html',
    intro: 'Trilha expandida de Vue com fundamentos, componentes e fluxo de dados.',
    roadmap: ['Fundamentos', 'Componentes', 'Estado', 'Roteamento'],
    modules: buildModules('vue', [
      ['reatividade', 'Reatividade', 'Atualize interface de forma declarativa.'],
      ['template', 'Template Syntax', 'Use diretivas e binding com clareza.'],
      ['componentes', 'Componentes Vue', 'Separe UI em blocos reutilizaveis.'],
      ['props-events', 'Props e Events', 'Comunique componentes pai e filho.'],
      ['computed-watch', 'Computed e Watch', 'Derive dados e observe mudancas.'],
      ['sfc', 'SFC e Componentes', 'Estruture UI com arquivos unicos.'],
      ['state', 'Estado e Store Basica', 'Organize dados compartilhados na app.'],
      ['projeto-vue', 'Projeto Guiado Vue', 'Consolide conhecimento em interface completa.']
    ])
  }),
  makeTrack({
    slug: 'angular',
    title: 'Angular',
    tagline: 'Arquitetura opinativa para apps robustos.',
    category: 'Framework',
    difficulty: 'Avancado',
    prerequisites: ['TypeScript'],
    estimatedHours: 16,
    icon: 'Workflow',
    coverGradient: 'from-rose-400/20 via-red-500/10 to-transparent',
    officialDocs: 'https://angular.dev/overview',
    intro: 'Trilha expandida de Angular com foco em arquitetura e fluxo de dados robusto.',
    roadmap: ['Fundamentos', 'Componentes', 'Servicos', 'Roteamento'],
    modules: buildModules('angular', [
      ['arquitetura', 'Arquitetura Angular', 'Organizacao por dominio e DI.'],
      ['componentes', 'Componentes e Templates', 'Estruture views com padrao.'],
      ['binding', 'Binding e Servicos', 'Fluxo de dados padronizado.'],
      ['lifecycle', 'Ciclo de Vida', 'Entenda hooks de componente no Angular.'],
      ['forms', 'Forms', 'Trabalhe com formularios template-driven e reativos.'],
      ['http', 'Http Client', 'Consuma APIs e trate estados de requisicao.'],
      ['routing', 'Routing Angular', 'Modele navegacao entre telas da app.'],
      ['projeto-angular', 'Projeto Guiado Angular', 'Aplique arquitetura em app funcional.']
    ])
  }),
  makeTrack({
    slug: 'tailwind',
    title: 'Tailwind CSS',
    tagline: 'Design system utilitario para produtividade.',
    category: 'Ferramenta',
    difficulty: 'Iniciante',
    prerequisites: ['CSS basico'],
    estimatedHours: 18,
    icon: 'Paintbrush',
    coverGradient: 'from-blue-400/20 via-indigo-400/10 to-transparent',
    officialDocs: 'https://tailwindcss.com/docs',
    intro: 'Curso completo de Tailwind CSS para construir interfaces consistentes e escalaveis.',
    roadmap: ['Fundamentos', 'Layout', 'Responsividade', 'Composicao'],
    modules: buildModules('tailwind', [
      ['utilities', 'Utility Classes', 'Estilo rapido com consistencia.'],
      ['spacing', 'Spacing e Escala', 'Padronize espacamentos de forma previsivel.'],
      ['typography', 'Tipografia', 'Monte hierarquia textual com utilitarios.'],
      ['flex', 'Flex Utilities', 'Organize elementos em eixo unico.'],
      ['grid', 'Grid Utilities', 'Crie layouts de colunas e areas.'],
      ['responsive', 'Responsividade', 'Ajustes por breakpoint e estado.'],
      ['states', 'Estados e Variantes', 'Use hover, focus e active com consistencia.'],
      ['dark-mode', 'Tema Claro/Escuro', 'Controle paleta por classe e tokens.'],
      ['composicao', 'Composicao', 'Transforme utilitarios em componentes.'],
      ['organizacao', 'Organizacao de Classes', 'Evite bagunca em componentes longos.'],
      ['tokens-tailwind', 'Tokens e Theme Config', 'Padronize cor, sombra e tipografia.'],
      ['projeto-tailwind', 'Projeto Guiado Tailwind', 'Construa uma interface didatica completa.']
    ])
  }),
  makeTrack({
    slug: 'git-github',
    title: 'Git e GitHub',
    tagline: 'Versionamento e colaboracao de time.',
    category: 'Ferramenta',
    difficulty: 'Iniciante',
    prerequisites: ['Nenhum'],
    estimatedHours: 14,
    icon: 'GitBranch',
    coverGradient: 'from-fuchsia-400/20 via-pink-500/10 to-transparent',
    officialDocs: 'https://docs.github.com/en/get-started',
    intro: 'Curso completo de Git e GitHub para fluxo profissional de desenvolvimento.',
    roadmap: ['Fundamentos Git', 'Fluxo de branch', 'Colaboracao no GitHub'],
    modules: buildModules('git-github', [
      ['fundamentos', 'Fundamentos', 'Registre historico com clareza.'],
      ['init-add-commit', 'Init, Add e Commit', 'Crie historico limpo desde o inicio.'],
      ['log-diff', 'Log e Diff', 'Inspecione evolucao do codigo com seguranca.'],
      ['branch', 'Branches', 'Isole features e reduza risco de conflito.'],
      ['merge', 'Merge', 'Integre mudancas com criterio tecnico.'],
      ['pull-push', 'Pull e Push', 'Sincronize repositorio local e remoto.'],
      ['pr', 'Branches e PRs', 'Colabore com revisao tecnica.'],
      ['revisao-pr', 'Revisao de Pull Request', 'Comente, aprove e solicite ajustes com clareza.'],
      ['conflitos', 'Resolucao de Conflitos', 'Resolva divergencias sem perder alteracoes.'],
      ['boas-praticas-git', 'Boas Praticas de Versionamento', 'Padronize mensagens e fluxo de equipe.']
    ])
  }),
  makeTrack({
    slug: 'fundamentos-web',
    title: 'Fundamentos de Web',
    tagline: 'Base tecnica para decisoes melhores.',
    category: 'Fundamentos',
    difficulty: 'Iniciante',
    prerequisites: ['Nenhum'],
    estimatedHours: 16,
    icon: 'Globe2',
    coverGradient: 'from-violet-400/20 via-indigo-500/10 to-transparent',
    officialDocs: 'https://developer.mozilla.org/docs/Learn',
    intro: 'Curso completo de fundamentos da web para base solida em qualquer stack front-end.',
    roadmap: ['Internet e HTTP', 'Navegador', 'Performance', 'Acessibilidade'],
    modules: buildModules('fundamentos-web', [
      ['mecanica', 'Como a Web Funciona', 'Do DNS ao rendering da pagina.'],
      ['http', 'HTTP na Pratica', 'Entenda metodos, status e cabecalhos basicos.'],
      ['dns', 'DNS e Entrega de Conteudo', 'Compreenda resolucao de dominio e latencia.'],
      ['browser-render', 'Renderizacao no Navegador', 'DOM, CSSOM, layout e paint de forma didatica.'],
      ['network-devtools', 'DevTools de Rede', 'Diagnostique carregamento e gargalos.'],
      ['performance', 'Performance e Acessibilidade', 'Qualidade tecnica e experiencia.'],
      ['core-web-vitals', 'Core Web Vitals', 'LCP, CLS e INP para experiencia real.'],
      ['acessibilidade', 'Acessibilidade Web', 'Construa interfaces inclusivas desde a base.'],
      ['seguranca-basica', 'Seguranca Basica na Web', 'Noções de headers e protecoes iniciais.'],
      ['projeto-fundamentos', 'Projeto Integrador de Fundamentos', 'Aplique conceitos em analise tecnica guiada.']
    ])
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
