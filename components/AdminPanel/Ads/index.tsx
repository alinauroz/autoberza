import React, { useState } from 'react';
import { gql, useMutation, useQuery } from 'urql';
import Layout from '../Layout';
import Table, { Td, Th, Tr } from '@/components/Elements/Table';
import Loading from '@/components/Elements/Loading';
import moment from 'moment';

export interface IAd {
  id: string;
  title: string;
  isApproved: boolean;
  createdOn: string;
}

const GET_ADS = gql`
  query Query($dateAfter: Int, $isApproved: Boolean) {
    ads(dateAfter: $dateAfter, isApproved: $isApproved) {
      city
      country
      details
      discountedPrice
      id
      isApproved
      location
      photos
      price
      submittedBy
      submittedByUser {
        country
        email
        name
        phone
      }
      title
      createdOn
    }
  }
`;

const APPROVE = gql`
  mutation Mutation($updateAdId: String!, $isApproved: Boolean) {
    updateAd(id: $updateAdId, isApproved: $isApproved) {
      id
      isApproved
    }
  }
`;

function Ads() {
  const [variables, setVariables] = useState<any>({});

  const [{ fetching, data }] = useQuery({ query: GET_ADS, variables });
  const [{ fetching: approving }, approve] = useMutation(APPROVE);

  return (
    <Layout heading="Ads">
      <div className="my-4 flex">
        <div>
          <p className="font-bold">Is Approved</p>
          <select
            onChange={(e) => {
              if (e.target.value === 'all') {
                delete variables.isApproved;
                setVariables({ ...variables });
              } else if (e.target.value === 'true') {
                setVariables({ ...variables, isApproved: true });
              } else {
                setVariables({ ...variables, isApproved: false });
              }
            }}
          >
            <option value="all">All</option>
            <option value="true">Approved</option>
            <option value="false">Not Approved</option>
          </select>
        </div>
        <div>
          <p>Start From</p>
          <input
            type="date"
            onChange={(e) => {
              const dateAfter = parseInt(
                new Date(e.target.value).getTime() / 1000 + ''
              );
              setVariables({ ...variables, dateAfter });
            }}
          />
        </div>
      </div>
      {fetching ? (
        <div className="flex justify-center items-center min-h-screen">
          <Loading />
        </div>
      ) : (
        <Table>
          <Tr>
            <Th>Title</Th>
            <Th>Is Approved</Th>
            <Th>Subscription</Th>
            <Th>Created On</Th>
            <th></th>
          </Tr>
          {data?.ads?.map((ad: IAd) => {
            return (
              <Tr key={ad.id}>
                <Td>{ad.title}</Td>
                <Td>{ad.isApproved ? 'Approved' : 'Not Approved'}</Td>
                <Td>{null}</Td>
                <Td>{moment(new Date(ad.createdOn)).format('DD.MMM.YYYY')}</Td>
                <Td>
                  <button className="bg-blue-600 p-1 px-2 text-white border-0 font-medium rounded-md">
                    <a href={`/ad?id=${ad.id}`} target="_blank">
                      View
                    </a>
                  </button>
                  <button
                    className="ml-2 bg-blue-600 p-1 px-2 text-white border-0 font-medium rounded-md"
                    onClick={() => {
                      approve({
                        updateAdId: ad.id,
                        isApproved: !ad.isApproved,
                      });
                    }}
                  >
                    {approving
                      ? '...'
                      : ad.isApproved
                      ? 'Un Approve'
                      : 'Approve'}
                  </button>
                </Td>
              </Tr>
            );
          })}
        </Table>
      )}
    </Layout>
  );
}

export default Ads;
