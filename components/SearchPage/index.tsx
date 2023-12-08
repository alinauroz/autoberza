'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import HeroSection from './sub/HeroSection';
import Card from './sub/Card';
import '../../styles/postAd.css';
import FilterComp from './sub/Filter';
import { DynamicFiltersResponse } from '@/types';
import { gql, useQuery } from 'urql';
import Loading from '../Elements/Loading';
import Link from 'next/link';
import Button from '../Elements/Button';
import usePaginatedQuery from '@/utils/usePaginatedQuery';
import LoadMore from '../Elements/LoadMore';
import { useSearchParams } from 'next/navigation';
import { FormattedMessage } from 'react-intl';

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
  query Query($category: String) {
    adFilters(category: $category) {
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
        isPromoted
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
    variables: {
      category: variables.categories?.[0],
    },
  });

  React.useEffect(() => {
    document.title = 'Search Ads';
  }, []);

  const searchParams = useSearchParams();

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
        minPrice: parseInt(minPrice),
        maxPrice: parseInt(maxPrice),
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

  useEffect(() => {
    const year = searchParams.get('year');
    const city = searchParams.get('city');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const category = searchParams.get('category');
    const manufactures = searchParams.get('manufactures');
    const model = searchParams.get('model');
    const fuel = searchParams.get('fuel');

    setVariables({
      ...(year && { year }),
      ...(city && { city }),
      ...(minPrice && { minPrice }),
      ...(maxPrice && { maxPrice }),
      ...(category && { categories: [category] }),
      ...(manufactures && { manufactures }),
      ...(model && { model }),
      ...(fuel && { fuel }),
    });
  }, [searchParams]);

  return (
    <div>
      <Header />

      <div className="lg:flex lg:items-start lg:justify-between lg:h-max lg:pt-6 lg:mx-12">
        {fetchingFilters && false ? (
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

          {adResponse?.ads?.moreExists ? (
            <LoadMore
              onClick={fetchMore}
              autoLoadMore={true}
              loading={adsFetching}
              moreExist={adResponse?.ads?.moreExists}
            />
          ) : (
            <div className="flex justify-center items-center my-8">
              <span className="font-bold text-gray-600">
                <FormattedMessage
                  defaultMessage="No more ads found"
                  id="searchpage.no-ads"
                />
              </span>
            </div>
          )}
        </div>
      </div>
      <Footer containerClass={`${showFilter ? 'hidden' : ''}`} />
    </div>
  );
};

export default SearchPage;
