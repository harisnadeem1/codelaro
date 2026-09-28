import { Link } from 'react-router';
import { ArrowLeft, ArrowRight, ArrowUpRight, Layers3 } from 'lucide-react';
import type { WorkProject } from '@/data/work';

function HeroMockup({ project }: { project: WorkProject }) {
    return (
        <div className="relative w-full">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_-25px_rgba(15,23,42,0.22)] ring-1 ring-navy/5">
                <div className="flex h-11 items-center gap-2 border-b border-slate-200 bg-slate-50/80 px-4 sm:h-12">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="ml-3 flex h-7 min-w-0 flex-1 items-center justify-center rounded-md border border-slate-200 bg-white px-3">
                        <span className="truncate font-mono text-[10px] font-medium text-slate-500 sm:text-[11px]">
                            {project.title}
                        </span>
                    </div>
                    <span className="w-9" aria-hidden="true" />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F8FAFC]">
                    {project.screenshotSrc ? (
                        <img
                            src={project.screenshotSrc}
                            alt={project.screenshotAlt}
                            width={1600}
                            height={1000}
                            fetchPriority="high"
                            decoding="async"
                            className="h-full w-full object-contain"
                        />
                    ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-blueprint-grid p-6 text-center">
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-white text-brand">
                                <Layers3 className="h-5 w-5" strokeWidth={1.6} />
                            </span>
                            <p className="font-display text-sm font-semibold text-navy">
                                {project.title}
                            </p>
                            <p className="text-xs text-slate-500">
                                Project preview coming soon
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 px-1">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Project Preview
                </span>
                <span className="font-mono text-[10px] font-medium text-slate-400">
                    {project.category}
                </span>
            </div>
        </div>
    );
}

export function CaseStudyHero({ project }: { project: WorkProject }) {
    return (
        <section
            aria-labelledby="case-study-heading"
            className="relative isolate overflow-hidden border-b border-slate-200/80 bg-white"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-50"
            />
            <div className="relative mx-auto w-full max-w-8xl px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-28 lg:pb-20 lg:pt-20">
                
                <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-20">
                    <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700">
                                Case Study
                            </span>
                            <span className="h-px w-7 bg-brand/40" aria-hidden="true" />
                            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                                {project.category}
                            </span>
                        </div>
                        <h1
                            id="case-study-heading"
                            className="mt-5 font-display text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold leading-[1.07] tracking-[-0.045em] text-navy"
                        >
                            {project.title}
                        </h1>
                        <p className="mt-6 max-w-xl text-[15px] leading-[1.85] text-slate-600 sm:text-[16px]">
                            {project.overviewDescription || project.description}
                        </p>
                        <div className="mt-7 flex flex-wrap gap-2">
                            {project.services.slice(0, 4).map((service) => (
                                <span
                                    key={service}
                                    className="rounded-lg border border-navy/[0.08] bg-white/90 px-3 py-1.5 text-[12px] font-medium text-navy shadow-sm"
                                >
                                    {service}
                                </span>
                            ))}
                        </div>
                        <div className="mt-9 flex flex-wrap items-center gap-3">
                            <Link
                                to="/contact"
                                className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-brand px-6 font-display text-[16px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 active:translate-y-0"
                            >
                                Start a Similar Project
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </Link>
                            <Link
                                to="/work"
                                className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-6 font-display text-[16px] font-semibold text-navy transition-all duration-300 hover:border-brand/40 hover:text-brand"
                            >
                                More Case Studies
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                    <div className="min-w-0">
                        <HeroMockup project={project} />
                    </div>
                </div>
                <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-slate-200/80 pt-8 sm:grid-cols-4 lg:mt-16">
                    {[
                        {
                            label: 'Services',
                            value: `${project.services.length} disciplines`,
                        },
                        {
                            label: 'Technologies',
                            value: `${project.technologies.length} tools`,
                        },
                        {
                            label: 'Approach',
                            value: `${project.approach.length} stages`,
                        },
                        {
                            label: 'Features',
                            value: `${project.keyFeatures.length} features`,
                        },
                    ].map((item) => (
                        <div key={item.label}>
                            <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                                {item.label}
                            </dt>
                            <dd className="mt-2 font-display text-sm font-semibold text-navy sm:text-[15px]">
                                {item.value}
                            </dd>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}