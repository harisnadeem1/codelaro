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
    eyebrow: 'Privacy & Data Protection',

    intro:
        'Your privacy matters to us. This Privacy Policy explains how Codelaro collects, uses, stores, and protects personal information when you visit our website, contact our team, or engage with our software development and technology services.',

    lastUpdated: '2026-09-28',

    sections: [
        {
            id: 'introduction',
            heading: 'Introduction',
            body: [
                'Codelaro is a software development and technology services company providing web development, custom software solutions, mobile application development, and related digital services. We recognize the importance of protecting personal information and handling it responsibly.',

                'This Privacy Policy explains how we handle personal information collected through our website, project enquiries, business communications, and professional services.',

                'By contacting us or using our website, you can review how your information is handled. Where applicable law requires consent for particular activities, we will seek that consent separately.',
            ],
        },

        {
            id: 'information-we-collect',
            heading: 'Information We Collect',
            body: [
                'We collect personal information that you voluntarily provide when contacting us, submitting a project enquiry, requesting a consultation, or communicating with our team.',

                'This information may include your name, email address, telephone number, company name, project requirements, estimated budget, preferred services, and any additional information you choose to share.',

                'When you visit our website, certain technical information may also be collected, depending on the technologies enabled. This may include your IP address, browser type, device information, operating system, referring pages, and interactions with our website.',

                'If you apply for a position with Codelaro, we may collect information you submit as part of your application, including your CV, professional experience, qualifications, and contact details.',
            ],
        },

        {
            id: 'how-we-use-information',
            heading: 'How We Use Your Information',
            body: [
                'We use personal information for legitimate business purposes associated with operating our website, responding to enquiries, and delivering our professional services.',

                'These purposes may include responding to your questions, reviewing project requirements, preparing proposals and quotations, arranging consultations, communicating about ongoing projects, and providing technical support.',

                'We may also use relevant information to manage client relationships, maintain business records, improve our website and services, investigate technical issues, and protect our systems against unauthorized access or misuse.',

                'Where permitted by applicable law, we may communicate with you about services relevant to your enquiry or existing business relationship. Where consent is required for marketing communications, we will obtain it and provide an appropriate way to withdraw it.',

                'We do not sell personal information.',
            ],
        },

        {
            id: 'legal-basis',
            heading: 'Legal Basis for Processing',
            body: [
                'Where applicable data protection legislation requires a legal basis for processing personal information, the basis will depend on the nature of the information and the purpose for which it is processed.',

                'Depending on the circumstances, we may process personal information to take steps requested before entering into a contract, perform contractual obligations, comply with applicable legal requirements, or pursue legitimate business interests where those interests are not overridden by your rights.',

                'For activities that require consent under applicable law, such as certain marketing communications or non-essential cookies, we will rely on consent where appropriate.',

                'You may withdraw your consent where processing is based on consent. Withdrawal does not affect the lawfulness of processing carried out before consent was withdrawn.',
            ],
        },

        {
            id: 'project-and-client-data',
            heading: 'Project and Client Information',
            body: [
                'As a software development company, Codelaro may receive business information, technical documentation, project specifications, design assets, and other materials necessary to deliver services requested by clients.',

                'Information provided during a project is used for the purposes associated with that engagement and handled according to the relevant contractual arrangements and applicable legal requirements.',

                'Depending on the project, Codelaro may act as a service provider processing personal information on behalf of a client. In such circumstances, the client may determine the purposes and means of processing, while Codelaro processes information according to the applicable agreement and lawful instructions.',

                'Clients should avoid sharing unnecessary personal information or sensitive data during initial enquiries. Any project requiring the processing of sensitive or regulated information should be discussed with us before such information is transferred.',
            ],
        },

        {
            id: 'sharing-and-disclosure',
            heading: 'Information Sharing and Disclosure',
            body: [
                'Codelaro may share information with third-party service providers when reasonably necessary to operate our business, maintain our website, communicate with clients, or deliver contracted services.',

                'Depending on the services involved, these providers may include website hosting companies, cloud infrastructure providers, communication platforms, development tools, and other technical service providers.',

                'Where applicable, we seek to use appropriate contractual, confidentiality, and security arrangements when third parties process personal information on our behalf.',

                'We may also disclose information when required by applicable law, a valid legal process, or an enforceable request from an authorized public authority.',

                'If Codelaro undergoes a business restructuring, merger, acquisition, or transfer of relevant business assets, personal information may be transferred where legally permitted and subject to applicable safeguards.',
            ],
        },

        {
            id: 'international-data-transfers',
            heading: 'International Data Transfers',
            body: [
                'Codelaro may work with clients and technology service providers located in different countries. Consequently, personal information may need to be accessed, processed, or stored outside the country in which it was originally collected.',

                'Different countries may have different data protection laws and standards.',

                'Where international transfers are subject to specific legal requirements, we will assess the applicable requirements and use appropriate transfer mechanisms or safeguards where necessary.',
            ],
        },

        {
            id: 'cookies-and-website-technologies',
            heading: 'Cookies and Website Technologies',
            body: [
                'Our website may use cookies and similar technologies to support essential website functionality, maintain security, understand website performance, or improve the browsing experience.',

                'The specific cookies and technologies used depend on the services and integrations enabled on our website.',

                'Where required by applicable law, we will request your consent before using non-essential cookies or similar tracking technologies.',

                'You can manage or restrict cookies through your browser settings. Disabling certain cookies may affect the functionality of some website features.',
            ],
        },

        {
            id: 'data-retention',
            heading: 'Data Retention',
            body: [
                'We retain personal information only for as long as reasonably necessary to fulfill the purposes for which it was collected, meet contractual obligations, comply with applicable legal requirements, resolve disputes, or protect our legitimate business interests.',

                'Retention periods may vary depending on the type of information, the nature of our relationship with you, applicable contractual requirements, and relevant legal obligations.',

                'When personal information is no longer required, we take appropriate steps to delete, anonymize, or otherwise dispose of it securely, subject to applicable legal and operational requirements.',
            ],
        },

        {
            id: 'data-security',
            heading: 'Data Security',
            body: [
                'We recognize the importance of protecting personal information against unauthorized access, disclosure, alteration, loss, and misuse.',

                'Codelaro aims to apply technical and organizational security measures appropriate to the nature of the information being processed and the risks associated with that processing.',

                'Security measures may include appropriate access restrictions, authentication controls, secure communication methods, and other safeguards relevant to the systems and services involved.',

                'However, no website, electronic transmission, or information storage system can be guaranteed to be completely secure. We therefore cannot guarantee absolute protection against every possible security risk.',
            ],
        },

        {
            id: 'your-privacy-rights',
            heading: 'Your Privacy Rights',
            body: [
                'Depending on your location and the data protection laws applicable to your information, you may have certain rights concerning how your personal information is processed.',

                'These rights may include requesting access to your personal information, correcting inaccurate information, requesting deletion, restricting certain processing activities, objecting to processing, or requesting data portability where applicable.',

                'Where processing is based on your consent, you may also have the right to withdraw that consent.',

                'To submit a privacy-related request, contact us using the details provided in this policy. We may need to verify your identity before processing certain requests.',

                'We will assess and respond to requests in accordance with applicable legal requirements. Certain rights may be subject to lawful exceptions or limitations.',
            ],
        },

        {
            id: 'third-party-websites',
            heading: 'Third-Party Websites and Services',
            body: [
                'Our website may contain links to external websites, social media platforms, or third-party services that are not operated or controlled by Codelaro.',

                'These third parties may maintain their own privacy policies and data processing practices. We encourage you to review their policies before providing personal information.',

                'This Privacy Policy applies to personal information handled by Codelaro and does not govern the independent practices of third-party websites or services.',
            ],
        },

        {
            id: 'children-privacy',
            heading: "Children's Privacy",
            body: [
                'Codelaro provides professional software development and technology services and does not intentionally direct its website or business services toward children.',

                'We do not knowingly seek to collect personal information from children through our general business enquiry processes.',

                'If you believe a child has submitted personal information to us without appropriate authorization, please contact us so we can review the circumstances and take appropriate action.',
            ],
        },

        {
            id: 'changes-to-policy',
            heading: 'Changes to This Privacy Policy',
            body: [
                'We may update this Privacy Policy periodically to reflect changes in our business operations, website functionality, service providers, legal requirements, or data processing practices.',

                'When changes are made, we will update the revision date displayed at the beginning of this document.',

                'Where applicable law requires additional notice or consent for material changes, we will take the appropriate steps.',
            ],
        },

        {
            id: 'contact-us',
            heading: 'Contact Us',
            body: [
                'If you have questions about this Privacy Policy, our handling of personal information, or your applicable privacy rights, you can contact Codelaro using the details below.',

                'Email: hello@codelaro.com',

                'Website: codelaro.com',

                'You may also submit an enquiry through the contact form available on our website. Please include sufficient information to help us understand and respond to your request, but avoid submitting unnecessary sensitive personal information.',
            ],
        },
    ],
};
export const TERMS_OF_SERVICE: LegalDocument = {
    title: 'Terms & Conditions',
    eyebrow: 'Legal & Service Terms',

    intro:
        'These Terms & Conditions explain the rules governing your use of the Codelaro website and provide general information about our software development and technology services. Please read them carefully before using our website or submitting a project enquiry.',

    lastUpdated: '2026-09-28',

    sections: [
        {
            id: 'introduction',
            heading: 'Introduction',
            body: [
                'Welcome to Codelaro. We provide software development and technology services, including web development, custom software solutions, mobile application development, and related digital services.',

                'These Terms & Conditions govern access to and use of the Codelaro website, including its publicly available pages, content, forms, and related functionality.',

                'Separate written agreements govern individual client engagements. Where a signed agreement contains terms that differ from these website Terms & Conditions, the signed agreement will govern the relevant services to the extent of that difference.',
            ],
        },

        {
            id: 'acceptance-of-terms',
            heading: 'Acceptance of Terms',
            body: [
                'By accessing or using the Codelaro website, you agree to comply with these Terms & Conditions and all applicable laws and regulations.',

                'If you do not agree with these terms, you should discontinue your use of the website.',

                'Submitting a project enquiry, requesting a consultation, or communicating with Codelaro does not automatically establish a contractual relationship or obligate either party to proceed with a project.',
            ],
        },

        {
            id: 'our-services',
            heading: 'Our Services',
            body: [
                'Codelaro provides professional software development and technology services. Depending on the requirements of a particular engagement, these may include website development, custom software engineering, mobile application development, technical consulting, and related digital solutions.',

                'Information presented on our website describes our general capabilities and should not be interpreted as a guarantee that every advertised service, technology, or solution will be available for every project.',

                'The scope of work, technical requirements, deliverables, project schedule, pricing, payment arrangements, and other relevant conditions for a client engagement will be established through a separate written proposal, statement of work, or service agreement.',
            ],
        },

        {
            id: 'project-enquiries',
            heading: 'Project Enquiries and Proposals',
            body: [
                'You may contact Codelaro through our website or other official communication channels to discuss potential projects, request information, or arrange a consultation.',

                'When submitting an enquiry, you agree to provide information that is accurate to the best of your knowledge and that you are authorized to share.',

                'Any initial discussion, consultation, estimated project timeline, or preliminary quotation is provided for evaluation purposes unless expressly stated otherwise in a written agreement.',

                'A project will be considered formally accepted only when the parties have agreed to the applicable contractual terms and any required project commencement conditions have been satisfied.',

                'Codelaro reserves the right to decline enquiries or proposed engagements, subject to applicable law and any existing contractual obligations.',
            ],
        },

        {
            id: 'project-agreements',
            heading: 'Project Agreements and Scope of Work',
            body: [
                'Each software development engagement should be governed by a separate written agreement or an accepted statement of work defining the responsibilities and expectations of both parties.',

                'Depending on the engagement, the agreement may specify project objectives, development phases, deliverables, technical specifications, acceptance procedures, communication arrangements, estimated timelines, payment milestones, and post-launch support.',

                'Any functionality, integration, deliverable, or service not expressly included in the agreed scope may require a separate quotation or written change approval.',

                'Project schedules and delivery obligations will be determined by the applicable agreement. Changes in requirements, delayed approvals, or dependencies involving third parties may affect the agreed schedule.',
            ],
        },

        {
            id: 'client-responsibilities',
            heading: 'Client Responsibilities',
            body: [
                'Clients are responsible for providing the information, project requirements, materials, access credentials, feedback, and approvals reasonably necessary for Codelaro to perform the agreed services.',

                'Clients must ensure that they have the necessary rights, permissions, and authorizations to provide any content, software, data, designs, trademarks, or other materials used in their projects.',

                'Clients should not provide sensitive personal information, production credentials, or confidential business information through general website enquiry forms unless appropriate arrangements have been established.',

                'Specific responsibilities relating to testing, content preparation, hosting accounts, regulatory compliance, project approvals, and ongoing system administration should be defined in the relevant service agreement.',
            ],
        },

        {
            id: 'pricing-and-payments',
            heading: 'Pricing and Payment Terms',
            body: [
                'Prices, project estimates, payment schedules, currencies, invoicing arrangements, and applicable taxes will be specified in the relevant proposal, quotation, or service agreement.',

                'Unless expressly agreed otherwise, information published on the Codelaro website does not constitute a binding quotation or a commitment to provide services at a particular price.',

                'Depending on the project, payment arrangements may involve an initial deposit, milestone-based payments, recurring service fees, or other mutually agreed terms.',

                'Any consequences of overdue payments, project suspension, cancellation, refunds, or additional charges must be governed by the applicable written agreement and relevant law.',

                'Clients may also be responsible for separately agreed third-party expenses, such as hosting, domain registration, software licenses, cloud infrastructure, or external service subscriptions.',
            ],
        },

        {
            id: 'project-changes',
            heading: 'Changes to Project Requirements',
            body: [
                'Software development projects may require adjustments as technical requirements, business priorities, or project dependencies evolve.',

                'Where a requested change falls outside the agreed scope of work, Codelaro may provide an assessment of its potential effect on project costs, delivery schedules, and technical implementation.',

                'Additional work should proceed according to the change approval procedures established in the relevant service agreement.',

                'Informal discussions about potential changes do not automatically modify an existing contract unless the applicable agreement permits such modifications.',
            ],
        },

        {
            id: 'intellectual-property',
            heading: 'Intellectual Property Rights',
            body: [
                'Unless otherwise indicated, the Codelaro name, branding, website design, original website content, graphics, and other proprietary materials are owned by Codelaro or used with appropriate permission.',

                'You may access and view our website content for lawful personal or business information purposes. You may not reproduce, redistribute, modify, or commercially exploit our proprietary website materials without appropriate authorization, except where permitted by applicable law.',

                'Ownership, licensing, and transfer of intellectual property created during a client project will be determined by the relevant written service agreement.',

                'Such agreements should distinguish between custom project deliverables, client-provided materials, third-party components, open-source software, and any pre-existing tools, libraries, frameworks, or other intellectual property incorporated into the project.',

                'Nothing in these website Terms & Conditions automatically transfers ownership of project source code, software, designs, or other development deliverables.',
            ],
        },

        {
            id: 'confidentiality',
            heading: 'Confidentiality',
            body: [
                'During project discussions and service engagements, Codelaro and its clients may exchange confidential business, commercial, or technical information.',

                'The confidentiality obligations applicable to a particular engagement should be established through a separate confidentiality agreement, nondisclosure agreement, or relevant provisions of the service contract.',

                'You should avoid submitting confidential documents, sensitive business information, private access credentials, or regulated personal information through publicly accessible website forms unless appropriate arrangements have been made.',

                'Information submitted through our website will also be handled in accordance with our Privacy Policy, where applicable.',
            ],
        },

        {
            id: 'third-party-services',
            heading: 'Third-Party Services and Integrations',
            body: [
                'Certain software development projects may involve third-party technologies, including hosting platforms, cloud infrastructure, payment processors, application programming interfaces, external software, and other service providers.',

                'The availability, pricing, functionality, licensing conditions, and operational policies of these services are generally determined by their respective providers.',

                'Unless expressly included in a separate written agreement, Codelaro does not control or guarantee the uninterrupted availability, security, performance, or continued operation of independent third-party services.',

                'Responsibility for obtaining and maintaining third-party subscriptions, licenses, accounts, and related permissions should be established in the applicable project agreement.',
            ],
        },

        {
            id: 'website-use',
            heading: 'Acceptable Use of Our Website',
            body: [
                'You agree to use the Codelaro website only for lawful purposes and in a manner that does not interfere with its operation or the ability of other visitors to access it.',

                'You must not attempt to gain unauthorized access to our website, servers, databases, administrative systems, or other connected infrastructure.',

                'You must not intentionally introduce malicious software, conduct unauthorized security testing, interfere with website availability, submit fraudulent enquiries, or use automated systems in a manner that disrupts our services.',

                'You must also respect the intellectual property rights of Codelaro and third parties when accessing or using website content.',

                'We may take appropriate technical or legal action in response to suspected misuse, subject to applicable law.',
            ],
        },

        {
            id: 'website-information',
            heading: 'Website Information and Accuracy',
            body: [
                'We aim to present accurate and useful information about Codelaro, our capabilities, development approach, and technology services.',

                'However, website content is provided for general informational purposes and may not reflect every available service, current technical capability, or contractual arrangement.',

                'We may update, modify, reorganize, or remove website content as our business and services evolve.',

                'Project examples, technical descriptions, and other informational materials should not be interpreted as guarantees that identical results, functionality, or outcomes will be achieved in another engagement.',
            ],
        },

        {
            id: 'warranties-and-disclaimers',
            heading: 'Warranties and Disclaimers',
            body: [
                'The Codelaro website and its publicly available content are provided on an as-available basis, subject to any warranties or obligations that cannot lawfully be excluded.',

                'While we aim to maintain a reliable and accessible website, we do not guarantee that access will always be uninterrupted, error-free, completely secure, or free from technical issues.',

                'Information on the website should not be treated as a substitute for a formal project proposal, technical assessment, or individually negotiated service agreement.',

                'Any warranties, service commitments, acceptance criteria, maintenance obligations, or support arrangements relating to paid development services will be governed by the applicable written agreement.',
            ],
        },

        {
            id: 'limitation-of-liability',
            heading: 'Limitation of Liability',
            body: [
                'To the extent permitted by applicable law, Codelaro will not be responsible for indirect, incidental, special, or consequential losses arising solely from your use of, or inability to access, our public website.',

                'Nothing in these Terms & Conditions is intended to exclude or restrict liability where doing so would be prohibited by applicable law.',

                'Liability relating to professional services, project deliverables, contractual performance, service interruptions, or other matters arising from a client engagement will be governed by the relevant written agreement and applicable law.',

                'Any contractual liability limits or exclusions for paid services should be expressly negotiated and documented in the applicable service agreement.',
            ],
        },

        {
            id: 'third-party-links',
            heading: 'External Links and Third-Party Websites',
            body: [
                'Our website may include links to external websites, technology providers, social media platforms, or other third-party resources.',

                'These links are provided for informational purposes or convenience. Their inclusion does not automatically constitute an endorsement of the third party or its products and services.',

                'Codelaro does not control independent third-party websites and is not responsible for their content, availability, security practices, or privacy policies.',

                'We encourage visitors to review the applicable terms and privacy policies before interacting with external websites or services.',
            ],
        },

        {
            id: 'privacy-and-data-protection',
            heading: 'Privacy and Data Protection',
            body: [
                'Personal information submitted through the Codelaro website is handled in accordance with our Privacy Policy and applicable data protection requirements.',

                'Our Privacy Policy explains the categories of information we may collect, the purposes for which it may be processed, relevant third-party disclosures, and the privacy rights that may apply to individuals.',

                'Where a client engagement involves processing personal information on behalf of a client, the parties should establish any necessary data protection obligations through the relevant service agreement or a separate data processing agreement.',
            ],
        },

        {
            id: 'termination',
            heading: 'Suspension and Termination',
            body: [
                'We may restrict access to certain website functionality where reasonably necessary to protect the website, address suspected misuse, comply with applicable law, or respond to security incidents.',

                'The cancellation, suspension, or termination of a paid software development engagement will be governed by the relevant written agreement.',

                'Project-specific termination arrangements should address applicable notice requirements, outstanding payments, completed deliverables, access to project materials, and any continuing obligations.',
            ],
        },

        {
            id: 'governing-law',
            heading: 'Governing Law and Dispute Resolution',
            body: [
                'The interpretation and enforcement of these Terms & Conditions will be subject to the governing law and jurisdiction designated in the finalized version of this document, together with any mandatory legal protections that apply.',

                'The governing law, dispute resolution procedures, and competent courts applicable to individual software development engagements should be specified in their respective written agreements.',

                'Before initiating formal proceedings, the parties may attempt to resolve disagreements through direct communication where appropriate and consistent with their contractual and legal rights.',
            ],
        },

        {
            id: 'changes-to-terms',
            heading: 'Changes to These Terms',
            body: [
                'We may update these Terms & Conditions to reflect changes in our website, business operations, services, or applicable legal requirements.',

                'When updates are made, the revision date displayed at the beginning of this document will be changed accordingly.',

                'Updated terms will apply to website use from their stated effective date, subject to applicable law. Material changes will be communicated separately where legally required.',

                'Changes to an existing client engagement will remain subject to the amendment procedures established in the relevant written agreement.',
            ],
        },

        {
            id: 'contact-us',
            heading: 'Contact Us',
            body: [
                'If you have questions about these Terms & Conditions, our website, or the general process for engaging our software development services, you can contact Codelaro using the information below.',

                'Email: hello@codelaro.com',

                'Website: codelaro.com',

                'You may also submit an enquiry through the contact form on our website. For matters relating to an existing project, please use the communication channels established in your service agreement.',
            ],
        },
    ],
};

