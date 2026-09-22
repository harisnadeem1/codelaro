import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, Check, Plus, Minus } from 'lucide-react';
import { INDUSTRIES } from '@/data/industries';
import { cn } from '@/lib/utils';

/* ---------- desktop: numbered editorial index + detail panel ---------- */

function IndustryIndex({
	active,
	onSelect,
}: {
	active: number;
	onSelect: (i: number) => void;
}) {
	return (
		<div className="relative">
			{/* vertical guide line */}
			<span
				aria-hidden
				className="absolute left-0 top-2 bottom-2 w-px bg-slate-200"
			/>
			<ul className="space-y-0">
				{INDUSTRIES.map((industry, i) => {
					const isActive = i === active;
					return (
						<li key={industry.slug}>
							<Link
								to={`/industries/${industry.slug}`}
								aria-pressed={isActive}
								onClick={() => onSelect(i)}
								className={cn(
									'group relative flex w-full items-center gap-5 border-b border-slate-200/80 py-4 pl-5 pr-2 text-left transition-all duration-300',
									isActive ? 'bg-brand/[0.05]' : 'hover:bg-slate-50',
								)}
							>
								{/* active marker on the guide line */}
								<span
									aria-hidden
									className={cn(
										'absolute -left-px top-1/2 h-9 w-[3px] -translate-y-1/2 rounded-full bg-brand transition-all duration-300',
										isActive ? 'opacity-100' : 'opacity-0',
									)}
								/>
								<span
									className={cn(
										'font-mono text-[13px] font-semibold tabular-nums transition-colors',
										isActive ? 'text-brand' : 'text-slate-400 group-hover:text-navy',
									)}
								>
									{String(i + 1).padStart(2, '0')}
								</span>
								<span className="min-w-0 flex-1">
									<span
										className={cn(
											'block font-display text-[16px] font-semibold tracking-tight transition-colors',
											isActive ? 'text-navy' : 'text-slate-600 group-hover:text-navy',
										)}
									>
										{industry.title}
									</span>
								</span>
								<ArrowUpRight
									className={cn(
										'h-4 w-4 shrink-0 transition-all duration-300',
										isActive
											? 'text-brand opacity-100'
											: 'text-slate-300 opacity-0 group-hover:opacity-100',
									)}
								/>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

function IndustryDetail({ index }: { index: number }) {
	const industry = INDUSTRIES[index];
	const Icon = industry.icon;

	return (
		<div
			key={industry.slug}
			className="scale-in relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xl shadow-navy/[0.06] sm:p-9"
		>
			{/* soft teal glow */}
			<span
				aria-hidden
				className="pointer-events-none absolute -right-24 -top-28 h-64 w-64 rounded-full bg-brand/10 blur-3xl drift-slow"
			/>
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-40"
			/>

			<div className="relative flex items-start gap-5">
				<span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-navy text-brand shadow-lg shadow-navy/15">
					<Icon className="h-7 w-7" strokeWidth={1.8} />
				</span>
				<div className="min-w-0">
					<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700">
						Industry {String(index + 1).padStart(2, '0')}
					</p>
					<h3 className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl">
						{industry.title}
					</h3>
				</div>
			</div>

			<p className="relative mt-5 font-display text-[15px] font-semibold text-brand-700">
				{industry.tagline}
			</p>

			<p className="relative mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
				{industry.description}
			</p>

			<div className="relative mt-7">
				<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
					What we deliver
				</p>
				<ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
					{industry.deliverables.map((item) => (
						<li key={item} className="flex items-start gap-2.5">
							<span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-brand/10 text-brand">
								<Check className="h-3.5 w-3.5" strokeWidth={2.4} />
							</span>
							<span className="text-[14px] leading-snug text-slate-700">{item}</span>
						</li>
					))}
				</ul>
			</div>

			<div className="relative mt-auto pt-8">
				<Link
					to={`/industries/${industry.slug}`}
					className="inline-flex h-12 items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 font-display text-[15px] font-semibold text-navy transition-all hover:border-brand hover:text-brand active:scale-[0.98]"
				>
					Explore industry
					<ArrowUpRight className="h-4 w-4" />
				</Link>
			</div>
		</div>
	);
}

/* ---------- mobile: stacked accordions ---------- */

function MobileAccordion() {
	const [open, setOpen] = useState<number | null>(0);

	return (
		<div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
			{INDUSTRIES.map((industry, i) => {
				const Icon = industry.icon;
				const isOpen = open === i;
				return (
					<div key={industry.slug}>
						<button
							type="button"
							aria-expanded={isOpen}
							onClick={() => setOpen(isOpen ? null : i)}
							className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50"
						>
							<span
								className={cn(
									'grid h-11 w-11 shrink-0 place-items-center rounded-lg border transition-colors',
									isOpen
										? 'border-brand/40 bg-navy text-brand'
										: 'border-slate-200 bg-slate-50 text-navy',
								)}
							>
								<Icon className="h-5 w-5" strokeWidth={1.9} />
							</span>
							<span className="min-w-0 flex-1">
								<span
									className={cn(
										'block font-display text-[15px] font-semibold tracking-tight transition-colors',
										isOpen ? 'text-navy' : 'text-slate-700',
									)}
								>
									{industry.title}
								</span>
								<span className="mt-0.5 block text-[13px] leading-snug text-slate-500">
									{industry.tagline}
								</span>
							</span>
							<span
								className={cn(
									'grid h-8 w-8 shrink-0 place-items-center rounded-md border transition-colors',
									isOpen
										? 'border-brand/40 text-brand'
										: 'border-slate-200 text-slate-400',
								)}
							>
								{isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
							</span>
						</button>
						{isOpen && (
							<div className="px-5 pb-6 pt-1">
								<p className="text-[14px] leading-relaxed text-slate-600">
									{industry.description}
								</p>
								<ul className="mt-4 grid gap-2.5">
									{industry.deliverables.map((item) => (
										<li key={item} className="flex items-start gap-2.5">
											<span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-brand/10 text-brand">
												<Check className="h-3.5 w-3.5" strokeWidth={2.4} />
											</span>
											<span className="text-[14px] leading-snug text-slate-700">{item}</span>
										</li>
									))}
								</ul>
								<Link
									to={`/industries/${industry.slug}`}
									className="mt-5 inline-flex h-11 items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 font-display text-[14px] font-semibold text-navy transition-all hover:border-brand hover:text-brand active:scale-[0.98]"
								>
									Explore industry
									<ArrowUpRight className="h-4 w-4" />
								</Link>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}

/* ---------- section ---------- */

export function Industries() {
	const [active, setActive] = useState(0);

	return (
		<section
			id="industries"
			className="relative scroll-mt-24 overflow-hidden bg-[#F8FAFC]"
		>
			{/* ambient accents */}
			<span
				aria-hidden
				className="pointer-events-none absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-brand/8 blur-3xl drift-slow"
			/>
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-50"
			/>

			<div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-28">
				{/* intro */}
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
						Industries
					</p>
					<h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
						Technology shaped around{' '}
						<span className="text-brand">your industry</span>.
					</h2>
					<p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
						We work across sectors where domain knowledge matters. Each engagement starts
						from the constraints, language and goals of your field — so the product fits
						the way your industry actually works.
					</p>
					<Link
						to="/industries"
						className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand transition-colors hover:text-brand-600"
					>
						Browse all industries
						<ArrowUpRight className="h-4 w-4" />
					</Link>
				</div>

				{/* desktop interactive layout */}
				<div className="mt-12 hidden gap-8 lg:grid lg:grid-cols-12 lg:gap-10">
					<div className="lg:col-span-5 xl:col-span-4">
						<IndustryIndex active={active} onSelect={setActive} />
					</div>
					<div className="lg:col-span-7 xl:col-span-8">
						<IndustryDetail index={active} />
					</div>
				</div>

				{/* mobile accordions */}
				<div className="mt-10 lg:hidden">
					<MobileAccordion />
				</div>
			</div>
		</section>
	);
}
