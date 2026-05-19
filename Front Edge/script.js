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
    <p class="eyebrow">Front-Edge Academy</p>
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
  return {
    title,
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
      { title: 'Fundamentos da web e do front-end', learn: ['Como navegador, servidor e HTTP se conectam', 'Diferença entre front-end e back-end', 'Ciclo básico de desenvolvimento web'], practice: 'Monte um mapa simples da arquitetura cliente-servidor.', exercise: 'Explique em um README o fluxo completo de uma requisição.', starter: mkStarter('Arquitetura Web', '#16a34a', 'Arquitetura web') },
      { title: 'VS Code para produtividade', learn: ['Configurações essenciais', 'Extensões úteis para front-end', 'Snippets e organização'], practice: 'Configure um workspace com lint e format on save.', exercise: 'Crie um checklist de setup do VS Code.', starter: mkStarter('Setup VS Code', '#15803d', 'VS Code pronto') },
      { title: 'Terminal e linha de comando', learn: ['Navegação por diretórios', 'Comandos de criação e organização', 'Scripts npm'], practice: 'Simule estrutura de projeto usando terminal.', exercise: 'Monte guia com 15 comandos de uso diário.', starter: mkStarter('Terminal Essencial', '#22c55e', 'Terminal') },
      { title: 'Git, GitHub e deploy inicial', learn: ['Commits semânticos', 'Fluxo de branch', 'Deploy de site estático'], practice: 'Versione e publique um projeto simples.', exercise: 'Crie repositório com histórico de commits claro.', starter: mkStarter('Deploy inicial', '#16a34a', 'Deploy') }
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
    modules: [
      createHtmlModule(1, 'Introdução ao HTML', 'Primeiro contato com HTML e com o papel da linguagem na construção de páginas.', 'iniciante', 'Entender o que o HTML faz e por que ele é a base de qualquer interface web.', ['Papel do HTML no front-end', 'Diferença entre estrutura, estilo e comportamento', 'Leitura de uma página como documento'], 'Identifique em uma página real quais partes pertencem ao HTML.', 'Crie um arquivo index.html com um título e uma apresentação curta.'),
      createHtmlModule(2, 'Como a Web Funciona', 'Visão simples do caminho entre navegador, servidor, arquivos e resposta visual.', 'iniciante', 'Compreender o fluxo básico que transforma um arquivo HTML em uma página no navegador.', ['Navegador, servidor e URL', 'Requisição e resposta', 'Arquivos estáticos no front-end'], 'Desenhe o caminho de uma requisição até a renderização da página.', 'Explique em um parágrafo o que acontece ao abrir um site.'),
      createHtmlModule(3, 'Estrutura Básica de um Documento HTML', 'Montagem do esqueleto essencial com doctype, html, head e body.', 'iniciante', 'Criar documentos HTML válidos e organizados desde a primeira linha.', ['DOCTYPE e elemento html', 'Head, body e metadados mínimos', 'Indentação inicial do documento'], 'Monte uma página com estrutura completa e conteúdo simples.', 'Crie um template base reutilizável para os próximos módulos.'),
      createHtmlModule(4, 'Tags Principais do HTML', 'Conhecimento das tags mais comuns para montar conteúdo inicial com segurança.', 'iniciante', 'Reconhecer e aplicar tags essenciais em uma página simples.', ['Tags de texto e agrupamento', 'Elementos de conteúdo e navegação', 'Quando usar cada tag comum'], 'Transforme um texto solto em uma página com tags apropriadas.', 'Crie uma página de apresentação usando pelo menos oito tags diferentes.'),
      createHtmlModule(5, 'Textos e Parágrafos', 'Organização de blocos textuais com parágrafos, quebras e destaque básico.', 'iniciante', 'Estruturar textos legíveis sem usar HTML apenas como aparência.', ['Parágrafos e fluxo de texto', 'Quebras de linha com critério', 'Destaques sem perder significado'], 'Reestruture um texto longo em parágrafos claros.', 'Crie uma página de artigo curto com introdução, corpo e fechamento.'),
      createHtmlModule(6, 'Títulos e Hierarquia de Conteúdo', 'Uso correto de h1 a h6 para criar hierarquia compreensível.', 'iniciante', 'Montar uma árvore de títulos coerente para pessoas e mecanismos de busca.', ['H1 como título principal', 'Subtítulos em ordem lógica', 'Erros comuns de hierarquia'], 'Revise uma página e reorganize seus títulos.', 'Crie um sumário visual usando h1, h2 e h3 em ordem correta.'),
      createHtmlModule(7, 'Comentários no HTML', 'Uso de comentários para orientar o código sem poluir a página.', 'iniciante', 'Adicionar comentários úteis em pontos estratégicos do documento.', ['Sintaxe de comentários', 'Comentários de seção', 'Quando evitar comentários óbvios'], 'Separe uma página em áreas marcadas por comentários.', 'Comente a estrutura de uma landing page sem exagerar.'),
      createHtmlModule(8, 'Atributos HTML', 'Como atributos alteram comportamento, identificação e significado dos elementos.', 'iniciante', 'Usar atributos comuns para configurar elementos de forma correta.', ['Atributos globais', 'id, class, title e lang', 'Valores e boas práticas'], 'Adicione atributos a elementos de uma página existente.', 'Crie uma lista de componentes com ids e classes consistentes.'),
      createHtmlModule(9, 'Links Externos', 'Criação de links para outros sites com segurança e clareza.', 'básico', 'Usar links externos sem prejudicar navegação, segurança ou entendimento.', ['Elemento a e atributo href', 'target blank com rel adequado', 'Texto de link descritivo'], 'Adicione referências externas a uma página de estudos.', 'Monte uma página com cinco links externos úteis e bem descritos.'),
      createHtmlModule(10, 'Links Internos', 'Ligação entre páginas do mesmo projeto usando caminhos corretos.', 'básico', 'Construir navegação básica entre arquivos internos do site.', ['Links para páginas locais', 'Organização de pastas', 'Nomes de arquivos previsíveis'], 'Crie uma navegação entre três páginas HTML.', 'Monte um mini site com Home, Sobre e Contato conectados.'),
      createHtmlModule(11, 'Âncoras na Página', 'Navegação para seções dentro da mesma página com ids e links internos.', 'básico', 'Criar índices e saltos de conteúdo em páginas longas.', ['href com identificador', 'id em seções', 'Experiência em páginas extensas'], 'Adicione um índice navegável a um artigo grande.', 'Crie uma documentação curta com âncoras para cada seção.'),
      createHtmlModule(12, 'Imagens no HTML', 'Inserção de imagens com src, dimensões e contexto adequado.', 'básico', 'Exibir imagens de forma previsível e organizada no HTML.', ['Tag img', 'src, width e height', 'Organização de assets'], 'Inclua imagens em uma página de perfil.', 'Crie uma galeria simples com três imagens e legendas textuais.'),
      createHtmlModule(13, 'Texto Alternativo e Acessibilidade em Imagens', 'Escrita de textos alternativos úteis para imagens informativas.', 'básico', 'Tornar imagens compreensíveis para tecnologias assistivas.', ['Atributo alt', 'Imagem decorativa versus informativa', 'Descrição curta e contextual'], 'Revise textos alternativos de uma galeria.', 'Corrija cinco imagens com alt inadequado ou ausente.'),
      createHtmlModule(14, 'Caminhos Relativos e Absolutos', 'Diferença entre caminhos locais, raiz do site e URLs completas.', 'básico', 'Evitar links e imagens quebrados ao organizar arquivos em pastas.', ['Caminhos relativos', 'Caminhos absolutos', 'Referências entre diretórios'], 'Organize páginas e imagens em subpastas.', 'Corrija uma página com caminhos quebrados para imagens e links.'),
      createHtmlModule(15, 'Listas Ordenadas', 'Uso de listas numeradas para etapas, rankings e sequências.', 'básico', 'Escolher listas ordenadas quando a ordem altera o sentido do conteúdo.', ['ol e li', 'Sequências de instrução', 'Atributos úteis em listas ordenadas'], 'Transforme instruções soltas em uma lista numerada.', 'Crie um passo a passo de publicação de projeto.'),
      createHtmlModule(16, 'Listas Não Ordenadas', 'Uso de listas sem ordem para grupos de itens relacionados.', 'básico', 'Organizar coleções de itens sem criar parágrafos repetitivos.', ['ul e li', 'Menus simples', 'Agrupamento de tópicos'], 'Monte uma lista de recursos de estudo.', 'Crie uma seção de benefícios usando lista não ordenada.'),
      createHtmlModule(17, 'Listas Aninhadas', 'Listas dentro de listas para representar níveis e categorias.', 'básico', 'Construir estruturas de conteúdo com subitens sem perder legibilidade.', ['Aninhamento de ul e ol', 'Indentação clara', 'Categorias e subtópicos'], 'Crie um mapa de conteúdo com categorias e subcategorias.', 'Monte a estrutura de um curso usando listas aninhadas.'),
      createHtmlModule(18, 'Tabelas Básicas', 'Construção de tabelas simples com linhas, colunas e células.', 'básico', 'Representar dados tabulares quando linha e coluna têm relação real.', ['table, tr, th e td', 'Cabeçalhos de coluna', 'Quando usar tabela'], 'Crie uma tabela de horários de estudo.', 'Monte uma tabela com três colunas e cinco linhas de dados.'),
      createHtmlModule(19, 'Tabelas Semânticas', 'Melhoria de tabelas com caption, thead, tbody, tfoot e escopos.', 'básico', 'Criar tabelas mais acessíveis e fáceis de interpretar.', ['caption e agrupamentos', 'thead, tbody e tfoot', 'scope em cabeçalhos'], 'Refatore uma tabela básica para uma versão semântica.', 'Crie uma tabela de planos com legenda e cabeçalhos adequados.'),
      createHtmlModule(20, 'Formulários Básicos', 'Primeira estrutura de formulário com campos, ação e método.', 'básico', 'Entender como formulários coletam dados em páginas web.', ['Elemento form', 'method e action', 'Agrupamento inicial de campos'], 'Monte um formulário simples de contato.', 'Crie um formulário com nome, mensagem e botão de envio.'),
      createHtmlModule(21, 'Inputs de Texto', 'Uso de campos de texto para nomes, assuntos e respostas curtas.', 'básico', 'Criar campos textuais claros e bem identificados.', ['input type text', 'placeholder com moderação', 'name e value'], 'Adicione campos de texto a um formulário de cadastro.', 'Crie um formulário de perfil com campos de nome, cidade e profissão.'),
      createHtmlModule(22, 'Inputs de Email, Senha e Número', 'Campos especializados para tipos comuns de dados.', 'básico', 'Escolher tipos de input que ajudam validação e experiência mobile.', ['type email', 'type password', 'type number'], 'Atualize um formulário genérico com tipos corretos.', 'Crie um cadastro com email, senha e idade usando inputs apropriados.'),
      createHtmlModule(23, 'Checkbox e Radio', 'Campos de seleção múltipla e escolha única em formulários.', 'básico', 'Decidir entre checkbox e radio conforme a regra de escolha.', ['Checkbox para múltiplas opções', 'Radio para opção exclusiva', 'Agrupamento por name'], 'Crie preferências de usuário com seleção correta.', 'Monte uma pesquisa com escolhas únicas e múltiplas.'),
      createHtmlModule(24, 'Select e Options', 'Menus de seleção para listas fechadas de alternativas.', 'básico', 'Usar select quando a escolha deve vir de um conjunto conhecido.', ['select e option', 'value significativo', 'Opção inicial orientativa'], 'Adicione seleção de estado ou categoria a um formulário.', 'Crie um formulário de inscrição com área de interesse em select.'),
      createHtmlModule(25, 'Textarea', 'Campo de texto longo para mensagens, observações e descrições.', 'básico', 'Coletar textos maiores com estrutura e rótulo adequados.', ['textarea', 'rows e limite visual', 'Diferença para input text'], 'Inclua um campo de mensagem em um formulário existente.', 'Crie um formulário de feedback com textarea e campos de identificação.'),
      createHtmlModule(26, 'Botões no HTML', 'Tipos de botões e seus efeitos dentro e fora de formulários.', 'básico', 'Usar botões com tipo correto para evitar comportamentos inesperados.', ['button', 'submit, reset e button', 'Texto de ação claro'], 'Revise botões de um formulário e ajuste seus tipos.', 'Crie três botões com funções distintas e nomes claros.'),
      createHtmlModule(27, 'Labels em Formulários', 'Relação entre rótulos e campos para clareza e acessibilidade.', 'básico', 'Conectar labels a inputs para melhorar clique, leitura e navegação.', ['label for', 'id correspondente', 'Rótulos objetivos'], 'Corrija um formulário sem labels adequados.', 'Crie um formulário de login com labels corretamente vinculados.'),
      createHtmlModule(28, 'Fieldset e Legend', 'Agrupamento semântico de campos relacionados em formulários maiores.', 'básico', 'Organizar formulários complexos em grupos compreensíveis.', ['fieldset', 'legend', 'Grupos de dados pessoais e preferências'], 'Agrupe campos de cadastro em seções claras.', 'Refatore um formulário longo usando fieldset e legend.'),
      createHtmlModule(29, 'Validação Nativa de Formulários', 'Uso de required, minlength, pattern e tipos para validação no navegador.', 'básico', 'Adicionar validações simples sem JavaScript.', ['required e minlength', 'pattern e constraints', 'Mensagens nativas do navegador'], 'Aplique validação a um formulário de cadastro.', 'Crie um formulário com pelo menos quatro regras nativas de validação.'),
      createHtmlModule(30, 'Tags Semânticas', 'Introdução ao uso de elementos que descrevem o papel do conteúdo.', 'intermediário', 'Trocar marcação genérica por elementos com significado real.', ['Semântica no HTML', 'Landmarks e leitura estrutural', 'Benefícios para manutenção'], 'Identifique áreas semânticas em uma página pronta.', 'Reestruture uma página usando tags semânticas principais.'),
      createHtmlModule(31, 'Header, Main e Footer', 'Estrutura principal de uma página com topo, conteúdo e rodapé.', 'intermediário', 'Criar landmarks fundamentais para orientar navegação e leitura.', ['header', 'main único por página', 'footer contextual'], 'Organize uma página simples em três áreas principais.', 'Crie uma página institucional com header, main e footer.'),
      createHtmlModule(32, 'Section e Article', 'Uso de seções e artigos para conteúdo temático e independente.', 'intermediário', 'Separar blocos de conteúdo com sentido próprio.', ['section com tema claro', 'article para conteúdo independente', 'Títulos dentro das seções'], 'Divida uma página longa em seções temáticas.', 'Crie uma página de blog com artigos bem estruturados.'),
      createHtmlModule(33, 'Nav e Aside', 'Elementos para navegação principal, índices e conteúdos complementares.', 'intermediário', 'Distinguir navegação relevante de conteúdo lateral ou auxiliar.', ['nav para grupos de links', 'aside para apoio contextual', 'Menu e conteúdo relacionado'], 'Adicione menu e área complementar a uma página.', 'Crie uma documentação com nav de seções e aside de links úteis.'),
      createHtmlModule(34, 'Div e Span', 'Uso consciente de elementos genéricos quando não há semântica específica.', 'intermediário', 'Usar div e span sem substituir tags semânticas importantes.', ['div como agrupamento', 'span em trechos inline', 'Limites da marcação genérica'], 'Revise uma página com divs excessivas.', 'Substitua divs por tags semânticas onde fizer sentido.'),
      createHtmlModule(35, 'HTML Semântico na Prática', 'Aplicação combinada de semântica em uma página realista.', 'intermediário', 'Construir uma página completa com estrutura clara, navegável e significativa.', ['Planejamento estrutural', 'Combinação de landmarks', 'Revisão de hierarquia'], 'Monte o wireframe semântico de uma página.', 'Crie uma página de serviço usando HTML semântico de ponta a ponta.'),
      createHtmlModule(36, 'Áudio no HTML', 'Inserção de áudio com controles e alternativas básicas.', 'intermediário', 'Publicar conteúdo sonoro com controles nativos e fallback.', ['audio e source', 'controls', 'Texto de fallback'], 'Inclua um player de áudio em uma página.', 'Crie uma seção de podcast com título, descrição e áudio.'),
      createHtmlModule(37, 'Vídeo no HTML', 'Uso de vídeo nativo com controles, poster e múltiplas fontes.', 'intermediário', 'Adicionar vídeos de forma organizada e amigável.', ['video e source', 'poster e controls', 'Boas práticas de mídia'], 'Insira um vídeo demonstrativo em uma página.', 'Crie uma seção de apresentação com vídeo e descrição textual.'),
      createHtmlModule(38, 'Iframe', 'Incorporação de conteúdo externo com cuidados de tamanho, título e segurança.', 'intermediário', 'Usar iframes quando fizer sentido sem comprometer acessibilidade.', ['iframe', 'title obrigatório', 'Embed de mapas e vídeos'], 'Adicione um conteúdo incorporado com título descritivo.', 'Crie uma página de contato com mapa incorporado de forma acessível.'),
      createHtmlModule(39, 'SEO Básico com HTML', 'Como a estrutura HTML ajuda buscadores a entenderem a página.', 'intermediário', 'Preparar páginas com títulos, descrição e estrutura rastreável.', ['title e description', 'Headings claros', 'Links e conteúdo indexável'], 'Audite uma página e melhore seus sinais básicos de SEO.', 'Crie uma página com title, description e hierarquia coerente.'),
      createHtmlModule(40, 'Meta Tags Importantes', 'Configuração de metadados essenciais para responsividade, idioma e compartilhamento.', 'intermediário', 'Usar meta tags que influenciam renderização, busca e compartilhamento.', ['charset e viewport', 'description', 'Open Graph básico'], 'Revise o head de uma página e complete metadados ausentes.', 'Monte um head completo para uma landing page simples.'),
      createHtmlModule(41, 'Acessibilidade Básica no HTML', 'Princípios iniciais para páginas navegáveis e compreensíveis por mais pessoas.', 'intermediário', 'Aplicar HTML acessível antes de depender de correções visuais ou JavaScript.', ['Semântica e landmarks', 'Textos alternativos', 'Rótulos e foco'], 'Faça uma auditoria manual de uma página simples.', 'Corrija uma página com problemas de imagem, formulário e navegação.'),
      createHtmlModule(42, 'Boas Práticas de Código HTML', 'Organização, legibilidade e consistência para manter páginas fáceis de evoluir.', 'intermediário', 'Escrever HTML limpo, previsível e pronto para crescer.', ['Indentação consistente', 'Nomes claros de classes e ids', 'Evitar marcação desnecessária'], 'Refatore um arquivo HTML bagunçado.', 'Entregue uma versão organizada de uma página com comentários úteis.'),
      createHtmlModule(43, 'Erros Comuns em HTML', 'Reconhecimento de problemas frequentes que quebram layout, semântica ou acessibilidade.', 'intermediário', 'Diagnosticar e corrigir erros comuns antes de avançar para projetos.', ['Tags mal fechadas', 'Headings fora de ordem', 'Links, alt e labels ausentes'], 'Encontre erros em um HTML propositalmente problemático.', 'Corrija dez problemas em uma página de exemplo e documente as mudanças.'),
      createHtmlModule(44, 'Projeto: Página de Perfil', 'Projeto guiado para reunir estrutura, textos, imagens, listas e links.', 'projeto', 'Construir uma página pessoal simples com HTML organizado.', ['Planejamento de conteúdo', 'Imagem com alt', 'Links e listas'], 'Crie uma página de perfil com bio, habilidades e contatos.', 'Entregue uma página de perfil completa com navegação para seções internas.'),
      createHtmlModule(45, 'Projeto: Landing Page Simples', 'Construção de uma página de apresentação com seções claras e chamada principal.', 'projeto', 'Aplicar hierarquia, semântica e conteúdo objetivo em uma landing page.', ['Hero estrutural', 'Seções de benefícios', 'Links de chamada para ação'], 'Monte a estrutura HTML de uma landing page.', 'Crie uma landing page de produto fictício usando apenas HTML.'),
      createHtmlModule(46, 'Projeto: Formulário Completo', 'Projeto focado em formulário com campos variados, agrupamento e validação nativa.', 'projeto', 'Criar um formulário robusto, legível e acessível.', ['Campos de texto e seleção', 'Labels, fieldset e legend', 'Validação nativa'], 'Planeje os campos de um cadastro completo.', 'Construa um formulário de inscrição com validações e grupos semânticos.'),
      createHtmlModule(47, 'Projeto: Página Institucional', 'Página com múltiplas seções para apresentar uma marca, serviço ou comunidade.', 'projeto', 'Combinar semântica, navegação, mídia e conteúdo institucional.', ['Header e navegação', 'Seções institucionais', 'Contato e rodapé'], 'Organize o mapa de conteúdo de uma instituição fictícia.', 'Crie uma página institucional com sobre, serviços, mídia e contato.'),
      createHtmlModule(48, 'Projeto Final de HTML', 'Entrega completa para consolidar todos os fundamentos da trilha.', 'projeto', 'Construir uma página final bem estruturada, acessível e pronta para receber CSS.', ['Arquitetura do documento', 'Semântica completa', 'SEO e acessibilidade básicos'], 'Defina tema, público, seções e conteúdo do projeto final.', 'Entregue um site HTML completo com pelo menos cinco seções e formulário.'),
      createHtmlModule(49, 'Revisão Geral da Trilha', 'Revisão orientada dos conceitos essenciais antes da conclusão.', 'projeto', 'Conferir domínio dos principais blocos de HTML estudados.', ['Fundamentos e estrutura', 'Links, mídia, listas e tabelas', 'Formulários, semântica e acessibilidade'], 'Revise seus projetos anteriores com uma checklist.', 'Ajuste pelo menos três módulos/projetos com melhorias identificadas na revisão.'),
      createHtmlModule(50, 'Checklist de Conclusão da Trilha', 'Fechamento da trilha com critérios de qualidade para portfólio.', 'projeto', 'Validar se o HTML produzido está completo, organizado e apresentável.', ['Checklist técnico', 'Checklist de acessibilidade', 'Preparação para próximos estudos'], 'Faça uma revisão final do projeto com a checklist da trilha.', 'Publique ou organize o projeto final e registre aprendizados em um README.')
    ],
    challenge: { title: 'Desafio final: Site institucional semântico', brief: 'Construa um site institucional multi-seções com HTML semântico, formulário funcional, mídia incorporada, SEO básico e foco em acessibilidade.', portfolio: 'Entregáveis: deploy, auditoria A11y, checklist de conclusão e documentação da estrutura semântica.' }
  },
  {
    name: 'CSS', level: 'basico', levelLabel: 'Básico',
    tags: ['CSS', 'Flexbox', 'Grid', 'Responsividade', 'Animações'],
    accent: '#3B82F6', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    description: 'Domine seletores, box model, cores, fontes, unidades, Flexbox, Grid, responsividade, animações e CSS moderno.',
    modules: [
      { title: 'Seletores e cascata', learn: ['especificidade', 'herança', 'boas práticas de naming'], practice: 'Organizar estilos de uma página real.', exercise: 'Refatorar CSS duplicado.', starter: mkStarter('Seletores CSS', '#3b82f6', 'Seletores') },
      { title: 'Box model e espaçamento', learn: ['margin/padding/border', 'box-sizing', 'unidades'], practice: 'Ajustar layout com consistência de spacing.', exercise: 'Corrigir bug visual de overflow.', starter: mkStarter('Box model', '#2563eb', 'Box model') },
      { title: 'Tipografia e cores', learn: ['escala tipográfica', 'contraste', 'sistema de cores'], practice: 'Definir tokens visuais.', exercise: 'Criar tema com contraste acessível.', starter: mkStarter('Tipografia e cores', '#60a5fa', 'Tipografia') },
      { title: 'Flexbox', learn: ['eixos', 'alinhamentos', 'componentes flexíveis'], practice: 'Criar navbar e cards com flex.', exercise: 'Converter layout float para flexbox.', starter: mkStarter('Flexbox', '#1d4ed8', 'Flexbox') },
      { title: 'CSS Grid', learn: ['grid areas', 'fr units', 'layout avançado'], practice: 'Montar dashboard com grid.', exercise: 'Criar grade responsiva de projetos.', starter: mkStarter('CSS Grid', '#3b82f6', 'Grid') },
      { title: 'Responsividade', learn: ['media queries', 'clamp', 'mobile first'], practice: 'Ajustar tela para 3 breakpoints.', exercise: 'Eliminar quebra em mobile.', starter: mkStarter('Responsividade', '#0ea5e9', 'Responsividade') },
      { title: 'Transições e animações', learn: ['transition', 'transform', 'keyframes'], practice: 'Criar microinterações úteis.', exercise: 'Animar hover e entrada de cards.', starter: mkStarter('Animações CSS', '#38bdf8', 'Animações') }
    ],
    challenge: { title: 'Desafio final: Landing premium responsiva', brief: 'Construa uma landing page premium com sistema visual, layout responsivo completo e microinterações.', portfolio: 'Entregáveis: deploy, guia de tokens CSS e biblioteca de componentes visuais.' }
  },
  {
    name: 'Bootstrap', level: 'basico', levelLabel: 'Básico ao intermediário',
    tags: ['Bootstrap', 'Grid', 'Componentes', 'Responsividade', 'Sass'],
    accent: '#7952B3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    description: 'Aprenda Bootstrap para criar interfaces responsivas rapidamente usando grid, utilitários, componentes, formulários, temas e customização.',
    modules: [
      { title: 'Introdução ao Bootstrap', learn: ['Quando usar Bootstrap', 'Instalação via CDN/npm', 'Estrutura base do CSS e JS'], practice: 'Monte uma página simples carregando Bootstrap corretamente.', exercise: 'Crie um template inicial com navbar, main e footer usando Bootstrap.', starter: mkStarter('Bootstrap inicial', '#7952b3', 'Bootstrap pronto') },
      { title: 'Containers, grid e breakpoints', learn: ['container e container-fluid', 'row e col', 'breakpoints responsivos'], practice: 'Construa uma seção que muda de 1 para 3 colunas.', exercise: 'Refatore um layout manual para o grid do Bootstrap.', starter: mkStarter('Grid Bootstrap', '#6f42c1', 'Grid Bootstrap') },
      { title: 'Utilitários de espaçamento e tipografia', learn: ['classes de margin/padding', 'display e flex utilities', 'tipografia e cores'], practice: 'Ajuste um card sem escrever CSS customizado.', exercise: 'Monte uma página de perfil usando principalmente utilitários.', starter: mkStarter('Utilitários Bootstrap', '#7952b3', 'Utilities') },
      { title: 'Componentes essenciais', learn: ['navbar', 'cards', 'buttons', 'alerts', 'badges'], practice: 'Combine componentes em uma tela de produto.', exercise: 'Crie uma página de dashboard com cards, badges e alertas.', starter: mkStarter('Componentes Bootstrap', '#6f42c1', 'Components') },
      { title: 'Formulários e validação visual', learn: ['form-control', 'input groups', 'feedback de validação'], practice: 'Monte um formulário com estados de erro e sucesso.', exercise: 'Crie um formulário de cadastro responsivo com validação visual.', starter: mkStarter('Forms Bootstrap', '#7952b3', 'Forms') },
      { title: 'Componentes com JavaScript', learn: ['modal', 'dropdown', 'collapse', 'tabs'], practice: 'Adicione interações sem criar tudo do zero.', exercise: 'Implemente uma FAQ com collapse e um modal de confirmação.', starter: mkStarter('Bootstrap JS', '#6f42c1', 'Bootstrap JS') },
      { title: 'Customização e tema', learn: ['variáveis CSS', 'Sass', 'sobrescrita segura', 'design system simples'], practice: 'Crie um tema visual sem quebrar componentes.', exercise: 'Personalize cores, botões e cards para uma marca fictícia.', starter: mkStarter('Tema Bootstrap', '#7952b3', 'Theme') },
      { title: 'Projeto final com Bootstrap', learn: ['composição de layout', 'responsividade completa', 'documentação do projeto'], practice: 'Planeje uma interface completa com componentes Bootstrap.', exercise: 'Entregue uma landing ou painel administrativo responsivo e publicável.', starter: mkStarter('Projeto Bootstrap', '#6f42c1', 'Projeto Bootstrap') }
    ],
    challenge: { title: 'Desafio final: Painel responsivo com Bootstrap', brief: 'Construa um painel administrativo usando grid, formulários, cards, modal, dropdown e tema customizado com Bootstrap.', portfolio: 'Entregáveis: deploy, README explicando componentes usados, screenshots mobile/desktop e lista de customizações.' }
  },
  {
    name: 'JavaScript e lógica', level: 'intermediario', levelLabel: 'Básico ao intermediário',
    tags: ['JavaScript', 'Lógica', 'DOM', 'Eventos', 'API'],
    accent: '#FACC15', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    description: 'Treine variáveis, operadores, condicionais, loops, arrays, objetos, funções, strings, datas, DOM, eventos, Fetch API e LocalStorage.',
    modules: [
      { title: 'Sintaxe e controle de fluxo', learn: ['variáveis', 'operadores', 'if/switch'], practice: 'Resolver problemas condicionais.', exercise: 'Criar verificador de regras de negócio.', starter: mkStarter('Fluxo JS', '#eab308', 'Fluxo') },
      { title: 'Loops e funções', learn: ['for/while', 'funções puras', 'escopo'], practice: 'Criar utilitários de repetição.', exercise: 'Gerar relatório com loops e funções.', starter: mkStarter('Loops e funções', '#facc15', 'Loops') },
      { title: 'Arrays e métodos', learn: ['map/filter/reduce', 'find/some/every', 'imutabilidade'], practice: 'Tratar lista de produtos.', exercise: 'Aplicar filtros combinados.', starter: mkStarter('Arrays', '#f59e0b', 'Arrays') },
      { title: 'Objetos e estruturas', learn: ['objetos aninhados', 'desestruturação', 'spread/rest'], practice: 'Modelar dados de usuário/pedido.', exercise: 'Refatorar estrutura de dados confusa.', starter: mkStarter('Objetos', '#eab308', 'Objetos') },
      { title: 'DOM e eventos', learn: ['seleção de elementos', 'delegação', 'renderização dinâmica'], practice: 'Construir componente interativo.', exercise: 'Criar todo list com edição.', starter: mkStarter('DOM e eventos', '#facc15', 'DOM') },
      { title: 'Fetch API', learn: ['async/await', 'tratamento de erro', 'estado de carregamento'], practice: 'Consumir API e renderizar lista.', exercise: 'Adicionar fallback de erro.', starter: mkStarter('Fetch API', '#fde047', 'API') },
      { title: 'LocalStorage', learn: ['persistência local', 'serialização JSON', 'sincronização UI'], practice: 'Salvar preferências do usuário.', exercise: 'Persistir tarefas e restaurar ao abrir.', starter: mkStarter('LocalStorage', '#facc15', 'LocalStorage') }
    ],
    challenge: { title: 'Desafio final: Organizador de rotina inteligente', brief: 'Crie um app de rotina com tarefas, filtros, persistência local e integração com API para dados auxiliares.', portfolio: 'Entregáveis: app publicado, README técnico e vídeo de demonstração do fluxo completo.' }
  },
  {
    name: 'TypeScript', level: 'intermediario', levelLabel: 'Intermediário',
    tags: ['TypeScript', 'Tipos', 'Interfaces', 'Generics'],
    accent: '#3178C6', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    description: 'Aprenda tipagem básica, interfaces, type aliases, union types, generics, narrowing e tipagem de funções, eventos e APIs.',
    modules: [
      { title: 'Tipos básicos e inferência', learn: ['tipos primitivos', 'inference', 'strict mode'], practice: 'Tipar utilitários simples.', exercise: 'Remover any de um arquivo utilitário.', starter: mkStarter('Tipos básicos TS', '#3178c6', 'TS básicos') },
      { title: 'Interfaces e aliases', learn: ['interface', 'type alias', 'composição'], practice: 'Modelar entidades de produto e usuário.', exercise: 'Criar modelos coesos para domínio.', starter: mkStarter('Interfaces TS', '#2563eb', 'Interfaces') },
      { title: 'Union e narrowing', learn: ['union types', 'guards', 'discriminated unions'], practice: 'Tratar respostas de API heterogêneas.', exercise: 'Implementar guards seguros.', starter: mkStarter('Narrowing TS', '#1d4ed8', 'Narrowing') },
      { title: 'Generics', learn: ['funções genéricas', 'constraints', 'reuso'], practice: 'Criar helpers genéricos de lista.', exercise: 'Implementar paginate<T>.', starter: mkStarter('Generics TS', '#3b82f6', 'Generics') },
      { title: 'Tipagem de funções e eventos', learn: ['assinaturas', 'callbacks', 'event typing'], practice: 'Tipar handlers de formulário.', exercise: 'Refatorar eventos com tipos corretos.', starter: mkStarter('Eventos TS', '#60a5fa', 'Eventos') },
      { title: 'Tipagem de API', learn: ['DTOs', 'erros tipados', 'mapeamento de resposta'], practice: 'Tipar camada de service.', exercise: 'Criar client tipado com fallback.', starter: mkStarter('API TS', '#0ea5e9', 'API TS') },
      { title: 'Organização de tipos', learn: ['pastas de types', 'barrels', 'reuso entre módulos'], practice: 'Estruturar types de projeto real.', exercise: 'Separar tipos por domínio.', starter: mkStarter('Arquitetura de tipos', '#3178c6', 'Tipos organizados') }
    ],
    challenge: { title: 'Desafio final: Painel tipado de gestão', brief: 'Construa uma interface com domínio tipado de ponta a ponta (estado, formulários, API e validações).', portfolio: 'Entregáveis: repositório com arquitetura de tipos documentada e aplicação em produção.' }
  },
  {
    name: 'Frameworks front-end', level: 'avancado', levelLabel: 'Intermediário ao avançado',
    tags: ['React', 'Vue', 'Angular', 'Svelte', 'Next.js'],
    accent: '#7B5CFF', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'Conheça React, Vue, Angular, Svelte, SolidJS, Next.js e Astro para criar interfaces modernas e aplicações mais completas.',
    modules: [
      { title: 'Arquitetura por componentes', learn: ['composição', 'props', 'estado local'], practice: 'Quebrar tela complexa em componentes.', exercise: 'Refatorar tela monolítica.', starter: mkStarter('Componentes', '#7b5cff', 'Componentes') },
      { title: 'Roteamento em SPA', learn: ['rotas', 'parâmetros', 'layouts'], practice: 'Construir navegação multi-seções.', exercise: 'Implementar rota dinâmica de detalhe.', starter: mkStarter('Roteamento', '#8b5cf6', 'Rotas') },
      { title: 'Estado compartilhado', learn: ['lifting state', 'stores', 'contexto'], practice: 'Sincronizar estado entre componentes.', exercise: 'Criar carrinho com estado global.', starter: mkStarter('Estado global', '#a78bfa', 'Estado') },
      { title: 'Formulários e validação', learn: ['controlled/uncontrolled', 'regras de validação', 'feedback de erro'], practice: 'Construir formulário robusto.', exercise: 'Validar formulário multi-etapas.', starter: mkStarter('Formulários', '#7c3aed', 'Form') },
      { title: 'Consumo de APIs', learn: ['fetch em componentes', 'cache', 'retries'], practice: 'Listagem com filtros e paginação.', exercise: 'Adicionar loading/skeleton e erro.', starter: mkStarter('API em framework', '#6d28d9', 'API framework') },
      { title: 'Renderização e performance', learn: ['SSR/SSG/CSR', 'lazy loading', 'memoização'], practice: 'Comparar estratégias de renderização.', exercise: 'Otimizar uma tela lenta.', starter: mkStarter('Performance', '#7b5cff', 'Perf framework') },
      { title: 'Estrutura de app escalável', learn: ['pastas por domínio', 'camadas', 'boas práticas de manutenção'], practice: 'Organizar um app médio.', exercise: 'Documentar arquitetura da aplicação.', starter: mkStarter('Arquitetura app', '#8b5cf6', 'Arquitetura') }
    ],
    challenge: { title: 'Desafio final: Plataforma de conteúdo técnico', brief: 'Crie uma aplicação front-end completa com roteamento, busca, filtros, páginas de detalhe e integração com APIs.', portfolio: 'Entregáveis: app publicado, documentação de arquitetura e decisões técnicas.' }
  },
  {
    name: 'Ferramentas', level: 'intermediario', levelLabel: 'Básico ao intermediário',
    tags: ['Git', 'GitHub', 'npm', 'Vite', 'ESLint', 'Prettier'],
    accent: '#6366F1', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    description: 'Estude Git, GitHub, npm, Node.js, Vite, Webpack, ESLint, Prettier e ferramentas essenciais do ecossistema front-end.',
    modules: [
      { title: 'Git no fluxo diário', learn: ['branching', 'commit limpo', 'merge/rebase'], practice: 'Simular ciclo de feature.', exercise: 'Montar histórico de commits semânticos.', starter: mkStarter('Git fluxo', '#6366f1', 'Git') },
      { title: 'GitHub e colaboração', learn: ['PR', 'review', 'issues'], practice: 'Criar fluxo de revisão em dupla.', exercise: 'Abrir PR com checklist técnico.', starter: mkStarter('GitHub colaboração', '#4f46e5', 'GitHub') },
      { title: 'npm scripts', learn: ['scripts utilitários', 'build/test/lint', 'versionamento'], practice: 'Padronizar scripts do projeto.', exercise: 'Criar script de quality gate.', starter: mkStarter('npm scripts', '#4338ca', 'npm') },
      { title: 'Vite e ambiente', learn: ['config básica', 'env vars', 'aliases'], practice: 'Configurar ambientes local/stage/prod.', exercise: 'Separar configurações por ambiente.', starter: mkStarter('Vite setup', '#6366f1', 'Vite') },
      { title: 'ESLint e qualidade', learn: ['regras', 'plugins', 'autocorreção'], practice: 'Aplicar padrão em base legada.', exercise: 'Resolver violações críticas sem quebrar.', starter: mkStarter('ESLint', '#818cf8', 'ESLint') },
      { title: 'Prettier e consistência', learn: ['formatação unificada', 'integração IDE', 'hooks'], practice: 'Padronizar estilo de código do time.', exercise: 'Integrar Prettier + lint-staged.', starter: mkStarter('Prettier', '#6366f1', 'Prettier') },
      { title: 'Pipeline local', learn: ['pre-commit', 'testes automáticos', 'build check'], practice: 'Automatizar verificações antes de push.', exercise: 'Configurar pipeline local reproduzível.', starter: mkStarter('Pipeline local', '#6366f1', 'Pipeline') }
    ],
    challenge: { title: 'Desafio final: Starter kit de equipe front-end', brief: 'Crie um template completo com scripts, lint, format, convenções e documentação de contribuição.', portfolio: 'Entregáveis: template público reutilizável e guia de onboarding técnico.' }
  },
  {
    name: 'Qualidade e boas práticas', level: 'intermediario', levelLabel: 'Intermediário',
    tags: ['Acessibilidade', 'Performance', 'PWA', 'Testes'],
    accent: '#10B981', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    description: 'Aprenda acessibilidade, performance, PWA, testes, organização de código, responsividade e boas práticas para projetos reais.',
    modules: [
      { title: 'Acessibilidade prática', learn: ['teclado e foco', 'semântica avançada', 'ARIA'], practice: 'Auditar interface existente.', exercise: 'Aplicar correções A11y em fluxo crítico.', starter: mkStarter('Acessibilidade', '#10b981', 'A11y') },
      { title: 'Performance web', learn: ['LCP/CLS/INP', 'otimização de imagens', 'code splitting'], practice: 'Melhorar métricas de uma página.', exercise: 'Documentar antes/depois das métricas.', starter: mkStarter('Performance', '#059669', 'Performance') },
      { title: 'Responsividade robusta', learn: ['layout resiliente', 'conteúdo fluido', 'testes cross-device'], practice: 'Eliminar quebras em telas pequenas.', exercise: 'Ajustar interface para 4 larguras.', starter: mkStarter('Responsividade', '#10b981', 'Responsive') },
      { title: 'Testes unitários', learn: ['assertions', 'mocks', 'cobertura'], practice: 'Cobrir funções de negócio.', exercise: 'Criar testes para regras críticas.', starter: mkStarter('Testes unitários', '#34d399', 'Unit tests') },
      { title: 'Testes de interface', learn: ['Testing Library', 'fluxo do usuário', 'acessibilidade em testes'], practice: 'Testar formulário e navegação.', exercise: 'Cobrir cenários feliz/erro.', starter: mkStarter('Testes UI', '#10b981', 'UI tests') },
      { title: 'PWA e offline', learn: ['manifest', 'service worker', 'cache'], practice: 'Adicionar modo offline básico.', exercise: 'Criar fallback para perda de conexão.', starter: mkStarter('PWA offline', '#059669', 'PWA') },
      { title: 'Manutenção e governança', learn: ['boas práticas de código', 'documentação viva', 'checklists de revisão'], practice: 'Criar padrão de revisão técnica.', exercise: 'Montar checklist de release front-end.', starter: mkStarter('Governança front-end', '#10b981', 'Governança') }
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

  { title: '09. HTML: estrutura base', trail: 'html', mod: 0 },
  { title: '10. HTML: metadados e SEO base', trail: 'html', mod: 0 },
  { title: '11. HTML semântico: landmarks', trail: 'html', mod: 1 },
  { title: '12. HTML semântico: heading tree', trail: 'html', mod: 1 },
  { title: '13. Navegação e links internos', trail: 'html', mod: 2 },
  { title: '14. Listas e conteúdo estruturado', trail: 'html', mod: 2 },
  { title: '15. Imagens e mídia acessível', trail: 'html', mod: 3 },
  { title: '16. Tabelas com semântica correta', trail: 'html', mod: 4 },
  { title: '17. Formulários: campos e validação', trail: 'html', mod: 5 },
  { title: '18. Acessibilidade base em HTML', trail: 'html', mod: 6 },

  { title: '19. CSS: cascata e especificidade', trail: 'css', mod: 0 },
  { title: '20. CSS: box model na prática', trail: 'css', mod: 1 },
  { title: '21. Espaçamento e escala visual', trail: 'css', mod: 1 },
  { title: '22. Tipografia e hierarquia', trail: 'css', mod: 2 },
  { title: '23. Sistema de cores e contraste', trail: 'css', mod: 2 },
  { title: '24. Flexbox: alinhamento e distribuição', trail: 'css', mod: 3 },
  { title: '25. Flexbox: layout de navegação', trail: 'css', mod: 3 },
  { title: '26. Grid: colunas e áreas', trail: 'css', mod: 4 },
  { title: '27. Grid: composição de dashboards', trail: 'css', mod: 4 },
  { title: '28. Responsividade: mobile first', trail: 'css', mod: 5 },
  { title: '29. Responsividade: breakpoints reais', trail: 'css', mod: 5 },
  { title: '30. Motion: transições úteis', trail: 'css', mod: 6 },
  { title: '31. Motion: animação de estado', trail: 'css', mod: 6 },

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
  { title: '92. Projeto final: implementação UI', trail: 'css', mod: 6 },
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
  html: `<main style="font-family: Inter, sans-serif; padding: 24px;"><h1 style="margin:0 0 8px;">Front-Edge Academy</h1><p>Pratique front-end com trilhas e exercícios reais.</p></main>`,
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
const moduleMenuList = document.getElementById('moduleMenuList')
const moduleMenuToggle = document.getElementById('moduleMenuToggle')
const moduleContent = document.getElementById('moduleContent')
const finalChallengeBox = document.getElementById('finalChallengeBox')
const exerciseList = document.getElementById('exerciseList')
const challengeList = document.getElementById('challengeList')
const projectList = document.getElementById('projectList')
const practiceDetail = document.getElementById('practiceDetail')

function getSavedTheme() {
  return localStorage.getItem('front-edge-theme') || 'light'
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
  localStorage.setItem('front-edge-theme', nextTheme)
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

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
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
  const checklistStorageKey = `front-edge-checklist:${type}:${item.id}`
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
  if (!htmlInput || !cssInput || !jsInput || !previewFrame) return

  const source = `<!doctype html><html><head><style>${getPreviewThemeCss()}${cssInput.value}</style></head><body>${htmlInput.value}<script>${jsInput.value}<' + '/script></body></html>`
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

function renderModuleCard(track, module, index) {
  const learnItems = module.learn.map((item) => `<li>${item}</li>`).join('')
  const moduleLevel = module.level || track.levelLabel
  const moduleStatus = module.status || (index === 0 ? 'disponível' : 'bloqueado')
  const moduleDescription = module.description || 'Módulo prático da trilha com foco em aprendizado aplicado.'
  const moduleObjective = module.objective || 'Praticar o conteúdo do módulo em um contexto de projeto front-end.'
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
          <span>${moduleLevel}</span>
          <span>${moduleStatus}</span>
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
      <p><strong>Experiência prática:</strong> ${module.practice}</p>
      <p><strong>Exercício de fixação:</strong> ${module.exercise}</p>
      <div class="module-ide">
        <h4>Mini IDE do módulo</h4>
        <div class="module-ide-grid">
          <label>index.html<textarea data-type="html">${module.starter.html.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</textarea></label>
          <label>style.css<textarea data-type="css">${module.starter.css}</textarea></label>
          <label>script.js<textarea data-type="js">${module.starter.js}</textarea></label>
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

function renderModulesPage() {
  if (!moduleContent || !moduleTrailTitle || !moduleTrailDescription || !moduleTrailMeta || !moduleMenuList || !finalChallengeBox) return
  const track = getTrackFromQuery()

  if (!track) {
    moduleTrailTitle.textContent = 'Trilha não encontrada'
    moduleTrailDescription.textContent = 'Volte para trilhas e escolha uma trilha válida.'
    moduleTrailMeta.textContent = ''
    moduleMenuList.innerHTML = ''
    moduleContent.innerHTML = '<article class="content-card"><p>Não foi possível carregar os módulos.</p></article>'
    finalChallengeBox.innerHTML = ''
    return
  }

  moduleTrailTitle.textContent = `${track.name} - módulos de estudo`
  moduleTrailDescription.textContent = track.description
  moduleTrailMeta.textContent = `Nível: ${track.levelLabel} | ${track.modules.length} módulos | Tags: ${track.tags.join(', ')}`

  moduleMenuList.innerHTML = track.modules.map((module, index) => `
    <a href="#mod-${index}" class="module-link" data-module-index="${index}">Módulo ${index + 1}: ${module.title}</a>
  `).join('')

  const showModule = (index, shouldScroll = false) => {
    const selectedIndex = Math.min(Math.max(index, 0), track.modules.length - 1)
    moduleContent.innerHTML = renderModuleCard(track, track.modules[selectedIndex], selectedIndex)
    moduleMenuList.querySelectorAll('.module-link').forEach((link) => {
      link.classList.toggle('active', Number(link.dataset.moduleIndex) === selectedIndex)
    })
    moduleContent.querySelectorAll('.module-card').forEach((card) => runModuleIde(card))

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
  showModule(0)
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
renderTracks()
renderRoadmap()
renderModulesPage()
renderPracticeLists()
renderPracticeDetail()
highlightCodeBlocks()
runPreview()
