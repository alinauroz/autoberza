import React from 'react';
import NextIcon from '@/public/assets/common/searchPage/nextIcon.svg';
import LastIcon from '@/public/assets/common/searchPage/lastIcon.svg';
import Image from 'next/image';

const NextPage = () => {
  return (
    <div className="bg-white mx-4 my-4 py-6 rounded-md">
      <div className="flex items-center justify-center gap-2 ">
        <div className="font-normal text-[#00C489] cursor-pointer">1</div>
        <div className="font-normal cursor-pointer">2</div>
        <div className="font-normal cursor-pointer">3</div>
        <div className="font-normal cursor-pointer">4</div>
        <div className="font-normal cursor-pointer">5</div>
        <div className="font-normal cursor-pointer">...</div>
        <div className="flex items-center gap-1 cursor-pointer">
          <p>Next</p>
          <Image src={NextIcon} alt="" />
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <p>Last</p>
          <Image src={LastIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NextPage;
