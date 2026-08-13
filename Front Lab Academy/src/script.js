import { tracks } from './data/trilhas.js'
import { roadmap } from './data/roteiro.js'
import { practiceItems } from './data/praticas.js'
import { slugify } from './utils/gerar-slug.js'
import './styles/style.css'

const editorState = {
  html: `<main style="font-family: Inter, sans-serif; padding: 24px;"><h1 style="margin:0 0 8px;">Front Lab Academy</h1><p>Pratique front-end com trilhas e exercícios reais.</p></main>`,
  css: `body { margin: 0; }`,
  js: `console.log('Prática front-end ativa.');`
}
const editorTabsAllowed = new Set(Object.keys(editorState))

let activeFilter = 'all'
let activeTab = 'html'

const trackList = document.getElementById('trackList')
const filterContainer = document.getElementById('trackFilters')
const searchInput = document.getElementById('trackSearch')
const roadmapSteps = document.getElementById('roadmapSteps')
const editor = document.getElementById('editor')
const preview = document.getElementById('preview')
const editorTabs = document.getElementById('editorTabs')
const runCode = document.getElementById('runCode')
const newProject = document.getElementById('newProject')
const mobileMenuBtn = document.getElementById('mobileMenuBtn')
const mobileNav = document.getElementById('mobileNav')
const brandWrap = document.querySelector('.brand-wrap')
const headerActions = document.querySelector('.site-header > div')

const moduleTrailTitle = document.getElementById('moduleTrailTitle')
const moduleTrailDescription = document.getElementById('moduleTrailDescription')
const moduleTrailMeta = document.getElementById('moduleTrailMeta')
const moduleTrailProgress = document.getElementById('moduleTrailProgress')
const moduleMenuList = document.getElementById('moduleMenuList')
const moduleMenuToggle = document.getElementById('moduleMenuToggle')
const moduleContent = document.getElementById('moduleContent')
const finalChallengeBox = document.getElementById('finalChallengeBox')
const progressDashboard = document.getElementById('progressDashboard')
const exerciseList = document.getElementById('exerciseList')
const challengeList = document.getElementById('challengeList')
const projectList = document.getElementById('projectList')
const practiceDetail = document.getElementById('practiceDetail')

function getSavedTheme() {
  try {
    return localStorage.getItem('front-lab-academy-theme') || 'light'
  } catch {
    return 'light'
  }
}

function getPreviewThemeCss() {
  const isDark = document.documentElement.dataset.theme === 'dark'
  return isDark
    ? 'html{color-scheme:dark;}body{margin:0;background:#060816;color:#f8fafc;}body *{color:inherit;}a{color:#22d3ee;}button,input,select,textarea{color:#f8fafc;background:#10172d;border-color:#334155;}'
    : 'html{color-scheme:light;}body{margin:0;background:#ffffff;color:#101827;}a{color:#2563eb;}'
}

function getPreviewStorageShim() {
  return `try {
  window.localStorage
} catch (_error) {
  const previewStorage = new Map()
  Object.defineProperty(window, 'localStorage', {
    configurable: true,
    value: {
      getItem: (key) => previewStorage.has(String(key)) ? previewStorage.get(String(key)) : null,
      setItem: (key, value) => previewStorage.set(String(key), String(value)),
      removeItem: (key) => previewStorage.delete(String(key)),
      clear: () => previewStorage.clear()
    }
  })
}`
}

function createPreviewSource(html, css = '', js = '') {
  return `<!doctype html><html><head><style>${getPreviewThemeCss()}${css}</style></head><body>${html}<script>${getPreviewStorageShim()}\n${js}<\/script></body></html>`
}

function updateThemeToggle(button) {
  if (!button) return
  const isDark = document.documentElement.dataset.theme === 'dark'
  button.textContent = isDark ? 'Claro' : 'Escuro'
  button.setAttribute('aria-label', isDark ? 'Ativar tema claro' : 'Ativar tema escuro')
}

function applyTheme(theme) {
  const nextTheme = theme === 'dark' ? 'dark' : 'light'
  document.documentElement.dataset.theme = nextTheme
  try {
    localStorage.setItem('front-lab-academy-theme', nextTheme)
  } catch {
    // Keep the UI responsive even when storage is blocked.
  }
  updateThemeToggle(document.getElementById('themeToggle'))
  runPreview()
  document.querySelectorAll('.module-card').forEach((card) => runModuleIde(card))
  document.querySelectorAll('.practice-ide').forEach((ide) => runEmbeddedIde(ide))
}

function createThemeToggle() {
  if (!headerActions || document.getElementById('themeToggle')) return
  const button = document.createElement('button')
  button.id = 'themeToggle'
  button.className = 'theme-toggle'
  button.type = 'button'
  button.addEventListener('click', () => {
    applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark')
  })
  headerActions.appendChild(button)
  updateThemeToggle(button)
}

