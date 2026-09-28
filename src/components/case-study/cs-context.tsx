import { ArrowUpRight, Check, Target } from 'lucide-react';
import type { WorkProject } from '@/data/work';

export function CaseStudyContext({ project }: { project: WorkProject }) {
    return (
        <section
            id="project-context"
            aria-labelledby="context-heading"
            className="relative isolate bg-[#F8FAFC] py-20 sm:py-20 lg:py-20"
        >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-30" />
            <div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8">
                <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20 xl:gap-28">
                    <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
                        <div className="inline-flex items-center gap-3">
                            <span className="h-px w-8 bg-brand" />
                            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
                                Project Background
                            </span>
                        </div>
                        <h2
                            id="context-heading"
                            className="mt-6 max-w-md font-display text-[clamp(2rem,3.5vw,3.5rem)] font-semibold leading-[1.12] tracking-[-0.04em] text-navy"
                        >
                            Understanding {' '}
                            <span className="text-brand">The Project</span>
                        </h2>
                        <p className="mt-6 max-w-sm text-[15px] leading-[1.85] text-slate-500">
                            Every software project begins with understanding its requirements, existing systems, and technical constraints.
                        </p>
                        <div className="mt-10 hidden items-center gap-3 border-t border-navy/10 pt-6 lg:flex">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-brand/[0.07] text-brand">
                                <ArrowUpRight className="h-4 w-4" />
                            </span>
                            <div>
                                <p className="font-display text-[13px] font-semibold text-navy">
                                    {project.title}
                                </p>
                                <p className="mt-0.5 text-[11px] text-slate-500">
                                    Project context & objectives
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="min-w-0">
                        <div className="relative border-l border-navy/10 pl-7 sm:pl-10">
                            <span aria-hidden="true" className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full border-2 border-[#F8FAFC] bg-brand ring-2 ring-brand/20" />
                            <div className="mb-7 flex items-center justify-between gap-4">
                                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                                    The Starting Point
                                </span>
                                <span className="font-mono text-[11px] text-slate-400">
                                    01 / 02
                                </span>
                            </div>
                            <div className="space-y-6">
                                {project.context.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="max-w-3xl text-[15px] leading-[1.9] text-slate-600 sm:text-[16px]"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="relative mt-12 border-l border-brand/25 pl-7 sm:pl-10">
                            <span aria-hidden="true" className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full border-2 border-[#F8FAFC] bg-brand ring-2 ring-brand/20" />
                            <div className="mb-6 flex items-center justify-between gap-4">
                                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700">
                                    Project Objectives
                                </span>
                                <span className="font-mono text-[11px] text-slate-400">
                                    02 / 02
                                </span>
                            </div>
                            <div className="overflow-hidden rounded-[22px] border border-navy/[0.08] bg-white shadow-[0_15px_45px_-30px_rgba(15,23,42,0.15)] sm:rounded-[28px]">
                                <div className="flex items-center justify-between gap-4 border-b border-navy/[0.07] px-6 py-5 sm:px-8">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                                            <Target className="h-5 w-5" strokeWidth={1.7} />
                                        </span>
                                        <div>
                                            <h3 className="font-display text-[17px] font-bold tracking-tight text-navy sm:text-lg">
                                                What we set out to achieve
                                            </h3>
                                            <p className="mt-1 text-[12px] text-slate-500">
                                                Key project objectives
                                            </p>
                                        </div>
                                    </div>
                                    <span className="hidden rounded-full border border-brand/15 bg-brand/[0.06] px-3 py-1 font-mono text-[11px] font-semibold text-brand-700 sm:inline-flex">
                                        {String(project.objectives.length).padStart(2, '0')} Goals
                                    </span>
                                </div>
                                <ol className="divide-y divide-navy/[0.06] px-6 sm:px-8">
                                    {project.objectives.map((objective, index) => (
                                        <li key={index} className="group flex items-start gap-4 py-5 sm:gap-5">
                                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brand/15 bg-brand/[0.07] font-mono text-[11px] font-bold text-brand-700 transition-colors duration-300 group-hover:border-brand/30 group-hover:bg-brand/10">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <p className="flex-1 text-[14px] leading-[1.8] text-slate-600 sm:text-[15px]">
                                                {objective}
                                            </p>
                                            <Check aria-hidden="true" className="mt-1 hidden h-4 w-4 shrink-0 text-brand/70 sm:block" strokeWidth={1.8} />
                                        </li>
                                    ))}
                                </ol>
                                <div className="h-1 w-full bg-gradient-to-r from-brand via-brand/35 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}