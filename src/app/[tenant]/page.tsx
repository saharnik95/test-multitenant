import { getTenantConfig } from '@/lib/tenantConfig';
import Carousel from '@/components/Carousel';
import TenantSwitcher from '@/components/TenantSwitcher';

interface PageProps {
  params: { tenant: string };
}

export default function HomePage({ params }: PageProps) {
  const config = getTenantConfig(params.tenant);
  

  // Handle case when tenant config is not found
  if (!config) {
    return (
      <main>
        <h1>Tenant not found</h1>
      </main>
    );
  }

  return (
    <main>
      <TenantSwitcher /> {/* Add tenant switcher */}
      <h1>Welcome to {config.brandName}</h1>
      
      <Carousel config={config} />
    </main>
  );
}
