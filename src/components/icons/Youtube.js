import * as React from "react";
const SvgYouTube = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <defs>
      <clipPath id="YouTube_svg__a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#YouTube_svg__a)">
      <path d="m10.922 10.214 4.037 2.294-4.037 2.292ZM22 5.036v14.928A2.036 2.036 0 0 1 19.964 22H5.036A2.036 2.036 0 0 1 3 19.964V5.036A2.036 2.036 0 0 1 5.036 3h14.928A2.036 2.036 0 0 1 22 5.036Zm-1.781 7.477a20.379 20.379 0 0 0-.322-3.741A1.936 1.936 0 0 0 18.531 7.4a45.542 45.542 0 0 0-6.031-.329 45.542 45.542 0 0 0-6.031.327A1.936 1.936 0 0 0 5.1 8.772a21.867 21.867 0 0 0 0 7.481 1.908 1.908 0 0 0 1.366 1.353 46.136 46.136 0 0 0 6.031.322 45.542 45.542 0 0 0 6.031-.327 1.908 1.908 0 0 0 1.372-1.352 20.316 20.316 0 0 0 .319-3.736Z" />
    </g>
  </svg>
);
export default SvgYouTube;
