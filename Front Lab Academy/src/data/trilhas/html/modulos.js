import { createHtmlLessonSections, enhanceHtmlLesson, htmlLessons } from './apostila.js'

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

function getHtmlModuleCategory(index) {
  return HTML_MODULE_CATEGORY_RANGES.find((range) => index <= range.end)?.category || 'Projeto Final'
}

function getHtmlModuleLevel(index) {
  if (index <= 29) return 'iniciante'
  else if (index <= 43) return 'intermediário'
  else return 'projeto'
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
  } else if (category === 'Formulários') {
    return `Crie um trecho de formulário em index.html aplicando ${title.toLowerCase()} com labels, names e estrutura acessível.`
  } else if (category === 'Semântica e Acessibilidade') {
    return `Refatore uma pequena página em index.html aplicando ${title.toLowerCase()} e confira se a estrutura continua compreensível sem CSS.`
  } else {
    return `Reproduza os exemplos principais de ${title.toLowerCase()} em index.html e adapte para um conteúdo próprio.`
  }
}

function getHtmlExercise(index, title, category) {
  if (index === 50) return 'Conclua quando a revisão da trilha estiver validada item por item no seu projeto final.'
  else if (category === 'Projeto Final') return `Entregue uma página ou seção completa que demonstre domínio de ${title.toLowerCase()}.`
  else return `Conclua quando conseguir explicar ${title.toLowerCase()} e usar o conceito sem depender de CSS ou JavaScript.`
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
  const practice = getHtmlPractice(index, lesson.title, category)
  const exercise = getHtmlExercise(index, lesson.title, category)

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
    practice,
    exercise,
    lesson: enhanceHtmlLesson(lesson, { category, practice, exercise }),
    lessonSections: createHtmlLessonSections(lesson, {
      category,
      objective: highlights[0],
      learn: highlights,
      practice,
      exercise
    }),
    starter: {
      html: createHtmlStarter(lesson.title, index, lesson.lesson),
      css: '',
      js: ''
    }
  }
}

export const htmlModules = htmlLessons.map(createHtmlModuleFromLesson)
