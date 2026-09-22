import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight, Mail, MessageSquare, Rocket, CalendarClock } from 'lucide-react';

const PATHS = [
	{
		icon: Rocket,
		eyebrow: 'Have a defined project?',
		title: 'Start a Project',
		description:
			'Walk us through scope, services, budget and timeline in a guided multi-step form.',
		href: '/start-a-project',
		cta: 'Start a project',
	},
	{
		icon: CalendarClock,
		eyebrow: 'Still exploring?',
		title: 'Book a Consultation',
		description:
			'Pick a time that works for you and have a focused conversation with our team.',
		href: '/book-a-consultation',
		cta: 'Book a consultation',
	},
];

export function ContactHero() {
	return (
		<section className="relative overflow-hidden bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b" />
			<div className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-brand/12 blur-3xl" />
			<div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

			<div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 md:pt-40 lg:pb-20">
				<div className="rise-in inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
					<MessageSquare className="h-3.5 w-3.5 text-brand" strokeWidth={2} />
					<span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-700">
						Contact
					</span>
					<span className="h-3 w-px bg-slate-200" />
					<span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-400">
						We reply within one business day
					</span>
				</div>

				<h1 className="mt-6 max-w-3xl font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
					<span className="rise-in block" style={{ animationDelay: '0.15s' }}>
						Let’s start a{' '}
						<span className="text-brand">conversation</span>.
					</span>
				</h1>

				<p
					className="rise-in mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg"
					style={{ animationDelay: '0.3s' }}
				>
					Tell us what you are working on. Whether you have a fully scoped project or a
					one-paragraph idea, we will get back to you with a clear next step.
				</p>
			</div>
		</section>
	);
}

export function ContactPaths() {
	return (
		<section className="relative bg-[#F8FAFC]">
			<div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:py-20">
				<div className="grid gap-5 lg:grid-cols-2">
					{PATHS.map((path) => (
						<Link
							key={path.href}
							to={path.href}
							className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:border-brand/40 hover:shadow-xl hover:shadow-navy/5 sm:p-8"
						>
							<div className="flex items-start gap-4">
								<span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
									<path.icon className="h-5 w-5" strokeWidth={1.8} />
								</span>
								<div className="min-w-0 flex-1">
									<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
										{path.eyebrow}
									</p>
									<h3 className="mt-1.5 font-display text-xl font-bold tracking-tight text-navy">
										{path.title}
									</h3>
									<p className="mt-2 text-[14px] leading-relaxed text-slate-500">
										{path.description}
									</p>
									<span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand">
										{path.cta}
										<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
									</span>
								</div>
							</div>
						</Link>
					))}
				</div>

				<div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
					<div className="flex items-center gap-3.5">
						<span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-brand">
							<Mail className="h-5 w-5" strokeWidth={1.8} />
						</span>
						<div>
							<p className="font-display text-sm font-semibold text-navy">
								Prefer email?
							</p>
							<a
								href="mailto:hello@codelaro.com"
								className="text-[14px] text-slate-500 transition-colors hover:text-brand"
							>
								hello@codelaro.com
							</a>
						</div>
					</div>
					<Link
						to="/insights"
						className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-navy transition-colors hover:text-brand"
					>
						Read our insights
						<ArrowUpRight className="h-4 w-4 text-brand" />
					</Link>
				</div>
			</div>
		</section>
	);
}
