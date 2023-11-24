import React from 'react';
import ServiceCardComp from './ServiceCardComp';

const Services = () => {
  return (
    <div>
      <div className="text-center w-2/3 mx-auto lg:pt-16 lg:pb-10 pt-14 pb-6 ">
        <p className="text-2xl lg:text-4xl font-bold">What Our Serve For You</p>
        <p className="text-sm lg:text-lg lg:w-6/12 mx-auto font-semibold mt-2">
          We provide many of the best services for you and you will get the best
          benefits here
        </p>
      </div>
      <ServiceCardComp />
    </div>
  );
};

export default Services;
