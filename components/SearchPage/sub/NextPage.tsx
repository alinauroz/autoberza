import React from 'react';
import NextIcon from '@/public/assets/common/searchPage/nextIcon.svg';
import LastIcon from '@/public/assets/common/searchPage/lastIcon.svg';
import Image from 'next/image';

const NextPage = () => {
  return (
    <div className="bg-white mx-4 my-4 py-6 rounded-md">
      <div className="flex items-center justify-center gap-2 ">
        <div className="font-normal text-[#00C489] cursor-pointer lg:text-lg">
          1
        </div>
        <div className="font-normal cursor-pointer lg:text-lg">2</div>
        <div className="font-normal cursor-pointer lg:text-lg">3</div>
        <div className="font-normal cursor-pointer lg:text-lg">4</div>
        <div className="font-normal cursor-pointer lg:text-lg">5</div>
        <div className="font-normal cursor-pointer lg:text-lg">...</div>
        <div className="flex items-center gap-1 cursor-pointer lg:text-lg">
          <p>Next</p>
          <Image src={NextIcon} alt="" />
        </div>
        <div className="flex items-center gap-1 cursor-pointer lg:text-lg">
          <p>Last</p>
          <Image src={LastIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NextPage;
