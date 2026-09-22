import { MailOpen, MapPin, Clock, Briefcase } from 'lucide-react';
import { CAREER_LISTINGS } from '@/data/company';

/**
 * Job listings — dark surface. Renders real open roles when available, and an
 * honest empty state otherwise. Never advertises invented vacancies.
 */
export function CareersListings() {
	const hasListings = CAREER_LISTINGS.length > 0;

	return (
		<section className="relative overflow-hidden bg-navy-900">
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-60"
			/>
			<span
				aria-hidden
				className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-brand/10 blur-3xl drift-slow"
			/>

			<div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand">
						Open roles
					</p>
					<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
						Current openings.
					</h2>
					<p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-base">
						When a real role opens, it appears here — with the team, location and
						employment type. We do not list invented vacancies.
					</p>
				</div>

				{hasListings ? (
					<ul className="mt-12 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
						{CAREER_LISTINGS.map((listing) => (
							<li
								key={listing.role}
								className="group flex flex-col gap-4 px-6 py-6 transition-colors hover:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between"
							>
								<div>
									<h3 className="font-display text-lg font-semibold tracking-tight text-white">
										{listing.role}
									</h3>
									<p className="mt-1 text-[13px] text-slate-400">{listing.team}</p>
								</div>
								<div className="flex flex-wrap items-center gap-4 text-[13px] text-slate-400">
									<span className="flex items-center gap-1.5">
										<Briefcase className="h-4 w-4 text-brand" />
										{listing.type}
									</span>
									<span className="flex items-center gap-1.5">
										<MapPin className="h-4 w-4 text-brand" />
										{listing.location}
									</span>
									<a
										href="mailto:careers@codelaro.com"
										className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 font-display text-sm font-semibold text-white transition-all hover:border-brand hover:bg-brand/10 hover:text-brand active:scale-[0.98]"
									>
										Apply
									</a>
								</div>
							</li>
						))}
					</ul>
				) : (
					<div className="mt-12 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-10 text-center sm:p-14">
						<span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-brand">
							<MailOpen className="h-6 w-6" strokeWidth={1.8} />
						</span>
						<h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
							No open roles right now
						</h3>
						<p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-slate-400">
							We do not have any publicly listed vacancies at the moment. If you are a
							senior engineer, designer or product mind who aligns with how we work,
							we welcome an open application — we read every one.
						</p>
						<a
							href="mailto:careers@codelaro.com"
							className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-brand px-7 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/40 active:scale-[0.98]"
						>
							<Clock className="h-4 w-4" />
							Send an open application
						</a>
					</div>
				)}
			</div>
		</section>
	);
}
