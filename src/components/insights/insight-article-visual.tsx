import type { ReactNode } from 'react';
import {
  Activity, ArrowRight, Blocks, Bot, BrainCircuit, Braces,
  Check, CheckCircle2, Cloud, Code2, Database, GitBranch,
  Layers3, Network, PenTool, Play, Rocket,
  Route, Server, ShieldCheck, Sparkles, Target, Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/** Decorative, intentionally illustrative UI: no fabricated metrics or status claims. */
type VisualProps = {
  slug: string;
  variant?: 'card' | 'hero';
  className?: string;
};

type TileProps = {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  small?: boolean;
};

const VISUALS: Record<string, { eyebrow: string; title: string; icon: LucideIcon }> = {
  'building-for-scale-from-day-one': { eyebrow: 'ENGINEERING', title: 'Scalable architecture', icon: Network },
  'putting-ai-to-work-on-real-problems': { eyebrow: 'APPLIED AI', title: 'Problem → solution', icon: BrainCircuit },
  'the-mvp-that-does-not-lie': { eyebrow: 'PRODUCT', title: 'Build · Learn · Improve', icon: Target },
  'shipping-with-confidence': { eyebrow: 'CLOUD & DEVOPS', title: 'Release pipeline', icon: GitBranch },
  'design-systems-that-survive-growth': { eyebrow: 'DESIGN', title: 'Composable interfaces', icon: PenTool },
  'outcomes-over-features': { eyebrow: 'BUSINESS', title: 'Measure what matters', icon: Target },
  'when-to-modernize-and-when-to-rebuild': { eyebrow: 'ENGINEERING', title: 'Modernization paths', icon: Blocks },
  'automation-that-actually-saves-time': { eyebrow: 'AUTOMATION', title: 'Connected workflows', icon: Workflow },
  'from-idea-to-launch-in-weeks': { eyebrow: 'PRODUCT', title: 'Idea to launch', icon: Rocket },
  'ai-agents-in-business-what-actually-works-in-2026': { eyebrow: 'AGENTIC AI', title: 'Agent orchestration', icon: Bot },
  'ai-assisted-software-development-beyond-the-hype': { eyebrow: 'AI ENGINEERING', title: 'Human + AI workflow', icon: Code2 },
  'securing-ai-agents-and-connected-tools': { eyebrow: 'AI SECURITY', title: 'Trust boundaries', icon: ShieldCheck },
  'cloud-native-infrastructure-for-ai-products': { eyebrow: 'CLOUD NATIVE', title: 'AI infrastructure', icon: Cloud },
};

function Tile({ icon: Icon, label, active = false, small = false }: TileProps) {
  return (
    <div className={`flex min-w-0 items-center gap-2 rounded-xl border px-3 py-2.5 shadow-[0_6px_24px_-17px_rgba(15,23,42,.2)] ${active ? 'border-[#18BCB7]/40 bg-[#E7F9F7]' : 'border-slate-200 bg-white'} ${small ? 'px-2.5 py-2' : ''}`}>
      <span className={`flex shrink-0 items-center justify-center rounded-lg ${small ? 'h-7 w-7' : 'h-8 w-8'} ${active ? 'bg-[#18BCB7]/15 text-[#119894]' : 'bg-slate-100 text-[#64748B]'}`}>
        <Icon className={small ? 'h-3.5 w-3.5' : 'h-4 w-4'} strokeWidth={1.8} />
      </span>
      <span className={`truncate font-mono font-medium ${small ? 'text-[9px]' : 'text-[10px]'} ${active ? 'text-[#0F172A]' : 'text-slate-500'}`}>{label}</span>
    </div>
  );
}

function Connector({ vertical = false }: { vertical?: boolean }) {
  return <span className={`${vertical ? 'mx-auto h-5 w-px' : 'h-px w-5 shrink-0 sm:w-8'} border-t border-dashed border-[#18BCB7]/65 ${vertical ? 'border-l border-t-0' : ''}`} />;
}

function Frame({ children }: { children: ReactNode }) {
  return <div className="relative z-10 mx-auto flex h-full w-full max-w-[370px] items-center justify-center px-3">{children}</div>;
}

function VisualScene({ slug }: { slug: string }) {
  switch (slug) {
    case 'building-for-scale-from-day-one':
      return <Frame><div className="w-full">
        <div className="mx-auto w-40"><Tile icon={Layers3} label="APPLICATION" active /></div>
        <div className="mx-auto h-5 w-px border-l border-dashed border-[#18BCB7]/65" />
        <div className="mx-auto h-px w-[68%] border-t border-dashed border-[#18BCB7]/65" />
        <div className="flex justify-between gap-2 pt-4"><Tile icon={Server} label="SERVICE A" small /><Tile icon={Server} label="SERVICE B" small /><Tile icon={Database} label="DATA" small /></div>
        <div className="mt-4 flex justify-center gap-1.5">{[0,1,2,3,4].map(n => <span key={n} className={`h-1.5 w-7 rounded-full ${n < 3 ? 'bg-[#18BCB7]/60' : 'bg-slate-200'}`} />)}</div>
      </div></Frame>;
   case 'putting-ai-to-work-on-real-problems':
    return (
        <Frame>
            <div className="w-full max-w-[290px] space-y-2">
                <Tile icon={Target} label="DEFINE THE PROBLEM" />

                <div className="ml-6 h-2 border-l border-dashed border-[#18BCB7]/60" />

                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                    <Tile icon={Braces} label="RULES" small />

                    <span className="font-mono text-[10px] text-slate-400">
                        OR
                    </span>

                    <Tile
                        icon={BrainCircuit}
                        label="AI MODEL"
                        active
                        small
                    />
                </div>

                <div className="ml-auto mr-6 h-2 w-[27%] rounded-br-xl border-b border-r border-dashed border-[#18BCB7]/60" />

                <Tile
                    icon={CheckCircle2}
                    label="VALIDATE THE OUTCOME"
                    active
                />
            </div>
        </Frame>
    );
     case 'the-mvp-that-does-not-lie':
      return <Frame><div className="w-full max-w-[320px]">
        <div className="flex items-center gap-2"><Tile icon={Blocks} label="BUILD" active small /><Connector /><Tile icon={Play} label="TEST" small /><Connector /><Tile icon={Activity} label="LEARN" small /></div>
        <div className="mt-5 rounded-xl border border-slate-200 bg-white p-3"><div className="flex items-center justify-between"><span className="font-mono text-[10px] text-slate-600">Smallest useful release</span><Target className="h-4 w-4 text-[#18BCB7]" /></div><div className="mt-3 flex gap-1.5"><span className="h-2 w-1/2 rounded bg-[#18BCB7]/65" /><span className="h-2 w-1/4 rounded bg-[#18BCB7]/20" /><span className="h-2 flex-1 rounded bg-slate-100" /></div></div>
      </div></Frame>;
    case 'shipping-with-confidence':
      return <Frame><div className="w-full max-w-[335px]">
        <div className="flex items-center justify-between gap-1"><Tile icon={Code2} label="COMMIT" small /><ArrowRight className="h-3 w-3 shrink-0 text-[#18BCB7]"/><Tile icon={CheckCircle2} label="TEST" active small /><ArrowRight className="h-3 w-3 shrink-0 text-[#18BCB7]"/><Tile icon={Cloud} label="DEPLOY" small /></div>
        <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white p-3"><div className="flex items-center justify-between font-mono text-[10px] text-slate-500"><span>PIPELINE</span><Check className="h-3.5 w-3.5 text-[#119894]" /></div><div className="mt-3 flex gap-1.5">{[0,1,2,3,4,5,6].map(n=><span key={n} className={`h-1.5 flex-1 rounded ${n<5?'bg-[#18BCB7]/70':'bg-slate-100'}`} />)}</div></div>
      </div></Frame>;
    case 'design-systems-that-survive-growth':
      return <Frame><div className="flex w-full max-w-[300px] items-center gap-3">
        <div className="w-[37%] space-y-2 rounded-xl border border-slate-200 bg-white p-3"><span className="block font-mono text-[9px] text-slate-400">TOKENS</span><div className="flex gap-1">{['#0F172A','#18BCB7','#CBD5E1'].map(color=><span key={color} className="h-5 w-5 rounded-md" style={{background:color}}/>)}</div><div className="h-1.5 w-14 rounded bg-slate-200"/><div className="h-1.5 w-10 rounded bg-slate-100"/></div>
        <Connector />
        <div className="min-w-0 flex-1 rounded-xl border border-[#18BCB7]/25 bg-white p-3 shadow-sm"><span className="font-mono text-[9px] text-slate-400">COMPONENTS</span><div className="mt-3 rounded-md border border-slate-100 p-2"><span className="block h-1.5 w-3/4 rounded bg-slate-200"/><span className="mt-2 block h-3 w-12 rounded bg-[#18BCB7]" /></div><div className="mt-2 flex gap-1"><span className="h-5 flex-1 rounded border border-slate-200"/><span className="h-5 flex-1 rounded border border-slate-200"/></div></div>
      </div></Frame>;
    case 'outcomes-over-features':
      return <Frame><div className="w-full max-w-[310px] rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between"><span className="font-mono text-[10px] text-slate-500">OUTCOME TRACKING</span><Target className="h-4 w-4 text-[#18BCB7]"/></div>
        <svg viewBox="0 0 260 100" className="mt-3 w-full" fill="none" aria-hidden="true"><path d="M5 80H255M5 52H255M5 24H255" stroke="#E2E8F0" strokeDasharray="3 4"/><path d="M5 80L50 68 91 74 138 40 177 47 215 19 255 11" stroke="#18BCB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="215" cy="19" r="4" fill="#18BCB7"/><circle cx="255" cy="11" r="4" fill="#18BCB7"/></svg>
        <div className="flex items-center justify-between border-t border-slate-100 pt-2 font-mono text-[9px] text-slate-400"><span>OUTPUT ≠ IMPACT</span><span className="text-[#119894]">MEASURE VALUE</span></div>
      </div></Frame>;
    case 'when-to-modernize-and-when-to-rebuild':
      return <Frame><div className="w-full max-w-[325px]">
        <div className="mx-auto max-w-40"><Tile icon={Server} label="LEGACY SYSTEM" /></div><div className="mx-auto h-5 border-l border-dashed border-[#18BCB7]/60" style={{width:1}}/><div className="mx-auto w-[55%] border-t border-dashed border-[#18BCB7]/60"/><div className="mt-4 grid grid-cols-2 gap-4"><Tile icon={Route} label="MODERNIZE" active small/><Tile icon={Blocks} label="REBUILD" small/></div>
        <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[9px] text-slate-400"><span className="h-1.5 w-1.5 rounded-full bg-[#18BCB7]"/>CHOICE FOLLOWS EVIDENCE</div>
      </div></Frame>;
    case 'automation-that-actually-saves-time':
      return <Frame><div className="w-full max-w-[325px]">
        <div className="flex items-center gap-1.5"><Tile icon={Play} label="TRIGGER" small/><Connector/><Tile icon={Workflow} label="AUTOMATE" active small/><Connector/><Tile icon={Check} label="REVIEW" small/></div>
        <div className="mx-auto mt-5 flex max-w-44 items-center justify-between rounded-xl border border-[#18BCB7]/20 bg-white px-3 py-2"><span className="font-mono text-[9px] text-slate-500">Human in the loop</span><CheckCircle2 className="h-4 w-4 text-[#18BCB7]"/></div>
      </div></Frame>;
    case 'from-idea-to-launch-in-weeks':
      return <Frame><div className="relative w-full max-w-[320px] rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between"><span className="font-mono text-[10px] text-slate-500">LAUNCH ROADMAP</span><Rocket className="h-4 w-4 text-[#18BCB7]"/></div>
        <div className="mt-5 flex items-center justify-between gap-1">{[['01','IDEA'],['02','DESIGN'],['03','BUILD'],['04','LAUNCH']].map(([n,s],i)=><div key={n} className="flex min-w-0 flex-1 flex-col items-center gap-1"><span className={`flex h-8 w-8 items-center justify-center rounded-full border font-mono text-[10px] ${i===3?'border-[#18BCB7] bg-[#E7F9F7] text-[#119894]':'border-slate-200 bg-white text-slate-500'}`}>{i===3?<Rocket className="h-3.5 w-3.5"/>:n}</span><span className="font-mono text-[8px] text-slate-400">{s}</span></div>)}</div><div className="absolute left-[15%] right-[15%] top-[81px] -z-0 border-t border-dashed border-[#18BCB7]/40"/>
      </div></Frame>;
    case 'ai-agents-in-business-what-actually-works-in-2026':
      return <Frame><div className="w-full max-w-[320px]">
        <div className="mx-auto max-w-44"><Tile icon={Bot} label="AI ORCHESTRATOR" active /></div><div className="mx-auto h-5 w-px border-l border-dashed border-[#18BCB7]/60"/><div className="mx-auto w-2/3 border-t border-dashed border-[#18BCB7]/60"/><div className="mt-4 grid grid-cols-3 gap-2"><Tile icon={Database} label="DATA" small/><Tile icon={Workflow} label="TOOLS" small/><Tile icon={CheckCircle2} label="REVIEW" small/></div>
      </div></Frame>;
    case 'ai-assisted-software-development-beyond-the-hype':
      return <Frame><div className="w-full max-w-[325px] space-y-3">
        <div className="flex items-center gap-2"><Tile icon={Code2} label="ENGINEER" active small/><ArrowRight className="h-4 w-4 shrink-0 text-[#18BCB7]"/><Tile icon={Sparkles} label="AI ASSISTANT" small/></div>
        <div className="rounded-xl border border-slate-200 bg-white p-3"><div className="flex gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#18BCB7]"/><span className="h-1.5 w-1.5 rounded-full bg-slate-200"/></div><div className="mt-3 space-y-2"><div className="flex gap-2"><span className="h-1.5 w-12 rounded bg-[#18BCB7]/60"/><span className="h-1.5 w-24 rounded bg-slate-200"/></div><div className="ml-4 h-1.5 w-36 max-w-[80%] rounded bg-slate-100"/><div className="ml-4 h-1.5 w-20 rounded bg-[#18BCB7]/30"/></div></div>
        <div className="flex justify-end"><Tile icon={CheckCircle2} label="HUMAN REVIEW" active small/></div>
      </div></Frame>;
    case 'securing-ai-agents-and-connected-tools':
      return <Frame><div className="w-full max-w-[310px]">
        <div className="flex items-center justify-between gap-2"><Tile icon={Bot} label="AGENT" small/><span className="h-px flex-1 border-t border-dashed border-[#18BCB7]/60"/><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#18BCB7]/40 bg-[#E7F9F7]"><ShieldCheck className="h-7 w-7 text-[#119894]" strokeWidth={1.5}/></div><span className="h-px flex-1 border-t border-dashed border-[#18BCB7]/60"/><Tile icon={Database} label="TOOLS" small/></div>
        <div className="mt-5 grid grid-cols-3 gap-2"><div className="rounded-lg border border-slate-200 bg-white p-2 text-center font-mono text-[8px] text-slate-500">PERMISSIONS</div><div className="rounded-lg border border-slate-200 bg-white p-2 text-center font-mono text-[8px] text-slate-500">VALIDATION</div><div className="rounded-lg border border-slate-200 bg-white p-2 text-center font-mono text-[8px] text-slate-500">AUDITING</div></div>
      </div></Frame>;
    case 'cloud-native-infrastructure-for-ai-products':
      return <Frame><div className="w-full max-w-[320px]">
        <div className="mx-auto max-w-40"><Tile icon={BrainCircuit} label="AI WORKLOAD" active /></div><div className="mx-auto h-5 w-px border-l border-dashed border-[#18BCB7]/60"/><div className="rounded-2xl border border-[#18BCB7]/30 bg-white p-3 shadow-sm"><div className="mb-3 flex items-center justify-between"><span className="font-mono text-[9px] text-slate-500">CLOUD PLATFORM</span><Cloud className="h-4 w-4 text-[#18BCB7]"/></div><div className="grid grid-cols-3 gap-2"><Tile icon={Server} label="SERVE" small/><Tile icon={Database} label="STORE" small/><Tile icon={Activity} label="OBSERVE" small/></div></div>
      </div></Frame>;
    default:
      return <Frame><Tile icon={Braces} label="CODELARO INSIGHTS" active /></Frame>;
  }
}

/**
 * Reuse on the listing and detail page. Each article has its own coded visual.
 * Decorative UI only: headings and SEO stay as real HTML outside this component.
 */
export function InsightArticleVisual({ slug, variant = 'hero', className = '' }: VisualProps) {
  const config = VISUALS[slug] ?? { eyebrow: 'INSIGHTS', title: 'Technology perspectives', icon: Braces };
  const Icon = config.icon;
  const compact = variant === 'card';

  return (
    <div
      aria-hidden="true"
      className={`relative isolate flex w-full flex-col overflow-hidden rounded-[inherit] border border-slate-200/60 bg-[#F1F8F8] ${compact ? 'h-[300px]' : 'h-[280px] sm:h-[320px]'} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[.36] [background-image:linear-gradient(to_right,#18BCB71A_1px,transparent_1px),linear-gradient(to_bottom,#18BCB71A_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full bg-[#18BCB7]/10 blur-3xl" />
      <div className={`relative z-10 flex items-center justify-between gap-2 ${compact ? 'px-4 pt-4' : 'px-5 pt-5 sm:px-6 sm:pt-6'}`}>
        <span className="flex min-w-0 items-center gap-2 font-mono text-[9px] font-semibold tracking-[0.13em] text-[#119894] sm:text-[10px]"><Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8}/><span className="truncate">{config.eyebrow}</span></span>
        <span className="shrink-0 font-mono text-[9px] tracking-wider text-slate-400">C / INSIGHTS</span>
      </div>
      <div className={`relative flex min-h-0 flex-1 items-center justify-center ${compact ? 'px-2 py-1' : 'px-4 py-2'}`}>
        <VisualScene slug={slug} />
      </div>
      <div className={`relative z-10 flex items-center justify-between gap-3 border-t border-[#18BCB7]/10 ${compact ? 'px-4 py-3' : 'px-5 py-4 sm:px-6'}`}>
        <span className="truncate font-mono text-[9px] font-medium uppercase tracking-[.09em] text-slate-500">{config.title}</span>
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#18BCB7]" />
      </div>
    </div>
  );
}
