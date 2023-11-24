import Image from 'next/image';
import React from 'react';
import Location from '@/public/assets/common/homepage/locationIcon-gray.svg';
import WidthLenIcon from '@/public/assets/common/homepage/height-icon.svg';
import HeightIcon from '@/public/assets/common/homepage/autoaprts-height.svg';
import HeightIcon2 from '@/public/assets/common/homepage/circum_line-height-icon.svg';
import AutoPartsImg from '@/public/assets/common/homepage/homepage-autoparts-img1.svg';
import Button from '@/components/Elements/Button';

const AutoPartsCardComp = () => {
  return (
    <div className="flex lg:justify-between md:w-full md:px-14 w-[300%] px-4">
      <div className="bg-white lg:w-max w-full mx-1 mt-4 rounded-2xl shadow-lg">
        <div className="p-3 lg:flex flex flex-col gap-4 lg:w-[345px]">
          <div className="relative">
            <Image src={AutoPartsImg} alt="" className="w-full" />
            <button className="bg-[#FF7C7C] hover:bg-[#ff7171] absolute bottom-5 right-5 lg:bottom-2 lg:right-3 rounded-full px-3 py-1.5 text-white text-[10px] font-bold">
              FEATURED
            </button>
          </div>
          <div className="flex flex-col justify-between lg:w-full">
            <p className="text-xl font-bold lg:text-xl mb-5">
              GreenTrac 195/55R16 Universal tire
            </p>
            <div className="flex flex-col justify-between lg:gap-4 gap-4 my-4 lg:my-0">
              <div className="flex items-center justify-start gap-20">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={WidthLenIcon} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    195
                  </p>
                </div>
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={HeightIcon} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    55
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-[80px]">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={HeightIcon2} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    116
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
        <div className="p-3 lg:flex flex flex-col gap-4 lg:w-[345px]">
          <div className="relative">
            <Image src={AutoPartsImg} alt="" className="w-full" />
            <button className="bg-[#FF7C7C] hover:bg-[#ff7171] absolute bottom-5 right-5 lg:bottom-2 lg:right-3 rounded-full px-3 py-1.5 text-white text-[10px] font-bold">
              FEATURED
            </button>
          </div>
          <div className="flex flex-col justify-between lg:w-full">
            <p className="text-xl font-bold lg:text-xl mb-5">
              GreenTrac 195/55R16 Universal tire
            </p>
            <div className="flex flex-col justify-between lg:gap-4 gap-4 my-4 lg:my-0">
              <div className="flex items-center justify-start gap-20">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={WidthLenIcon} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    195
                  </p>
                </div>
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={HeightIcon} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    55
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-[80px]">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={HeightIcon2} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    116
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
        <div className="p-3 lg:flex flex flex-col gap-4 lg:w-[345px]">
          <div className="relative">
            <Image src={AutoPartsImg} alt="" className="w-full" />
            <button className="bg-[#FF7C7C] hover:bg-[#ff7171] absolute bottom-5 right-5 lg:bottom-2 lg:right-3 rounded-full px-3 py-1.5 text-white text-[10px] font-bold">
              FEATURED
            </button>
          </div>
          <div className="flex flex-col justify-between lg:w-full">
            <p className="text-xl font-bold lg:text-xl mb-5">
              GreenTrac 195/55R16 Universal tire
            </p>
            <div className="flex flex-col justify-between lg:gap-4 gap-4 my-4 lg:my-0">
              <div className="flex items-center justify-start gap-20">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={WidthLenIcon} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    195
                  </p>
                </div>
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={HeightIcon} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    55
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-[80px]">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={HeightIcon2} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    116
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
        <div className="p-3 lg:flex flex flex-col gap-4 lg:w-[345px]">
          <div className="relative">
            <Image src={AutoPartsImg} alt="" className="w-full" />
            <button className="bg-[#FF7C7C] hover:bg-[#ff7171] absolute bottom-5 right-5 lg:bottom-2 lg:right-3 rounded-full px-3 py-1.5 text-white text-[10px] font-bold">
              FEATURED
            </button>
          </div>
          <div className="flex flex-col justify-between lg:w-full">
            <p className="text-xl font-bold lg:text-xl mb-5">
              GreenTrac 195/55R16 Universal tire
            </p>
            <div className="flex flex-col justify-between lg:gap-4 gap-4 my-4 lg:my-0">
              <div className="flex items-center justify-start gap-20">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={WidthLenIcon} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    195
                  </p>
                </div>
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={HeightIcon} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    55
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-[80px]">
                <div className="flex items-center gap-2 lg:gap-4">
                  <Image src={HeightIcon2} alt="" className="w-5" />
                  <p className="text-sm text-gray-500 font-bold lg:text-base">
                    116
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

export default AutoPartsCardComp;
