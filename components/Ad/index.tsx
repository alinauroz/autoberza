import { ssClient } from '@/utils/urqlClient';
import React from 'react';
import { IForm } from '../AdminPanel/Forms';
import separateSectionFields from '@/utils/separateSectionFields';
import Image from 'next/image';
import checkmarkIcon from '../../public/assets/common/check-mark.svg';

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
      {/* <p>
        PRINT DYNAMIC FIELDS BELOW, MAKE A SEPARATE COMPONENT. IM JUST WRITING
        CODE HERE FOR DEMO
      </p> */}
      {Object.keys(sections).map((section) => {
        return (
          <div className="my-4" key={section}>
            <p className="text-lg font-medium text-[#00C489] border-b-2 border-gray-600 w-max">
              {section}
            </p>
            {/* <p className="my-2">
              Section has <b>fields</b> property. For example, to print details
              of this section, do following:
            </p> */}
            {/* <div className="grid grid-cols-4 gap-4"> */}
            <div className="lg:grid lg:grid-cols-4 lg:gap-4">
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
                      className="my-6 md:my-3 flex items-center justify-between border-b-2 text-gray-600 lg:block"
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
