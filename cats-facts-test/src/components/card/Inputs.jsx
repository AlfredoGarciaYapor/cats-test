import React  from "react";

const Input = ({ value, label, name, placeholder, type, onChange }) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      className="form-control p-1 rounded ml-1"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default Input;