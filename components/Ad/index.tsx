import { ssClient } from '@/utils/urqlClient';
import React from 'react';
import { IForm } from '../AdminPanel/Forms';

interface IProps {
  id: string;
}

const GET_AD = `
query Ads($id: String) {
    ads(id: $id) {
      city
      country
      createdOn
      details
      discountedPrice
      id
      isApproved
      location
      photos
      price
      submittedBy
      title
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
  const { data: response } = await ssClient.query(GET_AD, { id });
  const ad = response?.ads?.[0];
  const { data: formResponse } = await ssClient.query(GET_FORMS);
  const form = formResponse?.forms?.find(
    (form: IForm) => form.category === 'Car'
  );
  return {
    data: ad,
    form,
  };
};

async function Ad({ id }: IProps) {
  const { data } = await getServerSideProps(id);

  return <>Data is: {data.title}</>;
}

export default Ad;
