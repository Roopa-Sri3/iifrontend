import React from 'react';

function Label (props) {
  return (
    <label
      htmlFor={props.htmlFor}
    //   text={props.text}
    //   value={props.value}
    //   onChange={props.onChange}
    >{props.text}</label>
  );
}

export default Label;
