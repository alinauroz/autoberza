'use client';

import Image from 'next/image';
import React from 'react';
import '@/styles/PostAd.css';
import Location from '@/public/assets/common/homepage/locationIcon-gray.svg';
import GasPump from '@/public/assets/common/homepage/gasPumpIcon.svg';
import Calendar from '@/public/assets/common/homepage/calendarIcon.svg';
import SpeedMeter from '@/public/assets/common/homepage/speedMeterIcon.svg';
import Button from '@/components/Elements/Button';
import useMobileDetect from '@/utils/useMobileDetect';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';

import carImg1 from '@/public/assets/common/homepage/homepage-car-img1.svg';
import carImg2 from '@/public/assets/common/homepage/homepage-car-img2.svg';
import carImg3 from '@/public/assets/common/homepage/homepage-car-img3.svg';
import carImg4 from '@/public/assets/common/homepage/homepage-car-img4.svg';
import OurServices from './OurServices';

const tempData = [
  {
    img: carImg1,
    name: 'Volkswagen - Golf 5 - 2.0 TDI',
    usage: '280,000 km',
    year: '2006',
    fuel: 'Diesel',
    location: 'Podgorica',
    added: '10 min ago',
  },
  {
    img: carImg2,
    name: 'Volkswagen - Golf GTI',
    usage: '107,000 km',
    year: '2003',
    fuel: 'Diesel',
    location: 'France',
    added: '30 min ago',
  },
  {
    img: carImg3,
    name: 'Honda Civic 1.8',
    usage: '174,000 km',
    year: '2020',
    fuel: 'Petrol',
    location: 'Pakistan',
    added: '35 min ago',
  },
  {
    img: carImg4,
    name: 'Volkswagen - Golf 5 - 2.0 TDI',
    usage: '280,000 km',
    year: '2006',
    fuel: 'Diesel',
    location: 'Podgorica',
    added: '10 min ago',
  },
  {
    img: carImg1,
    name: 'Volkswagen - Golf 5 - 2.0 TDI',
    usage: '280,000 km',
    year: '2006',
    fuel: 'Diesel',
    location: 'Podgorica',
    added: '10 min ago',
  },
  {
    img: carImg2,
    name: 'Volkswagen - Golf GTI',
    usage: '107,000 km',
    year: '2003',
    fuel: 'Diesel',
    location: 'France',
    added: '30 min ago',
  },
  {
    img: carImg3,
    name: 'Honda Civic 1.8',
    usage: '174,000 km',
    year: '2020',
    fuel: 'Petrol',
    location: 'Pakistan',
    added: '35 min ago',
  },
  {
    img: carImg4,
    name: 'Volkswagen - Golf 5 - 2.0 TDI',
    usage: '280,000 km',
    year: '2006',
    fuel: 'Diesel',
    location: 'Podgorica',
    added: '10 min ago',
  },
  {
    img: carImg1,
    name: 'Volkswagen - Golf 5 - 2.0 TDI',
    usage: '280,000 km',
    year: '2006',
    fuel: 'Diesel',
    location: 'Podgorica',
    added: '10 min ago',
  },
  {
    img: carImg2,
    name: 'Volkswagen - Golf GTI',
    usage: '107,000 km',
    year: '2003',
    fuel: 'Diesel',
    location: 'France',
    added: '30 min ago',
  },
  {
    img: carImg3,
    name: 'Honda Civic 1.8',
    usage: '174,000 km',
    year: '2020',
    fuel: 'Petrol',
    location: 'Pakistan',
    added: '35 min ago',
  },
  {
    img: carImg4,
    name: 'Volkswagen - Golf 5 - 2.0 TDI',
    usage: '280,000 km',
    year: '2006',
    fuel: 'Diesel',
    location: 'Podgorica',
    added: '10 min ago',
  },
];

interface Props {
  sectionTitle?: string;
  cardType?: 'CAR' | 'TRANSPORT' | 'BIKE';
  vehicles?: number[];
}

const carDetailsResponse = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const HomePage = ({ sectionTitle, cardType, vehicles }: Props) => {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(4);
  const isMobile = useMobileDetect();

  React.useEffect(() => {
    setPageSize(isMobile ? 1 : 4);
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
    return getNewUpperIndex() < carDetailsResponse.length;
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
      <Header />
      <div className="flex items-center justify-between w-11/12 mx-auto py-3">
        <p className="text-2xl font-bold">Featured Car</p>
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
      <div className="flex justify-between w-11/12 mx-auto">
        {carDetailsResponse
          .slice(...getNewIndices())
          .map((cardDets, cardInd) => {
            return (
              <div
                key={cardInd}
                className="bg-white lg:w-max w-full mx-1 rounded-2xl shadow-lg"
              >
                <div className="p-3 lg:flex flex flex-col gap-4 ">
                  <div className="relative">
                    <Image src={carImg1} alt="" className="w-full" />
                    <button className="bg-[#FF7C7C] hover:bg-[#ff7171] absolute bottom-5 right-5 lg:bottom-2 lg:right-3 rounded-full px-3 py-1.5 text-white text-[10px] font-bold">
                      FEATURED <span className="text-lg">{cardDets}</span>
                    </button>
                  </div>
                  <div className="flex flex-col justify-between lg:w-full pl-2">
                    <p className="text-xl font-bold lg:text-xl lg:mb-5">
                      Volkswagen - Golf 5 - 2.0 TDI
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-6 pb-4">
                      <div className="flex items-center gap-2">
                        <Image src={SpeedMeter} alt="" className="w-5" />
                        <p className="text-sm text-gray-500 font-bold lg:text-sm">
                          280,000 km
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image src={Calendar} alt="" className="w-5" />
                        <p className="text-sm text-gray-500 font-bold lg:text-sm">
                          2006
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
      <OurServices />
      <Footer />
    </>
  );
};

export default HomePage;