function highlightCodeText(code) {
  const tokens = []
  const addToken = (className, value) => {
    const marker = String.fromCharCode(0xe000 + tokens.length)
    tokens.push({ marker, className, value })
    return marker
  }

  let highlighted = escapeHtml(code)
    .replace(/(&lt;!--[\s\S]*?--&gt;|\/\/.*$|\/\*[\s\S]*?\*\/)/gm, (match) => addToken('code-comment', match))
    .replace(/\b(class|id|href|src|type|name|for|aria-[\w-]+|data-[\w-]+|placeholder|required|hidden|role|autocomplete|value|method|action|rows|cols|alt|title|rel|target|disabled|checked|selected)(=)/g, (_match, attr, equal) => `${addToken('code-attr', attr)}${equal}`)
    .replace(/(&lt;\/?)([a-zA-Z][\w-]*)/g, (_match, prefix, tag) => `${prefix}${addToken('code-tag', tag)}`)
    .replace(/(&quot;.*?&quot;|&#039;.*?&#039;|`[^`]*`)/g, (match) => addToken('code-string', match))
    .replace(/\b(const|let|var|function|return|if|else|try|catch|finally|new|async|await|for|while|forEach|map|filter|reduce|class|import|export|from|extends|switch|case|break|continue|typeof|instanceof)\b/g, (match) => addToken('code-keyword', match))
    .replace(/\b(\d+)\b/g, (match) => addToken('code-number', match))

  tokens.forEach(({ marker, className, value }) => {
    highlighted = highlighted.replaceAll(marker, `<span class="${className}">${value}</span>`)
  })

  return highlighted
}

function highlightCodeBlocks(root = document) {
  root.querySelectorAll('.practice-code-card code').forEach((codeBlock) => {
    codeBlock.innerHTML = highlightCodeText(codeBlock.textContent)
  })
}

function initPageTransitions() {
  document.body.classList.add('page-ready')
  const links = document.querySelectorAll('a[href]')
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href')
      if (!href) return
      const isInternal = href.startsWith('/') || href.startsWith('./') || href.startsWith('../')
      const isAnchor = href.startsWith('#')
      const isNewTab = link.target === '_blank'
      if (!isInternal || isAnchor || isNewTab) return
      event.preventDefault()
      document.body.classList.remove('page-ready')
      document.body.classList.add('page-leaving')
      window.setTimeout(() => {
        window.location.href = href
      }, 220)
    })
  })
}

