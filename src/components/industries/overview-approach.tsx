import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const STEPS = [
	{
		phase: '01',
		title: 'Learn your field',
		description:
			'We start from the language, constraints and goals of your sector — not a generic playbook.',
	},
	{
		phase: '02',
		title: 'Map the challenges',
		description:
			'We identify the digital challenges that actually hold your operation back, and prioritise them.',
	},
	{
		phase: '03',
		title: 'Bring the right disciplines',
		description:
			'We combine the services and solutions that fit — into one engagement, under one team.',
	},
	{
		phase: '04',
		title: 'Ship for the outcome',
		description:
			'We deliver working software that fits how your industry works, and measure it against real results.',
	},
];

export function IndustriesOverviewApproach() {
	return (
		<section className="relative overflow-hidden bg-navy text-white">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-40" />
			<div className="drift-slow pointer-events-none absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

			<div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-28">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand">
						Our approach
					</p>
					<h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
						Domain knowledge,{' '}
						<span className="text-brand">engineered in</span>.
					</h2>
					<p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
						We do not drop a generic product into your sector. Every engagement is shaped
						around the way your industry actually works — from the first conversation.
					</p>
				</div>

				<div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
					{STEPS.map((step) => (
						<div key={step.phase} className="bg-navy p-6 transition-colors hover:bg-navy-800 sm:p-7">
							<span className="font-mono text-[13px] font-semibold text-brand">
								{step.phase}
							</span>
							<h3 className="mt-3 font-display text-[16px] font-semibold leading-tight tracking-tight text-white">
								{step.title}
							</h3>
							<p className="mt-2 text-[13px] leading-relaxed text-slate-400">
								{step.description}
							</p>
						</div>
					))}
				</div>

				<div className="mt-10">
					<Link
						to="#contact"
						className="inline-flex h-12 items-center gap-2 rounded-lg bg-brand px-7 font-display text-[15px] font-semibold text-navy shadow-lg shadow-brand/25 transition-all hover:bg-brand-400 hover:shadow-brand/40 active:scale-[0.98]"
					>
						Talk to our team
						<ArrowRight className="h-4 w-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}
