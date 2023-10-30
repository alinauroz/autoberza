import Button from '@/components/Elements/Button';
import Image from 'next/image';
import DropdownIcon from '@/public/assets/common/searchPage/dropdownIcon.svg';
import React from 'react';

const HeroSection = ({
  setShowFilter,
  count,
}: {
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
}) => {
  return (
    <div>
      <div className="flex items-center px-4 pt-4 lg:pt-0 justify-between">
        <p className="font-semibold w-1/2 lg:text-3xl lg:w-full">
          <span className="font-bold">{count} ads found</span>
        </p>
        <div className="lg:hidden">
          <Button
            onClick={() => setShowFilter(true)}
            text="Choose Filters"
            style={{
              width: '136px',
              height: '34px',
              fontSize: '12px',
              fontWeight: '700',
              borderRadius: '5px',

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </div>
      </div>
      <div className="pt-6 flex items-center justify-between px-4 lg:pt-2">
        <div className="text-xs font-bold flex gap-4 lg:text-lg">
          <p>Min: 2500€</p>
          <p>Max: 3400€</p>
          <p>Avg: 3000€</p>
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="sort by:"
            className="px-4 py-2 rounded-md text-xs focus:outline-gray-500 lg:w-[250px] lg:h-10 lg:border lg:text-sm lg:border-gray-400"
          />
          <Image
            src={DropdownIcon}
            alt=""
            className="absolute right-4 cursor-pointer lg:w-2"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
