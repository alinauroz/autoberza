import useMobileDetect from '@/utils/useMobileDetect';
import React from 'react';
import Button from '../Elements/Button';
import Image from 'next/image';
import Location from '@/public/assets/common/homepage/locationIcon-gray.svg';
import GasPump from '@/public/assets/common/homepage/gasPumpIcon.svg';
import Calendar from '@/public/assets/common/homepage/calendarIcon.svg';
import SpeedMeter from '@/public/assets/common/homepage/speedMeterIcon.svg';
import moment from 'moment';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Cookies from 'js-cookie';

if (Cookies.get('locale') === 'mr') {
  require('moment/locale/me');
}

function Promoted({ category, ads }: { category: string; ads: any[] }) {
  const [lowerIndex, setLowerIndex] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(4);
  const isMobile = useMobileDetect();

  const isForwardPossible = () => {
    return lowerIndex + 1 <= ads.length - pageSize;
  };

  const isBackwardPossible = () => {
    return lowerIndex - 1 >= 0;
  };

  React.useEffect(() => {
    setPageSize(isMobile ? ads.length : 4);
    setLowerIndex(0);
  }, [isMobile]);

  return (
    <>
      <div className="flex items-center justify-between w-11/12 mx-auto py-4">
        <p className="text-2xl font-bold">{category}</p>
        <div
          className="md:flex items-center gap-2 hidden"
          style={{
            minHeight: '60px',
          }}
        >
          <button
            className="text-5xl flex items-center"
            onClick={() => {
              if (isBackwardPossible()) {
                setLowerIndex(lowerIndex - 1);
              }
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
              if (isForwardPossible()) {
                setLowerIndex(lowerIndex + 1);
              }
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
      <div className="flex flex-row flex-nowrap md:w-11/12 md:mx-auto md:grid md:grid-cols-4 md:overflow-hidden overflow-auto">
        {ads
          .slice(lowerIndex, lowerIndex + pageSize)
          .map((cardDets, cardInd) => {
            return (
              <Link href={`/ad/${cardDets?.id}`} key={cardInd}>
                <div
                  key={cardInd}
                  className="bg-white ml-3 rounded-lg shadow-lg w-[75vw] md:w-auto"
                >
                  <div className="p-3 w-full">
                    {
                      <div className="relative">
                        <div className="md:h-48 md:w-full max-w-[230px] md:max-w-full m-auto overflow-hidden">
                          <Slide
                            autoplay={false}
                            arrows={false}
                            canSwipe={true}
                          >
                            {cardDets?.photos?.map((photo: string) => (
                              <div className="h-min md:h-48 w-full" key={photo}>
                                <img
                                  className="object-cover object-center bg-contain bg-center bg-no-repeat w-full h-36 md:h-48"
                                  src={photo}
                                  alt="Your Image"
                                ></img>
                              </div>
                            ))}
                          </Slide>
                        </div>
                        {cardDets?.isPromoted && (
                          <button className="bg-[#FF7C7C] hover:bg-[#ff7171] absolute bottom-3 right-3 lg:bottom-2 lg:right-2 rounded-full px-3 py-1.5 text-white text-[10px] font-bold">
                            <FormattedMessage
                              defaultMessage="FEATURED"
                              id="promoted.featured"
                            />
                          </button>
                        )}
                      </div>
                    }
                    <div className="flex flex-col justify-between lg:w-full pl-2">
                      <p className="text-base font-bold lg:text-lg lg:mb-2 mt-4">
                        {cardDets.title}
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-6 pb-4">
                        {'mileage' in (cardDets.details || {}) && (
                          <div className="flex items-center gap-2">
                            <Image src={SpeedMeter} alt="" className="w-5" />
                            <p className="text-sm text-gray-500 font-bold lg:text-sm">
                              {Number(
                                cardDets?.details?.mileage
                              )?.toLocaleString()}{' '}
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
                        {'fuel' in (cardDets.details || {}) && (
                          <div className="flex items-center gap-2">
                            <Image src={GasPump} alt="" className="w-5" />
                            <p className="text-sm text-gray-500 font-bold lg:text-sm">
                              {cardDets?.details?.fuel}
                            </p>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Image src={Location} alt="" className="w-5" />
                          <p className="text-sm text-gray-500 font-bold lg:text-sm">
                            {cardDets?.details?.city}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between ">
                        <p className="text-sm text-gray-500 font-bold lg:text-base">
                          {moment(new Date(cardDets?.createdOn || 0))
                            .lang('ur')
                            .fromNow()}
                        </p>
                        <div className="flex md:flex md:flex-row items-center flex-col md:gap-2">
                          <Button
                            text={cardDets?.price?.toLocaleString() + ' €'}
                            style={{
                              backgroundColor: 'Transparent',
                              color: '#00C489',
                              fontSize: '18px',
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
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default Promoted;
