import * as React from "react";

function FilterComponent(props) {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      {...props}
    >
      <path
        d="M5.888 13.687a.813.813 0 01-.597-.24.808.808 0 01-.241-.596V7.833L.185 1.643c-.21-.278-.241-.57-.094-.877.146-.307.402-.46.765-.46h11.742c.363 0 .619.153.765.46.147.306.116.599-.094.878L8.404 7.833v5.018c0 .237-.08.435-.24.595-.161.16-.36.241-.598.241H5.888zm.839-6.44l4.152-5.269H2.575l4.152 5.27z"
        fill="#6F7683"
      />
    </svg>
  );
}

export default FilterComponent;
