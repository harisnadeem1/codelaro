import { Link } from 'react-router';
import { ArrowRight, CalendarClock } from 'lucide-react';

type CtaSectionProps = {
	eyebrow?: string;
	title?: React.ReactNode;
	subtitle?: string;
};

/**
 * Reusable dark contact CTA. Carries the `#contact` anchor so the header
 * "Start a Project" / "Contact" links resolve on every page that renders it.
 */
export function CtaSection({
	eyebrow = 'Let’s build',
	title = (
		<>
			Have an idea? <span className="text-brand">Let’s build what’s next.</span>
		</>
	),
	subtitle = 'Tell us about your goals — we will map the fastest route from idea to launch to growth. No obligation, just a clear conversation with a senior team.',
}: CtaSectionProps) {
	return (
		<section id="contact" className="relative scroll-mt-24 overflow-hidden bg-navy">
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-40"
			/>
			<span
				aria-hidden
				className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-brand/15 blur-3xl"
			/>
			<span
				aria-hidden
				className="drift-slow pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-brand/8 blur-3xl"
			/>

			<div className="relative mx-auto w-full max-w-4xl px-5 py-24 text-center sm:px-8 md:py-32">
				<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand">
					{eyebrow}
				</p>

				<h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-[3.25rem] md:leading-[1.05]">
					{title}
				</h2>

				<p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
					{subtitle}
				</p>

				<div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<Link
						to="/start-a-project"
						className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-7 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/40 active:scale-[0.98] sm:w-auto"
					>
						Start a Project
						<ArrowRight className="h-4 w-4" />
					</Link>
					<Link
						to="/book-a-consultation"
						className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-7 font-display text-[15px] font-semibold text-white transition-all hover:border-brand hover:bg-brand/10 hover:text-brand active:scale-[0.98] sm:w-auto"
					>
						<CalendarClock className="h-4 w-4 text-brand" />
						Book a Consultation
					</Link>
				</div>

				<p className="mt-8 text-[13px] text-slate-500">
					Code. Launch. Grow. — we reply within one business day.
				</p>
			</div>
		</section>
	);
}
