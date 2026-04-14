import { CourseModule, TechTrack } from '@/types/course';

export type TrackDidacticContent = {
  overview: string;
  servesFor: string;
  ecosystemRole: string;
  mindset: string;
  keyHighlights: string[];
  bestPractices: string[];
  commonMistakes: string[];
};

export type ModuleDidacticContent = {
  objective: string;
  explanation: string;
  deepDive: string;
  simpleExample: string;
  commentedExample: string;
  practicalApplication: string;
  commonMistakes: string[];
  importantTips: string[];
  exercise: string;
  summary: string;
  nextStep: string;
  officialReferenceLabel: string;
};

export const trackDidacticContent: Record<string, TrackDidacticContent> = {
  html: {
    overview:
      'HTML organiza o conteudo da pagina. O foco da trilha e estruturar informacao com semantica e clareza antes de aplicar estilo e logica.',
    servesFor: 'Estruturar conteudo, formularios e navegacao de forma semantica.',
    ecosystemRole: 'Camada base do Front-End, onde CSS estiliza e JavaScript adiciona comportamento.',
    mindset: 'Priorize significado e leitura do conteudo antes da aparencia.',
    keyHighlights: ['Estrutura do documento', 'Semantica', 'Formularios', 'Acessibilidade basica'],
    bestPractices: ['Use tags semanticas', 'Mantenha hierarquia de titulos', 'Associe label e input'],
    commonMistakes: ['Div para tudo', 'Pular niveis de heading', 'Esquecer atributo alt em imagens']
  },
  css: {
    overview:
      'CSS transforma estrutura em interface legivel. Aqui voce trabalha layout, espacamento, responsividade e estados visuais com padrao profissional.',
    servesFor: 'Definir estilo, hierarquia visual e experiencia de leitura.',
    ecosystemRole: 'Camada visual que materializa design e usabilidade.',
    mindset: 'Pense em sistema visual: repeticao de padrao, consistencia e contraste adequado.',
    keyHighlights: ['Cascata e especificidade', 'Box model', 'Flex e Grid', 'Responsividade'],
    bestPractices: ['Defina escala de espacamento', 'Padronize tipografia', 'Crie estados sutis e claros'],
    commonMistakes: ['Uso excessivo de !important', 'Layouts sem testes mobile', 'Hover agressivo']
  },
  javascript: {
    overview:
      'JavaScript traz interatividade para a interface. A trilha cobre fundamentos, DOM, eventos e consumo de API com pratica guiada.',
    servesFor: 'Criar regras de negocio, interacoes e integracao de dados.',
    ecosystemRole: 'Camada de comportamento do Front-End.',
    mindset: 'Resolva problemas em pequenos blocos e valide cada etapa.',
    keyHighlights: ['Tipos e operadores', 'Funcoes e colecoes', 'DOM e eventos', 'Assincronia'],
    bestPractices: ['Use nomes claros', 'Prefira funcoes pequenas', 'Trate erros explicitamente'],
    commonMistakes: ['Comparacao frouxa', 'Escopo confuso', 'Sem tratamento de erro']
  },
  typescript: {
    overview:
      'TypeScript adiciona contratos de tipo ao JavaScript para reduzir erros em runtime e dar mais seguranca em refatoracao.',
    servesFor: 'Tipar dados, funcoes e componentes com previsibilidade.',
    ecosystemRole: 'Camada de confiabilidade para projetos React e Next.js.',
    mindset: 'Use tipos para comunicar intencao, nao para complicar o codigo.',
    keyHighlights: ['Tipos basicos e unions', 'Interfaces', 'Generics', 'Narrowing'],
    bestPractices: ['Tipar fronteiras da aplicacao', 'Evitar any sem motivo', 'Aproveitar inferencia'],
    commonMistakes: ['Cast forcado sem validacao', 'Tipos duplicados', 'Abstracao de tipo prematura']
  },
  react: {
    overview:
      'React organiza a interface em componentes reutilizaveis. O objetivo da trilha e desenvolver fluidez no fluxo mental de dados e renderizacao.',
    servesFor: 'Construir interfaces dinamicas orientadas a estado.',
    ecosystemRole: 'Biblioteca central de UI em stacks modernas de Front-End.',
    mindset: 'Componentes pequenos, estado previsivel e composicao clara.',
    keyHighlights: ['JSX e componentes', 'Props e state', 'Hooks principais', 'Composicao'],
    bestPractices: ['Estado perto de quem usa', 'Responsabilidade unica por componente', 'Render limpo'],
    commonMistakes: ['Estado duplicado', 'Efeito para logica de render', 'Componente gigante']
  },
  nextjs: {
    overview:
      'Next.js oferece estrutura completa para apps React, com rotas, renderizacao server/client e data fetching em um fluxo organizado.',
    servesFor: 'Entregar aplicacoes web completas com boa arquitetura e performance.',
    ecosystemRole: 'Framework que conecta front-end, renderizacao e camada de dados.',
    mindset: 'Escolha server por padrao e use client quando houver interacao real.',
    keyHighlights: ['App Router', 'Layouts', 'Server/Client Components', 'Data Fetching'],
    bestPractices: ['Separar responsabilidades', 'Usar loading/error por rota', 'Metadata em paginas-chave'],
    commonMistakes: ['Marcar tudo como client', 'Fetch duplicado', 'Estrutura de pasta sem padrao']
  },
  tailwind: {
    overview:
      'Tailwind acelera desenvolvimento visual com classes utilitarias. A trilha ensina produtividade sem bagunca visual.',
    servesFor: 'Aplicar estilo com padrao, consistencia e velocidade.',
    ecosystemRole: 'Ferramenta de design system utilitario no ciclo front-end.',
    mindset: 'Compor UI por padroes reutilizaveis, nao por improviso.',
    keyHighlights: ['Utilities', 'Layout responsivo', 'Estados', 'Composicao de componentes'],
    bestPractices: ['Extrair blocos repetidos', 'Usar escala consistente', 'Padronizar variantes'],
    commonMistakes: ['Classes longas sem padrao', 'Variacao excessiva', 'Sem camada de componentes base']
  },
  'git-github': {
    overview:
      'Git e GitHub organizam o fluxo de trabalho em equipe. A trilha foca no dia a dia: commit, branch, PR e revisao.',
    servesFor: 'Versionar codigo com historico claro e colaboracao segura.',
    ecosystemRole: 'Base operacional de times e projetos Front-End.',
    mindset: 'Commits pequenos, contexto claro e revisao constante.',
    keyHighlights: ['Comandos essenciais', 'Branch e merge', 'PR e revisao'],
    bestPractices: ['Mensagem de commit objetiva', 'Branch por tarefa', 'Checklist de PR'],
    commonMistakes: ['Commit gigante', 'Merge sem teste', 'Push direto na principal']
  },
  'fundamentos-web': {
    overview:
      'Fundamentos da Web consolidam entendimento de rede, navegador, performance e acessibilidade para melhorar decisoes em qualquer stack.',
    servesFor: 'Criar base tecnica para diagnosticar e projetar melhor.',
    ecosystemRole: 'Trilha transversal que sustenta HTML, CSS, JS e frameworks.',
    mindset: 'Entender o por que antes de escolher o como.',
    keyHighlights: ['HTTP e DNS', 'Rendering no browser', 'Performance', 'Acessibilidade'],
    bestPractices: ['Medir antes de otimizar', 'Priorizar conteudo critico', 'Revisar acessibilidade continuamente'],
    commonMistakes: ['Ignorar gargalo de rede', 'Desconsiderar mobile', 'Acessibilidade como etapa final']
  }
};

