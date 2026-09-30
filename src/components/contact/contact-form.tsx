import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowUpRight, Check, ChevronDown, Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';
import { SERVICES } from '@/data/services';
import { SOLUTIONS } from '@/data/solutions';

type EnquiryType =
	| ''
	| 'general'
	| 'services'
	| 'solutions'
	| 'partnership'
	| 'careers'
	| 'support'
	| 'other';

type FieldErrors = {
	name?: string;
	email?: string;
	company?: string;
	subject?: string;
	selection?: string;
	message?: string;
};

type SelectOption = {
	value: string;
	label: string;
};

const ENQUIRY_TYPES: SelectOption[] = [
	{ value: 'general', label: 'General Enquiry' },
	{ value: 'services', label: 'Services' },
	{ value: 'solutions', label: 'Solutions' },
	{ value: 'partnership', label: 'Partnership' },
	{ value: 'careers', label: 'Careers' },
	{ value: 'support', label: 'Support' },
	{ value: 'other', label: 'Other' },
];

const SERVICE_OPTIONS: SelectOption[] = SERVICES.map((service) => ({
	value: service.title,
	label: service.title,
}));

const SOLUTION_OPTIONS: SelectOption[] = SOLUTIONS.map((solution) => ({
	value: solution.title,
	label: solution.title,
}));

const fieldBase = cn(
	'w-full',
	'rounded-xl',
	'border border-slate-200',
	'bg-[#F8FAFC]',
	'px-4',
	'text-base',
	'text-navy',
	'placeholder:text-slate-400',
	'outline-none',
	'transition-all duration-200',
	'hover:border-slate-300',
	'focus:border-brand',
	'focus:bg-white',
	'focus:ring-[3px]',
	'focus:ring-brand/10',
	'disabled:cursor-not-allowed',
	'disabled:opacity-60'
);

const labelBase = cn(
	'mb-2 block',
	'text-[13px]',
	'font-semibold',
	'text-navy'
);

const errorBase =
	'border-red-400 focus:border-red-400 focus:ring-red-100';

type InputFieldProps = {
	label: string;
	name: string;
	type?: string;
	placeholder?: string;
	required?: boolean;
	error?: string;
	autoComplete?: string;
	maxLength?: number;
};

function InputField({
	label,
	name,
	type = 'text',
	placeholder,
	required = false,
	error,
	autoComplete,
	maxLength = 100,
}: InputFieldProps) {
	return (
		<div className="min-w-0">
			<label htmlFor={name} className={labelBase}>
				{label}

				{required && (
					<span className="ml-1 text-brand" aria-hidden="true">
						*
					</span>
				)}
			</label>

			<input
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				required={required}
				maxLength={maxLength}
				autoComplete={autoComplete}
				aria-required={required}
				aria-invalid={Boolean(error)}
				aria-describedby={error ? `${name}-error` : undefined}
				className={cn(
					fieldBase,
					'h-[52px]',
					error && errorBase
				)}
			/>

			{error && (
				<p
					id={`${name}-error`}
					role="alert"
					className="mt-1.5 text-xs text-red-500"
				>
					{error}
				</p>
			)}
		</div>
	);
}

type SelectFieldProps = {
	label: string;
	name: string;
	value: string;
	onChange: (value: string) => void;
	options: readonly SelectOption[];
	placeholder: string;
	required?: boolean;
	error?: string;
};

