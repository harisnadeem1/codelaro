import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { INDUSTRIES } from '@/data/industries';

export function IndustriesOverviewGrid() {
	return (
		<section className="relative border-t border-slate-200/80 bg-white">
			<div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-28">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
						Explore industries
					</p>
					<h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
						Nine sectors we serve
					</h2>
					<p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
						Open any sector to see the common digital challenges, the services and
						solutions we apply, and the technology possibilities for your field.
					</p>
				</div>

				<div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
					{INDUSTRIES.map((industry, i) => {
						const Icon = industry.icon;
						return (
							<Link
								key={industry.slug}
								to={`/industries/${industry.slug}`}
								className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-navy/5"
							>
								<span
									aria-hidden
									className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/8 blur-2xl"
								/>

								<div className="relative flex items-center justify-between">
									<span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-brand transition-colors group-hover:bg-brand group-hover:text-white">
										<Icon className="h-6 w-6" strokeWidth={1.8} />
									</span>
									<span className="font-mono text-[13px] font-semibold tabular-nums text-brand/50">
										{String(i + 1).padStart(2, '0')}
									</span>
								</div>

								<h3 className="relative mt-5 font-display text-lg font-bold leading-tight tracking-tight text-navy">
									{industry.title}
								</h3>

								<p className="relative mt-2 text-[14px] leading-relaxed text-slate-500">
									{industry.tagline}
								</p>

								<span className="relative mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy transition-colors group-hover:text-brand">
									Explore industry
									<ArrowUpRight className="h-3.5 w-3.5" />
								</span>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}
