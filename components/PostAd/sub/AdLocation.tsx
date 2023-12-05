'use client';
import DropDownMenu, { LV } from '@/components/Elements/Dropdown';
import Input from '@/components/Elements/Input';
import { cityOptions, countryOptions } from '@/utils/options';
import React, { useEffect, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

const AdLocation = ({ prefill }: { prefill: any }) => {
  const tempCountriesLV: LV[] = countryOptions;
  const intl = useIntl();

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

  const [city, setCity] = React.useState<LV | undefined>(
    tempGradsLV.find((country) => country.value === prefill?.city)
  );

  useEffect(() => {
    setCity(undefined);
  }, [country]);

  return (
    <div className="section-conatiner">
      <div className="post-ad-section-heading">
        <span>
          <FormattedMessage
            defaultMessage={'AD LOCATION'}
            id="adlocation.location"
          />
        </span>
      </div>

      <div className="ad-locations">
        <DropDownMenu
          name={intl.formatMessage({
            defaultMessage: 'Country',
            id: 'adlocation.country',
          })}
          options={tempCountriesLV}
          selectedLV={country}
          setSelectedLV={setCountry}
        />
        <input type="hidden" value={country?.value} name="country" />
        <input type="hidden" value={city?.value} name="city" />
        <DropDownMenu
          name={intl.formatMessage({
            defaultMessage: 'City',
            id: 'adlocation.city',
          })}
          options={tempGradsLV}
          selectedLV={city}
          setSelectedLV={setCity}
        />
        {false && (
          <Input
            placeholder={intl.formatMessage({
              defaultMessage: '"Location"',
              id: 'adlocation.location',
            })}
            name={intl.formatMessage({
              defaultMessage: '"location"',
              id: 'adlocation.location',
            })}
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
