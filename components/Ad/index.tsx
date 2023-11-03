import { ssClient } from '@/utils/urqlClient';
import React from 'react';
import { IForm } from '../AdminPanel/Forms';
import separateSectionFields from '@/utils/separateSectionFields';
import Image from 'next/image';
import checkmarkIcon from '../../public/assets/common/check-mark.svg';
import LocationIcon from '../../public/assets/common/searchPage/locationIcon.svg';
import Images from './Images';

interface IProps {
  id: string;
}

export const GET_AD = `
query Ads($id: String) {
  ads(id: $id) {
    data {
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
    category
    submittedByUser {
      address
      country
      email
      id
      isAdmin
      isEmailVerified
      name
      phone
      state
    }
  }
  }
}`;

export const GET_FORMS = `
  query Forms {
    forms {
      id
      category
      fields
      createdOn
    }
  }
`;

const getServerSideProps = async (id: string) => {
  let form: any;
  let ad: any;
  try {
    const { data: response, error } = await ssClient.query(GET_AD, { id });
    ad = response?.ads?.data[0];
    //const { data: formResponse } = await ssClient.query(GET_FORMS);
    //form = formResponse?.forms?.find(
    //  (form: IForm) => form.category === ad.category
    //);
    return {
      data: ad || {},
      form: form || {},
    };
  } catch (err) {
    console.log('ERROR', err);
    console.log('FORM', form);
    console.log('Ad', ad);
    return {
      data: {},
      form: {},
    };
  }
};

