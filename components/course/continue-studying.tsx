'use client';

import Link from 'next/link';

import { allModules } from '@/data/tracks';
import { useLearningProgress } from '@/hooks/useLearningProgress';

export const ContinueStudying = () => {
  const { progress } = useLearningProgress();

  const items = progress.recentModuleIds
    .map((id) => allModules.find((module) => module.id === id))
    .filter(Boolean)
    .slice(0, 4);

  if (!items.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-600/70 bg-slate-900/45 p-4 text-sm text-slate-400 light:border-slate-300 light:bg-white">
        Nenhum historico ainda. Abra uma trilha e marque modulos para continuar daqui depois.
      </div>
    );
  }

  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <li key={item!.id} className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-3 light:border-slate-200 light:bg-white">
          <p className="text-xs text-slate-400">{item!.trackTitle}</p>
          <p className="mb-2 font-medium text-slate-100 light:text-slate-900">{item!.title}</p>
          <Link href={`/tecnologias/${item!.trackSlug}?module=${item!.id}`} className="text-sm text-blue-300 transition-colors hover:text-blue-200 light:text-blue-700 light:hover:text-blue-600">
            Retomar modulo
          </Link>
        </li>
      ))}
    </ul>
  );
};
