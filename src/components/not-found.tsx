import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight, Compass, Home, Search } from 'lucide-react';

const QUICK_LINKS = [
	{ label: 'Services', href: '/services', description: 'Twelve disciplines, one senior team.' },
	{ label: 'Solutions', href: '/solutions', description: 'Outcome-led engagements end to end.' },
	{ label: 'Work', href: '/work', description: 'Selected projects and case studies.' },
	{ label: 'Company', href: '/company', description: 'About Codelaro and how we work.' },
	{ label: 'Insights', href: '/insights', description: 'Notes on engineering and product.' },
	{ label: 'Contact', href: '/contact', description: 'Start a conversation with our team.' },
];

export function NotFound() {
	return (
		<main className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b" />
			<div className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-brand/12 blur-3xl" />
			<div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

			<div className="relative mx-auto w-full max-w-3xl px-5 py-24 text-center sm:px-8">
				<div className="rise-in mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-brand shadow-lg shadow-navy/5">
					<Compass className="h-8 w-8" strokeWidth={1.8} />
				</div>

				<p
					className="rise-in mt-7 font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700"
					style={{ animationDelay: '0.1s' }}
				>
					Error 404
				</p>

				<h1
					className="rise-in mt-4 font-display text-[3.5rem] font-bold leading-none tracking-tight text-navy sm:text-[5rem] md:text-[6rem]"
					style={{ animationDelay: '0.2s' }}
				>
					404
				</h1>

				<h2
					className="rise-in mt-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl"
					style={{ animationDelay: '0.3s' }}
				>
					This page took a different route.
				</h2>

				<p
					className="rise-in mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg"
					style={{ animationDelay: '0.4s' }}
				>
					The page you are looking for may have moved or no longer exists. Let us get you
					back on track — here are the most useful places to go next.
				</p>

				<div
					className="rise-in mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
					style={{ animationDelay: '0.5s' }}
				>
					<Link
						to="/"
						className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-7 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/40 active:scale-[0.98] sm:w-auto"
					>
						<Home className="h-4 w-4" />
						Back to home
					</Link>
					<Link
						to="/contact"
						className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-7 font-display text-[15px] font-semibold text-navy transition-all hover:border-navy/30 hover:bg-slate-50 active:scale-[0.98] sm:w-auto"
					>
						Contact us
						<ArrowRight className="h-4 w-4 text-brand" />
					</Link>
				</div>

				<div
					className="rise-in mt-14 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3"
					style={{ animationDelay: '0.62s' }}
				>
					{QUICK_LINKS.map((link) => (
						<Link
							key={link.href}
							to={link.href}
							className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-brand/40 hover:shadow-md hover:shadow-navy/5"
						>
							<span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
								<Search className="h-4 w-4" strokeWidth={1.8} />
							</span>
							<span className="min-w-0 flex-1">
								<span className="flex items-center gap-1 text-sm font-semibold text-navy">
									{link.label}
									<ArrowUpRight className="h-3.5 w-3.5 text-brand transition-transform group-hover:translate-x-0.5" />
								</span>
								<span className="mt-0.5 block text-[13px] leading-snug text-slate-500">
									{link.description}
								</span>
							</span>
						</Link>
					))}
				</div>

				<p className="mt-12 text-[13px] text-slate-400">
					Code. Launch. Grow. — Codelaro
				</p>
			</div>
		</main>
	);
}
