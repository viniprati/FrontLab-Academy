import { mkStarter } from '../../helpers/criar-starter.js'
import { createCssLesson, createCssLessonSections } from './apostila.js'
import { cssModuleActivities } from './atividades.js'

function getCssModuleLevel(index) {
  if (index <= 30) return 'iniciante'
  else if (index <= 50) return 'intermediário'
  else return 'avançado'
}

function getCssModuleTime(index) {
  if (index <= 20) return '25 min'
  else if (index <= 40) return '35 min'
  else if (index <= 50) return '40 min'
  else return '50 min'
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

  const module = {
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

  return {
    ...module,
    lesson: createCssLesson(module),
    lessonSections: createCssLessonSections(module),
    lessonDemo: module.starter
  }
}

export const cssModules = [
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
    ]
