import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES, type Service, type ServiceSpan } from '@/data/services';
import { cn } from '@/lib/utils';

/* ---------- span maps ---------- */

const SPAN_CLASSES: Record<ServiceSpan, string> = {
	featured: 'md:col-span-2 lg:col-span-2 lg:row-span-2',
	wide: 'md:col-span-2 lg:col-span-2',
	standard: 'md:col-span-1 lg:col-span-1',
};

/* ---------- featured visual for the large tile ---------- */

function FeaturedVisual() {
	return (
		<div className="relative mt-6 hidden overflow-hidden rounded-xl border border-slate-200/80 bg-[#0F172A] p-4 font-mono text-[12px] leading-relaxed lg:block">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-40" />
			<div className="relative space-y-1.5">
				<p>
					<span className="text-slate-500">const</span>{' '}
					<span className="text-brand">product</span>{' '}
					<span className="text-slate-500">=</span>{' '}
					<span className="text-slate-300">build(&#123;</span>
				</p>
				<p className="pl-4 text-slate-300">
					framework: <span className="text-brand">'react-router'</span>,
				</p>
				<p className="pl-4 text-slate-300">
					render: <span className="text-brand">'ssr'</span>,
				</p>
				<p className="pl-4 text-slate-300">
					perf: <span className="text-brand">'edge-ready'</span>,
				</p>
				<p className="text-slate-300">
					<span className="text-slate-500">&#125;)</span>
				</p>
			</div>
			<span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-brand/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand">
				<span className="h-1.5 w-1.5 rounded-full bg-brand" />
				shipping
			</span>
		</div>
	);
}

/* ---------- card ---------- */

function ServiceCard({ service }: { service: Service }) {
	const Icon = service.icon;
	const isFeatured = service.span === 'featured';
	const isAccent = service.accent;

	return (
		<Link
			to={`/services/${service.slug}`}
			className={cn(
				'group relative flex flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 active:scale-[0.99] sm:p-6',
				isAccent
					? 'border-brand/30 bg-brand/[0.06] hover:border-brand/50'
					: 'border-slate-200/80 bg-white hover:border-brand/40',
				isFeatured && 'justify-between',
			)}
		>
			{/* hover accent line */}
			<span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />

			<div className={cn('flex items-start gap-4', isFeatured && 'lg:items-start')}>
				<span
					className={cn(
						'grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors duration-300',
						isAccent
							? 'bg-brand text-white'
							: 'bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white',
					)}
				>
					<Icon className="h-5 w-5" strokeWidth={1.9} />
				</span>

				<div className="min-w-0">
					<h3
						className={cn(
							'font-display font-semibold tracking-tight text-navy',
							isFeatured ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg',
						)}
					>
						{service.title}
					</h3>
				</div>
			</div>

			<p
				className={cn(
					'mt-4 text-[14px] leading-relaxed text-slate-500',
					isFeatured ? 'sm:text-[15px]' : 'sm:text-sm',
					isFeatured && 'max-w-md',
				)}
			>
				{service.tagline}
			</p>

			{isFeatured && <FeaturedVisual />}

			<div className={cn('mt-auto', isFeatured ? 'pt-6' : 'pt-5')}>
				<span
					className={cn(
						'inline-flex items-center gap-1 text-[13px] font-semibold transition-colors',
						isAccent ? 'text-brand-700' : 'text-navy group-hover:text-brand',
					)}
				>
					Explore service
					<ArrowUpRight
						className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
					/>
				</span>
			</div>
		</Link>
	);
}

/* ---------- section ---------- */

export function Services() {
	return (
		<section id="services" className="relative scroll-mt-24 bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-40" />

			<div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-28">
				{/* Section intro */}
				<div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
					<div className="max-w-2xl">
						<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
							What we do
						</p>
						<h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
							Technology expertise from{' '}
							<span className="text-brand">idea to scale</span>.
						</h2>
						<p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
							Twelve disciplines, one senior team. We cover the full product lifecycle —
							so you can move from concept to launch to growth without stitching vendors
							together.
						</p>
					</div>
					<Link
						to="/services"
						className="group hidden shrink-0 items-center gap-1.5 text-[14px] font-semibold text-navy transition-colors hover:text-brand sm:inline-flex"
					>
						Browse all services
						<ArrowUpRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					</Link>
				</div>

				{/* Bento grid */}
				<div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:auto-rows-[minmax(170px,auto)] lg:grid-cols-4 lg:auto-rows-[minmax(180px,auto)]">
					{SERVICES.map((service) => (
						<ServiceCard key={service.slug} service={service} />
					))}
				</div>

				{/* Footer CTA */}
				<div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-slate-200/80 bg-white p-6 sm:flex-row sm:items-center sm:p-8">
					<div>
						<h3 className="font-display text-lg font-semibold tracking-tight text-navy sm:text-xl">
							Not sure where to start?
						</h3>
						<p className="mt-1.5 text-[14px] text-slate-500 sm:text-[15px]">
							Tell us about your goals — we will map the fastest route to launch.
						</p>
					</div>
					<Link
						to="#contact"
						className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-brand px-6 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/40 active:scale-[0.98]"
					>
						Book a free consultation
						<ArrowUpRight className="h-4 w-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}
