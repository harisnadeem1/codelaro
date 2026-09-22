import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Solution } from '@/data/solutions';

export function SolutionHero({ solution }: { solution: Solution }) {
	const Icon = solution.icon;
	return (
		<section className="relative overflow-hidden border-b border-slate-200/80 bg-white">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-50" />
			<div className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />

			<div className="relative mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 md:py-24">
				<Link
					to="/solutions"
					className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-500 transition-colors hover:text-brand"
				>
					<ArrowLeft className="h-4 w-4" />
					All solutions
				</Link>

				<div className="mt-8 flex items-center gap-4">
					<span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">
						<Icon className="h-7 w-7" strokeWidth={1.8} />
					</span>
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
						Solution
					</p>
				</div>

				<h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl md:text-[3.25rem] md:leading-[1.05]">
					{solution.title}
				</h1>

				<p className="mt-5 max-w-2xl font-display text-xl font-semibold leading-snug text-brand-700 sm:text-2xl">
					{solution.outcome}
				</p>

				<p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-500">
					{solution.explanation}
				</p>

				<div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
					<Link
						to="#contact"
						className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-7 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/40 active:scale-[0.98] sm:w-auto"
					>
						Book a consultation
						<ArrowRight className="h-4 w-4" />
					</Link>
					<Link
						to="/#work"
						className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-7 font-display text-[15px] font-semibold text-navy transition-all hover:border-navy/30 hover:bg-slate-50 active:scale-[0.98] sm:w-auto"
					>
						Explore our work
					</Link>
				</div>
			</div>
		</section>
	);
}
