import { data, redirect } from 'react-router';
import type { Route } from './+types/contact';

import { seo } from '@/lib/seo';

import {
    ContactHero,
} from '@/components/contact/contact-hero';

import { ClientVoicesSection } from '@/components/contact/client-voices';

/* -------------------------------------------------------------------------- */
/* SEO Metadata                                                               */
/* -------------------------------------------------------------------------- */

export function meta({ matches, location }: Route.MetaArgs) {
    return seo(
        { matches, location },
        {
            title: 'Contact Codelaro | Software Development & AI Solutions',

            description:
                'Contact Codelaro to discuss custom software development, web and mobile applications, AI automation, or your next digital project. Get in touch with our team.',

            path: '/contact',
        }
    );
}

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type FieldErrors = {
    name?: string;
    email?: string;
    company?: string;
    subject?: string;
    message?: string;
};

type ContactSubmission = {
    name: string;
    email: string;
    company: string;
    subject: string;
    message: string;
};

/* -------------------------------------------------------------------------- */
/* Validation                                                                 */
/* -------------------------------------------------------------------------- */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_LIMITS = {
    name: 100,
    email: 254,
    company: 150,
    subject: 150,
    message: 5000,
} as const;

function validateContactForm(
    values: ContactSubmission
): FieldErrors {
    const errors: FieldErrors = {};

    /* Name */

    if (!values.name) {
        errors.name = 'Please enter your name.';
    } else if (values.name.length > FIELD_LIMITS.name) {
        errors.name = 'Your name is too long.';
    }

    /* Email */

    if (!values.email) {
        errors.email = 'Please enter your email address.';
    } else if (
        values.email.length > FIELD_LIMITS.email ||
        !EMAIL_REGEX.test(values.email)
    ) {
        errors.email = 'Please enter a valid email address.';
    }

    /* Company — Optional */

    if (values.company.length > FIELD_LIMITS.company) {
        errors.company = 'Company name is too long.';
    }

    /* Subject */

    if (!values.subject) {
        errors.subject = 'Please choose a subject.';
    } else if (
        values.subject.length > FIELD_LIMITS.subject
    ) {
        errors.subject = 'Your subject is too long.';
    }

    /* Message */

    if (!values.message) {
        errors.message =
            'Please tell us a little about your project or enquiry.';
    } else if (values.message.length < 10) {
        errors.message =
            'Please provide at least 10 characters.';
    } else if (
        values.message.length > FIELD_LIMITS.message
    ) {
        errors.message =
            'Your message must not exceed 5,000 characters.';
    }

    return errors;
}

/* -------------------------------------------------------------------------- */
/* Contact Form Action                                                        */
/* -------------------------------------------------------------------------- */

export async function action({ request }: Route.ActionArgs) {
    /* Allow POST submissions only */

    if (request.method !== 'POST') {
        return data(
            {
                errors: {},
                error: 'Invalid request method.',
            },
            {
                status: 405,
            }
        );
    }

    /* Read Form Data */

    const formData = await request.formData();

    const getField = (name: string) => {
        const value = formData.get(name);

        return typeof value === 'string'
            ? value.trim()
            : '';
    };

    /* Spam Protection — Honeypot */

    const website = getField('website');

    if (website) {
        // Silently discard submissions that fill the hidden field.
        return redirect('/thank-you');
    }

    /* Normalize Form Values */

    const values: ContactSubmission = {
        name: getField('name'),
        email: getField('email').toLowerCase(),
        company: getField('company'),
        subject: getField('subject'),
        message: getField('message'),
    };

    /* Validate */

    const errors = validateContactForm(values);

    if (Object.keys(errors).length > 0) {
        return data(
            {
                errors,
                error: null,
            },
            {
                status: 400,
            }
        );
    }

    /* ---------------------------------------------------------------------- */
    /* Submit Enquiry                                                         */
    /* ---------------------------------------------------------------------- */

    /*
     * Configure CONTACT_WEBHOOK_URL in your server environment.
     *
     * The webhook should deliver or securely store the enquiry.
     *
     * Never expose this URL in client-side environment variables.
     */

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    if (!webhookUrl) {
        console.error(
            'Contact form: CONTACT_WEBHOOK_URL is not configured.'
        );

        return data(
            {
                errors: {},
                error:
                    'Our contact form is temporarily unavailable. Please try again later.',
            },
            {
                status: 503,
            }
        );
    }

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                ...values,
                source: 'codelaro-contact-page',
                submittedAt: new Date().toISOString(),
            }),

            signal: AbortSignal.timeout(10000),
        });

        if (!response.ok) {
            throw new Error(
                `Contact webhook failed: ${response.status}`
            );
        }
    } catch (error) {
        console.error(
            'Contact form submission failed:',
            error
        );

        return data(
            {
                errors: {},
                error:
                    'We could not send your message. Please try again shortly.',
            },
            {
                status: 502,
            }
        );
    }

    /* Redirect Only After Successful Submission */

    return redirect('/thank-you');
}

/* -------------------------------------------------------------------------- */
/* Contact Page                                                               */
/* -------------------------------------------------------------------------- */

export default function ContactPage() {
    return (
        <main id="main-content">
            {/* Contact Hero */}

            <ContactHero />


<ClientVoicesSection />

        </main>
    );
}