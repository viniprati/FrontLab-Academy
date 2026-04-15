'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';

import { useModuleSearch } from '@/hooks/useModuleSearch';
import { AccessibilityControls } from '@/components/ui/accessibility-controls';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export const SiteHeader = () => {
  const { query, setQuery, results } = useModuleSearch();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-700/70 bg-bg/90 backdrop-blur-md light:border-slate-200">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-base font-bold tracking-tight text-slate-100 sm:text-lg light:text-slate-900">
          Front-Edge Academy
        </Link>

        <nav className="hidden items-center gap-4 text-sm text-slate-300 md:flex light:text-slate-600">
          <Link href="/trilhas" className="transition-colors hover:text-slate-100 light:hover:text-slate-900">Trilhas</Link>
          <Link href="/como-estudar" className="transition-colors hover:text-slate-100 light:hover:text-slate-900">Como estudar</Link>
          <Link href="/roadmap-front-end" className="transition-colors hover:text-slate-100 light:hover:text-slate-900">Roadmap</Link>
          <Link href="/exercicios-desafios" className="hidden transition-colors hover:text-slate-100 light:hover:text-slate-900 lg:inline-flex">Exercicios</Link>
          <Link href="/documentacoes-oficiais" className="hidden transition-colors hover:text-slate-100 light:hover:text-slate-900 lg:inline-flex">Referencias</Link>
        </nav>

        <div className="relative ml-auto w-full max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar modulo, tecnologia..."
            className="w-full rounded-xl border border-slate-600/70 bg-slate-800/65 py-2 pl-9 pr-3 text-sm text-slate-100 outline-none ring-blue-300/45 transition-colors placeholder:text-slate-400 focus:border-slate-500 focus:ring light:border-slate-300 light:bg-white light:text-slate-700 light:placeholder:text-slate-500 light:focus:border-slate-400"
          />
          {!!query && (
            <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] rounded-xl border border-slate-700/70 bg-bg-elevated p-2 shadow-glow light:border-slate-200 light:bg-white">
              {results.length ? (
                <ul className="space-y-1">
                  {results.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/tecnologias/${item.trackSlug}?module=${item.id}`}
                        className="block rounded-lg px-2 py-2 text-sm text-slate-200 transition-colors hover:bg-slate-800/70 light:text-slate-700 light:hover:bg-slate-100"
                      >
                        <p className="font-medium text-slate-100 light:text-slate-900">{item.title}</p>
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

        <AccessibilityControls />
        <ThemeToggle />
      </div>
    </header>
  );
};
