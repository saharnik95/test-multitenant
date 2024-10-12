import { ReactNode } from 'react';
import { getTenantConfig } from '@/lib/tenantConfig';

interface LayoutProps {
  children: ReactNode;
  params: { tenant: string };
}

export default function TenantLayout({ children, params }: LayoutProps) {

  const config = getTenantConfig(params.tenant);

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