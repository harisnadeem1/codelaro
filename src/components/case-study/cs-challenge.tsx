import type { WorkProject } from '@/data/work';

/**
 * Challenge — dark editorial surface with friction framing.
 */
export function CaseStudyChallenge({ project }: { project: WorkProject }) {
	return (
		<section className="relative overflow-hidden bg-navy-900">
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-60"
			/>
			<span
				aria-hidden
				className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-brand/10 blur-3xl drift-slow"
			/>

			<div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
				<div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
					<div className="lg:col-span-5">
						<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand">
							The challenge
						</p>
						<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
							The problem in{' '}
							<span className="text-brand">business terms</span>.
						</h2>
						<p className="mt-4 max-w-sm text-[15px] leading-relaxed text-slate-400">
							We frame the challenge around the business — what was broken, missing,
							expensive or risky — not just the technology.
						</p>
					</div>

					<div className="lg:col-span-7">
						<ol className="relative">
							<span
								aria-hidden
								className="absolute left-[27px] top-3 bottom-3 w-px bg-white/10"
							/>
							{project.challenge.map((point, i) => (
								<li
									key={i}
									className="relative flex gap-6 border-b border-white/10 py-7 last:border-b-0"
								>
									<span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] font-display text-lg font-bold tabular-nums text-brand">
										{String(i + 1).padStart(2, '0')}
									</span>
									<p className="min-w-0 pt-1 text-[15px] leading-relaxed text-slate-300 sm:text-base">
										{point}
									</p>
								</li>
							))}
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
}
