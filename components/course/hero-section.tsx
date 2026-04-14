import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const HeroSection = () => (
  <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 shadow-glow sm:p-12">
    <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:42px_42px] opacity-40" />
    <div className="relative max-w-3xl space-y-6">
      <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
        Plataforma Premium de Ensino
      </span>
      <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
        Domine Front-End com trilhas didaticas, documentacao guiada e playground interativo.
      </h1>
      <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
        Estude tecnologias modernas com material organizado por modulo, exemplos praticos e mini IDE integrada para experimentar codigo sem sair da plataforma.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button href="/trilhas">Comecar agora</Button>
        <Button href="/trilhas" variant="secondary">Explorar trilhas</Button>
      </div>
      <div className="grid gap-4 pt-2 text-sm text-slate-300 sm:grid-cols-3">
        <div><p className="text-2xl font-bold text-white">11</p><p>Tecnologias iniciais</p></div>
        <div><p className="text-2xl font-bold text-white">+35</p><p>Modulos didaticos</p></div>
        <div><p className="text-2xl font-bold text-white">100%</p><p>Foco em pratica</p></div>
      </div>
      <Link href="/tecnologias/nextjs" className="inline-flex text-sm font-medium text-cyan-200 hover:text-cyan-100">
        Ver demo de pagina interna de estudo
      </Link>
    </div>
  </section>
);
