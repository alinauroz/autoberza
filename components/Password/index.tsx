'use client';

import fdtojson from '@/utils/fdtojson';
import gql from 'graphql-tag';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { useMutation } from 'urql';
import Header from '../Header/Header';
import Input from '../Elements/Input';
import Button from '../Elements/Button';
import '@/styles/verification.css';

const SEND_VERIFICATION_EMAIL = gql`
  mutation SEND_VERIFICATION($email: String!) {
    sendVerificationEmail(email: $email) {
      message
    }
  }
`;

function Verification({}) {
  const searchParams = useSearchParams();
  const [{ fetching }, send] = useMutation(SEND_VERIFICATION_EMAIL);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email } = fdtojson(new FormData(e.target as HTMLFormElement));
    send({ email }).then(() => toast.success('Verification email sent'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-verification">
        <div className="header">
          <Header />
        </div>
        <div className="verification">
          <div className="heading">Email Verification!</div>
          <p className="my-2">
            A verification email has been sent to your email address. Check your
            inbox. If you have not received any email, try resending
            verification email.
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
            <Button text="Send Again" type="submit" loading={fetching} />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Verification;
