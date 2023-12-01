// ContactUs.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import '@/styles/postAd.css';
import { FormattedMessage } from 'react-intl';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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
              htmlFor="name"
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              <FormattedMessage defaultMessage="Name" id="contactus.name" />
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#36a584]"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              <FormattedMessage defaultMessage="Email" id="contactus.email" />
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#36a584]"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-600 mb-2"
            >
              <FormattedMessage
                defaultMessage="Message"
                id="contactus.message"
              />
            </label>
            <textarea
              id="message"
              name="message"
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
