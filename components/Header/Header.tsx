'use client';

import '../../styles/header.css';
import Logo from '@/components/Elements/Logo';
import ButtonGroup from '../Elements/ButtonGroup';
import MenuBar from '@/public/assets/common/menu-burger.svg';
import Dropdown from '@/public/assets/common/dropdown-icon.svg';
import Image from 'next/image';
import { isLoggedIn } from '@/utils/auth';
import Cookies from 'js-cookie';
import Link from 'next/link';

interface Props {
  style?: React.CSSProperties;
}

const Header = ({ style }: Props) => {
  const loggedIn = isLoggedIn();

  return (
    <div className="header" style={style}>
      <div className="logo-panel">
        {false && <Image src={MenuBar} alt="" className="menu" />}
        <Logo />
      </div>
      <div className="flex gap-4">
        <div className="text-sm md:text-normal text-white">
          <div className="p-1.5 md:p-2">
            {loggedIn ? (
              <span
                className="cursor-pointer"
                onClick={() => {
                  Cookies.remove('token');
                  window.location.reload();
                }}
              >
                Log Out
              </span>
            ) : (
              <div className="flex gap-4">
                <span>
                  <Link href="/login">Log In</Link>
                </span>
                <span className="hidden md:flex">
                  <Link href="/register">Sign Up</Link>
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
