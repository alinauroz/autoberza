import prisma from '@/prisma/prisma';
import stripe from '@/server/utils/stripe';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature') as string;
  const rawBody = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_ACCOUNT_WEBHOOK_SECRET as string
    );
  } catch (err) {
    console.error('Webhook error:', err);
    NextResponse.json(
      {
        message: 'Webhook verification error',
      },
      {
        status: 400,
      }
    );
    return;
  }
  const session = event.data.object as any;
  const planDays = {
    'PROMO-5': 5,
    'PROMO-10': 10,
    'PROMO-HOME-5': 5,
    'PROMO-HOME-10': 10,
  };
  if (event.type === 'checkout.session.completed') {
    const { metadata } = event.data.object as any;
    await prisma.ad.update({
      where: { id: metadata?.adId },
      data: {
        subscriptionPlan: metadata.plan,
        subscriptionStartDate: new Date(),
        subscriptionEndDate: new Date(
          Date.now() +
            planDays[metadata.plan as 'PROMO-5' | 'PROMO-10'] *
              24 *
              60 *
              60 *
              1000
        ),
        homepagePromoted:
          metadata.plan === 'PROMO-HOME-5' || metadata.plan === 'PROMO-HOME-10',
      },
    });
    return NextResponse.json({ message: 'Handled' });
  } else {
    return NextResponse.json({ message: 'Not handled' });
  }
}
