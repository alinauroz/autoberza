import '../../Styles/elements.css';

interface Props {
  label?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  type?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  required?: boolean;
  // icon?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  addon?: string;
  disabled?: boolean;
}

const Input = ({
  label,
  placeholder,
  style,
  type,
  onFocus,
  onBlur,
  addon,
  name,
  value,
  defaultValue,
  required,
  disabled = false,
}: Props) => {
  return (
    <div className="inputs">
      {label && <label className="inputs__label">{label}</label>}
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        style={style}
        onFocus={onFocus}
        onBlur={onBlur}
        name={name}
        value={value}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
      />
      {addon && <div className="addon">{addon}</div>}
    </div>
  );
};

export default Input;
