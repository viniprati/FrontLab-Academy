const categoryApplications = {
  Fundamentos: 'No dia a dia, fundamentos de CSS aparecem quando voce cria a primeira camada visual de qualquer pagina: fonte, cor, seletores, medidas e leitura. Eles evitam que cada elemento receba estilo improvisado.',
  'Box Model': 'O box model aparece sempre que voce ajusta tamanho, respiro, borda e distancia entre elementos. Ele explica por que cards estouram, botoes ficam apertados ou secoes parecem desalinhadas.',
  Layout: 'Layout aparece quando voce precisa organizar grupos de elementos: menus, cards, formularios, barras de acao, estados vazios e componentes alinhados.',
  Grid: 'Grid aparece quando a interface precisa de linhas e colunas: galerias, dashboards, vitrines, areas de conteudo, documentacao e layouts completos.',
  'Visual e Componentes': 'Componentes visuais aparecem em interfaces reais: botoes, cards, inputs, estados, sombras, imagens e fundos. O objetivo e criar acabamento sem sacrificar legibilidade.',
  Responsividade: 'Responsividade aparece quando a mesma tela precisa funcionar em celular, tablet e desktop. O foco e adaptar conteudo, nao apenas diminuir tudo.'
}

const categoryErrors = {
  Fundamentos: ['Misturar CSS inline com arquivo externo sem criterio.', 'Criar seletores amplos demais e afetar a pagina inteira sem querer.', 'Escolher cor, fonte ou medida sem pensar em leitura.'],
  'Box Model': ['Confundir margin com padding.', 'Definir width e height fixos que cortam conteudo.', 'Ignorar box-sizing e gerar contas confusas de tamanho.'],
  Layout: ['Usar position ou margin manual para resolver tudo.', 'Criar alinhamentos fragilizados que quebram com textos maiores.', 'Nao testar com mais ou menos itens.'],
  Grid: ['Usar Grid para tudo mesmo quando Flexbox seria mais simples.', 'Criar colunas fixas que estouram no mobile.', 'Nao pensar no comportamento da grade com conteudo real.'],
  'Visual e Componentes': ['Priorizar efeito visual e perder contraste.', 'Criar estados de hover sem foco equivalente.', 'Usar sombras, bordas e cores sem padrao.'],
  Responsividade: ['Criar layout desktop primeiro e remendar o mobile depois.', 'Usar breakpoints arbitrarios sem observar o conteudo.', 'Deixar textos, imagens ou cards gerarem rolagem horizontal.']
}

const categoryBestPractices = {
  Fundamentos: ['Comece pelo HTML semantico.', 'Use CSS externo.', 'Crie uma base visual simples antes de componentes complexos.'],
  'Box Model': ['Use box-sizing border-box.', 'Prefira max-width a larguras rigidas.', 'Teste conteudos maiores que o exemplo inicial.'],
  Layout: ['Use flex para alinhamento em um eixo.', 'Use gap para espacamento entre itens.', 'Planeje comportamento com poucos e muitos elementos.'],
  Grid: ['Use repeat, fr e minmax para grades flexiveis.', 'Evite largura fixa em colunas principais.', 'Teste a grade em telas pequenas e medias.'],
  'Visual e Componentes': ['Crie escala consistente de cores, bordas e espacamentos.', 'Inclua hover, focus e disabled quando fizer sentido.', 'Valide contraste e legibilidade.'],
  Responsividade: ['Construa primeiro a versao mobile.', 'Ajuste breakpoints quando o conteudo pedir.', 'Teste em 360px, 768px, 1024px e desktop.']
}

const examples = {
  'Introdução ao CSS': 'h1 {\n  color: #2563eb;\n}\n\np {\n  color: #475569;\n  line-height: 1.6;\n}',
  'Como conectar CSS no HTML': '<link rel="stylesheet" href="style.css">',
  'Seletores básicos': 'h1 { color: #2563eb; }\np { color: #475569; }\nbutton { cursor: pointer; }',
  'Seletores por classe, ID e tag': '.card { padding: 1rem; }\n.destaque { border-color: #2563eb; }\n#principal { max-width: 960px; }',
  'Cores no CSS': '.alerta {\n  color: #991b1b;\n  background: #fee2e2;\n  border: 1px solid #fecaca;\n}',
  'Unidades de medida': '.card {\n  width: min(100%, 42rem);\n  padding: 1rem;\n  margin: 5vh auto;\n}',
  'Fontes e tipografia': 'body {\n  font-family: Inter, system-ui, sans-serif;\n  line-height: 1.6;\n}',
  'Tamanho, peso e estilo de texto': 'h1 { font-size: 2rem; font-weight: 800; }\n.muted { font-size: .875rem; font-weight: 500; }',
  'Alinhamento de texto': '.hero { text-align: center; }\n.article { text-align: left; }',
  'Espaçamento com margin e padding': '.card {\n  margin-top: 1rem;\n  padding: 1.25rem;\n}',
  'O que é o Box Model': '.box {\n  width: 240px;\n  padding: 24px;\n  border: 2px solid #2563eb;\n  margin: 24px;\n}',
  'Width e height': '.banner {\n  width: min(100%, 960px);\n  min-height: 280px;\n}',
  Border: '.input { border: 1px solid #cbd5e1; }\n.input:focus { border-color: #2563eb; }',
  'Border-radius': '.card { border-radius: 12px; }\n.avatar { border-radius: 999px; }',
  'Margin na prática': '.section + .section { margin-top: 2rem; }',
  'Padding na prática': '.button { padding: .75rem 1rem; }\n.card { padding: 1.25rem; }',
  'Box-sizing': '*, *::before, *::after { box-sizing: border-box; }',
  Overflow: '.panel {\n  max-height: 280px;\n  overflow: auto;\n}',
  'Display block, inline e inline-block': '.tag {\n  display: inline-block;\n  padding: .25rem .5rem;\n}',
  'Reset CSS básico': '* { box-sizing: border-box; }\nbody { margin: 0; }\nimg { max-width: 100%; display: block; }',
  'Display flex': '.nav {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}',
  'Flex-direction': '.stack {\n  display: flex;\n  flex-direction: column;\n}',
  'Justify-content': '.toolbar {\n  display: flex;\n  justify-content: space-between;\n}',
  'Align-items': '.media {\n  display: flex;\n  align-items: center;\n}',
  Gap: '.actions {\n  display: flex;\n  gap: .75rem;\n}',
  'Flex-wrap': '.tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: .5rem;\n}',
  'Introdução ao CSS Grid': '.grid {\n  display: grid;\n  gap: 1rem;\n}',
  'Grid-template-columns': '.cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}',
  'Grid-template-rows': '.layout {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}',
  'Grid com cards': '.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem;\n}',
  'Media queries': '@media (max-width: 720px) {\n  .cards { grid-template-columns: 1fr; }\n}',
  'Layout mobile-first': '.cards { display: grid; gap: 1rem; }\n@media (min-width: 768px) { .cards { grid-template-columns: repeat(3, 1fr); } }'
}

function listSection(title, items) {
  return [title, items.map((item) => '- ' + item).join('\n')].join('\n\n')
}

function getConcept(module) {
  const learnText = module.learn?.length ? ' Nesta aula, os pontos principais sao: ' + module.learn.join(', ') + '.' : ''
  return (module.description || 'Este modulo trabalha ' + module.title.toLowerCase() + ' em CSS.') + learnText + ' O foco nao e decorar propriedades isoladas, mas entender que problema visual elas resolvem e como decidir quando usa-las.'
}

function getHowToUse(module) {
  const base = categoryApplications[module.category] || categoryApplications.Fundamentos
  return base + ' Em ' + module.title.toLowerCase() + ', observe primeiro o conteudo e o comportamento esperado; depois escolha a propriedade ou tecnica que resolve o problema com menos fragilidade.'
}

export function createCssLesson(module) {
  const errors = categoryErrors[module.category] || categoryErrors.Fundamentos
  const bestPractices = categoryBestPractices[module.category] || categoryBestPractices.Fundamentos
  const example = examples[module.title] || '.exemplo {\n  /* aplique ' + module.title.toLowerCase() + ' aqui */\n}'

  return [
    'O QUE E E PARA QUE SERVE',
    getConcept(module),
    'COMO USAR NA PRATICA',
    getHowToUse(module),
    'EXEMPLO COMENTADO',
    example,
    'Este exemplo e um ponto de partida. Altere valores, aumente o conteudo, teste em telas menores e observe se o comportamento continua previsivel.',
    'APLICACAO NO COTIDIANO',
    module.practice,
    listSection('ERROS COMUNS', errors),
    listSection('BOAS PRATICAS', bestPractices),
    'EXERCICIO GUIADO',
    module.exercise
  ].join('\n\n')
}

export function createCssLessonSections(module) {
  const errors = categoryErrors[module.category] || categoryErrors.Fundamentos
  const bestPractices = categoryBestPractices[module.category] || categoryBestPractices.Fundamentos
  const example = examples[module.title] || '.exemplo {\n  /* aplique ' + module.title.toLowerCase() + ' aqui */\n}'

  return [
    {
      title: 'Objetivo do modulo',
      type: 'text',
      content: module.objective
    },
    {
      title: 'O que e e para que serve',
      type: 'text',
      content: getConcept(module)
    },
    {
      title: 'Como usar na pratica',
      type: 'text',
      content: getHowToUse(module)
    },
    {
      title: 'Exemplo comentado',
      type: 'code',
      language: 'css',
      code: example,
      note: 'Use este exemplo como ponto de partida. Altere valores, aumente o conteudo, teste em telas menores e observe se o comportamento continua previsivel.'
    },
    {
      title: 'Aplicacao no cotidiano',
      type: 'text',
      content: module.practice
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
      content: module.exercise
    }
  ]
}