function markActiveNavLink() {
  const path = window.location.pathname.toLowerCase()
  const navLinks = document.querySelectorAll('#mainNav a')
  navLinks.forEach((link) => {
    const href = (link.getAttribute('href') || '').toLowerCase().replace(/^\.\//, '/')
    if (!href.endsWith('.html')) return
    const isHome = href === '/index.html'
    const active = isHome ? (path === '/' || path.endsWith('/index.html')) : path.endsWith(href)
    link.classList.toggle('nav-active', active)
  })
}

const discordWidgetEndpoint = 'https://discord.com/api/guilds/1506252581998034964/widget.json'
const discordFallbackInvite = 'https://discord.com/invite/s6yNfDYH'

function getDiscordInviteUrl(inviteUrl) {
  return typeof inviteUrl === 'string' && inviteUrl.startsWith('https://discord.com/')
    ? inviteUrl
    : discordFallbackInvite
}

function updateDiscordInviteLinks(inviteUrl) {
  const safeInvite = getDiscordInviteUrl(inviteUrl)
  document.querySelectorAll('[data-discord-invite]').forEach((link) => {
    if (link instanceof HTMLAnchorElement) link.href = safeInvite
  })
}

function renderDiscordChannels(channels = []) {
  const visibleChannels = channels.slice(0, 3)
  if (!visibleChannels.length) return '<span># lounge</span><span># estudos</span><span># projetos</span>'

  return visibleChannels
    .map((channel) => `<span># ${escapeHtml(slugify(channel.name || 'canal'))}</span>`)
    .join('')
}

function getMemberInitials(username = '') {
  const cleanName = username.trim()
  if (!cleanName) return 'FL'
  return cleanName
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function renderDiscordMembers(members = []) {
  const visibleMembers = members.slice(0, 4)
  if (!visibleMembers.length) return '<span class="discord-muted">Nenhum membro online agora.</span>'

  return visibleMembers.map((member) => {
    const username = escapeHtml(member.username || 'Membro FrontLab')
    const status = escapeHtml(member.status || 'online')
    const avatar = member.avatar_url
      ? `<img src="${escapeHtml(member.avatar_url)}" alt="" loading="lazy" />`
      : `<span class="discord-member-initials">${escapeHtml(getMemberInitials(member.username))}</span>`

    return `
      <div class="discord-member">
        ${avatar}
        <strong>${username}</strong>
        <span class="discord-member-status ${status}" aria-label="Status ${status}"></span>
      </div>
    `
  }).join('')
}

async function initDiscordCommunityCards() {
  const cards = document.querySelectorAll('[data-discord-community-card]')
  if (!cards.length) {
    updateDiscordInviteLinks(discordFallbackInvite)
    return
  }

  try {
    const response = await fetch(discordWidgetEndpoint)
    if (!response.ok) throw new Error('Discord widget unavailable')

    const data = await response.json()
    const inviteUrl = getDiscordInviteUrl(data.instant_invite)
    updateDiscordInviteLinks(inviteUrl)

    cards.forEach((card) => {
      const name = card.querySelector('[data-discord-name]')
      const online = card.querySelector('[data-discord-online]')
      const channels = card.querySelector('[data-discord-channels]')
      const members = card.querySelector('[data-discord-members]')
      const message = card.querySelector('[data-discord-message]')

      if (name) name.textContent = data.name || 'FrontLab Community'
      if (online) online.textContent = String(data.presence_count ?? data.members?.length ?? 0)
      if (channels) channels.innerHTML = renderDiscordChannels(data.channels || [])
      if (members) members.innerHTML = renderDiscordMembers(data.members || [])
      if (message) message.hidden = true
    })
  } catch (_error) {
    updateDiscordInviteLinks(discordFallbackInvite)
    cards.forEach((card) => {
      const name = card.querySelector('[data-discord-name]')
      const online = card.querySelector('[data-discord-online]')
      const channels = card.querySelector('[data-discord-channels]')
      const members = card.querySelector('[data-discord-members]')
      const message = card.querySelector('[data-discord-message]')

      if (name) name.textContent = 'FrontLab Community'
      if (online) online.textContent = '--'
      if (channels) channels.innerHTML = '<span># lounge</span><span># estudos</span><span># projetos</span>'
      if (members) members.innerHTML = '<span class="discord-muted">Entre para acompanhar a comunidade por dentro.</span>'
      if (message) message.hidden = false
    })
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function readStorageJson(key, fallback) {
  try {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : fallback
  } catch {
    return fallback
  }
}

function writeStorageJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Storage can be unavailable in private browsing or sandboxed previews.
  }
}

function getTrackProgressKey(trackSlug) {
  return `front-lab-progress:${trackSlug}`
}

function getEmptyTrackProgress() {
  return {
    modules: {}
  }
}

function readTrackProgress(trackSlug) {
  const saved = readStorageJson(getTrackProgressKey(trackSlug), {})
  return {
    ...getEmptyTrackProgress(),
    ...saved,
    modules: saved.modules && typeof saved.modules === 'object' ? saved.modules : {}
  }
}

function saveTrackProgress(trackSlug, progress) {
  writeStorageJson(getTrackProgressKey(trackSlug), progress)
}

function getModuleProgress(trackSlug, index) {
  const progress = readTrackProgress(trackSlug)
  const moduleProgress = progress.modules[String(index)] || {}
  const legacyChecks = Array.isArray(moduleProgress.checks) ? moduleProgress.checks : []
  const completedAt = moduleProgress.completedAt || (legacyChecks.length && legacyChecks.every(Boolean) ? new Date(0).toISOString() : null)

  return {
    completedAt
  }
}

function isModuleComplete(trackSlug, index) {
  return Boolean(getModuleProgress(trackSlug, index).completedAt)
}

function getModuleProgressState(trackSlug, index) {
  return isModuleComplete(trackSlug, index) ? 'completed' : 'idle'
}

function updateModuleCompletion(trackSlug, index, isComplete) {
  const progress = readTrackProgress(trackSlug)
  const key = String(index)
  const current = progress.modules[key] || {}

  progress.modules[key] = {
    completedAt: isComplete ? current.completedAt || new Date().toISOString() : null
  }

  saveTrackProgress(trackSlug, progress)
}

function getTrackProgressSummary(track) {
  const total = track.modules.length
  const completed = track.modules.filter((_, index) => isModuleComplete(track.slug, index)).length
  const started = track.modules.filter((_, index) => getModuleProgressState(track.slug, index) === 'started').length
  const percent = total ? Math.round((completed / total) * 100) : 0

  return {
    total,
    completed,
    started,
    percent
  }
}

function renderProgressBar(percent) {
  return `
    <div class="progress-shell course-progress-shell" aria-hidden="true">
      <div class="progress-fill" style="width:${percent}%"></div>
    </div>
  `
}

function renderTrackProgressPanel(track) {
  const summary = getTrackProgressSummary(track)

  return `
    <aside class="track-progress-panel" style="--track-accent:${track.accent}">
      <div>
        <p>Progresso da trilha</p>
        <strong>${summary.completed}/${summary.total} concluídos</strong>
      </div>
      ${renderProgressBar(summary.percent)}
      <div class="track-progress-actions">
        <span>${summary.percent}% completo</span>
        <a class="pill" href="./progresso.html">Ver progresso geral</a>
      </div>
    </aside>
  `
}

function renderModuleCompletion(track, index) {
  const moduleProgress = getModuleProgress(track.slug, index)
  const completed = Boolean(moduleProgress.completedAt)

  return `
    <section class="module-progress-control module-completion" data-track-slug="${track.slug}" data-module-index="${index}">
      <div class="module-progress-head">
        <div>
          <h4>Progresso do módulo</h4>
          <p>${completed ? 'Módulo marcado como concluído.' : 'Marque quando terminar o estudo e a prática deste módulo.'}</p>
        </div>
        <span class="${completed ? 'is-complete' : ''}">${completed ? 'Concluído' : 'Em estudo'}</span>
      </div>
      <button class="pill toggle-module-completion" type="button" data-completed="${completed}">
        ${completed ? 'Marcar como em estudo' : 'Marcar como concluído'}
      </button>
    </section>
  `
}

function updateCurrentTrackProgress(track) {
  if (moduleTrailProgress) {
    moduleTrailProgress.innerHTML = renderTrackProgressPanel(track)
  }

  if (moduleMenuList) {
    moduleMenuList.querySelectorAll('.module-link').forEach((link) => {
      const index = Number(link.dataset.moduleIndex || 0)
      const state = getModuleProgressState(track.slug, index)
      link.dataset.progressState = state
      const marker = link.querySelector('[data-progress-marker]')
      if (marker) {
        marker.textContent = state === 'completed' ? '✓' : state === 'started' ? '•' : ''
      }
    })
  }
}

function getModuleStateLabel(state) {
  if (state === 'completed') return 'Concluído'
  else if (state === 'started') return 'Em andamento'
  else return 'Não iniciado'
}

function renderPracticeCard(item, type) {
  const tags = item.tags.map((tag) => `<span>${tag}</span>`).join('')
  const typeLabel = type === 'projeto' ? 'Projeto' : type === 'desafio' ? 'Desafio' : 'Exercício'

  return `
    <a class="content-card practice-card" href="./pratica.html?tipo=${type}&id=${item.id}">
      <div class="practice-card-head">
        <span>${typeLabel}</span>
        <span>${item.level}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <div class="practice-tags">${tags}</div>
      <strong>Ver esqueleto</strong>
    </a>
  `
}

function renderPracticeLists() {
  if (exerciseList) {
    exerciseList.innerHTML = practiceItems.exercicio.map((item) => renderPracticeCard(item, 'exercicio')).join('')
  }

  if (challengeList) {
    challengeList.innerHTML = practiceItems.desafio.map((item) => renderPracticeCard(item, 'desafio')).join('')
  }

  if (projectList) {
    projectList.innerHTML = practiceItems.projeto.map((item) => renderPracticeCard(item, 'projeto')).join('')
  }
}

function renderPracticeDetail() {
  if (!practiceDetail) return

  const params = new URLSearchParams(window.location.search)
  const requestedType = params.get('tipo')
  const type = requestedType === 'projeto' ? 'projeto' : requestedType === 'desafio' ? 'desafio' : 'exercicio'
  const id = params.get('id') || ''
  const item = practiceItems[type].find((practice) => practice.id === id)
  const backHref = type === 'projeto' ? './projetos.html' : type === 'desafio' ? './desafios.html' : './exercicios.html'
  const typeLabel = type === 'projeto' ? 'Blueprint do projeto' : type === 'desafio' ? 'Desafio pessoal' : 'Exercício pessoal'

  if (!item) {
    practiceDetail.innerHTML = `
      <section class="section-block">
        <div class="section-head">
          <h2>Prática não encontrada</h2>
          <p>Volte para a lista e escolha um exercício ou desafio disponível.</p>
        </div>
        <a class="pill inline-flex" href="${backHref}">Voltar para a lista</a>
      </section>
    `
    return
  }

  const structure = item.structure.map((part, index) => `
    <li>
      <span>${String(index + 1).padStart(2, '0')}</span>
      <p>${part}</p>
    </li>
  `).join('')
  const tags = item.tags.map((tag) => `<span>${tag}</span>`).join('')

  practiceDetail.innerHTML = `
    <section class="section-block practice-detail-hero">
      <a class="pill inline-flex" href="${backHref}">Voltar</a>
      <div class="section-head">
        <p class="module-kicker">${typeLabel}</p>
        <h2>${item.title}</h2>
        <p>${item.summary}</p>
      </div>
      <div class="practice-tags">${tags}</div>
    </section>

    <section class="practice-brief-grid">
      <article class="content-card">
        <h3>Contexto</h3>
        <p>${item.scenario}</p>
      </article>
      <article class="content-card">
        <h3>Objetivo</h3>
        <p>${item.goal}</p>
      </article>
    </section>

    <section class="section-block practice-structure-section">
      <div class="section-head">
        <h2>Estrutura sugerida</h2>
        <p>Use como direção, mas mude layout, textos, cores e decisões para ficar com a sua cara.</p>
      </div>
      <div class="practice-skeleton-layout">
        <article class="practice-steps-card">
          <h3>Blocos esperados</h3>
          <ol class="practice-step-list">${structure}</ol>
        </article>
      </div>
    </section>

    <section class="section-block practice-code-section">
      <div class="section-head">
        <h2>Esqueleto inicial</h2>
        <p>Esse código é só ponto de partida. Complete, reorganize e personalize a solução.</p>
      </div>
      <div class="practice-code-grid">
        <article class="practice-code-card">
          <h3>index.html</h3>
          <pre><code>${escapeHtml(item.skeleton.html)}</code></pre>
        </article>
        <article class="practice-code-card">
          <h3>style.css</h3>
          <pre><code>${escapeHtml(item.skeleton.css)}</code></pre>
        </article>
        <article class="practice-code-card">
          <h3>script.js</h3>
          <pre><code>${escapeHtml(item.skeleton.js)}</code></pre>
        </article>
      </div>
    </section>

    <section class="section-block practice-ide-section">
      <div class="section-head">
        <h2>Mini IDE da prática</h2>
        <p>Edite o esqueleto e execute para ver como a estrutura começa a aparecer.</p>
      </div>
      <div class="practice-ide">
        <article class="practice-editor-panel">
          <div class="practice-panel-head">
            <h3>Editor</h3>
            <button class="pill run-practice-ide" type="button">Executar prática</button>
          </div>
          <div class="module-ide-grid">
            <label>index.html<textarea data-type="html">${escapeHtml(item.skeleton.html)}</textarea></label>
            <label>style.css<textarea data-type="css">${escapeHtml(item.skeleton.css)}</textarea></label>
            <label>script.js<textarea data-type="js">${escapeHtml(item.skeleton.js)}</textarea></label>
          </div>
        </article>
        <article class="practice-preview-panel">
          <h3>Preview</h3>
          <iframe class="preview-frame practice-preview" title="Preview da prática" sandbox="allow-scripts"></iframe>
        </article>
      </div>
    </section>
  `

  highlightCodeBlocks(practiceDetail)
  const practiceIde = practiceDetail.querySelector('.practice-ide')
  if (practiceIde) runEmbeddedIde(practiceIde)
}

function getTrackFromQuery() {
  const params = new URLSearchParams(window.location.search)
  const slug = params.get('trilha')
  return tracks.find((track) => track.slug === slug)
}

function renderTracks() {
  if (!trackList || !searchInput) return
  const query = searchInput.value.trim().toLowerCase()

  const filtered = tracks.filter((track) => {
    const matchesFilter = activeFilter === 'all' || track.level === activeFilter
    const matchesSearch =
      track.name.toLowerCase().includes(query) ||
      track.description.toLowerCase().includes(query) ||
      track.tags.join(' ').toLowerCase().includes(query)
    return matchesFilter && matchesSearch
  })

  trackList.innerHTML = filtered.map((track) => {
    const tagsMarkup = track.tags.map((tag) => `<span class="track-tag">${tag}</span>`).join('')
    return `
      <article class="content-card track-card" style="--track-accent:${track.accent}">
        <a class="track-click" href="./modulos.html?trilha=${track.slug}">
          <div class="track-main">
            <div class="track-icon"><img src="${track.iconUrl}" alt="Ícone ${track.name}" loading="lazy" /></div>
            <div><div class="track-tags">${tagsMarkup}</div><h3>${track.name}</h3><p>${track.description}</p></div>
          </div>
          <p class="track-meta">Nível: ${track.levelLabel}</p>
          <p class="track-open">Abrir módulos</p>
          <div><div class="mb-2 track-focus">Foco: prática aplicada</div><div class="progress-shell"><div class="progress-fill" style="width:100%"></div></div></div>
        </a>
      </article>
    `
  }).join('')
}

function renderRoadmap() {
  if (!roadmapSteps) return

  const bootstrapRoadmap = [
    { title: 'Bootstrap: setup e mentalidade', trail: 'bootstrap', mod: 0 },
    { title: 'Bootstrap: containers, grid e breakpoints', trail: 'bootstrap', mod: 1 },
    { title: 'Bootstrap: utilitários de layout', trail: 'bootstrap', mod: 2 },
    { title: 'Bootstrap: componentes essenciais', trail: 'bootstrap', mod: 3 },
    { title: 'Bootstrap: formulários responsivos', trail: 'bootstrap', mod: 4 },
    { title: 'Bootstrap: modal, dropdown e collapse', trail: 'bootstrap', mod: 5 },
    { title: 'Bootstrap: customização e tema', trail: 'bootstrap', mod: 6 },
    { title: 'Bootstrap: projeto final responsivo', trail: 'bootstrap', mod: 7 }
  ]

  const sections = [
    {
      title: 'Preparação',
      description: 'Ambiente, internet, terminal, GitHub e deploy para começar com base profissional.',
      steps: roadmap.slice(0, 8)
    },
    {
      title: 'HTML e Semântica',
      description: 'Estrutura, conteúdo, formulários, SEO e acessibilidade antes de pensar em aparência.',
      steps: roadmap.slice(8, 18)
    },
    {
      title: 'CSS e Layout',
      description: 'Cascata, box model, tipografia, Flexbox, Grid, responsividade e motion.',
      steps: roadmap.slice(18, 31)
    },
    {
      title: 'Bootstrap e UI rápida',
      description: 'Grid, componentes prontos, utilitários e customização para entregar interfaces responsivas com velocidade.',
      steps: bootstrapRoadmap
    },
    {
      title: 'JavaScript e DOM',
      description: 'Lógica, arrays, objetos, eventos, DOM, APIs e persistência local.',
      steps: roadmap.slice(31, 45)
    },
    {
      title: 'TypeScript',
      description: 'Tipos, interfaces, union types, generics, eventos e contratos de API.',
      steps: roadmap.slice(45, 57)
    },
    {
      title: 'Frameworks Front-End',
      description: 'Componentes, rotas, estado, formulários, APIs, renderização e arquitetura escalável.',
      steps: roadmap.slice(57, 70)
    },
    {
      title: 'Ferramentas de Entrega',
      description: 'Git, PR, npm, Vite, lint, formatação, pipeline local e release.',
      steps: roadmap.slice(70, 80)
    },
    {
      title: 'Qualidade e Boas Práticas',
      description: 'Acessibilidade, performance, testes, PWA e manutenção.',
      steps: roadmap.slice(80, 89)
    },
    {
      title: 'Projeto Final e Portfólio',
      description: 'Planejamento, arquitetura, implementação, validação, otimização, documentação e deploy.',
      steps: roadmap.slice(89)
    }
  ]

  let stepNumber = 1
  roadmapSteps.innerHTML = sections.map((section) => {
    const sectionTrack = tracks.find((item) => item.slug === section.steps[0]?.trail)
    const sectionAccent = sectionTrack?.accent || 'var(--blue)'
    const cards = section.steps.map((step) => {
      const track = tracks.find((item) => item.slug === step.trail)
      const title = step.title.replace(/^\d+\.\s*/, '')
      const number = String(stepNumber++).padStart(2, '0')
      const accent = track?.accent || 'var(--purple)'
      const trackName = track?.name || 'Trilha'

      return `
        <a class="road-step" style="--track-accent:${accent}" href="./modulos.html?trilha=${step.trail}#mod-${step.mod}">
          <span class="road-num">${number}</span>
          <div>
            <p class="road-track">${trackName}</p>
            <h3>${title}</h3>
            <p>Abrir módulo recomendado</p>
          </div>
        </a>
      `
    }).join('')

    return `
      <section class="roadmap-section" style="--section-accent:${sectionAccent}">
        <div class="roadmap-section-head">
          <div>
            <h3>${section.title}</h3>
            <p>${section.description}</p>
          </div>
          <span>${section.steps.length} etapas</span>
        </div>
        <div class="roadmap-grid">${cards}</div>
      </section>
    `
  }).join('')
}

function runModuleIde(moduleCard) {
  const htmlInput = moduleCard.querySelector('textarea[data-type="html"]')
  const cssInput = moduleCard.querySelector('textarea[data-type="css"]')
  const jsInput = moduleCard.querySelector('textarea[data-type="js"]')
  const previewFrame = moduleCard.querySelector('.module-preview')
  if (!htmlInput || !previewFrame) return

  previewFrame.srcdoc = createPreviewSource(htmlInput.value, cssInput?.value || '', jsInput?.value || '')
}

function runEmbeddedIde(ideRoot) {
  const htmlInput = ideRoot.querySelector('textarea[data-type="html"]')
  const cssInput = ideRoot.querySelector('textarea[data-type="css"]')
  const jsInput = ideRoot.querySelector('textarea[data-type="js"]')
  const previewFrame = ideRoot.querySelector('.practice-preview')
  if (!htmlInput || !cssInput || !jsInput || !previewFrame) return

  previewFrame.srcdoc = createPreviewSource(htmlInput.value, cssInput.value, jsInput.value)
}

function isCodeLikeBlock(block) {
  const lines = block.split('\n')
  return lines.some((line) => /^\s*</.test(line))
    || lines.some((line) => /^\s*(<\/|{|\}|[.#]?\w[\w-]*\s*{)/.test(line))
    || lines.some((line) => /^\s*(projeto\/|index\.html|images\/|paginas\/|https?:\/\/|\/[\w-])/.test(line))
    || lines.some((line) => /^\s*(\[ \]|\d+\.)\s+/.test(line))
}

function renderRawLessonBlocks(lesson) {
  return lesson
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const lines = block.split('\n').map((line) => line.trim()).filter(Boolean)
      if (/^[A-Z0-9 ,.:;/-]+$/.test(block) && block.length <= 52) {
        return `<h5>${escapeHtml(block)}</h5>`
      } else if (lines.length > 1 && lines.every((line) => line.startsWith('- '))) {
        return `<ul class="module-list">${lines.map((line) => `<li>${escapeHtml(line.slice(2))}</li>`).join('')}</ul>`
      } else if (isCodeLikeBlock(block)) {
        return `<pre><code>${escapeHtml(block)}</code></pre>`
      } else {
        return `<p>${escapeHtml(block).replace(/\n/g, '<br>')}</p>`
      }
    })
    .join('')
}

function renderLessonSection(section) {
  if (!section || !section.title) return ''

  let content = ''

  if (section.type === 'list') {
    const items = Array.isArray(section.items) ? section.items : []
    content = `<ul class="module-study-list">
      ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
    </ul>`
  } else if (section.type === 'code') {
    content = `
      <pre><code>${escapeHtml(section.code || '')}</code></pre>
      ${section.note ? `<p>${escapeHtml(section.note)}</p>` : ''}
    `
  } else if (section.type === 'rawLesson') {
    content = `<div class="module-study-raw">${renderRawLessonBlocks(section.content || '')}</div>`
  } else {
    content = `<p>${escapeHtml(section.content || '').replace(/\n/g, '<br>')}</p>`
  }

  return `
    <article class="module-study-section" data-section-type="${escapeHtml(section.type || 'text')}">
      <h5>${escapeHtml(section.title)}</h5>
      ${content}
    </article>
  `
}

function renderLessonDemo(module) {
  if (!module.lessonDemo) return ''
  const demo = module.lessonDemo
  const source = createPreviewSource(demo.html || '', demo.css || '', demo.js || '')

  return `
    <article class="module-study-demo">
      <div>
        <h5>Demonstração renderizada</h5>
        <p>Preview do exemplo base desta aula, útil para conectar explicação e resultado visual.</p>
      </div>
      <iframe class="preview-frame module-study-preview" title="Demonstração ${escapeHtml(module.title)}" sandbox="allow-scripts" srcdoc="${escapeHtml(source)}"></iframe>
    </article>
  `
}

function renderModuleStudy(module) {
  if (!module.lesson && !module.lessonSections?.length) return ''

  const content = module.lessonSections?.length
    ? module.lessonSections.map(renderLessonSection).join('')
    : renderRawLessonBlocks(module.lesson)

  return `
    <section class="module-study">
      <h4>Apostila do módulo</h4>
      <div class="module-study-content">${content}</div>
      ${renderLessonDemo(module)}
    </section>
  `
}

function renderModuleCard(track, module, index) {
  const learnItems = module.learn.map((item) => `<li>${item}</li>`).join('')
  const moduleLevel = module.level || track.levelLabel
  const moduleTime = module.time || '30 min'
  const moduleCategory = module.category || track.name
  const moduleDescription = module.description || `Prática guiada de ${module.title.toLowerCase()} com foco em uma entrega pequena e verificável.`
  const moduleObjective = module.objective || `Aplicar ${module.title.toLowerCase()} usando ${module.learn.slice(0, 2).join(' e ')} em um contexto realista de front-end.`
  const isHtmlTrack = track.slug === 'html'
  const ideGridClass = isHtmlTrack ? 'module-ide-grid html-only' : 'module-ide-grid'
  const ideFields = isHtmlTrack
    ? `<label>index.html<textarea data-type="html">${escapeHtml(module.starter.html)}</textarea></label>`
    : `
          <label>index.html<textarea data-type="html">${escapeHtml(module.starter.html)}</textarea></label>
          <label>style.css<textarea data-type="css">${escapeHtml(module.starter.css)}</textarea></label>
          <label>script.js<textarea data-type="js">${escapeHtml(module.starter.js)}</textarea></label>
        `
  const hasPrevious = index > 0
  const hasNext = index < track.modules.length - 1

  return `
    <article id="mod-${index}" class="content-card module-card" style="--track-accent:${track.accent}">
      <div class="module-card-head">
        <div>
          <p class="module-kicker">Módulo ${index + 1} de ${track.modules.length}</p>
          <h3>${module.title}</h3>
        </div>
        <div class="module-badges">
          <span>${moduleCategory}</span>
          <span>${moduleLevel}</span>
          <span>${moduleTime}</span>
        </div>
      </div>
      <p class="module-description">${moduleDescription}</p>
      <div class="module-learning-grid">
        <div>
          <p><strong>Objetivo de aprendizado:</strong></p>
          <p>${moduleObjective}</p>
        </div>
        <div>
          <p><strong>Conteúdo resumido:</strong></p>
          <ul class="module-list">${learnItems}</ul>
        </div>
      </div>
      ${renderModuleStudy(module)}
      <p><strong>Experiência prática:</strong> ${module.practice}</p>
      <p><strong>Exercício de fixação:</strong> ${module.exercise}</p>
      ${renderModuleCompletion(track, index)}
      <div class="module-ide">
        <h4>Mini IDE do módulo</h4>
        <div class="${ideGridClass}">
          ${ideFields}
        </div>
        <button class="pill run-module-ide">Executar módulo</button>
        <iframe class="preview-frame module-preview" title="Preview módulo ${index + 1}" sandbox="allow-scripts"></iframe>
      </div>
      <div class="module-pager">
        <button class="pill module-step" type="button" data-module-index="${index - 1}" ${hasPrevious ? '' : 'disabled'}>Anterior</button>
        <span>Módulo ${index + 1} de ${track.modules.length}</span>
        <button class="pill module-step" type="button" data-module-index="${index + 1}" ${hasNext ? '' : 'disabled'}>Próximo</button>
      </div>
    </article>
  `
}

function renderModuleMenu(track) {
  const grouped = track.modules.reduce((groups, module, index) => {
    const category = module.category || 'Módulos'
    if (!groups.has(category)) groups.set(category, [])
    groups.get(category).push({ module, index })
    return groups
  }, new Map())

  if (grouped.size <= 1) {
    return track.modules.map((module, index) => `
      <a href="#mod-${index}" class="module-link" data-module-index="${index}" data-progress-state="${getModuleProgressState(track.slug, index)}">
        <span data-progress-marker>${isModuleComplete(track.slug, index) ? '✓' : getModuleProgressState(track.slug, index) === 'started' ? '•' : ''}</span>
        Módulo ${index + 1}: ${module.title}
      </a>
    `).join('')
  }

  return [...grouped.entries()].map(([category, items]) => `
    <section class="module-menu-section">
      <p>${category}</p>
      <div>
        ${items.map(({ module, index }) => `
          <a href="#mod-${index}" class="module-link" data-module-index="${index}" data-progress-state="${getModuleProgressState(track.slug, index)}">
            <span>${String(index + 1).padStart(2, '0')}</span>
            <span data-progress-marker>${isModuleComplete(track.slug, index) ? '✓' : getModuleProgressState(track.slug, index) === 'started' ? '•' : ''}</span>
            ${module.title}
          </a>
        `).join('')}
      </div>
    </section>
  `).join('')
}

function renderModulesPage() {
  if (!moduleContent || !moduleTrailTitle || !moduleTrailDescription || !moduleTrailMeta || !moduleMenuList || !finalChallengeBox) return
  const track = getTrackFromQuery()

  if (!track) {
    moduleTrailTitle.textContent = 'Trilha não encontrada'
    moduleTrailDescription.textContent = 'Volte para trilhas e escolha uma trilha válida.'
    moduleTrailMeta.textContent = ''
    if (moduleTrailProgress) moduleTrailProgress.innerHTML = ''
    moduleMenuList.innerHTML = ''
    moduleContent.innerHTML = '<article class="content-card"><p>Não foi possível carregar os módulos.</p></article>'
    finalChallengeBox.innerHTML = ''
    return
  }

  moduleTrailTitle.textContent = `${track.name} - módulos de estudo`
  moduleTrailDescription.textContent = track.description
  const categories = [...new Set(track.modules.map((module) => module.category).filter(Boolean))]
  moduleTrailMeta.textContent = `Nível: ${track.levelLabel} | ${track.modules.length} módulos | Tags: ${track.tags.join(', ')}${categories.length ? ` | Categorias: ${categories.join(', ')}` : ''}`

  moduleMenuList.innerHTML = renderModuleMenu(track)
  updateCurrentTrackProgress(track)

  const showModule = (index, shouldScroll = false) => {
    const selectedIndex = Math.min(Math.max(index, 0), track.modules.length - 1)
    moduleContent.innerHTML = renderModuleCard(track, track.modules[selectedIndex], selectedIndex)
    moduleMenuList.querySelectorAll('.module-link').forEach((link) => {
      link.classList.toggle('active', Number(link.dataset.moduleIndex) === selectedIndex)
    })
    moduleContent.querySelectorAll('.module-card').forEach((card) => runModuleIde(card))
    updateCurrentTrackProgress(track)

    if (shouldScroll) {
      moduleContent.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  finalChallengeBox.innerHTML = `
    <article class="content-card" style="--track-accent:${track.accent}">
      <h3>${track.challenge.title}</h3>
      <p><strong>Objetivo:</strong> ${track.challenge.brief}</p>
      <p><strong>Para portfólio:</strong> ${track.challenge.portfolio}</p>
    </article>
  `

  bindModuleMenuInteractions(showModule)
  moduleContent.dataset.hasModulePager = 'true'
  moduleContent.showModule = showModule
  const initialModule = Number((window.location.hash.match(/^#mod-(\d+)$/) || [])[1] || 0)
  showModule(initialModule)
}

function renderProgressPage() {
  if (!progressDashboard) return

  const totals = tracks.reduce((acc, track) => {
    const summary = getTrackProgressSummary(track)
    return {
      completed: acc.completed + summary.completed,
      total: acc.total + summary.total
    }
  }, { completed: 0, total: 0 })
  const totalPercent = totals.total ? Math.round((totals.completed / totals.total) * 100) : 0

  const cards = tracks.map((track) => {
    const summary = getTrackProgressSummary(track)
    const moduleRows = track.modules.map((module, index) => {
      const state = getModuleProgressState(track.slug, index)
      return `
        <a href="./modulos.html?trilha=${track.slug}#mod-${index}" class="progress-module-row" data-progress-state="${state}">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <strong>${module.title}</strong>
          <em>${getModuleStateLabel(state)}</em>
        </a>
      `
    }).join('')
    const nextIndex = track.modules.findIndex((_, index) => !isModuleComplete(track.slug, index))
    const nextHref = `./modulos.html?trilha=${track.slug}#mod-${nextIndex >= 0 ? nextIndex : track.modules.length - 1}`
    const nextLabel = summary.completed === summary.total ? 'Revisar trilha' : 'Continuar'

    return `
      <article class="content-card progress-track-card" style="--track-accent:${track.accent}">
        <div class="progress-track-head">
          <div>
            <p class="module-kicker">${track.levelLabel}</p>
            <h3>${track.name}</h3>
            <p>${summary.completed} de ${summary.total} módulos concluídos</p>
          </div>
          <strong>${summary.percent}%</strong>
        </div>
        ${renderProgressBar(summary.percent)}
        <div class="progress-track-meta">
          <span>${summary.started} em andamento</span>
          <a class="pill" href="${nextHref}">${nextLabel}</a>
        </div>
        <details class="progress-track-details">
          <summary>Ver módulos</summary>
          <div>${moduleRows}</div>
        </details>
      </article>
    `
  }).join('')

  progressDashboard.innerHTML = `
    <article class="content-card progress-total-card" style="--track-accent:var(--purple)">
      <div class="progress-track-head">
        <div>
          <p class="module-kicker">Todas as trilhas</p>
          <h3>${totals.completed} de ${totals.total} módulos concluídos</h3>
        </div>
        <strong>${totalPercent}%</strong>
      </div>
      ${renderProgressBar(totalPercent)}
    </article>
    <div class="progress-track-grid">${cards}</div>
  `
}

function bindModuleMenuInteractions(showModule) {
  if (!moduleMenuList || !moduleContent) return
  const links = [...moduleMenuList.querySelectorAll('.module-link')]

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      showModule(Number(link.dataset.moduleIndex || 0), true)
    })
  })
}

function switchTab(tab) {
  if (!editor || !editorTabs) return
  if (!editorTabsAllowed.has(tab)) return
  editorState[activeTab] = editor.value
  activeTab = tab
  editor.dataset.activeTab = tab
  editor.value = editorState[activeTab]
  editorTabs.querySelectorAll('.tab-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.tab === tab))
}

function runPreview() {
  if (!editor || !preview) return
  editorState[activeTab] = editor.value
  preview.srcdoc = createPreviewSource(editorState.html, editorState.css, editorState.js)
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
      return
    }

    if (target.classList.contains('module-step') && typeof moduleContent.showModule === 'function') {
      moduleContent.showModule(Number(target.dataset.moduleIndex || 0), true)
      return
    }

    if (target.classList.contains('toggle-module-completion') && typeof moduleContent.showModule === 'function') {
      const completion = target.closest('.module-completion')
      if (!(completion instanceof HTMLElement)) return
      const trackSlug = completion.dataset.trackSlug
      const moduleIndex = Number(completion.dataset.moduleIndex || 0)
      const isCompleted = target.dataset.completed === 'true'
      const track = tracks.find((item) => item.slug === trackSlug)
      if (!track) return

      updateModuleCompletion(track.slug, moduleIndex, !isCompleted)
      updateCurrentTrackProgress(track)
      moduleContent.showModule(moduleIndex)
    }
  })
}

if (practiceDetail) {
  practiceDetail.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof HTMLElement) || !target.classList.contains('run-practice-ide')) return
    const practiceIde = target.closest('.practice-ide')
    if (practiceIde) runEmbeddedIde(practiceIde)
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

if (newProject) {
  newProject.addEventListener('click', () => {
    editorState.html = '<main>\n  <h1>Novo projeto</h1>\n  <p>Comece por HTML semântico, CSS responsivo e JS limpo.</p>\n</main>'
    editorState.css = 'body {\n  font-family: Inter, sans-serif;\n  margin: 0;\n}'
    editorState.js = "console.log('Novo projeto iniciado')"
    switchTab('html')
    runPreview()
  })
}

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.setAttribute('type', 'button')
  mobileMenuBtn.setAttribute('aria-label', 'Abrir menu')
  mobileMenuBtn.setAttribute('aria-controls', 'mobileNav')
  mobileMenuBtn.setAttribute('aria-expanded', 'false')

  if (!mobileMenuBtn.querySelector('.menu-line')) {
    const menuLine = document.createElement('span')
    menuLine.className = 'menu-line'
    menuLine.setAttribute('aria-hidden', 'true')
    mobileMenuBtn.appendChild(menuLine)
  }

  const setMobileMenu = (isOpen) => {
    mobileNav.classList.toggle('hidden', !isOpen)
    mobileMenuBtn.setAttribute('aria-expanded', String(isOpen))
    mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu')
  }

  mobileMenuBtn.addEventListener('click', () => {
    setMobileMenu(mobileNav.classList.contains('hidden'))
  })

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMobileMenu(false))
  })

  document.addEventListener('click', (event) => {
    const clickedInsideMenu = mobileNav.contains(event.target)
    const clickedButton = mobileMenuBtn.contains(event.target)

    if (!clickedInsideMenu && !clickedButton) {
      setMobileMenu(false)
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMobileMenu(false)
      mobileMenuBtn.blur()
    }
  })

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      setMobileMenu(false)
    }
  })
}

if (brandWrap) {
  brandWrap.setAttribute('role', 'link')
  brandWrap.setAttribute('tabindex', '0')
  brandWrap.setAttribute('aria-label', 'Voltar para a página inicial')

  const goHome = () => {
    window.location.href = './index.html'
  }

  brandWrap.addEventListener('click', goHome)
  brandWrap.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      goHome()
    }
  })
}

document.documentElement.dataset.theme = getSavedTheme()
createThemeToggle()

if (editor) {
  editor.dataset.activeTab = activeTab
  editor.value = editorState[activeTab]
}
initPageTransitions()
markActiveNavLink()
initDiscordCommunityCards()
renderTracks()
renderRoadmap()
renderModulesPage()
renderProgressPage()
renderPracticeLists()
renderPracticeDetail()
highlightCodeBlocks()
runPreview()
