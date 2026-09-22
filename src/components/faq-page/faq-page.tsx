import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, HelpCircle, Minus, Plus, Search } from 'lucide-react';
import { FAQ_CATEGORIES, ALL_CATEGORIZED_QUESTIONS } from '@/data/faq-categories';
import { cn } from '@/lib/utils';

export function FaqPage() {
	const [query, setQuery] = useState('');
	const [activeCategory, setActiveCategory] = useState('all');
	const [openKey, setOpenKey] = useState<string | null>(null);

	const normalizedQuery = query.trim().toLowerCase();

	const filteredCategories = useMemo(() => {
		if (normalizedQuery) {
			const matches = ALL_CATEGORIZED_QUESTIONS.filter(
				(item) =>
					item.question.toLowerCase().includes(normalizedQuery) ||
					item.answer.toLowerCase().includes(normalizedQuery),
			);
			if (matches.length === 0) return [];
			return [
				{
					slug: 'search',
					label: 'Search results',
					description: `${matches.length} match${matches.length === 1 ? '' : 'es'} for “${query.trim()}”.`,
					items: matches.map(({ question, answer }) => ({ question, answer })),
				},
			];
		}

		if (activeCategory === 'all') return FAQ_CATEGORIES;
		return FAQ_CATEGORIES.filter((c) => c.slug === activeCategory);
	}, [normalizedQuery, activeCategory, query]);

	const totalQuestions = ALL_CATEGORIZED_QUESTIONS.length;

	return (
		<main>
			{/* Hero + search */}
			<section className="relative overflow-hidden bg-[#F8FAFC]">
				<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b" />
				<div className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-brand/12 blur-3xl" />
				<div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

				<div className="relative mx-auto w-full max-w-3xl px-5 pb-12 pt-32 sm:px-8 md:pt-40">
					<div className="rise-in inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
						<HelpCircle className="h-3.5 w-3.5 text-brand" strokeWidth={2} />
						<span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-700">
							FAQ
						</span>
						<span className="h-3 w-px bg-slate-200" />
						<span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-400">
							{totalQuestions} questions
						</span>
					</div>

					<h1 className="mt-6 font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl md:text-[3rem] md:leading-[1.06]">
						Answers, organized and{' '}
						<span className="text-brand">searchable</span>.
					</h1>

					<p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
						Everything you need to know before starting a conversation — grouped by
						topic and searchable. Still curious? Reach out and we will reply within one
						business day.
					</p>

					{/* Search */}
					<div className="mt-8">
						<div className="relative">
							<Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" strokeWidth={1.8} />
							<input
								type="search"
								value={query}
								onChange={(e) => {
									setQuery(e.target.value);
									setOpenKey(null);
								}}
								placeholder="Search questions…"
								aria-label="Search frequently asked questions"
								className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 text-[15px] text-navy placeholder:text-slate-400 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Category tabs + accordion */}
			<section className="relative bg-white">
				<div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 md:py-24">
					{/* Category filter */}
					{!normalizedQuery && (
						<div className="flex flex-wrap gap-2">
							<CategoryTab
								label="All"
								isActive={activeCategory === 'all'}
								onClick={() => {
									setActiveCategory('all');
									setOpenKey(null);
								}}
							/>
							{FAQ_CATEGORIES.map((category) => (
								<CategoryTab
									key={category.slug}
									label={category.label}
									isActive={activeCategory === category.slug}
									onClick={() => {
										setActiveCategory(category.slug);
										setOpenKey(null);
									}}
								/>
							))}
						</div>
					)}

					{/* Results */}
					{filteredCategories.length === 0 ? (
						<div className="mt-10 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-10 text-center">
							<p className="font-display text-lg font-semibold text-navy">
								No questions match “{query.trim()}”.
							</p>
							<p className="mt-2 text-[14px] text-slate-500">
								Try a different term, or reach out directly — we are happy to help.
							</p>
							<Link
								to="/contact"
								className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand"
							>
								Contact us
								<ArrowUpRight className="h-4 w-4" />
							</Link>
						</div>
					) : (
						<div className="mt-10 space-y-12">
							{filteredCategories.map((category) => (
								<div key={category.slug}>
									{!normalizedQuery && (
										<div className="mb-5">
											<h2 className="font-display text-xl font-bold tracking-tight text-navy">
												{category.label}
											</h2>
											<p className="mt-1 text-[14px] text-slate-500">
												{category.description}
											</p>
										</div>
									)}
									{normalizedQuery && (
										<p className="mb-5 text-[14px] text-slate-500">
											{category.description}
										</p>
									)}

									<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
										{category.items.map((item, i) => {
											const key = `${category.slug}-${i}`;
											const isOpen = openKey === key;
											return (
												<div
													key={key}
													className={cn(
														'border-b border-slate-200 last:border-b-0',
														isOpen && 'bg-brand/[0.03]',
													)}
												>
													<button
														type="button"
														aria-expanded={isOpen}
														onClick={() => setOpenKey(isOpen ? null : key)}
														className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-slate-50 sm:px-6"
													>
														<span
															className={cn(
																'grid h-8 w-8 shrink-0 place-items-center rounded-md border transition-colors',
																isOpen
																	? 'border-brand/40 bg-brand text-white'
																	: 'border-slate-200 bg-slate-50 text-navy',
															)}
														>
															{isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
														</span>
														<span className="min-w-0 flex-1 font-display text-[15px] font-semibold tracking-tight text-navy sm:text-base">
															{item.question}
														</span>
													</button>
													{isOpen && (
														<div className="px-5 pb-6 pl-[4.25rem] sm:px-6 sm:pl-[4.75rem]">
															<p className="text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
																{item.answer}
															</p>
														</div>
													)}
												</div>
											);
										})}
									</div>
								</div>
							))}
						</div>
					)}

					{/* Still have questions */}
					<div className="mt-14 rounded-2xl border border-slate-200 bg-navy p-7 text-center sm:p-10">
						<h2 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
							Still have <span className="text-brand">questions</span>?
						</h2>
						<p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-slate-400">
							We reply within one business day. Start a project, book a consultation,
							or send us a quick message.
						</p>
						<div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
							<Link
								to="/contact"
								className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-7 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/40 active:scale-[0.98] sm:w-auto"
							>
								Contact us
								<ArrowUpRight className="h-4 w-4" />
							</Link>
							<Link
								to="/book-a-consultation"
								className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-7 font-display text-[15px] font-semibold text-white transition-all hover:border-brand hover:bg-brand/10 hover:text-brand active:scale-[0.98] sm:w-auto"
							>
								Book a consultation
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

function CategoryTab({
	label,
	isActive,
	onClick,
}: {
	label: string;
	isActive: boolean;
	onClick: () => void;
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			aria-pressed={isActive}
			className={cn(
				'rounded-full border px-4 py-2 text-[13px] font-semibold transition-all active:scale-[0.98]',
				isActive
					? 'border-brand bg-brand text-white'
					: 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50',
			)}
		>
			{label}
		</button>
	);
}
