import React from 'react';

const Input = (props) => {
  const {
    inputClass,
    ...inputProps,
  } = props;

  return (
    <input className={inputClass} {...inputProps} />
  );
}

export default Input;
