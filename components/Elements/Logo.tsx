import Image from 'next/image';
import '../../styles/elements.css';
import LogoImg from '@/public/assets/common/logo.svg';

interface Props {
  style?: React.CSSProperties;
}

const Logo = ({ style }: Props) => {
  return (
    <div className="" style={style}>
      <Image
        src={LogoImg}
        alt=""
        className="lg:w-[160px] lg:h-[48px] w-[90px]"
        // style={{ ...style, height: 48, width: 160 }}
      />
    </div>
  );
};

export default Logo;
