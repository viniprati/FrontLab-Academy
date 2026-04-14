import { BookOpenCheck, ChartLine, Fingerprint, Laptop2 } from 'lucide-react';

import { Card } from '@/components/ui/card';

const benefits = [
  {
    title: 'Didatica por etapas',
    text: 'Cada modulo segue uma ordem clara: conceito, exemplo, pratica e revisao.',
    icon: BookOpenCheck
  },
  {
    title: 'Pratica imediata',
    text: 'Use a mini IDE para testar o que aprendeu sem sair da pagina.',
    icon: Laptop2
  },
  {
    title: 'Progresso de estudo',
    text: 'Acompanhe modulos concluídos e retome rapidamente o ponto onde parou.',
    icon: ChartLine
  },
  {
    title: 'Conteudo organizado',
    text: 'Trilhas, modulos e referencias oficiais separados para facilitar foco no aprendizado.',
    icon: Fingerprint
  }
];

export const BenefitsSection = () => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold text-slate-100 light:text-slate-900">Por que estudar aqui?</h2>
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {benefits.map(({ title, text, icon: Icon }) => (
        <Card key={title} className="h-full">
          <Icon className="mb-4 h-5 w-5 text-blue-300 light:text-blue-600" />
          <h3 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">{title}</h3>
          <p className="text-sm text-slate-300">{text}</p>
        </Card>
      ))}
    </div>
  </section>
);