export const COOKIE_POLICY: LegalDocument = {
    title: 'Cookie Policy',
    eyebrow: 'Cookies & Privacy',

    intro:
        'This Cookie Policy explains how Codelaro uses cookies and similar technologies to support website functionality, improve the browsing experience, and understand how visitors interact with our website. It also explains the choices available to you when managing cookies and your privacy preferences.',

    lastUpdated: '2026-09-28',

    sections: [
        {
            id: 'introduction',
            heading: 'Introduction',
            body: [
                'Codelaro is a software development and technology services company. We aim to provide visitors with a reliable, secure, and accessible browsing experience while respecting their privacy.',

                'This Cookie Policy explains what cookies are, how they may be used on our website, the different categories of cookies, and how you can manage your preferences.',

                'This policy should be read alongside our Privacy Policy, which provides additional information about how we collect, process, store, and protect personal information.',
            ],
        },

        {
            id: 'what-are-cookies',
            heading: 'What Are Cookies?',
            body: [
                'Cookies are small text files that websites may place on your computer, smartphone, tablet, or other device when you visit them.',

                'They allow websites to recognize your browser, remember certain preferences, maintain functionality, and collect information about website interactions.',

                'Cookies may be stored temporarily during a browsing session or remain on your device for a specified period, depending on their purpose and configuration.',

                'Websites may also use similar technologies, such as local storage, session storage, and other browser-based mechanisms, to support functionality or store preferences. Where applicable, this policy also addresses these technologies.',
            ],
        },

        {
            id: 'how-we-use-cookies',
            heading: 'How We Use Cookies',
            body: [
                'Codelaro may use cookies and similar technologies to support the operation, security, performance, and usability of our website.',

                'Depending on the technologies enabled, cookies may help maintain essential website functionality, remember visitor preferences, understand website performance, and identify technical issues.',

                'If analytics or other optional technologies are introduced, they may help us understand how visitors interact with our website, which pages receive attention, and where the browsing experience could be improved.',

                'We aim to use cookies only for appropriate business purposes and in accordance with applicable privacy and data protection requirements.',
            ],
        },

        {
            id: 'types-of-cookies',
            heading: 'Types of Cookies',
            body: [
                'Cookies are commonly divided into categories according to their purpose. The categories described below explain the types of cookies that may be relevant to the operation of the Codelaro website. Their inclusion does not necessarily mean that every category is currently in use.',

                'Essential Cookies: These cookies support core website functionality, security, and other features necessary for a website to operate correctly. Where applicable, essential cookies may be used without separate consent when permitted by law.',

                'Analytics Cookies: These cookies collect information about website usage, such as page visits, navigation patterns, and interactions. If enabled, this information may help us identify performance issues and improve our website. Analytics cookies will be subject to consent where required by applicable law.',

                'Preference Cookies: These cookies may remember choices such as language settings, interface preferences, or cookie consent decisions, allowing the website to provide a more consistent experience.',

                'Functional Cookies: These cookies may support optional website features or integrations that enhance functionality. Depending on their purpose and applicable law, some functional cookies may require your consent.',

                'Marketing Cookies: If Codelaro introduces advertising or marketing technologies that use cookies to track visitors or measure advertising effectiveness, their use will be disclosed and appropriate consent will be obtained where required.',
            ],
        },

        {
            id: 'essential-cookies',
            heading: 'Essential Website Technologies',
            body: [
                'Certain cookies or browser storage technologies may be necessary to maintain website functionality, remember privacy preferences, protect forms against misuse, or support other essential technical operations.',

                'These technologies are intended to support the website rather than provide optional advertising or behavioral tracking functionality.',

                'The specific essential cookies and storage mechanisms used by Codelaro will depend on the website infrastructure and integrations deployed at the time of your visit.',

                'Disabling certain essential technologies through browser settings may affect website functionality or prevent some features from operating as intended.',
            ],
        },

        {
            id: 'analytics-and-performance',
            heading: 'Analytics and Website Performance',
            body: [
                'Codelaro may use website analytics or performance-monitoring technologies to understand how visitors interact with our website and identify opportunities for improvement.',

                'Depending on the technologies implemented, the information collected may include page visits, approximate geographic information, device and browser characteristics, referring websites, and general interaction patterns.',

                'Some analytics technologies use cookies, while others may collect information through different technical methods. Their privacy implications depend on their configuration and the information collected.',

                'Where applicable law requires consent for analytics cookies or similar tracking technologies, we will seek that consent before activating them.',

                'If analytics services are enabled, relevant information about the providers and technologies used should be made available through our website or cookie preference mechanism.',
            ],
        },

        {
            id: 'third-party-cookies',
            heading: 'Third-Party Cookies and Integrations',
            body: [
                'Our website may incorporate services or content provided by third parties. Depending on the integrations enabled, these may include analytics platforms, embedded media, communication tools, or other external services.',

                'Some third-party services may use cookies or similar technologies when you interact with their features or when their content is loaded.',

                'Third-party providers may process information according to their own privacy policies and applicable contractual arrangements.',

                'Where required, we will provide relevant information about optional third-party tracking technologies and request appropriate consent before activating them.',

                'We encourage visitors to review the privacy and cookie policies of third-party services they choose to interact with.',
            ],
        },

        {
            id: 'cookie-duration',
            heading: 'How Long Cookies Remain on Your Device',
            body: [
                'Cookies may remain on your device for different periods depending on their purpose and configuration.',

                'Session Cookies: These are generally temporary and are designed to expire when you close your browser or end your browsing session.',

                'Persistent Cookies: These may remain on your device for a defined period or until you remove them manually. They can be used to remember preferences or maintain certain functionality between visits.',

                'The actual duration of individual cookies depends on the technologies used and their configuration. Where applicable, details of individual cookies and their expiration periods should be provided through our cookie information or preference mechanism.',
            ],
        },

        {
            id: 'cookie-consent',
            heading: 'Cookie Consent and Your Choices',
            body: [
                'Where required by applicable law, Codelaro will request your consent before placing or accessing non-essential cookies or activating similar tracking technologies.',

                'When an applicable consent mechanism is available, you should be able to accept or reject optional cookie categories and update your preferences through the controls provided.',

                'Withdrawing consent will not affect the lawfulness of processing carried out before the withdrawal. Certain technologies that are strictly necessary for website operation may remain active where permitted by law.',

                'Your available choices may vary depending on the technologies currently enabled and the privacy requirements applicable to your location.',
            ],
        },

        {
            id: 'managing-cookies',
            heading: 'Managing Cookies Through Your Browser',
            body: [
                'Most modern web browsers provide settings that allow you to view, block, restrict, or delete cookies stored on your device.',

                'You can usually manage these settings through the privacy or security section of your browser preferences.',

                'Please note that blocking or deleting certain cookies may affect website functionality, remove previously saved preferences, or require you to make certain selections again.',

                'Browser settings may also provide controls for other website storage technologies. The available options depend on your browser and device.',
            ],
        },

        {
            id: 'personal-information',
            heading: 'Cookies and Personal Information',
            body: [
                'Some cookies and similar technologies may process information that qualifies as personal data under applicable privacy legislation, particularly when information can be associated with an identifiable individual.',

                'Where information collected through cookies constitutes personal data, we will handle it in accordance with our Privacy Policy and applicable legal requirements.',

                'Depending on the technology involved, this information may include online identifiers, device information, IP addresses, and website interaction data.',

                'For additional information about personal data processing and your applicable privacy rights, please refer to our Privacy Policy.',
            ],
        },

        {
            id: 'policy-updates',
            heading: 'Changes to This Cookie Policy',
            body: [
                'We may update this Cookie Policy periodically to reflect changes in our website functionality, technology providers, cookie usage, or applicable legal requirements.',

                'When changes are made, we will update the revision date displayed at the beginning of this document.',

                'Where applicable law requires additional notice or renewed consent for material changes, we will take the appropriate steps.',

                'We encourage visitors to review this policy periodically to stay informed about our use of cookies and similar technologies.',
            ],
        },

        {
            id: 'contact-us',
            heading: 'Contact Us',
            body: [
                'If you have questions about this Cookie Policy, the technologies used on our website, or how to manage your privacy preferences, please contact Codelaro.',

                'Email: hello@codelaro.com',

                'Website: codelaro.com',

                'You can also submit an enquiry through the contact form on our website. For information about how we handle personal information, please review our Privacy Policy.',
            ],
        },
    ],
};

