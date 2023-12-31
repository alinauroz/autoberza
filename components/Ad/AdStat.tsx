import React from 'react';
import { FormattedMessage } from 'react-intl';

const MinMaxAvgComponent = ({ stats }: { stats: any }) => {
  return (
    <div className="my-5 md:mt-10 md:my-0">
      <div className="text-gray-800 flex md:flex-row md:items-center md:gap-16 gap-2 md:text-lg text-sm font-semibold md:w-full w-full mx-auto">
        <p className="font-bold text-sm md:text-base">
          <FormattedMessage
            defaultMessage="Stats:"
            id="minmaxavgcomponent.stats"
          />
        </p>
        <div className="flex gap-1 w-full">
          <p>
            <FormattedMessage
              defaultMessage="Min:"
              id="minmaxavgcomponent.min"
            />
          </p>
          <div className="flex items-center bg-gray-200 px-2 rounded font-bold">
            {stats?.min}
            <p>€</p>
          </div>
        </div>
        <div className="flex gap-1 w-full">
          <p>
            <FormattedMessage
              defaultMessage="Max:"
              id="minmaxavgcomponent.max"
            />
          </p>
          <div className="flex items-center bg-gray-200 px-2 rounded font-bold">
            {stats?.max}
            <p>€</p>
          </div>
        </div>
        <div className="flex gap-1 w-full">
          <p>
            <FormattedMessage
              defaultMessage="Avg:"
              id="minmaxavgcomponent.avg"
            />
          </p>
          <div className="flex items-center bg-gray-200 px-2 rounded font-bold">
            {stats?.avg}
            <p>€</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinMaxAvgComponent;
