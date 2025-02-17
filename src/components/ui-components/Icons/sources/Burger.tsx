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
        d="M0.1 2H29"
        stroke="#006F7E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M12 10H29"
        stroke="#006F7E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M0.1 17H29"
        stroke="#006F7E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
