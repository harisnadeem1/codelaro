import { Target, Eye, Flag } from 'lucide-react';
import { ABOUT } from '@/data/company';

const PILLARS = [
	{
		icon: Flag,
		label: 'Purpose',
		text: ABOUT.purpose,
	},
	{
		icon: Target,
		label: 'Mission',
		text: ABOUT.mission,
	},
	{
		icon: Eye,
		label: 'Vision',
		text: ABOUT.vision,
	},
];

export function AboutMission() {
	return (
		<section className="relative bg-white">
			<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-40" />
			<div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
				<div className="max-w-2xl">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
						What drives us
					</p>
					<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
						Purpose, mission and vision.
					</h2>
					<p className="mt-4 text-[15px] leading-relaxed text-slate-500 sm:text-base">
						Three statements that anchor every decision we make — from the engagements
						we take on to the way we engineer and deliver.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
					{PILLARS.map((pillar) => (
						<div
							key={pillar.label}
							className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-7 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-navy/5"
						>
							<span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
								<pillar.icon className="h-5 w-5" strokeWidth={1.8} />
							</span>
							<h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-navy">
								{pillar.label}
							</h3>
							<p className="mt-3 text-[14px] leading-relaxed text-slate-600">
								{pillar.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
