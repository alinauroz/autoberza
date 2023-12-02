import { getRequestOrigin } from '@/server/utils/get-request-origin';
import stripe from '@/server/utils/stripe';
import { NextRequest, NextResponse } from 'next/server';

export type PROMO_OPTIONS =
  | 'PROMO-5'
  | 'PROMO-10'
  | 'PROMO-HOME-5'
  | 'PROMO-HOME-10';

export async function GET(request: NextRequest, response: NextResponse) {
  const origin = getRequestOrigin(request);
  const companyId = request.nextUrl.searchParams.get('companyId');
  const plan = request.nextUrl.searchParams.get('plan') as PROMO_OPTIONS;
  const adId = request.nextUrl.searchParams.get('adId');
  const priceIds = {
    'PROMO-5': process.env.PRICE_5_DAY,
    'PROMO-10': process.env.PRICE_10_DAY,
    'PROMO-HOME-5': process.env.PRICE_5_DAY,
    'PROMO-HOME-10': process.env.PRICE_10_DAY,
  };
  const priceId = priceIds[plan || 'PROMO-5'];
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      tax_id_collection: {
        enabled: true,
      },
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      metadata: {
        adId,
        action: 'promote-ad',
        plan,
      },
      success_url: `${origin}/ad/${adId}?event=upgraded`,
      cancel_url: `${origin}/ad/${adId}`,
    });

    const response = NextResponse.redirect(session.url as string, {
      status: 302,
    });
    return response;
  } catch (err) {
    console.log('ERROR', err);
  }
}
