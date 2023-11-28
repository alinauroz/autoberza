import React from 'react';
import Image from 'next/image';
import homePageImg from '@/public/assets/common/homepage/homepage-img.svg';
import DDCard from './DDCard';
import HeroDetails from './HeroDetails';

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center">
      <Image src={homePageImg} alt="" className="w-full" />
      <div className="absolute">
        {/* <div className="absolute lg:top-10 lg:left-10 top-[4%] left-[25%]"> */}
        <div className="flex gap-10">
          <DDCard />
          <HeroDetails />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
