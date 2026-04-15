import Link from 'next/link';

export const SiteFooter = () => (
  <footer className="border-t border-slate-700/70 bg-bg-elevated/80 light:border-slate-200 light:bg-slate-100/70">
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:grid-cols-3 lg:px-8">
      <div className="space-y-2">
        <p className="text-base font-semibold text-slate-200 light:text-slate-900">Front-Edge Academy</p>
        <p>Plataforma de estudo de Front-End com trilhas, pratica guiada e revisao continua.</p>
      </div>

      <div className="space-y-2">
        <p className="font-semibold uppercase tracking-wide text-slate-300 light:text-slate-700">Navegacao</p>
        <div className="flex flex-col gap-2">
          <Link href="/trilhas" className="transition-colors hover:text-slate-100 light:hover:text-slate-900">Explorar trilhas</Link>
          <Link href="/como-estudar" className="transition-colors hover:text-slate-100 light:hover:text-slate-900">Como estudar</Link>
          <Link href="/documentacoes-oficiais" className="transition-colors hover:text-slate-100 light:hover:text-slate-900">Referencias</Link>
        </div>
      </div>

      <div className="space-y-2">
        <p className="font-semibold uppercase tracking-wide text-slate-300 light:text-slate-700">Desenvolvedor</p>
        <p>Contato: prativiniciusgmail.com</p>
        <a
          href="https://github.com/viniprati"
          target="_blank"
          rel="noreferrer"
          className="inline-flex transition-colors hover:text-slate-100 light:hover:text-slate-900"
        >
          github.com/viniprati
        </a>
      </div>
    </div>
  </footer>
);
