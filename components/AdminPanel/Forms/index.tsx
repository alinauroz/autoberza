'use client';

import React, { useMemo, useState } from 'react';
import Layout from '../Layout';
import { gql, useMutation, useQuery } from 'urql';
import Loading from '@/components/Elements/Loading';
import Table, { Td, Th, Tr } from '@/components/Elements/Table';
import ModalComponent from '@/components/Elements/Modal';
import moment from 'moment';
import AddEditForm from './AddEditForm';

export interface IForm {
  id: string;
  category: string;
  fields: unknown[];
  createdOn: string;
}

export const GET_FORMS = gql`
  query Forms {
    forms {
      id
      category
      fields
      createdOn
    }
  }
`;

const UPDATE_ADMIN_STATUS = gql`
  mutation Mutation($userId: String!, $status: Boolean) {
    updateAdminStatus(userId: $userId, status: $status) {
      chatId
      id
      isStaff
      isAdmin
    }
  }
`;

const UPDATE_STAFF_STATUS = gql`
  mutation Mutation($userId: String!, $status: Boolean) {
    updateStaffStatus(userId: $userId, status: $status) {
      chatId
      id
      isStaff
      isAdmin
    }
  }
`;

const DELETE_FORM = gql`
  mutation DeleteFieldForm($id: String!) {
    deleteFieldForm(id: $id) {
      id
    }
  }
`;

function Forms() {
  const [{ fetching, data }] = useQuery({ query: GET_FORMS });
  const [{ fetching: deleting }, deleteForm] = useMutation(DELETE_FORM);
  const [{ fetching: updatingAdminStatus }, updateAdminStatus] =
    useMutation(UPDATE_ADMIN_STATUS);
  const [{ fetching: updatingStaffStatus }, updateStaffStatus] =
    useMutation(UPDATE_STAFF_STATUS);

  const [showAdd, setShowAdd] = useState(false);
  const [formDetailsId, setFormDetailsId] = useState('');
  const [editPrefill, setEditPrefill] = useState<IForm>();

  const userDetails = useMemo(() => {
    return data?.forms?.find((u: IForm) => u.id === formDetailsId);
  }, [formDetailsId, data]);

  return (
    <>
      <Layout heading="Forms">
        <span className="float-right my-2 mb-4">
          <button
            className="ml-2 bg-blue-600 p-1 px-2 text-white border-0 font-medium rounded-md"
            onClick={() => setShowAdd(true)}
          >
            + Add Form
          </button>
        </span>
        {fetching ? (
          <div className="flex justify-center items-center min-h-screen">
            <Loading />
          </div>
        ) : (
          <div>
            <Table className="!text-sm">
              <Tr>
                <Th>Category</Th>
                <Th>Fields</Th>
                <Th>Created On</Th>
                <Th>{null}</Th>
              </Tr>
              {data?.forms?.map((form: IForm) => {
                return (
                  <Tr key={form.id}>
                    <Td>{form.category}</Td>
                    <Td>{form.fields.length}</Td>
                    <Td>
                      {moment(new Date(form.createdOn)).format('DD.MMM.YYYY')}
                    </Td>
                    <Td>
                      <button
                        className="bg-blue-600 p-1 px-2 text-white border-0 font-medium rounded-md"
                        onClick={() => setFormDetailsId(form?.id || '')}
                      >
                        View
                      </button>
                      <button
                        className="ml-2 bg-blue-600 p-1 px-2 text-white border-0 font-medium rounded-md"
                        onClick={() => {
                          setShowAdd(true);
                          setEditPrefill(form);
                        }}
                      >
                        Update
                      </button>
                      <button
                        className="ml-2 bg-red-600 p-1 px-2 text-white border-0 font-medium rounded-md"
                        onClick={() => {
                          if (
                            confirm(
                              'Are you sure you want to delete this form?'
                            )
                          )
                            deleteForm({ id: form.id });
                        }}
                      >
                        Delete
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
        header={<p className="font-medium text-blue-600">Form Details</p>}
        onClose={() => setFormDetailsId('')}
      >
        <div
          style={{ width: 500, maxHeight: '75vh', overflow: 'auto' }}
          className="bg-white shadow-sm rounded-lg mt-2 p-2"
        ></div>
      </ModalComponent>
      <ModalComponent
        isOpen={showAdd}
        title={'Add Form'}
        header={
          <p className="font-medium text-blue-600 text-2xl font-medium my-2">
            Add Form
          </p>
        }
        onClose={() => setShowAdd(false)}
      >
        <div
          style={{ width: 500, maxHeight: '75vh', overflow: 'auto' }}
          className="bg-white shadow-sm rounded-lg mt-4 p-2"
        >
          <AddEditForm onDone={() => setShowAdd(false)} prefill={editPrefill} />
        </div>
      </ModalComponent>
    </>
  );
}

export default Forms;
