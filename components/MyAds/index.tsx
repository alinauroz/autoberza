'use client';

import React from 'react';
import { gql, useQuery } from 'urql';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import '../../styles/postAd.css';
import Loading from '../Elements/Loading';
import moment from 'moment';
import Link from 'next/link';

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
      <div className="w-11/12 mx-auto my-12">
        <p className="text-2xl">Your Ads</p>
        {fetching ? (
          <div className="h-96 w-full flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <div className="w-full">
            {ads.map((ad: any) => (
              <div key={ad.id}>
                <p>{ad.title}</p>
                <p>
                  Created on:{' '}
                  {moment(new Date(ad.createdOn)).format('DD MMM YYYY')}
                </p>
                <div>
                  <Link href={`/edit-ad?id=${ad.id}`}>
                    <button>Edit</button>
                  </Link>
                  <button
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
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default MyAds;
