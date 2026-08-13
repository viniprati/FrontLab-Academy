export const practiceItems = {
  exercicio: [
    {
      id: 'html-acessibilidade',
      title: 'HTML + Acessibilidade',
      summary: 'Refatore uma página semântica com formulário, navegação por teclado e landmarks.',
      level: 'Base',
      tags: ['HTML', 'A11y', 'Semântica'],
      goal: 'Transformar uma página visualmente simples em uma estrutura acessível, legível por leitores de tela e fácil de manter.',
      scenario: 'Você recebeu uma tela de cadastro feita com divs genéricas, inputs sem labels e links pouco descritivos. Sua tarefa é manter a ideia da tela, mas reconstruir a marcação com HTML semântico.',
      structure: ['Header com navegação principal', 'Main com seção de apresentação', 'Formulário com fieldset, legend e labels', 'Área de mensagens de erro/sucesso', 'Footer com links úteis'],
      criteria: ['Usar um h1 único', 'Conectar todos os labels aos campos', 'Garantir foco visível', 'Usar textos de link compreensíveis', 'Testar navegação só com teclado'],
      skeleton: {
        html: `<header>
  <nav aria-label="Navegação principal">
    <!-- links principais -->
  </nav>
</header>
<main>
  <section aria-labelledby="titulo-cadastro">
    <h1 id="titulo-cadastro">Cadastro</h1>
    <form>
      <fieldset>
        <legend>Dados pessoais</legend>
        <!-- labels e inputs -->
      </fieldset>
      <button type="submit">Enviar</button>
    </form>
  </section>
</main>`,
        css: `.form-page {
  max-width: 720px;
  margin: 0 auto;
}

:focus-visible {
  outline: 3px solid #22d3ee;
  outline-offset: 3px;
}`,
        js: `const form = document.querySelector('form')

form?.addEventListener('submit', (event) => {
  event.preventDefault()
  // valide os campos e mostre feedback acessível
})`
      }
    },
    {
      id: 'css-interface',
      title: 'CSS de interface',
      summary: 'Implemente layout responsivo de painel administrativo com estados visuais claros.',
      level: 'Base',
      tags: ['CSS', 'UI', 'Responsivo'],
      goal: 'Criar uma interface que funcione em mobile, tablet e desktop sem perder clareza.',
      scenario: 'Um painel precisa exibir métricas, filtros e uma lista de registros. O desafio é organizar tudo com CSS sem copiar um layout pronto.',
      structure: ['Topo compacto', 'Cards de métricas', 'Barra de filtros', 'Lista ou tabela adaptável', 'Estados de vazio e erro'],
      criteria: ['Usar grid/flex com quebra natural', 'Evitar overflow horizontal', 'Criar hover/focus/disabled', 'Manter espaçamentos consistentes', 'Testar em 360px, 768px e desktop'],
      skeleton: {
        html: `<main class="dashboard">
  <section class="metrics"><!-- cards --></section>
  <section class="toolbar"><!-- filtros --></section>
  <section class="records"><!-- lista responsiva --></section>
</main>`,
        css: `.dashboard {
  display: grid;
  gap: 1rem;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.75rem;
}`,
        js: `// opcional: alterne estados visuais para testar
document.body.dataset.state = 'default'`
      }
    },
    {
      id: 'javascript-produto',
      title: 'JavaScript de produto',
      summary: 'Construa filtros combinados, ordenação, paginação local e preferências salvas.',
      level: 'Intermediário',
      tags: ['JavaScript', 'Estado', 'LocalStorage'],
      goal: 'Controlar uma lista de dados local com regras reais de produto.',
      scenario: 'Você tem uma lista de itens e precisa permitir busca, filtro por categoria, ordenação e persistência das preferências do usuário.',
      structure: ['Array de dados', 'Estado central dos filtros', 'Funções puras para filtrar/ordenar', 'Renderização da lista', 'Persistência no LocalStorage'],
      criteria: ['Separar dados, estado e render', 'Combinar mais de um filtro', 'Exibir estado vazio', 'Salvar preferências', 'Evitar duplicação de lógica'],
      skeleton: {
        html: `<section>
  <input id="search" type="search" placeholder="Buscar" />
  <select id="category"></select>
  <div id="results"></div>
</section>`,
        css: `.results {
  display: grid;
  gap: 0.75rem;
}`,
        js: `const state = {
  search: '',
  category: 'all',
  sort: 'recent'
}

function applyFilters(items, currentState) {
  return items
    // filtre, ordene e retorne uma nova lista
}`
      }
    },
    {
      id: 'dom-eventos',
      title: 'DOM e eventos',
      summary: 'Monte modal, dropdown, tabs e validação de formulário com interações previsíveis.',
      level: 'Intermediário',
      tags: ['DOM', 'Eventos', 'A11y'],
      goal: 'Praticar componentes interativos com clique, teclado, foco e clique fora.',
      scenario: 'Uma tela precisa de componentes comuns de produto. Você deve criar interações reutilizáveis sem depender de framework.',
      structure: ['Botão que abre modal', 'Dropdown com fechamento externo', 'Tabs com painel ativo', 'Formulário com validação em tempo real'],
      criteria: ['Fechar modal com Escape', 'Retornar foco ao botão de origem', 'Usar aria-expanded quando fizer sentido', 'Evitar listeners duplicados', 'Validar sem travar digitação'],
      skeleton: {
        html: `<button data-open-modal>Editar perfil</button>
<dialog id="profileModal">
  <form method="dialog">
    <!-- conteúdo -->
  </form>
</dialog>`,
        css: `dialog::backdrop {
  background: rgba(0, 0, 0, 0.55);
}`,
        js: `const modal = document.querySelector('#profileModal')
const openButton = document.querySelector('[data-open-modal]')

openButton?.addEventListener('click', () => {
  modal?.showModal()
})`
      }
    },
    {
      id: 'api-estados-tela',
      title: 'API e estados de tela',
      summary: 'Busque dados com loading, erro, vazio e retry sem quebrar a experiência.',
      level: 'Intermediário',
      tags: ['API', 'Async', 'UX'],
      goal: 'Criar uma camada simples de busca e representar todos os estados importantes da interface.',
      scenario: 'A listagem depende de dados externos e precisa continuar compreensível quando a API demora, falha ou retorna vazia.',
      structure: ['Service de busca', 'Estado de carregamento', 'Estado de erro com retry', 'Estado vazio', 'Renderização de sucesso'],
      criteria: ['Usar async/await com try/catch', 'Desabilitar ações durante loading', 'Mostrar mensagem de erro útil', 'Criar botão tentar novamente', 'Não apagar dados úteis sem necessidade'],
      skeleton: {
        html: `<section aria-live="polite">
  <button id="reload">Carregar dados</button>
  <div id="status"></div>
  <div id="list"></div>
</section>`,
        css: `.is-loading {
  opacity: 0.65;
  pointer-events: none;
}`,
        js: `async function loadData() {
  try {
    // mostre loading
    // busque os dados
    // renderize sucesso ou vazio
  } catch (error) {
    // renderize erro com retry
  }
}`
      }
    },
    {
      id: 'refatoracao',
      title: 'Refatoração',
      summary: 'Reduza duplicação, separe responsabilidades e melhore legibilidade sem mudar comportamento.',
      level: 'Intermediário',
      tags: ['Refatoração', 'Qualidade', 'Arquitetura'],
      goal: 'Melhorar código existente com pequenos passos verificáveis.',
      scenario: 'Você herdou um arquivo grande com regras misturadas, nomes confusos e blocos repetidos. O objetivo é organizar sem alterar o resultado final.',
      structure: ['Mapeamento do comportamento atual', 'Extração de funções puras', 'Nomes mais claros', 'Separação de renderização e regra', 'Revisão de regressão'],
      criteria: ['Refatorar em passos pequenos', 'Manter entradas e saídas', 'Remover duplicação real', 'Evitar abstração sem necessidade', 'Testar os fluxos antes e depois'],
      skeleton: {
        html: `<main>
  <section id="app"></section>
</main>`,
        css: `/* mantenha o visual, reorganize aos poucos */`,
        js: `function normalizeItem(item) {
  // extraia regras repetidas para cá
}

function renderItem(item) {
  // deixe a renderização separada das regras
}`
      }
    }
  ],
  desafio: [
    {
      id: 'bugfix-checkout',
      title: 'Bugfix de checkout',
      summary: 'Corrija validação de formulário e bloqueio incorreto no botão de finalizar compra.',
      level: 'Desafio',
      tags: ['Bugfix', 'Formulários', 'Validação'],
      goal: 'Identificar por que o fluxo trava e entregar uma correção com validação manual clara.',
      scenario: 'O botão de finalizar compra fica desabilitado mesmo com os campos preenchidos, e alguns erros aparecem no momento errado.',
      structure: ['Formulário de dados do comprador', 'Resumo do pedido', 'Validação por campo', 'Estado do botão de finalização', 'Mensagem de sucesso/erro'],
      criteria: ['Reproduzir o bug antes de corrigir', 'Validar campos obrigatórios', 'Atualizar estado do botão em tempo real', 'Mostrar feedback específico', 'Documentar o teste manual feito'],
      skeleton: {
        html: `<main class="checkout">
  <form id="checkoutForm">
    <!-- dados do comprador e pagamento -->
    <button id="finishOrder" type="submit" disabled>Finalizar compra</button>
  </form>
  <aside><!-- resumo do pedido --></aside>
</main>`,
        css: `.checkout {
  display: grid;
  gap: 1rem;
}`,
        js: `function isCheckoutValid(formData) {
  // retorne true apenas quando tudo estiver válido
}

function syncSubmitState() {
  // habilite/desabilite o botão conforme o estado atual
}`
      }
    },
    {
      id: 'refatoracao-listagem',
      title: 'Refatoração de listagem',
      summary: 'Reescreva uma tela duplicada usando componentes reutilizáveis e funções puras.',
      level: 'Desafio',
      tags: ['Refatoração', 'Componentes', 'Listas'],
      goal: 'Transformar uma listagem difícil de manter em uma estrutura previsível.',
      scenario: 'A mesma marcação de card aparece em vários pontos, filtros repetem lógica e pequenas mudanças quebram partes diferentes da tela.',
      structure: ['Fonte única de dados', 'Função de card reutilizável', 'Funções de filtro', 'Render principal', 'Estados de vazio'],
      criteria: ['Criar uma função para card', 'Remover blocos duplicados', 'Separar filtro de render', 'Manter comportamento original', 'Testar pelo menos três cenários'],
      skeleton: {
        html: `<section>
  <div class="filters"></div>
  <div id="list"></div>
</section>`,
        css: `.list-card {
  display: grid;
  gap: 0.5rem;
}`,
        js: `function createCard(item) {
  return \`<article class="list-card">\${item.title}</article>\`
}

function renderList(items) {
  // use createCard para todos os itens
}`
      }
    },
    {
      id: 'api-fallback',
      title: 'Integração de API com fallback',
      summary: 'Implemente loading, erro, retry e estado vazio em uma listagem externa.',
      level: 'Desafio',
      tags: ['API', 'Fallback', 'Async'],
      goal: 'Criar uma experiência resiliente quando os dados vêm de fora.',
      scenario: 'A API falha de vez em quando, e a página atual fica em branco. Você precisa proteger a interface.',
      structure: ['Botão de recarregar', 'Área de status', 'Lista de resultados', 'Retry', 'Fallback local opcional'],
      criteria: ['Cobrir loading, erro, vazio e sucesso', 'Permitir tentar novamente', 'Evitar tela branca', 'Tratar resposta inesperada', 'Manter feedback visível'],
      skeleton: {
        html: `<section>
  <header>
    <h1>Dados externos</h1>
    <button id="retry">Recarregar</button>
  </header>
  <div id="status"></div>
  <div id="content"></div>
</section>`,
        css: `.status {
  border: 1px solid currentColor;
  padding: 0.75rem;
}`,
        js: `async function fetchItems() {
  const response = await fetch('https://exemplo.com/api')
  if (!response.ok) throw new Error('Falha ao carregar')
  return response.json()
}`
      }
    },
    {
      id: 'responsividade-critica',
      title: 'Responsividade crítica',
      summary: 'Corrija quebras em mobile/tablet em uma página de pricing sem alterar o desktop.',
      level: 'Desafio',
      tags: ['CSS', 'Mobile', 'Layout'],
      goal: 'Resolver problemas de layout em telas pequenas com mudanças controladas.',
      scenario: 'A página funciona no desktop, mas em mobile os cards estouram a largura e botões ficam cortados.',
      structure: ['Hero compacto', 'Cards de planos', 'Comparação de recursos', 'CTA final', 'Footer simples'],
      criteria: ['Eliminar overflow horizontal', 'Usar minmax/clamp com cuidado', 'Manter botões legíveis', 'Não quebrar desktop', 'Testar larguras entre 320px e 1024px'],
      skeleton: {
        html: `<main class="pricing">
  <section class="plans">
    <!-- cards de planos -->
  </section>
</main>`,
        css: `.plans {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 1rem;
}`,
        js: `// sem JS obrigatório: foque em CSS resiliente`
      }
    },
    {
      id: 'acessibilidade-navegacao',
      title: 'Acessibilidade de navegação',
      summary: 'Ajuste foco por teclado, labels e ARIA em menu e modal existentes.',
      level: 'Desafio',
      tags: ['A11y', 'Teclado', 'ARIA'],
      goal: 'Tornar menu e modal navegáveis por teclado e compreensíveis por tecnologia assistiva.',
      scenario: 'O menu abre só com mouse, o modal não fecha com Escape e o foco se perde depois da interação.',
      structure: ['Botão de menu com aria-expanded', 'Lista de navegação', 'Modal com título', 'Controle de foco', 'Fechamento por Escape'],
      criteria: ['Usar botões para ações', 'Atualizar aria-expanded', 'Gerenciar foco ao abrir/fechar', 'Fechar com Escape', 'Garantir foco visível'],
      skeleton: {
        html: `<button id="menuButton" aria-expanded="false" aria-controls="menuList">Menu</button>
<nav id="menuList" hidden></nav>
<dialog id="modal"><h2>Título do modal</h2></dialog>`,
        css: `:focus-visible {
  outline: 3px solid #7b5cff;
  outline-offset: 3px;
}`,
        js: `function setMenuOpen(isOpen) {
  menuButton.setAttribute('aria-expanded', String(isOpen))
  menuList.hidden = !isOpen
}`
      }
    },
    {
      id: 'performance-catalogo',
      title: 'Performance em catálogo',
      summary: 'Otimize render de grid grande com lazy loading e redução de custo de re-render.',
      level: 'Desafio',
      tags: ['Performance', 'Render', 'Catálogo'],
      goal: 'Manter uma listagem grande responsiva e barata de atualizar.',
      scenario: 'Um catálogo com muitos produtos fica lento ao filtrar, rolar e trocar ordenação.',
      structure: ['Dados paginados ou fatiados', 'Card leve', 'Imagem com loading lazy', 'Filtros com atualização controlada', 'Medição antes/depois'],
      criteria: ['Evitar renderizar tudo sem necessidade', 'Usar loading lazy em imagens', 'Reduzir manipulações repetidas do DOM', 'Medir tempo de render', 'Manter estado vazio'],
      skeleton: {
        html: `<section>
  <div class="catalog-toolbar"></div>
  <div id="catalog" class="catalog-grid"></div>
</section>`,
        css: `.catalog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
}`,
        js: `function renderCatalog(items) {
  const fragment = document.createDocumentFragment()
  // monte os cards no fragment e aplique uma vez no DOM
}`
      }
    }
  ]
}

