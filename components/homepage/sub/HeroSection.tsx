import React from 'react';
import Image from 'next/image';
import homePageImg from '@/public/assets/common/homepage/homepage-img.svg';
import DDCard from './DDCard';
import useMobileDetect from '@/utils/useMobileDetect';

const HeroSection = () => {
  const isMobile = useMobileDetect();

  return (
    <div className="relative flex items-center justify-center w-full">
      <Image
        src={homePageImg}
        alt=""
        className="w-full absolute min-h-full"
        layout="fill"
        objectFit="cover"
        objectPosition="top right"
      />
      <div
        className="bg-white relative my-10"
        style={{
          background: `url(${homePageImg?.src})`,
          backgroundSize: 'cover',
        }}
      >
        <DDCard />
      </div>
    </div>
  );
};

export default HeroSection;
