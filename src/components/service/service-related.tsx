import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Service } from '@/data/services';
import { SOLUTIONS } from '@/data/solutions';
import { INDUSTRIES } from '@/data/industries';
import { SERVICES } from '@/data/services';

export function ServiceRelated({ current }: { current: Service }) {
	const relatedSolutions = current.relatedSolutions
		.map((slug) => SOLUTIONS.find((s) => s.slug === slug))
		.filter((s): s is NonNullable<typeof s> => Boolean(s));
	const relatedIndustries = current.relatedIndustries
		.map((slug) => INDUSTRIES.find((i) => i.slug === slug))
		.filter((i): i is NonNullable<typeof i> => Boolean(i));
	const relatedServices = SERVICES.filter((s) => s.slug !== current.slug).slice(0, 4);

	return (
		<section className="relative bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-40" />
			<div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-24">
				<div className="grid gap-12 md:grid-cols-2 md:gap-10">
					{/* Related solutions */}
					{relatedSolutions.length > 0 && (
						<div>
							<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
								Related solutions
							</p>
							<h2 className="mt-4 font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
								Outcomes this service drives
							</h2>
							<ul className="mt-6 space-y-3">
								{relatedSolutions.map((solution) => {
									const Icon = solution.icon;
									return (
										<li key={solution.slug}>
											<Link
												to={`/solutions/${solution.slug}`}
												className="group flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-navy/5"
											>
												<span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
													<Icon className="h-5 w-5" strokeWidth={1.9} />
												</span>
												<span className="min-w-0 flex-1">
													<span className="block font-display text-[15px] font-semibold text-navy">
														{solution.title}
													</span>
													<span className="mt-0.5 block truncate text-[13px] text-slate-500">
														{solution.outcome}
													</span>
												</span>
												<ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand" />
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					)}

					{/* Related industries */}
					{relatedIndustries.length > 0 && (
						<div>
							<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
								Industries we serve
							</p>
							<h2 className="mt-4 font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
								Where this work lands
							</h2>
							<ul className="mt-6 space-y-3">
								{relatedIndustries.map((industry) => {
									const Icon = industry.icon;
									return (
										<li key={industry.slug}>
											<Link
												to={`/industries/${industry.slug}`}
												className="group flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-navy/5"
											>
												<span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
													<Icon className="h-5 w-5" strokeWidth={1.9} />
												</span>
												<span className="min-w-0 flex-1">
													<span className="block font-display text-[15px] font-semibold text-navy">
														{industry.title}
													</span>
													<span className="mt-0.5 block truncate text-[13px] text-slate-500">
														{industry.tagline}
													</span>
												</span>
												<ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand" />
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					)}
				</div>

				{/* Related services */}
				<div className="mt-14 border-t border-slate-200/80 pt-12">
					<div className="flex items-end justify-between gap-4">
						<h2 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
							Related services
						</h2>
						<Link
							to="/services"
							className="hidden items-center gap-1 text-[13px] font-semibold text-brand sm:inline-flex"
						>
							View all
							<ArrowRight className="h-3.5 w-3.5" />
						</Link>
					</div>

					<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
						{relatedServices.map((service) => {
							const Icon = service.icon;
							return (
								<Link
									key={service.slug}
									to={`/services/${service.slug}`}
									className="group flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-navy/5"
								>
									<span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
										<Icon className="h-5 w-5" strokeWidth={1.9} />
									</span>
									<span className="min-w-0 flex-1">
										<span className="block font-display text-[15px] font-semibold text-navy">
											{service.title}
										</span>
										<span className="mt-0.5 block truncate text-[13px] text-slate-500">
											{service.tagline}
										</span>
									</span>
									<ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
