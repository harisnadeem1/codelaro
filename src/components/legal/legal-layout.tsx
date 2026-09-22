import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight, Check, FileText } from 'lucide-react';
import type { LegalDocument } from '@/data/legal';
import { cn } from '@/lib/utils';

/**
 * Shared layout for policy and statement pages: a hero, a sticky table of
 * contents on desktop, and the editable content sections. The content is a
 * structural placeholder — not final legal text.
 */
export function LegalLayout({ document }: { document: LegalDocument }) {
	const [activeId, setActiveId] = useState<string>(document.sections[0]?.id ?? '');

	return (
		<main>
			{/* Hero */}
			<section className="relative overflow-hidden bg-[#F8FAFC]">
				<div className="pointer-events-none absolute inset-0 bg-blueprint-grid mask-fade-b" />
				<div className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-brand/12 blur-3xl" />
				<div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

				<div className="relative mx-auto w-full max-w-4xl px-5 pb-20 pt-32 sm:px-8 md:pt-40">
					<div className="rise-in inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
						<FileText className="h-3.5 w-3.5 text-brand" strokeWidth={2} />
						<span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-700">
							{document.eyebrow}
						</span>
					</div>

					<h1 className="rise-in mt-6 font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-navy sm:text-4xl md:text-[3rem] md:leading-[1.06]">
						{document.title}
					</h1>

					<p className="rise-in mt-5 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
						{document.intro}
					</p>

					<p className="rise-in mt-6 font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-400">
						Last updated · {document.lastUpdated}
					</p>
				</div>
			</section>

			{/* Body: TOC + content */}
			<section className="relative bg-white">
				<div className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 md:py-24">
					<div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
						{/* Table of contents */}
						<aside className="lg:col-span-4">
							<div className="lg:sticky lg:top-28">
								<p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
									On this page
								</p>
								<nav aria-label="Table of contents" className="mt-4">
									<ul className="space-y-1 border-l border-slate-200">
										{document.sections.map((section) => {
											const isActive = activeId === section.id;
											return (
												<li key={section.id}>
													<a
														href={`#${section.id}`}
														onClick={() => setActiveId(section.id)}
														className={cn(
															'-ml-px block border-l-2 py-2 pl-4 text-[14px] font-medium transition-colors',
															isActive
																? 'border-brand text-navy'
																: 'border-transparent text-slate-500 hover:border-slate-300 hover:text-navy',
														)}
													>
														{section.heading}
													</a>
												</li>
											);
										})}
									</ul>
								</nav>

								<div className="mt-8 hidden rounded-xl border border-slate-200 bg-[#F8FAFC] p-5 lg:block">
									<p className="font-display text-sm font-semibold text-navy">
										Need to talk to us?
									</p>
									<p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">
										We reply within one business day.
									</p>
									<Link
										to="/contact"
										className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
									>
										Contact us
										<ArrowRight className="h-4 w-4" />
									</Link>
								</div>
							</div>
						</aside>

						{/* Content */}
						<div className="lg:col-span-8">
							<div className="space-y-12">
								{document.sections.map((section) => (
									<section key={section.id} id={section.id} className="scroll-mt-28">
										<h2 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
											{section.heading}
										</h2>
										<div className="mt-4 space-y-4">
											{section.body.map((paragraph, i) => (
												<p
													key={i}
													className="text-[15px] leading-relaxed text-slate-600 sm:text-base"
												>
													{paragraph}
												</p>
											))}
										</div>
									</section>
								))}
							</div>

							{/* Placeholder notice */}
							<div className="mt-12 rounded-xl border border-brand/20 bg-brand/[0.04] p-5">
								<div className="flex items-start gap-3">
									<span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-brand/10 text-brand">
										<Check className="h-4 w-4" strokeWidth={2.2} />
									</span>
									<p className="text-[13px] leading-relaxed text-slate-600">
										This page is a professional, editable structure — not final legal
										advice. Replace each section with reviewed, jurisdiction-appropriate
										language and have a qualified legal advisor finalize it before
										publication.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="relative overflow-hidden bg-navy">
				<span aria-hidden className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-40" />
				<span
					aria-hidden
					className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-brand/15 blur-3xl"
				/>
				<div className="relative mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-8 md:py-28">
					<h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
						Questions about this <span className="text-brand">policy</span>?
					</h2>
					<p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400">
						We are happy to clarify anything in this document. Reach out and we will
						respond within one business day.
					</p>
					<div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<Link
							to="/contact"
							className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-7 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/40 active:scale-[0.98] sm:w-auto"
						>
							Contact us
							<ArrowRight className="h-4 w-4" />
						</Link>
						<Link
							to="/"
							className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-7 font-display text-[15px] font-semibold text-white transition-all hover:border-brand hover:bg-brand/10 hover:text-brand active:scale-[0.98] sm:w-auto"
						>
							Back to home
							<ArrowUpRight className="h-4 w-4 text-brand" />
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
