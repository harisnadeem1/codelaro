import type { WorkProject } from '@/data/work';

/**
 * Context + Objectives — editorial sticky split. Light surface.
 */
export function CaseStudyContext({ project }: { project: WorkProject }) {
	return (
		<section className="relative overflow-hidden bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-40" />
			<div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
				<div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
					<div className="lg:col-span-4">
						<div className="lg:sticky lg:top-28">
							<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
								Context
							</p>
							<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
								The situation we walked into.
							</h2>
							<p className="mt-4 max-w-sm text-[15px] leading-relaxed text-slate-500">
								Every engagement starts by understanding the business, the people and
								the constraints — before any solution is proposed.
							</p>
						</div>
					</div>

					<div className="lg:col-span-8">
						<div className="space-y-5">
							{project.context.map((paragraph, i) => (
								<p
									key={i}
									className="text-[15px] leading-relaxed text-slate-600 sm:text-base"
								>
									{paragraph}
								</p>
							))}
						</div>

						<div className="mt-10 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8">
							<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700">
								Objectives
							</p>
							<h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-navy">
								What success looked like.
							</h3>
							<ul className="mt-6 space-y-4">
								{project.objectives.map((objective, i) => (
									<li key={i} className="flex gap-4">
										<span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-brand/10 font-mono text-[12px] font-bold text-brand">
											{String(i + 1).padStart(2, '0')}
										</span>
										<p className="pt-0.5 text-[15px] leading-relaxed text-slate-600">
											{objective}
										</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
