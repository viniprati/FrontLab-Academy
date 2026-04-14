'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { Breadcrumbs } from '@/components/course/breadcrumbs';
import {
  AccordionBlock,
  Checklist,
  ComparisonCards,
  SimpleTable,
  TabsBlock,
  TipBlock,
  WarningBlock
} from '@/components/course/doc-blocks';
import { StudyModuleContent } from '@/components/course/study-module-content';
import { StudySidebar } from '@/components/course/study-sidebar';
import { MiniIDE } from '@/components/editor/mini-ide';
import { Card } from '@/components/ui/card';
import { getTrackDidacticContent } from '@/data/didactic-content';
import { getTrackExercises, getTrackReferences } from '@/data/references-exercises';
import { TechTrack } from '@/types/course';

export const StudyPageClient = ({ track }: { track: TechTrack }) => {
  const params = useSearchParams();
  const selectedByQuery = params.get('module') ?? track.modules[0]?.id;
  const [currentModuleId, setCurrentModuleId] = useState(selectedByQuery);

  const currentModule = useMemo(
    () => track.modules.find((module) => module.id === currentModuleId) ?? track.modules[0],
    [currentModuleId, track.modules]
  );

  const currentIndex = track.modules.findIndex((module) => module.id === currentModule?.id);
  const nextModule = currentIndex >= 0 ? track.modules[currentIndex + 1] : undefined;
  const didactic = getTrackDidacticContent(track);
  const references = getTrackReferences(track.slug);
  const resolvedReferences =
    references.length > 0
      ? references
      : [{ label: `Documentacao oficial de ${track.title}`, url: track.officialDocs, notes: 'Referencia complementar oficial da trilha.' }];
  const exercises = getTrackExercises(track.slug);
  const moduleSnippetId =
    track.slug === 'html'
      ? 'landing-html'
      : track.slug === 'css' || track.slug === 'tailwind'
        ? 'card-css'
        : track.slug === 'typescript'
          ? 'typed-ts'
          : 'dom-js';

  if (!currentModule) {
    return <p className="text-slate-300">Nenhum modulo disponivel nesta trilha.</p>;
  }

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Trilhas', href: '/trilhas' }, { label: track.title }]} />

      <Card>
        <h1 className="mb-3 text-3xl font-bold text-slate-100 light:text-slate-900">{track.title}</h1>
        <p className="mb-4 text-slate-300">{didactic.overview}</p>
        <div className="grid gap-3 text-sm md:grid-cols-2">
          <p className="rounded-xl border border-slate-600/70 bg-slate-800/60 p-3 text-slate-300 light:border-slate-300 light:bg-slate-50">
            <span className="font-semibold text-slate-100 light:text-slate-900">Para que serve:</span> {didactic.servesFor}
          </p>
          <p className="rounded-xl border border-slate-600/70 bg-slate-800/60 p-3 text-slate-300 light:border-slate-300 light:bg-slate-50">
            <span className="font-semibold text-slate-100 light:text-slate-900">Papel no ecossistema:</span> {didactic.ecosystemRole}
          </p>
        </div>
      </Card>

      <Card>
        <h2 className="mb-3 text-xl font-semibold text-slate-100 light:text-slate-900">Estrutura da trilha</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-200 light:text-slate-800">Pre-requisitos</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
              {track.prerequisites.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-200 light:text-slate-800">Roadmap</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
              {track.roadmap.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-200 light:text-slate-800">Destaques</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
              {didactic.keyHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-200 light:text-slate-800">Boas praticas</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
              {didactic.bestPractices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-200 light:text-slate-800">Erros comuns</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
              {didactic.commonMistakes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-4 rounded-xl border border-blue-400/20 bg-blue-500/10 p-3 text-sm text-blue-200 light:border-blue-200 light:bg-blue-50 light:text-blue-700">
          <span className="font-semibold">Mentalidade da trilha:</span> {didactic.mindset}
        </p>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <StudySidebar track={track} currentModuleId={currentModule.id} onSelectModule={setCurrentModuleId} />
        <StudyModuleContent module={currentModule} />
      </div>

      <Card>
        <h2 className="mb-4 text-xl font-semibold text-slate-100 light:text-slate-900">Apoio didatico do modulo</h2>
        <div className="space-y-4">
          <TipBlock title="Como estudar este modulo">Leia a explicacao principal, execute o exemplo e finalize com o mini desafio.</TipBlock>
          <WarningBlock title="Atencao">Nao avance para o proximo modulo sem praticar ao menos um exemplo proprio.</WarningBlock>
          <TabsBlock
            tabs={[
              { label: 'Conceito', content: currentModule.conceptSummary },
              { label: 'Aplicacao', content: currentModule.content.practicalExample },
              { label: 'Proximo passo', content: currentModule.content.nextStep }
            ]}
          />
          <ComparisonCards
            items={[
              { title: 'Estudo passivo', text: 'Leitura sem pratica ajuda pouco na retencao de longo prazo.' },
              { title: 'Estudo ativo', text: 'Leitura + pratica + revisao melhora fixacao e autonomia tecnica.' }
            ]}
          />
          <SimpleTable
            rows={[
              { concept: 'Objetivo do modulo', useCase: 'Saber exatamente o que dominar antes de seguir.' },
              { concept: 'Mini exercicio', useCase: 'Testar entendimento com aplicacao propria.' }
            ]}
          />
          <Checklist items={['Ler explicacao principal', 'Executar exemplo', 'Fazer mini desafio', 'Marcar modulo como concluido']} />
          <AccordionBlock
            items={[
              { title: 'Quando revisar este modulo?', content: 'Quando surgir duvida em projeto real ou ao iniciar um novo tema relacionado.' },
              { title: 'Como saber se aprendi?', content: 'Quando voce consegue explicar o conceito e aplicar sem copiar passo a passo.' }
            ]}
          />
        </div>
      </Card>

      <Card>
        <h2 className="mb-3 text-xl font-semibold text-slate-100 light:text-slate-900">Continue estudando</h2>
        {nextModule ? (
          <button
            type="button"
            onClick={() => setCurrentModuleId(nextModule.id)}
            className="rounded-xl border border-blue-400/25 bg-blue-500/10 px-4 py-3 text-left text-sm text-blue-200 transition-colors hover:bg-blue-500/20 light:border-blue-200 light:bg-blue-50 light:text-blue-700"
          >
            <span className="block text-xs uppercase tracking-wide">Proximo modulo</span>
            <span className="mt-1 block font-semibold">{nextModule.title}</span>
            <span className="mt-1 block text-xs">{nextModule.description}</span>
          </button>
        ) : (
          <p className="text-sm text-slate-300">Voce concluiu os modulos desta trilha. Revise os exercicios e avance para outra tecnologia.</p>
        )}
      </Card>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-100 light:text-slate-900">Playground do modulo</h2>
        <MiniIDE initialSnippetId={moduleSnippetId} />
      </section>

      <Card>
        <h2 className="mb-2 text-xl font-semibold text-slate-100 light:text-slate-900">Exercicios da trilha com correcao</h2>
        <p className="mb-3 text-sm text-slate-300">
          Resolva os desafios abaixo e abra a correcao para comparar sua abordagem.
        </p>
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
      </Card>

      <Card>
        <h2 className="mb-2 text-xl font-semibold text-slate-100 light:text-slate-900">Fontes e referencias da trilha</h2>
        <p className="mb-3 text-sm text-slate-300">
          Estas sao as fontes usadas como base de referencia. O foco de estudo continua sendo o conteudo didatico da plataforma.
        </p>
        <ul className="space-y-2 text-sm text-slate-300">
          {resolvedReferences.map((source) => (
            <li key={source.url} className="rounded-lg border border-slate-700/70 bg-slate-800/55 px-3 py-2 light:border-slate-200 light:bg-slate-50">
              <a href={source.url} target="_blank" rel="noreferrer" className="font-semibold text-blue-300 transition-colors hover:text-blue-200 light:text-blue-700 light:hover:text-blue-600">
                {source.label}
              </a>
              <p className="mt-1 text-xs text-slate-400">{source.notes}</p>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

