import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import dropDownImg from '@/public/assets/common/homepage/dropdownIcon.svg';
import DropDownMenu from '@/components/Elements/Dropdown';
import Input from '@/components/Elements/Input';

const DropDown = ({ filters }: { filters: any[] }) => {
  const [city, setCity] = useState<any>();
  const [category, setCategory] = useState<any>();
  const [year, setYear] = useState<any>();

  const { cityOptions, categoryOptions, yearOptions } = useMemo(() => {
    const countryOptions = filters.find((f) => f.name === 'country');
    const categories =
      filters.find((f) => f.name === 'categories')?.options || [];
    const years = filters.find((f) => f.name === 'year')?.options || [];
    let cities: any = [];
    for (let x in countryOptions?.doubleOptions || {}) {
      cities = cities.concat(countryOptions.doubleOptions[x]);
    }
    return {
      cityOptions: cities.map((city: string) => ({ label: city, value: city })),
      categoryOptions: categories.map((c: string) => ({ label: c, value: c })),
      yearOptions: years.map((c: string) => ({ label: c, value: c })),
    };
  }, [filters]);

  return (
    <div className="">
      <div className="px-5 lg:px-10 py-[3px] md:py-1 lg:py-1.5 xl:py-2 w-full flex items-center relative">
        <DropDownMenu
          name="City"
          inputStyles={{
            boxShadow: 'none',
            border: '1px solid black',
            borderRadius: '10px',
            marginBottom: '10px',
          }}
          options={cityOptions}
          selectedLV={city}
          setSelectedLV={(option) => {
            setCity(option);
          }}
        />
        <input type="hidden" value={city?.value} name="city" />
      </div>
      <div className="px-5 lg:px-10 py-[3px] md:py-1 lg:py-1.5 xl:py-2 w-full flex items-center relative">
        <DropDownMenu
          name="Category"
          inputStyles={{
            boxShadow: 'none',
            border: '1px solid black',
            borderRadius: '10px',
            marginBottom: '10px',
          }}
          options={categoryOptions}
          selectedLV={category}
          setSelectedLV={(option) => {
            setCategory(option);
          }}
        />
        <input type="hidden" value={category?.value} name="category" />
      </div>
      <div className="px-5 lg:px-10 py-[3px] md:py-1 lg:py-1.5 xl:py-2 w-full flex items-center relative">
        <DropDownMenu
          name="Year"
          inputStyles={{
            boxShadow: 'none',
            border: '1px solid black',
            borderRadius: '10px',
            marginBottom: '10px',
          }}
          options={yearOptions}
          selectedLV={year}
          setSelectedLV={(option) => {
            setYear(option);
          }}
        />
        <input type="hidden" value={year?.value} name="year" />
      </div>
      <div className="px-5 lg:px-10 py-[3px] md:py-1 lg:py-1.5 xl:py-2 w-full flex items-center relative">
        <div>
          <div className="py-2 flex items-center gap-3">
            <div className="flex items-center gap-4 relative w-full">
              <p className="text-sm font-bold">Min Price</p>
              <Input name="minPrice" type="number" />
              <div className="absolute right-2 text-sm font-bold">€</div>
            </div>
            <div className="flex items-center gap-4 relative w-full">
              <p className="text-sm font-bold">Max Price</p>
              <Input type="number" name="maxPrice" />
              <div className="absolute right-2 text-sm font-bold">€</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
