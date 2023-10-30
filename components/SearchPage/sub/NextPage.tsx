import React, { useState } from 'react';
import NextIcon from '@/public/assets/common/searchPage/nextIcon.svg';
import LastIcon from '@/public/assets/common/searchPage/lastIcon.svg';
import Image from 'next/image';

const NextPage = ({ count, take }: { count: number; take: number }) => {
  const [selected, setSelected] = useState(0);
  const length = Math.ceil(count / take);

  return (
    <div className="bg-white mx-4 my-4 py-6 rounded-md">
      <div className="flex items-center justify-center gap-4 ">
        {new Array(length).fill(0).map((_, index) => {
          return (
            <div
              key={index}
              className={
                'cursor-pointer lg:text-lg font-bold ' +
                (selected === index ? 'text-[#00C489]' : '')
              }
            >
              {index + 1}
            </div>
          );
        })}
        {false && (
          <>
            <div className="flex items-center gap-1 cursor-pointer lg:text-lg">
              <p>Next</p>
              <Image src={NextIcon} alt="" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer lg:text-lg">
              <p>Last</p>
              <Image src={LastIcon} alt="" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NextPage;
