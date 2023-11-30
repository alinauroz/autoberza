'use client';

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
import { FormattedMessage } from 'react-intl';

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
            label="Name"
            name="name"
            placeholder="Enter your full name"
            defaultValue={user?.name}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email id"
            defaultValue={user?.email}
          />
          <Input
            label="Mobile"
            name="phone"
            placeholder="+382 Enter your mobile number"
            defaultValue={user?.phone}
          />
          <Input
            label="Current Password"
            placeholder="Enter current password"
            type="password"
            name="currentPassword"
          />
          <Input
            label="New Password"
            placeholder="Enter new password"
            type="password"
            name="newPassword"
          />
          <Button text="Update Profile" type="submit" loading={fetching} />
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
