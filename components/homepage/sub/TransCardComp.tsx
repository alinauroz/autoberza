import Image from 'next/image';
import React from 'react';
import Location from '@/public/assets/common/homepage/locationIcon-gray.svg';
import MoonIcon from '@/public/assets/common/homepage/moon_category-thin.svg';
import Calendar from '@/public/assets/common/homepage/calendarIcon.svg';
import SpeedMeter from '@/public/assets/common/homepage/speedMeterIcon.svg';
import BusImg from '@/public/assets/common/homepage/BusImg.svg';
import Button from '@/components/Elements/Button';

const TransCardComp = () => {
  return (
    <div className="flex lg:justify-between md:w-full md:px-12 w-[300%] px-4">
      <div className="bg-white lg:w-max w-full mx-1 mt-4 rounded-2xl shadow-lg">
        <div className="p-3 lg:flex flex flex-col gap-4 lg:w-[350px]">
          <div className="relative">
            <Image src={BusImg} alt="" className="w-full" />
            <button className="bg-[#FF7C7C] hover:bg-[#ff7171] absolute bottom-5 right-5 lg:bottom-2 lg:right-3 rounded-full px-3 py-1.5 text-white text-[10px] font-bold">
              FEATURED
            </button>
          </div>
          <div className="flex flex-col justify-between lg:w-full pl-2">
            <p className="text-xl font-bold lg:text-xl lg:mb-5">
              MAN TGX 18,500 4X2 BLS
            </p>
            <div className="flex flex-col justify-between lg:gap-4 gap-4 pt-6 pb-4 lg:pt-0 lg:pb-0 lg:my-0">
              <div className="flex items-center justify-start gap-24 lg:gap-20">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={SpeedMeter} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    280,000 km
                  </p>
                </div>
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={Calendar} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    2006
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-[148px] lg:gap-[140px]">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={MoonIcon} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    Bus
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={Location} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    Podgorica
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-6">
              <p className="text-sm text-gray-500 font-bold lg:text-base">
                10 min ago
              </p>
              <div className="flex md:flex md:flex-row items-center flex-col md:gap-2">
                <Button
                  text={4600 + ' €'}
                  style={{
                    backgroundColor: 'Transparent',
                    color: '#00C489',
                    fontSize: '20px',
                    fontWeight: '700',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white lg:w-max w-full mx-1 mt-4 rounded-2xl shadow-lg">
        <div className="p-3 lg:flex flex flex-col gap-4 lg:w-[350px]">
          <div className="relative">
            <Image src={BusImg} alt="" className="w-full" />
            <button className="bg-[#FF7C7C] hover:bg-[#ff7171] absolute bottom-5 right-5 lg:bottom-2 lg:right-3 rounded-full px-3 py-1.5 text-white text-[10px] font-bold">
              FEATURED
            </button>
          </div>
          <div className="flex flex-col justify-between lg:w-full pl-2">
            <p className="text-xl font-bold lg:text-xl lg:mb-5">
              MAN TGX 18,500 4X2 BLS
            </p>
            <div className="flex flex-col justify-between lg:gap-4 gap-4 pt-6 pb-4 lg:pt-0 lg:pb-0 lg:my-0">
              <div className="flex items-center justify-start gap-24 lg:gap-20">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={SpeedMeter} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    280,000 km
                  </p>
                </div>
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={Calendar} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    2006
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-[148px] lg:gap-[140px]">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={MoonIcon} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    Bus
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={Location} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    Podgorica
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-6">
              <p className="text-sm text-gray-500 font-bold lg:text-base">
                10 min ago
              </p>
              <div className="flex md:flex md:flex-row items-center flex-col md:gap-2">
                <Button
                  text={4600 + ' €'}
                  style={{
                    backgroundColor: 'Transparent',
                    color: '#00C489',
                    fontSize: '20px',
                    fontWeight: '700',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white lg:w-max w-full mx-1 mt-4 rounded-2xl shadow-lg">
        <div className="p-3 lg:flex flex flex-col gap-4 lg:w-[350px]">
          <div className="relative">
            <Image src={BusImg} alt="" className="w-full" />
            <button className="bg-[#FF7C7C] hover:bg-[#ff7171] absolute bottom-5 right-5 lg:bottom-2 lg:right-3 rounded-full px-3 py-1.5 text-white text-[10px] font-bold">
              FEATURED
            </button>
          </div>
          <div className="flex flex-col justify-between lg:w-full pl-2">
            <p className="text-xl font-bold lg:text-xl lg:mb-5">
              MAN TGX 18,500 4X2 BLS
            </p>
            <div className="flex flex-col justify-between lg:gap-4 gap-4 pt-6 pb-4 lg:pt-0 lg:pb-0 lg:my-0">
              <div className="flex items-center justify-start gap-24 lg:gap-20">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={SpeedMeter} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    280,000 km
                  </p>
                </div>
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={Calendar} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    2006
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-[148px] lg:gap-[140px]">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={MoonIcon} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    Bus
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={Location} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    Podgorica
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-6">
              <p className="text-sm text-gray-500 font-bold lg:text-base">
                10 min ago
              </p>
              <div className="flex md:flex md:flex-row items-center flex-col md:gap-2">
                <Button
                  text={4600 + ' €'}
                  style={{
                    backgroundColor: 'Transparent',
                    color: '#00C489',
                    fontSize: '20px',
                    fontWeight: '700',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white lg:w-max w-full mx-1 mt-4 rounded-2xl shadow-lg">
        <div className="p-3 lg:flex flex flex-col gap-4 lg:w-[350px]">
          <div className="relative">
            <Image src={BusImg} alt="" className="w-full" />
            <button className="bg-[#FF7C7C] hover:bg-[#ff7171] absolute bottom-5 right-5 lg:bottom-2 lg:right-3 rounded-full px-3 py-1.5 text-white text-[10px] font-bold">
              FEATURED
            </button>
          </div>
          <div className="flex flex-col justify-between lg:w-full pl-2">
            <p className="text-xl font-bold lg:text-xl lg:mb-5">
              MAN TGX 18,500 4X2 BLS
            </p>
            <div className="flex flex-col justify-between lg:gap-4 gap-4 pt-6 pb-4 lg:pt-0 lg:pb-0 lg:my-0">
              <div className="flex items-center justify-start gap-24 lg:gap-20">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={SpeedMeter} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    280,000 km
                  </p>
                </div>
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={Calendar} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    2006
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-[148px] lg:gap-[140px]">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={MoonIcon} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    Bus
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={Location} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    Podgorica
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-6">
              <p className="text-sm text-gray-500 font-bold lg:text-base">
                10 min ago
              </p>
              <div className="flex md:flex md:flex-row items-center flex-col md:gap-2">
                <Button
                  text={4600 + ' €'}
                  style={{
                    backgroundColor: 'Transparent',
                    color: '#00C489',
                    fontSize: '20px',
                    fontWeight: '700',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransCardComp;
