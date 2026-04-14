'use client';

import { ReactNode, useState } from 'react';

import { Card } from '@/components/ui/card';

export const TipBlock = ({ title, children }: { title: string; children: ReactNode }) => (
  <Card className="border-cyan-300/30 bg-cyan-300/10">
    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-100">{title}</h4>
    <div className="text-sm text-cyan-50">{children}</div>
  </Card>
);

export const WarningBlock = ({ title, children }: { title: string; children: ReactNode }) => (
  <Card className="border-amber-300/30 bg-amber-300/10">
    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-100">{title}</h4>
    <div className="text-sm text-amber-50">{children}</div>
  </Card>
);

export const CodeBlock = ({ code }: { code: string }) => (
  <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-sm text-cyan-100">
    <code>{code}</code>
  </pre>
);

export const Checklist = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 text-sm text-slate-300">
    {items.map((item) => (
      <li key={item} className="flex items-center gap-2">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-cyan-300/40 text-xs text-cyan-200">✓</span>
        {item}
      </li>
    ))}
  </ul>
);

export const SimpleTable = ({ rows }: { rows: { concept: string; useCase: string }[] }) => (
  <div className="overflow-x-auto rounded-xl border border-white/10">
    <table className="min-w-full text-left text-sm">
      <thead className="bg-white/5 text-slate-200">
        <tr>
          <th className="px-3 py-2">Conceito</th>
          <th className="px-3 py-2">Quando usar</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.concept} className="border-t border-white/10 text-slate-300">
            <td className="px-3 py-2">{row.concept}</td>
            <td className="px-3 py-2">{row.useCase}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const ComparisonCards = ({ items }: { items: { title: string; text: string }[] }) => (
  <div className="grid gap-3 md:grid-cols-2">
    {items.map((item) => (
      <Card key={item.title}>
        <h4 className="mb-2 font-semibold text-white">{item.title}</h4>
        <p className="text-sm text-slate-300">{item.text}</p>
      </Card>
    ))}
  </div>
);

export const AccordionBlock = ({ items }: { items: { title: string; content: string }[] }) => {
  const [open, setOpen] = useState(items[0]?.title);

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <Card key={item.title} className="p-0">
          <button
            type="button"
            onClick={() => setOpen((prev) => (prev === item.title ? '' : item.title))}
            className="w-full px-4 py-3 text-left text-sm font-semibold text-white"
          >
            {item.title}
          </button>
          {open === item.title && <p className="px-4 pb-4 text-sm text-slate-300">{item.content}</p>}
        </Card>
      ))}
    </div>
  );
};

export const TabsBlock = ({ tabs }: { tabs: { label: string; content: string }[] }) => {
  const [current, setCurrent] = useState(tabs[0]?.label);

  const active = tabs.find((tab) => tab.label === current) ?? tabs[0];

  if (!active) return null;

  return (
    <Card>
      <div className="mb-3 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setCurrent(tab.label)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
              tab.label === current ? 'bg-cyan-300/20 text-cyan-100' : 'bg-white/5 text-slate-300'
            }`}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="text-sm text-slate-300">{active.content}</p>
    </Card>
  );
};