const skeletonUpgrades = {
  exercicio: {
    'html-acessibilidade': {
      html: `<header class="site-top">
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <nav aria-label="Navegação principal">
    <a href="#beneficios">Benefícios</a>
    <a href="#cadastro">Cadastro</a>
    <a href="#ajuda">Ajuda</a>
  </nav>
</header>

<main id="conteudo">
  <section class="hero" aria-labelledby="titulo-pagina">
    <p class="eyebrow">Programa de estudos</p>
    <h1 id="titulo-pagina">Cadastro para mentoria front-end</h1>
    <p>Preencha seus dados para receber um plano inicial de estudos.</p>
  </section>

  <section id="beneficios" class="benefits" aria-labelledby="titulo-beneficios">
    <h2 id="titulo-beneficios">O que você recebe</h2>
    <ul>
      <li>Critérios de evolução</li>
      <li>Roteiro de prática semanal</li>
      <li>Indicação de próximos projetos</li>
    </ul>
  </section>

  <section id="cadastro" aria-labelledby="titulo-cadastro">
    <h2 id="titulo-cadastro">Dados do aluno</h2>
    <form novalidate>
      <fieldset>
        <legend>Informações pessoais</legend>
        <label for="name">Nome completo</label>
        <input id="name" name="name" autocomplete="name" required />
        <label for="email">E-mail</label>
        <input id="email" name="email" type="email" autocomplete="email" required />
      </fieldset>
      <fieldset>
        <legend>Objetivo</legend>
        <label for="goal">Principal meta</label>
        <textarea id="goal" name="goal" rows="4"></textarea>
      </fieldset>
      <p id="formStatus" class="status" role="status"></p>
      <button type="submit">Enviar cadastro</button>
    </form>
  </section>
</main>`,
      css: `body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: #f8fafc;
  color: #0f172a;
}

.site-top, main {
  width: min(100% - 2rem, 920px);
  margin: 0 auto;
}

.skip-link {
  position: absolute;
  transform: translateY(-140%);
}

.skip-link:focus {
  transform: translateY(0);
}

nav, .benefits ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.hero, form, .benefits {
  margin-top: 1rem;
  border: 1px solid #dbe3f0;
  border-radius: 16px;
  padding: 1rem;
  background: #ffffff;
}

label {
  display: block;
  margin-top: 0.75rem;
  font-weight: 700;
}

input, textarea, button {
  width: 100%;
  margin-top: 0.35rem;
  padding: 0.75rem;
}

:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 3px;
}`,
      js: `const form = document.querySelector('form')
const status = document.querySelector('#formStatus')

function setStatus(message, type = 'info') {
  status.textContent = message
  status.dataset.type = type
}

form?.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = new FormData(form)
  const name = String(data.get('name') || '').trim()
  const email = String(data.get('email') || '').trim()

  if (!name || !email.includes('@')) {
    setStatus('Revise nome e e-mail antes de enviar.', 'error')
    return
  }

  setStatus('Cadastro validado. Agora personalize o layout.', 'success')
})`
    },
    'css-interface': {
      html: `<main class="dashboard">
  <header class="dashboard-header">
    <div>
      <p class="eyebrow">Painel operacional</p>
      <h1>Resumo de atendimento</h1>
    </div>
    <button class="primary">Novo registro</button>
  </header>

  <section class="metrics" aria-label="Métricas principais">
    <article><span>Abertos</span><strong>24</strong></article>
    <article><span>Resolvidos</span><strong>138</strong></article>
    <article><span>SLA médio</span><strong>3h 12m</strong></article>
  </section>

  <section class="toolbar" aria-label="Filtros">
    <input type="search" placeholder="Buscar por cliente" />
    <select>
      <option>Todos os status</option>
      <option>Aberto</option>
      <option>Resolvido</option>
    </select>
  </section>

  <section class="records" aria-label="Registros">
    <article class="record">
      <strong>#4821 - Login não funciona</strong>
      <span>Alta prioridade</span>
      <button>Ver detalhes</button>
    </article>
  </section>
</main>`,
      css: `body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: #eef2f7;
  color: #172033;
}

.dashboard {
  width: min(100% - 2rem, 1100px);
  margin: 2rem auto;
  display: grid;
  gap: 1rem;
}

.dashboard-header,
.toolbar,
.record {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.75rem;
}

.metrics article,
.toolbar,
.record {
  border: 1px solid #d7dfec;
  border-radius: 14px;
  padding: 1rem;
  background: #ffffff;
}

.metrics strong {
  display: block;
  margin-top: 0.35rem;
  font-size: 2rem;
}

input, select, button {
  min-height: 42px;
}

@media (max-width: 640px) {
  .dashboard-header,
  .toolbar,
  .record {
    align-items: stretch;
    flex-direction: column;
  }
}`,
      js: `document.querySelector('.primary')?.addEventListener('click', () => {
  document.body.dataset.state = 'creating'
})

// Experimente criar estados:
// document.querySelector('.records').innerHTML = '<p>Nenhum registro encontrado.</p>'`
    },
    'javascript-produto': {
      html: `<main class="product-page">
  <header>
    <h1>Catálogo de estudos</h1>
    <p>Filtre, ordene e salve sua preferência de visualização.</p>
  </header>

  <section class="controls" aria-label="Filtros do catálogo">
    <input id="search" type="search" placeholder="Buscar tecnologia" />
    <select id="category">
      <option value="all">Todas as categorias</option>
      <option value="base">Base</option>
      <option value="framework">Framework</option>
    </select>
    <select id="sort">
      <option value="recent">Mais recentes</option>
      <option value="name">Nome</option>
    </select>
  </section>

  <p id="summary" aria-live="polite"></p>
  <section id="results" class="results"></section>
</main>`,
      css: `body {
  font-family: Inter, system-ui, sans-serif;
  margin: 0;
  background: #f8fafc;
  color: #111827;
}

.product-page {
  width: min(100% - 2rem, 960px);
  margin: 2rem auto;
}

.controls {
  display: grid;
  grid-template-columns: 1fr 180px 180px;
  gap: 0.75rem;
  margin: 1rem 0;
}

.results {
  display: grid;
  gap: 0.75rem;
}

.result-card {
  border: 1px solid #dbe3ef;
  border-radius: 14px;
  padding: 1rem;
  background: #ffffff;
}

@media (max-width: 720px) {
  .controls {
    grid-template-columns: 1fr;
  }
}`,
      js: `const items = [
  { name: 'HTML semântico', category: 'base', createdAt: 3 },
  { name: 'CSS Grid', category: 'base', createdAt: 2 },
  { name: 'React componentes', category: 'framework', createdAt: 1 }
]

const state = JSON.parse(localStorage.getItem('catalog-state') || '{}')
Object.assign(state, { search: state.search || '', category: state.category || 'all', sort: state.sort || 'recent' })

function applyFilters(list, currentState) {
  return list
    .filter((item) => currentState.category === 'all' || item.category === currentState.category)
    .filter((item) => item.name.toLowerCase().includes(currentState.search.toLowerCase()))
    .sort((a, b) => currentState.sort === 'name' ? a.name.localeCompare(b.name) : a.createdAt - b.createdAt)
}

function render() {
  const filtered = applyFilters(items, state)
  summary.textContent = filtered.length ? filtered.length + ' item(ns) encontrado(s)' : 'Nenhum item encontrado'
  results.innerHTML = filtered.map((item) => '<article class="result-card"><h2>' + item.name + '</h2><p>' + item.category + '</p></article>').join('')
  localStorage.setItem('catalog-state', JSON.stringify(state))
}

document.querySelectorAll('.controls input, .controls select').forEach((field) => {
  field.value = state[field.id]
  field.addEventListener('input', () => {
    state[field.id] = field.value
    render()
  })
})

render()`
    },
    'dom-eventos': {
      html: `<main class="demo">
  <h1>Componentes interativos</h1>

  <button data-open-modal>Editar perfil</button>
  <button id="dropdownButton" aria-expanded="false" aria-controls="dropdownMenu">Opções</button>
  <div id="dropdownMenu" class="menu" hidden>
    <button>Duplicar</button>
    <button>Arquivar</button>
  </div>

  <div class="tabs" role="tablist" aria-label="Seções do perfil">
    <button role="tab" aria-selected="true" data-panel="dados">Dados</button>
    <button role="tab" aria-selected="false" data-panel="seguranca">Segurança</button>
  </div>
  <section id="dados">Conteúdo de dados</section>
  <section id="seguranca" hidden>Conteúdo de segurança</section>

  <dialog id="profileModal">
    <form method="dialog">
      <h2>Editar perfil</h2>
      <label>Nome <input required /></label>
      <button value="cancel">Cancelar</button>
      <button value="save">Salvar</button>
    </form>
  </dialog>
</main>`,
      css: `body {
  font-family: Inter, system-ui, sans-serif;
  padding: 2rem;
}

button, input {
  min-height: 40px;
}

.menu {
  display: grid;
  width: 180px;
  margin-top: 0.5rem;
  border: 1px solid #d6ddeb;
  border-radius: 12px;
  padding: 0.5rem;
  background: white;
}

.tabs {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

[aria-selected="true"] {
  background: #1d4ed8;
  color: white;
}

dialog::backdrop {
  background: rgba(0, 0, 0, 0.55);
}`,
      js: `const modal = document.querySelector('#profileModal')
const openButton = document.querySelector('[data-open-modal]')
const dropdownButton = document.querySelector('#dropdownButton')
const dropdownMenu = document.querySelector('#dropdownMenu')

openButton?.addEventListener('click', () => modal?.showModal())

dropdownButton?.addEventListener('click', () => {
  const isOpen = dropdownButton.getAttribute('aria-expanded') === 'true'
  dropdownButton.setAttribute('aria-expanded', String(!isOpen))
  dropdownMenu.hidden = isOpen
})

document.addEventListener('click', (event) => {
  if (!dropdownMenu || !dropdownButton) return
  if (dropdownMenu.contains(event.target) || dropdownButton.contains(event.target)) return
  dropdownButton.setAttribute('aria-expanded', 'false')
  dropdownMenu.hidden = true
})

document.querySelectorAll('[role="tab"]').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('[role="tab"]').forEach((item) => item.setAttribute('aria-selected', String(item === tab)))
    document.querySelectorAll('#dados, #seguranca').forEach((panel) => panel.hidden = panel.id !== tab.dataset.panel)
  })
})`
    },
    'api-estados-tela': {
      html: `<main class="api-page">
  <header>
    <h1>Biblioteca externa</h1>
    <button id="reload">Carregar dados</button>
  </header>

  <section id="status" class="status" aria-live="polite"></section>
  <section id="list" class="list"></section>
</main>`,
      css: `body {
  font-family: Inter, system-ui, sans-serif;
  margin: 0;
  background: #f8fafc;
}

.api-page {
  width: min(100% - 2rem, 860px);
  margin: 2rem auto;
}

header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.status {
  margin: 1rem 0;
  border-radius: 12px;
  padding: 0.85rem;
  background: #e0f2fe;
}

.list {
  display: grid;
  gap: 0.75rem;
}

.is-loading {
  opacity: 0.65;
  pointer-events: none;
}`,
      js: `const fallback = [
  { title: 'Item local de fallback', body: 'Use enquanto a API não responde.' }
]

function setStatus(message, type = 'info') {
  status.textContent = message
  status.dataset.type = type
}

function renderItems(items) {
  list.innerHTML = items.map((item) => '<article><h2>' + item.title + '</h2><p>' + item.body + '</p></article>').join('')
}

async function loadData() {
  document.body.classList.add('is-loading')
  setStatus('Carregando dados...')

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    if (!response.ok) throw new Error('Falha ao carregar')
    const data = await response.json()
    setStatus(data.length ? 'Dados carregados.' : 'Nenhum dado encontrado.')
    renderItems(data.length ? data : fallback)
  } catch (error) {
    setStatus('Não foi possível carregar. Mostrando fallback.')
    renderItems(fallback)
  } finally {
    document.body.classList.remove('is-loading')
  }
}

reload.addEventListener('click', loadData)
loadData()`
    },
    refatoracao: {
      html: `<main class="orders-page">
  <header>
    <h1>Pedidos recentes</h1>
    <p>Refatore sem mudar o resultado visual.</p>
  </header>
  <section id="app"></section>
</main>`,
      css: `body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: #f8fafc;
}

.orders-page {
  width: min(100% - 2rem, 900px);
  margin: 2rem auto;
}

.order-card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.75rem;
  margin-top: 0.75rem;
  border: 1px solid #d9e2f0;
  border-radius: 14px;
  padding: 1rem;
  background: #ffffff;
}`,
      js: `const orders = [
  { id: 101, client: 'Ana', total: 420, status: 'paid' },
  { id: 102, client: 'Bruno', total: 180, status: 'pending' }
]

function formatCurrency(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function getStatusLabel(status) {
  const labels = { paid: 'Pago', pending: 'Pendente' }
  return labels[status] || 'Em análise'
}

function renderOrder(order) {
  return '<article class="order-card"><div><strong>Pedido #' + order.id + '</strong><p>' + order.client + '</p></div><div><strong>' + formatCurrency(order.total) + '</strong><p>' + getStatusLabel(order.status) + '</p></div></article>'
}

function renderOrders(list) {
  app.innerHTML = list.map(renderOrder).join('')
}

renderOrders(orders)`
    }
  },
  desafio: {
    'bugfix-checkout': {
      html: `<main class="checkout">
  <form id="checkoutForm" novalidate>
    <h1>Finalizar compra</h1>
    <label>Nome no pedido <input name="name" required /></label>
    <label>E-mail <input name="email" type="email" required /></label>
    <label>CEP <input name="zip" inputmode="numeric" required /></label>
    <label>
      <input name="terms" type="checkbox" />
      Aceito os termos da compra
    </label>
    <p id="formMessage" role="status"></p>
    <button id="finishOrder" type="submit" disabled>Finalizar compra</button>
  </form>

  <aside class="summary">
    <h2>Resumo</h2>
    <p>Plano Front-End Pro</p>
    <strong>R$ 79,90</strong>
  </aside>
</main>`,
      css: `body {
  font-family: Inter, system-ui, sans-serif;
  margin: 0;
  background: #f1f5f9;
}

.checkout {
  width: min(100% - 2rem, 960px);
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 1rem;
}

form, .summary {
  border: 1px solid #d9e2ef;
  border-radius: 16px;
  padding: 1rem;
  background: #ffffff;
}

label {
  display: grid;
  gap: 0.35rem;
  margin-top: 0.75rem;
}

button:disabled {
  opacity: 0.45;
}

@media (max-width: 760px) {
  .checkout {
    grid-template-columns: 1fr;
  }
}`,
      js: `const form = document.querySelector('#checkoutForm')
const button = document.querySelector('#finishOrder')
const message = document.querySelector('#formMessage')

function isCheckoutValid(formData) {
  const name = String(formData.get('name') || '').trim()
  const email = String(formData.get('email') || '')
  const zip = String(formData.get('zip') || '').replace(/\\D/g, '')
  const terms = formData.get('terms') === 'on'
  return name.length >= 3 && email.includes('@') && zip.length >= 8 && terms
}

function syncSubmitState() {
  const formData = new FormData(form)
  button.disabled = !isCheckoutValid(formData)
}

form.addEventListener('input', syncSubmitState)
form.addEventListener('submit', (event) => {
  event.preventDefault()
  message.textContent = button.disabled ? 'Revise os campos antes de finalizar.' : 'Pedido pronto para envio.'
})

syncSubmitState()`
    },
    'refatoracao-listagem': {
      html: `<main class="screen">
  <header>
    <h1>Clientes ativos</h1>
    <input id="searchClient" type="search" placeholder="Buscar cliente" />
  </header>
  <section id="list" class="list"></section>
</main>`,
      css: `body {
  font-family: Inter, system-ui, sans-serif;
  margin: 0;
  background: #f8fafc;
}

.screen {
  width: min(100% - 2rem, 980px);
  margin: 2rem auto;
}

.list {
  display: grid;
  gap: 0.75rem;
}

.list-card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
  border: 1px solid #dbe3ef;
  border-radius: 14px;
  padding: 1rem;
  background: #ffffff;
}`,
      js: `const clients = [
  { name: 'Ana Lima', plan: 'Pro', active: true },
  { name: 'Caio Rocha', plan: 'Starter', active: false },
  { name: 'Nina Souza', plan: 'Team', active: true }
]

function createCard(item) {
  return '<article class="list-card"><div><strong>' + item.name + '</strong><p>' + item.plan + '</p></div><span>' + (item.active ? 'Ativo' : 'Pausado') + '</span></article>'
}

function filterClients(list, query) {
  return list.filter((client) => client.name.toLowerCase().includes(query.toLowerCase()))
}

function renderList(items) {
  list.innerHTML = items.length ? items.map(createCard).join('') : '<p>Nenhum cliente encontrado.</p>'
}

searchClient.addEventListener('input', () => {
  renderList(filterClients(clients, searchClient.value))
})

renderList(clients)`
    },
    'api-fallback': {
      html: `<main class="external-data">
  <header>
    <div>
      <h1>Dados externos</h1>
      <p>Carregue informações e trate falhas sem tela vazia.</p>
    </div>
    <button id="retry">Recarregar</button>
  </header>
  <div id="status" class="status" aria-live="polite"></div>
  <section id="content" class="cards"></section>
</main>`,
      css: `body {
  font-family: Inter, system-ui, sans-serif;
  margin: 0;
  background: #f8fafc;
}

.external-data {
  width: min(100% - 2rem, 900px);
  margin: 2rem auto;
}

header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.status {
  margin: 1rem 0;
  border: 1px solid currentColor;
  border-radius: 12px;
  padding: 0.75rem;
}

.cards {
  display: grid;
  gap: 0.75rem;
}`,
      js: `const fallbackItems = [
  { title: 'Conteúdo local', description: 'Renderizado quando a API falha.' }
]

function renderStatus(message) {
  status.textContent = message
}

function renderCards(items) {
  content.innerHTML = items.map((item) => '<article><h2>' + item.title + '</h2><p>' + (item.description || item.body || '') + '</p></article>').join('')
}

async function fetchItems() {
  renderStatus('Carregando...')
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
    if (!response.ok) throw new Error('Falha ao carregar')
    const data = await response.json()
    renderStatus(data.length ? 'Conteúdo atualizado.' : 'Nada encontrado.')
    renderCards(data.length ? data : fallbackItems)
  } catch (error) {
    renderStatus('Erro na API. Usando fallback local.')
    renderCards(fallbackItems)
  }
}

retry.addEventListener('click', fetchItems)
fetchItems()`
    },
    'responsividade-critica': {
      html: `<main class="pricing">
  <section class="pricing-hero">
    <p class="eyebrow">Planos</p>
    <h1>Escolha seu plano de estudo</h1>
    <p>Corrija o layout para funcionar bem em telas pequenas.</p>
  </section>

  <section class="plans" aria-label="Planos disponíveis">
    <article class="plan">
      <h2>Starter</h2>
      <strong>R$ 0</strong>
      <ul><li>Trilhas básicas</li><li>Exercícios livres</li></ul>
      <button>Começar</button>
    </article>
    <article class="plan featured">
      <h2>Pro</h2>
      <strong>R$ 29</strong>
      <ul><li>Desafios guiados</li><li>Projetos de portfólio</li></ul>
      <button>Assinar</button>
    </article>
  </section>
</main>`,
      css: `body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: #f8fafc;
}

.pricing {
  width: min(100% - 2rem, 1080px);
  margin: 2rem auto;
}

.pricing-hero {
  max-width: 680px;
}

.plans {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.plan {
  display: grid;
  gap: 0.75rem;
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  padding: 1rem;
  background: #ffffff;
}

.plan button {
  width: 100%;
  min-height: 44px;
}

@media (max-width: 420px) {
  .pricing {
    width: min(100% - 1rem, 1080px);
  }
}`,
      js: `document.querySelectorAll('.plan button').forEach((button) => {
  button.addEventListener('click', () => {
    button.textContent = 'Selecionado'
  })
})`
    },
    'acessibilidade-navegacao': {
      html: `<header class="topbar">
  <button id="menuButton" aria-expanded="false" aria-controls="menuList">Menu</button>
  <nav id="menuList" hidden aria-label="Menu principal">
    <a href="#inicio">Início</a>
    <a href="#recursos">Recursos</a>
    <a href="#contato">Contato</a>
  </nav>
</header>

<main id="inicio">
  <h1>Fluxo acessível</h1>
  <button id="openModal">Abrir modal</button>
</main>

<dialog id="modal" aria-labelledby="modalTitle">
  <h2 id="modalTitle">Preferências</h2>
  <p>Gerencie foco, Escape e retorno ao botão de origem.</p>
  <button id="closeModal">Fechar</button>
</dialog>`,
      css: `body {
  font-family: Inter, system-ui, sans-serif;
  padding: 2rem;
}

.topbar {
  display: flex;
  align-items: center;
  gap: 1rem;
}

nav {
  display: flex;
  gap: 0.75rem;
}

dialog {
  border: 0;
  border-radius: 16px;
  padding: 1.25rem;
}

dialog::backdrop {
  background: rgba(15, 23, 42, 0.55);
}

:focus-visible {
  outline: 3px solid #7b5cff;
  outline-offset: 3px;
}`,
      js: `const menuButton = document.querySelector('#menuButton')
const menuList = document.querySelector('#menuList')
const modal = document.querySelector('#modal')
const openModal = document.querySelector('#openModal')
const closeModal = document.querySelector('#closeModal')

function setMenuOpen(isOpen) {
  menuButton.setAttribute('aria-expanded', String(isOpen))
  menuList.hidden = !isOpen
}

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true')
})

openModal.addEventListener('click', () => modal.showModal())
closeModal.addEventListener('click', () => {
  modal.close()
  openModal.focus()
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false)
})`
    },
    'performance-catalogo': {
      html: `<main class="catalog-page">
  <header>
    <h1>Catálogo performático</h1>
    <input id="catalogSearch" type="search" placeholder="Buscar produto" />
  </header>
  <p id="perfStatus"></p>
  <section id="catalog" class="catalog-grid"></section>
</main>`,
      css: `body {
  font-family: Inter, system-ui, sans-serif;
  margin: 0;
  background: #f8fafc;
}

.catalog-page {
  width: min(100% - 2rem, 1100px);
  margin: 2rem auto;
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
}

.product-card {
  border: 1px solid #dbe3ef;
  border-radius: 14px;
  padding: 1rem;
  background: #ffffff;
}

.product-card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 10px;
}`,
      js: `const products = Array.from({ length: 60 }, (_, index) => ({
  id: index + 1,
  name: 'Produto ' + (index + 1),
  price: 19 + index
}))

function createProductCard(product) {
  const article = document.createElement('article')
  article.className = 'product-card'
  article.innerHTML = '<img loading="lazy" src="https://picsum.photos/seed/' + product.id + '/320/240" alt=""><h2>' + product.name + '</h2><p>R$ ' + product.price + ',00</p>'
  return article
}

function renderCatalog(items) {
  const start = performance.now()
  const fragment = document.createDocumentFragment()
  items.slice(0, 24).forEach((item) => fragment.appendChild(createProductCard(item)))
  catalog.replaceChildren(fragment)
  perfStatus.textContent = 'Render: ' + Math.round(performance.now() - start) + 'ms para ' + Math.min(items.length, 24) + ' cards'
}

catalogSearch.addEventListener('input', () => {
  const query = catalogSearch.value.toLowerCase()
  renderCatalog(products.filter((product) => product.name.toLowerCase().includes(query)))
})

renderCatalog(products)`
    }
  }
}

