import { useState } from 'react';
import { useFetcher } from 'react-router';
import {
	ArrowLeft,
	ArrowRight,
	Building2,
	Check,
	ClipboardList,
	Loader2,
	Link2,
	Mail,
	Target,
	User,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type FieldErrors = Record<string, string>;

const PROJECT_TYPES = [
	'New product / MVP',
	'Web application',
	'Mobile app',
	'SaaS platform',
	'E-commerce store',
	'AI / Automation',
	'Legacy modernization',
	'Other',
];

const SERVICES = [
	'Web Development',
	'Mobile Development',
	'Cloud & DevOps',
	'UI/UX Design',
	'AI & Automation',
	'Custom Software',
	'E-commerce',
	'API & Integration',
	'Data & Analytics',
	'Maintenance & Support',
];

const BUDGET_RANGES = [
	'Under $10k',
	'$10k – $25k',
	'$25k – $50k',
	'$50k – $100k',
	'$100k+',
	'Not sure yet',
];

const TIMELINES = [
	'ASAP (within weeks)',
	'1 – 3 months',
	'3 – 6 months',
	'6+ months',
	'Flexible',
];

const STEPS = [
	{ id: 1, label: 'About you', icon: User },
	{ id: 2, label: 'Project', icon: Target },
	{ id: 3, label: 'Details', icon: ClipboardList },
];

function StepIndicator({ current }: { current: number }) {
	return (
		<ol className="flex items-center gap-2 sm:gap-3">
			{STEPS.map((step, i) => {
				const isDone = current > step.id;
				const isActive = current === step.id;
				return (
					<li key={step.id} className="flex flex-1 items-center gap-2 sm:gap-3">
						<div className="flex items-center gap-2.5">
							<span
								className={cn(
									'grid h-9 w-9 shrink-0 place-items-center rounded-lg border transition-colors',
									isActive
										? 'border-brand bg-brand text-white'
										: isDone
											? 'border-brand/40 bg-brand/10 text-brand'
											: 'border-slate-200 bg-white text-slate-400',
								)}
							>
								{isDone ? <Check className="h-4 w-4" strokeWidth={2.4} /> : <step.icon className="h-4 w-4" strokeWidth={1.8} />}
							</span>
							<span
								className={cn(
									'hidden text-[13px] font-semibold sm:block',
									isActive ? 'text-navy' : isDone ? 'text-brand' : 'text-slate-400',
								)}
							>
								{step.label}
							</span>
						</div>
						{i < STEPS.length - 1 && (
							<span
								className={cn(
									'h-px flex-1 transition-colors',
									current > step.id ? 'bg-brand/40' : 'bg-slate-200',
								)}
							/>
						)}
					</li>
				);
			})}
		</ol>
	);
}

function ChoiceChip({
	label,
	selected,
	onClick,
}: {
	label: string;
	selected: boolean;
	onClick: () => void;
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			aria-pressed={selected}
			className={cn(
				'flex items-center justify-center rounded-lg border px-4 py-3 text-[14px] font-semibold transition-all active:scale-[0.98]',
				selected
					? 'border-brand bg-brand/10 text-brand'
					: 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50',
			)}
		>
			{selected && <Check className="mr-1.5 h-4 w-4" strokeWidth={2.2} />}
			{label}
		</button>
	);
}

export function StartProjectForm() {
	const fetcher = useFetcher();
	const [step, setStep] = useState(1);
	const [form, setForm] = useState({
		name: '',
		email: '',
		company: '',
		projectType: '',
		services: [] as string[],
		description: '',
		budget: '',
		timeline: '',
		referenceUrl: '',
	});
	const [stepErrors, setStepErrors] = useState<FieldErrors>({});

	const errors = ((fetcher.data as { errors?: FieldErrors } | null)?.errors ?? {}) as FieldErrors;
	const isSubmitting = fetcher.state === 'submitting';

	const update = (key: keyof typeof form, value: string) => {
		setForm((prev) => ({ ...prev, [key]: value }));
		setStepErrors((prev) => ({ ...prev, [key]: '' }));
	};

	const toggleService = (service: string) => {
		setForm((prev) => ({
			...prev,
			services: prev.services.includes(service)
				? prev.services.filter((s) => s !== service)
				: [...prev.services, service],
		}));
		setStepErrors((prev) => ({ ...prev, services: '' }));
	};

	const validateStep = (current: number): boolean => {
		const next: FieldErrors = {};
		if (current === 1) {
			if (!form.name.trim()) next.name = 'Please enter your name.';
			if (!form.email.trim()) {
				next.email = 'Please enter your email.';
			} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
				next.email = 'Please enter a valid email address.';
			}
		}
		if (current === 2) {
			if (!form.projectType) next.projectType = 'Please choose a project type.';
			if (form.services.length === 0) next.services = 'Select at least one service.';
		}
		if (current === 3) {
			if (!form.description.trim()) {
				next.description = 'Please describe your project.';
			} else if (form.description.trim().length < 20) {
				next.description = 'A few more details would help us reply well.';
			}
			if (!form.budget) next.budget = 'Please choose a budget range.';
			if (!form.timeline) next.timeline = 'Please choose a timeline.';
			if (form.referenceUrl.trim() && !/^https?:\/\/.+/i.test(form.referenceUrl.trim())) {
				next.referenceUrl = 'Please enter a valid URL (https://…).';
			}
		}
		setStepErrors(next);
		return Object.keys(next).length === 0;
	};

	const next = () => {
		if (validateStep(step) && step < STEPS.length) setStep(step + 1);
	};
	const back = () => {
		if (step > 1) setStep(step - 1);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		if (!validateStep(3)) {
			e.preventDefault();
			return;
		}
		// Let the fetcher submit the form data to the action.
	};

	return (
		<section className="relative bg-white">
			<div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 md:py-24">
				<div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm sm:p-8 md:p-10">
					<StepIndicator current={step} />

					<fetcher.Form method="post" onSubmit={handleSubmit} className="mt-8" noValidate>
						{/* Hidden fields carry every step's data on final submit */}
						<input type="hidden" name="name" value={form.name} />
						<input type="hidden" name="email" value={form.email} />
						<input type="hidden" name="company" value={form.company} />
						<input type="hidden" name="projectType" value={form.projectType} />
						<input type="hidden" name="services" value={form.services.join(', ')} />
						<input type="hidden" name="budget" value={form.budget} />
						<input type="hidden" name="timeline" value={form.timeline} />
						<input type="hidden" name="referenceUrl" value={form.referenceUrl} />

						{/* Step 1 — About you */}
						{step === 1 && (
							<div className="space-y-5">
								<div>
									<h2 className="font-display text-xl font-bold tracking-tight text-navy">
										Tell us about you
									</h2>
									<p className="mt-1 text-[14px] text-slate-500">
										So we know who we are talking to and where to reply.
									</p>
								</div>

								<div>
									<label htmlFor="sp-name" className="block text-[13px] font-semibold text-navy">
										Name <span className="text-brand">*</span>
									</label>
									<div className="relative mt-2">
										<User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={1.8} />
										<input
											id="sp-name"
											name="sp-name"
											type="text"
											value={form.name}
											onChange={(e) => update('name', e.target.value)}
											placeholder="Jane Doe"
											autoComplete="name"
											aria-invalid={Boolean(stepErrors.name)}
											className={cn(
												'h-12 w-full rounded-lg border bg-white pl-10 pr-4 text-[15px] text-navy placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/30',
												stepErrors.name ? 'border-red-400' : 'border-slate-300 focus:border-brand',
											)}
										/>
									</div>
									{stepErrors.name && <p className="mt-1.5 text-[13px] text-red-500">{stepErrors.name}</p>}
								</div>

								<div>
									<label htmlFor="sp-email" className="block text-[13px] font-semibold text-navy">
										Email <span className="text-brand">*</span>
									</label>
									<div className="relative mt-2">
										<Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={1.8} />
										<input
											id="sp-email"
											name="sp-email"
											type="email"
											value={form.email}
											onChange={(e) => update('email', e.target.value)}
											placeholder="jane@company.com"
											autoComplete="email"
											aria-invalid={Boolean(stepErrors.email)}
											className={cn(
												'h-12 w-full rounded-lg border bg-white pl-10 pr-4 text-[15px] text-navy placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/30',
												stepErrors.email ? 'border-red-400' : 'border-slate-300 focus:border-brand',
											)}
										/>
									</div>
									{stepErrors.email && <p className="mt-1.5 text-[13px] text-red-500">{stepErrors.email}</p>}
								</div>

								<div>
									<label htmlFor="sp-company" className="block text-[13px] font-semibold text-navy">
										Company <span className="text-slate-400">(optional)</span>
									</label>
									<div className="relative mt-2">
										<Building2 className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={1.8} />
										<input
											id="sp-company"
											name="sp-company"
											type="text"
											value={form.company}
											onChange={(e) => update('company', e.target.value)}
											placeholder="Company name"
											autoComplete="organization"
											className="h-12 w-full rounded-lg border border-slate-300 bg-white pl-10 pr-4 text-[15px] text-navy placeholder:text-slate-400 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
										/>
									</div>
								</div>
							</div>
						)}

						{/* Step 2 — Project */}
						{step === 2 && (
							<div className="space-y-6">
								<div>
									<h2 className="font-display text-xl font-bold tracking-tight text-navy">
										About the project
									</h2>
									<p className="mt-1 text-[14px] text-slate-500">
										What are you building, and which disciplines do you need?
									</p>
								</div>

								<div>
									<p className="text-[13px] font-semibold text-navy">
										Project type <span className="text-brand">*</span>
									</p>
									<div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-2">
										{PROJECT_TYPES.map((type) => (
											<ChoiceChip
												key={type}
												label={type}
												selected={form.projectType === type}
												onClick={() => update('projectType', type)}
											/>
										))}
									</div>
									{stepErrors.projectType && <p className="mt-2 text-[13px] text-red-500">{stepErrors.projectType}</p>}
								</div>

								<div>
									<p className="text-[13px] font-semibold text-navy">
										Services needed <span className="text-brand">*</span>
									</p>
									<p className="mt-1 text-[12px] text-slate-400">Select all that apply.</p>
									<div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
										{SERVICES.map((service) => (
											<ChoiceChip
												key={service}
												label={service}
												selected={form.services.includes(service)}
												onClick={() => toggleService(service)}
											/>
										))}
									</div>
									{stepErrors.services && <p className="mt-2 text-[13px] text-red-500">{stepErrors.services}</p>}
								</div>
							</div>
						)}

						{/* Step 3 — Details */}
						{step === 3 && (
							<div className="space-y-6">
								<div>
									<h2 className="font-display text-xl font-bold tracking-tight text-navy">
										The details
									</h2>
									<p className="mt-1 text-[14px] text-slate-500">
										A few specifics so we can come back with a useful response.
									</p>
								</div>

								<div>
									<label htmlFor="sp-description" className="block text-[13px] font-semibold text-navy">
										Project description <span className="text-brand">*</span>
									</label>
									<textarea
										id="sp-description"
										name="sp-description"
										rows={5}
										value={form.description}
										onChange={(e) => update('description', e.target.value)}
										placeholder="What are you building, who is it for, and what does success look like?"
										aria-invalid={Boolean(stepErrors.description || errors.description)}
										className={cn(
											'mt-2 w-full rounded-lg border bg-white p-4 text-[15px] text-navy placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/30',
											stepErrors.description || errors.description ? 'border-red-400' : 'border-slate-300 focus:border-brand',
										)}
									/>
									{(stepErrors.description || errors.description) && (
										<p className="mt-1.5 text-[13px] text-red-500">{stepErrors.description || errors.description}</p>
									)}
								</div>

								<div className="grid gap-6 sm:grid-cols-2">
									<div>
										<p className="text-[13px] font-semibold text-navy">
											Budget range <span className="text-brand">*</span>
										</p>
										<div className="mt-3 grid grid-cols-2 gap-2.5">
											{BUDGET_RANGES.map((range) => (
												<ChoiceChip
													key={range}
													label={range}
													selected={form.budget === range}
													onClick={() => update('budget', range)}
												/>
											))}
										</div>
										{stepErrors.budget && <p className="mt-2 text-[13px] text-red-500">{stepErrors.budget}</p>}
									</div>

									<div>
										<p className="text-[13px] font-semibold text-navy">
											Timeline <span className="text-brand">*</span>
										</p>
										<div className="mt-3 grid grid-cols-1 gap-2.5">
											{TIMELINES.map((timeline) => (
												<ChoiceChip
													key={timeline}
													label={timeline}
													selected={form.timeline === timeline}
													onClick={() => update('timeline', timeline)}
												/>
											))}
										</div>
										{stepErrors.timeline && <p className="mt-2 text-[13px] text-red-500">{stepErrors.timeline}</p>}
									</div>
								</div>

								<div>
									<label htmlFor="sp-reference" className="block text-[13px] font-semibold text-navy">
										Reference URL <span className="text-slate-400">(optional)</span>
									</label>
									<div className="relative mt-2">
										<Link2 className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={1.8} />
										<input
											id="sp-reference"
											name="sp-reference"
											type="url"
											value={form.referenceUrl}
											onChange={(e) => update('referenceUrl', e.target.value)}
											placeholder="https://your-product.com or a reference"
											className={cn(
												'h-12 w-full rounded-lg border bg-white pl-10 pr-4 text-[15px] text-navy placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/30',
												stepErrors.referenceUrl ? 'border-red-400' : 'border-slate-300 focus:border-brand',
											)}
										/>
									</div>
									{stepErrors.referenceUrl && <p className="mt-1.5 text-[13px] text-red-500">{stepErrors.referenceUrl}</p>}
								</div>
							</div>
						)}

						{/* Navigation */}
						<div className="mt-8 flex items-center justify-between gap-3 border-t border-slate-200 pt-6">
							<button
								type="button"
								onClick={back}
								disabled={step === 1 || isSubmitting}
								className="flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 font-display text-[15px] font-semibold text-navy transition-all hover:bg-slate-50 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
							>
								<ArrowLeft className="h-4 w-4" />
								Back
							</button>

							{step < STEPS.length ? (
								<button
									type="button"
									onClick={next}
									className="flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-7 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/40 active:scale-[0.98]"
								>
									Continue
									<ArrowRight className="h-4 w-4" />
								</button>
							) : (
								<button
									type="submit"
									disabled={isSubmitting}
									className="flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-7 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
								>
									{isSubmitting ? (
										<>
											<Loader2 className="h-4 w-4 animate-spin" />
											Submitting…
										</>
									) : (
										<>
											Submit project brief
											<ArrowRight className="h-4 w-4" />
										</>
									)}
								</button>
							)}
						</div>
					</fetcher.Form>
				</div>
			</div>
		</section>
	);
}
