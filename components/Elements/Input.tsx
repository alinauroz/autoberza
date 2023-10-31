import '../../styles/elements.css';

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
  prefill?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  placeholder,
  style,
  type,
  onFocus,
  onBlur,
  onChange,
  addon,
  name,
  value,
  defaultValue,
  required,
  disabled = false,
  prefill,
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
        defaultValue={defaultValue || prefill?.[name || '']}
        required={required}
        disabled={disabled}
        onChange={onChange}
      />
      {addon && <div className="addon">{addon}</div>}
    </div>
  );
};

export default Input;
