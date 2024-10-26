// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const tenant = pathname.split('/')[1]; 


  if (!tenant || !['tenantA', 'tenantB', 'tenantC'].includes(tenant)) {
    const url = req.nextUrl.clone();
    url.pathname = '/tenantA'; 
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:tenant*',
};
