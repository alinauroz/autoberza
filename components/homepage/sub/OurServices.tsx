import Image from 'next/image';
import React from 'react';
import LikeImg from '@/public/assets/common/homepage/like-green-icon.svg';
import CreditCardImg from '@/public/assets/common/homepage/credit-card-green.svg';
import MouseImg from '@/public/assets/common/homepage/mouse-green.svg';
import { FormattedMessage } from 'react-intl';

const OurServices = () => {
  return (
    <div className="pb-10 pt-16">
      <div className="text-center w-2/3 mx-auto lg:pb-10 pb-6 ">
        <p className="text-2xl lg:text-4xl font-bold">
          <FormattedMessage
            defaultMessage="What Our Serve For You"
            id="ourservices.services-heading1"
          />
        </p>
        <p className="text-sm lg:text-lg lg:w-6/12 mx-auto font-semibold mt-2">
          <FormattedMessage
            defaultMessage="We provide many of the best services for you and you will get the best
          benefits here"
            id="ourservices.services-subheading"
          />
        </p>
      </div>
      <div className="flex flex-col lg:flex-row w-10/12 gap-4 mx-auto">
        <div className="bg-white shadow-xl flex flex-col rounded-xl py-5 px-5 gap-2">
          <Image src={LikeImg} alt="" className="w-8" />
          <h1 className="text-lg font-bold">
            <FormattedMessage
              defaultMessage="Top Buy & Sell Car"
              id="ourservices.buy-sell"
            />
          </h1>
          <p className="text-sm lg:text-base text-gray-600">
            <FormattedMessage
              defaultMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, laudantium? Nostrum, corporis. Quaerat, explicabo
            numquam consequatur, nesciunt expedita dolorem."
              id="ourservices.description"
            />
          </p>
        </div>
        <div className="bg-white shadow-xl flex flex-col rounded-xl py-5 px-5 gap-2">
          <Image src={CreditCardImg} alt="" className="w-8" />
          <h1 className="text-lg font-bold">
            <FormattedMessage
              defaultMessage="Easy Payment"
              id="ourservices.services2"
            />
          </h1>
          <p className="text-sm lg:text-base text-gray-600">
            <FormattedMessage
              defaultMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, laudantium? Nostrum, corporis. Quaerat, explicabo
            numquam consequatur, nesciunt expedita dolorem."
              id="ourservices.description"
            />
          </p>
        </div>
        <div className="bg-white shadow-xl flex flex-col rounded-xl py-5 px-5 gap-2">
          <Image src={MouseImg} alt="" className="w-8" />
          <h1 className="text-lg font-bold">
            <FormattedMessage
              defaultMessage="Easy To Use"
              id="ourservices.services3"
            />
          </h1>
          <p className="text-sm lg:text-base text-gray-600">
            <FormattedMessage
              defaultMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, laudantium? Nostrum, corporis. Quaerat, explicabo
            numquam consequatur, nesciunt expedita dolorem."
              id="ourservices.description"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
