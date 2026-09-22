import { Link } from 'react-router';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { WORK_PROJECTS, type WorkProject } from '@/data/work';
import { cn } from '@/lib/utils';

function BrowserMockup({ project, flipped }: { project: WorkProject; flipped: boolean }) {
	return (
		<div
			className={cn(
				'scale-in relative overflow-hidden rounded-xl border border-white/10 bg-navy-800 shadow-2xl shadow-black/40',
				flipped ? 'lg:order-2' : 'lg:order-1',
			)}
		>
			<div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
				<span className="h-3 w-3 rounded-full bg-red-400/70" aria-hidden />
				<span className="h-3 w-3 rounded-full bg-amber-400/70" aria-hidden />
				<span className="h-3 w-3 rounded-full bg-emerald-400/70" aria-hidden />
				<div className="ml-3 hidden flex-1 items-center rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 sm:flex">
					<span className="font-mono text-[11px] text-slate-400">
						your-project.codelaro.com
					</span>
				</div>
			</div>

			<div className="relative aspect-[16/10] w-full bg-blueprint-grid-dark">
				<span
					aria-hidden
					className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand/15 blur-3xl drift-slow"
				/>
				<div className="absolute inset-0 grid place-items-center p-6">
					<div className="flex flex-col items-center gap-3 text-center">
						<span className="grid h-12 w-12 place-items-center rounded-lg border border-white/15 bg-white/[0.04] text-brand">
							<Maximize2 className="h-5 w-5" strokeWidth={1.8} />
						</span>
						<p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
							{project.screenshotAlt}
						</p>
						<p className="max-w-xs text-[12px] leading-relaxed text-slate-500">
							Drop the real project screenshot here — 16:10 recommended.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

function ProjectShowcase({ project, index }: { project: WorkProject; index: number }) {
	const flipped = index % 2 === 1;

	return (
		<article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
			<BrowserMockup project={project} flipped={flipped} />

			<div className={cn(flipped ? 'lg:order-1' : 'lg:order-2')}>
				<div className="flex items-center gap-3">
					<span className="font-mono text-[12px] font-semibold tabular-nums text-brand">
						{String(index + 1).padStart(2, '0')}
					</span>
					<span className="h-px w-8 bg-brand/40" aria-hidden />
					<span className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
						{project.category}
					</span>
				</div>

				<h3 className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
					{project.title}
				</h3>

				<p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-300 sm:text-base">
					{project.description}
				</p>

				<div className="mt-7 grid gap-5 sm:grid-cols-2">
					<div>
						<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
							The challenge
						</p>
						<p className="mt-3 text-[13px] leading-relaxed text-slate-400">
							{project.challenge[0]}
						</p>
					</div>
					<div>
						<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
							The solution
						</p>
						<p className="mt-3 text-[13px] leading-relaxed text-slate-400">
							{project.solution[0]}
						</p>
					</div>
				</div>

				<div className="mt-7 grid gap-5 sm:grid-cols-2">
					<div>
						<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
							Services
						</p>
						<ul className="mt-3 flex flex-wrap gap-2">
							{project.services.map((service) => (
								<li
									key={service}
									className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[12px] font-medium text-slate-300"
								>
									{service}
								</li>
							))}
						</ul>
					</div>
					<div>
						<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
							Technologies
						</p>
						<ul className="mt-3 flex flex-wrap gap-2">
							{project.technologies.map((tech) => (
								<li
									key={tech}
									className="rounded-md bg-brand/10 px-2.5 py-1 font-mono text-[12px] font-medium text-brand"
								>
									{tech}
								</li>
							))}
						</ul>
					</div>
				</div>

				<Link
					to={`/work/${project.slug}`}
					className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-6 font-display text-[15px] font-semibold text-white transition-all hover:border-brand hover:bg-brand/10 hover:text-brand active:scale-[0.98]"
				>
					View Case Study
					<ArrowUpRight className="h-4 w-4" />
				</Link>
			</div>
		</article>
	);
}

export function WorkOverviewShowcase() {
	return (
		<section className="relative scroll-mt-24 overflow-hidden bg-navy-900">
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-60"
			/>
			<span
				aria-hidden
				className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-brand/10 blur-3xl drift-slow"
			/>

			<div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-28">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand">
						Case studies
					</p>
					<h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
						From challenge to{' '}
						<span className="text-brand">measurable outcome</span>.
					</h2>
					<p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
						Each engagement follows the same arc — understand the context, frame the
						challenge, engineer the solution and verify the result. Open any case study
						for the full story.
					</p>
				</div>

				<div className="mt-16 space-y-20 md:space-y-28">
					{WORK_PROJECTS.map((project, i) => (
						<ProjectShowcase key={project.id} project={project} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}
