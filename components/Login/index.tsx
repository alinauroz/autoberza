'use client';

import React, { useState } from 'react';
import '../../styles/login.css';
import Button from '../Elements/Button';
import Header from '../Header/Header';
import Input from '../Elements/Input';
import Menu from '../Elements/Menu';
import { signIn, signOut } from 'next-auth/react';

const Login = () => {
  const [loginMenuIndex, setLoginMenuIndex] = useState(0);

  const isEmail = React.useMemo(() => {
    return loginMenuIndex == 0;
  }, [loginMenuIndex]);

  return (
    <form action="">
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
          />
          {isEmail && (
            <Input placeholder="Enter your password" type="password" />
          )}
          <div className="tou-check">
            <input type="checkbox" className="checkbox" />
            <p className="checkbox-text">Keep me signed in</p>
          </div>
          <Button text="Login" type="submit" />
          <p className="forgot-password">Forgot Password?</p>
          <p className="account-info">
            Don&apos;t have an account?{' '}
            <span className="login-btn">Sign Up</span>
          </p>
        </div>
      </div>
      <div className="help">
        <a href="#">Help!</a>
      </div>

      <input type="button" onClick={() => signOut()} value={'Sign Out'} />

      <form action="http://localhost:3000/api/auth/signin/google" method="POST">
        <input
          type="hidden"
          name="csrfToken"
          value="096daa01747ab1c2a4b40a7322d367a85745ecb1656dbcf7c699348f226a03ca"
        />
        <input type="hidden" name="callbackUrl" value="http://localhost:3000" />
        <button type="submit" className="button" style={{}}>
          <img
            loading="lazy"
            height="24"
            width="24"
            id="provider-logo-dark"
            src="https://authjs.dev/img/providers/google.svg"
          />
          <span>Sign in with Google</span>
        </button>
      </form>
    </form>
  );
};

export default Login;
