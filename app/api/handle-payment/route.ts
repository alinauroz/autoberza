import { getRequestOrigin } from '@/server/utils/get-request-origin';
import { NextRequest, NextResponse } from 'next/server';
import { getLink } from '@/server/utils/2checkout';
import prisma from '@/prisma/prisma';

export async function GET(request: NextRequest, response: NextResponse) {
  const origin = getRequestOrigin(request);
  const adId = request.nextUrl.searchParams.get('adId') as string;
  const plan: any = 'PROMO-5';
  const planDays = {
    'PROMO-5': 5,
    'PROMO-10': 10,
    'PROMO-HOME-5': 5,
    'PROMO-HOME-10': 10,
  };

  await prisma.ad.update({
    where: { id: adId },
    data: {
      subscriptionPlan: plan,
      subscriptionStartDate: new Date(),
      subscriptionEndDate: new Date(
        Date.now() +
          planDays[plan as 'PROMO-5' | 'PROMO-10'] * 24 * 60 * 60 * 1000
      ),
      homepagePromoted: plan === 'PROMO-HOME-5' || plan === 'PROMO-HOME-10',
    },
  });

  const redirectUrl = `${process.env.APP_URL}/ad/${adId}`;
  const res = NextResponse.redirect(redirectUrl as string, {
    status: 302,
  });
  return res;
}
