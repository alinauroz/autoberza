'use client';
import DropDownMenu, { LV } from '@/components/Elements/Dropdown';
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
        <DropDownMenu
          name="Grad"
          options={tempGradsLV}
          selectedLV={grad}
          setSelectedLV={setGrad}
        />
        <DropDownMenu
          name="Location"
          options={tempLocationsLV}
          selectedLV={location}
          setSelectedLV={setLocation}
        />
      </div>
    </div>
  );
};

export default AdLocation;
