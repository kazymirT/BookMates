import { FC } from 'react';

import { IconProps } from '../types';

export const Cart: FC<IconProps> = ({
  className,
  viewBox = '0 0 16 16',
  width = '16',
  height = '16',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <path d="M2 20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V7H17.4045C16.9325 4.444 14.691 2.5 12 2.5C9.309 2.5 7.0675 4.444 6.5955 7H2V20ZM12 3.5C14.1375 3.5 15.9275 4.999 16.384 7H7.616C8.0725 4.999 9.8625 3.5 12 3.5ZM6.5 8V11H7.5V8H16.5V11H17.5V8H21V20C21 20.5515 20.5515 21 20 21H4C3.4485 21 3 20.5515 3 20V8H6.5Z" />
    </svg>
  );
};
