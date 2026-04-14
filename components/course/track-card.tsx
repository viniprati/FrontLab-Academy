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
            <h3 className="text-xl font-bold text-slate-100 light:text-slate-900">{track.title}</h3>
            <p className="text-sm text-slate-300">{track.tagline}</p>
          </div>
          <Icon className="h-6 w-6 text-blue-300 light:text-blue-600" />
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-300">
          <Badge label={track.difficulty} className="border-blue-400/25 bg-blue-500/10 text-blue-200 light:border-blue-200 light:bg-blue-50 light:text-blue-700" />
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
            className="inline-flex flex-1 items-center justify-center rounded-xl bg-blue-500 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
          >
            Estudar trilha
          </Link>
          <button
            type="button"
            onClick={() => toggleFavoriteTrack(track.slug)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-600/70 bg-slate-800/70 text-slate-100 transition-colors hover:bg-slate-700/75 light:border-slate-300 light:bg-white light:text-slate-700 light:hover:bg-slate-100"
            aria-label="Favoritar trilha"
          >
            <Heart className={`h-4 w-4 ${favorite ? 'fill-blue-400 text-blue-300 light:fill-blue-600 light:text-blue-600' : ''}`} />
          </button>
        </div>
      </div>
    </Card>
  );
};
