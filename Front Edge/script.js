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
    html: `<main><h1>${title}</h1><p>Prática da Front-Edge Academy.</p></main>`,
    css: `body{font-family:Inter,sans-serif;padding:20px} h1{color:${color}}`,
    js: `console.log('${log}')`
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
const editorState = {
  html: `<main style="font-family: Inter, sans-serif; padding: 24px;"><h1 style="margin:0 0 8px;">Front-Edge Academy</h1><p>Pratique front-end com trilhas e exercícios reais.</p></main>`,
  css: `body { margin: 0; background: #f8fafc; color: #0f172a; }`,
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

const moduleTrailTitle = document.getElementById('moduleTrailTitle')
const moduleTrailDescription = document.getElementById('moduleTrailDescription')
const moduleTrailMeta = document.getElementById('moduleTrailMeta')
const moduleMenuList = document.getElementById('moduleMenuList')
const moduleMenuToggle = document.getElementById('moduleMenuToggle')
const moduleContent = document.getElementById('moduleContent')
const finalChallengeBox = document.getElementById('finalChallengeBox')

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
          <div><div class="mb-2 text-xs text-text-secondary">Foco: prática aplicada</div><div class="progress-shell"><div class="progress-fill" style="width:100%"></div></div></div>
        </a>
      </article>
    `
  }).join('')
}

function renderRoadmap() {
  if (!roadmapSteps) return
  roadmapSteps.innerHTML = roadmap.map((step, index) => `
    <a class="road-step ${index === 0 ? 'active' : ''}" href="./modulos.html?trilha=${step.trail}#mod-${step.mod}">
      <span class="road-num">${index + 1}</span>
      <h3>${step.title}</h3>
      <p class="text-textMuted text-sm">Abrir módulo recomendado</p>
    </a>
  `).join('')
}

function runModuleIde(moduleCard) {
  const htmlInput = moduleCard.querySelector('textarea[data-type="html"]')
  const cssInput = moduleCard.querySelector('textarea[data-type="css"]')
  const jsInput = moduleCard.querySelector('textarea[data-type="js"]')
  const previewFrame = moduleCard.querySelector('.module-preview')
  if (!htmlInput || !cssInput || !jsInput || !previewFrame) return

  const source = `<!doctype html><html><head><style>${cssInput.value}</style></head><body>${htmlInput.value}<script>${jsInput.value}<' + '/script></body></html>`
  previewFrame.srcdoc = source
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
    <a href="#mod-${index}" class="module-link" data-target="mod-${index}">Módulo ${index + 1}: ${module.title}</a>
  `).join('')

  moduleContent.innerHTML = track.modules.map((module, index) => {
    const learnItems = module.learn.map((item) => `<li>${item}</li>`).join('')
    const moduleLevel = module.level || track.levelLabel
    const moduleStatus = module.status || (index === 0 ? 'disponível' : 'bloqueado')
    const moduleDescription = module.description || 'Módulo prático da trilha com foco em aprendizado aplicado.'
    const moduleObjective = module.objective || 'Praticar o conteúdo do módulo em um contexto de projeto front-end.'
    return `
      <article id="mod-${index}" class="content-card module-card" style="--track-accent:${track.accent}">
        <div class="module-card-head">
          <div>
            <p class="module-kicker">Módulo ${index + 1}</p>
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
      </article>
    `
  }).join('')

  finalChallengeBox.innerHTML = `
    <article class="content-card" style="--track-accent:${track.accent}">
      <h3>${track.challenge.title}</h3>
      <p><strong>Objetivo:</strong> ${track.challenge.brief}</p>
      <p><strong>Para portfólio:</strong> ${track.challenge.portfolio}</p>
    </article>
  `

  moduleContent.querySelectorAll('.module-card').forEach((card) => runModuleIde(card))
  bindModuleMenuInteractions()
}

function bindModuleMenuInteractions() {
  if (!moduleMenuList || !moduleContent) return
  const links = [...moduleMenuList.querySelectorAll('.module-link')]
  const sections = [...moduleContent.querySelectorAll('.module-card')]

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const targetId = link.dataset.target
      const target = targetId ? document.getElementById(targetId) : null
      if (!target) return
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      links.forEach((item) => item.classList.remove('active'))
      link.classList.add('active')
    })
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const id = entry.target.id
        links.forEach((link) => link.classList.toggle('active', link.dataset.target === id))
      })
    },
    { rootMargin: '-30% 0px -60% 0px', threshold: 0.05 }
  )

  sections.forEach((section) => observer.observe(section))
  if (links[0]) links[0].classList.add('active')
}

function switchTab(tab) {
  if (!editor || !editorTabs) return
  editorState[activeTab] = editor.value
  activeTab = tab
  editor.value = editorState[activeTab]
  editorTabs.querySelectorAll('.tab-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.tab === tab))
}

function runPreview() {
  if (!editor || !preview) return
  editorState[activeTab] = editor.value
  const source = `<!doctype html><html><head><style>${editorState.css}</style></head><body>${editorState.html}<script>${editorState.js}<' + '/script></body></html>`
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
    if (!(target instanceof HTMLElement) || !target.classList.contains('run-module-ide')) return
    const moduleCard = target.closest('.module-card')
    if (moduleCard) runModuleIde(moduleCard)
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
  mobileMenuBtn.addEventListener('click', () => mobileNav.classList.toggle('hidden'))
  mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => mobileNav.classList.add('hidden')))
}

if (editor) editor.value = editorState[activeTab]
initPageTransitions()
markActiveNavLink()
renderTracks()
renderRoadmap()
renderModulesPage()
runPreview()
