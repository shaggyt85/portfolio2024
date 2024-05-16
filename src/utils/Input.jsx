export const Input = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  className,
}) => (
  <label className="text-black-500 font-semibold">
    {name}
    <input
      type={type}
      name={name.toLowerCase()}
      className={className}
      placeholder={placeholder}
      required
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </label>
);
