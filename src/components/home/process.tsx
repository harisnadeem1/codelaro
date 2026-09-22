import { PROCESS_STEPS, type ProcessStep } from '@/data/process';
import { cn } from '@/lib/utils';

const PHASE_LABEL: Record<ProcessStep['phase'], string> = {
	code: 'Code',
	launch: 'Launch',
	grow: 'Grow',
};

const PHASE_ACCENT: Record<ProcessStep['phase'], string> = {
	code: 'text-brand',
	launch: 'text-brand',
	grow: 'text-brand',
};

/* ---------- desktop: connected horizontal journey ---------- */

function DesktopJourney() {
	return (
		<div className="hidden md:block">
			{/* phase markers */}
			<div className="mb-10 flex items-center justify-between px-1">
				{(['code', 'launch', 'grow'] as const).map((phase, i) => (
					<div
						key={phase}
						className={cn(
							'flex items-center gap-3',
							i === 0 && 'flex-1',
							i === 1 && 'flex-1 justify-center',
							i === 2 && 'flex-1 justify-end',
						)}
					>
						<span className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
							{PHASE_LABEL[phase]}
						</span>
						<span className="h-px w-10 bg-brand/40" aria-hidden />
					</div>
				))}
			</div>

			{/* timeline rail */}
			<div className="relative">
				<span
					aria-hidden
					className="absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-brand/10 via-brand/40 to-brand/10"
				/>
				<ol className="relative grid grid-cols-6 gap-3">
					{PROCESS_STEPS.map((step) => (
						<li key={step.number} className="flex flex-col items-center text-center">
							<span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-brand/40 bg-navy-900 font-display text-base font-bold text-brand shadow-lg shadow-brand/10">
								{step.number}
								<span
									aria-hidden
									className="absolute inset-0 rounded-full bg-brand/10 node-pulse"
								/>
							</span>
							<h3 className="mt-5 font-display text-base font-semibold tracking-tight text-white">
								{step.title}
							</h3>
							<p className="mt-2 text-[13px] leading-relaxed text-slate-400">
								{step.description}
							</p>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
}

/* ---------- mobile: vertical journey ---------- */

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
								<h3 className={cn('font-display text-base font-semibold tracking-tight text-white')}>
									{step.title}
								</h3>
								<span
									className={cn(
										'font-mono text-[10px] font-semibold uppercase tracking-[0.2em]',
										PHASE_ACCENT[step.phase],
									)}
								>
									{PHASE_LABEL[step.phase]}
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

/* ---------- section ---------- */

export function Process() {
	return (
		<section id="process" className="relative scroll-mt-24 overflow-hidden bg-navy-900">
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
						How We Work
					</p>
					<h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
						A connected journey from{' '}
						<span className="text-brand">first idea to lasting growth</span>.
					</h2>
					<p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
						Six disciplined stages, grouped into the three movements that define every
						Codelaro engagement.
					</p>
				</div>

				<div className="mt-16">
					<DesktopJourney />
					<MobileJourney />
				</div>

				{/* Code. Launch. Grow. reinforcement band */}
				<div className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-10 sm:gap-x-10">
					{(['Code', 'Launch', 'Grow'] as const).map((word, i) => (
						<div key={word} className="flex items-center gap-6 sm:gap-10">
							<span className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
								{word}
								<span className="text-brand">.</span>
							</span>
							{i < 2 && (
								<span
									aria-hidden
									className="hidden h-1.5 w-1.5 rounded-full bg-brand/60 sm:block"
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
