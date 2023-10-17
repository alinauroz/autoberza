'use client';

import React, { useMemo, useState } from 'react';
import Layout from '../Layout';
import { gql, useMutation, useQuery } from 'urql';
import Loading from '@/components/Elements/Loading';
import Table, { Td, Th, Tr } from '@/components/Elements/Table';
import ModalComponent from '@/components/Elements/Modal';

export interface IUser {
  chatId?: number;
  cover?: string;
  citizenship?: string;
  dob?: string;
  experience?: number;
  gender?: string;
  group?: string;
  hp?: string;
  id?: string;
  isAdmin?: boolean;
  isStaff?: boolean;
  locationPreference?: string;
  name?: string;
  phone?: string;
  qualification?: string;
  race?: string;
  typePreference?: string[];
  categoryPreference?: string[];
  username?: string;
  email?: string;
}

const GET_USERS = gql`
  query Users {
    users {
      id
      isAdmin
      name
      phone
      email
      isEmailVerified
    }
  }
`;

const UPDATE_ADMIN_STATUS = gql`
  mutation Mutation($userId: String!, $status: Boolean) {
    updateAdminStatus(userId: $userId, status: $status) {
      id
      isAdmin
    }
  }
`;

const UPDATE_STAFF_STATUS = gql`
  mutation Mutation($userId: String!, $status: Boolean) {
    updateStaffStatus(userId: $userId, status: $status) {
      id
      isAdmin
    }
  }
`;

function TuitorBadge() {
  return (
    <span className="mx-0.5 bg-gray-600 text-white p-1 px-2 text-xs font-medium rounded-lg cursor-default">
      T
    </span>
  );
}

function AdminBadge() {
  return (
    <span className="mx-0.5 bg-zinc-600 text-white p-1 px-2 text-xs font-medium rounded-lg cursor-default">
      A
    </span>
  );
}

function StaffBadge() {
  return (
    <span className="mx-0.5 bg-blue-600 text-white p-1 px-2 text-xs font-medium rounded-lg cursor-default">
      S
    </span>
  );
}

function Users() {
  const [{ fetching, data }] = useQuery({ query: GET_USERS });
  const [{ fetching: updatingAdminStatus }, updateAdminStatus] =
    useMutation(UPDATE_ADMIN_STATUS);
  const [{ fetching: updatingStaffStatus }, updateStaffStatus] =
    useMutation(UPDATE_STAFF_STATUS);

  const [userDetailsId, setUserDetailsId] = useState('');

  const userDetails = useMemo(() => {
    return data?.users?.find((u: IUser) => u.id === userDetailsId);
  }, [userDetailsId, data]);

  return (
    <>
      <Layout heading="Users">
        {fetching ? (
          <div className="flex justify-center items-center min-h-screen">
            <Loading />
          </div>
        ) : (
          <div>
            <Table className="!text-sm">
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>{null}</Th>
              </Tr>
              {data?.users?.map((user: IUser) => {
                return (
                  <Tr key={user.id}>
                    <Td>
                      {user.isAdmin && <AdminBadge />}
                      {user.name}
                    </Td>
                    <Td>{user.email}</Td>
                    <Td>{user.phone}</Td>
                    <Td>
                      <button
                        className="bg-blue-600 p-1 px-2 text-white border-0 font-medium rounded-md"
                        onClick={() => setUserDetailsId(user?.id || '')}
                      >
                        View
                      </button>
                    </Td>
                  </Tr>
                );
              })}
            </Table>
          </div>
        )}
      </Layout>
      <ModalComponent
        isOpen={userDetails}
        title={'User Details'}
        header={<p className="font-medium text-blue-600">User Details</p>}
        onClose={() => setUserDetailsId('')}
      >
        <div
          style={{ width: 500, maxHeight: '75vh', overflow: 'auto' }}
          className="bg-white shadow-sm rounded-lg mt-2 p-2"
        >
          <div className="mt-2 border-b pb-2">
            <p className="text-sm font-medium text-gray-600">Name</p>
            <p className="">{userDetails?.name}</p>
          </div>
          <div className="mt-2 pb-2 border-b">
            <p className="text-sm font-medium text-gray-600">Phone</p>
            <p className="">{userDetails?.phone}</p>
          </div>
          <div className="mt-2 border-b pb-2">
            <p className="text-sm font-medium text-gray-600">Email</p>
            <p className="">{userDetails?.email}</p>
          </div>
          <div className="grid grid-cols-2">
            <div className="mt-2 pb-2 border-b">
              <p className="text-sm font-medium text-gray-600">Admin</p>
              <div className="mt-2">
                {userDetails?.isAdmin ? (
                  <button
                    onClick={() =>
                      updateAdminStatus({
                        status: false,
                        userId: userDetails?.id,
                      })
                    }
                    className="border bg-white border-1 px-2 py-1 font-medium"
                  >
                    Remove Admin
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      updateAdminStatus({
                        status: true,
                        userId: userDetails?.id,
                      })
                    }
                    className="border bg-white border-1 px-2 py-1 font-medium"
                  >
                    Make Admin
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </ModalComponent>
    </>
  );
}

export default Users;
