import * as React from "react";
const SvgFacebook = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <defs>
      <clipPath id="Facebook_svg__a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#Facebook_svg__a)">
      <path d="M19.964 3H5.036A2.036 2.036 0 0 0 3 5.036v14.928A2.036 2.036 0 0 0 5.036 22h5.821v-6.46H8.185V12.5h2.672v-2.317c0-2.636 1.569-4.092 3.973-4.092a16.187 16.187 0 0 1 2.355.205v2.587h-1.327a1.52 1.52 0 0 0-1.714 1.643V12.5h2.916l-.467 3.04h-2.45V22h5.821A2.036 2.036 0 0 0 22 19.964V5.036A2.036 2.036 0 0 0 19.964 3Z" />
    </g>
  </svg>
);
export default SvgFacebook;
