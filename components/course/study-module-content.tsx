import { ExternalLink } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { getGeneratedModuleDidacticContent, moduleDidacticContent } from '@/data/didactic-content';
import { CourseModule } from '@/types/course';

export const StudyModuleContent = ({ module }: { module: CourseModule }) => {
  const didactic = moduleDidacticContent[module.id];
  const generated = getGeneratedModuleDidacticContent(module);

  const objective = didactic?.objective ?? generated.objective;
  const explanation = didactic?.explanation ?? generated.explanation;
  const deepDive = didactic?.deepDive ?? generated.deepDive;
  const simpleExample = didactic?.simpleExample ?? generated.simpleExample;
  const commentedExample = didactic?.commentedExample ?? generated.commentedExample;
  const practicalApplication = didactic?.practicalApplication ?? generated.practicalApplication;
  const mistakes = didactic?.commonMistakes ?? generated.commonMistakes;
  const importantTips = didactic?.importantTips ?? generated.importantTips;
  const exercise = didactic?.exercise ?? generated.exercise;
  const summary = didactic?.summary ?? generated.summary;
  const nextStep = didactic?.nextStep ?? generated.nextStep;
  const officialReferenceLabel = didactic?.officialReferenceLabel ?? generated.officialReferenceLabel;
  const takeaways = module.content.keyTakeaways ?? ['Entender o conceito central', 'Aplicar em exemplo pratico', 'Revisar erros frequentes'];

  return (
    <section className="space-y-4">
      <Card>
        <h2 className="mb-2 text-2xl font-bold text-slate-100 light:text-slate-900">{module.title}</h2>
        <p className="mb-3 text-slate-300">{module.description}</p>
        <p className="rounded-lg border border-blue-400/20 bg-blue-500/10 p-3 text-sm text-blue-200 light:border-blue-200 light:bg-blue-50 light:text-blue-700">
          <span className="font-semibold">Objetivo do modulo:</span> {objective}
        </p>
      </Card>

      <Card>
        <h3 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">Explicacao didatica</h3>
        <p className="text-slate-300">{explanation}</p>
        <p className="mt-3 text-sm text-slate-300">{deepDive}</p>
      </Card>

      <Card>
        <h3 className="mb-2 text-base font-medium text-slate-200 light:text-slate-800">Exemplos</h3>
        <p className="mb-3 text-sm text-slate-300">
          Primeiro veja a versao enxuta para entender a ideia central, depois compare com a versao comentada.
        </p>
        <div className="space-y-3">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">Simples</p>
            <pre className="overflow-x-auto rounded-xl border border-slate-700/70 bg-slate-900/70 p-3 text-sm text-slate-200 light:border-slate-200 light:bg-slate-50 light:text-slate-700">
              <code>{simpleExample}</code>
            </pre>
          </div>
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">Comentado</p>
            <pre className="overflow-x-auto rounded-xl border border-slate-700/70 bg-slate-900/70 p-3 text-sm text-slate-200 light:border-slate-200 light:bg-slate-50 light:text-slate-700">
              <code>{commentedExample}</code>
            </pre>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">Aplicacao pratica</h3>
        <p className="text-slate-300">{practicalApplication}</p>
      </Card>

      <Card>
        <h3 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">Erros frequentes</h3>
        <ul className="list-disc space-y-1 pl-5 text-slate-300">
          {mistakes.map((mistake) => (
            <li key={mistake}>{mistake}</li>
          ))}
        </ul>
      </Card>

      <Card>
        <h3 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">Dicas importantes</h3>
        <ul className="list-disc space-y-1 pl-5 text-slate-300">
          {importantTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </Card>

      <Card>
        <h3 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">Mini exercicio ou desafio</h3>
        <p className="text-slate-300">{exercise}</p>
      </Card>

      <Card>
        <h3 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">Resumo final</h3>
        <p className="text-slate-300">{summary}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          {takeaways.map((takeaway) => (
            <li key={takeaway}>{takeaway}</li>
          ))}
        </ul>
        <p className="mt-3 rounded-lg border border-blue-400/20 bg-blue-500/10 p-3 text-sm text-blue-200 light:border-blue-200 light:bg-blue-50 light:text-blue-700">
          <span className="font-semibold">Proximo passo:</span> {nextStep}
        </p>
      </Card>

      <Card>
        <h3 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">{officialReferenceLabel}</h3>
        <a
          href={module.officialReference}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-blue-300 transition-colors hover:text-blue-200 light:text-blue-700 light:hover:text-blue-600"
        >
          Acessar documentacao oficial <ExternalLink className="h-4 w-4" />
        </a>
      </Card>
    </section>
  );
};
