import { PROCESS_STEPS, type ProcessStep } from '@/data/process';
import { cn } from '@/lib/utils';

const PHASES: { key: ProcessStep['phase']; label: string; blurb: string }[] = [
	{
		key: 'code',
		label: 'Code',
		blurb: 'Understand the problem and design the right solution before committing to build.',
	},
	{
		key: 'launch',
		label: 'Launch',
		blurb: 'Engineer and ship with discipline — clean, tested and de-risked for release.',
	},
	{
		key: 'grow',
		label: 'Grow',
		blurb: 'Measure, iterate and scale the product with the business long after go-live.',
	},
];

function DesktopJourney() {
	return (
		<div className="hidden md:block">
			<div className="grid grid-cols-3 gap-5">
				{PHASES.map((phase) => {
					const steps = PROCESS_STEPS.filter((s) => s.phase === phase.key);
					return (
						<div key={phase.key} className="relative">
							{/* phase header */}
							<div className="mb-8 flex items-center gap-3">
								<span className="font-display text-2xl font-extrabold tracking-tight text-white">
									{phase.label}
									<span className="text-brand">.</span>
								</span>
								<span className="h-px flex-1 bg-brand/30" aria-hidden />
							</div>
							<p className="mb-8 text-[13px] leading-relaxed text-slate-400">
								{phase.blurb}
							</p>

							<ol className="relative space-y-8">
								<span
									aria-hidden
									className="absolute left-[19px] top-2 bottom-2 w-px bg-brand/25"
								/>
								{steps.map((step) => (
									<li key={step.number} className="relative flex gap-5">
										<span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand/40 bg-navy-900 font-display text-[13px] font-bold text-brand shadow-lg shadow-brand/10">
											{step.number}
											<span
												aria-hidden
												className="absolute inset-0 rounded-full bg-brand/10 node-pulse"
											/>
										</span>
										<div className="min-w-0 pt-1">
											<h3 className="font-display text-base font-semibold tracking-tight text-white">
												{step.title}
											</h3>
											<p className="mt-2 text-[13px] leading-relaxed text-slate-400">
												{step.description}
											</p>
										</div>
									</li>
								))}
							</ol>
						</div>
					);
				})}
			</div>
		</div>
	);
}

function MobileJourney() {
	return (
		<div className="md:hidden">
			<ol className="relative">
				<span
					aria-hidden
					className="absolute left-[27px] top-3 bottom-3 w-px bg-brand/25"
				/>
				{PROCESS_STEPS.map((step) => (
					<li key={step.number} className="relative flex gap-5 pb-8 last:pb-0">
						<span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-brand/40 bg-navy-900 font-display text-base font-bold text-brand">
							{step.number}
						</span>
						<div className="min-w-0 pt-1.5">
							<div className="flex items-center gap-2">
								<h3 className="font-display text-base font-semibold tracking-tight text-white">
									{step.title}
								</h3>
								<span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
									{PHASES.find((p) => p.key === step.phase)?.label}
								</span>
							</div>
							<p className="mt-2 text-[14px] leading-relaxed text-slate-400">
								{step.description}
							</p>
						</div>
					</li>
				))}
			</ol>
		</div>
	);
}

export function ProcessJourney() {
	return (
		<section className="relative scroll-mt-24 overflow-hidden bg-navy-900">
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-60"
			/>
			<span
				aria-hidden
				className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-brand/10 blur-3xl drift-slow"
			/>
			<span
				aria-hidden
				className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-brand/8 blur-3xl drift-slow"
			/>

			<div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-28">
				<div className="mx-auto max-w-2xl text-center">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand">
						How we work
					</p>
					<h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
						Six stages, three movements.
					</h2>
					<p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
						Every engagement follows the same disciplined arc — adapted to your scope,
						budget and timeline, never imposed as a rigid template.
					</p>
				</div>

				<div className="mt-16">
					<DesktopJourney />
					<MobileJourney />
				</div>

				<div className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-10 sm:gap-x-10">
					{PHASES.map((phase, i) => (
						<div key={phase.key} className="flex items-center gap-6 sm:gap-10">
							<span className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
								{phase.label}
								<span className="text-brand">.</span>
							</span>
							{i < PHASES.length - 1 && (
								<span
									aria-hidden
									className={cn('hidden h-1.5 w-1.5 rounded-full bg-brand/60 sm:block')}
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
