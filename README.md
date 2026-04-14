# Front-Edge Academy

Plataforma premium de estudos Front-End construída com Next.js, React, TypeScript e Tailwind CSS.

## Stack

- Next.js (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Monaco Editor (`@monaco-editor/react`)
- next-themes para dark mode

## Instalação

```bash
npm install
```

## Rodar em desenvolvimento

```bash
npm run dev
```

Abra: `http://localhost:3000`

## Build de produção

```bash
npm run build
npm run start
```

## Deploy na Vercel

1. Suba o repositório no GitHub.
2. Acesse a Vercel e clique em `Add New Project`.
3. Importe o repositório e mantenha:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output: padrão do Next.js
4. Clique em `Deploy`.

### Opcional: deploy via CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

## Estrutura principal

- `app/` rotas e layouts (App Router)
- `components/ui/` design system base
- `components/course/` componentes educacionais
- `components/editor/` mini IDE/playground
- `data/` seed mockado de trilhas e snippets
- `hooks/` hooks reutilizáveis (progresso, busca)
- `lib/` utilitários e helpers
- `types/` tipagens de domínio

## Funcionalidades implementadas

- Home premium com hero, benefícios e destaques
- Listagem de trilhas com filtros
- Página dinâmica por tecnologia com módulos
- Navegação educacional com breadcrumbs + sidebar
- Busca local de módulos
- Progresso local com `localStorage`
- Favoritos e histórico recente
- Mini IDE com Monaco, snippets, preview, reset e copiar
- Blocos didáticos reutilizáveis (dicas, avisos, tabs, accordions, tabelas, checklist)
- Dark mode como padrão com toggle

## Como expandir

1. Integrar CMS/headless backend para trilhas reais.
2. Adicionar autenticação e sincronização de progresso na nuvem.
3. Criar sistema completo de quizzes/desafios por módulo.
4. Implementar analytics de aprendizado e recomendações personalizadas.
