import Link from 'next/link';

import { Card } from '@/components/ui/card';
import { getTrackReferences } from '@/data/references-exercises';
import { tracks } from '@/data/tracks';

export default function DocumentacoesOficiaisPage() {
  return (
    <div className="space-y-6">
      <Card>
        <h1 className="mb-3 text-3xl font-bold text-slate-100 light:text-slate-900">Documentacoes oficiais</h1>
        <p className="text-slate-300">
          Esta pagina funciona como central de referencia complementar. Estude primeiro os modulos didaticos da
          plataforma e use os links oficiais para aprofundamento.
        </p>
      </Card>

      <section className="grid gap-4 md:grid-cols-2">
        {tracks.map((track) => {
          const refs = getTrackReferences(track.slug);
          const resolved = refs.length
            ? refs
            : [{ label: `Documentacao oficial de ${track.title}`, url: track.officialDocs, notes: 'Referencia oficial complementar.' }];

          return (
            <Card key={track.slug}>
              <p className="text-xs text-slate-400">{track.category}</p>
              <h2 className="mb-1 text-lg font-semibold text-slate-100 light:text-slate-900">{track.title}</h2>
              <p className="mb-3 text-sm text-slate-300">{track.tagline}</p>

              <ul className="mb-3 space-y-1 text-xs text-slate-400">
                {resolved.map((ref) => (
                  <li key={`${track.slug}-${ref.url}`}>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-blue-300 transition-colors hover:text-blue-200 light:text-blue-700 light:hover:text-blue-600"
                    >
                      {ref.label}
                    </a>
                    <p>{ref.notes}</p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a
                  href={track.officialDocs}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-300 transition-colors hover:text-blue-200 light:text-blue-700 light:hover:text-blue-600"
                >
                  Abrir documentacao principal
                </a>
                <Link href={`/tecnologias/${track.slug}`} className="text-sm text-slate-300 transition-colors hover:text-slate-100 light:hover:text-slate-900">
                  Ver trilha didatica
                </Link>
              </div>
            </Card>
          );
        })}
      </section>
    </div>
  );
}
