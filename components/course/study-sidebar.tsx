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
    <aside aria-label="Navegacao de modulos da trilha" className="space-y-4 rounded-2xl border border-slate-700/70 bg-slate-900/60 p-4 light:border-slate-200 light:bg-white">
      <div>
        <p className="text-sm text-slate-300">Progresso da trilha</p>
        <p className="text-lg font-semibold text-slate-100 light:text-slate-900">{completed}/{track.modules.length} modulos</p>
        <ProgressBar
          value={toPercent(completed, track.modules.length)}
          className="mt-2"
          ariaLabel={`Progresso da trilha: ${completed} de ${track.modules.length} modulos concluidos`}
        />
      </div>

      <label className="block">
        <span className="sr-only">Buscar modulo</span>
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Buscar modulo por titulo ou descricao"
          placeholder="Buscar modulo..."
          className="w-full rounded-lg border border-slate-600/70 bg-bg-elevated px-3 py-2 text-sm text-slate-100 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-300/70 light:border-slate-300 light:bg-white light:text-slate-700"
        />
      </label>

      <ul className="space-y-2" aria-label="Lista de modulos">
        {modules.map((module) => {
          const active = module.id === currentModuleId;
          const done = progress.completedModuleIds.includes(module.id);

          return (
            <li key={module.id} className="space-y-1 rounded-xl border border-slate-700/70 p-2 light:border-slate-200">
              <button
                type="button"
                onClick={() => {
                  onSelectModule(module.id);
                  pushRecentModule(module.id);
                }}
                aria-current={active ? 'true' : undefined}
                aria-label={`${module.title}${done ? '. Modulo concluido.' : ''}${active ? '. Modulo atual.' : ''}`}
                className={`w-full rounded-lg px-2 py-1.5 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-blue-300/70 ${
                  active
                    ? 'bg-blue-500/12 text-blue-200 light:bg-blue-50 light:text-blue-700'
                    : 'text-slate-200 hover:bg-slate-800/70 light:text-slate-700 light:hover:bg-slate-100'
                }`}
              >
                {module.title}
              </button>
              <div className="flex items-center justify-between px-2 pb-1">
                <Badge label={module.type} className="text-[10px] uppercase" />
                <button
                  type="button"
                  onClick={() => toggleModule(module.id)}
                  aria-pressed={done}
                  aria-label={done ? `Desmarcar ${module.title} como concluido` : `Marcar ${module.title} como concluido`}
                  className="text-xs text-slate-300 transition-colors hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-300/70 light:hover:text-slate-900"
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
