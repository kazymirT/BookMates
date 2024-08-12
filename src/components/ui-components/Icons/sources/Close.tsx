import { FC } from 'react';

import { IconProps } from '../types';

export const Close: FC<IconProps> = ({
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
      <path d="M3.99997 20.707L12 12.707L20 20.707L20.707 20L12.707 12L20.707 4.00003L20 3.29303L12 11.293L3.99997 3.29303L3.29297 4.00003L11.293 12L3.29297 20L3.99997 20.707Z" />
    </svg>
  );
};
