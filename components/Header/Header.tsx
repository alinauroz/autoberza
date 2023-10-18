'use client';

import '../../styles/header.css';
import Logo from '@/components/Elements/Logo';
import ButtonGroup from '../Elements/ButtonGroup';
import MenuBar from '@/public/assets/common/menu-burger.svg';
import Dropdown from '@/public/assets/common/dropdown-icon.svg';
import Image from 'next/image';
import { isLoggedIn } from '@/utils/auth';
import Cookies from 'js-cookie';

interface Props {
  style?: React.CSSProperties;
}

const Header = ({ style }: Props) => {
  const loggedIn = isLoggedIn();

  return (
    <div className="header" style={style}>
      <div className="logo-panel">
        <Image src={MenuBar} alt="" className="menu" />
        <Logo />
      </div>
      <div className="flex gap-3">
        <span className="text-white">
          <p className="p-2">
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
              <>
                <span>Log iN </span> <span>Sign Up </span>
              </>
            )}
          </p>
        </span>
        <ButtonGroup text="Post an Ad" icon={Dropdown} />
      </div>
    </div>
  );
};

export default Header;
