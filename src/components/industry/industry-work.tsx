import { Link } from 'react-router';
import { ArrowUpRight, Lock } from 'lucide-react';
import type { Industry } from '@/data/industries';

export function IndustryWork({ industry }: { industry: Industry }) {
	return (
		<section className="relative overflow-hidden bg-navy-900 text-white">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-50" />
			<div className="drift-slow pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

			<div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-24">
				<div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
					<div>
						<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand">
							Relevant work
						</p>
						<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
							Experience in {industry.title.toLowerCase()}
						</h2>
						<p className="mt-5 text-[15px] leading-relaxed text-slate-400 sm:text-base">
							We share detailed case studies under NDA. Ask us about our experience in
							{industry.title.toLowerCase()} — we will walk you through relevant
							engagements, the challenges they addressed and how they map to your
							situation.
						</p>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Link
								to="/#work"
								className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-6 font-display text-[15px] font-semibold text-navy shadow-lg shadow-brand/25 transition-all hover:bg-brand-400 hover:shadow-brand/40 active:scale-[0.98]"
							>
								See selected work
								<ArrowUpRight className="h-4 w-4" />
							</Link>
							<Link
								to="#contact"
								className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 font-display text-[15px] font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10 active:scale-[0.98]"
							>
								Ask about our experience
							</Link>
						</div>
					</div>

					<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
						<span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 text-brand">
							<Lock className="h-5 w-5" strokeWidth={1.9} />
						</span>
						<h3 className="mt-5 font-display text-[15px] font-semibold text-white">
							Why we work this way
						</h3>
						<p className="mt-2 text-[13px] leading-relaxed text-slate-400">
							We do not publish invented clients, metrics or results. What we can do is
							describe, in detail, the kinds of {industry.title.toLowerCase()}{' '}
							challenges we have taken on and how we approached them — so you can judge
							the fit for yourself.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
