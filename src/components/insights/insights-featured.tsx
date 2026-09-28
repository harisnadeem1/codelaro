import { Link } from 'react-router';
import { ArrowUpRight, Clock, ArrowRight } from 'lucide-react';

import { FEATURED_ARTICLE, LATEST_ARTICLES } from '@/data/insights';
import { InsightArticleVisual } from '@/components/insights/insight-article-visual';

/* -------------------------------------------------------------------------- */
/* Utilities                                                                  */
/* -------------------------------------------------------------------------- */

function formatDate(iso: string): string {
	return new Date(iso).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
}

/* -------------------------------------------------------------------------- */
/* Featured Insights                                                          */
/* -------------------------------------------------------------------------- */

export function InsightsFeatured() {
	const featured = FEATURED_ARTICLE;

	return (
		<section
			id="featured"
			aria-labelledby="featured-heading"
			className="relative overflow-hidden bg-white"
		>
			<div className="mx-auto w-full max-w-8xl px-5 py-16 sm:px-8 md:py-20 lg:py-24">

				{/* Section Heading */}

				<div className="flex flex-wrap items-end justify-between gap-6">
					<div>
						<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700">
							Featured insights
						</p>

						<h2
							id="featured-heading"
							className="mt-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-tight tracking-[-0.035em] text-navy"
						>
							Editor’s pick
							<span className="text-brand">.</span>
						</h2>

						<p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-500 sm:text-base">
							Thoughtful perspectives on technology, engineering,
							and building better digital products.
						</p>
					</div>

					<div className="hidden items-center gap-2 text-[12px] font-medium text-slate-400 sm:flex">
						<span className="h-1.5 w-1.5 rounded-full bg-brand" />
						Curated perspectives
					</div>
				</div>

				{/* Featured Card */}

				<Link
					to={`/insights/${featured.slug}`}
					aria-label={`Read article: ${featured.title}`}
					className="
						group relative mt-9
						grid overflow-hidden
						rounded-[24px]
						border border-slate-200
						bg-[#F8FAFC]
						transition-all duration-500
						hover:-translate-y-1
						hover:border-brand/35
						hover:shadow-[0_25px_65px_-30px_rgba(15,23,42,0.22)]
						lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]
						lg:rounded-[28px]
					"
				>

					{/* Featured Visual */}

					<div
						className="
							relative isolate
							flex min-h-[250px]
							flex-col justify-between
							overflow-hidden bg-navy
							p-7
							sm:min-h-[300px] sm:p-9
							lg:min-h-[390px] lg:p-11
						"
					>

						{/* Technical Grid */}

						<div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-40" />

						{/* Teal Gradient Glow */}

						<div
							className="
								pointer-events-none
								absolute -right-24 -top-28
								h-[360px] w-[360px]
								rounded-full
								bg-brand/20
								blur-[100px]
							"
						/>

						{/* Bottom Gradient */}

						<div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070F20]/50 to-transparent" />

						{/* Decorative Borders */}

						<div className="pointer-events-none absolute inset-5 rounded-[16px] border border-white/[0.05] sm:inset-7" />

						{/* Top */}

						<div className="relative z-10 flex flex-wrap items-start justify-between gap-3">

							<div className="flex flex-wrap items-center gap-2">

								<span
									className="
										inline-flex items-center
										rounded-full
										border border-brand/30
										bg-brand px-3.5 py-1.5
										text-[10px] font-semibold
										uppercase tracking-[0.12em]
										text-white
									"
								>
									{featured.tag}
								</span>

								{featured.placeholder && (
									<span className="rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-slate-300">
										Sample
									</span>
								)}

							</div>

							<span className="hidden font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-white/35 sm:block">
								Codelaro / Insights
							</span>

						</div>

						{/* Technical Illustration */}

						<div className="relative z-10 my-7 flex flex-1 items-center justify-center">

							<div className="relative w-full max-w-[360px]">

								{/* Subtle Glow */}

								<div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[50px]" />

								{/* Main Code Panel */}

								<div
									className="
										relative overflow-hidden
										rounded-[16px]
										border border-white/[0.13]
										bg-white/[0.055]
										shadow-[0_20px_60px_rgba(0,0,0,0.13)]
										backdrop-blur-sm
										transition-transform duration-700
										group-hover:-translate-y-1
									"
								>

									{/* Window Header */}

									<div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">

										<div className="flex gap-1.5">
											<span className="h-1.5 w-1.5 rounded-full bg-brand/80" />
											<span className="h-1.5 w-1.5 rounded-full bg-white/25" />
											<span className="h-1.5 w-1.5 rounded-full bg-white/25" />
										</div>

										<span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/35">
											Engineering
										</span>

									</div>

									{/* Abstract Code */}

									<div className="space-y-3 px-5 py-6 sm:px-7 sm:py-7">

										<div className="flex items-center gap-3">
											<span className="font-mono text-[10px] text-white/20">
												01
											</span>

											<div className="h-1.5 w-24 rounded-full bg-brand/75" />

											<div className="h-1.5 w-10 rounded-full bg-white/20" />
										</div>

										<div className="flex items-center gap-3">
											<span className="font-mono text-[10px] text-white/20">
												02
											</span>

											<div className="ml-4 h-1.5 w-14 rounded-full bg-white/30" />

											<div className="h-1.5 w-20 rounded-full bg-brand/35" />
										</div>

										<div className="flex items-center gap-3">
											<span className="font-mono text-[10px] text-white/20">
												03
											</span>

											<div className="ml-4 h-1.5 w-32 rounded-full bg-white/20" />
										</div>

										<div className="flex items-center gap-3">
											<span className="font-mono text-[10px] text-white/20">
												04
											</span>

											<div className="ml-4 h-1.5 w-16 rounded-full bg-brand/65" />

											<div className="h-1.5 w-12 rounded-full bg-white/20" />
										</div>

										<div className="flex items-center gap-3">
											<span className="font-mono text-[10px] text-white/20">
												05
											</span>

											<div className="h-1.5 w-20 rounded-full bg-white/25" />
										</div>

									</div>

								</div>

								{/* Floating Status */}

								<div
									className="
										absolute -bottom-4 right-3
										flex items-center gap-2
										rounded-lg
										border border-white/15
										bg-[#17253A]
										px-3 py-2
										shadow-lg
										transition-transform duration-700
										group-hover:translate-x-1
									"
								>

									<span className="h-1.5 w-1.5 rounded-full bg-brand" />

									<span className="font-mono text-[9px] font-medium uppercase tracking-[0.1em] text-white/75">
										Ideas into impact
									</span>

								</div>

							</div>

						</div>

						{/* Bottom */}

						<div className="relative z-10 flex items-end justify-between gap-4">

							<span className="max-w-[75%] truncate font-mono text-[11px] font-medium tracking-wide text-brand">
								{featured.slug}
							</span>

							<span className="font-mono text-[10px] tracking-wide text-white/30">
								01 / FEATURED
							</span>

						</div>

					</div>

					{/* Featured Content */}

					<div className="flex min-w-0 flex-col justify-center p-7 sm:p-9 lg:p-11 xl:p-14">

						{/* Metadata */}

						<div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-slate-500 sm:text-[13px]">

							<span className="font-semibold text-navy">
								{featured.author}
							</span>

							<span className="h-1 w-1 rounded-full bg-slate-300" />

							<time dateTime={featured.publishedAt}>
								{formatDate(featured.publishedAt)}
							</time>

							<span className="h-1 w-1 rounded-full bg-slate-300" />

							<span className="inline-flex items-center gap-1.5">
								<Clock
									className="h-3.5 w-3.5"
									strokeWidth={1.8}
								/>

								{featured.readTime} min read
							</span>

						</div>

						{/* Article Title */}

						<h3
							className="
								mt-6 max-w-[650px]
								font-display
								text-[clamp(1.7rem,2.7vw,2.65rem)]
								font-bold
								leading-[1.16]
								tracking-[-0.035em]
								text-navy
								transition-colors duration-300
								group-hover:text-brand-700
							"
						>
							{featured.title}
						</h3>

						{/* Description */}

						<p className="mt-5 max-w-xl text-[15px] leading-[1.8] text-slate-600 sm:text-base">
							{featured.excerpt}
						</p>

						{/* Read Article */}

						<div className="mt-9 flex items-center justify-between gap-4 border-t border-slate-200/80 pt-6">

							<span className="inline-flex items-center gap-2 font-display text-sm font-semibold text-brand-700">
								Read article

								<ArrowUpRight
									className="
										h-4 w-4
										transition-transform duration-300
										group-hover:translate-x-1
										group-hover:-translate-y-1
									"
									strokeWidth={1.8}
								/>
							</span>

							<span
								className="
									flex h-10 w-10
									items-center justify-center
									rounded-full
									border border-brand/15
									bg-brand/[0.07]
									text-brand
									transition-all duration-300
									group-hover:border-brand
									group-hover:bg-brand
									group-hover:text-white
								"
							>
								<ArrowRight className="h-4 w-4" />
							</span>

						</div>

					</div>

				</Link>

			</div>
		</section>
	);
}

