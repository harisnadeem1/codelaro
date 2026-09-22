/**
 * Legal and policy page content.
 *
 * These are structural placeholders — professional, readable page layouts with
 * editable content areas. They are NOT final legal terms. Replace each
 * section's body with reviewed, jurisdiction-appropriate language before
 * relying on it. A qualified legal advisor should finalize every policy.
 */

export interface LegalSection {
	id: string;
	heading: string;
	/** Paragraphs of body copy. Each entry is one paragraph. */
	body: string[];
}

export interface LegalDocument {
	title: string;
	eyebrow: string;
	intro: string;
	/** ISO date string — editable placeholder for the "last updated" line. */
	lastUpdated: string;
	sections: LegalSection[];
}

export const PRIVACY_POLICY: LegalDocument = {
	title: 'Privacy Policy',
	eyebrow: 'Legal',
	intro:
		'This Privacy Policy explains how Codelaro handles information in connection with our website and services. It is provided as a starting structure and should be reviewed and finalized with qualified legal counsel before publication.',
	lastUpdated: '2026-09-21',
	sections: [
		{
			id: 'overview',
			heading: 'Overview',
			body: [
				'Codelaro respects your privacy. This policy describes what information we collect, why we collect it, and the choices you have about your data.',
				'By using this website or engaging our services, you acknowledge the practices described here. This document is a placeholder structure and does not constitute final legal advice.',
			],
		},
		{
			id: 'information-we-collect',
			heading: 'Information we collect',
			body: [
				'We may collect information you provide directly — such as your name, email address, company and message when you contact us or submit a project enquiry.',
				'We may also collect technical information automatically, such as browser type, device information and usage patterns, through cookies and similar technologies described in our Cookie Policy.',
			],
		},
		{
			id: 'how-we-use-information',
			heading: 'How we use information',
			body: [
				'We use the information we collect to respond to enquiries, provide and improve our services, communicate with you, and maintain the security and reliability of our systems.',
				'We do not sell your personal information. Specific uses should be documented here once finalized with legal counsel.',
			],
		},
		{
			id: 'legal-basis',
			heading: 'Legal basis for processing',
			body: [
				'Where applicable, we process personal data on the basis of your consent, the performance of a contract, our legitimate interests, or compliance with legal obligations.',
				'The specific legal basis for each processing activity should be documented here in line with applicable data protection law.',
			],
		},
		{
			id: 'sharing',
			heading: 'Sharing and disclosure',
			body: [
				'We may share information with trusted service providers who support our operations, where required by law, or in connection with a business transfer. Any such sharing is bound by appropriate confidentiality obligations.',
			],
		},
		{
			id: 'data-retention',
			heading: 'Data retention',
			body: [
				'We retain personal information only as long as necessary for the purposes described here, to comply with legal obligations, or to protect our rights. Retention periods should be specified here once finalized.',
			],
		},
		{
			id: 'your-rights',
			heading: 'Your rights',
			body: [
				'Depending on your jurisdiction, you may have rights to access, correct, delete or restrict the processing of your personal data, and to object to or port your data.',
				'To exercise any of these rights, contact us using the details below. We will respond in line with applicable law.',
			],
		},
		{
			id: 'security',
			heading: 'Security',
			body: [
				'We take reasonable technical and organizational measures to protect personal information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
			],
		},
		{
			id: 'changes',
			heading: 'Changes to this policy',
			body: [
				'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review it periodically.',
			],
		},
		{
			id: 'contact',
			heading: 'Contact us',
			body: [
				'If you have questions about this Privacy Policy or how we handle your information, contact us at hello@codelaro.com. Final contact and registration details should be added here before publication.',
			],
		},
	],
};

export const TERMS_OF_SERVICE: LegalDocument = {
	title: 'Terms & Conditions',
	eyebrow: 'Legal',
	intro:
		'These Terms & Conditions govern your use of the Codelaro website and outline the basis on which we provide our services. This is a structural placeholder and should be reviewed and finalized with qualified legal counsel.',
	lastUpdated: '2026-09-21',
	sections: [
		{
			id: 'acceptance',
			heading: 'Acceptance of terms',
			body: [
				'By accessing or using this website, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the site.',
			],
		},
		{
			id: 'services',
			heading: 'Our services',
			body: [
				'Codelaro provides software development and technology services. The specific scope, deliverables, pricing and terms of any engagement are governed by a separate written agreement between you and Codelaro.',
			],
		},
		{
			id: 'use-of-site',
			heading: 'Use of this website',
			body: [
				'You agree to use this website lawfully and not to misuse, disrupt or attempt to gain unauthorized access to any part of the site or its systems.',
				'Content on this site is provided for general information and may be updated or withdrawn without notice.',
			],
		},
		{
			id: 'intellectual-property',
			heading: 'Intellectual property',
			body: [
				'The content, design and branding of this website are owned by Codelaro or its licensors and are protected by intellectual property laws. You may not reproduce or distribute them without permission.',
				'Ownership of work created under a service engagement is governed by the separate written agreement for that engagement.',
			],
		},
		{
			id: 'no-warranty',
			heading: 'Disclaimers',
			body: [
				'This website and its content are provided "as is" without warranties of any kind. We do not guarantee that the site will be uninterrupted, error-free or free of harmful components.',
			],
		},
		{
			id: 'liability',
			heading: 'Limitation of liability',
			body: [
				'To the maximum extent permitted by law, Codelaro shall not be liable for any indirect, incidental or consequential damages arising from your use of this website. Specific liability limitations for service engagements are governed by the relevant written agreement.',
			],
		},
		{
			id: 'third-party-links',
			heading: 'Third-party links',
			body: [
				'This website may contain links to third-party websites. We are not responsible for the content or practices of those sites and encourage you to review their terms and policies.',
			],
		},
		{
			id: 'governing-law',
			heading: 'Governing law',
			body: [
				'These Terms & Conditions are governed by the laws of the applicable jurisdiction, which should be specified here once finalized. Any disputes shall be resolved in the courts of that jurisdiction.',
			],
		},
		{
			id: 'changes',
			heading: 'Changes to these terms',
			body: [
				'We may revise these Terms & Conditions at any time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.',
			],
		},
		{
			id: 'contact',
			heading: 'Contact us',
			body: [
				'For questions about these Terms & Conditions, contact us at hello@codelaro.com. Final legal entity and registration details should be added here before publication.',
			],
		},
	],
};