export const ACCESSIBILITY_STATEMENT: LegalDocument = {
    title: 'Accessibility Statement',
    eyebrow: 'Accessibility & Inclusion',

    intro:
        'At Codelaro, we believe digital experiences should be accessible to everyone. We aim to make our website easy to navigate, understand, and use for all visitors, including people with disabilities. This statement explains our approach to website accessibility, our ongoing improvement goals, and how you can report accessibility issues.',

    lastUpdated: '2026-09-28',

    sections: [
        {
            id: 'our-commitment',
            heading: 'Our Commitment to Accessibility',
            body: [
                'Codelaro is committed to improving the accessibility and usability of our website so that visitors with different abilities, devices, and assistive technology requirements can access information about our software development and technology services.',

                'We recognize that accessibility is an ongoing process involving thoughtful design, accessible development practices, testing, and continuous improvement.',

                'Our objective is to provide a website that supports equal access to information, clear navigation, understandable content, and meaningful interaction for as many visitors as reasonably possible.',
            ],
        },

        {
            id: 'accessibility-standards',
            heading: 'Accessibility Standards',
            body: [
                'We aim to follow recognized accessibility principles and use the Web Content Accessibility Guidelines (WCAG) as a reference when designing, developing, and improving our website.',

                'WCAG provides recommendations for making digital content more accessible to people with visual, auditory, physical, cognitive, and other disabilities.',

                'Our accessibility efforts are guided by four fundamental principles: content should be perceivable, user interfaces should be operable, information should be understandable, and website functionality should be robust enough to support different technologies.',

                'Although these guidelines inform our development approach, this statement does not represent a formal declaration that the entire Codelaro website currently conforms to a particular WCAG version or conformance level.',
            ],
        },

        {
            id: 'accessible-design',
            heading: 'Accessible Design and Development',
            body: [
                'We aim to incorporate accessibility considerations throughout the design and development of the Codelaro website rather than treating accessibility solely as a final-stage requirement.',

                'Our development approach includes using meaningful page structures, descriptive headings, appropriate HTML elements, and consistent navigation patterns to make content easier to understand and navigate.',

                'We also aim to provide readable typography, sufficient color contrast, clear interactive elements, and layouts that adapt to different screen sizes and devices.',

                'Where images communicate meaningful information, we aim to provide appropriate text alternatives. Decorative images and visual elements should be implemented in ways that avoid unnecessary interruptions for assistive technology users.',
            ],
        },

        {
            id: 'keyboard-navigation',
            heading: 'Keyboard Navigation',
            body: [
                'We aim to make important website functionality accessible to visitors who navigate using a keyboard instead of a mouse.',

                'This includes supporting keyboard access to navigation menus, links, buttons, forms, and other interactive components wherever reasonably possible.',

                'Interactive elements should provide visible focus indicators so that keyboard users can identify their current position on the page.',

                'We also aim to maintain a logical navigation order and avoid interactions that unnecessarily prevent visitors from moving through the website using standard keyboard controls.',
            ],
        },

        {
            id: 'screen-readers',
            heading: 'Screen Readers and Assistive Technologies',
            body: [
                'Codelaro aims to structure website content in ways that support screen readers and other assistive technologies.',

                'Our development approach includes using semantic HTML, meaningful heading hierarchies, descriptive link text, and appropriate labels for interactive elements.',

                'Where necessary, additional accessibility attributes may be used to communicate the purpose, state, or behavior of interface components.',

                'Compatibility may vary depending on the assistive technology, browser, operating system, and specific website functionality involved.',
            ],
        },

        {
            id: 'responsive-accessibility',
            heading: 'Responsive Design and Readability',
            body: [
                'Our website is designed with responsive layouts to support access across desktop computers, laptops, tablets, and mobile devices.',

                'We aim to present information using clear typography, readable spacing, consistent visual hierarchy, and layouts that adapt to different screen sizes.',

                'We also aim to support browser zoom and text resizing without unnecessarily restricting access to essential content or functionality.',

                'Some visual elements, animations, or complex layouts may require additional refinement to provide an appropriate experience across different devices and accessibility settings.',
            ],
        },

        {
            id: 'forms-and-interactions',
            heading: 'Accessible Forms and Interactive Elements',
            body: [
                'Codelaro provides website features that allow visitors to contact our team, submit project enquiries, and access information about our services.',

                'We aim to design forms and interactive elements with clear labels, understandable instructions, appropriate input types, and helpful feedback.',

                'Where validation is required, our goal is to communicate errors clearly and help visitors understand how to correct them.',

                'We also aim to make interactive components usable through different input methods and compatible with relevant accessibility technologies.',
            ],
        },

        {
            id: 'animations-and-motion',
            heading: 'Animations and Motion',
            body: [
                'Our website may include animations, transitions, and interactive visual effects intended to improve presentation and usability.',

                'We recognize that certain types of movement can create difficulties for visitors with motion sensitivity or other accessibility requirements.',

                'Our goal is to use animation thoughtfully, avoid unnecessary movement that interferes with access to information, and support reduced-motion preferences where technically appropriate.',

                'Animations should not be the only method used to communicate essential information or indicate important changes in website functionality.',
            ],
        },

        {
            id: 'third-party-content',
            heading: 'Third-Party Content and Integrations',
            body: [
                'Certain areas of our website may contain links to external websites or incorporate technologies and services provided by third parties.',

                'The accessibility of independent third-party websites and services may vary, and their content or functionality may not be under our direct control.',

                'When selecting or implementing third-party integrations, we aim to consider their accessibility characteristics alongside their functionality and technical requirements.',

                'If you encounter an accessibility problem involving third-party content accessed through our website, you are welcome to report it so we can review the available options.',
            ],
        },

        {
            id: 'known-limitations',
            heading: 'Known Limitations',
            body: [
                'Although accessibility is an important consideration in our website development process, some pages, visual elements, or interactive features may not yet provide an equally accessible experience for every visitor.',

                'Potential accessibility challenges may arise from complex interactive components, browser-specific behavior, third-party integrations, or differences between assistive technologies.',

                'We aim to identify accessibility barriers through ongoing development, testing, and feedback, and to address confirmed issues according to their impact and available resources.',

                'This statement should not be interpreted as confirmation that a comprehensive accessibility audit has been completed or that no accessibility barriers currently exist.',
            ],
        },

        {
            id: 'testing-and-improvements',
            heading: 'Accessibility Testing and Improvements',
            body: [
                'We recognize that maintaining an accessible website requires ongoing attention as content, features, and technologies change.',

                'Our accessibility improvement process may include reviewing semantic page structure, keyboard navigation, color contrast, responsive behavior, form usability, and compatibility with assistive technologies.',

                'Automated accessibility tools can help identify certain technical issues, but they cannot independently verify every aspect of accessibility. Manual evaluation and feedback from people using different accessibility technologies are also valuable.',

                'We aim to consider accessibility when introducing new website features and when making significant changes to existing functionality.',
            ],
        },

        {
            id: 'accessibility-feedback',
            heading: 'Accessibility Feedback and Support',
            body: [
                'We welcome feedback from visitors who experience accessibility barriers while using the Codelaro website.',

                'If you encounter difficulty accessing content, navigating the website, completing a form, or using an interactive feature, please contact us and describe the issue.',

                'When reporting an accessibility problem, it may be helpful to include the page where the issue occurred, a description of the difficulty, and any relevant information about your browser or assistive technology. You do not need to disclose personal medical information.',

                'We will review accessibility feedback and consider appropriate steps to address reported barriers. The time required to investigate and resolve an issue may depend on its nature and technical complexity.',
            ],
        },

        {
            id: 'alternative-access',
            heading: 'Alternative Ways to Access Information',
            body: [
                'If an accessibility barrier prevents you from obtaining information about Codelaro or our services, please contact us using the details provided below.',

                'Where reasonably possible, we will explore alternative ways to provide the information you need or assist you with the relevant website functionality.',

                'Our goal is to ensure that accessibility difficulties do not unnecessarily prevent visitors from learning about our services or communicating with our team.',
            ],
        },

        {
            id: 'statement-updates',
            heading: 'Updates to This Statement',
            body: [
                'We may update this Accessibility Statement as our website evolves, accessibility improvements are implemented, or relevant accessibility standards and practices change.',

                'Any revisions will be reflected in the updated date displayed at the beginning of this document.',

                'We encourage visitors to share accessibility feedback so that we can continue identifying opportunities to improve the website experience.',
            ],
        },

        {
            id: 'contact-us',
            heading: 'Contact Us',
            body: [
                'If you have accessibility-related questions, encounter difficulties using our website, or would like to suggest an improvement, please contact Codelaro.',

                'Email: hello@codelaro.com',

                'Website: codelaro.com',

                'You may also use the contact form on our website if it is accessible to you. When contacting us, please provide enough information to help us understand your request and respond appropriately.',
            ],
        },
    ],
};
