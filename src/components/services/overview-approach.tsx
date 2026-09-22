import { Link } from 'react-router';
import { ArrowRight, Compass, PenTool, Code2, Rocket, LineChart, LifeBuoy } from 'lucide-react';

const LIFECYCLE = [
	{
		icon: Compass,
		phase: 'Discover',
		description: 'We map your goals, constraints and users, then define scope and the fastest route to value.',
	},
	{
		icon: PenTool,
		phase: 'Design',
		description: 'We design the experience and architecture — flows, systems and a plan that holds up at scale.',
	},
	{
		icon: Code2,
		phase: 'Build',
		description: 'We engineer in working slices, integrating early and validating each release against real use.',
	},
	{
		icon: Rocket,
		phase: 'Launch',
		description: 'We ship to production with monitoring, testing and rollback — safely and on a clear cadence.',
	},
	{
		icon: LineChart,
		phase: 'Grow',
		description: 'We instrument, measure and iterate — turning real usage into the next set of improvements.',
	},
	{
		icon: LifeBuoy,
		phase: 'Care',
		description: 'We keep the product healthy after launch — patches, performance and ongoing support.',
	},
];

export function ServicesOverviewApproach() {
	return (
		<section className="relative overflow-hidden bg-navy text-white">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-40" />
			<div className="drift-slow pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

			<div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-28">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand">
						How we deliver
					</p>
					<h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
						Every service fits the same{' '}
						<span className="text-brand">lifecycle</span>.
					</h2>
					<p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
						Whatever discipline you engage us for, the work follows one connected path —
						from discovery to ongoing care — so each service builds toward the same
						outcome: a product that ships and keeps getting better.
					</p>
				</div>

				<div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
					{LIFECYCLE.map((step, i) => {
						const Icon = step.icon;
						return (
							<div
								key={step.phase}
								className="group relative bg-navy p-6 transition-colors hover:bg-navy-800 sm:p-7"
							>
								<div className="flex items-center justify-between">
									<span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 text-brand transition-colors group-hover:bg-brand group-hover:text-navy">
										<Icon className="h-5 w-5" strokeWidth={1.9} />
									</span>
									<span className="font-mono text-[13px] font-semibold text-slate-500">
										0{i + 1}
									</span>
								</div>
								<h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white">
									{step.phase}
								</h3>
								<p className="mt-2 text-[14px] leading-relaxed text-slate-400">
									{step.description}
								</p>
							</div>
						);
					})}
				</div>

				<div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:p-8">
					<div>
						<h3 className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
							Not sure which service you need?
						</h3>
						<p className="mt-1.5 text-[14px] text-slate-300 sm:text-[15px]">
							Tell us about your goals — we will map the right services and the fastest
							route to launch.
						</p>
					</div>
					<Link
						to="#contact"
						className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-brand px-6 font-display text-[15px] font-semibold text-navy shadow-lg shadow-brand/25 transition-all hover:bg-brand-400 hover:shadow-brand/40 active:scale-[0.98]"
					>
						Book a free consultation
						<ArrowRight className="h-4 w-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}
