import prisma from '@/prisma/prisma';

const Twocheckout = require('../lib/2checkout-node-sdk/twocheckout');

const sellerId = process.env.CO_SELLER_ID;
const secretKey = process.env.CO_SECRET;
const secretWord = atob(process.env.CO_SECRET_WORD as string);

export const getLink = async ({
  adId,
  plan,
}: {
  adId: string;
  plan: string;
}) => {
  try {
    const config = {
      sellerId,
      secretKey,
      secretWord,
    };

    const buyLinkParams = {
      prod: 'abc100',
      //price: 1,
      tpl: 'default',
      qty: 1,
      type: 'PRODUCT',
      tangible: 0,
      'return-url': 'https://google.com?q=' + Date.now(),
      'return-type': 'redirect',
      //expiration: 60 * 1000,
      //"order-ext-ref": "CustOrd100",
      'item-ext-ref': `{"id": "abc1234"}`,
      //"customer-ext-ref": "testcustomer@2Checkout.com",
      currency: 'EUR',
      //language: "en",
      test: 1,
      merchant: config.sellerId,
      //dynamic: 1,
    };

    console.log('Config', config);

    const tco = new Twocheckout(config);
    console.log('Hello');

    const prods: any = {
      'PROMO-5': process.env.CO_PRICE_5_DAY,
      'PROMO-10': process.env.CO_PRICE_10_DAY,
    };

    if (plan in prods) {
      //  buyLinkParams["prod"] = prods[plan];
    }

    buyLinkParams[
      'return-url'
    ] = `https://google.com/api/handle-payment?adId=${adId}&plan=${plan}`;
    console.log('HELLO 2');
    let result = await tco.generateBuyLinkSignature(buyLinkParams);
    let finalParams = JSON.parse(JSON.stringify(buyLinkParams));
    finalParams.signature = result.signature;

    const params = new URLSearchParams(finalParams);
    const str = params.toString();
    const redirectTo = 'https://secure.2checkout.com/checkout/buy/?' + str;
    return redirectTo;
  } catch (error) {
    console.error(error);
  }
};
