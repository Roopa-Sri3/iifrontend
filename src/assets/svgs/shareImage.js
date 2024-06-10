
import * as React from "react";

function ShareComponent({
  fillColor = "#D0D5DD",
  ...otherProps
}) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"  {...otherProps}>
      <mask id="mask0_63_695" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect width="20" height="20" fill="#D0D5DD"/>
      </mask>
      <g mask="url(#mask0_63_695)">
        <path d="M15 18.3334C14.3056 18.3334 13.7153 18.0904 13.2292 17.6042C12.7431 17.1181 12.5 16.5279 12.5 15.8334C12.5 15.7362 12.5069 15.6355 12.5208 15.5313C12.5347 15.4272 12.5556 15.3334 12.5833 15.2501L6.70833 11.8334C6.47222 12.0417 6.20833 12.2049 5.91667 12.323C5.625 12.4411 5.31944 12.5001 5 12.5001C4.30556 12.5001 3.71528 12.257 3.22917 11.7709C2.74306 11.2848 2.5 10.6945 2.5 10.0001C2.5 9.30564 2.74306 8.71536 3.22917 8.22925C3.71528 7.74314 4.30556 7.50008 5 7.50008C5.31944 7.50008 5.625 7.55911 5.91667 7.67716C6.20833 7.79522 6.47222 7.95841 6.70833 8.16675L12.5833 4.75008C12.5556 4.66675 12.5347 4.573 12.5208 4.46883C12.5069 4.36466 12.5 4.26397 12.5 4.16675C12.5 3.4723 12.7431 2.88203 13.2292 2.39591C13.7153 1.9098 14.3056 1.66675 15 1.66675C15.6944 1.66675 16.2847 1.9098 16.7708 2.39591C17.2569 2.88203 17.5 3.4723 17.5 4.16675C17.5 4.86119 17.2569 5.45147 16.7708 5.93758C16.2847 6.42369 15.6944 6.66675 15 6.66675C14.6806 6.66675 14.375 6.60772 14.0833 6.48966C13.7917 6.37161 13.5278 6.20842 13.2917 6.00008L7.41667 9.41675C7.44444 9.50008 7.46528 9.59383 7.47917 9.698C7.49306 9.80216 7.5 9.90286 7.5 10.0001C7.5 10.0973 7.49306 10.198 7.47917 10.3022C7.46528 10.4063 7.44444 10.5001 7.41667 10.5834L13.2917 14.0001C13.5278 13.7917 13.7917 13.6286 14.0833 13.5105C14.375 13.3924 14.6806 13.3334 15 13.3334C15.6944 13.3334 16.2847 13.5765 16.7708 14.0626C17.2569 14.5487 17.5 15.139 17.5 15.8334C17.5 16.5279 17.2569 17.1181 16.7708 17.6042C16.2847 18.0904 15.6944 18.3334 15 18.3334ZM15 5.00008C15.2361 5.00008 15.434 4.92022 15.5938 4.7605C15.7535 4.60078 15.8333 4.40286 15.8333 4.16675C15.8333 3.93064 15.7535 3.73272 15.5938 3.573C15.434 3.41328 15.2361 3.33341 15 3.33341C14.7639 3.33341 14.566 3.41328 14.4062 3.573C14.2465 3.73272 14.1667 3.93064 14.1667 4.16675C14.1667 4.40286 14.2465 4.60078 14.4062 4.7605C14.566 4.92022 14.7639 5.00008 15 5.00008ZM5 10.8334C5.23611 10.8334 5.43403 10.7536 5.59375 10.5938C5.75347 10.4341 5.83333 10.2362 5.83333 10.0001C5.83333 9.76397 5.75347 9.56605 5.59375 9.40633C5.43403 9.24661 5.23611 9.16675 5 9.16675C4.76389 9.16675 4.56597 9.24661 4.40625 9.40633C4.24653 9.56605 4.16667 9.76397 4.16667 10.0001C4.16667 10.2362 4.24653 10.4341 4.40625 10.5938C4.56597 10.7536 4.76389 10.8334 5 10.8334ZM15 16.6667C15.2361 16.6667 15.434 16.5869 15.5938 16.4272C15.7535 16.2674 15.8333 16.0695 15.8333 15.8334C15.8333 15.5973 15.7535 15.3994 15.5938 15.2397C15.434 15.0799 15.2361 15.0001 15 15.0001C14.7639 15.0001 14.566 15.0799 14.4062 15.2397C14.2465 15.3994 14.1667 15.5973 14.1667 15.8334C14.1667 16.0695 14.2465 16.2674 14.4062 16.4272C14.566 16.5869 14.7639 16.6667 15 16.6667Z" fill={fillColor}/>
      </g>
    </svg>
  );
}

export default ShareComponent;
