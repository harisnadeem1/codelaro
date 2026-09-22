import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import type { Industry } from '@/data/industries';
import { INDUSTRIES } from '@/data/industries';

export function IndustryRelated({ current }: { current: Industry }) {
	const related = current.relatedIndustries
		.map((slug) => INDUSTRIES.find((i) => i.slug === slug))
		.filter((i): i is NonNullable<typeof i> => Boolean(i));

	if (related.length === 0) return null;

	return (
		<section className="relative bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-40" />
			<div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-24">
				<div className="flex items-end justify-between gap-4">
					<div>
						<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
							Related industries
						</p>
						<h2 className="mt-4 font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
							Adjacent sectors we serve
						</h2>
					</div>
					<Link
						to="/industries"
						className="hidden items-center gap-1 text-[13px] font-semibold text-brand sm:inline-flex"
					>
						View all
						<ArrowUpRight className="h-3.5 w-3.5" />
					</Link>
				</div>

				<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
					{related.map((industry) => {
						const Icon = industry.icon;
						return (
							<Link
								key={industry.slug}
								to={`/industries/${industry.slug}`}
								className="group flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-navy/5"
							>
								<span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-brand transition-colors group-hover:bg-brand group-hover:text-white">
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
								<ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}
