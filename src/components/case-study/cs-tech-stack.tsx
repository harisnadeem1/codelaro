import { Layers3 } from 'lucide-react';
import type { WorkProject } from '@/data/work';

/**
 * Technology Stack — grouped bordered grid on a light surface.
 */
export function CaseStudyTechStack({ project }: { project: WorkProject }) {
	return (
		<section className="relative bg-white">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-40" />
			<div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
						Technology stack
					</p>
					<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
						The tools behind the build.
					</h2>
					<p className="mt-4 text-[15px] leading-relaxed text-slate-500 sm:text-base">
						Chosen for fit, not fashion — each technology earned its place against the
						project’s real constraints and long-term maintainability.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{project.technologyStack.map((group) => (
						<div
							key={group.category}
							className="rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-6"
						>
							<div className="flex items-center gap-2.5">
								<span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 text-brand">
									<Layers3 className="h-4 w-4" strokeWidth={2} />
								</span>
								<h3 className="font-display text-sm font-semibold tracking-tight text-navy">
									{group.category}
								</h3>
							</div>
							<ul className="mt-4 space-y-2">
								{group.items.map((item) => (
									<li
										key={item}
										className="font-mono text-[13px] font-medium text-slate-600"
									>
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
