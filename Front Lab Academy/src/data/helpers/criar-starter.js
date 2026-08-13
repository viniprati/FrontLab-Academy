export function mkStarter(title, color, log) {
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
