export const TextAreas = ({
  name,
  rows,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
}) => (
  <label className="text-black-500 font-semibold">
    {name}
    <textarea
      name={name.toLowerCase()}
      rows={rows}
      className="textarea"
      placeholder={placeholder}
      required
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </label>
);
