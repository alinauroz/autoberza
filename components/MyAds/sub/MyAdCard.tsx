import React from 'react';
import BMW from '@/public/assets/common/searchPage/BMW.svg';
import Location from '@/public/assets/common/searchPage/locationIcon.svg';
import GasPump from '@/public/assets/common/searchPage/gasPumpIcon.svg';
import Calendar from '@/public/assets/common/searchPage/calendarIcon.svg';
import SpeedMeter from '@/public/assets/common/searchPage/speedMeterIcon.svg';
import ArrowIcon from '@/public/assets/common/searchPage/ArrowIcon.svg';
import Image from 'next/image';
import Button from '@/components/Elements/Button';

const MyAdCard = () => {
  return (
    <div className="bg-white mx-4 mt-4 rounded-md ">
      <div className="p-2 flex gap-4 lg:h-[246px]">
        <Image src={BMW} alt="" className="w-[220px] lg:w-[306px]" />
        <div className="flex flex-col justify-between lg:w-full">
          <div className="lg:flex lg:items-center lg:justify-between lg:pr-8">
            <p className="text-xs font-bold lg:text-2xl">
              BMW - Golf 5 - 2.0 TDI
            </p>
            <div className="flex items-center gap-2 hidden lg:flex">
              <Image src={Location} alt="" className="" />
              <p className="text-xs text-gray-600 lg:text-lg">Podgorica</p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div className="flex gap-16">
              <div className="flex items-center gap-2 lg:gap-4">
                <Image src={GasPump} alt="" className="w-4" />
                <p className="text-xs font-semibold text-gray-800 lg:text-base">
                  Diesel
                </p>
              </div>
              <div className="flex items-center gap-2 lg:hidden">
                <Image src={Location} alt="" className="w-4" />
                <p className="text-xs text-gray-600">Podgorica</p>
              </div>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <Image src={Calendar} alt="" className="w-4" />
              <p className="text-xs font-semibold text-gray-800 lg:text-base">
                2006
              </p>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <Image src={SpeedMeter} alt="" className="w-4" />
              <p className="text-xs font-semibold text-gray-800 lg:text-base">
                22,000 km
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="hidden lg:block">
              <Button
                text="3350 €"
                style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  width: '120px',
                  height: '35px',
                  borderRadius: '100px',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </div>
            <div className="lg:hidden">
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
            </div>
            <div className="flex items-center gap-2 cursor-pointer lg:pr-8">
              <p className="text-[9px] font-semibold lg:text-base">
                View complete offer
              </p>
              <Image src={ArrowIcon} alt="" className="w-2.5 lg:w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAdCard;