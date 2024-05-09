import * as React from "react";

function EmptyCheckComponent(props) {
  return (
    <svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.5 18c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 01.5 16V2c0-.55.196-1.02.587-1.413A1.926 1.926 0 012.5 0h14c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0116.5 18h-14zm0-2h14V2h-14v14z"
        fill="#494949"
      />
    </svg>
  );
}

export default EmptyCheckComponent;