Object.entries(skeletonUpgrades).forEach(([type, items]) => {
  practiceItems[type].forEach((item) => {
    if (items[item.id]) item.skeleton = items[item.id]
  })
})

practiceItems.projeto = [
  {
    id: 'dashboard-suporte',
    title: 'Dashboard de suporte ao cliente',
    summary: 'Fila de tickets, filtros, status, prioridade, SLA visual e histórico local.',
    level: 'Portfólio',
    tags: ['Dashboard', 'UX', 'Dados'],
    goal: 'Criar uma interface de operação para acompanhar chamados, prioridades e prazos de atendimento.',
    scenario: 'Uma equipe de suporte precisa enxergar rapidamente quais tickets estão atrasados, quais são críticos e qual agente está responsável por cada atendimento.',
    structure: ['Resumo de métricas', 'Tabela/lista de tickets', 'Filtros por status e prioridade', 'Detalhe do ticket selecionado', 'Histórico de ações'],
    criteria: ['Filtrar tickets sem recarregar a página', 'Mostrar estado vazio', 'Destacar prioridade e SLA', 'Funcionar bem no mobile', 'Documentar decisões no README'],
    skeleton: {
      html: `<main class="support-dashboard">
  <header class="page-head">
    <div>
      <p class="eyebrow">Central de suporte</p>
      <h1>Fila de tickets</h1>
    </div>
    <button id="newTicket">Novo ticket</button>
  </header>

  <section class="metrics" aria-label="Resumo da fila">
    <article><span>Abertos</span><strong>18</strong></article>
    <article><span>Críticos</span><strong>4</strong></article>
    <article><span>SLA vencendo</span><strong>7</strong></article>
  </section>

  <section class="toolbar">
    <input id="ticketSearch" type="search" placeholder="Buscar ticket ou cliente" />
    <select id="priorityFilter">
      <option value="all">Todas prioridades</option>
      <option value="alta">Alta</option>
      <option value="media">Média</option>
      <option value="baixa">Baixa</option>
    </select>
  </section>

  <section id="ticketList" class="ticket-list"></section>
</main>`,
      css: `body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: #f3f6fb;
  color: #172033;
}

.support-dashboard {
  width: min(100% - 2rem, 1120px);
  margin: 2rem auto;
  display: grid;
  gap: 1rem;
}

.page-head, .toolbar, .ticket-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.75rem;
}

.metrics article, .toolbar, .ticket-card {
  border: 1px solid #d9e2ef;
  border-radius: 16px;
  padding: 1rem;
  background: white;
}

.ticket-list {
  display: grid;
  gap: 0.75rem;
}

@media (max-width: 700px) {
  .page-head, .toolbar, .ticket-card {
    align-items: stretch;
    flex-direction: column;
  }
}`,
      js: `const tickets = [
  { id: 4821, client: 'Loja Norte', title: 'Erro no login', priority: 'alta', status: 'Aberto' },
  { id: 4822, client: 'Studio Mar', title: 'Dúvida sobre cobrança', priority: 'media', status: 'Em análise' },
  { id: 4823, client: 'Tech Rio', title: 'Página lenta', priority: 'baixa', status: 'Aberto' }
]

function renderTickets(list) {
  ticketList.innerHTML = list.length
    ? list.map((ticket) => '<article class="ticket-card"><div><strong>#' + ticket.id + ' - ' + ticket.title + '</strong><p>' + ticket.client + '</p></div><span>' + ticket.priority + '</span><button>Detalhes</button></article>').join('')
    : '<p>Nenhum ticket encontrado.</p>'
}

function applyFilters() {
  const query = ticketSearch.value.toLowerCase()
  const priority = priorityFilter.value
  const filtered = tickets
    .filter((ticket) => priority === 'all' || ticket.priority === priority)
    .filter((ticket) => (ticket.title + ticket.client).toLowerCase().includes(query))
  renderTickets(filtered)
}

ticketSearch.addEventListener('input', applyFilters)
priorityFilter.addEventListener('change', applyFilters)
renderTickets(tickets)`
    }
  },
  {
    id: 'painel-financeiro',
    title: 'Painel financeiro pessoal',
    summary: 'Lançamentos, categorias, gráficos, metas mensais e exportação CSV.',
    level: 'Portfólio',
    tags: ['Finanças', 'Estado', 'Gráficos'],
    goal: 'Construir um painel para registrar entradas e saídas, visualizar saldo e acompanhar metas.',
    scenario: 'Uma pessoa quer entender para onde o dinheiro está indo, classificar gastos por categoria e exportar os dados para análise externa.',
    structure: ['Resumo financeiro', 'Formulário de lançamento', 'Lista de transações', 'Categorias e metas', 'Exportação CSV'],
    criteria: ['Calcular saldo automaticamente', 'Filtrar por categoria', 'Validar formulário', 'Persistir dados localmente', 'Criar README com regras de negócio'],
    skeleton: {
      html: `<main class="finance-app">
  <header>
    <h1>Painel financeiro</h1>
    <button id="exportCsv">Exportar CSV</button>
  </header>

  <section class="summary">
    <article><span>Saldo</span><strong id="balance">R$ 0,00</strong></article>
    <article><span>Entradas</span><strong id="income">R$ 0,00</strong></article>
    <article><span>Saídas</span><strong id="expense">R$ 0,00</strong></article>
  </section>

  <form id="transactionForm">
    <input name="description" placeholder="Descrição" required />
    <input name="amount" type="number" step="0.01" placeholder="Valor" required />
    <select name="type"><option value="income">Entrada</option><option value="expense">Saída</option></select>
    <button>Adicionar</button>
  </form>

  <section id="transactions" class="transactions"></section>
</main>`,
      css: `body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #f8fafc; }
.finance-app { width: min(100% - 2rem, 980px); margin: 2rem auto; display: grid; gap: 1rem; }
header, form { display: flex; gap: 0.75rem; justify-content: space-between; }
.summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 0.75rem; }
.summary article, form, .transaction { border: 1px solid #dbe3ef; border-radius: 16px; padding: 1rem; background: #fff; }
.transactions { display: grid; gap: 0.75rem; }
.transaction { display: flex; justify-content: space-between; gap: 1rem; }
@media (max-width: 720px) { header, form, .transaction { flex-direction: column; } }`,
      js: `let transactions = JSON.parse(localStorage.getItem('transactions') || '[]')

function money(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function render() {
  const incomeTotal = transactions.filter((item) => item.type === 'income').reduce((sum, item) => sum + item.amount, 0)
  const expenseTotal = transactions.filter((item) => item.type === 'expense').reduce((sum, item) => sum + item.amount, 0)
  balance.textContent = money(incomeTotal - expenseTotal)
  income.textContent = money(incomeTotal)
  expense.textContent = money(expenseTotal)
  transactionsEl.innerHTML = transactions.map((item) => '<article class="transaction"><span>' + item.description + '</span><strong>' + money(item.amount) + '</strong></article>').join('')
  localStorage.setItem('transactions', JSON.stringify(transactions))
}

const transactionsEl = document.querySelector('#transactions')
transactionForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = new FormData(transactionForm)
  transactions.push({ description: data.get('description'), amount: Number(data.get('amount')), type: data.get('type') })
  transactionForm.reset()
  render()
})

render()`
    }
  },
  {
    id: 'gestor-blog',
    title: 'Gestor de conteúdo para blog',
    summary: 'Editor de posts, preview, agendamento, tags e busca avançada.',
    level: 'Portfólio',
    tags: ['CMS', 'Editor', 'Preview'],
    goal: 'Criar um painel simples para escrever, revisar e organizar posts.',
    scenario: 'Um blog técnico precisa de rascunhos, tags, preview do conteúdo e controle de publicação.',
    structure: ['Lista de posts', 'Editor de título e conteúdo', 'Preview ao vivo', 'Tags', 'Status de publicação'],
    criteria: ['Criar preview em tempo real', 'Salvar rascunhos', 'Filtrar por status', 'Evitar perder conteúdo digitado', 'Documentar fluxo editorial'],
    skeleton: {
      html: `<main class="blog-manager">
  <aside>
    <h1>Posts</h1>
    <input id="postSearch" type="search" placeholder="Buscar post" />
    <section id="postList"></section>
  </aside>
  <section class="editor">
    <input id="titleInput" placeholder="Título do post" />
    <textarea id="bodyInput" rows="8" placeholder="Escreva o conteúdo"></textarea>
    <input id="tagsInput" placeholder="Tags separadas por vírgula" />
  </section>
  <section class="preview">
    <p class="eyebrow">Preview</p>
    <h2 id="previewTitle">Título</h2>
    <p id="previewBody">Conteúdo do post...</p>
  </section>
</main>`,
      css: `body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #f8fafc; }
.blog-manager { width: min(100% - 2rem, 1180px); margin: 2rem auto; display: grid; grid-template-columns: 260px 1fr 1fr; gap: 1rem; }
aside, .editor, .preview { border: 1px solid #dbe3ef; border-radius: 16px; padding: 1rem; background: white; }
.editor { display: grid; gap: 0.75rem; }
input, textarea { width: 100%; padding: 0.75rem; }
@media (max-width: 900px) { .blog-manager { grid-template-columns: 1fr; } }`,
      js: `const draftKey = 'blog-draft'
const fields = [titleInput, bodyInput, tagsInput]

function updatePreview() {
  previewTitle.textContent = titleInput.value || 'Título'
  previewBody.textContent = bodyInput.value || 'Conteúdo do post...'
  localStorage.setItem(draftKey, JSON.stringify({
    title: titleInput.value,
    body: bodyInput.value,
    tags: tagsInput.value
  }))
}

const saved = JSON.parse(localStorage.getItem(draftKey) || '{}')
titleInput.value = saved.title || ''
bodyInput.value = saved.body || ''
tagsInput.value = saved.tags || ''
fields.forEach((field) => field.addEventListener('input', updatePreview))
updatePreview()`
    }
  },
  {
    id: 'portal-vagas',
    title: 'Portal de vagas front-end',
    summary: 'Listagem com filtros multi-critério, favoritos e comparador de vagas.',
    level: 'Portfólio',
    tags: ['Listagem', 'Filtros', 'Favoritos'],
    goal: 'Criar uma experiência para buscar vagas, salvar favoritas e comparar oportunidades.',
    scenario: 'Uma pessoa em busca de vaga precisa filtrar por stack, senioridade, modelo de trabalho e salário.',
    structure: ['Busca e filtros', 'Cards de vagas', 'Favoritos', 'Comparador', 'Estado vazio'],
    criteria: ['Combinar múltiplos filtros', 'Salvar favoritos', 'Mostrar quantidade de resultados', 'Criar detalhe da vaga', 'Explicar decisões no README'],
    skeleton: {
      html: `<main class="jobs">
  <header><h1>Vagas front-end</h1><p id="resultCount"></p></header>
  <section class="filters">
    <input id="jobSearch" type="search" placeholder="Buscar vaga" />
    <select id="seniority"><option value="all">Todas senioridades</option><option>Júnior</option><option>Pleno</option><option>Sênior</option></select>
  </section>
  <section id="jobList" class="job-list"></section>
</main>`,
      css: `body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #f8fafc; }
.jobs { width: min(100% - 2rem, 1040px); margin: 2rem auto; display: grid; gap: 1rem; }
.filters { display: grid; grid-template-columns: 1fr 220px; gap: 0.75rem; }
.job-list { display: grid; gap: 0.75rem; }
.job-card { border: 1px solid #dbe3ef; border-radius: 16px; padding: 1rem; background: #fff; }
@media (max-width: 680px) { .filters { grid-template-columns: 1fr; } }`,
      js: `const jobs = [
  { title: 'Front-end Júnior', company: 'Atlas', seniority: 'Júnior', stack: 'HTML CSS JS' },
  { title: 'React Pleno', company: 'Nimbo', seniority: 'Pleno', stack: 'React TypeScript' },
  { title: 'UI Engineer Sênior', company: 'Vetor', seniority: 'Sênior', stack: 'Design System' }
]

const favorites = new Set(JSON.parse(localStorage.getItem('favorite-jobs') || '[]'))

function renderJobs() {
  const query = jobSearch.value.toLowerCase()
  const level = seniority.value
  const filtered = jobs.filter((job) => (level === 'all' || job.seniority === level) && (job.title + job.company + job.stack).toLowerCase().includes(query))
  resultCount.textContent = filtered.length + ' vaga(s) encontrada(s)'
  jobList.innerHTML = filtered.map((job, index) => '<article class="job-card"><h2>' + job.title + '</h2><p>' + job.company + ' - ' + job.stack + '</p><button data-id="' + index + '">' + (favorites.has(index) ? 'Favorita' : 'Favoritar') + '</button></article>').join('')
}

document.addEventListener('click', (event) => {
  if (!event.target.matches('[data-id]')) return
  const id = Number(event.target.dataset.id)
  favorites.has(id) ? favorites.delete(id) : favorites.add(id)
  localStorage.setItem('favorite-jobs', JSON.stringify([...favorites]))
  renderJobs()
})

jobSearch.addEventListener('input', renderJobs)
seniority.addEventListener('change', renderJobs)
renderJobs()`
    }
  },
  {
    id: 'controle-estoque',
    title: 'Controle de estoque de pequeno negócio',
    summary: 'Entrada/saída, alertas de mínimo, fornecedor e histórico de movimentações.',
    level: 'Portfólio',
    tags: ['CRUD', 'Estoque', 'Dados'],
    goal: 'Criar uma interface para controlar produtos, quantidades mínimas e movimentações.',
    scenario: 'Um pequeno negócio precisa saber quando repor produtos e registrar entradas e saídas.',
    structure: ['Cadastro de produto', 'Lista de estoque', 'Alerta de mínimo', 'Movimentação', 'Histórico'],
    criteria: ['Validar quantidades', 'Destacar estoque baixo', 'Registrar movimentações', 'Persistir dados', 'Criar estado vazio'],
    skeleton: {
      html: `<main class="stock-app">
  <header><h1>Estoque</h1></header>
  <form id="productForm">
    <input name="name" placeholder="Produto" required />
    <input name="quantity" type="number" placeholder="Quantidade" required />
    <input name="minimum" type="number" placeholder="Mínimo" required />
    <button>Adicionar</button>
  </form>
  <section id="stockList" class="stock-list"></section>
</main>`,
      css: `body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #f8fafc; }
.stock-app { width: min(100% - 2rem, 920px); margin: 2rem auto; display: grid; gap: 1rem; }
form { display: grid; grid-template-columns: 1fr 140px 140px auto; gap: 0.75rem; }
.stock-item { border: 1px solid #dbe3ef; border-radius: 16px; padding: 1rem; background: #fff; display: flex; justify-content: space-between; }
.low { border-color: #f59e0b; background: #fffbeb; }
@media (max-width: 760px) { form, .stock-item { grid-template-columns: 1fr; flex-direction: column; } }`,
      js: `let products = JSON.parse(localStorage.getItem('products') || '[]')

function renderStock() {
  stockList.innerHTML = products.length
    ? products.map((product, index) => '<article class="stock-item ' + (product.quantity <= product.minimum ? 'low' : '') + '"><div><strong>' + product.name + '</strong><p>Qtd: ' + product.quantity + ' / mínimo: ' + product.minimum + '</p></div><button data-index="' + index + '">Saída</button></article>').join('')
    : '<p>Nenhum produto cadastrado.</p>'
  localStorage.setItem('products', JSON.stringify(products))
}

productForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = new FormData(productForm)
  products.push({ name: data.get('name'), quantity: Number(data.get('quantity')), minimum: Number(data.get('minimum')) })
  productForm.reset()
  renderStock()
})

stockList.addEventListener('click', (event) => {
  if (!event.target.matches('[data-index]')) return
  products[Number(event.target.dataset.index)].quantity -= 1
  renderStock()
})

renderStock()`
    }
  },
  {
    id: 'agenda-equipe',
    title: 'Agenda de equipe com conflitos',
    summary: 'Calendário, disponibilidade, conflitos de horário e notas por reunião.',
    level: 'Portfólio',
    tags: ['Calendário', 'Validação', 'Equipe'],
    goal: 'Criar uma agenda que detecta conflito de horário e organiza reuniões por pessoa.',
    scenario: 'Uma equipe pequena precisa marcar reuniões sem sobrepor horários e manter notas rápidas por evento.',
    structure: ['Formulário de evento', 'Lista por dia', 'Validação de conflito', 'Participantes', 'Notas da reunião'],
    criteria: ['Detectar sobreposição de horários', 'Permitir excluir evento', 'Mostrar feedback claro', 'Persistir agenda', 'Funcionar no mobile'],
    skeleton: {
      html: `<main class="team-agenda">
  <header><h1>Agenda da equipe</h1></header>
  <form id="eventForm">
    <input name="title" placeholder="Reunião" required />
    <input name="date" type="date" required />
    <input name="start" type="time" required />
    <input name="end" type="time" required />
    <button>Adicionar</button>
  </form>
  <p id="agendaStatus" role="status"></p>
  <section id="eventList" class="event-list"></section>
</main>`,
      css: `body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #f8fafc; }
.team-agenda { width: min(100% - 2rem, 940px); margin: 2rem auto; display: grid; gap: 1rem; }
form { display: grid; grid-template-columns: 1fr 150px 120px 120px auto; gap: 0.75rem; }
.event-card { border: 1px solid #dbe3ef; border-radius: 16px; padding: 1rem; background: #fff; }
.conflict { color: #b91c1c; font-weight: 700; }
@media (max-width: 820px) { form { grid-template-columns: 1fr; } }`,
      js: `let events = JSON.parse(localStorage.getItem('events') || '[]')

function hasConflict(nextEvent) {
  return events.some((event) => event.date === nextEvent.date && nextEvent.start < event.end && nextEvent.end > event.start)
}

function renderEvents() {
  eventList.innerHTML = events.length
    ? events.map((event) => '<article class="event-card"><strong>' + event.title + '</strong><p>' + event.date + ' - ' + event.start + ' às ' + event.end + '</p></article>').join('')
    : '<p>Nenhum evento marcado.</p>'
  localStorage.setItem('events', JSON.stringify(events))
}

eventForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = new FormData(eventForm)
  const nextEvent = Object.fromEntries(data.entries())
  if (nextEvent.end <= nextEvent.start || hasConflict(nextEvent)) {
    agendaStatus.textContent = 'Horário inválido ou em conflito.'
    agendaStatus.className = 'conflict'
    return
  }
  events.push(nextEvent)
  agendaStatus.textContent = 'Evento adicionado.'
  eventForm.reset()
  renderEvents()
})

renderEvents()`
    }
  }
]
