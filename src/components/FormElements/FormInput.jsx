import React from "react";

export default function FormInput({
  id,
  label,
  type,
  value,
  onChange,
  required,
  autoFocus,
  ...rest
}) {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        autoFocus={autoFocus}
        {...rest}
      />
    </div>
  );
}
