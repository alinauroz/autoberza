import Image from 'next/image';
import React from 'react';
import dropDownImg from '@/public/assets/common/dd-icon-dark-filled.svg';

const DropDown = () => {
  return (
    <div>
      <div className="px-5 lg:px-10 py-0.5 md:py-1 lg:py-2 w-full flex items-center relative">
        <button className="border text-[8px] lg:text-lg md:text-lg text-gray-500 font-semibold text-start border-gray-400 lg:rounded-md rounded w-full p-1 md:p-2 lg:p-4 ">
          City
        </button>
        <Image
          src={dropDownImg}
          alt=""
          className="w-[7px] md:w-3 absolute md:right-12 lg:right-16 right-8 cursor-pointer"
        />
      </div>
      <div className="px-5 lg:px-10 py-0.5 md:py-1 lg:py-2 w-full flex items-center relative">
        <button className="border text-[8px] lg:text-lg md:text-lg text-gray-500 font-semibold text-start border-gray-400 lg:rounded-md rounded w-full p-1 md:p-2 lg:p-4 ">
          Manufacturer
        </button>
        <Image
          src={dropDownImg}
          alt=""
          className="w-[7px] md:w-3 absolute md:right-12 lg:right-16 right-8 cursor-pointer"
        />
      </div>
      <div className="px-5 lg:px-10 py-0.5 md:py-1 lg:py-2 w-full flex items-center relative">
        <button className="border text-[8px] lg:text-lg md:text-lg text-gray-500 font-semibold text-start border-gray-400 lg:rounded-md rounded w-full p-1 md:p-2 lg:p-4 ">
          Models
        </button>
        <Image
          src={dropDownImg}
          alt=""
          className="w-[7px] md:w-3 absolute md:right-12 lg:right-16 right-8 cursor-pointer"
        />
      </div>
      <div className="px-5 lg:px-10 py-0.5 md:py-1 lg:py-2 w-full flex items-center relative">
        <button className="border text-[8px] lg:text-lg md:text-lg text-gray-500 font-semibold text-start border-gray-400 lg:rounded-md rounded w-full p-1 md:p-2 lg:p-4 ">
          Price
        </button>
        <Image
          src={dropDownImg}
          alt=""
          className="w-[7px] md:w-3 absolute md:right-12 lg:right-16 right-8 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default DropDown;
