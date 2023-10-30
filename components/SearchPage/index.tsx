'use client';
import React, { useMemo, useState } from 'react';
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

const take = 1;

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

const GET_ADS = gql`
  query Query($isApproved: Boolean, $take: Int) {
    ads(isApproved: $isApproved, take: $take) {
      data {
        city
        country
        details
        discountedPrice
        id
        isApproved
        location
        photos
        price
        submittedBy
        submittedByUser {
          country
          email
          name
          phone
        }
        title
        createdOn
      }
      count
    }
  }
`;

const SearchPage = () => {
  const [showFilter, setShowFilter] = React.useState(false);
  const [page, setPage] = useState(0);
  const [{ fetching: fetchingFilters, data: filterResponse }] = useQuery({
    query: GET_FILTERS,
  });
  const [{ fetching: adsFetching, data: adResponse }] = useQuery({
    query: GET_ADS,
    variables: {
      //isApproved: true,
      take,
      skip: page * take,
    },
  });

  const filters = useMemo(() => {
    const fields = filterResponse?.adFilters?.filters;
    return fields;
  }, [filterResponse]);
  const ads = adResponse?.ads?.data || [];
  const count = adResponse?.ads?.count || 0;

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
          {adsFetching ? (
            <div className="flex h-72 w-full justify-center items-center">
              <Loading />
            </div>
          ) : (
            ads?.map((ad: any) => <Card key={ad.id} />)
          )}
          <NextPage
            count={count}
            take={take}
            selected={page}
            setSelected={setPage}
          />
        </div>
      </div>
      <Footer containerClass={`${showFilter ? 'hidden' : ''}`} />
    </div>
  );
};

export default SearchPage;
