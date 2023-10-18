'use client';

import React from 'react';
import Nav from '../Header/Header';
import Header from './sub/Header';
import UploadFile from './sub/UploadFile';
import AdPrice from './sub/AdPrice';
import AdType from './sub/AdType';
import Contact from './sub/Contact';
import Footer from './sub/Footer';
import Dynamic from './sub/Dynamic';

import AdLocation from './sub/AdLocation';
import { gql, useMutation, useQuery } from 'urql';
import { GET_FORMS, IForm } from '../AdminPanel/Forms';
import Loading from '../Elements/Loading';
import { useRouter, useSearchParams } from 'next/navigation';
import fdtojson from '@/utils/fdtojson';
import ChooseCateogry from './sub/ChooseCategory';

const CREATE_AD = gql`
  mutation CreateAd(
    $title: String
    $price: String
    $discountedPrice: String
    $country: String
    $city: String
    $location: String
    $photos: [String]
    $details: JSON
  ) {
    createAd(
      title: $title
      price: $price
      discountedPrice: $discountedPrice
      country: $country
      city: $city
      location: $location
      photos: $photos
      details: $details
    ) {
      city
      id
      country
      details
      discountedPrice
      isApproved
      location
      photos
      price
      submittedBy
      submittedByUser {
        id
        email
        isAdmin
        name
      }
      title
    }
  }
`;

const PostAd = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [{ fetching, data: forms }] = useQuery({ query: GET_FORMS });
  const [{ fetching: creating }, createAd] = useMutation(CREATE_AD);

  const form = forms?.forms?.find(
    (f: IForm) => f.category === searchParams.get('category')
  );

  const categories = forms?.forms?.map((f: IForm) => ({ text: f.category }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    const json = fdtojson(fd);

    createAd({
      detail: json,

      title: json.title,
      price: parseInt(json.price) * 100,
      discountedPrice: parseInt(json.discountedPrice) * 100,
      country: json.country,
      city: json.city,
      location: json.location,
      photos: json.photos.split('|'),
    });
    console.log('JSON', json);
  };

  if (fetching) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (!form) {
    return (
      <div className="post-ad-page-wrapper">
        <div className="navbar">
          <Nav
            style={{
              padding: '20px 35px',
            }}
          />
        </div>
        <ChooseCateogry categories={categories || []} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="post-ad-page-wrapper">
      <div className="navbar">
        <Nav
          style={{
            padding: '20px 35px',
          }}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <Header />
        <UploadFile />
        <Dynamic data={form.fields} />
        <AdLocation />
        <AdPrice />
        <AdType />
        <Contact />
      </form>
      <Footer />
    </div>
  );
};

export default PostAd;
