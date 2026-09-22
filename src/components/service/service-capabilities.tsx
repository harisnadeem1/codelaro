import { Check } from 'lucide-react';
import type { Service } from '@/data/services';

export function ServiceCapabilities({ service }: { service: Service }) {
	const Icon = service.icon;
	return (
		<section className="relative border-y border-slate-200/80 bg-white">
			<div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-24">
				<div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
					<div>
						<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
							Capabilities
						</p>
						<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl">
							What this engagement covers
						</h2>
						<p className="mt-4 text-[15px] leading-relaxed text-slate-500">
							Every engagement is scoped to your goals — these are the foundations we
							typically deliver for {service.title.toLowerCase()}.
						</p>
						<span className="mt-8 hidden grid h-16 w-16 place-items-center rounded-2xl bg-navy text-brand md:grid">
							<Icon className="h-8 w-8" strokeWidth={1.6} />
						</span>
					</div>

					<ul className="space-y-3">
						{service.capabilities.map((capability) => (
							<li
								key={capability}
								className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-[#F8FAFC] p-4 transition-colors hover:border-brand/40"
							>
								<span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
									<Check className="h-3.5 w-3.5" strokeWidth={2.5} />
								</span>
								<span className="text-[15px] leading-relaxed text-slate-700">
									{capability}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
