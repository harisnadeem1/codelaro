import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, Check, Plus, Minus } from 'lucide-react';
import { SOLUTIONS } from '@/data/solutions';
import { cn } from '@/lib/utils';

/* ---------- desktop: vertical navigator + detail panel ---------- */

function Navigator({
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
				className="absolute left-[22px] top-3 bottom-3 w-px bg-white/10"
			/>
			<ul className="space-y-1">
				{SOLUTIONS.map((solution, i) => {
					const Icon = solution.icon;
					const isActive = i === active;
					return (
						<li key={solution.slug}>
							<Link
								to={`/solutions/${solution.slug}`}
								aria-pressed={isActive}
								onClick={() => onSelect(i)}
								className={cn(
									'group relative flex w-full items-center gap-4 rounded-xl px-3 py-3.5 text-left transition-all duration-300',
									isActive
										? 'bg-brand/[0.12] ring-1 ring-brand/30'
										: 'hover:bg-white/[0.04]',
								)}
							>
								<span
									className={cn(
										'relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-lg border transition-all duration-300',
										isActive
											? 'border-brand/40 bg-brand text-white shadow-lg shadow-brand/20'
											: 'border-white/10 bg-white/[0.03] text-slate-400 group-hover:text-brand',
									)}
								>
									<Icon className="h-5 w-5" strokeWidth={1.9} />
								</span>
								<span className="min-w-0 flex-1">
									<span
										className={cn(
											'block font-display text-[15px] font-semibold tracking-tight transition-colors',
											isActive ? 'text-white' : 'text-slate-300 group-hover:text-white',
										)}
									>
										{solution.title}
									</span>
									<span
										className={cn(
											'mt-0.5 block truncate text-[13px] leading-snug transition-colors',
											isActive ? 'text-brand-200' : 'text-slate-500',
										)}
									>
										{solution.outcome}
									</span>
								</span>
								<ArrowUpRight
									className={cn(
										'h-4 w-4 shrink-0 transition-all duration-300',
										isActive
											? 'text-brand opacity-100'
											: 'text-slate-600 opacity-0 group-hover:opacity-100',
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

function DetailPanel({ index }: { index: number }) {
	const solution = SOLUTIONS[index];
	const Icon = solution.icon;

	return (
		<div
			key={solution.slug}
			className="scale-in relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-7 sm:p-9"
		>
			{/* controlled teal glow */}
			<span
				aria-hidden
				className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-brand/15 blur-3xl drift-slow"
			/>
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-30"
			/>

			<div className="relative flex items-start gap-5">
				<span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand text-white shadow-lg shadow-brand/25">
					<Icon className="h-7 w-7" strokeWidth={1.8} />
				</span>
				<div className="min-w-0">
					<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
						Solution {String(index + 1).padStart(2, '0')}
					</p>
					<h3 className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
						{solution.title}
					</h3>
				</div>
			</div>

			<p className="relative mt-6 max-w-xl text-[15px] leading-relaxed text-slate-300 sm:text-base">
				{solution.explanation}
			</p>

			<div className="relative mt-7">
				<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
					What this includes
				</p>
				<ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
					{solution.capabilities.map((cap) => (
						<li key={cap} className="flex items-start gap-2.5">
							<span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-brand/15 text-brand">
								<Check className="h-3.5 w-3.5" strokeWidth={2.4} />
							</span>
							<span className="text-[14px] leading-snug text-slate-300">{cap}</span>
						</li>
					))}
				</ul>
			</div>

			<div className="relative mt-auto pt-8">
				<Link
					to={`/solutions/${solution.slug}`}
					className="inline-flex h-12 items-center gap-2 rounded-lg bg-brand px-6 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/40 active:scale-[0.98]"
				>
					Explore Solution
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
		<div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
			{SOLUTIONS.map((solution, i) => {
				const Icon = solution.icon;
				const isOpen = open === i;
				return (
					<div key={solution.slug}>
						<button
							type="button"
							aria-expanded={isOpen}
							onClick={() => setOpen(isOpen ? null : i)}
							className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.04]"
						>
							<span
								className={cn(
									'grid h-11 w-11 shrink-0 place-items-center rounded-lg border transition-colors',
									isOpen
										? 'border-brand/40 bg-brand text-white'
										: 'border-white/10 bg-white/[0.03] text-slate-400',
								)}
							>
								<Icon className="h-5 w-5" strokeWidth={1.9} />
							</span>
							<span className="min-w-0 flex-1">
								<span
									className={cn(
										'block font-display text-[15px] font-semibold tracking-tight transition-colors',
										isOpen ? 'text-white' : 'text-slate-200',
									)}
								>
									{solution.title}
								</span>
								<span className="mt-0.5 block text-[13px] leading-snug text-slate-500">
									{solution.outcome}
								</span>
							</span>
							<span
								className={cn(
									'grid h-8 w-8 shrink-0 place-items-center rounded-md border transition-colors',
									isOpen
										? 'border-brand/40 text-brand'
										: 'border-white/10 text-slate-500',
								)}
							>
								{isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
							</span>
						</button>
						{isOpen && (
							<div className="px-5 pb-6 pt-1">
								<p className="text-[14px] leading-relaxed text-slate-300">
									{solution.explanation}
								</p>
								<ul className="mt-4 grid gap-2.5">
									{solution.capabilities.map((cap) => (
										<li key={cap} className="flex items-start gap-2.5">
											<span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-brand/15 text-brand">
												<Check className="h-3.5 w-3.5" strokeWidth={2.4} />
											</span>
											<span className="text-[14px] leading-snug text-slate-300">{cap}</span>
										</li>
									))}
								</ul>
								<Link
									to={`/solutions/${solution.slug}`}
									className="mt-5 inline-flex h-11 items-center gap-2 rounded-lg bg-brand px-5 font-display text-[14px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 active:scale-[0.98]"
								>
									Explore Solution
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

export function Solutions() {
	const [active, setActive] = useState(0);

	return (
		<section
			id="solutions"
			className="relative scroll-mt-24 overflow-hidden bg-navy"
		>
			{/* ambient teal glow */}
			<span
				aria-hidden
				className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-brand/10 blur-3xl drift-slow"
			/>
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-25"
			/>

			<div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-28">
				{/* intro */}
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand">
						Solutions
					</p>
					<h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
						Built around the outcome,{' '}
						<span className="text-brand">not just the technology</span>.
					</h2>
					<p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
						Codelaro combines strategy, design and engineering to solve real business
						challenges — so the software we ship moves a measurable result, not just a
						checklist of features.
					</p>
					<Link
						to="/solutions"
						className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand transition-colors hover:text-brand-400"
					>
						Browse all solutions
						<ArrowUpRight className="h-4 w-4" />
					</Link>
				</div>

				{/* desktop interactive layout */}
				<div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-12 lg:gap-8">
					<div className="lg:col-span-5 xl:col-span-4">
						<Navigator active={active} onSelect={setActive} />
					</div>
					<div className="lg:col-span-7 xl:col-span-8">
						<DetailPanel index={active} />
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
