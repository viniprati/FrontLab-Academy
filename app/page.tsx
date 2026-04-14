import Link from 'next/link';

import { BenefitsSection } from '@/components/course/benefits-section';
import { ContinueStudying } from '@/components/course/continue-studying';
import { HeroSection } from '@/components/course/hero-section';
import { TrackCard } from '@/components/course/track-card';
import { MiniIDE } from '@/components/editor/mini-ide';
import { tracks } from '@/data/tracks';

export default function HomePage() {
  const featured = tracks.slice(0, 4);

  return (
    <div className="space-y-10">
      <HeroSection />

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-2xl font-bold text-white">Continue estudando</h2>
          <Link href="/trilhas" className="text-sm text-cyan-200 hover:text-cyan-100">Ver todas as trilhas</Link>
        </div>
        <ContinueStudying />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Mini IDE e playground</h2>
        <MiniIDE />
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-2xl font-bold text-white">Trilhas em destaque</h2>
          <Link href="/trilhas" className="text-sm text-cyan-200 hover:text-cyan-100">Explorar catalogo</Link>
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
