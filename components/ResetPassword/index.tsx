'use client';

import fdtojson from '@/utils/fdtojson';
import gql from 'graphql-tag';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { useMutation } from 'urql';
import Input from '../Elements/Input';
import Button from '../Elements/Button';
import Header from '../Header/Header';
import Footer from '../PostAd/sub/Footer';
import '@/styles/verification.css';
import { toast } from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';

const RESET_PASSWORD = gql`
  mutation ResetPassword($password: String!, $token: String!) {
    resetPassword(password: $password, token: $token) {
      status
      message
    }
  }
`;

function ResetPassword({}) {
  const [{ fetching }, resetPassword] = useMutation(RESET_PASSWORD);
  const searchParams = useSearchParams();
  const router = useRouter();

  React.useEffect(() => {
    document.title = 'Reset Password';
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { password, confirmPassword } = fdtojson(
        new FormData(e.target as HTMLFormElement)
      );
      if (password === confirmPassword) {
        resetPassword({
          token: searchParams.get('token'),
          password,
        }).then((d) => {
          if (d.error) {
            return toast.error(d.error.graphQLErrors[0].message);
          }
          toast.success('Password updated');
          router.push('/login');
        });
      } else {
        toast.error('Password does not match');
      }
    } catch (err) {
    } finally {
      ('');
    }
  };

  return (
    <div className="container-verification">
      <div className="header">
        <Header />
      </div>
      <div>
        <form onSubmit={handleSubmit} className="verification">
          <div>
            <div className="heading">
              <FormattedMessage
                defaultMessage="Update Password"
                id="resetpassword.update"
              />
            </div>
            <p className="my-2">
              <FormattedMessage
                defaultMessage="To update your password, enter your new password and confirm
              password."
                id="resetpassword.new-password"
              />
            </p>
          </div>
          <div>
            <Input placeholder="New Password" name="password" type="password" />
            <div className="my-2" />
            <Input
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
            />
          </div>
          <div className="verification-btn">
            <Button text="Update" type="submit" loading={fetching} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
