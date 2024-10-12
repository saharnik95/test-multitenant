// src/lib/tenantConfig.ts
interface TenantConfig {
  brandName: string;
  // Other properties...
}

export const tenantConfigs: Record<string, TenantConfig> = {
  tenantA: { brandName: 'Brand A' },
  tenantB: { brandName: 'Brand B' },
  tenantC: { brandName: 'Brand C' },
  tenantD: { brandName: 'Brand D' },
};

export const getTenantConfig = (tenant: string): TenantConfig | undefined => {
  return tenantConfigs[tenant];
};
