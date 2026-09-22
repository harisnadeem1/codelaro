import type { Industry } from '@/data/industries';

export function IndustryTechnology({ industry }: { industry: Industry }) {
	return (
		<section className="relative border-y border-slate-200/80 bg-white">
			<div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-24">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
						Technology possibilities
					</p>
					<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
						What becomes possible
					</h2>
					<p className="mt-4 text-[15px] leading-relaxed text-slate-500 sm:text-base">
						Directions we can take for {industry.title.toLowerCase()} — each scoped to
						your goals, constraints and existing systems.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-200/80 sm:grid-cols-2">
					{industry.technologyPossibilities.map((tech, i) => (
						<div
							key={tech.title}
							className="group relative bg-white p-6 transition-colors hover:bg-[#F8FAFC] sm:p-7"
						>
							<div className="flex items-center gap-3">
								<span className="h-8 w-1 rounded-full bg-brand/60 transition-colors group-hover:bg-brand" />
								<span className="font-mono text-[12px] font-semibold text-brand/60">
									{String(i + 1).padStart(2, '0')}
								</span>
							</div>
							<h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-navy">
								{tech.title}
							</h3>
							<p className="mt-2 text-[14px] leading-relaxed text-slate-600">
								{tech.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
