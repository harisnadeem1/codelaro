import type { ReactNode } from 'react';
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  Blocks,
  Bot,
  Braces,
  Check,
  CircleAlert,
  Clock3,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  LockKeyhole,
  MousePointer2,
  Network,
  Package,
  PanelTop,
  ScanSearch,
  Server,
  ShoppingBag,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import type { Solution } from '@/data/solutions';

/*
 * Solution-specific, illustrative diagrams. These show common challenges;
 * they deliberately don't claim measured client performance or outcomes.
 * Uses only Tailwind, lucide-react and your existing brand tokens.
 */
type VisualKind =
  | 'launch'
  | 'automation'
  | 'digital'
  | 'legacy'
  | 'ai'
  | 'commerce'
  | 'team'
  | 'scale';

type ChallengeConfig = {
  category: string;
  headline: string;
  caption: string;
  signal: string;
  tags: [string, string, string];
  icon: LucideIcon;
  visual: VisualKind;
};

const CONFIG: Record<VisualKind, ChallengeConfig> = {
  launch: {
    category: 'PRODUCT VALIDATION',
    headline: 'Momentum gets lost before launch.',
    caption: 'Unclear priorities turn a promising idea into an expanding project.',
    signal: 'Delayed market feedback',
    tags: ['Scope creep', 'Slow decisions', 'Late validation'],
    icon: Clock3,
    visual: 'launch',
  },
  automation: {
    category: 'OPERATIONAL FRICTION',
    headline: 'Work gets stuck between systems.',
    caption: 'Manual handoffs interrupt otherwise straightforward workflows.',
    signal: 'Repeated manual effort',
    tags: ['Re-keying', 'Approval delays', 'Disconnected tools'],
    icon: Workflow,
    visual: 'automation',
  },
  digital: {
    category: 'BUSINESS VISIBILITY',
    headline: 'Information lives in separate places.',
    caption: 'Siloed workflows make it harder to see the whole operation.',
    signal: 'Fragmented information',
    tags: ['Paper trails', 'Data silos', 'Low visibility'],
    icon: Blocks,
    visual: 'digital',
  },
  legacy: {
    category: 'TECHNICAL DEBT',
    headline: 'Every change becomes harder.',
    caption: 'Aging infrastructure slows improvement and increases complexity.',
    signal: 'Restricted delivery speed',
    tags: ['Old dependencies', 'Fragile releases', 'High upkeep'],
    icon: Code2,
    visual: 'legacy',
  },
  ai: {
    category: 'UNUSED INTELLIGENCE',
    headline: 'Valuable data remains untapped.',
    caption: 'Without a practical use case, information rarely becomes action.',
    signal: 'Missed insight opportunities',
    tags: ['Unstructured data', 'Manual analysis', 'Isolated pilots'],
    icon: Bot,
    visual: 'ai',
  },
  commerce: {
    category: 'CUSTOMER EXPERIENCE',
    headline: 'Small obstacles interrupt buying.',
    caption: 'A disconnected shopping journey creates unnecessary friction.',
    signal: 'Checkout friction',
    tags: ['Slow storefront', 'Checkout steps', 'Split operations'],
    icon: ShoppingBag,
    visual: 'commerce',
  },
  team: {
    category: 'DELIVERY CAPACITY',
    headline: 'The backlog grows faster than the team.',
    caption: 'Specialist gaps can leave important work waiting in the queue.',
    signal: 'Delivery bottlenecks',
    tags: ['Skill gaps', 'Long hiring', 'Growing backlog'],
    icon: Users,
    visual: 'team',
  },
  scale: {
    category: 'SYSTEM RESILIENCE',
    headline: 'Growth exposes hidden limits.',
    caption: 'Higher demand reveals bottlenecks that were easy to miss.',
    signal: 'Performance pressure',
    tags: ['Latency', 'Capacity limits', 'Complex releases'],
    icon: Activity,
    visual: 'scale',
  },
};

