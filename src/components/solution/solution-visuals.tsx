import type { ReactNode } from 'react';
import {
  Activity, ArrowRight, ArrowUpRight, Bot, Boxes,
  CheckCheck, CheckCircle2, Cloud,
  Code2, Database, FileText, GitBranch,
  PackageCheck,
  Plus, Rocket, Server, ShieldCheck, ShoppingBag,
  ShoppingCart, Sparkles, Terminal, TrendingUp, Users2, Workflow,
  Zap,
} from 'lucide-react';
import type { Solution } from '@/data/solutions';

/*
 * Eight individually designed, code-only product illustrations.
 * No logos, images, charting packages, or animation dependencies.
 * These visuals are decorative; the hero copy remains accessible and indexable.
 */

type VisualProps = { solution: Solution };
type VisualKind =
  | 'mvp' | 'automation' | 'transformation' | 'legacy'
  | 'ai' | 'commerce' | 'team' | 'scaling';

const VISUAL_BY_SLUG: Record<string, VisualKind> = {
  'mvp-startup-launch': 'mvp',
  'business-process-automation': 'automation',
  'digital-transformation': 'transformation',
  'legacy-software-modernization': 'legacy',
  'ai-transformation': 'ai',
  'e-commerce-transformation': 'commerce',
  'team-extension': 'team',
  'software-scaling-optimization': 'scaling',
};

function getKind(solution: Solution): VisualKind {
  const slug = solution.slug.toLowerCase();
  if (VISUAL_BY_SLUG[slug]) return VISUAL_BY_SLUG[slug];
  const name = solution.title.toLowerCase();
  if (name.includes('startup') || name.includes('mvp')) return 'mvp';
  if (name.includes('automation')) return 'automation';
  if (name.includes('digital transformation')) return 'transformation';
  if (name.includes('legacy')) return 'legacy';
  if (name.includes('ai')) return 'ai';
  if (name.includes('commerce')) return 'commerce';
  if (name.includes('team')) return 'team';
  return 'scaling';
}

// Light, restrained Codelaro palette: navy #0F172A, teal #18BCB7,
// off-white #F8FAFC. Every mock UI sits on white (never a navy card).
const panel = 'rounded-2xl border border-slate-200 bg-white shadow-[0_22px_65px_-24px_rgba(15,23,42,.20)]';
const softPanel = 'rounded-xl border border-slate-200/80 bg-[#F8FAFC]';
const label = 'font-mono text-[9px] font-semibold uppercase tracking-[.16em] text-slate-500 sm:text-[10px]';
const muted = 'text-[10px] text-slate-500 sm:text-xs';
const mint = '#18BCB7';

function Window({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`${panel} overflow-hidden ${className}`}>
      <div className="flex h-9 items-center gap-1.5 border-b border-slate-100 bg-white px-4">
        <span className="size-1.5 rounded-full bg-slate-300" />
        <span className="size-1.5 rounded-full bg-slate-200" />
        <span className="size-1.5 rounded-full bg-brand" />
        <div className="ml-auto flex items-center gap-1 text-slate-300">
          <span className="h-1 w-7 rounded-full bg-current" />
          <span className="size-1 rounded-full bg-current" />
        </div>
      </div>
      {children}
    </div>
  );
}

