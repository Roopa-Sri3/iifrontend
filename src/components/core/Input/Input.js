import React from 'react';

function Input (props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      onChange={props.onChange}
    />
  );
}

export default Input;
