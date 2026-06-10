import { htmlLessons } from './html-modules.js'

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
    html: `<main class="study-page">
  <header class="hero">
    <p class="eyebrow">Front Lab Academy</p>
    <h1>${title}</h1>
    <p>Use este esqueleto para praticar o conceito do módulo com uma interface real.</p>
  </header>

  <section class="practice-card">
    <h2>Objetivo da prática</h2>
    <p>Complete a estrutura, ajuste o visual e adicione comportamento quando fizer sentido.</p>
    <button type="button" id="actionButton">Marcar como iniciado</button>
  </section>
</main>`,
    css: `:root {
  --accent: ${color};
}

body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: #f8fafc;
  color: #0f172a;
}

.study-page {
  width: min(100% - 2rem, 900px);
  margin: 2rem auto;
  display: grid;
  gap: 1rem;
}

.hero,
.practice-card {
  border: 1px solid #dbe3ef;
  border-radius: 16px;
  padding: 1rem;
  background: #ffffff;
}

.eyebrow {
  margin: 0 0 0.5rem;
  color: var(--accent);
  font-weight: 800;
  text-transform: uppercase;
}

h1,
h2 {
  margin: 0 0 0.5rem;
}

button {
  min-height: 42px;
  border: 0;
  border-radius: 10px;
  background: var(--accent);
  color: #ffffff;
  padding: 0 1rem;
  font-weight: 700;
}`,
    js: `const actionButton = document.querySelector('#actionButton')

actionButton?.addEventListener('click', () => {
  actionButton.textContent = 'Prática iniciada'
  console.log('${log}')
})`
  }
}

function createHtmlModule(index, title, description, level, objective, learn, practice, exercise) {
  const projectTitles = ['Página de Perfil', 'Landing Page HTML', 'Formulário Completo', 'Página Institucional', 'Projeto Final HTML']
  const starterTitle = projectTitles[index - 44] || title
  const categoryRanges = [
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
  const category = categoryRanges.find((range) => index <= range.end)?.category || 'Projeto Final'

  return {
    title,
    category,
    description,
    level,
    status: index === 1 ? 'disponível' : 'bloqueado',
    objective,
    learn,
    practice,
    exercise,
    starter: mkStarter(starterTitle, '#f97316', `HTML módulo ${index}`)
  }
}

function getHtmlModuleCategory(index) {
  const categoryRanges = [
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

  return categoryRanges.find((range) => index <= range.end)?.category || 'Projeto Final'
}

function getHtmlModuleLevel(index) {
  if (index <= 29) return 'iniciante'
  if (index <= 43) return 'intermediário'
  return 'projeto'
}

function getLessonParagraphs(lesson) {
  return lesson
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.replace(/\s+/g, ' ').trim())
    .filter((paragraph) => {
      if (!paragraph) return false
      if (paragraph.startsWith('<')) return false
      if (paragraph.startsWith('[')) return false
      if (/^[A-Z0-9 ,.:;/-]+$/.test(paragraph) && paragraph.length < 80) return false
      return paragraph.length > 35
    })
}

function getLessonHighlights(lesson) {
  const paragraphs = getLessonParagraphs(lesson)
  return paragraphs
    .flatMap((paragraph) => paragraph.split(/(?<=[.!?])\s+/))
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length >= 35 && sentence.length <= 145)
    .slice(0, 3)
}

function getHtmlPractice(index, title, category) {
  if (category === 'Projeto Final') {
    return `Construa ou revise a entrega proposta em "${title}" usando somente HTML semântico e os critérios da apostila.`
  }

  if (category === 'Formulários') {
    return `Crie um trecho de formulário em index.html aplicando ${title.toLowerCase()} com labels, names e estrutura acessível.`
  }

  if (category === 'Semântica e Acessibilidade') {
    return `Refatore uma pequena página em index.html aplicando ${title.toLowerCase()} e confira se a estrutura continua compreensível sem CSS.`
  }

  return `Reproduza os exemplos principais de ${title.toLowerCase()} em index.html e adapte para um conteúdo próprio.`
}

function getHtmlExercise(index, title, category) {
  if (index === 50) return 'Conclua quando a checklist da trilha estiver revisada item por item no seu projeto final.'
  if (category === 'Projeto Final') return `Entregue uma página ou seção completa que demonstre domínio de ${title.toLowerCase()}.`
  return `Conclua quando conseguir explicar ${title.toLowerCase()} e usar o conceito sem depender de CSS ou JavaScript.`
}

function createHtmlStarter(title, index, lesson) {
  const firstExample = lesson
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .find((block) => /^<[\s\S]*>$/.test(block) && block.length < 1200 && !block.includes('<elemento'))

  if (firstExample) return firstExample

  return `<main>
  <h1>${title}</h1>
  <p>Use este arquivo para aplicar o que voce acabou de estudar no modulo ${String(index).padStart(2, '0')}.</p>

  <section>
    <h2>Minha pratica</h2>
    <p>Substitua este conteudo por uma estrutura HTML que demonstre o conceito do modulo.</p>
  </section>
</main>`
}

function createHtmlModuleFromLesson(lesson) {
  const index = lesson.number
  const category = getHtmlModuleCategory(index)
  const highlights = getLessonHighlights(lesson.lesson)

  return {
    title: lesson.title,
    category,
    description: lesson.description,
    level: getHtmlModuleLevel(index),
    time: index >= 44 ? '60 min' : '40 min',
    status: index === 1 ? 'disponível' : 'bloqueado',
    objective: highlights[0] || `Estudar ${lesson.title.toLowerCase()} com foco na função semântica do HTML.`,
    learn: highlights.length >= 3
      ? highlights
      : ['Conceito central apresentado na apostila', 'Exemplos de marcação HTML aplicados ao tema', 'Critérios de uso correto em páginas reais'],
    practice: getHtmlPractice(index, lesson.title, category),
    exercise: getHtmlExercise(index, lesson.title, category),
    lesson: lesson.lesson,
    starter: {
      html: createHtmlStarter(lesson.title, index, lesson.lesson),
      css: '',
      js: ''
    }
  }
}

const htmlModules = htmlLessons.map(createHtmlModuleFromLesson)

function getCssModuleLevel(index) {
  if (index <= 30) return 'iniciante'
  if (index <= 50) return 'intermediário'
  return 'avançado'
}

function getCssModuleTime(index) {
  if (index <= 20) return '25 min'
  if (index <= 40) return '35 min'
  if (index <= 50) return '40 min'
  return '50 min'
}

