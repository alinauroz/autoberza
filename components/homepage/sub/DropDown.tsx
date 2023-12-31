import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import dropDownImg from '@/public/assets/common/homepage/dropdownIcon.svg';
import DropDownMenu from '@/components/Elements/Dropdown';
import Input from '@/components/Elements/Input';
import { FormattedMessage, useIntl } from 'react-intl';
import DoubleDropdown from '@/components/Elements/DoubleDropdown';

const DropDown = ({ filters }: { filters: any[] }) => {
  const [city, setCity] = useState<any>();
  const [category, setCategory] = useState<any>();
  const [year, setYear] = useState<any>();
  const [fuel, setFuel] = useState<any>();

  const intl = useIntl();

  const {
    cityOptions,
    categoryOptions,
    yearOptions,
    manufacturerOptions,
    fuelOptions,
  } = useMemo(() => {
    const countryOptions = filters.find((f) => f.name === 'country');
    const categories =
      filters.find((f) => f.name === 'categories')?.options || [];
    const years = filters.find((f) => f.name === 'year')?.options || [];
    let cities: any = [];
    for (let x in countryOptions?.doubleOptions || {}) {
      cities = cities.concat(countryOptions.doubleOptions[x]);
    }
    const manufacturers =
      filters.find(
        (f) => f.id === 'manufacturers' || f.id === 'manufactures'
      ) || [];
    const fuelOptions = (
      filters.find((f) => f.name === 'fuel')?.options || []
    ).map((option: string) => ({ label: option, value: option }));
    return {
      cityOptions: cities.map((city: string) => ({ label: city, value: city })),
      categoryOptions: categories.map((c: string) => ({ label: c, value: c })),
      yearOptions: years.map((c: string) => ({ label: c, value: c })),
      manufacturerOptions: manufacturers,
      fuelOptions,
    };
  }, [filters]);

  return (
    <div className="">
      <div className="px-5 lg:px-10 py-[3px] md:py-1 lg:py-1.5 xl:py-2 w-full flex items-center relative">
        <DropDownMenu
          name={intl.formatMessage({
            defaultMessage: 'Category',
            id: 'dd.category-1',
          })}
          inputStyles={{
            boxShadow: 'none',
            border: '1px solid black',
            borderRadius: '0',
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
      <div className="px-5 lg:px-10 py-[10px] md:py-1 lg:py-1.5 xl:py-2 w-full flex items-center relative">
        <DropDownMenu
          name={intl.formatMessage({ defaultMessage: 'Year', id: 'dd.year-1' })}
          inputStyles={{
            boxShadow: 'none',
            border: '1px solid black',
            borderRadius: '0',
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
        <DropDownMenu
          name={intl.formatMessage({ defaultMessage: 'Fuel', id: 'dd.fuel' })}
          inputStyles={{
            boxShadow: 'none',
            border: '1px solid black',
            borderRadius: '1px',
            marginBottom: '1px',
          }}
          options={fuelOptions}
          selectedLV={fuel}
          setSelectedLV={(option) => {
            setFuel(option as any);
          }}
        />
        <input type="hidden" value={fuel?.value} name="fuel" />
      </div>

      <div className="px-5 lg:px-10 py-[3px] md:py-1 lg:py-1.5 xl:py-2 w-full flex items-center relative">
        <div>
          <div className="py-2 flex items-center gap-3">
            <div className="flex items-center gap-4 relative w-full">
              <p className="text-sm font-bold">
                <FormattedMessage
                  defaultMessage={'Min Mileage'}
                  id="dd.min-mileage"
                />
              </p>
              <Input
                name="minKm"
                type="number"
                style={{ borderRadius: '0', padding: '10px' }}
              />
              <div className="absolute right-2 text-sm font-bold">km</div>
            </div>
            <div className="flex items-center gap-4 relative w-full">
              <p className="text-sm font-bold">
                <FormattedMessage
                  defaultMessage={'Max Mileage'}
                  id="dd.max-mileage"
                />
              </p>
              <Input
                type="number"
                name="maxKm"
                style={{ borderRadius: '0', padding: '10px' }}
              />
              <div className="absolute right-2 text-sm font-bold">km</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 lg:px-10 py-[3px] md:py-1 lg:py-1.5 xl:py-2 w-full flex items-center relative">
        <div>
          <div className="py-2 flex items-center gap-3">
            <div className="flex items-center gap-4 relative w-full">
              <p className="text-sm font-bold">
                <FormattedMessage
                  defaultMessage={'Min Price'}
                  id="dropdown.min"
                />
              </p>
              <Input
                name="minPrice"
                type="number"
                style={{ borderRadius: '0', padding: '10px' }}
              />
              <div className="absolute right-2 text-sm font-bold">€</div>
            </div>
            <div className="flex items-center gap-4 relative w-full">
              <p className="text-sm font-bold">
                <FormattedMessage
                  defaultMessage={'Max Price'}
                  id="dropdown.max"
                />
              </p>
              <Input
                type="number"
                name="maxPrice"
                style={{ borderRadius: '0', padding: '10px' }}
              />
              <div className="absolute right-2 text-sm font-bold">€</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
