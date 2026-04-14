export type ReferenceSource = {
  label: string;
  url: string;
  notes: string;
};

export type ExerciseItem = {
  id: string;
  title: string;
  level: 'Iniciante' | 'Intermediario' | 'Avancado';
  prompt: string;
  correction: string;
};

export const trackReferenceSources: Record<string, ReferenceSource[]> = {
  html: [
    {
      label: 'MDN - HTML',
      url: 'https://developer.mozilla.org/docs/Web/HTML',
      notes: 'Base de elementos, atributos e boas praticas.'
    },
    {
      label: 'WHATWG HTML Living Standard',
      url: 'https://html.spec.whatwg.org/multipage/',
      notes: 'Especificacao oficial da linguagem.'
    }
  ],
  css: [
    {
      label: 'MDN - CSS',
      url: 'https://developer.mozilla.org/docs/Web/CSS',
      notes: 'Referencia de propriedades, seletores e layout.'
    },
    {
      label: 'W3C CSS Snapshot',
      url: 'https://www.w3.org/TR/CSS/',
      notes: 'Panorama das recomendacoes CSS em padroes W3C.'
    }
  ],
  javascript: [
    {
      label: 'MDN - JavaScript',
      url: 'https://developer.mozilla.org/docs/Web/JavaScript',
      notes: 'Guia pratico da linguagem no navegador.'
    },
    {
      label: 'ECMAScript Language Specification',
      url: 'https://tc39.es/ecma262/',
      notes: 'Especificacao oficial do JavaScript.'
    }
  ],
  typescript: [
    {
      label: 'TypeScript Handbook',
      url: 'https://www.typescriptlang.org/docs/',
      notes: 'Documentacao oficial de tipos, generics e narrowing.'
    },
    {
      label: 'TypeScript Playground',
      url: 'https://www.typescriptlang.org/play',
      notes: 'Ambiente oficial para testar tipagem rapidamente.'
    }
  ],
  react: [
    {
      label: 'React Docs',
      url: 'https://react.dev/',
      notes: 'Referencia oficial de componentes, hooks e fluxo mental.'
    },
    {
      label: 'React API Reference',
      url: 'https://react.dev/reference/react',
      notes: 'API oficial dos hooks e utilitarios.'
    }
  ],
  nextjs: [
    {
      label: 'Next.js Docs',
      url: 'https://nextjs.org/docs',
      notes: 'Base oficial de App Router, rendering e data fetching.'
    },
    {
      label: 'Next.js Learn',
      url: 'https://nextjs.org/learn',
      notes: 'Trilhas guiadas oficiais para pratica.'
    }
  ],
  tailwind: [
    {
      label: 'Tailwind CSS Docs',
      url: 'https://tailwindcss.com/docs',
      notes: 'Utilities, responsividade, estados e customizacao.'
    },
    {
      label: 'Tailwind Components Guide',
      url: 'https://tailwindcss.com/docs/reusing-styles',
      notes: 'Boas praticas para reuso e padronizacao de estilos.'
    }
  ],
  'git-github': [
    {
      label: 'Git Documentation',
      url: 'https://git-scm.com/doc',
      notes: 'Comandos oficiais e fluxo de versionamento.'
    },
    {
      label: 'GitHub Docs',
      url: 'https://docs.github.com/',
      notes: 'Fluxo de pull request, revisao e colaboracao.'
    }
  ],
  'fundamentos-web': [
    {
      label: 'MDN Learn Web Development',
      url: 'https://developer.mozilla.org/docs/Learn',
      notes: 'Base didatica de web, performance e acessibilidade.'
    },
    {
      label: 'web.dev',
      url: 'https://web.dev/',
      notes: 'Guias de performance, UX e qualidade web.'
    }
  ]
};