const cssModuleActivities = {
  'Introdução ao CSS': {
    practice: 'Abra um HTML simples e marque quais partes serão estrutura e quais serão aparência.',
    exercise: 'Conclua quando conseguir explicar, em três frases, o papel de HTML, CSS e JavaScript na mesma página.'
  },
  'Como conectar CSS no HTML': {
    practice: 'Crie um arquivo style.css, conecte com link no head e altere cor de fundo, cor do texto e fonte do body.',
    exercise: 'Conclua quando o CSS externo carregar sem usar style inline e sem erro no caminho do arquivo.'
  },
  'Seletores básicos': {
    practice: 'Estilize h1, p e button usando apenas seletores de tag em uma página de apresentação.',
    exercise: 'Conclua quando cada tipo de elemento tiver um estilo visível e nenhuma regra afetar elementos fora do esperado.'
  },
  'Seletores por classe, ID e tag': {
    practice: 'Crie dois cards com a mesma classe e destaque apenas um deles usando um ID.',
    exercise: 'Conclua quando souber justificar por que a classe foi usada para reaproveitar estilo e o ID para um caso único.'
  },
  'Cores no CSS': {
    practice: 'Monte uma seção com título, parágrafo e botão usando color, background-color e uma cor de destaque.',
    exercise: 'Conclua quando texto e fundo tiverem contraste confortável e a paleta usar no máximo três cores principais.'
  },
  'Unidades de medida': {
    practice: 'Compare px, rem, % e vw ajustando largura de card, tamanho de fonte e espaçamento.',
    exercise: 'Conclua quando a página continuar legível ao mudar o tamanho da janela.'
  },
  'Fontes e tipografia': {
    practice: 'Defina uma fonte para o body e outra hierarquia visual para h1, h2 e parágrafos.',
    exercise: 'Conclua quando a página tiver leitura consistente sem depender de muitas famílias diferentes.'
  },
  'Tamanho, peso e estilo de texto': {
    practice: 'Crie uma escala simples com título, subtítulo, texto comum e texto auxiliar.',
    exercise: 'Conclua quando a hierarquia for percebida por tamanho, peso e line-height, não só por cor.'
  },
  'Alinhamento de texto': {
    practice: 'Monte três blocos curtos comparando texto à esquerda, centralizado e alinhado à direita.',
    exercise: 'Conclua quando escolher o alinhamento mais legível para um card de conteúdo.'
  },
  'Espaçamento com margin e padding': {
    practice: 'Crie dois cards e ajuste o espaço interno com padding e a distância entre eles com margin.',
    exercise: 'Conclua quando conseguir apontar qual espaçamento está dentro do card e qual está fora.'
  },
  'O que é o Box Model': {
    practice: 'Use DevTools para observar content, padding, border e margin em um card.',
    exercise: 'Conclua quando o card tiver cada camada do box model identificável por estilo ou anotação.'
  },
  'Width e height': {
    practice: 'Defina largura máxima para um card e altura mínima para uma seção sem travar o conteúdo.',
    exercise: 'Conclua quando textos maiores não vazarem nem ficarem cortados.'
  },
  Border: {
    practice: 'Adicione bordas diferentes em card, input e botão para separar estados visuais.',
    exercise: 'Conclua quando as bordas ajudarem na leitura sem deixar a interface pesada.'
  },
  'Border-radius': {
    practice: 'Aplique radius em card, botão e imagem, mantendo uma escala coerente entre eles.',
    exercise: 'Conclua quando nenhum canto parecer aleatório ou diferente sem motivo.'
  },
  'Margin na prática': {
    practice: 'Organize uma seção vertical com título, texto e dois cards usando margin para separar blocos.',
    exercise: 'Conclua quando o ritmo vertical estiver regular e sem espaçamentos duplicados.'
  },
  'Padding na prática': {
    practice: 'Aumente a área interna de botões e cards até ficarem confortáveis para leitura e clique.',
    exercise: 'Conclua quando o conteúdo não encostar nas bordas em nenhum componente.'
  },
  'Box-sizing': {
    practice: 'Compare um card com content-box e outro com border-box usando a mesma largura, padding e border.',
    exercise: 'Conclua quando aplicar box-sizing: border-box no reset e explicar a diferença visual.'
  },
  Overflow: {
    practice: 'Crie um card com texto longo e teste overflow hidden, auto e visible.',
    exercise: 'Conclua quando escolher uma solução que preserve o conteúdo sem quebrar o layout.'
  },
  'Display block, inline e inline-block': {
    practice: 'Compare span, a, p e button mudando o display e observando fluxo e tamanho.',
    exercise: 'Conclua quando conseguir alinhar links como botões sem transformar a página em um layout rígido.'
  },
  'Reset CSS básico': {
    practice: 'Crie um reset com box-sizing, margin do body, imagens responsivas e fonte base.',
    exercise: 'Conclua quando uma página nova começar com espaçamentos previsíveis entre navegadores.'
  },
  'Introdução a layouts': {
    practice: 'Desenhe a estrutura de uma página com header, conteúdo principal, lista de cards e footer.',
    exercise: 'Conclua quando cada bloco tiver uma função clara antes de aplicar Flexbox ou Grid.'
  },
  'Display flex': {
    practice: 'Transforme uma lista horizontal de três itens em um container flex.',
    exercise: 'Conclua quando os itens ficarem alinhados em linha sem usar float ou position.'
  },
  'Flex-direction': {
    practice: 'Altere uma seção de cards entre row e column para entender o eixo principal.',
    exercise: 'Conclua quando souber montar a versão empilhada e a versão lado a lado do mesmo conteúdo.'
  },
  'Justify-content': {
    practice: 'Distribua logo, links e botão dentro de uma barra usando justify-content.',
    exercise: 'Conclua quando o espaço horizontal ficar equilibrado sem margins manuais em cada item.'
  },
  'Align-items': {
    practice: 'Alinhe ícone, texto e botão dentro de um card horizontal.',
    exercise: 'Conclua quando todos os elementos ficarem centralizados no eixo cruzado.'
  },
  Gap: {
    practice: 'Substitua margens entre itens por gap em uma lista flexível.',
    exercise: 'Conclua quando o espaçamento continuar correto mesmo ao adicionar ou remover itens.'
  },
  'Flex-wrap': {
    practice: 'Crie uma fileira de tags que quebra linha quando falta espaço.',
    exercise: 'Conclua quando nenhuma tag gerar rolagem horizontal em tela pequena.'
  },
  'Cards com Flexbox': {
    practice: 'Monte três cards com título, texto e botão mantendo o botão no fim do card.',
    exercise: 'Conclua quando cards com textos diferentes continuarem alinhados visualmente.'
  },
  'Navbar com Flexbox': {
    practice: 'Crie uma navbar com logo, links e botão de ação usando apenas Flexbox.',
    exercise: 'Conclua quando a navegação ficar alinhada e com espaçamento consistente.'
  },
  'Centralização com Flexbox': {
    practice: 'Centralize um estado vazio com título, texto e botão no centro de uma seção.',
    exercise: 'Conclua quando a centralização funcionar nos dois eixos sem position absolute.'
  },
  'Introdução ao CSS Grid': {
    practice: 'Monte uma grade simples de quatro cards usando display grid.',
    exercise: 'Conclua quando entender quais linhas e colunas o navegador criou.'
  },
  'Grid-template-columns': {
    practice: 'Crie uma grade com três colunas usando fr, repeat e minmax em versões separadas.',
    exercise: 'Conclua quando escolher a solução que melhor se adapta ao conteúdo.'
  },
  'Grid-template-rows': {
    practice: 'Monte um layout com cabeçalho, conteúdo e rodapé controlando as linhas do grid.',
    exercise: 'Conclua quando a área principal ocupar o espaço restante sem altura fixa desnecessária.'
  },
  'Gap no Grid': {
    practice: 'Ajuste espaços horizontais e verticais em uma galeria usando gap, row-gap e column-gap.',
    exercise: 'Conclua quando a grade tiver ritmo regular sem margin nos cards.'
  },
  'Grid com cards': {
    practice: 'Crie uma vitrine de cards com repeat e colunas proporcionais.',
    exercise: 'Conclua quando os cards ficarem alinhados e fáceis de comparar.'
  },
  'Grid responsivo básico': {
    practice: 'Use repeat(auto-fit, minmax()) para criar cards que se reorganizam sozinhos.',
    exercise: 'Conclua quando a grade funcionar em celular e desktop sem media query.'
  },
  'Grid-area': {
    practice: 'Nomeie áreas de header, sidebar, main e footer em um layout de documentação.',
    exercise: 'Conclua quando o CSS revelar claramente onde cada área fica na página.'
  },
  'Layout de página com Grid': {
    practice: 'Monte uma página com sidebar e conteúdo principal usando grid-template-areas.',
    exercise: 'Conclua quando o layout tiver hierarquia clara e não depender de posicionamento manual.'
  },
  'Comparação entre Flexbox e Grid': {
    practice: 'Resolva o mesmo bloco de cards com Flexbox e com Grid, anotando a diferença.',
    exercise: 'Conclua quando souber dizer qual solução ficou mais simples para aquele caso.'
  },
  'Quando usar Flexbox ou Grid': {
    practice: 'Escolha Flexbox para um componente e Grid para uma seção completa da mesma página.',
    exercise: 'Conclua quando cada escolha tiver uma justificativa ligada ao eixo do layout.'
  },
  Backgrounds: {
    practice: 'Crie uma seção com fundo sólido e outra com imagem de fundo posicionada.',
    exercise: 'Conclua quando o texto continuar legível sobre qualquer fundo usado.'
  },
  'Imagens no CSS': {
    practice: 'Use background-image em um banner decorativo sem colocar conteúdo importante na imagem.',
    exercise: 'Conclua quando o HTML continuar compreensível mesmo sem carregar a imagem.'
  },
  'Object-fit': {
    practice: 'Monte três cards com imagens de tamanhos diferentes usando object-fit: cover.',
    exercise: 'Conclua quando todas as imagens preencherem o mesmo espaço sem distorção.'
  },
  'Sombras com box-shadow': {
    practice: 'Aplique sombras leves em cards e compare estados normal e hover.',
    exercise: 'Conclua quando a sombra indicar profundidade sem reduzir contraste.'
  },
  'Text-shadow': {
    practice: 'Aplique text-shadow em um título sobre imagem e teste a leitura.',
    exercise: 'Conclua quando a sombra melhorar contraste sem parecer decoração exagerada.'
  },
  'Botões estilizados': {
    practice: 'Crie botão primário, secundário e desabilitado com tamanhos e estados coerentes.',
    exercise: 'Conclua quando cada botão comunicar sua prioridade sem depender só de texto.'
  },
  'Cards modernos': {
    practice: 'Monte um card de curso com tag, título, descrição, tempo e botão.',
    exercise: 'Conclua quando o card tiver hierarquia clara e espaçamento consistente.'
  },
  'Inputs estilizados': {
    practice: 'Estilize input, label, placeholder e estado de foco em um campo de email.',
    exercise: 'Conclua quando o campo for legível, clicável e tiver foco visível.'
  },
  'Formulários bonitos': {
    practice: 'Monte um formulário curto com duas colunas no desktop e uma coluna no mobile.',
    exercise: 'Conclua quando labels, campos e botão formarem um fluxo claro de preenchimento.'
  },
  'Hover e estados visuais': {
    practice: 'Adicione hover, focus e disabled em botões e links sem remover acessibilidade.',
    exercise: 'Conclua quando mouse e teclado receberem feedback visual equivalente.'
  },
  'Introdução à responsividade': {
    practice: 'Teste uma página em três larguras e liste os pontos onde o layout quebra.',
    exercise: 'Conclua quando identificar ajustes reais antes de escrever media queries.'
  },
  'Media queries': {
    practice: 'Adicione uma media query para mudar uma grade de duas colunas para uma coluna.',
    exercise: 'Conclua quando a mudança acontecer no ponto em que o conteúdo começa a apertar.'
  },
  'Layout mobile-first': {
    practice: 'Construa primeiro a versão mobile de uma seção e depois expanda para desktop.',
    exercise: 'Conclua quando o CSS base funcionar no celular sem precisar desfazer estilos grandes.'
  },
  'Responsividade em textos': {
    practice: 'Ajuste títulos, parágrafos e largura de leitura para celular e desktop.',
    exercise: 'Conclua quando o texto não ficar largo demais no desktop nem grande demais no mobile.'
  },
  'Responsividade em imagens': {
    practice: 'Faça imagens de cards se adaptarem à largura disponível sem distorcer.',
    exercise: 'Conclua quando nenhuma imagem ultrapassar o container em telas pequenas.'
  },
  'Responsividade em cards': {
    practice: 'Transforme uma grade de cards em uma coluna no mobile e múltiplas colunas no desktop.',
    exercise: 'Conclua quando os cards continuarem com boa leitura em todas as larguras testadas.'
  },
  'Navbar responsiva': {
    practice: 'Adapte uma navbar para empilhar links ou mostrar menu compacto em telas menores.',
    exercise: 'Conclua quando todos os links continuarem acessíveis e com área de toque confortável.'
  },
  'Breakpoints comuns': {
    practice: 'Teste 480px, 768px, 1024px e 1280px e defina ajustes baseados no conteúdo.',
    exercise: 'Conclua quando cada breakpoint tiver motivo visual claro.'
  },
  'Ajustes para tablet': {
    practice: 'Revise uma página em largura de tablet e ajuste colunas, espaçamentos e navegação.',
    exercise: 'Conclua quando a tela média não parecer nem mobile esticado nem desktop espremido.'
  },
  'Projeto final com CSS responsivo': {
    practice: 'Construa uma página completa com hero, cards, formulário e navbar responsiva.',
    exercise: 'Conclua quando publicar a página e validar visualmente mobile, tablet e desktop.'
  }
}

