'use client';

import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ExternalLink, Pause, Play, Square } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { getGeneratedModuleDidacticContent, moduleDidacticContent } from '@/data/didactic-content';
import { CourseModule } from '@/types/course';
import { cn } from '@/lib/utils';

const keywordRegex = /^(const|let|var|function|return|if|else|for|while|import|from|export|type|interface|await|async|class|new|try|catch|finally|switch|case|break|continue)$/;

type SectionNarration = {
  id: string;
  title: string;
  text: string;
};

const tokenizeLine = (line: string) => {
  const tokenRegex = /(\/\/.*$|"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|`[^`\\]*(?:\\.[^`\\]*)*`|\b(?:const|let|var|function|return|if|else|for|while|import|from|export|type|interface|await|async|class|new|try|catch|finally|switch|case|break|continue)\b|\b\d+(?:\.\d+)?\b)/g;
  const result: { text: string; kind: 'plain' | 'comment' | 'string' | 'keyword' | 'number' }[] = [];
  let lastIndex = 0;

  for (const match of line.matchAll(tokenRegex)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      result.push({ text: line.slice(lastIndex, index), kind: 'plain' });
    }

    const token = match[0];
    if (token.startsWith('//')) {
      result.push({ text: token, kind: 'comment' });
    } else if ((token.startsWith('"') && token.endsWith('"')) || (token.startsWith("'") && token.endsWith("'")) || (token.startsWith('`') && token.endsWith('`'))) {
      result.push({ text: token, kind: 'string' });
    } else if (keywordRegex.test(token)) {
      result.push({ text: token, kind: 'keyword' });
    } else {
      result.push({ text: token, kind: 'number' });
    }

    lastIndex = index + token.length;
  }

  if (lastIndex < line.length) {
    result.push({ text: line.slice(lastIndex), kind: 'plain' });
  }

  return result;
};

const tokenClass = (kind: 'plain' | 'comment' | 'string' | 'keyword' | 'number') => {
  if (kind === 'comment') return 'text-emerald-300 light:text-emerald-700';
  if (kind === 'string') return 'text-amber-300 light:text-amber-700';
  if (kind === 'keyword') return 'text-violet-300 light:text-indigo-700';
  if (kind === 'number') return 'text-sky-300 light:text-sky-700';
  return 'text-slate-200 light:text-slate-700';
};

const CodeBlock = ({ code }: { code: string }) => {
  const lines = code.split('\n');

  return (
    <pre
      aria-label="Bloco de codigo"
      className="overflow-x-auto rounded-xl border border-slate-700/70 bg-slate-950/70 p-0 text-sm light:border-slate-200 light:bg-white"
    >
      <code className="block">
        {lines.map((line, index) => (
          <div key={`${index}-${line}`} className="grid grid-cols-[44px_1fr] border-b border-slate-800/70 last:border-b-0 light:border-slate-100">
            <span aria-hidden="true" className="select-none px-3 py-1.5 text-right text-xs text-slate-500 light:text-slate-400">
              {index + 1}
            </span>
            <span className="px-3 py-1.5">
              {line.length === 0 ? (
                <span className="text-slate-500"> </span>
              ) : (
                tokenizeLine(line).map((token, tokenIndex) => (
                  <Fragment key={`${tokenIndex}-${token.text}`}>
                    <span className={tokenClass(token.kind)}>{token.text}</span>
                  </Fragment>
                ))
              )}
            </span>
          </div>
        ))}
      </code>
    </pre>
  );
};

const normalizeSpeechText = (value: string) =>
  value
    .replace(/\s+/g, ' ')
    .replace(/\bTS\b/g, 'TypeScript')
    .trim();

