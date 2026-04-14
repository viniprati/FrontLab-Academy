'use client';

import dynamic from 'next/dynamic';
import { Copy, Play, RotateCcw } from 'lucide-react';
import { useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { playgroundSnippets } from '@/data/playgroundSnippets';
import { PlaygroundSnippet } from '@/types/course';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

const htmlShell = (content: string) => `<!doctype html>
<html>
  <head>
    <style>
      body { font-family: ui-sans-serif, system-ui; margin: 24px; color: #e2e8f0; background: #020617; }
      .hero { border: 1px solid rgba(148, 163, 184, .2); border-radius: 12px; padding: 20px; background: rgba(15, 23, 42, .8); }
      button { background: #22d3ee; border: 0; color: #0f172a; border-radius: 10px; padding: 10px 14px; font-weight: 700; cursor: pointer; }
    </style>
  </head>
  <body>${content}</body>
</html>`;

const cssShell = (content: string) => `<!doctype html>
<html>
  <head><style>${content}</style></head>
  <body>
    <div class="card">
      <h2>Card de exemplo</h2>
      <p>Visual de estudo com foco em UI premium.</p>
    </div>
  </body>
</html>`;

const jsShell = (content: string) => `<!doctype html>
<html>
  <body style="font-family: ui-sans-serif, system-ui; background: #020617; color: #e2e8f0; padding: 20px;">
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

export const MiniIDE = () => {
  const [selectedId, setSelectedId] = useState(playgroundSnippets[0].id);
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

  return (
    <Card className="space-y-4 p-0">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 p-4">
        <div>
          <h3 className="text-lg font-semibold text-white">Mini IDE integrada</h3>
          <p className="text-sm text-slate-300">{selectedSnippet.description}</p>
        </div>

        <select
          value={selectedSnippet.id}
          onChange={(event) => onSnippetChange(event.target.value)}
          className="rounded-lg border border-white/15 bg-bg-elevated px-3 py-2 text-sm text-slate-100"
        >
          {playgroundSnippets.map((snippet) => (
            <option key={snippet.id} value={snippet.id}>
              {snippet.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 p-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-white/10">
          <Editor
            height="380px"
            language={selectedSnippet.language === 'javascript' ? 'javascript' : selectedSnippet.language}
            value={code}
            onChange={(value) => setCode(value ?? '')}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              padding: { top: 14 },
              smoothScrolling: true,
              wordWrap: 'on'
            }}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <iframe title="preview" srcDoc={preview} className="h-[380px] w-full" sandbox="allow-scripts" />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-white/10 p-4">
        <Button onClick={run} className="gap-2">
          <Play className="h-4 w-4" /> Executar
        </Button>
        <Button onClick={reset} variant="secondary" className="gap-2">
          <RotateCcw className="h-4 w-4" /> Reset
        </Button>
        <Button onClick={copy} variant="ghost" className="gap-2">
          <Copy className="h-4 w-4" /> Copiar
        </Button>

        {error && <p className="ml-auto text-sm text-cyan-200">{error}</p>}
      </div>
    </Card>
  );
};
