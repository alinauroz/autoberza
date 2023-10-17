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

const PostAd = () => {
  return (
    <div className="post-ad-page-wrapper">
      <div className="navbar">
        <Nav
          style={{
            padding: '20px 60px',
          }}
        />
      </div>
      <Header />
      <UploadFile />
      <Dynamic data={data} />
      <AdLocation />
      <AdPrice />
      <AdType />
      <Contact />
      <Footer />
    </div>
  );
};

export default PostAd;
