import type { Service } from '@/data/services';
import { ServiceHero } from '@/components/service/service-hero';
import { ServiceOverview } from '@/components/service/service-overview';
import { ServiceCapabilities } from '@/components/service/service-capabilities';
import { ServiceUseCases } from '@/components/service/service-use-cases';
import { ServiceApproach } from '@/components/service/service-approach';
import { ServiceTechnologies } from '@/components/service/service-technologies';
import { ServiceRelated } from '@/components/service/service-related';
import { ServiceFaq } from '@/components/service/service-faq';
import { ServiceCta } from '@/components/service/service-cta';

export function ServiceDetail({ service }: { service: Service }) {
	return (
		<main>
			<ServiceHero service={service} />
			<ServiceOverview service={service} />
			<ServiceCapabilities service={service} />
			<ServiceUseCases service={service} />
			<ServiceApproach service={service} />
			<ServiceTechnologies service={service} />
			<ServiceRelated current={service} />
			<ServiceFaq service={service} />
			<ServiceCta service={service} />
		</main>
	);
}