/* Resolve by both slug and title so existing data naming variations work. */
function getConfig(solution: Solution): ChallengeConfig {
  const text = `${solution.slug} ${solution.title}`.toLowerCase();
  if (/mvp|startup/.test(text)) return CONFIG.launch;
  if (/automat/.test(text)) return CONFIG.automation;
  if (/digital.transformation/.test(text)) return CONFIG.digital;
  if (/legacy|moderniz|modernis/.test(text)) return CONFIG.legacy;
  if (/\bai\b|artificial.intelligence/.test(text)) return CONFIG.ai;
  if (/commerce|e-commerce|ecommerce/.test(text)) return CONFIG.commerce;
  if (/team.extension|staff.augment/.test(text)) return CONFIG.team;
  if (/scal|optimiz|optimis|performance/.test(text)) return CONFIG.scale;
  return {
    ...CONFIG.digital,
    headline: `What holds ${solution.title.toLowerCase()} back?`,
    caption: 'The underlying friction is worth understanding before choosing a solution.',
  };
}

const tile =
  'rounded-2xl border border-slate-200/80 bg-white shadow-[0_14px_42px_-24px_rgba(15,23,42,0.22)]';

function Dot({ muted = false }: { muted?: boolean }) {
  return <span className={`inline-block size-2 shrink-0 rounded-full ${muted ? 'bg-slate-300' : 'bg-brand'}`} />;
}

function SmallLabel({ children }: { children: ReactNode }) {
  return <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">{children}</span>;
}

function MiniCard({
  icon: Icon,
  name,
  note,
  accent = false,
}: {
  icon: LucideIcon;
  name: string;
  note?: string;
  accent?: boolean;
}) {
  return (
    <div className={`${tile} flex min-w-0 items-center gap-3 p-3.5 sm:p-4 ${accent ? '!border-brand/35 !bg-[#F0FBFA]' : ''}`}>
      <div className={`grid size-10 shrink-0 place-items-center rounded-xl ${accent ? 'bg-brand/15 text-brand-700' : 'bg-slate-100 text-navy/65'}`}>
        <Icon className="size-4.5" strokeWidth={1.8} aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <div className="truncate text-[12px] font-bold text-navy sm:text-[13px]">{name}</div>
        {note && <div className="mt-0.5 truncate text-[10px] text-slate-400 sm:text-[11px]">{note}</div>}
      </div>
    </div>
  );
}

