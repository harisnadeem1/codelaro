import { Link } from 'react-router';
import { ArrowUpRight, Rocket } from 'lucide-react';

export function StartProjectHero() {
	return (
		<section className="relative overflow-hidden bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b" />
			<div className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-brand/12 blur-3xl" />
			<div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

			<div className="relative mx-auto w-full max-w-3xl px-5 pb-12 pt-32 sm:px-8 md:pt-40">
				<div className="rise-in inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
					<Rocket className="h-3.5 w-3.5 text-brand" strokeWidth={2} />
					<span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-700">
						Start a Project
					</span>
					<span className="h-3 w-px bg-slate-200" />
					<span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-400">
						3 quick steps
					</span>
				</div>

				<h1 className="mt-6 font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl md:text-[3rem] md:leading-[1.06]">
					Tell us what you want to{' '}
					<span className="text-brand">build</span>.
				</h1>

				<p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
					A short, guided brief covering you, the project and the details. It takes a
					couple of minutes — we reply within one business day with a clear next step.
				</p>

				<p className="mt-6 text-[13px] text-slate-400">
					Prefer a conversation instead?{' '}
					<Link
						to="/book-a-consultation"
						className="font-semibold text-brand transition-colors hover:text-brand-700"
					>
						Book a consultation
					</Link>{' '}
					or{' '}
					<Link
						to="/contact"
						className="font-semibold text-brand transition-colors hover:text-brand-700"
					>
						send a quick message
						<ArrowUpRight className="ml-0.5 inline h-3.5 w-3.5" />
					</Link>
					.
				</p>
			</div>
		</section>
	);
}
