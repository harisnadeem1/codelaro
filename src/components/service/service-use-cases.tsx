import type { Service } from '@/data/services';

export function ServiceUseCases({
  service,
}: {
  service: Service;
}) {
  const useCases = service.useCases ?? [];

  if (!useCases.length) return null;

  return (
    <section
      id="service-use-cases"
      aria-labelledby="service-use-cases-heading"
      className="
        relative isolate overflow-hidden
        bg-navy
        py-20
        sm:py-20
        lg:py-20
      "
    >
      {/* Subtle Background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_at_50%_100%,rgba(24,188,183,0.07),transparent_55%)]
        "
      />

      <div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADER */}
        <header className="mx-auto max-w-4xl text-center">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">

            <span
              aria-hidden="true"
              className="h-px w-7 bg-brand"
            />

            <p
              className="
                font-mono
                text-[11px] font-semibold
                uppercase tracking-[0.2em]
                text-brand
              "
            >
              Real-world applications
            </p>

            <span
              aria-hidden="true"
              className="h-px w-7 bg-brand"
            />

          </div>

          {/* Heading */}
          <h2
            id="service-use-cases-heading"
            className="
              mx-auto mt-6 max-w-3xl
              font-display
              text-[clamp(2.2rem,4.2vw,4.4rem)]
              font-semibold
              leading-[1.1]
              tracking-[-0.05em]
              text-white
            "
          >
            Built for Real
            <span className="block text-brand">
              Business Needs.
            </span>
          </h2>

        

        </header>

        {/* APPLICATION RUNWAY */}
        <div className="relative mt-14 lg:mt-14">

          {/* Runway Header */}
          <div
            className="
              mb-5
              flex items-center
              justify-between
              gap-4
              text-slate-400
            "
          >
            <span
              className="
                font-mono
                text-[10px]
                font-medium uppercase
                tracking-[0.18em]
              "
            >
              Application overview
            </span>

            <span
              className="
                font-mono
                text-[10px]
                uppercase tracking-[0.18em]
              "
            >
              {String(useCases.length).padStart(2, '0')}
              {' '}use cases
            </span>
          </div>

          {/* Single Continuous Panel */}
          <ol
            className="
              grid overflow-hidden
              rounded-[24px]
              border border-white/10
              bg-[#F8FAFC]
              shadow-[0_25px_80px_-40px_rgba(0,0,0,0.3)]
              lg:grid-cols-4
              lg:rounded-[30px]
            "
          >
            {useCases.map((useCase, index) => (
              <li
                key={`${service.slug}-${useCase.title}`}
                className="
                  group relative
                  flex min-w-0 flex-col
                  border-b border-slate-200
                  px-7 py-9
                  transition-colors
                  duration-300
                  last:border-b-0
                  hover:bg-white
                  sm:px-9 sm:py-11
                  lg:border-b-0
                  lg:border-r
                  lg:px-8 lg:py-12
                  lg:last:border-r-0
                  motion-reduce:transition-none
                "
              >
                {/* Top Indicator */}
                <div className="flex items-center gap-3">

                  {/* Number */}
                  <span
                    aria-hidden="true"
                    className="
                      font-mono
                      text-[12px]
                      font-semibold
                      tracking-[0.1em]
                      text-brand-700
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Connecting Line */}
                  <span
                    aria-hidden="true"
                    className="
                      h-px flex-1
                      bg-slate-200
                      transition-colors
                      duration-300
                      group-hover:bg-brand/40
                      motion-reduce:transition-none
                    "
                  />

                  {/* Endpoint */}
                  <span
                    aria-hidden="true"
                    className="
                      h-2 w-2 shrink-0
                      rounded-full
                      border border-brand
                      bg-[#F8FAFC]
                      transition-colors
                      duration-300
                      group-hover:bg-brand
                      motion-reduce:transition-none
                    "
                  />

                </div>

                {/* Main Content */}
                <article className="flex flex-1 flex-col">

                  {/* Application Title */}
                  <h3
                    className="
                      mt-8
                      font-display
                      text-[clamp(1.4rem,1.7vw,1.85rem)]
                      font-semibold
                      leading-[1.3]
                      tracking-[-0.035em]
                      text-navy
                      lg:mt-8
                    "
                  >
                    {useCase.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-4
                      text-[14px]
                      leading-[1.85]
                      text-slate-600
                    "
                  >
                    {useCase.description}
                  </p>

                  {/* Bottom Accent */}
                  <div
                    aria-hidden="true"
                    className="
                      mt-5
                      h-[2px] w-9
                      bg-slate-200
                      transition-[width,background-color]
                      duration-300
                      group-hover:w-16
                      group-hover:bg-brand
                      motion-reduce:transition-none
                    "
                  />

                </article>

              </li>
            ))}
          </ol>

        </div>

        {/* CLOSING STATEMENT */}
        <div
          className="
            mt-10
            flex flex-col
            gap-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              max-w-2xl
              text-[13px]
              leading-[1.85]
              text-slate-400
              sm:text-[14px]
            "
          >
            Every project has different requirements.
            These examples illustrate how our expertise
            can be applied to your business.
          </p>

          <span
            className="
              shrink-0
              font-mono
              text-[10px]
              uppercase
              tracking-[0.16em]
              text-brand
            "
          >
            Code. Launch. Grow.
          </span>

        </div>

      </div>
    </section>
  );
}