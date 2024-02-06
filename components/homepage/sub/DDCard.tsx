import React from 'react';
import DropDown from './DropDown';
import Button from '@/components/Elements/Button';
import { gql, useQuery } from 'urql';
import Link from 'next/link';
import Loading from '@/components/Elements/Loading';
import { FormattedMessage } from 'react-intl';

const GET_FILTERS = gql`
  query Query($category: String) {
    adFilters(category: $category) {
      filters
    }
  }
`;

const DDCard = () => {
  const [{ fetching, data }] = useQuery({
    query: GET_FILTERS,
    variables: { category: 'Automobili' },
  });

  const filters = data?.adFilters?.filters || [];

  return (
    <div className="bg-white rounded-md lg:w-[550px] xl:w-[500px] md:w-96 w-[4/6] lg:rounded-xl pt-4 pb-6 md:py-6 lg:py-4 xl:py-12 xl:-ml-32">
      <p className="my-6 md:text-2xl md:pb-3 lg:pb-4 xl:pb-5 text-2xl lg:text-3xl xl:text-4xl font-semibold text-center ">
        <FormattedMessage
          defaultMessage="Find your right car"
          id="ddcard.car"
        />
      </p>
      <form action="/search">
        {fetching ? (
          <div className="h-48 flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <DropDown filters={filters} />
        )}
        <div className="flex items-center justify-between w-[80%] md:w-[90%] pt-[3px] md:pt-5 lg:w-full mx-auto ">
          <p className="md:text-lg text-gray-700 font-bold bg-gray-300 py-1 px-2 rounded-md lg:hidden">
            <Link href="/search">
              <FormattedMessage
                defaultMessage="Advance Search"
                id="ddcard.advance-search"
              />
            </Link>
          </p>
          <button className="bg-[#00c489] hover:bg-[#02b07b] active:bg-[#10926b] w-max-content lg:w-full lg:mx-10 text-white font-semibold lg:font-bold rounded-[3px] md:rounded-md md:text-lg lg:text-xl py-[3px] lg:py-4 px-2">
            <FormattedMessage defaultMessage="Search" id="ddcard.search" />
          </button>
        </div>
      </form>
      <Link href="/search" className="flex justify-end mx-10">
        <p className="hidden lg:flex items-center justify-center bg-gray-300 w-max font-bold text-xl pl-5 pr-3 rounded-md  py-2 mt-5 cursor-pointer">
          <FormattedMessage
            defaultMessage="Advance Search"
            id="ddcard.advance-search"
          />{' '}
          <span className="text-3xl px-2">&rarr;</span>
        </p>
      </Link>
    </div>
  );
};

export default DDCard;
