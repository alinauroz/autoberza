import Image from 'next/image';
import React from 'react';
import Location from '@/public/assets/common/homepage/locationIcon-gray.svg';
import GasPump from '@/public/assets/common/homepage/gasPumpIcon.svg';
import Calendar from '@/public/assets/common/homepage/calendarIcon.svg';
import SpeedMeter from '@/public/assets/common/homepage/speedMeterIcon.svg';
import CardImg from '@/public/assets/common/homepage/homepage-car-img1.svg';
import Button from '@/components/Elements/Button';

const CarCardComp = () => {
  return (
    <div className="flex lg:justify-between md:w-full md:px-14 w-[300%] px-4">
      <div className="bg-white lg:w-max w-full mx-1 mt-4 rounded-2xl shadow-lg">
        <div className="p-3 lg:flex flex flex-col gap-4 ">
          <div className="relative">
            <Image src={CardImg} alt="" className="w-full" />
            <button className="bg-[#FF7C7C] hover:bg-[#ff7171] absolute bottom-5 right-5 lg:bottom-2 lg:right-3 rounded-full px-3 py-1.5 text-white text-[10px] font-bold">
              FEATURED
            </button>
          </div>
          <div className="flex flex-col justify-between lg:w-full pl-2">
            <p className="text-xl font-bold lg:text-xl lg:mb-5">
              Volkswagen - Golf 5 - 2.0 TDI
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
              <div className="flex items-center justify-start gap-[132px] lg:gap-[120px]">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={GasPump} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    Diesel
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
            <div className="flex items-center justify-between ">
              <p className="text-sm text-gray-500 font-bold lg:text-base">
                10 min ago
              </p>
              <div className="flex md:flex md:flex-row items-center flex-col md:gap-2">
                <Button
                  text={3350 + ' €'}
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
        <div className="p-3 lg:flex flex flex-col gap-4 ">
          <div className="relative">
            <Image src={CardImg} alt="" className="w-full" />
            <button className="bg-[#FF7C7C] hover:bg-[#ff7171] absolute bottom-5 right-5 lg:bottom-2 lg:right-3 rounded-full px-3 py-1.5 text-white text-[10px] font-bold">
              FEATURED
            </button>
          </div>
          <div className="flex flex-col justify-between lg:w-full pl-2">
            <p className="text-xl font-bold lg:text-xl lg:mb-5">
              Volkswagen - Golf 5 - 2.0 TDI
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
              <div className="flex items-center justify-start gap-[132px] lg:gap-[120px]">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={GasPump} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    Diesel
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
            <div className="flex items-center justify-between ">
              <p className="text-sm text-gray-500 font-bold lg:text-base">
                10 min ago
              </p>
              <div className="flex md:flex md:flex-row items-center flex-col md:gap-2">
                <Button
                  text={3350 + ' €'}
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
        <div className="p-3 lg:flex flex flex-col gap-4 ">
          <div className="relative">
            <Image src={CardImg} alt="" className="w-full" />
            <button className="bg-[#FF7C7C] hover:bg-[#ff7171] absolute bottom-5 right-5 lg:bottom-2 lg:right-3 rounded-full px-3 py-1.5 text-white text-[10px] font-bold">
              FEATURED
            </button>
          </div>
          <div className="flex flex-col justify-between lg:w-full pl-2">
            <p className="text-xl font-bold lg:text-xl lg:mb-5">
              Volkswagen - Golf 5 - 2.0 TDI
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
              <div className="flex items-center justify-start gap-[132px] lg:gap-[120px]">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={GasPump} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    Diesel
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
            <div className="flex items-center justify-between ">
              <p className="text-sm text-gray-500 font-bold lg:text-base">
                10 min ago
              </p>
              <div className="flex md:flex md:flex-row items-center flex-col md:gap-2">
                <Button
                  text={3350 + ' €'}
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
        <div className="p-3 lg:flex flex flex-col gap-4 ">
          <div className="relative">
            <Image src={CardImg} alt="" className="w-full" />
            <button className="bg-[#FF7C7C] hover:bg-[#ff7171] absolute bottom-5 right-5 lg:bottom-2 lg:right-3 rounded-full px-3 py-1.5 text-white text-[10px] font-bold">
              FEATURED
            </button>
          </div>
          <div className="flex flex-col justify-between lg:w-full pl-2">
            <p className="text-xl font-bold lg:text-xl lg:mb-5">
              Volkswagen - Golf 5 - 2.0 TDI
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
              <div className="flex items-center justify-start gap-[132px] lg:gap-[120px]">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={GasPump} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    Diesel
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
            <div className="flex items-center justify-between ">
              <p className="text-sm text-gray-500 font-bold lg:text-base">
                10 min ago
              </p>
              <div className="flex md:flex md:flex-row items-center flex-col md:gap-2">
                <Button
                  text={3350 + ' €'}
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

export default CarCardComp;