function createCssModule(index, title, category, description, learn) {
  const categoryPractice = {
    Fundamentos: 'Aplique o conceito em uma página simples de apresentação com HTML já estruturado.',
    'Box Model': 'Ajuste espaçamentos, dimensões e limites de um bloco de conteúdo real.',
    Layout: 'Monte uma seção de interface usando alinhamento, fluxo e distribuição de elementos.',
    Grid: 'Organize uma área de conteúdo com linhas, colunas e comportamento responsivo.',
    'Visual e Componentes': 'Estilize um componente visual reutilizável com acabamento consistente.',
    Responsividade: 'Adapte uma interface para funcionar bem em celular, tablet e desktop.'
  }
  const activity = cssModuleActivities[title] || {
    practice: categoryPractice[category],
    exercise: `Crie uma pequena entrega prática usando ${title.toLowerCase()} e registre no README o que mudou no layout.`
  }

  return {
    title,
    category,
    description,
    level: getCssModuleLevel(index),
    time: getCssModuleTime(index),
    status: 'disponível',
    objective: `Dominar ${title.toLowerCase()} para construir interfaces mais consistentes e fáceis de manter.`,
    learn,
    practice: activity.practice,
    exercise: activity.exercise,
    starter: mkStarter(title, '#3b82f6', `CSS módulo ${index}`)
  }
}

