import { htmlLessons as sourceHtmlLessons } from '../../modulos-html.js'

const HTML_MODULE_CATEGORY_RANGES = [
  { end: 2, category: 'Fundamentos do HTML' },
  { end: 4, category: 'Estrutura da Página' },
  { end: 8, category: 'Textos e Conteúdo' },
  { end: 11, category: 'Links e Navegação' },
  { end: 14, category: 'Imagens e Mídia' },
  { end: 19, category: 'Listas e Tabelas' },
  { end: 29, category: 'Formulários' },
  { end: 41, category: 'Semântica e Acessibilidade' },
  { end: 43, category: 'Organização de Projeto' },
  { end: 50, category: 'Projeto Final' }
]

const categoryApplications = {
  'Fundamentos do HTML': 'No cotidiano de desenvolvimento, esse fundamento aparece quando voce precisa decidir se um problema pertence ao HTML, ao CSS ou ao JavaScript. Essa separacao evita solucoes confusas: HTML descreve a estrutura, CSS cuida da apresentacao e JavaScript controla comportamentos dinamicos.',
  'Estrutura da Página': 'Esse conhecimento aparece em qualquer arquivo HTML real. Uma pagina bem estruturada facilita manutencao, publicacao, SEO, acessibilidade, revisao em equipe e evolucao futura para CSS, JavaScript ou frameworks.',
  'Textos e Conteúdo': 'Em blogs, paginas institucionais, landing pages, documentacoes e sistemas, a qualidade do HTML de texto define se o conteudo pode ser lido, escaneado, indexado e compreendido sem depender apenas do visual.',
  'Links e Navegação': 'Links e navegacao aparecem em menus, botoes de chamada, sumarios, documentacoes, sites multipagina, areas internas e referencias externas. Entender caminhos evita links quebrados e melhora a experiencia de quem navega.',
  'Imagens e Mídia': 'Imagens, videos e recursos incorporados aparecem em portfolios, catalogos, aulas, noticias e dashboards. Usar esses elementos corretamente melhora acessibilidade, performance e entendimento do conteudo.',
  'Listas e Tabelas': 'Listas organizam passos, requisitos, menus e conjuntos de informacao. Tabelas organizam dados comparativos. Saber diferenciar lista, tabela e layout evita HTML enganoso e facilita leitura por tecnologias assistivas.',
  Formulários: 'Formularios aparecem em cadastro, login, checkout, pesquisa, contato, inscricao e filtros. Um formulario bom nao e apenas bonito: ele precisa ter rotulos, tipos corretos, validacao inicial e fluxo compreensivel.',
  'Semântica e Acessibilidade': 'Semantica e acessibilidade aparecem em todo projeto profissional. Elas ajudam pessoas, buscadores, leitores de tela, navegacao por teclado e manutencao do codigo. Uma pagina semantica continua compreensivel mesmo antes do CSS.',
  'Organização de Projeto': 'Boas praticas e revisao aparecem quando o projeto cresce, quando outra pessoa precisa ler seu codigo ou quando voce volta ao arquivo semanas depois. Organizacao reduz erros e acelera manutencao.',
  'Projeto Final': 'Projetos finais simulam entregas reais. Aqui o objetivo e juntar varias decisoes tecnicas: estrutura, navegacao, conteudo, formulario, semantica, acessibilidade e documentacao.'
}

const categoryErrors = {
  'Fundamentos do HTML': ['Tentar resolver visual com HTML em vez de CSS.', 'Decorar tags sem entender o significado.', 'Criar estrutura pensando apenas em como ela aparece na tela.'],
  'Estrutura da Página': ['Esquecer metadados essenciais no head.', 'Colocar conteudo visivel dentro do head.', 'Criar arquivos sem titulo unico ou idioma definido.'],
  'Textos e Conteúdo': ['Usar titulos por tamanho visual.', 'Usar br para criar espacamento.', 'Deixar textos soltos sem marcacao adequada.'],
  'Links e Navegação': ['Usar texto de link generico como clique aqui.', 'Errar caminhos relativos entre pastas.', 'Abrir nova aba sem rel adequado.'],
  'Imagens e Mídia': ['Usar alt vazio em imagem informativa.', 'Depender de imagem para comunicar texto essencial.', 'Usar caminhos quebrados ou midias pesadas sem criterio.'],
  'Listas e Tabelas': ['Usar tabela para layout visual.', 'Criar lista quando a ordem era importante e deveria ser ol.', 'Criar tabela sem cabecalhos ou caption.'],
  Formulários: ['Criar input sem label.', 'Usar type text para todo campo.', 'Nao agrupar campos relacionados ou nao indicar obrigatoriedade.'],
  'Semântica e Acessibilidade': ['Usar div para todas as regioes.', 'Criar interacao com elemento inadequado.', 'Nao testar leitura pela sequencia de titulos e foco.'],
  'Organização de Projeto': ['Misturar tudo sem indentacao.', 'Repetir ids.', 'Ignorar erros pequenos ate virarem bugs dificeis.'],
  'Projeto Final': ['Construir quantidade de tags sem coerencia.', 'Nao documentar decisoes.', 'Entregar sem testar links, formulario e estrutura.']
}

