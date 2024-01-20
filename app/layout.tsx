'use client';

import client from '@/client';
import './globals.css';
import { Inter } from 'next/font/google';
import { Provider } from 'urql';
import { Toaster } from 'react-hot-toast';
import { IntlProvider } from 'react-intl';
import en from '../lang/en.json';
import fr from '../lang/fr.json';
import mr from '../lang/mr.json';
import { SessionProvider } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const inter = Inter({ subsets: ['latin'] });
const messages = { en, fr, mr };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = (Cookies.get('locale') || 'mr') as 'mr' | 'en';
  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      fetch('/api/token').then((data) => {
        data.json().then((d) => {
          Cookies.set('token', d.token);
          window.location.reload();
        });
      });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <script
          src="https://upload-widget.cloudinary.com/global/all.js"
          type="text/javascript"
        ></script>
      </head>
      <body className={inter.className}>
        {
          <IntlProvider locale={locale} messages={messages[locale]}>
            <SessionProvider>
              <Provider value={client}>
                {children}
                <Toaster />
              </Provider>
            </SessionProvider>
          </IntlProvider>
        }
      </body>
    </html>
  );
}
