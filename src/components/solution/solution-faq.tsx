import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import type { Solution } from '@/data/solutions';

export function SolutionFaq({ solution }: { solution: Solution }) {
	return (
		<section className="relative border-t border-slate-200/80 bg-white">
			<div className="relative mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 md:py-24">
				<div className="text-center">
					<p className="font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-700">
						FAQ
					</p>
					<h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl md:text-[2.25rem] md:leading-[1.1]">
						{solution.title} questions, answered
					</h2>
				</div>

				<Accordion type="single" collapsible className="mt-10 space-y-3">
					{solution.faq.map((item, i) => (
						<AccordionItem
							key={i}
							value={`item-${i}`}
							className="rounded-xl border border-slate-200/80 bg-[#F8FAFC] px-5 transition-colors data-[state=open]:border-brand/40 data-[state=open]:bg-white"
						>
							<AccordionTrigger className="text-left font-display text-[15px] font-semibold text-navy hover:no-underline sm:text-base">
								{item.question}
							</AccordionTrigger>
							<AccordionContent className="text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
								{item.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
