import Carousel from '@/components/Carousel';

interface PageProps {
  params: { tenant: string };
}

const tenantConfigs: Record<string, { brandName: string }> = {
  tenantA: { brandName: 'Brand A' },
  tenantB: { brandName: 'Brand B' },
  tenantC: { brandName: 'Brand C' },
};

export default function HomePage({ params }: PageProps) {
  const config = tenantConfigs[params.tenant]; // Get config from local object

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
      <Carousel config={config} /> {/* Pass tenant config to Carousel */}
    </main>
  );
}
