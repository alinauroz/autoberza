import React from 'react';

const MinMaxAvgComponent = ({ stats }: { stats: any }) => {
  return (
    <div className="my-10 md:mt-10 md:my-0">
      <div className="text-gray-800 flex md:flex-row md:items-center md:gap-16 gap-10 md:text-lg text-base font-semibold w-11/12 mx-auto">
        <p className="font-bold">Stats</p>
        <div className="flex gap-2 w-full">
          <p>Min:</p>
          <p>{stats.min} €</p>
        </div>
        <div className="flex gap-2 w-full">
          <p>Max:</p>
          <p>{stats.max} €</p>
        </div>
        <div className="flex gap-2 w-full">
          <p>Avg:</p>
          <p>{stats.avg} €</p>
        </div>
      </div>
    </div>
  );
};

export default MinMaxAvgComponent;
