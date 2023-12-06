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
import { FormattedMessage, useIntl } from 'react-intl';

const REGISTER = gql`
  mutation RegisterUser(
    $name: String!
    $email: String!
    $password: String!
    $phone: String
  ) {
    registerUser(
      name: $name
      email: $email
      password: $password
      phone: $phone
    ) {
      id
      email
      isAdmin
      name
    }
  }
`;

const intl = useIntl();

const SignUp = () => {
  React.useEffect(() => {
    document.title = 'Sign Up';
  }, []);

  const router = useRouter();
  const [{ fetching }, registerUser] = useMutation(REGISTER);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const json = fdtojson(formData);
    registerUser(json).then((data) => {
      if (
        (data.error?.graphQLErrors[0]?.message?.indexOf(
          'Unique constraint failed'
        ) || -1) > -1
      ) {
        toast.error('Email is already registered');
      } else if (data.error?.graphQLErrors[0]) {
        toast.error(data.error.graphQLErrors[0].message);
      } else if (data.error) {
        toast.error('Unknown error');
      } else {
        toast.success('Registration successful');
        router.push('/email-verification?email=' + json.email);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="signup">
        <div className="header">
          <Header />
        </div>
        <div className="signup-content">
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Name',
              id: 'signup.name',
            })}
            placeholder={intl.formatMessage({
              defaultMessage: 'Enter your full name',
              id: 'signup.name',
            })}
            name="name"
          />
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Email',
              id: 'signup.email',
            })}
            placeholder={intl.formatMessage({
              defaultMessage: 'Enter your email id',
              id: 'signup.email',
            })}
            name="email"
            type="email"
          />
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Mobile',
              id: 'signup.mobile',
            })}
            placeholder={intl.formatMessage({
              defaultMessage: '+382 Enter your mobile number',
              id: 'signup.number',
            })}
            name="phone"
          />
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Password',
              id: 'signup.password',
            })}
            placeholder={intl.formatMessage({
              defaultMessage: 'Enter your password',
              id: 'signup.password',
            })}
            type="password"
            name="password"
          />
          <Button
            text={intl.formatMessage({
              defaultMessage: 'Sign Up',
              id: 'signup.signup',
            })}
            type="submit"
            loading={fetching}
          />
          <p className="account-info">
            <FormattedMessage
              defaultMessage="Already have an account?"
              id="signup.login-info1"
            />
            <span className="login-btn">
              <FormattedMessage defaultMessage="Login" id="signup.login-info" />
            </span>
          </p>
        </div>
        <Footer />
      </div>
    </form>
  );
};

export default SignUp;
