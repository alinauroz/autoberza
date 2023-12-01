'use client';
import React from 'react';
import { SUCCESS } from '@/constants';
import gql from 'graphql-tag';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useMutation } from 'urql';

const VERIFY_EMAIL = gql`
  mutation VerifyEmail($token: String!) {
    verifyEmail(token: $token) {
      status
      message
    }
  }
`;

function Verification({}) {
  React.useEffect(() => {
    document.title = 'Verification';
  }, []);

  const [{ fetching, data }, verifyEmail] = useMutation(VERIFY_EMAIL);
  const searchParams = useSearchParams();
  const router = useRouter();

  //todo: double verification
  const token = searchParams.get('token');
  useEffect(() => {
    if (token) {
      verifyEmail({ token }).then(({ error }) => {
        router.push('/login');
      });
    }
  }, [token]);

  if (fetching) return 'Verifying...';

  if (data?.verifyEmail?.satus === SUCCESS) {
    return 'Verified';
  }

  //todo: show error if verifcation fails
  return null;
}

export default Verification;
