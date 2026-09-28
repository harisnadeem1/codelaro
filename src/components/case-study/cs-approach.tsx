import { ArrowUpRight, Check } from 'lucide-react';
import type { WorkProject } from '@/data/work';

export function CaseStudyApproach({ project }: { project: WorkProject }) {
    return (
        <section
            id="project-approach"
            aria-labelledby="approach-heading"
            className="relative isolate bg-white py-20"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-30"
            />
            <div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center justify-center gap-3">
                        <span className="h-px w-8 bg-brand" />
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
                            Our Approach
                        </span>
                        <span className="h-px w-8 bg-brand" />
                    </div>
                    <h2
                        id="approach-heading"
                        className="mt-6 font-display text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.045em] text-navy"
                    >
                        From Strategy to
                        <br />
                        <span className="text-brand">Execution</span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.85] text-slate-500 sm:text-[16px]">
                        Explore the development process behind {project.title},
                        from understanding the requirements to engineering and
                        preparing the final solution.
                    </p>
                </div>
                <div className="relative mt-16">
                    <div
                        aria-hidden="true"
                        className="absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-transparent via-brand/35 to-transparent lg:block"
                    />
                    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-5">
                        {project.approach.map((step, index) => {
                            const featured = index % 4 === 1;
                            return (
                                <li
                                    key={step.phase}
                                    className="group relative flex min-w-0 flex-col"
                                >
                                    <div className="relative z-10 mb-7 hidden items-center justify-center lg:flex">
                                        <span
                                            className={`flex h-[52px] w-[52px] items-center justify-center rounded-2xl border font-mono text-[13px] font-semibold shadow-[0_8px_25px_-12px_rgba(15,23,42,0.2)] transition-all duration-300 group-hover:-translate-y-1 ${
                                                featured
                                                    ? 'border-navy bg-navy text-white'
                                                    : 'border-brand/25 bg-white text-brand-700'
                                            }`}
                                        >
                                            {step.phase}
                                        </span>
                                    </div>
                                    <div
                                        className={`relative flex h-full flex-col overflow-hidden rounded-[22px] border p-6 transition-all duration-300 group-hover:-translate-y-1 sm:p-7 ${
                                            featured
                                                ? 'border-navy bg-navy text-white shadow-[0_20px_45px_-25px_rgba(15,23,42,0.45)]'
                                                : 'border-navy/[0.08] bg-[#F8FAFC] text-navy hover:border-brand/30 hover:shadow-[0_18px_45px_-25px_rgba(15,23,42,0.18)]'
                                        }`}
                                    >
                                        <div
                                            aria-hidden="true"
                                            className={`absolute inset-x-0 top-0 h-[3px] ${
                                                featured
                                                    ? 'bg-brand'
                                                    : 'bg-brand/20 transition-colors duration-300 group-hover:bg-brand'
                                            }`}
                                        />
                                        <div className="mb-8 flex items-center justify-between gap-3">
                                            <span
                                                className={`font-mono text-[11px] font-semibold uppercase tracking-[0.18em] ${
                                                    featured
                                                        ? 'text-brand'
                                                        : 'text-brand-700'
                                                }`}
                                            >
                                                Stage {step.phase}
                                            </span>
                                            <ArrowUpRight
                                                aria-hidden="true"
                                                className={`h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                                                    featured
                                                        ? 'text-brand'
                                                        : 'text-slate-400 group-hover:text-brand'
                                                }`}
                                            />
                                        </div>
                                        <span
                                            aria-hidden="true"
                                            className={`pointer-events-none mb-6 font-display text-[4rem] font-semibold leading-none tracking-[-0.08em] ${
                                                featured
                                                    ? 'text-white/[0.12]'
                                                    : 'text-navy/[0.07]'
                                            }`}
                                        >
                                            {step.phase}
                                        </span>
                                        <h3
                                            className={`font-display text-[19px] font-semibold leading-snug tracking-tight ${
                                                featured
                                                    ? 'text-white'
                                                    : 'text-navy'
                                            }`}
                                        >
                                            {step.title}
                                        </h3>
                                        <p
                                            className={`mt-4 flex-1 text-[14px] leading-[1.85] ${
                                                featured
                                                    ? 'text-slate-300'
                                                    : 'text-slate-500'
                                            }`}
                                        >
                                            {step.description}
                                        </p>
                                        <div
                                            className={`mt-8 flex items-center gap-2 border-t pt-5 ${
                                                featured
                                                    ? 'border-white/10'
                                                    : 'border-navy/[0.07]'
                                            }`}
                                        >
                                            <Check
                                                aria-hidden="true"
                                                className={`h-3.5 w-3.5 ${
                                                    featured
                                                        ? 'text-brand'
                                                        : 'text-brand-700'
                                                }`}
                                            />
                                            <span
                                                className={`font-mono text-[10px] font-medium uppercase tracking-[0.13em] ${
                                                    featured
                                                        ? 'text-slate-400'
                                                        : 'text-slate-400'
                                                }`}
                                            >
                                                Development Phase
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
                <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                    <span className="h-px w-8 bg-brand/50" />
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
                        A structured approach to software development
                    </p>
                    <span className="h-px w-8 bg-brand/50" />
                </div>
            </div>
        </section>
    );
}