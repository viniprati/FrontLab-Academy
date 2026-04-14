import { Card } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="space-y-5">
      <Card>
        <h1 className="mb-2 text-3xl font-bold text-white">Sobre a plataforma</h1>
        <p className="text-slate-300">
          A Front-Edge Academy foi desenhada para unir experiencia de curso, documentacao tecnica moderna e playground interativo em um unico fluxo.
        </p>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="mb-2 text-xl font-semibold text-white">Visao de produto</h2>
          <p className="text-slate-300">
            Aprendizado com trilhas progressivas, foco em pratica e base preparada para integrar backend, CMS e analytics no futuro.
          </p>
        </Card>

        <Card>
          <h2 className="mb-2 text-xl font-semibold text-white">Evolucao planejada</h2>
          <p className="text-slate-300">
            Quizzes adaptativos, desafios por modulo, ranking de progresso e trilhas personalizadas por perfil de estudante.
          </p>
        </Card>
      </div>
    </div>
  );
}
