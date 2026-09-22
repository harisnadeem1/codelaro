import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import type { Industry } from '@/data/industries';

export function IndustryCta({ industry }: { industry: Industry }) {
	return (
		<section id="contact" className="relative scroll-mt-24 overflow-hidden bg-navy text-white">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-40" />
			<div className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-brand/12 blur-3xl" />
			<div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-brand/5 blur-3xl" />

			<div className="relative mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-8 md:py-28">
				<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand">
					Talk to our team
				</p>
				<h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
					Build for{' '}
					<span className="text-brand">{industry.title.toLowerCase()}</span> with Codelaro
				</h2>
				<p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
					Tell us about the challenge you are facing in your sector. We follow up with a
					short discovery and a clear view of how we can help — no obligation.
				</p>

				<div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<Link
						to="/contact"
						className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-7 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/40 active:scale-[0.98] sm:w-auto"
					>
						Talk to our team
						<ArrowRight className="h-4 w-4" />
					</Link>
					<Link
						to="/industries"
						className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-7 font-display text-[15px] font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10 active:scale-[0.98] sm:w-auto"
					>
						Explore all industries
					</Link>
				</div>

				<p className="mt-8 text-[13px] text-slate-400">
					Code. Launch. Grow. — we reply within one business day.
				</p>
			</div>
		</section>
	);
}
