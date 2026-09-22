import { useState } from 'react';
import { Link } from 'react-router';
import {
	ArrowUpRight,
	CalendarClock,
	Check,
	Clock,
	Globe,
	Mail,
	Video,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const TIMEZONE = 'UTC · displayed in your local time';

const DAYS = [
	{ label: 'Mon', date: '12' },
	{ label: 'Tue', date: '13' },
	{ label: 'Wed', date: '14' },
	{ label: 'Thu', date: '15' },
	{ label: 'Fri', date: '16' },
];

const SLOTS = ['09:00', '10:30', '13:00', '14:30', '16:00'];

const FORMAT_OPTIONS = [
	{ icon: Video, label: 'Video call', description: 'Google Meet or Zoom — 30 minutes.' },
	{ icon: Mail, label: 'Phone call', description: 'We call you at a number you provide.' },
];

export function ConsultationHero() {
	return (
		<section className="relative overflow-hidden bg-[#F8FAFC]">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b" />
			<div className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-brand/12 blur-3xl" />
			<div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

			<div className="relative mx-auto w-full max-w-3xl px-5 pb-12 pt-32 sm:px-8 md:pt-40">
				<div className="rise-in inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
					<CalendarClock className="h-3.5 w-3.5 text-brand" strokeWidth={2} />
					<span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-700">
						Book a Consultation
					</span>
					<span className="h-3 w-px bg-slate-200" />
					<span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-400">
						30 minutes · free
					</span>
				</div>

				<h1 className="mt-6 font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl md:text-[3rem] md:leading-[1.06]">
					Pick a time that{' '}
					<span className="text-brand">works for you</span>.
				</h1>

				<p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
					A focused 30-minute conversation with our team. Tell us about your goals and
					we will map the fastest route from idea to launch to growth — no obligation.
				</p>

				<p className="mt-6 text-[13px] text-slate-400">
					Have a fully scoped project?{' '}
					<Link
						to="/start-a-project"
						className="font-semibold text-brand transition-colors hover:text-brand-700"
					>
						Start a project instead
						<ArrowUpRight className="ml-0.5 inline h-3.5 w-3.5" />
					</Link>
				</p>
			</div>
		</section>
	);
}

export function ConsultationScheduler() {
	const [selectedDay, setSelectedDay] = useState(0);
	const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
	const [format, setFormat] = useState(0);

	return (
		<section className="relative bg-white">
			<div className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 md:py-24">
				<div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] shadow-sm">
					<div className="grid lg:grid-cols-12">
						{/* Summary rail */}
						<div className="border-b border-slate-200 bg-navy p-7 text-white sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r">
							<div className="flex items-center gap-3">
								<span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/15 text-brand">
									<CalendarClock className="h-5 w-5" strokeWidth={1.8} />
								</span>
								<div>
									<p className="font-display text-base font-bold">Free consultation</p>
									<p className="text-[13px] text-slate-400">30 minutes · video or phone</p>
								</div>
							</div>

							<div className="mt-7 space-y-4">
								<div className="flex items-start gap-3">
									<Clock className="mt-0.5 h-4 w-4 text-brand" strokeWidth={1.8} />
									<p className="text-[14px] leading-relaxed text-slate-300">
										A focused conversation about your goals, current state and timeline.
									</p>
								</div>
								<div className="flex items-start gap-3">
									<Globe className="mt-0.5 h-4 w-4 text-brand" strokeWidth={1.8} />
									<p className="text-[14px] leading-relaxed text-slate-300">
										International, remote-first team — we align on overlap hours.
									</p>
								</div>
								<div className="flex items-start gap-3">
									<Check className="mt-0.5 h-4 w-4 text-brand" strokeWidth={2.2} />
									<p className="text-[14px] leading-relaxed text-slate-300">
										No obligation — just a clear next step from a senior team.
									</p>
								</div>
							</div>

							<div className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-4">
								<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
									{TIMEZONE}
								</p>
								<p className="mt-2 text-[13px] text-slate-400">
									Slots shown are illustrative. Connect a calendar integration to show
									real, live availability.
								</p>
							</div>
						</div>

						{/* Scheduler */}
						<div className="p-7 sm:p-8 lg:col-span-7">
							<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
								Select a day
							</p>
							<div className="mt-3 grid grid-cols-5 gap-2">
								{DAYS.map((day, i) => {
									const isSelected = selectedDay === i;
									return (
										<button
											key={day.date}
											type="button"
											onClick={() => {
												setSelectedDay(i);
												setSelectedSlot(null);
											}}
											aria-pressed={isSelected}
											className={cn(
												'flex flex-col items-center rounded-lg border py-3 transition-all active:scale-[0.98]',
												isSelected
													? 'border-brand bg-brand/10 text-brand'
													: 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50',
											)}
										>
											<span className="text-[11px] font-semibold uppercase tracking-wide">{day.label}</span>
											<span className="mt-1 font-display text-lg font-bold">{day.date}</span>
										</button>
									);
								})}
							</div>

							<p className="mt-7 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
								Available times
							</p>
							<div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
								{SLOTS.map((slot) => {
									const isSelected = selectedSlot === slot;
									return (
										<button
											key={slot}
											type="button"
											onClick={() => setSelectedSlot(slot)}
											aria-pressed={isSelected}
											className={cn(
												'rounded-lg border py-2.5 text-[14px] font-semibold transition-all active:scale-[0.98]',
												isSelected
													? 'border-brand bg-brand text-white'
													: 'border-slate-200 bg-white text-navy hover:border-brand/40 hover:bg-brand/5',
											)}
										>
											{slot}
										</button>
									);
								})}
							</div>

							<p className="mt-7 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
								Format
							</p>
							<div className="mt-3 grid gap-2.5 sm:grid-cols-2">
								{FORMAT_OPTIONS.map((option, i) => {
									const isSelected = format === i;
									return (
										<button
											key={option.label}
											type="button"
											onClick={() => setFormat(i)}
											aria-pressed={isSelected}
											className={cn(
												'flex items-start gap-3 rounded-lg border p-4 text-left transition-all active:scale-[0.98]',
												isSelected
													? 'border-brand bg-brand/5'
													: 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50',
											)}
										>
											<span className={cn(
												'grid h-9 w-9 shrink-0 place-items-center rounded-lg',
												isSelected ? 'bg-brand text-white' : 'bg-brand/10 text-brand',
											)}>
												<option.icon className="h-4 w-4" strokeWidth={1.8} />
											</span>
											<span>
												<span className="block text-[14px] font-semibold text-navy">{option.label}</span>
												<span className="block text-[12px] text-slate-500">{option.description}</span>
											</span>
										</button>
									);
								})}
							</div>

							<div className="mt-7 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
								<p className="text-[13px] text-slate-500">
									{selectedSlot
										? `${DAYS[selectedDay].label} ${DAYS[selectedDay].date} · ${selectedSlot}`
										: 'Choose a time to continue.'}
								</p>
								<button
									type="button"
									disabled={!selectedSlot}
									onClick={() => {
										if (selectedSlot) window.location.href = '/thank-you';
									}}
									className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-7 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
								>
									Confirm consultation
									<ArrowUpRight className="h-4 w-4" />
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Integration note */}
				<div className="mt-6 rounded-xl border border-brand/20 bg-brand/[0.04] p-5">
					<p className="text-[13px] leading-relaxed text-slate-600">
						<span className="font-semibold text-navy">Calendar integration:</span> this
						area is ready to embed a live scheduling tool (such as Calendly, Cal.com or
						Google Calendar Appointment Slots) so visitors book real availability. The
						slot picker above illustrates the layout — connect your scheduling provider
						to replace it with live booking.
					</p>
				</div>
			</div>
		</section>
	);
}
