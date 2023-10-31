import Button from '@/components/Elements/Button';
import Image from 'next/image';
import DropdownIcon from '@/public/assets/common/searchPage/dropdownIcon.svg';
import React from 'react';

const HeroSection = ({
  setShowFilter,
  count,
  variables,
  setVariables,
}: {
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  variables: any;
  setVariables: (x: any) => void;
}) => {
  return (
    <div
      className="md:grid"
      style={{ gridTemplateColumns: 'calc(100% - 280px) 250px' }}
    >
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
        {false && (
          <div className="text-xs font-bold flex gap-4 lg:text-lg">
            <p>Min: 2500€</p>
            <p>Max: 3400€</p>
            <p>Avg: 3000€</p>
          </div>
        )}
        <div className="relative flex items-center">
          <select
            onChange={(e) => {
              switch (e.target.value) {
                case 'price-low-high': {
                  variables['sortBy'] = 'price';
                  variables['sortOrder'] = 'asc';
                  setVariables({ ...variables });
                  break;
                }
                case 'price-high-low': {
                  variables['sortBy'] = 'price';
                  variables['sortOrder'] = 'desc';
                  setVariables({ ...variables });
                  break;
                }
                case 'date-high-low': {
                  variables['sortBy'] = 'createdOn';
                  variables['sortOrder'] = 'desc';
                  setVariables({ ...variables });
                  break;
                }
                case 'date-low-high': {
                  variables['sortBy'] = 'createdOn';
                  variables['sortOrder'] = 'asc';
                  setVariables({ ...variables });
                  break;
                }
              }
            }}
            placeholder="Sort by:"
            className="px-4 py-2 rounded-md text-xs focus:outline-gray-500 lg:w-[250px] lg:h-10 lg:border lg:text-sm lg:border-gray-400"
          >
            <option disabled selected>
              Sort By
            </option>
            <option value="price-low-high">Price (low to high)</option>
            <option value="price-high-low">Price (high to low)</option>
            <option value="date-high-low">Date (latest first)</option>
            <option value="date-low-high">Date (oldest first)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
