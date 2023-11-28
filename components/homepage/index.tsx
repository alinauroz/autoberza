'use client';

import Image from 'next/image';
import React from 'react';
import '@/styles/PostAd.css';

import Button from '@/components/Elements/Button';
import useMobileDetect from '@/utils/useMobileDetect';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';

import carImg1 from '@/public/assets/common/homepage/homepage-car-img1.svg';
import carImg2 from '@/public/assets/common/homepage/homepage-car-img2.svg';
import carImg3 from '@/public/assets/common/homepage/homepage-car-img3.svg';
import carImg4 from '@/public/assets/common/homepage/homepage-car-img4.svg';
import OurServices from './sub/OurServices';
import HeroSection from './sub/HeroSection';
import { gql, useQuery } from 'urql';
import Promoted from './Promoted';

const tempData = [
  {
    img: carImg1,
    name: 'Volkswagen - Golf 5 - 2.0 TDI',
    usage: '280,000 km',
    year: '2006',
    fuel: 'Diesel',
    location: 'Podgorica',
    added: '10 min ago',
  },
  {
    img: carImg2,
    name: 'Volkswagen - Golf GTI',
    usage: '107,000 km',
    year: '2003',
    fuel: 'Diesel',
    location: 'France',
    added: '30 min ago',
  },
  {
    img: carImg3,
    name: 'Honda Civic 1.8',
    usage: '174,000 km',
    year: '2020',
    fuel: 'Petrol',
    location: 'Pakistan',
    added: '35 min ago',
  },
  {
    img: carImg4,
    name: 'Volkswagen - Golf 5 - 2.0 TDI',
    usage: '280,000 km',
    year: '2006',
    fuel: 'Diesel',
    location: 'Podgorica',
    added: '10 min ago',
  },
  {
    img: carImg1,
    name: 'Volkswagen - Golf 5 - 2.0 TDI',
    usage: '280,000 km',
    year: '2006',
    fuel: 'Diesel',
    location: 'Podgorica',
    added: '10 min ago',
  },
  {
    img: carImg2,
    name: 'Volkswagen - Golf GTI',
    usage: '107,000 km',
    year: '2003',
    fuel: 'Diesel',
    location: 'France',
    added: '30 min ago',
  },
  {
    img: carImg3,
    name: 'Honda Civic 1.8',
    usage: '174,000 km',
    year: '2020',
    fuel: 'Petrol',
    location: 'Pakistan',
    added: '35 min ago',
  },
  {
    img: carImg4,
    name: 'Volkswagen - Golf 5 - 2.0 TDI',
    usage: '280,000 km',
    year: '2006',
    fuel: 'Diesel',
    location: 'Podgorica',
    added: '10 min ago',
  },
  {
    img: carImg1,
    name: 'Volkswagen - Golf 5 - 2.0 TDI',
    usage: '280,000 km',
    year: '2006',
    fuel: 'Diesel',
    location: 'Podgorica',
    added: '10 min ago',
  },
  {
    img: carImg2,
    name: 'Volkswagen - Golf GTI',
    usage: '107,000 km',
    year: '2003',
    fuel: 'Diesel',
    location: 'France',
    added: '30 min ago',
  },
  {
    img: carImg3,
    name: 'Honda Civic 1.8',
    usage: '174,000 km',
    year: '2020',
    fuel: 'Petrol',
    location: 'Pakistan',
    added: '35 min ago',
  },
  {
    img: carImg4,
    name: 'Volkswagen - Golf 5 - 2.0 TDI',
    usage: '280,000 km',
    year: '2006',
    fuel: 'Diesel',
    location: 'Podgorica',
    added: '10 min ago',
  },
];

const HOMEPAGE_ADS = gql`
  query Query {
    homepageAds
  }
`;

interface Props {
  sectionTitle?: string;
  cardType?: 'CAR' | 'TRANSPORT' | 'BIKE';
  vehicles?: number[];
}

const carDetailsResponse = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const HomePage = () => {
  const [{ fetching, data: homepageAdsResponse }] = useQuery({
    query: HOMEPAGE_ADS,
  });
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(4);
  const isMobile = useMobileDetect();

  const homepageAds = homepageAdsResponse?.homepageAds || [];

  console.log('HomepageAds', homepageAds);

  React.useEffect(() => {
    setPageSize(isMobile ? 1 : 4);
  }, [isMobile]);

  const getNewUpperIndex = () => {
    return page * pageSize;
  };

  const getNewLowerIndex = () => {
    return (page - 1) * pageSize;
  };

  const getNewIndices = () => {
    return [getNewLowerIndex(), getNewUpperIndex()];
  };

  const isForwardPossible = () => {
    return getNewUpperIndex() < carDetailsResponse.length;
  };

  const isBackwardPossible = () => {
    return getNewLowerIndex() > 0;
  };

  const handlePageChange = (isForward: boolean) => {
    if (isForward && isForwardPossible()) {
      setPage((p) => p + 1);
    } else if (!isForward && isBackwardPossible()) {
      setPage((p) => p - 1);
    }
  };

  return (
    <>
      <Header />
      <div className="relative">
        <HeroSection />
        {/* <Image src={homePageImg} alt="" className="w-full" /> */}
      </div>
      {homepageAds?.map(({ name, ads }: any) => (
        <Promoted key={name} category={name} ads={ads} />
      ))}
      <OurServices />
      <Footer />
    </>
  );
};

export default HomePage;
