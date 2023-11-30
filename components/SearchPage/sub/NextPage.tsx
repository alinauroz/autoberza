import React, { useState } from 'react';
import NextIcon from '@/public/assets/common/searchPage/nextIcon.svg';
import LastIcon from '@/public/assets/common/searchPage/lastIcon.svg';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';

const NextPage = ({
  count,
  take,
  selected,
  setSelected,
}: {
  count: number;
  take: number;
  selected: number;
  setSelected: (x: number) => void;
}) => {
  const length = Math.ceil(count / take);

  return (
    <div className="bg-white mx-4 my-4 py-6 rounded-md">
      <div className="flex items-center justify-center gap-4 ">
        {new Array(length).fill(0).map((_, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setSelected(index);
              }}
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
              <p>
                <FormattedMessage defaultMessage="Next" id="nextpage.next" />
              </p>
              <Image src={NextIcon} alt="" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer lg:text-lg">
              <p>
                <FormattedMessage defaultMessage="Last" id="nextpage.last" />
              </p>
              <Image src={LastIcon} alt="" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NextPage;
