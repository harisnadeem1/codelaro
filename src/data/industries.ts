import type { LucideIcon } from 'lucide-react';
import {
	Briefcase,
	Building2,
	GraduationCap,
	HeartPulse,
	Landmark,
	Plane,
	Rocket,
	ShoppingBag,
	Truck,
} from 'lucide-react';

export interface IndustryChallenge {
	title: string;
	description: string;
}

export interface IndustryTechnology {
	title: string;
	description: string;
}

export interface Industry {
	slug: string;
	title: string;
	/** One-line positioning shown in the index. */
	tagline: string;
	/** Longer editorial description revealed in the detail panel. */
	description: string;
	/** What we deliver for this industry. */
	deliverables: string[];
	icon: LucideIcon;
	/** Intro framing the common digital challenges. */
	challengeIntro: string;
	/** Common digital challenges in this sector. */
	challengePoints: IndustryChallenge[];
	/** Applicable Codelaro service slugs. */
	applicableServices: string[];
	/** Applicable Codelaro solution slugs. */
	applicableSolutions: string[];
	/** Technology possibilities relevant to this industry. */
	technologyPossibilities: IndustryTechnology[];
	/** Related industry slugs for cross-linking. */
	relatedIndustries: string[];
}

export const INDUSTRIES: Industry[] = [
	{
    slug: 'financial-services-fintech',

    title: 'Financial Services & FinTech',

    tagline:
        'Building secure financial technology for a connected world.',

    description:
        'We design and develop secure, scalable financial software for fintech startups, financial institutions, and growing businesses. From payment integrations and digital platforms to financial analytics and automated workflows, we turn complex financial requirements into reliable digital experiences.',

    /* ------------------------------------------------------------------ */
    /* KEY DELIVERABLES                                                   */
    /* ------------------------------------------------------------------ */

    deliverables: [
        'Payment integrations & digital financial platforms',
        'KYC, AML & customer onboarding workflows',
        'Financial dashboards & real-time analytics',
        'Secure API & third-party financial integrations',
        'Transaction processing & reconciliation systems',
        'Scalable architecture & audit-ready workflows',
    ],

    icon: Landmark,

    /* ------------------------------------------------------------------ */
    /* INDUSTRY CHALLENGES                                                */
    /* ------------------------------------------------------------------ */

    challengeIntro:
        'Financial organizations face increasing pressure to deliver seamless digital experiences while protecting sensitive information, managing regulatory requirements, and maintaining reliable operations. Modern financial software must balance security, performance, and usability without compromising the accuracy and integrity of financial transactions.',

    challengePoints: [
        {
            title: 'Security & sensitive financial data',

            description:
                'Financial platforms process sensitive customer information and valuable transaction data. Protecting these assets requires strong authentication, encryption, carefully managed access permissions, and comprehensive audit trails. Security must be considered throughout the software development lifecycle.',
        },

        {
            title: 'Regulatory compliance across markets',

            description:
                'Financial regulations differ across countries, products, and business models. Supporting requirements such as KYC, AML, data protection, and transaction reporting demands adaptable workflows, accurate recordkeeping, and systems that can accommodate evolving regulatory obligations.',
        },

        {
            title: 'Complex payments & financial integrations',

            description:
                'Connecting payment providers, banking services, financial APIs, and existing infrastructure introduces operational complexity. Reliable integrations must handle transaction failures, duplicate requests, reconciliation discrepancies, and differences between financial service providers.',
        },

        {
            title: 'Operational efficiency & data visibility',

            description:
                'Disconnected systems, manual processes, and fragmented financial data make everyday operations more difficult. Organizations need integrated platforms that simplify financial workflows, improve reporting accuracy, and provide timely insights for informed business decisions.',
        },

        {
            title: 'Reliability, performance & scalability',

            description:
                'As transaction volumes and customer expectations increase, financial platforms must remain dependable. Maintaining data consistency, handling peak transaction loads, recovering from failures, and scaling infrastructure require carefully designed systems and reliable operational processes.',
        },
    ],

    /* ------------------------------------------------------------------ */
    /* APPLICABLE SERVICES                                                */
    /* ------------------------------------------------------------------ */

    applicableServices: [
        'payment-integration',
        'custom-software-development',
        'data-analytics',
        'cloud-devops',
    ],

    /* ------------------------------------------------------------------ */
    /* APPLICABLE SOLUTIONS                                               */
    /* ------------------------------------------------------------------ */

    applicableSolutions: [
        'legacy-modernization',
        'scaling-optimization',
        'business-process-automation',
    ],

    /* ------------------------------------------------------------------ */
    /* TECHNOLOGY POSSIBILITIES                                           */
    /* ------------------------------------------------------------------ */

    technologyPossibilities: [
        {
            title: 'Digital payment platforms',

            description:
                'Develop payment experiences with secure gateway integrations, multi-currency capabilities, transaction tracking, and automated reconciliation tailored to your business requirements.',
        },

        {
            title: 'Automated compliance workflows',

            description:
                'Streamline customer onboarding, identity verification, KYC and AML procedures through integrated verification providers, configurable approval processes, and comprehensive audit trails.',
        },

        {
            title: 'Financial analytics & reporting',

            description:
                'Transform complex financial information into interactive dashboards with transaction monitoring, customizable reporting, performance analytics, and relevant operational insights.',
        },

        {
            title: 'Financial API integrations',

            description:
                'Connect banking services, payment gateways, accounting platforms, and third-party financial providers through secure APIs that support reliable data exchange and operational automation.',
        },

        {
            title: 'Transaction & risk management',

            description:
                'Build systems for monitoring transactions, tracking financial exposure, identifying unusual activity, and supporting risk assessment through configurable rules and data-driven analysis.',
        },

        {
            title: 'Scalable financial infrastructure',

            description:
                'Develop resilient financial platforms with secure cloud infrastructure, reliable transaction processing, automated monitoring, and architectures designed to support growing business demands.',
        },
    ],

    /* ------------------------------------------------------------------ */
    /* RELATED INDUSTRIES                                                 */
    /* ------------------------------------------------------------------ */

    relatedIndustries: [
        'ecommerce-retail',
        'startups-technology',
        'professional-services',
    ],

    /* ------------------------------------------------------------------ */
    /* SEARCH ENGINE OPTIMIZATION                                         */
    /* ------------------------------------------------------------------ */

  
},


{
    slug: 'ecommerce-retail',

    title: 'E-commerce & Retail',

    tagline:
        'Digital commerce built to sell, scale, and grow.',

    description:
        'We build high-performance e-commerce websites, custom retail platforms, and connected commerce solutions for ambitious brands and growing businesses. From seamless shopping experiences and secure payment integrations to inventory automation and omnichannel operations, we help retailers create digital experiences designed for sustainable growth.',

    /* ------------------------------------------------------------------ */
    /* KEY DELIVERABLES                                                   */
    /* ------------------------------------------------------------------ */

    deliverables: [
        'Custom e-commerce websites & headless storefronts',
        'Secure checkout & payment gateway integrations',
        'Inventory, order & product catalog management',
        'Omnichannel retail & marketplace integrations',
        'E-commerce analytics & conversion optimization',
        'Scalable commerce platforms & workflow automation',
    ],

    icon: ShoppingBag,

    /* ------------------------------------------------------------------ */
    /* INDUSTRY CHALLENGES                                                */
    /* ------------------------------------------------------------------ */

    challengeIntro:
        'Modern retailers must deliver exceptional shopping experiences while managing increasingly complex operations. From website performance and customer expectations to inventory accuracy and international expansion, successful digital commerce requires technology that connects every stage of the customer journey with efficient business operations.',

    challengePoints: [
        {
            title: 'Website performance & conversion',

            description:
                'Slow storefronts, complicated navigation, and lengthy checkout processes create unnecessary friction in the buying journey. Retailers need fast, mobile-friendly shopping experiences with intuitive product discovery, streamlined checkout, and consistent performance across devices.',
        },

        {
            title: 'Inventory & omnichannel management',

            description:
                'Managing inventory across online stores, marketplaces, warehouses, and physical locations becomes increasingly challenging as businesses expand. Disconnected systems can create stock discrepancies, overselling, delayed fulfillment, and inconsistent customer experiences.',
        },

        {
            title: 'Scalability during peak demand',

            description:
                'Seasonal campaigns, promotional events, and product launches can generate sudden increases in website traffic and order volumes. Commerce platforms must maintain performance, process transactions reliably, and support growing demand without disrupting the shopping experience.',
        },

        {
            title: 'Payments & international commerce',

            description:
                'Expanding into international markets introduces additional complexity around payment methods, currencies, localization, shipping, and regional tax requirements. Retailers need flexible commerce systems that integrate appropriate payment providers and support market-specific customer expectations.',
        },

        {
            title: 'Disconnected systems & manual operations',

            description:
                'Disconnected order management, customer information, payment processing, and fulfillment systems create operational inefficiencies. Integrating these processes and automating repetitive tasks can reduce manual work, improve data accuracy, and provide greater visibility across retail operations.',
        },
    ],

    /* ------------------------------------------------------------------ */
    /* APPLICABLE SERVICES                                                */
    /* ------------------------------------------------------------------ */

    applicableServices: [
        'ecommerce-development',
        'payment-integration',
        'web-development',
        'data-analytics',
    ],

    /* ------------------------------------------------------------------ */
    /* APPLICABLE SOLUTIONS                                               */
    /* ------------------------------------------------------------------ */

    applicableSolutions: [
        'ecommerce-transformation',
        'scaling-optimization',
        'mvp-startup-launch',
    ],

    /* ------------------------------------------------------------------ */
    /* TECHNOLOGY POSSIBILITIES                                           */
    /* ------------------------------------------------------------------ */

    technologyPossibilities: [
        {
            title: 'Headless e-commerce platforms',

            description:
                'Create fast, flexible shopping experiences with headless and composable commerce architecture. Connect modern storefronts with commerce backends, content management systems, and third-party services to support evolving business requirements.',
        },

        {
            title: 'Omnichannel commerce integration',

            description:
                'Connect online stores, marketplaces, physical retail locations, and inventory systems through integrated commerce solutions. Synchronize product information, stock availability, and order data across multiple sales channels.',
        },

        {
            title: 'Intelligent inventory & order management',

            description:
                'Develop centralized inventory and order management systems with automated stock updates, order tracking, fulfillment workflows, and integrations with warehouses, shipping providers, and existing business software.',
        },

        {
            title: 'Checkout & payment optimization',

            description:
                'Build streamlined checkout experiences with secure payment gateway integrations, multiple payment options, multi-currency support, and mobile-friendly purchasing journeys tailored to your customers.',
        },

        {
            title: 'E-commerce analytics & personalization',

            description:
                'Turn customer behavior, transaction information, and sales performance into actionable insights. Develop analytics dashboards, customer segmentation tools, and personalized shopping experiences using relevant commerce data.',
        },

        {
            title: 'Commerce automation & scalability',

            description:
                'Automate repetitive retail operations and prepare commerce platforms for future growth. Integrate order processing, customer notifications, marketing workflows, and scalable infrastructure to support expanding business operations.',
        },
    ],

    /* ------------------------------------------------------------------ */
    /* RELATED INDUSTRIES                                                 */
    /* ------------------------------------------------------------------ */

    relatedIndustries: [
        'logistics-transportation',
        'startups-technology',
        'financial-services-fintech',
    ],

    /* ------------------------------------------------------------------ */
    /* SEARCH ENGINE OPTIMIZATION                                         */
    /* ------------------------------------------------------------------ */

   
},



	{
    slug: 'healthcare',

    title: 'Healthcare',

    tagline:
        'Smarter healthcare technology. Better patient experiences.',

    description:
        'We develop secure, scalable healthcare software that helps healthcare organizations improve patient experiences, streamline clinical workflows, and deliver more connected digital services. From patient portals and telehealth platforms to healthcare management systems and intelligent automation, we build technology around the needs of patients, clinicians, and healthcare providers.',

    /* ------------------------------------------------------------------ */
    /* KEY DELIVERABLES                                                   */
    /* ------------------------------------------------------------------ */

    deliverables: [
        'Custom healthcare software & patient portals',
        'Telehealth platforms & appointment management',
        'Electronic health record system integrations',
        'Healthcare workflow automation & analytics',
        'Secure patient data management & access controls',
        'Healthcare mobile applications & digital experiences',
    ],

    icon: HeartPulse,

    /* ------------------------------------------------------------------ */
    /* INDUSTRY CHALLENGES                                                */
    /* ------------------------------------------------------------------ */

    challengeIntro:
        'Healthcare organizations must balance patient expectations, clinical efficiency, and strict data protection requirements while adapting to evolving digital technologies. Building effective healthcare software requires careful consideration of privacy, interoperability, accessibility, and the operational demands of modern healthcare environments.',

    challengePoints: [
        {
            title: 'Patient data security & regulatory requirements',

            description:
                'Healthcare platforms manage highly sensitive patient information that requires appropriate protection. Organizations must implement strong authentication, encryption, access controls, and audit trails while addressing applicable data protection and healthcare regulations across their operating markets.',
        },

        {
            title: 'Disconnected healthcare systems',

            description:
                'Healthcare providers often rely on separate systems for patient records, appointments, billing, and clinical operations. Limited interoperability creates fragmented information, duplicate administrative work, and inefficient communication between departments and healthcare professionals.',
        },

        {
            title: 'Patient accessibility & digital engagement',

            description:
                'Patients expect convenient access to appointments, medical information, and healthcare services across multiple devices. Creating accessible digital experiences for people with different abilities, technical skills, and healthcare needs remains an important challenge for providers.',
        },

        {
            title: 'Clinical efficiency & administrative workload',

            description:
                'Healthcare professionals manage demanding clinical responsibilities alongside extensive administrative tasks. Inefficient scheduling, manual documentation, and disconnected workflows consume valuable time and create opportunities for operational errors.',
        },

        {
            title: 'Reliable healthcare technology & scalability',

            description:
                'Healthcare organizations depend on reliable digital systems to support daily operations and patient services. Platforms must maintain consistent performance, protect data integrity, integrate with existing infrastructure, and accommodate changing operational demands as services expand.',
        },
    ],

    /* ------------------------------------------------------------------ */
    /* APPLICABLE SERVICES                                                */
    /* ------------------------------------------------------------------ */

    applicableServices: [
        'web-development',
        'mobile-app-development',
        'custom-software-development',
        'ui-ux-design',
    ],

    /* ------------------------------------------------------------------ */
    /* APPLICABLE SOLUTIONS                                               */
    /* ------------------------------------------------------------------ */

    applicableSolutions: [
        'digital-transformation',
        'ai-transformation',
        'legacy-modernization',
    ],

    /* ------------------------------------------------------------------ */
    /* TECHNOLOGY POSSIBILITIES                                           */
    /* ------------------------------------------------------------------ */

    technologyPossibilities: [
        {
            title: 'Digital patient portals',

            description:
                'Develop secure, accessible patient portals that simplify appointment scheduling, medical information access, and communication with healthcare providers. Create intuitive digital experiences that support patient engagement and reduce unnecessary administrative work.',
        },

        {
            title: 'Telehealth & virtual care platforms',

            description:
                'Build digital healthcare platforms with video consultations, online scheduling, secure communication, and remote patient monitoring integrations. Extend access to healthcare services while supporting appropriate privacy and operational requirements.',
        },

        {
            title: 'Healthcare system interoperability',

            description:
                'Connect electronic health records, appointment systems, laboratory services, and other healthcare applications through secure integrations. Support relevant interoperability standards, such as HL7 FHIR where appropriate, to improve authorized information exchange between healthcare systems.',
        },

        {
            title: 'Healthcare workflow automation',

            description:
                'Streamline administrative processes through automated appointment reminders, patient registration, document management, billing integrations, and configurable approval workflows. Reduce repetitive tasks while maintaining appropriate oversight and operational control.',
        },

        {
            title: 'Healthcare analytics & reporting',

            description:
                'Transform authorized healthcare and operational data into meaningful dashboards and reports. Provide visibility into appointment trends, resource utilization, patient engagement, and operational performance while applying appropriate privacy safeguards.',
        },

        {
            title: 'Responsible AI healthcare solutions',

            description:
                'Explore AI-assisted documentation, medical record summarization, administrative automation, and clinical information retrieval. Design solutions with appropriate data protection, evaluation, and human oversight, ensuring clinical decisions remain under qualified professional responsibility.',
        },
    ],

    /* ------------------------------------------------------------------ */
    /* RELATED INDUSTRIES                                                 */
    /* ------------------------------------------------------------------ */

    relatedIndustries: [
        'education-elearning',
        'professional-services',
        'startups-technology',
    ],
},



	{
    slug: 'education-elearning',

    title: 'Education & E-learning',

    tagline:
        'Building smarter digital experiences for modern learning.',

    description:
        'We design and develop scalable education software, e-learning platforms, and digital learning solutions for educational institutions, EdTech startups, and training organizations. From custom learning management systems and interactive classrooms to student analytics and AI-assisted learning, we create accessible technology that connects educators and learners.',

    /* ------------------------------------------------------------------ */
    /* KEY DELIVERABLES                                                   */
    /* ------------------------------------------------------------------ */

    deliverables: [
        'Custom learning management systems & e-learning platforms',
        'Virtual classrooms & interactive learning experiences',
        'Student management & assessment systems',
        'Learning analytics & performance dashboards',
        'AI-assisted learning & educational automation',
        'Accessible mobile learning & multilingual platforms',
    ],

    icon: GraduationCap,

    /* ------------------------------------------------------------------ */
    /* INDUSTRY CHALLENGES                                                */
    /* ------------------------------------------------------------------ */

    challengeIntro:
        'Educational institutions and digital learning businesses face growing expectations for accessible, engaging, and personalized learning experiences. Delivering effective online education requires more than publishing course materials. Organizations must manage student engagement, integrate disconnected systems, measure learning outcomes, and provide reliable access across different devices and locations.',

    challengePoints: [
        {
            title: 'Student engagement & learning retention',

            description:
                'Maintaining student motivation in digital learning environments can be challenging. Passive content delivery, limited interaction, and complicated navigation can reduce engagement. Educational platforms need intuitive interfaces, interactive learning activities, structured course progression, and meaningful feedback to support better learning experiences.',
        },

        {
            title: 'Accessibility & inclusive learning',

            description:
                'Learners have different abilities, technical skills, languages, and access to digital devices. Educational organizations need accessible, responsive learning platforms that accommodate diverse requirements, support inclusive learning experiences, and provide consistent access across mobile devices, tablets, and desktop computers.',
        },

        {
            title: 'Disconnected educational systems',

            description:
                'Educational institutions often operate separate systems for course delivery, student records, assessments, communication, and administration. Limited integration creates duplicated information, inefficient workflows, and additional administrative responsibilities for educators and institutional staff.',
        },

        {
            title: 'Measuring learning progress & outcomes',

            description:
                'Understanding learner engagement and educational performance requires more than tracking course completion. Institutions and training providers need meaningful analytics that connect assessment results, learning activities, and student progress while protecting personal information and supporting informed educational decisions.',
        },

        {
            title: 'Scalability & evolving learning requirements',

            description:
                'As online learning programs expand, platforms must support increasing numbers of learners, instructors, courses, and simultaneous activities. Organizations also need flexible systems that accommodate new educational technologies, multilingual content, virtual classrooms, and changing instructional requirements without disrupting the learning experience.',
        },
    ],

    /* ------------------------------------------------------------------ */
    /* APPLICABLE SERVICES                                                */
    /* ------------------------------------------------------------------ */

    applicableServices: [
        'web-development',
        'mobile-app-development',
        'ui-ux-design',
        'data-analytics',
    ],

    /* ------------------------------------------------------------------ */
    /* APPLICABLE SOLUTIONS                                               */
    /* ------------------------------------------------------------------ */

    applicableSolutions: [
        'digital-transformation',
        'mvp-startup-launch',
        'ai-transformation',
    ],

    /* ------------------------------------------------------------------ */
    /* TECHNOLOGY POSSIBILITIES                                           */
    /* ------------------------------------------------------------------ */

    technologyPossibilities: [
        {
            title: 'Custom learning management systems',

            description:
                'Develop flexible learning management systems with structured course delivery, enrollment management, instructor dashboards, assignments, and integrated assessments. Create learning environments tailored to educational institutions, online academies, and corporate training programs.',
        },

        {
            title: 'Interactive & virtual learning platforms',

            description:
                'Build engaging digital classrooms with video conferencing integrations, interactive lessons, collaborative activities, quizzes, and real-time communication. Support different learning formats, including self-paced courses, instructor-led sessions, and blended learning experiences.',
        },

        {
            title: 'Student management & automation',

            description:
                'Simplify educational administration through integrated student management, automated enrollment, attendance tracking, assessment workflows, and communication systems. Connect existing educational applications to reduce repetitive tasks and improve operational efficiency.',
        },

        {
            title: 'Learning analytics & reporting',

            description:
                'Transform educational data into meaningful insights through interactive dashboards, progress tracking, assessment analytics, and customizable reports. Help educators and administrators identify learning trends, understand engagement, and make informed decisions while respecting student privacy.',
        },

        {
            title: 'AI-assisted personalized learning',

            description:
                'Explore AI-assisted learning experiences with personalized content recommendations, adaptive practice activities, intelligent educational assistants, and automated feedback. Design these capabilities with appropriate safeguards, transparency, and educator oversight.',
        },

        {
            title: 'Accessible & multilingual education',

            description:
                'Create responsive learning applications that support accessibility requirements, multiple languages, and education across different devices. Integrate relevant learning standards, such as SCORM or LTI where appropriate, to improve compatibility with existing educational platforms.',
        },
    ],

    /* ------------------------------------------------------------------ */
    /* RELATED INDUSTRIES                                                 */
    /* ------------------------------------------------------------------ */

    relatedIndustries: [
        'healthcare',
        'professional-services',
        'startups-technology',
    ],
},



	{
    slug: 'real-estate',

    title: 'Real Estate',

    tagline:
        'Smarter property platforms. Seamless real estate experiences.',

    description:
        'We design and develop custom real estate software, property marketplaces, and digital solutions for real estate agencies, property management companies, and PropTech businesses. From intelligent property search and immersive virtual tours to CRM systems and automated transaction workflows, we build scalable technology that connects buyers, sellers, agents, and property managers.',

    /* ------------------------------------------------------------------ */
    /* KEY DELIVERABLES                                                   */
    /* ------------------------------------------------------------------ */

    deliverables: [
        'Custom real estate websites & property marketplaces',
        'Advanced property search & listing management',
        'Real estate CRM & lead management systems',
        'Virtual property tours & interactive experiences',
        'Property management & workflow automation',
        'Real estate analytics & third-party integrations',
    ],

    icon: Building2,

    /* ------------------------------------------------------------------ */
    /* INDUSTRY CHALLENGES                                                */
    /* ------------------------------------------------------------------ */

    challengeIntro:
        'Real estate businesses face increasing pressure to deliver seamless digital property experiences while managing complex operations. From maintaining accurate property listings and generating qualified leads to coordinating transactions and managing multiple properties, modern real estate platforms must connect customer experiences with efficient business processes.',

    challengePoints: [
        {
            title: 'Property discovery & user experience',

            description:
                'Buyers and renters expect fast, intuitive property searches with accurate information, advanced filters, interactive maps, and relevant recommendations. Poor navigation, outdated listings, and limited search functionality can make property discovery frustrating and reduce opportunities for real estate businesses.',
        },

        {
            title: 'Property listings & data accuracy',

            description:
                'Managing property information across websites, listing portals, agencies, and external databases can create inconsistencies. Real estate businesses need reliable systems that synchronize property details, availability, pricing, and media while reducing duplicate listings and unnecessary administrative work.',
        },

        {
            title: 'Lead management & customer engagement',

            description:
                'Real estate professionals handle enquiries from multiple channels while coordinating property viewings and maintaining relationships with prospective buyers and tenants. Disconnected communication tools and manual follow-ups can create delays, missed opportunities, and inefficient sales processes.',
        },

        {
            title: 'Complex transactions & documentation',

            description:
                'Property transactions involve multiple parties, extensive documentation, verification procedures, and region-specific legal requirements. Managing these activities through disconnected systems can delay transactions and make it difficult to maintain accurate records and clear communication.',
        },

        {
            title: 'Scalability & operational efficiency',

            description:
                'As real estate businesses expand across properties, locations, and markets, managing growing volumes of listings, enquiries, and transactions becomes increasingly complex. Organizations need scalable digital platforms that integrate existing tools, automate repetitive processes, and provide reliable operational visibility.',
        },
    ],

    /* ------------------------------------------------------------------ */
    /* APPLICABLE SERVICES                                                */
    /* ------------------------------------------------------------------ */

    applicableServices: [
        'web-development',
        'custom-software-development',
        'ui-ux-design',
        'api-system-integration',
    ],

    /* ------------------------------------------------------------------ */
    /* APPLICABLE SOLUTIONS                                               */
    /* ------------------------------------------------------------------ */

    applicableSolutions: [
        'digital-transformation',
        'mvp-startup-launch',
        'business-process-automation',
    ],

    /* ------------------------------------------------------------------ */
    /* TECHNOLOGY POSSIBILITIES                                           */
    /* ------------------------------------------------------------------ */

    technologyPossibilities: [
        {
            title: 'Smart property marketplaces',

            description:
                'Build custom real estate marketplaces with advanced property search, interactive maps, location-based filters, saved searches, and personalized property recommendations. Create responsive platforms that help buyers, tenants, and investors discover relevant properties.',
        },

        {
            title: 'Immersive virtual property experiences',

            description:
                'Integrate high-resolution photography, video walkthroughs, interactive floor plans, and third-party 3D virtual tour technologies. Help prospective buyers and tenants explore properties remotely through engaging digital experiences.',
        },

        {
            title: 'Real estate CRM & lead automation',

            description:
                'Develop centralized CRM platforms that connect property enquiries, customer profiles, viewing appointments, and sales pipelines. Automate lead distribution, follow-up reminders, and relevant customer communication to support more efficient real estate operations.',
        },

        {
            title: 'Property management systems',

            description:
                'Create integrated property management software for managing rental properties, tenant information, lease documentation, maintenance requests, and payment provider integrations. Simplify daily operations through centralized dashboards and automated administrative workflows.',
        },

        {
            title: 'Digital transactions & document management',

            description:
                'Streamline property transactions through secure document management, configurable approval workflows, identity verification integrations, and electronic signature services where legally appropriate. Improve transaction visibility while maintaining access controls and audit trails.',
        },

        {
            title: 'Real estate analytics & integrations',

            description:
                'Connect property platforms with CRM systems, mapping services, authorized listing databases, and third-party business applications. Develop analytics dashboards that provide insights into property enquiries, listing performance, occupancy trends, and operational activity.',
        },
    ],

    /* ------------------------------------------------------------------ */
    /* RELATED INDUSTRIES                                                 */
    /* ------------------------------------------------------------------ */

    relatedIndustries: [
        'professional-services',
        'ecommerce-retail',
        'startups-technology',
    ],
},



	{
    slug: 'professional-services',

    title: 'Professional Services',

    tagline:
        'Smarter systems for service-driven businesses.',

    description:
        'We design and develop custom software for consulting firms, agencies, and professional service providers looking to streamline operations and deliver exceptional client experiences. From secure client portals and project management systems to workflow automation, resource planning, and billing integrations, we build scalable digital solutions that help service businesses operate efficiently and grow.',

    /* ------------------------------------------------------------------ */
    /* KEY DELIVERABLES                                                   */
    /* ------------------------------------------------------------------ */

    deliverables: [
        'Custom professional services management software',
        'Secure client portals & collaboration platforms',
        'Project management & resource planning systems',
        'CRM, scheduling & business workflow automation',
        'Time tracking, invoicing & accounting integrations',
        'Business analytics & document management systems',
    ],

    icon: Briefcase,

    /* ------------------------------------------------------------------ */
    /* INDUSTRY CHALLENGES                                                */
    /* ------------------------------------------------------------------ */

    challengeIntro:
        'Professional service businesses depend on effective collaboration, efficient operations, and strong client relationships. However, managing multiple projects, coordinating distributed teams, tracking billable work, and maintaining consistent service delivery can become increasingly complex. Modern digital solutions must connect people, processes, and information while providing the flexibility required to support business growth.',

    challengePoints: [
        {
            title: 'Disconnected business processes',

            description:
                'Professional service organizations often rely on separate applications for project management, customer relationships, scheduling, billing, and internal communication. Disconnected systems create duplicated information, repetitive administrative tasks, and limited visibility across business operations.',
        },

        {
            title: 'Project delivery & resource management',

            description:
                'Managing multiple clients, project deadlines, employee availability, and changing workloads requires accurate coordination. Without centralized project and resource management, organizations may experience scheduling conflicts, inefficient resource allocation, and difficulties maintaining consistent service delivery.',
        },

        {
            title: 'Client communication & collaboration',

            description:
                'Clients increasingly expect transparent communication, convenient document sharing, and timely updates throughout their engagements. Scattered emails, disconnected collaboration tools, and limited project visibility can create communication gaps and make it difficult to maintain consistent client experiences.',
        },

        {
            title: 'Time tracking & financial operations',

            description:
                'Accurate time tracking, project budgeting, and timely invoicing are essential for many professional service businesses. Manual processes and disconnected financial systems can lead to billing discrepancies, delayed payments, limited profitability insights, and additional administrative responsibilities.',
        },

        {
            title: 'Data security & operational scalability',

            description:
                'Professional service firms regularly manage confidential client information, contractual documents, and valuable business knowledge. As organizations expand across teams, locations, and international markets, they need secure systems that support controlled access, efficient knowledge management, and scalable operations.',
        },
    ],

    /* ------------------------------------------------------------------ */
    /* APPLICABLE SERVICES                                                */
    /* ------------------------------------------------------------------ */

    applicableServices: [
        'custom-software-development',
        'web-development',
        'api-system-integration',
        'data-analytics',
    ],

    /* ------------------------------------------------------------------ */
    /* APPLICABLE SOLUTIONS                                               */
    /* ------------------------------------------------------------------ */

    applicableSolutions: [
        'business-process-automation',
        'digital-transformation',
        'team-extension',
    ],

    /* ------------------------------------------------------------------ */
    /* TECHNOLOGY POSSIBILITIES                                           */
    /* ------------------------------------------------------------------ */

    technologyPossibilities: [
        {
            title: 'Client portals & digital collaboration',

            description:
                'Develop secure client portals where businesses and customers can communicate, exchange documents, monitor project progress, and manage service requests. Create personalized digital workspaces with role-based access controls, notifications, and integrations with existing business applications.',
        },

        {
            title: 'Project & resource management',

            description:
                'Build centralized platforms for managing projects, employee availability, task assignments, deadlines, and resource allocation. Provide real-time visibility into workloads and project progress while supporting collaboration across departments, remote teams, and international locations.',
        },

        {
            title: 'CRM & business workflow automation',

            description:
                'Connect customer relationship management systems with automated lead management, client onboarding, appointment scheduling, and internal approval workflows. Integrate existing business applications to reduce repetitive administrative tasks and maintain consistent operational processes.',
        },

        {
            title: 'Time tracking & financial integrations',

            description:
                'Develop integrated solutions for tracking billable hours, managing project budgets, generating invoices, and connecting with accounting and payment platforms. Support configurable billing models, multi-currency requirements, and financial reporting tailored to your business operations.',
        },

        {
            title: 'Knowledge & document management',

            description:
                'Create secure digital environments for organizing contracts, proposals, project documentation, and internal business knowledge. Introduce advanced search, document version control, permission-based access, and approval workflows to simplify information management and collaboration.',
        },

        {
            title: 'Business intelligence & performance analytics',

            description:
                'Transform project, client, financial, and operational data into interactive dashboards and customizable reports. Track resource utilization, project profitability, service delivery performance, and relevant business indicators to support informed management decisions.',
        },
    ],

    /* ------------------------------------------------------------------ */
    /* RELATED INDUSTRIES                                                 */
    /* ------------------------------------------------------------------ */

    relatedIndustries: [
        'real-estate',
        'financial-services-fintech',
        'startups-technology',
    ],
},




	{
    slug: 'logistics-transportation',

    title: 'Logistics & Transportation',

    tagline:
        'Smarter logistics. Connected operations. Seamless delivery.',

    description:
        'We design and develop custom logistics software, transportation management platforms, and digital supply chain solutions for logistics providers, freight companies, and transportation businesses. From real-time shipment tracking and fleet management to warehouse automation and system integrations, we build scalable technology that improves operational visibility and connects every stage of the logistics journey.',

    /* ------------------------------------------------------------------ */
    /* KEY DELIVERABLES                                                   */
    /* ------------------------------------------------------------------ */

    deliverables: [
        'Custom logistics & transportation management software',
        'Real-time shipment tracking & fleet management',
        'Route planning & transportation optimization',
        'Warehouse & inventory management systems',
        'Carrier, ERP & supply chain integrations',
        'Logistics analytics & operational automation',
    ],

    icon: Truck,

    /* ------------------------------------------------------------------ */
    /* INDUSTRY CHALLENGES                                                */
    /* ------------------------------------------------------------------ */

    challengeIntro:
        'Logistics and transportation businesses operate in complex environments where visibility, coordination, and reliability are essential. Managing shipments, vehicles, warehouses, and multiple service providers across different locations requires connected digital systems. Modern logistics technology must simplify operational complexity while supporting efficient transportation, accurate information exchange, and changing business demands.',

    challengePoints: [
        {
            title: 'Limited shipment visibility & tracking',

            description:
                'Logistics providers manage shipments across multiple transportation networks, carriers, and delivery locations. Disconnected tracking systems and delayed information updates make it difficult to monitor shipment progress, identify disruptions, and provide customers with accurate delivery information.',
        },

        {
            title: 'Route planning & fleet efficiency',

            description:
                'Transportation businesses must coordinate vehicles, drivers, delivery schedules, and changing route conditions while managing operational costs. Inefficient planning, limited fleet visibility, and manual dispatch processes can increase fuel consumption, create scheduling conflicts, and affect delivery performance.',
        },

        {
            title: 'Warehouse & inventory coordination',

            description:
                'Managing inventory across warehouses, distribution centers, and fulfillment locations requires accurate information and coordinated operations. Disconnected warehouse systems, manual inventory updates, and limited stock visibility can create fulfillment delays, inventory discrepancies, and unnecessary operational complexity.',
        },

        {
            title: 'Disconnected systems & partner integrations',

            description:
                'Logistics operations depend on information exchange between transportation management systems, warehouse platforms, ERP applications, carriers, and customers. Integrating these systems can be challenging because of inconsistent data formats, different technical standards, and varying levels of digital infrastructure.',
        },

        {
            title: 'Operational scalability & exception management',

            description:
                'Growing transportation networks and increasing shipment volumes introduce additional operational complexity. Logistics platforms must maintain reliable performance, support multiple locations and international operations, and provide effective tools for managing shipment delays, delivery exceptions, and unexpected disruptions.',
        },
    ],

    /* ------------------------------------------------------------------ */
    /* APPLICABLE SERVICES                                                */
    /* ------------------------------------------------------------------ */

    applicableServices: [
        'custom-software-development',
        'api-system-integration',
        'mobile-app-development',
        'cloud-devops',
    ],

    /* ------------------------------------------------------------------ */
    /* APPLICABLE SOLUTIONS                                               */
    /* ------------------------------------------------------------------ */

    applicableSolutions: [
        'business-process-automation',
        'legacy-modernization',
        'scaling-optimization',
    ],

    /* ------------------------------------------------------------------ */
    /* TECHNOLOGY POSSIBILITIES                                           */
    /* ------------------------------------------------------------------ */

    technologyPossibilities: [
        {
            title: 'Real-time shipment & fleet tracking',

            description:
                'Develop connected tracking platforms that provide shipment status, vehicle location, delivery progress, and estimated arrival information. Integrate GPS systems, telematics providers, and carrier tracking services to improve operational visibility and customer communication.',
        },

        {
            title: 'Transportation & route optimization',

            description:
                'Build transportation management solutions with intelligent route planning, delivery scheduling, vehicle allocation, and dispatch management. Integrate mapping services and relevant operational data to support efficient transportation planning and adaptable delivery operations.',
        },

        {
            title: 'Warehouse & inventory management',

            description:
                'Create integrated warehouse management systems for inventory tracking, receiving, picking, packing, and order fulfillment. Connect warehouse operations with transportation and inventory platforms to improve stock visibility and coordination across multiple locations.',
        },

        {
            title: 'Carrier & supply chain integrations',

            description:
                'Connect transportation management systems, warehouse platforms, ERP applications, shipping providers, and external business partners through secure APIs and relevant electronic data interchange standards. Automate information exchange, shipment updates, and operational workflows.',
        },

        {
            title: 'Logistics analytics & operational intelligence',

            description:
                'Transform shipment, fleet, warehouse, and delivery information into interactive dashboards and customizable reports. Monitor transportation performance, delivery exceptions, resource utilization, and operational trends to support informed logistics decisions.',
        },

        {
            title: 'Logistics automation & scalable infrastructure',

            description:
                'Streamline shipment processing, dispatch coordination, customer notifications, and exception management through integrated automation. Develop reliable cloud-based logistics platforms designed to accommodate increasing shipment volumes, distributed operations, and evolving business requirements.',
        },
    ],

    /* ------------------------------------------------------------------ */
    /* RELATED INDUSTRIES                                                 */
    /* ------------------------------------------------------------------ */

    relatedIndustries: [
        'ecommerce-retail',
        'travel-hospitality',
        'professional-services',
    ],
},



	{
    slug: 'travel-hospitality',

    title: 'Travel & Hospitality',

    tagline:
        'Seamless travel technology. Exceptional guest experiences.',

    description:
        'We design and develop custom travel and hospitality software for hotels, resorts, travel agencies, tour operators, and TravelTech businesses. From intuitive booking platforms and secure payment integrations to guest-facing applications and hospitality management systems, we create scalable digital solutions that simplify operations and connect every stage of the customer journey.',

    /* ------------------------------------------------------------------ */
    /* KEY DELIVERABLES                                                   */
    /* ------------------------------------------------------------------ */

    deliverables: [
        'Custom travel websites & online booking platforms',
        'Hotel reservation & property management integrations',
        'Guest experience applications & digital check-in',
        'Multi-currency payments & multilingual booking experiences',
        'Booking, availability & channel management systems',
        'Hospitality analytics & operational automation',
    ],

    icon: Plane,

    /* ------------------------------------------------------------------ */
    /* INDUSTRY CHALLENGES                                                */
    /* ------------------------------------------------------------------ */

    challengeIntro:
        'Travel and hospitality businesses must deliver convenient digital experiences while managing complex booking processes, fluctuating demand, and increasingly diverse customer expectations. From maintaining accurate availability across multiple channels to coordinating guest services and international payments, modern hospitality technology must connect customer experiences with efficient operational systems.',

    challengePoints: [
        {
            title: 'Booking experience & conversion',

            description:
                'Travelers expect simple, transparent booking experiences across mobile devices and desktop platforms. Complicated reservation processes, unclear pricing, limited payment options, and slow websites can create friction. Businesses need intuitive booking journeys that provide accurate information and make reservations straightforward.',
        },

        {
            title: 'Reservation & distribution management',

            description:
                'Hotels, travel agencies, and hospitality providers often manage reservations across their own websites, online travel agencies, and external distribution platforms. Keeping availability, pricing, and booking information synchronized is essential to reducing reservation conflicts, avoiding overbooking, and maintaining consistent customer experiences.',
        },

        {
            title: 'Personalized guest experiences',

            description:
                'Customer expectations extend beyond the initial reservation to include communication, arrival, service requests, and post-stay engagement. Disconnected guest information and fragmented communication channels make it difficult for hospitality businesses to deliver consistent, personalized services throughout the customer journey.',
        },

        {
            title: 'International payments & localization',

            description:
                'Travel and hospitality businesses frequently serve international customers with different languages, currencies, payment preferences, and regional expectations. Supporting international transactions, localized booking experiences, and appropriate payment integrations introduces additional technical and operational complexity.',
        },

        {
            title: 'Operational efficiency & scalability',

            description:
                'Coordinating reservations, housekeeping, customer enquiries, staff schedules, and service requests becomes increasingly complex as hospitality businesses expand. Organizations need connected systems that reduce repetitive administrative tasks, improve communication between teams, and support reliable operations during periods of high demand.',
        },
    ],

    /* ------------------------------------------------------------------ */
    /* APPLICABLE SERVICES                                                */
    /* ------------------------------------------------------------------ */

    applicableServices: [
        'web-development',
        'mobile-app-development',
        'payment-integration',
        'ui-ux-design',
    ],

    /* ------------------------------------------------------------------ */
    /* APPLICABLE SOLUTIONS                                               */
    /* ------------------------------------------------------------------ */

    applicableSolutions: [
        'mvp-startup-launch',
        'digital-transformation',
        'ecommerce-transformation',
    ],

    /* ------------------------------------------------------------------ */
    /* TECHNOLOGY POSSIBILITIES                                           */
    /* ------------------------------------------------------------------ */

    technologyPossibilities: [
        {
            title: 'Custom booking & reservation platforms',

            description:
                'Develop responsive travel and hospitality booking platforms with intuitive search, real-time availability integrations, transparent pricing, secure payment processing, and automated booking confirmations. Create reservation experiences tailored to hotels, travel agencies, tour operators, and other hospitality businesses.',
        },

        {
            title: 'Guest experience & mobile applications',

            description:
                'Build guest-facing mobile and web applications that simplify digital check-in, reservation management, service requests, and customer communication. Create connected digital experiences that support guests before arrival, throughout their stay, and after departure.',
        },

        {
            title: 'Reservation & channel management integrations',

            description:
                'Connect booking platforms with property management systems, channel managers, and supported third-party reservation providers. Synchronize relevant availability, pricing, and reservation information to reduce manual updates and improve coordination across distribution channels.',
        },

        {
            title: 'International booking & payment solutions',

            description:
                'Create multilingual booking experiences with localized content, multi-currency capabilities, secure payment gateway integrations, and market-specific payment options. Support international customers through flexible digital experiences tailored to relevant business and regional requirements.',
        },

        {
            title: 'Hospitality operations & workflow automation',

            description:
                'Develop integrated systems for managing housekeeping activities, staff coordination, service requests, guest communication, and operational workflows. Automate repetitive administrative tasks and connect relevant departments to support efficient hospitality operations.',
        },

        {
            title: 'Travel analytics & business intelligence',

            description:
                'Transform booking, customer engagement, operational, and financial data into interactive dashboards and customizable reports. Monitor reservation trends, booking channel performance, occupancy, and relevant customer behavior to support informed hospitality management decisions.',
        },
    ],

    /* ------------------------------------------------------------------ */
    /* RELATED INDUSTRIES                                                 */
    /* ------------------------------------------------------------------ */

    relatedIndustries: [
        'logistics-transportation',
        'ecommerce-retail',
        'real-estate',
    ],
},




	{
    slug: 'startups-technology',

    title: 'Startups & Technology',

    tagline:
        'From ambitious ideas to scalable digital products.',

    description:
        'We partner with startups, entrepreneurs, and technology companies to transform innovative ideas into reliable digital products. From MVP development and custom SaaS platforms to scalable software architecture and ongoing product engineering, we provide the technical expertise needed to launch, improve, and grow digital businesses.',

    /* ------------------------------------------------------------------ */
    /* KEY DELIVERABLES                                                   */
    /* ------------------------------------------------------------------ */

    deliverables: [
        'MVP development & startup product engineering',
        'Custom SaaS platforms & web applications',
        'Mobile application development & product design',
        'Scalable architecture & cloud infrastructure',
        'Dedicated development & team extension',
        'Product analytics, automation & ongoing optimization',
    ],

    icon: Rocket,

    /* ------------------------------------------------------------------ */
    /* INDUSTRY CHALLENGES                                                */
    /* ------------------------------------------------------------------ */

    challengeIntro:
        'Startups and technology businesses operate in competitive environments where speed, innovation, and efficient resource allocation are essential. Transforming an idea into a successful digital product requires balancing rapid development with technical reliability, managing limited resources, responding to customer feedback, and preparing technology for changing business requirements.',

    challengePoints: [
        {
            title: 'Turning ideas into market-ready products',

            description:
                'Early-stage startups need to validate business ideas and launch functional products without investing unnecessarily in unproven features. Defining the right MVP, prioritizing essential functionality, and establishing a practical development roadmap can be challenging when time and resources are limited.',
        },

        {
            title: 'Balancing development speed & software quality',

            description:
                'Moving quickly is essential for startups, but rushed technical decisions can introduce security vulnerabilities, unstable applications, and growing technical debt. Product teams need development processes that support rapid iteration while maintaining code quality, reliability, and the flexibility to accommodate future requirements.',
        },

        {
            title: 'Limited technical resources & expertise',

            description:
                'Building and maintaining an experienced technical team requires significant time and investment. Startups may struggle to access specialized expertise in software architecture, frontend and backend development, cloud infrastructure, and product design while managing operational budgets and recruitment timelines.',
        },

        {
            title: 'Scaling products & infrastructure',

            description:
                'As digital products gain users and introduce new functionality, their original technical architecture may encounter performance, reliability, and integration limitations. Technology businesses need adaptable systems that can accommodate increasing demand without unnecessary infrastructure costs or disruptive redevelopment.',
        },

        {
            title: 'Product validation & continuous improvement',

            description:
                'Understanding customer behavior and identifying valuable product improvements requires reliable information. Limited analytics, disconnected feedback channels, and inefficient development workflows can make it difficult to prioritize features, evaluate product performance, and respond effectively to changing market requirements.',
        },
    ],

    /* ------------------------------------------------------------------ */
    /* APPLICABLE SERVICES                                                */
    /* ------------------------------------------------------------------ */

    applicableServices: [
        'web-development',
        'mobile-app-development',
        'cloud-devops',
        'saas-development',
    ],

    /* ------------------------------------------------------------------ */
    /* APPLICABLE SOLUTIONS                                               */
    /* ------------------------------------------------------------------ */

    applicableSolutions: [
        'mvp-startup-launch',
        'scaling-optimization',
        'team-extension',
    ],

    /* ------------------------------------------------------------------ */
    /* TECHNOLOGY POSSIBILITIES                                           */
    /* ------------------------------------------------------------------ */

    technologyPossibilities: [
        {
            title: 'MVP development & rapid prototyping',

            description:
                'Transform product ideas into functional minimum viable products with carefully prioritized features, intuitive interfaces, and reliable technical foundations. Develop prototypes and launch-ready applications that support early customer validation and continuous product improvement.',
        },

        {
            title: 'Custom SaaS platform development',

            description:
                'Build scalable software-as-a-service platforms with subscription management, secure authentication, multi-tenant architecture where required, payment integrations, and administrative dashboards. Create flexible digital products designed around your business model and evolving customer requirements.',
        },

        {
            title: 'Scalable cloud architecture',

            description:
                'Design adaptable software architecture and cloud infrastructure that support growing applications and changing workloads. Implement appropriate deployment pipelines, performance monitoring, database optimization, and infrastructure automation to improve operational reliability and support future expansion.',
        },

        {
            title: 'Product engineering & team extension',

            description:
                'Extend your development capabilities with additional software engineering and product development support. Collaborate on application development, technical improvements, API integrations, feature implementation, and ongoing maintenance using workflows aligned with your existing team and project requirements.',
        },

        {
            title: 'Product analytics & growth intelligence',

            description:
                'Integrate product analytics, event tracking, conversion funnels, and performance dashboards to understand how customers interact with your applications. Use relevant product data and customer feedback to identify improvement opportunities and support informed product development decisions.',
        },

        {
            title: 'AI integration & intelligent automation',

            description:
                'Explore practical artificial intelligence integrations and automated workflows that enhance digital products and business operations. Develop AI-assisted features, intelligent customer interactions, data processing workflows, and integrations with suitable AI services while maintaining appropriate security and human oversight.',
        },
    ],

    /* ------------------------------------------------------------------ */
    /* RELATED INDUSTRIES                                                 */
    /* ------------------------------------------------------------------ */

    relatedIndustries: [
        'financial-services-fintech',
        'ecommerce-retail',
        'healthcare',
    ],
},
];

export function getIndustryBySlug(slug: string): Industry | undefined {
	return INDUSTRIES.find((industry) => industry.slug === slug);
}
