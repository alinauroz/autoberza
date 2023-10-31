'use client';

import React from 'react';
import { gql, useQuery } from 'urql';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import '../../styles/postAd.css';
import Loading from '../Elements/Loading';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import Location from '@/public/assets/common/searchPage/locationIcon.svg';

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
            {ads.map((ad: any) => (
              <div key={ad.id} className="mb-4">
                <div className="bg-white p-4 flex gap-6">
                  <Image
                    src={ad.photos[0]}
                    alt=""
                    width={236}
                    height={130}
                    className="rounded-md lg:w-[400px] h-[120] lg:h-[230px]"
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div>
                      <div className="flex justify-between">
                        <p className="lg:text-lg font-bold text-md ">
                          {ad.title}
                        </p>
                        <div className="flex items-center gap-2 hidden lg:flex">
                          <Image src={Location} alt="" className="w-3" />
                          <p className="text-xs font-semibold text-gray-600 lg:text-base">
                            {ad.city}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Created on:{' '}
                        {moment(new Date(ad.createdOn)).format('DD MMM YYYY')}
                      </p>
                    </div>
                    <div className="text-md font-semibold flex flex-col text-gray-500 gap-2">
                      <p className="text-sm">{ad.category}</p>
                    </div>
                    <div className="mb-1 flex justify-between w-full">
                      <Link href={`/edit-ad?id=${ad.id}`}>
                        <button className="bg-[#00C489] hover:bg-[#02b57f] active:bg-[#009669] lg:px-8 lg:py-2 text-white lg:text-sm lg:font-semibold rounded-full text-xs px-4 py-1">
                          Edit
                        </button>
                      </Link>
                      <button
                        className="bg-red-600 hover:bg-red-700 active:bg-red-800 lg:px-8 lg:py-2 text-white lg:text-sm lg:font-semibold rounded-full text-xs px-4 py-1"
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
