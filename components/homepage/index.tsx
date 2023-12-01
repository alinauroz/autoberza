'use client';

import Image from 'next/image';
import React from 'react';
import '@/styles/PostAd.css';

import useMobileDetect from '@/utils/useMobileDetect';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import OurServices from './sub/OurServices';
import HeroSection from './sub/HeroSection';
import { gql, useQuery } from 'urql';
import Promoted from './Promoted';
import Loading from '../Elements/Loading';

const HOMEPAGE_ADS = gql`
  query Query {
    homepageAds
  }
`;

const HomePage = () => {
  React.useEffect(() => {
    document.title = 'Home Page';
  }, []);
  const [{ fetching, data: homepageAdsResponse }] = useQuery({
    query: HOMEPAGE_ADS,
  });
  const homepageAds = homepageAdsResponse?.homepageAds || [];

  return (
    <>
      <Header />
      <HeroSection />
      {fetching && (
        <div className="flex h-96 justify-center items-center">
          <Loading />
        </div>
      )}
      {homepageAds?.map(({ name, ads }: any) => (
        <Promoted key={name} category={name} ads={ads} />
      ))}
      <OurServices />
      <Footer />
    </>
  );
};

export default HomePage;
