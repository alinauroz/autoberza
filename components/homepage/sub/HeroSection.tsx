import React from 'react';
import Image from 'next/image';
import homePageImg from '@/public/assets/common/homepage/homepage-img.svg';
import DDCard from './DDCard';

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center w-full">
      <Image src={homePageImg} alt="" className="w-full" />
      <div className="absolute">
        <DDCard />
      </div>
    </div>
  );
};

export default HeroSection;