export const trackExercises: Record<string, ExerciseItem[]> = {
  html: [
    {
      id: 'html-1',
      title: 'Pagina semantica de artigo',
      level: 'Iniciante',
      prompt: 'Crie uma pagina com header, main, article e footer, incluindo hierarquia de titulos correta.',
      correction: 'Verifique se existe apenas um h1 principal e se cada secao tem titulo coerente. Evite div para blocos semanticos.'
    },
    {
      id: 'html-2',
      title: 'Formulario acessivel',
      level: 'Iniciante',
      prompt: 'Monte formulario de cadastro com nome, email e senha usando label associada e validacao nativa.',
      correction: 'Cada input deve ter id + label for correspondente. Use type adequado (email, password) e required.'
    },
    {
      id: 'html-3',
      title: 'Tabela de progresso',
      level: 'Intermediario',
      prompt: 'Crie uma tabela com caption, thead e tbody para exibir progresso de estudo por modulo.',
      correction: 'Tabela deve ter estrutura completa, cabecalho claro e caption explicando o contexto dos dados.'
    }
  ],
  css: [
    {
      id: 'css-1',
      title: 'Card responsivo',
      level: 'Iniciante',
      prompt: 'Estilize um card com padding, border e sombra leve mantendo boa leitura em mobile.',
      correction: 'Use espacamento consistente e contraste suave. Teste em largura pequena para evitar overflow.'
    },
    {
      id: 'css-2',
      title: 'Layout com Grid',
      level: 'Intermediario',
      prompt: 'Monte layout com sidebar e conteudo principal que vira coluna unica em telas menores.',
      correction: 'Use grid-template-columns para desktop e media query para 1 coluna no mobile.'
    },
    {
      id: 'css-3',
      title: 'Estados de botao',
      level: 'Intermediario',
      prompt: 'Crie botao com estado normal, hover e focus-visible com transicao sutil.',
      correction: 'Hover deve ser discreto e focus-visible precisa ser claramente visivel para navegacao por teclado.'
    }
  ],
  javascript: [
    {
      id: 'js-1',
      title: 'Filtro de lista',
      level: 'Iniciante',
      prompt: 'Com um input, filtre uma lista de itens em tempo real.',
      correction: 'Use input event, normalize texto para lowercase e atualize apenas os itens necessarios.'
    },
    {
      id: 'js-2',
      title: 'Contador com botoes',
      level: 'Iniciante',
      prompt: 'Implemente contador com incrementar, decrementar e reset.',
      correction: 'Centralize estado em uma variavel e sempre renderize o valor atualizado no DOM.'
    },
    {
      id: 'js-3',
      title: 'Fetch com tratamento de erro',
      level: 'Intermediario',
      prompt: 'Consuma uma API e exiba estados de loading, sucesso e erro.',
      correction: 'Use try/catch e valide res.ok antes de consumir json para evitar estado inconsistente.'
    }
  ],
  typescript: [
    {
      id: 'ts-1',
      title: 'Tipar entidade de modulo',
      level: 'Iniciante',
      prompt: 'Crie um type Module com titulo, duracao e concluido.',
      correction: 'Use type ou interface e mantenha propriedades obrigatorias com tipos explicitos.'
    },
    {
      id: 'ts-2',
      title: 'Union de status',
      level: 'Intermediario',
      prompt: 'Modele status de requisicao com union: idle, loading, success, error.',
      correction: 'Restrinja estado a literais de string e evite string livre para prevenir estados invalidos.'
    },
    {
      id: 'ts-3',
      title: 'Generic utilitario',
      level: 'Intermediario',
      prompt: 'Implemente funcao generic firstItem<T>(list: T[]) => T | undefined.',
      correction: 'Garanta que retorno contemple lista vazia e preserve inferencia do tipo de entrada.'
    }
  ],
  react: [
    {
      id: 'react-1',
      title: 'Componente de lista',
      level: 'Iniciante',
      prompt: 'Crie componente que recebe itens por props e renderiza lista com key estavel.',
      correction: 'Use chave unica por item e evite index quando houver id disponivel.'
    },
    {
      id: 'react-2',
      title: 'Accordion com state',
      level: 'Intermediario',
      prompt: 'Implemente accordion que abre/fecha modulo ao clicar no titulo.',
      correction: 'Controle item aberto via useState e mantenha handler simples.'
    },
    {
      id: 'react-3',
      title: 'Filtro com useMemo',
      level: 'Intermediario',
      prompt: 'Filtre lista de modulos por texto e memorize resultado com useMemo.',
      correction: 'Dependencias devem incluir lista e termo de busca para evitar resultado desatualizado.'
    }
  ],
  nextjs: [
    {
      id: 'next-1',
      title: 'Nova rota de conteudo',
      level: 'Iniciante',
      prompt: 'Crie rota /guia com page.tsx e texto introdutorio.',
      correction: 'Pastas devem seguir App Router e nome da rota precisa ser semantico.'
    },
    {
      id: 'next-2',
      title: 'Loading por segmento',
      level: 'Intermediario',
      prompt: 'Adicione loading.tsx para uma pagina de trilha.',
      correction: 'Loading deve comunicar progresso sem bloquear entendimento do usuario.'
    },
    {
      id: 'next-3',
      title: 'Separacao server/client',
      level: 'Intermediario',
      prompt: 'Refatore uma pagina deixando conteudo em server component e filtro interativo em client component.',
      correction: 'Use "use client" apenas no componente que realmente precisa de interacao ou hooks de navegador.'
    }
  ],
  tailwind: [
    {
      id: 'tw-1',
      title: 'Escala de espacamento',
      level: 'Iniciante',
      prompt: 'Construa card de estudo usando classes de spacing e tipografia padronizadas.',
      correction: 'Evite misturar valores aleatorios; mantenha ritmo visual consistente.'
    },
    {
      id: 'tw-2',
      title: 'Grid responsivo',
      level: 'Intermediario',
      prompt: 'Crie grid que muda de 1 para 3 colunas com breakpoints.',
      correction: 'Use classes responsivas (md:, lg:) e valide leitura em mobile.'
    },
    {
      id: 'tw-3',
      title: 'Variantes de botao',
      level: 'Intermediario',
      prompt: 'Crie variantes primary, secondary e ghost com classes reutilizaveis.',
      correction: 'Centralize classes base e aplique apenas diferencas por variante.'
    }
  ],
  'git-github': [
    {
      id: 'git-1',
      title: 'Fluxo de commit',
      level: 'Iniciante',
      prompt: 'Faça tres commits pequenos para uma feature: layout, texto e correcao.',
      correction: 'Cada commit deve ter intencao unica e mensagem objetiva.'
    },
    {
      id: 'git-2',
      title: 'Branch de feature',
      level: 'Iniciante',
      prompt: 'Crie branch feat/exercicios, faça ajustes e abra PR.',
      correction: 'Branch deve ter nome claro e PR precisa explicar problema, solucao e impacto.'
    },
    {
      id: 'git-3',
      title: 'Resolucao de conflito',
      level: 'Intermediario',
      prompt: 'Simule conflito em arquivo de estilo e resolva sem perder alteracoes relevantes.',
      correction: 'Antes de concluir merge, revise diff final e rode build para validar.'
    }
  ],
  'fundamentos-web': [
    {
      id: 'web-1',
      title: 'Mapa de requisicao',
      level: 'Iniciante',
      prompt: 'Descreva o caminho URL -> DNS -> servidor -> navegador para uma pagina do projeto.',
      correction: 'Sua explicacao deve incluir ao menos DNS, requisicao HTTP e renderizacao no browser.'
    },
    {
      id: 'web-2',
      title: 'Checklist de performance',
      level: 'Intermediario',
      prompt: 'Liste 5 melhorias praticas para reduzir tempo de carregamento da home.',
      correction: 'Inclua itens como imagem otimizada, scripts essenciais e priorizacao de conteudo acima da dobra.'
    },
    {
      id: 'web-3',
      title: 'Auditoria de acessibilidade',
      level: 'Intermediario',
      prompt: 'Revise uma pagina e encontre 5 ajustes de acessibilidade.',
      correction: 'Verifique foco visivel, contraste, semantica, labels e texto de links.'
    }
  ]
};

export const getTrackReferences = (trackSlug: string) => trackReferenceSources[trackSlug] ?? [];
export const getTrackExercises = (trackSlug: string) => trackExercises[trackSlug] ?? [];
