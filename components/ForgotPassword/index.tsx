'use client';
import React from 'react';
import fdtojson from '@/utils/fdtojson';
import gql from 'graphql-tag';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { useMutation } from 'urql';
import Header from '../Header/Header';
import Input from '../Elements/Input';
import Button from '../Elements/Button';
import '@/styles/verification.css';
import { FormattedMessage } from 'react-intl';

const SEND_VERIFICATION_EMAIL = gql`
  mutation Mutation($email: String!) {
    sendResetPasswordLink(email: $email) {
      message
    }
  }
`;

function ForgotPassword({}) {
  React.useEffect(() => {
    document.title = 'Forgot Password';
  }, []);
  const searchParams = useSearchParams();
  const [{ fetching }, send] = useMutation(SEND_VERIFICATION_EMAIL);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email } = fdtojson(new FormData(e.target as HTMLFormElement));
    send({ email }).then(() => toast.success('Password reset email sent'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-verification">
        <div className="header">
          <Header />
        </div>
        <div className="verification">
          <div className="heading">
            <FormattedMessage
              defaultMessage="Forgot Password"
              id="forgotpassword.password"
            />
          </div>
          <p className="my-2">
            <FormattedMessage
              defaultMessage="Enter your email to receive a reset password link."
              id="forgotpassword.email"
            />
          </p>
          <div>
            <Input
              placeholder="Enter your email"
              name="email"
              type="email"
              defaultValue={searchParams.get('email') as string}
            />
          </div>
          <div className="verification-btn">
            <Button text="Send" type="submit" loading={fetching} />
          </div>
        </div>
      </div>
    </form>
  );
}

export default ForgotPassword;
