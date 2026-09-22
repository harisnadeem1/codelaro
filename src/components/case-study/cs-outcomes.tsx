import { ShieldCheck } from 'lucide-react';
import type { WorkProject } from '@/data/work';

/**
 * Verified Outcomes — light surface. Metrics are editable placeholders; the
 * page never publishes invented statistics.
 */
export function CaseStudyOutcomes({ project }: { project: WorkProject }) {
	return (
		<section className="relative overflow-hidden bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-40" />
			<div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
						Outcomes
					</p>
					<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
						Results you can <span className="text-brand">verify</span>.
					</h2>
					<p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-500 sm:text-base">
						We report outcomes that can be sourced and checked. The figures below are
						placeholders — replace each with a verified, attributable metric before
						publishing.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
					{project.outcomes.map((outcome, i) => (
						<div
							key={i}
							className="relative rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm"
						>
							<span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-brand">
								<ShieldCheck className="h-4 w-4" strokeWidth={2} />
							</span>
							<p className="mt-5 font-display text-4xl font-bold tabular-nums tracking-tight text-navy">
								{outcome.metric}
							</p>
							<p className="mt-2 font-display text-sm font-semibold tracking-tight text-navy">
								{outcome.label}
							</p>
							<p className="mt-3 text-[13px] leading-relaxed text-slate-500">
								{outcome.note}
							</p>
						</div>
					))}
				</div>

				<p className="mt-8 flex items-center gap-2 text-[13px] text-slate-400">
					<span className="h-1.5 w-1.5 rounded-full bg-brand" />
					Codelaro never publishes invented statistics, client names or testimonials.
				</p>
			</div>
		</section>
	);
}