const moduleProfiles = {
  html: {
    simpleExample: '<main>\n  <h1>Trilha HTML</h1>\n  <p>Estrutura clara para leitura.</p>\n</main>',
    commentedExample: '<form>\n  <!-- label associado ao input -->\n  <label for="email">Email</label>\n  <input id="email" type="email" required>\n</form>',
    mistakes: ['Pular semantica', 'Heading fora de ordem', 'Input sem label'],
    tips: ['Valide estrutura no navegador.', 'Revise acessibilidade a cada modulo.']
  },
  css: {
    simpleExample: '.card {\n  padding: 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.75rem;\n}',
    commentedExample: '.layout {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 1.5rem;\n} // desktop\n@media (max-width: 960px) { .layout { grid-template-columns: 1fr; } }',
    mistakes: ['Uso excessivo de !important', 'Sem teste mobile', 'Contraste baixo'],
    tips: ['Trabalhe com escala de espacamento.', 'Use hover e focus de forma sutil.']
  },
  javascript: {
    simpleExample: 'const items = [1, 2, 3];\nconst doubled = items.map((n) => n * 2);\nconsole.log(doubled);',
    commentedExample: 'button?.addEventListener("click", () => {\n  // atualiza texto da tela\n  output.textContent = "Acao executada";\n});',
    mistakes: ['Comparacao frouxa', 'Escopo mal definido', 'Sem tratamento de erro em fetch'],
    tips: ['Quebre problema em funcoes pequenas.', 'Logue estados importantes durante estudo.']
  },
  typescript: {
    simpleExample: 'type Lesson = { title: string; duration: number };\nconst lesson: Lesson = { title: "Types", duration: 25 };',
    commentedExample: 'function first<T>(list: T[]): T | undefined {\n  // preserva tipo da entrada\n  return list[0];\n}',
    mistakes: ['Any sem necessidade', 'Cast sem validacao', 'Tipos duplicados'],
    tips: ['Tipar fronteiras primeiro.', 'Aproveite inferencia quando suficiente.']
  },
  react: {
    simpleExample: 'const [open, setOpen] = useState(false);\nreturn <button onClick={() => setOpen(!open)}>Alternar</button>;',
    commentedExample: 'useEffect(() => {\n  // sincroniza com efeito externo\n  document.title = "Modulo React";\n}, []);',
    mistakes: ['Estado duplicado', 'Efeito sem dependencia correta', 'Componente grande demais'],
    tips: ['Componentes pequenos e coesos.', 'Derive estado quando possivel.']
  },
  nextjs: {
    simpleExample: 'export default function Page() {\n  return <h1>Trilha Next.js</h1>;\n}',
    commentedExample: 'export const metadata = { title: "Modulo" };\n// adiciona contexto de SEO da rota',
    mistakes: ['Use client sem necessidade', 'Fetch duplicado', 'Rotas desorganizadas'],
    tips: ['Server first.', 'Separe dados, UI e interacao por responsabilidade.']
  },
  tailwind: {
    simpleExample: '<button class="rounded-xl bg-blue-500 px-4 py-2 text-white">Continuar</button>',
    commentedExample: '<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">\n  <!-- responsivo por breakpoint -->\n</div>',
    mistakes: ['Classes sem padrao', 'Sem escala consistente', 'Variantes em excesso'],
    tips: ['Extraia classes repetidas.', 'Padronize tokens no theme.']
  },
  'git-github': {
    simpleExample: 'git checkout -b feat/modulo-js\ngit add .\ngit commit -m "feat: adiciona modulo de arrays"',
    commentedExample: 'git pull origin main\n# atualiza branch local antes de publicar\ngit push origin feat/modulo-js',
    mistakes: ['Commit gigante', 'Sem revisar diff', 'Push direto na principal'],
    tips: ['Commit pequeno e claro.', 'Revise status e diff antes do commit.']
  },
  'fundamentos-web': {
    simpleExample: 'URL -> DNS -> HTTP request -> HTML/CSS/JS -> Render no browser',
    commentedExample: 'LCP: mede quando o maior elemento visivel carrega.\n// ajuda a priorizar otimizacoes reais',
    mistakes: ['Nao medir performance', 'Ignorar acessibilidade', 'Desconsiderar gargalo de rede'],
    tips: ['Use DevTools com frequencia.', 'Otimize primeiro o caminho critico.']
  }
} as const;

