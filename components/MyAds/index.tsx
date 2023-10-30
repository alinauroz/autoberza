'use client';

import React from 'react';
import { gql, useQuery } from 'urql';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import '../../styles/postAd.css';
import Loading from '../Elements/Loading';
import moment from 'moment';
import Link from 'next/link';
import MyAdCard from './sub/MyAdCard';
import Image from 'next/image';
import ToyotaCar from '@/public/assets/common/searchPage/Toyota-Corolla-Altis-Interior-92972_yzntls.webp';
import Location from '@/public/assets/common/searchPage/locationIcon.svg';
import GasPump from '@/public/assets/common/searchPage/gasPumpIcon.svg';
import Calendar from '@/public/assets/common/searchPage/calendarIcon.svg';
import SpeedMeter from '@/public/assets/common/searchPage/speedMeterIcon.svg';
import ArrowIcon from '@/public/assets/common/searchPage/ArrowIcon.svg';
import Button from '@/components/Elements/Button';

const GET_MY_ADS = gql`
  query MyAds {
    myAds {
      count
      data {
        category
        city
        country
        createdOn
        description
        details
        discountedPrice
        id
        isApproved
        location
        photos
        price
        submittedBy
        title
      }
    }
  }
`;

function MyAds() {
  const [{ fetching, data: response }] = useQuery({ query: GET_MY_ADS });
  const ads = response?.myAds?.data || [];
  return (
    <div className="h-screen w-screen">
      <div className="w-screen">
        <Header />
      </div>
      <div className="w-11/12 mx-auto my-12 ">
        <p className="text-2xl font-bold">Your Ads</p>
        {fetching ? (
          <div className="h-96 w-full flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <div className="w-full  ">
            {/* <MyAdCard /> */}
            {ads.map((ad: any) => (
              <div key={ad.id} className="mb-4">
                <div className="bg-white p-4 flex gap-6">
                  {/* {ad.photos[0]} */}
                  <Image
                    src={ToyotaCar}
                    alt=""
                    className="lg:w-[500px] rounded-md w-[220px] 
                    "
                  />
                  {/* <Image
                    src={ad.photos[0]}
                    alt=""
                    width={}
                    height={}
                    className=""
                  /> */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-lg font-bold">{ad.title}</p>
                      <p className=" text-gray-600">
                        Created on:{' '}
                        {moment(new Date(ad.createdOn)).format('DD MMM YYYY')}
                      </p>
                    </div>
                    <div className="text-md font-semibold flex flex-col text-gray-500 gap-2">
                      <p className="">{ad.city}</p>
                      <p className="">{ad.country}</p>
                      <p className="">{ad.location}</p>
                    </div>
                    <div className="mb-1 ">
                      <Link href={`/edit-ad?id=${ad.id}`}>
                        <button className="bg-[#00C489] hover:bg-[#02b57f] active:bg-[#009669] px-8 py-2 mr-16 text-white text-sm font-semibold rounded-md">
                          Edit
                        </button>
                      </Link>
                      <button
                        className="bg-[#00C489] hover:bg-[#02b57f] active:bg-[#009669] px-8 py-2 mr-16 text-white text-sm font-semibold rounded-md"
                        onClick={() => {
                          if (
                            window.confirm(
                              'Are you sure you want to delete this ad'
                            )
                          ) {
                            window.alert('Delete it');
                          }
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default MyAds;
