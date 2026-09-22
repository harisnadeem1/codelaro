import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Industry } from '@/data/industries';
import { SERVICES } from '@/data/services';
import { SOLUTIONS } from '@/data/solutions';

export function IndustryServices({ industry }: { industry: Industry }) {
	const services = industry.applicableServices
		.map((slug) => SERVICES.find((s) => s.slug === slug))
		.filter((s): s is NonNullable<typeof s> => Boolean(s));
	const solutions = industry.applicableSolutions
		.map((slug) => SOLUTIONS.find((s) => s.slug === slug))
		.filter((s): s is NonNullable<typeof s> => Boolean(s));

	return (
		<section className="relative overflow-hidden bg-navy text-white">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-40" />
			<div className="drift-slow pointer-events-none absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

			<div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-24">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand">
						How Codelaro helps
					</p>
					<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
						Services & solutions for {industry.title.toLowerCase()}
					</h2>
					<p className="mt-4 text-[15px] leading-relaxed text-slate-400 sm:text-base">
						The disciplines and outcome-led solutions we bring to bear on the challenges
						above — combined into one engagement when you need them.
					</p>
				</div>

				<div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8">
					{/* Applicable services */}
					{services.length > 0 && (
						<div>
							<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
								Services
							</p>
							<ul className="mt-4 space-y-3">
								{services.map((service) => {
									const Icon = service.icon;
									return (
										<li key={service.slug}>
											<Link
												to={`/services/${service.slug}`}
												className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:bg-white/[0.06]"
											>
												<span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
													<Icon className="h-5 w-5" strokeWidth={1.9} />
												</span>
												<span className="min-w-0 flex-1">
													<span className="block font-display text-[15px] font-semibold text-white">
														{service.title}
													</span>
													<span className="mt-0.5 block truncate text-[13px] text-slate-400">
														{service.tagline}
													</span>
												</span>
												<ArrowRight className="h-4 w-4 shrink-0 text-slate-500 transition-all group-hover:translate-x-0.5 group-hover:text-brand" />
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					)}

					{/* Applicable solutions */}
					{solutions.length > 0 && (
						<div>
							<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
								Solutions
							</p>
							<ul className="mt-4 space-y-3">
								{solutions.map((solution) => {
									const Icon = solution.icon;
									return (
										<li key={solution.slug}>
											<Link
												to={`/solutions/${solution.slug}`}
												className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:bg-white/[0.06]"
											>
												<span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
													<Icon className="h-5 w-5" strokeWidth={1.9} />
												</span>
												<span className="min-w-0 flex-1">
													<span className="block font-display text-[15px] font-semibold text-white">
														{solution.title}
													</span>
													<span className="mt-0.5 block truncate text-[13px] text-slate-400">
														{solution.outcome}
													</span>
												</span>
												<ArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
