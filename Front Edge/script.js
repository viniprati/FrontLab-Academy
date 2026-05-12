
const STORAGE_KEYS = {
  completedModules: 'frontedge:completed-modules',
  ideState: 'frontedge:ide-state'
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function mkStarter(title, color, log) {
  return {
    html: `<main><h1>${title}</h1><p>Prática da Front-Edge Academy.</p></main>`,
    css: `body{font-family:Inter,sans-serif;padding:20px} h1{color:${color}}`,
    js: `console.log('${log}')`
  }
}

const tracks = [
  {
    name: 'HTML',
    level: 'iniciante',
    levelLabel: 'Iniciante',
    description: 'Aprenda estrutura de páginas, HTML semântico, formulários, SEO e acessibilidade.',
    estimatedHours: '22h',
    technologies: ['HTML', 'Semântica', 'Acessibilidade', 'SEO'],
    status: 'nao-iniciado',
    accent: '#F97316',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    modules: [
      { title: 'Estrutura base de documento', objective: 'Entender a base de qualquer página HTML.', explanation: 'Você vai montar a estrutura mínima e os metadados essenciais.', example: '<!doctype html><html lang="pt-BR"><head>...</head><body>...</body></html>', exercise: 'Criar estrutura base de uma landing page.', challenge: 'Refatorar uma página com semântica ruim.', commonErrors: 'Pular hierarquia de headings e esquecer metadados.', projectUse: 'Página institucional acessível.', docs: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML', starter: mkStarter('Estrutura HTML', '#f97316', 'HTML estrutura') },
      { title: 'Semântica e landmarks', objective: 'Criar páginas navegáveis por pessoas e leitores de tela.', explanation: 'Use tags semânticas para estruturar conteúdo e navegação.', example: '<header><nav>...</nav></header><main>...</main><footer>...</footer>', exercise: 'Corrigir heading tree e landmarks.', challenge: 'Transformar um layout com divs em estrutura semântica.', commonErrors: 'Usar div para tudo e perder contexto.', projectUse: 'Blog com leitura confortável e navegação clara.', docs: 'https://developer.mozilla.org/pt-BR/docs/Glossary/Semantics', starter: mkStarter('Semântica HTML', '#ea580c', 'HTML semântico') },
      { title: 'Formulários completos', objective: 'Criar formulários funcionais e acessíveis.', explanation: 'Você vai conectar inputs, labels, validação nativa e mensagens claras.', example: '<label for="email">Email</label><input id="email" type="email" required>', exercise: 'Criar formulário de contato completo.', challenge: 'Adicionar validações e feedback de erro/sucesso.', commonErrors: 'Inputs sem label e sem regras mínimas.', projectUse: 'Cadastro e contato em produto real.', docs: 'https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Extensions/Forms', starter: mkStarter('Formulários HTML', '#fb923c', 'Formulários') }
    ]
  },
  {
    name: 'CSS',
    level: 'basico',
    levelLabel: 'Básico',
    description: 'Domine layout, tipografia, responsividade e microinterações.',
    estimatedHours: '26h',
    technologies: ['CSS', 'Flexbox', 'Grid', 'Responsividade'],
    status: 'nao-iniciado',
    accent: '#3B82F6',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    modules: [
      { title: 'Cascata e especificidade', objective: 'Controlar conflitos de estilo sem gambiarra.', explanation: 'Entenda como o navegador resolve regras CSS.', example: '.card .title { color: #fff; }', exercise: 'Refatorar CSS duplicado.', challenge: 'Resolver conflitos visuais sem !important.', commonErrors: 'Excesso de seletores e baixa previsibilidade.', projectUse: 'Design system consistente.', docs: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS', starter: mkStarter('Seletores CSS', '#3b82f6', 'Seletores') },
      { title: 'Flexbox e Grid', objective: 'Montar layouts reais com previsibilidade.', explanation: 'Combine grid macro com flex micro para compor telas.', example: '.layout{display:grid;grid-template-columns:280px 1fr}', exercise: 'Construir dashboard responsivo.', challenge: 'Recriar layout complexo sem quebrar mobile.', commonErrors: 'Misturar regras sem estratégia.', projectUse: 'Páginas de produto e painéis.', docs: 'https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/CSS_layout', starter: mkStarter('Layout moderno', '#2563eb', 'Layout') },
      { title: 'Responsividade e estados', objective: 'Manter experiência consistente em qualquer tela.', explanation: 'Aplicar abordagem mobile-first e estados de interação.', example: '@media (min-width: 768px) { ... }', exercise: 'Eliminar overflow horizontal em uma tela.', challenge: 'Criar componentes com estados hover/focus/disabled.', commonErrors: 'Desktop-first sem testes em telas menores.', projectUse: 'UI pronta para produção.', docs: 'https://web.dev/responsive-web-design-basics/', starter: mkStarter('Responsividade', '#60a5fa', 'Responsivo') }
    ]
  },
  {
    name: 'JavaScript',
    level: 'intermediario',
    levelLabel: 'Intermediário',
    description: 'Domine lógica, DOM, eventos, APIs e persistência local.',
    estimatedHours: '32h',
    technologies: ['JavaScript', 'DOM', 'Eventos', 'Fetch API'],
    status: 'nao-iniciado',
    accent: '#FACC15',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    modules: [
      { title: 'Lógica e funções', objective: 'Resolver problemas com clareza e previsibilidade.', explanation: 'Estruture decisões e reutilize funções pequenas.', example: 'const isAdult = (age) => age >= 18', exercise: 'Criar verificador de regras de negócio.', challenge: 'Refatorar bloco condicional complexo.', commonErrors: 'Funções gigantes e sem responsabilidade única.', projectUse: 'Regras de produto no front-end.', docs: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript', starter: mkStarter('Lógica JS', '#facc15', 'Lógica') },
      { title: 'DOM e eventos', objective: 'Criar interfaces interativas e robustas.', explanation: 'Aprenda a renderizar, ouvir eventos e manter estado visual.', example: "button.addEventListener('click', onClick)", exercise: 'Criar lista com adição e remoção dinâmica.', challenge: 'Montar tabs acessíveis com teclado.', commonErrors: 'Manipulação excessiva sem abstração.', projectUse: 'Componentes de interação em qualquer app.', docs: 'https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model', starter: mkStarter('DOM e eventos', '#eab308', 'DOM') },
      { title: 'Fetch e LocalStorage', objective: 'Trabalhar com dados externos e persistência local.', explanation: 'Implemente loading, erro e sincronização de interface.', example: 'const data = await fetch(url).then(r => r.json())', exercise: 'Consumir API e persistir preferências.', challenge: 'Criar fluxo com retry e estado vazio.', commonErrors: 'Não tratar erros de rede.', projectUse: 'Apps de catálogo, filtros e favoritos.', docs: 'https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API', starter: mkStarter('Fetch + LocalStorage', '#f59e0b', 'Fetch') }
    ]
  },
  {
    name: 'Git e GitHub',
    level: 'iniciante',
    levelLabel: 'Iniciante',
    description: 'Versionamento, colaboração e fluxo de entrega com pull request.',
    estimatedHours: '12h',
    technologies: ['Git', 'GitHub', 'Pull Request'],
    status: 'nao-iniciado',
    accent: '#818CF8',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    modules: [
      { title: 'Fundamentos de versionamento', objective: 'Versionar com histórico limpo.', explanation: 'Comandos essenciais para o dia a dia.', example: 'git add . && git commit -m "feat: ..."', exercise: 'Criar histórico semântico.', challenge: 'Resolver conflito de merge em branch de feature.', commonErrors: 'Commits genéricos e longos.', projectUse: 'Fluxo de squad.', docs: 'https://git-scm.com/docs', starter: mkStarter('Git base', '#818cf8', 'Git') },
      { title: 'Pull Request e revisão', objective: 'Colaborar com qualidade técnica.', explanation: 'Abra PR com checklist e comunicação clara.', example: 'PR com contexto, evidências e checklist.', exercise: 'Abrir PR com template de revisão.', challenge: 'Aplicar feedback sem quebrar feature.', commonErrors: 'PR sem contexto de negócio.', projectUse: 'Entrega profissional em equipe.', docs: 'https://docs.github.com/pt/pull-requests', starter: mkStarter('PR e Review', '#6366f1', 'PR') }
    ]
  },
  {
    name: 'Tailwind CSS',
    level: 'basico',
    levelLabel: 'Básico',
    description: 'Construção rápida de UI com utilitários e padrão visual consistente.',
    estimatedHours: '14h',
    technologies: ['Tailwind', 'UI', 'Componentes'],
    status: 'nao-iniciado',
    accent: '#22D3EE',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    modules: [
      { title: 'Fundamentos do Tailwind', objective: 'Entender classes utilitárias e composição.', explanation: 'Organize layout e estados com classes pequenas.', example: 'class="rounded-lg border px-4 py-2"', exercise: 'Converter card CSS tradicional para Tailwind.', challenge: 'Criar seção hero responsiva.', commonErrors: 'Acoplamento de classes sem padrão.', projectUse: 'Design delivery ágil.', docs: 'https://tailwindcss.com/docs', starter: mkStarter('Tailwind base', '#22d3ee', 'Tailwind') },
      { title: 'Componentização visual', objective: 'Padronizar componentes reutilizáveis.', explanation: 'Use convenções para manter legibilidade e escala.', example: 'botão primário, secundário e ghost.', exercise: 'Montar biblioteca de botões e cards.', challenge: 'Criar página inteira com tokens consistentes.', commonErrors: 'Estilos duplicados por página.', projectUse: 'Produto consistente em escala.', docs: 'https://tailwindcss.com/docs/reusing-styles', starter: mkStarter('Tailwind componentes', '#06b6d4', 'Tailwind comp') }
    ]
  },
  {
    name: 'React',
    level: 'intermediario',
    levelLabel: 'Intermediário',
    description: 'Componentes, estado, props e integração de dados em aplicações reais.',
    estimatedHours: '38h',
    technologies: ['React', 'Componentes', 'Estado', 'Hooks'],
    status: 'nao-iniciado',
    accent: '#7B5CFF',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    modules: [
      { title: 'Componentes e props', objective: 'Modelar interfaces em blocos reutilizáveis.', explanation: 'Quebre telas em componentes pequenos com props claras.', example: 'function Card({ title }) { ... }', exercise: 'Refatorar landing em componentes.', challenge: 'Criar composição com variações de card.', commonErrors: 'Componentes grandes e pouco reutilizáveis.', projectUse: 'Escalabilidade de front-end.', docs: 'https://react.dev/learn', starter: mkStarter('React componentes', '#7b5cff', 'React') },
      { title: 'Estado e efeitos', objective: 'Gerenciar dados e efeitos colaterais com segurança.', explanation: 'Use hooks para manter UI e dados sincronizados.', example: 'const [items, setItems] = useState([])', exercise: 'Criar filtro dinâmico de lista.', challenge: 'Conectar API com estados de loading/erro.', commonErrors: 'Efeito sem dependências corretas.', projectUse: 'App de produto real.', docs: 'https://react.dev/reference/react', starter: mkStarter('React estado', '#8b5cf6', 'React state') }
    ]
  }
]

tracks.forEach((track) => {
  track.slug = slugify(track.name)
  track.moduleCount = track.modules.length
})

const exercises = [
  { title: 'Landing semântica', technology: 'HTML', difficulty: 'Iniciante', estimated: '35 min', objective: 'Criar landing com estrutura semântica.', acceptance: '1 h1, landmarks e formulário com labels.', trail: 'html' },
  { title: 'Grid responsivo de cards', technology: 'CSS', difficulty: 'Básico', estimated: '45 min', objective: 'Montar grade adaptável.', acceptance: 'Sem overflow em 360px e 768px.', trail: 'css' },
  { title: 'Filtro de catálogo', technology: 'JavaScript', difficulty: 'Intermediário', estimated: '60 min', objective: 'Filtrar itens por categoria e busca.', acceptance: 'Filtro combinado + estado vazio.', trail: 'javascript' },
  { title: 'Conventional commits', technology: 'Git/GitHub', difficulty: 'Iniciante', estimated: '25 min', objective: 'Criar histórico claro de commits.', acceptance: 'Ao menos 5 commits semânticos.', trail: 'git-e-github' }
]

const challenges = [
  { title: 'Bugfix: menu mobile travado', theme: 'bugfix', difficulty: 'Básico', estimated: '40 min', technologies: 'HTML, CSS, JavaScript', context: 'Header de uma plataforma educacional.', problem: 'Menu não fecha ao navegar.', requirements: 'Fechar no clique de item e no ESC.', acceptance: 'Sem regressão em desktop e teclado funcional.' },
  { title: 'Refatoração: cards duplicados', theme: 'refatoracao', difficulty: 'Intermediário', estimated: '55 min', technologies: 'JavaScript', context: 'Página de trilhas com render manual.', problem: 'Markup duplicado em múltiplas páginas.', requirements: 'Criar função reutilizável de render.', acceptance: 'Mesma aparência e menos duplicação.' },
  { title: 'A11y: formulário de contato', theme: 'acessibilidade', difficulty: 'Intermediário', estimated: '50 min', technologies: 'HTML, A11y', context: 'Formulário com baixa usabilidade.', problem: 'Inputs sem rótulo e foco ruim.', requirements: 'Label, aria-describedby e foco visível.', acceptance: 'Navegação completa por teclado.' }
]
const portfolioProjects = [
  { title: 'Dashboard de Suporte', level: 'Intermediário', technology: 'HTML, CSS, JavaScript', estimated: '10-14h', objective: 'Criar painel com fluxo de tickets.', brief: 'Equipe precisa priorizar atendimento por status e SLA.', functional: 'Lista, filtros, detalhe e histórico local.', visual: 'Tema escuro premium com hierarquia clara.', checklist: 'Responsivo, A11y base, loading, vazio e erro.' },
  { title: 'Portal de Vagas Front-End', level: 'Básico', technology: 'JavaScript, API', estimated: '8-12h', objective: 'Organizar vagas com filtros e favoritos.', brief: 'Usuário quer encontrar vaga compatível rapidamente.', functional: 'Busca, filtro, salvar favoritos.', visual: 'Cards legíveis e CTA claros.', checklist: 'Estados de carregamento e persistência local.' },
  { title: 'Gestor de Conteúdo', level: 'Avançado', technology: 'React, Tailwind', estimated: '16-24h', objective: 'Aplicação de CRUD com UX consistente.', brief: 'Editor precisa criar e revisar conteúdo com preview.', functional: 'Listagem, edição, preview e rascunho.', visual: 'Layout profissional de produto SaaS.', checklist: 'Arquitetura modular e documentação técnica.' }
]

const roadmapPhases = [
  { number: 1, title: 'Fundamentos', description: 'Base da web, editor e fluxo de estudo.', difficulty: 'Iniciante', estimated: '1 semana', trail: 'html' },
  { number: 2, title: 'HTML', description: 'Semântica, formulários e acessibilidade.', difficulty: 'Iniciante', estimated: '2 semanas', trail: 'html' },
  { number: 3, title: 'CSS', description: 'Estilo, componentes e tipografia.', difficulty: 'Básico', estimated: '2 semanas', trail: 'css' },
  { number: 4, title: 'Layout', description: 'Flexbox, Grid e responsividade.', difficulty: 'Básico', estimated: '2 semanas', trail: 'css' },
  { number: 5, title: 'JavaScript', description: 'Lógica e manipulação de dados.', difficulty: 'Intermediário', estimated: '3 semanas', trail: 'javascript' },
  { number: 6, title: 'DOM', description: 'Interatividade real e eventos.', difficulty: 'Intermediário', estimated: '2 semanas', trail: 'javascript' },
  { number: 7, title: 'Git/GitHub', description: 'Colaboração e versionamento profissional.', difficulty: 'Iniciante', estimated: '1 semana', trail: 'git-e-github' },
  { number: 8, title: 'Frameworks', description: 'Componentes e estado com React.', difficulty: 'Intermediário', estimated: '4 semanas', trail: 'react' },
  { number: 9, title: 'Projetos', description: 'Entrega de portfólio com padrão profissional.', difficulty: 'Intermediário', estimated: 'contínuo', trail: 'react' }
]

const docsItems = [
  { category: 'Essencial para iniciantes', title: 'MDN - HTML', url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML', summary: 'Referência oficial para estrutura e semântica.' },
  { category: 'Essencial para iniciantes', title: 'MDN - CSS', url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS', summary: 'Base para layout, estilos e responsividade.' },
  { category: 'Essencial para iniciantes', title: 'MDN - JavaScript', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript', summary: 'Fundamentos de lógica e APIs web.' },
  { category: 'Acessibilidade', title: 'WCAG Overview', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', summary: 'Princípios de acessibilidade web.' },
  { category: 'SEO', title: 'Google Search Essentials', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content', summary: 'Boas práticas de indexação e conteúdo.' },
  { category: 'Git e colaboração', title: 'GitHub Docs', url: 'https://docs.github.com/pt', summary: 'Fluxo de pull request e revisão.' },
  { category: 'React', title: 'React.dev', url: 'https://react.dev/learn', summary: 'Aprendizado oficial de React.' },
  { category: 'Tailwind', title: 'Tailwind Docs', url: 'https://tailwindcss.com/docs', summary: 'Documentação de utilitários e componentes.' }
]

const trackList = document.getElementById('trackList')
const filterContainer = document.getElementById('trackFilters')
const searchInput = document.getElementById('trackSearch')
const roadmapSteps = document.getElementById('roadmapSteps')
const exerciseList = document.getElementById('exerciseList')
const challengeList = document.getElementById('challengeList')
const projectList = document.getElementById('projectList')
const docsList = document.getElementById('docsList')
const editor = document.getElementById('editor')
const preview = document.getElementById('preview')
const editorTabs = document.getElementById('editorTabs')
const runCode = document.getElementById('runCode')
const resetCode = document.getElementById('resetCode')
const copyCode = document.getElementById('copyCode')
const mobileMenuBtn = document.getElementById('mobileMenuBtn')
const mobileNav = document.getElementById('mobileNav')

const moduleTrailTitle = document.getElementById('moduleTrailTitle')
const moduleTrailDescription = document.getElementById('moduleTrailDescription')
const moduleTrailMeta = document.getElementById('moduleTrailMeta')
const moduleProgressText = document.getElementById('moduleProgressText')
const moduleProgressFill = document.getElementById('moduleProgressFill')
const moduleMenuList = document.getElementById('moduleMenuList')
const moduleMenuToggle = document.getElementById('moduleMenuToggle')
const moduleContent = document.getElementById('moduleContent')

let activeFilter = 'all'
let activeTab = 'html'

const ideDefaults = {
  html: '<main>\n  <h1>Front-Edge Academy</h1>\n  <p>Pratique front-end com trilhas e exercícios reais.</p>\n</main>',
  css: 'body { margin: 0; padding: 24px; font-family: Inter, sans-serif; background: #f8fafc; color: #0f172a; }',
  js: "console.log('Prática front-end ativa.');"
}

const editorState = loadIdeState()

function loadIdeState() {
  const saved = localStorage.getItem(STORAGE_KEYS.ideState)
  if (!saved) return { ...ideDefaults }
  try {
    const parsed = JSON.parse(saved)
    return { ...ideDefaults, ...parsed }
  } catch {
    return { ...ideDefaults }
  }
}

function saveIdeState() {
  localStorage.setItem(STORAGE_KEYS.ideState, JSON.stringify(editorState))
}
function getCompletedModules() {
  const raw = localStorage.getItem(STORAGE_KEYS.completedModules)
  if (!raw) return {}
  try {
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

function setCompletedModules(data) {
  localStorage.setItem(STORAGE_KEYS.completedModules, JSON.stringify(data))
}

function statusLabel(status) {
  if (status === 'concluido') return 'Concluído'
  if (status === 'em-andamento') return 'Em andamento'
  return 'Não iniciado'
}

function initPageTransitions() {
  document.body.classList.add('page-ready')
}

function markActiveNavLink() {
  const path = window.location.pathname.toLowerCase()
  const allLinks = document.querySelectorAll('#mainNav a, #mobileNav a, a[data-home-link]')
  allLinks.forEach((link) => {
    const href = (link.getAttribute('href') || '').toLowerCase()
    if (!href.endsWith('.html')) return
    const active = href === '/index.html' ? path === '/' || path.endsWith('/index.html') : path.endsWith(href)
    link.classList.toggle('nav-active', active)
    if (active) link.setAttribute('aria-current', 'page')
    else link.removeAttribute('aria-current')
  })
}

function renderTracks() {
  if (!trackList || !searchInput) return
  const query = searchInput.value.trim().toLowerCase()

  const filtered = tracks.filter((track) => {
    const matchesFilter = activeFilter === 'all' || track.level === activeFilter
    const matchesSearch =
      track.name.toLowerCase().includes(query) ||
      track.description.toLowerCase().includes(query) ||
      track.technologies.join(' ').toLowerCase().includes(query)
    return matchesFilter && matchesSearch
  })

  trackList.innerHTML = filtered.map((track) => {
    const tagsMarkup = track.technologies.map((tag) => `<span class="track-tag">${tag}</span>`).join('')
    return `
      <article class="content-card track-card" style="--track-accent:${track.accent}">
        <div class="track-main">
          <div class="track-icon"><img src="${track.iconUrl}" alt="Ícone ${track.name}" loading="lazy" /></div>
          <div>
            <h3>${track.name}</h3>
            <p>${track.description}</p>
            <div class="track-tags">${tagsMarkup}</div>
            <p class="track-meta">Nível: ${track.levelLabel} · ${track.moduleCount} módulos · ${track.estimatedHours}</p>
            <p class="track-meta">Status: ${statusLabel(track.status)}</p>
          </div>
        </div>
        <div class="mt-3 flex flex-wrap gap-2">
          <a class="pill" href="/modulos.html?trilha=${track.slug}">Ver módulos</a>
          <a class="pill" href="/modulos.html?trilha=${track.slug}#mod-0">Começar trilha</a>
        </div>
      </article>
    `
  }).join('')
}

function renderRoadmap() {
  if (!roadmapSteps) return
  roadmapSteps.innerHTML = roadmapPhases.map((phase) => {
    const track = tracks.find((item) => item.slug === phase.trail)
    return `
      <article class="road-step">
        <span class="road-num">${phase.number}</span>
        <h3>${phase.title}</h3>
        <p class="text-textSecondary text-sm">${phase.description}</p>
        <p class="track-meta">Dificuldade: ${phase.difficulty} · Tempo: ${phase.estimated}</p>
        <p class="track-meta">Trilha: ${track ? track.name : 'Em breve'}</p>
        <a class="pill mt-2 inline-flex" href="/modulos.html?trilha=${phase.trail}">Abrir trilha</a>
      </article>
    `
  }).join('')
}

function getTrackFromQuery() {
  const params = new URLSearchParams(window.location.search)
  const slug = params.get('trilha')
  return tracks.find((track) => track.slug === slug)
}

function runModuleIde(moduleCard) {
  const htmlInput = moduleCard.querySelector('textarea[data-type="html"]')
  const cssInput = moduleCard.querySelector('textarea[data-type="css"]')
  const jsInput = moduleCard.querySelector('textarea[data-type="js"]')
  const previewFrame = moduleCard.querySelector('.module-preview')
  if (!htmlInput || !cssInput || !jsInput || !previewFrame) return

  const source = `<!doctype html><html><head><style>${cssInput.value}</style></head><body>${htmlInput.value}<script>${jsInput.value}<\/script></body></html>`
  previewFrame.srcdoc = source
}

function renderModuleProgress(track) {
  const doneMap = getCompletedModules()
  const doneCount = track.modules.filter((_, index) => doneMap[`${track.slug}:${index}`]).length
  if (moduleProgressText) moduleProgressText.textContent = `${doneCount}/${track.modules.length} módulos concluídos`
  if (moduleProgressFill) {
    const percentage = Math.round((doneCount / track.modules.length) * 100)
    moduleProgressFill.style.width = `${percentage}%`
  }
}
function renderModulesPage() {
  if (!moduleContent || !moduleTrailTitle || !moduleTrailDescription || !moduleTrailMeta || !moduleMenuList) return
  const track = getTrackFromQuery()

  if (!track) {
    moduleTrailTitle.textContent = 'Trilha não encontrada'
    moduleTrailDescription.textContent = 'Volte para Trilhas e escolha uma trilha válida.'
    moduleContent.innerHTML = '<article class="content-card"><p>Não foi possível carregar os módulos.</p></article>'
    moduleMenuList.innerHTML = ''
    return
  }

  moduleTrailTitle.textContent = `${track.name} · plano de estudo`
  moduleTrailDescription.textContent = track.description
  moduleTrailMeta.textContent = `Nível ${track.levelLabel} · ${track.moduleCount} módulos · ${track.estimatedHours}`

  moduleMenuList.innerHTML = track.modules.map((module, index) => {
    const done = getCompletedModules()[`${track.slug}:${index}`]
    return `<a href="#mod-${index}" class="module-link" data-target="mod-${index}">${done ? '? ' : ''}Módulo ${index + 1}: ${module.title}</a>`
  }).join('')

  moduleContent.innerHTML = track.modules.map((module, index) => {
    const done = getCompletedModules()[`${track.slug}:${index}`]
    return `
      <article id="mod-${index}" class="content-card module-card" style="--track-accent:${track.accent}">
        <h3>Módulo ${index + 1} de ${track.modules.length}: ${module.title}</h3>
        <p><strong>Objetivo:</strong> ${module.objective}</p>
        <p><strong>Explicação curta:</strong> ${module.explanation}</p>
        <p><strong>Exemplo:</strong> <code>${module.example.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></p>
        <p><strong>Exercício:</strong> ${module.exercise}</p>
        <p><strong>Desafio:</strong> ${module.challenge}</p>
        <p><strong>Erros comuns:</strong> ${module.commonErrors}</p>
        <p><strong>Aplicação real:</strong> ${module.projectUse}</p>
        <p><strong>Docs recomendada:</strong> <a class="text-cyan" href="${module.docs}" target="_blank" rel="noopener noreferrer">Abrir referência</a></p>
        <div class="mt-3 flex flex-wrap gap-2">
          <a class="pill" href="#mod-${Math.max(0, index - 1)}">Anterior</a>
          <a class="pill" href="#mod-${Math.min(track.modules.length - 1, index + 1)}">Próximo</a>
          <button class="pill mark-complete" data-track="${track.slug}" data-module="${index}">${done ? 'Concluído' : 'Marcar como concluído'}</button>
        </div>
        <div class="module-ide">
          <h4>Mini IDE do módulo</h4>
          <div class="module-ide-grid">
            <label>index.html<textarea data-type="html">${module.starter.html.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</textarea></label>
            <label>style.css<textarea data-type="css">${module.starter.css}</textarea></label>
            <label>script.js<textarea data-type="js">${module.starter.js}</textarea></label>
          </div>
          <button class="pill run-module-ide">Executar</button>
          <iframe class="preview-frame module-preview" title="Preview módulo ${index + 1}"></iframe>
        </div>
      </article>
    `
  }).join('')

  moduleContent.querySelectorAll('.module-card').forEach((card) => runModuleIde(card))
  bindModuleMenuInteractions(track)
  renderModuleProgress(track)
}

function bindModuleMenuInteractions(track) {
  if (!moduleMenuList || !moduleContent) return
  const links = [...moduleMenuList.querySelectorAll('.module-link')]

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const targetId = link.dataset.target
      const target = targetId ? document.getElementById(targetId) : null
      if (!target) return
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      links.forEach((item) => item.classList.remove('active'))
      link.classList.add('active')
    })
  })

  moduleContent.querySelectorAll('.mark-complete').forEach((button) => {
    button.addEventListener('click', () => {
      const key = `${button.dataset.track}:${button.dataset.module}`
      const completed = getCompletedModules()
      completed[key] = !completed[key]
      setCompletedModules(completed)
      renderModulesPage()
      renderTracks()
    })
  })

  if (links[0]) links[0].classList.add('active')
  renderModuleProgress(track)
}

function renderExercises() {
  if (!exerciseList) return
  exerciseList.innerHTML = exercises.map((item) => `
    <article class="content-card">
      <h3>${item.title}</h3>
      <p>${item.objective}</p>
      <p class="track-meta">Tecnologia: ${item.technology} · Dificuldade: ${item.difficulty} · Tempo: ${item.estimated}</p>
      <p><strong>Critérios de aceite:</strong> ${item.acceptance}</p>
      <a class="pill inline-flex mt-2" href="/mini-ide.html?trilha=${item.trail}">Abrir na Mini IDE</a>
    </article>
  `).join('')
}

function renderChallenges() {
  if (!challengeList) return
  challengeList.innerHTML = challenges.map((item) => `
    <article class="content-card">
      <h3>${item.title}</h3>
      <p><strong>Contexto:</strong> ${item.context}</p>
      <p><strong>Problema:</strong> ${item.problem}</p>
      <p><strong>Requisitos obrigatórios:</strong> ${item.requirements}</p>
      <p><strong>Critérios de aceite:</strong> ${item.acceptance}</p>
      <p class="track-meta">Tema: ${item.theme} · Dificuldade: ${item.difficulty} · Tempo: ${item.estimated} · Tecnologias: ${item.technologies}</p>
    </article>
  `).join('')
}

function renderProjects() {
  if (!projectList) return
  projectList.innerHTML = portfolioProjects.map((item) => `
    <article class="content-card">
      <h3>${item.title}</h3>
      <p><strong>Objetivo:</strong> ${item.objective}</p>
      <p><strong>Briefing:</strong> ${item.brief}</p>
      <p><strong>Requisitos funcionais:</strong> ${item.functional}</p>
      <p><strong>Requisitos visuais:</strong> ${item.visual}</p>
      <p><strong>Checklist de entrega:</strong> ${item.checklist}</p>
      <p class="track-meta">Nível: ${item.level} · Tecnologias: ${item.technology} · Tempo: ${item.estimated}</p>
      <a class="pill inline-flex mt-2" href="/trilhas.html">Começar projeto</a>
    </article>
  `).join('')
}

function renderDocs() {
  if (!docsList) return
  docsList.innerHTML = docsItems.map((item) => `
    <article class="content-card docs-card">
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <p class="track-meta">Categoria: ${item.category}</p>
      <a class="text-cyan" href="${item.url}" target="_blank" rel="noopener noreferrer">Abrir documentação</a>
    </article>
  `).join('')
}

function switchTab(tab) {
  if (!editor || !editorTabs) return
  editorState[activeTab] = editor.value
  activeTab = tab
  editor.value = editorState[activeTab]
  editorTabs.querySelectorAll('.tab-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.tab === tab))
  saveIdeState()
}

function runPreview() {
  if (!editor || !preview) return
  editorState[activeTab] = editor.value
  saveIdeState()
  const source = `<!doctype html><html><head><style>${editorState.css}</style></head><body>${editorState.html}<script>${editorState.js}<\/script></body></html>`
  preview.srcdoc = source
}

if (filterContainer) {
  filterContainer.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof HTMLButtonElement)) return
    activeFilter = target.dataset.filter || 'all'
    filterContainer.querySelectorAll('.pill').forEach((pill) => pill.classList.remove('active'))
    target.classList.add('active')
    renderTracks()
  })
}
if (searchInput) searchInput.addEventListener('input', renderTracks)

if (moduleContent) {
  moduleContent.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof HTMLElement)) return
    if (target.classList.contains('run-module-ide')) {
      const moduleCard = target.closest('.module-card')
      if (moduleCard) runModuleIde(moduleCard)
    }
  })
}