const tracks = [
  {
    name: 'Preparação do aluno',
    level: 'iniciante',
    levelLabel: 'Iniciante',
    tags: ['Front-end', 'Internet', 'VS Code', 'Terminal', 'GitHub', 'Deploy'],
    accent: '#22C55E',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    description: 'Entenda o que é front-end, como a internet funciona, como usar VS Code, terminal, GitHub e como publicar seus primeiros projetos.',
    modules: [
      { title: 'Fundamentos da web e do front-end', learn: ['Como navegador, servidor e HTTP se conectam', 'Diferença entre front-end e back-end', 'Ciclo básico de desenvolvimento web'], practice: 'Desenhe o caminho de uma URL até a página renderizada, incluindo navegador, servidor e arquivos estáticos.', exercise: 'Conclua quando o README explicar a requisição em ordem, sem misturar front-end e back-end.', starter: mkStarter('Arquitetura Web', '#16a34a', 'Arquitetura web') },
      { title: 'VS Code para produtividade', learn: ['Configurações essenciais', 'Extensões úteis para front-end', 'Snippets e organização'], practice: 'Configure um workspace com formatação ao salvar, tema, extensões e pastas visíveis.', exercise: 'Conclua quando o checklist permitir repetir o setup em outra máquina.', starter: mkStarter('Setup VS Code', '#15803d', 'VS Code pronto') },
      { title: 'Terminal e linha de comando', learn: ['Navegação por diretórios', 'Comandos de criação e organização', 'Scripts npm'], practice: 'Crie pelo terminal uma pasta de projeto com index.html, styles.css, script.js e README.md.', exercise: 'Conclua quando listar os comandos usados e explicar a função de cada um.', starter: mkStarter('Terminal Essencial', '#22c55e', 'Terminal') },
      { title: 'Git, GitHub e deploy inicial', learn: ['Commits semânticos', 'Fluxo de branch', 'Deploy de site estático'], practice: 'Versione um site estático, faça ao menos três commits pequenos e publique o deploy.', exercise: 'Conclua quando o repositório tiver README, histórico claro e link público funcionando.', starter: mkStarter('Deploy inicial', '#16a34a', 'Deploy') }
    ],
    challenge: {
      title: 'Desafio final: Setup profissional de projeto',
      brief: 'Crie um repositório modelo de front-end com estrutura de pastas, README, convenções de commit e deploy funcional.',
      portfolio: 'Entregáveis: link do repositório, link do deploy e documentação de onboarding.'
    }
  },
  {
    name: 'HTML', level: 'iniciante', levelLabel: 'Iniciante',
    tags: ['HTML', 'Semântica', 'Formulários', 'SEO', 'Acessibilidade'],
    accent: '#F97316', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    description: 'Aprenda HTML do zero com 50 módulos, avançando dos fundamentos até páginas completas, formulários, semântica, SEO, acessibilidade e projetos práticos.',
    modules: htmlModules,
    challenge: { title: 'Desafio final: Site institucional semântico', brief: 'Construa um site institucional multi-seções com HTML semântico, formulário funcional, mídia incorporada, SEO básico e foco em acessibilidade.', portfolio: 'Entregáveis: deploy, auditoria A11y, checklist de conclusão e documentação da estrutura semântica.' }
  },
  {
    name: 'CSS', level: 'basico', levelLabel: 'Básico',
    tags: ['CSS', 'Box Model', 'Flexbox', 'Grid', 'Responsividade', 'Componentes'],
    accent: '#3B82F6', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    description: 'Aprenda CSS em 60 módulos progressivos, saindo dos fundamentos e chegando a layouts responsivos, componentes modernos e um projeto final pronto para portfólio.',
    modules: [
      createCssModule(1, 'Introdução ao CSS', 'Fundamentos', 'Entenda o papel do CSS na camada visual e como ele transforma HTML em interface.', ['Função do CSS no front-end', 'Separação entre estrutura e estilo', 'Leitura básica de uma regra CSS']),
      createCssModule(2, 'Como conectar CSS no HTML', 'Fundamentos', 'Veja as formas corretas de aplicar CSS e quando usar arquivo externo.', ['Tag link no head', 'CSS interno e inline', 'Organização inicial de arquivos']),
      createCssModule(3, 'Seletores básicos', 'Fundamentos', 'Aprenda a selecionar elementos com clareza para aplicar estilos sem confusão.', ['Seletores por elemento', 'Agrupamento de seletores', 'Escopo inicial das regras']),
      createCssModule(4, 'Seletores por classe, ID e tag', 'Fundamentos', 'Compare classe, ID e tag para escolher o seletor certo em cada situação.', ['Diferença entre class e id', 'Reutilização de classes', 'Especificidade básica']),
      createCssModule(5, 'Cores no CSS', 'Fundamentos', 'Use cores com consistência, contraste e formatos adequados para a web.', ['Hex, rgb e nomes de cores', 'Contraste visual', 'Paleta simples de projeto']),
      createCssModule(6, 'Unidades de medida', 'Fundamentos', 'Conheça px, rem, em, porcentagem e viewport para medir elementos com segurança.', ['Unidades absolutas e relativas', 'Quando usar rem', 'Medidas fluidas em layouts']),
      createCssModule(7, 'Fontes e tipografia', 'Fundamentos', 'Defina famílias de fonte e bases tipográficas para melhorar a leitura.', ['font-family', 'Fontes seguras e externas', 'Consistência tipográfica']),
      createCssModule(8, 'Tamanho, peso e estilo de texto', 'Fundamentos', 'Controle hierarquia visual usando tamanho, peso e variações de texto.', ['font-size', 'font-weight', 'font-style e line-height']),
      createCssModule(9, 'Alinhamento de texto', 'Fundamentos', 'Organize textos em cards, seções e blocos sem prejudicar legibilidade.', ['text-align', 'Comprimento de linha', 'Alinhamento em interfaces']),
      createCssModule(10, 'Espaçamento com margin e padding', 'Fundamentos', 'Entenda a diferença entre espaço externo e interno antes de avançar para layout.', ['Margin versus padding', 'Ritmo de espaçamento', 'Espaço entre blocos']),
      createCssModule(11, 'O que é o Box Model', 'Box Model', 'Visualize como conteúdo, padding, border e margin formam a caixa de cada elemento.', ['Content box', 'Padding e border', 'Impacto no tamanho final']),
      createCssModule(12, 'Width e height', 'Box Model', 'Controle largura e altura sem criar layouts rígidos demais.', ['width, height e max-width', 'Altura mínima', 'Limites responsivos']),
      createCssModule(13, 'Border', 'Box Model', 'Use bordas para separar áreas, destacar componentes e criar estrutura visual.', ['border-width', 'border-style', 'border-color']),
      createCssModule(14, 'Border-radius', 'Box Model', 'Aplique cantos arredondados com equilíbrio em botões, cards e imagens.', ['radius em cards', 'radius circular', 'Consistência de bordas']),
      createCssModule(15, 'Margin na prática', 'Box Model', 'Use margin para afastar elementos e controlar ritmo vertical da página.', ['Margin vertical', 'Auto margin', 'Colapso de margens']),
      createCssModule(16, 'Padding na prática', 'Box Model', 'Use padding para criar respiro interno e melhorar áreas clicáveis.', ['Padding em cards', 'Padding em botões', 'Espaçamento interno responsivo']),
      createCssModule(17, 'Box-sizing', 'Box Model', 'Evite contas confusas usando box-sizing de forma previsível no projeto.', ['content-box', 'border-box', 'Reset com box-sizing']),
      createCssModule(18, 'Overflow', 'Box Model', 'Controle conteúdo que ultrapassa o espaço disponível sem quebrar a interface.', ['overflow hidden', 'overflow auto', 'Prevenção de estouros']),
      createCssModule(19, 'Display block, inline e inline-block', 'Box Model', 'Entenda como cada valor de display altera fluxo, tamanho e alinhamento.', ['Elementos block', 'Elementos inline', 'inline-block na prática']),
      createCssModule(20, 'Reset CSS básico', 'Box Model', 'Crie uma base visual consistente removendo diferenças iniciais do navegador.', ['Reset de margin', 'box-sizing global', 'Base de imagens e formulários']),
      createCssModule(21, 'Introdução a layouts', 'Layout', 'Comece a pensar em composição de página, fluxo visual e blocos de interface.', ['Fluxo normal', 'Agrupamento de seções', 'Composição de tela']),
      createCssModule(22, 'Display flex', 'Layout', 'Use Flexbox para alinhar itens em uma direção com menos esforço.', ['Container flex', 'Itens flexíveis', 'Eixo principal']),
      createCssModule(23, 'Flex-direction', 'Layout', 'Controle a direção dos elementos para montar linhas, colunas e variações mobile.', ['row e column', 'Direção em breakpoints', 'Ordem visual']),
      createCssModule(24, 'Justify-content', 'Layout', 'Distribua espaço no eixo principal para menus, cards e grupos de botões.', ['flex-start e center', 'space-between', 'Distribuição de ações']),
      createCssModule(25, 'Align-items', 'Layout', 'Alinhe elementos no eixo cruzado para evitar interfaces desalinhadas.', ['stretch, center e start', 'Altura dos itens', 'Alinhamento em cards']),
      createCssModule(26, 'Gap', 'Layout', 'Crie espaçamento entre elementos sem depender de margens improvisadas.', ['gap em flex', 'Ritmo consistente', 'Manutenção de espaçamentos']),
      createCssModule(27, 'Flex-wrap', 'Layout', 'Permita que itens quebrem linha de forma controlada em telas menores.', ['wrap e nowrap', 'Listas fluidas', 'Quebra sem overflow']),
      createCssModule(28, 'Cards com Flexbox', 'Layout', 'Monte cards alinhados e flexíveis para listas de conteúdo.', ['Card como coluna', 'Rodapé alinhado', 'Alturas consistentes']),
      createCssModule(29, 'Navbar com Flexbox', 'Layout', 'Crie uma barra de navegação organizada, alinhada e fácil de adaptar.', ['Logo e links', 'Ações no topo', 'Espaços entre grupos']),
      createCssModule(30, 'Centralização com Flexbox', 'Layout', 'Centralize conteúdo sem hacks e com controle de altura e alinhamento.', ['Centralização horizontal', 'Centralização vertical', 'Estados vazios']),
      createCssModule(31, 'Introdução ao CSS Grid', 'Grid', 'Entenda quando o Grid é melhor para estruturas em duas dimensões.', ['Grid container', 'Linhas e colunas', 'Diferença para Flexbox']),
      createCssModule(32, 'Grid-template-columns', 'Grid', 'Defina colunas claras para galerias, painéis e seções de conteúdo.', ['repeat', 'fr', 'minmax']),
      createCssModule(33, 'Grid-template-rows', 'Grid', 'Controle linhas quando o layout exige áreas verticais bem definidas.', ['Linhas explícitas', 'auto e fr', 'Altura de áreas']),
      createCssModule(34, 'Gap no Grid', 'Grid', 'Use espaçamento entre linhas e colunas sem adicionar regras extras.', ['row-gap', 'column-gap', 'Ritmo de grade']),
      createCssModule(35, 'Grid com cards', 'Grid', 'Crie uma grade de cards estável, alinhada e fácil de escanear.', ['Cards em repeat', 'Colunas proporcionais', 'Quebra visual organizada']),
      createCssModule(36, 'Grid responsivo básico', 'Grid', 'Monte grades que se adaptam sem precisar de muitos breakpoints.', ['auto-fit', 'minmax', 'Colunas fluidas']),
      createCssModule(37, 'Grid-area', 'Grid', 'Nomeie áreas para montar layouts mais expressivos e fáceis de ler.', ['grid-template-areas', 'Nome de áreas', 'Organização semântica']),
      createCssModule(38, 'Layout de página com Grid', 'Grid', 'Estruture header, sidebar, conteúdo e footer em uma composição completa.', ['Layout de página', 'Sidebar', 'Áreas fixas e fluidas']),
      createCssModule(39, 'Comparação entre Flexbox e Grid', 'Grid', 'Compare as duas ferramentas para tomar decisões melhores de layout.', ['Uma dimensão versus duas', 'Casos de uso', 'Composição híbrida']),
      createCssModule(40, 'Quando usar Flexbox ou Grid', 'Grid', 'Treine a escolha entre Flexbox e Grid em componentes e páginas reais.', ['Critério de escolha', 'Combinação das técnicas', 'Refatoração de layout']),
      createCssModule(41, 'Backgrounds', 'Visual e Componentes', 'Use fundos sólidos, imagens e camadas simples sem poluir a interface.', ['background-color', 'background-image', 'Posição e repetição']),
      createCssModule(42, 'Imagens no CSS', 'Visual e Componentes', 'Controle imagens decorativas e visuais de apoio dentro do CSS.', ['Imagem de fundo', 'Tamanho de background', 'Cuidados de performance']),
      createCssModule(43, 'Object-fit', 'Visual e Componentes', 'Faça imagens preencherem cards e banners sem distorção.', ['cover e contain', 'object-position', 'Crops previsíveis']),
      createCssModule(44, 'Sombras com box-shadow', 'Visual e Componentes', 'Aplique profundidade com sombras leves e coerentes.', ['Eixos da sombra', 'Blur e spread', 'Sombras em cards']),
      createCssModule(45, 'Text-shadow', 'Visual e Componentes', 'Use sombra em texto com moderação para contraste e destaque.', ['Sombra de texto', 'Contraste sobre imagem', 'Limites de legibilidade']),
      createCssModule(46, 'Botões estilizados', 'Visual e Componentes', 'Crie botões claros, clicáveis e consistentes com o visual do projeto.', ['Estados de botão', 'Padding e radius', 'Hierarquia de ações']),
      createCssModule(47, 'Cards modernos', 'Visual e Componentes', 'Monte cards com boa hierarquia, respiro e acabamento profissional.', ['Cabeçalho do card', 'Bordas e sombra', 'Conteúdo escaneável']),
      createCssModule(48, 'Inputs estilizados', 'Visual e Componentes', 'Melhore campos de formulário com foco, contraste e espaçamento adequados.', ['Estados de input', 'Borda e foco', 'Área clicável confortável']),
      createCssModule(49, 'Formulários bonitos', 'Visual e Componentes', 'Combine labels, inputs, mensagens e botões em formulários agradáveis.', ['Layout de formulário', 'Agrupamento de campos', 'Feedback visual']),
      createCssModule(50, 'Hover e estados visuais', 'Visual e Componentes', 'Crie respostas visuais suaves para hover, foco, ativo e desabilitado.', ['hover e focus', 'Transições curtas', 'Estados acessíveis']),
      createCssModule(51, 'Introdução à responsividade', 'Responsividade', 'Entenda como layouts se ajustam a diferentes tamanhos de tela.', ['Viewport', 'Conteúdo fluido', 'Testes em tamanhos reais']),
      createCssModule(52, 'Media queries', 'Responsividade', 'Use media queries para adaptar layout, espaçamento e componentes.', ['Sintaxe de media query', 'max-width e min-width', 'Ajustes por contexto']),
      createCssModule(53, 'Layout mobile-first', 'Responsividade', 'Comece pelo celular e expanda a interface com breakpoints progressivos.', ['Base mobile', 'Progressive enhancement', 'Menos sobrescritas']),
      createCssModule(54, 'Responsividade em textos', 'Responsividade', 'Ajuste escala e largura de texto para leitura confortável em qualquer tela.', ['Line-height', 'Largura de parágrafo', 'Títulos em mobile']),
      createCssModule(55, 'Responsividade em imagens', 'Responsividade', 'Evite imagens cortadas ou estouradas em telas pequenas.', ['max-width', 'height auto', 'Crops em mobile']),
      createCssModule(56, 'Responsividade em cards', 'Responsividade', 'Transforme listas de cards em grades adaptáveis e legíveis.', ['Colunas fluidas', 'Empilhamento', 'Espaçamento em mobile']),
      createCssModule(57, 'Navbar responsiva', 'Responsividade', 'Adapte navegação para telas menores mantendo acesso claro aos links.', ['Menu compacto', 'Quebra de links', 'Área de toque']),
      createCssModule(58, 'Breakpoints comuns', 'Responsividade', 'Escolha pontos de ajuste baseados no conteúdo, não em números aleatórios.', ['Breakpoints práticos', 'Conteúdo como guia', 'Testes intermediários']),
      createCssModule(59, 'Ajustes para tablet', 'Responsividade', 'Cuide das telas médias, onde layouts desktop podem ficar apertados.', ['Colunas em tablet', 'Espaçamento intermediário', 'Navegação adaptada']),
      createCssModule(60, 'Projeto final com CSS responsivo', 'Responsividade', 'Consolide a trilha criando uma página completa, bonita e responsiva.', ['Sistema visual', 'Layout completo', 'Revisão mobile e desktop'])
    ],
    challenge: { title: 'Desafio final: Interface responsiva com CSS', brief: 'Construa uma página completa para um produto, serviço ou portfólio usando box model, Flexbox, Grid, componentes visuais e responsividade mobile-first.', portfolio: 'Entregáveis: deploy, README com decisões de layout, checklist responsivo e capturas de tela em mobile, tablet e desktop.' }
  },
  {
    name: 'Bootstrap', level: 'basico', levelLabel: 'Básico ao intermediário',
    tags: ['Bootstrap', 'Grid', 'Componentes', 'Responsividade', 'Sass'],
    accent: '#7952B3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    description: 'Aprenda Bootstrap para criar interfaces responsivas rapidamente usando grid, utilitários, componentes, formulários, temas e customização.',
    modules: [
      { title: 'Introdução ao Bootstrap', learn: ['Quando usar Bootstrap', 'Instalação via CDN/npm', 'Estrutura base do CSS e JS'], practice: 'Crie uma página com Bootstrap via CDN e valide se CSS e JS carregam corretamente.', exercise: 'Conclua quando navbar, main e footer usarem classes Bootstrap sem CSS customizado obrigatório.', starter: mkStarter('Bootstrap inicial', '#7952b3', 'Bootstrap pronto') },
      { title: 'Containers, grid e breakpoints', learn: ['container e container-fluid', 'row e col', 'breakpoints responsivos'], practice: 'Construa uma seção que tenha uma coluna no mobile, duas no tablet e três no desktop.', exercise: 'Conclua quando o grid usar row, col e breakpoints sem largura fixa.', starter: mkStarter('Grid Bootstrap', '#6f42c1', 'Grid Bootstrap') },
      { title: 'Utilitários de espaçamento e tipografia', learn: ['classes de margin/padding', 'display e flex utilities', 'tipografia e cores'], practice: 'Monte um card de perfil usando utilitários de padding, margin, cor e texto.', exercise: 'Conclua quando o componente ficar legível sem criar classes CSS novas.', starter: mkStarter('Utilitários Bootstrap', '#7952b3', 'Utilities') },
      { title: 'Componentes essenciais', learn: ['navbar', 'cards', 'buttons', 'alerts', 'badges'], practice: 'Combine navbar, cards, badges e botões em uma tela de catálogo de cursos.', exercise: 'Conclua quando cada componente tiver função clara e texto coerente.', starter: mkStarter('Componentes Bootstrap', '#6f42c1', 'Components') },
      { title: 'Formulários e validação visual', learn: ['form-control', 'input groups', 'feedback de validação'], practice: 'Crie um cadastro com input group, required e mensagens de feedback visual.', exercise: 'Conclua quando campos válidos e inválidos tiverem estados reconhecíveis.', starter: mkStarter('Forms Bootstrap', '#7952b3', 'Forms') },
      { title: 'Componentes com JavaScript', learn: ['modal', 'dropdown', 'collapse', 'tabs'], practice: 'Implemente uma FAQ com collapse e um modal de confirmação para ação importante.', exercise: 'Conclua quando as interações funcionarem pelo Bootstrap sem script manual extra.', starter: mkStarter('Bootstrap JS', '#6f42c1', 'Bootstrap JS') },
      { title: 'Customização e tema', learn: ['variáveis CSS', 'Sass', 'sobrescrita segura', 'design system simples'], practice: 'Altere cores, radius e botões mantendo o comportamento original dos componentes.', exercise: 'Conclua quando o tema parecer de uma marca própria sem quebrar contraste.', starter: mkStarter('Tema Bootstrap', '#7952b3', 'Theme') },
      { title: 'Projeto final com Bootstrap', learn: ['composição de layout', 'responsividade completa', 'documentação do projeto'], practice: 'Planeje e construa uma landing ou painel usando grid, cards, formulário e modal.', exercise: 'Conclua quando houver deploy, README e screenshots mobile e desktop.', starter: mkStarter('Projeto Bootstrap', '#6f42c1', 'Projeto Bootstrap') }
    ],
    challenge: { title: 'Desafio final: Painel responsivo com Bootstrap', brief: 'Construa um painel administrativo usando grid, formulários, cards, modal, dropdown e tema customizado com Bootstrap.', portfolio: 'Entregáveis: deploy, README explicando componentes usados, screenshots mobile/desktop e lista de customizações.' }
  },
  {
    name: 'JavaScript e lógica', level: 'intermediario', levelLabel: 'Básico ao intermediário',
    tags: ['JavaScript', 'Lógica', 'DOM', 'Eventos', 'API'],
    accent: '#FACC15', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    description: 'Treine variáveis, operadores, condicionais, loops, arrays, objetos, funções, strings, datas, DOM, eventos, Fetch API e LocalStorage.',
    modules: [
      { title: 'Sintaxe e controle de fluxo', learn: ['variáveis', 'operadores', 'if/switch'], practice: 'Crie um verificador de idade e plano que retorne mensagens diferentes para visitante, aluno e assinante.', exercise: 'Conclua quando cada regra tiver uma condição clara e os resultados forem testados no console.', starter: mkStarter('Fluxo JS', '#eab308', 'Fluxo') },
      { title: 'Loops e funções', learn: ['for/while', 'funções puras', 'escopo'], practice: 'Crie uma função que receba uma lista de notas e gere média, maior nota e situação final.', exercise: 'Conclua quando a função puder ser reutilizada com pelo menos três listas diferentes.', starter: mkStarter('Loops e funções', '#facc15', 'Loops') },
      { title: 'Arrays e métodos', learn: ['map/filter/reduce', 'find/some/every', 'imutabilidade'], practice: 'Filtre uma lista de produtos por categoria, aplique desconto com map e calcule total com reduce.', exercise: 'Conclua quando a lista original continuar intacta e os resultados aparecerem separados.', starter: mkStarter('Arrays', '#f59e0b', 'Arrays') },
      { title: 'Objetos e estruturas', learn: ['objetos aninhados', 'desestruturação', 'spread/rest'], practice: 'Modele um pedido com cliente, itens e endereço, depois gere um resumo usando desestruturação.', exercise: 'Conclua quando atualizar um campo com spread sem alterar o objeto original.', starter: mkStarter('Objetos', '#eab308', 'Objetos') },
      { title: 'DOM e eventos', learn: ['seleção de elementos', 'delegação', 'renderização dinâmica'], practice: 'Crie uma lista de tarefas com adicionar, marcar como feita e remover usando eventos.', exercise: 'Conclua quando a interface atualizar sem recarregar a página.', starter: mkStarter('DOM e eventos', '#facc15', 'DOM') },
      { title: 'Fetch API', learn: ['async/await', 'tratamento de erro', 'estado de carregamento'], practice: 'Busque uma lista de posts, mostre carregando, renderize os títulos e trate falha de rede.', exercise: 'Conclua quando a tela tiver estados de sucesso, carregamento e erro.', starter: mkStarter('Fetch API', '#fde047', 'API') },
      { title: 'LocalStorage', learn: ['persistência local', 'serialização JSON', 'sincronização UI'], practice: 'Salve uma preferência de tema e uma lista simples de tarefas no navegador.', exercise: 'Conclua quando os dados reaparecerem corretamente após atualizar a página.', starter: mkStarter('LocalStorage', '#facc15', 'LocalStorage') }
    ],
    challenge: { title: 'Desafio final: Organizador de rotina inteligente', brief: 'Crie um app de rotina com tarefas, filtros, persistência local e integração com API para dados auxiliares.', portfolio: 'Entregáveis: app publicado, README técnico e vídeo de demonstração do fluxo completo.' }
  },
  {
    name: 'TypeScript', level: 'intermediario', levelLabel: 'Intermediário',
    tags: ['TypeScript', 'Tipos', 'Interfaces', 'Generics'],
    accent: '#3178C6', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    description: 'Aprenda tipagem básica, interfaces, type aliases, union types, generics, narrowing e tipagem de funções, eventos e APIs.',
    modules: [
      { title: 'Tipos básicos e inferência', learn: ['tipos primitivos', 'inference', 'strict mode'], practice: 'Tipar uma função de cálculo de preço com string, number e boolean sem usar any.', exercise: 'Conclua quando o TypeScript impedir chamadas com tipos errados.', starter: mkStarter('Tipos básicos TS', '#3178c6', 'TS básicos') },
      { title: 'Interfaces e aliases', learn: ['interface', 'type alias', 'composição'], practice: 'Modele Product, User e Order com campos obrigatórios e opcionais.', exercise: 'Conclua quando as entidades representarem dados reais sem duplicar tipos.', starter: mkStarter('Interfaces TS', '#2563eb', 'Interfaces') },
      { title: 'Union e narrowing', learn: ['union types', 'guards', 'discriminated unions'], practice: 'Crie estados de requisição loading, success e error usando union discriminada.', exercise: 'Conclua quando cada estado renderizar apenas os dados disponíveis para ele.', starter: mkStarter('Narrowing TS', '#1d4ed8', 'Narrowing') },
      { title: 'Generics', learn: ['funções genéricas', 'constraints', 'reuso'], practice: 'Implemente paginate<T> para paginar listas de produtos, usuários e posts.', exercise: 'Conclua quando a função preservar o tipo dos itens retornados.', starter: mkStarter('Generics TS', '#3b82f6', 'Generics') },
      { title: 'Tipagem de funções e eventos', learn: ['assinaturas', 'callbacks', 'event typing'], practice: 'Tipar submit de formulário e clique de botão sem acessar propriedades inexistentes.', exercise: 'Conclua quando handlers tiverem tipos explícitos e sem casts desnecessários.', starter: mkStarter('Eventos TS', '#60a5fa', 'Eventos') },
      { title: 'Tipagem de API', learn: ['DTOs', 'erros tipados', 'mapeamento de resposta'], practice: 'Crie tipos para resposta bruta da API e para o modelo usado pela interface.', exercise: 'Conclua quando a camada de service converter DTO em dados prontos para a UI.', starter: mkStarter('API TS', '#0ea5e9', 'API TS') },
      { title: 'Organização de tipos', learn: ['pastas de types', 'barrels', 'reuso entre módulos'], practice: 'Separe tipos por domínio em arquivos de produto, usuário e pedido.', exercise: 'Conclua quando imports ficarem previsíveis e nenhum arquivo concentrar tipos sem relação.', starter: mkStarter('Arquitetura de tipos', '#3178c6', 'Tipos organizados') }
    ],
    challenge: { title: 'Desafio final: Painel tipado de gestão', brief: 'Construa uma interface com domínio tipado de ponta a ponta (estado, formulários, API e validações).', portfolio: 'Entregáveis: repositório com arquitetura de tipos documentada e aplicação em produção.' }
  },
  {
    name: 'Frameworks front-end', level: 'avancado', levelLabel: 'Intermediário ao avançado',
    tags: ['React', 'Vue', 'Angular', 'Svelte', 'Next.js'],
    accent: '#7B5CFF', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'Conheça React, Vue, Angular, Svelte, SolidJS, Next.js e Astro para criar interfaces modernas e aplicações mais completas.',
    modules: [
      { title: 'Arquitetura por componentes', learn: ['composição', 'props', 'estado local'], practice: 'Separe uma tela de dashboard em Header, SummaryCard, FilterBar e DataList.', exercise: 'Conclua quando cada componente receber dados por props e tiver uma responsabilidade clara.', starter: mkStarter('Componentes', '#7b5cff', 'Componentes') },
      { title: 'Roteamento em SPA', learn: ['rotas', 'parâmetros', 'layouts'], practice: 'Crie rotas para listagem, detalhe e página de erro em uma aplicação simples.', exercise: 'Conclua quando a rota de detalhe ler um parâmetro e renderizar o item correto.', starter: mkStarter('Roteamento', '#8b5cf6', 'Rotas') },
      { title: 'Estado compartilhado', learn: ['lifting state', 'stores', 'contexto'], practice: 'Compartilhe o estado de carrinho entre lista de produtos, resumo e botão de limpar.', exercise: 'Conclua quando duas áreas da tela reagirem à mesma alteração de estado.', starter: mkStarter('Estado global', '#a78bfa', 'Estado') },
      { title: 'Formulários e validação', learn: ['controlled/uncontrolled', 'regras de validação', 'feedback de erro'], practice: 'Construa um formulário de cadastro com validação de nome, email e senha.', exercise: 'Conclua quando erros aparecerem perto dos campos e o envio só ocorrer com dados válidos.', starter: mkStarter('Formulários', '#7c3aed', 'Form') },
      { title: 'Consumo de APIs', learn: ['fetch em componentes', 'cache', 'retries'], practice: 'Crie uma listagem com busca, paginação simples, loading e estado vazio.', exercise: 'Conclua quando falhas de API não quebrarem a tela e mostrarem mensagem útil.', starter: mkStarter('API em framework', '#6d28d9', 'API framework') },
      { title: 'Renderização e performance', learn: ['SSR/SSG/CSR', 'lazy loading', 'memoização'], practice: 'Identifique uma lista lenta e aplique lazy loading ou memoização onde fizer sentido.', exercise: 'Conclua quando houver comparação antes/depois com a mudança aplicada.', starter: mkStarter('Performance', '#7b5cff', 'Perf framework') },
      { title: 'Estrutura de app escalável', learn: ['pastas por domínio', 'camadas', 'boas práticas de manutenção'], practice: 'Organize uma aplicação por domínio, separando components, services, types e pages.', exercise: 'Conclua quando um novo recurso puder ser adicionado sem misturar arquivos de domínios diferentes.', starter: mkStarter('Arquitetura app', '#8b5cf6', 'Arquitetura') }
    ],
    challenge: { title: 'Desafio final: Plataforma de conteúdo técnico', brief: 'Crie uma aplicação front-end completa com roteamento, busca, filtros, páginas de detalhe e integração com APIs.', portfolio: 'Entregáveis: app publicado, documentação de arquitetura e decisões técnicas.' }
  },
  {
    name: 'Ferramentas', level: 'intermediario', levelLabel: 'Básico ao intermediário',
    tags: ['Git', 'GitHub', 'npm', 'Vite', 'ESLint', 'Prettier'],
    accent: '#6366F1', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    description: 'Estude Git, GitHub, npm, Node.js, Vite, Webpack, ESLint, Prettier e ferramentas essenciais do ecossistema front-end.',
    modules: [
      { title: 'Git no fluxo diário', learn: ['branching', 'commit limpo', 'merge/rebase'], practice: 'Crie uma branch de feature, faça três commits pequenos e una as mudanças sem perder histórico.', exercise: 'Conclua quando cada commit tiver mensagem clara e representar uma mudança única.', starter: mkStarter('Git fluxo', '#6366f1', 'Git') },
      { title: 'GitHub e colaboração', learn: ['PR', 'review', 'issues'], practice: 'Abra um Pull Request com descrição, checklist e referência a uma issue fictícia.', exercise: 'Conclua quando o PR permitir entender o problema, a solução e como testar.', starter: mkStarter('GitHub colaboração', '#4f46e5', 'GitHub') },
      { title: 'npm scripts', learn: ['scripts utilitários', 'build/test/lint', 'versionamento'], practice: 'Crie scripts para dev, build, preview e check em um package.json.', exercise: 'Conclua quando um comando check executar as validações principais em sequência.', starter: mkStarter('npm scripts', '#4338ca', 'npm') },
      { title: 'Vite e ambiente', learn: ['config básica', 'env vars', 'aliases'], practice: 'Configure uma variável VITE_API_URL e um alias para a pasta src.', exercise: 'Conclua quando dev e build usarem a configuração sem caminhos quebrados.', starter: mkStarter('Vite setup', '#6366f1', 'Vite') },
      { title: 'ESLint e qualidade', learn: ['regras', 'plugins', 'autocorreção'], practice: 'Ative regras para detectar variáveis não usadas e padrões inconsistentes.', exercise: 'Conclua quando o lint apontar problemas reais e o código corrigido continuar funcionando.', starter: mkStarter('ESLint', '#818cf8', 'ESLint') },
      { title: 'Prettier e consistência', learn: ['formatação unificada', 'integração IDE', 'hooks'], practice: 'Configure Prettier e formate arquivos HTML, CSS e JS com a mesma regra.', exercise: 'Conclua quando a formatação não depender de ajustes manuais entre arquivos.', starter: mkStarter('Prettier', '#6366f1', 'Prettier') },
      { title: 'Pipeline local', learn: ['pre-commit', 'testes automáticos', 'build check'], practice: 'Crie um fluxo local que rode lint, testes e build antes do push.', exercise: 'Conclua quando uma falha em qualquer etapa impedir a entrega sem revisão.', starter: mkStarter('Pipeline local', '#6366f1', 'Pipeline') }
    ],
    challenge: { title: 'Desafio final: Starter kit de equipe front-end', brief: 'Crie um template completo com scripts, lint, format, convenções e documentação de contribuição.', portfolio: 'Entregáveis: template público reutilizável e guia de onboarding técnico.' }
  },
  {
    name: 'Qualidade e boas práticas', level: 'intermediario', levelLabel: 'Intermediário',
    tags: ['Acessibilidade', 'Performance', 'PWA', 'Testes'],
    accent: '#10B981', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    description: 'Aprenda acessibilidade, performance, PWA, testes, organização de código, responsividade e boas práticas para projetos reais.',
    modules: [
      { title: 'Acessibilidade prática', learn: ['teclado e foco', 'semântica avançada', 'ARIA'], practice: 'Audite uma tela com menu, formulário e cards usando teclado e leitor de estrutura.', exercise: 'Conclua quando foco, labels, landmarks e textos alternativos estiverem corrigidos.', starter: mkStarter('Acessibilidade', '#10b981', 'A11y') },
      { title: 'Performance web', learn: ['LCP/CLS/INP', 'otimização de imagens', 'code splitting'], practice: 'Meça uma página, otimize imagens e remova trabalho desnecessário no carregamento.', exercise: 'Conclua quando registrar antes/depois de pelo menos duas métricas.', starter: mkStarter('Performance', '#059669', 'Performance') },
      { title: 'Responsividade robusta', learn: ['layout resiliente', 'conteúdo fluido', 'testes cross-device'], practice: 'Teste uma interface em 360, 768, 1024 e 1440px corrigindo quebras reais.', exercise: 'Conclua quando não houver rolagem horizontal nem texto sobreposto.', starter: mkStarter('Responsividade', '#10b981', 'Responsive') },
      { title: 'Testes unitários', learn: ['assertions', 'mocks', 'cobertura'], practice: 'Escreva testes para uma função de cálculo com casos válidos, limite e inválidos.', exercise: 'Conclua quando os testes falharem para uma regra errada e passarem após a correção.', starter: mkStarter('Testes unitários', '#34d399', 'Unit tests') },
      { title: 'Testes de interface', learn: ['Testing Library', 'fluxo do usuário', 'acessibilidade em testes'], practice: 'Teste um formulário preenchendo campos, enviando e validando mensagem de erro.', exercise: 'Conclua quando o teste usar ações parecidas com as de uma pessoa usuária.', starter: mkStarter('Testes UI', '#10b981', 'UI tests') },
      { title: 'PWA e offline', learn: ['manifest', 'service worker', 'cache'], practice: 'Adicione manifest e fallback offline para uma página estática simples.', exercise: 'Conclua quando a página abrir uma mensagem útil mesmo sem conexão.', starter: mkStarter('PWA offline', '#059669', 'PWA') },
      { title: 'Manutenção e governança', learn: ['boas práticas de código', 'documentação viva', 'checklists de revisão'], practice: 'Crie checklist de revisão para acessibilidade, performance, testes e deploy.', exercise: 'Conclua quando o checklist puder ser usado em um PR real sem depender de explicação extra.', starter: mkStarter('Governança front-end', '#10b981', 'Governança') }
    ],
    challenge: { title: 'Desafio final: Upgrade de qualidade em projeto real', brief: 'Pegue um projeto existente e aplique melhorias de acessibilidade, performance, testes e experiência offline.', portfolio: 'Entregáveis: relatório técnico, métricas comparativas e branch pública com melhorias implementadas.' }
  }
].map((track) => ({ ...track, slug: slugify(track.name) }))

