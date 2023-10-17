import { useState } from 'react';
import '../../styles/elements.css';

interface Props {
  text: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  onClick?: () => void;
}

const Button = ({ text, style, type, loading, onClick }: Props) => {
  return (
    <button className="btn" style={style} type={type} onClick={onClick}>
      {loading ? '...' : text}
    </button>
  );
};

export default Button;
