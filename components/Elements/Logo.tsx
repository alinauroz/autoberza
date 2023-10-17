import Image from 'next/image';
import '../../styles/elements.css';
import LogoImg from '@/public/assets/common/logo.svg';

interface Props {
  style?: React.CSSProperties;
}

const Logo = ({ style }: Props) => {
  return (
    <div className="logo" style={style}>
      <Image src={LogoImg} alt="" className="logo-img" style={style} />
    </div>
  );
};

export default Logo;
