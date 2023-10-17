import '../../Styles/elements.css';

interface Props {
  label?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  type?: string;
  // icon?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  addon?: string;
}

const Input = ({
  label,
  placeholder,
  style,
  type,
  onFocus,
  onBlur,
  addon,
}: Props) => {
  return (
    <div className="inputs">
      {label && <label className="label">{label}</label>}
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        style={style}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {addon && <div className="addon">{addon}</div>}
    </div>
  );
};

export default Input;
