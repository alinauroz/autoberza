import React from 'react';
import Nav from '../Header/Header';
import Header from './sub/Header';
import UploadFile from './sub/UploadFile';
import AdPrice from './sub/AdPrice';
import AdType from './sub/AdType';
import Contact from './sub/Contact';
import Footer from './sub/Footer';
import Dynamic from './sub/Dynamic';

const PostAd = () => {
  return (
    <div className="post-ad-page-wrapper">
      <Nav />
      <Header />
      <UploadFile />
      <Dynamic />
      <AdPrice />
      <AdType />
      <Contact />
      <Footer />
    </div>
  );
};

export default PostAd;
