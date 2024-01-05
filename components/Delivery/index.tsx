'use client';
import React, { useEffect } from 'react';
import '@/styles/postAd.css';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import { FormattedMessage } from 'react-intl';

const Deliverypolicy = () => {
  useEffect(() => {
    document.title = 'Delivery Policy';
  }, []);

  return (
    <div>
      <Header />
      <div className="w-10/12 mx-auto my-8">
        <header className="text-3xl font-bold mb-4">
          <FormattedMessage
            defaultMessage="Product Delivery Information"
            id="deliverypolicy.delivery-info"
          />
        </header>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            <FormattedMessage defaultMessage="Overview" id="delivery.intro" />
          </h2>
          <p className="text-gray-700">
            <FormattedMessage
              defaultMessage=" Depending on your product type, the delivery policy can differ. Below you can find a few policy samples and you can choose to use the one that applies to your product type."
              id="deliverypolicy.detail-1"
            />
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-3xl font-semibold mb-2">
            <FormattedMessage
              defaultMessage="Delivery Policy"
              id="deliverypolicy.delivery-policy-1"
            />
          </h2>
          <p className="text-gray-700">
            <FormattedMessage
              defaultMessage=" All orders are subject to product availability."
              id="deliverypolicy.detail-2"
            />
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            <FormattedMessage
              defaultMessage="Shipping"
              id="deliverypolicy.delivery-shipping"
            />
          </h2>
          <p className="text-gray-700">
            <FormattedMessage
              defaultMessage=" If an item in your order is unavailable, we will ship you the part of your order that is available. When that item becomes available, we will ship you the rest of your order. Shipping costs for your order are non-refundable and are based on the weight of the items you order and your location. The date of delivery for your order may vary due to carrier shipping practices, delivery location, method of delivery, and the number of items ordered, and in addition, your order may be delivered in separate shipments."
              id="deliverypolicy.detail-3"
            />
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            <FormattedMessage
              defaultMessage="Additional taxes and charges"
              id="deliverypolicy.taxes-1"
            />
          </h2>
          <p className="text-gray-700">
            <FormattedMessage
              defaultMessage="Additional shipping charges may apply depending on your location and the size of your order. You are responsible for all taxes applicable to the delivery of your order, including sales tax, value-added tax, customs duties, and excise duties. If there is any damage to the items that you ordered on delivery, you must contact us within 5 days from receipt of your order."
              id="deliverypolicy.detail-4"
            />
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-3xl font-semibold mb-2">
            <FormattedMessage
              defaultMessage="Delivery Policy for Services"
              id="deliverypolicy.taxes-2"
            />
          </h2>
          <p className="text-gray-700">
            <FormattedMessage
              defaultMessage="Upon receipt of your order, the services will be performed to you in accordance with the terms applicable to the services that you purchased. The nature of the services you purchased and the date of your purchase may impact the timing of the performance of the services. The services will be deemed to be successfully delivered to you upon the performance of the services"
              id="deliverypolicy.detail-5"
            />
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Deliverypolicy;
