import useMobileDetect from '@/utils/useMobileDetect';
import React from 'react';
import Button from '../Elements/Button';
import Image from 'next/image';
import homePageImg from '@/public/assets/common/homepage/homepage-img.svg';
import Location from '@/public/assets/common/homepage/locationIcon-gray.svg';
import GasPump from '@/public/assets/common/homepage/gasPumpIcon.svg';
import Calendar from '@/public/assets/common/homepage/calendarIcon.svg';
import SpeedMeter from '@/public/assets/common/homepage/speedMeterIcon.svg';

function Promoted({ category, ads }: { category: string; ads: any[] }) {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(4);
  const isMobile = useMobileDetect();

  React.useEffect(() => {
    setPageSize(isMobile ? 1 : 4);
    setPage(1);
  }, [isMobile]);

  const getNewUpperIndex = () => {
    return page * pageSize;
  };

  const getNewLowerIndex = () => {
    return (page - 1) * pageSize;
  };

  const getNewIndices = () => {
    return [getNewLowerIndex(), getNewUpperIndex()];
  };

  const isForwardPossible = () => {
    return getNewUpperIndex() < ads.length;
  };

  const isBackwardPossible = () => {
    return getNewLowerIndex() > 0;
  };

  const handlePageChange = (isForward: boolean) => {
    if (isForward && isForwardPossible()) {
      setPage((p) => p + 1);
    } else if (!isForward && isBackwardPossible()) {
      setPage((p) => p - 1);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between w-11/12 mx-auto py-3">
        <p className="text-2xl font-bold">{category}</p>
        <div className="flex items-center gap-2">
          <button
            className="text-5xl flex items-center"
            onClick={() => {
              handlePageChange(false);
            }}
          >
            <span
              className={`transition-all ${
                isBackwardPossible()
                  ? 'text-green-600 text-6xl'
                  : 'text-gray-500'
              }`}
            >
              &#11104;
            </span>
          </button>
          <button
            className="text-6xl flex items-center "
            onClick={() => {
              handlePageChange(true);
            }}
          >
            <span
              className={`transition-all ${
                isForwardPossible()
                  ? 'text-green-600'
                  : 'text-gray-500 text-5xl'
              }`}
            >
              &#10141;
            </span>
          </button>
        </div>
      </div>
      <div className="flex justify-between w-11/12 mx-auto md:grid grid-cols-4 gap-4">
        {ads.slice(...getNewIndices()).map((cardDets, cardInd) => {
          return (
            <div
              key={cardInd}
              className="bg-white w-full mx-1 rounded-2xl shadow-lg"
            >
              <div className="p-3">
                {
                  <div className="relative">
                    <div className="h-48 flex justify-center items-center min-w-full overflow-hidden">
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          background: `url(${cardDets.photos[0]})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                    </div>
                    {cardDets?.isPromoted && (
                      <button className="bg-[#FF7C7C] hover:bg-[#ff7171] absolute bottom-3 right-3 lg:bottom-2 lg:right-2 rounded-full px-3 py-1.5 text-white text-[10px] font-bold">
                        FEATURED
                      </button>
                    )}
                  </div>
                }
                <div className="flex flex-col justify-between lg:w-full pl-2">
                  <p className="text-xl font-bold lg:text-xl lg:mb-2 mt-4">
                    {cardDets.title}
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-6 pb-4">
                    {'mileage' in (cardDets.details || {}) && (
                      <div className="flex items-center gap-2">
                        <Image src={SpeedMeter} alt="" className="w-5" />
                        <p className="text-sm text-gray-500 font-bold lg:text-sm">
                          {Number(cardDets?.details?.mileage)?.toLocaleString()}{' '}
                          km
                        </p>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Image src={Calendar} alt="" className="w-5" />
                      <p className="text-sm text-gray-500 font-bold lg:text-sm">
                        {cardDets?.details?.year}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image src={GasPump} alt="" className="w-5" />
                      <p className="text-sm text-gray-500 font-bold lg:text-sm">
                        Diesel
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image src={Location} alt="" className="w-5" />
                      <p className="text-sm text-gray-500 font-bold lg:text-sm">
                        Podgorica
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between ">
                    <p className="text-sm text-gray-500 font-bold lg:text-base">
                      10 min ago
                    </p>
                    <div className="flex md:flex md:flex-row items-center flex-col md:gap-2">
                      <Button
                        text={3350 + ' €'}
                        style={{
                          backgroundColor: 'Transparent',
                          color: '#00C489',
                          fontSize: '20px',
                          fontWeight: '700',

                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Promoted;