const resolveTrackProfile = (module: CourseModule) => {
  const slug = module.id.split('-').slice(0, -1).join('-');
  return moduleProfiles[slug as keyof typeof moduleProfiles] ?? moduleProfiles.javascript;
};

export const moduleDidacticContent: Record<string, ModuleDidacticContent> = {
  'html-estrutura': {
    objective: 'Montar um documento HTML valido, legivel e pronto para evolucao.',
    explanation: 'A estrutura base define como o navegador interpreta seu arquivo e organiza o conteudo exibido.',
    deepDive: 'Quando head e body estao organizados, fica mais simples manter metadados, SEO basico e conteudo visual sem confusao.',
    simpleExample: '<!doctype html>\n<html lang="pt-BR">\n  <head><meta charset="UTF-8"></head>\n  <body><h1>Pagina</h1></body>\n</html>',
    commentedExample: '<main>\n  <!-- conteudo principal da pagina -->\n  <section>Introducao</section>\n</main>',
    practicalApplication: 'Crie uma pagina de aula com cabecalho, conteudo central e rodape.',
    commonMistakes: ['Esquecer doctype', 'Nao definir lang', 'Colocar conteudo visual no head'],
    importantTips: ['Comece de um template base padrao.', 'Valide estrutura no navegador.'],
    exercise: 'Monte uma pagina com titulo principal, dois subtitulos e uma secao de links.',
    summary: 'Estrutura correta economiza retrabalho e melhora qualidade geral da pagina.',
    nextStep: 'Avancar para semantica e hierarquia textual.',
    officialReferenceLabel: 'Referencia oficial de estrutura HTML'
  }
};

