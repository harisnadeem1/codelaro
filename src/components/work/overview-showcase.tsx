import { Link } from 'react-router';
import { ArrowUpRight, Layers3 } from 'lucide-react';
import { WORK_PROJECTS, type WorkProject } from '@/data/work';
import { cn } from '@/lib/utils';

/** Real screenshot when supplied, tasteful editorial placeholder otherwise. */
function BrowserMockup({
  project,
  flipped,
}: {
  project: WorkProject;
  flipped: boolean;
}) {
  return (
    <div
      className={cn(
        'scale-in relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-2xl shadow-black/30',
        flipped ? 'lg:order-2' : 'lg:order-1',
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-500/70" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-500/70" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand/70" aria-hidden="true" />
        <div className="ml-2 min-w-0 flex-1 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-center">
          <span className="block truncate font-mono text-[11px] text-slate-400">
            {project.title} / Project overview
          </span>
        </div>
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-blueprint-grid-dark">
        {project.screenshotSrc ? (
          <img
            src={project.screenshotSrc}
            alt={project.screenshotAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
            <span aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />
            <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-brand/25 bg-brand/10 text-brand shadow-[0_0_50px_rgba(24,188,183,0.12)]">
              <Layers3 className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <div className="relative space-y-2">
              <p className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {project.title}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand sm:text-[11px]">
                {project.category}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectShowcase({
  project,
  index,
}: {
  project: WorkProject;
  index: number;
}) {
  const flipped = index % 2 === 1;

  return (
    <article
      aria-labelledby={`project-heading-${project.id}`}
      className="grid min-w-0 items-center gap-9 border-t border-white/10 pt-12 lg:grid-cols-2 lg:gap-14 lg:pt-16"
    >
      <BrowserMockup project={project} flipped={flipped} />

      <div className={cn('min-w-0', flipped ? 'lg:order-1' : 'lg:order-2')}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[12px] font-semibold tabular-nums text-brand">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="h-px w-8 bg-brand/40" aria-hidden="true" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            {project.category}
          </span>
        </div>

        <h3
          id={`project-heading-${project.id}`}
          className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl"
        >
          {project.title}
        </h3>

        <p className="mt-4 max-w-xl text-[15px] leading-[1.75] text-slate-300 sm:text-base">
          {project.overviewDescription}
        </p>

        <div className="mt-7 grid gap-5 sm:grid-cols-2 sm:gap-6">
          <div className="border-l-2 border-white/15 pl-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.17em] text-brand">
              The challenge
            </p>
            <p className="mt-2 text-[13px] leading-[1.7] text-slate-400 sm:text-[14px]">
              {project.overviewChallenge}
            </p>
          </div>
          <div className="border-l-2 border-brand/50 pl-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.17em] text-brand">
              Our approach
            </p>
            <p className="mt-2 text-[13px] leading-[1.7] text-slate-400 sm:text-[14px]">
              {project.overviewSolution}
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.services.slice(0, 3).map((service) => (
            <span
              key={service}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[12px] font-medium text-slate-300"
            >
              {service}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5" aria-label="Key technologies">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="font-mono text-[11px] text-brand/90">
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/work/${project.slug}`}
          aria-label={`View ${project.title} case study`}
          className="group mt-7 inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.05] px-5 font-display text-[14px] font-semibold text-white transition-all hover:border-brand/50 hover:bg-brand/10 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          View case study
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

export function WorkOverviewShowcase() {
  return (
    <section
      id="work-showcase"
      aria-labelledby="work-showcase-heading"
      className="relative scroll-mt-24 overflow-hidden bg-navy-900"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-60" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-8xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-brand">
            Featured projects
          </p>
          <h2
            id="work-showcase-heading"
            className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-[2.75rem]"
          >
            Real challenges.{' '}
            <span className="text-slate-400">Thoughtfully engineered solutions.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Explore selected software development projects. Discover the problems
            we tackled, the approach we took, and the technologies behind the work.
          </p>
        </div>

        <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
          {WORK_PROJECTS.map((project, index) => (
            <ProjectShowcase key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
