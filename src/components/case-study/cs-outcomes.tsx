import { Check, ArrowUpRight } from 'lucide-react';
import type { WorkProject } from '@/data/work';

export function CaseStudyOutcomes({ project }: { project: WorkProject }) {
    return (
        <section
            id="project-outcomes"
            aria-labelledby="outcomes-heading"
            className="relative isolate bg-white py-20"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-25"
            />
            <div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8">
                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end lg:gap-16">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3">
                            <span className="h-px w-8 bg-brand" />
                            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
                                Project Outcomes
                            </span>
                        </div>
                        <h2
                            id="outcomes-heading"
                            className="mt-6 font-display text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-navy"
                        >
                            What we
                            <span className="text-brand"> Achieved</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-[15px] leading-[1.85] text-slate-500">
                        An overview of the functionality and improvements delivered
                        through the development of {project.title}.
                    </p>
                </div>

                <div className="relative mt-12 overflow-hidden rounded-[24px] border border-navy/[0.09] bg-white shadow-[0_20px_65px_-45px_rgba(15,23,42,0.22)] sm:rounded-[28px]">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy/[0.08] bg-[#F8FAFC] px-6 py-5 sm:px-8">
                        <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand/20 bg-brand/[0.08] text-brand-700">
                                <Check className="h-4 w-4" strokeWidth={2} />
                            </span>
                            <div>
                                <h3 className="font-display text-[15px] font-semibold text-navy">
                                    Delivery Overview
                                </h3>
                                <p className="mt-0.5 text-[12px] text-slate-500">
                                    {project.title}
                                </p>
                            </div>
                        </div>
                        <span className="rounded-full border border-brand/15 bg-brand/[0.06] px-3 py-1.5 font-mono text-[11px] font-medium text-brand-700">
                            {String(project.outcomes.length).padStart(2, '0')}{' '}
                            {project.outcomes.length === 1 ? 'Outcome' : 'Outcomes'}
                        </span>
                    </div>

                    <div className="divide-y divide-navy/[0.07]">
                        {project.outcomes.map((outcome, index) => (
                            <article
                                key={`${outcome.label}-${index}`}
                                className="group relative grid gap-5 px-6 py-7 transition-colors duration-300 hover:bg-brand/[0.025] sm:px-8 lg:grid-cols-[56px_minmax(0,1fr)_minmax(0,1.15fr)_20px] lg:items-center lg:gap-8 lg:py-9"
                            >
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-y-0 left-0 w-[3px] origin-bottom scale-y-0 bg-brand transition-transform duration-300 group-hover:scale-y-100"
                                />

                                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/15 bg-brand/[0.06] font-mono text-[12px] font-semibold text-brand-700">
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <div className="min-w-0">
                                    <h4 className="font-display text-[17px] font-semibold leading-snug tracking-tight text-navy sm:text-[18px]">
                                        {outcome.label}
                                    </h4>
                                    <p className="mt-2 break-words font-mono text-[12px] font-medium text-brand-700">
                                        {outcome.metric}
                                    </p>
                                </div>

                                <p className="max-w-xl text-[14px] leading-[1.85] text-slate-500">
                                    {outcome.note}
                                </p>

                                <ArrowUpRight
                                    aria-hidden="true"
                                    className="hidden h-4 w-4 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand lg:block"
                                />
                            </article>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-navy/[0.08] bg-[#F8FAFC] px-6 py-4 sm:px-8">
                        <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
                                Project Delivery
                            </span>
                        </div>
                        <span className="font-mono text-[10px] text-slate-400">
                            {project.category}
                        </span>
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                    <p className="max-w-2xl text-[12px] leading-relaxed text-slate-400">
                        Outcomes reflect the project information provided.
                        Quantitative results should be independently verified
                        before publication.
                    </p>
                    <span className="font-mono text-[11px] font-medium text-slate-400">
                        {project.title}
                    </span>
                </div>
            </div>
        </section>
    );
}