export const StudyModuleContent = ({ module }: { module: CourseModule }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const speakingSectionIndex = useRef(0);
  const isCancellingNarration = useRef(false);

  const [speechSupported, setSpeechSupported] = useState(false);
  const [isNarrating, setIsNarrating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [narrationRate, setNarrationRate] = useState(1);
  const [activeNarrationId, setActiveNarrationId] = useState<string | null>(null);

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
  const takeaways = useMemo(
    () => module.content.keyTakeaways ?? ['Entender o conceito central', 'Aplicar em exemplo pratico', 'Revisar erros frequentes'],
    [module.content.keyTakeaways]
  );

  const narrationSections = useMemo<SectionNarration[]>(
    () => [
      {
        id: 'overview',
        title: 'Visao geral do modulo',
        text: `${module.description}. Objetivo do modulo: ${objective}`
      },
      { id: 'explanation', title: 'Explicacao didatica', text: `${explanation} ${deepDive}` },
      { id: 'examples', title: 'Exemplos de codigo', text: `Exemplo simples. ${simpleExample}. Exemplo comentado. ${commentedExample}` },
      { id: 'practice', title: 'Aplicacao pratica', text: practicalApplication },
      { id: 'mistakes', title: 'Erros frequentes', text: mistakes.join('. ') },
      { id: 'tips', title: 'Dicas importantes', text: importantTips.join('. ') },
      { id: 'exercise', title: 'Mini exercicio', text: exercise },
      { id: 'summary', title: 'Resumo final', text: `${summary}. Pontos-chave: ${takeaways.join('. ')}. Proximo passo: ${nextStep}` }
    ],
    [commentedExample, deepDive, exercise, explanation, importantTips, mistakes, module.description, nextStep, objective, practicalApplication, simpleExample, summary, takeaways]
  );

  const stopNarration = useCallback((clearActive = true) => {
    if (typeof window === 'undefined') return;

    isCancellingNarration.current = true;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsNarrating(false);
    setIsPaused(false);
    speakingSectionIndex.current = 0;
    if (clearActive) setActiveNarrationId(null);

    window.setTimeout(() => {
      isCancellingNarration.current = false;
    }, 80);
  }, []);

  const speakSection = useCallback(
    (index: number) => {
      if (typeof window === 'undefined') return;
      const run = (currentIndex: number) => {
        if (currentIndex >= narrationSections.length) {
          stopNarration();
          return;
        }

        speakingSectionIndex.current = currentIndex;
        const section = narrationSections[currentIndex];
        const utterance = new SpeechSynthesisUtterance(`${section.title}. ${normalizeSpeechText(section.text)}`);
        utterance.lang = 'pt-BR';
        utterance.rate = narrationRate;

        utterance.onstart = () => {
          setActiveNarrationId(section.id);
        };

        utterance.onend = () => {
          if (isCancellingNarration.current) return;
          run(currentIndex + 1);
        };

        utterance.onerror = () => {
          stopNarration();
        };

        window.speechSynthesis.speak(utterance);
      };

      run(index);
    },
    [narrationRate, narrationSections, stopNarration]
  );

  const startNarration = useCallback(() => {
    if (typeof window === 'undefined' || !speechSupported) return;

    stopNarration(false);
    setIsNarrating(true);
    setIsPaused(false);
    speakSection(0);
  }, [speakSection, speechSupported, stopNarration]);

  const togglePauseNarration = useCallback(() => {
    if (typeof window === 'undefined' || !speechSupported || !isNarrating) return;

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      return;
    }

    window.speechSynthesis.pause();
    setIsPaused(true);
  }, [isNarrating, isPaused, speechSupported]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setSpeechSupported('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window);
  }, []);

  useEffect(() => {
    titleRef.current?.focus();
    stopNarration();
  }, [module.id, stopNarration]);

  useEffect(() => () => stopNarration(), [stopNarration]);

  useEffect(() => {
    if (!speechSupported) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (!event.altKey || event.key.toLowerCase() !== 'r') return;
      event.preventDefault();

      if (!isNarrating) {
        startNarration();
        return;
      }

      togglePauseNarration();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isNarrating, speechSupported, startNarration, togglePauseNarration]);

  const sectionHighlight = (sectionId: string) =>
    activeNarrationId === sectionId ? 'ring-2 ring-blue-300/70 light:ring-blue-500/50' : undefined;

  return (
    <section id="module-main-content" aria-labelledby="module-title" className="space-y-4">
      <Card className={sectionHighlight('overview')}>
        <h2
          id="module-title"
          ref={titleRef}
          tabIndex={-1}
          className="mb-2 text-2xl font-bold text-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70 light:text-slate-900"
        >
          {module.title}
        </h2>
        <p className="mb-3 text-slate-300">{module.description}</p>
        <p className="rounded-lg border border-blue-400/20 bg-blue-500/10 p-3 text-sm text-blue-200 light:border-blue-200 light:bg-blue-50 light:text-blue-700">
          <span className="font-semibold">Objetivo do modulo:</span> {objective}
        </p>
      </Card>

      <Card>
        <h3 className="mb-3 text-lg font-semibold text-slate-100 light:text-slate-900">Apoio audiovisual</h3>
        <p className="mb-3 text-sm text-slate-300">
          Use a leitura em voz para acompanhar o conteudo com destaque da secao atual. Atalho rapido: <span className="font-semibold">Alt + R</span>.
        </p>

        {speechSupported ? (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={startNarration}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600/70 bg-slate-800/65 px-3 py-2 text-sm font-semibold text-slate-100 transition-colors hover:bg-slate-700/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 light:border-slate-300 light:bg-white light:text-slate-700 light:hover:bg-slate-100"
              >
                <Play className="h-4 w-4" aria-hidden="true" />
                Ler modulo
              </button>

              <button
                type="button"
                onClick={togglePauseNarration}
                disabled={!isNarrating}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600/70 bg-slate-800/65 px-3 py-2 text-sm font-semibold text-slate-100 transition-colors hover:bg-slate-700/70 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 light:border-slate-300 light:bg-white light:text-slate-700 light:hover:bg-slate-100"
              >
                <Pause className="h-4 w-4" aria-hidden="true" />
                {isPaused ? 'Retomar leitura' : 'Pausar leitura'}
              </button>

              <button
                type="button"
                onClick={() => stopNarration()}
                disabled={!isNarrating}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600/70 bg-slate-800/65 px-3 py-2 text-sm font-semibold text-slate-100 transition-colors hover:bg-slate-700/70 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 light:border-slate-300 light:bg-white light:text-slate-700 light:hover:bg-slate-100"
              >
                <Square className="h-4 w-4" aria-hidden="true" />
                Parar leitura
              </button>
            </div>

            <label className="flex w-fit items-center gap-2 text-sm text-slate-300 light:text-slate-700">
              Velocidade:
              <select
                value={narrationRate}
                onChange={(event) => setNarrationRate(Number(event.target.value))}
                className="rounded-lg border border-slate-600/70 bg-slate-800/65 px-2 py-1.5 text-sm text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 light:border-slate-300 light:bg-white light:text-slate-700"
              >
                <option value={0.85}>0.85x</option>
                <option value={1}>1x</option>
                <option value={1.15}>1.15x</option>
                <option value={1.3}>1.3x</option>
              </select>
            </label>

            <p className="text-xs text-slate-400" role="status" aria-live="polite">
              {isNarrating
                ? isPaused
                  ? 'Leitura pausada.'
                  : 'Leitura em andamento com destaque visual da secao atual.'
                : 'Leitura parada.'}
            </p>
          </div>
        ) : (
          <p className="rounded-lg border border-amber-400/20 bg-amber-500/10 p-3 text-sm text-amber-200 light:border-amber-200 light:bg-amber-50 light:text-amber-700">
            Este navegador nao suporta leitura em voz nativa. A transcricao completa segue disponivel abaixo.
          </p>
        )}
      </Card>

      <Card className={sectionHighlight('explanation')}>
        <h3 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">Explicacao didatica</h3>
        <p className="text-slate-300">{explanation}</p>
        <p className="mt-3 text-sm text-slate-300">{deepDive}</p>
      </Card>

      <Card className={sectionHighlight('examples')}>
        <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-slate-300 light:text-slate-700">Exemplos</h3>
        <p className="mb-3 text-sm text-slate-300">
          Primeiro veja a versao enxuta para entender a ideia central, depois compare com a versao comentada.
        </p>
        <div className="space-y-3">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">Simples</p>
            <CodeBlock code={simpleExample} />
          </div>
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">Comentado</p>
            <CodeBlock code={commentedExample} />
          </div>
        </div>
      </Card>

      <Card className={sectionHighlight('practice')}>
        <h3 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">Aplicacao pratica</h3>
        <p className="text-slate-300">{practicalApplication}</p>
      </Card>

      <Card className={sectionHighlight('mistakes')}>
        <h3 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">Erros frequentes</h3>
        <ul className="list-disc space-y-1 pl-5 text-slate-300">
          {mistakes.map((mistake) => (
            <li key={mistake}>{mistake}</li>
          ))}
        </ul>
      </Card>

      <Card className={sectionHighlight('tips')}>
        <h3 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">Dicas importantes</h3>
        <ul className="list-disc space-y-1 pl-5 text-slate-300">
          {importantTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </Card>

      <Card className={sectionHighlight('exercise')}>
        <h3 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">Mini exercicio ou desafio</h3>
        <p className="text-slate-300">{exercise}</p>
      </Card>

      <Card className={sectionHighlight('summary')}>
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
        <h3 className="mb-3 text-lg font-semibold text-slate-100 light:text-slate-900">Transcricao completa do modulo</h3>
        <p className="mb-3 text-sm text-slate-300">Versao textual para leitura silenciosa, revisao rapida e apoio a diferentes estilos de aprendizagem.</p>
        <div className="space-y-3">
          {narrationSections.map((section) => (
            <details key={section.id} className={cn('rounded-lg border border-slate-700/70 bg-slate-800/55 p-3 light:border-slate-200 light:bg-slate-50', activeNarrationId === section.id && 'ring-2 ring-blue-300/70 light:ring-blue-500/50')}>
              <summary className="cursor-pointer text-sm font-semibold text-slate-100 light:text-slate-900">{section.title}</summary>
              <p className="mt-2 text-sm text-slate-300 light:text-slate-700">{section.text}</p>
            </details>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">{officialReferenceLabel}</h3>
        <a
          href={module.officialReference}
          target="_blank"
          rel="noreferrer"
          aria-label={`Acessar referencia oficial: ${module.title}. Abre em nova guia`}
          className="inline-flex items-center gap-2 text-sm text-blue-300 transition-colors hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300/70 light:text-blue-700 light:hover:text-blue-600"
        >
          Acessar documentacao oficial <ExternalLink aria-hidden="true" className="h-4 w-4" />
        </a>
      </Card>
    </section>
  );
};
