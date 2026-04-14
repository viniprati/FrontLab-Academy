import Link from 'next/link';

import { Card } from '@/components/ui/card';

const roadmap = [
  {
    phase: 'Fase 1: Base da Web',
    topics: ['Fundamentos da Web', 'HTML', 'CSS']
  },
  {
    phase: 'Fase 2: Logica e Tipagem',
    topics: ['JavaScript', 'TypeScript']
  },
  {
    phase: 'Fase 3: Componentizacao',
    topics: ['React', 'Tailwind CSS']
  },
  {
    phase: 'Fase 4: Produto com Framework',
    topics: ['Next.js', 'Git/GitHub']
  }
];

export default function RoadmapFrontEndPage() {
  return (
    <div className="space-y-6">
      <Card>
        <h1 className="mb-3 text-3xl font-bold text-slate-100 light:text-slate-900">Roadmap Front-End</h1>
        <p className="text-slate-300">
          Sequencia recomendada para evoluir com consistencia. Voce pode adaptar a ordem, mas manter a progressao
          ajuda muito na retencao de conhecimento.
        </p>
      </Card>

      <section className="grid gap-4 md:grid-cols-2">
        {roadmap.map((item) => (
          <Card key={item.phase}>
            <h2 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">{item.phase}</h2>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
              {item.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </Card>
        ))}
      </section>

      <Card>
        <h2 className="mb-2 text-xl font-semibold text-slate-100 light:text-slate-900">Dica de progresso</h2>
        <p className="text-sm text-slate-300">
          A cada fase concluida, desenvolva um mini projeto para consolidar aprendizado antes de seguir para a
          proxima etapa.
        </p>
        <Link href="/trilhas" className="mt-3 inline-flex text-sm text-blue-300 transition-colors hover:text-blue-200 light:text-blue-700 light:hover:text-blue-600">
          Comecar pelas trilhas
        </Link>
      </Card>
    </div>
  );
}

