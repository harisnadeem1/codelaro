import { useState } from 'react';

import {
	Form,
	useActionData,
	useNavigation,
} from 'react-router';

import {
	ArrowUpRight,
	ChevronDown,
	Loader2,
} from 'lucide-react';

import { cn } from '@/lib/utils';

import { SERVICES } from '@/data/services';
import { SOLUTIONS } from '@/data/solutions';

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

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

type ContactActionResult = {
	ok?: boolean;
	errors?: FieldErrors;
	error?: string | null;
};

type SelectOption = {
	value: string;
	label: string;
};

/* -------------------------------------------------------------------------- */
/* Configuration                                                              */
/* -------------------------------------------------------------------------- */

const ENQUIRY_TYPES: SelectOption[] = [
	{
		value: 'general',
		label: 'General Enquiry',
	},
	{
		value: 'services',
		label: 'Services',
	},
	{
		value: 'solutions',
		label: 'Solutions',
	},
	{
		value: 'partnership',
		label: 'Partnership',
	},
	{
		value: 'careers',
		label: 'Careers',
	},
	{
		value: 'support',
		label: 'Support',
	},
	{
		value: 'other',
		label: 'Other',
	},
];

/* -------------------------------------------------------------------------- */
/* Dynamic Service & Solution Options                                         */
/* -------------------------------------------------------------------------- */

const SERVICE_OPTIONS: SelectOption[] = SERVICES.map(
	(service) => ({
		value: service.title,
		label: service.title,
	})
);

const SOLUTION_OPTIONS: SelectOption[] = SOLUTIONS.map(
	(solution) => ({
		value: solution.title,
		label: solution.title,
	})
);

/* -------------------------------------------------------------------------- */
/* Shared Styles                                                              */
/* -------------------------------------------------------------------------- */

const fieldBase = cn(
	'w-full',
	'rounded-xl',
	'border border-slate-200',
	'bg-[#F8FAFC]',
	'px-4',

	// Consistent 16px font on mobile and desktop.
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

/* -------------------------------------------------------------------------- */
/* Input Field                                                                */
/* -------------------------------------------------------------------------- */

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
			<label
				htmlFor={name}
				className={labelBase}
			>
				{label}

				{required && (
					<span
						className="ml-1 text-brand"
						aria-hidden="true"
					>
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
				aria-describedby={
					error ? `${name}-error` : undefined
				}
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

/* -------------------------------------------------------------------------- */
/* Select Field                                                               */
/* -------------------------------------------------------------------------- */

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
			<label
				htmlFor={name}
				className={labelBase}
			>
				{label}

				{required && (
					<span
						className="ml-1 text-brand"
						aria-hidden="true"
					>
						*
					</span>
				)}
			</label>

			<div className="relative">
				<select
					id={name}
					name={name}
					value={value}
					onChange={(event) =>
						onChange(event.target.value)
					}
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

/* -------------------------------------------------------------------------- */
/* Contact Form                                                               */
/* -------------------------------------------------------------------------- */

export function ContactForm() {
	const actionData =
		useActionData() as ContactActionResult | undefined;

	const navigation = useNavigation();

	const errors = actionData?.errors ?? {};

	const isSubmitting =
		navigation.state === 'submitting';

	/* ---------------------------------------------------------------------- */
	/* Dynamic Fields                                                         */
	/* ---------------------------------------------------------------------- */

	const [enquiryType, setEnquiryType] =
		useState<EnquiryType>('');

	const [selectedOffering, setSelectedOffering] =
		useState('');

	const showOffering =
		enquiryType === 'services' ||
		enquiryType === 'solutions';

	const offeringOptions =
		enquiryType === 'services'
			? SERVICE_OPTIONS
			: SOLUTION_OPTIONS;

	const handleEnquiryChange = (value: string) => {
		setEnquiryType(value as EnquiryType);

		// Clear the previous selection when changing enquiry types.
		setSelectedOffering('');
	};

	/* ---------------------------------------------------------------------- */
	/* Render                                                                 */
	/* ---------------------------------------------------------------------- */

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
			{/* -------------------------------------------------------------- */}
			{/* Background Glow                                                */}
			{/* -------------------------------------------------------------- */}

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

			{/* -------------------------------------------------------------- */}
			{/* Main Form Card                                                 */}
			{/* -------------------------------------------------------------- */}

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
				{/* Top Accent Line */}

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

				{/* Form Content */}

				<div
					className="
						p-5
						sm:p-7
						lg:p-8
						xl:p-9
					"
				>
					{/* ------------------------------------------------------ */}
					{/* Server Error                                           */}
					{/* ------------------------------------------------------ */}

					{actionData?.error && (
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
							{actionData.error}
						</div>
					)}

					{/* ------------------------------------------------------ */}
					{/* Form                                                   */}
					{/* ------------------------------------------------------ */}

					<Form
						method="post"
						noValidate
						className="space-y-5"
					>
						{/* -------------------------------------------------- */}
						{/* Honeypot                                            */}
						{/* -------------------------------------------------- */}

						<div
							aria-hidden="true"
							className="absolute -left-[9999px]"
						>
							<label htmlFor="website">
								Leave this field empty
							</label>

							<input
								id="website"
								name="website"
								type="text"
								tabIndex={-1}
								autoComplete="off"
							/>
						</div>

						{/* -------------------------------------------------- */}
						{/* Row 1: Name & Email                                */}
						{/* -------------------------------------------------- */}

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

						{/* -------------------------------------------------- */}
						{/* Row 2: Company & Enquiry Type                      */}
						{/* -------------------------------------------------- */}

						<div
							className="
								grid
								grid-cols-1
								gap-5
								sm:grid-cols-2
							"
						>
							{/* Company */}

							<InputField
								label="Company"
								name="company"
								placeholder="Your company"
								error={errors.company}
								autoComplete="organization"
								maxLength={150}
							/>

							{/* Enquiry Type */}

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

						{/* -------------------------------------------------- */}
						{/* Dynamic Service / Solution Selection               */}
						{/* -------------------------------------------------- */}

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

						{/* -------------------------------------------------- */}
						{/* Message                                             */}
						{/* -------------------------------------------------- */}

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
								aria-invalid={Boolean(errors.message)}
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

									errors.message && errorBase
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

						{/* -------------------------------------------------- */}
						{/* Submit Button                                      */}
						{/* -------------------------------------------------- */}

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

							{/* Privacy Notice */}

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
					</Form>
				</div>
			</div>
		</div>
	);
}