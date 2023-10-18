'use client';

import React, { useState } from 'react';
import '../../styles/login.css';
import Button from '../Elements/Button';
import Header from '../Header/Header';
import Input from '../Elements/Input';
import Menu from '../Elements/Menu';
import fdtojson from '@/utils/fdtojson';
import { gql, useMutation } from 'urql';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { set } from '@/utils/storage';
import Footer from '../PostAd/sub/Footer';
import '../../styles/postAd.css';

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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

const PHONE_LOGIN = gql`
  mutation Mutation($phoneNo: String) {
    sendPhoneOtp(phoneNo: $phoneNo) {
      message
      status
    }
  }
`;

const Login = () => {
  const [{ fetching: emailFetching, error, data }, login] = useMutation(LOGIN);
  const [{ fetching: phoneFetching }, sendOtp] = useMutation(PHONE_LOGIN);

  const fetching = emailFetching || phoneFetching;

  const [loginMenuIndex, setLoginMenuIndex] = useState(0);
  const router = useRouter();

  const isEmail = React.useMemo(() => {
    return loginMenuIndex == 0;
  }, [loginMenuIndex]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (loginMenuIndex === 0) {
        const { email, password } = fdtojson(
          new FormData(e.target as HTMLFormElement)
        );
        login({ email, password }).then(({ data }) => {
          if (data.login.error) {
            toast.error(data.login.error);
          } else {
            Cookies.set('token', data.login.token);
            set('user', data.login.user);
            router.push('/post-ad');
          }
        });
      } else if (loginMenuIndex === 1) {
        const { phoneNo } = fdtojson(new FormData(e.target as HTMLFormElement));
        sendOtp({ phoneNo }).then(({ data, error }) => {
          if (error) {
            toast.error(error.graphQLErrors[0].message || 'Unknown error');
          } else {
            toast.success('Otp sent');
            router.push('/otp-verification?phoneNo=' + phoneNo);
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="login">
        <div className="header">
          <Header />
        </div>
        <div className="login-content">
          <div className="hello">
            <Menu
              menuItems={['Email', 'Phone']}
              selected={loginMenuIndex}
              setSelected={setLoginMenuIndex}
            />
          </div>
          <Input
            placeholder={`Enter your ${
              ['Email', 'Phone Number'][loginMenuIndex]
            }`}
            type="text"
            name={['email', 'phoneNo'][loginMenuIndex]}
            required
          />
          {isEmail && (
            <Input
              placeholder="Enter your password"
              type="password"
              required
              name="password"
            />
          )}
          <div className="tou-check">
            <input type="checkbox" className="checkbox" />
            <p className="checkbox-text">Keep me signed in</p>
          </div>
          <Button text="Login" type="submit" loading={fetching} />
          <p className="forgot-password">
            <Link href="/forgot-password">Forgot Password?</Link>
          </p>
          <p className="account-info">
            Don&apos;t have an account?{' '}
            <Link href="/signup">
              <span className="login-btn">Sign Up</span>
            </Link>
          </p>
        </div>
        <Footer />
      </div>
    </form>
  );
};

export default Login;
