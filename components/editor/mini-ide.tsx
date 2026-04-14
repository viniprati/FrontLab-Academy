'use client';

import dynamic from 'next/dynamic';
import { Copy, Play, RotateCcw } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { playgroundSnippets } from '@/data/playgroundSnippets';
import { useMounted } from '@/hooks/useMounted';
import { PlaygroundSnippet } from '@/types/course';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

const htmlShell = (content: string) => `<!doctype html>
<html>
  <head>
    <style>
      body { font-family: ui-sans-serif, system-ui; margin: 24px; color: #e2e8f0; background: #0f172a; }
      .hero { border: 1px solid rgba(148, 163, 184, .3); border-radius: 12px; padding: 20px; background: rgba(15, 23, 42, .75); }
      button { background: #3b82f6; border: 0; color: #fff; border-radius: 10px; padding: 10px 14px; font-weight: 700; cursor: pointer; }
    </style>
  </head>
  <body>${content}</body>
</html>`;

const cssShell = (content: string) => `<!doctype html>
<html>
  <head><style>${content}</style></head>
  <body>
    <div class="card">
      <h2>Card de estudo</h2>
      <p>Resumo do modulo com leitura confortavel.</p>
    </div>
  </body>
</html>`;

const jsShell = (content: string) => `<!doctype html>
<html>
  <body style="font-family: ui-sans-serif, system-ui; background: #0f172a; color: #e2e8f0; padding: 20px;">
    <button>Executar acao</button>
    <p id="output">Aguardando clique...</p>
    <script>${content}</script>
  </body>
</html>`;

const tsToJs = (code: string) =>
  code
    .replace(/type\s+[\s\S]*?;\n/g, '')
    .replace(/interface\s+[\s\S]*?}\n/g, '')
    .replace(/:\s*[A-Za-z_][A-Za-z0-9_<>, \[\]\|]*/g, '')
    .replace(/<[^>]+>(?=\()/g, '');

const getPreview = (snippet: PlaygroundSnippet, code: string) => {
  if (snippet.language === 'html') return htmlShell(code);
  if (snippet.language === 'css') return cssShell(code);
  if (snippet.language === 'javascript') return jsShell(code);
  return jsShell(tsToJs(code));
};

const getSnippetById = (id?: string) => playgroundSnippets.find((snippet) => snippet.id === id) ?? playgroundSnippets[0];

export const MiniIDE = ({ initialSnippetId }: { initialSnippetId?: string }) => {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  const [selectedId, setSelectedId] = useState(getSnippetById(initialSnippetId).id);
  const selectedSnippet = useMemo(
    () => playgroundSnippets.find((snippet) => snippet.id === selectedId) ?? playgroundSnippets[0],
    [selectedId]
  );

  const [code, setCode] = useState(selectedSnippet.code);
  const [preview, setPreview] = useState(getPreview(selectedSnippet, selectedSnippet.code));
  const [error, setError] = useState<string | null>(null);

  const onSnippetChange = (id: string) => {
    const next = playgroundSnippets.find((snippet) => snippet.id === id);
    if (!next) return;
    setSelectedId(next.id);
    setCode(next.code);
    setPreview(getPreview(next, next.code));
    setError(null);
  };

  const run = () => {
    try {
      setPreview(getPreview(selectedSnippet, code));
      setError(null);
    } catch {
      setError('Nao foi possivel gerar o preview. Revise o codigo e tente novamente.');
    }
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setError('Codigo copiado para a area de transferencia.');
    } catch {
      setError('Falha ao copiar codigo.');
    }
  };

  const reset = () => {
    setCode(selectedSnippet.code);
    setPreview(getPreview(selectedSnippet, selectedSnippet.code));
    setError(null);
  };

  useEffect(() => {
    const next = getSnippetById(initialSnippetId);
    setSelectedId(next.id);
    setCode(next.code);
    setPreview(getPreview(next, next.code));
    setError(null);
  }, [initialSnippetId]);

  const editorTheme = !mounted || resolvedTheme === 'dark' ? 'vs-dark' : 'light';

  return (
    <Card className="space-y-4 p-0">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/70 p-4 light:border-slate-200">
        <div>
          <h3 className="text-lg font-semibold text-slate-100 light:text-slate-900">Mini IDE integrada</h3>
          <p className="text-sm text-slate-300">{selectedSnippet.description}</p>
        </div>

        <select
          value={selectedSnippet.id}
          onChange={(event) => onSnippetChange(event.target.value)}
          className="rounded-lg border border-slate-600/70 bg-bg-elevated px-3 py-2 text-sm text-slate-100 transition-colors focus:border-slate-500 focus:outline-none light:border-slate-300 light:bg-white light:text-slate-700"
        >
          {playgroundSnippets.map((snippet) => (
            <option key={snippet.id} value={snippet.id}>
              {snippet.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 p-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-slate-700/70 light:border-slate-200">
          <Editor
            height="380px"
            language={selectedSnippet.language === 'javascript' ? 'javascript' : selectedSnippet.language}
            value={code}
            onChange={(value) => setCode(value ?? '')}
            theme={editorTheme}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              padding: { top: 14 },
              smoothScrolling: true,
              wordWrap: 'on'
            }}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-700/70 bg-slate-900/80 light:border-slate-200 light:bg-slate-50">
          <iframe title="preview" srcDoc={preview} className="h-[380px] w-full" sandbox="allow-scripts" />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-slate-700/70 p-4 light:border-slate-200">
        <Button onClick={run} className="gap-2">
          <Play className="h-4 w-4" /> Executar
        </Button>
        <Button onClick={reset} variant="secondary" className="gap-2">
          <RotateCcw className="h-4 w-4" /> Reset
        </Button>
        <Button onClick={copy} variant="ghost" className="gap-2">
          <Copy className="h-4 w-4" /> Copiar
        </Button>

        {error && <p className="ml-auto text-sm text-blue-300 light:text-blue-700">{error}</p>}
      </div>
    </Card>
  );
};
