import { ArrowUpRight, AlertCircle } from 'lucide-react';
import type { WorkProject } from '@/data/work';

export function CaseStudyChallenge({ project }: { project: WorkProject }) {
    return (
        <section
            id="project-challenge"
            aria-labelledby="challenge-heading"
            className="relative bg-navy-900 py-20"
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
                                The Challenge
                            </span>
                        </div>
                        <h2
                            id="challenge-heading"
                            className="mt-6 max-w-lg font-display text-[3.5rem] font-semibold leading-[1.08] tracking-[-0.045em] text-white"
                        >
                            Understanding the{' '}
                            <span className="text-slate-400">Real Challenge</span>
                        </h2>
                        <p className="mt-6 max-w-md text-[15px] leading-[1.85] text-slate-400">
                            Before building the solution, we identified the technical
                            limitations and operational challenges that needed to be
                            addressed.
                        </p>
                        <div className="mt-10 hidden items-center gap-3 border-t border-white/10 pt-6 lg:flex">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                                <AlertCircle className="h-5 w-5" strokeWidth={1.7} />
                            </span>
                            <div>
                                <p className="font-display text-[13px] font-semibold text-white">
                                    {project.title}
                                </p>
                                <p className="mt-0.5 text-[11px] text-slate-400">
                                    Key development challenges
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="min-w-0">
                        <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Challenges Identified
                            </span>
                            <span className="font-mono text-[11px] font-medium text-brand">
                                {String(project.challenge.length).padStart(2, '0')} Total
                            </span>
                        </div>
                        <ol className="space-y-4">
                            {project.challenge.map((point, index) => (
                                <li
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.035] p-6 transition-all duration-300 hover:border-brand/30 hover:bg-white/[0.055] sm:p-8"
                                >
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-y-0 left-0 w-[3px] origin-bottom scale-y-0 bg-brand transition-transform duration-500 group-hover:scale-y-100"
                                    />
                                    <div className="flex items-start gap-5">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 font-mono text-[13px] font-semibold text-brand transition-colors duration-300 group-hover:border-brand/40 group-hover:bg-brand/15">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <div className="mb-4 flex items-center justify-between gap-4">
                                                <h3 className="font-display text-[16px] font-semibold text-white sm:text-[17px]">
                                                    Challenge {String(index + 1).padStart(2, '0')}
                                                </h3>
                                                <ArrowUpRight
                                                    aria-hidden="true"
                                                    className="h-4 w-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                                                />
                                            </div>
                                            <p className="text-[14px] leading-[1.9] text-slate-300 sm:text-[15px]">
                                                {point}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <div className="mt-7 flex items-center gap-3">
                            <span className="h-px w-8 bg-brand/60" />
                            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate-500">
                                Defining the problem before engineering the solution
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}