import React from 'react';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import HeroSection from './sub/HeroSection';
import Card from './sub/Card';
import NextPage from './sub/NextPage';

const SearchPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Card />
      <Card />
      <NextPage />
      {/* <Footer /> */}
    </div>
  );
};

export default SearchPage;