function LaunchVisual() {
  return (
    <div className="grid gap-3 sm:grid-cols-[1.1fr_.9fr] sm:items-center">
      <div className={`${tile} p-5`}>
        <div className="flex items-center justify-between gap-3"><SmallLabel>Product roadmap</SmallLabel><span className="rounded-full bg-amber-50 px-2 py-1 text-[10px] font-semibold text-amber-700">In planning</span></div>
        <div className="mt-5 space-y-4">
          {[
            ['Discover', 'w-full', true],
            ['Define', 'w-4/5', true],
            ['Build', 'w-2/5', false],
            ['Validate', 'w-1/5', false],
          ].map(([label, width, done]) => (
            <div key={label as string}>
              <div className="mb-2 flex items-center justify-between text-[11px]"><span className="font-semibold text-navy">{label}</span>{done ? <Check className="size-3.5 text-brand" /> : <span className="size-2 rounded-full border border-slate-300" />}</div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${width} ${done ? 'bg-brand/70' : 'bg-amber-300'}`} /></div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <MiniCard icon={Layers3} name="New feature request" note="Scope expanded" />
        <div className="flex justify-center"><ArrowDownRight className="size-5 text-amber-400" /></div>
        <MiniCard icon={Clock3} name="Launch pushed back" note="Feedback still pending" accent />
      </div>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="mx-auto max-w-[440px]">
      <div className="grid grid-cols-[1fr_48px_1fr] items-center gap-1 sm:grid-cols-[1fr_70px_1fr]">
        <MiniCard icon={Database} name="Incoming data" note="New request" />
        <div className="flex items-center justify-center"><ArrowRight className="size-5 text-brand/60" /></div>
        <MiniCard icon={PanelTop} name="Spreadsheet" note="Manual entry" />
      </div>
      <div className="relative ml-auto mr-[19%] h-12 w-px border-l-2 border-dashed border-amber-300"><CircleAlert className="absolute -left-[9px] top-3 size-4.5 bg-[#F8FAFC] text-amber-500" /></div>
      <div className="grid grid-cols-[1fr_48px_1fr] items-center gap-1 sm:grid-cols-[1fr_70px_1fr]">
        <MiniCard icon={Users} name="Team review" note="Waiting for approval" />
        <div className="flex items-center justify-center"><ArrowRight className="size-5 text-amber-400" /></div>
        <MiniCard icon={GitBranch} name="Next system" note="Re-enter data" accent />
      </div>
    </div>
  );
}

function DigitalVisual() {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-5">
      <div className="space-y-3"><MiniCard icon={PanelTop} name="Spreadsheets" note="Department A" /><MiniCard icon={Package} name="Paper records" note="Department B" /><MiniCard icon={Server} name="Local software" note="Department C" /></div>
      <div className="flex flex-col items-center gap-2"><span className="h-10 border-l border-dashed border-slate-300" /><CircleAlert className="size-5 text-amber-500" /><span className="h-10 border-l border-dashed border-slate-300" /></div>
      <div className={`${tile} relative flex min-h-[176px] flex-col items-center justify-center gap-3 border-dashed bg-slate-50/80 p-3 text-center sm:min-h-[230px]`}>
        <Network className="size-8 text-slate-300 sm:size-10" strokeWidth={1.2} /><div className="text-[12px] font-bold text-navy">Unified view</div><span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-semibold text-amber-700">Not connected</span>
      </div>
    </div>
  );
}

function LegacyVisual() {
  return (
    <div className="grid gap-3 sm:grid-cols-[1.1fr_.9fr] sm:items-center">
      <div className={`${tile} overflow-hidden`}>
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3"><i className="size-1.5 rounded-full bg-slate-300" /><i className="size-1.5 rounded-full bg-slate-300" /><i className="size-1.5 rounded-full bg-slate-300" /><span className="ml-2 font-mono text-[10px] text-slate-400">legacy-system.js</span></div>
        <div className="space-y-2 p-5 font-mono text-[11px]"><p className="text-slate-400">// tightly coupled logic</p><p className="text-navy">function process() {'{'}</p><p className="pl-4 text-amber-600">// outdated dependency</p><p className="pl-4 text-navy">legacy.run(data)</p><p className="text-navy">{'}'}</p><div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3 text-amber-600"><CircleAlert className="size-3.5" /><span className="text-[10px]">Change requires extra care</span></div></div>
      </div>
      <div className="space-y-3"><MiniCard icon={Braces} name="Coupled modules" note="Difficult to isolate" /><MiniCard icon={LockKeyhole} name="Old dependencies" note="Maintenance overhead" accent /><MiniCard icon={Cloud} name="New capabilities" note="Blocked by complexity" /></div>
    </div>
  );
}

function AIVisual() {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
      <div className={`${tile} p-4`}><SmallLabel>Incoming information</SmallLabel><div className="mt-4 space-y-3">{[86, 62, 77, 48].map((w, i) => <div key={i} className="rounded-lg border border-slate-100 bg-slate-50 p-2.5"><div style={{ width: `${w}%` }} className="h-1.5 rounded-full bg-slate-200" /><div className="mt-2 h-1.5 w-1/2 rounded-full bg-slate-100" /></div>)}</div></div>
      <div className="flex flex-col items-center gap-2"><ArrowRight className="size-5 text-slate-300" /><span className="h-12 border-l border-dashed border-amber-300" /><CircleAlert className="size-4.5 text-amber-500" /></div>
      <div className={`${tile} flex min-h-[202px] flex-col items-center justify-center p-4 text-center sm:min-h-[250px]`}><span className="grid size-14 place-items-center rounded-2xl border border-brand/15 bg-brand/[0.07]"><Sparkles className="size-6 text-brand" /></span><p className="mt-4 text-[12px] font-bold text-navy">Actionable insights</p><p className="mt-2 text-[11px] leading-relaxed text-slate-400">Waiting to be unlocked</p></div>
    </div>
  );
}

function CommerceVisual() {
  return (
    <div className="grid gap-3 sm:grid-cols-[1.1fr_.9fr] sm:items-center">
      <div className={`${tile} overflow-hidden`}><div className="flex items-center justify-between border-b border-slate-100 p-4"><span className="text-xs font-bold text-navy">Storefront</span><ShoppingBag className="size-4 text-brand" /></div><div className="grid grid-cols-2 gap-3 p-4">{[0, 1].map(i => <div key={i} className="space-y-2"><div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-100 to-brand/[0.08]" /><div className="h-1.5 w-4/5 rounded bg-slate-200" /><div className="h-1.5 w-1/2 rounded bg-slate-100" /></div>)}</div></div>
      <div className="space-y-3"><MiniCard icon={MousePointer2} name="Product selected" note="Purchase intent" /><div className="mx-auto h-5 w-px border-l-2 border-dashed border-amber-300" /><MiniCard icon={CircleAlert} name="Checkout friction" note="Unnecessary steps" accent /><div className="mx-auto h-5 w-px border-l-2 border-dashed border-slate-200" /><MiniCard icon={ShoppingBag} name="Order complete" note="Journey interrupted" /></div>
    </div>
  );
}

function TeamVisual() {
  return (
    <div className="grid gap-4 sm:grid-cols-[.85fr_1.15fr] sm:items-center">
      <div className={`${tile} p-4 sm:p-5`}><SmallLabel>Current capacity</SmallLabel><div className="mt-5 flex -space-x-2">{['A', 'B', 'C'].map((name, i) => <span key={name} className={`grid size-10 place-items-center rounded-full border-[3px] border-white text-xs font-bold ${i === 2 ? 'bg-brand/15 text-brand-700' : 'bg-slate-100 text-slate-500'}`}>{name}</span>)}<span className="grid size-10 place-items-center rounded-full border-2 border-dashed border-brand/40 bg-[#F0FBFA] text-brand">+</span></div><p className="mt-5 text-[11px] text-slate-500">Specialist capacity needed</p></div>
      <div className={`${tile} p-4 sm:p-5`}><div className="flex items-center justify-between"><SmallLabel>Delivery board</SmallLabel><span className="text-[10px] font-semibold text-amber-600">Backlog</span></div><div className="mt-4 space-y-2">{['Feature development', 'Design review', 'Technical integration'].map((task, i) => <div key={task} className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 p-2.5"><span className={`size-2 rounded-full ${i === 0 ? 'bg-brand' : 'bg-amber-300'}`} /><span className="flex-1 text-[11px] font-medium text-navy">{task}</span>{i > 0 && <Clock3 className="size-3 text-amber-500" />}</div>)}</div></div>
    </div>
  );
}

function ScaleVisual() {
  return (
    <div className="grid gap-3 sm:grid-cols-[1.2fr_.8fr] sm:items-center">
      <div className={`${tile} p-4 sm:p-5`}><div className="flex items-center justify-between"><SmallLabel>System load</SmallLabel><Activity className="size-4 text-brand" /></div><div className="relative mt-5 h-36 overflow-hidden rounded-xl border border-slate-100 bg-slate-50/80 p-3"><div aria-hidden="true" className="absolute inset-0 [background-image:linear-gradient(to_bottom,transparent_24%,rgba(148,163,184,.12)_25%,transparent_26%,transparent_49%,rgba(148,163,184,.12)_50%,transparent_51%,transparent_74%,rgba(148,163,184,.12)_75%,transparent_76%)]" /><svg viewBox="0 0 300 120" className="relative h-full w-full overflow-visible" preserveAspectRatio="none" aria-label="Illustration of rising system pressure"><path d="M0 104 C30 104 30 84 55 83 S85 94 105 65 S140 72 163 52 S193 78 218 36 S251 54 270 12 L300 7" fill="none" stroke="#18BCB7" strokeWidth="3" strokeLinecap="round" /><circle cx="270" cy="12" r="5" fill="#F5B942" stroke="white" strokeWidth="2" /></svg></div><p className="mt-3 text-[10px] text-slate-400">Illustrative demand pattern</p></div>
      <div className="space-y-3"><MiniCard icon={Server} name="Compute capacity" note="Under pressure" /><MiniCard icon={Activity} name="Response times" note="Increasing latency" accent /><MiniCard icon={ScanSearch} name="Bottlenecks" note="Harder to diagnose" /></div>
    </div>
  );
}

const VISUALS: Record<VisualKind, () => ReactNode> = {
  launch: LaunchVisual,
  automation: AutomationVisual,
  digital: DigitalVisual,
  legacy: LegacyVisual,
  ai: AIVisual,
  commerce: CommerceVisual,
  team: TeamVisual,
  scale: ScaleVisual,
};

/* Semantic challenge statements: no misleading numerical "analytics". */
export function SolutionChallenge({ solution }: { solution: Solution }) {
  const config = getConfig(solution);
  const Visual = VISUALS[config.visual];
  const Icon = config.icon;

  return (
    <section
      id="solution-challenge"
      aria-labelledby="solution-challenge-heading"
      className="relative isolate overflow-hidden bg-[#F8FAFC] py-20 sm:py-20 lg:py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute right-[-16rem] top-[-8rem] size-[36rem] rounded-full bg-brand/[0.035] blur-[100px]" />

      <div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8">
        {/* Intro: editorial, not another conventional boxed hero */}
        <div className="grid gap-7  lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-16 lg:pb-14">
          <div>
            <p className="flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand-700"><span className="h-px w-8 bg-brand" />The challenge</p>
            <h2 id="solution-challenge-heading" className="mt-5 max-w-2xl font-display text-[clamp(2.3rem,4vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.045em] text-navy">
              Progress starts with <span className="text-brand">Clarity.</span>
            </h2>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-[15px] leading-[1.9] text-slate-500 sm:text-[17px]">Before we design the right {solution.title.toLowerCase()} solution, we look closely at the obstacles that make change difficult.</p>
          </div>
        </div>

        {/* Story on left, large custom visual on right */}
        <div className="grid gap-12 pt-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16 lg:pt-10 xl:gap-24">
          <div className="min-w-0">
            <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-2xl border border-brand/15 bg-brand/[0.07] text-brand"><Icon className="size-5" strokeWidth={1.7} /></span><span className="font-mono text-[11px] font-semibold uppercase tracking-[0.17em] text-slate-400">{config.category}</span></div>
            <h3 className="mt-6 max-w-lg font-display text-[clamp(1.6rem,2.25vw,2.45rem)] font-bold leading-[1.2] tracking-[-0.035em] text-navy">{config.headline}</h3>
            <p className="mt-4 max-w-lg text-[15px] leading-[1.9] text-slate-500">{config.caption}</p>

            <div className="mt-9 space-y-0 border-t border-navy/[0.09]">
              {solution.challenge.map((paragraph, index) => (
                <div key={`${solution.slug}-challenge-${index}`} className="group grid grid-cols-[32px_1fr] gap-4 border-b border-navy/[0.09] py-5 sm:grid-cols-[40px_1fr] sm:gap-5">
                  <span className="pt-0.5 font-mono text-[12px] font-semibold text-brand/80">{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-[15px] leading-[1.85] text-slate-600 transition-colors group-hover:text-navy sm:text-[16px]">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            {/* No dark panel or enclosing illustrated-background box. */}
            <div className="relative">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2"><Dot /><SmallLabel>Challenge snapshot</SmallLabel></div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-amber-50 px-3 py-1.5 text-[10px] font-semibold text-amber-700"><CircleAlert className="size-3.5" />Common friction</span>
              </div>

              <div className="min-h-[270px] py-4 sm:min-h-[320px] sm:py-7">
                <Visual />
              </div>

              <div className="mt-5 border-t border-navy/[0.09] pt-5">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-600"><ArrowDownRight className="size-4" /></span><div><SmallLabel>What this affects</SmallLabel><p className="mt-1 text-[13px] font-semibold text-navy sm:text-[14px]">{config.signal}</p></div></div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-400">Illustrative workflow</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Airy, border-only summary: no fake numbers */}
        <div className="mt-14 grid gap-6  pt-7 sm:grid-cols-[auto_1fr] sm:items-start lg:mt-0">
          <div className="flex items-center gap-2"><span className="grid size-9 place-items-center rounded-xl bg-brand/[0.08] text-brand"><ScanSearch className="size-4" /></span><span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">Points of friction</span></div>
          <ul className="flex flex-wrap gap-2.5 sm:justify-end" aria-label="Common challenges">
            {config.tags.map((tag) => <li key={tag} className="rounded-full border border-navy/[0.09] bg-white px-4 py-2 text-[12px] font-medium text-slate-600">{tag}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
