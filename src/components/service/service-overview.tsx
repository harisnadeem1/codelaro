import type { Service } from '@/data/services';

export function ServiceOverview({
    service,
}: {
    service: Service;
}) {
    return (
        <section
            id="service-content"
            aria-labelledby="service-overview-heading"
            className="relative isolate scroll-mt-20 overflow-hidden bg-white"
        >
            {/* Background Decoration */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute
                    inset-y-0 right-0 w-1/2
                    bg-[radial-gradient(ellipse_at_100%_20%,rgba(24,188,183,0.045),transparent_65%)]
                "
            />

            <div
                className="
                    relative mx-auto w-full max-w-7xl
                    px-5 py-20
                    sm:px-8 sm:py-24
                    lg:px-10 lg:py-32
                "
            >
                {/* Section Header */}
                <div className="mb-12 flex items-center gap-4 lg:mb-16">
                    <span className="font-mono text-[11px] font-semibold tracking-[0.15em] text-brand-700">
                        01
                    </span>

                    <span className="h-px w-8 bg-brand" />

                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Service Overview
                    </span>
                </div>

                {/* Main Content */}
                <div
                    className="
                        grid grid-cols-1 gap-12
                        lg:grid-cols-12 lg:gap-16
                        xl:gap-24
                    "
                >
                    {/* Left Column */}
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-32">

                            <h2
                                id="service-overview-heading"
                                className="
                                    max-w-xl font-display
                                    text-[clamp(2.2rem,3.5vw,3.6rem)]
                                    font-semibold
                                    leading-[1.12]
                                    tracking-[-0.045em]
                                    text-navy
                                "
                            >
                                A closer look at{' '}
                                <span className="text-brand">
                                    {service.title}
                                </span>
                                <span className="text-navy">.</span>
                            </h2>

                            {/* Decorative Accent */}
                            <div className="mt-8 flex items-center gap-2">
                                <span className="h-1 w-10 rounded-full bg-brand" />
                                <span className="h-1 w-2 rounded-full bg-brand/30" />
                                <span className="h-1 w-2 rounded-full bg-brand/15" />
                            </div>

                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="min-w-0 lg:col-span-7">

                        <div className="border-t border-slate-200">

                            {service.overview.map((paragraph, index) => (
                                <div
                                    key={index}
                                    className="
                                        group relative grid
                                        grid-cols-[28px_minmax(0,1fr)]
                                        gap-4 border-b border-slate-200
                                        py-7
                                        sm:grid-cols-[36px_minmax(0,1fr)]
                                        sm:gap-5 sm:py-8
                                    "
                                >
                                    {/* Paragraph Number */}
                                    <span
                                        aria-hidden="true"
                                        className="
                                            pt-1 font-mono
                                            text-[11px] font-medium
                                            tracking-wider text-slate-400
                                            transition-colors duration-300
                                            group-hover:text-brand-700
                                        "
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    {/* Paragraph */}
                                    <p
                                        className={
                                            index === 0
                                                ? `
                                                    max-w-2xl
                                                    text-[19px]
                                                    font-medium
                                                    leading-[1.75]
                                                    tracking-[-0.015em]
                                                    text-navy
                                                    sm:text-[21px]
                                                `
                                                : `
                                                    max-w-2xl
                                                    text-[16px]
                                                    leading-[1.9]
                                                    text-slate-600
                                                    sm:text-[18px]
                                                `
                                        }
                                    >
                                        {paragraph}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}