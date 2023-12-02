import { getRequestOrigin } from '@/server/utils/get-request-origin';
import { NextRequest, NextResponse } from 'next/server';
import { PROMO_OPTIONS } from '../../stripe/create-checkout-session/route';
import { getLink } from '@/server/utils/2checkout';

export async function GET(request: NextRequest, response: NextResponse) {
  const origin = getRequestOrigin(request);
  const companyId = request.nextUrl.searchParams.get('companyId');
  const plan = request.nextUrl.searchParams.get('plan') as PROMO_OPTIONS;
  const adId = request.nextUrl.searchParams.get('adId') as string;

  const redirectUrl = await getLink({ adId });
  console.log('Redirect Url', redirectUrl);
  const res = NextResponse.redirect(redirectUrl as string, {
    status: 302,
  });
  return res;
}