const categoryBestPractices = {
  'Fundamentos do HTML': ['Escolha tags pelo significado.', 'Separe estrutura, visual e comportamento.', 'Leia o HTML sem CSS para validar se ele ainda faz sentido.'],
  'Estrutura da Página': ['Use doctype, lang, charset, viewport e title.', 'Mantenha head e body com responsabilidades claras.', 'Use indentacao para mostrar aninhamento.'],
  'Textos e Conteúdo': ['Use um h1 por documento.', 'Use p para paragrafos reais.', 'Use strong e em por significado, nao por decoracao.'],
  'Links e Navegação': ['Prefira textos de link descritivos.', 'Teste todos os destinos.', 'Use aria-current quando houver pagina atual em menu.'],
  'Imagens e Mídia': ['Escreva alt adequado para imagens informativas.', 'Use figure e figcaption quando houver legenda visivel.', 'Evite midia que prejudique carregamento sem necessidade.'],
  'Listas e Tabelas': ['Use ol para sequencia ordenada e ul para conjunto.', 'Use table apenas para dados tabulares.', 'Inclua caption e escopos quando a tabela exigir contexto.'],
  Formulários: ['Associe label e campo.', 'Escolha tipos de input corretos.', 'Use fieldset e legend para grupos relacionados.'],
  'Semântica e Acessibilidade': ['Use landmarks como header, main, nav e footer.', 'Teste navegacao por teclado.', 'Prefira elementos nativos antes de inventar componentes.'],
  'Organização de Projeto': ['Padronize nomes de arquivos.', 'Revise aninhamento e fechamento.', 'Comente apenas decisoes que nao sao obvias.'],
  'Projeto Final': ['Planeje antes de codar.', 'Valide criterios de aceite.', 'Documente o que foi feito e como testar.']
}

function getHtmlModuleCategory(index) {
  return HTML_MODULE_CATEGORY_RANGES.find((range) => index <= range.end)?.category || 'Projeto Final'
}

function listSection(title, items) {
  return [title, items.map((item) => '- ' + item).join('\n')].join('\n\n')
}

function getDailyApplication(lesson, category) {
  const title = lesson.title.toLowerCase()
  if (title.includes('web funciona')) return 'Quando um CSS nao carrega, uma imagem quebra ou um deploy retorna 404, voce usa esse conhecimento para investigar requisicoes, caminhos e respostas do servidor.'
  if (title.includes('estrutura basica')) return 'Todo projeto comeca desse esqueleto. Mesmo quando um framework gera parte do HTML, a pagina final ainda depende dessa estrutura documental para funcionar bem.'
  if (title.includes('formular')) return 'Esse tema aparece em cadastros, contatos, checkout, filtros, login e pesquisas. A qualidade do HTML impacta diretamente preenchimento, validacao e acessibilidade.'
  if (title.includes('seo') || title.includes('meta')) return 'Esse tema aparece quando voce quer que a pagina seja entendida por buscadores, redes sociais, favoritos, historico do navegador e compartilhamentos.'
  if (title.includes('projeto')) return 'Esse modulo transforma conhecimento isolado em entrega. A ideia e provar que voce consegue organizar uma pagina inteira com criterio profissional.'
  return categoryApplications[category] || 'Esse conhecimento aparece quando voce transforma conteudo solto em documento navegavel, compreensivel e pronto para receber estilo e comportamento.'
}

export function enhanceHtmlLesson(lesson, { category, practice, exercise }) {
  const selectedCategory = category || getHtmlModuleCategory(lesson.number)
  const errors = categoryErrors[selectedCategory] || categoryErrors['Fundamentos do HTML']
  const bestPractices = categoryBestPractices[selectedCategory] || categoryBestPractices['Fundamentos do HTML']

  return [
    lesson.lesson,
    'COMO ISSO E USADO NO COTIDIANO',
    getDailyApplication(lesson, selectedCategory),
    'COMO APLICAR EM UM PROJETO REAL',
    practice,
    listSection('ERROS COMUNS', errors),
    listSection('BOAS PRATICAS', bestPractices),
    'EXERCICIO GUIADO',
    exercise
  ].join('\n\n')
}

export function createHtmlLessonSections(lesson, { category, objective, learn, practice, exercise }) {
  const selectedCategory = category || getHtmlModuleCategory(lesson.number)
  const errors = categoryErrors[selectedCategory] || categoryErrors['Fundamentos do HTML']
  const bestPractices = categoryBestPractices[selectedCategory] || categoryBestPractices['Fundamentos do HTML']

  return [
    {
      title: 'Objetivo do modulo',
      type: 'text',
      content: objective || lesson.description || `Entender e aplicar ${lesson.title.toLowerCase()} em uma pagina HTML real.`
    },
    {
      title: 'O que voce vai aprender',
      type: 'list',
      items: learn?.length
        ? learn
        : ['Conceito central apresentado na apostila', 'Exemplos de marcacao HTML aplicados ao tema', 'Criterios de uso correto em paginas reais']
    },
    {
      title: 'Conteudo completo da aula',
      type: 'rawLesson',
      content: lesson.lesson
    },
    {
      title: 'Como isso e usado no cotidiano',
      type: 'text',
      content: getDailyApplication(lesson, selectedCategory)
    },
    {
      title: 'Como aplicar em um projeto real',
      type: 'text',
      content: practice
    },
    {
      title: 'Erros comuns',
      type: 'list',
      items: errors
    },
    {
      title: 'Boas praticas',
      type: 'list',
      items: bestPractices
    },
    {
      title: 'Exercicio guiado',
      type: 'text',
      content: exercise
    }
  ]
}

export const htmlLessons = sourceHtmlLessons
