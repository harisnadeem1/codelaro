import type { Service } from '@/data/services';

export function ServiceApproach({ service }: { service: Service }) {
	return (
		<section className="relative bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-40" />
			<div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-24">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
						Development approach
					</p>
					<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
						How we deliver {service.title.toLowerCase()}
					</h2>
					<p className="mt-4 text-[15px] leading-relaxed text-slate-500 sm:text-base">
						A clear, connected path from start to a healthy production system — adapted
						to your scope and constraints.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
					{service.approach.map((step) => (
						<div
							key={step.phase}
							className="group relative flex gap-5 rounded-2xl border border-slate-200/80 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-navy/5 sm:p-7"
						>
							<span className="font-mono text-2xl font-bold text-brand/30 transition-colors group-hover:text-brand/60">
								{step.phase}
							</span>
							<div className="min-w-0">
								<h3 className="font-display text-lg font-semibold tracking-tight text-navy">
									{step.title}
								</h3>
								<p className="mt-2 text-[14px] leading-relaxed text-slate-500">
									{step.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
