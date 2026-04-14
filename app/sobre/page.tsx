import { Card } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="space-y-5">
      <Card>
        <h1 className="mb-3 text-3xl font-bold text-slate-100 light:text-slate-900">Sobre a plataforma</h1>
        <p className="text-slate-300">
          A Front-Edge Academy foi criada para ensinar Front-End com clareza: trilhas organizadas, exemplos práticos, mini desafios e referencia oficial como apoio.
        </p>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="mb-2 text-xl font-semibold text-slate-100 light:text-slate-900">Proposta didatica</h2>
          <p className="text-slate-300">
            Cada modulo segue uma ordem fixa: objetivo, explicacao, exemplo, aplicacao pratica, erros frequentes e resumo.
          </p>
        </Card>

        <Card>
          <h2 className="mb-2 text-xl font-semibold text-slate-100 light:text-slate-900">Evolucao planejada</h2>
          <p className="text-slate-300">
            Expansao de desafios por nivel, trilhas por objetivo profissional e projetos guiados de consolidacao.
          </p>
        </Card>
      </div>
    </div>
  );
}
