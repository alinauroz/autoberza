'use client';
import DropDownMenu, { LV } from '@/components/Elements/Dropdown';
import Input from '@/components/Elements/Input';
import React from 'react';

const AdLocation = () => {
  const [country, setCountry] = React.useState<LV>();
  const [grad, setGrad] = React.useState<LV>();
  const [location, setLocation] = React.useState<LV>();

  const tempCountriesLV: LV[] = [
    { value: 'US', label: 'United States' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'FR', label: 'France' },
  ];

  const tempGradsLV: LV[] = [
    { value: 'grad1', label: 'Grad 1 Option' },
    { value: 'grad2', label: 'Grad 2 Option' },
    { value: 'grad3', label: 'Grad 3 Option' },
  ];

  const tempLocationsLV: LV[] = [
    { value: 'loc1', label: 'Locaitons 1 Option' },
    { value: 'loc2', label: 'Locaitons 2 Option' },
    { value: 'loc3', label: 'Locaitons 3 Option' },
  ];

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
          style={{
            height: '65px',
            margin: 0,
            boxShadow: '0px 1px 4px 2px #00000017',
            border: 'none',
          }}
        />
        <Input
          placeholder="Location"
          name="location"
          style={{
            height: '65px',
            margin: 0,
            boxShadow: '0px 1px 4px 2px #00000017',
            border: 'none',
          }}
        />
      </div>
    </div>
  );
};

export default AdLocation;
