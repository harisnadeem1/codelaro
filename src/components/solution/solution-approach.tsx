import { Sparkles } from 'lucide-react';
import type { Solution } from '@/data/solutions';

export function SolutionApproach({ solution }: { solution: Solution }) {
	return (
		<section className="relative overflow-hidden bg-navy text-white">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-40" />
			<div className="drift-slow pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

			<div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-24">
				<div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
					<div className="md:sticky md:top-28 md:self-start">
						<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand">
							The Codelaro approach
						</p>
						<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
							How we tackle it
						</h2>
						<p className="mt-4 text-[15px] leading-relaxed text-slate-400">
							Our approach is shaped around the outcome — not a fixed method applied
							to every engagement.
						</p>

						<div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
							<span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white">
								<Sparkles className="h-5 w-5" strokeWidth={1.9} />
							</span>
							<p className="mt-4 font-display text-[15px] font-semibold leading-snug text-white">
								{solution.outcome}
							</p>
							<p className="mt-2 text-[13px] leading-relaxed text-slate-400">
								Every decision in the engagement is measured against this outcome.
							</p>
						</div>
					</div>

					<div className="space-y-5">
						{solution.approach.map((paragraph, i) => (
							<p
								key={i}
								className="text-[17px] leading-relaxed text-slate-300 sm:text-lg"
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
