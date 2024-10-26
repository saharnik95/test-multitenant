import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  params: { tenant: string };
}
const tenantConfigs: Record<string, { brandName: string }> = {
  tenantA: { brandName: 'Brand A' },
  tenantB: { brandName: 'Brand B' },
  tenantC: { brandName: 'Brand C' },
};

export default function TenantLayout({ children, params }: LayoutProps) {

  const config = tenantConfigs[params.tenant]; // Get config from local object

  return (
    <html lang="en">
      <body>
        {/* Add tenant-specific header, navigation, etc. */}
        <header>

          <h1>{config?.brandName}</h1>
        </header>
        {children}
      </body>
    </html>
  );
}