import Link from 'next/link';
import React from 'react';
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
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-5 py-5 w-full ">
      <Link href={'#'} className="w-full">
        <div className="flex items-center justify-center gap-5 border hover:bg-gray-200 active:bg-gray-300 border-gray-300 rounded-full py-4">
          <Image src={fbIcon} alt="Facebook logo" className="w-[40px]" />
          <p className="text-gray-500 font-bold md:text-lg">
            <FormattedMessage
              defaultMessage={facebookText}
              id="loginsignupgooglefacebook.facebook"
            />
          </p>
        </div>
      </Link>
      <Link href={'#'} className=" w-full">
        <div className="flex items-center justify-center gap-5 border hover:bg-gray-200 active:bg-gray-300 border-gray-300 rounded-full py-4">
          <Image src={googleIcon} alt="Google logo" className="w-[40px]" />
          <p className="text-gray-500 font-bold md:text-lg">
            <FormattedMessage
              defaultMessage={googleText}
              id="loginsignupgooglefacebook.google"
            />
          </p>
        </div>
      </Link>
    </div>
  );
};

export default LoginOption;
