'use client';

import client from '@/client';
import './globals.css';
import { Inter } from 'next/font/google';
import { Provider } from 'urql';
import { SessionProvider } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <body className={inter.className}>
        <SessionProvider>
          {<Provider value={client}>{children}</Provider>}
        </SessionProvider>
      </body>
    </html>
  );
}
