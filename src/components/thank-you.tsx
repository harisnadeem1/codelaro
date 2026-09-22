import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight, CheckCircle2, Mail, Sparkles } from 'lucide-react';

export function ThankYou() {
	return (
		<main className="relative flex min-h-[100dvh] items-center overflow-hidden bg-navy">
			<span aria-hidden className="pointer-events-none absolute inset-0 bg-blueprint-grid-dark opacity-40" />
			<span
				aria-hidden
				className="drift-slow pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-brand/15 blur-3xl"
			/>
			<span
				aria-hidden
				className="drift-slow pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-brand/8 blur-3xl"
			/>

			<div className="relative mx-auto w-full max-w-2xl px-5 py-24 text-center sm:px-8">
				<div className="rise-in mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/15 ring-1 ring-brand/30">
					<CheckCircle2 className="h-8 w-8 text-brand" strokeWidth={2} />
				</div>

				<p
					className="rise-in mt-7 font-mono text-[12px] font-semibold uppercase tracking-[0.24em] text-brand"
					style={{ animationDelay: '0.1s' }}
				>
					Message received
				</p>

				<h1
					className="rise-in mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[3.25rem] md:leading-[1.05]"
					style={{ animationDelay: '0.2s' }}
				>
					Thank you — <span className="text-brand">we will be in touch.</span>
				</h1>

				<p
					className="rise-in mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
					style={{ animationDelay: '0.32s' }}
				>
					Your message is on its way to our team. We read every enquiry personally and
					reply within one business day. In the meantime, explore what we build or reach
					out directly.
				</p>

				<div
					className="rise-in mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
					style={{ animationDelay: '0.44s' }}
				>
					<Link
						to="/"
						className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-7 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/40 active:scale-[0.98] sm:w-auto"
					>
						Back to home
						<ArrowRight className="h-4 w-4" />
					</Link>
					<Link
						to="/work"
						className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-7 font-display text-[15px] font-semibold text-white transition-all hover:border-brand hover:bg-brand/10 hover:text-brand active:scale-[0.98] sm:w-auto"
					>
						Explore our work
						<ArrowUpRight className="h-4 w-4 text-brand" />
					</Link>
				</div>

				<div
					className="rise-in mt-12 grid gap-3 sm:grid-cols-2"
					style={{ animationDelay: '0.56s' }}
				>
					<a
						href="mailto:hello@codelaro.com"
						className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left transition-colors hover:border-brand/40 hover:bg-brand/[0.06]"
					>
						<span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
							<Mail className="h-5 w-5" strokeWidth={1.8} />
						</span>
						<span>
							<span className="block text-[13px] font-semibold text-white">Email us directly</span>
							<span className="block text-[13px] text-slate-400">hello@codelaro.com</span>
						</span>
					</a>
					<Link
						to="/book-a-consultation"
						className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left transition-colors hover:border-brand/40 hover:bg-brand/[0.06]"
					>
						<span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
							<Sparkles className="h-5 w-5" strokeWidth={1.8} />
						</span>
						<span>
							<span className="block text-[13px] font-semibold text-white">Prefer to talk?</span>
							<span className="block text-[13px] text-slate-400">Book a consultation</span>
						</span>
					</Link>
				</div>

				<p className="mt-10 text-[13px] text-slate-500">
					Code. Launch. Grow. — we reply within one business day.
				</p>
			</div>
		</main>
	);
}
