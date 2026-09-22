import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { WORK_PROJECTS, type WorkProject } from '@/data/work';

/**
 * Related case studies — dark surface, links to the other projects.
 */
export function CaseStudyRelated({ current }: { current: WorkProject }) {
	const related = WORK_PROJECTS.filter((project) => project.slug !== current.slug);

	if (related.length === 0) return null;

	return (
		<section className="relative overflow-hidden bg-navy-900">
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-60"
			/>
			<div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<div className="max-w-xl">
						<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand">
							More work
						</p>
						<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
							Other case studies.
						</h2>
					</div>
					<Link
						to="/work"
						className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 font-display text-sm font-semibold text-white transition-all hover:border-brand hover:bg-brand/10 hover:text-brand active:scale-[0.98]"
					>
						All work
						<ArrowUpRight className="h-4 w-4" />
					</Link>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
					{related.map((project) => (
						<Link
							key={project.id}
							to={`/work/${project.slug}`}
							className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-800 p-7 transition-all hover:-translate-y-0.5 hover:border-brand/40"
						>
							<span
								aria-hidden
								className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/10 blur-3xl transition-opacity group-hover:opacity-80"
							/>
							<div className="relative flex items-center gap-3">
								<span className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
									{project.category}
								</span>
								<span className="h-px flex-1 bg-white/10" aria-hidden />
								<ArrowUpRight className="h-4 w-4 text-slate-500 transition-colors group-hover:text-brand" />
							</div>
							<h3 className="relative mt-5 font-display text-xl font-bold tracking-tight text-white">
								{project.title}
							</h3>
							<p className="relative mt-3 text-[14px] leading-relaxed text-slate-400">
								{project.description}
							</p>
							<ul className="relative mt-5 flex flex-wrap gap-2">
								{project.technologies.map((tech) => (
									<li
										key={tech}
										className="rounded-md bg-brand/10 px-2.5 py-1 font-mono text-[11px] font-medium text-brand"
									>
										{tech}
									</li>
								))}
							</ul>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
