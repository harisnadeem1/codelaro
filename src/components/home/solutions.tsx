import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type ComponentType,
} from 'react';
import { Link } from 'react-router';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Blocks,
  Braces,
  Check,
  CheckCircle2,
  CircleDot,
  Code2,
  Database,
  FileSpreadsheet,
  GitBranch,
  LayoutDashboard,
  Link2,
  Network,
  RefreshCw,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
  Play,
  Award,
  Layers3,
  UserPlus,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Business solutions are intentionally separate from technical services.
 * Slugs should also exist in your /solutions route data before deployment.
 */
type SolutionVisualType =
  | 'startup'
  | 'automation'
  | 'transformation'
  | 'modernization'
  | 'integration'
  | 'teams';

type HomepageSolution = {
  slug: string;
  title: string;
  eyebrow: string;
  outcome: string;
  explanation: string;
  capabilities: string[];
  visual: SolutionVisualType;
  icon: LucideIcon;
  visualDescription: string;
};

const HOMEPAGE_SOLUTIONS: HomepageSolution[] = [
  {
    slug: 'mvp-startup-launch',
    title: 'MVP & Startup Launch',
    eyebrow: 'From Idea to Market',
    outcome: 'Turn ambitious ideas into market-ready digital products.',
    explanation:
      'We help startups and entrepreneurs validate ideas, shape product requirements, and develop minimum viable products with a foundation for future growth.',
    capabilities: [
      'Product discovery & strategy',
      'MVP development',
      'Rapid prototyping',
      'Launch & iteration',
    ],
    visual: 'startup',
    icon: Rocket,
    visualDescription:
      'Illustrated MVP development roadmap progressing from discovery and prototype to a product launch.',
  },
  {
    slug: 'business-process-automation',
    title: 'Business Process Automation',
    eyebrow: 'Smarter Business Operations',
    outcome: 'Simplify operations and free your team from repetitive work.',
    explanation:
      'We connect business tools, automate manual processes, and introduce practical AI where it adds value, creating clearer workflows and more consistent operations.',
    capabilities: [
      'Workflow optimization',
      'Process automation',
      'AI-powered operations',
      'System connectivity',
    ],
    visual: 'automation',
    icon: Workflow,
    visualDescription:
      'Illustrated automated workflow routing an incoming request through AI processing to connected business tools.',
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    eyebrow: 'Modernize Your Business',
    outcome: 'Bring disconnected operations together in a digital ecosystem.',
    explanation:
      'We help organizations replace inefficient manual processes with connected digital platforms, accessible information, and workflows designed around their teams.',
    capabilities: [
      'Digital strategy',
      'Operational modernization',
      'Connected business platforms',
      'Data-driven workflows',
    ],
    visual: 'transformation',
    icon: Network,
    visualDescription:
      'Before-and-after illustration showing scattered spreadsheets and manual tasks becoming a connected digital workspace.',
  },
  {
    slug: 'legacy-system-modernization',
    title: 'Legacy System Modernization',
    eyebrow: 'Built for What Comes Next',
    outcome: 'Evolve existing software without starting from zero.',
    explanation:
      'We improve aging applications, refactor complex codebases, and plan practical migrations to more maintainable architectures while preserving critical functionality.',
    capabilities: [
      'Application modernization',
      'Architecture improvements',
      'Platform migration',
      'Performance optimization',
    ],
    visual: 'modernization',
    icon: RefreshCw,
    visualDescription:
      'Illustration of a legacy monolithic application being modernized into modular interface, API, and data components.',
  },
  {
    slug: 'system-integration',
    title: 'System Integration',
    eyebrow: 'Everything Connected',
    outcome: 'Make your tools and business data work together.',
    explanation:
      'We integrate third-party platforms, internal applications, and APIs to create reliable data flows, reduce duplicate work, and improve visibility across operations.',
    capabilities: [
      'Third-party integrations',
      'API connectivity',
      'Data synchronization',
      'Unified workflows',
    ],
    visual: 'integration',
    icon: Blocks,
    visualDescription:
      'Hub-and-spoke illustration connecting CRM, billing, analytics, and inventory through a central integration layer.',
  },
  {
    slug: 'dedicated-development-teams',
    title: 'Dedicated Development Teams',
    eyebrow: 'Extend Your Capabilities',
    outcome: 'Add engineering capacity without losing team alignment.',
    explanation:
      'We collaborate with in-house teams to contribute engineering expertise, support product roadmaps, and maintain a transparent, shared development workflow.',
    capabilities: [
      'Team augmentation',
      'Technical collaboration',
      'Product engineering',
      'Ongoing development',
    ],
    visual: 'teams',
    icon: Users,
    visualDescription:
      'Illustration of a client team and Codelaro engineers collaborating on a shared product development board.',
  },
];