const roadmap = [
  { title: '01. Como a web funciona (request/response)', trail: 'preparacao-do-aluno', mod: 0 },
  { title: '02. Estrutura de projeto front-end', trail: 'preparacao-do-aluno', mod: 0 },
  { title: '03. Setup do VS Code para produtividade', trail: 'preparacao-do-aluno', mod: 1 },
  { title: '04. Extensões e snippets essenciais', trail: 'preparacao-do-aluno', mod: 1 },
  { title: '05. Terminal: navegação e comandos base', trail: 'preparacao-do-aluno', mod: 2 },
  { title: '06. Terminal: automação com scripts', trail: 'preparacao-do-aluno', mod: 2 },
  { title: '07. Git: init, add, commit', trail: 'preparacao-do-aluno', mod: 3 },
  { title: '08. GitHub: push, PR e revisão', trail: 'preparacao-do-aluno', mod: 3 },

  { title: '09. HTML: estrutura base', trail: 'html', mod: 2 },
  { title: '10. HTML: títulos e hierarquia', trail: 'html', mod: 5 },
  { title: '11. Navegação: links externos e internos', trail: 'html', mod: 9 },
  { title: '12. Navegação: âncoras na página', trail: 'html', mod: 10 },
  { title: '13. Listas e conteúdo estruturado', trail: 'html', mod: 16 },
  { title: '14. Imagens e texto alternativo', trail: 'html', mod: 12 },
  { title: '15. Tabelas com semântica correta', trail: 'html', mod: 18 },
  { title: '16. Formulários: campos e labels', trail: 'html', mod: 26 },
  { title: '17. Formulários: agrupamento e validação', trail: 'html', mod: 28 },
  { title: '18. Acessibilidade base em HTML', trail: 'html', mod: 40 },

  { title: '19. CSS: conexão com HTML', trail: 'css', mod: 1 },
  { title: '20. CSS: seletores e especificidade inicial', trail: 'css', mod: 3 },
  { title: '21. Cores, contraste e unidade visual', trail: 'css', mod: 4 },
  { title: '22. Tipografia e hierarquia', trail: 'css', mod: 7 },
  { title: '23. Box model e espaçamento', trail: 'css', mod: 10 },
  { title: '24. Width, height e overflow', trail: 'css', mod: 17 },
  { title: '25. Flexbox: alinhamento e distribuição', trail: 'css', mod: 21 },
  { title: '26. Flexbox: navbar e cards', trail: 'css', mod: 28 },
  { title: '27. Grid: colunas, linhas e gaps', trail: 'css', mod: 31 },
  { title: '28. Grid: composição de página', trail: 'css', mod: 37 },
  { title: '29. Componentes visuais com CSS', trail: 'css', mod: 46 },
  { title: '30. Responsividade mobile-first', trail: 'css', mod: 52 },
  { title: '31. Projeto final com CSS responsivo', trail: 'css', mod: 59 },

  { title: '32. JS: variáveis e tipos', trail: 'javascript-e-logica', mod: 0 },
  { title: '33. JS: condicionais', trail: 'javascript-e-logica', mod: 0 },
  { title: '34. JS: loops e iteração', trail: 'javascript-e-logica', mod: 1 },
  { title: '35. JS: funções e escopo', trail: 'javascript-e-logica', mod: 1 },
  { title: '36. Arrays: map/filter/reduce', trail: 'javascript-e-logica', mod: 2 },
  { title: '37. Arrays: buscas e ordenação', trail: 'javascript-e-logica', mod: 2 },
  { title: '38. Objetos: modelagem de dados', trail: 'javascript-e-logica', mod: 3 },
  { title: '39. Objetos: destructuring e spread', trail: 'javascript-e-logica', mod: 3 },
  { title: '40. DOM: seleção e atualização', trail: 'javascript-e-logica', mod: 4 },
  { title: '41. Eventos: clique, input, submit', trail: 'javascript-e-logica', mod: 4 },
  { title: '42. Fetch API: loading e erro', trail: 'javascript-e-logica', mod: 5 },
  { title: '43. Fetch API: transformação de dados', trail: 'javascript-e-logica', mod: 5 },
  { title: '44. LocalStorage: persistência de estado', trail: 'javascript-e-logica', mod: 6 },
  { title: '45. LocalStorage: sincronização de UI', trail: 'javascript-e-logica', mod: 6 },

  { title: '46. TypeScript: inferência e tipos primitivos', trail: 'typescript', mod: 0 },
  { title: '47. TypeScript: strict mode', trail: 'typescript', mod: 0 },
  { title: '48. Interfaces e type aliases', trail: 'typescript', mod: 1 },
  { title: '49. Modelagem de domínio com interfaces', trail: 'typescript', mod: 1 },
  { title: '50. Union types e narrowing', trail: 'typescript', mod: 2 },
  { title: '51. Guards de tipo reutilizáveis', trail: 'typescript', mod: 2 },
  { title: '52. Generics: funções e utilitários', trail: 'typescript', mod: 3 },
  { title: '53. Generics com constraints', trail: 'typescript', mod: 3 },
  { title: '54. Tipagem de eventos de UI', trail: 'typescript', mod: 4 },
  { title: '55. Tipagem de callbacks e handlers', trail: 'typescript', mod: 4 },
  { title: '56. DTOs e contratos de API', trail: 'typescript', mod: 5 },
  { title: '57. Estrutura de tipos por domínio', trail: 'typescript', mod: 6 },

  { title: '58. Frameworks: arquitetura por componentes', trail: 'frameworks-front-end', mod: 0 },
  { title: '59. Frameworks: composição e reutilização', trail: 'frameworks-front-end', mod: 0 },
  { title: '60. Roteamento: páginas e parâmetros', trail: 'frameworks-front-end', mod: 1 },
  { title: '61. Roteamento: layouts e navegação', trail: 'frameworks-front-end', mod: 1 },
  { title: '62. Estado compartilhado entre telas', trail: 'frameworks-front-end', mod: 2 },
  { title: '63. Organização de estado por domínio', trail: 'frameworks-front-end', mod: 2 },
  { title: '64. Formulários em framework', trail: 'frameworks-front-end', mod: 3 },
  { title: '65. Validação e feedback de formulário', trail: 'frameworks-front-end', mod: 3 },
  { title: '66. Consumo de API em SPA', trail: 'frameworks-front-end', mod: 4 },
  { title: '67. Estados de loading/erro/vazio', trail: 'frameworks-front-end', mod: 4 },
  { title: '68. Renderização e performance', trail: 'frameworks-front-end', mod: 5 },
  { title: '69. SSR/SSG/CSR na prática', trail: 'frameworks-front-end', mod: 5 },
  { title: '70. Arquitetura escalável de app', trail: 'frameworks-front-end', mod: 6 },

  { title: '71. Git avançado para equipes', trail: 'ferramentas', mod: 0 },
  { title: '72. Code review com Pull Request', trail: 'ferramentas', mod: 1 },
  { title: '73. npm scripts para produtividade', trail: 'ferramentas', mod: 2 },
  { title: '74. npm workspaces e organização', trail: 'ferramentas', mod: 2 },
  { title: '75. Vite: aliases e envs', trail: 'ferramentas', mod: 3 },
  { title: '76. Vite: build e preview', trail: 'ferramentas', mod: 3 },
  { title: '77. ESLint: regras e consistência', trail: 'ferramentas', mod: 4 },
  { title: '78. Prettier: formatação automática', trail: 'ferramentas', mod: 5 },
  { title: '79. Pipeline local de qualidade', trail: 'ferramentas', mod: 6 },
  { title: '80. Pipeline de release', trail: 'ferramentas', mod: 6 },

  { title: '81. Acessibilidade: teclado e foco', trail: 'qualidade-e-boas-praticas', mod: 0 },
  { title: '82. Acessibilidade: semântica avançada', trail: 'qualidade-e-boas-praticas', mod: 0 },
  { title: '83. Performance: imagens e fontes', trail: 'qualidade-e-boas-praticas', mod: 1 },
  { title: '84. Performance: render e bundle', trail: 'qualidade-e-boas-praticas', mod: 1 },
  { title: '85. Responsividade robusta', trail: 'qualidade-e-boas-praticas', mod: 2 },
  { title: '86. Testes unitários de regra', trail: 'qualidade-e-boas-praticas', mod: 3 },
  { title: '87. Testes de interface e fluxo', trail: 'qualidade-e-boas-praticas', mod: 4 },
  { title: '88. PWA: manifest e cache', trail: 'qualidade-e-boas-praticas', mod: 5 },
  { title: '89. Governança e manutenção', trail: 'qualidade-e-boas-praticas', mod: 6 },

  { title: '90. Projeto final: planejamento', trail: 'qualidade-e-boas-praticas', mod: 6 },
  { title: '91. Projeto final: arquitetura', trail: 'frameworks-front-end', mod: 6 },
  { title: '92. Projeto final: implementação UI', trail: 'css', mod: 59 },
  { title: '93. Projeto final: integração de dados', trail: 'javascript-e-logica', mod: 5 },
  { title: '94. Projeto final: tipagem', trail: 'typescript', mod: 5 },
  { title: '95. Projeto final: validação e testes', trail: 'qualidade-e-boas-praticas', mod: 4 },
  { title: '96. Projeto final: otimização de performance', trail: 'qualidade-e-boas-praticas', mod: 1 },
  { title: '97. Projeto final: checklist de acessibilidade', trail: 'qualidade-e-boas-praticas', mod: 0 },
  { title: '98. Projeto final: documentação técnica', trail: 'ferramentas', mod: 6 },
  { title: '99. Projeto final: deploy e revisão final', trail: 'preparacao-do-aluno', mod: 3 },
  { title: '100. Pronto para portfólio e entrevista', trail: 'qualidade-e-boas-praticas', mod: 6 }
]

