import { Link } from 'react-router';

import {
  ArrowUpRight,
  HeartPulse,
  Landmark,
  ShoppingBag,
  type LucideIcon,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type Industry = {
  number: string;
  title: string;
  description: string;
  focus: string;
  icon: LucideIcon;
};

/* -------------------------------------------------------------------------- */
/* Featured Industries                                                        */
/* -------------------------------------------------------------------------- */

const INDUSTRIES: Industry[] = [
  {
    number: '01',
    title: 'Financial Services & Fintech',
    description:
      'Custom financial platforms, interactive dashboards, payment integrations and automated workflows built around your business needs.',
    focus: 'Financial platforms & automation',
    icon: Landmark,
  },
  {
    number: '02',
    title: 'E-commerce & Retail',
    description:
      'Online stores, custom commerce platforms and connected business systems that simplify operations and improve shopping experiences.',
    focus: 'Commerce & digital growth',
    icon: ShoppingBag,
  },
  {
    number: '03',
    title: 'Healthcare',
    description:
      'Patient-facing applications, appointment booking systems and custom digital tools designed to simplify healthcare operations.',
    focus: 'Digital healthcare experiences',
    icon: HeartPulse,
  },
];

/* -------------------------------------------------------------------------- */
/* Industries Section                                                         */
/* -------------------------------------------------------------------------- */

/**
 * Featured industries section for the Codelaro homepage.
 *
 * The Credibility component name is preserved for compatibility.
 *
 * SEO:
 * - Descriptive, industry-specific headings.
 * - Relevant content without duplicating Services or Solutions.
 * - Semantic section and article elements.
 * - Internal navigation to the complete Industries page.
 */

export function Credibility() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="relative overflow-hidden bg-[#F8FAFC]"
    >
      {/* Background */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-blueprint-grid opacity-[0.13]
        "
      />

      <div
        className="
          relative mx-auto w-full max-w-8xl
          px-5 py-16
          sm:px-8
          md:py-20
          lg:py-[5.5rem]
        "
      >
        {/* -------------------------------------------------------------- */}
        {/* Section Introduction                                            */}
        {/* -------------------------------------------------------------- */}

        <div
          className="
            grid gap-6
            lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]
            lg:items-end
            lg:gap-16
          "
        >
          {/* Left */}

          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-brand"
              />

              <p
                className="
                  text-[11px] font-bold uppercase
                  tracking-[0.2em] text-brand-700
                "
              >
                Industries We Serve
              </p>
            </div>

            <h2
              id="industries-heading"
              className="
                mt-5 max-w-[750px]
                font-display
                text-[2.25rem] font-semibold
                leading-[1.08]
                tracking-[-0.04em]
                text-navy
                sm:text-[2.85rem]
                lg:text-[3.15rem]
              "
            >
              Different industries.{' '}
              <span className="text-brand">
                Purpose-built technology.
              </span>
            </h2>
          </div>

          {/* Right */}

          <div className="lg:pb-1">
            <p
              className="
                max-w-lg
                text-[15px] leading-7
                text-slate-600
              "
            >
              From financial platforms to online commerce and
              healthcare applications, we develop digital products
              around the needs of each industry.
            </p>

            <Link
              to="/industries"
              aria-label="Explore all industries served by Codelaro"
              className="
                group mt-4
                inline-flex items-center gap-2
                text-[16px] font-semibold
                text-navy
                transition-colors duration-300
                hover:text-brand-700

                focus-visible:rounded
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-brand
              "
            >
              View All Industries

              <ArrowUpRight
                aria-hidden="true"
                strokeWidth={2}
                className="
                  h-4 w-4
                  transition-transform duration-300

                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5

                  motion-reduce:transform-none
                "
              />
            </Link>
          </div>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* Industry Cards                                                  */}
        {/* -------------------------------------------------------------- */}

        <div
          className="
            mt-10 grid gap-3
            md:grid-cols-3
            lg:mt-12 lg:gap-4
          "
        >
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.number}
                className="
                  group relative flex min-h-[255px] flex-col
                  overflow-hidden
                  rounded-[1.4rem]
                  border border-slate-200/90
                  bg-white/95
                  p-6

                  shadow-[0_14px_45px_-38px_rgba(15,23,42,0.38)]

                  transition-[border-color,transform,box-shadow]
                  duration-300

                  hover:-translate-y-1
                  hover:border-slate-300
                  hover:shadow-[0_22px_55px_-35px_rgba(15,23,42,0.24)]

                  motion-reduce:transform-none
                  motion-reduce:transition-none

                  sm:p-7
                "
              >
                {/* Animated top border */}

                <div
                  aria-hidden="true"
                  className="
                    absolute inset-x-0 top-0
                    h-[2px]
                    origin-left scale-x-0
                    bg-brand

                    transition-transform duration-500
                    group-hover:scale-x-100

                    motion-reduce:transition-none
                  "
                />

                {/* Background number */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute -right-1 -top-6
                    select-none

                    font-display
                    text-[6.75rem] font-semibold
                    leading-none tracking-[-0.07em]
                    text-navy/[0.035]
                  "
                >
                  {industry.number}
                </span>

                {/* Card header */}

                <div
                  className="
                    relative flex
                    items-center justify-between
                  "
                >
                  <div
                    className="
                      grid h-11 w-11
                      place-items-center
                      rounded-[0.85rem]

                      border border-slate-200
                      bg-slate-50 text-navy

                      transition-colors duration-300

                      group-hover:border-brand/25
                      group-hover:bg-brand/[0.06]

                      motion-reduce:transition-none
                    "
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-[19px] w-[19px]"
                      strokeWidth={1.65}
                    />
                  </div>

                  <span
                    className="
                      font-display text-xs
                      font-semibold
                      tracking-[0.16em]
                      text-slate-400
                    "
                  >
                    {industry.number} / 03
                  </span>
                </div>

                {/* Card content */}

                <div className="relative mt-8">
                  <h3
                    className="
                      font-display
                      text-[1.4rem] font-semibold
                      tracking-[-0.025em]
                      text-navy
                      sm:text-[1.5rem]
                    "
                  >
                    {industry.title}
                  </h3>

                  <p
                    className="
                      mt-3 max-w-sm
                      text-[14px]
                      leading-[1.75]
                      text-slate-600
                    "
                  >
                    {industry.description}
                  </p>
                </div>

                {/* Card footer */}

                <div
                  className="
                    relative mt-auto
                    flex items-center gap-2
                    border-t border-slate-100
                    pt-5

                    text-[11px]
                    font-semibold uppercase
                    tracking-[0.12em]
                    text-slate-500
                  "
                >
                  <ArrowUpRight
                    aria-hidden="true"
                    strokeWidth={1.9}
                    className="
                      h-3.5 w-3.5
                      text-brand-700

                      transition-transform duration-300

                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5

                      motion-reduce:transform-none
                    "
                  />

                  {industry.focus}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}