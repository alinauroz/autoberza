import Image from 'next/image';
import React from 'react';
import SpeedMeter from '@/public/assets/common/ad/speedmeter.svg';
import Engin from '@/public/assets/common/ad/engine-motor.svg';
import Horse from '@/public/assets/common/ad/horse.svg';
import Diesel from '@/public/assets/common/ad/gas-station-petrol-station.svg';
import Lever from '@/public/assets/common/ad/lever.svg';
import Calender from '@/public/assets/common/ad/calendar.svg';
import { FormattedMessage } from 'react-intl';

const CarDescription = ({ data }: { data: any }) => {
  return (
    <div className="grid grid-cols-3 gap-6 mb-4 lg:w-full lg:flex lg:items-center lg:justify-between">
      {'mileage' in (data?.details || {}) && (
        <div className="flex items-center flex-col">
          <Image src={SpeedMeter} alt="" className="w-10" />
          <p className="text-sm font-bold">
            {data?.details?.mileage || 0}
            <FormattedMessage defaultMessage="km" id="cardescription.km" />
          </p>
          <p className="text-xs text-gray-600">
            <FormattedMessage
              defaultMessage="Kilometers"
              id="cardescription.km1"
            />
          </p>
        </div>
      )}
      {'cubicCapacity' in (data?.details || {}) && (
        <div className="flex items-center flex-col">
          <Image src={Engin} alt="" className="w-10" />
          <p className="text-sm font-bold">
            {data.details?.cubicCapacity}
            <FormattedMessage defaultMessage="cm3" id="cardescription.cc" />
          </p>
          <p className="text-xs text-gray-600">
            <FormattedMessage
              defaultMessage="Cubic Capacity"
              id="cardescription.cc1"
            />
          </p>
        </div>
      )}
      {'horsePower' in (data?.details || {}) && (
        <div className="flex items-center flex-col">
          <Image src={Horse} alt="" className="w-10" />
          <p className="text-sm font-bold">
            {data?.details?.horsePower}
            <FormattedMessage defaultMessage="KS" id="cardescription.hp" />
          </p>
          <p className="text-xs text-gray-600">
            <FormattedMessage
              defaultMessage="Horse Power"
              id="cardescription.hp1"
            />
          </p>
        </div>
      )}
      {'horsePower' in (data?.details || {}) && (
        <div className="flex items-center flex-col">
          <Image src={Diesel} alt="" className="w-10" />
          <p className="text-sm font-bold">{data?.details?.fuel}</p>
          <p className="text-xs text-gray-600">
            <FormattedMessage defaultMessage="Fuel" id="cardescription.fuel" />
          </p>
        </div>
      )}
      {'transmission' in (data?.details || {}) && (
        <div className="flex items-center flex-col">
          <Image src={Lever} alt="" className="w-10" />
          <p className="text-sm font-bold">{data?.details?.transmission}</p>
          <p className="text-xs text-gray-600">
            <FormattedMessage
              defaultMessage="Transmission"
              id="cardescription.transmission"
            />
          </p>
        </div>
      )}
      {'year' in (data?.details || {}) && (
        <div className="flex items-center flex-col">
          <Image src={Calender} alt="" className="w-10" />
          <p className="text-sm font-bold">{data?.details?.year}</p>
          <p className="text-xs text-gray-600">
            <FormattedMessage defaultMessage="Year" id="cardescription.year" />
          </p>
        </div>
      )}
    </div>
  );
};

export default CarDescription;