const practiceItems = {
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
      checklist: ['Usar um h1 único', 'Conectar todos os labels aos campos', 'Garantir foco visível', 'Usar textos de link compreensíveis', 'Testar navegação só com teclado'],
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
      checklist: ['Usar grid/flex com quebra natural', 'Evitar overflow horizontal', 'Criar hover/focus/disabled', 'Manter espaçamentos consistentes', 'Testar em 360px, 768px e desktop'],
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
      checklist: ['Separar dados, estado e render', 'Combinar mais de um filtro', 'Exibir estado vazio', 'Salvar preferências', 'Evitar duplicação de lógica'],
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
      checklist: ['Fechar modal com Escape', 'Retornar foco ao botão de origem', 'Usar aria-expanded quando fizer sentido', 'Evitar listeners duplicados', 'Validar sem travar digitação'],
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
      checklist: ['Usar async/await com try/catch', 'Desabilitar ações durante loading', 'Mostrar mensagem de erro útil', 'Criar botão tentar novamente', 'Não apagar dados úteis sem necessidade'],
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
      structure: ['Mapeamento do comportamento atual', 'Extração de funções puras', 'Nomes mais claros', 'Separação de renderização e regra', 'Checklist de regressão'],
      checklist: ['Refatorar em passos pequenos', 'Manter entradas e saídas', 'Remover duplicação real', 'Evitar abstração sem necessidade', 'Testar os fluxos antes e depois'],
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
      checklist: ['Reproduzir o bug antes de corrigir', 'Validar campos obrigatórios', 'Atualizar estado do botão em tempo real', 'Mostrar feedback específico', 'Documentar o teste manual feito'],
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
      checklist: ['Criar uma função para card', 'Remover blocos duplicados', 'Separar filtro de render', 'Manter comportamento original', 'Testar pelo menos três cenários'],
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
      checklist: ['Cobrir loading, erro, vazio e sucesso', 'Permitir tentar novamente', 'Evitar tela branca', 'Tratar resposta inesperada', 'Manter feedback visível'],
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
      checklist: ['Eliminar overflow horizontal', 'Usar minmax/clamp com cuidado', 'Manter botões legíveis', 'Não quebrar desktop', 'Testar larguras entre 320px e 1024px'],
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
      checklist: ['Usar botões para ações', 'Atualizar aria-expanded', 'Gerenciar foco ao abrir/fechar', 'Fechar com Escape', 'Garantir foco visível'],
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
      checklist: ['Evitar renderizar tudo sem necessidade', 'Usar loading lazy em imagens', 'Reduzir manipulações repetidas do DOM', 'Medir tempo de render', 'Manter estado vazio'],
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
      <li>Checklist de evolução</li>
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
    checklist: ['Filtrar tickets sem recarregar a página', 'Mostrar estado vazio', 'Destacar prioridade e SLA', 'Funcionar bem no mobile', 'Documentar decisões no README'],
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
    checklist: ['Calcular saldo automaticamente', 'Filtrar por categoria', 'Validar formulário', 'Persistir dados localmente', 'Criar README com regras de negócio'],
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
    checklist: ['Criar preview em tempo real', 'Salvar rascunhos', 'Filtrar por status', 'Evitar perder conteúdo digitado', 'Documentar fluxo editorial'],
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
    checklist: ['Combinar múltiplos filtros', 'Salvar favoritos', 'Mostrar quantidade de resultados', 'Criar detalhe da vaga', 'Explicar decisões no README'],
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
    checklist: ['Validar quantidades', 'Destacar estoque baixo', 'Registrar movimentações', 'Persistir dados', 'Criar estado vazio'],
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
    checklist: ['Detectar sobreposição de horários', 'Permitir excluir evento', 'Mostrar feedback claro', 'Persistir agenda', 'Funcionar no mobile'],
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

const editorState = {
  html: `<main style="font-family: Inter, sans-serif; padding: 24px;"><h1 style="margin:0 0 8px;">Front Lab Academy</h1><p>Pratique front-end com trilhas e exercícios reais.</p></main>`,
  css: `body { margin: 0; }`,
  js: `console.log('Prática front-end ativa.');`
}

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

const moduleChecklistItems = [
  'Li a apostila do módulo',
  'Executei ou revisei o exemplo na Mini IDE',
  'Fiz a prática proposta',
  'Consigo explicar o conceito sem consultar'
]

function getSavedTheme() {
  return localStorage.getItem('front-lab-academy-theme') || 'light'
}

function getPreviewThemeCss() {
  const isDark = document.documentElement.dataset.theme === 'dark'
  return isDark
    ? 'body{background:#060816;color:#f8fafc;} a{color:#22d3ee;}'
    : 'body{background:#ffffff;color:#101827;} a{color:#2563eb;}'
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
  localStorage.setItem('front-lab-academy-theme', nextTheme)
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

function getTrackProgressKey(trackSlug) {
  return `front-lab-progress:${trackSlug}`
}

function getEmptyTrackProgress() {
  return {
    modules: {}
  }
}

function readTrackProgress(trackSlug) {
  try {
    const saved = JSON.parse(localStorage.getItem(getTrackProgressKey(trackSlug)) || '{}')
    return {
      ...getEmptyTrackProgress(),
      ...saved,
      modules: saved.modules && typeof saved.modules === 'object' ? saved.modules : {}
    }
  } catch {
    return getEmptyTrackProgress()
  }
}

function saveTrackProgress(trackSlug, progress) {
  localStorage.setItem(getTrackProgressKey(trackSlug), JSON.stringify(progress))
}

function getModuleProgress(trackSlug, index) {
  const progress = readTrackProgress(trackSlug)
  const moduleProgress = progress.modules[String(index)] || {}
  const checks = moduleChecklistItems.map((_, itemIndex) => Boolean(moduleProgress.checks?.[itemIndex]))

  return {
    checks,
    completedAt: moduleProgress.completedAt || null
  }
}

function isModuleComplete(trackSlug, index) {
  return getModuleProgress(trackSlug, index).checks.every(Boolean)
}

function getModuleProgressState(trackSlug, index) {
  const { checks } = getModuleProgress(trackSlug, index)
  const checkedCount = checks.filter(Boolean).length
  if (checkedCount === moduleChecklistItems.length) return 'completed'
  if (checkedCount > 0) return 'started'
  return 'idle'
}

function updateModuleChecklist(trackSlug, index, checkIndex, isChecked) {
  const progress = readTrackProgress(trackSlug)
  const key = String(index)
  const current = progress.modules[key] || {}
  const checks = moduleChecklistItems.map((_, itemIndex) => Boolean(current.checks?.[itemIndex]))
  checks[checkIndex] = isChecked
  const isComplete = checks.every(Boolean)

  progress.modules[key] = {
    checks,
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

function renderModuleChecklist(track, index) {
  const moduleProgress = getModuleProgress(track.slug, index)
  const completed = moduleProgress.checks.every(Boolean)
  const checklist = moduleChecklistItems.map((item, itemIndex) => `
    <li>
      <label>
        <input type="checkbox" data-module-check="${itemIndex}" ${moduleProgress.checks[itemIndex] ? 'checked' : ''} />
        <span>${moduleProgress.checks[itemIndex] ? '✓' : ''}</span>
        <p>${item}</p>
      </label>
    </li>
  `).join('')

  return `
    <section class="module-progress-checklist" data-track-slug="${track.slug}" data-module-index="${index}">
      <div class="module-progress-head">
        <div>
          <h4>Checklist do módulo</h4>
          <p>${completed ? 'Módulo concluído. Bom trabalho.' : 'Complete os itens para marcar este módulo como concluído.'}</p>
        </div>
        <span class="${completed ? 'is-complete' : ''}">${completed ? 'Concluído' : 'Em estudo'}</span>
      </div>
      <ul class="practice-check-list">${checklist}</ul>
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
  if (state === 'started') return 'Em andamento'
  return 'Não iniciado'
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
  const checklistStorageKey = `front-lab-academy-checklist:${type}:${item.id}`
  const savedChecklist = JSON.parse(localStorage.getItem(checklistStorageKey) || '[]')
  const checklist = item.checklist.map((part, index) => `
    <li>
      <label>
        <input type="checkbox" data-check-index="${index}" ${savedChecklist[index] ? 'checked' : ''} />
        <span>✓</span>
        <p>${part}</p>
      </label>
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
        <article class="practice-steps-card">
          <h3>Checklist de conclusão</h3>
          <ul class="practice-check-list" data-storage-key="${checklistStorageKey}">${checklist}</ul>
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
          <iframe class="preview-frame practice-preview" title="Preview da prática"></iframe>
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

  const isHtmlOnly = !cssInput && !jsInput
  const source = isHtmlOnly
    ? htmlInput.value
    : `<!doctype html><html><head><style>${getPreviewThemeCss()}${cssInput?.value || ''}</style></head><body>${htmlInput.value}<script>${jsInput?.value || ''}<' + '/script></body></html>`
  previewFrame.srcdoc = source
}

function runEmbeddedIde(ideRoot) {
  const htmlInput = ideRoot.querySelector('textarea[data-type="html"]')
  const cssInput = ideRoot.querySelector('textarea[data-type="css"]')
  const jsInput = ideRoot.querySelector('textarea[data-type="js"]')
  const previewFrame = ideRoot.querySelector('.practice-preview')
  if (!htmlInput || !cssInput || !jsInput || !previewFrame) return

  const source = `<!doctype html><html><head><style>${getPreviewThemeCss()}${cssInput.value}</style></head><body>${htmlInput.value}<script>${jsInput.value}<' + '/script></body></html>`
  previewFrame.srcdoc = source
}

function isCodeLikeBlock(block) {
  const lines = block.split('\n')
  return lines.some((line) => /^\s*</.test(line))
    || lines.some((line) => /^\s*(<\/|{|\}|[.#]?\w[\w-]*\s*{)/.test(line))
    || lines.some((line) => /^\s*(projeto\/|index\.html|images\/|paginas\/|https?:\/\/|\/[\w-])/.test(line))
    || lines.some((line) => /^\s*(\[ \]|\d+\.)\s+/.test(line))
}

function renderModuleStudy(module) {
  if (!module.lesson) return ''

  const blocks = module.lesson
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      if (/^[A-Z0-9 ,.:;/-]+$/.test(block) && block.length <= 52) {
        return `<h5>${escapeHtml(block)}</h5>`
      }

      if (isCodeLikeBlock(block)) {
        return `<pre><code>${escapeHtml(block)}</code></pre>`
      }

      return `<p>${escapeHtml(block).replace(/\n/g, '<br>')}</p>`
    })
    .join('')

  return `
    <section class="module-study">
      <h4>Apostila do módulo</h4>
      <div class="module-study-content">${blocks}</div>
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
      ${isHtmlTrack ? renderModuleStudy(module) : ''}
      <p><strong>Experiência prática:</strong> ${module.practice}</p>
      <p><strong>Exercício de fixação:</strong> ${module.exercise}</p>
      ${renderModuleChecklist(track, index)}
      <div class="module-ide">
        <h4>Mini IDE do módulo</h4>
        <div class="${ideGridClass}">
          ${ideFields}
        </div>
        <button class="pill run-module-ide">Executar módulo</button>
        <iframe class="preview-frame module-preview" title="Preview módulo ${index + 1}"></iframe>
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
  editorState[activeTab] = editor.value
  activeTab = tab
  editor.dataset.activeTab = tab
  editor.value = editorState[activeTab]
  editorTabs.querySelectorAll('.tab-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.tab === tab))
}

function runPreview() {
  if (!editor || !preview) return
  editorState[activeTab] = editor.value
  const source = `<!doctype html><html><head><style>${getPreviewThemeCss()}${editorState.css}</style></head><body>${editorState.html}<script>${editorState.js}<' + '/script></body></html>`
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
      return
    }

    if (target.classList.contains('module-step') && typeof moduleContent.showModule === 'function') {
      moduleContent.showModule(Number(target.dataset.moduleIndex || 0), true)
    }
  })

  moduleContent.addEventListener('change', (event) => {
    const target = event.target
    if (!(target instanceof HTMLInputElement) || target.type !== 'checkbox') return
    const checklist = target.closest('.module-progress-checklist')
    if (!(checklist instanceof HTMLElement) || typeof moduleContent.showModule !== 'function') return
    const trackSlug = checklist.dataset.trackSlug
    const moduleIndex = Number(checklist.dataset.moduleIndex || 0)
    const checkIndex = Number(target.dataset.moduleCheck || 0)
    const track = tracks.find((item) => item.slug === trackSlug)
    if (!track) return

    updateModuleChecklist(track.slug, moduleIndex, checkIndex, target.checked)
    updateCurrentTrackProgress(track)
    moduleContent.showModule(moduleIndex)
  })
}

if (practiceDetail) {
  practiceDetail.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof HTMLElement) || !target.classList.contains('run-practice-ide')) return
    const practiceIde = target.closest('.practice-ide')
    if (practiceIde) runEmbeddedIde(practiceIde)
  })

  practiceDetail.addEventListener('change', (event) => {
    const target = event.target
    if (!(target instanceof HTMLInputElement) || target.type !== 'checkbox') return
    const list = target.closest('.practice-check-list')
    if (!(list instanceof HTMLElement)) return
    const storageKey = list.dataset.storageKey
    if (!storageKey) return
    const checkedItems = [...list.querySelectorAll('input[type="checkbox"]')].map((input) => input.checked)
    localStorage.setItem(storageKey, JSON.stringify(checkedItems))
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
