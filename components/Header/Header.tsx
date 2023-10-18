'use client';

import '../../styles/header.css';
import Logo from '@/components/Elements/Logo';
import ButtonGroup from '../Elements/ButtonGroup';
import MenuBar from '@/public/assets/common/menu-burger.svg';
import Dropdown from '@/public/assets/common/dropdown-icon.svg';
import Image from 'next/image';
import { isLoggedIn } from '@/utils/auth';

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
        <span className="float-right text-white">
          <p>{loggedIn ? <span>Log Out</span> : <span>Log iN </span>}</p>
        </span>
      </div>
      <div>
        <ButtonGroup text="Post an Ad" icon={Dropdown} />
      </div>
    </div>
  );
};

export default Header;
