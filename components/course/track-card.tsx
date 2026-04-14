'use client';

import { Heart } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { useLearningProgress } from '@/hooks/useLearningProgress';
import { getIconByName } from '@/lib/icons';
import { toPercent } from '@/lib/utils';
import { TechTrack } from '@/types/course';

export const TrackCard = ({ track }: { track: TechTrack }) => {
  const { progress, toggleFavoriteTrack } = useLearningProgress();

  const completed = track.modules.filter((module) => progress.completedModuleIds.includes(module.id)).length;
  const completion = toPercent(completed, track.modules.length);
  const favorite = progress.favoriteTrackSlugs.includes(track.slug);
  const Icon = getIconByName(track.icon);

  return (
    <Card className="relative overflow-hidden">
      <div className={`absolute inset-x-0 top-0 h-20 bg-gradient-to-r ${track.coverGradient}`} aria-hidden />
      <div className="relative space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-2">
            <Badge label={track.category} />
            <h3 className="text-xl font-bold text-white">{track.title}</h3>
            <p className="text-sm text-slate-300">{track.tagline}</p>
          </div>
          <Icon className="h-6 w-6 text-cyan-200" />
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-300">
          <Badge label={track.difficulty} className="border-cyan-300/30 bg-cyan-300/10 text-cyan-100" />
          <span>{track.modulesCount} modulos</span>
          <span>{track.estimatedHours}h estimadas</span>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
            <span>Progresso</span>
            <span>{completion}%</span>
          </div>
          <ProgressBar value={completion} />
        </div>

        <div className="flex gap-2">
          <Link
            href={`/tecnologias/${track.slug}`}
            className="inline-flex flex-1 items-center justify-center rounded-xl bg-accent px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-accent-soft"
          >
            Estudar trilha
          </Link>
          <button
            type="button"
            onClick={() => toggleFavoriteTrack(track.slug)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-slate-100 transition hover:bg-white/10"
            aria-label="Favoritar trilha"
          >
            <Heart className={`h-4 w-4 ${favorite ? 'fill-cyan-300 text-cyan-200' : ''}`} />
          </button>
        </div>
      </div>
    </Card>
  );
};
