import Image from 'next/image';
import React from 'react';
import dropRightIcon from '@/public/assets/common/homepage/dropright-green-icon.svg';

const HeroDetails = () => {
  const [isActive, setIsActive] = React.useState(true);

  const handleActiveTabs = (isActiveOpt: boolean) => {
    isActive ? setIsActive(isActiveOpt) : setIsActive(true);
  };
  return (
    <div className="hidden lg:flex flex-col gap-10 text-white mt-24 justify-between">
      <div>
        <div className="mb-10">
          <p className="text-2xl font-semibold border-b-4 border-teal-500 w-max">
            Launched
          </p>
          <p className="text-xl font-bold pt-2">Get Design & Feature Upgrade</p>
        </div>
        <div className="">
          <p className="text-5xl font-extrabold">New Ford</p>
          <div className="flex items-center gap-5 pt-4 cursor-pointer">
            <p className="text-3xl font-bold">Eplore more</p>
            <Image src={dropRightIcon} alt="" />
          </div>
        </div>
      </div>
      {/* <div
        onClick={() => handleActiveTabs(!isActive)}
        className={`flex items-end text-2xl text-white gap-8 xl:gap-12 mb-10 w-max `}
      >
        {isActive ? (
          <div
            className={`flex flex-col gap-1 cursor-pointer border-b-[6px] ${
              !isActive
                ? 'border-teal-500 font-bold'
                : 'border-gray-500 font-semibold'
            }`}
          >
            <p>2023 Ford</p>
            <p>Launched</p>
          </div>
        ) : (
          <div
            className={`flex flex-col gap-1 cursor-pointer border-b-[6px] ${
              isActive
                ? 'border-teal-500 font-bold'
                : 'border-gray-500 font-semibold'
            }`}
          >
            <p>Ford</p>
            <p>Launched</p>
          </div>

        ) : (

        <div
          className={`flex flex-col gap-1 cursor-pointer border-b-[6px] ${
            isActive
              ? 'border-teal-500 font-bold'
              : 'border-gray-500 font-semibold'
          }`}
        >
          <p>Renew</p>
          <p>Insurance</p>
        </div>
        ): (
        <div
          className={`flex flex-col gap-1 cursor-pointer border-b-[6px] ${
            isActive
              ? 'border-teal-500 font-bold'
              : 'border-gray-500 font-semibold'
          }`}
        >
          <p>Personal loan</p>
        </div>
        ): }
      </div> */}
      <div className="flex items-end  gap-16 mb-10 ">
        <div className="flex flex-col gap-0.5 cursor-pointer text-white text-2xl font-bold w-max border-b-4 border-teal-500 ">
          <p>2023 Ford</p>
          <p>Launched</p>
        </div>
        <div className="flex flex-col gap-0.5 cursor-pointer text-white text-2xl font-semibold border-b-4 border-gray-500 w-max">
          <p>Ford</p>
          <p>Launched</p>
        </div>
        <div className="flex flex-col gap-0.5 cursor-pointer text-white text-2xl font-semibold border-b-4 border-gray-500 w-max">
          <p>Renew</p>
          <p>Insurance</p>
        </div>
        <div className="flex flex-col  gap-0.5 cursor-pointer text-white text-2xl font-semibold border-b-4 border-gray-500 w-max">
          <p>Personal loan</p>
        </div>
      </div>
    </div>
  );
};

export default HeroDetails;