function Tag({ children, positive = false }: { children: ReactNode; positive?: boolean }) {
  return <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[9px] font-medium ${positive ? 'border-brand/25 bg-brand/10 text-[#087C78]' : 'border-slate-200 bg-slate-50 text-slate-600'}`}>{children}</span>;
}

/**
 * Transparent layout only: no backing rectangle, grid, gradient or border.
 * The coded UI cards are the entire illustration and float directly on
 * the hero's white background. Keep overflow visible for floating badges.
 */
function VisualFrame({ children }: { children: ReactNode; code?: string }) {
  return (
    <div
      aria-hidden="true"
      className="relative isolate flex min-h-[320px] w-full items-center justify-center overflow-visible py-8 sm:min-h-[400px] sm:py-10 lg:min-h-[490px] lg:py-12 xl:min-h-[540px]"
    >
      <div className="relative w-full max-w-[580px] px-2 sm:px-3 lg:px-0">
        {children}
      </div>
    </div>
  );
}

function MvpVisual() {
  const phases = ['Discover', 'Prototype', 'Build', 'Launch'];
  return <VisualFrame code="01 / PRODUCT">
    <Window className="relative mx-auto w-[96%] -rotate-[2deg]">
      <div className="flex items-center justify-between px-4 pt-4"><div><p className={label}>Launch workspace</p><p className="mt-1 text-base font-semibold text-navy sm:text-lg">From idea to impact.</p></div><Tag positive><Rocket className="size-3" /> In progress</Tag></div>
      <div className="mx-4 mt-5 flex items-center justify-between gap-1.5">{phases.map((step, i) => <div className="min-w-0 flex-1" key={step}><div className={`mb-1.5 h-1.5 rounded-full ${i < 3 ? 'bg-brand' : 'bg-slate-200'}`} /><span className="block truncate text-[8px] text-slate-500 sm:text-[10px]">{step}</span></div>)}</div>
      <div className="mx-4 mb-4 mt-5 grid grid-cols-[1.15fr_.85fr] gap-2"><div className={`${softPanel} p-3`}><p className={label}>Product preview</p><div className="mt-3 h-2 w-3/4 rounded-full bg-slate-300" /><div className="mt-2 h-1.5 w-full rounded-full bg-slate-100" /><div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-slate-100" /><div className="mt-3 inline-flex items-center gap-1 rounded-md bg-brand px-2 py-1.5 text-[9px] font-bold text-navy">Get started <ArrowUpRight className="size-3" /></div></div><div className={`${softPanel} flex flex-col items-center justify-center p-2 text-center`}><Rocket className="size-7 text-[#087C78]" strokeWidth={1.5} /><span className="mt-2 text-lg font-bold text-navy">04</span><span className={muted}>Launch stages</span></div></div>
    </Window>
    <div className="absolute -bottom-5 -right-1 flex items-center gap-2 rounded-xl border border-brand/20 bg-white shadow-[0_12px_30px_-14px_rgba(15,23,42,.2)] px-3 py-2.5 sm:-right-3"><CheckCircle2 className="size-4 text-[#087C78]" /><div><p className="text-[10px] font-semibold text-navy">Prototype approved</p><p className="text-[9px] text-slate-500">Ready for development</p></div></div>
  </VisualFrame>;
}

function AutomationVisual() {
  const nodes = [{ icon: FileText, title: 'New request', subtitle: 'Trigger', x: 'left-0 top-0' }, { icon: Workflow, title: 'Smart routing', subtitle: 'Process', x: 'left-[34%] top-[32%]' }, { icon: Database, title: 'Synced data', subtitle: 'Output', x: 'right-0 bottom-0' }];
  return <VisualFrame code="02 / WORKFLOWS">
    <div className="relative mx-auto h-[240px] w-full sm:h-[310px]">
      <svg className="absolute inset-0 size-full overflow-visible" viewBox="0 0 400 290" preserveAspectRatio="none"><defs><linearGradient id="auto-path" x1="0" x2="1"><stop stopColor={mint} stopOpacity=".35" /><stop offset="1" stopColor={mint} /></linearGradient></defs><path d="M92 49 H155 Q170 49 170 65 V130 H198" stroke="url(#auto-path)" strokeWidth="2" fill="none" strokeDasharray="5 7" /><path d="M254 160 H310 Q329 160 329 180 V238" stroke="url(#auto-path)" strokeWidth="2" fill="none" strokeDasharray="5 7" /><circle cx="170" cy="98" r="4" fill={mint} /><circle cx="329" cy="198" r="4" fill={mint} /></svg>
      {nodes.map(({ icon: Icon, title, subtitle, x }, i) => <div key={title} className={`absolute ${x} z-10 flex w-[43%] items-center gap-2.5 rounded-xl border ${i === 1 ? 'border-brand/45 bg-white' : 'border-slate-200 bg-white'} p-3 shadow-[0_12px_30px_-12px_rgba(15,23,42,.18)] sm:gap-3 sm:p-4`}><div className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand/10 text-[#087C78]"><Icon className="size-4 sm:size-5" /></div><div className="min-w-0"><p className="truncate text-[10px] font-semibold text-navy sm:text-xs">{title}</p><p className="mt-1 text-[9px] text-slate-500">{subtitle}</p></div>{i === 1 && <Zap className="ml-auto hidden size-3 text-[#087C78] sm:block" />}</div>)}
      <div className="absolute bottom-[14%] left-[2%] rounded-lg border border-brand/20 bg-white/85 px-2.5 py-2"><span className="flex items-center gap-1.5 text-[9px] font-semibold text-[#087C78]"><CheckCheck className="size-3" /> Workflow complete</span></div>
    </div>
  </VisualFrame>;
}

function TransformationVisual() {
  return <VisualFrame code="03 / CONNECTED">
    <div className="relative mx-auto flex w-[96%] items-center gap-2 sm:gap-3">
      <div className="w-[35%] space-y-2 opacity-65"><p className={label}>Before</p>{[FileText, Boxes, FileText].map((Icon, i) => <div key={i} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 py-3 sm:px-3"><Icon className="size-4 text-slate-500" /><div className="min-w-0 flex-1"><div className="h-1.5 w-3/4 rounded bg-slate-200" /><div className="mt-1.5 h-1 w-1/2 rounded bg-slate-100" /></div></div>)}</div>
      <div className="flex w-[12%] flex-col items-center gap-3"><span className="h-16 w-px bg-gradient-to-b from-transparent to-brand/50" /><div className="grid size-9 shrink-0 place-items-center rounded-full border border-brand/50 bg-white text-[#087C78] shadow-[0_0_30px_rgba(24,188,183,.10)]"><ArrowRight className="size-4" /></div><span className="h-16 w-px bg-gradient-to-b from-brand/50 to-transparent" /></div>
      <Window className="w-[53%] rotate-[2deg]"><div className="p-3 sm:p-4"><div className="flex items-center justify-between"><p className={label}>One connected hub</p><span className="size-1.5 rounded-full bg-brand" /></div><div className="mt-4 grid grid-cols-2 gap-2">{[{ icon: Cloud, name: 'Cloud' }, { icon: Users2, name: 'Teams' }, { icon: Database, name: 'Data' }, { icon: Activity, name: 'Insights' }].map(({ icon: Icon, name }) => <div key={name} className="flex flex-col items-start gap-2 rounded-lg border border-brand/15 bg-brand/[.07] p-2 sm:p-3"><Icon className="size-5 text-[#087C78]" /><span className="text-[9px] font-medium text-slate-700">{name}</span></div>)}</div><div className="mt-3 h-1.5 rounded-full bg-slate-100"><div className="h-full w-[82%] rounded-full bg-brand" /></div><p className="mt-2 text-[9px] text-slate-500">Systems unified</p></div></Window>
    </div>
  </VisualFrame>;
}

function LegacyVisual() {
  return <VisualFrame code="04 / REBUILD">
    <div className="relative mx-auto grid w-[98%] grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3">
      <Window className="min-w-0 opacity-80"><div className="p-3"><div className="flex items-center gap-1.5 text-[10px] text-rose-600"><Terminal className="size-3.5" /> Legacy system</div><div className="mt-4 space-y-2 font-mono text-[8px] sm:text-[10px]"><p className="text-slate-400">// old architecture</p><p className="text-rose-600">ERR: dependency</p><p className="text-slate-500">const data = [];</p><p className="text-amber-600">retry()...</p><div className="my-3 h-px bg-slate-100" /><div className="h-1.5 w-4/5 rounded bg-rose-200" /><div className="h-1.5 w-2/3 rounded bg-rose-100" /></div><Tag>v1.0</Tag></div></Window>
      <div className="flex flex-col items-center gap-2"><span className="h-9 w-px bg-brand/30" /><span className="grid size-9 place-items-center rounded-full border border-brand/40 bg-white text-[#087C78]"><ArrowRight className="size-4" /></span><span className="h-9 w-px bg-brand/30" /></div>
      <Window className="min-w-0 border-brand/25"><div className="p-3"><div className="flex items-center gap-1.5 text-[10px] text-[#087C78]"><Code2 className="size-3.5" /> Modern stack</div><div className="mt-4 space-y-2 font-mono text-[8px] sm:text-[10px]"><p className="text-[#087C78]">✓ build.success</p><p className="text-slate-600">api.connect()</p><p className="text-slate-600">data.migrate()</p><p className="text-[#087C78]">status: healthy</p><div className="my-3 h-px bg-slate-100" /><div className="flex items-end gap-1.5">{[13,20,15,27,24,35].map((h,i) => <span key={i} style={{height:h}} className="w-2 flex-1 rounded-t bg-brand" />)}</div></div><Tag positive><ShieldCheck className="size-3" /> v2.0 live</Tag></div></Window>
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-brand/20 bg-white px-3 py-1.5 text-[9px] text-[#087C78]">Business logic preserved</span>
    </div>
  </VisualFrame>;
}

function AiVisual() {
  const data = [26, 40, 29, 60, 48, 77, 68, 88];
  return <VisualFrame code="05 / INTELLIGENCE">
    <Window className="relative mx-auto w-[96%] rotate-[1.5deg]"><div className="p-4 sm:p-5"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="grid size-8 place-items-center rounded-lg bg-brand/15 text-[#087C78]"><Sparkles className="size-4" /></span><div><p className="text-[11px] font-semibold text-navy">Intelligence engine</p><p className="text-[9px] text-slate-500">Document analysis</p></div></div><Tag positive><span className="size-1.5 rounded-full bg-brand" /> Active</Tag></div>
      <div className="mt-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3"><FileText className="size-7 shrink-0 text-slate-500" /><div className="min-w-0 flex-1"><p className="truncate text-[10px] font-medium text-navy">quarterly-report.pdf</p><div className="mt-2 h-1 rounded-full bg-slate-100"><div className="h-full w-[88%] rounded-full bg-brand" /></div></div><span className="text-[9px] font-medium text-[#087C78]">88%</span></div>
      <div className="mt-3 grid grid-cols-[1fr_.7fr] gap-2"><div className={`${softPanel} p-3`}><p className={label}>Extracted insights</p><div className="mt-3 space-y-2">{['Revenue patterns', 'Risk signals', 'Next actions'].map(text => <div className="flex items-center gap-2" key={text}><CheckCircle2 className="size-3 text-[#087C78]" /><span className="text-[9px] text-slate-600">{text}</span></div>)}</div></div><div className={`${softPanel} p-3`}><p className={label}>Confidence</p><div className="mt-2 flex h-14 items-end gap-1">{data.map((h,i) => <span key={i} className="flex-1 rounded-t bg-brand/60" style={{ height: `${h}%` }} />)}</div></div></div></div></Window>
    <div className="absolute -bottom-4 -left-1 flex items-center gap-2 rounded-xl border border-brand/20 bg-white px-3 py-2 shadow-[0_10px_28px_-12px_rgba(15,23,42,.2)] sm:-left-3"><Bot className="size-4 text-[#087C78]" /><span className="text-[10px] font-medium text-navy">Insights generated</span><Sparkles className="size-3 text-[#087C78]" /></div>
  </VisualFrame>;
}

function CommerceVisual() {
  const bars = [28, 35, 31, 52, 49, 66, 61, 86];
  return <VisualFrame code="06 / COMMERCE">
    <div className="relative mx-auto flex w-[99%] items-center gap-3">
      <Window className="w-[64%] -rotate-[2deg]"><div className="p-3 sm:p-4"><div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><ShoppingBag className="size-4 text-[#087C78]" /><span className="text-[10px] font-semibold text-navy">Storefront</span></div><span className="size-4 rounded-full border border-slate-200" /></div><div className="mt-3 rounded-xl border border-slate-200 bg-gradient-to-br from-[#2c6668]/75 to-[#F1FAF9] p-3"><div className="mx-auto flex h-20 w-[70%] items-center justify-center rounded-lg border border-slate-200 bg-slate-100 sm:h-24"><ShoppingBag className="size-10 text-[#087C78]" strokeWidth={1.1} /></div></div><div className="mt-3 flex items-center justify-between gap-2"><div><p className="text-[10px] font-semibold text-navy">Everyday essentials</p><p className="mt-1 text-[9px] text-slate-500">Premium collection</p></div><span className="text-xs font-bold text-navy">$129</span></div><div className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-brand py-2 text-[10px] font-bold text-navy"><ShoppingCart className="size-3" /> Add to cart</div></div></Window>
      <div className="absolute -right-2 top-[18%] w-[51%] rotate-[4deg] rounded-2xl border border-brand/20 bg-white p-3 shadow-[0_18px_55px_-18px_rgba(15,23,42,.18)] sm:right-0 sm:p-4"><p className={label}>Revenue analytics</p><div className="mt-2 flex items-center gap-1"><span className="text-xl font-bold text-navy sm:text-2xl">+32%</span><TrendingUp className="size-4 text-[#087C78]" /></div><p className="mt-1 text-[9px] text-slate-500">Conversion growth</p><div className="mt-4 flex h-12 items-end gap-1.5">{bars.map((h,i) => <div key={i} className={`flex-1 rounded-t ${i === bars.length - 1 ? 'bg-brand' : 'bg-brand/35'}`} style={{height:`${h}%`}} />)}</div></div>
      <div className="absolute -bottom-4 right-0 flex items-center gap-2 rounded-xl border border-brand/20 bg-white shadow-[0_12px_30px_-14px_rgba(15,23,42,.2)] px-3 py-2"><PackageCheck className="size-4 text-[#087C78]" /><span className="text-[10px] font-semibold text-navy">Order confirmed</span></div>
    </div>
  </VisualFrame>;
}

function TeamVisual() {
  const people = [{initial:'JD', role:'Frontend', task:'UI components'}, {initial:'AK',role:'Backend',task:'API integration'}, {initial:'SM',role:'Design',task:'Product system'}];
  return <VisualFrame code="07 / COLLABORATE">
    <Window className="relative mx-auto w-[98%]"><div className="p-3 sm:p-5"><div className="flex items-center justify-between"><div><p className={label}>Shared delivery space</p><h3 className="mt-1 text-sm font-semibold text-navy sm:text-base">One extended team</h3></div><Tag positive><span className="size-1.5 rounded-full bg-brand" /> Synchronized</Tag></div>
      <div className="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-1.5 sm:gap-2"><div className={`${softPanel} p-2 text-center sm:p-3`}><Users2 className="mx-auto size-5 text-slate-700" /><span className="mt-1 block text-[9px] text-slate-600">Your team</span></div><Plus className="size-3 text-[#087C78]" /><div className="rounded-xl border border-brand/30 bg-[#E7F7F5] p-2 text-center sm:p-3"><Code2 className="mx-auto size-5 text-[#087C78]" /><span className="mt-1 block text-[9px] text-navy/85">Codelaro</span></div><ArrowRight className="size-3 text-[#087C78]" /><div className={`${softPanel} p-2 text-center sm:p-3`}><Rocket className="mx-auto size-5 text-[#087C78]" /><span className="mt-1 block text-[9px] text-slate-600">Delivery</span></div></div>
      <div className="mt-4 space-y-1.5">{people.map((person,i) => <div key={person.initial} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2"><div className={`grid size-7 shrink-0 place-items-center rounded-full text-[9px] font-bold ${i === 1 ? 'bg-brand text-navy' : 'bg-[#E9F3F2] text-navy'}`}>{person.initial}</div><div className="min-w-0 flex-1"><p className="text-[10px] font-medium text-navy">{person.role}</p><p className="truncate text-[9px] text-slate-500">{person.task}</p></div><CheckCircle2 className="size-3.5 text-[#087C78]" /></div>)}</div>
    </div></Window>
    <div className="absolute -bottom-3 -right-1 flex items-center gap-1.5 rounded-xl border border-brand/20 bg-white px-3 py-2.5 text-[10px] font-medium text-navy shadow-lg"><GitBranch className="size-3.5 text-[#087C78]" /> Shipping together</div>
  </VisualFrame>;
}

function ScalingVisual() {
  const heights = [25,38,32,47,46,53,65,61,74,88];
  return <VisualFrame code="08 / PERFORMANCE">
    <Window className="relative mx-auto w-[98%] -rotate-[1.5deg]"><div className="p-3 sm:p-5"><div className="flex items-center justify-between"><div><p className={label}>Live infrastructure</p><h3 className="mt-1 text-sm font-semibold text-navy sm:text-base">Performance overview</h3></div><Tag positive><Activity className="size-3" /> Healthy</Tag></div>
      <div className="mt-4 grid grid-cols-3 gap-2">{[{k:'Uptime',v:'99.9%'},{k:'Response',v:'84ms'},{k:'Requests',v:'2.4M'}].map(({k,v})=><div key={k} className={`${softPanel} min-w-0 p-2 sm:p-3`}><p className="truncate text-[8px] text-slate-500 sm:text-[9px]">{k}</p><p className="mt-1 text-sm font-bold text-navy sm:text-lg">{v}</p></div>)}</div>
      <div className={`${softPanel} mt-3 p-3`}><div className="flex justify-between"><p className={label}>Traffic throughput</p><TrendingUp className="size-3.5 text-[#087C78]" /></div><div className="mt-3 flex h-[72px] items-end gap-1.5">{heights.map((h,i)=><span key={i} className="flex-1 rounded-t bg-gradient-to-t from-[#B6E8E4] to-brand" style={{height:`${h}%`}} />)}</div><div className="mt-2 flex justify-between text-[8px] text-slate-400"><span>00:00</span><span>12:00</span><span>Now</span></div></div></div></Window>
    <div className="absolute -bottom-4 -right-1 flex items-center gap-2 rounded-xl border border-brand/20 bg-white shadow-[0_12px_30px_-14px_rgba(15,23,42,.2)] p-2.5 sm:-right-3"><div className="grid size-8 place-items-center rounded-lg bg-brand/15"><Server className="size-4 text-[#087C78]" /></div><div><p className="text-[10px] font-semibold text-navy">Auto scaling</p><p className="text-[9px] text-[#087C78]">Capacity optimized</p></div></div>
  </VisualFrame>;
}

export function SolutionVisual({ solution }: VisualProps) {
  const kind = getKind(solution);
  switch (kind) {
    case 'mvp': return <MvpVisual />;
    case 'automation': return <AutomationVisual />;
    case 'transformation': return <TransformationVisual />;
    case 'legacy': return <LegacyVisual />;
    case 'ai': return <AiVisual />;
    case 'commerce': return <CommerceVisual />;
    case 'team': return <TeamVisual />;
    case 'scaling': return <ScalingVisual />;
  }
}
