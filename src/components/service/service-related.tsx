import { Link } from 'react-router';
import {
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';

import type { Service } from '@/data/services';
import { SERVICES } from '@/data/services';
import { SOLUTIONS } from '@/data/solutions';
import { INDUSTRIES } from '@/data/industries';

export function ServiceRelated({
  current,
}: {
  current: Service;
}) {
  /* ------------------------------------------------------------ */
  /* Related Solutions                                            */
  /* ------------------------------------------------------------ */

  const relatedSolutions = current.relatedSolutions
    .map((slug) => SOLUTIONS.find((solution) => solution.slug === slug))
    .filter((solution): solution is NonNullable<typeof solution> =>
      Boolean(solution)
    );

  /* ------------------------------------------------------------ */
  /* Related Industries                                           */
  /* ------------------------------------------------------------ */

  const relatedIndustries = current.relatedIndustries
    .map((slug) => INDUSTRIES.find((industry) => industry.slug === slug))
    .filter((industry): industry is NonNullable<typeof industry> =>
      Boolean(industry)
    );

  /* ------------------------------------------------------------ */
  /* Related Services                                             */
  /* ------------------------------------------------------------ */

  // Prioritize services sharing solutions or industries with
  // the current service, rather than simply taking the first four.

  const relatedServices = SERVICES
    .filter((service) => service.slug !== current.slug)
    .map((service, index) => {
      const sharedSolutions = service.relatedSolutions.filter(
        (slug) => current.relatedSolutions.includes(slug)
      ).length;

      const sharedIndustries = service.relatedIndustries.filter(
        (slug) => current.relatedIndustries.includes(slug)
      ).length;

      return {
        service,
        index,
        relevance: sharedSolutions + sharedIndustries,
      };
    })
    .sort(
      (a, b) =>
        b.relevance - a.relevance ||
        a.index - b.index
    )
    .slice(0, 4)
    .map(({ service }) => service);

  const hasConnections =
    relatedSolutions.length > 0 ||
    relatedIndustries.length > 0;

  return (
    <section
      id="service-related"
      aria-labelledby="service-related-heading"
      className="
        relative isolate
        overflow-hidden
        bg-navy
        py-20 text-white
        sm:py-20
        lg:py-20
      "
    >
      {/* ========================================================= */}
      {/* BACKGROUND                                                */}
      {/* ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(ellipse_at_100%_0%,rgba(24,188,183,0.065),transparent_45%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-0 left-0
          h-[400px] w-[400px]
          max-w-full
          bg-[radial-gradient(circle,rgba(255,255,255,0.025),transparent_70%)]
        "
      />

      <div
        className="
          relative mx-auto
          w-full max-w-8xl
          px-5 sm:px-8 lg:px-10
        "
      >

        {/* ========================================================= */}
        {/* SECTION INTRODUCTION                                      */}
        {/* ========================================================= */}

        <header
          className="
            grid gap-8
            lg:grid-cols-12
            lg:items-end
            lg:gap-16
          "
        >

          {/* Left: Heading */}
          <div className="lg:col-span-8">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">

              <span
                aria-hidden="true"
                className="h-px w-8 bg-brand"
              />

              <p
                className="
                  font-mono
                  text-[11px]
                  font-semibold uppercase
                  tracking-[0.2em]
                  text-brand
                "
              >
                Connected expertise
              </p>

            </div>

            {/* Main Heading */}
            <h2
              id="service-related-heading"
              className="
                mt-6 max-w-4xl
                font-display
                text-[clamp(2.2rem,4.2vw,4.6rem)]
                font-semibold
                leading-[1.1]
                tracking-[-0.05em]
                text-white
              "
            >
              More possibilities.
              <span className="block text-brand">
                One connected approach.
              </span>
            </h2>

          </div>

          {/* Right: Introduction */}
          <div className="lg:col-span-4 lg:pb-2">

            <p
              className="
                max-w-md
                text-[15px]
                leading-[1.85]
                text-slate-300
                sm:text-[16px]
              "
            >
              Explore the solutions, industries, and
              complementary services connected to our{' '}
              {current.title.toLowerCase()} expertise.
            </p>

            {/* Small Decorative Detail */}
            <div className="mt-7 flex items-center gap-3">

              <span
                aria-hidden="true"
                className="
                  flex h-2 w-2
                  rounded-full
                  bg-brand
                "
              />

              <span
                className="
                  font-mono
                  text-[10px]
                  font-medium uppercase
                  tracking-[0.16em]
                  text-slate-400
                "
              >
                Explore beyond this service
              </span>

            </div>

          </div>

        </header>


        {/* ========================================================= */}
        {/* RELATED SOLUTIONS & INDUSTRIES                            */}
        {/* ========================================================= */}

        {hasConnections && (
          <div
            className={`
              mt-14
              overflow-hidden
              rounded-[24px]
              border border-white/10
              bg-white/[0.025]
              sm:mt-16
              lg:mt-20
              ${
                relatedSolutions.length > 0 &&
                relatedIndustries.length > 0
                  ? 'lg:grid lg:grid-cols-2'
                  : ''
              }
            `}
          >

            {/* ===================================================== */}
            {/* RELATED SOLUTIONS                                     */}
            {/* ===================================================== */}

            {relatedSolutions.length > 0 && (
              <div
                className={`
                  min-w-0
                  px-6 py-8
                  sm:px-9 sm:py-10
                  lg:px-11 lg:py-12
                  ${
                    relatedIndustries.length > 0
                      ? 'border-b border-white/10 lg:border-b-0 lg:border-r'
                      : ''
                  }
                `}
              >

                {/* Column Header */}
                <div className="flex items-start justify-between gap-5">

                  <div>

                    <p
                      className="
                        font-mono
                        text-[10px]
                        font-semibold uppercase
                        tracking-[0.18em]
                        text-brand
                      "
                    >
                      Related solutions
                    </p>

                    <h3
                      className="
                        mt-3
                        font-display
                        text-[clamp(1.5rem,2.1vw,2rem)]
                        font-semibold
                        leading-[1.25]
                        tracking-[-0.04em]
                        text-white
                      "
                    >
                      Solutions that connect.
                    </h3>

                  </div>

                  {/* Count */}
                  <span
                    className="
                      shrink-0
                      font-mono
                      text-[11px]
                      text-slate-500
                    "
                  >
                    {String(relatedSolutions.length).padStart(2, '0')}
                  </span>

                </div>

                <p
                  className="
                    mt-4 max-w-md
                    text-[13px]
                    leading-[1.8]
                    text-slate-400
                    sm:text-[14px]
                  "
                >
                  Discover related digital solutions
                  that can complement your project.
                </p>


                {/* Solution Links */}
                <ul className="mt-9 border-t border-white/10">

                  {relatedSolutions.map((solution) => {
                    const Icon = solution.icon;

                    return (
                      <li
                        key={solution.slug}
                        className="
                          border-b border-white/10
                          last:border-b-0
                        "
                      >

                        <Link
                          to={`/solutions/${solution.slug}`}
                          className="
                            group/solution
                            flex items-center
                            gap-4
                            py-6
                            transition-colors
                            duration-300
                            focus-visible:rounded-md
                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-brand
                            sm:gap-5
                          "
                        >

                          {/* Small Icon */}
                          <span
                            className="
                              flex h-11 w-11
                              shrink-0
                              items-center justify-center
                              rounded-xl
                              border border-white/10
                              bg-white/[0.045]
                              text-slate-300
                              transition-[border-color,background-color,color]
                              duration-300
                              group-hover/solution:border-brand/30
                              group-hover/solution:bg-brand/[0.08]
                              group-hover/solution:text-brand
                              motion-reduce:transition-none
                            "
                          >
                            <Icon
                              aria-hidden="true"
                              className="h-5 w-5"
                              strokeWidth={1.6}
                            />
                          </span>


                          {/* Solution Information */}
                          <span className="min-w-0 flex-1">

                            <span
                              className="
                                block
                                font-display
                                text-[15px]
                                font-semibold
                                leading-[1.45]
                                tracking-[-0.02em]
                                text-white
                                transition-colors
                                duration-300
                                group-hover/solution:text-brand
                                sm:text-[17px]
                              "
                            >
                              {solution.title}
                            </span>

                            <span
                              className="
                                mt-1 block
                                text-[12px]
                                leading-[1.7]
                                text-slate-400
                                sm:text-[13px]
                              "
                            >
                              {solution.outcome}
                            </span>

                          </span>


                          {/* Arrow */}
                          <ArrowUpRight
                            aria-hidden="true"
                            className="
                              h-[18px] w-[18px]
                              shrink-0
                              text-slate-500
                              transition-[color,transform]
                              duration-300
                              group-hover/solution:-translate-y-0.5
                              group-hover/solution:translate-x-0.5
                              group-hover/solution:text-brand
                              motion-reduce:transition-none
                            "
                            strokeWidth={1.6}
                          />

                        </Link>

                      </li>
                    );
                  })}

                </ul>

              </div>
            )}


            {/* ===================================================== */}
            {/* RELATED INDUSTRIES                                    */}
            {/* ===================================================== */}

            {relatedIndustries.length > 0 && (
              <div
                className="
                  min-w-0
                  px-6 py-8
                  sm:px-9 sm:py-10
                  lg:px-11 lg:py-12
                "
              >

                {/* Column Header */}
                <div className="flex items-start justify-between gap-5">

                  <div>

                    <p
                      className="
                        font-mono
                        text-[10px]
                        font-semibold uppercase
                        tracking-[0.18em]
                        text-brand
                      "
                    >
                      Industries
                    </p>

                    <h3
                      className="
                        mt-3
                        font-display
                        text-[clamp(1.5rem,2.1vw,2rem)]
                        font-semibold
                        leading-[1.25]
                        tracking-[-0.04em]
                        text-white
                      "
                    >
                      Built for your industry.
                    </h3>

                  </div>

                  {/* Count */}
                  <span
                    className="
                      shrink-0
                      font-mono
                      text-[11px]
                      text-slate-500
                    "
                  >
                    {String(relatedIndustries.length).padStart(2, '0')}
                  </span>

                </div>

                <p
                  className="
                    mt-4 max-w-md
                    text-[13px]
                    leading-[1.8]
                    text-slate-400
                    sm:text-[14px]
                  "
                >
                  Explore the industries where these
                  technologies and solutions can be applied.
                </p>


                {/* Industry Links */}
                <ul className="mt-9 border-t border-white/10">

                  {relatedIndustries.map((industry) => {
                    const Icon = industry.icon;

                    return (
                      <li
                        key={industry.slug}
                        className="
                          border-b border-white/10
                          last:border-b-0
                        "
                      >

                        <Link
                          to={`/industries/${industry.slug}`}
                          className="
                            group/industry
                            flex items-center
                            gap-4
                            py-6
                            transition-colors
                            duration-300
                            focus-visible:rounded-md
                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-brand
                            sm:gap-5
                          "
                        >

                          {/* Small Icon */}
                          <span
                            className="
                              flex h-11 w-11
                              shrink-0
                              items-center justify-center
                              rounded-xl
                              border border-white/10
                              bg-white/[0.045]
                              text-slate-300
                              transition-[border-color,background-color,color]
                              duration-300
                              group-hover/industry:border-brand/30
                              group-hover/industry:bg-brand/[0.08]
                              group-hover/industry:text-brand
                              motion-reduce:transition-none
                            "
                          >
                            <Icon
                              aria-hidden="true"
                              className="h-5 w-5"
                              strokeWidth={1.6}
                            />
                          </span>


                          {/* Industry Information */}
                          <span className="min-w-0 flex-1">

                            <span
                              className="
                                block
                                font-display
                                text-[15px]
                                font-semibold
                                leading-[1.45]
                                tracking-[-0.02em]
                                text-white
                                transition-colors
                                duration-300
                                group-hover/industry:text-brand
                                sm:text-[17px]
                              "
                            >
                              {industry.title}
                            </span>

                            <span
                              className="
                                mt-1 block
                                text-[12px]
                                leading-[1.7]
                                text-slate-400
                                sm:text-[13px]
                              "
                            >
                              {industry.tagline}
                            </span>

                          </span>


                          {/* Arrow */}
                          <ArrowUpRight
                            aria-hidden="true"
                            className="
                              h-[18px] w-[18px]
                              shrink-0
                              text-slate-500
                              transition-[color,transform]
                              duration-300
                              group-hover/industry:-translate-y-0.5
                              group-hover/industry:translate-x-0.5
                              group-hover/industry:text-brand
                              motion-reduce:transition-none
                            "
                            strokeWidth={1.6}
                          />

                        </Link>

                      </li>
                    );
                  })}

                </ul>

              </div>
            )}

          </div>
        )}


        {/* ========================================================= */}
        {/* MORE SERVICES                                             */}
        {/* ========================================================= */}

        {relatedServices.length > 0 && (
          <div
            className="
              mt-16
              sm:mt-20
              lg:mt-24
            "
          >

            {/* Services Header */}
            <div
              className="
                flex flex-col
                gap-6
                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >

              <div>

                <p
                  className="
                    font-mono
                    text-[10px]
                    font-semibold uppercase
                    tracking-[0.2em]
                    text-brand
                  "
                >
                  Continue exploring
                </p>

                <h3
                  className="
                    mt-3
                    font-display
                    text-[clamp(1.6rem,2.5vw,2.7rem)]
                    font-semibold
                    leading-[1.2]
                    tracking-[-0.04em]
                    text-white
                  "
                >
                  Explore more of our expertise.
                </h3>

                <p
                  className="
                    mt-3 max-w-xl
                    text-[13px]
                    leading-[1.8]
                    text-slate-400
                    sm:text-[14px]
                  "
                >
                  Discover complementary development
                  services for your next project.
                </p>

              </div>


              {/* View All */}
              <Link
                to="/services"
                className="
                  group/all
                  inline-flex
                  shrink-0
                  items-center
                  gap-2
                  self-start
                  pb-1.5
                  font-display
                  text-[16px]
                  font-semibold
                  text-white
                  transition-[border-color,color]
                  duration-300
                  hover:border-brand
                  hover:text-brand
                  focus-visible:rounded-sm
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-brand
                  sm:self-auto
                "
              >
                View all Services

                <ArrowRight
                  aria-hidden="true"
                  className="
                    h-4 w-4
                    transition-transform
                    duration-300
                    group-hover/all:translate-x-1
                    motion-reduce:transition-none
                  "
                />
              </Link>

            </div>


            {/* Horizontal Service Directory */}
            <ul
              className="
                mt-9
                grid
                border-y border-white/15
                sm:grid-cols-2
                xl:grid-cols-4
              "
            >

              {relatedServices.map((service, index) => {
                const Icon = service.icon;

                return (
                  <li
                    key={service.slug}
                    className={`
                      min-w-0
                      border-b border-white/10
                      last:border-b-0
                      sm:odd:border-r
                      xl:border-b-0
                      xl:border-r
                      xl:last:border-r-0
                      ${
                        index >= 2
                          ? 'sm:border-b-0'
                          : ''
                      }
                    `}
                  >

                    <Link
                      to={`/services/${service.slug}`}
                      className="
                        group/service
                        relative
                        flex h-full
                        min-h-[190px]
                        flex-col
                        px-5 py-7
                        transition-colors
                        duration-300
                        hover:bg-white/[0.045]
                        focus-visible:rounded-sm
                        focus-visible:outline-2
                        focus-visible:outline-offset-[-2px]
                        focus-visible:outline-brand
                        sm:min-h-[210px]
                        sm:px-7 sm:py-9
                      "
                    >

                      {/* Top */}
                      <div
                        className="
                          flex items-center
                          justify-between
                          gap-4
                        "
                      >

                        <Icon
                          aria-hidden="true"
                          className="
                            h-5 w-5
                            text-slate-400
                            transition-colors
                            duration-300
                            group-hover/service:text-brand
                          "
                          strokeWidth={1.5}
                        />


                        <ArrowUpRight
                          aria-hidden="true"
                          className="
                            h-4 w-4
                            text-slate-500
                            transition-[color,transform]
                            duration-300
                            group-hover/service:-translate-y-0.5
                            group-hover/service:translate-x-0.5
                            group-hover/service:text-brand
                            motion-reduce:transition-none
                          "
                          strokeWidth={1.6}
                        />

                      </div>


                      {/* Service Content */}
                      <div className="mt-auto pt-10">

                        <span
                          className="
                            block
                            font-display
                            text-[17px]
                            font-semibold
                            leading-[1.35]
                            tracking-[-0.025em]
                            text-white
                            transition-colors
                            duration-300
                            group-hover/service:text-brand
                            sm:text-[19px]
                          "
                        >
                          {service.title}
                        </span>

                        <span
                          className="
                            mt-2 block
                            text-[12px]
                            leading-[1.7]
                            text-slate-400
                            sm:text-[13px]
                          "
                        >
                          {service.tagline}
                        </span>

                      </div>


                      {/* Bottom Hover Indicator */}
                      <span
                        aria-hidden="true"
                        className="
                          absolute
                          bottom-[-1px] left-0
                          h-[2px] w-0
                          bg-brand
                          transition-[width]
                          duration-500
                          group-hover/service:w-full
                          motion-reduce:transition-none
                        "
                      />

                    </Link>

                  </li>
                );
              })}

            </ul>

          </div>
        )}

      </div>
    </section>
  );
}