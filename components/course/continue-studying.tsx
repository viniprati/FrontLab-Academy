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
      <div className="rounded-2xl border border-dashed border-white/20 p-4 text-sm text-slate-400">
        Nenhum historico ainda. Abra uma trilha e marque modulos para continuar daqui depois.
      </div>
    );
  }

  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <li key={item!.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <p className="text-xs text-slate-400">{item!.trackTitle}</p>
          <p className="mb-2 font-medium text-white">{item!.title}</p>
          <Link href={`/tecnologias/${item!.trackSlug}?module=${item!.id}`} className="text-sm text-cyan-200 hover:text-cyan-100">
            Retomar modulo
          </Link>
        </li>
      ))}
    </ul>
  );
};
