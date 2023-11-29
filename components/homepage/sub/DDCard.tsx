import React from 'react';
import DropDown from './DropDown';
import Button from '@/components/Elements/Button';
import { gql, useQuery } from 'urql';
import Link from 'next/link';

const GET_FILTERS = gql`
  query Query {
    adFilters {
      filters
    }
  }
`;

const DDCard = () => {
  const [{ fetching, data }] = useQuery({ query: GET_FILTERS });

  const filters = data?.adFilters?.filters || [];

  return (
    <div className="bg-white rounded-md lg:w-[420px] xl:w-[500px] md:w-96 w-48 lg:rounded-xl py-2 md:py-6 lg:py-4 xl:py-12 xl:-ml-32">
      <p className="text-[10px] md:text-2xl md:pb-3 lg:pb-4 xl:pb-5 lg:text-3xl xl:text-4xl font-semibold text-center ">
        Find your right car
      </p>
      <form action="/search">
        <DropDown filters={filters} />
        <div className="flex items-center justify-between w-[80%] md:w-[90%] pt-[3px] md:pt-5 lg:w-full mx-auto ">
          <p className="text-[9px] md:text-lg text-gray-500 font-semibold lg:hidden">
            <Link href="/search">Advance Search</Link>
          </p>
          <button className="bg-[#00c489] hover:bg-[#02b07b] active:bg-[#10926b] w-max-content lg:w-full lg:mx-10 text-white font-semibold lg:font-bold rounded-[3px] md:rounded-md md:text-lg lg:text-xl py-[3px] lg:py-4 px-2 text-[8px]">
            Search
          </button>
        </div>
      </form>
      <Link href="/search">
        <p className="hidden lg:flex items-center text-gray-700 justify-end font-bold text-lg text-end px-10 pt-5 cursor-pointer">
          Advance Search <span className="text-3xl px-2">&rarr;</span>
        </p>
      </Link>
    </div>
  );
};

export default DDCard;
