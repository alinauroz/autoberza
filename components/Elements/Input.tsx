import '../../Styles/elements.css';

interface Props {
  label?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  type?: string;
  name?: string;
  // icon?: string;
}

const Input = ({ label, placeholder, style, type, name }: Props) => {
  return (
    <div className="inputs">
      <label className="label">{label}</label>
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        style={style}
        name={name}
      />
    </div>
  );
};

export default Input;
