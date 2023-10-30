'use client';
import React, { useMemo } from 'react';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import HeroSection from './sub/HeroSection';
import Card from './sub/Card';
import NextPage from './sub/NextPage';
import '../../styles/PostAd.css';
import FilterComp from './sub/Filter';
import { DynamicFiltersResponse } from '@/types';
import { gql, useQuery } from 'urql';
import Loading from '../Elements/Loading';

const data = [
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

const GET_FILTERS = gql`
  query Query {
    adFilters {
      filters
    }
  }
`;

const SearchPage = () => {
  const [showFilter, setShowFilter] = React.useState(false);
  const [{ fetching: fetchingFilters, data: filterResponse }] = useQuery({
    query: GET_FILTERS,
  });

  const filters = useMemo(() => {
    const fields = filterResponse?.adFilters?.filters;
    console.log('Fields', fields);
    return fields;
  }, [filterResponse]);

  return (
    <div>
      <Header />
      <div className="lg:flex lg:items-start lg:justify-between lg:h-max lg:pt-6 lg:mx-12">
        {fetchingFilters ? (
          <div
            className={`lg:block lg:w-1/2 sm:w-full sm:absolute lg:mt-1.5 mx-4 lg:mx-0 lg:static top-[68px] hidden`}
            style={{
              height: 'calc(100vh - 68px)',
            }}
          >
            <Loading />
          </div>
        ) : (
          <FilterComp
            data={filters as DynamicFiltersResponse[]}
            setShowFilter={setShowFilter}
            showFilter={showFilter}
          />
        )}

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