async function Ad({ id }: IProps) {
  const { data, form } = await getServerSideProps(id);
  // return null;

  const sections = separateSectionFields(form?.fields);
  return (
    <div className="lg:p-8 px-4 md:w-11/12 mx-auto">
      <div className="hidden lg:block font-bold text-xl text-gray-800 mb-8 pl-[84px] ">
        {data.title}
      </div>
      <div className="md:grid md:grid-cols-6 md:gap-4">
        <div className="lg:col-span-4">
          <Images photos={data.photos || []} />
        </div>
        <div className="md:col-span-2 lg:bg-white lg:px-4 lg:py-2 lg:shadow lg:shadow-gray-400 mb-6 /4">
          <div className="flex flex-col lg:mb-10 lg:mt-4 mb-4">
            <div className="font-bold text-xl text-gray-800 lg:hidden flex justify-between mb-6">
              {data.title}
              <div className="flex items-center gap-2 mr-2">
                <Image
                  src={LocationIcon}
                  alt=""
                  className="w-[15px] mb-[1px]"
                />
                <span className="text-lg text-gray-500">{data.city}</span>
              </div>
            </div>
            <div className="flex lg:justify-between lg:items-center gap-2 lg:border-b-2 lg:border-gray-300 mb-4">
              <p className="text-md font-semibold text-gray-600 mb-2 lg:block hidden">
                Price:
              </p>

              {data.discountedPrice ? (
                <div>
                  <div className="text-md font-bold text-gray-500 line-through">
                    {data.price}€
                  </div>
                  <div className="text-md font-bold ">
                    {data.discountedPrice / 100}€
                  </div>
                </div>
              ) : (
                <div className="text-md font-bold">{data.price}</div>
              )}
            </div>
            <div className="lg:flex flex lg:justify-between justify-between gap-6 border-b-2 border-gray-300 hidden">
              <p className="text-md font-semibold text-gray-600 mb-2 ">City:</p>
              <span className="text-md font-bold">{data.city}</span>
            </div>
          </div>
          <p className="text-lg lg:mb-4 mb-4 font-medium text-[#00C489] border-b-2 border-gray-600 w-max">
            Seller
          </p>
          <p className="font-bold text-xl text-gray-800">
            {data?.submittedByUser?.name}
          </p>
          <p>{data?.submittedByUser?.email}</p>
          <div className="mt-4">
            <a href={`tel:${data?.submittedByUser?.phone}`}>
              <button className="btn !w-full flex justify-center items-center">
                <span className="flex gap-4 text-slate-700">
                  <span className="mt-0.5">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_284_16958)">
                        <path
                          d="M13 1.00007C13 0.734855 13.1053 0.480501 13.2929 0.292964C13.4804 0.105428 13.7348 7.1089e-05 14 7.1089e-05C16.6512 0.00298269 19.1931 1.05749 21.0678 2.93222C22.9425 4.80695 23.997 7.3488 24 10.0001C24 10.2653 23.8946 10.5196 23.7071 10.7072C23.5195 10.8947 23.2652 11.0001 23 11.0001C22.7347 11.0001 22.4804 10.8947 22.2929 10.7072C22.1053 10.5196 22 10.2653 22 10.0001C21.9976 7.87907 21.154 5.84562 19.6542 4.34585C18.1544 2.84607 16.121 2.00245 14 2.00007C13.7348 2.00007 13.4804 1.89471 13.2929 1.70718C13.1053 1.51964 13 1.26529 13 1.00007ZM14 6.00007C15.0608 6.00007 16.0782 6.4215 16.8284 7.17164C17.5785 7.92179 18 8.93921 18 10.0001C18 10.2653 18.1053 10.5196 18.2929 10.7072C18.4804 10.8947 18.7347 11.0001 19 11.0001C19.2652 11.0001 19.5195 10.8947 19.7071 10.7072C19.8946 10.5196 20 10.2653 20 10.0001C19.9984 8.40926 19.3657 6.88406 18.2409 5.75919C17.116 4.63431 15.5908 4.00166 14 4.00007C13.7348 4.00007 13.4804 4.10543 13.2929 4.29296C13.1053 4.4805 13 4.73486 13 5.00007C13 5.26529 13.1053 5.51964 13.2929 5.70718C13.4804 5.89471 13.7348 6.00007 14 6.00007ZM23.093 16.7391C23.6725 17.3202 23.9979 18.1074 23.9979 18.9281C23.9979 19.7488 23.6725 20.536 23.093 21.1171L22.183 22.1661C13.993 30.0071 -5.93701 10.0821 1.78298 1.86607L2.93298 0.866071C3.51475 0.302748 4.29491 -0.00887983 5.10468 -0.00139407C5.91445 0.00609169 6.68872 0.33209 7.25998 0.906071C7.29098 0.937071 9.14398 3.34407 9.14398 3.34407C9.6938 3.9217 9.99988 4.689 9.99858 5.48647C9.99727 6.28395 9.68869 7.05024 9.13698 7.62607L7.97898 9.08207C8.61982 10.6392 9.56204 12.0543 10.7515 13.2462C11.9409 14.438 13.3542 15.3831 14.91 16.0271L16.375 14.8621C16.9509 14.3108 17.717 14.0026 18.5143 14.0015C19.3115 14.0003 20.0785 14.3064 20.656 14.8561C20.656 14.8561 23.062 16.7081 23.093 16.7391ZM21.717 18.1931C21.717 18.1931 19.324 16.3521 19.293 16.3211C19.0869 16.1168 18.8086 16.0022 18.5185 16.0022C18.2283 16.0022 17.95 16.1168 17.744 16.3211C17.717 16.3491 15.7 17.9561 15.7 17.9561C15.564 18.0643 15.4023 18.1352 15.2306 18.1618C15.0589 18.1885 14.8833 18.17 14.721 18.1081C12.7054 17.3576 10.8747 16.1828 9.35281 14.6632C7.83091 13.1435 6.65338 11.3145 5.89998 9.30007C5.83318 9.13553 5.8114 8.95616 5.83688 8.78041C5.86237 8.60466 5.93419 8.43887 6.04498 8.30007C6.04498 8.30007 7.65198 6.28207 7.67898 6.25607C7.88324 6.05006 7.99786 5.77169 7.99786 5.48157C7.99786 5.19146 7.88324 4.91309 7.67898 4.70707C7.64798 4.67707 5.80698 2.28207 5.80698 2.28207C5.59788 2.09458 5.32498 1.99417 5.04423 2.00142C4.76347 2.00867 4.49612 2.12303 4.29698 2.32107L3.14698 3.32107C-2.49501 10.1051 14.776 26.4181 20.721 20.8001L21.632 19.7501C21.8454 19.5523 21.9737 19.2793 21.9895 18.9888C22.0054 18.6982 21.9076 18.4129 21.717 18.1931Z"
                          fill="#374957"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_284_16958">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Call Seller
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
      {Object.keys(sections).map((section) => {
        return (
          <div className="my-4 " key={section}>
            <p className="text-lg font-medium text-[#00C489] border-b-2 border-gray-600 w-max">
              {section}
            </p>
            {/* <div className="grid grid-cols-4 gap-4"> */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-10 lg:w-[60%]">
              {sections[section].map(
                (field: { label: string; name: string; type: string }) => {
                  if (!data?.details[field.name]) {
                    return null;
                  }
                  if (field.type === 'checkbox') {
                    return (
                      <span
                        className="my-6 md:my-3 text-gray-600 flex gap-2"
                        key={field.name}
                      >
                        <span
                          className="flex justify-center items-center"
                          style={{
                            background: 'rgb(88, 193, 141)',
                            padding: 3,
                            height: 20,
                            width: 20,
                          }}
                        >
                          <Image
                            src={checkmarkIcon}
                            width={14}
                            height={14}
                            alt=""
                          />
                        </span>
                        <p className="font-bold">{field.label}</p>
                      </span>
                    );
                  }
                  return (
                    <span
                      className="my-6 md:my-3 lg:flex flex items-center justify-between border-b-2 text-gray-600 lg:block"
                      key={field.name}
                    >
                      <p className="font-bold">{field.label}</p>
                      {data?.details[field.name]}
                    </span>
                  );
                }
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Ad;
