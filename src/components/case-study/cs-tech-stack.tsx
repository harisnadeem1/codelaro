import { ArrowUpRight, Layers3, Cpu } from 'lucide-react';
import type { WorkProject } from '@/data/work';

export function CaseStudyTechStack({ project }: { project: WorkProject }) {
    const totalTechnologies = new Set(
        project.technologyStack.flatMap((group) => group.items)
    ).size;

    return (
        <section
            id="project-tech-stack"
            aria-labelledby="tech-stack-heading"
            className="relative isolate bg-navy-900 py-20"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-40"
            />
            <div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8">
                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3">
                            <span className="h-px w-8 bg-brand" />
                            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                                Technology Stack
                            </span>
                        </div>
                        <h2
                            id="tech-stack-heading"
                            className="mt-6 font-display text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-white"
                        >
                            The technology behind
                            <br className="hidden sm:block" />
                            <span className="text-slate-400"> The Solution</span>
                        </h2>
                        <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-slate-300 sm:text-[16px]">
                            Explore the technologies and development tools used to
                            engineer {project.title}, selected according to the
                            project's technical requirements.
                        </p>
                    </div>
                    <div className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                            <Cpu className="h-5 w-5" strokeWidth={1.6} />
                        </span>
                        <div>
                            <p className="font-display text-2xl font-semibold tracking-tight text-white">
                                {String(totalTechnologies).padStart(2, '0')}
                            </p>
                            <p className="mt-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400">
                                Technologies Used
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {project.technologyStack.map((group, index) => (
                        <article
                            key={group.category}
                            className="group relative flex min-w-0 flex-col overflow-hidden rounded-[22px] border border-white/[0.09] bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/35 hover:bg-white/[0.06] sm:p-7"
                        >
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100"
                            />
                            <div className="flex items-start justify-between gap-4">
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                                    <Layers3 className="h-5 w-5" strokeWidth={1.6} />
                                </span>
                                <span className="font-mono text-[11px] font-semibold tracking-[0.12em] text-slate-500">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                            <div className="mt-9">
                                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                                    Technology Category
                                </p>
                                <h3 className="mt-2 min-h-[48px] font-display text-[19px] font-semibold leading-snug tracking-tight text-white">
                                    {group.category}
                                </h3>
                            </div>
                            <div className="mt-6 h-px w-full bg-white/10" />
                            <ul
                                aria-label={`${group.category} technologies`}
                                className="mt-6 flex flex-wrap content-start gap-2"
                            >
                                {group.items.map((item) => (
                                    <li key={item}>
                                        <span className="inline-flex min-h-9 items-center rounded-lg border border-white/10 bg-white/[0.045] px-3 py-2 font-mono text-[11px] font-medium text-slate-300 transition-colors duration-300 group-hover:border-brand/15">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto flex items-center justify-between gap-3 pt-9">
                                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500">
                                    {String(group.items.length).padStart(2, '0')}{' '}
                                    {group.items.length === 1 ? 'Technology' : 'Technologies'}
                                </span>
                                <ArrowUpRight
                                    aria-hidden="true"
                                    className="h-4 w-4 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                                />
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-2.5">
                        <span className="h-2 w-2 rounded-full bg-brand" />
                        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
                            Engineering Stack
                        </span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-500">
                        {project.title}
                    </span>
                </div>
            </div>
        </section>
    );
}