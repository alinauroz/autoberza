'use client';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import HeroSection from './sub/HeroSection';
import Card from './sub/Card';
import NextPage from './sub/NextPage';
import '../../styles/PostAd.css';
import FilterComp from './sub/Filter';
import { DynamicFiltersResponse } from '@/types';

const data: DynamicFiltersResponse[] = [
  { type: 'checkbox', label: 'Airbags', section: 'Security' },
  {
    type: 'select',
    label: 'Year',
    section: 'Basic',
    options: ['2001', '2002', '2003', '2204', '2005'],
  },
  { type: 'text', label: 'Other Info', section: 'Additional' },
  { type: 'text', label: 'Power Info', section: 'Additional', addon: 'KM' },
];

const SearchPage = () => {
  const [showFilter, setShowFilter] = React.useState(false);

  return (
    <div>
      <Header />
      <div className="lg:flex lg:items-start lg:justify-between lg:h-max lg:pt-6 lg:mx-12">
        <FilterComp
          data={data}
          setShowFilter={setShowFilter}
          showFilter={showFilter}
        />

        <div className={`w-full ${showFilter ? 'hidden' : ''}`}>
          <HeroSection setShowFilter={setShowFilter} />
          <Card />
          <Card />
          <NextPage />
        </div>
      </div>
      <Footer containerClass={`${showFilter ? 'hidden' : ''}`} />
    </div>
  );
};

export default SearchPage;
