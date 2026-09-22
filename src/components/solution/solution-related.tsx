import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Solution } from '@/data/solutions';
import { SERVICES } from '@/data/services';
import { INDUSTRIES } from '@/data/industries';

export function SolutionRelated({ current }: { current: Solution }) {
	const relatedServices = current.relatedServices
		.map((slug) => SERVICES.find((s) => s.slug === slug))
		.filter((s): s is NonNullable<typeof s> => Boolean(s));
	const relatedIndustries = current.relatedIndustries
		.map((slug) => INDUSTRIES.find((i) => i.slug === slug))
		.filter((i): i is NonNullable<typeof i> => Boolean(i));

	return (
		<section className="relative bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-40" />
			<div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-24">
				<div className="grid gap-12 md:grid-cols-2 md:gap-10">
					{/* Related services */}
					{relatedServices.length > 0 && (
						<div>
							<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
								Related services
							</p>
							<h2 className="mt-4 font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
								The disciplines behind this outcome
							</h2>
							<ul className="mt-6 space-y-3">
								{relatedServices.map((service) => {
									const Icon = service.icon;
									return (
										<li key={service.slug}>
											<Link
												to={`/services/${service.slug}`}
												className="group flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-navy/5"
											>
												<span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
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
								Relevant industries
							</p>
							<h2 className="mt-4 font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
								Where this outcome lands
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
												<ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
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
