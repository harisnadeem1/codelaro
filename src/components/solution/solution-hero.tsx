import { Link } from 'react-router';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Solution } from '@/data/solutions';
import { SolutionVisual } from './solution-visuals';

/**
 * Accessible, SEO-friendly hero: real H1, crawlable solution copy and internal links.
 * Every solution title automatically selects its own code-rendered illustration.
 */
export function SolutionHero({ solution }: { solution: Solution }) {
  return (
    <section aria-labelledby="solution-heading" className="relative isolate overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute -inset-x-20 -top-40 h-[600px] rounded-full bg-brand/[.025] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-8xl px-5 pb-16 pt-8 sm:px-8 sm:pb-20 lg:pb-20 lg:pt-32">
        <nav aria-label="Breadcrumb" className="mb-10 lg:mb-5">
          <Link to="/solutions" className="group inline-flex items-center gap-2 text-[13px] font-medium text-slate-500 transition-colors hover:text-navy">
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            All Solutions
          </Link>
        </nav>

        <div className="
    grid items-center
    gap-12
    lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
    lg:gap-24
    xl:gap-32
    2xl:gap-40
">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-brand" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[.2em] text-brand-700">Digital solutions</span>
            </div>

            <h1 id="solution-heading" className="mt-7 max-w-2xl font-display text-[clamp(2.5rem,4.2vw,4.5rem)] font-bold leading-[1.1] tracking-[-.045em] text-navy">
              {solution.title}
            </h1>

            {/* <p className="mt-6 max-w-xl font-display text-xl font-semibold leading-[1.4] tracking-tight text-brand-700 sm:text-2xl">
              {solution.outcome}
            </p> */}

            <p className="mt-6 max-w-xl text-[15px] leading-[1.85] text-slate-500 sm:text-base">
              {solution.explanation}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/contact" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-brand px-6 py-3 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-brand-600 hover:shadow-lg hover:shadow-brand/20 active:scale-[.98]">
                Discuss Your Project
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/industries" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3 text-[16px] font-semibold text-navy transition-all duration-300 hover:border-navy/20 hover:bg-slate-50 active:scale-[.98]">
                Explore our Industries
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-slate-200 pt-6">
              <div aria-hidden="true" className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-brand" />
                <span className="size-1.5 rounded-full bg-brand/50" />
                <span className="size-1.5 rounded-full bg-brand/20" />
              </div>
              <p className="text-xs font-medium tracking-wide text-slate-500">Thoughtfully designed. Built to scale.</p>
            </div>
          </div>

          <div className="relative min-w-0 w-full lg:-mr-5 xl:-mr-8">
            <SolutionVisual solution={solution} />
          </div>
        </div>
      </div>
    </section>
  );
}
