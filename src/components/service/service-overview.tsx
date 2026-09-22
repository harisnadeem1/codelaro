import type { Service } from '@/data/services';

export function ServiceOverview({ service }: { service: Service }) {
	return (
		<section className="relative bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-40" />
			<div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-24">
				<div className="max-w-3xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
						Overview
					</p>
					<div className="mt-5 space-y-5">
						{service.overview.map((paragraph, i) => (
							<p
								key={i}
								className="text-[17px] leading-relaxed text-slate-600 sm:text-lg"
							>
								{paragraph}
							</p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
