import { CAREER_VALUES } from '@/data/company';

/**
 * Careers values — light surface describing how we work. No invented
 * benefits, testimonials or team size.
 */
export function CareersValues() {
	return (
		<section className="relative bg-white">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-40" />
			<div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
						How we work
					</p>
					<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
						The principles behind a Codelaro career.
					</h2>
					<p className="mt-4 text-[15px] leading-relaxed text-slate-500 sm:text-base">
						We care more about how you think and ship than where you sit. These are the
						values that shape day-to-day work here.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{CAREER_VALUES.map((value, i) => (
						<div
							key={value.title}
							className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-7 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-navy/5"
						>
							<span className="font-mono text-2xl font-bold text-brand/30 transition-colors group-hover:text-brand/60">
								{String(i + 1).padStart(2, '0')}
							</span>
							<h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-navy">
								{value.title}
							</h3>
							<p className="mt-3 text-[14px] leading-relaxed text-slate-600">
								{value.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
