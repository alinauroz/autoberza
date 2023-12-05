// ContactUs.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import '@/styles/postAd.css';
import { FormattedMessage, useIntl } from 'react-intl';

const ContactUs = () => {
  React.useEffect(() => {
    document.title = 'Contact Us';
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const intl = useIntl();

  useEffect(() => {
    document.title = 'Contact Us';
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <Header />
      <div
        className="container md:w-1/3 w-full mx-auto px-10 my-8"
        id="contact"
      >
        <header className="text-2xl text-gray-600 font-bold mb-8 text-center">
          <FormattedMessage
            defaultMessage="Contact Us"
            id="contactus.contact"
          />
        </header>

        <form
          action={
            'https://formsubmit.co/' + process.env.NEXT_PUBLIC_CONTACT_EMAIL
          }
          method="POST"
        >
          <div className="mb-4">
            <label
              htmlFor={intl.formatMessage({
                defaultMessage: 'name',
                id: 'contactus.name',
              })}
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              <FormattedMessage defaultMessage="Name" id="contactus.name" />
            </label>
            <input
              type={intl.formatMessage({
                defaultMessage: 'text',
                id: 'contactus.text',
              })}
              id={intl.formatMessage({
                defaultMessage: 'name',
                id: 'contactus.name',
              })}
              name={intl.formatMessage({
                defaultMessage: 'name',
                id: 'contactus.name',
              })}
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#36a584]"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor={intl.formatMessage({
                defaultMessage: 'email',
                id: 'contactus.email',
              })}
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              <FormattedMessage defaultMessage="Email" id="contactus.email" />
            </label>
            <input
              type={intl.formatMessage({
                defaultMessage: 'email',
                id: 'contactus.email',
              })}
              id={intl.formatMessage({
                defaultMessage: 'email',
                id: 'contactus.email',
              })}
              name={intl.formatMessage({
                defaultMessage: 'email',
                id: 'contactus.email',
              })}
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#36a584]"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor={intl.formatMessage({
                defaultMessage: 'message',
                id: 'contactus.message',
              })}
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              <FormattedMessage
                defaultMessage="Message"
                id="contactus.message"
              />
            </label>
            <textarea
              id={intl.formatMessage({
                defaultMessage: 'message',
                id: 'contactus.message',
              })}
              name={intl.formatMessage({
                defaultMessage: 'message',
                id: 'contactus.message',
              })}
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#36a584]"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#00c489] text-white px-4 py-2 rounded-md hover:bg-[#36a584]"
          >
            <FormattedMessage defaultMessage="Submit" id="contactus.submit" />
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