function SelectField({
	label,
	name,
	value,
	onChange,
	options,
	placeholder,
	required = false,
	error,
}: SelectFieldProps) {
	return (
		<div className="min-w-0">
			<label htmlFor={name} className={labelBase}>
				{label}

				{required && (
					<span className="ml-1 text-brand" aria-hidden="true">
						*
					</span>
				)}
			</label>

			<div className="relative">
				<select
					id={name}
					name={name}
					value={value}
					onChange={(event) => onChange(event.target.value)}
					required={required}
					aria-required={required}
					aria-invalid={Boolean(error)}
					aria-describedby={
						error ? `${name}-error` : undefined
					}
					className={cn(
						fieldBase,
						'h-[52px]',
						'appearance-none',
						'cursor-pointer',
						'pr-11',
						!value && 'text-slate-400',
						error && errorBase
					)}
				>
					<option value="" disabled>
						{placeholder}
					</option>

					{options.map((option) => (
						<option
							key={option.value}
							value={option.value}
							className="text-navy"
						>
							{option.label}
						</option>
					))}
				</select>

				<ChevronDown
					aria-hidden="true"
					strokeWidth={1.8}
					className="
						pointer-events-none
						absolute
						right-4
						top-1/2
						h-[18px]
						w-[18px]
						-translate-y-1/2
						text-slate-400
					"
				/>
			</div>

			{error && (
				<p
					id={`${name}-error`}
					role="alert"
					className="mt-1.5 text-xs text-red-500"
				>
					{error}
				</p>
			)}
		</div>
	);
}

