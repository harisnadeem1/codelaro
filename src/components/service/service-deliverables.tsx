import { Link } from 'react-router';
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bell,
  Cable,
  Check,
  Cloud,
  Code2,
  CreditCard,
  Database,
  Globe2,
  Layers3,
  LayoutDashboard,
  Monitor,
  PenTool,
  RefreshCw,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import type { Service } from '@/data/services';
import {
  getServiceDeliverables,
  type DeliverableIcon,
  type ServiceDeliverable,
} from './service-deliverables-content.js';

const ICONS: Record<DeliverableIcon, LucideIcon> = {
  globe: Globe2,
  layers: Layers3,
  shopping: ShoppingBag,
  rocket: Rocket,
  refresh: RefreshCw,
  mobile: Smartphone,
  cloud: Cloud,
  workflow: Workflow,
  chart: BarChart3,
  connect: Cable,
  design: PenTool,
  payment: CreditCard,
  shield: ShieldCheck,
  monitor: Monitor,
  code: Code2,
  database: Database,
  dashboard: LayoutDashboard,
  users: Users,
  bell: Bell,
  server: Server,
};

function IncludedList({
  deliverable,
  isFeatured = false,
}: {
  deliverable: ServiceDeliverable;
  isFeatured?: boolean;
}) {
  return (
    <div>
      <p
        className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
          isFeatured ? 'text-brand' : 'text-slate-500'
        }`}
      >
        What it can include
      </p>

      <ul className="mt-5 space-y-4">
        {deliverable.includes.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                isFeatured
                  ? 'border border-brand/25 bg-brand/10 text-brand'
                  : 'border border-brand/20 bg-brand/[0.07] text-brand-700'
              }`}
            >
              <Check className="h-3 w-3" strokeWidth={2} />
            </span>
            <span
              className={`text-[13px] leading-[1.65] sm:text-[14px] ${
                isFeatured ? 'text-slate-200' : 'text-slate-600'
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeaturedDeliverable({
  item,
  total,
}: {
  item: ServiceDeliverable;
  total: number;
}) {
  const Icon = ICONS[item.icon];

  return (
    <li className="relative isolate overflow-hidden rounded-[24px] bg-navy text-white sm:rounded-[30px]">
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_6%_94%,rgba(24,188,183,0.14),transparent_50%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-36 h-[360px] w-[360px] rounded-full border border-white/[0.05] sm:h-[440px] sm:w-[440px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/[0.05]"
      />

      {/* Main Layout */}
      <div className="relative grid lg:grid-cols-12">

        {/* Left Column */}
        <div className="flex min-w-0 flex-col px-6 pb-9 pt-7 sm:px-9 sm:pb-11 sm:pt-9 lg:col-span-6 lg:px-11 lg:py-11">

          {/* Featured Badge & Number */}
          <div className="flex flex-wrap items-center justify-between gap-4">

            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Featured deliverable
            </span>

            <span
              aria-hidden="true"
              className="font-mono text-[11px] text-slate-400"
            >
              01 / {String(total).padStart(2, '0')}
            </span>

          </div>

          {/* Icon & Title */}
          <div className="mt-9 flex min-w-0 items-center gap-4 sm:mt-8 sm:gap-5">

            {/* Icon */}
            <span
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-xl
                border border-white/15
                bg-white/[0.06]
                text-brand
                transition-colors duration-300
                hover:border-brand/40
                hover:bg-brand/[0.08]
                motion-reduce:transition-none
                sm:h-10 sm:w-10
              "
            >
              <Icon
                aria-hidden="true"
                className="h-6 w-6 sm:h-5 sm:w-5"
                strokeWidth={1.5}
              />
            </span>

            {/* Featured Title */}
            <h3
              className="
                min-w-0 max-w-lg
                font-display
                text-[clamp(1.5rem,2.4vw,2rem)]
                font-semibold
                leading-[1.2]
                tracking-[-0.04em]
                text-white
              "
            >
              {item.title}
            </h3>

          </div>

          {/* Description */}
          <p className="mt-6 max-w-md text-[14px] leading-[1.85] text-slate-300 sm:text-[15px]">
            {item.description}
          </p>

          {/* Intended Result */}
          <div className="mt-9 pt-5 lg:mt-auto lg:pt-6">

            <p className=" text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
              The intended result
            </p>

            <p className="mt-2 max-w-md text-[13px] leading-[1.75] text-white/90 sm:text-[14px]">
              {item.outcome}
            </p>

          </div>

        </div>

        {/* Right Column: Included Features */}
        <div className="border-t border-white/10 bg-white/[0.035] px-6 py-8 sm:px-9 sm:py-10 lg:col-span-6 lg:flex lg:items-center lg:border-l lg:border-t-0 lg:px-11">

          <div className="w-full">

            <IncludedList deliverable={item} isFeatured />

            {/* Scope Information */}
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">

              <Layers3
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-brand"
                strokeWidth={1.7}
              />

              <p className="text-[11px] leading-[1.65] text-slate-400 sm:text-xs">
                Exact features and integrations are defined in your
                project scope.
              </p>

            </div>

          </div>

        </div>

      </div>
    </li>
  );
}

function DeliverableCard({
  item,
  index,
  total,
}: {
  item: ServiceDeliverable;
  index: number;
  total: number;
}) {
  const Icon = ICONS[item.icon];

  return (
    <li
      className="
        group relative flex h-full min-w-0 flex-col
        overflow-hidden rounded-[22px]
        border border-slate-200/90 bg-[#F8FAFC]
        p-6
        transition-[border-color,background-color,transform,box-shadow]
        duration-300
        hover:-translate-y-1
        hover:border-slate-300
        hover:bg-white
        hover:shadow-[0_20px_55px_-32px_rgba(15,23,42,0.22)]
        motion-reduce:transform-none
        motion-reduce:transition-none
        sm:p-8
      "
    >
      {/* Subtle Background Decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-12 -top-12
          h-32 w-32 rounded-full
          bg-brand/[0.045] blur-2xl
        "
      />

      {/* Icon, Title & Number */}
      <div className="relative flex items-start justify-between gap-3 sm:gap-4">

        {/* Icon & Title */}
        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">

          {/* Icon */}
          <span
            className="
              flex h-11 w-11 shrink-0
              items-center justify-center
              rounded-xl
              border border-slate-200
              bg-white text-navy
              transition-colors duration-300
              group-hover:border-brand/40
              group-hover:text-brand
              motion-reduce:transition-none
              sm:h-12 sm:w-12 sm:rounded-2xl
            "
          >
            <Icon
              aria-hidden="true"
              className="h-5 w-5"
              strokeWidth={1.65}
            />
          </span>

          {/* Deliverable Title */}
          <h3
            className="
              min-w-0
              font-display
              text-[18px] font-semibold
              leading-[1.3]
              tracking-[-0.035em]
              text-navy
              sm:text-[22px]
            "
          >
            {item.title}
          </h3>

        </div>

        {/* Card Number */}
        <span
          aria-hidden="true"
          className="
            shrink-0 pt-1
            font-mono text-[10px]
            tracking-wide text-slate-400
            sm:text-[11px]
          "
        >
          {String(index + 1).padStart(2, '0')}
          <span className="mx-1 text-slate-300">/</span>
          {String(total).padStart(2, '0')}
        </span>

      </div>

      {/* Description */}
      <div className="relative mt-5">
        <p
          className="
            text-[14px]
            leading-[1.8]
            text-slate-600
            sm:text-[15px]
          "
        >
          {item.description}
        </p>
      </div>

    

      {/* What's Included */}
      <div className="relative mt-5">
        <IncludedList deliverable={item} />
      </div>

      {/* Intended Outcome */}
      <div className="relative mt-auto pt-8">
        <div className="border-t border-slate-200/90 pt-5">

          <p
            className="
               text-[10px]
              font-semibold uppercase
              tracking-[0.16em]
              text-slate-500
            "
          >
            The intended result
          </p>

          <p
            className="
              mt-2
              text-[13px]
              font-medium
              leading-[1.7]
              text-navy
              sm:text-[14px]
            "
          >
            {item.outcome}
          </p>

        </div>
      </div>

    </li>
  );
}

export function ServiceDeliverables({ service }: { service: Service }) {
  const deliverables = getServiceDeliverables(service);
  const featured = deliverables[0];
  if (!featured) return null;

  const rest = deliverables.slice(1);
  const overview = service.overview?.filter((paragraph) => paragraph.trim().length > 0) ?? [];
  const [lead, second, ...remainingOverview] = overview;

  return (
    <section
      id="service-content"
      aria-labelledby="service-deliverables-heading"
      className="relative isolate scroll-mt-20 overflow-hidden bg-white py-20 sm:py-20 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[440px] w-[500px] max-w-full bg-[radial-gradient(ellipse_at_0%_0%,rgba(24,188,183,0.04),transparent_65%)]"
      />

      <div className="relative mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-10">
        {/* Editorial introduction: overview belongs here rather than in its own section. */}
        <header className="grid gap-8 border-b border-slate-200 pb-12 lg:grid-cols-12 lg:items-start lg:gap-16 lg:pb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-brand" />
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700">
                What we deliver
              </p>
            </div>

            <h2
              id="service-deliverables-heading"
              className="mt-5 max-w-2xl font-display text-[clamp(2rem,3.45vw,3.5rem)] font-semibold leading-[1.13] tracking-[-0.045em] text-navy"
            >
              What you get with <span className="text-brand">{service.title}.</span>
            </h2>
          </div>

          <div className="max-w-2xl lg:col-span-6 lg:pt-9">
            <p className="text-[16px] leading-[1.85] text-slate-600 sm:text-[17px]">
              {lead || service.summary}
            </p>
            {second && (
              <p className="mt-4 text-[15px] leading-[1.85] text-slate-500 sm:text-[16px]">
                {second}
              </p>
            )}
            {remainingOverview.length > 0 && (
              <details className="group mt-5 border-t border-slate-200 pt-4">
                <summary className="w-fit cursor-pointer font-display text-[13px] font-semibold text-navy underline decoration-slate-300 underline-offset-4 transition-colors hover:text-brand-700 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand motion-reduce:transition-none">
                  Read more about {service.title}
                </summary>
                <div className="mt-4 space-y-3 text-[15px] leading-[1.8] text-slate-600">
                  {remainingOverview.map((paragraph, index) => (
                    <p key={`${service.slug}-overview-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </details>
            )}
          </div>
        </header>

        {/* A clear, skimmable inventory of possible project outcomes. */}
        <div className="mb-6 mt-11 flex flex-wrap items-end justify-between gap-3 sm:mb-7 sm:mt-14">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-700">
              Your deliverable map
            </p>
            <p className="mt-2 max-w-xl text-[14px] leading-[1.7] text-slate-500">
              Explore the solutions, key inclusions, and outcomes available for this service.
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500">
            {String(deliverables.length).padStart(2, '0')} delivery areas
          </span>
        </div>

        <div className="space-y-4 sm:space-y-5">
          <ol aria-label={`${service.title}: featured deliverable`}>
            <FeaturedDeliverable item={featured} total={deliverables.length} />
          </ol>

          {/* All detail is visible in the document: accessible and search-friendly. */}
          {rest.length > 0 && (
            <ol
              start={2}
              aria-label={`${service.title}: additional deliverables`}
              className="grid gap-4 sm:gap-5 lg:grid-cols-2"
            >
              {rest.map((item, index) => (
                <DeliverableCard
                  key={`${service.slug}-${item.title}`}
                  item={item}
                  index={index + 1}
                  total={deliverables.length}
                />
              ))}
            </ol>
          )}
        </div>

        {/* Scope clarification and one contextual next step; main conversion CTA remains later. */}
        <div className="mt-9 flex flex-col gap-5 rounded-[18px] border border-slate-200 bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6">
          <div className="flex items-start gap-3">
            <Activity
              aria-hidden="true"
              className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-700"
              strokeWidth={1.8}
            />
            <p className="max-w-2xl text-[14px] leading-[1.75] text-slate-600 sm:text-[14px]">
              Every project is different. The exact deliverables, integrations, and handover items are agreed with you before development begins.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-2 self-start font-display text-[15px] font-semibold text-navy transition-colors hover:text-brand-700 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand motion-reduce:transition-none sm:self-auto"
          >
            Discuss your scope
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
