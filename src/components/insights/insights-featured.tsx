import { Link } from 'react-router';
import { ArrowUpRight, Clock } from 'lucide-react';
import { FEATURED_ARTICLE, LATEST_ARTICLES } from '@/data/insights';

function formatDate(iso: string): string {
	return new Date(iso).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
}

export function InsightsFeatured() {
	const featured = FEATURED_ARTICLE;

	return (
		<section className="relative bg-white">
			<div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:py-24">
				<div className="flex items-end justify-between gap-4">
					<div>
						<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-700">
							Featured
						</p>
						<h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
							Editor’s pick
						</h2>
					</div>
				</div>

				{/* Featured card */}
				<Link
					to="/insights"
					className="group mt-8 grid overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] transition-all hover:border-brand/40 hover:shadow-xl hover:shadow-navy/5 lg:grid-cols-2"
				>
					{/* Visual */}
					<div className="relative min-h-[240px] overflow-hidden bg-navy lg:min-h-[420px]">
						<div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-40" />
						<div className="drift-slow pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
						<div className="relative flex h-full flex-col justify-between p-7 sm:p-9">
							<div className="flex items-center gap-2">
								<span className="rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
									{featured.tag}
								</span>
								{featured.placeholder && (
									<span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-300">
										Sample
									</span>
								)}
							</div>
							<div className="float-a">
								<span className="font-mono text-[13px] font-semibold text-brand">
									{featured.slug}
								</span>
								<div className="mt-3 h-2 w-2/3 rounded-full bg-white/10" />
								<div className="mt-2 h-2 w-1/2 rounded-full bg-white/10" />
								<div className="mt-2 h-2 w-3/5 rounded-full bg-brand/30" />
							</div>
						</div>
					</div>

					{/* Content */}
					<div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
						<div className="flex items-center gap-3 text-[13px] text-slate-500">
							<span className="font-semibold text-navy">{featured.author}</span>
							<span className="h-1 w-1 rounded-full bg-slate-300" />
							<span>{formatDate(featured.publishedAt)}</span>
							<span className="h-1 w-1 rounded-full bg-slate-300" />
							<span className="inline-flex items-center gap-1">
								<Clock className="h-3.5 w-3.5" strokeWidth={1.8} />
								{featured.readTime} min read
							</span>
						</div>

						<h3 className="mt-5 font-display text-2xl font-bold leading-[1.15] tracking-tight text-navy sm:text-3xl md:text-[2.25rem] md:leading-[1.12]">
							{featured.title}
						</h3>

						<p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
							{featured.excerpt}
						</p>

						<span className="mt-7 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand">
							Read article
							<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</span>
					</div>
				</Link>
			</div>
		</section>
	);
}

export function InsightsLatest() {
	return (
		<section id="latest" className="relative scroll-mt-24 bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-60" />
			<div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:py-24">
				<div className="flex items-end justify-between gap-4">
					<div>
						<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-700">
							Latest
						</p>
						<h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
							Recent articles
						</h2>
					</div>
				</div>

				<div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{LATEST_ARTICLES.map((article) => (
						<Link
							key={article.slug}
							to="/insights"
							className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-brand/40 hover:shadow-xl hover:shadow-navy/5"
						>
							{/* Visual header */}
							<div className="relative h-40 overflow-hidden bg-navy">
								<div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-40" />
								<div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/20 blur-2xl" />
								<div className="relative flex h-full items-center justify-between p-5">
									<span className="rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
										{article.tag}
									</span>
									{article.placeholder && (
										<span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-300">
											Sample
										</span>
									)}
								</div>
							</div>

							{/* Body */}
							<div className="flex flex-1 flex-col p-5 sm:p-6">
								<div className="flex items-center gap-2.5 text-[12px] text-slate-500">
									<span>{formatDate(article.publishedAt)}</span>
									<span className="h-1 w-1 rounded-full bg-slate-300" />
									<span className="inline-flex items-center gap-1">
										<Clock className="h-3 w-3" strokeWidth={1.8} />
										{article.readTime} min
									</span>
								</div>

								<h3 className="mt-3 font-display text-lg font-bold leading-snug tracking-tight text-navy">
									{article.title}
								</h3>

								<p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-slate-600">
									{article.excerpt}
								</p>

								<span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
									Read article
									<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
