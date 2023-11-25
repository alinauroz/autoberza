import Image from 'next/image';
import React from 'react';
import LikeImg from '@/public/assets/common/homepage/like-green-icon.svg';
import CreditCardImg from '@/public/assets/common/homepage/credit-card-green.svg';
import MouseImg from '@/public/assets/common/homepage/mouse-green.svg';

const OurServices = () => {
  return (
    <div className="pb-10 pt-16">
      <div className="text-center w-2/3 mx-auto lg:pb-10 pb-6 ">
        <p className="text-2xl lg:text-4xl font-bold">What Our Serve For You</p>
        <p className="text-sm lg:text-lg lg:w-6/12 mx-auto font-semibold mt-2">
          We provide many of the best services for you and you will get the best
          benefits here
        </p>
      </div>
      <div className="flex flex-col lg:flex-row w-10/12 gap-4 mx-auto">
        <div className="bg-white shadow-xl flex flex-col rounded-xl py-5 px-5 gap-2">
          <Image src={LikeImg} alt="" className="w-8" />
          <h1 className="text-lg font-bold">Top Buy & Sell Car</h1>
          <p className="text-sm lg:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, laudantium? Nostrum, corporis. Quaerat, explicabo
            numquam consequatur, nesciunt expedita dolorem.
          </p>
        </div>
        <div className="bg-white shadow-xl flex flex-col rounded-xl py-5 px-5 gap-2">
          <Image src={CreditCardImg} alt="" className="w-8" />
          <h1 className="text-lg font-bold">Easy Payment</h1>
          <p className="text-sm lg:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, laudantium? Nostrum, corporis. Quaerat, explicabo
            numquam consequatur, nesciunt expedita dolorem.
          </p>
        </div>
        <div className="bg-white shadow-xl flex flex-col rounded-xl py-5 px-5 gap-2">
          <Image src={MouseImg} alt="" className="w-8" />
          <h1 className="text-lg font-bold">Easy To Use</h1>
          <p className="text-sm lg:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, laudantium? Nostrum, corporis. Quaerat, explicabo
            numquam consequatur, nesciunt expedita dolorem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
