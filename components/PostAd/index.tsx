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
import ChooseCategory from './sub/ChooseCategory';
import { toast } from 'react-hot-toast';
import { isLoggedIn } from '@/utils/auth';
import Link from 'next/link';
import Button from '../Elements/Button';
import { FormattedMessage } from 'react-intl';

const CREATE_AD = gql`
  mutation CreateAd(
    $title: String
    $price: Int
    $discountedPrice: Int
    $country: String
    $city: String
    $location: String
    $photos: [String]
    $details: JSON
    $category: String
    $description: String
    $manufacturer: String
    $model: String
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
      description: $description
      category: $category

      manufacturer: $manufacturer
      model: $model
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

const UPDATE_AD = gql`
  mutation UpdateAd(
    $id: String!
    $title: String
    $price: Int
    $discountedPrice: Int
    $country: String
    $city: String
    $location: String
    $photos: [String]
    $details: JSON
    $description: String
    $manufacturer: String
    $model: String
  ) {
    updateAd(
      id: $id
      title: $title
      price: $price
      discountedPrice: $discountedPrice
      country: $country
      city: $city
      location: $location
      photos: $photos
      details: $details
      description: $description
      manufacturer: $manufacturer
      model: $model
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

const PostAd = ({ prefill }: { prefill?: any }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const loggedIn = isLoggedIn();

  const [{ fetching, data: forms }] = useQuery({ query: GET_FORMS });
  const [{ fetching: creating }, createAd] = useMutation(CREATE_AD);
  const [{ fetching: updating }, updateAd] = useMutation(UPDATE_AD);

  const form = forms?.forms?.find(
    (f: IForm) =>
      f.category === searchParams.get('category') ||
      f.category === prefill?.category
  );

  React.useEffect(() => {
    document.title = 'Add an Ad';
  }, []);

  const categories = forms?.forms?.map((f: IForm) => ({ text: f.category }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    const json = fdtojson(fd);
    for (let x in json) {
      if (json[x] === 'on') {
        json[x] = true;
      }
    }
    if (!json.country) {
      toast.error('Country is required');
      return;
    }

    if (json.discountedPrice && json.discountedPrice > json.price) {
      return toast.error('Discounted price should be less than price');
    }

    console.log('CheckIt', {
      manufacturer: json.manufacturer || json.manufactures,
      model: json.model,
    });

    if (prefill) {
      updateAd({
        id: prefill.id,
        details: json,
        title: json.title,
        manufacturer: json.manufacturer || json.manufactures,
        model: json.model,
        price: parseInt(json.price),
        discountedPrice: parseInt(json.discountedPrice),
        country: json.country,
        city: json.city,
        location: json.location,
        photos: json.photos.split('|'),
        description: json.description,
      }).then(({ data, error }) => {
        if (error?.graphQLErrors[0].message) {
          toast.error(error?.graphQLErrors[0].message);
        } else {
          toast.success('Ad updated');
          router.push(`/ad/${data.updateAd.id}`);
        }
      });
    } else {
      createAd({
        details: json,

        title: json.title,
        price: parseInt(json.price),

        manufacturer: json.manufacturer || json.manufactures,
        model: json.model,

        discountedPrice: parseInt(json.discountedPrice),
        country: json.country,
        city: json.city,
        location: json.location,
        photos: json.photos.split('|'),
        description: json.description,
        category: searchParams.get('category'),
      }).then(({ data, error }) => {
        if (error?.graphQLErrors[0].message) {
          toast.error(error?.graphQLErrors[0].message);
        } else {
          toast.success('Ad posted');
          router.push(`/ad/${data.createAd.id}`);
        }
      });
    }
  };

  if (!loggedIn) {
    return (
      <div className="post-ad-page-wrapper">
        <div className="navbar">
          <Nav
            style={{
              padding: '20px 35px',
            }}
          />
        </div>
        <div className="min-h-screen flex justify-center items-center flex-col gap-5">
          <span>
            <FormattedMessage
              defaultMessage="To post an ad, you need an account"
              id="postad.post-ad"
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
        <ChooseCategory categories={categories || []} />
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
        <UploadFile prefill={prefill} />
        <Dynamic data={form.fields} prefill={prefill} />
        <AdLocation prefill={prefill} />
        <AdPrice prefill={prefill} />
        <Contact creating={creating || updating} />
      </form>
      <Footer />
    </div>
  );
};

export default PostAd;
