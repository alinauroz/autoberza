'use client';
import React, { useEffect } from 'react';
import '@/styles/PostAd.css';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import { FormattedMessage } from 'react-intl';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy';
  }, []);

  return (
    <div>
      <Header />
      <div className="w-10/12 mx-auto my-8">
        <header className="text-3xl font-bold mb-4">
          <FormattedMessage
            defaultMessage="Privacy Policy"
            id="privacypolicy.privacy-policy1"
          />
        </header>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            <FormattedMessage
              defaultMessage="Introduction"
              id="privacypolicy.intro"
            />
          </h2>
          <p className="text-gray-700">
            <FormattedMessage
              defaultMessage=" A privacy policy on our website is a legal document informing users
              about how you collect and handle their personal data, who you share
              it with, if you sell it, and any other relevant details."
              id="privacypolicy.detail"
            />
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            <FormattedMessage
              defaultMessage="Our Privacy Policy"
              id="privacypolicy.privacy-policy2"
            />
          </h2>
          <p className="text-gray-700">
            <FormattedMessage
              defaultMessage="You might also call a privacy policy a:"
              id="privacypolicy.privacy-policy-list"
            />
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>
              <FormattedMessage
                defaultMessage="Privacy Agreement"
                id="privacypolicy.privacy-policy-list3"
              />
            </li>
            <li>
              <FormattedMessage
                defaultMessage="Privacy Clause"
                id="privacypolicy.privacy-policy-list4"
              />
            </li>
            <li>
              <FormattedMessage
                defaultMessage="Privacy Notice"
                id="privacypolicy.privacy-policy-list5"
              />
            </li>
            <li>
              <FormattedMessage
                defaultMessage="Privacy Page"
                id="privacypolicy.privacy-policy-list8"
              />
            </li>
            <li>
              <FormattedMessage
                defaultMessage="Privacy Policy Statement"
                id="privacypolicy.privacy-policy-list7"
              />
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
