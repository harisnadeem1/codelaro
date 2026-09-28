import { ArrowUpRight, CheckCircle2, Layers3 } from 'lucide-react';
import type { WorkProject } from '@/data/work';

export function CaseStudySolution({ project }: { project: WorkProject }) {
    return (
        <section
            id="project-solution"
            aria-labelledby="solution-heading"
            className="relative isolate bg-navy-900 py-20"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-40"
            />
            <div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8">
                <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20 xl:gap-28">
                    <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
                        <div className="inline-flex items-center gap-3">
                            <span className="h-px w-8 bg-brand" />
                            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                                The Solution
                            </span>
                        </div>
                        <h2
                            id="solution-heading"
                            className="mt-6 max-w-lg font-display text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-white"
                        >
                            Engineering{' '}
                            <span className="text-slate-400">The Solution</span>
                        </h2>
                        <div className="mt-7 space-y-5">
                            {project.solution.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="max-w-lg text-[15px] leading-[1.9] text-slate-300"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className="mt-9 hidden items-center gap-3 border-t border-white/10 pt-6 lg:flex">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                                <Layers3 className="h-5 w-5" strokeWidth={1.6} />
                            </span>
                            <div>
                                <p className="font-display text-[13px] font-semibold text-white">
                                    {project.title}
                                </p>
                                <p className="mt-1 text-[11px] text-slate-400">
                                    Software solution & capabilities
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="min-w-0">
                        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
                            <div>
                                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                                    Product Capabilities
                                </p>
                                <h3 className="mt-3 font-display text-[22px] font-semibold tracking-tight text-white sm:text-[25px]">
                                    Key features delivered
                                    <span className="text-brand">.</span>
                                </h3>
                            </div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-3.5 py-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-brand" />
                                <span className="font-mono text-[11px] font-semibold text-brand">
                                    {String(project.keyFeatures.length).padStart(2, '0')} Features
                                </span>
                            </span>
                        </div>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {project.keyFeatures.map((feature, index) => (
                                <article
                                    key={`${feature.title}-${index}`}
                                    className="group relative flex min-h-[230px] flex-col overflow-hidden rounded-[20px] border border-white/[0.09] bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[0.065] hover:shadow-[0_18px_45px_-25px_rgba(0,0,0,0.4)] sm:p-7"
                                >
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100"
                                    />
                                    <div className="flex items-start justify-between gap-4">
                                        <span className="font-mono text-[12px] font-semibold tracking-[0.12em] text-brand">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <ArrowUpRight
                                            aria-hidden="true"
                                            className="h-4 w-4 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                                        />
                                    </div>
                                    <div className="mt-auto pt-10">
                                        <h4 className="font-display text-[17px] font-semibold leading-snug tracking-tight text-white">
                                            {feature.title}
                                        </h4>
                                        <p className="mt-3 text-[13px] leading-[1.85] text-slate-300 sm:text-[14px]">
                                            {feature.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                        <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                            <div className="flex items-center gap-2.5">
                                <span className="h-2 w-2 rounded-full bg-brand" />
                                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
                                    Product Capabilities
                                </span>
                            </div>
                            <span className="font-mono text-[11px] text-slate-500">
                                {project.title}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}