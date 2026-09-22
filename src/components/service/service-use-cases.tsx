import type { Service } from '@/data/services';

export function ServiceUseCases({ service }: { service: Service }) {
	return (
		<section className="relative overflow-hidden bg-navy text-white">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-40" />
			<div className="drift-slow pointer-events-none absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

			<div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-24">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand">
						Use cases
					</p>
					<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
						Where {service.title.toLowerCase()} creates value
					</h2>
					<p className="mt-4 text-[15px] leading-relaxed text-slate-300 sm:text-base">
						Common engagements where this service delivers measurable outcomes for the
						business.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
					{service.useCases.map((useCase, i) => (
						<div
							key={useCase.title}
							className="group relative bg-navy p-6 transition-colors hover:bg-navy-800 sm:p-7"
						>
							<span className="font-mono text-[13px] font-semibold text-brand">
								0{i + 1}
							</span>
							<h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-white">
								{useCase.title}
							</h3>
							<p className="mt-2 text-[14px] leading-relaxed text-slate-400">
								{useCase.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