export const COOKIE_POLICY: LegalDocument = {
	title: 'Cookie Policy',
	eyebrow: 'Legal',
	intro:
		'This Cookie Policy explains how Codelaro uses cookies and similar technologies on this website. It is a structural placeholder and should be finalized with qualified legal counsel.',
	lastUpdated: '2026-09-21',
	sections: [
		{
			id: 'what-are-cookies',
			heading: 'What are cookies',
			body: [
				'Cookies are small text files stored on your device when you visit a website. They allow the site to remember your actions and preferences over time.',
			],
		},
		{
			id: 'how-we-use-cookies',
			heading: 'How we use cookies',
			body: [
				'We use cookies to understand how the website is used, to remember your preferences, and to keep the site working reliably. We do not use cookies to identify you personally without your consent.',
			],
		},
		{
			id: 'types-of-cookies',
			heading: 'Types of cookies we use',
			body: [
				'Essential cookies are necessary for the website to function and cannot be switched off.',
				'Analytics cookies help us understand how visitors use the site so we can improve it.',
				'Preference cookies remember your settings and choices for a more personalized experience.',
			],
		},
		{
			id: 'managing-cookies',
			heading: 'Managing cookies',
			body: [
				'You can control or delete cookies through your browser settings. Disabling certain cookies may affect how the website functions.',
				'Where consent is required, we will ask for it before setting non-essential cookies. A consent mechanism should be implemented here before publication.',
			],
		},
		{
			id: 'third-party-cookies',
			heading: 'Third-party cookies',
			body: [
				'Some features or analytics tools may set cookies through third-party services. These are governed by the respective third parties’ privacy policies.',
			],
		},
		{
			id: 'changes',
			heading: 'Changes to this policy',
			body: [
				'We may update this Cookie Policy as our use of cookies changes. Updates will be posted on this page with a revised date.',
			],
		},
		{
			id: 'contact',
			heading: 'Contact us',
			body: [
				'For questions about this Cookie Policy, contact us at hello@codelaro.com.',
			],
		},
	],
};

export const ACCESSIBILITY_STATEMENT: LegalDocument = {
	title: 'Accessibility',
	eyebrow: 'Commitment',
	intro:
		'Codelaro is committed to making our website accessible to everyone, including people with disabilities. This statement outlines our approach and is a working document that evolves with our site.',
	lastUpdated: '2026-09-21',
	sections: [
		{
			id: 'our-commitment',
			heading: 'Our commitment',
			body: [
				'We aim to conform to recognized accessibility standards, including the Web Content Accessibility Guidelines (WCAG), and to continually improve the experience for all visitors.',
			],
		},
		{
			id: 'what-we-do',
			heading: 'What we do',
			body: [
				'We design with semantic structure, sufficient color contrast, keyboard navigation, and clear, readable typography in mind.',
				'We test across devices, screen sizes and assistive technologies, and we treat accessibility as part of the build, not an afterthought.',
			],
		},
		{
			id: 'known-limitations',
			heading: 'Known limitations',
			body: [
				'While we strive for full accessibility, some areas of the site may not yet fully conform. We actively work to identify and address these gaps.',
				'Third-party content or integrations may be outside our direct control, though we aim to choose accessible partners where possible.',
			],
		},
		{
			id: 'feedback',
			heading: 'Feedback and support',
			body: [
				'If you experience any difficulty accessing our website, or have a suggestion for improvement, please contact us at hello@codelaro.com. We take reports seriously and will do our best to address them.',
			],
		},
		{
			id: 'contact',
			heading: 'Contact us',
			body: [
				'For accessibility questions or support, email hello@codelaro.com. We aim to respond within one business day.',
			],
		},
	],
};
