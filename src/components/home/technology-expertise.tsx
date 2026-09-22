import { useState } from 'react';
import { TECH_CATEGORIES } from '@/data/technologies';
import { cn } from '@/lib/utils';

export function TechnologyExpertise() {
	const [active, setActive] = useState(0);
	const category = TECH_CATEGORIES[active];
	const Icon = category.icon;

	return (
		<section id="technology" className="relative scroll-mt-24 overflow-hidden bg-white">
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-40"
			/>
			<span
				aria-hidden
				className="pointer-events-none absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-brand/8 blur-3xl drift-slow"
			/>

			<div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-28">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
						Technology Expertise
					</p>
					<h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
						A modern stack,{' '}
						<span className="text-brand">chosen for the outcome</span>.
					</h2>
					<p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
						We are pragmatic about tools — the right technology is the one that serves
						your business, not the trendiest name. Explore the disciplines we cover.
					</p>
				</div>

				{/* Tabs */}
				<div className="mt-12">
					<div
						role="tablist"
						aria-label="Technology categories"
						className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
					>
						{TECH_CATEGORIES.map((cat, i) => {
							const CatIcon = cat.icon;
							const isActive = i === active;
							return (
								<button
									key={cat.slug}
									role="tab"
									aria-selected={isActive}
									type="button"
									onClick={() => setActive(i)}
									className={cn(
										'flex items-center gap-2 rounded-lg px-3.5 py-2.5 text-[14px] font-semibold transition-all duration-200',
										isActive
											? 'bg-navy text-white shadow-sm'
											: 'text-slate-500 hover:bg-slate-100 hover:text-navy',
									)}
								>
									<CatIcon
										className={cn('h-4 w-4', isActive ? 'text-brand' : 'text-slate-400')}
										strokeWidth={1.9}
									/>
									{cat.title}
								</button>
							);
						})}
					</div>

					{/* Panel */}
					<div
						key={category.slug}
						className="scale-in mt-8 grid gap-8 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-7 sm:p-9 lg:grid-cols-12 lg:gap-10"
					>
						<div className="lg:col-span-5">
							<span className="grid h-14 w-14 place-items-center rounded-xl bg-brand text-white shadow-lg shadow-brand/25">
								<Icon className="h-7 w-7" strokeWidth={1.8} />
							</span>
							<p className="mt-5 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700">
								Category {String(active + 1).padStart(2, '0')}
							</p>
							<h3 className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl">
								{category.title}
							</h3>
							<p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-600 sm:text-base">
								{category.description}
							</p>
						</div>

						<div className="lg:col-span-7">
							<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
								Selected technologies
							</p>
							<ul className="mt-4 grid gap-3 sm:grid-cols-2">
								{category.technologies.map((tech) => (
									<li
										key={tech}
										className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3.5 transition-colors hover:border-brand/40"
									>
										<span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
										<span className="font-mono text-[14px] font-medium text-navy">
											{tech}
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
