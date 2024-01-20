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
import { FormattedMessage, useIntl } from 'react-intl';
import LangSwitch from '../Elements/LangSwitch';
import LanguageIcon from '@/public/assets/common/language.svg';
import { signOut } from 'next-auth/react';

interface Props {
  style?: React.CSSProperties;
}

const Header = ({ style }: Props) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const intl = useIntl();
  const loggedIn = isLoggedIn();
  const [selectedLanguage, setSelectedLanguage] = React.useState(
    Cookies.get('locale')
  );
  const [showLanguages, setShowLanguages] = React.useState(false);

  React.useEffect(() => {
    const hide = () => setShowLanguages(false);
    window.addEventListener('click', hide);
    return () => window.removeEventListener('click', hide);
  }, []);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    Cookies.set('locale', language);
    setShowLanguages(false);
    window.location.reload();
  };

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
            className={`bg-black text-white left-0 p-5 top-[53px] h-full w-full z-50 ${
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
                  onClick={async () => {
                    await signOut();
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
                  onClick={async () => {
                    await signOut();
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

        {/* Language DD */}
        <div className="relative flex items-center md:hidden mr-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowLanguages(!showLanguages);
            }}
            className={` text-white text-sm font-semibold md:p-1.5 p-1 md:rounded-md rounded inline-flex gap-2 items-center`}
          >
            <Image src={LanguageIcon} alt="" className="w-6" />
            {selectedLanguage === 'en' ? 'En' : 'Mn'}
          </button>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setShowLanguages(!showLanguages);
            }}
            className={`absolute z-40 top-8 left-0 mt-2 bg-black rounded overflow-hidden ${
              !showLanguages ? 'hidden' : 'block'
            }`}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLanguageChange('en');
              }}
              className="block px-4 py-2 text-sm text-white hover:text-gray-300 border-b border-gray-800 w-full text-left"
            >
              <FormattedMessage defaultMessage="English" id="header.english" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLanguageChange('mr');
              }}
              className="block px-4 py-2 text-sm text-white hover:text-gray-300 w-full text-left"
            >
              <FormattedMessage
                defaultMessage="Montenegrin"
                id="header.montenegrin"
              />
            </button>
          </div>
        </div>

        <Link href="/post-ad">
          <ButtonGroup
            type="button"
            text={intl.formatMessage({
              defaultMessage: 'Post an Ad',
              id: 'header.header-ad',
            })}
            icon={Dropdown}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
