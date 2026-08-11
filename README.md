# FrontLab Academy

Plataforma educacional gamificada e inclusiva para formacao pratica em desenvolvimento front-end.

Deploy: https://frontlabacademy.vercel.app/index.html

## Visao Geral

A FrontLab Academy e uma plataforma voltada para estudantes iniciantes que desejam aprender front-end de forma progressiva, pratica e acessivel. O projeto organiza o estudo de HTML, CSS, JavaScript e ferramentas web por meio de trilhas, modulos, exercicios, desafios, projetos de portfolio, documentacao de apoio, Mini IDE, acompanhamento de progresso e comunidade no Discord.

A proposta nasceu da dificuldade que muitos alunos encontram ao tentar transformar conteudos gratuitos da internet em pratica real, autonomia tecnica e projetos apresentaveis. Por isso, a plataforma nao se limita a reunir conteudo: ela conduz o estudante por uma jornada de pratica, erro, refatoracao, documentacao e construcao de evidencias da propria evolucao.

## Problema

Estudantes iniciantes costumam assistir aulas, copiar exemplos e resolver exercicios isolados, mas ainda sentem inseguranca para construir paginas completas, organizar arquivos, explicar decisoes tecnicas e montar portfolio.

Esse desafio e ainda maior para pessoas com menos acesso a oportunidades, como estudantes de escola publica, jovens de baixa renda, pessoas do interior, iniciantes sem mentoria e pessoas com deficiencia visual ou baixa visao que dependem de plataformas mais acessiveis.

## Objetivo

Desenvolver e validar um MVP da FrontLab Academy como plataforma educacional gamificada e inclusiva para formacao pratica em front-end, com foco em estudantes iniciantes e publicos com menor acesso a formacao tecnologica.

Objetivos especificos:

- Organizar trilhas iniciais de HTML, CSS e JavaScript basico.
- Criar exercicios e desafios praticos com criterios de aceite.
- Estruturar projetos de portfolio com orientacao de entrega e documentacao.
- Evoluir a Mini IDE como ambiente de treino e validacao de solucoes.
- Aplicar boas praticas de acessibilidade digital no MVP.
- Testar a plataforma com usuarios reais e coletar feedback.
- Validar interesse por mentorias, aulas particulares e revisao de projetos.
- Preparar a plataforma para evoluir como edtech ou startup de impacto social.

## Solucao Proposta

A FrontLab Academy e estruturada em tres pilares:

- Aprendizado pratico e progressivo: trilhas, modulos, exercicios, desafios e projetos organizados por nivel.
- Inclusao e acessibilidade: base gratuita ou acessivel, foco em publicos com menor acesso a tecnologia e aplicacao progressiva de boas praticas de acessibilidade.
- Sustentabilidade e inovacao: gamificacao, Arena de Codigo, apoio avaliativo com IA em versoes futuras, mentorias e revisao de projetos.

No curto prazo, o foco e validar um MVP simples e funcional. No medio e longo prazo, a plataforma pode evoluir para um produto mais completo, com marketplace de mentores, planos premium, trilhas avancadas, ranking, recursos de avaliacao tecnica e experiencias gamificadas mais robustas.

## Publico-Alvo

A plataforma foi pensada principalmente para:

- Estudantes de escola publica.
- Jovens de baixa renda.
- Estudantes do interior.
- Iniciantes em programacao.
- Alunos de cursos tecnicos ou superiores que precisam reforcar pratica em desenvolvimento web.
- Pessoas que estudam sozinhas e precisam de direcao.
- Pessoas com deficiencia visual ou baixa visao que precisam de interfaces mais acessiveis.

## Funcionalidades Atuais

- Home institucional com proposta de valor, chamadas para estudo e comunidade.
- Pagina de trilhas com filtros por nivel e busca.
- Pagina de modulos por trilha, acessada por query string.
- Trilha de HTML com 50 modulos gerados a partir de apostila interna.
- Trilhas de CSS, Bootstrap, JavaScript, TypeScript, Frameworks, Ferramentas e Qualidade.
- Roadmap com 100 etapas recomendadas.
- Exercicios, desafios e projetos com contexto, objetivo, checklist, estrutura sugerida e codigo inicial.
- Mini IDE global para praticar HTML, CSS e JavaScript.
- Mini IDE embutida em modulos e praticas.
- Sistema simples de progresso por modulo usando `localStorage`.
- Checklists persistidos por pratica.
- Tema claro/escuro persistido no navegador.
- Integracao com widget publico do Discord, com fallback para convite fixo.
- Pagina de documentacao com links oficiais de tecnologias front-end.

## MVP Planejado

Segundo a documentacao oficial do projeto, o MVP deve evoluir a base atual com:

