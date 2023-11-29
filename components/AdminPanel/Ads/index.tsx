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
  subscriptionEndDate: Date;
  subscriptionPlan: string;
}

const GET_ADS = gql`
  query Query(
    $dateAfter: Int
    $isApproved: Boolean
    $categories: [String]
    $id: String
    $take: Int
    $skip: Int
  ) {
    ads(
      id: $id
      dateAfter: $dateAfter
      isApproved: $isApproved
      categories: $categories
      take: $take
      skip: $skip
    ) {
      count
      data {
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
        subscriptionPlan
        subscriptionEndDate
      }
    }
  }
`;

const GET_FILTERS = gql`
  query Query {
    adFilters {
      filters
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

const PROMOTE_AD = gql`
  mutation AdminPromotion($adId: String!, $noOfDays: Int!) {
    adminPromotion(adId: $adId, noOfDays: $noOfDays) {
      id
    }
  }
`;

const take = 10;

function Ads() {
  const [variables, setVariables] = useState<any>({});

  const [page, setPage] = useState(0);
  const [{ fetching: promoting }, promoteAd] = useMutation(PROMOTE_AD);
  const [{ fetching, data }] = useQuery({
    query: GET_ADS,
    variables: {
      ...variables,
      take,
      skip: page * take,
    },
  });
  const [{ fetching: approving }, approve] = useMutation(APPROVE);
  const [{ fetching: fetchingFilters, data: filterResponse }] = useQuery({
    query: GET_FILTERS,
  });

  const categoryOptions =
    filterResponse?.adFilters?.filters?.find(
      (f: any) => f.name === 'categories'
    )?.options || [];

  return (
    <Layout heading="Ads">
      <div className="my-4 flex">
        <div>
          <p className="font-bold">Is Approved</p>
          <select
            className="p-2"
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
        <div style={{ marginLeft: 20 }}>
          <p className="font-bold">Start From</p>
          <input
            type="date"
            className="p-2"
            onChange={(e) => {
              const dateAfter = parseInt(
                new Date(e.target.value).getTime() / 1000 + ''
              );
              setVariables({ ...variables, dateAfter });
            }}
          />
        </div>
        <div className="ml-12">
          <p>Category</p>
          <select
            className="p-2"
            onChange={(e) => {
              if (e.target.value) {
                setVariables({ ...variables, categories: [e.target.value] });
              } else if ('categories' in variables) {
                delete variables.categories;
              }
            }}
          >
            <option>All</option>
            {categoryOptions.map((category: string) => {
              return <option key={category}>{category}</option>;
            })}
          </select>
        </div>
        <div className="ml-12">
          <p>Id</p>
          <input
            type="text"
            onChange={(e) =>
              e.target.value
                ? setVariables({ ...variables, id: e.target.value })
                : setVariables({ ...variables, id: undefined })
            }
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
          {data?.ads?.data?.map((ad: IAd) => {
            return (
              <Tr key={ad.id}>
                <Td>{ad.title}</Td>
                <Td>{ad.isApproved ? 'Approved' : 'Not Approved'}</Td>
                <Td>
                  <span className="text-sm">
                    {ad.subscriptionPlan
                      ? ad.subscriptionPlan +
                        ' | ' +
                        moment(new Date(ad.subscriptionEndDate)).format(
                          'DD.MM.YYYY hh:mm a'
                        )
                      : ''}
                  </span>
                </Td>
                <Td>{moment(new Date(ad.createdOn)).format('DD.MMM.YYYY')}</Td>
                <Td>
                  <button
                    className="bg-blue-600 p-1 px-2 text-white border-0 font-medium rounded-md"
                    onClick={() => {
                      const noOfDays = Number(window.prompt() || '');
                      if (isNaN(noOfDays)) {
                        return alert('Error: Enter a number');
                      }
                      promoteAd({ adId: ad.id, noOfDays: noOfDays });
                    }}
                  >
                    Promote
                  </button>
                  <button className="bg-blue-600 p-1 ml-2 px-2 text-white border-0 font-medium rounded-md">
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
      <div className="flex gap-2 justify-center items-center my-4">
        {new Array(Math.ceil((data?.ads?.count || 0) / 10))
          .fill(0)
          .map((_, i) => {
            return (
              <span
                key={i}
                onClick={() => setPage(i)}
                className={
                  'p-2 cursor-pointer rounded bg-gray-200 ' +
                  (page === i ? 'bg-gray-900 text-white font-bold' : '')
                }
              >
                {i + 1}
              </span>
            );
          })}
      </div>
    </Layout>
  );
}

export default Ads;
