import React from 'react';
import AuthInput from './Elements/Input';

function Login() {
  return (
    <div className="w-4/5 mx-auto">
      <form>
        <div className="mt-8">
          <AuthInput placeholder="Email" name="email" />
        </div>
        <div className="mt-4">
          <AuthInput placeholder="Password" name="password" />
        </div>
      </form>
    </div>
  );
}

export default Login;
