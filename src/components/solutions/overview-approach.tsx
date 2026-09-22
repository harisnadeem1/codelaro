import { Link } from 'react-router';
import { ArrowRight, Check } from 'lucide-react';

const PRINCIPLES = [
	'Start from the business problem, not the technology',
	'Scope to the outcome that matters most',
	'Combine strategy, design and engineering in one team',
	'Measure success by the result, not the feature count',
];

export function SolutionsOverviewApproach() {
	return (
		<section className="relative overflow-hidden bg-navy text-white">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-40" />
			<div className="drift-slow pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

			<div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-28">
				<div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
					<div>
						<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand">
							How we think
						</p>
						<h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
							Outcomes over{' '}
							<span className="text-brand">feature checklists</span>.
						</h2>
						<p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
							A solution is not a list of things we build — it is a business result we
							move. We work backwards from the outcome you need, then bring together
							the right disciplines to get there.
						</p>

						<div className="mt-9">
							<Link
								to="#contact"
								className="inline-flex h-12 items-center gap-2 rounded-lg bg-brand px-7 font-display text-[15px] font-semibold text-navy shadow-lg shadow-brand/25 transition-all hover:bg-brand-400 hover:shadow-brand/40 active:scale-[0.98]"
							>
								Book a consultation
								<ArrowRight className="h-4 w-4" />
							</Link>
						</div>
					</div>

					<div className="lg:pl-8">
						<div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
							<div className="border-b border-white/10 px-6 py-4">
								<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
									Our principles
								</p>
							</div>
							<ul className="divide-y divide-white/10">
								{PRINCIPLES.map((principle) => (
									<li key={principle} className="flex items-start gap-3.5 px-6 py-5">
										<span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-brand/15 text-brand">
											<Check className="h-3.5 w-3.5" strokeWidth={2.4} />
										</span>
										<span className="text-[15px] leading-relaxed text-slate-200">
											{principle}
										</span>
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
