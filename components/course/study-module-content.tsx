import { ExternalLink } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { CourseModule } from '@/types/course';

export const StudyModuleContent = ({ module }: { module: CourseModule }) => (
  <section className="space-y-4">
    <Card>
      <h2 className="mb-2 text-2xl font-bold text-white">{module.title}</h2>
      <p className="text-slate-300">{module.description}</p>
    </Card>

    <Card>
      <h3 className="mb-2 text-lg font-semibold text-white">Base oficial</h3>
      <a
        href={module.officialReference}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-sm text-cyan-200 hover:text-cyan-100"
      >
        Ver documentacao oficial <ExternalLink className="h-4 w-4" />
      </a>
    </Card>

    <Card>
      <h3 className="mb-2 text-lg font-semibold text-white">Explicacao simplificada</h3>
      <p className="text-slate-300">{module.content.simplifiedExplanation}</p>
    </Card>

    <Card>
      <h3 className="mb-2 text-lg font-semibold text-white">Exemplo pratico</h3>
      <p className="mb-3 text-slate-300">{module.content.practicalExample}</p>
      <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-3 text-sm text-cyan-100">
        <code>{module.shortExample}</code>
      </pre>
    </Card>

    <Card>
      <h3 className="mb-2 text-lg font-semibold text-white">Erros comuns</h3>
      <ul className="list-disc space-y-1 pl-5 text-slate-300">
        {module.content.commonMistakes.map((mistake) => (
          <li key={mistake}>{mistake}</li>
        ))}
      </ul>
    </Card>

    <Card>
      <h3 className="mb-2 text-lg font-semibold text-white">Resumo rapido</h3>
      <p className="text-slate-300">{module.content.quickSummary}</p>
      <p className="mt-3 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm text-cyan-100">
        Proximo passo: {module.content.nextStep}
      </p>
    </Card>
  </section>
);
