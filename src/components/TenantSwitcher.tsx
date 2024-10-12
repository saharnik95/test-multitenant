// src/components/TenantSwitcher.tsx
"use client"; // Ensure this is a client component
import { useRouter } from 'next/navigation';

const TenantSwitcher: React.FC = () => {
  const router = useRouter();
  const tenants = ['tenantA', 'tenantB', 'tenantC', 'tenantD']; // List of tenants

  const handleTenantChange = (newTenant: string) => {
    router.push(`/${newTenant}`); // Navigate to the selected tenant
  };

  return (
    <div className="flex space-x-4">
      {tenants.map((tenant) => (
        <button
          key={tenant}
          onClick={() => handleTenantChange(tenant)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Switch to {tenant}
        </button>
      ))}
    </div>
  );
};

export default TenantSwitcher;
