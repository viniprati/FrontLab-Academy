'use client';

import { useMemo, useState } from 'react';

import { TrackCard } from '@/components/course/track-card';
import { TrackFilters, TrackFiltersValue } from '@/components/course/track-filters';
import { tracks } from '@/data/tracks';

const defaultFilters: TrackFiltersValue = { category: 'Todos', difficulty: 'Todos' };

export default function TracksPage() {
  const [filters, setFilters] = useState(defaultFilters);

  const filtered = useMemo(
    () =>
      tracks.filter((track) => {
        const categoryOk = filters.category === 'Todos' || track.category === filters.category;
        const difficultyOk = filters.difficulty === 'Todos' || track.difficulty === filters.difficulty;
        return categoryOk && difficultyOk;
      }),
    [filters]
  );

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h1 className="text-3xl font-bold text-white">Trilhas e tecnologias</h1>
        <p className="mt-2 text-slate-300">
          Navegue por linguagens, frameworks e ferramentas com modulos orientados a pratica e documentacao didatica.
        </p>
      </section>

      <TrackFilters value={filters} onChange={setFilters} />

      {filtered.length ? (
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((track) => (
            <TrackCard key={track.slug} track={track} />
          ))}
        </section>
      ) : (
        <p className="rounded-xl border border-dashed border-white/20 p-5 text-slate-400">
          Nenhuma trilha encontrada com os filtros selecionados.
        </p>
      )}
    </div>
  );
}