- Pagina inicial reposicionada para destacar proposta de valor, impacto social e acessibilidade.
- Trilha inicial de HTML, CSS e JavaScript basico.
- Exercicios com criterios de aceite e niveis de dificuldade.
- Projetos de portfolio com requisitos e orientacao de documentacao.
- Mini IDE evoluida para treino de exercicios simples.
- Sistema simples de progresso.
- Arena de Codigo inicial, com desafios por nivel, tempo limitado e ranking basico.
- Validacao com usuarios reais por meio de comunidade, formularios e testes praticos.

Recursos mais complexos, como marketplace completo, pagamentos integrados, IA avaliadora avancada, ranking global e aplicativo mobile, ficam como evolucao futura.

## Stack Tecnica

- HTML multipagina.
- CSS customizado.
- Tailwind CSS via CDN.
- JavaScript puro com ES Modules.
- Vite para desenvolvimento, build e preview.
- `localStorage` para persistencia local.
- Vercel para deploy.

O projeto nao usa React, nao possui login e ainda nao possui area autenticada.

## Estrutura do Projeto

```text
.
├── README.md
├── vercel.json
└── Front Lab Academy/
    ├── package.json
    ├── vite.config.ts
    ├── public/
    │   └── assets/
    ├── src/
    │   ├── pages/
    │   ├── styles/
    │   ├── data/
    │   ├── features/
    │   ├── ui/
    │   ├── utils/
    │   └── script.js
    └── dist/
```

Arquivos importantes:

- `Front Lab Academy/src/pages/`: paginas HTML da aplicacao.
- `Front Lab Academy/src/script.js`: arquivo principal com dados, renderizadores, filtros, progresso, tema, Mini IDE e integracao Discord.
- `Front Lab Academy/src/styles/style.css`: tema visual, componentes, responsividade e estados.
- `Front Lab Academy/src/data/modulos-html.js`: apostila de HTML e parser que gera 50 licoes.
- `Front Lab Academy/vite.config.ts`: configuracao das entradas multipagina do Vite.
- `vercel.json`: configuracao de build e rotas para deploy na Vercel.

## Como Rodar Localmente

Entre na pasta da aplicacao:

```bash
cd "Front Lab Academy"
```

Instale as dependencias:

```bash
npm ci
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Gere o build de producao:

```bash
npm run build
```

Visualize o build localmente:

```bash
npm run preview
```

## Deploy

O deploy esta configurado para a Vercel pelo arquivo `vercel.json` na raiz do repositorio.

Comandos usados pela Vercel:

```bash
cd "Front Lab Academy" && npm ci
cd "Front Lab Academy" && npm run build
```

Diretorio de saida:

```text
Front Lab Academy/dist
```

## Acessibilidade

A acessibilidade e tratada como requisito progressivo do produto e como competencia tecnica a ser ensinada aos estudantes. O MVP deve priorizar:

- HTML semantico.
- Navegacao por teclado.
- Foco visivel.
- Contraste adequado.
- Textos alternativos.
- Botoes e links com nomes claros.
- Organizacao compreensivel dos conteudos.

## Modelo de Negocio

A proposta oficial define um modelo hibrido, combinando impacto social com sustentabilidade financeira. O caminho principal de aprendizado deve permanecer gratuito ou acessivel, enquanto a monetizacao pode acontecer por servicos opcionais:

- Mentorias individuais pagas.
- Aulas particulares.
- Revisao de projetos.
- Acompanhamento individual.
- Turmas guiadas.
- Preparacao de portfolio.
- Comissao sobre mentorias realizadas por mentores verificados.
- Futuro marketplace educacional de mentores.

## Equipe

- Vinicius Prati: lideranca, produto, conteudo, validacao e modelo de negocio.
- Arthur Joao de Sa: validacao, marketing, comunidade e coleta de feedback.
- Miguel Broetto: front-end, interface, experiencia do usuario e evolucao visual.
- Italo Coradini: front-end, conteudo, trilhas, exercicios e estrutura didatica.
- Mentor academico do Ifes: orientacao academica, tecnica e estrategica.

## Status Atual

O projeto ja possui uma versao inicial publicada e funcional. A base atual demonstra capacidade de execucao e serve como prototipo para evolucao do MVP.

Build validado com:

```bash
npm run build
```

Resultado: build concluido com sucesso.

## Proximos Passos

- Separar os dados hoje concentrados em `src/script.js` para os arquivos de `src/data/`.
- Mover comportamentos de tema, navegacao, progresso, Mini IDE e Discord para `src/features/`.
- Evoluir exercicios com criterios de aceite mais explicitos.
- Criar Arena de Codigo inicial.
- Melhorar validacao com usuarios reais.
- Documentar testes manuais e criterios de acessibilidade.
- Planejar futura area autenticada, ranking e mentorias.

## Referencias da Documentacao Oficial

- FRONTLAB ACADEMY. *FrontLab Academy: plataforma de aprendizado front-end*. 2026.
- IFES. *Edital Interno nº 05/2026: Chamada Interna da Incubadora do Ifes para selecao de equipes do Programa de Iniciacao ao Empreendedorismo - PIEMP/Ifes*. 2026.
- W3C. *WCAG 2 Overview*. 2026.
