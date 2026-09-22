import { Form, useActionData, useNavigation } from 'react-router';
import { ArrowRight, Loader2, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

type FieldErrors = {
	name?: string;
	email?: string;
	company?: string;
	subject?: string;
	message?: string;
};

type ContactActionResult = { ok?: boolean; errors?: FieldErrors } | undefined;

const SUBJECTS = [
	'General enquiry',
	'New project',
	'Partnership',
	'Careers',
	'Support',
	'Other',
];

function Field({
	label,
	name,
	type = 'text',
	placeholder,
	required,
	error,
	autoComplete,
}: {
	label: string;
	name: string;
	type?: string;
	placeholder?: string;
	required?: boolean;
	error?: string;
	autoComplete?: string;
}) {
	return (
		<div>
			<label htmlFor={name} className="block text-[13px] font-semibold text-navy">
				{label}
				{required && <span className="text-brand"> *</span>}
			</label>
			<input
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				required={required}
				autoComplete={autoComplete}
				aria-invalid={Boolean(error)}
				aria-describedby={error ? `${name}-error` : undefined}
				className={cn(
					'mt-2 h-12 w-full rounded-lg border bg-white px-4 text-[15px] text-navy placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/30',
					error ? 'border-red-400 focus:ring-red-300' : 'border-slate-300 focus:border-brand',
				)}
			/>
			{error && (
				<p id={`${name}-error`} className="mt-1.5 text-[13px] text-red-500">
					{error}
				</p>
			)}
		</div>
	);
}

export function ContactForm() {
	const actionData = useActionData() as ContactActionResult;
	const navigation = useNavigation();
	const errors = (actionData?.errors ?? {}) as FieldErrors;
	const isSubmitting = navigation.state === 'submitting';

	return (
		<section className="relative bg-white">
			<div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 md:py-24">
				<div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm sm:p-8 md:p-10">
					<div className="flex items-center gap-3">
						<span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
							<Send className="h-5 w-5" strokeWidth={1.8} />
						</span>
						<div>
							<h2 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
								Send us a message
							</h2>
							<p className="text-[13px] text-slate-500">
								Fields marked <span className="text-brand">*</span> are required.
							</p>
						</div>
					</div>

					<Form method="post" className="mt-8 space-y-5" noValidate>
						<div className="grid gap-5 sm:grid-cols-2">
							<Field
								label="Name"
								name="name"
								placeholder="Jane Doe"
								required
								error={errors.name}
								autoComplete="name"
							/>
							<Field
								label="Work email"
								name="email"
								type="email"
								placeholder="jane@company.com"
								required
								error={errors.email}
								autoComplete="email"
							/>
						</div>

						<div className="grid gap-5 sm:grid-cols-2">
							<Field
								label="Company"
								name="company"
								placeholder="Company name"
								error={errors.company}
								autoComplete="organization"
							/>
							<div>
								<label htmlFor="subject" className="block text-[13px] font-semibold text-navy">
									Subject
									<span className="text-brand"> *</span>
								</label>
								<select
									id="subject"
									name="subject"
									required
									defaultValue="General enquiry"
									aria-invalid={Boolean(errors.subject)}
									className={cn(
										'mt-2 h-12 w-full rounded-lg border bg-white px-4 text-[15px] text-navy transition-colors focus:outline-none focus:ring-2 focus:ring-brand/30',
										errors.subject ? 'border-red-400' : 'border-slate-300 focus:border-brand',
									)}
								>
									{SUBJECTS.map((subject) => (
										<option key={subject} value={subject}>
											{subject}
										</option>
									))}
								</select>
								{errors.subject && (
									<p className="mt-1.5 text-[13px] text-red-500">{errors.subject}</p>
								)}
							</div>
						</div>

						<div>
							<label htmlFor="message" className="block text-[13px] font-semibold text-navy">
								Message
								<span className="text-brand"> *</span>
							</label>
							<textarea
								id="message"
								name="message"
								rows={6}
								required
								placeholder="Tell us about your goals, current state and timeline…"
								aria-invalid={Boolean(errors.message)}
								aria-describedby={errors.message ? 'message-error' : undefined}
								className={cn(
									'mt-2 w-full rounded-lg border bg-white p-4 text-[15px] text-navy placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/30',
									errors.message ? 'border-red-400 focus:ring-red-300' : 'border-slate-300 focus:border-brand',
								)}
							/>
							{errors.message && (
								<p id="message-error" className="mt-1.5 text-[13px] text-red-500">
									{errors.message}
								</p>
							)}
						</div>

						<div className="flex flex-col-reverse items-stretch gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
							<p className="text-[13px] text-slate-500">
								We reply within one business day.
							</p>
							<button
								type="submit"
								disabled={isSubmitting}
								className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-7 font-display text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-600 hover:shadow-brand/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
							>
								{isSubmitting ? (
									<>
										<Loader2 className="h-4 w-4 animate-spin" />
										Sending…
									</>
								) : (
									<>
										Send message
										<ArrowRight className="h-4 w-4" />
									</>
								)}
							</button>
						</div>
					</Form>
				</div>
			</div>
		</section>
	);
}
