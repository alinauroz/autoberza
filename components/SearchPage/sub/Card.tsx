import Image from 'next/image';
import React from 'react';
import BMW from '@/public/assets/common/searchPage/BMW.svg';
import GasPump from '@/public/assets/common/searchPage/gasPumpIcon.svg';
import Location from '@/public/assets/common/searchPage/locationIcon.svg';
import Calendar from '@/public/assets/common/searchPage/calendarIcon.svg';
import SpeedMeter from '@/public/assets/common/searchPage/speedMeterIcon.svg';
import ArrowIcon from '@/public/assets/common/searchPage/ArrowIcon.svg';
import Button from '@/components/Elements/Button';

const Card = () => {
  return (
    <div className="bg-white mx-4 mt-4 rounded-md">
      <div className="p-2 flex gap-4 ">
        <Image src={BMW} alt="" className="w-[220px]" />
        <div className="flex flex-col justify-between">
          <p className="text-xs font-bold">BMW - Golf 5 - 2.0 TDI</p>
          <div className="flex flex-col justify-between gap-4">
            <div className="flex gap-16">
              <div className="flex items-center gap-2">
                <Image src={GasPump} alt="" className="w-4" />
                <p className="text-xs font-semibold text-gray-800">Diesel</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={Location} alt="" className="w-4" />
                <p className="text-xs text-gray-600">Podgorica</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Calendar} alt="" className="w-4" />
              <p className="text-xs font-semibold text-gray-800">2006</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={SpeedMeter} alt="" className="w-4" />
              <p className="text-xs font-semibold text-gray-800">22,000 km</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Button
              text="3350 €"
              style={{
                fontSize: '10px',
                fontWeight: '700',
                width: '70px',
                height: '25px',
                borderRadius: '100px',

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <div className="flex items-center gap-2 cursor-pointer">
              <p className="text-[9px] font-semibold">View complete offer</p>
              <Image src={ArrowIcon} alt="" className="w-2.5 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
