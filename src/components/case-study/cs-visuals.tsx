import { useEffect, useState } from 'react';
import { Maximize2, X, ArrowLeft, ArrowRight, Images } from 'lucide-react';
import type { WorkProject } from '@/data/work';

export function CaseStudyVisuals({ project }: { project: WorkProject }) {
    const [activeImage, setActiveImage] = useState<number | null>(null);
    const visuals = project.productVisuals;
    const activeVisual = activeImage !== null ? visuals[activeImage] : null;

    useEffect(() => {
        if (activeImage === null) return;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setActiveImage(null);
            if (event.key === 'ArrowRight') {
                setActiveImage((current) =>
                    current === null ? null : (current + 1) % visuals.length
                );
            }
            if (event.key === 'ArrowLeft') {
                setActiveImage((current) =>
                    current === null ? null : (current - 1 + visuals.length) % visuals.length
                );
            }
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeImage, visuals.length]);

    return (
        <section
            id="project-visuals"
            aria-labelledby="visuals-heading"
            className="relative isolate bg-white py-20"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-30"
            />
            <div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3">
                            <span className="h-px w-8 bg-brand" />
                            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
                                Product Showcase
                            </span>
                        </div>
                        <h2
                            id="visuals-heading"
                            className="mt-6 font-display text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.045em] text-navy"
                        >
                            A closer look at
                            <br />
                            <span className="text-brand">The Product</span>
                        </h2>
                        <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-slate-500 sm:text-[16px]">
                            Explore selected screens from {project.title}, highlighting
                            the interface and functionality developed for the platform.
                        </p>
                    </div>
                    <div className="inline-flex items-center gap-3 rounded-xl border border-navy/[0.08] bg-white px-4 py-3 shadow-sm">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/[0.08] text-brand">
                            <Images className="h-4 w-4" strokeWidth={1.7} />
                        </span>
                        <div>
                            <p className="font-display text-[13px] font-semibold text-navy">
                                Product Gallery
                            </p>
                            <p className="mt-0.5 font-mono text-[10px] text-slate-400">
                                {String(visuals.length).padStart(2, '0')} Screens
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
                    {visuals.map((visual, index) => (
                        <figure
                            key={`${visual.src || visual.alt}-${index}`}
                            className="group flex min-w-0 flex-col overflow-hidden rounded-[22px] border border-navy/[0.09] bg-white shadow-[0_15px_45px_-30px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_25px_55px_-30px_rgba(15,23,42,0.25)]"
                        >
                            <div className="flex h-11 items-center justify-between gap-3 border-b border-navy/[0.07] bg-white px-4">
                                <div className="flex items-center gap-1.5" aria-hidden="true">
                                    <span className="h-2 w-2 rounded-full bg-[#FF605C]" />
                                    <span className="h-2 w-2 rounded-full bg-[#FFBD44]" />
                                    <span className="h-2 w-2 rounded-full bg-[#00CA4E]" />
                                </div>
                                <span className="max-w-[65%] truncate font-mono text-[10px] font-medium text-slate-400">
                                    {project.title}
                                </span>
                                <span className="font-mono text-[10px] text-slate-400">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
                                {visual.src ? (
                                    <>
                                        <img
                                            src={visual.src}
                                            alt={visual.alt}
                                            width={1600}
                                            height={1000}
                                            loading="lazy"
                                            decoding="async"
                                            className="h-full w-full object-contain"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setActiveImage(index)}
                                            aria-label={`View ${visual.alt} in fullscreen`}
                                            className="absolute inset-0 flex cursor-zoom-in items-center justify-center bg-navy/0 transition-colors duration-300 hover:bg-navy/15 focus-visible:bg-navy/15 focus-visible:outline-none"
                                        >
                                            <span className="flex h-11 w-11 translate-y-2 items-center justify-center rounded-xl border border-white/70 bg-white/95 text-navy opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                                <Maximize2 className="h-4 w-4" />
                                            </span>
                                        </button>
                                    </>
                                ) : (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-blueprint-grid p-6 text-center">
                                        <Images className="h-7 w-7 text-brand/60" strokeWidth={1.5} />
                                        <p className="font-mono text-[11px] text-slate-400">
                                            Screenshot coming soon
                                        </p>
                                    </div>
                                )}
                            </div>

                            <figcaption className="flex flex-1 items-start gap-4 border-t border-navy/[0.07] px-5 py-5 sm:px-6">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/[0.08] font-mono text-[11px] font-semibold text-brand-700">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <p className="pt-1 text-[13px] leading-[1.7] text-slate-600 sm:text-[14px]">
                                    {visual.caption}
                                </p>
                            </figcaption>
                        </figure>
                    ))}
                </div>

                <div className="mt-10 flex items-center justify-between gap-4 border-t border-navy/[0.08] pt-6">
                    <div className="flex items-center gap-2.5">
                        <span className="h-2 w-2 rounded-full bg-brand" />
                        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                            Product Interface
                        </span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-400">
                        {project.title}
                    </span>
                </div>
            </div>

            {activeVisual?.src && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${project.title} screenshot viewer`}
                    className="fixed inset-0 z-[9999] flex flex-col bg-navy-900/95 p-4 backdrop-blur-xl sm:p-6"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) setActiveImage(null);
                    }}
                >
                    <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 py-2">
                        <div className="min-w-0">
                            <p className="truncate font-display text-[14px] font-semibold text-white">
                                {project.title}
                            </p>
                            <p className="mt-1 font-mono text-[11px] text-slate-400">
                                {String(activeImage! + 1).padStart(2, '0')} / {String(visuals.length).padStart(2, '0')}
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setActiveImage(null)}
                            aria-label="Close image viewer"
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="relative mx-auto flex min-h-0 w-full max-w-7xl flex-1 items-center justify-center gap-3 py-5">
                        {visuals.length > 1 && (
                            <button
                                type="button"
                                onClick={() =>
                                    setActiveImage((current) =>
                                        current === null ? null : (current - 1 + visuals.length) % visuals.length
                                    )
                                }
                                aria-label="Previous screenshot"
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 sm:h-12 sm:w-12"
                            >
                                <ArrowLeft className="h-5 w-5" />
                            </button>
                        )}
                        <img
                            src={activeVisual.src}
                            alt={activeVisual.alt}
                            width={1600}
                            height={1000}
                            className="min-h-0 min-w-0 max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                        />
                        {visuals.length > 1 && (
                            <button
                                type="button"
                                onClick={() =>
                                    setActiveImage((current) =>
                                        current === null ? null : (current + 1) % visuals.length
                                    )
                                }
                                aria-label="Next screenshot"
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 sm:h-12 sm:w-12"
                            >
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        )}
                    </div>

                    <p className="mx-auto w-full max-w-3xl pb-3 text-center text-[13px] leading-relaxed text-slate-300">
                        {activeVisual.caption}
                    </p>
                </div>
            )}
        </section>
    );
}