'use client';

import React from 'react';
import Nav from '../Header/Header';
import Header from './sub/Header';
import UploadFile from './sub/UploadFile';
import AdPrice from './sub/AdPrice';
import AdType from './sub/AdType';
import Contact from './sub/Contact';
import Footer from './sub/Footer';
import Dynamic from './sub/Dynamic';

import { DynamicSectionsResponse } from '@/types';
import AdLocation from './sub/AdLocation';
import { useQuery } from 'urql';
import { GET_FORMS, IForm } from '../AdminPanel/Forms';
import Loading from '../Elements/Loading';
import { useRouter, useSearchParams } from 'next/navigation';
import fdtojson from '@/utils/fdtojson';
/*
const data: DynamicSectionsResponse[] = [
  { type: 'checkbox', label: 'Airbags', section: 'Security' },
  { type: 'text', label: 'Price', section: 'Security' },
  { type: 'checkbox', label: 'Learned', section: 'Basic' },
  {
    type: 'select',
    label: 'Year',
    section: 'Basic',
    options: ['2001', '2002', '2003', '2204', '2005'],
  },
  {
    type: 'text',
    label: 'Power Info',
    section: 'Additional',
    addon: 'KM',
  },
  {
    type: 'select',
    label: 'Type',
    section: 'Additional',
    options: ['Basic', 'Gold', 'Premium'],
  },
  { type: 'checkbox', label: 'Wheels', section: 'Security' },
  { type: 'text', label: 'Other Info', section: 'Additional' },
];
*/
const PostAd = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [{ fetching, data: forms }] = useQuery({ query: GET_FORMS });

  const form = forms?.forms?.find(
    (f: IForm) => f.category === searchParams.get('category')
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    const json = fdtojson(fd);
    console.log('JSON', json);
  };

  if (fetching) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="post-ad-page-wrapper">
      <div className="navbar">
        <Nav
          style={{
            padding: '20px 35px',
          }}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <Header />
        <UploadFile />
        <Dynamic data={form.fields} />
        <AdLocation />
        <AdPrice />
        <AdType />
        <Contact />
      </form>
      <Footer />
    </div>
  );
};

export default PostAd;
