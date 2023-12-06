'use client';

import React from 'react';
import '../../styles/verification.css';
import Input from '../Elements/Input';
import Header from '../Header/Header';
import Button from '../Elements/Button';
import { gql, useMutation } from 'urql';
import { useRouter, useSearchParams } from 'next/navigation';
import fdtojson from '@/utils/fdtojson';
import { toast } from 'react-hot-toast';
import { get, set } from '@/utils/storage';
import { FormattedMessage, useIntl } from 'react-intl';

const PHONE_OTP_LOGIN = gql`
  mutation Mutation($otp: String, $phoneNo: String) {
    phoneOtpLogin(otp: $otp, phoneNo: $phoneNo) {
      error
      token
      user {
        email
        name
        id
        phone
        isAdmin
        phone
      }
    }
  }
`;

const Index = () => {
  const intl = useIntl();
  React.useEffect(() => {
    document.title = 'Otp Verification';
  }, []);
  const [{ fetching }, login] = useMutation(PHONE_OTP_LOGIN);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { phoneNo, otp } = fdtojson(
      new FormData(e.target as HTMLFormElement)
    );
    login({ phoneNo, otp }).then(({ data, error }) => {
      if (error) {
        toast.error(error.graphQLErrors[0].message);
      } else if (data.error) {
        toast.error(data.error);
      } else {
        set('user', data.phoneOtpLogin.user);
        router.push('/post-ad');
      }
    });
  };

  return (
    <div className="container-verification">
      <div className="header">
        <Header />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="verification">
          <div className="heading">
            <FormattedMessage
              defaultMessage="Otp Verification!"
              id="index.otp-verification"
            />
          </div>
          <p className="mb-2">
            <FormattedMessage
              defaultMessage="An OTP has been sent to your phone. Enter that OTP here to login"
              id="index.otp"
            />
          </p>
          <div>
            <input
              type="hidden"
              value={searchParams.get('phoneNo') || ''}
              name="phoneNo"
            />
            <Input
              placeholder={intl.formatMessage({
                defaultMessage: 'Enter your OTP code',
                id: 'index.otp-code',
              })}
              type="number"
              name="otp"
            />
          </div>
          <div className="verification-btn">
            <Button
              text={intl.formatMessage({
                defaultMessage: 'Submit',
                id: 'index.submit',
              })}
              loading={fetching}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Index;
