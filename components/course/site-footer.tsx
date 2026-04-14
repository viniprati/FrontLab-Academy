import Link from 'next/link';

export const SiteFooter = () => (
  <footer className="border-t border-slate-700/70 bg-bg-elevated/80 light:border-slate-200 light:bg-slate-100/70">
    <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:grid-cols-2 lg:px-8">
      <p>Front-Edge Academy. Plataforma de estudo de Front-End com trilhas, pratica guiada e revisao continua.</p>
      <div className="flex gap-4 lg:justify-end">
        <Link href="/trilhas" className="transition-colors hover:text-slate-100 light:hover:text-slate-900">Explorar trilhas</Link>
        <Link href="/como-estudar" className="transition-colors hover:text-slate-100 light:hover:text-slate-900">Como estudar</Link>
        <Link href="/documentacoes-oficiais" className="transition-colors hover:text-slate-100 light:hover:text-slate-900">Referencias</Link>
      </div>
    </div>
  </footer>
);
