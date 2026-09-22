import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

/**
 * Compact credibility statement that sits directly below the hero.
 * No invented logos, awards, statistics or testimonials — just a clear
 * positioning line supported by tasteful typography and subtle visual cues.
 */
export function Credibility() {
	return (
		<section className="relative overflow-hidden border-b border-slate-200/80 bg-white">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-50" />
			<div className="pointer-events-none absolute -left-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-brand/8 blur-3xl" />

			<div className="relative mx-auto w-full max-w-5xl px-5 py-14 text-center sm:px-8 md:py-20">
				<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
					Our approach
				</p>

				<h2 className="mx-auto mt-5 max-w-3xl font-display text-2xl font-semibold leading-[1.18] tracking-tight text-navy sm:text-3xl md:text-[2.5rem] md:leading-[1.14]">
					Technology built around{' '}
					<span className="relative whitespace-nowrap text-brand">
						your business
						<span className="absolute -bottom-0.5 left-0 h-[3px] w-full rounded-full bg-brand/30" />
					</span>
					.
				</h2>

				<p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-500 sm:text-base">
					We pair senior engineering with product thinking — so every line of code
					serves a real business outcome, not a checklist.
				</p>

				<div className="mt-7 flex items-center justify-center gap-2 text-[13px] font-medium text-slate-400">
					<span className="h-px w-8 bg-slate-200" />
					<span className="font-mono uppercase tracking-[0.2em]">Senior-only teams</span>
					<span className="h-px w-8 bg-slate-200" />
				</div>

				<Link
					to="#services"
					className="group mt-8 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-navy transition-colors hover:text-brand"
				>
					See what we do
					<ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-0.5" />
				</Link>
			</div>
		</section>
	);
}
