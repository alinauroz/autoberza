import Image from 'next/image';
import React from 'react';
import ArrowLeft from '@/public/assets/common/homepage/Arrow-left.svg';
import ArrowRight from '@/public/assets/common/homepage/Arrow-right-long-green.svg';

const Heading = ({ text, textGreen }: { text: string; textGreen?: string }) => {
  return (
    <div className="flex items-center justify-between px-5 md:px-16 pt-10">
      <p className="text-2xl font-bold flex gap-2">
        {text}
        <p className="text-[#00C489]">{`${
          textGreen ? '-' + ' ' + textGreen : ''
        }`}</p>
      </p>
      <div className="flex items-center gap-3 ">
        <Image src={ArrowLeft} alt="" className="w-8 lg:w-10 cursor-pointer" />
        <Image
          src={ArrowRight}
          alt=""
          className="w-14 lg:w-20 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Heading;
