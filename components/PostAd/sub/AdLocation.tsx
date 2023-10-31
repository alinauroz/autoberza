'use client';
import DropDownMenu, { LV } from '@/components/Elements/Dropdown';
import Input from '@/components/Elements/Input';
import { cityOptions, countryOptions } from '@/utils/options';
import React, { useMemo } from 'react';

const AdLocation = ({ prefill }: { prefill: any }) => {
  const tempCountriesLV: LV[] = countryOptions;

  const tempLocationsLV: LV[] = [
    { value: 'loc1', label: 'Locaitons 1 Option' },
    { value: 'loc2', label: 'Locaitons 2 Option' },
    { value: 'loc3', label: 'Locaitons 3 Option' },
  ];

  const [country, setCountry] = React.useState<LV | undefined>(
    tempCountriesLV.find((country) => country.value === prefill?.country)
  );

  const tempGradsLV: LV[] = useMemo(() => {
    if (country)
      return cityOptions.filter((city) => city.country === country?.value);
    return [];
  }, [country]);

  return (
    <div className="section-conatiner">
      <div className="post-ad-section-heading">
        <span>AD LOCATION</span>
      </div>

      <div className="ad-locations">
        <DropDownMenu
          name="Country"
          options={tempCountriesLV}
          selectedLV={country}
          setSelectedLV={setCountry}
        />
        <input type="hidden" value={country?.value} name="country" />
        <Input
          placeholder="City"
          name="city"
          required
          style={{
            height: '65px',
            margin: 0,
            boxShadow: '0px 1px 4px 2px #00000017',
            border: 'none',
          }}
          prefill={prefill}
        />
        {false && (
          <Input
            placeholder="Location"
            name="location"
            required
            style={{
              height: '65px',
              margin: 0,
              boxShadow: '0px 1px 4px 2px #00000017',
              border: 'none',
            }}
            prefill={prefill}
          />
        )}
      </div>
    </div>
  );
};

export default AdLocation;
