import prisma from '@/prisma/prisma';

const Twocheckout = require('../lib/2checkout-node-sdk/twocheckout');
const config = {
  sellerId: '254771199649',
  secretKey: '0GLVZd[TcC)2_O(!vlH3',
  secretWord:
    'NBK*Tj#SHkuQQnEXW6-vP$gNUzwBy-&hRQ@D4G59SxT6@w5D4f@28GbggyfQraCg',
};

const tco = new Twocheckout(config);

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

export const getLink = async ({ adId }: { adId: string }) => {
  try {
    buyLinkParams[
      'return-url'
    ] = `https://3195-2400-adc7-93a-cf00-45ec-236a-ca65-9896.ngrok-free.app/api/handle-payment?adId=${adId}`;
    let result = await tco.generateBuyLinkSignature(buyLinkParams);
    let finalParams = JSON.parse(JSON.stringify(buyLinkParams));
    finalParams.signature = result.signature;

    await prisma.ad.update({
      where: { id: adId },
      data: { coSignature: result.signature as string },
    });

    const params = new URLSearchParams(finalParams);
    const str = params.toString();
    const redirectTo = 'https://secure.2checkout.com/checkout/buy/?' + str;
    return redirectTo;
  } catch (error) {
    console.error(error);
  }
};