export function ContactForm() {
	const formRef = useRef<HTMLFormElement>(null);


	const [enquiryType, setEnquiryType] =
		useState<EnquiryType>('');

	const [selectedOffering, setSelectedOffering] =
		useState('');

	const [errors, setErrors] =
		useState<FieldErrors>({});

	const [submitError, setSubmitError] =
		useState<string | null>(null);

	const [isSubmitting, setIsSubmitting] =
		useState(false);

	const [isSuccess, setIsSuccess] =
		useState(false);

	const showOffering =
		enquiryType === 'services' ||
		enquiryType === 'solutions';

	const offeringOptions =
		enquiryType === 'services'
			? SERVICE_OPTIONS
			: SOLUTION_OPTIONS;

	const handleEnquiryChange = (value: string) => {
		setEnquiryType(value as EnquiryType);
		setSelectedOffering('');

		setErrors((current) => ({
			...current,
			subject: undefined,
			selection: undefined,
		}));
	};

	const validateForm = (
		formData: FormData
	): FieldErrors => {
		const validationErrors: FieldErrors = {};

		const name = String(
			formData.get('name') ?? ''
		).trim();

		const email = String(
			formData.get('email') ?? ''
		).trim();

		const subject = String(
			formData.get('subject') ?? ''
		).trim();

		const selection = String(
			formData.get('selection') ?? ''
		).trim();

		const message = String(
			formData.get('message') ?? ''
		).trim();

		if (!name) {
			validationErrors.name =
				'Please enter your full name.';
		}

		if (!email) {
			validationErrors.email =
				'Please enter your email address.';
		} else if (
			!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
		) {
			validationErrors.email =
				'Please enter a valid email address.';
		}

		if (!subject) {
			validationErrors.subject =
				'Please select an enquiry type.';
		}

		if (
			(subject === 'services' ||
				subject === 'solutions') &&
			!selection
		) {
			validationErrors.selection =
				'Please select an option.';
		}

		if (!message) {
			validationErrors.message =
				'Please enter your message.';
		} else if (message.length < 10) {
			validationErrors.message =
				'Your message must be at least 10 characters.';
		} else if (message.length > 5000) {
			validationErrors.message =
				'Your message must be less than 5,000 characters.';
		}

		return validationErrors;
	};

	const handleSubmit = async (
	event: FormEvent<HTMLFormElement>
) => {
	event.preventDefault();


	if (isSubmitting) {
		return;
	}

	setSubmitError(null);
	setIsSuccess(false);

	const form = event.currentTarget;
	const formData = new FormData(form);


	const honeypot = String(
	formData.get('contact_reference') ?? ''
).trim();


if (honeypot) {
	console.warn('Submission blocked by honeypot.');

	return;
}

	if (honeypot) {
	console.warn(
		'Submission blocked by honeypot:',
		honeypot
	);

	return;
}


	const validationErrors =
		validateForm(formData);

	

	if (Object.keys(validationErrors).length > 0) {
		

		setErrors(validationErrors);
		return;
	}

	

	setErrors({});
	setIsSubmitting(true);

	const serviceId =
		import.meta.env.VITE_EMAILJS_SERVICE_ID;

	const templateId =
		import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

	const publicKey =
		import.meta.env.VITE_EMAILJS_PUBLIC_KEY;



	if (!serviceId || !templateId || !publicKey) {
		console.error(
			'STOPPED: EmailJS environment variables missing'
		);

		setSubmitError(
			'Email configuration is currently unavailable.'
		);

		setIsSubmitting(false);
		return;
	}

	const subjectValue = String(
		formData.get('subject') ?? ''
	);

	const subjectLabel =
		ENQUIRY_TYPES.find(
			(option) =>
				option.value === subjectValue
		)?.label ?? subjectValue;

	const templateParams = {
		name: String(
			formData.get('name') ?? ''
		).trim(),

		email: String(
			formData.get('email') ?? ''
		).trim(),

		company:
			String(
				formData.get('company') ?? ''
			).trim() || 'Not provided',

		subject: subjectLabel,

		selection:
			String(
				formData.get('selection') ?? ''
			).trim() || 'Not applicable',

		message: String(
			formData.get('message') ?? ''
		).trim(),
	};

	

	try {
		const response = await emailjs.send(
			serviceId,
			templateId,
			templateParams,
			{
				publicKey,
			}
		);

		

		form.reset();

		setEnquiryType('');
		setSelectedOffering('');
		setErrors({});
		setIsSuccess(true);
	} catch (error) {
		console.error(
			'8. EMAILJS FAILED:',
			error
		);

		setSubmitError(
			'We could not send your message. Please try again or contact us directly.'
		);
	} finally {
		setIsSubmitting(false);
	}
};

	return (
		<div
			id="contact-form"
			className="
				relative
				w-full
				min-w-0
				scroll-mt-28
			"
		>
			<div
				aria-hidden="true"
				className="
					pointer-events-none
					absolute
					-inset-5
					rounded-[40px]
					bg-brand/[0.035]
					blur-3xl
					sm:-inset-8
				"
			/>

			<div
				className="
					relative
					overflow-hidden
					rounded-[24px]
					border border-navy/[0.08]
					bg-white
					shadow-[0_24px_80px_-32px_rgba(15,23,42,0.16)]
					sm:rounded-[30px]
				"
			>
				<div
					aria-hidden="true"
					className="
						absolute
						inset-x-0
						top-0
						h-[3px]
						bg-gradient-to-r
						from-brand/30
						via-brand
						to-brand/30
					"
				/>

				<div
					className="
						p-5
						sm:p-7
						lg:p-8
						xl:p-9
					"
				>
					{submitError && (
						<div
							role="alert"
							className="
								mb-6
								rounded-xl
								border border-red-200
								bg-red-50
								p-4
								text-sm
								leading-relaxed
								text-red-700
							"
						>
							{submitError}
						</div>
					)}

					{isSuccess && (
						<div
							role="status"
							className="
								mb-6
								flex
								items-start
								gap-3
								rounded-xl
								border
								border-brand/20
								bg-brand/[0.06]
								p-4
							"
						>
							<div
								className="
									flex
									h-8
									w-8
									shrink-0
									items-center
									justify-center
									rounded-full
									bg-brand
									text-white
								"
							>
								<Check
									aria-hidden="true"
									className="h-4 w-4"
									strokeWidth={2.2}
								/>
							</div>

							<div>
								<p className="text-sm font-semibold text-navy">
									Message sent successfully.
								</p>

								<p className="mt-1 text-[13px] leading-relaxed text-slate-500">
									Thanks for reaching out. We've
									received your enquiry and will get
									back to you as soon as possible.
								</p>
							</div>
						</div>
					)}

					<form
						ref={formRef}
						onSubmit={handleSubmit}
						noValidate
						className="space-y-5"
					>
					<div
	aria-hidden="true"
	className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
>
	<label htmlFor="contact_reference">
		Do not fill this field
	</label>

	<input
		id="contact_reference"
		name="contact_reference"
		type="text"
		tabIndex={-1}
		autoComplete="new-password"
	/>
</div>

						<div
							className="
								grid
								grid-cols-1
								gap-5
								sm:grid-cols-2
							"
						>
							<InputField
								label="Full name"
								name="name"
								placeholder="Your full name"
								required
								error={errors.name}
								autoComplete="name"
								maxLength={100}
							/>

							<InputField
								label="Email address"
								name="email"
								type="email"
								placeholder="you@company.com"
								required
								error={errors.email}
								autoComplete="email"
								maxLength={254}
							/>
						</div>

						<div
							className="
								grid
								grid-cols-1
								gap-5
								sm:grid-cols-2
							"
						>
							<InputField
								label="Company"
								name="company"
								placeholder="Your company"
								error={errors.company}
								autoComplete="organization"
								maxLength={150}
							/>

							<SelectField
								label="What can we help you with?"
								name="subject"
								value={enquiryType}
								onChange={handleEnquiryChange}
								options={ENQUIRY_TYPES}
								placeholder="Select enquiry type"
								required
								error={errors.subject}
							/>
						</div>

						{showOffering && (
							<div
								className="
									animate-in
									fade-in
									slide-in-from-top-2
									duration-300
									motion-reduce:animate-none
								"
							>
								<SelectField
									key={enquiryType}
									label={
										enquiryType === 'services'
											? 'Which service are you interested in?'
											: 'Which solution are you interested in?'
									}
									name="selection"
									value={selectedOffering}
									onChange={setSelectedOffering}
									options={offeringOptions}
									placeholder={
										enquiryType === 'services'
											? 'Select a service'
											: 'Select a solution'
									}
									required
									error={errors.selection}
								/>
							</div>
						)}

						<div>
							<label
								htmlFor="message"
								className={labelBase}
							>
								Your message

								<span
									className="ml-1 text-brand"
									aria-hidden="true"
								>
									*
								</span>
							</label>

							<textarea
								id="message"
								name="message"
								rows={5}
								required
								minLength={10}
								maxLength={5000}
								placeholder="Tell us about your idea, requirements, goals, or timeline..."
								aria-required="true"
								aria-invalid={Boolean(
									errors.message
								)}
								aria-describedby={
									errors.message
										? 'message-error'
										: undefined
								}
								className={cn(
									fieldBase,
									'min-h-[140px]',
									'resize-y',
									'py-3.5',
									errors.message &&
										errorBase
								)}
							/>

							{errors.message && (
								<p
									id="message-error"
									role="alert"
									className="
										mt-1.5
										text-xs
										text-red-500
									"
								>
									{errors.message}
								</p>
							)}
						</div>

						<div className="pt-1">
							<button
								type="submit"
								disabled={isSubmitting}
								className="
									group
									flex
									h-[54px]
									w-full
									items-center
									justify-center
									gap-2.5
									rounded-xl
									bg-brand
									px-6
									font-display
									text-base
									font-semibold
									text-white
									shadow-[0_8px_24px_-8px_rgba(24,188,183,0.45)]
									transition-all
									duration-300
									hover:-translate-y-0.5
									hover:bg-brand-600
									hover:shadow-[0_12px_30px_-8px_rgba(24,188,183,0.5)]
									active:translate-y-0
									focus-visible:outline-none
									focus-visible:ring-[3px]
									focus-visible:ring-brand/30
									focus-visible:ring-offset-2
									disabled:cursor-not-allowed
									disabled:opacity-65
									disabled:hover:translate-y-0
									motion-reduce:transition-none
								"
							>
								{isSubmitting ? (
									<>
										<Loader2
											aria-hidden="true"
											className="
												h-5
												w-5
												animate-spin
											"
										/>

										Sending message...
									</>
								) : (
									<>
										Send your message

										<ArrowUpRight
											aria-hidden="true"
											className="
												h-5
												w-5
												transition-transform
												duration-300
												group-hover:-translate-y-0.5
												group-hover:translate-x-0.5
												motion-reduce:transition-none
											"
										/>
									</>
								)}
							</button>

							<p
								className="
									mt-4
									text-center
									text-[12px]
									leading-relaxed
									text-slate-400
								"
							>
								Your information is used only to
								respond to your enquiry.
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}