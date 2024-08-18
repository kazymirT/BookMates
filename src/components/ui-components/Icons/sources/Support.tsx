import { FC } from 'react';

import { IconProps } from '../types';

export const Support: FC<IconProps> = ({
  className,
  viewBox = '0 0 24 24',
  width = '24',
  height = '24',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <path d="M20 2H8C6.9 2 6 2.9 6 4V6H4C2.9 6 2 6.9 2 8V22L6 18H16C17.1 18 18 17.1 18 16V14L22 18V4C22 2.9 21.1 2 20 2ZM8 13C7.4485 13 7 12.5515 7 12V4C7 3.4485 7.4485 3 8 3H20C20.5515 3 21 3.4485 21 4V15.586L18.707 13.293L18.414 13H8ZM17 16C17 16.5515 16.5515 17 16 17H5.586L5.293 17.293L3 19.586V8C3 7.4485 3.4485 7 4 7H6V12C6 13.1 6.9 14 8 14H17V16Z" />
    </svg>
  );
};
