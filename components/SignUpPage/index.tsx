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
import { FormattedMessage } from 'react-intl';

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

const SignUp = () => {
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
          <Input label="Name" name="name" placeholder="Enter your full name" />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email id"
          />
          <Input
            label="Mobile"
            name="phone"
            placeholder="+382 Enter your mobile number"
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            name="password"
          />
          <Button text="Sign Up" type="submit" loading={fetching} />
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
