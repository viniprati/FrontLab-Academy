import Link from 'next/link';

import { BenefitsSection } from '@/components/course/benefits-section';
import { ContinueStudying } from '@/components/course/continue-studying';
import { HeroSection } from '@/components/course/hero-section';
import { TrackCard } from '@/components/course/track-card';
import { Card } from '@/components/ui/card';
import { MiniIDE } from '@/components/editor/mini-ide';
import { tracks } from '@/data/tracks';

export default function HomePage() {
  const featured = tracks.slice(0, 4);

  return (
    <div className="space-y-10">
      <HeroSection />

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-2xl font-bold text-slate-100 light:text-slate-900">Continue estudando</h2>
          <Link href="/como-estudar" className="text-sm text-blue-300 transition-colors hover:text-blue-200 light:text-blue-700 light:hover:text-blue-600">
            Ver metodo de estudo
          </Link>
        </div>
        <ContinueStudying />
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <h3 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">Como estudar</h3>
          <p className="text-sm text-slate-300">Passo a passo para transformar cada modulo em aprendizado real.</p>
          <Link href="/como-estudar" className="mt-3 inline-flex text-sm text-blue-300 transition-colors hover:text-blue-200 light:text-blue-700 light:hover:text-blue-600">
            Abrir guia
          </Link>
        </Card>
        <Card>
          <h3 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">Roadmap Front-End</h3>
          <p className="text-sm text-slate-300">Sequencia sugerida para evoluir do basico ao avancado com consistencia.</p>
          <Link href="/roadmap-front-end" className="mt-3 inline-flex text-sm text-blue-300 transition-colors hover:text-blue-200 light:text-blue-700 light:hover:text-blue-600">
            Ver roadmap
          </Link>
        </Card>
        <Card>
          <h3 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">Exercicios e desafios</h3>
          <p className="text-sm text-slate-300">Lista de praticas para consolidar cada trilha com aplicacao concreta.</p>
          <Link href="/exercicios-desafios" className="mt-3 inline-flex text-sm text-blue-300 transition-colors hover:text-blue-200 light:text-blue-700 light:hover:text-blue-600">
            Praticar agora
          </Link>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-100 light:text-slate-900">Mini IDE para praticar</h2>
        <MiniIDE />
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-2xl font-bold text-slate-100 light:text-slate-900">Trilhas em destaque</h2>
          <Link href="/trilhas" className="text-sm text-blue-300 transition-colors hover:text-blue-200 light:text-blue-700 light:hover:text-blue-600">
            Explorar catalogo completo
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((track) => (
            <TrackCard key={track.slug} track={track} />
          ))}
        </div>
      </section>

      <BenefitsSection />
    </div>
  );
}

