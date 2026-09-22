import { data, redirect } from 'react-router';
import type { Route } from './+types/start-a-project';
import { seo } from '@/lib/seo';
import { StartProjectHero } from '@/components/start-project/start-project-hero';
import { StartProjectForm } from '@/components/start-project/start-project-form';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Start a Project — Codelaro',
		description:
			'Submit a guided project brief to the Codelaro team — project type, services, description, budget and timeline. We reply within one business day.',
		path: '/start-a-project',
	});
}

type FieldErrors = {
	name?: string;
	email?: string;
	projectType?: string;
	services?: string;
	description?: string;
	budget?: string;
	timeline?: string;
	referenceUrl?: string;
};

export async function action({ request }: Route.ActionArgs) {
	const formData = await request.formData();
	const name = String(formData.get('name') ?? '').trim();
	const email = String(formData.get('email') ?? '').trim();
	const projectType = String(formData.get('projectType') ?? '').trim();
	const services = String(formData.get('services') ?? '').trim();
	const description = String(formData.get('description') ?? '').trim();
	const budget = String(formData.get('budget') ?? '').trim();
	const timeline = String(formData.get('timeline') ?? '').trim();
	const referenceUrl = String(formData.get('referenceUrl') ?? '').trim();

	const errors: FieldErrors = {};

	if (!name) errors.name = 'Please enter your name.';
	if (!email) {
		errors.email = 'Please enter your email.';
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		errors.email = 'Please enter a valid email address.';
	}
	if (!projectType) errors.projectType = 'Please choose a project type.';
	if (!services) errors.services = 'Please select at least one service.';
	if (!description) {
		errors.description = 'Please describe your project.';
	} else if (description.length < 20) {
		errors.description = 'A few more details would help us reply well.';
	}
	if (!budget) errors.budget = 'Please choose a budget range.';
	if (!timeline) errors.timeline = 'Please choose a timeline.';
	if (referenceUrl && !/^https?:\/\/.+/i.test(referenceUrl)) {
		errors.referenceUrl = 'Please enter a valid URL (https://…).';
	}

	if (Object.keys(errors).length > 0) {
		return data({ errors }, { status: 400 });
	}

	// Brief received. In production this would forward to the team via email or
	// a database; without persistence configured, we acknowledge
	// the submission and route the visitor to the thank-you page.
	return redirect('/thank-you');
}

export default function StartProjectPage() {
	return (
		<main>
			<StartProjectHero />
			<StartProjectForm />
		</main>
	);
}
