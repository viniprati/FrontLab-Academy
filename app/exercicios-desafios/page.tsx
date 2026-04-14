import Link from 'next/link';

import { Card } from '@/components/ui/card';
import { getTrackExercises, getTrackReferences } from '@/data/references-exercises';
import { tracks } from '@/data/tracks';

export default function ExerciciosDesafiosPage() {
  return (
    <div className="space-y-6">
      <Card>
        <h1 className="mb-3 text-3xl font-bold text-slate-100 light:text-slate-900">Exercicios e desafios com correcao</h1>
        <p className="text-slate-300">
          Aqui voce encontra desafios por linguagem com orientacao de correcao. Resolva primeiro por conta propria,
          depois compare com o criterio sugerido.
        </p>
      </Card>

      <section className="space-y-4">
        {tracks
          .filter((track) => getTrackExercises(track.slug).length > 0)
          .map((track) => {
            const exercises = getTrackExercises(track.slug);
            const refs = getTrackReferences(track.slug);

            return (
              <Card key={track.slug}>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-slate-400">{track.category}</p>
                    <h2 className="text-xl font-semibold text-slate-100 light:text-slate-900">{track.title}</h2>
                  </div>
                  <Link href={`/tecnologias/${track.slug}`} className="text-sm text-blue-300 transition-colors hover:text-blue-200 light:text-blue-700 light:hover:text-blue-600">
                    Abrir trilha
                  </Link>
                </div>

                <div className="space-y-3">
                  {exercises.map((exercise) => (
                    <details
                      key={exercise.id}
                      className="rounded-xl border border-slate-700/70 bg-slate-800/55 p-3 light:border-slate-200 light:bg-slate-50"
                    >
                      <summary className="cursor-pointer text-sm font-semibold text-slate-100 light:text-slate-900">
                        [{exercise.level}] {exercise.title}
                      </summary>
                      <p className="mt-2 text-sm text-slate-300">
                        <span className="font-semibold text-slate-200 light:text-slate-800">Enunciado:</span> {exercise.prompt}
                      </p>
                      <p className="mt-2 text-sm text-blue-200 light:text-blue-700">
                        <span className="font-semibold">Correcao:</span> {exercise.correction}
                      </p>
                    </details>
                  ))}
                </div>

                <div className="mt-4 border-t border-slate-700/70 pt-3 light:border-slate-200">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Fontes de referencia da linguagem</p>
                  <ul className="space-y-1">
                    {(refs.length ? refs : [{ label: `Documentacao oficial de ${track.title}`, url: track.officialDocs, notes: 'Referencia oficial complementar.' }]).map((source) => (
                      <li key={`${track.slug}-${source.url}`}>
                        <a href={source.url} target="_blank" rel="noreferrer" className="text-sm text-blue-300 transition-colors hover:text-blue-200 light:text-blue-700 light:hover:text-blue-600">
                          {source.label}
                        </a>
                        <p className="text-xs text-slate-400">{source.notes}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
      </section>
    </div>
  );
}
