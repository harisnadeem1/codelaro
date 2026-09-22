import type { Industry } from '@/data/industries';

export function IndustryChallenges({ industry }: { industry: Industry }) {
	return (
		<section className="relative bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-40" />
			<div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-24">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
						Common digital challenges
					</p>
					<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
						Where this industry feels the strain
					</h2>
					<p className="mt-5 text-[15px] leading-relaxed text-slate-500 sm:text-base">
						{industry.challengeIntro}
					</p>
				</div>

				<ol className="mt-12 space-y-4">
					{industry.challengePoints.map((point, i) => (
						<li
							key={point.title}
							className="group relative grid gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 transition-all hover:border-brand/40 hover:shadow-lg hover:shadow-navy/5 sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-7"
						>
							<span className="font-mono text-3xl font-bold leading-none text-brand/30 transition-colors group-hover:text-brand/60">
								{String(i + 1).padStart(2, '0')}
							</span>
							<div className="min-w-0">
								<h3 className="font-display text-lg font-semibold tracking-tight text-navy">
									{point.title}
								</h3>
								<p className="mt-2 text-[15px] leading-relaxed text-slate-600">
									{point.description}
								</p>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
