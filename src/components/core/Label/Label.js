import React from 'react';

function Label ({
  htmlFor,
  text,
  children,
  className,
  required,
  ...restLabelProps
}) {
  return (
    <label
      htmlFor={htmlFor}
      {...restLabelProps}
    //   text={props.text}
    //   value={props.value}
    //   onChange={props.onChange}
    >{text}</label>
  );
}

export default Label;

// import React from 'react';

// const Label = ({
//   htmlFor,
//   children,
//   className,
//   required,
//   ...restLabelProps
// }) => {
//   return (
//     <label
//       htmlFor={htmlFor}
//       className={className}
//       {...restLabelProps}
//     >
//       {children}
//       {required && <span className="required-asterisk">*</span>}
//     </label>
//   );
// };

// export default Label;
