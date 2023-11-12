import Image from 'next/image';
import React from 'react';
import GasPump from '@/public/assets/common/searchPage/gasPumpIcon.svg';
import Location from '@/public/assets/common/searchPage/locationIcon.svg';
import Calendar from '@/public/assets/common/searchPage/calendarIcon.svg';
import SpeedMeter from '@/public/assets/common/searchPage/speedMeterIcon.svg';
import ArrowIcon from '@/public/assets/common/searchPage/ArrowIcon.svg';
import Button from '@/components/Elements/Button';
import Link from 'next/link';
import moment from 'moment';

const Card = ({ ad }: { ad: any }) => {
  return (
    <Link href={`/ad/${ad.id}`}>
      <div className="bg-white mx-4 mt-4 rounded-md ">
        <div className="p-2 lg:flex flex flex-col lg:flex-row gap-4 lg:h-[246px]">
          <div
            className="w-full lg:w-[506px] lg:h-[225px] h-[250px] rounded-md lg:rounded-none"
            style={{
              background: `url(${ad.photos?.[0]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="flex flex-col justify-between lg:w-full">
            <div className="lg:flex lg:items-center lg:justify-between lg:pr-8">
              <p className="text-xl font-bold lg:text-2xl">{ad.title}</p>
              <div className="md:flex items-center gap-2  hidden">
                <Image src={Location} alt="" className="" />
                <p className="text-xs text-gray-600 lg:text-lg">{ad.city}</p>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:gap-4 gap-4 my-4 lg:my-0">
              <div className="flex gap-16">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={GasPump} alt="" className="w-4" />
                  <p className="text-xs font-semibold text-gray-800 lg:text-base">
                    {ad?.details?.manufacturer} {ad?.details?.model}
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
                  {ad.details?.year}
                </p>
              </div>
              <div className="flex items-center gap-2 lg:gap-4">
                <Image src={SpeedMeter} alt="" className="w-4" />
                <p className="text-xs font-semibold text-gray-800 lg:text-base">
                  {moment(new Date(ad.createdOn)).format('DD MMMM YYYY')}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-6">
              <div className="flex md:flex md:flex-row items-center flex-col md:gap-2">
                <Button
                  text={(ad.discountedPrice ?? ad.price) + ' €'}
                  style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    width: '110px',
                    height: '30px',
                    borderRadius: '100px',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
                {ad.discountedPrice && (
                  <span className="mx-2 line-through font-bold text-gray-500 ">
                    {ad.price} €
                  </span>
                )}
              </div>
              <div className="flex items-center md:gap-2 gap-1 cursor-pointer md:mr-8 mr-2">
                <p className="text-sm font-semibold lg:text-base">
                  View complete offer
                </p>
                <Image src={ArrowIcon} alt="" className="w-4 lg:w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
