'use client';

import React, { useState } from 'react';
import { gql, useMutation, useQuery } from 'urql';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import '../../styles/postAd.css';
import Loading from '../Elements/Loading';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import Location from '@/public/assets/common/searchPage/locationIcon.svg';
import { isLoggedIn } from '@/utils/auth';
import Button from '../Elements/Button';
import AdType from '../PostAd/sub/AdType';
import { FormattedMessage } from 'react-intl';

const GET_MY_ADS = gql`
  query MyAds {
    myAds {
      count
      moreExists
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
        subscriptionPlan
        subscriptionEndDate
      }
    }
  }
`;

export const DELETE_AD = gql`
  mutation DeleteAd($id: String!) {
    deleteAd(id: $id) {
      id
    }
  }
`;

function MyAds() {
  React.useEffect(() => {
    document.title = 'My Ads';
  }, []);
  const [showPromotion, setShowPromotion] = useState(false);
  const [{ fetching, data: response }] = useQuery({ query: GET_MY_ADS });
  const [{ fetching: deleting }, deleteAd] = useMutation(DELETE_AD);
  const ads = response?.myAds?.data || [];

  if (!isLoggedIn()) {
    return (
      <div className="post-ad-page-wrapper">
        <div className="navbar">
          <Header
            style={{
              padding: '20px 35px',
            }}
          />
        </div>
        <div className="min-h-screen flex justify-center items-center flex-col gap-5">
          <span>
            <FormattedMessage
              defaultMessage="To post an ad, you need an account"
              id="myads.account"
            />
          </span>
          <span className="flex gap-4">
            <Link href="/login">
              <Button text="Login" />
            </Link>
            <Link href="/register">
              <Button text="Sign Up" />
            </Link>
          </span>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen">
      <div className="w-screen">
        <Header />
      </div>
      <div className="w-11/12 mx-auto my-12 ">
        <p className="text-2xl font-bold mb-2">
          <FormattedMessage defaultMessage="Your Ads" id="myads.your-ads" />
        </p>
        {fetching ? (
          <div className="h-96 w-full flex justify-center items-center">
            <Loading />
          </div>
        ) : ads.length === 0 ? (
          <div className="h-96 flex justify-center items-center">
            <span className="font-bold text-gray-600">
              <FormattedMessage
                defaultMessage="You have not posted any ad"
                id="myads.not-posted"
              />
            </span>
          </div>
        ) : (
          <div className="w-full  ">
            {ads.map((ad: any) => (
              <div key={ad.id} className="my-4 !rounded-lg shadow">
                <div className="bg-white p-4 lg:flex lg:flex-row flex  flex-col gap-6">
                  <Image
                    src={ad.photos[0]}
                    alt=""
                    width={236}
                    height={130}
                    className="rounded-md w-full lg:w-[400px] h-[120] lg:h-[230px]"
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div>
                      <div className="flex justify-between">
                        <p className="lg:text-lg font-bold text-xl ">
                          {ad.title}
                        </p>
                        <div className=" items-center gap-2 hidden lg:flex">
                          <Image src={Location} alt="" className="w-3" />
                          <p className="text-xs font-semibold text-gray-600 lg:text-base">
                            {ad.city}
                          </p>
                        </div>
                      </div>
                      <p>
                        <span className="text-sm">
                          {ad.subscriptionPlan
                            ? ad.subscriptionPlan +
                              ' | Expires on: ' +
                              moment(new Date(ad.subscriptionEndDate)).format(
                                'DD.MM.YYYY hh:mm a'
                              )
                            : ''}
                        </span>
                      </p>
                      <p className="text-gray-600 text-sm">
                        <FormattedMessage
                          defaultMessage="Created on:"
                          id="myads.created-on"
                        />{' '}
                        {moment(new Date(ad.createdOn)).format('DD MMM YYYY')}
                      </p>
                    </div>
                    <div className="text-md font-semibold flex flex-col text-gray-500 gap-2">
                      <p className="text-md my-6 lg:my-0">{ad.category}</p>
                    </div>
                    <div className="mb-1 flex justify-between w-full lg:mt-0">
                      <span className="flex gap-4">
                        <Link href={`/edit-ad?id=${ad.id}`}>
                          <button className="bg-[#00C489] hover:bg-[#02b57f] active:bg-[#009669] lg:px-8 lg:py-2 text-white lg:text-sm lg:font-semibold rounded-full text-xs px-8 py-2">
                            <FormattedMessage
                              defaultMessage="Edit"
                              id="myads.edit"
                            />
                          </button>
                        </Link>
                        {process.env.NEXT_PUBLIC_ENABLE_PROMOTION == '1' && (
                          <button
                            onClick={() =>
                              setShowPromotion(
                                showPromotion === ad.id ? undefined : ad.id
                              )
                            }
                            className="bg-[#00C489] hover:bg-[#02b57f] active:bg-[#009669] lg:px-8 lg:py-2 text-white lg:text-sm lg:font-semibold rounded-full text-xs px-8 py-2"
                          >
                            <FormattedMessage
                              defaultMessage="Promote"
                              id="myads.promote"
                            />
                          </button>
                        )}
                      </span>
                      <button
                        className="bg-red-600 hover:bg-red-700 active:bg-red-800 lg:px-8 lg:py-2 text-white lg:text-sm lg:font-semibold rounded-full text-xs px-8 py-2"
                        onClick={() => {
                          if (
                            window.confirm(
                              'Are you sure you want to delete this ad'
                            )
                          ) {
                            deleteAd({ id: ad.id });
                          }
                        }}
                      >
                        {deleting ? (
                          '...'
                        ) : (
                          <FormattedMessage
                            defaultMessage="Delete"
                            id="forms.delete"
                          />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                {showPromotion === ad.id && (
                  <div className="p-4">
                    <AdType id={ad.id} />
                  </div>
                )}
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
