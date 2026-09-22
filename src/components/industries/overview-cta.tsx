import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function IndustriesOverviewCta() {
	return (
		<section id="contact" className="relative scroll-mt-24 overflow-hidden bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-50" />
			<div className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-brand/12 blur-3xl" />

			<div className="relative mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-8 md:py-28">
				<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
					Start a Project
				</p>
				<h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
					Do not see your{' '}
					<span className="text-brand">sector</span> listed?
				</h2>
				<p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
					The industries above are where we work most often, not a closed list. If your
					field has a digital challenge, talk to us — we will tell you honestly whether we
					are the right fit.
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
						to="/solutions"
						className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-7 font-display text-[15px] font-semibold text-navy transition-all hover:border-navy/30 hover:bg-slate-50 active:scale-[0.98] sm:w-auto"
					>
						Explore all solutions
					</Link>
				</div>

				<p className="mt-8 text-[13px] text-slate-400">
					Code. Launch. Grow. — we reply within one business day.
				</p>
			</div>
		</section>
	);
}
