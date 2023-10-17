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

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      error
      token
    }
  }
`;

const Login = () => {
  const [{ fetching, error, data }, login] = useMutation(LOGIN);
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
            router.push('/');
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
          <p className="forgot-password">Forgot Password?</p>
          <p className="account-info">
            Don&apos;t have an account?{' '}
            <span className="login-btn">Sign Up</span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
