'use client';
import React, { useEffect } from 'react';
import '@/styles/postAd.css';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import { FormattedMessage } from 'react-intl';

const RefundPolicy = () => {
  useEffect(() => {
    document.title = 'Refund Policy';
  }, []);

  return (
    <div>
      <Header />
      <div className="w-10/12 mx-auto my-8">
        <header className="text-3xl font-bold mb-4">
          <FormattedMessage
            defaultMessage="Refund Policy"
            id="refundpolicy.refund-policy"
          />
        </header>
        <section className="mb-6">
          <p className="text-gray-700">
            <FormattedMessage
              defaultMessage="The refund policy explains how you handle returns, refunds, and exchanges. You can display this policy on either the product page or the checkout page of your website. 2Checkout makes every effort to refer refund requests to you, the seller, but reserves the right to issue a refund if necessary.
              Though “No Refund” Policies are generally permitted, 2Checkout strongly recommends against this business practice because it often leads to high customer chargebacks. There are certain situations where 2Checkout cannot permit “No Refund” Policies. If this applies to you, 2Checkout will let you know."
              id="refundpolicy.detail"
            />
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            <FormattedMessage
              defaultMessage="Shipping"
              id="refundpolicy.delivery-shipping"
            />
          </h2>
          <p className="text-gray-700">
            <FormattedMessage
              defaultMessage=" If an item in your order is unavailable, we will ship you the part of your order that is available. When that item becomes available, we will ship you the rest of your order. Shipping costs for your order are non-refundable and are based on the weight of the items you order and your location. The date of delivery for your order may vary due to carrier shipping practices, delivery location, method of delivery, and the number of items ordered, and in addition, your order may be delivered in separate shipments."
              id="refundpolicy.detail"
            />
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            <FormattedMessage
              defaultMessage="Additional taxes and charges"
              id="refundpolicy.taxes"
            />
          </h2>
          <p className="text-gray-700">
            <FormattedMessage
              defaultMessage="Additional shipping charges may apply depending on your location and the size of your order. You are responsible for all taxes applicable to the delivery of your order, including sales tax, value-added tax, customs duties, and excise duties. If there is any damage to the items that you ordered on delivery, you must contact us within 5 days from receipt of your order."
              id="refundpolicy.detail"
            />
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
