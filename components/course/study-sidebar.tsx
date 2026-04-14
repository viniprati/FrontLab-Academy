'use client';

import { useMemo, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { ProgressBar } from '@/components/ui/progress-bar';
import { useLearningProgress } from '@/hooks/useLearningProgress';
import { toPercent } from '@/lib/utils';
import { TechTrack } from '@/types/course';

export const StudySidebar = ({
  track,
  currentModuleId,
  onSelectModule
}: {
  track: TechTrack;
  currentModuleId: string;
  onSelectModule: (moduleId: string) => void;
}) => {
  const [search, setSearch] = useState('');
  const { progress, toggleModule, pushRecentModule } = useLearningProgress();

  const modules = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return track.modules;
    return track.modules.filter((module) => `${module.title} ${module.description}`.toLowerCase().includes(q));
  }, [search, track.modules]);

  const completed = track.modules.filter((module) => progress.completedModuleIds.includes(module.id)).length;

  return (
    <aside className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div>
        <p className="text-sm text-slate-300">Progresso da trilha</p>
        <p className="text-lg font-semibold text-white">{completed}/{track.modules.length} modulos</p>
        <ProgressBar value={toPercent(completed, track.modules.length)} className="mt-2" />
      </div>

      <label className="block">
        <span className="sr-only">Buscar modulo</span>
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscar modulo..."
          className="w-full rounded-lg border border-white/15 bg-bg-elevated px-3 py-2 text-sm text-slate-100"
        />
      </label>

      <ul className="space-y-2">
        {modules.map((module) => {
          const active = module.id === currentModuleId;
          const done = progress.completedModuleIds.includes(module.id);

          return (
            <li key={module.id} className="space-y-1 rounded-xl border border-white/10 p-2">
              <button
                type="button"
                onClick={() => {
                  onSelectModule(module.id);
                  pushRecentModule(module.id);
                }}
                className={`w-full rounded-lg px-2 py-1.5 text-left text-sm transition ${
                  active ? 'bg-cyan-300/15 text-cyan-100' : 'text-slate-200 hover:bg-white/10'
                }`}
              >
                {module.title}
              </button>
              <div className="flex items-center justify-between px-2 pb-1">
                <Badge label={module.type} className="text-[10px] uppercase" />
                <button
                  type="button"
                  onClick={() => toggleModule(module.id)}
                  className="text-xs text-slate-300 hover:text-white"
                >
                  {done ? 'Concluido' : 'Marcar'}
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {!modules.length && <p className="text-sm text-slate-400">Nenhum modulo encontrado com esse filtro.</p>}
    </aside>
  );
};
