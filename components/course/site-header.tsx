'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';

import { useModuleSearch } from '@/hooks/useModuleSearch';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export const SiteHeader = () => {
  const { query, setQuery, results } = useModuleSearch();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-base font-bold tracking-tight text-white sm:text-lg">
          Front-Edge Academy
        </Link>

        <nav className="hidden items-center gap-4 text-sm text-slate-300 md:flex">
          <Link href="/trilhas" className="transition hover:text-white">Trilhas</Link>
          <Link href="/sobre" className="transition hover:text-white">Sobre</Link>
        </nav>

        <div className="relative ml-auto w-full max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar modulo, tecnologia..."
            className="w-full rounded-xl border border-white/15 bg-white/5 py-2 pl-9 pr-3 text-sm text-slate-100 outline-none ring-cyan-300/40 placeholder:text-slate-400 focus:ring"
          />
          {!!query && (
            <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] rounded-xl border border-white/15 bg-bg-elevated p-2 shadow-glow">
              {results.length ? (
                <ul className="space-y-1">
                  {results.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/tecnologias/${item.trackSlug}?module=${item.id}`}
                        className="block rounded-lg px-2 py-2 text-sm text-slate-200 transition hover:bg-white/10"
                      >
                        <p className="font-medium text-white">{item.title}</p>
                        <p className="text-xs text-slate-400">{item.trackTitle}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="px-2 py-2 text-sm text-slate-400">Nenhum resultado encontrado.</p>
              )}
            </div>
          )}
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
};
