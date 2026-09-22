import { Link } from 'react-router';
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';
import type { WorkProject } from '@/data/work';

function HeroMockup({ project }: { project: WorkProject }) {
	return (
		<div className="scale-in relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl shadow-navy/15 ring-1 ring-navy/5">
			<div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
				<span className="h-3 w-3 rounded-full bg-red-400/70" aria-hidden />
				<span className="h-3 w-3 rounded-full bg-amber-400/70" aria-hidden />
				<span className="h-3 w-3 rounded-full bg-emerald-400/70" aria-hidden />
				<div className="ml-3 hidden flex-1 items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 sm:flex">
					<span className="font-mono text-[11px] text-slate-400">
						your-project.codelaro.com
					</span>
				</div>
			</div>
			<div className="relative aspect-[16/10] w-full bg-blueprint-grid">
				<span
					aria-hidden
					className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand/15 blur-3xl drift-slow"
				/>
				<div className="absolute inset-0 grid place-items-center p-6">
					<div className="flex flex-col items-center gap-3 text-center">
						<span className="grid h-12 w-12 place-items-center rounded-lg border border-slate-200 bg-white text-brand">
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

export function CaseStudyHero({ project }: { project: WorkProject }) {
	return (
		<section className="relative overflow-hidden border-b border-slate-200/80 bg-white">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-50" />
			<div className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />

			<div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24">
				<Link
					to="/work"
					className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-500 transition-colors hover:text-brand"
				>
					<ArrowLeft className="h-4 w-4" />
					All work
				</Link>

				<div className="mt-8 flex items-center gap-3">
					<span className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
						Case study
					</span>
					<span className="h-px w-8 bg-brand/40" aria-hidden />
					<span className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
						{project.category}
					</span>
				</div>

				<h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl md:text-[3.25rem] md:leading-[1.05]">
					{project.title}
				</h1>

				<p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
					{project.description}
				</p>

				<div className="mt-8 flex flex-wrap gap-2">
					{project.services.map((service) => (
						<span
							key={service}
							className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[12px] font-medium text-navy"
						>
							{service}
						</span>
					))}
				</div>

				<div className="mt-10 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
					<div className="lg:col-span-5 lg:order-2">
						<HeroMockup project={project} />
					</div>
					<div className="lg:col-span-7 lg:order-1">
						<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
							<a
								href="#contact"
								className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-7 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/40 active:scale-[0.98] sm:w-auto"
							>
								Start a Project
								<ArrowRight className="h-4 w-4" />
							</a>
							<Link
								to="/work"
								className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-7 font-display text-[15px] font-semibold text-navy transition-all hover:border-navy/30 hover:bg-slate-50 active:scale-[0.98] sm:w-auto"
							>
								More case studies
							</Link>
						</div>

						<dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-slate-200 pt-7 sm:grid-cols-4">
							<div>
								<dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
									Services
								</dt>
								<dd className="mt-1.5 font-display text-sm font-semibold text-navy">
									{project.services.length} disciplines
								</dd>
							</div>
							<div>
								<dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
									Technologies
								</dt>
								<dd className="mt-1.5 font-display text-sm font-semibold text-navy">
									{project.technologies.length} tools
								</dd>
							</div>
							<div>
								<dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
									Approach
								</dt>
								<dd className="mt-1.5 font-display text-sm font-semibold text-navy">
									{project.approach.length} stages
								</dd>
							</div>
							<div>
								<dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
									Features
								</dt>
								<dd className="mt-1.5 font-display text-sm font-semibold text-navy">
									{project.keyFeatures.length} shipped
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</section>
	);
}
