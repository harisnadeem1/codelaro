import { data, redirect } from 'react-router';
import type { Route } from './+types/contact';
import { seo } from '@/lib/seo';
import { ContactHero, ContactPaths } from '@/components/contact/contact-hero';
import { ContactForm } from '@/components/contact/contact-form';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Contact — Codelaro',
		description:
			'Talk to the Codelaro team about your project or idea. Send us a message, start a project, or book a consultation — we reply within one business day.',
		path: '/contact',
	});
}

type FieldErrors = {
	name?: string;
	email?: string;
	company?: string;
	subject?: string;
	message?: string;
};

export async function action({ request }: Route.ActionArgs) {
	const formData = await request.formData();
	const name = String(formData.get('name') ?? '').trim();
	const email = String(formData.get('email') ?? '').trim();
	const company = String(formData.get('company') ?? '').trim();
	const subject = String(formData.get('subject') ?? '').trim();
	const message = String(formData.get('message') ?? '').trim();

	const errors: FieldErrors = {};

	if (!name) errors.name = 'Please enter your name.';
	if (!email) {
		errors.email = 'Please enter your work email.';
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		errors.email = 'Please enter a valid email address.';
	}
	if (!subject) errors.subject = 'Please choose a subject.';
	if (!message) {
		errors.message = 'Please tell us a little about your message.';
	} else if (message.length < 10) {
		errors.message = 'A few more details would help us reply well.';
	}

	if (Object.keys(errors).length > 0) {
		return data({ errors }, { status: 400 });
	}

	// Submission received. In production this would forward to the team via
	// email or a database; without persistence configured, we
	// acknowledge the enquiry and route the visitor to the thank-you page.
	return redirect('/thank-you');
}

export default function ContactPage() {
	return (
		<main>
			<ContactHero />
			<ContactForm />
			<ContactPaths />
		</main>
	);
}
