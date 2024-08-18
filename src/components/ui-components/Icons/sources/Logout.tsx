import { FC } from 'react';

import { IconProps } from '../types';

export const Logout: FC<IconProps> = ({
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
      <path d="M15 11.5L4.70697 11.5L9.20697 7.00003L8.49997 6.29303L2.79297 12L8.49997 17.707L9.20697 17L4.70697 12.5L15 12.5L15 11.5Z" />
      <path d="M15.5 21.5L20 21.5C20.827 21.5 21.5 20.827 21.5 20L21.5 4C21.5 3.173 20.827 2.5 20 2.5L15.5 2.5L15.5 3.5L20 3.5C20.276 3.5 20.5 3.724 20.5 4L20.5 20C20.5 20.276 20.276 20.5 20 20.5L15.5 20.5L15.5 21.5Z" />
    </svg>
  );
};
