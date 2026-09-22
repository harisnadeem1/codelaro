import type { Solution } from '@/data/solutions';

export function SolutionJourney({ solution }: { solution: Solution }) {
	return (
		<section className="relative overflow-hidden bg-navy-900 text-white">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-50" />
			<div className="drift-slow pointer-events-none absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

			<div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-24">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand">
						Implementation journey
					</p>
					<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
						From problem to outcome, step by step
					</h2>
					<p className="mt-4 text-[15px] leading-relaxed text-slate-400 sm:text-base">
						A connected path — adapted to your scope and constraints — that turns the
						approach into a shipped result.
					</p>
				</div>

				{/* Desktop: horizontal connected workflow */}
				<div className="mt-14 hidden md:block">
					<div className="relative">
						{/* connecting line */}
						<span
							aria-hidden
							className="absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-brand/10 via-brand/40 to-brand/10"
						/>
						<div className="relative grid grid-cols-4 gap-5">
							{solution.journey.map((step) => (
								<div key={step.phase} className="flex flex-col">
									<div className="relative flex items-center gap-3">
										<span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-brand/40 bg-navy font-mono text-[15px] font-bold text-brand shadow-lg shadow-brand/10">
											{step.phase}
										</span>
										<span className="h-px flex-1 bg-brand/20" aria-hidden />
									</div>
									<h3 className="mt-5 font-display text-[16px] font-semibold leading-tight tracking-tight text-white">
										{step.title}
									</h3>
									<p className="mt-2 text-[13px] leading-relaxed text-slate-400">
										{step.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Mobile: vertical timeline */}
				<div className="mt-12 md:hidden">
					<div className="relative">
						<span
							aria-hidden
							className="absolute left-[27px] top-2 bottom-2 w-px bg-white/10"
						/>
						<ol className="space-y-8">
							{solution.journey.map((step) => (
								<li key={step.phase} className="relative flex gap-5">
									<span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-brand/40 bg-navy font-mono text-[15px] font-bold text-brand">
										{step.phase}
									</span>
									<div className="min-w-0 pt-1">
										<h3 className="font-display text-[16px] font-semibold leading-tight tracking-tight text-white">
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
				</div>
			</div>
		</section>
	);
}