/* -------------------------------------------------------------------------
   Shared visual primitives
   All figures are lightweight CSS/SVG illustrations; there are no remote
   images, layout-shifting assets, or invented client performance statistics.
--------------------------------------------------------------------------- */

const GLASS =
  'rounded-2xl border border-white/[0.11] bg-[#16253b]/95 shadow-[0_15px_45px_rgba(0,0,0,0.24)] backdrop-blur-xl';
const OVERLINE = 'text-[9px] font-semibold uppercase tracking-[0.17em] text-slate-400';

type VisualProps = { isActive: boolean };

function Reveal({
  children,
  isActive,
  delay = 0,
  className,
  direction = 'up',
}: {
  children: ReactNode;
  isActive: boolean;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'scale';
}) {
  const inactive = {
    up: 'translate-y-5 opacity-0',
    left: '-translate-x-5 opacity-0',
    right: 'translate-x-5 opacity-0',
    scale: 'scale-90 opacity-0',
  }[direction];

  return (
    <div
      className={cn(
        'transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transform-none motion-reduce:transition-none',
        isActive ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : inactive,
        className,
      )}
      style={{ transitionDelay: isActive ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}

function Scene({
  description,
  children,
}: {
  description: string;
  children: ReactNode;
}) {
  return (
    <figure
      role="img"
      aria-label={description}
      className="relative mx-auto h-[320px] w-full max-w-[520px] overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#101c2f] shadow-[0_35px_100px_rgba(0,0,0,0.2)] sm:h-[345px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,.045) 1px,transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to bottom,black,transparent)',
        }}
      />
      <span aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/[0.06] blur-[65px]" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-white/[0.025] blur-[60px]" />
      {children}
    </figure>
  );
}

function VisualTag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#101c2f]/90 px-2.5 py-1.5 text-[9px] font-medium tracking-wide text-slate-300', className)}>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
      {children}
    </span>
  );
}

function IconBox({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <span className={cn('grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.035] text-slate-300', className)}>
      <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
    </span>
  );
}

