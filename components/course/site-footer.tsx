import Link from 'next/link';

export const SiteFooter = () => (
  <footer className="border-t border-white/10 bg-bg-elevated/70">
    <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:grid-cols-2 lg:px-8">
      <p>Front-Edge Academy. Plataforma de estudo de Front-End orientada a produto.</p>
      <div className="flex gap-4 lg:justify-end">
        <Link href="/trilhas" className="hover:text-white">Explorar trilhas</Link>
        <Link href="/sobre" className="hover:text-white">Sobre</Link>
      </div>
    </div>
  </footer>
);