export const getGeneratedModuleDidacticContent = (module: CourseModule): ModuleDidacticContent => {
  const profile = resolveTrackProfile(module);

  return {
    objective:
      module.content.objective ??
      `Dominar ${module.title.toLowerCase()} com entendimento tecnico e aplicacao pratica em contexto real.`,
    explanation:
      module.content.simplifiedExplanation ??
      `${module.title} e uma parte importante da trilha. Primeiro compreenda a ideia central, depois pratique em um caso concreto.`,
    deepDive:
      module.content.deepDive ??
      `Neste modulo, o foco e entender quando usar ${module.title.toLowerCase()}, como evitar erros comuns e como aplicar o conceito no fluxo de desenvolvimento.`,
    simpleExample: module.content.simpleExample ?? profile.simpleExample,
    commentedExample: module.content.commentedExample ?? profile.commentedExample,
    practicalApplication:
      module.content.practicalExample ??
      `Aplique ${module.title.toLowerCase()} em uma tela pequena da plataforma e compare o resultado com a versao anterior.`,
    commonMistakes: module.content.commonMistakes?.length ? module.content.commonMistakes : [...profile.mistakes],
    importantTips: module.content.importantTips?.length ? module.content.importantTips : [...profile.tips],
    exercise:
      module.content.miniExercise ??
      `Desafio: crie um exemplo proprio sobre ${module.title.toLowerCase()}, documente suas escolhas e valide o comportamento final.`,
    summary:
      module.content.quickSummary ??
      `${module.title} fortalece sua base para os proximos modulos. Revisar e praticar este bloco acelera seu progresso.`,
    nextStep:
      module.content.nextStep ??
      'Siga para o proximo modulo e reutilize este conceito em um exemplo mais completo.',
    officialReferenceLabel: 'Referencia oficial complementar'
  };
};

export const getTrackDidacticContent = (track: TechTrack): TrackDidacticContent => {
  const found = trackDidacticContent[track.slug];
  if (found) return found;

  return {
    overview: track.intro,
    servesFor: track.servesFor ?? `Entender e aplicar ${track.title} em projetos reais.`,
    ecosystemRole: track.ecosystemRole ?? `${track.title} compoe o ecossistema Front-End de forma complementar.`,
    mindset: track.mindset ?? 'Estude por modulo, pratique e revise continuamente.',
    keyHighlights: track.keyHighlights ?? ['Conceitos centrais', 'Exemplos praticos', 'Aplicacao em projeto'],
    bestPractices: track.bestPractices ?? ['Estude com regularidade', 'Pratique depois de cada modulo', 'Revise erros comuns'],
    commonMistakes: track.commonMistakes ?? ['Pular fundamentos', 'Nao praticar', 'Ignorar revisao']
  };
};
