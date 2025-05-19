import { FC } from 'react';

import { IconProps } from '../types';

export const Burger: FC<IconProps> = ({
  className,
  viewBox = '0 0 24 24',
  width = '24',
  height = '24',
  dataTestid,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      data-testid={dataTestid}
    >
      <path
        d="M1.5 2.5H29"
        stroke="#006F7E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M14 8.5L29 8.5"
        stroke="#006F7E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M8 14.5L29 14.5"
        stroke="#006F7E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M1.5 20.5H29"
        stroke="#006F7E"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
