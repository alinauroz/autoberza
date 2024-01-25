import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import fbIcon from '@/public/facebook.svg';
import googleIcon from '@/public/google.svg';
import Image from 'next/image';
import { FormattedMessage, useIntl } from 'react-intl';

const LoginOption = ({
  facebookText,
  googleText,
}: {
  facebookText: string;
  googleText: string;
}) => {
  const [csrf, setCsrf] = useState();

  useEffect(() => {
    fetch('/api/auth/csrf').then((d) => {
      d.json().then((r) => {
        setCsrf(r.csrfToken);
      });
    });
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-2 justify-between gap-2 py-5 w-full ">
      <div className="w-full my-2 lg:my-0">
        <form action="/api/auth/signin/facebook" method="POST">
          <input type="hidden" name="csrfToken" value={csrf} />
          <input type="hidden" name="callbackUrl" value="/" />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-5 border hover:bg-gray-200 active:bg-gray-300 border-gray-300 rounded-full py-4"
          >
            <Image src={fbIcon} alt="Facebook logo" className="w-[40px]" />
            <p className="text-gray-500 font-bold md:text-lg">
              <FormattedMessage
                defaultMessage={facebookText}
                id="loginsignupgooglefacebook.facebook"
              />
            </p>
          </button>
        </form>
      </div>
      <form action="/api/auth/signin/google" method="POST">
        <input type="hidden" name="csrfToken" value={csrf} />
        <input type="hidden" name="callbackUrl" value="/" />
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-5 border hover:bg-gray-200 active:bg-gray-300 border-gray-300 rounded-full py-4"
        >
          <Image src={googleIcon} alt="Google logo" className="w-[40px]" />
          <p className="text-gray-500 font-bold md:text-lg">
            <FormattedMessage
              defaultMessage={googleText}
              id="loginsignupgooglefacebook.google"
            />
          </p>
        </button>
      </form>
    </div>
  );
};

export default LoginOption;
