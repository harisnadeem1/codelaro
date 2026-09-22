import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { INSIGHT_CATEGORIES } from '@/data/insights';

export function InsightsCategories() {
	return (
		<section className="relative bg-white">
			<div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:py-24">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-700">
						Categories
					</p>
					<h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
						Browse by topic
					</h2>
					<p className="mt-4 text-base leading-relaxed text-slate-500">
						Six lenses on building software — from the architecture underneath to the
						business outcomes on top.
					</p>
				</div>

				<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{INSIGHT_CATEGORIES.map((category) => (
						<Link
							key={category.slug}
							to="/insights"
							className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 transition-all hover:border-brand/40 hover:shadow-lg hover:shadow-navy/5"
						>
							<div className="flex items-center justify-between">
								<span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
									<category.icon className="h-5 w-5" strokeWidth={1.8} />
								</span>
								<ArrowUpRight className="h-5 w-5 text-slate-300 transition-all group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</div>
							<h3 className="mt-5 font-display text-lg font-bold tracking-tight text-navy">
								{category.label}
							</h3>
							<p className="mt-2 text-[14px] leading-relaxed text-slate-500">
								{category.description}
							</p>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
