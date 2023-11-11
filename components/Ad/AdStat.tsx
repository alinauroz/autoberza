import React from 'react';

const MinMaxAvgComponent = () => {
  return (
    <div className="my-10 md:mt-10 md:my-0">
      <div className="text-gray-800 flex md:flex-row md:items-center md:gap-16 gap-10 md:text-lg text-base font-semibold w-11/12 mx-auto">
        <div className="flex gap-10 w-full">
          <p>Min:</p>
          <p>5</p>
        </div>
        <div className="flex gap-4 w-full">
          <p>Max:</p>
          <p>15</p>
        </div>
        <div className="flex gap-10 w-full">
          <p>Avg:</p>
          <p>10</p>
        </div>
      </div>
    </div>
  );
};

export default MinMaxAvgComponent;
