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
}

const Input = ({
  label,
  placeholder,
  style,
  type,
  name,
  value,
  defaultValue,
  required,
}: Props) => {
  return (
    <div className="inputs">
      <label className="label">{label}</label>
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        style={style}
        name={name}
        value={value}
        defaultValue={defaultValue}
        required={required}
      />
    </div>
  );
};

export default Input;
