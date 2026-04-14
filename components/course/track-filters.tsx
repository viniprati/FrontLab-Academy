'use client';

import { Difficulty } from '@/types/course';

export type TrackFiltersValue = {
  category: string;
  difficulty: Difficulty | 'Todos';
};

export const TrackFilters = ({
  value,
  onChange
}: {
  value: TrackFiltersValue;
  onChange: (next: TrackFiltersValue) => void;
}) => (
  <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:grid-cols-2">
    <label className="space-y-1 text-sm text-slate-300">
      <span>Categoria</span>
      <select
        value={value.category}
        onChange={(event) => onChange({ ...value, category: event.target.value })}
        className="w-full rounded-lg border border-white/15 bg-bg-elevated px-3 py-2 text-slate-100"
      >
        <option>Todos</option>
        <option>Linguagem</option>
        <option>Framework</option>
        <option>Ferramenta</option>
        <option>Fundamentos</option>
      </select>
    </label>

    <label className="space-y-1 text-sm text-slate-300">
      <span>Dificuldade</span>
      <select
        value={value.difficulty}
        onChange={(event) => onChange({ ...value, difficulty: event.target.value as TrackFiltersValue['difficulty'] })}
        className="w-full rounded-lg border border-white/15 bg-bg-elevated px-3 py-2 text-slate-100"
      >
        <option>Todos</option>
        <option>Iniciante</option>
        <option>Intermediario</option>
        <option>Avancado</option>
      </select>
    </label>
  </div>
);
