'use client';
import React, { useEffect } from 'react';
import '@/styles/PostAd.css';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import { FormattedMessage } from 'react-intl';

const TermsConditions = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions';
  }, []);

  return (
    <div>
      <Header />
      <div className="w-10/12 mx-auto my-8">
        <header className="text-3xl font-bold mb-4">
          <FormattedMessage
            defaultMessage="Terms & Conditions"
            id="termsconditions.terms-conditions"
          />
        </header>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            <FormattedMessage
              defaultMessage="Introduction"
              id="termsconditions.intro"
            />
          </h2>
          <p className="text-gray-700">
            <FormattedMessage
              defaultMessage=" A Terms and Conditions agreement is where you let the public know the terms, rules and guidelines for using your website or mobile app. They include topics such as acceptable use, restricted behavior and limitations of liability."
              id="termsconditions.detail"
            />
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            <FormattedMessage
              defaultMessage="Our Terms & Conditions "
              id="termsconditions.terms-conditions"
            />
          </h2>
          <p className="text-gray-700">
            <FormattedMessage
              defaultMessage="Terms and Conditions agreements are also known as Terms of Service or Terms of Use agreements. These terms are interchangeable, practically speaking. More rarely, it may be called something like an End User Services Agreement (EUSA)."
              id="termsconditions.terms-conditions-list"
            />
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
