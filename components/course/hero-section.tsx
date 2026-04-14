import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const HeroSection = () => (
  <section className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/80 p-8 shadow-glow sm:p-12 light:border-slate-200 light:bg-white">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-700/20 to-transparent light:from-slate-200/60" />
    <div className="relative max-w-3xl space-y-6">
      <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200 light:border-blue-500/20 light:bg-blue-50 light:text-blue-700">
        Plataforma de Estudos Front-End
      </span>
      <h1 className="text-3xl font-extrabold leading-tight text-slate-100 sm:text-5xl light:text-slate-900">
        Aprenda Front-End com trilhas didaticas, pratica guiada e progresso por modulo.
      </h1>
      <p className="max-w-2xl text-base text-slate-300 light:text-slate-600 sm:text-lg">
        Estude com explicacoes claras, exemplos comentados, exercicios e mini IDE integrada. A referencia oficial entra como complemento, nao como ponto de partida.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button href="/trilhas">Comecar pelas trilhas</Button>
        <Button href="/como-estudar" variant="secondary">Ver guia de estudo</Button>
      </div>
      <div className="grid gap-4 pt-2 text-sm text-slate-300 light:text-slate-600 sm:grid-cols-3">
        <div><p className="text-2xl font-bold text-slate-100 light:text-slate-900">11</p><p>Trilhas tecnicas</p></div>
        <div><p className="text-2xl font-bold text-slate-100 light:text-slate-900">+35</p><p>Modulos de estudo</p></div>
        <div><p className="text-2xl font-bold text-slate-100 light:text-slate-900">1</p><p>Fluxo: aprender, praticar, revisar</p></div>
      </div>
      <Link href="/roadmap-front-end" className="inline-flex text-sm font-medium text-blue-300 transition-colors hover:text-blue-200 light:text-blue-700 light:hover:text-blue-600">
        Ver roadmap sugerido de estudos
      </Link>
    </div>
  </section>
);
