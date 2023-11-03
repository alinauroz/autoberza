'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import HeroSection from './sub/HeroSection';
import Card from './sub/Card';
import NextPage from './sub/NextPage';
import '../../styles/postAd.css';
import FilterComp from './sub/Filter';
import { DynamicFiltersResponse } from '@/types';
import { gql, useQuery } from 'urql';
import Loading from '../Elements/Loading';
import { isLoggedIn } from '@/utils/auth';
import Link from 'next/link';
import Button from '../Elements/Button';
import usePaginatedQuery from '@/utils/usePaginatedQuery';
import LoadMore from '../Elements/LoadMore';

const take = 2;

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
  query Query(
    $isApproved: Boolean
    $take: Int
    $skip: Int
    $details: JSON
    $categories: [String]
    $minPrice: Int
    $maxPrice: Int
    $sortOrder: String
    $sortBy: String
  ) {
    ads(
      isApproved: $isApproved
      take: $take
      skip: $skip
      details: $details
      categories: $categories
      minPrice: $minPrice
      maxPrice: $maxPrice
      sortOrder: $sortOrder
      sortBy: $sortBy
    ) {
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
      moreExists
    }
  }
`;

const SearchPage = () => {
  const [showFilter, setShowFilter] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [variables, setVariables] = useState<any>({});
  const [page, setPage] = useState(0);
  const [{ fetching: fetchingFilters, data: filterResponse }] = useQuery({
    query: GET_FILTERS,
  });

  const [normalFilters, detailFilters] = useMemo(() => {
    const {
      categories,
      minPrice,
      maxPrice,
      sortBy,
      sortOrder,
      ...detailFilters
    } = variables;
    return [
      {
        categories,
        minPrice: parseInt(minPrice) * 100,
        maxPrice: parseInt(maxPrice) * 100,
        sortOrder,
        sortBy,
      },
      detailFilters,
    ];
  }, [variables]);

  const {
    fetching: adsFetching,
    data: adResponse,
    fetchMore,
  } = usePaginatedQuery({
    query: GET_ADS,
    limit: take,
    variables: {
      isApproved: true,
      ...normalFilters,
      details: detailFilters,
      //take,
      //skip: page * take,
    },
    toFullPage: (data: any) => {
      const response = {
        ads: {
          data: [],
          count: 0,
          moreExists: true,
        },
      };
      for (const x in data) {
        response.ads.data = response.ads.data.concat(data[x].ads.data);
        response.ads.count = data[x].ads.count;
        response.ads.moreExists =
          data[x].ads.moreExists && response.ads.moreExists;
      }
      return response;
    },
  });

  const filters = useMemo(() => {
    const fields = filterResponse?.adFilters?.filters;
    return fields;
  }, [filterResponse]);
  const ads = adResponse?.ads?.data || [];
  const count = adResponse?.ads?.count || 0;

  useEffect(() => {
    console.log('Variables', variables);
  }, [variables]);

  if (!isLoggedIn()) {
    return (
      <div className="post-ad-page-wrapper">
        <div className="navbar">
          <Header
            style={{
              padding: '20px 35px',
            }}
          />
        </div>
        <div className="min-h-screen flex justify-center items-center flex-col gap-5">
          <span>To post an ad, you need an account</span>
          <span className="flex gap-4">
            <Link href="/login">
              <Button text="Login" />
            </Link>
            <Link href="/register">
              <Button text="Sign Up" />
            </Link>
          </span>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />

      <div className="lg:flex lg:items-start lg:justify-between lg:h-max lg:pt-6 lg:mx-12">
        {fetchingFilters ? (
          <div
            className={`lg:flex justify-center items-center lg:w-1/3 sm:w-full sm:absolute lg:mt-1.5 mx-4 lg:mx-0 lg:static top-[68px] hidden`}
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
            variables={variables}
            setVariables={setVariables}
          />
        )}

        <div className={`w-full ${showFilter ? 'hidden' : ''}`}>
          <HeroSection
            setShowFilter={setShowFilter}
            count={count}
            variables={variables}
            setVariables={setVariables}
          />
          {adsFetching && false ? (
            <div className="flex h-72 w-full justify-center items-center">
              <Loading />
            </div>
          ) : (
            ads?.map((ad: any) => <Card key={ad.id} ad={ad} />)
          )}
          <LoadMore
            onClick={fetchMore}
            autoLoadMore={true}
            loading={adsFetching}
            moreExist={adResponse?.ads?.moreExists}
          />
        </div>
      </div>
      <Footer containerClass={`${showFilter ? 'hidden' : ''}`} />
    </div>
  );
};

export default SearchPage;
