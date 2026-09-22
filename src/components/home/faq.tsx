import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '@/data/faq';
import { cn } from '@/lib/utils';

export function Faq() {
	const [open, setOpen] = useState<number | null>(0);

	return (
		<section id="faq" className="relative scroll-mt-24 overflow-hidden bg-[#F8FAFC]">
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b opacity-50"
			/>
			<span
				aria-hidden
				className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-brand/8 blur-3xl drift-slow"
			/>

			<div className="relative mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 md:py-28">
				<div className="text-center">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
						FAQ
					</p>
					<h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
						Answers to the{' '}
						<span className="text-brand">questions we hear most</span>.
					</h2>
					<p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
						Everything you need to know before starting a conversation. Still curious?
						Reach out — we reply within one business day.
					</p>
				</div>

				<div className="mt-12 overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
					{FAQ_ITEMS.map((item, i) => {
						const isOpen = open === i;
						return (
							<div
								key={item.question}
								className={cn(
									'border-b border-slate-200/80 last:border-b-0',
									isOpen && 'bg-brand/[0.03]',
								)}
							>
								<button
									type="button"
									aria-expanded={isOpen}
									onClick={() => setOpen(isOpen ? null : i)}
									className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-slate-50 sm:px-6"
								>
									<span
										className={cn(
											'grid h-8 w-8 shrink-0 place-items-center rounded-md border transition-colors',
											isOpen
												? 'border-brand/40 bg-brand text-white'
												: 'border-slate-200 bg-slate-50 text-navy',
										)}
									>
										{isOpen ? (
											<Minus className="h-4 w-4" />
										) : (
											<Plus className="h-4 w-4" />
										)}
									</span>
									<span className="min-w-0 flex-1 font-display text-[15px] font-semibold tracking-tight text-navy sm:text-base">
										{item.question}
									</span>
								</button>
								{isOpen && (
									<div className="px-5 pb-6 pl-[4.25rem] sm:px-6 sm:pl-[4.75rem]">
										<p className="text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
											{item.answer}
										</p>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