/* 01 — MVP & Startup Launch: product-roadmap + overlapping MVP preview. */
function StartupVisual({ isActive }: VisualProps) {
  const phases = [
    { label: 'Discovery', note: 'Validate the idea', done: true },
    { label: 'Prototype', note: 'Test key journeys', done: true },
    { label: 'MVP build', note: 'Ship the essentials', done: false },
  ];

  return (
    <Scene description={HOMEPAGE_SOLUTIONS[0].visualDescription}>
      <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-2 sm:left-7 sm:right-7">
        <span className={OVERLINE}>PRODUCT JOURNEY</span>
        <VisualTag>From idea to launch</VisualTag>
      </div>

      <Reveal isActive={isActive} delay={60} direction="left" className={cn(GLASS, 'absolute left-[5%] top-[21%] w-[68%] p-4 sm:p-5')}>
        <div className="flex items-center gap-2.5 border-b border-white/[0.08] pb-3">
          <IconBox icon={Rocket} className="border-brand/20 bg-brand/[0.07] text-brand" />
          <div>
            <p className="text-xs font-semibold text-white sm:text-sm">Product roadmap</p>
            <p className="mt-0.5 text-[10px] text-slate-500">Your next big idea</p>
          </div>
        </div>
        <div className="mt-3 space-y-3 sm:mt-4">
          {phases.map((phase, index) => (
            <div key={phase.label} className="flex items-center gap-2.5">
              <div className={cn('grid h-6 w-6 shrink-0 place-items-center rounded-full border text-[10px] font-bold', phase.done ? 'border-brand/30 bg-brand/[0.09] text-brand' : 'border-white/15 text-slate-300')}>
                {phase.done ? <Check className="h-3 w-3" /> : index + 1}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-medium text-white sm:text-xs">{phase.label}</p>
                <p className="hidden text-[10px] text-slate-500 min-[400px]:block">{phase.note}</p>
              </div>
              {index === 2 && <span className="rounded-full bg-brand/[0.08] px-2 py-1 text-[9px] text-brand">In progress</span>}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal isActive={isActive} delay={220} direction="right" className={cn(GLASS, 'absolute right-[4%] top-[38%] w-[43%] overflow-hidden p-3 sm:p-4')}>
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
          <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">MVP preview</span>
          <CircleDot className="h-3.5 w-3.5 text-brand" />
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand/[0.10]"><LayoutDashboard className="h-3.5 w-3.5 text-brand" /></span>
          <span className="text-[11px] font-semibold text-white">Your product</span>
        </div>
        <div className="mt-3 h-1.5 w-3/4 rounded-full bg-white/35" />
        <div className="mt-1.5 h-1.5 w-full rounded-full bg-white/10" />
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => <span key={i} className={cn('h-8 rounded-md border border-white/[0.07]', i === 1 ? 'bg-brand/[0.14]' : 'bg-white/[0.035]')} />)}
        </div>
        <div className="mt-3 h-6 w-full rounded-md bg-brand/[0.65]" />
      </Reveal>

      <Reveal isActive={isActive} delay={340} className="absolute bottom-[5%] left-[6%]">
        <VisualTag>Build · Learn · Launch</VisualTag>
      </Reveal>
    </Scene>
  );
}

/* 02 — Business Process Automation: a genuine branching process diagram. */
function AutomationVisual({
	isActive,
}: {
	isActive: boolean;
}) {
	const steps = [
		{
			title: 'Trigger',
			description: 'New request received',
			icon: Play,
		},
		{
			title: 'AI Process',
			description: 'Understand & decide',
			icon: Sparkles,
		},
		{
			title: 'Workflow',
			description: 'Systems connected',
			icon: Workflow,
		},
		{
			title: 'Complete',
			description: 'Action delivered',
			icon: Check,
		},
	];

	return (
		<div
			className="
				relative mx-auto
				flex h-[370px]
				w-full max-w-[510px]
				items-center
			"
		>
			<div className="relative w-full px-7">
				<div
					aria-hidden="true"
					className="
						absolute bottom-7
						left-[58px] top-7
						w-px
						bg-gradient-to-b
						from-brand/50
						via-brand/20
						to-transparent
					"
				/>

				<div className="space-y-3">
					{steps.map((step, index) => {
						const Icon = step.icon;

						return (
							<div
								key={step.title}
								className={cn(
									`
										relative flex
										items-center gap-4
										transition-all duration-700
										ease-[cubic-bezier(0.22,1,0.36,1)]
									`,
									isActive
										? 'translate-x-0 opacity-100'
										: index % 2 === 0
											? '-translate-x-10 opacity-0'
											: 'translate-x-10 opacity-0',
								)}
								style={{
									transitionDelay: isActive
										? `${100 + index * 110}ms`
										: '0ms',
								}}
							>
								<div
									className="
										relative z-10
										grid h-[58px] w-[58px]
										shrink-0 place-items-center
										rounded-2xl
										border border-brand/20
										bg-[#132138]
										text-brand
										shadow-xl shadow-black/20
									"
								>
									<Icon
										className="h-[18px] w-[18px]"
										strokeWidth={1.7}
									/>
								</div>

								<div
									className="
										flex flex-1
										items-center
										justify-between
										rounded-2xl
										border border-white/[0.075]
										bg-white/[0.025]
										px-5 py-3.5
									"
								>
									<div>
										<p className="text-[13px] font-semibold text-white">
											{step.title}
										</p>

										<p className="mt-1 text-[10px] text-slate-500">
											{step.description}
										</p>
									</div>

									<span
										className="
											font-display
											text-[10px]
											font-semibold
											text-brand
										"
									>
										0{index + 1}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

/* 03 — Digital Transformation: scattered manual work -> one digital hub. */
function TransformationVisual({ isActive }: VisualProps) {
  const before = [
    { icon: FileSpreadsheet, text: 'Spreadsheets' },
    { icon: Settings2, text: 'Manual tasks' },
    { icon: Database, text: 'Data silos' },
  ];

  return (
    <Scene description={HOMEPAGE_SOLUTIONS[2].visualDescription}>
      <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-2 sm:left-7 sm:right-7">
        <span className={OVERLINE}>DIGITAL EVOLUTION</span>
        <VisualTag>One connected workspace</VisualTag>
      </div>

      <Reveal isActive={isActive} delay={60} direction="left" className={cn(GLASS, 'absolute left-[4%] top-[24%] w-[36%] p-3 sm:p-4')}>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Before</p>
        <div className="mt-3 space-y-2.5">
          {before.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.025] px-2 py-2">
              <Icon className="h-3.5 w-3.5 shrink-0 text-slate-500" aria-hidden="true" />
              <span className="text-[10px] text-slate-300 sm:text-[11px]">{text}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal isActive={isActive} delay={200} direction="scale" className="absolute left-[44%] top-[48%] z-20 grid h-9 w-9 place-items-center rounded-full border border-brand/25 bg-[#16283d] text-brand sm:left-[45%]">
        <ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
      </Reveal>

      <Reveal isActive={isActive} delay={280} direction="right" className={cn(GLASS, 'absolute right-[4%] top-[21%] w-[43%] border-brand/20 p-3 sm:p-4')}>
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-brand">After</p>
            <p className="mt-1 text-[11px] font-semibold text-white sm:text-sm">Digital platform</p>
          </div>
          <IconBox icon={LayoutDashboard} className="hidden border-brand/20 bg-brand/[0.07] text-brand min-[400px]:grid" />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {['Unified data', 'Live visibility', 'Team access', 'Workflows'].map((label, index) => (
            <div key={label} className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2">
              <span className={cn('block h-1 w-6 rounded-full', index === 0 ? 'bg-brand/75' : 'bg-white/20')} />
              <p className="mt-2 text-[9px] leading-3 text-slate-300 sm:text-[10px]">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-[9px] text-brand">
          <CheckCircle2 className="h-3 w-3" /> Connected operations
        </div>
      </Reveal>

      <Reveal isActive={isActive} delay={400} className="absolute bottom-[6%] left-[6%]">
        <VisualTag>People · Processes · Platforms</VisualTag>
      </Reveal>
    </Scene>
  );
}

/* 04 — Legacy Modernization: explicitly an architecture upgrade, not just
   a repeat of the business-wide digital transformation illustration. */
function ModernizationVisual({
	isActive,
}: {
	isActive: boolean;
}) {
	return (
		<div className="relative mx-auto h-[370px] w-full max-w-[510px]">
			<div className="flex h-full flex-col items-center justify-center gap-4">
				{/* Legacy card */}
				<div
					className={cn(
						`
							w-[86%] max-w-[380px]
							rounded-2xl
							border border-dashed
							border-white/15
							bg-white/[0.015]
							p-5
							opacity-60
							transition-all duration-700
						`,
						isActive
							? 'translate-y-0 opacity-60'
							: '-translate-y-4 opacity-0',
					)}
				>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div
								className="
									grid h-9 w-9
									place-items-center
									rounded-lg
									border border-white/10
									bg-white/[0.03]
									text-slate-500
								"
							>
								<Server className="h-4 w-4" />
							</div>

							<div>
								<p className="text-xs font-semibold text-slate-400">
									Legacy system
								</p>

								<p className="mt-0.5 text-[10px] text-slate-600">
									v1.0 · Outdated
								</p>
							</div>
						</div>

						<span className="h-2 w-2 rounded-full bg-slate-600" />
					</div>
				</div>

				{/* Refresh connector */}
				<div
					className={cn(
						`
							grid h-11 w-11
							place-items-center
							rounded-full
							border border-brand/25
							bg-brand/[0.08]
							text-brand
							transition-all duration-700 delay-150
						`,
						isActive
							? 'rotate-0 scale-100 opacity-100'
							: '-rotate-90 scale-75 opacity-0',
					)}
				>
					<RefreshCw className="h-5 w-5" strokeWidth={1.8} />
				</div>

				{/* Modern card */}
				<div
					className={cn(
						`
							w-[86%] max-w-[380px]
							rounded-2xl
							border border-brand/25
							bg-[#111d31]/95
							p-5
							shadow-xl shadow-black/20
							transition-all duration-700 delay-300
						`,
						isActive
							? 'translate-y-0 opacity-100'
							: 'translate-y-4 opacity-0',
					)}
				>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div
								className="
									grid h-9 w-9
									place-items-center
									rounded-lg
									bg-brand/[0.08]
									text-brand
								"
							>
								<Layers3 className="h-4 w-4" />
							</div>

							<div>
								<p className="text-xs font-semibold text-white">
									Modern platform
								</p>

								<p className="mt-0.5 text-[10px] text-brand">
									v2.0 · Upgraded
								</p>
							</div>
						</div>

						<span className="h-2 w-2 rounded-full bg-brand" />
					</div>

					<div className="mt-4 space-y-1.5">
						<div className="h-1 rounded-full bg-white/[0.07]">
							<div className="h-full w-[88%] rounded-full bg-brand/60" />
						</div>

						<div className="h-1 rounded-full bg-white/[0.07]">
							<div className="h-full w-[62%] rounded-full bg-white/20" />
						</div>
					</div>
				</div>
			</div>

			<div
				className={cn(
					`
						absolute right-[3%] top-[10%]
						w-[165px]
						rounded-2xl
						border border-white/10
						bg-[#17243a]/95
						p-4
						shadow-2xl shadow-black/30
						backdrop-blur-xl
						transition-all
						delay-500 duration-700
					`,
					isActive
						? 'translate-x-0 opacity-100'
						: 'translate-x-8 opacity-0',
				)}
			>
				<div className="flex items-center gap-3">
					<Award className="h-5 w-5 text-brand" />

					<div>
						<p className="text-[11px] font-semibold text-white">
							Zero downtime
						</p>

						<p className="mt-0.5 text-[9px] text-slate-500">
							Seamless migration
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
/* 05 — System Integration: central API orchestration hub with four systems. */
function IntegrationVisual({ isActive }: VisualProps) {
  const integrations = [
    { title: 'CRM', icon: Users, position: 'left-[5%] top-[22%]', delay: 80 },
    { title: 'Billing', icon: ShieldCheck, position: 'right-[5%] top-[22%]', delay: 180 },
    { title: 'Analytics', icon: Activity, position: 'left-[5%] bottom-[13%]', delay: 310 },
    { title: 'Inventory', icon: Database, position: 'right-[5%] bottom-[13%]', delay: 410 },
  ];

  return (
    <Scene description={HOMEPAGE_SOLUTIONS[4].visualDescription}>
      <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-2 sm:left-7 sm:right-7">
        <span className={OVERLINE}>INTEGRATION NETWORK</span>
        <VisualTag>Reliable data exchange</VisualTag>
      </div>

      <svg className="pointer-events-none absolute inset-0 h-full w-full text-brand/35" viewBox="0 0 520 345" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M260 169 L135 117 M260 169 L385 117 M260 169 L135 263 M260 169 L385 263" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 6" />
        <circle cx="203" cy="145" r="3" fill="currentColor" />
        <circle cx="321" cy="219" r="3" fill="currentColor" />
      </svg>

      <div className="absolute left-1/2 top-[49%] z-10 w-[35%] -translate-x-1/2 -translate-y-1/2">
        <Reveal isActive={isActive} delay={170} direction="scale" className={cn(GLASS, 'border-brand/20 p-3 text-center sm:p-4')}>
          <div className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-brand/[0.09] text-brand">
            <Network className="h-5 w-5" strokeWidth={1.6} />
          </div>
          <p className="mt-2 text-[10px] font-semibold text-white sm:text-xs">Integration hub</p>
          <p className="mt-1 text-[9px] text-slate-500">APIs + data flows</p>
        </Reveal>
      </div>

      {integrations.map(({ title, icon: Icon, position, delay }) => (
        <Reveal key={title} isActive={isActive} delay={delay} direction="up" className={cn(GLASS, 'absolute flex w-[28%] items-center gap-1.5 px-2 py-3 sm:gap-2 sm:px-3', position)}>
          <Icon className="h-4 w-4 shrink-0 text-slate-300" strokeWidth={1.7} aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-[10px] font-semibold text-white sm:text-xs">{title}</p>
            <p className="text-[9px] text-slate-500">Connected</p>
          </div>
        </Reveal>
      ))}

      <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 whitespace-nowrap">
        <Reveal isActive={isActive} delay={490}>
          <VisualTag>One connected ecosystem</VisualTag>
        </Reveal>
      </div>
    </Scene>
  );
}

function VisualLabel({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<span
			className={cn(
				`
					inline-flex items-center gap-2
					rounded-full
					border border-white/10
					bg-navy/80
					px-3 py-1.5
					text-[9px] font-semibold
					uppercase tracking-[0.18em]
					text-slate-400
					backdrop-blur-xl
				`,
				className,
			)}
		>
			<span className="h-1.5 w-1.5 rounded-full bg-brand" />
			{children}
		</span>
	);
}

/* 06 — Dedicated Development Teams: two groups + one delivery board. */
function TeamsVisual({
	isActive,
}: {
	isActive: boolean;
}) {
	const members = [
		{
			role: 'Frontend',
			status: 'Active',
			initials: 'FE',
		},
		{
			role: 'Backend',
			status: 'Active',
			initials: 'BE',
		},
		{
			role: 'QA',
			status: 'Testing',
			initials: 'QA',
		},
	];

	return (
		<div className="relative mx-auto h-[370px] w-full max-w-[510px]">
			<div
				className={cn(
					`
						absolute left-1/2 top-[3%]
						z-20
						-translate-x-1/2
						rounded-[1.8rem]
						border border-brand/20
						bg-[#142239]
						px-7 py-4
						shadow-[0_0_80px_rgba(24,188,183,0.10)]
						transition-all duration-700
					`,
					isActive
						? 'translate-y-0 scale-100 opacity-100'
						: '-translate-y-6 scale-90 opacity-0',
				)}
			>
				<div className="flex items-center gap-4">
					<div
						className="
							grid h-10 w-10
							place-items-center
							rounded-xl
							bg-brand/[0.08]
							text-brand
						"
					>
						<Users className="h-5 w-5" />
					</div>

					<div>
						<p
							className="
								text-[9px] font-semibold
								uppercase tracking-[0.17em]
								text-slate-500
							"
						>
							Your extended team
						</p>

						<p className="mt-1 text-sm font-semibold text-white">
							Team velocity: +32%
						</p>
					</div>
				</div>
			</div>

			<div
				className="
					absolute inset-x-0
					bottom-[13%]
					grid grid-cols-3 gap-4
				"
			>
				{members.map((member, index) => (
					<div
						key={member.role}
						className={cn(
							`
								rounded-2xl
								border border-white/[0.09]
								bg-[#111d31]/90
								p-4
								shadow-xl shadow-black/20
								backdrop-blur-xl
								transition-all duration-700
							`,
							isActive
								? 'translate-y-0 opacity-100'
								: 'translate-y-10 opacity-0',
						)}
						style={{
							transitionDelay: isActive
								? `${180 + index * 120}ms`
								: '0ms',
						}}
					>
						<div className="flex items-center justify-between">
							<div
								className="
									grid h-8 w-8
									place-items-center
									rounded-lg
									border border-brand/20
									bg-brand/[0.08]
									text-[9px]
									font-bold
									text-brand
								"
							>
								{member.initials}
							</div>

							<span className="h-2 w-2 rounded-full bg-brand" />
						</div>

						<p className="mt-5 text-xs font-semibold text-white">
							{member.role}
						</p>

						<p className="mt-1 text-[10px] text-slate-500">
							{member.status}
						</p>

						<div className="mt-4 space-y-1.5">
							<div className="h-1 rounded-full bg-white/[0.07]">
								<div className="h-full w-[72%] rounded-full bg-brand/50" />
							</div>

							<div className="h-1 rounded-full bg-white/[0.07]">
								<div className="h-full w-[48%] rounded-full bg-white/20" />
							</div>
						</div>
					</div>
				))}
			</div>

			<div
				className={cn(
					`
						absolute bottom-0
						left-1/2
						-translate-x-1/2
						flex items-center gap-2
						transition-all
						delay-500 duration-700
					`,
					isActive
						? 'translate-y-0 opacity-100'
						: 'translate-y-4 opacity-0',
				)}
			>
				<VisualLabel>
					<UserPlus className="h-2.5 w-2.5" />
					Talent on demand
				</VisualLabel>
			</div>
		</div>
	);
}

const VISUALS: Record<SolutionVisualType, ComponentType<VisualProps>> = {
  startup: StartupVisual,
  automation: AutomationVisual,
  transformation: TransformationVisual,
  modernization: ModernizationVisual,
  integration: IntegrationVisual,
  teams: TeamsVisual,
};

function SolutionIllustration({ solution, isActive }: { solution: HomepageSolution; isActive: boolean }) {
  const Visual = VISUALS[solution.visual];
  return <Visual isActive={isActive} />;
}

/* -------------------------------------------------------------------------
   One responsive DOM tree — rather than duplicate desktop/mobile sections.
   This avoids repeating SEO content and still provides the scroll-pinned
   desktop experience. On mobile, all six articles are in a natural flow.
--------------------------------------------------------------------------- */

function SolutionArticle({
  solution,
  index,
  activeIndex,
  isDesktop,
}: {
  solution: HomepageSolution;
  index: number;
  activeIndex: number;
  isDesktop: boolean;
}) {
  const Icon = solution.icon;
  const active = activeIndex === index;
  const showVisual = !isDesktop || active;
  const inaccessible = isDesktop && !active;
  const number = String(index + 1).padStart(2, '0');

  return (
    <article
      aria-labelledby={`solution-title-${solution.slug}`}
      aria-hidden={inaccessible || undefined}
      className={cn(
        'relative grid gap-6 border-t border-white/[0.08] py-10 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] last:border-b motion-reduce:transform-none motion-reduce:transition-none sm:gap-9 sm:py-14',
        'lg:absolute lg:inset-0 lg:grid-cols-12 lg:items-center lg:gap-10 lg:border-0 lg:py-0 lg:last:border-0',
        active
          ? 'lg:z-20 lg:translate-y-0 lg:opacity-100'
          : index < activeIndex
            ? 'lg:pointer-events-none lg:z-0 lg:-translate-y-6 lg:opacity-0'
            : 'lg:pointer-events-none lg:z-0 lg:translate-y-6 lg:opacity-0',
      )}
    >
      <div className="min-w-0 lg:col-span-6 lg:pr-4 xl:pr-10">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-brand/20 bg-brand/[0.06] text-brand">
            <Icon className="h-[18px] w-[18px]" strokeWidth={1.65} aria-hidden="true" />
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">{solution.eyebrow}</p>
            <p className="mt-1 text-[10px] text-slate-500">{number} / {String(HOMEPAGE_SOLUTIONS.length).padStart(2, '0')}</p>
          </div>
        </div>

        <h3
          id={`solution-title-${solution.slug}`}
          className="mt-5 max-w-2xl font-display text-[2rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[2.4rem] lg:text-[clamp(2rem,3.1vw,3.4rem)] lg:leading-[1.02]"
        >
          {solution.title}
        </h3>
        <p className="mt-4 max-w-xl text-base font-medium leading-7 text-slate-200 lg:text-[1.1rem] lg:leading-8">
          {solution.outcome}
        </p>
        <p className="mt-3 max-w-xl text-[14px] leading-7 text-slate-400">
          {solution.explanation}
        </p>

        <ul className="mt-5 grid max-w-xl gap-x-5 gap-y-2.5 sm:grid-cols-2" aria-label={`${solution.title} capabilities`}>
          {solution.capabilities.map((capability) => (
            <li key={capability} className="flex items-start gap-2.5 text-[12px] leading-5 text-slate-300 sm:text-[13px]">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" strokeWidth={2} aria-hidden="true" />
              {capability}
            </li>
          ))}
        </ul>

        <Link
          to={`/solutions/${solution.slug}`}
          tabIndex={inaccessible ? -1 : 0}
          aria-label={`Explore Codelaro's ${solution.title} solution`}
          className="group mt-7 inline-flex w-fit items-center gap-3 text-[14px] font-semibold text-white outline-none transition-colors duration-300 hover:text-brand focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          Explore solution
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition-[background-color,border-color] duration-300 group-hover:border-brand/30 group-hover:bg-brand/[0.07]">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" aria-hidden="true" />
          </span>
        </Link>
      </div>

      <div className="relative min-w-0 lg:col-span-6">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-1 -top-8 hidden select-none font-display text-[8rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.025] lg:block"
        >
          {number}
        </span>
        <SolutionIllustration solution={solution} isActive={showVisual} />
      </div>
    </article>
  );
}

export function Solutions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRaf = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // The section only pins on spacious desktop layouts. Reduced-motion users
  // receive the same content and are not subjected to decorative animations.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');
    const sync = () => setIsDesktop(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const update = () => {
      const element = containerRef.current;
      if (!element) return;
  const stickyHeight = Math.max(window.innerHeight, 1);

const totalDistance = Math.max(
  element.offsetHeight - stickyHeight,
  1
);

const distanceTravelled = Math.min(
  Math.max(
    -element.getBoundingClientRect().top,
    0
  ),
  totalDistance
);
      const progress = distanceTravelled / totalDistance;
      const nextIndex = Math.min(
        HOMEPAGE_SOLUTIONS.length - 1,
        Math.floor(progress * HOMEPAGE_SOLUTIONS.length),
      );
      setActiveIndex((previous) => (previous === nextIndex ? previous : nextIndex));
    };

    const scheduleUpdate = () => {
      if (scrollRaf.current !== null) return;
      scrollRaf.current = window.requestAnimationFrame(() => {
        scrollRaf.current = null;
        update();
      });
    };

    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (scrollRaf.current !== null) window.cancelAnimationFrame(scrollRaf.current);
      scrollRaf.current = null;
    };
  }, [isDesktop]);

  // CSS variable is only applied at lg; mobile height stays content-driven.
  const scrollHeight = {
    '--solutions-scroll-height': `calc(100svh + ${(HOMEPAGE_SOLUTIONS.length - 1) * 64}svh)`,
  } as CSSProperties;

  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="relative scroll-mt-20 overflow-clip bg-navy"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="absolute inset-0 bg-blueprint-grid-dark opacity-[0.07]" />
        <span className="absolute -left-56 top-[10%] h-[30rem] w-[30rem] rounded-full bg-brand/[0.035] blur-3xl" />
        <span className="absolute -right-48 bottom-0 h-[30rem] w-[30rem] rounded-full bg-white/[0.015] blur-3xl" />
      </div>

      <div
        ref={containerRef}
        className="relative lg:h-[var(--solutions-scroll-height)]"
        style={scrollHeight}
      >
        <div
  className="
    relative mx-auto flex w-full max-w-8xl
    flex-col px-5 pb-16 pt-16

    sm:px-8 sm:pb-20

    lg:sticky
    lg:top-0
    lg:h-svh
    lg:min-h-[650px]
    lg:px-10
    lg:pt-16
    lg:pb-8
  "
>
          <header className="flex shrink-0 flex-wrap items-end justify-between gap-x-8 gap-y-5 lg:gap-y-0">
            <div className="max-w-[820px]">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-7 bg-brand" />
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand">Business solutions</p>
              </div>
              <h2
                id="solutions-heading"
                className="mt-4 max-w-3xl font-display text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-[2.8rem] lg:mt-3 lg:text-[clamp(2rem,2.6vw,2.6rem)]"
              >
                Complex challenges. <span className="text-slate-400">Smarter digital solutions.</span>
              </h2>
              <p className="mt-3 max-w-2xl text-[14px] leading-6 text-slate-400 lg:mt-2">
                From MVP development and business process automation to digital transformation and system integration, we help businesses solve real operational challenges.
              </p>
            </div>
            <Link
              to="/solutions"
              className="group inline-flex shrink-0 items-center gap-2.5 text-[16px] font-semibold text-slate-200 transition-colors hover:text-brand focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              View all Solutions
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition-colors group-hover:border-brand/30 group-hover:bg-brand/[0.06]">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          </header>

          <div className="mt-4 hidden shrink-0 items-center gap-5  border-white/[0.07] pt-3 lg:flex" aria-label="Solutions scroll progress">
            <p className="whitespace-nowrap font-display text-sm font-semibold text-white" aria-live="off">
              {String(activeIndex + 1).padStart(2, '0')}
              <span className="mx-2 text-slate-600">/</span>
              <span className="text-slate-500">{String(HOMEPAGE_SOLUTIONS.length).padStart(2, '0')}</span>
            </p>
            <div className="flex flex-1 gap-1.5" aria-hidden="true">
              {HOMEPAGE_SOLUTIONS.map((solution, index) => (
                <span key={solution.slug} className="h-px flex-1 overflow-hidden bg-white/[0.1]">
                  <span
                    className={cn('block h-full origin-left bg-brand transition-transform duration-500 motion-reduce:transition-none', index <= activeIndex ? 'scale-x-100' : 'scale-x-0')}
                  />
                </span>
              ))}
            </div>
            <p className="hidden text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500 xl:block">Scroll to explore</p>
          </div>

          <div className="relative mt-5 min-h-0 lg:mt-1 lg:flex-1">
            {HOMEPAGE_SOLUTIONS.map((solution, index) => (
              <SolutionArticle
                key={solution.slug}
                solution={solution}
                index={index}
                activeIndex={activeIndex}
                isDesktop={isDesktop}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
