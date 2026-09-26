import { ArrowUpRight } from 'lucide-react';
import type { Service } from '@/data/services';

export function ServiceCapabilities({
  service,
}: {
  service: Service;
}) {
  const capabilities = service.capabilities ?? [];

  if (!capabilities.length) return null;

  return (
    <section
      id="service-capabilities"
      aria-labelledby="service-capabilities-heading"
      className="relative bg-[#F8FAFC] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">

          {/* Left: Introduction */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">

              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-7 bg-brand"
                />

                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                  Our capabilities
                </p>
              </div>

              {/* Heading */}
            <h2
  id="service-capabilities-heading"
  className="
    mt-6 max-w-md
    font-display
    text-[clamp(2rem,3.5vw,3.5rem)]
    font-semibold
    leading-[1.15]
    tracking-[-0.045em]
    text-navy
  "
>
  Expertise that
  <br className="hidden sm:block" />
  {' '}
  <span className="text-slate-400">
    Brings Ideas to Life.
  </span>
</h2>

              {/* Description */}
              <p className="mt-6 max-w-md text-[15px] leading-[1.85] text-slate-600">
                Explore the core capabilities behind our{' '}
                {service.title.toLowerCase()} services,
                tailored to your project's requirements
                and long-term goals.
              </p>

              {/* Count */}
              <p className="mt-9 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
                {String(capabilities.length).padStart(2, '0')}
                {' '}core capabilities
              </p>

            </div>
          </div>

          {/* Right: Capabilities */}
          <div className="lg:col-span-7">

            <ul className="border-t border-slate-200">
              {capabilities.map((capability, index) => (
            <li
  key={`${service.slug}-capability-${index}`}
  className="
    group flex items-center
    gap-5
    border-b border-slate-200
    py-6
    transition-colors duration-200
    sm:gap-8 sm:py-8
  "
>

                  {/* Number */}
                  <span
                    aria-hidden="true"
                    className="
                      mt-1 shrink-0
                      font-mono text-[11px]
                      text-slate-400
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Capability */}
                  <h3
                    className="
                      min-w-0 flex-1
                      font-display
                      text-[17px]
                      font-medium
                      leading-[1.45]
                      tracking-[-0.025em]
                      text-navy
                      sm:text-[21px]
                    "
                  >
                    {capability}
                  </h3>

                  {/* Decorative Arrow */}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="
                      mt-1 h-4 w-4 shrink-0
                      text-slate-300
                      transition-[color,transform]
                      duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-brand-700
                      motion-reduce:transition-none
                    "
                    strokeWidth={1.5}
                  />

                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}