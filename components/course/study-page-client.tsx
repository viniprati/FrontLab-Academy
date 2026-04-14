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
import { TechTrack } from '@/types/course';

export const StudyPageClient = ({ track }: { track: TechTrack }) => {
  const params = useSearchParams();
  const selectedByQuery = params.get('module') ?? track.modules[0]?.id;
  const [currentModuleId, setCurrentModuleId] = useState(selectedByQuery);

  const currentModule = useMemo(
    () => track.modules.find((module) => module.id === currentModuleId) ?? track.modules[0],
    [currentModuleId, track.modules]
  );

  if (!currentModule) {
    return <p className="text-slate-300">Nenhum modulo disponivel nesta trilha.</p>;
  }

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Trilhas', href: '/trilhas' }, { label: track.title }]} />

      <Card>
        <h1 className="mb-2 text-3xl font-bold text-white">{track.title}</h1>
        <p className="text-slate-300">{track.intro}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
          <span>Roadmap:</span>
          {track.roadmap.map((item) => (
            <span key={item} className="rounded-full border border-white/15 px-3 py-1">{item}</span>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <StudySidebar track={track} currentModuleId={currentModule.id} onSelectModule={setCurrentModuleId} />
        <StudyModuleContent module={currentModule} />
      </div>

      <Card>
        <h2 className="mb-3 text-xl font-semibold text-white">Documentacao didatica</h2>
        <div className="space-y-4">
          <TipBlock title="Dica">Quebre o estudo em blocos curtos de 20 a 30 minutos para consolidar melhor.</TipBlock>
          <WarningBlock title="Aviso">Nao avance de tecnologia sem praticar ao menos um mini projeto por modulo chave.</WarningBlock>
          <TabsBlock
            tabs={[
              { label: 'Conceito', content: currentModule.conceptSummary },
              { label: 'Pre-requisito', content: track.prerequisites.join(', ') || 'Nenhum pre-requisito' },
              { label: 'Aplicacao', content: 'Use este modulo para reforcar base e aplicar em projetos reais.' }
            ]}
          />
          <ComparisonCards
            items={[
              { title: 'Aprender lendo', text: 'Bom para referencia rapida, mas com pouca retencao isoladamente.' },
              { title: 'Aprender praticando', text: 'Maior retencao e transferencia para problemas reais.' }
            ]}
          />
          <SimpleTable
            rows={[
              { concept: 'Resumo', useCase: 'Revisar antes de iniciar exercicios.' },
              { concept: 'Erros comuns', useCase: 'Prevenir bugs recorrentes no modulo.' }
            ]}
          />
          <Checklist items={['Ler o modulo', 'Executar exemplo', 'Concluir exercicio', 'Marcar como concluido']} />
          <AccordionBlock
            items={[
              { title: 'Quando revisar este modulo?', content: 'Sempre que surgir duvida em projetos práticos.' },
              { title: 'Como saber se aprendi?', content: 'Quando voce consegue explicar e aplicar sem copiar.' }
            ]}
          />
        </div>
      </Card>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-white">Playground deste modulo</h2>
        <MiniIDE />
      </section>
    </div>
  );
};
