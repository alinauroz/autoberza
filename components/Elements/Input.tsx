import '../../Styles/elements.css';

interface Props {
  label?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  type?: string;
  // icon?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  addOn?: string;
}

const Input = ({
  label,
  placeholder,
  style,
  type,
  onFocus,
  onBlur,
  addOn,
}: Props) => {
  return (
    <div className="inputs">
      <label className="label">{label}</label>
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        style={style}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
