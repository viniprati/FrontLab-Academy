import {
  Bell,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Circle,
  Code2,
  Compass,
  Flame,
  LayoutDashboard,
  Lock,
  Rocket,
  Search,
  Settings,
  Shield,
  Target,
  Trophy,
  User,
  Zap
} from 'lucide-react';
import { FaCss3Alt, FaHtml5, FaJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const stats = [
  { value: '+12K', label: 'Estudantes' },
  { value: '48', label: 'Módulos' },
  { value: '120+', label: 'Aulas' },
  { value: '85%', label: 'Taxa de conclusão' }
];

const tracks = [
  { name: 'HTML', icon: FaHtml5, color: '#F97316', modules: '12 módulos', hours: '8 horas', progress: 16 },
  { name: 'CSS', icon: FaCss3Alt, color: '#3B82F6', modules: '16 módulos', hours: '12 horas', progress: 31 },
  { name: 'JavaScript', icon: FaJs, color: '#FACC15', modules: '24 módulos', hours: '18 horas', progress: 50 },
  { name: 'TypeScript', icon: SiTypescript, color: '#2563EB', modules: '18 módulos', hours: '15 horas', progress: 22 }
];

const menu = ['Início', 'Trilhas', 'Roadmap', 'Exercícios', 'Mini IDE', 'Projetos', 'Conquistas', 'Perfil', 'Configurações'];

export default function HomePage() {
  return (
    <div className="space-y-4 text-white">
      <section className="overflow-hidden rounded-2xl border border-[#1D294D] bg-[#0B1023] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.45)] lg:p-6">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1D294D] pb-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-[#10172D] p-2 shadow-[0_0_20px_rgba(123,92,255,0.35)]">
              <Code2 className="h-5 w-5 text-[#7B5CFF]" />
            </div>
            <div>
              <p className="font-extrabold tracking-wide">Front-Edge</p>
              <p className="text-xs tracking-[0.25em] text-[#AAB3D1]">ACADEMY</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-[#AAB3D1] lg:flex">
            <span>Trilhas</span><span>Roadmap</span><span>Exercícios</span><span>Mini IDE</span><span>Sobre</span>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-lg border border-[#1D294D] px-4 py-2 text-sm text-[#FFFFFF] transition duration-300 hover:border-[#7B5CFF] hover:shadow-[0_0_20px_rgba(123,92,255,0.35)]">Entrar</button>
            <button className="rounded-lg bg-[#7B5CFF] px-4 py-2 text-sm font-medium transition duration-300 hover:bg-[#947BFF]">Começar agora</button>
          </div>
        </header>

        <div className="grid gap-8 py-8 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-[#1D294D] bg-[#10172D] px-4 py-2 text-xs text-[#AAB3D1]">Aprenda. Pratique. Evolua.</span>
            <h1 className="max-w-xl text-4xl font-extrabold leading-tight sm:text-5xl">
              Aprenda <span className="text-[#7B5CFF]">Front-End</span> do zero ao avançado
            </h1>
            <p className="max-w-lg text-lg text-[#AAB3D1]">Trilhas didáticas, prática guiada, projetos reais e uma IDE integrada para você evoluir de verdade.</p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-lg bg-[#7B5CFF] px-5 py-3 font-medium transition duration-300 hover:bg-[#947BFF]">Começar agora</button>
              <button className="rounded-lg border border-[#1D294D] px-5 py-3 text-[#AAB3D1] transition duration-300 hover:border-[#7B5CFF] hover:text-white">Ver trilhas</button>
            </div>
          </div>
          <div className="relative rounded-xl border border-[#1D294D] bg-[#10172D] p-4">
            <div className="mb-4 flex items-center justify-between border-b border-[#1D294D] pb-3 text-xs text-[#6E7AA5]"><span>index.html</span><span>style.css</span><span>script.js</span></div>
            <pre className="overflow-x-auto text-sm text-[#AAB3D1]">{`<div class="container">
  <h1>Bem-vindo à Front-Edge</h1>
</div>`}</pre>
            <div className="absolute -right-4 top-10 grid gap-3">
              {[{ I: FaHtml5, c: '#F97316', t: 'HTML' }, { I: FaCss3Alt, c: '#3B82F6', t: 'CSS' }, { I: FaJs, c: '#FACC15', t: 'JS' }, { I: SiTypescript, c: '#2563EB', t: 'TS' }].map(({ I, c, t }) => (
                <div key={t} className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#1D294D]" style={{ backgroundColor: c, boxShadow: `0 0 20px ${c}66` }}><I className="h-6 w-6 text-white" /></div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-xl border border-[#1D294D] bg-[#10172D] p-5 text-center">
              <p className="text-3xl font-bold">{item.value}</p><p className="text-sm text-[#AAB3D1]">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-7">
          <h2 className="mb-4 text-2xl font-bold">Por que estudar na Front-Edge?</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { t: 'Aprendizado estruturado', d: 'Trilhas organizadas do básico ao avançado.', i: BookOpen, c: '#7B5CFF' },
              { t: 'Prática constante', d: 'Exercícios práticos em todos os módulos.', i: Target, c: '#22D3EE' },
              { t: 'Progresso real', d: 'Acompanhe sua evolução com estatísticas.', i: Rocket, c: '#FACC15' },
              { t: 'Projetos reais', d: 'Aplique o que aprende em projetos práticos.', i: Compass, c: '#3B82F6' }
            ].map((b) => (
              <article key={b.t} className="rounded-xl border border-[#1D294D] bg-[#10172D] p-5 transition duration-300 hover:bg-[#161F3B] hover:shadow-[0_0_24px_rgba(59,130,246,0.25)]">
                <b.i className="mb-4 h-7 w-7" style={{ color: b.c }} />
                <h3 className="font-semibold">{b.t}</h3>
                <p className="mt-2 text-sm text-[#AAB3D1]">{b.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[280px_1fr_420px]">
        <aside className="rounded-2xl border border-[#1D294D] bg-[#0B1023] p-4">
          <div className="mb-5 flex items-center gap-3"><LayoutDashboard className="h-5 w-5 text-[#7B5CFF]" /><p className="font-bold">Dashboard</p></div>
          <div className="space-y-2">{menu.map((item, i) => <div key={item} className={`rounded-lg px-3 py-2 text-sm ${i === 0 ? 'bg-[#7B5CFF] text-white' : 'text-[#AAB3D1] hover:bg-[#161F3B]'}`}>{item}</div>)}</div>
        </aside>

        <div className="space-y-4">
          <div className="grid gap-4 xl:grid-cols-2">
            <article className="rounded-xl border border-[#1D294D] bg-[#10172D] p-5">
              <h3 className="mb-3 font-semibold">Seu progresso geral</h3>
              <div className="flex items-center gap-5"><div className="grid h-24 w-24 place-content-center rounded-full border-4 border-[#7B5CFF] text-xl font-bold">68%</div><p className="text-sm text-[#AAB3D1]">Trilhas concluídas: 2<br />Módulos concluídos: 23/48</p></div>
            </article>
            <article className="rounded-xl border border-[#1D294D] bg-[#10172D] p-5"><h3 className="font-semibold">Continue de onde parou</h3><p className="mt-2 text-sm text-[#AAB3D1]">Módulo 7 • Funções</p><div className="mt-4 h-2 rounded-full bg-[#0B1023]"><div className="h-full w-[60%] rounded-full bg-[#7B5CFF] transition-all duration-300" /></div></article>
          </div>

          <article className="rounded-xl border border-[#1D294D] bg-[#10172D] p-5">
            <div className="mb-3 flex items-center justify-between"><h3 className="font-semibold">Suas trilhas</h3><span className="text-sm text-[#7B5CFF]">Ver todas</span></div>
            <div className="grid gap-3 md:grid-cols-2">{tracks.map((t) => <div key={t.name} className="rounded-lg border border-[#1D294D] bg-[#0B1023] p-4"><p className="font-medium">{t.name}</p><p className="text-sm text-[#AAB3D1]">{t.modules}</p><div className="mt-2 h-1.5 rounded-full bg-[#10172D]"><div className="h-full rounded-full bg-[#7B5CFF]" style={{ width: `${t.progress}%` }} /></div></div>)}</div>
          </article>
        </div>

        <div className="space-y-4">
          <article className="rounded-xl border border-[#1D294D] bg-[#10172D] p-5">
            <div className="mb-4 flex items-center justify-between"><h3 className="text-2xl font-bold">Trilhas</h3><div className="flex items-center rounded-lg border border-[#1D294D] bg-[#0B1023] px-3 py-2 text-sm text-[#6E7AA5]"><Search className="mr-2 h-4 w-4" />Buscar trilha...</div></div>
            <div className="space-y-3">{tracks.map((t) => <div key={t.name} className="flex flex-wrap items-center gap-3 rounded-lg border border-[#1D294D] bg-[#0B1023] p-3"><div className="grid h-11 w-11 place-content-center rounded-lg" style={{ backgroundColor: t.color }}><t.icon className="h-6 w-6 text-white" /></div><div className="min-w-[140px] flex-1"><p className="font-semibold">{t.name}</p><p className="text-xs text-[#AAB3D1]">{t.modules} • {t.hours}</p></div><p className="text-sm text-[#AAB3D1]">{t.progress}%</p><button className="rounded-md bg-[#7B5CFF] px-3 py-1.5 text-sm hover:bg-[#947BFF]">Continuar</button></div>)}</div>
          </article>

          <article className="rounded-xl border border-[#1D294D] bg-[#10172D] p-4">
            <h3 className="mb-3 font-semibold">Mini IDE</h3>
            <div className="grid gap-3 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-lg border border-[#1D294D] bg-[#0B1023] p-3">
                <div className="mb-2 flex gap-3 border-b border-[#1D294D] pb-2 text-xs text-[#AAB3D1]"><span>index.html</span><span>style.css</span><span>script.js</span></div>
                <pre className="text-xs text-[#6E7AA5]">{`<h1>Olá, mundo!</h1>`}</pre>
              </div>
              <div className="rounded-lg border border-[#1D294D] bg-white p-4 text-black"><h4 className="text-2xl font-bold">Olá, mundo! ??</h4><p className="mt-2">Bem-vindo a Mini IDE da Front-Edge Academy.</p><div className="mt-3 h-1 w-16 bg-[#7B5CFF]" /></div>
            </div>
          </article>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-2xl border border-[#1D294D] bg-[#0B1023] p-5">
          <h3 className="text-2xl font-bold">Roadmap</h3>
          <div className="mt-6 grid grid-cols-4 gap-2">{['Fundamentos', 'Interatividade', 'Avançado', 'Projetos'].map((s, i) => <div key={s} className="text-center"><div className={`mx-auto grid h-9 w-9 place-content-center rounded-full border ${i < 2 ? 'border-[#22C55E] bg-[#22C55E] text-[#060816]' : i === 2 ? 'border-[#FACC15] bg-[#FACC15] text-[#060816]' : 'border-[#1D294D] bg-[#10172D]'}`}>{i + 1}</div><p className="mt-2 text-sm font-medium">{s}</p></div>)}</div>
        </article>

        <article className="rounded-2xl border border-[#1D294D] bg-[#0B1023] p-5">
          <h3 className="text-2xl font-bold">Perfil</h3>
          <div className="mt-4 flex items-center gap-4"><div className="grid h-14 w-14 place-content-center rounded-full bg-[#7B5CFF] text-2xl font-bold">J</div><div><p className="font-semibold">João Silva</p><p className="text-sm text-[#AAB3D1]">Desenvolvedor Front-End em formação</p></div></div>
          <div className="mt-4 grid gap-2">{tracks.map((t) => <div key={t.name}><div className="mb-1 flex justify-between text-sm"><span>{t.name}</span><span className="text-[#AAB3D1]">{t.progress}%</span></div><div className="h-1.5 rounded-full bg-[#10172D]"><div className="h-full rounded-full bg-[#7B5CFF]" style={{ width: `${t.progress}%` }} /></div></div>)}</div>
        </article>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-2xl border border-[#1D294D] bg-[#0B1023] p-5">
          <div className="mb-4 flex items-center justify-between"><h3 className="text-2xl font-bold">JavaScript</h3><p className="text-sm text-[#AAB3D1]">Progresso 50%</p></div>
          <div className="mb-4 h-2 rounded-full bg-[#10172D]"><div className="h-full w-1/2 rounded-full bg-[#22C55E]" /></div>
          <div className="space-y-2">{['Módulo 1', 'Módulo 2', 'Módulo 3', 'Módulo 4', 'Módulo 7'].map((m, i) => <div key={m} className="flex items-center justify-between rounded-lg border border-[#1D294D] bg-[#10172D] px-4 py-3"><span>{m}</span>{i < 3 ? <CheckCircle2 className="h-4 w-4 text-[#22C55E]" /> : i === 4 ? <span className="text-xs text-[#7B5CFF]">Em andamento</span> : <Lock className="h-4 w-4 text-[#6E7AA5]" />}</div>)}</div>
        </article>

        <article className="rounded-2xl border border-[#1D294D] bg-[#0B1023] p-5">
          <h3 className="text-2xl font-bold">Aula</h3>
          <div className="mt-4 flex gap-2 text-sm"><span className="rounded-full bg-[#7B5CFF] px-3 py-1">Conteúdo</span><span className="rounded-full border border-[#1D294D] px-3 py-1 text-[#AAB3D1]">Exercício</span><span className="rounded-full border border-[#1D294D] px-3 py-1 text-[#AAB3D1]">Discussão</span></div>
          <div className="mt-4 rounded-lg border border-[#1D294D] bg-[#10172D] p-4"><p className="mb-2 font-medium">Criando objetos</p><pre className="text-sm text-[#AAB3D1]">{`const pessoa = {
  nome: 'João',
  idade: 25
};`}</pre></div>
          <div className="mt-4 rounded-lg border border-[#1D294D] bg-[#10172D] p-4">
            <p className="mb-2 font-medium">Checklist</p>
            <div className="space-y-2 text-sm text-[#AAB3D1]"><p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#22C55E]" />Introdução</p><p className="flex items-center gap-2"><Circle className="h-4 w-4 text-[#7B5CFF]" />Objetos literais</p><p className="flex items-center gap-2"><Circle className="h-4 w-4" />Métodos</p></div>
          </div>
        </article>
      </section>

      <section className="rounded-2xl border border-[#1D294D] bg-[#0B1023] p-5">
        <h3 className="text-2xl font-bold">Configurações</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <input className="w-full rounded-lg border border-[#1D294D] bg-[#10172D] px-4 py-3 text-sm outline-none placeholder:text-[#6E7AA5] focus:border-[#7B5CFF]" placeholder="Nome" defaultValue="João Silva" />
            <input className="w-full rounded-lg border border-[#1D294D] bg-[#10172D] px-4 py-3 text-sm outline-none placeholder:text-[#6E7AA5] focus:border-[#7B5CFF]" placeholder="E-mail" defaultValue="joao.silva@email.com" />
            <input className="w-full rounded-lg border border-[#1D294D] bg-[#10172D] px-4 py-3 text-sm outline-none placeholder:text-[#6E7AA5] focus:border-[#7B5CFF]" placeholder="Senha" type="password" defaultValue="123123123" />
          </div>
          <div className="rounded-xl border border-[#1D294D] bg-[#10172D] p-4">
            <p className="mb-3 text-sm font-semibold text-[#AAB3D1]">Preferências</p>
            <div className="mb-4 flex gap-2 text-sm"><button className="rounded-full border border-[#1D294D] px-3 py-1.5 text-[#AAB3D1]">Claro</button><button className="rounded-full border border-[#7B5CFF] bg-[#7B5CFF]/20 px-3 py-1.5">Escuro</button><button className="rounded-full border border-[#1D294D] px-3 py-1.5 text-[#AAB3D1]">Sistema</button></div>
            <button className="w-full rounded-lg bg-[#7B5CFF] px-4 py-3 font-medium transition duration-300 hover:bg-[#947BFF]">Salvar alterações</button>
          </div>
        </div>
      </section>
    </div>
  );
}
