import React from 'react';
import DropDown from './DropDown';
import Button from '@/components/Elements/Button';

const DDCard = () => {
  return (
    <div className="bg-white rounded-md lg:w-[420px] xl:w-[500px] md:w-96 w-48 lg:rounded-xl py-2 md:py-6 lg:py-4 xl:py-12 xl:-ml-32">
      {/* <div className="bg-white rounded-md lg:w-[500px] w-56 lg:rounded-xl py-3 lg:py-8"> */}
      <p className="text-[10px] md:text-2xl md:pb-3 lg:pb-4 xl:pb-5 lg:text-3xl xl:text-4xl font-semibold text-center ">
        Find your right car
      </p>
      <DropDown />
      <div className="flex items-center justify-between w-[80%] md:w-[90%] pt-[3px] md:pt-5 lg:w-full mx-auto ">
        <p className="text-[9px] md:text-lg text-gray-500 font-semibold lg:hidden">
          Advance Search
        </p>
        <button className="bg-[#00c489] hover:bg-[#02b07b] active:bg-[#10926b] w-max-content lg:w-full lg:mx-10 text-white font-semibold lg:font-bold rounded-[3px] md:rounded-md md:text-lg lg:text-xl py-[3px] lg:py-4 px-2 text-[8px]">
          Search
        </button>
      </div>
      <p className="hidden lg:flex items-center text-gray-700 justify-end font-bold text-lg text-end px-10 pt-5 cursor-pointer">
        Advance Search <span className="text-2xl px-2 mb-[3px]">&rarr;</span>
      </p>
    </div>
  );
};

export default DDCard;
