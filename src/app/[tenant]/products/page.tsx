import { getTenantConfig } from '@/lib/tenantConfig';
import ProductCard from '@/components/ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
];

interface PageProps {
  params: { tenant: string };
}

export default function ProductListingPage({ params }: PageProps) {
  const config = getTenantConfig(params.tenant);

  return (
    <main>
      <h1>Products for {config.brandName}</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} config={config} />
        ))}
      </div>
    </main>
  );
}
