'use client';

import client from '@/client';
import './globals.css';
import { Inter } from 'next/font/google';
import { Provider } from 'urql';
import { Toaster } from 'react-hot-toast';
import { IntlProvider } from 'react-intl';
import en from '../lang/en.json';
import fr from '../lang/fr.json';
import Cookies from 'js-cookie';

const inter = Inter({ subsets: ['latin'] });
const messages = { en, fr };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = (Cookies.get('locale') || 'fr') as 'fr' | 'en';
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
            <Provider value={client}>
              {children}
              <Toaster />
            </Provider>
          </IntlProvider>
        }
      </body>
    </html>
  );
}
