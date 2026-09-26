import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, Minus, Plus } from 'lucide-react';

import type { Service } from '@/data/services';
import { cn } from '@/lib/utils';

export function ServiceFaq({
  service,
}: {
  service: Service;
}) {
  const [open, setOpen] = useState<number | null>(0);

  const questions = service.faq ?? [];

  if (questions.length === 0) return null;

  return (
   <section
  id="service-faq"
  aria-labelledby="service-faq-heading"
  className="
    relative
    scroll-mt-24
    bg-[#F8FAFC]
  "
>
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Blueprint Texture */}
        <div
          className="
            absolute inset-0
            bg-blueprint-grid
            opacity-[0.3]
            [mask-image:linear-gradient(to_bottom,black,transparent_90%)]
          "
        />

        {/* Subtle Teal Glow */}
        <div
          className="
            absolute -left-48 top-1/3
            h-[30rem] w-[30rem]
            rounded-full
            bg-brand/[0.045]
            blur-[110px]
          "
        />

        {/* Decorative Background Text */}
        <p
          className="
            absolute -right-5 top-10
            select-none
            font-display
            text-[8rem]
            font-bold
            leading-none
            tracking-[-0.08em]
            text-navy/[0.025]
            lg:text-[13rem]
          "
        >
          FAQ
        </p>
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative mx-auto
          w-full max-w-8xl
          px-5 py-20
          sm:px-8
          md:py-20
          lg:px-10 lg:py-20
        "
      >
       <div
  className="
    grid
    gap-14
    lg:grid-cols-12
    lg:items-stretch
    lg:gap-16
    xl:gap-20
  "
>
          {/* =================================================
              LEFT: INTRODUCTION
          ================================================= */}

         <div className="relative lg:col-span-5 lg:self-stretch">
  <div
    className="
      lg:sticky
      lg:top-32
    "
  >

              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-brand"
                />

                <p
                  className="
                    text-[11px]
                    font-bold uppercase
                    tracking-[0.22em]
                    text-brand-700
                  "
                >
                  Frequently asked
                </p>
              </div>

              {/* Heading */}
              <h2
                id="service-faq-heading"
                className="
                  mt-5 max-w-lg
                  font-display
                  text-[clamp(2.3rem,3.5vw,3.5rem)]
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.045em]
                  text-navy
                "
              >
                Questions about

                <span className="block text-slate-400">
                  {service.title}?
                </span>
              </h2>

              {/* Description */}
              <p
                className="
                  mt-6 max-w-md
                  text-[15px]
                  leading-[1.8]
                  text-slate-600
                  sm:text-base
                "
              >
                Everything you need to know about our{' '}
                {service.title.toLowerCase()} services,
                from planning and development to delivery
                and ongoing considerations.
              </p>

              {/* Separator */}
              <div className="mt-8 h-px w-full max-w-sm bg-slate-200" />

              {/* Contact Prompt */}
              <div className="mt-7">
                <p
                  className="
                    text-[13px]
                    font-medium
                    text-slate-500
                  "
                >
                  Can't find what you're looking for?
                </p>

                <Link
                  to="/contact"
                  aria-label={`Ask Codelaro about ${service.title}`}
                  className="
                    group mt-3
                    inline-flex items-center gap-3
                    font-display
                    text-[16px]
                    font-semibold
                    text-navy
                    transition-colors duration-300
                    hover:text-brand-700
                    focus-visible:rounded-sm
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-brand
                  "
                >
                  Ask us directly

                  <span
                    className="
                      grid h-8 w-8
                      place-items-center
                      rounded-full
                      border border-slate-200
                      bg-white
                      transition-all duration-300
                      group-hover:border-brand/30
                    "
                  >
                    <ArrowUpRight
                      aria-hidden="true"
                      className="
                        h-3.5 w-3.5
                        transition-transform duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        motion-reduce:transition-none
                      "
                    />
                  </span>
                </Link>
              </div>

            </div>
          </div>

          {/* =================================================
              RIGHT: FAQ QUESTIONS
          ================================================= */}

          <div className="min-w-0 lg:col-span-7">

            {/* Questions */}
            <div className="border-t border-slate-200">

              {questions.map((item, index) => {
                const isOpen = open === index;

                const buttonId =
                  `${service.slug}-faq-button-${index}`;

                const panelId =
                  `${service.slug}-faq-panel-${index}`;

                return (
                  <article
                    key={`${service.slug}-${item.question}`}
                    className="
                      group relative
                      border-b border-slate-200
                    "
                  >
                    {/* Question */}
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onMouseEnter={(event) => {
                          if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                            setOpen(index);
                          }
                        }}
                        onFocus={() => setOpen(index)}
                        onClick={() => setOpen(isOpen ? null : index)}
                        className="
                          flex w-full
                          items-center
                          justify-between
                          gap-6
                          py-7
                          pl-0 pr-1
                          text-left
                          transition-[padding] duration-300
                          hover:pl-0
                          focus-visible:rounded-sm
                          focus-visible:outline-2
                          focus-visible:outline-offset-4
                          focus-visible:outline-brand
                          sm:py-6
                          motion-reduce:transition-none
                        "
                      >
                        {/* Question Text */}
                        <span
                          className={cn(
                            `
                              max-w-xl
                              font-display
                              text-[1.05rem]
                              font-semibold
                              leading-snug
                              tracking-[-0.02em]
                              transition-colors duration-300
                              sm:text-[1.15rem]
                            `,
                            isOpen
                              ? 'text-navy'
                              : 'text-navy/85 hover:text-navy'
                          )}
                        >
                          {item.question}
                        </span>

                        {/* Plus / Minus Toggle */}
                        <span
                          aria-hidden="true"
                          className={cn(
                            `
                              grid h-9 w-9
                              shrink-0
                              place-items-center
                              rounded-full
                              border
                              transition-all duration-300
                              motion-reduce:transition-none
                            `,
                            isOpen
                              ? `
                                border-brand
                                text-brand-700
                              `
                              : `
                                border-slate-200
                                bg-white
                                text-slate-500
                                group-hover:border-brand/30
                                group-hover:text-brand-700
                              `
                          )}
                        >
                          {isOpen ? (
                            <Minus
                              className="h-4 w-4"
                              strokeWidth={1.8}
                            />
                          ) : (
                            <Plus
                              className="h-4 w-4"
                              strokeWidth={1.8}
                            />
                          )}
                        </span>
                      </button>
                    </h3>

                    {/* Answer */}
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      aria-hidden={!isOpen}
                      inert={!isOpen}
                      className={cn(
                        `
                          grid
                          transition-[grid-template-rows,opacity]
                          duration-500
                          ease-[cubic-bezier(0.22,1,0.36,1)]
                          motion-reduce:transition-none
                        `,
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      )}
                    >
                      <div className="min-h-0 overflow-hidden">

                        <div
                          className="
                            max-w-xl
                            pb-7
                            pr-12
                            sm:pr-16
                          "
                        >
                          <p
                            className="
                              text-[15px]
                              leading-[1.85]
                              text-slate-600
                              sm:text-[16px]
                            "
                          >
                            {item.answer}
                          </p>
                        </div>

                      </div>
                    </div>
                  </article>
                );
              })}

            </div>

            {/* Bottom Note */}
            <div
              className="
                mt-8
                flex flex-col gap-2
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <p className="text-[14px] leading-relaxed text-slate-500">
                Still have questions? We're happy to
                discuss your project.
              </p>

              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-slate-400
                "
              >
                {String(questions.length).padStart(2, '0')}
                {' '}questions
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}