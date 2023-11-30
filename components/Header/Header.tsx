'use client';
import React from 'react';
import '../../styles/header.css';
import Logo from '@/components/Elements/Logo';
import ButtonGroup from '../Elements/ButtonGroup';
import MenuBar from '@/public/assets/common/menu-burger.svg';
import Dropdown from '@/public/assets/common/dropdown-icon.svg';
import Image from 'next/image';
import { isLoggedIn } from '@/utils/auth';
import Cookies from 'js-cookie';
import Link from 'next/link';
import CancelBtn from '@/public/assets/common/searchPage/white-cross.svg';
import { FormattedMessage } from 'react-intl';
import LangSwitch from '../Elements/LangSwitch';

interface Props {
  style?: React.CSSProperties;
}

const Header = ({ style }: Props) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const loggedIn = isLoggedIn();

  return (
    <div className="header" style={style}>
      <div className="logo-panel">
        <div>
          <div className="min-w-[24px] flex items-center justify-center">
            <Image
              onClick={() => setShowMenu(!showMenu)}
              src={showMenu ? CancelBtn : MenuBar}
              alt=""
              className="cursor-pointer md:hidden"
            />
          </div>
          <div
            className={`bg-black text-white left-0 p-5 top-[53px] h-full w-full z-10 ${
              !showMenu ? 'hidden' : 'fixed'
            }`}
          >
            {isLoggedIn() ? (
              <div className="flex gap-4 text-xl ml-4 font-bold flex-col ">
                <LangSwitch />
                <Link href="/profile">
                  <span className="cursor-pointer mt-4">
                    <FormattedMessage
                      defaultMessage="Profile"
                      id="header.profile"
                    />
                  </span>
                </Link>
                <Link href="/manage-ads">
                  <span className="cursor-pointer mt-4">
                    <FormattedMessage
                      defaultMessage="Manage Ads"
                      id="header.manage"
                    />
                  </span>
                </Link>
                <span
                  className="cursor-pointer mt-4"
                  onClick={() => {
                    Cookies.remove('token');
                    window.location.reload();
                  }}
                >
                  <FormattedMessage
                    defaultMessage="Log Out"
                    id="header.logout"
                  />
                </span>
              </div>
            ) : (
              <div className="flex gap-4 text-xl ml-4 font-bold flex-col">
                <LangSwitch />
                <span className="cursor-pointer mt-4">
                  <Link href="/login">
                    <FormattedMessage
                      defaultMessage="Log In"
                      id="header.login"
                    />
                  </Link>
                </span>
                <span className="cursor-pointer mt-4">
                  <Link href="/register">
                    <FormattedMessage
                      defaultMessage="Sign Up"
                      id="header.signup"
                    />
                  </Link>
                </span>
              </div>
            )}
          </div>
        </div>
        <Link href={'/'}>
          <Logo />
        </Link>
      </div>
      <div className="flex gap-4">
        <div className="text-sm md:text-normal text-white hidden md:block">
          <div className="p-1.5 md:p-2">
            {loggedIn ? (
              <div className="flex gap-4">
                <LangSwitch />
                <Link href="/profile">
                  <span className="cursor-pointer mt-4">
                    <FormattedMessage
                      defaultMessage="Profile"
                      id="header.profile"
                    />
                  </span>
                </Link>
                <Link href="/manage-ads">
                  <span className="cursor-pointer">
                    <FormattedMessage
                      defaultMessage="Manage Ads"
                      id="header.manage"
                    />
                  </span>
                </Link>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    Cookies.remove('token');
                    window.location.reload();
                  }}
                >
                  <FormattedMessage
                    defaultMessage="Log Out"
                    id="header.logout"
                  />
                </span>
              </div>
            ) : (
              <div className="flex gap-4">
                <LangSwitch />
                <span>
                  <Link href="/login">
                    <FormattedMessage
                      defaultMessage="Log In"
                      id="header.login"
                    />
                  </Link>
                </span>
                <span className="hidden md:flex">
                  <Link href="/register">
                    <FormattedMessage
                      defaultMessage="Sign Up"
                      id="header.signup"
                    />
                  </Link>
                </span>
              </div>
            )}
          </div>
        </div>

        <Link href="/post-ad">
          <ButtonGroup type="button" text="Post an Ad" icon={Dropdown} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
