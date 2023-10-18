import React from 'react';
import '../../styles/postAd.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/PostAd/sub/Footer';

function Ad() {
  return (
    <div className="w-full">
      <Header />
      <div className="h-96">
        <h1 className="m-10 text-2xl">
          Ad details will be shown on this page in next milestone
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Ad;
