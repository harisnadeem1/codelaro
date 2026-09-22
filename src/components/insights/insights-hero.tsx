import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';

export function InsightsHero() {
	return (
		<section className="relative overflow-hidden bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b" />
			<div className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-brand/12 blur-3xl" />
			<div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

			<div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 md:pt-40 lg:pb-24">
				<div className="rise-in inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
					<BookOpen className="h-3.5 w-3.5 text-brand" strokeWidth={2} />
					<span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-700">
						Insights
					</span>
					<span className="h-3 w-3 rounded-full bg-brand/20" />
					<span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-400">
						Notes on engineering & product
					</span>
				</div>

				<h1 className="mt-6 max-w-3xl font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
					<span className="rise-in block" style={{ animationDelay: '0.15s' }}>
						Thinking from the{' '}
						<span className="text-brand">team that builds</span>.
					</span>
				</h1>

				<p
					className="rise-in mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg"
					style={{ animationDelay: '0.3s' }}
				>
					Notes on engineering, AI, product, cloud and the business of building software.
					Practical perspectives from a senior team — written for people who ship.
				</p>

				<div
					className="rise-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
					style={{ animationDelay: '0.42s' }}
				>
					<Link
						to="#latest"
						className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-7 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/40 active:scale-[0.98] sm:w-auto"
					>
						Read the latest
						<ArrowRight className="h-4 w-4" />
					</Link>
					<Link
						to="/contact"
						className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-7 font-display text-[15px] font-semibold text-navy transition-all hover:border-navy/30 hover:bg-slate-50 active:scale-[0.98] sm:w-auto"
					>
						Start a conversation
						<ArrowUpRight className="h-4 w-4 text-brand" />
					</Link>
				</div>
			</div>
		</section>
	);
}
