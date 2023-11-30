'use client';
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/PostAd/sub/Footer';
import Ad from '@/components/Ad';
import '../../../styles/postAd.css';

interface IProps {
  params: {
    id: string;
  };
}

function AdPage({ params }: IProps) {
  const id = params.id;

  return (
    <div className="w-full">
      <Header />
      <Ad id={Array.isArray(id) ? id[0] : id || ''} />
      <Footer />
    </div>
  );
}

export default AdPage;