/* -------------------------------------------------------------------------- */
/* Latest Insights                                                            */
/* -------------------------------------------------------------------------- */

export function InsightsLatest() {
	return (
		<section
			id="latest"
			aria-labelledby="latest-heading"
			className="relative scroll-mt-24 overflow-hidden bg-[#F8FAFC]"
		>
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-35" />

			<div className="relative mx-auto w-full max-w-8xl px-5 py-16 sm:px-8 md:py-20 lg:py-24">

				{/* Section Heading */}

				<div className="flex flex-wrap items-end justify-between gap-5">

					<div>

						<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700">
							Latest insights
						</p>

						<h2
							id="latest-heading"
							className="mt-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-tight tracking-[-0.035em] text-navy"
						>
							Recent articles
							<span className="text-brand">.</span>
						</h2>

						<p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-500 sm:text-base">
							Explore our latest ideas and perspectives on
							software engineering and emerging technologies.
						</p>

					</div>

					<span className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-slate-400 md:inline-flex">
						{String(LATEST_ARTICLES.length).padStart(2, '0')} ARTICLES
					</span>

				</div>

				{/* Article Grid */}

				<div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

					{LATEST_ARTICLES.map((article, index) => (

						<Link
							key={article.slug}
							to={`/insights/${article.slug}`}
							aria-label={`Read article: ${article.title}`}
							className="
								group flex min-w-0 flex-col
								overflow-hidden
								rounded-[22px]
								border border-slate-200
								bg-white
								transition-all duration-500
								hover:-translate-y-1
								hover:border-brand/30
								hover:shadow-[0_20px_50px_-25px_rgba(15,23,42,0.18)]
							"
						>

							{/* Visual Header */}

							{/* Article Visual Header */}
							<div className="relative isolate overflow-hidden bg-[#F8FAFC]">

								{/* Dedicated Article Visual */}
								<div
									className="
            relative overflow-hidden
            transition-transform duration-700 ease-out
            group-hover:scale-[1.025]
            motion-reduce:transform-none
        "
								>
									<InsightArticleVisual
										slug={article.slug}
										variant="card"
									/>
								</div>

								

								{/* Bottom Accent */}
								<div
									aria-hidden="true"
									className="
            pointer-events-none absolute
            bottom-0 left-0 right-0 z-20
            h-px
            bg-gradient-to-r
            from-transparent
            via-brand/30
            to-transparent
        "
								/>

							</div>

							{/* Article Body */}

							<div className="flex flex-1 flex-col p-6 sm:p-7">

								{/* Metadata */}

								<div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 text-[12px] text-slate-500">

									<time dateTime={article.publishedAt}>
										{formatDate(article.publishedAt)}
									</time>

									<span className="h-1 w-1 rounded-full bg-slate-300" />

									<span className="inline-flex items-center gap-1.5">
										<Clock
											className="h-3.5 w-3.5"
											strokeWidth={1.8}
										/>

										{article.readTime} min read
									</span>

								</div>

								{/* Article Title */}

								<h3 className="mt-4 font-display text-[19px] font-bold leading-[1.4] tracking-[-0.025em] text-navy transition-colors duration-300 group-hover:text-brand-700 sm:text-[21px]">
									{article.title}
								</h3>

								{/* Article Description */}

								<p className="mt-3 line-clamp-3 flex-1 text-[14px] leading-[1.8] text-slate-600">
									{article.excerpt}
								</p>

								{/* Card Footer */}

								<div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">

									<span className="inline-flex items-center gap-2 text-[13px] font-semibold text-brand-700">
										Read article

										<ArrowUpRight
											className="
												h-4 w-4
												transition-transform duration-300
												group-hover:translate-x-0.5
												group-hover:-translate-y-0.5
											"
										/>
									</span>

									<span
										className="
											flex h-9 w-9
											items-center justify-center
											rounded-full
											border border-slate-200
											bg-slate-50
											text-slate-500
											transition-all duration-300
											group-hover:border-brand
											group-hover:bg-brand
											group-hover:text-white
										"
									>
										<ArrowRight className="h-4 w-4" />
									</span>

								</div>

							</div>

						</Link>

					))}

				</div>

			</div>
		</section>
	);
}