'use client';
import React from 'react';
import '../../styles/signUp.css';
// import InputGroup from "../Elements/InputGroup";
import Button from '../Elements/Button';
import Header from '../Header/Header';
import Input from '../Elements/Input';
import { gql, useMutation } from 'urql';
import fdtojson from '@/utils/fdtojson';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Footer from '../PostAd/sub/Footer';
import '../../styles/postAd.css';
import { useMemo } from 'react';
import { get, set } from '@/utils/storage';
import ErrorComponent from '../Elements/Error';
import { FormattedMessage, useIntl } from 'react-intl';

const UPDATE_USER = gql`
  mutation UpdateUser(
    $name: String
    $email: String
    $currentPassword: String
    $newPassword: String
  ) {
    updateUser(
      name: $name
      email: $email
      currentPassword: $currentPassword
      newPassword: $newPassword
    ) {
      id
      name
      email
      phone
    }
  }
`;

function Profile({}) {
  const [{ fetching, error }, updateUser] = useMutation(UPDATE_USER);
  const user = useMemo(() => {
    return get('user');
  }, []);

  React.useEffect(() => {
    document.title = 'Profile';
  }, []);

  const intl = useIntl();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = fdtojson(new FormData(e.target as HTMLFormElement));
    updateUser(data).then(({ data, error }) => {
      if (error) {
        return;
      }
      toast.success('Profile updated');
      set('user', {
        ...user,
        name: data.updateUser.name,
        email: data.updateUser.email,
        phone: data.updatedUser.phone,
      });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="signup" style={{ height: 'auto' }}>
        <div className="header">
          <Header />
        </div>
        <div className="signup-content">
          <p className="text-2xl font-bold my-6">
            <FormattedMessage defaultMessage="Profile" id="profile.profile" />
          </p>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Name',
              id: 'profile.name',
            })}
            name={intl.formatMessage({
              defaultMessage: 'Name',
              id: 'profile.name',
            })}
            placeholder={intl.formatMessage({
              defaultMessage: 'Enter your full name',
              id: 'profile.name',
            })}
            defaultValue={user?.name}
          />
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Email',
              id: 'profile.email',
            })}
            name={intl.formatMessage({
              defaultMessage: 'email',
              id: 'profile.email',
            })}
            type={intl.formatMessage({
              defaultMessage: 'email',
              id: 'profile.email',
            })}
            placeholder="Enter your email id"
            defaultValue={user?.email}
          />
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Mobile',
              id: 'profile.mobile',
            })}
            name={intl.formatMessage({
              defaultMessage: 'phone',
              id: 'profile.phone',
            })}
            placeholder={intl.formatMessage({
              defaultMessage: '+382 Enter your mobile number',
              id: 'profile.mobile-number',
            })}
            defaultValue={user?.phone}
          />
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Current Password',
              id: 'profile.curr-password',
            })}
            placeholder={intl.formatMessage({
              defaultMessage: 'Enter current password',
              id: 'profile.curr-password',
            })}
            type={intl.formatMessage({
              defaultMessage: 'password',
              id: 'profile.curr-password',
            })}
            name={intl.formatMessage({
              defaultMessage: 'currentPassword',
              id: 'profile.curr-password',
            })}
          />
          <Input
            label={intl.formatMessage({
              defaultMessage: 'New Password',
              id: 'profile.new-password',
            })}
            placeholder={intl.formatMessage({
              defaultMessage: 'Enter new password',
              id: 'profile.new-password',
            })}
            type={intl.formatMessage({
              defaultMessage: 'password',
              id: 'profile.new-password',
            })}
            name={intl.formatMessage({
              defaultMessage: 'newPassword',
              id: 'profile.new-password',
            })}
          />
          <Button
            text={intl.formatMessage({
              defaultMessage: 'Update Profile',
              id: 'profile.label-name',
            })}
            type="submit"
            loading={fetching}
          />
          {(error?.graphQLErrors.length || 0) > 0 && (
            <ErrorComponent
              text={error?.graphQLErrors[0].message as string}
              strong={''}
            />
          )}
        </div>
        <Footer />
      </div>
    </form>
  );
}

export default Profile;
