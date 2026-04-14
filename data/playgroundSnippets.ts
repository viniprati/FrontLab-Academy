import { PlaygroundSnippet } from '@/types/course';

export const playgroundSnippets: PlaygroundSnippet[] = [
  {
    id: 'landing-html',
    label: 'Landing HTML',
    language: 'html',
    description: 'Estrutura inicial de uma pagina com hero e CTA.',
    code: `<main class="hero">\n  <h1>Aprenda Front-End</h1>\n  <p>Do basico ao avancado com projetos guiados.</p>\n  <button>Comecar trilha</button>\n</main>`
  },
  {
    id: 'card-css',
    label: 'Card CSS',
    language: 'css',
    description: 'Cartao premium com glassmorphism leve.',
    code: `.card {\n  background: rgba(16, 23, 43, 0.7);\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  border-radius: 1rem;\n  padding: 1.25rem;\n  box-shadow: 0 24px 64px rgba(2, 6, 23, 0.55);\n}`
  },
  {
    id: 'dom-js',
    label: 'DOM JS',
    language: 'javascript',
    description: 'Interacao basica com evento de clique.',
    code: `const button = document.querySelector('button');\nconst output = document.querySelector('#output');\n\nbutton?.addEventListener('click', () => {\n  if (output) output.textContent = 'Codigo executado com sucesso!';\n});`
  },
  {
    id: 'typed-ts',
    label: 'Tipos TS',
    language: 'typescript',
    description: 'Exemplo curto de tipagem e inferencia.',
    code: `type Lesson = {\n  title: string;\n  duration: number;\n};\n\nconst lessons: Lesson[] = [\n  { title: 'Hooks', duration: 20 },\n  { title: 'Server Components', duration: 25 }\n];\n\nconst total = lessons.reduce((sum, lesson) => sum + lesson.duration, 0);\nconsole.log('Tempo total:', total);`
  }
];