if (moduleMenuToggle && moduleMenuList) {
  moduleMenuToggle.addEventListener('click', () => {
    moduleMenuList.classList.toggle('collapsed')
  })
}

if (editorTabs) {
  editorTabs.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof HTMLButtonElement)) return
    switchTab(target.dataset.tab)
  })
}

if (runCode) runCode.addEventListener('click', runPreview)
if (resetCode) {
  resetCode.addEventListener('click', () => {
    Object.assign(editorState, ideDefaults)
    switchTab('html')
    runPreview()
  })
}
if (copyCode) {
  copyCode.addEventListener('click', async () => {
    const text = `<!-- index.html -->\n${editorState.html}\n\n/* style.css */\n${editorState.css}\n\n// script.js\n${editorState.js}`
    await navigator.clipboard.writeText(text)
    copyCode.textContent = 'Copiado'
    setTimeout(() => {
      copyCode.textContent = 'Copiar código'
    }, 1200)
  })
}

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener('click', () => mobileNav.classList.toggle('hidden'))
  mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => mobileNav.classList.add('hidden')))
}

if (editor) editor.value = editorState[activeTab]
initPageTransitions()
markActiveNavLink()
renderTracks()
renderRoadmap()
renderModulesPage()
renderExercises()
renderChallenges()
renderProjects()
renderDocs()
runPreview()
