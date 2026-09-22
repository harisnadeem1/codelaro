import { Check } from 'lucide-react';
import type { Solution } from '@/data/solutions';

export function SolutionCapabilities({ solution }: { solution: Solution }) {
	const Icon = solution.icon;
	return (
		<section className="relative border-y border-slate-200/80 bg-white">
			<div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-24">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
						Capabilities involved
					</p>
					<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl">
						What this engagement brings together
					</h2>
					<p className="mt-4 text-[15px] leading-relaxed text-slate-500">
						We combine the disciplines below — scoped to your goals — to move from the
						problem to the outcome.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
					{solution.capabilities.map((capability, i) => (
						<div
							key={capability}
							className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-5 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-navy/5"
						>
							<span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
								<Check className="h-5 w-5" strokeWidth={2.4} />
							</span>
							<div className="min-w-0">
								<span className="font-mono text-[12px] font-semibold text-brand/60">
									{String(i + 1).padStart(2, '0')}
								</span>
								<p className="mt-0.5 text-[15px] font-semibold leading-snug text-navy">
									{capability}
								</p>
							</div>
						</div>
					))}
				</div>

				<div className="mt-10 flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-navy p-6 text-white">
					<span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-white">
						<Icon className="h-6 w-6" strokeWidth={1.8} />
					</span>
					<p className="text-[14px] leading-relaxed text-slate-300">
						These capabilities are delivered by one senior team — so the pieces fit
						together without the seams, handoffs and friction of multiple vendors.
					</p>
				</div>
			</div>
		</section>
	);
}
