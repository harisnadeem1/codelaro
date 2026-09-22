import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { REASONS } from '@/data/why-codelaro';

/**
 * Why Codelaro reasons — sticky editorial split on a light surface.
 */
export function WhyReasons() {
	return (
		<section className="relative overflow-hidden bg-[#F8FAFC]">
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-50"
			/>
			<span
				aria-hidden
				className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-brand/8 blur-3xl drift-slow"
			/>

			<div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-28">
				<div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
					<div className="lg:col-span-5">
						<div className="lg:sticky lg:top-32">
							<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
								Six reasons
							</p>
							<h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
								What makes us a{' '}
								<span className="text-brand">different kind of partner</span>.
							</h2>
							<p className="mt-5 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg">
								Not a feature checklist — a set of principles that shape how we think,
								build and collaborate on every engagement.
							</p>
							<Link
								to="/company"
								className="mt-8 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-navy transition-colors hover:text-brand"
							>
								More about Codelaro
								<ArrowUpRight className="h-4 w-4 text-brand" />
							</Link>
						</div>
					</div>

					<div className="lg:col-span-7">
						<ol className="relative">
							<span
								aria-hidden
								className="absolute left-[27px] top-3 bottom-3 w-px bg-slate-200"
							/>
							{REASONS.map((reason) => (
								<li
									key={reason.number}
									className="group relative flex gap-6 border-b border-slate-200/80 py-7 last:border-b-0"
								>
									<span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white font-display text-lg font-bold tabular-nums text-navy shadow-sm transition-colors group-hover:border-brand/50 group-hover:text-brand">
										{reason.number}
									</span>
									<div className="min-w-0 pt-1">
										<h3 className="font-display text-lg font-semibold tracking-tight text-navy sm:text-xl">
											{reason.title}
										</h3>
										<p className="mt-2 max-w-xl text-[15px] leading-relaxed text-slate-600">
											{reason.description}
										</p>
									</div>
								</li>
							))}
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
}
