import React from 'react';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import HeroSection from './sub/HeroSection';
import Card from './sub/Card';
import NextPage from './sub/NextPage';
import Filter from './sub/Filter';

const SearchPage = () => {
  return (
    <div>
      <Header />
      <div className="lg:flex lg:items-start lg:justify-between lg:h-max lg:mx-12">
        <div className="filter-section hidden lg:block w-1/2 ">
          <Filter />
        </div>
        <div className="w-full">
          <HeroSection />
          <Card />
          <Card />
          <NextPage />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SearchPage;
