import { PlaygroundSnippet } from '@/types/course';

export const playgroundSnippets: PlaygroundSnippet[] = [
  {
    id: 'landing-html',
    label: 'HTML semantico',
    language: 'html',
    description: 'Estruture um bloco semantico com titulo, texto e acao.',
    code: `<main class="hero">\n  <h1>Guia de estudo Front-End</h1>\n  <p>Aprenda um conceito por vez e pratique no mesmo bloco.</p>\n  <button>Iniciar modulo</button>\n</main>`
  },
  {
    id: 'card-css',
    label: 'Card CSS didatico',
    language: 'css',
    description: 'Card limpo com foco em legibilidade e espaçamento.',
    code: `.card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 1rem;\n  padding: 1.25rem;\n  max-width: 320px;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n}\n\n.card h2 {\n  margin: 0 0 0.5rem;\n  color: #0f172a;\n}\n\n.card p {\n  margin: 0;\n  color: #475569;\n}`
  },
  {
    id: 'dom-js',
    label: 'DOM e eventos',
    language: 'javascript',
    description: 'Atualize a interface em resposta ao clique do usuario.',
    code: `const button = document.querySelector('button');\nconst output = document.querySelector('#output');\n\nbutton?.addEventListener('click', () => {\n  if (!output) return;\n  output.textContent = 'Acao executada: conteudo atualizado com JavaScript.';\n});`
  },
  {
    id: 'typed-ts',
    label: 'TypeScript basico',
    language: 'typescript',
    description: 'Tipagem simples para lista de modulos e calculo total.',
    code: `type Module = {\n  title: string;\n  duration: number;\n};\n\nconst modules: Module[] = [\n  { title: 'Semantica HTML', duration: 25 },\n  { title: 'Flexbox na pratica', duration: 30 }\n];\n\nconst totalMinutes = modules.reduce((sum, module) => sum + module.duration, 0);\nconsole.log('Tempo total de estudo:', totalMinutes);`
  }
];
