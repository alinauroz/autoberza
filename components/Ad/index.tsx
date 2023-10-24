import { ssClient } from '@/utils/urqlClient';
import React from 'react';
import { IForm } from '../AdminPanel/Forms';
import separateSectionFields from '@/utils/separateSectionFields';

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
  const { data, form } = await getServerSideProps(id);

  const sections = separateSectionFields(form?.fields);
  return (
    <div className="p-8">
      <p>
        PRINT DYNAMIC FIELDS BELOW, MAKE A SEPARATE COMPONENT. IM JUST WRITING
        CODE HERE FOR DEMO
      </p>
      {Object.keys(sections).map((section) => {
        return (
          <div className="my-4" key={section}>
            <p className="text-2xl font-medium">{section}</p>
            <p className="my-2">
              Section has <b>fields</b> property. For example, to print details
              of this section, do following:
            </p>
            <div className="grid grid-cols-4 gap-4">
              {sections[section].map(
                (field: { label: string; name: string }) => {
                  return (
                    <span className="my-2" key={field.name}>
                      <p className="font-bold">{field.label}</p>
                      {data.details[field.name]}
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
