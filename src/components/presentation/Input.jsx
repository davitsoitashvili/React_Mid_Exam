import React from "react";
import PropTypes from "prop-types";

function Input({
  labelClassName,
  labelText,
  type,
  id,
  className,
  placeholder,
  required,
  autofocus,
  name,
}) {
  return (
    <>
      <label htmlFor={id} className={labelClassName}>
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        className={className}
        placeholder={placeholder}
        required={required}
        autofocus={autofocus}
        name={name}
      />
    </>
  );
}

Input.PropType = {
  labelClassName: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string.required,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  autofocus: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export default Input;
