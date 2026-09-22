import type { WorkProject } from '@/data/work';

/**
 * Solution + Key Features — light surface with editorial copy and a feature grid.
 */
export function CaseStudySolution({ project }: { project: WorkProject }) {
	return (
		<section className="relative overflow-hidden bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-40" />
			<div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
				<div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
					<div className="lg:col-span-5">
						<div className="lg:sticky lg:top-28">
							<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
								Solution
							</p>
							<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
								What we built and why.
							</h2>
							<div className="mt-5 space-y-4">
								{project.solution.map((paragraph, i) => (
									<p
										key={i}
										className="text-[15px] leading-relaxed text-slate-600"
									>
										{paragraph}
									</p>
								))}
							</div>
						</div>
					</div>

					<div className="lg:col-span-7">
						<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700">
							Key features
						</p>
						<h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-navy">
							The capabilities that shipped.
						</h3>
						<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
							{project.keyFeatures.map((feature, i) => (
								<div
									key={i}
									className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-navy/5"
								>
									<span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 font-mono text-[12px] font-bold text-brand">
										{String(i + 1).padStart(2, '0')}
									</span>
									<h4 className="mt-4 font-display text-base font-semibold tracking-tight text-navy">
										{feature.title}
									</h4>
									<p className="mt-2 text-[13px] leading-relaxed text-slate-500">
										{feature.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
